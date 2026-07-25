const Prescription = require('../models/Prescription')
const Patient = require('../models/Patient')

// CREATE PRESCRIPTION (Doctor sends)
const createPrescription = async (req, res) => {
  try {
    const {
      patientId,
      patientName,
      doctorName,
      medicines,
      diet,
      note,
    } = req.body

    // Create prescription
    const prescription = new Prescription({
      patientId,
      patientName,
      doctorId: req.user.userId,
      doctorName,
      medicines,
      diet,
      note,
      pharmacistStatus: 'Preparing',
    })

    await prescription.save()

    // Also update patient's data with prescription
    await Patient.findByIdAndUpdate(
      patientId,
      {
        medicines,
        diet,
        prescription: {
          medicines,
          diet,
          note,
          pharmacistStatus: 'Preparing',
        }
      },
      { new: true }
    )

    res.status(201).json({
      message: 'Prescription sent successfully',
      prescription,
    })

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET PRESCRIPTIONS BY PATIENT
const getPrescriptionsByPatient = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({
      patientId: req.params.patientId
    })
    res.status(200).json(prescriptions)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET ALL PRESCRIPTIONS (Pharmacist sees all)
const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
    res.status(200).json(prescriptions)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// UPDATE PHARMACIST STATUS
const updatePharmacistStatus = async (req, res) => {
  try {
    const { pharmacistStatus } = req.body

    const prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      { pharmacistStatus },
      { new: true }
    )

    if (!prescription) {
      return res.status(404).json({ message: 'Prescription not found' })
    }

    // Also update patient's prescription status
    await Patient.findByIdAndUpdate(
      prescription.patientId,
      { 'prescription.pharmacistStatus': pharmacistStatus },
      { new: true }
    )

    res.status(200).json({
      message: 'Pharmacist status updated successfully',
      prescription,
    })

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = {
  createPrescription,
  getPrescriptionsByPatient,
  getAllPrescriptions,
  updatePharmacistStatus,
}
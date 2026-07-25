const Patient = require('../models/Patient')

// GET ALL PATIENTS
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find()
    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET ONE PATIENT
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id)
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' })
    }
    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// CREATE PATIENT
const createPatient = async (req, res) => {
  try {
    const {
      name,
      age,
      condition,
      appointmentDate,
      appointmentTime,
      appointmentDoctor,
      medicines,
      diet,
    } = req.body

    const patient = new Patient({
      name,
      age,
      condition,
      appointmentDate,
      appointmentTime,
      appointmentDoctor,
      medicines,
      diet,
      userId: req.user.userId,
    })

    await patient.save()
    res.status(201).json({ message: 'Patient created successfully', patient })

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// UPDATE PATIENT
const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' })
    }
    res.status(200).json({ message: 'Patient updated successfully', patient })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
}
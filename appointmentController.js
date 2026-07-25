const Appointment = require('../models/Appointment')

// CREATE APPOINTMENT
const createAppointment = async (req, res) => {
  try {
    const {
      patientId,
      patientName,
      doctorId,
      doctorName,
      date,
      slot,
    } = req.body

    const appointment = new Appointment({
      patientId,
      patientName,
      doctorId,
      doctorName,
      date,
      slot,
      status: 'Pending',
    })

    await appointment.save()
    res.status(201).json({
      message: 'Appointment booked successfully',
      appointment,
    })

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET ALL APPOINTMENTS
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
    res.status(200).json(appointments)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET APPOINTMENTS BY PATIENT
const getAppointmentsByPatient = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patientId: req.params.patientId
    })
    res.status(200).json(appointments)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// UPDATE APPOINTMENT STATUS
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' })
    }

    res.status(200).json({
      message: 'Appointment status updated successfully',
      appointment,
    })

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentsByPatient,
  updateAppointmentStatus,
}
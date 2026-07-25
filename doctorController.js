const User = require('../models/User')

// GET ALL DOCTORS
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' }).select('-password')
    res.status(200).json(doctors)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

// GET ONE DOCTOR
const getDoctorById = async (req, res) => {
  try {
    const doctor = await User.findById(req.params.id).select('-password')
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' })
    }
    res.status(200).json(doctor)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
}

module.exports = { getAllDoctors, getDoctorById }
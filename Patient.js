const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    default: '',
  },
  appointmentDate: {
    type: String,
    default: '',
  },
  appointmentTime: {
    type: String,
    default: '',
  },
  appointmentDoctor: {
    type: String,
    default: '',
  },
  medicines: {
    type: [String],
    default: [],
  },
  diet: {
    type: String,
    default: '',
  },
  prescription: {
    type: Object,
    default: null,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true })

module.exports = mongoose.model('Patient', patientSchema)

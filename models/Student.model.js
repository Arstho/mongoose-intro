const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
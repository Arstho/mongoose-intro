const Student = require('./models/Student.model')

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find().then((student) => {
      res.json(student)
    });
  },

  postStudents: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age
    }).then((student) => {
      res.json(student)
    });
  },

  deleteStudentsBiId: (req, res) => {
    Student.findByIdAndDelete(req.params.id).then((student) => {
      res.json(student)
    });
  },

  patchStudentsId: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {name: req.body.name}).then((student) => {
      res.json(student)
    });
  }
};
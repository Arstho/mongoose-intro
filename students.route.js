const { Router } = require("express");
const router = Router();
const { studentsController } = require("./students.controller");

router.get("/student", studentsController.getStudents);
router.post("/student", studentsController.postStudents);
router.patch("/students/:id", studentsController.patchStudentsId);
router.delete("/student/:id", studentsController.deleteStudentsBiId);

module.exports = router;
import Student from "../../models/student.js";


export const deleteStudent = async (req, res) => {
  try {
    const students = req.body;
   // const errors = { noStudentError: String };
    for (var i = 0; i < students.length; i++) {
      var student = students[i];
   
      await Student.findOneAndDelete({ _id: student });
    }
    res.status(200).json({ message: "Student Deleted" });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};
import Faculty from "../../models/faculty.js";

export const deleteFaculty = async (req, res) => {
  try {
    const faculties = req.body;
   // const errors = { noFacultyError: String };
    for (var i = 0; i < faculties.length; i++) {
      var faculty = faculties[i];
 
      await Faculty.findOneAndDelete({ _id: faculty });
    }
    res.status(200).json({ message: "Faculty Deleted" });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};
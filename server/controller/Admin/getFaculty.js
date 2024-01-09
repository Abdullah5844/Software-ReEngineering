
import Faculty from "../../models/faculty.js";


export const getFaculty = async (req, res) => {
  try {
    const { department } = req.body;
    const errors = { noFacultyError: String };
    const faculties = await Faculty.find({ department });
    if (faculties.length === 0) {
      errors.noFacultyError = "No Faculty Found";
      return res.status(404).json(errors);
    }
    res.status(200).json({ result: faculties });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};
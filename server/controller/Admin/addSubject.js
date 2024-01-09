
import Student from "../../models/student.js";
import Subject from "../../models/subject.js";


export const addSubject = async (req, res) => {
    try {
      const { totalLectures, department, subjectCode, subjectName, year } =
        req.body;
      const errors = { subjectError: String };
      const subject = await Subject.findOne({ subjectCode });
      if (subject) {
        errors.subjectError = "Given Subject is already added";
        return res.status(400).json(errors);
      }
  
      const newSubject = await new Subject({
        totalLectures,
        department,
        subjectCode,
        subjectName,
        year,
      });
  
      await newSubject.save();
      const students = await Student.find({ department, year });
      if (students.length !== 0) {
        for (var i = 0; i < students.length; i++) {
          students[i].subjects.push(newSubject._id);
          await students[i].save();
        }
      }
      return res.status(200).json({
        success: true,
        message: "Subject added successfully",
        response: newSubject,
      });
    } catch (error) {
      const errors = { backendError: String };
      errors.backendError = error;
      res.status(500).json(errors);
    }
  };
  
import Student from "../../models/student.js";
import Subject from "../../models/subject.js";
import Attendence from "../../models/attendance.js";


export const markAttendance = async (req, res) => {
  try {
    const { selectedStudents, subjectName, department, year, section } =
      req.body;

    const sub = await Subject.findOne({ subjectName });

    const allStudents = await Student.find({ department, year, section });

    for (let i = 0; i < allStudents.length; i++) {
      const pre = await Attendence.findOne({
        student: allStudents[i]._id,
        subject: sub._id,
      });
      if (!pre) {
        const attendence = new Attendence({
          student: allStudents[i]._id,
          subject: sub._id,
        });
        attendence.totalLecturesByFaculty += 1;
        await attendence.save();
      } else {
        pre.totalLecturesByFaculty += 1;
        await pre.save();
      }
    }

    for (var a = 0; a < selectedStudents.length; a++) {
      const pre = await Attendence.findOne({
        student: selectedStudents[a],
        subject: sub._id,
      });
      if (!pre) {
        const attendence = new Attendence({
          student: selectedStudents[a],
          subject: sub._id,
        });

        attendence.lectureAttended += 1;
        await attendence.save();
      } else {
        pre.lectureAttended += 1;
        await pre.save();
      }
    }
    res.status(200).json({ message: "Attendance Marked successfully" });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};

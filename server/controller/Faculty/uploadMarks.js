
import Test from "../../models/test.js";
import Marks from "../../models/marks.js";



export const uploadMarks = async (req, res) => {
  try {

    const { department, year, section, test, marks } = req.body;

    const errors = { examError: String };

    const existingTest = await Test.findOne({

      department,
      year,
      section,
      test,
    });
    const isAlready = await Marks.find({

      exam: existingTest._id,

    });

    if (isAlready.length !== 0) {
      errors.examError = "MARKS OF THIS EXAM ARE ALREADY UPLOADED ";


      return res.status(400).json(errors);
    }

    for (var i = 0; i < marks.length; i++) {
      const newMarks = await new Marks({
        student: marks[i]._id,
        exam: existingTest._id,
        marks: marks[i].value,
      });
      await newMarks.save();
    }
    res.status(200).json({ message: "Marks uploaded " });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};

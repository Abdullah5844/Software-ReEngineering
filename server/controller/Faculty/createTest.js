
import Test from "../../models/test.js";

export const createTest = async (req, res) => {
  try {
    const { subjectCode, department, year, section, date, test, totalMarks } =
      req.body;
    const errors = { testError: String };
    const existingTest = await Test.findOne({
      subjectCode,
      department,
      year,
      section,
      test,
    });
    if (existingTest) {
      errors.testError = "Given Test is already created";
      return res.status(400).json(errors);
    }

    const newTest = await new Test({
      totalMarks,
      section,
      test,
      date,
      department,
      subjectCode,
      year,
    });

    await newTest.save();
    return res.status(200).json({
      success: true,
      message: "Test added successfully",
      response: newTest,
    });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};


import Notice from "../../models/notice.js";


export const createNotice = async (req, res) => {
  try {
    const { from, content, topic, date, noticeFor } = req.body;

    const errors = { noticeError: String };
    const exisitingNotice = await Notice.findOne({ topic, content, date });
    if (exisitingNotice) {
      errors.noticeError = "Notice already created";
      return res.status(400).json(errors);
    }
    const newNotice = await new Notice({
      from,
      content,
      topic,
      noticeFor,
      date,
    });
    await newNotice.save();
    return res.status(200).json({
      success: true,
      message: "Notice created successfully",
      response: newNotice,
    });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};
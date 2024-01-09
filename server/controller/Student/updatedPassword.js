

import Student from "../../models/student.js";
import bcrypt from "bcryptjs";



export const updatedPassword = async (req, res) => {
    try {
      const { newPassword, confirmPassword, email } = req.body;
      const errors = { mismatchError: String };
      if (newPassword !== confirmPassword) {
        errors.mismatchError =
          "Your password and confirmation password do not match";
        return res.status(400).json(errors);
      }
  
      const student = await Student.findOne({ email });
      let hashedPassword;
      hashedPassword = await bcrypt.hash(newPassword, 10);
      student.password = hashedPassword;
      await student.save();
      if (student.passwordUpdated === false) {
        student.passwordUpdated = true;
        await student.save();
      }
  
      res.status(200).json({
        success: true,
        message: "Password updated successfully",
        response: student,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
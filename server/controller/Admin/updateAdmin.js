
import Admin from "../../models/admin.js";

export const updateAdmin = async (req, res) => {
    try {
      const { name, dob, department, contactNumber, avatar, email } = req.body;
      const updatedAdmin = await Admin.findOne({ email });
      if (name) {
        updatedAdmin.name = name;
        await updatedAdmin.save();
      }
      if (dob) {
        updatedAdmin.dob = dob;
        await updatedAdmin.save();
      }
      if (department) {
        updatedAdmin.department = department;
        await updatedAdmin.save();
      }
      if (contactNumber) {
        updatedAdmin.contactNumber = contactNumber;
        await updatedAdmin.save();
      }
      if (avatar) {
        updatedAdmin.avatar = avatar;
        await updatedAdmin.save();
      }
      res.status(200).json(updatedAdmin);
    } catch (error) {
      const errors = { backendError: String };
      errors.backendError = error;
      res.status(500).json(errors);
    }
  };
  
import Admin from "../../models/admin.js";

export const deleteAdmin = async (req, res) => {
  try {
    const admins = req.body;
    //const errors = { noAdminError: String };
    for (var i = 0; i < admins.length; i++) {
      var admin = admins[i];
   
      await Admin.findOneAndDelete({ _id: admin });
    }
    res.status(200).json({ message: "Admin Deleted" });
  } catch (error) {
    const errors = { backendError: String };
    errors.backendError = error;
    res.status(500).json(errors);
  }
};
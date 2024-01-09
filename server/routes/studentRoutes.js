import express from "express";
import { studentLogin } from "../controller/Student/studentLogin.js";
import { updatedPassword } from "../controller/Student/updatedPassword.js"; 
import { updateStudent } from "../controller/Student/updateStudent.js";
import { testResult } from "../controller/Student/testResult.js";
import { attendance } from "../controller/Student/attendance.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", studentLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateStudent);
router.post("/testresult", auth, testResult);
router.post("/attendance", auth, attendance);

export default router;
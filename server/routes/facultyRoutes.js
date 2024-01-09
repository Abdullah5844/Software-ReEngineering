import express from "express";
import { facultyLogin } from "../controller/Faculty/facultyLogin.js";
import { updatedPassword } from "../controller/Faculty/updatedPassword.js";
import { updateFaculty } from "../controller/Faculty/updateFaculty.js";
import { createTest } from "../controller/Faculty/createTest.js";
import { getTest } from "../controller/Faculty/getTest.js";
import { getStudent } from "../controller/Faculty/getStudent.js";  
import { uploadMarks } from "../controller/Faculty/uploadMarks.js";
import { markAttendance } from "../controller/Faculty/markAttendance.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/login", facultyLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateFaculty);
router.post("/createtest", auth, createTest);
router.post("/gettest", auth, getTest);
router.post("/getstudent", auth, getStudent);
router.post("/uploadmarks", auth, uploadMarks);
router.post("/markattendance", auth, markAttendance);

export default router;

//router files 
import express from "express";
import auth from "../middleware/auth.js";
import {
  getAllStudent,
  getAllFaculty,
  getAllAdmin,
  getAllDepartment,
  getAllSubject,
} from "../controller/Admin/getAll.js";

import { adminLogin } from "../controller/Admin/adminLogin.js";
import { updateAdmin } from "../controller/Admin/updateAdmin.js";
import { addAdmin } from "../controller/Admin/addAdmin.js";
import { addFaculty } from "../controller/Admin/addFaculty.js";
import { getFaculty } from "../controller/Admin/getFaculty.js";
import { addSubject } from "../controller/Admin/addSubject.js";
import { getSubject } from "../controller/Admin/getSubject.js";
import { addStudent } from "../controller/Admin/addStudent.js";
import { getStudent } from "../controller/Admin/getStudent.js";
import { addDepartment } from "../controller/Admin/addDepartment.js";
import { updatedPassword } from "../controller/Admin/updatedPassword.js";
import { getAdmin } from "../controller/Admin/getAdmin.js";
import { deleteAdmin } from "../controller/Admin/deleteAdmin.js";
import { deleteDepartment } from "../controller/Admin/deleteDepartment.js";
import { deleteFaculty } from "../controller/Admin/deleteFaculty.js";
import { deleteStudent } from "../controller/Admin/deleteStudent.js";
import { deleteSubject } from "../controller/Admin/deleteSubject.js";
import { createNotice } from "../controller/Admin/createNotice.js";
import { getNotice } from "../controller/Admin/getNotice.js";


const router = express.Router();

router.post("/login", adminLogin);
router.post("/updatepassword", auth, updatedPassword);
router.get("/getallstudent", auth, getAllStudent);
router.post("/createnotice", auth, createNotice);
router.get("/getallfaculty", auth, getAllFaculty);
router.get("/getalldepartment", auth, getAllDepartment);
router.get("/getallsubject", auth, getAllSubject);
router.get("/getalladmin", auth, getAllAdmin);
router.post("/updateprofile", auth, updateAdmin);
router.post("/addadmin", auth, addAdmin);
router.post("/adddepartment", auth, addDepartment);
router.post("/addfaculty", auth, addFaculty);
router.post("/getfaculty", auth, getFaculty);
router.post("/addsubject", auth, addSubject);
router.post("/getsubject", auth, getSubject);
router.post("/addstudent", auth, addStudent);
router.post("/getstudent", auth, getStudent);
router.post("/getnotice", auth, getNotice);
router.post("/getadmin", auth, getAdmin);
router.post("/deleteadmin", auth, deleteAdmin);
router.post("/deletefaculty", auth, deleteFaculty);
router.post("/deletestudent", auth, deleteStudent);
router.post("/deletedepartment", auth, deleteDepartment);
router.post("/deletesubject", auth, deleteSubject);

export default router;

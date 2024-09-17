import express from "express";
import { login, SignUpController } from "../controller/usercontroller.js";

const router = express.Router();

router.post("/register", SignUpController);
router.post("/login" , login);

export default router;

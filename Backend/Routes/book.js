import express from "express";
import { getBook } from "../controller/bookcontroller.js";

const router = express.Router();

router.get("/allbooks", getBook);

export default router;

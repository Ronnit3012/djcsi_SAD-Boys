import express from "express";
import { getPaints } from "../controllers/paint.js";
const router = express.Router();

router.get('/all', getPaints);

export default router;
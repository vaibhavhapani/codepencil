import express from "express";
import { loadPreviousCode, saveCode } from "../controllers/compilerController";

export const compilerRouter = express.Router();

compilerRouter.post("/save", saveCode);
compilerRouter.post("/load", loadPreviousCode);
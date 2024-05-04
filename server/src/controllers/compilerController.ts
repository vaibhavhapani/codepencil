import { Request, Response } from "express";
import { Code } from "../models/CodeModel";

export const saveCode = async (req: Request, res: Response) => {
  const { fullCode } = req.body;
  try {
    const newCode = await Code.create({ fullCode: fullCode });
    return res.status(201).send({ url: newCode._id, status: "code saved!" });
  } catch (error) {
    return res.status(500).json({ message: "Error saving code: ", error });
  }
};

export const loadPreviousCode = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    const prevCode = await Code.findById(id);
    if (!prevCode) {
      return res.status(404).send({ message: "Code not found..." });
    }
    return res.status(200).send({ prevCode: prevCode.fullCode });
  } catch (error) {
    return res
      .status(501)
      .json({ message: "Error loading previous code...", error });
  }
};

import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleWare = (
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  return res.status(500).json({ error: error.toString() });
};

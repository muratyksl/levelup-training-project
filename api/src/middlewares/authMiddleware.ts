import { NextFunction, Request, Response } from "express";

export const getAuth = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.session.email;
  if (!authToken) {
    return res.status(401).json("Not authorized");
  }
  return next();
};

export const checkRole = (role: "admin" | "trainer" | "customer") => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authRole = req.session.role;
  if (authRole === "admin") {
    return next();
  }
  if (authRole !== role) {
    return res.status(403).json("You have not have permission to do that");
  }
  return next();
};

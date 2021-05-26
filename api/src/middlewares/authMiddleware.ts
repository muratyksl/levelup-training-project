import { NextFunction, Request, Response } from "express";

export const getAuth = (req: Request, res: Response, next: NextFunction) => {
  const authToken = req.session.email;
  if (!authToken) {
    console.log("auth token is not avaible");
    return res.status(401).json("Not authorized");
  }
  return next();
};

export const checkRole = (
  role: "admin" | "trainer" | "customer",
  isHimself = false
) => async (req: Request, res: Response, next: NextFunction) => {
  const authRole = req.session.role;
  const authID = String(req.session.dbID);
  if (authRole === "admin") {
    return next();
  }
  if (isHimself && req.params.id === authID) {
    return next();
  }
  if (authRole !== role) {
    return res.status(403).json("You have not have permission to do that");
  }
  return next();
};

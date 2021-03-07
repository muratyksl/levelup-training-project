import { Router } from "express";
import PingController from "../controllers/ping";

import customerRouter from "./customer";

const router = Router();

router.use("/customer", customerRouter);

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

export default router;

import { Router } from "express";
import PingController from "../controllers/ping";

import customerRouter from "./customer.router";

const router = Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/customers", customerRouter);

export default router;

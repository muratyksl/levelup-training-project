import { Router } from "express";
import PingController from "../controllers/ping";

import customerRouter from "./customer.router";
import trainerRouter from "./trainer.router";

const router = Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/customers", customerRouter);
router.use("/trainers", trainerRouter);

export default router;

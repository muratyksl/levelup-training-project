import express from "express";

import TrainerController from "../controllers/trainer.controller";
import { getAuth, checkRole } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.loginTrainer(req.body).catch(next);
  if (!response) res.status(404).send({ message: "No trainer found" });
  if (!(req.session && response)) {
    throw new Error("Authentication failed");
  }
  req.session.email = response.email;
  req.session.role = response.role;
  return res.send(response);
});

router.use(getAuth);

router.post("/register", checkRole("admin"), async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.createTrainer(req.body).catch(next);
  return res.send(response);
});

router.get("/:id", checkRole("trainer"), async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.getTrainer(req.params.id).catch(next);
  if (!response) res.status(404).send({ message: "No trainer found" });
  return res.send(response);
});

router.get("/", checkRole("trainer"), async (_req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.getTrainers().catch(next);
  return res.send(response);
});

export default router;

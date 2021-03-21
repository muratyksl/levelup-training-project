import express from "express";

import TrainerController from "../controllers/trainer.controller";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.createTrainer(req.body).catch(next);
  return res.send(response);
});
router.post("/login", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.loginTrainer(req.body).catch(next);
  return res.send(response);
});

router.get("/:id", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.getTrainer(req.params.id).catch(next);
  if (!response) res.status(404).send({ message: "No trainer found" });
  return res.send(response);
});

router.get("/", async (_req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.getTrainers().catch(next);
  return res.send(response);
});

export default router;

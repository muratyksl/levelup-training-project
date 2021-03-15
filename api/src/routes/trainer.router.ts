import express from "express";

import TrainerController from "../controllers/trainer.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new TrainerController();
  const response = await controller.getTrainers();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new TrainerController();
  const response = await controller.createTrainer(req.body);
  return res.send(response);
});

router.get("/:id", async (req, res) => {
  const controller = new TrainerController();
  const response = await controller.getTrainer(req.params.id);
  if (!response) res.status(404).send({ message: "No trainer found" });
  return res.send(response);
});

export default router;

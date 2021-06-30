import express from "express";

import TrainerController from "../controllers/trainer.controller";
//import { getAuth, checkRole } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.loginTrainer(req.body).catch(next);
  if (!response) return res.status(404).send({ message: "No trainer found" });
  if (!(req.session && response)) {
    return res.status(401).send({ message: "Auth failed" });
  }
  req.session.email = response.email;
  req.session.role = response.role;
  return res.send(response);
});

router.post("/register", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.createTrainer(req.body).catch(next);
  console.log("register trainer is here", response);
  if (!(req.session && response)) {
    return res.status(401).send({ message: "Auth failed" });
  }
  req.session.email = response.email;
  req.session.role = response.role;
  return res.send(response);
});

router.get("/:id", async (req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.getTrainer(req.params.id).catch(next);
  if (!response) res.status(404).send({ message: "No trainer found" });
  return res.send(response);
});

//router.use(getAuth);
router.get("/", async (_req, res, next) => {
  const controller = new TrainerController();
  const response = await controller.getTrainers().catch(next);
  return res.send(response);
});

export default router;

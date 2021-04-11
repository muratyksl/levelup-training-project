import express from "express";

import CustomerController from "../controllers/customer.controller";
import { checkRole, getAuth } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.createCustomer(req.body).catch(next);
  return res.send(response);
});

router.post("/login", async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.loginCustomer(req.body).catch(next);
  if (!response) res.status(404).send({ message: "Customer not found" });
  if (!(req.session && response)) throw new Error("Auth failed");
  req.session.email = response.email;
  req.session.role = "customer";
  return res.send(response);
});

router.use(getAuth);

router.get("/:id", checkRole("trainer"), async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.getCustomer(req.params.id).catch(next);
  if (!response) res.status(404).send({ message: "No customer found" });
  return res.send(response);
});

router.get("/", checkRole("trainer"), async (_req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.getCustomers().catch(next);
  return res.send(response);
});

export default router;

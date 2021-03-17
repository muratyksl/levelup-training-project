import express from "express";

import CustomerController from "../controllers/customer.controller";

const router = express.Router();

router.get("/", async (_req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.getCustomers().catch(next);
  return res.send(response);
});

router.post("/", async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.createCustomer(req.body).catch(next);
  return res.send(response);
});

router.get("/:id", async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.getCustomer(req.params.id).catch(next);
  if (!response) res.status(404).send({ message: "No customer found" });
  return res.send(response);
});

export default router;

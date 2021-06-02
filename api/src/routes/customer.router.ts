import express from "express";

import CustomerController from "../controllers/customer.controller";
import { checkRole, getAuth } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.createCustomer(req.body).catch(next);
  if (!response) return res.status(404).send({ message: "Customer not found" });
  if (!(req.session && response))
    return res.status(401).send({ message: "Auth failed" });
  req.session.email = response.email;
  req.session.dbID = response.id;
  req.session.role = "customer";
  return res.send(response);
});

router.post("/login", async (req, res, next) => {
  console.log("request body login ", { body: req.body });
  const controller = new CustomerController();
  const response = await controller.loginCustomer(req.body).catch(next);
  console.log("login response is here ", response);
  if (!response) return res.status(404).send({ message: "Customer not found" });
  if (!(req.session && response))
    return res.status(401).send({ message: "Auth failed" });
  req.session.email = response.email;
  req.session.dbID = response.id;
  req.session.role = "customer";
  return res.send(response);
});

router.use(getAuth);

router.put("/:id", checkRole("admin", true), async (req, res, next) => {
  const controller = new CustomerController();
  const response = await controller
    .updateCustomer(req.params.id, req.body)
    .catch(next);

  if (!response) res.status(404).send({ message: "Updating Failed" });
  return res.send(response);
});

router.get("/:id", checkRole("trainer"), async (req, res, next) => {
  const controller = new CustomerController();
  console.log("/:id");
  const response = await controller.getCustomer(req.params.id).catch(next);
  if (!response) res.status(404).send({ message: "No customer found" });
  return res.send(response);
});

router.get("/", async (_req, res, next) => {
  const controller = new CustomerController();
  const response = await controller.getCustomers().catch(next);
  return res.send(response);
});

export default router;

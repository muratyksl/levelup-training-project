import { Router } from "express";

const customerRouter = Router();

interface ICustomer {
  _id: String;
  name: String;
  email: String;
  age: Number;
  weight: Number;
  height: Number;
}

customerRouter.get("/", (req, res) => {
  const furkan: ICustomer = {
    _id: "324324324",
    name: "Furkan Firuz",
    email: "furkan@gmail.com",
    age: 24,
    weight: 88,
    height: 183,
  };
  return res.json([furkan]);
});

export default customerRouter;

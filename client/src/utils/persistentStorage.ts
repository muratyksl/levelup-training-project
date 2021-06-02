import Cookies from "js-cookie";
import { ICustomer } from "../types/customerTypes";
type IRole = "customer" | "admin" | "trainer";

export const setAuthToken = (role: IRole) => {
  Cookies.set("Auth", role, { expires: 1 });
};

export const getAuthToken = () => {
  return Cookies.get("Auth");
};

export const removeAuthToken = () => {
  Cookies.remove("Auth");
};

export const setAuthCustomer = (authCustomer: ICustomer) => {
  const customer = JSON.stringify(authCustomer);
  localStorage.setItem("customer", customer);
};

export const getAuthCustomer = (): ICustomer | null => {
  const customer = localStorage.getItem("customer");
  if (!customer) return null;
  console.log("get auth customer ", JSON.parse(customer));
  return JSON.parse(customer);
};

export const removeAuthCustomer = () => {
  localStorage.removeItem("customer");
};

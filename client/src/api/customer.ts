import request from "../utils/request";
import { AxiosResponse } from "axios";
import { ICustomer } from "../types/customerTypes";

export const getAllCustomers = (): Promise<AxiosResponse<ICustomer[]>> => {
  return request.get<ICustomer[]>("/customers");
};

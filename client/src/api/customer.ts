import request from "../utils/request";
import { AxiosResponse } from "axios";
import { ICustomer, ICustomerUpdate } from "../types/customerTypes";

export const getAllCustomers = (): Promise<AxiosResponse<ICustomer[]>> => {
  return request.get<ICustomer[]>("/customers");
};

export const updateCustomer = (
  id: number,
  payload: ICustomerUpdate
): Promise<AxiosResponse<ICustomer>> => {
  return request.put(`/customers/${id}`, payload);
};

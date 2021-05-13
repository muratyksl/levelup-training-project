import request from "../utils/request";
import { AxiosResponse } from "axios";
import {
  ICustomer,
  ICustomerPayload,
  ILoginInfo,
} from "../types/customerTypes";

export const doCustomerLogin = ({
  email,
  password,
}: ILoginInfo): Promise<AxiosResponse<ICustomer>> => {
  return request.post<ICustomer>("/customers/login", {
    email: email,
    password: password,
  });
};

export const registerCustomer = (
  payload: ICustomerPayload
): Promise<AxiosResponse<ICustomer>> => {
  return request.post<ICustomer>("/customers/register", payload);
};

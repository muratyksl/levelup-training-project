import request from "../utils/request";
import { AxiosResponse } from "axios";
import { ICustomer, ILoginInfo } from "../types/customerTypes";

export const doCustomerLogin = ({
  email,
  password,
}: ILoginInfo): Promise<AxiosResponse<ICustomer>> => {
  return request.post<ICustomer>("/customers/login", {
    email: email,
    password: password,
  });
};

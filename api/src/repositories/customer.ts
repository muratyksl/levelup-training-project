import { getRepository } from "typeorm";
import { Customer } from "../models";
import { comparePassword, hashPassword } from "../utils/hashingUtils";

export interface ICustomerPayload {
  firstName: string;
  lastName: string;
  email: string;
  height: number;
  weight: number;
  trainerId?: number;
  password: string;
}

export const getCustomers = async (): Promise<Array<Customer>> => {
  const customerRepository = getRepository(Customer);
  return customerRepository.find();
};

export const createCustomer = async (
  payload: ICustomerPayload
): Promise<Customer> => {
  const customerRepository = getRepository(Customer);
  const customer = new Customer();
  let hashedPassword = await hashPassword(payload.password);
  if (!hashedPassword) throw new Error("Password Creating Not Successful");
  payload.password = hashedPassword;
  return customerRepository.save({
    ...customer,
    ...payload,
  });
};

export const getCustomer = async (id: number): Promise<Customer | null> => {
  const customerRepository = getRepository(Customer);
  const customer = await customerRepository.findOne({ id: id });
  if (!customer) return null;
  return customer;
};

export const authenticateCustomer = async (
  email: string,
  password: string
): Promise<Customer | null> => {
  try {
    const customer = await getRepository(Customer)
      .createQueryBuilder("customer")
      .where({ email: email })
      .addSelect("customer.password")
      .getOne();
    if (!customer)
      throw new Error("Authentication is failed customer not founded");
    let isPasswordTrue = await comparePassword(password, customer.password);
    if (!isPasswordTrue)
      throw new Error("Authentication is failed. Wrong Password");
    return customer;
  } catch (e) {
    console.error("login failed ", e);
    return null;
  }
};

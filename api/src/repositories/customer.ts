import { getRepository } from "typeorm";
import { Customer } from "../models";

export interface ICustomerPayload {
  firstName: string;
  lastname: string;
  email: string;
  height: number;
  weight: number;
  trainerId?: number;
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

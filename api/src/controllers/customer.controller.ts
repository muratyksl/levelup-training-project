import { Get, Route, Tags, Post, Body, Path } from "tsoa";

import { Customer } from "../models";
import { ILoginInfo } from "./trainer.controller";
import {
  getCustomer,
  createCustomer,
  ICustomerPayload,
  getCustomers,
  authenticateCustomer,
} from "../repositories/customer";

@Route("customers")
@Tags("Customer")
export default class CustomerController {
  @Get("/:id")
  public async getCustomer(@Path() id: string): Promise<Customer | null> {
    return getCustomer(Number(id));
  }

  @Get("/")
  public async getCustomers(): Promise<Array<Customer>> {
    return getCustomers();
  }

  @Post("/login")
  public async loginCustomer(
    @Body() body: ILoginInfo
  ): Promise<Customer | null> {
    const { email, password } = body;
    return authenticateCustomer(email, password);
  }

  @Post("/register")
  public async createCustomer(
    @Body() body: ICustomerPayload
  ): Promise<Customer> {
    return createCustomer(body);
  }
}

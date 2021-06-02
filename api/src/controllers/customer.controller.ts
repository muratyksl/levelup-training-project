import { Get, Route, Tags, Post, Body, Path, Put } from "tsoa";

import { Customer } from "../models";
import { ILoginInfo } from "./trainer.controller";
import {
  getCustomer,
  createCustomer,
  ICustomerPayload,
  getCustomers,
  authenticateCustomer,
  updateCustomer,
} from "../repositories/customer";
import { ICustomerUpdate } from "../types/customerTypes";

@Route("customers")
@Tags("Customer")
export default class CustomerController {
  @Get("/:id")
  public async getCustomer(@Path() id: string): Promise<Customer | null> {
    return getCustomer(Number(id));
  }

  @Put(":id")
  public async updateCustomer(
    @Path() id: string,
    @Body() body: ICustomerUpdate
  ): Promise<Customer | null> {
    return updateCustomer(Number(id), body);
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

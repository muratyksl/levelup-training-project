export interface ICustomerd extends ICustomerPayload {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ICustomer = Omit<ICustomerd, "password">;

export interface ILoginInfo {
  email: string;
  password: string;
}

export interface ICustomerPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  height?: number;
  weight?: number;
  trainerId?: number | null;
}

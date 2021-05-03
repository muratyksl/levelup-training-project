export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  height: 0;
  weight: 0;
  trainerId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ILoginInfo {
  email: string;
  password: string;
}

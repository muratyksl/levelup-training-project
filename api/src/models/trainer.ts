import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

export enum UserRole {
  ADMIN = "admin",
  TRAINER = "trainer",
}

import { Customer } from "./customer";

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column({ type: "text", unique: true })
  email!: string;

  @Column({ type: "text", unique: true })
  username!: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.TRAINER,
  })
  role!: UserRole;

  @Column({ type: "text", select: false })
  password!: string;

  @OneToMany((_type) => Customer, (customer: Customer) => customer.trainer)
  customers!: Array<Customer>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

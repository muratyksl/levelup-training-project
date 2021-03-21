import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

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

  @Column()
  username!: string;

  @Column({ type: "text", select: false })
  password!: string;

  @OneToMany((_type) => Customer, (customer: Customer) => customer.trainer)
  customers!: Array<Customer>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

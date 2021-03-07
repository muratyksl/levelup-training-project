import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Trainer } from "./trainer";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  height!: number;

  @Column()
  weight!: number;

  @Column({ nullable: true })
  trainerId!: number;
  @ManyToOne((_type) => Trainer, (trainer: Trainer) => trainer.customers)
  @JoinColumn()
  trainer!: Trainer;
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

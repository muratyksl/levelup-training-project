import { Get, Route, Tags, Post, Body, Path } from "tsoa";

import { Trainer } from "../models";
import {
  getTrainer,
  createTrainer,
  getTrainers,
  ITrainerPayload,
  authenticateTrainer,
} from "../repositories/trainer";

export interface ILoginInfo {
  email: string;
  password: string;
}

@Route("trainers")
@Tags("Trainer")
export default class TrainerController {
  @Get("/:id")
  public async getTrainer(@Path() id: string): Promise<Trainer | null> {
    return getTrainer(Number(id));
  }

  @Get("/")
  public async getTrainers(): Promise<Array<Trainer>> {
    return getTrainers();
  }

  @Post("/register")
  public async createTrainer(@Body() body: ITrainerPayload): Promise<Trainer> {
    return createTrainer(body);
  }

  @Post("/login")
  public async loginTrainer(@Body() body: ILoginInfo): Promise<Trainer | null> {
    const { email, password } = body;
    return authenticateTrainer(email, password);
  }
}

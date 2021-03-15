import { Get, Route, Tags, Post, Body, Path } from "tsoa";

import { Trainer } from "../models";
import {
  getTrainer,
  createTrainer,
  getTrainers,
  ITrainerPayload,
} from "../repositories/trainer";

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

  @Post("/")
  public async createTrainer(@Body() body: ITrainerPayload): Promise<Trainer> {
    return createTrainer(body);
  }
}

import { getRepository } from "typeorm";
import { Trainer } from "../models";

export interface ITrainerPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

export const getTrainers = async (): Promise<Array<Trainer>> => {
  const trainerRepository = getRepository(Trainer);
  return trainerRepository.find();
};

export const createTrainer = async (
  payload: ITrainerPayload
): Promise<Trainer> => {
  const trainerRepository = getRepository(Trainer);
  const trainer = new Trainer();
  return trainerRepository.save({
    ...trainer,
    ...payload,
  });
};

export const getTrainer = async (id: number): Promise<Trainer | null> => {
  const trainerRepository = getRepository(Trainer);
  const trainer = await trainerRepository.findOne({ id: id });
  if (!trainer) return null;
  return trainer;
};

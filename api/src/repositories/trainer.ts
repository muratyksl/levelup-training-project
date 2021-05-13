import { getRepository } from "typeorm";
import { Trainer } from "../models";
import { comparePassword, hashPassword } from "../utils/hashingUtils";
import { UserRole } from "../models/trainer";

export interface ITrainer {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  username: string;
}

export interface ITrainerPayload extends ITrainer {
  password: string;
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
  let hashedPassword = await hashPassword(payload.password);
  if (!hashedPassword) {
    throw new Error("Password Creating Not Successful");
  }
  payload.password = hashedPassword;

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

export const authenticateTrainer = async (
  email: string,
  pass: string
): Promise<ITrainer> => {
  const trainer = await getRepository(Trainer)
    .createQueryBuilder("trainer")
    .where({ email: email })
    .addSelect("trainer.password")
    .getOne();
  console.log("Authentication function started ", { trainer });
  if (!trainer) {
    console.error("User con not found ");
    throw new Error("Authentication is failed");
  }
  let isPasswordTrue = await comparePassword(pass, trainer.password);
  if (!isPasswordTrue) {
    throw new Error("Authentication is failed. Wrong Password ");
  }
  const { password, ...rest } = trainer;
  return rest;
};

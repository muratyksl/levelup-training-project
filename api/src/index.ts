import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";

import Router from "./routes";
import dbConfig from "./config/database";
import { errorHandlerMiddleWare } from "./middlewares/errorHandler";

export const IsProduction = process.env.node_env === "production";
const PORT = process.env.PORT || 8000;

const app: Application = express();

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({ host: process.env.REDIS_HOST });

declare module "express-session" {
  interface Session {
    dbID: number;
    email: string;
    role: "admin" | "trainer" | "customer";
  }
}
app.use(
  cors({
    origin: IsProduction
      ? "https://api.levelupgym.tk"
      : "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("tiny"));

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(
  session({
    name: "qid",
    store: new RedisStore({
      client: redisClient,
      disableTouch: true,
    }),
    //todo this will change in production
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // one day
      httpOnly: true,
      sameSite: "lax",
      secure: IsProduction, //cookie only work in https if true
    },
    secret: "sdfaepjfgopsdjfiopdsjiofds",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(Router);
app.use(errorHandlerMiddleWare);

createConnection(dbConfig)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });

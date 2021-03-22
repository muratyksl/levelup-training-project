import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";

import Router from "./routes";
import dbConfig from "./config/database";
import { errorHandlerMiddleWare } from "./middlewares/errorHandler";

const PORT = process.env.PORT || 8000;

const app: Application = express();

const RedisStore = connectRedis(session);
const redisClient = redis.createClient({ host: process.env.REDIS_HOST });

declare module "express-session" {
  interface SessionData {
    email: string;
  }
  interface Session {
    email: string;
  }
}

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
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // one day
      httpOnly: true,
      sameSite: "lax",
      secure: false, //cookie only work in https if true
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

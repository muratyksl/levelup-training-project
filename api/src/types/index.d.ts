import { Session, SessionData } from "express-session";

declare module "express-session" {
  interface SessionData {
    email: string;
  }
  interface Session {
    email: string;
  }
}

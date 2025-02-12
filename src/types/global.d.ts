import { Connection } from "mongoose";

declare global {
  let mongooseCache: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

export {};

import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  dbUrl:
    process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/db-batch-3-assignment-2"
};

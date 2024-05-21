import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 4000,
  dbUrl:
    process.env.DATABASE_URL
};

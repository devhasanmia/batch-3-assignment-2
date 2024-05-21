console.clear()
import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.dbUrl as string);
    console.log("Connected to the database");
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
  }
}

main();
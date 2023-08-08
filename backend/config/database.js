import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((e) => {
      console.log(e);
    });
};

export { connectToDb };

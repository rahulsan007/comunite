import express from "express";
import { connectToDb } from "./config/database.js";

const server = express();

connectToDb();

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server start at ${port}`);
});

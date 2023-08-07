import express from "express";

const server = express();

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server start at ${port}`);
});

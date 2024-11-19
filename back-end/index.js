import express from "express";
import cors from "cors";

const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", (resquest, response) => {
  response.json("backend ajillaj baina");
});

server.listen(PORT, () => {
  console.log(`server ajillaj ehelle http://localhost:${PORT}`);
});

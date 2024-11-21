import express from "express";
import cors from "cors";
import connectDB from "./connectdb.js";

const server = express();
const PORT = 8000;

server.use(cors());

server.get("/", async (resquest, response) => {
  const db = await connectDB();
  let collection = db.collection("movies");
  let result = await collection.find().limit(10).toArray();
  response.json({
    succes: true,
    data: result,
  });
});

server.listen(PORT, () => {
  console.log(`server ajillaj ehelle http://localhost:${PORT}`);
});

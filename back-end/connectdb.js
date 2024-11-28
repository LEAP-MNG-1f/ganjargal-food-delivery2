import { MongoClient } from "mongodb";

const connectionString =
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/";

const connectDB = async () => {
  const client = new MongoClient(connectionString);
  let connection;
  try {
    connection = await client.connect();
  } catch (e) {
    console.error(e);
  }
  const db = connection.db("sample_mflix");
  return db;
};

export default connectDB;
// "mongodb+srv://aicode744:12345678dd@cluster0.hux8m.mongodb.net/";

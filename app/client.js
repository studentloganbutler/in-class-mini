// Loads a reusable Mongo client for the application.
import { MongoClient } from "mongodb";
import config from "./config.js";

const client = new MongoClient(config.db);

client.connect();

process.on("SIGINT", () => {
  client.close().then(() => {
    console.info("MongoDB Client disconnected");
    process.exit(0);
  });
});

export default client;

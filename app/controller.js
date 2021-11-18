import client from "./client";
import config from "./config";

export default {
  index() {
    return client
    .db(config.db.name)
    .collection.find({})
    .limit(50)
    .toArray()
  },
};

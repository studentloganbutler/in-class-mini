// Provides config for the app in conjunction with dotenv
// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  clientConnection: process.env.CLIENT_URL,
  name: "sample_airbnb",
  collection: "listingsAndReviews",
};

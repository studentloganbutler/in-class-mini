import Router from "express";
import config from "./config.js";
import controller from "./controller.js";
import client from "./loader.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello API!");
});

router.get("/current-listings", async (req, res) => {
  const currentListings = await controller.index(req.query);
  res.json(currentListings);
});

export default router;

const express = require("express");
const {
	getBikeDetails,
	postBikeDetails,
} = require("../controller/bikeController");

const bikeRouter = express.Router();

bikeRouter.get("/", getBikeDetails);
bikeRouter.post("/", postBikeDetails);

module.exports = { bikeRouter };

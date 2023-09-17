const express = require("express");
const {
	getCarDetails,
	postCarDetails,
} = require("../controller/carController");

const carRouter = express.Router();

carRouter.get("/", getCarDetails);
carRouter.post("/", postCarDetails);

module.exports = { carRouter };

const { CarModel } = require("../model/carModel");

const getCarDetails = async (req, res) => {
	const carNumber = req.query.car_number; // Get the car_number from query parameters
	console.log("Car number:", carNumber);

	try {
		const carData = await CarModel.find({ car_number: carNumber });
		if (carData.length) {
			res.status(200).send({ carData });
		} else {
			res.status(404).send({ message: "No Data Found" });
		}
	} catch (error) {
		res.status(500).send({ message: "Error: " + error });
	}
};

const postCarDetails = async (req, res) => {
	try {
		const carData = req.body;
		const newCar = new CarModel(carData);
		const savedCar = await newCar.save();
		res.status(201).json(savedCar);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = { getCarDetails, postCarDetails };

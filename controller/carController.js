const { CarModel } = require("../model/carModel");

const getCarDetails = async (req, res) => {
	const carNumber = req.query.car_number; // Get the car_number from query parameters
	console.log("Car number:", carNumber);

	try {
		const carData = await CarModel.findOne({ car_number: carNumber });
		if (carData.length) {
			res.status(200).json({ success: true, data: carData });
		} else {
			res.status(404).json({ success: false, message: "Car Data Not Found" });
		}
	} catch (error) {
		res.status(500).json({ success: false, error: "Internal server error" });
	}
};

const postCarDetails = async (req, res) => {
	try {
		const carData = req.body;
		const newCar = new CarModel(carData);
		const savedCar = await newCar.save();
		res.status(201).json({ success: true, data: savedCar });
	} catch (error) {
		res.status(500).json({ success: false, error: "Internal server error" });
	}
};

module.exports = { getCarDetails, postCarDetails };

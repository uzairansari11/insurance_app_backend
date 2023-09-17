const { VehicleModel } = require("../model/carModel");

const getCarDetails = async (req, res) => {
	const vehicle_number = req.query.car_number; // Get the car_number from query parameters
	console.log("Car number:", vehicle_number);

	try {
		const carData = await VehicleModel.findOne(vehicle_number);
		if (carData) {
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
		const newCar = new VehicleModel(carData);
		const savedCar = await newCar.save();
		res.status(201).json({ success: true, data: savedCar });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
};

module.exports = { getCarDetails, postCarDetails };

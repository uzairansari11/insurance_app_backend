const { VehicleModel } = require("../model/carModel");

const getCarDetails = async (req, res) => {
	const vehicle_number = req.query.vehicle_number;

	try {
		const data = await VehicleModel.find({ vehicle_number: vehicle_number });
		if (data.length) {
			res.status(200).json(data);
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

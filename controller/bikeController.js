const { BikeModel } = require("../model/bikeModel");

const getBikeDetails = async (req, res) => {
	const vehicle_number = req.query.vehicle_number;

	try {
		const data = await BikeModel.find({ vehicle_number: vehicle_number });
		if (data.length) {
			res.status(200).json(data);
		} else {
			res.status(404).json({ success: false, message: "Bike Data Not Found" });
		}
	} catch (error) {
		res.status(500).json({ success: false, error: "Internal server error" });
	}
};

const postBikeDetails = async (req, res) => {
	try {
		const bikeData = req.body;
		const newBike = new BikeModel(bikeData);
		const savedBike = await newBike.save();
		res.status(201).json({ success: true, data: savedBike });
	} catch (error) {
		console.log(error);
		res.status(500).json({ success: false, error: "Internal server error" });
	}
};

module.exports = { getBikeDetails, postBikeDetails };

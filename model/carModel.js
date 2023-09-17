const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
	car_number: String,
	car_owner: String,
	model_name: String,
	fuel_type: String,
	insurance_policy: String,
	vehicle_color: String,
	puc_expiry: Date,
	insurance_date: Date,
	insurance_expiry_date: Date,
	challan: [
		{
			reason: String,
			amount: Number,
			paid: { type: Boolean, default: false },
		},
	],
});

const CarModel = mongoose.model("car", carSchema);

module.exports = { CarModel };

const mongoose = require("mongoose");

const policySchema = mongoose.Schema({
	policy_number: String,
	start_date: Date,
	end_date: Date,
	policy_name: String,
	expiry: { type: Boolean, default: false },
});

const challanSchema = mongoose.Schema({
	reason: String,
	amount: Number,
	start_date: Date,
	paid_date: Date,
	paid: { type: Boolean, default: false },
});

const pucSchema = mongoose.Schema({
	start_date: Date,
	paid_date: Date,
	expiry: { type: Boolean, default: false },
});

const carSchema = mongoose.Schema({
	vehicle_number: String,
	vehicle_owner: String,
	model_name: String,
	fuel_type: String,
	vehicle_type: String,
	vehicle_color: String,
	registration_date: Date,
	vehicle_price: Number,
	insurance_policies: [policySchema],
	challans: [challanSchema],
	puc_entries: [pucSchema],
});

const CarModel = mongoose.model("car", carSchema);

module.exports = { CarModel };

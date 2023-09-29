const { UserModal } = require("../model/userModel");

const createUser = async (req, res) => {
	const { name, mobile, email, profile } = req.body;
	if (!name || !email || !mobile) {
		res.status(406).send({
			success: false,
			message: "Please provide mandatory fields i:e name email mobile",
		});
	} else {
		try {
			const data = await new UserModal(req.body);
			const newUser = await data.save();
			res.status(201).json({ success: true, data: newUser });
		} catch (error) {
			res.status(500).json({ success: false, error: "Internal server error" });
		}
	}
};

module.exports = { createUser };

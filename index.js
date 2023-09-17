const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const { carRouter } = require("./routes/carRoutes");
const app = express();

/*  middleware */
app.use(express.json());
app.use(cors());

/* Routes */

/* Welcome Route */
app.get("/", (req, res) => {
	try {
		res.status(200).send({
			message: "Welcome to Insurance Application Api",
			ok: true,
			statusCode: 200,
		});
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

app.use("/car", carRouter);

/* Not Found Route */
app.use((req, res) => {
	try {
		res.status(404).send({
			message: `😔oops [this route ${req.originalUrl}] not found!😔`,
		});
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});
app.listen(8080, async () => {
	await connection();
	console.log(`Server is running at ${process.env.PORT}`);
});

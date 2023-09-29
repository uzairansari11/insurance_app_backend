const express = require("express");
const { createUser } = require("../controller/userController");

const userRouter = express.Router();

// userRouter.get("/", );
userRouter.post("/", createUser);

module.exports = { userRouter };

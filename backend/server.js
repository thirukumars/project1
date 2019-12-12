const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("mongoose database connection established successfully");
});

const exerciseRouter = require("./routes/exercise");
const usersRouter = require("./routes/user");

app.use("/exercise", exerciseRouter);
app.use("/user", usersRouter);

app.listen(port, () => {
	console.log(`server is running on the port ${port}`);
});

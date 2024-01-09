require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db/db");
const router = require("./src/routes/_index.routes");

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
connectDB();

app.get("/test", (req, res) => {
    res.json({ msg: "Test ok!" });
});

app.use("/api/v1/", router);

app.listen(SERVER_PORT, () =>
    console.log("Server is running on port: " + SERVER_PORT)
);

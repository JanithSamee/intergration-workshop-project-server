const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

function login(req, res) {
    res.json({ msg: "login okay" });
}
async function register(req, res) {
    try {
        const { username, password, email } = req.body;

        const passwordHash = await bcrypt.hash(password, 12);

        if (!username || !password || !email) {
            res.status(400).json({ msg: "All fields are required!" });
        }

        const dbRes = await UserModel.create({
            username,
            password: passwordHash,
            email,
        });
        console.log(dbRes);
        res.json({ msg: "User Created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server side Error Occured" });
    }
}

module.exports = { login, register };

const User = require("../models/user.model");

module.exports.signup_get = (req, res) => {
	res.json("signup_get")
}

module.exports.login_get = (req, res) => {
	res.json("login")
}

module.exports.signup_post = (req, res) => {
	const {email, password} = req.body;

	User.create({email, password})
		.then(result => res.status(201).json(result))
		.catch(error => res.status(400).json(error));
}

module.exports.login_post = (req, res) => {
	res.send("user login")
}
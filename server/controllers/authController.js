const User = require("../models/user.model");
const jwt = require("jsonwebtoken");


// * TOKENS
const maxAge = 1 * 24 * 60 * 60; // Dias * horas * min * seg
const createToken = ( id ) => {
	return jwt.sign(
		{ id }, 
		process.env.TOKEN_KEY,
		{
			expiresIn: maxAge,
		})
}

// ! Handle Error
const handleErrors = ({errors, message, code}) => {
	const error =  {email:"", password:""};

	// Duplicated email
	if(code === 11000){
		error.email = "That email is registered";
		return error;
	}

	// Validation errors
	if(message.includes("user validation failed")){
		Object.values(errors).forEach(({properties}) => {
			error[properties.path] = properties.message;
		})
	}

	return error;
}

// * Controllers 
module.exports.signup_get = (req, res) => {
	res.json("signup_get")
}

module.exports.login_get = (req, res) => {
	res.json("login")
}

module.exports.signup_post = (req, res) => {
	const {email, password} = req.body;

	User.create({email, password})
		.then(user => {
			const token = createToken(user._id);

			res.cookie("New-User", token, { httpOnly: true, maxAge: maxAge * 1000 })
			res.status(201).json(user);
		})
		.catch(err => {
			const errors = handleErrors(err);			
			res.status(400).json(errors);
		});
}

module.exports.login_post = (req, res) => {
	const { email, password } = req.body;

	User.login(email, password)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(400).json(err))
}
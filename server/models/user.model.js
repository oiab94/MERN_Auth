const mongoose = require("mongoose");
const { isEmail } = require("validator");

// * Creamos el esquema para nuestro modelo
const userSchema = new mongoose.Schema({
	email:{
		type:String,
		required: [true, "Please enter an email"],
		unique: true,
		lowercase: true,
		validate:[isEmail, "Please enter a valid email"]
	},
	password:{
		type: String,
		required: [true, "Please enter a password"],
		minlength: [6, "Minimun characters are 6"	]
	},
});

// * Creamos el modelo
const User = mongoose.model("user", userSchema);

module.exports = User;
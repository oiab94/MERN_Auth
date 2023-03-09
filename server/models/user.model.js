const mongoose = require("mongoose");

// * Creamos el esquema para nuestro modelo
const userSchema = new mongoose.Schema({
	email:{
		type:String,
		required: true,
		unique: true,
		lowercase: true
	},
	password:{
		type: String,
		required: true,
		minlength: 6
	},
});

// * Creamos el modelo
const User = mongoose.model("user", userSchema);

module.exports = User;
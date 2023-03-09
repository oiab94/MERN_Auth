const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

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

// * Encriptar el password antes de guardar
userSchema.pre("save", async function(next){
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);

	next();
})

// * Creamos el modelo
const User = mongoose.model("user", userSchema);

module.exports = User;

// // * Disparar una función antes de guardar en la DB
// userSchema.pre("save", function(next) {
// 	console.log("Usuario antes de crear: ", this);
	
// 	next();
// })

// // * Disparar una función después de guardar en la DB
// userSchema.post("save", function(doc, next){
// 	console.log("Nuevo usuario: ", doc);

// 	next();	// Permite que se pueda avanzar a las siguientes operaciones
// })
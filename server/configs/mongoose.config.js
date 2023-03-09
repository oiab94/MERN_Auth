const mongoose = require('mongoose');
require("dotenv").config()


// *Configuración de la conexión a la DB
let URL = process.env.URL_DB;
mongoose.set("strictQuery", true);
mongoose.connect(
	URL,
	{useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("Conexion a la DB exitosa"))
	.catch(() => console.log("Conexion a la DB fallida"))
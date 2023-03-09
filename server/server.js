require("dotenv").config()
const express = require("express");
const authRoutes = require("./routes/authRoutes");


// * Iniciamos express
const app = express();

app.listen(
	process.env.PORT,
	() => console.log(`Se escucha en el puerto ${process.env.PORT}`)
)

// * Middleware
app.use(express.json());	// Permite el acceso a un objeto json

// * Routes
app.use(authRoutes);

// * Conexión mongoose
require("./configs/mongoose.config"); 

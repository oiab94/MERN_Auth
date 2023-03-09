require("dotenv").config()
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");


// * Iniciamos express
const app = express();
const corsOptions = {
	origin: true,
	credentials: true
}

app.listen(
	process.env.PORT,
	() => console.log(`Se escucha en el puerto ${process.env.PORT}`)
)

// * Middleware
app.use(express.json());	// Permite el acceso a un objeto json
app.use(cors(corsOptions));
app.use(cookieParser());	// Permite la utilización de cookie parser

// * Routes
app.use(authRoutes);

// * Conexión mongoose
require("./configs/mongoose.config"); 

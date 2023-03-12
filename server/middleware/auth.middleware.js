const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
	const token = req.cookies.login;
	
	// Verificar que el token exista & sea valido
	if(token){
		jwt.verify(
			token, 
			process.env.TOKEN_KEY, 
			(err, decodedToken) => {
				if(err){
					// Retorna status 401 UNAUTHORIZED
					res.status(401).json({"message":"Invalid token"});
				} else {
					res.status(200).json(decodedToken);
				} 
		})
	} else {
		// Retorna status 401 UNAUTHORIZED
		res.status(401).json({"message": "Who the hell are you?"});
		next();
	}

}

module.exports = {
	requireAuth
}
import { Navigate } from "react-router-dom"

const NoVisit = () => {
	// ! Realizar el guardado y verificacion de token al hacer login
	// ! En cada peticion que hagamos podemos recuperar los datos desde localStorage
	// ! Cada vez que realizamos alguna peticion verificar el id del usuario para saber si esta autenticado

	const renderLogin = () => {
		return <Navigate to="/" />;
	}

	const renderPage = () => {
		return <h2>Mostrar documento</h2>;
	}

	return (
		<>
			{
				window.localStorage.getItem("user") !== null
					? renderPage()
					: renderLogin()
			}
		</>
	);

}
export default NoVisit;
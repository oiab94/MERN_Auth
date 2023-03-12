import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./env";

const NoVisit = () => {

	useEffect(
		()=> {
			axios.get(API_URL + "/authPage", {withCredentials: true})
				.then(user => console.log(user))
				.catch(({response}) => console.log(response));
		}, []);

	return (
		<>
			<h2>Contenido Oculto</h2>
		</>
	);

}
export default NoVisit;
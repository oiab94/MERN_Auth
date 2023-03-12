import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Home";
import NoVisit from "../NoVisit";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/noVisit",
		element: <NoVisit />
	}
])

export default function Route() {
	return <RouterProvider router={router} />
};
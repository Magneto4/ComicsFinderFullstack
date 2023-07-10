import UserInput from "./input";
import "../css/App.css"
import Banner from "./Banner";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

function Home () {
	return (<div class="app">
		<Banner />
		<UserInput />
	</div>)
}

export default function App() {
	useEffect(() => {
		document.title = 'Comics finder';
	}, []);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navigate to="/home"/>
		},
		{
			path: "/home",
			element: <Home/>
		}
	])
	return (
		<div className="app">
			<RouterProvider router={router}/>
		</div>
	)
}
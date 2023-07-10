import UserInput from "./input";
import "../css/App.css"
import Banner from "./Banner";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import {Helmet} from "react-helmet";

function Home () {
	return (<div class="app">
		<Banner />
		<UserInput />
	</div>)
}

export default function App() {
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
			<Helmet>
				<title>Comics finder</title>
				<meta property="og:title" content="Comics finder"/>
				<meta property="og:description" content="Search comic books by criteria easily! Woohoo!"></meta>
			</Helmet>
			<RouterProvider router={router}/>
		</div>
	)
}
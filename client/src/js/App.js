import UserInput from "./input";
import "../css/App.css"
import Banner from "./Banner";
import { useEffect } from "react";

export default function App() {
	useEffect(() => {
		document.title = 'Comics finder';
	}, []);
	return (<div class="app">
		<Banner />
		<UserInput />
	</div>)
}
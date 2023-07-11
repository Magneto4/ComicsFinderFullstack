import UserInput from "./input";
import "../css/App.css"
import Banner from "./Banner";
import {Helmet} from "react-helmet";

export default function App() {
	return (
		<div className="app">
			<Helmet>
				<title>Comics finder</title>
				<meta property="description" content="Search comic books by criteria easily! Woohoo!"/>
				<meta property="og:title" content="Comics finder"/>
				<meta property="og:description" content="Search comic books by criteria easily! Woohoo!"/>
				<meta property="og:type" content="website"/>
				<meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/800px-Marvel_Logo.svg.png"/>
			</Helmet>
			<div class="app">
				<Banner />
				<UserInput />
			</div>
		</div>
	)
}
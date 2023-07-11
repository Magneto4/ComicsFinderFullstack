import axios from "axios";

export default async function getListFromWiki(category, setList) {
	await axios.get('/api/list/' + category)
	.then(function (response) {
		setList(response.data)
	})
	.catch(function (error) {
		console.log(error);
	});
}

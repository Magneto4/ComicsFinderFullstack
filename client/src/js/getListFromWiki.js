import axios from "axios";

export default async function getListFromWiki(category, list) {
	await axios.get('/list/' + category)
	.then(function (response) {
		for (var elem of response.data) {
			list.push(elem);
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

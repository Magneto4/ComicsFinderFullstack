import axios from "axios";

export default async function getListFromWiki(category, list) {
	await axios.get('/list/' + category)
	.then(function (response) {
		list = response.data.list
	})
	.catch(function (error) {
		console.log(error);
	});
}

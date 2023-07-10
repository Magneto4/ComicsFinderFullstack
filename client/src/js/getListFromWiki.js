import axios from "axios";

export default async function getListFromWiki(category, list) {
	await axios.get('/list/' + category)
	.then(function (response) {
		var array = response.data.split(",");
		if (array[array.length - 1] === "")
			array.pop();
		for (var elem of array) {
			list.push(elem);
		}
	})
	.catch(function (error) {
		console.log(error);
	});
}

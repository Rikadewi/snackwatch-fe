import axios from "axios";

export const getInformationAxios = axios.create({
	baseURL: "http://18.140.187.242:3000",
	// baseURL: "http://172.16.1.234:3000",
	headers: {
		"Content-Type": "multipart/form-data"
	}
});

export const getInfoFromServer = async capturedImageURI => {
	let imgData = new FormData();
	imgData.append("image", {
		type: "image/jpg",
		name: "file.jpg",
		uri: capturedImageURI
	});
	imgData.append(
		"info",
		JSON.stringify({
			snack_weight: 55,
			weight: 45,
			age: 20,
			height: 165,
			gender: 0,
			allergy: [1, 2, 3],
			illness: [1, 2, 3, 4]
		})
	);

	let error;
	let response = await getInformationAxios
		.post("/image_info/", imgData)
		.catch(err => {
			error = err;
			console.log("Error:", err);
		});
	return new Promise((resolve, reject) => {
		if (!response) {
			reject(error);
		}
		resolve(JSON.parse(response.request._response));

	});
};

import axios from "axios";

export const getInformationAxios = axios.create({
	// baseURL: "http://18.140.127.175:9001",
	baseURL: "http://192.168.43.136:9001",
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

	let error;
	let response = await getInformationAxios
		.post("/nutritionExtract/", imgData)
		.catch(err => {
			error = err;
			console.log("Error:", err);
		});
	return new Promise((resolve, reject) => {
		if (!information) {
			reject(error);
		}
		resolve(response.request._response);
	});
};

async function hitAPI() {
	const response = await fetch(
		"https://api.weatherapi.com/v1/current.json?key=797da5ecd3bd4d0f863195619231511&q=london",
		{ mode: "cors" }
	);
	return response;
}

export default async function processData() {
	const data = await (await hitAPI()).json();
	console.log(data);
}

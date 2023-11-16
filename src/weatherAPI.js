async function hitAPI(input) {
	const response = await fetch(
		`https://api.weatherapi.com/v1/current.json?key=797da5ecd3bd4d0f863195619231511&q=${input}`,
		{ mode: "cors" }
	);
	return response;
}

export default async function processData(input) {
	const data = await (await hitAPI(input)).json();
	console.log(data);
}

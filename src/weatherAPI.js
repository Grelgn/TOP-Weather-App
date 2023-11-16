export default async function hitAPI() {
	const response = await fetch(
		"https://api.weatherapi.com/v1/current.json?key=797da5ecd3bd4d0f863195619231511&q=london",
		{ mode: "cors" }
	);
	console.log(response);
}

const name = document.querySelector(".name");
const country = document.querySelector(".country");
const icon = document.querySelector(".icon");
const condition = document.querySelector(".text");
const temp = document.querySelector(".temp_c");
const feelslike = document.querySelector(".feelslike_c");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

export default function displayInfo(data) {
	console.log(data);

	name.textContent = data.location.name;
	country.textContent = data.location.country;
	icon.src = `https:${data.current.condition.icon}`;
	condition.textContent = data.current.condition.text;
	temp.textContent = `${data.current.temp_c} °C`;
	feelslike.textContent = `Feels like: ${data.current.feelslike_c} °C`;
	humidity.textContent = `Humidity: ${data.current.humidity} %`;
	wind.textContent = `Wind: ${data.current.wind_kph} km/h`;
}

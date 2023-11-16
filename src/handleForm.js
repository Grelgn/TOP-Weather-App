import processData from "./weatherAPI";

export default function sendInput() {
	const button = document.querySelector("button");

	button.addEventListener("click", () => {
		const input = document.querySelector("input");
		if (input.value !== "") {
			processData(input.value);
		} else {
			processData("london");
		}
	});
}

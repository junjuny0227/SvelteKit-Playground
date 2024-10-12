export async function load({ fetch }) {
	const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
	const res = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=35.1585&lon=126.9254&appid=${apiKey}`
	);
	const result = await res.json();
	return result;
}

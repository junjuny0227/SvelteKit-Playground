export async function load({ fetch }) {
	let res = await fetch(
		'https://api.openweathermap.org/data/2.5/weather?lat=35.1585&lon=126.9254&appid=80a687f77790f783a6e9de99135496e0'
	);
	let result = await res.json();
	return result;
}

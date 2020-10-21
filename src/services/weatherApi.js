
const fetchWeather = async (latLng) => {
    const { REACT_APP_OPENWEATHER_API_KEY } = process.env;
    const openweatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latLng.lat}&lon=${latLng.lng}&exclude=minutely,hourly&appid=${REACT_APP_OPENWEATHER_API_KEY}`
    const request = await fetch(openweatherUrl)
    const weatherForecast = await request.json();
    return weatherForecast
}

export default fetchWeather;
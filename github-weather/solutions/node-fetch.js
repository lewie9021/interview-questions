const Fetch = require("node-fetch");

const GITHUB_URL = "https://api.github.com/users/";
const WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather";
const WEATHER_API_KEY = "";

function fetchGithubWeather(username) {
    return Fetch(GITHUB_URL + username)
        .then((res) => res.json())
        .then((profile) => {
            return Fetch(WEATHER_URL + "?APPID=" + WEATHER_API_KEY + "&q=" + profile.location)
                .then((res) => res.json())
                .then((forecast) => ({profile, forecast}))
        });
}

fetchGithubWeather("lewie9021")
    .then(({profile, forecast}) => {
        console.log("GitHub name: %s.", profile.name);
        console.log("GitHub location: %s.", profile.location);

        console.log("OpenWeatherMap description: %s (%s).", forecast.weather[0].main, forecast.weather[0].description);
        console.log("OpenWeatherMap temperature: %d.", forecast.main.temp);
    });
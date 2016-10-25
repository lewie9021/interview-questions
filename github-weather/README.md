# Github Weather

### Description

Fetch weather details for a given GitHub account name.

### Requirements

- Accepts a GitHub username e.g. "lewie9021".
- Logs to terminal:
  - GitHub name (`name`).
  - GitHub location (`location`).
  - OpenWeatherMap description (`weather.main`, `weather.description`).
  - OpenWeatherMap temperature (`main.temp`).
  
### Getting Started

- There is an index.js file within this directory containing bootstrap code.
- Requesting GitHub user details: `https://api.github.com/users/{username}`. Example: `https://api.github.com/users/lewie9021`
- Requesting weather details for location: `http://api.openweathermap.org/data/2.5/weather?APPID={api-key}q={location}`. Example: `http://api.openweathermap.org/data/2.5/weather?APPID=11111111q=United%20Kingdom` 
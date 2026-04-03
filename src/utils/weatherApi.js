import { coordinates, ApiKey } from "./constants.js";

const { lat, lon } = coordinates;

function handleServerResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`,
  ).then((res) => {
    return handleServerResponse(res);
  });
}

function getWeatherCondition(temp) {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
export { getWeatherData, getWeatherCondition };

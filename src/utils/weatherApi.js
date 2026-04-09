function handleServerResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

function getWeatherData({ lat, lon }, ApiKey) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`,
  ).then((res) => {
    return handleServerResponse(res);
  });
}

const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = getWeatherCondition(result.temp);
  result.condition = data.weather[0].main.toLowerCase();
  result.isDay = isDay(data.sys, Date.now());

  return result;
};

function isDay({ sunrise, sunset }, now) {
  console.log(sunrise, sunset, now);

  return sunrise * 1000 < now && sunset * 1000 > now;
}

function getWeatherCondition(temp) {
  if (temp > 86) {
    return "hot";
  } else if (temp >= 66) {
    return "warm";
  } else {
    return "cold";
  }
}
export { getWeatherData, filterWeatherData };

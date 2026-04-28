const weatherDataOptions = [
  // day
  {
    isDay: true,
    condition: "clear",
    url: new URL("../images/day/clear.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "clouds",
    url: new URL("../images/day/cloudy.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "rain",
    url: new URL("../images/day/rain.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "storm",
    url: new URL("../images/day/storm.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "snow",
    url: new URL("../images/day/snow.png", import.meta.url).href,
  },
  {
    isDay: true,
    condition: "fog",
    url: new URL("../images/day/fog.png", import.meta.url).href,
  },

  // night
  {
    isDay: false,
    condition: "clear",
    url: new URL("../images/night/clear.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "clouds",
    url: new URL("../images/night/cloudy.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "rain",
    url: new URL("../images/night/rain.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "storm",
    url: new URL("../images/night/storm.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "snow",
    url: new URL("../images/night/snow.png", import.meta.url).href,
  },
  {
    isDay: false,
    condition: "fog",
    url: new URL("../images/night/fog.png", import.meta.url).href,
  },
];

const weatherOptionsDefault = {
  day: {
    url: new URL("../images/day/default.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/default.png", import.meta.url).href,
  },
};

const coordinates = {
  lat: 61.2181,
  lon: -149.9003,
};

const ApiKey = "76464173999be743bc21ef4d033211ba";

export { coordinates, ApiKey, weatherDataOptions, weatherOptionsDefault };

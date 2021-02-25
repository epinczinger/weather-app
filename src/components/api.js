const infoAPI = async (city, units = 'metric') => {
  const apiKey = 'f8584d3f19d9882aec61e1e892543fe7';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`,
  );
  try {
    const info = await response.json();
    return info;
  } catch (error) {
    return alert(error);
  }
};

const weatherInfo = async (city, units) => {
  const result = await infoAPI(city, units);

  const filteredInfo = {
    city: result.name,
    country: result.sys.country,
    weather: result.weather[0].main,
    temperatureC: result.main.temp,
    temperatureF: Math.round(result.main.temp * (9 / 5)) + 32,
  };
  return filteredInfo;
};

export { infoAPI, weatherInfo };

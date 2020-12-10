const infoAPI = async (city, units = 'metric') => {
  const apiKey = 'f8584d3f19d9882aec61e1e892543fe7';
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`,
  );
  if (response.status === 200) {
    const info = await response.json();
    return info;
  }
  throw new Error(response.status);
};

const weatherInfo = async (city, units) => {
  const result = await infoAPI(city, units);

  const filteredInfo = {
    city: result.name,
    country: result.sys.country,
    weather: result.weather[0].main,
    temperature: result.main.temp,
  };
  return filteredInfo;
};

export { infoAPI, weatherInfo };

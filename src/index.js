import './style/style.scss';
import { weatherInfo } from './components/api';

const searchResults = document.getElementById('search-results');
const resultContainer = document.getElementById('results-container');
const body = document.getElementById('body');

body.classList.add('w-50', 'm-auto');
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';

const showResults = (obj, temp) => {
  let temperature;
  if (temp === 'metric') {
    temperature = `${obj.temperatureC} C`;
  } else {
    temperature = `${obj.temperatureF} F`;
  }
  body.style.backgroundImage = `url('https://source.unsplash.com/1200x900/?weather+${obj.weather};`;
  resultContainer.innerHTML = `<div><b>City: </b><span  class='text-primary'>${obj.city}, ${obj.country}</span></div>
  <div><b>Weather: </b><span  class='text-primary'>${obj.weather}</span></div>
  <div id='temp'><b>Temperature: </b><span id='temp' class='text-primary'>${temperature}</span></div>
  `;

  const tempBtn = document.createElement('button');
  tempBtn.classList.add('btn', 'btn-primary');
  tempBtn.innerText = 'Change to Celcius/Fahrenheit';

  tempBtn.addEventListener('click', () => {
    if ((temperature === obj.temperatureC)) {
      temperature = obj.temperatureF;
      document.getElementById('temp').innerHTML = `<b>Temperature: </b><span id='temp' class='text-primary'>${temperature} F </span>`;
    } else {
      temperature = obj.temperatureC;

      document.getElementById(
        'temp',
      ).innerHTML = `<b>Temperature: </b><span id='temp' class='text-primary'>${temperature} C </span>`;
    }
  });

  resultContainer.appendChild(tempBtn);

  searchResults.appendChild(resultContainer);
};

async function processForm() {
  const city = document.getElementById('input-city').value;
  const radios = document.getElementsByClassName('form-check-input');
  let unit = '';

  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      unit = radios[i].value;
    }
  }

  try {
    const results = await weatherInfo(city, unit);

    showResults(results, unit);
  } catch (error) {
    alert('Please, try with a different city');
  }
}

const btn = document.getElementById('submit-btn');
btn.addEventListener('click', () => {
  if (resultContainer.innerHTML === '') {
    processForm();
  } else {
    resultContainer.innerHTML = '';
    processForm();
  }
});

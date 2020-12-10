import './style/style.scss';
import { weatherInfo } from './components/api';

const showResults = (obj) => {
  const searchResults = document.getElementById('search-results');
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result-container');
  resultContainer.innerHTML = `<div><b>City: </b>${obj.city}, ${obj.country}</div>
  <div><b>Weather: </b>${obj.weather}</div>
  <div><b>Temperature: </b>${obj.temperature} degrees</div>`;
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

  const results = await weatherInfo(city, unit);

  showResults(results);
}

const btn = document.getElementById('submit-btn');
btn.addEventListener('click', () => {
  processForm();
});

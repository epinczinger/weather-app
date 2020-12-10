import "./style/style.scss";
import { weatherInfo, infoAPI } from "./components/api";
import showResults from "./components/pagecontent";

const div = document.getElementById("div");
div.appendChild(p);

const btn = document.getElementById("submit-btn");
btn.addEventListener("click", (event) => {
  processForm();
});

async function processForm() {
  const city = document.getElementById("input-city").value;
  const radios = document.getElementsByClassName("form-check-input");
  let unit = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      unit = radios[i].value;
    };
  };

  let results = await weatherInfo(city, unit);

  showResults(results)

};

const showResults = (obj) => {
  
  const searchResults = document.getElementById("search-results");
  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");
  resultContainer.innerHTML = `<div><b>City: </b>${obj.city}, ${obj.country}</div>
  <div><b>Weather: </b>${obj.weather}</div>
  <div><b>Temperature: </b>${obj.temperature} degrees</div>`;
  searchResults.appendChild(resultContainer);

};


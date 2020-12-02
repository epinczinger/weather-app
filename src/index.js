import './style/style.scss';


const div = document.getElementById('div');
const p = document.createElement('p');
p.textContent = 'Hola';

div.appendChild(p);

const apiKey = 'f8584d3f19d9882aec61e1e892543fe7';
const city = 'tokyo'

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const search = () => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=las+toninas&units=metric&appid=f8584d3f19d9882aec61e1e892543fe7`
    ).then((response) => response.json());
};

search();

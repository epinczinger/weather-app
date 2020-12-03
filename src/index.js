import './style/style.scss';


const div = document.getElementById('div');
const p = document.createElement('p');
p.textContent = 'Hola';

div.appendChild(p);

async function search(city, units='metric') {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=f8584d3f19d9882aec61e1e892543fe7`
    )
    if (response.status == 200) {
      let json = await response.json();
      return json.main.temp;
    }
    throw new Error(response.status);
};

console.log(search('santa teresita', 'imperial'));

import './style/style.scss';
import { weatherInfo, infoAPI} from './components/api';


const div = document.getElementById('div');
const p = document.createElement('p');
p.textContent = '???';

div.appendChild(p);


const btn = document.getElementById('submit-btn');
    btn.addEventListener('click', (event) => {
      processForm();
});

const processForm = () => {
        const city = document.getElementById('input-city').value;
        const radios = document.getElementsByClassName("form-check-input");
        let unit = ''
        
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                unit = radios[i].value;
            };

    console.log(weatherInfo(city, unit));
            };
          };
 
//        async const infoArray = await weatherInfo(city, unit);

//        console.log(infoArray);
//         city = '';
//         radios= '';
//         unit='';

//     });

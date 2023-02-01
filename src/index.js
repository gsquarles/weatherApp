import { getLocationFarenheit, getLocationCelsius} from "./modules/data";
const searchBar = document.getElementById('search');
const form = document.querySelector('form');
const location = document.querySelector('.location');
const temperature = document.querySelector('.temp');
const low = document.querySelector('.low');
const high = document.querySelector('.high');
const feelLike = document.querySelector('.feelLike');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const description = document.querySelector('.description');
const weatherPic = document.querySelector('.weatherPic');
const toggleButton = document.querySelector('.toggleButton');


async function displayData(city){
    try{
        if(toggleButton.innerHTML === 'F'){
            const response = await getLocationFarenheit(city);
            location.innerText = response.name;
            temperature.innerText = Math.round(response.temp) + "\u00B0F";
            low.innerText = 'Low: ' + Math.round(response.low) + "\u00B0F";
            high.innerText = 'High: ' + Math.round(response.high) + "\u00B0F";
            feelLike.innerText = 'Feels like: ' + Math.round(response.feelsLike) + "\u00B0F";
            humidity.innerText = 'Humidity: ' + Math.round(response.humidity)+ '%';
            wind.innerText = 'Wind Speed: ' + response.wind.toFixed(1) +'mph';
            description.innerText = response.weather;
            if(response.weather === 'Clouds'){
                weatherPic.src = '../dist/imgs/cloudyDay.png';
            }else if (response.weather === 'Clear'){
                weatherPic.src = '../dist/imgs/sunWeather.png';
            }else if(response.weather === 'Mist'){
                weatherPic.src = '../dist/imgs/mistPic.png';
            }else if (response.weather === 'Rain'){
                weatherPic.src = '../dist/imgs/rainyDay.png';
            }else if (response.weather === 'Snow'){
                weatherPic.src = '../dist/imgs/snowyDay.png';
            }else{
                weatherPic.src = '';
        }
        }else{
            const response = await getLocationCelsius(city);
            location.innerText = response.name;
            temperature.innerText = Math.round(response.temp) + "\u00B0C";
            low.innerText = 'Low: ' + Math.round(response.low) + "\u00B0C";
            high.innerText = 'High: ' + Math.round(response.high) + "\u00B0C";
            feelLike.innerText = 'Feels like: ' + Math.round(response.feelsLike) + "\u00B0C";
            humidity.innerText = 'Humidity: ' + Math.round(response.humidity)+ '%';
            wind.innerText = 'Wind Speed: ' + response.wind.toFixed(1) +'mph';
            description.innerText = response.weather;
            if(response.weather === 'Clouds'){
                weatherPic.src = '../dist/imgs/cloudyDay.png';
            }else if (response.weather === 'Clear'){
                weatherPic.src = '../dist/imgs/sunWeather.png';
            }else if(response.weather === 'Mist'){
                weatherPic.src = '../dist/imgs/mistPic.png';
            }else if (response.weather === 'Rain'){
                weatherPic.src = '../dist/imgs/rainyDay.png';
            }else if (response.weather === 'Snow'){
                weatherPic.src = '../dist/imgs/snowyDay.png';
            }else{
                weatherPic.src = '';
            }
            }
        }
catch(err){

    }
    
}

form.addEventListener('submit',(event)=> {
    event.preventDefault();
    const info = searchBar.value;
    displayData(info);
    searchBar.value = '';
})

toggleButton.addEventListener('click', ()=>{
    if(toggleButton.innerHTML === 'F'){
        toggleButton.innerHTML = 'C';
        const city = location.innerHTML;
        displayData(city);
        
    }else{
        toggleButton.innerHTML = 'F';
        const city = location.innerHTML;
        displayData(city);
    }
})

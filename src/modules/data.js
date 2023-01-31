export const getLocation = async function (location){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f824c9a258641470aebe27d4e0e686d3`
    , {mode:"cors"});
    const json = await response.json();
    const weatherData = {
        name: json.name,
        temp: json.main.temp,
        feelsLike: json.main.feels_like,
        humidity: json.main.humidity,
        low: json.main.temp_min,
        high: json.main.temp_max,
        weather: json.weather[0].main,
        wind: json.wind.speed
    };
    return weatherData;
}

export async function logObject(location){
    const response = await getLocation(location);
    console.log(response);
}
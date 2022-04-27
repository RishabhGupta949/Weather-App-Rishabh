//JS
const api = {
    key: "302e144519c83549e57bf5ca180ea48c",
    base: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener('keyup', setQuery);


function setQuery(event) {
    if (event.key === 'Enter') {
        getResults(searchbox.value);
    }
}

function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  .then(weather =>{
      return weather.json();
  }).then(showresults);
}

function showresults (weather){
    console.log(weather);
    const city = document.querySelector(".city");
    city.innerText = `${weather.name} , ${weather.sys.country}` ;

    let now = new Date();
    let date = document.querySelector(".date");
    date.innerText = dateBuild(now);

    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>` ;

    let weather_type = document.querySelector(".weather");
    weather_type.innerText = `${weather.weather[0].main}` ;


    let hi_low = document.querySelector(".hi-low");
    hi_low.innerText = `${Math.round(weather.main.temp_min)} °C /  ${Math.round(weather.main.temp_max)} °C` ;


}

function dateBuild(d){
let months  = [ "January","February","March","April","May","June","July","August", "September","October", "November","December"];
let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
 
return `${day} ${date} ${month} ${year}`
}


function updateClock() {
    const now = new Date();
    const clock = document.getElementById("clock");
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    const fullDate = `${date}/${month}/${year}`;
    clock.textContent = `${fullDate} ${time}`;
}
setInterval(updateClock, 1000);


let weer = fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.39093389936427&lon=4.856288216120264&units=metric&appid=7d2e5fa7b627acc6c82007d07cb03446")
    .then(function(response){
    return response.json();
})
.then(function(realData){
    temp = realData.main.temp
    min = realData.main.temp_min
    max = realData.main.temp_max
    like = realData.main.feels_like
    weer = realData.weather[0].description
    iconss = realData.weather[0].icon

const weertje = document.getElementById("js--weer")
        weather.innerText = weer})

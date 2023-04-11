function updateClock() {
    const now = new Date();
    const clock = document.getElementById("js--clock");
    const dates = document.getElementById("js--date");
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    const fullDate = `${date}/${month}/${year}`;
    clock.textContent = `${time}`;
    dates.textContent = `${fullDate}`;
}

setInterval(updateClock, 1000);



fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.39093389936427&lon=4.856288216120264&units=metric&appid=7d2e5fa7b627acc6c82007d07cb03446")
    .then(function(response) {
    return response.json();
    })
    .then(function(realData) {
    const temp = realData.main.temp;
    const min = realData.main.temp_min;
    const max = realData.main.temp_max;
    const like = realData.main.feels_like;
    const weather = realData.weather[0].description;
    const icon = realData.weather[0].icon;

    const tempratuur = document.getElementById("js--temp");
    tempratuur.innerText = temp + " °C";

    const weer = document.getElementById("js--weather");
    weer.innerText = weather;

    const weericon = document.getElementById("js--icon").setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");
});

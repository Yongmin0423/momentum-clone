const API_KEY = "f77ce215b0bbf555422ae08fed7e3d47";

const onGeoOk = async (position) => {
  try {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:nth-child(2)");
    const temp = document.querySelector("#weather div");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText = `${data.main.temp} ℃ `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

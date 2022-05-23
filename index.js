const apiKey = "943216857682093a1e6ba773a9600c97";
const timeContainer = document.querySelector("#time");
const date = new Date();
const day = date.getDay();
const time = date.toString().slice(16, 21);
const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
timeContainer.innerHTML = `${week[day]}, ${time}`;

const searchForm = document.querySelector("#search-from");
const currentCity = document.querySelector("#current-city");
const currentLocationBtn = document.querySelector("#current-location");
searchForm.addEventListener("submit", (e) => handleSearch(e));

const temp = document.querySelector("#temp");

function handleSearch(e) {
  let city = document.querySelector("#search-input").value;
  e.preventDefault();
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
    .then((res) => changeHeading(res));
}

function changeHeading(res) {
  currentCity.innerHTML = res.data.name;
  temp.innerHTML = Math.ceil(res.data.main.temp);
}
currentLocationBtn.addEventListener("click", handleCurrentLocation);

function handleCurrentLocation() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
    .then((res) => changeHeading(res));
}
// const degree = document.querySelector("#degree");
// const convertLink = document.querySelector(".farenheit");

// convertLink.addEventListener("click", () => {
//   if (convertLink.className === "farenheit") {
//     temp.innerHTML = ((+temp.innerHTML * 9) / 5 + 32).toFixed(1);
//     degree.innerHTML = "'F";
//     convertLink.className = "celcius";
//     convertLink.innerHTML = "Convert to Celcius";
//   } else {
//     temp.innerHTML = (((+temp.innerHTML - 32) * 5) / 9).toFixed(1);
//     degree.innerHTML = "'C";
//     convertLink.className = "farenheit";
//     convertLink.innerHTML = "Convert to Farenheit";
//   }
// });

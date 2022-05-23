console.log("joined");
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

const city = prompt("Enter a city...").toLowerCase();

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

if (weather[`${city.toLowerCase()}`]) {
  alert(
    `It is currently ${Math.round(
      weather[`${city}`].temp
    )}°C in ${city} with a humidity of ${weather[`${city}`].humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

const searchForm = document.querySelector("#search-from");
const currentCity = document.querySelector("#current-city");

searchForm.addEventListener("submit", (e) => handleSearch(e));

function handleSearch(e) {
  e.preventDefault();
  let city = document.querySelector("#search-input").value;
  currentCity.innerHTML = city;
}

const temp = document.querySelector("#temp");
const degree = document.querySelector("#degree");
const convertLink = document.querySelector(".farenheit");

convertLink.addEventListener("click", () => {
  if (convertLink.className === "farenheit") {
    temp.innerHTML = ((+temp.innerHTML * 9) / 5 + 32).toFixed(1);
    degree.innerHTML = "'F";
    convertLink.className = "celcius";
    convertLink.innerHTML = "Convert to Celcius";
  } else {
    temp.innerHTML = (((+temp.innerHTML - 32) * 5) / 9).toFixed(1);
    degree.innerHTML = "'C";
    convertLink.className = "farenheit";
    convertLink.innerHTML = "Convert to Farenheit";
  }
});

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//My API key
const apiKey = "18bb7e5325abcfee63c18693a2332ed9";
const imperial = "imperial";
//Request URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${49.75}&lon=${6.64}&units=${imperial}&appid=${apiKey}`;

//Asynchronous function

// Use OpenWeatherMap API
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Output data to the console for testing
      // Extract and display specific weather data
      currentTemp.textContent = data.main.temp;
      captionDesc.textContent = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/w/${iconCode}.png`;
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error); // Output any try error to the console
  }
}

// Invoke the Function
apiFetch();


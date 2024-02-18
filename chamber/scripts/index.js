//store the selected elements that we are going to use.
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

//Add a click event istener to the hamburger button and 
// use a callback function that toggles the list element's 
// list of classes
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Fridays", "Saturday"
];

//month long details
const monthNames = [
    "January","February","March","April","May","June","July",
    "Äugust","September","October","November","December"
];

const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = monthNames[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
document.getElementById("currentyear").textContent = year;
const currentdate = "     " + dayName + ", " + todaysdate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();

document.getElementById("currentdate").textContent = currentdate;
document.getElementById("lastModified").textContent = currentdate;

//Toggle Dark Mode 
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

// Check if there is a previous visit date in localStorage
document.addEventListener("DOMContentLoaded", function() {
	var lastVisit = localStorage.getItem("lastVisit");
	var currentVisit = new Date(); // Current date and time
  
	if (lastVisit === null) {
	  // First visit
	  document.getElementById("visit").innerText = "Welcome! Let us know if you have any questions.";
	} else {
	  lastVisit = new Date(lastVisit);
	  var timeDiff = currentVisit - lastVisit; // Time difference in milliseconds
	  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert time difference to days
  
	  if (daysDiff < 1) {
		// Less than a day
		document.getElementById("visit").innerText = "Back so soon! Awesome!";
	  } else {
		// More than a day
		var message = "You last visited " + daysDiff + " day" + (daysDiff === 1 ? "" : "s") + " ago.";
		document.getElementById("visit").innerText = message;
	  }
	}
  
	// Update the last visit date in localStorage
	localStorage.setItem("lastVisit", currentVisit);
  });
  

  //Timestamp
  document.getElementById("timestamp").value = new Date().toISOString();



  //WEATHER
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//My API key
const apiKey = "18bb7e5325abcfee63c18693a2332ed9";
const imperial = "imperial";
//Request URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${5.53}&lon=${-0.42}&units=${imperial}&appid=${apiKey}`;

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


//Chamber Home Page Banner
const banner = document.getElementById("banner");

        
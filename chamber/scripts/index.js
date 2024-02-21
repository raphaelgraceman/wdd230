//store the selected elements that we are going to use.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

//Add a click event istener to the hamburger button and 
// use a callback function that toggles the list element's 
// list of classes
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
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
  // Set a timeout to change the text after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    lastVisit.textContent = "continue to explore the page";}, 3000);
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

// Display the banner only on Mondays, Tuesdays, and Wednesdays
if (dayName >= 1 && dayName <= 3) {
	document.getElementById("banner").style.display = "block";
}

// Function to close the banner
function closeBanner() {
	document.getElementById("banner").style.display = "none";
}

        
//Sportlight Advertisement
fetch("data/members.json")
.then(response => response.json())
.then(data => {
  const members = data.members;
  const qualifiedMembers = members.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");
  const awardWinner = members.filter(member => member.membershipLevel === "Silver");

  // Shuffle the qualified members array
  const shuffledMembers = qualifiedMembers.sort(() => Math.random() - 0.5);
  const shuffledAwardWinners = awardWinner.sort(() => Math.random() - 0.5);

  // Select a random subset of members to display
  const randomMembers = shuffledMembers.slice(0, Math.min(1, shuffledMembers.length));
  const randomWinner = shuffledAwardWinners.slice(0, Math.min(1, shuffledMembers.length));

  const spotlightAdsContainer = document.getElementById("spotlightAds");
  const spotAdsContainer = document.getElementById("sports-1");
  randomMembers.forEach(member => {
    const adElement = document.createElement("p");
    const adsports = document.createElement("p");
    adElement.textContent = `Top Chamber Members: ${member.name} - ${member.membershipLevel} member`;
    adsports.textContent = `2024 Global Award Winner: ${member.name} - ${member.membershipLevel} member`;
    spotlightAdsContainer.appendChild(adElement);
    spotAdsContainer.appendChild(adsports);
  });
})
.catch(error => console.error("Error fetching JSON data:", error));

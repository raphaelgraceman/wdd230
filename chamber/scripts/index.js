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
  
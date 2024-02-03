//Get the current year
let currenDate = new Date();
let currentYear = currenDate.getFullYear();

//Get the id element in the DOC
let currentYearElement = document.getElementById("currentYear");

//update the content of the currentYearElement
currentYearElement.textContent = currentYear;



//Get current Date
let currentDateElement = document.getElementById("lastModified");
currentDateElement.textContent = currenDate;


//Hamburger Menu Items
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


//Page Visit Counter
const visitsDisplay = document.querySelector("#visits");

// Get the stored VALUE for the innitial Number of Visit KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("iNN-numVisits")) || 0;

// Determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = "This is your first 💡 visit. 🥳 Welcome!";
}

// Incrementing the number of visits by one.
numVisits++;

// store the new visit total into localStorage, key=iNN-numVisits
localStorage.setItem("iNN-numVisits", numVisits);


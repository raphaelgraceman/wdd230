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

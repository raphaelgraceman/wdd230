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
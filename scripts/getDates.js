//Get the current year
let currenDate = new Date();
let currentYear = currenDate.getFullYear();

//Get the id element in the DOC
let currentYearElement = document.getElementById("currentYear");

//update the content of the currentYearElement
currentYearElement.textContent = currentYear;



//Get current Date
let currentDateElement = document.getElementById("currentDate");
currentDateElement.textContent = currenDate;
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//get HTML content with the ID of cards
const cards = document.querySelector('#cards');

//create an Async function to fetch prophet data
async function getProphetsData() {
    //Store the response from the fetch() 
    //method in a const variable named "response"
    const response = await fetch(url)
    //Convert the response to a JSON object using .json
    //methid and store the results in a const variable
    //named data
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);

}

//call the function getProphetData() in 
//the main line of your code to test the fetch response
getProphetsData(); 

//Define a function expression named 
//"displayProphets" that handles a single 
//parameter named "prophets" somewhere in your js 
//file. Use an arrow expression to contain statements that will process the parameter 
//value and build a card for each prophet.
const displayProphets = (prophets) => {
    //card ID codes goes here
    prophets.forEach((prophets) => {
     // Create elements to add to the div.cards element
     let card = document.createElement('section');
     let fullName = document.createElement('h2'); 
     let portrait = document.createElement('img');
 
     // Build the h2 content out to show the prophet's full name
     fullName.textContent = `${prophets.name} ${prophets.lastname}`;
     // Build the image portrait by setting all the relevant attributes
     portrait.setAttribute('src', prophet.imageurl);
     portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`); // fill in the blank
     portrait.setAttribute('loading', 'lazy');
     portrait.setAttribute('width', '300');
     portrait.setAttribute('height', '320');
 
     // Append the section(card) with the created elements
     card.appendChild(fullName); //fill in the blank
     card.appendChild(portrait);
 
     cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
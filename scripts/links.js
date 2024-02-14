// links.js

// Define the base URL
const baseURL = "https://github.com/raphaelgraceman/wdd230";

// Define the URL for the links.json data file
const linksURL = "data/links.json";

// Asynchronous function to fetch the links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

// Function to display the activity links
function displayLinks(weeks) {
    const activityList = document.getElementById("learning-activities");
  
    weeks.forEach(week => {
      const weekItem = document.createElement("div");
      weekItem.textContent = week.week;
  
      const linksList = document.createElement("div");
      linksList.style.display = "flex"; // display to flex
      linksList.style.listStyle = "none"; // Remove list style
      linksList.style.textDecoration = "underline"; // Underline text
      linksList.style.color = "blue"; // Change the text color to blue
  
      week.links.forEach(link => {
        const linkItem = document.createElement("div");
        const anchor = document.createElement("a");
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
        linkItem.appendChild(anchor);
        linksList.appendChild(linkItem);
      });
  
      weekItem.appendChild(linksList);
      activityList.appendChild(weekItem);
    });
}

// Call the getLinks function to fetch and display the links
getLinks();



  
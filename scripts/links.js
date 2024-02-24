// links.js

// The base URL
const baseURL = "https://raphaelgraceman.github.io/wdd230/";

// my githubio link
const linksURL = "https://raphaelgraceman.github.io/wdd230/data/links.json";

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
      linksList.style.color = "black"; // Change the text color to blue
  
      week.links.forEach((link, index) => {
        const linkItem = document.createElement("div");
        const anchor = document.createElement("a");
        const anchor2 = document.createElement("span");
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
        linkItem.appendChild(anchor);
  
        // Add a vertical bar after each link (except the last one)
        if (index < week.links.length - 1) {
          const separator = document.createElement("span");
          separator.textContent = " | ";
          separator.style.color = "black";
          separator.style.padding = "10px";
          linkItem.appendChild(separator);
        }
  
        linksList.appendChild(linkItem);
        });
  
      weekItem.appendChild(linksList);
      activityList.appendChild(weekItem);
    });
}
  

// Call the getLinks function to fetch and display the links
getLinks();



  
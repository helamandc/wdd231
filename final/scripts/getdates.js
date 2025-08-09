// select the DOM elements for output
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = today.getFullYear()
//function to retrieve the last modified date
function displayLastModified() { const lastModified = document.lastModified; document.getElementById('lastModified').textContent = lastModified; }
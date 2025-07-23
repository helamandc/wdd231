// use the date object
const today1 = new Date();

year.innerHTML = today1.getFullYear()
//function to retrieve the last modified date
function displayTimeStamp() {
    const formTimestamp = document.lastModified;
    document.getElementById('formTimestamp').textContent = formTimestamp;
    console.log(formTimestamp)
}

displayTimeStamp()
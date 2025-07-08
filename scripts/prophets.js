const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); // temp output test of data response 

    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        //Creating section
        const card = document.createElement('section');

        //Creating h2 for full names
        const fullName = document.createElement('h2');

        //Picture of prophet
        const portrait = document.createElement('img');

        //Additional requirements
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');

        //Full name of prophet
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;


        //Attirubute for the picture
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '140');
        portrait.setAttribute('height', '180');

        //append both h2 and image into the card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);

        card.appendChild(portrait);

        //append the card to section
        cards.appendChild(card);
    });
};

getProphetData();

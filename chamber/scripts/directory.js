const member = './data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(member);
    const data = await response.json();
    //console.table(data); // temp output test of data response 

    displayMembers(data);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        //Creating section
        const card = document.createElement('section');

        //Creating h2 for full names
        const fullName = document.createElement('h2');

        //Picture of Member
        const portrait = document.createElement('img');

        //Additional requirements
        const birthDate = document.createElement('p');
        const birthPlace = document.createElement('p');

        //Full name of Member
        fullName.textContent = `${member.name} ${member.lastname}`;
        birthDate.textContent = `Date of Birth: ${member.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${member.birthplace}`;


        //Attirubute for the picture
        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.name} ${member.lastname}`);
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

getMemberData();

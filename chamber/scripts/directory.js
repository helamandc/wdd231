const memberData = './data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(memberData);
    const data = await response.json();
    //console.table(data.members); // temp output test of data response 

    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        //Creating section
        const card = document.createElement('section');

        //Icon of company
        const icon = document.createElement('img');

        //Creating h2 for company names
        const companyName = document.createElement('h2');

        //Additional requirements
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('p');

        //Full name of Member
        companyName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;


        //Attribute for the icon
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Icon of ${member.name}`);
        icon.setAttribute('loading', 'lazy');

        //append into the card
        card.appendChild(icon);
        card.appendChild(companyName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);



        //append the card to section
        cards.appendChild(card);
    });
};

getMemberData();

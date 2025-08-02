const discoverData = './data/discover.json';
const cards = document.querySelector('#cards');

// Set default grid view
cards.classList.add('grid');

async function getDiscoverData() {
    const response = await fetch(discoverData);
    const data = await response.json();

    displayDiscover(data.discover);
}

const displayDiscover = (discover) => {
    discover.forEach((discovery) => {
        const card = document.createElement('section');

        // Image
        const photo = document.createElement('img');
        photo.setAttribute('src', discovery.photos);
        photo.setAttribute('alt', `Photo of ${discovery.name}`);
        photo.setAttribute('loading', 'lazy');

        // Content container
        const textWrapper = document.createElement('div');
        textWrapper.classList.add('card-text');

        // Name
        const companyName = document.createElement('h2');
        companyName.textContent = discovery.name;

        // Address
        const address = document.createElement('p');
        address.textContent = discovery.address;
        address.classList.add('address');

        // Description
        const description = document.createElement('p');
        description.textContent = discovery.description;
        description.classList.add('description');

        // Assemble card
        textWrapper.appendChild(companyName);
        textWrapper.appendChild(address);
        textWrapper.appendChild(description);

        card.appendChild(photo);
        card.appendChild(textWrapper);
        cards.appendChild(card);
    });
};

getDiscoverData();

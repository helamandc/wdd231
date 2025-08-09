import { getEventsData1 } from './getevents.mjs';

const eventsData = './data/events.json';
const cards = document.querySelector('#cards');

// Create modal container
const modal = document.createElement('dialog');
modal.classList.add('event-modal');
document.body.appendChild(modal);

// Function to open modal
function openModal(photoSrc, descriptionText, eventName) {
    modal.innerHTML = `
        <button class="close-modal">✖</button>
        <h2>${eventName}</h2>
        <img src="${photoSrc}" alt="Photo of ${eventName}" loading="lazy" />
        <p>${descriptionText}</p>
    `;
    modal.showModal();

    // Close button functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.close();
    });
}

const displayEvents = (events) => {
    events.forEach((event) => {
        const card = document.createElement('section');
        card.classList.add('event-card');

        // Content container
        const textWrapper = document.createElement('div');
        textWrapper.classList.add('card-text');

        // Name
        const eventName = document.createElement('h2');
        eventName.textContent = event.event;

        // Schedule
        const schedule = document.createElement('p');
        schedule.textContent = event.schedule;
        schedule.classList.add('schedule');

        // Location
        const location = document.createElement('p');
        location.textContent = event.location;
        location.classList.add('location');

        // Assemble card
        textWrapper.appendChild(eventName);
        textWrapper.appendChild(schedule);
        textWrapper.appendChild(location);
        card.appendChild(textWrapper);
        cards.appendChild(card);

        // Add click event to open modal
        card.addEventListener('click', () => {
            openModal(event.photos, event.description, event.event);
        });
    });
};

getEventsData1(eventsData, displayEvents);

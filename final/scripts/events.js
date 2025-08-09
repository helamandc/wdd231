import { getEventsData1 } from './getevents.mjs';

const eventsData = './data/events.json';
const cards = document.querySelector('#cards');

// Set default grid view
cards.classList.add('grid');

const displayEvents = (events) => {
    events.forEach((event) => {
        const card = document.createElement('section');

        // Image
        const photo = document.createElement('img');
        photo.setAttribute('src', event.photos);
        photo.setAttribute('alt', `Photo of ${event.event}`);
        photo.setAttribute('loading', 'lazy');

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

        // Description
        const description = document.createElement('p');
        description.textContent = event.description;
        description.classList.add('description');

        // Assemble card
        textWrapper.appendChild(eventName);
        textWrapper.appendChild(schedule);
        textWrapper.appendChild(location);
        textWrapper.appendChild(description);

        card.appendChild(photo);
        card.appendChild(textWrapper);
        cards.appendChild(card);
    });
};

getEventsData1(eventsData, displayEvents);

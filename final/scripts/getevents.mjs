async function getEventsData() {
    const response = await fetch(eventsData);
    const data = await response.json();

    displayEvents(data.events);
}

export async function getEventsData1(eventsData, displayEvents) {
    const response = await fetch(eventsData);
    const data = await response.json();

    displayEvents(data.events);
}
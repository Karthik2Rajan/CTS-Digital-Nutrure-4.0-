const events = [
  { name: "Community Cleanup Day", date: "2025-06-15", seats: 5 },
  { name: "Neighborhood BBQ", date: "2024-04-10", seats: 0 },
  { name: "Charity Run", date: "2025-07-20", seats: 10 },
  { name: "Book Fair", date: "2023-12-01", seats: 3 },
];

const today = new Date();

function isValidEvent(event) {
  const eventDate = new Date(event.date);
  return eventDate >= today && event.seats > 0;
}


events.forEach(event => {
  if (isValidEvent(event)) {
    console.log(`Event: ${event.name} | Date: ${event.date} | Seats Available: ${event.seats}`);
  } else {
    console.log(`Event "${event.name}" is not available for registration.`);
  }
});

function registerForEvent(event) {
  try {
    if (!isValidEvent(event)) {
      throw new Error("Event is either full or already passed.");
    }
    event.seats--;
    console.log(`Successfully registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (error) {
    console.error(`Registration failed: ${error.message}`);
  }
}


registerForEvent(events[0]); 
registerForEvent(events[1]); 
registerForEvent(events[3]); 
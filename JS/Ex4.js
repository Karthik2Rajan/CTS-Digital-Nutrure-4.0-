const events = [
  { id: 1, name: "Community Cleanup Day", date: "2025-06-15", seats: 5, category: "Environment" },
  { id: 2, name: "Neighborhood BBQ", date: "2025-08-10", seats: 20, category: "Social" },
  { id: 3, name: "Charity Run", date: "2025-07-20", seats: 10, category: "Health" },
];


function addEvent(eventList, newEvent) {
  eventList.push(newEvent);
  console.log(`Event "${newEvent.name}" added.`);
}

function createRegistrationTracker() {
  const registrations = {};

  return {
    register: (category) => {
      registrations[category] = (registrations[category] || 0) + 1;
      console.log(`Total registrations for ${category}: ${registrations[category]}`);
    },
    getTotal: (category) => registrations[category] || 0,
  };
}

const registrationTracker = createRegistrationTracker();


function registerUser(eventList, eventId) {
  const event = eventList.find(e => e.id === eventId);
  if (!event) {
    console.error("Event not found.");
    return;
  }
  if (event.seats > 0) {
    event.seats--;
    registrationTracker.register(event.category);
    console.log(`User registered for "${event.name}". Seats left: ${event.seats}`);
  } else {
    console.log(`No seats left for "${event.name}".`);
  }
}

function filterEventsByCategory(eventList, filterCallback) {
  return eventList.filter(filterCallback);
}




addEvent(events, { id: 4, name: "Local Art Show", date: "2025-09-05", seats: 15, category: "Art" });


registerUser(events, 1);
registerUser(events, 2);
registerUser(events, 2);


const socialEvents = filterEventsByCategory(events, event => event.category === "Social");
console.log("Social Events:", socialEvents);

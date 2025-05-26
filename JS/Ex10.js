const events = [
  { id: 1, name: "Workshop on Baking", seats: 5, category: "Cooking" },
  { id: 2, name: "Local Music Festival", seats: 10, category: "Music" },
  { id: 3, name: "Jazz Night", seats: 0, category: "Music" },
  { id: 4, name: "Art Exhibition", seats: 7, category: "Art" },
];


const filterEvents = (eventList = [], category = "all") => {

  const eventsCopy = [...eventList];
  return category === "all"
    ? eventsCopy
    : eventsCopy.filter(({ category: cat }) => cat === category);
};

const selectedCategory = "Music";
const filteredEvents = filterEvents(events, selectedCategory);

filteredEvents.forEach(({ id, name, seats }) => {
  console.log(`ID: ${id}, Event: ${name}, Seats: ${seats}`);
});

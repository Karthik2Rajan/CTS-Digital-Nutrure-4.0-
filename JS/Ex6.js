const communityEvents = [
  { id: 1, name: "Workshop on Baking", category: "Cooking" },
  { id: 2, name: "Local Music Festival", category: "Music" },
  { id: 3, name: "Jazz Night", category: "Music" },
];

communityEvents.push({ id: 4, name: "Art Exhibition", category: "Art" });
console.log("Events after adding new one:", communityEvents);


const musicEvents = communityEvents.filter(event => event.category === "Music");
console.log("Music Events:", musicEvents);

const displayCards = communityEvents.map(event => `Event: ${event.name}`);
console.log("Display Cards:", displayCards);

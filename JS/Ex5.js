class Event {
  constructor(name, date, seats, category) {
    this.name = name;
    this.date = new Date(date);
    this.seats = seats;
    this.category = category;
  }
}


Event.prototype.checkAvailability = function () {
  const today = new Date();
  return this.seats > 0 && this.date >= today;
};


const event1 = new Event("Community Cleanup Day", "2025-06-15", 5, "Environment");


console.log(`${event1.name} available?`, event1.checkAvailability());


for (const [key, value] of Object.entries(event1)) {
  console.log(`${key}: ${value}`);
}

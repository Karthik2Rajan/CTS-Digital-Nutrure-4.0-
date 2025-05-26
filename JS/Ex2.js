const eventName = "Community Cleanup Day";
const eventDate = "2025-06-15";
let availableSeats = 25;


const eventInfo = `Event: ${eventName} | Date: ${eventDate} | Seats Available: ${availableSeats}`;
console.log(eventInfo);

availableSeats--;
console.log(`Seats after registration: ${availableSeats}`);


availableSeats++;
console.log(`Seats after cancellation: ${availableSeats}`);

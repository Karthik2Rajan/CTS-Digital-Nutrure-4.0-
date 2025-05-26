const events = [
  { id: 1, name: "Workshop on Baking", category: "Cooking", seats: 5 },
  { id: 2, name: "Local Music Festival", category: "Music", seats: 10 },
  { id: 3, name: "Jazz Night", category: "Music", seats: 0 },
  { id: 4, name: "Art Exhibition", category: "Art", seats: 7 },
];


const container = document.querySelector("#events-container");
const filterSelect = document.querySelector("#category-filter");
const searchInput = document.querySelector("#search-input");

function renderEvents(filteredEvents) {
  container.innerHTML = "";
  filteredEvents.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = `Seats available: ${event.seats}`;

    const btnRegister = document.createElement("button");
    btnRegister.textContent = "Register";
    btnRegister.disabled = event.seats === 0;
    btnRegister.onclick = () => {
      if (event.seats > 0) {
        event.seats--;
        renderEvents(applyFilters());
      }
    };

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(btnRegister);

    container.appendChild(card);
  });
}

function applyFilters() {
  const selectedCategory = filterSelect.value;
  const searchTerm = searchInput.value.toLowerCase();

  return events.filter(event => {
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

filterSelect.onchange = () => {
  renderEvents(applyFilters());
};

searchInput.onkeydown = () => {
 
  setTimeout(() => {
    renderEvents(applyFilters());
  }, 0);
};

renderEvents(events);

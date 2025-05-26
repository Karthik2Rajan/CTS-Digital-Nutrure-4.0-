const events = [
  { id: 1, name: "Workshop on Baking", seats: 5 },
  { id: 2, name: "Local Music Festival", seats: 0 },
  { id: 3, name: "Jazz Night", seats: 10 },
];

const container = document.querySelector("#events-container");

// Function to render events
function renderEvents() {
  container.innerHTML = ""; 

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const seats = document.createElement("p");
    seats.textContent = `Seats available: ${event.seats}`;

    const btnRegister = document.createElement("button");
    btnRegister.textContent = "Register";
    btnRegister.disabled = event.seats === 0;

    btnRegister.addEventListener("click", () => {
      if (event.seats > 0) {
        event.seats--;
        updateUI();
      }
    });

    const btnCancel = document.createElement("button");
    btnCancel.textContent = "Cancel Registration";

    btnCancel.addEventListener("click", () => {
      event.seats++;
      updateUI();
    });

    card.appendChild(title);
    card.appendChild(seats);
    card.appendChild(btnRegister);
    card.appendChild(btnCancel);

    container.appendChild(card);
  });
}

function updateUI() {
  renderEvents();
}


renderEvents();

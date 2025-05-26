const eventsContainer = document.querySelector("#events-container");
const loadingSpinner = document.querySelector("#loading-spinner");

// Mock API endpoint (you can replace this with a real URL)
const apiURL = "https://mockapi.io/projects/your-project/events"; 

// --- Using .then() and .catch() ---
function fetchEventsWithThen() {
  loadingSpinner.style.display = "block"; 
  fetch(apiURL)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(events => {
      loadingSpinner.style.display = "none"; 
      renderEvents(events);
    })
    .catch(error => {
      loadingSpinner.style.display = "none"; 
      console.error("Fetch error:", error);
      eventsContainer.textContent = "Failed to load events.";
    });
}

// --- Using async/await ---
async function fetchEventsAsync() {
  try {
    loadingSpinner.style.display = "block"; 
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Network response was not ok");
    const events = await response.json();
    loadingSpinner.style.display = "none"; 
    renderEvents(events);
  } catch (error) {
    loadingSpinner.style.display = "none"; 
    console.error("Fetch error:", error);
    eventsContainer.textContent = "Failed to load events.";
  }
}


function renderEvents(events) {
  eventsContainer.innerHTML = "";
  events.forEach(event => {
    const div = document.createElement("div");
    div.textContent = `${event.name} - Seats: ${event.seats}`;
    eventsContainer.appendChild(div);
  });
}

fetchEventsAsync();

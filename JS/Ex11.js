const form = document.querySelector("#registration-form");

function showError(input, message) {
  const errorElem = input.nextElementSibling;
  errorElem.textContent = message;
  errorElem.style.color = "red";
}

function clearError(input) {
  const errorElem = input.nextElementSibling;
  errorElem.textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const { name, email, eventSelect } = form.elements;

  let valid = true;

  clearError(name);
  clearError(email);
  clearError(eventSelect);


  if (name.value.trim() === "") {
    showError(name, "Name is required.");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    showError(email, "Please enter a valid email.");
    valid = false;
  }

 
  if (eventSelect.value === "") {
    showError(eventSelect, "Please select an event.");
    valid = false;
  }

  if (valid) {
   
    console.log("Registration successful!");
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Selected Event:", eventSelect.value);

    form.reset();
  }
});

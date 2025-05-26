const form = document.querySelector("#registration-form");
const messageBox = document.querySelector("#message-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const { name, email, eventSelect } = form.elements;


  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: eventSelect.value,
  };

  messageBox.textContent = "";
  messageBox.style.color = "black";

  setTimeout(() => {
   
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        messageBox.style.color = "green";
        messageBox.textContent = "Registration successful! Your ID: " + data.id;
        form.reset();
      })
      .catch((error) => {
        messageBox.style.color = "red";
        messageBox.textContent = "Registration failed. Please try again.";
        console.error("Error:", error);
      });
  }, 1500); 
});

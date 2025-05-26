form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submit event triggered");

  const { name, email, eventSelect } = form.elements;

  const userData = {
    name: name.value.trim(),
    email: email.value.trim(),
    event: eventSelect.value,
  };
  
  console.log("User data prepared:", userData);

  setTimeout(() => {
    console.log("Starting fetch POST request...");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then(response => {
        console.log("Fetch response received:", response);
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        console.log("Fetch success, data:", data);
        messageBox.style.color = "green";
        messageBox.textContent = "Registration successful! Your ID: " + data.id;
        form.reset();
      })
      .catch(error => {
        console.error("Fetch error caught:", error);
        messageBox.style.color = "red";
        messageBox.textContent = "Registration failed. Please try again.";
      });
  }, 1500);
});

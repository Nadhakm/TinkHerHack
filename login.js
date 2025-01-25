// Select the form element
const loginForm = document.getElementById("login-form");

// Add an event listener for the form submission
loginForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Capture form data and store it in variables
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const homeLocation = document.getElementById("home-location").value;
  const email = document.getElementById("email-id").value;

  // Store the captured data (for now, just log it)
  console.log("Name:", name);
  console.log("Phone Number:", phone);
  console.log("Home Location:", homeLocation);
  console.log("Email ID:", email);

  window.location.href = "Emergency Contacts.html";
});

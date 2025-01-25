// Select the form and buttons
const contactForm = document.getElementById("contact");
const saveButton = document.querySelector(".mini[type='submit']");

// Add an event listener for the form submission
contactForm.addEventListener("submit", function (event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Capture form data and store it in variables
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email-id").value;

  // Store the data in localStorage (to transfer to another page)
  localStorage.setItem("contactName", name);
  localStorage.setItem("contactPhone", phone);
  localStorage.setItem("contactEmail", email);

  // Redirect to the index.html page
  window.location.href = "index.html";
});


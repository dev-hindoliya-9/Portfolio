// Simple form alert (you can integrate backend or email service later)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
});
document.getElementById("learnMoreBtn").addEventListener("click", function() {
    alert("Thank you for your interest in EcoBottle! Please scroll down to learn more.");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    alert(`Thank you, ${name}! We will contact you soon at ${email}.`);
    this.reset(); // Reset the form after submission
});

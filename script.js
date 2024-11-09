// Smooth scrolling between sections
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // offset for navigation bar
        behavior: 'smooth'
    });
}

// Contact Form Submission (basic validation)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Basic validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Normally, you would send the data to a server here
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

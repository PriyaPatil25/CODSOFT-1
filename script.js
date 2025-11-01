// Simple mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close menu when link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// ---------------------------
// ✅ EMAILJS CONTACT FORM CODE
// ---------------------------
(function() {
    emailjs.init("ytU4aeCJrFBpugdC7"); // <-- replace with your actual Public Key
})();

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('⚠️ Please fill all fields');
            return;
        }

        // EmailJS parameters
        const params = {
            from_name: name,
            from_email: email,
            message: message
        };

        emailjs.send("service_reb8l3i", "template_cbemypo", params)
            .then(() => {
                alert('✅ Thank you ' + name + '! Your message has been sent successfully.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                alert('❌ Failed to send message. Please try again later.');
            });
    });
}

// Smooth scrolling for navigation links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const element = document.querySelector(href);
        
        if (element) {
            e.preventDefault();
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

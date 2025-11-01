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

// Contact form handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill all fields');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Please enter valid email');
            return;
        }
        
        alert('Thank you ' + name + '! Your message has been sent.');
        contactForm.reset();
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
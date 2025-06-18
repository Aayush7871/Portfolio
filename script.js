// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Toggle mobile menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

hamburger.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            body.style.overflow = '';
        }
    }, 250);
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.classList.remove('nav-open');
            }
        }
    });
});

// Form Validation
const contactForm = document.querySelector('.contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });

    input.addEventListener('input', () => {
        validateInput(input);
    });
});

function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch(input.type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = emailRegex.test(value);
            errorMessage = 'Please enter a valid email address';
            break;
        case 'text':
            isValid = value.length >= 2;
            errorMessage = 'Please enter at least 2 characters';
            break;
        case 'textarea':
            isValid = value.length >= 10;
            errorMessage = 'Please enter at least 10 characters';
            break;
    }

    input.classList.toggle('invalid', !isValid);
    return isValid;
}

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const isValid = Array.from(formInputs).every(validateInput);
    
    if (!isValid) {
        return;
    }

    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        contactForm.reset();
        alert('Message sent successfully!');
    } catch (error) {
        alert('Failed to send message. Please try again.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
});
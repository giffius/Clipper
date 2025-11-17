// ============================================
// CLIPPER WEB DESIGN - JAVASCRIPT
// Mobile-First Vanilla JavaScript (ES6+)
// ============================================

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // Toggle active class on both button and menu
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a nav link (mobile only)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        // Close menu when clicking outside (mobile only)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// ============================================
// AUDIT FORM VALIDATION AND SUBMISSION
// ============================================

const auditForm = document.getElementById('auditForm');

if (auditForm) {
    auditForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        clearErrors();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const website = document.getElementById('website').value.trim();
        
        // Validation flag
        let isValid = true;
        
        // Validate Full Name (not empty)
        if (fullName === '') {
            showError('nameError', 'Please enter your full name.');
            isValid = false;
        }
        
        // Validate Email (contains @ symbol)
        if (email === '') {
            showError('emailError', 'Please enter your email address.');
            isValid = false;
        } else if (!email.includes('@')) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }
        
        // Validate Website URL (not empty)
        if (website === '') {
            showError('websiteError', 'Please enter your website URL.');
            isValid = false;
        }
        
        // If validation passes, show success message
        if (isValid) {
            // Hide the form
            auditForm.style.display = 'none';
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            const submittedEmail = document.getElementById('submittedEmail');
            submittedEmail.textContent = email;
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // In a real implementation, you would send this data to a server
            console.log('Audit form submitted:', { fullName, email, website });
        }
    });
}

// ============================================
// CONTACT FORM VALIDATION AND SUBMISSION
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous error messages
        clearContactErrors();
        
        // Get form values
        const contactName = document.getElementById('contactName').value.trim();
        const contactEmail = document.getElementById('contactEmail').value.trim();
        const contactMessage = document.getElementById('contactMessage').value.trim();
        
        // Validation flag
        let isValid = true;
        
        // Validate Name (not empty)
        if (contactName === '') {
            showError('contactNameError', 'Please enter your name.');
            isValid = false;
        }
        
        // Validate Email (contains @ symbol)
        if (contactEmail === '') {
            showError('contactEmailError', 'Please enter your email address.');
            isValid = false;
        } else if (!contactEmail.includes('@')) {
            showError('contactEmailError', 'Please enter a valid email address.');
            isValid = false;
        }
        
        // Validate Message (not empty)
        if (contactMessage === '') {
            showError('contactMessageError', 'Please enter a message.');
            isValid = false;
        }
        
        // If validation passes, show success message
        if (isValid) {
            // Hide the form
            contactForm.style.display = 'none';
            
            // Show success message
            const successMessage = document.getElementById('contactSuccessMessage');
            const submittedEmail = document.getElementById('contactSubmittedEmail');
            submittedEmail.textContent = contactEmail;
            successMessage.style.display = 'block';
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // In a real implementation, you would send this data to a server
            console.log('Contact form submitted:', { contactName, contactEmail, contactMessage });
        }
    });
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Display error message for a specific form field
 * @param {string} errorId - ID of the error message element
 * @param {string} message - Error message to display
 */
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Clear all error messages in audit form
 */
function clearErrors() {
    const errorElements = ['nameError', 'emailError', 'websiteError'];
    errorElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
        }
    });
}

/**
 * Clear all error messages in contact form
 */
function clearContactErrors() {
    const errorElements = ['contactNameError', 'contactEmailError', 'contactMessageError'];
    errorElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = '';
            element.style.display = 'none';
        }
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal anchor links (not empty hash)
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

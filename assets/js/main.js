// Custom JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form validation (if needed)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // You would add your form submission logic here
            // This is just a placeholder for demonstration
            
            // For now, just show the thank you message
            const thankYouMessage = document.createElement('div');
            thankYouMessage.className = 'mt-4 text-green-600 font-medium';
            thankYouMessage.textContent = 'Thank you for your message. We\'ll get back to you shortly!';
            
            contactForm.appendChild(thankYouMessage);
            
            // Reset form
            contactForm.reset();
        });
    }
});
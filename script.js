document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    
    // Add click animations to buttons
    const buttons = document.querySelectorAll('.contact-btn, .know-more-btn, .option');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add active states for nav links
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(l => {
                l.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});
 // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }

        // Function to handle scroll animations
        function handleScrollAnimations() {
            const circleImages = document.querySelectorAll('.circle-image');
            const aboutSection = document.getElementById('about');
            
            // Only run animation if about section is in viewport
            if (isInViewport(aboutSection)) {
                circleImages.forEach((circle, index) => {
                    // Add a slight delay based on index for staggered animation
                    setTimeout(() => {
                        circle.classList.add('show');
                    }, index * 150);
                });
                
                // Remove scroll listener once animations are triggered
                if (circleImages[0].classList.contains('show')) {
                    window.removeEventListener('scroll', handleScrollAnimations);
                }
            }
        }

        // Initial check on load
        document.addEventListener('DOMContentLoaded', function() {
            handleScrollAnimations();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScrollAnimations);
            
            // Also trigger on resize to handle position changes
            window.addEventListener('resize', handleScrollAnimations);
        });
        // Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate title on load
            setTimeout(() => {
                document.querySelector('.section-title').classList.add('active');
            }, 300);

            // Animate cards on scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('active');
                        }, parseInt(entry.target.dataset.delay) || 0);
                    }
                });
            }, {
                threshold: 0.1
            });

            // Observe all service cards
            document.querySelectorAll('.service-card').forEach(card => {
                observer.observe(card);
            });

            // Initial animation for cards that are already visible
            if (window.innerHeight > document.querySelector('.services-section').getBoundingClientRect().top) {
                document.querySelectorAll('.service-card').forEach(card => {
                    setTimeout(() => {
                        card.classList.add('active');
                    }, parseInt(card.dataset.delay) || 0);
                });
            }
        });
           document.addEventListener('DOMContentLoaded', function() {
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
                    rect.bottom >= 0
                );
            }
            
            // Elements to animate
            const sectionTitle = document.querySelector('.section-title');
            const featureItems = document.querySelectorAll('.feature-item');
            const featuresImage = document.querySelector('.features-image');
            
            // Function to handle scroll animation
            function animateOnScroll() {
                // Animate title
                if (isInViewport(sectionTitle) && !sectionTitle.classList.contains('active')) {
                    sectionTitle.classList.add('active');
                }
                
                // Animate features image
                if (isInViewport(featuresImage) && !featuresImage.classList.contains('active')) {
                    featuresImage.classList.add('active');
                }
                
                // Animate feature items with delay
                featureItems.forEach((item, index) => {
                    if (isInViewport(item) && !item.classList.contains('active')) {
                        // Add delay for cascade effect
                        setTimeout(() => {
                            item.classList.add('active');
                        }, 150 * index);
                    }
                });
            }
            
            // Run on page load
            animateOnScroll();
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
            
            // For smoother animations on mobile
            window.addEventListener('touchmove', animateOnScroll);
            
            // Re-check animations on window resize
            window.addEventListener('resize', animateOnScroll);
        });
        // Animation for results cards
document.addEventListener('DOMContentLoaded', function() {
    // Animate result cards on scroll
    const resultCards = document.querySelectorAll('.result-card');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Function to add animation to visible elements
    function animateVisibleElements() {
        resultCards.forEach(card => {
            if (isInViewport(card)) {
                // Get the delay attribute or default to 0
                const delay = card.getAttribute('data-aos-delay') || 0;
                
                // Add animation with appropriate delay
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, delay);
            }
        });
    }
    
    // Initial check when page loads
    animateVisibleElements();
    
    // Check again when user scrolls
    window.addEventListener('scroll', animateVisibleElements);
    
    
    
    
    // Run score animations when the NEET/JEE section becomes visible
   
});

// Contact section animations and form handling
document.addEventListener('DOMContentLoaded', function() {
    // Elements for animations
    const contactSection = document.querySelector('.contact-section');
    const contactContainer = document.querySelector('.contact-container');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const infoItems = document.querySelectorAll('.info-item');
    const formGroups = document.querySelectorAll('.form-group');
    
    // Add animation classes
    contactContainer.classList.add('fade-in');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.5s ease ${0.2 + (index * 0.1)}s`;
    });
    
    formGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = `all 0.5s ease ${0.2 + (index * 0.1)}s`;
    });
    
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactContainer.classList.add('visible');
                
                setTimeout(() => {
                    infoItems.forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    });
                    
                    formGroups.forEach(group => {
                        group.style.opacity = '1';
                        group.style.transform = 'translateY(0)';
                    });
                }, 300);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(contactSection);
    
    // Form validation and handling
    const contactFormElement = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const classInput = document.getElementById('class');
    const emailInput = document.getElementById('email');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = 'Thank you! Your message has been sent successfully.';
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Remove previous error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('input.error').forEach(el => el.classList.remove('error'));
        
        // Validate name
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        }
        
        // Validate phone (simple validation)
        if (phoneInput.value.trim() === '') {
            showError(phoneInput, 'Phone number is required');
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(phoneInput.value.trim())) {
            showError(phoneInput, 'Please enter a valid 10-digit phone number');
            isValid = false;
        }
        
        // Validate class
        if (classInput.value.trim() === '') {
            showError(classInput, 'Class is required');
            isValid = false;
        }
        
        // Validate email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(input, message) {
        input.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentElement.appendChild(errorElement);
    }
    
    // Form submit handler
    contactFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Show loading animation
            submitBtn.textContent = 'Submitting...';
            submitBtn.classList.add('submitting');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                submitBtn.classList.remove('submitting');
                contactFormElement.style.display = 'none';
                contactForm.appendChild(successMessage);
                successMessage.style.display = 'block';
                
                // Reset form
                contactFormElement.reset();
                submitBtn.textContent = 'Submit';
                submitBtn.disabled = false;
                
                // Hide success message after 5 seconds and show form again
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    contactFormElement.style.display = 'block';
                }, 5000);
            }, 1500);
        }
    });
    
    // Input focus effects
    const formInputs = document.querySelectorAll('.form-group input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
    
    // Mobile optimizations
    function handleResponsiveChanges() {
        if (window.innerWidth <= 768) {
            contactInfo.style.borderRadius = '0 0 10px 10px';
            contactForm.style.borderRadius = '10px 10px 0 0';
        } else {
            contactInfo.style.borderRadius = '10px 0 0 10px';
            contactForm.style.borderRadius = '0 10px 10px 0';
        }
    }
    
    // Initial call and window resize event
    handleResponsiveChanges();
    window.addEventListener('resize', handleResponsiveChanges);
});

// Contact button functionality - scroll to contact section
document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.contact-btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contactSection = document.getElementById('contact');
            
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});




    // Splash screen hide after 3 seconds
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        setTimeout(() => {
            splashScreen.style.opacity = '0';
            splashScreen.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                splashScreen.style.display = 'none';
            }, 500);
        }, 3000);
    }


    // Enhanced Features Carousel with debugging and fixes
class FeaturesCarousel {
    constructor() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initialize());
        } else {
            this.initialize();
        }
    }

    initialize() {
        // Get DOM elements with error checking
        this.wrapper = document.getElementById('featuresWrapper');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.indicatorsContainer = document.getElementById('indicators');
        
        // Debug logging
        console.log('Carousel Elements Found:', {
            wrapper: !!this.wrapper,
            prevBtn: !!this.prevBtn,
            nextBtn: !!this.nextBtn,
            indicators: !!this.indicatorsContainer
        });
        
        if (!this.wrapper) {
            console.error('Features wrapper not found! Make sure element with ID "featuresWrapper" exists.');
            return;
        }
        
        this.cards = Array.from(this.wrapper.children);
        this.currentIndex = 0;
        this.isAnimating = false;
        
        if (this.cards.length === 0) {
            console.warn('No cards found in features wrapper');
            return;
        }
        
        this.init();
    }

    init() {
        this.calculateDimensions();
        this.createIndicators();
        this.updateCarousel();
        this.bindEvents();
        this.handleResize();
        
        console.log('Carousel initialized with', this.cards.length, 'cards');
    }

    calculateDimensions() {
        const container = this.wrapper.parentElement;
        if (!container) return;
        
        const containerWidth = container.clientWidth;
        const card = this.cards[0];
        
        if (!card) return;
        
        // Get actual card width including margins
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth + 
            parseInt(cardStyle.marginLeft || '0') + 
            parseInt(cardStyle.marginRight || '0');
        
        // Calculate visible cards based on container width
        this.visibleCards = Math.max(1, Math.floor(containerWidth / cardWidth));
        this.cardWidth = cardWidth;
        
        // Calculate max index (how many slides we can make)
        this.maxIndex = Math.max(0, this.cards.length - this.visibleCards);
        
        // Ensure current index is within bounds
        this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
        
        console.log('Dimensions calculated:', {
            containerWidth,
            cardWidth: this.cardWidth,
            visibleCards: this.visibleCards,
            maxIndex: this.maxIndex
        });
    }

    createIndicators() {
        if (!this.indicatorsContainer) return;
        
        this.indicatorsContainer.innerHTML = '';
        const totalPages = this.maxIndex + 1;
        
        if (totalPages <= 1) return; // Don't create indicators if not needed
        
        for (let i = 0; i < totalPages; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.setAttribute('data-slide', i);
            indicator.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Indicator clicked:', i);
                this.goToSlide(i);
            });
            this.indicatorsContainer.appendChild(indicator);
        }
    }

    updateCarousel() {
        if (this.isAnimating) {
            console.log('Animation in progress, skipping update');
            return;
        }
        
        const translateX = -this.currentIndex * this.cardWidth;
        
        console.log('Updating carousel:', {
            currentIndex: this.currentIndex,
            translateX: translateX,
            cardWidth: this.cardWidth
        });
        
        // Ensure smooth transition
        this.wrapper.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        this.wrapper.style.transform = `translateX(${translateX}px)`;
        
        this.updateButtons();
        this.updateIndicators();
        
        // Prevent multiple animations
        this.isAnimating = true;
        setTimeout(() => {
            this.isAnimating = false;
            console.log('Animation completed');
        }, 300);
    }

    updateButtons() {
        const atStart = this.currentIndex === 0;
        const atEnd = this.currentIndex >= this.maxIndex;
        
        if (this.prevBtn) {
            this.prevBtn.disabled = atStart;
            this.prevBtn.style.opacity = atStart ? '0.5' : '1';
            this.prevBtn.style.cursor = atStart ? 'not-allowed' : 'pointer';
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = atEnd;
            this.nextBtn.style.opacity = atEnd ? '0.5' : '1';
            this.nextBtn.style.cursor = atEnd ? 'not-allowed' : 'pointer';
        }
        
        console.log('Buttons updated:', { atStart, atEnd });
    }

    updateIndicators() {
        if (!this.indicatorsContainer) return;
        
        const indicators = Array.from(this.indicatorsContainer.children);
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToSlide(slideIndex) {
        if (this.isAnimating) {
            console.log('Cannot go to slide - animation in progress');
            return;
        }
        
        const newIndex = Math.max(0, Math.min(slideIndex, this.maxIndex));
        console.log('Going to slide:', slideIndex, '-> normalized:', newIndex);
        
        this.currentIndex = newIndex;
        this.updateCarousel();
    }

    next() {
        console.log('Next button clicked. Current index:', this.currentIndex, 'Max:', this.maxIndex);
        
        if (this.isAnimating) {
            console.log('Animation in progress, ignoring next');
            return;
        }
        
        if (this.currentIndex >= this.maxIndex) {
            console.log('Already at last slide');
            return;
        }
        
        this.currentIndex++;
        this.updateCarousel();
    }

    prev() {
        console.log('Previous button clicked. Current index:', this.currentIndex);
        
        if (this.isAnimating) {
            console.log('Animation in progress, ignoring prev');
            return;
        }
        
        if (this.currentIndex <= 0) {
            console.log('Already at first slide');
            return;
        }
        
        this.currentIndex--;
        this.updateCarousel();
    }

    handleResize() {
        let resizeTimeout;
        
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                console.log('Handling resize');
                this.calculateDimensions();
                this.createIndicators();
                this.updateCarousel();
            }, 150);
        });
    }

    bindEvents() {
        // Button events with error checking
        if (this.nextBtn) {
            console.log('Binding next button event');
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Next button event fired');
                this.next();
            });
            
            // Ensure button is clickable
            this.nextBtn.style.pointerEvents = 'auto';
        } else {
            console.warn('Next button not found - make sure element with ID "nextBtn" exists');
        }
        
        if (this.prevBtn) {
            console.log('Binding prev button event');
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Previous button event fired');
                this.prev();
            });
            
            // Ensure button is clickable
            this.prevBtn.style.pointerEvents = 'auto';
        } else {
            console.warn('Previous button not found - make sure element with ID "prevBtn" exists');
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.activeElement.tagName === 'INPUT' || 
                document.activeElement.tagName === 'TEXTAREA') {
                return; // Don't interfere with form inputs
            }
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prev();
            }
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.next();
            }
        });
        
        console.log('All events bound successfully');
    }

    // Public method to manually trigger recalculation
    refresh() {
        console.log('Manually refreshing carousel');
        this.calculateDimensions();
        this.createIndicators();
        this.updateCarousel();
    }

    // Public method to get current state
    getState() {
        return {
            currentIndex: this.currentIndex,
            maxIndex: this.maxIndex,
            visibleCards: this.visibleCards,
            totalCards: this.cards.length,
            isAnimating: this.isAnimating
        };
    }
}

// Initialize carousel when script loads
// Make sure this runs after your HTML is loaded
let featuresCarousel;

// Option 1: Initialize immediately (use if script is at bottom of page)
featuresCarousel = new FeaturesCarousel();

// Option 2: Initialize on DOMContentLoaded (use if script is in head)
// document.addEventListener('DOMContentLoaded', () => {
//     featuresCarousel = new FeaturesCarousel();
// });

// Option 3: Initialize on window load (safest option)
// window.addEventListener('load', () => {
//     featuresCarousel = new FeaturesCarousel();
// });

// Make carousel globally accessible for debugging
window.featuresCarousel = featuresCarousel;
// Initialize when DOM is ready
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        studentClass: document.getElementById('class').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Format the message
    const whatsappMessage = `New Contact Form Submission:\n\n` +
                           `Name: ${formData.fullName}\n` +
                           `Email: ${formData.email}\n` +
                           `Phone: ${formData.phone}\n` +
                           `Class: ${formData.studentClass}\n` +
                           `Message: ${formData.message}`;

    // Clean and format the phone number
    const whatsappNumber = '918921928463'.replace(/\D/g, ''); // Remove all non-digits
    
    // Double-encode the message to handle special characters
    const encodedMessage = encodeURIComponent(whatsappMessage)
                          .replace(/'/g, "%27")
                          .replace(/\(/g, "%28")
                          .replace(/\)/g, "%29");
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Debugging - log the URL to console
    console.log("WhatsApp URL:", whatsappUrl);
    
    // Try multiple methods to open WhatsApp
    try {
        // Method 1: Standard window.open
        const newWindow = window.open(whatsappUrl, '_blank');
        
        // If window was blocked, try method 2
        if (!newWindow || newWindow.closed) {
            // Method 2: Create and click a link
            const link = document.createElement('a');
            link.href = whatsappUrl;
            link.target = '_blank';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // If still not working, method 3: Show URL to user
            setTimeout(() => {
                if(confirm("Couldn't open WhatsApp automatically. Copy the link to clipboard?")) {
                    navigator.clipboard.writeText(whatsappUrl)
                        .then(() => alert("Link copied! Please paste it in your browser."))
                        .catch(() => prompt("Please copy this URL:", whatsappUrl));
                }
            }, 500);
        }
    } catch (e) {
        console.error("Error opening WhatsApp:", e);
        prompt("Please copy this URL to open WhatsApp:", whatsappUrl);
    }
    
    this.reset();
});
// Alternative: Using event listeners
document.getElementById('first-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.know-more-btn').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
// =============================================
// SMOOTH SCROLLING & NAVIGATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't preventDefault for external links
            if (!this.hasAttribute('target')) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        // Close mobile menu if open
                        const navbarCollapse = document.querySelector('.navbar-collapse');
                        if (navbarCollapse.classList.contains('show')) {
                            const navbarToggler = document.querySelector('.navbar-toggler');
                            navbarToggler.click();
                        }
                        // Scroll to section
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });
});

// =============================================
// SCROLL TO TOP BUTTON
// =============================================

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// =============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Trigger animation for skill cards
            if (entry.target.classList.contains('skill-category')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
            // Trigger animation for project cards
            if (entry.target.classList.contains('project-card')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
            // Trigger animation for timeline items
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
            // Trigger progress bar animations
            if (entry.target.classList.contains('progress-fill')) {
                const percentage = entry.target.style.width;
                entry.target.style.animation = `growWidth 1.5s ease forwards`;
                entry.target.style.setProperty('--width', percentage);
            }
        }
    });
}, observerOptions);

// Observe all animatable elements
document.addEventListener('DOMContentLoaded', function() {
    const animatables = document.querySelectorAll(
        '.skill-category, .project-card, .timeline-item, .progress-fill, .certificate-item, .about-image'
    );
    animatables.forEach(element => observer.observe(element));
});

// =============================================
// FORM HANDLING
// =============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate API call
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent! ✓';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 3000);
            
            showNotification('Thank you! I will get back to you soon.', 'success');
        }, 1500);
    });
}

// =============================================
// NOTIFICATIONS
// =============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 10px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// =============================================
// TYPING ANIMATION
// =============================================

function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// =============================================
// COUNTER ANIMATION
// =============================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };
    
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
                counter.dataset.counted = true;
                countObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => countObserver.observe(counter));
}

// Start counter animation when page loads
document.addEventListener('DOMContentLoaded', animateCounters);

// =============================================
// PARALLAX EFFECT
// =============================================

document.addEventListener('scroll', function() {
    const starsBackground = document.querySelector('.stars-background');
    if (starsBackground) {
        const scrollPosition = window.scrollY;
        starsBackground.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
    }
});

// =============================================
// SMOOTH PAGE LOAD ANIMATION
// =============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    
    // Animate hero content
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) {
        heroTitle.style.animation = 'slideInLeft 0.8s ease 0.2s both';
    }
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'slideInLeft 0.8s ease 0.4s both';
    }
    if (heroDescription) {
        heroDescription.style.animation = 'slideInLeft 0.8s ease 0.6s both';
    }
});

// =============================================
// ACTIVE NAVIGATION LINK
// =============================================

window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =============================================
// KEYBOARD NAVIGATION
// =============================================

document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    }
    
    // Scroll to top with Home key
    if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// =============================================
// RESIZE LISTENER FOR RESPONSIVE ADJUSTMENTS
// =============================================

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle any resize-specific tasks
        console.log('Window resized');
    }, 250);
});

// =============================================
// ACCESSIBILITY - FOCUS VISIBLE
// =============================================

document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// =============================================
// LAZY LOADING SIMULATION
// =============================================

const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            //img.style.opacity = '0';
            img.onload = function() {
                img.style.transition = 'opacity 0.3s ease';
                img.style.opacity = '1';
            };
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// =============================================
// PREFETCH LINKS FOR FASTER NAVIGATION
// =============================================

function prefetchLinks() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        const element = document.querySelector(href);
        if (element) {
            link.addEventListener('mouseenter', function() {
                // Pre-load/prepare the section
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', prefetchLinks);

// =============================================
// PERFORMANCE OPTIMIZATION
// =============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for resize events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// =============================================
// CUSTOM CURSOR (OPTIONAL)
// =============================================

const createCursor = () => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(99, 102, 241, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        display: none;
    `;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });
    
    const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        cursor.style.left = (cursorX - 10) + 'px';
        cursor.style.top = (cursorY - 10) + 'px';
        
        requestAnimationFrame(animateCursor);
    };
    
    animateCursor();
    document.body.appendChild(cursor);
};

// Uncomment to enable custom cursor
// document.addEventListener('DOMContentLoaded', createCursor);

// =============================================
// PRINT STYLES
// =============================================

window.addEventListener('beforeprint', function() {
    document.body.style.background = 'white';
    document.body.style.color = 'black';
});

window.addEventListener('afterprint', function() {
    document.body.style.background = '';
    document.body.style.color = '';
});

// =============================================
// SERVICE WORKER FOR PWA (OPTIONAL)
// =============================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment to register service worker
        // navigator.serviceWorker.register('/sw.js').catch(function(err) {
        //     console.log('ServiceWorker registration failed: ', err);
        // });
    });
}

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize all components
    initializeElements();
});

function initializeElements() {
    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea');
    interactiveElements.forEach(element => {
        // Add focus styles for accessibility
        element.addEventListener('focus', function() {
            this.style.outline = 'none';
        });
    });
}

// =============================================
// CONSOLE WELCOME MESSAGE
// =============================================

console.log(
    '%cWelcome to Eslam\'s Portfolio!',
    'font-size: 20px; font-weight: bold; color: #6366f1;'
);
console.log(
    '%cFull Stack Developer | Cairo, Egypt',
    'font-size: 14px; color: #8b5cf6;'
);
console.log(
    '%cLet\'s build something amazing together!',
    'font-size: 12px; color: #cbd5e1;'
);

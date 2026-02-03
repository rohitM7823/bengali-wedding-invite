// Bengali Wedding Invitation - Interactive Features
// ================================================

// Wedding date: March 9, 2026 at 9:00 AM
const weddingDate = new Date('2026-03-09T09:00:00').getTime();

// Floating Stars Generation
function createFloatingStars() {
    const starsContainer = document.querySelector('.stars-container');
    if (!starsContainer) return;
    
    const numberOfStars = 30;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = Math.random() > 0.7 ? 'star star-large' : 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay and duration
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${3 + Math.random() * 2}s, ${15 + Math.random() * 10}s`;
        
        starsContainer.appendChild(star);
    }
}

// Initialize stars when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFloatingStars();
});

// Countdown Timer
// ===============
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update DOM elements
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    // If countdown is finished
    if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

// Scroll Animations
// =================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// Scroll Indicator Auto-hide
// ===========================
function initScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
    }
}

// Interactive Functions
// =====================

// Open Google Maps to venue location
function openMap() {
    // The Savoy, Mussoorie coordinates
    const venue = 'The Savoy, Mussoorie, Uttarakhand, India';
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`;
    window.open(mapsUrl, '_blank');
}

// Handle RSVP
function handleRSVP() {
    // Option 1: Open email client
    const email = 'wedding@example.com'; // Replace with actual email
    const subject = 'RSVP - অভিষেক ও কণিকার বিবাহ';
    const body = 'আমি/আমরা অভিষেক ও কণিকার বিবাহ অনুষ্ঠানে উপস্থিত থাকতে পারব।\n\nনাম:\nঅতিথি সংখ্যা:\nযোগাযোগ নম্বর:';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Option 2: You could also show a custom modal/form instead
    // showRSVPModal();
}

// Smooth Scroll for Anchor Links
// ===============================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
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
}

// Add Parallax Effect to Hero Section (Optional Enhancement)
// ===========================================================
function initParallax() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroContent = hero.querySelector('.hero-content');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        });
    }
}

// Initialize Everything on Page Load
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize scroll indicator
    initScrollIndicator();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize parallax effect (optional)
    initParallax();
    
    console.log('Bengali Wedding Invitation - All features initialized! 🎉');
});

// Make functions globally available for onclick handlers
window.openMap = openMap;
window.handleRSVP = handleRSVP;

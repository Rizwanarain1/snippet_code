document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const mobileOverlay = document.createElement('div');
    
    mobileOverlay.className = 'mobile-menu-overlay';
    document.body.appendChild(mobileOverlay);

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        
        // Change icon between bars and x
        const spans = this.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    mobileOverlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset icon to bars
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset icon to bars
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and category cards
    document.querySelectorAll('.feature-card, .category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Close menu on window resize (for responsive behavior)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Reset icon to bars
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});





























// Animated Counters
function animateSnippetCodeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 60;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}

// SnippetCode Text Shine Effect
function enhanceSnippetCodeText() {
    const shineText = document.querySelector('.text-shine');
    if (!shineText) return;
    
    // Create shine overlay
    const shineOverlay = document.createElement('div');
    shineOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shine 3s infinite;
        pointer-events: none;
    `;
    
    shineText.parentElement.style.position = 'relative';
    shineText.parentElement.appendChild(shineOverlay);
    
    // Add shine animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shine {
            0% { left: -100%; }
            20%, 100% { left: 100%; }
        }
    `;
    document.head.appendChild(style);
}

// Component Card Hover Effects
function addSnippetCodeCardEffects() {
    const cards = document.querySelectorAll('.component-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create ripple
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 100px;
                height: 100px;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                border-radius: 50%;
                left: ${x - 50}px;
                top: ${y - 50}px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out forwards;
            `;
            
            card.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add code typing effect on hover
        card.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.card-badge');
            if (badge) {
                const originalText = badge.textContent;
                badge.textContent = 'Copy Code →';
                
                setTimeout(() => {
                    badge.textContent = originalText;
                }, 2000);
            }
        });
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleEffect {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// CTA Button Effects
function addSnippetCodeCTAEffects() {
    const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create click effect
            const clickEffect = document.createElement('div');
            clickEffect.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.2);
                border-radius: inherit;
                top: 0;
                left: 0;
                animation: clickPulse 0.4s ease-out forwards;
                pointer-events: none;
            `;
            
            button.appendChild(clickEffect);
            
            // Show "SnippetCode" text effect
            const textEffect = document.createElement('div');
            textEffect.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 3rem;
                font-weight: 800;
                color: #7c3aed;
                opacity: 0;
                pointer-events: none;
                z-index: 1000;
                animation: codeText 1s ease-out forwards;
            `;
            textEffect.textContent = 'SnippetCode';
            
            document.body.appendChild(textEffect);
            
            setTimeout(() => {
                clickEffect.remove();
                textEffect.remove();
                
                // Navigate to href
                const href = button.getAttribute('href');
                if (href && href !== '#') {
                    window.location.href = href;
                }
            }, 1000);
        });
    });
    
    // Add animations
    const animations = document.createElement('style');
    animations.textContent = `
        @keyframes clickPulse {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(1.3);
            }
        }
        
        @keyframes codeText {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            50% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.2);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1);
            }
        }
    `;
    document.head.appendChild(animations);
}

// Initialize SnippetCode Hero
document.addEventListener('DOMContentLoaded', () => {
    animateSnippetCodeCounters();
    enhanceSnippetCodeText();
    addSnippetCodeCardEffects();
    addSnippetCodeCTAEffects();
    
    // Add keyboard shortcut for SnippetCode
    document.addEventListener('keydown', (e) => {
        // Alt + S to focus on CTA button
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            const cta = document.querySelector('.cta-primary');
            if (cta) {
                cta.focus();
                cta.style.animation = 'none';
                setTimeout(() => {
                    cta.style.animation = 'pulseGlow 1s';
                }, 10);
            }
        }
    });
    
    // Add SnippetCode watermark effect
    const watermark = document.createElement('div');
    watermark.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        font-size: 0.8rem;
        color: rgba(124, 58, 237, 0.3);
        font-family: monospace;
        pointer-events: none;
        z-index: 1000;
        animation: watermarkFade 4s infinite;
    `;
    watermark.textContent = '// SnippetCode v1.0';
    document.body.appendChild(watermark);
    
    // Watermark animation
    const watermarkStyle = document.createElement('style');
    watermarkStyle.textContent = `
        @keyframes watermarkFade {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
        }
    `;
    document.head.appendChild(watermarkStyle);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
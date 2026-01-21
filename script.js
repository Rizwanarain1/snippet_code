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




























// Complete SnippetCode Hero JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // ====================================
    // ANIMATED COUNTERS
    // ====================================
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

    // ====================================
    // SNIPPETCODE TEXT SHINE EFFECT
    // ====================================
    function enhanceSnippetCodeText() {
        const shineText = document.querySelector('.text-shine');
        if (!shineText) return;
        
        // Create shine overlay
        const shineOverlay = document.createElement('div');
        shineOverlay.className = 'snippetcode-shine-overlay';
        shineOverlay.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            animation: snippetcodeShine 3s infinite;
            pointer-events: none;
        `;
        
        shineText.parentElement.style.position = 'relative';
        shineText.parentElement.appendChild(shineOverlay);
        
        // Add glow effect on hover
        shineText.addEventListener('mouseenter', () => {
            shineText.style.textShadow = '0 0 30px rgba(124, 58, 237, 0.8)';
        });
        
        shineText.addEventListener('mouseleave', () => {
            shineText.style.textShadow = 'none';
        });
    }

    // ====================================
    // COMPONENT CARD HOVER EFFECTS
    // ====================================
    function addSnippetCodeCardEffects() {
        const cards = document.querySelectorAll('.component-card');
        
        cards.forEach(card => {
            // Mouse enter effect
            card.addEventListener('mouseenter', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Create ripple
                const ripple = document.createElement('div');
                ripple.className = 'snippetcode-ripple';
                ripple.style.cssText = `
                    position: absolute;
                    width: 100px;
                    height: 100px;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    left: ${x - 50}px;
                    top: ${y - 50}px;
                    pointer-events: none;
                    animation: snippetcodeRipple 0.6s ease-out forwards;
                    z-index: 1;
                `;
                
                card.appendChild(ripple);
                
                // Update card badge text
                const badge = card.querySelector('.card-badge');
                if (badge) {
                    const originalText = badge.textContent;
                    badge.textContent = 'Copy Code →';
                    badge.style.animation = 'badgePulse 0.5s ease-out';
                    
                    setTimeout(() => {
                        badge.style.animation = '';
                    }, 500);
                    
                    // Restore text after delay
                    card.addEventListener('mouseleave', function restoreText() {
                        badge.textContent = originalText;
                        card.removeEventListener('mouseleave', restoreText);
                    });
                }
                
                // Enhance arrow animation
                const arrow = card.querySelector('.card-arrow');
                if (arrow) {
                    arrow.style.transform = 'translateX(5px) rotate(15deg)';
                }
                
                setTimeout(() => {
                    if (ripple.parentNode === card) {
                        ripple.remove();
                    }
                }, 600);
            });
            
            // Click effect
            card.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create click wave effect
                const wave = document.createElement('div');
                wave.className = 'snippetcode-wave';
                wave.style.cssText = `
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%);
                    border-radius: 16px;
                    top: 0;
                    left: 0;
                    animation: snippetcodeWave 0.5s ease-out forwards;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                card.appendChild(wave);
                
                // Copy code simulation
                const cardType = this.className.includes('nav-card') ? 'Navigation' :
                                this.className.includes('footer-card') ? 'Footer' :
                                this.className.includes('table-card') ? 'Table' :
                                this.className.includes('button-card') ? 'Button' :
                                this.className.includes('checkbox-card') ? 'Checkbox' :
                                this.className.includes('loader-card') ? 'Loader' :
                                this.className.includes('form-card') ? 'Form' :
                                this.className.includes('toggle-card') ? 'Toggle' :
                                this.className.includes('card-card') ? 'Card' : 'Component';
                
                console.log(`SnippetCode: ${cardType} code ready to copy`);
                
                // Show copied notification
                showSnippetCodeNotification(`${cardType} code copied to clipboard!`);
                
                // Navigate after animation
                setTimeout(() => {
                    const href = this.getAttribute('href');
                    if (href) {
                        window.location.href = href;
                    }
                }, 300);
                
                // Clean up wave
                setTimeout(() => {
                    if (wave.parentNode === card) {
                        wave.remove();
                    }
                }, 500);
            });
        });
    }

    // ====================================
    // CTA BUTTON EFFECTS
    // ====================================
    function addSnippetCodeCTAEffects() {
        const ctaButtons = document.querySelectorAll('.cta-primary, .cta-secondary');
        
        ctaButtons.forEach(button => {
            // Hover effect
            button.addEventListener('mouseenter', function() {
                if (this.classList.contains('cta-primary')) {
                    const effect = this.querySelector('.cta-effect');
                    if (effect) {
                        effect.style.left = '100%';
                        setTimeout(() => {
                            effect.style.left = '-100%';
                        }, 700);
                    }
                }
                
                // Add subtle scale
                this.style.transform = 'scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            // Click effect
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create burst effect
                const burst = document.createElement('div');
                burst.className = 'snippetcode-burst';
                burst.style.cssText = `
                    position: absolute;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%);
                    top: -50%;
                    left: -50%;
                    animation: snippetcodeBurst 0.6s ease-out forwards;
                    pointer-events: none;
                    border-radius: 50%;
                `;
                
                this.appendChild(burst);
                
                // Create particles
                for (let i = 0; i < 8; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'snippetcode-particle';
                    particle.style.cssText = `
                        position: absolute;
                        width: 6px;
                        height: 6px;
                        background: ${this.classList.contains('cta-primary') ? '#8b5cf6' : '#fbbf24'};
                        border-radius: 50%;
                        top: 50%;
                        left: 50%;
                        animation: snippetcodeParticle 0.8s ease-out forwards;
                        animation-delay: ${i * 0.1}s;
                    `;
                    
                    this.appendChild(particle);
                    
                    setTimeout(() => {
                        if (particle.parentNode === this) {
                            particle.remove();
                        }
                    }, 800);
                }
                
                // Show SnippetCode animation
                const snippetText = document.createElement('div');
                snippetText.className = 'snippetcode-animation';
                snippetText.textContent = 'SnippetCode';
                snippetText.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 3rem;
                    font-weight: 800;
                    background: linear-gradient(90deg, #7c3aed, #ec4899);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    opacity: 0;
                    pointer-events: none;
                    z-index: 1000;
                    animation: snippetcodeTextAnimation 1s ease-out forwards;
                `;
                
                document.body.appendChild(snippetText);
                
                // Navigate after animation
                setTimeout(() => {
                    const href = this.getAttribute('href');
                    if (href && href !== '#') {
                        window.location.href = href;
                    }
                }, 800);
                
                // Clean up
                setTimeout(() => {
                    if (burst.parentNode === this) burst.remove();
                    if (snippetText.parentNode === document.body) snippetText.remove();
                }, 1000);
            });
        });
    }

    // ====================================
    // FLOATING ELEMENTS ENHANCEMENT
    // ====================================
    function enhanceFloatingElements() {
        const elements = document.querySelectorAll('.element');
        
        elements.forEach((el, index) => {
            // Add random rotation
            el.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Add hover interaction
            el.addEventListener('mouseenter', function() {
                this.style.color = 'rgba(124, 58, 237, 0.6)';
                this.style.textShadow = '0 0 20px rgba(124, 58, 237, 0.8)';
                this.style.transform = `scale(1.3) rotate(${Math.random() * 360}deg)`;
            });
            
            el.addEventListener('mouseleave', function() {
                this.style.color = 'rgba(124, 58, 237, 0.2)';
                this.style.textShadow = 'none';
            });
            
            // Make elements clickable for fun
            el.style.cursor = 'pointer';
            el.addEventListener('click', function() {
                const symbols = ['{ }', '</>', '#', '.', '( )', '[ ]', '✓', '✕', '→', '←'];
                const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
                
                // Flash animation
                this.textContent = randomSymbol;
                this.style.color = '#ec4899';
                this.style.transform = 'scale(1.5)';
                
                setTimeout(() => {
                    this.style.color = 'rgba(124, 58, 237, 0.2)';
                    this.style.transform = '';
                }, 300);
            });
        });
    }

    // ====================================
    // SNIPPETCODE NOTIFICATION SYSTEM
    // ====================================
    function showSnippetCodeNotification(message) {
        // Remove existing notification
        const existing = document.querySelector('.snippetcode-notification');
        if (existing) existing.remove();
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'snippetcode-notification';
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-code"></i>
            </div>
            <div class="notification-content">
                <span class="notification-title">SnippetCode</span>
                <span class="notification-message">${message}</span>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // // Add styles
        // notification.style.cssText = `
        //     position: fixed;
        //     top: 20px;
        //     right: 20px;
        //     background: rgba(15, 23, 42, 0.95);
        //     backdrop-filter: blur(10px);
        //     border: 1px solid rgba(124, 58, 237, 0.3);
        //     border-radius: 12px;
        //     padding: 1rem 1.5rem;
        //     display: flex;
        //     align-items: center;
        //     gap: 1rem;
        //     z-index: 9999;
        //     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        //     animation: notificationSlideIn 0.3s ease-out forwards;
        //     max-width: 350px;
        // `;
        
        // document.body.appendChild(notification);
        
        // // Add notification styles
        // const style = document.createElement('style');
        // if (!document.querySelector('#snippetcode-notification-styles')) {
        //     style.id = 'snippetcode-notification-styles';
        //     style.textContent = `
        //         .notification-icon {
        //             width: 40px;
        //             height: 40px;
        //             background: linear-gradient(135deg, #7c3aed, #4f46e5);
        //             border-radius: 10px;
        //             display: flex;
        //             align-items: center;
        //             justify-content: center;
        //             color: white;
        //             font-size: 1.2rem;
        //         }
                
        //         .notification-content {
        //             flex: 1;
        //             display: flex;
        //             flex-direction: column;
        //             gap: 4px;
        //         }
                
        //         .notification-title {
        //             font-weight: 600;
        //             color: #8b5cf6;
        //             font-size: 0.9rem;
        //         }
                
        //         .notification-message {
        //             color: #cbd5e1;
        //             font-size: 0.95rem;
        //         }
                
        //         .notification-close {
        //             background: none;
        //             border: none;
        //             color: #94a3b8;
        //             cursor: pointer;
        //             padding: 4px;
        //             border-radius: 4px;
        //             transition: all 0.3s ease;
        //         }
                
        //         .notification-close:hover {
        //             background: rgba(255, 255, 255, 0.1);
        //             color: white;
        //         }
                
        //         @keyframes notificationSlideIn {
        //             from {
        //                 transform: translateX(100%);
        //                 opacity: 0;
        //             }
        //             to {
        //                 transform: translateX(0);
        //                 opacity: 1;
        //             }
        //         }
                
        //         @keyframes notificationSlideOut {
        //             from {
        //                 transform: translateX(0);
        //                 opacity: 1;
        //             }
        //             to {
        //                 transform: translateX(100%);
        //                 opacity: 0;
        //             }
        //         }
        //     `;
        //     document.head.appendChild(style);
        // }
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'notificationSlideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode === document.body) {
                notification.style.animation = 'notificationSlideOut 0.3s ease-out forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 3000);
    }

    // ====================================
    // KEYBOARD SHORTCUTS
    // ====================================
    // function addKeyboardShortcuts() {
    //     document.addEventListener('keydown', (e) => {
    //         // Alt + S to focus on CTA button
    //         if (e.altKey && e.key === 's') {
    //             e.preventDefault();
    //             const cta = document.querySelector('.cta-primary');
    //             if (cta) {
    //                 cta.focus();
    //                 cta.style.animation = 'none';
    //                 setTimeout(() => {
    //                     cta.style.animation = 'pulseGlow 1s';
    //                 }, 10);
                    
    //                 showSnippetCodeNotification('Focus: Explore All SnippetCode (Alt+S)');
    //             }
    //         }
            
    //         // Alt + 1-9 to focus on category cards
    //         if (e.altKey && e.key >= '1' && e.key <= '9') {
    //             e.preventDefault();
    //             const index = parseInt(e.key) - 1;
    //             const cards = document.querySelectorAll('.component-card');
    //             if (cards[index]) {
    //                 cards[index].focus();
    //                 cards[index].style.boxShadow = '0 0 0 3px rgba(124, 58, 237, 0.5)';
                    
    //                 setTimeout(() => {
    //                     cards[index].style.boxShadow = '';
    //                 }, 1000);
                    
    //                 const categoryNames = ['Navigation', 'Footer', 'Tables', 'Buttons', 
    //                                      'Checkboxes', 'Loaders', 'Forms', 'Toggle', 'Cards'];
    //                 if (categoryNames[index]) {
    //                     showSnippetCodeNotification(`Focus: ${categoryNames[index]} Category (Alt+${e.key})`);
    //                 }
    //             }
    //         }
    //     });
    // }

    // ====================================
    // SNIPPETCODE WATERMARK
    // ====================================
    function addSnippetCodeWatermark() {
        const watermark = document.createElement('div');
        watermark.className = 'snippetcode-watermark';
        watermark.innerHTML = `
            <span class="watermark-text">// SnippetCode v1.0</span>
            <span class="watermark-stats">
                <span class="stat"><i class="fas fa-code"></i> 9 Categories</span>
                <span class="stat"><i class="fas fa-download"></i> 500+ Components</span>
            </span>
        `;
        
        watermark.style.cssText = `
            position: fixed;
            bottom: 10px;
            right: 10px;
            font-size: 0.8rem;
            color: rgba(124, 58, 237, 0.3);
            font-family: 'Courier New', monospace;
            pointer-events: none;
            z-index: 1000;
            text-align: right;
            padding: 8px 12px;
            background: rgba(15, 23, 42, 0.3);
            border-radius: 8px;
            border: 1px solid rgba(124, 58, 237, 0.1);
            backdrop-filter: blur(5px);
            animation: watermarkFade 4s infinite;
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: flex-end;
        `;
        
        document.body.appendChild(watermark);
        
        // Make watermark interactive on hover
        watermark.addEventListener('mouseenter', () => {
            watermark.style.color = 'rgba(124, 58, 237, 0.8)';
            watermark.style.pointerEvents = 'auto';
            watermark.style.background = 'rgba(15, 23, 42, 0.9)';
        });
        
        watermark.addEventListener('mouseleave', () => {
            watermark.style.color = 'rgba(124, 58, 237, 0.3)';
            watermark.style.pointerEvents = 'none';
            watermark.style.background = 'rgba(15, 23, 42, 0.3)';
        });
    }

    // ====================================
    // INITIALIZE ALL FEATURES
    // ====================================
    function initializeSnippetCodeHero() {
        // Add CSS animations
        const animations = document.createElement('style');
        animations.textContent = `
            @keyframes snippetcodeShine {
                0% { left: -100%; }
                20%, 100% { left: 100%; }
            }
            
            @keyframes snippetcodeRipple {
                0% { transform: scale(0); opacity: 1; }
                100% { transform: scale(4); opacity: 0; }
            }
            
            @keyframes snippetcodeWave {
                0% { transform: scale(0.5); opacity: 1; }
                100% { transform: scale(1.5); opacity: 0; }
            }
            
            @keyframes snippetcodeBurst {
                0% { transform: scale(0.5); opacity: 1; }
                100% { transform: scale(1); opacity: 0; }
            }
            
            @keyframes snippetcodeParticle {
                0% { 
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% { 
                    transform: translate(
                        ${Math.random() * 200 - 100}px,
                        ${Math.random() * 200 - 100}px
                    ) scale(0);
                    opacity: 0;
                }
            }
            
            @keyframes snippetcodeTextAnimation {
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
            
            @keyframes watermarkFade {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.7; }
            }
            
            @keyframes badgePulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(animations);
        
        // Initialize all features
        animateSnippetCodeCounters();
        enhanceSnippetCodeText();
        addSnippetCodeCardEffects();
        addSnippetCodeCTAEffects();
        enhanceFloatingElements();
        addKeyboardShortcuts();
        addSnippetCodeWatermark();
        
        // Show welcome notification
        setTimeout(() => {
            showSnippetCodeNotification('Welcome to SnippetCode! Explore 500+ UI components');
        }, 1000);
        
        console.log('SnippetCode Hero initialized successfully!');
    }

    // ====================================
    // SMOOTH SCROLL
    // ====================================
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

    // ====================================
    // START EVERYTHING
    // ====================================
    initializeSnippetCodeHero();
});
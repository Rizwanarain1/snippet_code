// Add this script before closing body tag
document.addEventListener('DOMContentLoaded', function() {
    // Loader Type Controls
    const loaderControls = document.querySelectorAll('.loader-demo-control');
    const loaderTypes = document.querySelectorAll('.loader-type');
    
    loaderControls.forEach(control => {
        control.addEventListener('click', () => {
            // Remove active class from all controls
            loaderControls.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked control
            control.classList.add('active');
            
            // Get loader type
            const type = control.getAttribute('data-type');
            
            // Show selected loader type
            showLoaderType(type);
            
            // Add click animation
            control.style.transform = 'scale(0.95)';
            setTimeout(() => {
                control.style.transform = '';
            }, 150);
        });
    });
    
    // Show Loader Type
    function showLoaderType(type) {
        // Hide all loader types
        loaderTypes.forEach(loader => {
            loader.classList.remove('active');
        });
        
        // Show selected loader type
        const selectedLoader = document.querySelector(`.loader-type[data-type="${type}"]`);
        if (selectedLoader) {
            selectedLoader.classList.add('active');
            showLoaderNotification(`${type.charAt(0).toUpperCase() + type.slice(1)} loaders activated`);
        }
    }
    
    // Speed Controls
    const speedButtons = document.querySelectorAll('.speed-btn');
    speedButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all speed buttons
            speedButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get speed
            const speed = btn.getAttribute('data-speed');
            
            // Update loader speeds
            updateLoaderSpeed(speed);
        });
    });
    
    // Update Loader Speed
    function updateLoaderSpeed(speed) {
        const animations = document.querySelectorAll('[style*="animation"]');
        const cssAnimations = document.querySelectorAll('.spinner, .progress-fill, .skeleton-header, .skeleton-line, .skeleton-image, .dot, .wave, .cube');
        
        // Calculate speed multiplier
        let multiplier = 1;
        switch(speed) {
            case 'slow': multiplier = 1.5; break;
            case 'fast': multiplier = 0.5; break;
            default: multiplier = 1;
        }
        
        // Update inline animations
        animations.forEach(element => {
            const style = element.style.animation;
            if (style) {
                const updatedStyle = style.replace(/(\d+(\.\d+)?)s/g, (match, time) => {
                    return (parseFloat(time) * multiplier) + 's';
                });
                element.style.animation = updatedStyle;
            }
        });
        
        // Update CSS animations
        cssAnimations.forEach(element => {
            // Store original animation
            const computedStyle = window.getComputedStyle(element);
            let animation = computedStyle.animation;
            
            if (animation && animation !== 'none') {
                const updatedAnimation = animation.replace(/(\d+(\.\d+)?)s/g, (match, time) => {
                    return (parseFloat(time) * multiplier) + 's';
                });
                element.style.animation = updatedAnimation;
            }
        });
        
        showLoaderNotification(`Animation speed: ${speed}`);
    }
    
    // Color Controls
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all color buttons
            colorButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get color
            const color = btn.getAttribute('data-color');
            
            // Update loader colors
            updateLoaderColor(color);
        });
    });
    
    // Update Loader Color
    function updateLoaderColor(color) {
        // Update spinner colors
        const spinners = document.querySelectorAll('.spinner-1, .spinner-3');
        spinners.forEach(spinner => {
            spinner.style.borderTopColor = color;
        });
        
        // Update spinner-2 dots
        const dots = document.querySelectorAll('.spinner-2::before, .spinner-2::after, .spinner-2 span');
        dots.forEach(dot => {
            dot.style.background = color;
        });
        
        // Update spinner-4 pulse
        const pulseSpinner = document.querySelector('.spinner-4');
        if (pulseSpinner) {
            pulseSpinner.style.background = color;
        }
        
        // Update progress bars
        const progressFills = document.querySelectorAll('.progress-fill');
        progressFills.forEach(fill => {
            fill.style.background = color;
        });
        
        // Update gradient progress bar
        const gradientBar = document.querySelector('.bar-2 .progress-fill');
        if (gradientBar) {
            const lightColor = lightenColor(color, 30);
            gradientBar.style.background = `linear-gradient(45deg, ${color} 25%, ${lightColor} 25%, ${lightColor} 50%, ${color} 50%, ${color} 75%, ${lightColor} 75%)`;
            gradientBar.style.backgroundSize = '20px 20px';
        }
        
        // Update creative loaders
        const creativeDots = document.querySelectorAll('.creative-1 .dot');
        creativeDots.forEach(dot => {
            dot.style.background = color;
        });
        
        const creativeWaves = document.querySelectorAll('.creative-2 .wave');
        creativeWaves.forEach(wave => {
            wave.style.borderColor = color;
        });
        
        const creativeCubes = document.querySelectorAll('.creative-3 .cube');
        creativeCubes.forEach(cube => {
            cube.style.background = color;
        });
        
        showLoaderNotification(`Loader color updated to ${color}`);
    }
    
    // Helper function to lighten color
    function lightenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) + amt;
        const G = (num >> 8 & 0x00FF) + amt;
        const B = (num & 0x0000FF) + amt;
        
        return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
            (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
            (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }
    
    // Size Controls
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all size buttons
            sizeButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Get size
            const size = btn.getAttribute('data-size');
            
            // Update loader sizes
            updateLoaderSize(size);
        });
    });
    
    // Update Loader Size
    function updateLoaderSize(size) {
        let scale = 1;
        switch(size) {
            case 'small': scale = 0.75; break;
            case 'large': scale = 1.25; break;
            default: scale = 1;
        }
        
        const loaders = document.querySelectorAll('.loader-item');
        loaders.forEach(loader => {
            loader.style.transform = `scale(${scale})`;
        });
        
        showLoaderNotification(`Loader size: ${size}`);
    }
    
    // Copy Code Button
    const loaderCopyBtn = document.querySelector('.loader-copy-code-btn');
    if (loaderCopyBtn) {
        loaderCopyBtn.addEventListener('click', () => {
            const originalText = loaderCopyBtn.innerHTML;
            
            // Update button state
            loaderCopyBtn.innerHTML = '<i class="fas fa-check"></i><span>Code Copied!</span>';
            loaderCopyBtn.style.background = 'linear-gradient(90deg, #7c3aed, #6d28d9)';
            
            // Get current loader type
            const activeControl = document.querySelector('.loader-demo-control.active');
            const loaderType = activeControl ? activeControl.getAttribute('data-type') : 'spinner';
            
            // Generate code based on loader type
            let codeToCopy = '';
            
            switch(loaderType) {
                case 'spinner':
                    codeToCopy = `/* Spinner Loader Component */
.spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(139, 92, 246, 0.2);
    border-top-color: #8b5cf6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Dots Loader */
.dots-loader {
    display: flex;
    gap: 6px;
}

.dots-loader::before,
.dots-loader::after,
.dots-loader span {
    content: '';
    width: 12px;
    height: 12px;
    background: #8b5cf6;
    border-radius: 50%;
    animation: bounce 1.4s ease-in-out infinite;
}

@keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
}

/* Full code available at SnippetCode */`;
                    break;
                    
                case 'bar':
                    codeToCopy = `/* Progress Bar Loader */
.progress-bar {
    width: 200px;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    position: absolute;
    height: 100%;
    background: #8b5cf6;
    border-radius: 4px;
    animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
}

/* Circle Progress */
.circle-progress {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top-color: #8b5cf6;
    animation: spin 1s linear infinite;
}

/* Full code available at SnippetCode */`;
                    break;
                    
                case 'skeleton':
                    codeToCopy = `/* Skeleton Loader Component */
.skeleton {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 2rem;
}

.skeleton-header {
    width: 60%;
    height: 24px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    margin-bottom: 1.5rem;
    animation: skeletonPulse 1.5s ease-in-out infinite;
}

.skeleton-line {
    width: 100%;
    height: 16px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 4px;
    margin-bottom: 1rem;
    animation: skeletonPulse 1.5s ease-in-out infinite;
}

.skeleton-line.short {
    width: 70%;
}

@keyframes skeletonPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.skeleton-image {
    width: 100%;
    height: 120px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    animation: skeletonPulse 1.5s ease-in-out infinite;
}

/* Full code available at SnippetCode */`;
                    break;
                    
                case 'creative':
                    codeToCopy = `/* Creative Loader Components */
/* Bouncing Dots */
.bouncing-dots {
    display: flex;
    gap: 8px;
}

.bouncing-dots .dot {
    width: 12px;
    height: 12px;
    background: #8b5cf6;
    border-radius: 50%;
    animation: bounce 1.4s ease-in-out infinite;
}

/* Wave Loader */
.wave-loader {
    width: 60px;
    height: 60px;
    position: relative;
}

.wave-loader .wave {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid #8b5cf6;
    border-radius: 50%;
    opacity: 0;
    animation: wave 1.5s ease-out infinite;
}

@keyframes wave {
    0% { transform: scale(0.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}

/* Cube Loader */
.cube-loader {
    width: 60px;
    height: 60px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateZ(45deg);
}

.cube-loader .cube {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #8b5cf6;
    animation: cube 1.8s ease-in-out infinite;
}

@keyframes cube {
    0%, 100% { transform: translateZ(0); }
    50% { transform: translateZ(20px); }
}

/* Full code available at SnippetCode */`;
                    break;
            }
            
            navigator.clipboard.writeText(codeToCopy)
                .then(() => {
                    console.log('Loader code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy code:', err);
                });
            
            // Reset button after 2 seconds
            setTimeout(() => {
                loaderCopyBtn.innerHTML = originalText;
                loaderCopyBtn.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
            }, 2000);
            
            // Show success notification
            showLoaderNotification('Loader code copied to clipboard!');
        });
    }
    
    // Loader Item Interaction
    const loaderItems = document.querySelectorAll('.loader-item');
    loaderItems.forEach(item => {
        item.addEventListener('click', () => {
            const loaderName = item.querySelector('.loader-name').textContent;
            showLoaderNotification(`Selected: ${loaderName}`);
            
            // Add click animation
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 200);
        });
    });
    
    // Component Card Hover Effects
    const loaderComponentCards = document.querySelectorAll('.loader-component-card');
    
    loaderComponentCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add pulse animation to active card
            if (card.classList.contains('active')) {
                card.style.animation = 'pulseCard 0.5s ease-out';
                setTimeout(() => {
                    card.style.animation = '';
                }, 500);
            }
        });
        
        // Add click animation
        card.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click effect
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
                
                // Navigate to href
                const href = card.getAttribute('href');
                if (href) {
                    window.location.href = href;
                }
            }, 150);
        });
    });
    
    // Simulate Loading Progress
    function simulateProgress() {
        const progressFills = document.querySelectorAll('.progress-fill');
        progressFills.forEach((fill, index) => {
            // Reset animation
            fill.style.animation = 'none';
            
            // Force reflow
            fill.offsetHeight;
            
            // Restart animation with delay
            setTimeout(() => {
                fill.style.animation = 'progress 2s ease-in-out infinite';
            }, index * 200);
        });
    }
    
    // Periodically reset animations
    setInterval(simulateProgress, 4000);
    
    // Initial call
    simulateProgress();
    
    // Notification Function
    function showLoaderNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.loader-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'loader-notification';
        notification.innerHTML = `
            <span>${message}</span>
            <button class="close-loader-notification">×</button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideInRight 0.3s ease-out;
            z-index: 1000;
        `;
        
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 3000);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.close-loader-notification');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        });
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        @keyframes pulseCard {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        .close-loader-notification {
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .close-loader-notification:hover {
            color: white;
        }
    `;
    document.head.appendChild(style);
});

















// Loader templates data
const loaderTemplates = {
    // ====================================================================
    // TEMPLATE 1: Classic Spinner
    // ====================================================================
    loader1: {
        name: "Classic Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="spinner-classic"></div>
</div>`,
        css: `.spinner-classic {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(124, 58, 237, 0.2);
    border-top: 4px solid #7c3aed;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// No JavaScript required for basic spinner
// The animation is pure CSS

// Optional: Add/remove spinner dynamically
function showSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner-classic';
    document.querySelector('.loader-container').appendChild(spinner);
}

function hideSpinner() {
    const spinner = document.querySelector('.spinner-classic');
    if (spinner) spinner.remove();
}`
    },

    // ====================================================================
    // TEMPLATE 2: Dots Wave
    // ====================================================================
    loader2: {
        name: "Dots Wave",
        category: "animated",
        html: `<div class="loader-container">
    <div class="dots-wave">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</div>`,
        css: `.dots-wave {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.dots-wave .dot {
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 50%;
    animation: wave 1.2s ease-in-out infinite;
}

.dots-wave .dot:nth-child(2) { animation-delay: -0.1s; }
.dots-wave .dot:nth-child(3) { animation-delay: -0.2s; }
.dots-wave .dot:nth-child(4) { animation-delay: -0.3s; }
.dots-wave .dot:nth-child(5) { animation-delay: -0.4s; }

@keyframes wave {
    0%, 60%, 100% {
        transform: translateY(0);
    }
    30% {
        transform: translateY(-15px);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control dots animation
const dotsWave = document.querySelector('.dots-wave');

// Pause/play animation
function pauseDotsWave() {
    dotsWave.style.animationPlayState = 'paused';
    dotsWave.querySelectorAll('.dot').forEach(dot => {
        dot.style.animationPlayState = 'paused';
    });
}

function playDotsWave() {
    dotsWave.style.animationPlayState = 'running';
    dotsWave.querySelectorAll('.dot').forEach(dot => {
        dot.style.animationPlayState = 'running';
    });
}

// Change color dynamically
function changeDotsColor(color1, color2) {
    dotsWave.querySelectorAll('.dot').forEach(dot => {
        dot.style.background = \`linear-gradient(135deg, \${color1}, \${color2})\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 3: Progress Bar
    // ====================================================================
    loader3: {
        name: "Progress Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="progress-bar-loader">
        <div class="progress-fill"></div>
    </div>
</div>`,
        css: `.progress-bar-loader {
    width: 200px;
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    position: absolute;
    height: 100%;
    width: 30%;
    background: linear-gradient(90deg, #7c3aed, #ec4899, #f59e0b);
    border-radius: 4px;
    animation: progress 2s ease-in-out infinite;
}

@keyframes progress {
    0% {
        left: -30%;
        width: 30%;
    }
    50% {
        width: 40%;
    }
    100% {
        left: 100%;
        width: 30%;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control progress bar
const progressBar = document.querySelector('.progress-bar-loader');
const progressFill = document.querySelector('.progress-fill');

// Set progress percentage (0-100)
function setProgress(percent) {
    progressFill.style.width = percent + '%';
    progressFill.style.animation = 'none';
}

// Start infinite animation
function startProgressAnimation() {
    progressFill.style.animation = 'progress 2s ease-in-out infinite';
}

// Change gradient colors
function changeProgressColors(color1, color2, color3) {
    progressFill.style.background = \`linear-gradient(90deg, \${color1}, \${color2}, \${color3})\`;
}`
    },

    // ====================================================================
    // TEMPLATE 4: Pulse Loader
    // ====================================================================
    loader4: {
        name: "Pulse Loader",
        category: "minimal",
        html: `<div class="loader-container">
    <div class="pulse-loader"></div>
</div>`,
        css: `.pulse-loader {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.7;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control pulse loader
const pulseLoader = document.querySelector('.pulse-loader');

// Change size
function setPulseSize(size) {
    pulseLoader.style.width = size + 'px';
    pulseLoader.style.height = size + 'px';
}

// Change speed
function setPulseSpeed(speed) {
    pulseLoader.style.animationDuration = speed + 's';
}

// Change colors
function setPulseColors(color1, color2) {
    pulseLoader.style.background = \`linear-gradient(135deg, \${color1}, \${color2})\`;
}`
    },

    // ====================================================================
    // TEMPLATE 5: Ring Spinner
    // ====================================================================
    loader5: {
        name: "Ring Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="ring-spinner"></div>
</div>`,
        css: `.ring-spinner {
    width: 50px;
    height: 50px;
    position: relative;
}

.ring-spinner::before,
.ring-spinner::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 4px solid transparent;
}

.ring-spinner::before {
    width: 100%;
    height: 100%;
    border-top: 4px solid #7c3aed;
    border-right: 4px solid #7c3aed;
    animation: spin 1s linear infinite;
}

.ring-spinner::after {
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    border-bottom: 4px solid #ec4899;
    border-left: 4px solid #ec4899;
    animation: spinReverse 0.8s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes spinReverse {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control ring spinner
const ringSpinner = document.querySelector('.ring-spinner');

// Change ring thickness
function setRingThickness(thickness) {
    ringSpinner.style.setProperty('--ring-thickness', thickness + 'px');
}

// Pause/play animation
function toggleRingAnimation() {
    const isPaused = ringSpinner.style.animationPlayState === 'paused';
    ringSpinner.style.animationPlayState = isPaused ? 'running' : 'paused';
}`
    },

    // ====================================================================
    // TEMPLATE 6: Bouncing Bars
    // ====================================================================
    loader6: {
        name: "Bouncing Bars",
        category: "animated",
        html: `<div class="loader-container">
    <div class="bouncing-bars">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
</div>`,
        css: `.bouncing-bars {
    display: flex;
    align-items: flex-end;
    height: 40px;
    gap: 4px;
}

.bouncing-bars .bar {
    width: 8px;
    background: linear-gradient(to top, #7c3aed, #ec4899);
    border-radius: 4px 4px 0 0;
    animation: bounce 1.2s ease-in-out infinite;
}

.bouncing-bars .bar:nth-child(1) { height: 20px; animation-delay: -0.1s; }
.bouncing-bars .bar:nth-child(2) { height: 30px; animation-delay: -0.2s; }
.bouncing-bars .bar:nth-child(3) { height: 40px; animation-delay: -0.3s; }
.bouncing-bars .bar:nth-child(4) { height: 30px; animation-delay: -0.4s; }
.bouncing-bars .bar:nth-child(5) { height: 20px; animation-delay: -0.5s; }

@keyframes bounce {
    0%, 60%, 100% {
        transform: scaleY(1);
    }
    30% {
        transform: scaleY(0.3);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control bouncing bars
const bouncingBars = document.querySelector('.bouncing-bars');

// Change bar count
function setBarCount(count) {
    bouncingBars.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = (20 + i * 5) + 'px';
        bar.style.animationDelay = \`-\${i * 0.1}s\`;
        bouncingBars.appendChild(bar);
    }
}

// Change animation speed
function setBounceSpeed(speed) {
    document.querySelectorAll('.bouncing-bars .bar').forEach(bar => {
        bar.style.animationDuration = speed + 's';
    });
}`
    },
       // ====================================================================
    // TEMPLATE 7: Neon Ring Spinner
    // ====================================================================
    loader7: {
        name: "Neon Ring Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="neon-ring-spinner"></div>
</div>`,
        css: `.neon-ring-spinner {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
}

.neon-ring-spinner::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid transparent;
    border-top: 4px solid #00f3ff;
    border-right: 4px solid #ff00ff;
    filter: drop-shadow(0 0 8px #00f3ff) drop-shadow(0 0 12px #ff00ff);
    animation: neonSpin 1.2s linear infinite;
}

.neon-ring-spinner::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    border-radius: 50%;
    border: 2px solid rgba(0, 243, 255, 0.3);
    filter: blur(2px);
    animation: neonPulse 2s ease-in-out infinite alternate;
}

@keyframes neonSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes neonPulse {
    0% { opacity: 0.3; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1.1); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control neon spinner
const neonSpinner = document.querySelector('.neon-ring-spinner');

// Change neon colors
function setNeonColors(color1, color2) {
    neonSpinner.style.setProperty('--neon-color1', color1);
    neonSpinner.style.setProperty('--neon-color2', color2);
}

// Adjust glow intensity
function setGlowIntensity(intensity) {
    neonSpinner.style.filter = \`drop-shadow(0 0 \${intensity}px var(--neon-color1)) drop-shadow(0 0 \${intensity * 1.5}px var(--neon-color2))\`;
}`
    },

    // ====================================================================
    // TEMPLATE 8: DNA Helix Spinner
    // ====================================================================
    loader8: {
        name: "DNA Helix Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="dna-helix-spinner">
        <div class="helix-strand"></div>
        <div class="helix-strand"></div>
    </div>
</div>`,
        css: `.dna-helix-spinner {
    width: 60px;
    height: 80px;
    position: relative;
    animation: helixRotate 4s linear infinite;
}

.helix-strand {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.helix-strand:nth-child(1) {
    background: radial-gradient(circle at 30% 30%, #7c3aed, transparent);
    animation: helixFloat 2s ease-in-out infinite alternate;
}

.helix-strand:nth-child(2) {
    background: radial-gradient(circle at 70% 70%, #ec4899, transparent);
    animation: helixFloat 2s ease-in-out infinite alternate-reverse;
}

@keyframes helixRotate {
    0% { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
}

@keyframes helixFloat {
    0% { transform: translateY(0px); }
    100% { transform: translateY(20px); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control DNA helix spinner
const dnaSpinner = document.querySelector('.dna-helix-spinner');

// Change rotation speed
function setHelixSpeed(speed) {
    dnaSpinner.style.animationDuration = speed + 's';
}

// Change strand colors
function setStrandColors(color1, color2) {
    const strands = document.querySelectorAll('.helix-strand');
    strands[0].style.background = \`radial-gradient(circle at 30% 30%, \${color1}, transparent)\`;
    strands[1].style.background = \`radial-gradient(circle at 70% 70%, \${color2}, transparent)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 9: Quantum Dot Spinner
    // ====================================================================
    loader9: {
        name: "Quantum Dot Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="quantum-dot-spinner">
        <div class="quantum-dot"></div>
        <div class="quantum-dot"></div>
        <div class="quantum-dot"></div>
    </div>
</div>`,
        css: `.quantum-dot-spinner {
    width: 80px;
    height: 80px;
    position: relative;
}

.quantum-dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: linear-gradient(45deg, #7c3aed, #3b82f6);
    filter: drop-shadow(0 0 6px #7c3aed);
    animation: quantumOrbit 2s linear infinite;
}

.quantum-dot:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0s;
}

.quantum-dot:nth-child(2) {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    animation-delay: -0.66s;
}

.quantum-dot:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: -1.33s;
}

@keyframes quantumOrbit {
    0% {
        transform: rotate(0deg) translate(35px) rotate(0deg);
        opacity: 1;
    }
    50% {
        opacity: 0.5;
        filter: drop-shadow(0 0 10px #3b82f6);
    }
    100% {
        transform: rotate(360deg) translate(35px) rotate(-360deg);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control quantum dot spinner
const quantumSpinner = document.querySelector('.quantum-dot-spinner');

// Change number of dots
function setDotCount(count) {
    quantumSpinner.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'quantum-dot';
        dot.style.animationDelay = \`-\${i * (2 / count)}s\`;
        quantumSpinner.appendChild(dot);
    }
}

// Change orbit radius
function setOrbitRadius(radius) {
    document.querySelectorAll('.quantum-dot').forEach(dot => {
        dot.style.animation = \`quantumOrbit 2s linear infinite, quantumOrbitRadius \${radius}px\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 10: Gradient Orbital Spinner
    // ====================================================================
    loader10: {
        name: "Gradient Orbital Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="gradient-orbital-spinner">
        <div class="orbital-ring"></div>
        <div class="orbital-dot"></div>
    </div>
</div>`,
        css: `.gradient-orbital-spinner {
    width: 70px;
    height: 70px;
    position: relative;
}

.orbital-ring {
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 50%;
    background: linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: orbitalSpin 3s linear infinite;
}

.orbital-dot {
    position: absolute;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #10b981, #3b82f6);
    border-radius: 50%;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 0 8px #3b82f6);
    animation: orbitalDot 3s linear infinite;
}

@keyframes orbitalSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes orbitalDot {
    0% { transform: translateX(-50%) rotate(0deg) translateY(35px); }
    100% { transform: translateX(-50%) rotate(360deg) translateY(35px); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control orbital spinner
const orbitalSpinner = document.querySelector('.gradient-orbital-spinner');

// Change gradient colors
function setOrbitalGradient(colors) {
    const ring = orbitalSpinner.querySelector('.orbital-ring');
    ring.style.background = \`linear-gradient(135deg, \${colors.join(', ')})\`;
}

// Change dot color
function setDotColor(color) {
    const dot = orbitalSpinner.querySelector('.orbital-dot');
    dot.style.background = \`linear-gradient(135deg, \${color}, \${color}80)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 11: Infinity Loop Spinner
    // ====================================================================
    loader11: {
        name: "Infinity Loop Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="infinity-loop-spinner"></div>
</div>`,
        css: `.infinity-loop-spinner {
    width: 70px;
    height: 40px;
    position: relative;
}

.infinity-loop-spinner::before,
.infinity-loop-spinner::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border: 4px solid transparent;
    border-radius: 50%;
    border-top: 4px solid #7c3aed;
    border-left: 4px solid #ec4899;
    animation: infinityLoop 2s ease-in-out infinite;
}

.infinity-loop-spinner::before {
    left: 0;
    animation-delay: 0s;
}

.infinity-loop-spinner::after {
    right: 0;
    border-top: 4px solid #ec4899;
    border-left: 4px solid #7c3aed;
    animation-delay: -1s;
}

@keyframes infinityLoop {
    0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 0.7;
    }
    50% {
        transform: scale(1.1) rotate(180deg);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control infinity spinner
const infinitySpinner = document.querySelector('.infinity-loop-spinner');

// Change loop speed
function setLoopSpeed(speed) {
    infinitySpinner.style.animationDuration = speed + 's';
}

// Change loop colors
function setLoopColors(color1, color2) {
    infinitySpinner.style.setProperty('--loop-color1', color1);
    infinitySpinner.style.setProperty('--loop-color2', color2);
}`
    },

    // ====================================================================
    // TEMPLATE 12: Cyberpunk Spinner
    // ====================================================================
    loader12: {
        name: "Cyberpunk Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="cyberpunk-spinner">
        <div class="cyber-line"></div>
        <div class="cyber-line"></div>
        <div class="cyber-line"></div>
    </div>
</div>`,
        css: `.cyberpunk-spinner {
    width: 60px;
    height: 60px;
    position: relative;
    animation: cyberRotate 2s linear infinite;
}

.cyber-line {
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, transparent, #00ff88, transparent);
    filter: drop-shadow(0 0 6px #00ff88);
    border-radius: 2px;
}

.cyber-line:nth-child(1) {
    top: 20%;
    animation: cyberScan 1.5s ease-in-out infinite;
}

.cyber-line:nth-child(2) {
    top: 50%;
    animation: cyberScan 1.5s ease-in-out infinite -0.5s;
}

.cyber-line:nth-child(3) {
    top: 80%;
    animation: cyberScan 1.5s ease-in-out infinite -1s;
}

@keyframes cyberRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes cyberScan {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control cyberpunk spinner
const cyberSpinner = document.querySelector('.cyberpunk-spinner');

// Change scan line color
function setScanColor(color) {
    document.querySelectorAll('.cyber-line').forEach(line => {
        line.style.background = \`linear-gradient(90deg, transparent, \${color}, transparent)\`;
        line.style.filter = \`drop-shadow(0 0 6px \${color})\`;
    });
}

// Change number of lines
function setLineCount(count) {
    cyberSpinner.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const line = document.createElement('div');
        line.className = 'cyber-line';
        line.style.top = \`\${((i + 1) * 100) / (count + 1)}%\`;
        line.style.animationDelay = \`-\${i * 0.5}s\`;
        cyberSpinner.appendChild(line);
    }
}`
    },

    // ====================================================================
    // TEMPLATE 13: Liquid Mercury Spinner
    // ====================================================================
    loader13: {
        name: "Liquid Mercury Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="liquid-mercury-spinner"></div>
</div>`,
        css: `.liquid-mercury-spinner {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.8), 
        rgba(59, 130, 246, 0.8),
        rgba(16, 185, 129, 0.8));
    border-radius: 50% 30% 50% 30%;
    position: relative;
    animation: mercuryFloat 3s ease-in-out infinite;
    filter: blur(1px);
    box-shadow: 
        inset 0 0 20px rgba(255, 255, 255, 0.5),
        0 0 20px rgba(124, 58, 237, 0.3);
}

.liquid-mercury-spinner::before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    top: 10px;
    left: 10px;
    filter: blur(2px);
    animation: mercuryReflect 3s ease-in-out infinite;
}

@keyframes mercuryFloat {
    0%, 100% { 
        border-radius: 50% 30% 50% 30%;
        transform: rotate(0deg) scale(1);
    }
    25% { 
        border-radius: 30% 50% 30% 50%;
        transform: rotate(90deg) scale(1.05);
    }
    50% { 
        border-radius: 50% 30% 50% 30%;
        transform: rotate(180deg) scale(1);
    }
    75% { 
        border-radius: 30% 50% 30% 50%;
        transform: rotate(270deg) scale(0.95);
    }
}

@keyframes mercuryReflect {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(15px, 5px); }
    50% { transform: translate(5px, 15px); }
    75% { transform: translate(10px, 10px); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control mercury spinner
const mercurySpinner = document.querySelector('.liquid-mercury-spinner');

// Change mercury colors
function setMercuryColors(colors) {
    mercurySpinner.style.background = \`linear-gradient(135deg, \${colors.join(', ')})\`;
}

// Change viscosity (blur amount)
function setViscosity(blurAmount) {
    mercurySpinner.style.filter = \`blur(\${blurAmount}px)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 14: Crystal Spinner
    // ====================================================================
    loader14: {
        name: "Crystal Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="crystal-spinner">
        <div class="crystal-face"></div>
        <div class="crystal-face"></div>
        <div class="crystal-face"></div>
    </div>
</div>`,
        css: `.crystal-spinner {
    width: 60px;
    height: 60px;
    position: relative;
    transform-style: preserve-3d;
    animation: crystalRotate 4s linear infinite;
}

.crystal-face {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        rgba(124, 58, 237, 0.3), 
        rgba(236, 72, 153, 0.3));
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border: 2px solid rgba(255, 255, 255, 0.2);
    filter: drop-shadow(0 0 10px rgba(124, 58, 237, 0.5));
}

.crystal-face:nth-child(1) { transform: rotateY(0deg); }
.crystal-face:nth-child(2) { transform: rotateY(120deg); }
.crystal-face:nth-child(3) { transform: rotateY(240deg); }

@keyframes crystalRotate {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control crystal spinner
const crystalSpinner = document.querySelector('.crystal-spinner');

// Change crystal faces count
function setCrystalFaces(count) {
    crystalSpinner.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const face = document.createElement('div');
        face.className = 'crystal-face';
        face.style.transform = \`rotateY(\${(360 / count) * i}deg)\`;
        crystalSpinner.appendChild(face);
    }
}

// Change crystal color
function setCrystalColor(color) {
    document.querySelectorAll('.crystal-face').forEach(face => {
        face.style.background = \`linear-gradient(45deg, \${color}30, \${color}20)\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 15: Solar Flare Spinner
    // ====================================================================
    loader15: {
        name: "Solar Flare Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="solar-flare-spinner">
        <div class="solar-core"></div>
    </div>
</div>`,
        css: `.solar-flare-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    animation: solarPulse 2s ease-in-out infinite;
}

.solar-core {
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, 
        #f59e0b 0%, 
        #fbbf24 30%, 
        transparent 70%);
    border-radius: 50%;
    position: relative;
    filter: drop-shadow(0 0 15px #f59e0b);
}

.solar-core::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: radial-gradient(circle at center, 
        rgba(245, 158, 11, 0.3) 0%, 
        transparent 70%);
    border-radius: 50%;
    animation: solarFlare 3s linear infinite;
}

.solar-core::after {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    top: -20%;
    left: -20%;
    background: conic-gradient(
        from 0deg,
        transparent,
        rgba(251, 191, 36, 0.2),
        rgba(245, 158, 11, 0.1),
        transparent
    );
    border-radius: 50%;
    animation: solarRing 4s linear infinite;
}

@keyframes solarPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
}

@keyframes solarFlare {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes solarRing {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control solar flare spinner
const solarSpinner = document.querySelector('.solar-flare-spinner');

// Change solar color
function setSolarColor(color) {
    const core = solarSpinner.querySelector('.solar-core');
    core.style.background = \`radial-gradient(circle at center, \${color} 0%, \${color}80 30%, transparent 70%)\`;
}

// Adjust flare intensity
function setFlareIntensity(intensity) {
    solarSpinner.style.filter = \`drop-shadow(0 0 \${intensity}px currentColor)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 16: Vortex Spinner
    // ====================================================================
    loader16: {
        name: "Vortex Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="vortex-spinner"></div>
</div>`,
        css: `.vortex-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    animation: vortexSpin 2s linear infinite;
}

.vortex-spinner::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: conic-gradient(
        from 0deg,
        #000000,
        #1e293b,
        #334155,
        #475569,
        #64748b,
        #94a3b8,
        #cbd5e1,
        #ffffff,
        #000000
    );
    border-radius: 50%;
    mask: radial-gradient(circle at center, transparent 40%, black 41%);
    -webkit-mask: radial-gradient(circle at center, transparent 40%, black 41%);
}

.vortex-spinner::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle at center, 
        #1e293b 0%, 
        #000000 50%, 
        transparent 70%);
    border-radius: 50%;
    box-shadow: 
        0 0 20px #000000,
        inset 0 0 10px rgba(255, 255, 255, 0.1);
}

@keyframes vortexSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control vortex spinner
const vortexSpinner = document.querySelector('.vortex-spinner');

// Change vortex speed
function setVortexSpeed(speed) {
    vortexSpinner.style.animationDuration = speed + 's';
}

// Change vortex colors
function setVortexColors(colors) {
    vortexSpinner.style.background = \`conic-gradient(from 0deg, \${colors.join(', ')})\`;
}`
    },
        // ====================================================================
    // TEMPLATE 17: Holographic Spinner
    // ====================================================================
    loader17: {
        name: "Holographic Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="holographic-spinner">
        <div class="holo-ring"></div>
        <div class="holo-core"></div>
    </div>
</div>`,
        css: `.holographic-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    perspective: 500px;
}

.holo-ring {
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 50%;
    background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.7),
        rgba(59, 130, 246, 0.7),
        rgba(16, 185, 129, 0.7),
        rgba(124, 58, 237, 0.7));
    background-size: 400% 400%;
    animation: holographicRotate 4s linear infinite,
               holographicGradient 3s ease infinite;
    box-shadow: 
        0 0 30px rgba(124, 58, 237, 0.3),
        inset 0 0 20px rgba(255, 255, 255, 0.1);
    filter: brightness(1.2);
}

.holo-core {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle at center,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 70%);
    border-radius: 50%;
    animation: holographicPulse 2s ease-in-out infinite;
}

@keyframes holographicRotate {
    0% { transform: rotateX(60deg) rotateY(0deg); }
    100% { transform: rotateX(60deg) rotateY(360deg); }
}

@keyframes holographicGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes holographicPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control holographic spinner
const holographicSpinner = document.querySelector('.holographic-spinner');

// Change hologram colors
function setHologramColors(colors) {
    const ring = holographicSpinner.querySelector('.holo-ring');
    ring.style.background = \`linear-gradient(135deg, \${colors.join(', ')})\`;
}

// Adjust perspective depth
function setPerspective(depth) {
    holographicSpinner.style.perspective = depth + 'px';
}`
    },

    // ====================================================================
    // TEMPLATE 18: Magnetic Field Spinner
    // ====================================================================
    loader18: {
        name: "Magnetic Field Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="magnetic-field-spinner">
        <div class="field-line"></div>
        <div class="field-line"></div>
        <div class="field-line"></div>
    </div>
</div>`,
        css: `.magnetic-field-spinner {
    width: 80px;
    height: 80px;
    position: relative;
    animation: magneticRotate 6s linear infinite;
}

.field-line {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top: 2px solid #3b82f6;
    border-bottom: 2px solid #ef4444;
    animation: magneticPulse 3s ease-in-out infinite;
    filter: drop-shadow(0 0 5px currentColor);
}

.field-line:nth-child(1) {
    animation-delay: 0s;
    transform: rotateX(70deg);
}

.field-line:nth-child(2) {
    animation-delay: -1s;
    transform: rotateX(70deg) rotateY(120deg);
}

.field-line:nth-child(3) {
    animation-delay: -2s;
    transform: rotateX(70deg) rotateY(240deg);
}

@keyframes magneticRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes magneticPulse {
    0%, 100% { 
        opacity: 0.3;
        filter: drop-shadow(0 0 2px currentColor);
    }
    50% { 
        opacity: 1;
        filter: drop-shadow(0 0 10px currentColor);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control magnetic field spinner
const magneticSpinner = document.querySelector('.magnetic-field-spinner');

// Change pole colors
function setPoleColors(northColor, southColor) {
    document.querySelectorAll('.field-line').forEach(line => {
        line.style.borderTopColor = northColor;
        line.style.borderBottomColor = southColor;
    });
}

// Adjust field strength (glow intensity)
function setFieldStrength(strength) {
    document.querySelectorAll('.field-line').forEach(line => {
        line.style.filter = \`drop-shadow(0 0 \${strength}px currentColor)\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 19: Neural Network Spinner
    // ====================================================================
    loader19: {
        name: "Neural Network Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="neural-network-spinner">
        <div class="neuron"></div>
        <div class="neuron"></div>
        <div class="neuron"></div>
        <div class="connection"></div>
        <div class="connection"></div>
        <div class="connection"></div>
    </div>
</div>`,
        css: `.neural-network-spinner {
    width: 80px;
    height: 80px;
    position: relative;
}

.neuron {
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px #7c3aed);
    animation: neuronPulse 1.5s ease-in-out infinite;
}

.neuron:nth-child(1) { top: 20%; left: 50%; transform: translateX(-50%); }
.neuron:nth-child(2) { top: 50%; right: 20%; transform: translateY(-50%); }
.neuron:nth-child(3) { bottom: 20%; left: 50%; transform: translateX(-50%); }

.connection {
    position: absolute;
    background: linear-gradient(to right, 
        rgba(124, 58, 237, 0.8), 
        rgba(236, 72, 153, 0.8));
    height: 2px;
    border-radius: 1px;
    filter: drop-shadow(0 0 3px #7c3aed);
    animation: signalTravel 2s linear infinite;
}

.connection:nth-child(4) {
    width: 40px;
    top: 25%;
    left: 30%;
    transform: rotate(45deg);
    animation-delay: 0s;
}

.connection:nth-child(5) {
    width: 40px;
    top: 45%;
    left: 30%;
    transform: rotate(-45deg);
    animation-delay: -0.66s;
}

.connection:nth-child(6) {
    width: 40px;
    top: 65%;
    left: 30%;
    transform: rotate(45deg);
    animation-delay: -1.33s;
}

@keyframes neuronPulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.3); opacity: 1; }
}

@keyframes signalTravel {
    0% { 
        background-position: -40px 0;
        opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { 
        background-position: 40px 0;
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control neural network spinner
const neuralSpinner = document.querySelector('.neural-network-spinner');

// Add/remove neurons
function setNeuronCount(count) {
    neuralSpinner.innerHTML = '';
    
    // Create neurons
    for (let i = 0; i < count; i++) {
        const angle = (360 / count) * i;
        const radius = 35;
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        const neuron = document.createElement('div');
        neuron.className = 'neuron';
        neuron.style.top = \`\${y}%\`;
        neuron.style.left = \`\${x}%\`;
        neuron.style.animationDelay = \`-\${i * 0.3}s\`;
        neuralSpinner.appendChild(neuron);
    }
    
    // Add connections (simplified)
    for (let i = 0; i < count; i++) {
        const connection = document.createElement('div');
        connection.className = 'connection';
        neuralSpinner.appendChild(connection);
    }
}

// Change signal speed
function setSignalSpeed(speed) {
    document.querySelectorAll('.connection').forEach(conn => {
        conn.style.animationDuration = speed + 's';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 20: Plasma Orb Spinner
    // ====================================================================
    loader20: {
        name: "Plasma Orb Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="plasma-orb-spinner"></div>
</div>`,
        css: `.plasma-orb-spinner {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle at center,
        rgba(59, 130, 246, 0.9) 0%,
        rgba(124, 58, 237, 0.7) 30%,
        transparent 70%);
    border-radius: 50%;
    position: relative;
    animation: plasmaGlow 2s ease-in-out infinite;
    box-shadow: 
        0 0 40px rgba(59, 130, 246, 0.6),
        inset 0 0 30px rgba(255, 255, 255, 0.3);
    filter: brightness(1.2);
}

.plasma-orb-spinner::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    top: -10%;
    left: -10%;
    background: conic-gradient(
        from 0deg,
        transparent,
        rgba(59, 130, 246, 0.4),
        rgba(124, 58, 237, 0.6),
        rgba(239, 68, 68, 0.4),
        transparent
    );
    border-radius: 50%;
    animation: plasmaDischarge 3s linear infinite;
    filter: blur(5px);
}

.plasma-orb-spinner::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle at center,
        rgba(255, 255, 255, 0.9) 0%,
        transparent 70%);
    border-radius: 50%;
    top: 20%;
    left: 20%;
    animation: plasmaSpark 1.5s ease-in-out infinite;
}

@keyframes plasmaGlow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
}

@keyframes plasmaDischarge {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes plasmaSpark {
    0%, 100% { transform: translate(0, 0); opacity: 0.5; }
    50% { transform: translate(10px, -10px); opacity: 1; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control plasma orb spinner
const plasmaSpinner = document.querySelector('.plasma-orb-spinner');

// Change plasma color
function setPlasmaColor(color) {
    plasmaSpinner.style.background = \`radial-gradient(circle at center,
        \${color}90 0%,
        \${color}70 30%,
        transparent 70%)\`;
}

// Adjust discharge intensity
function setDischargeIntensity(intensity) {
    plasmaSpinner.style.filter = \`brightness(\${intensity}) blur(\${intensity / 2}px)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 21: Fibonacci Spiral Spinner
    // ====================================================================
    loader21: {
        name: "Fibonacci Spiral Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="fibonacci-spiral-spinner"></div>
</div>`,
        css: `.fibonacci-spiral-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    animation: fibonacciRotate 8s linear infinite;
}

.fibonacci-spiral-spinner::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top: 2px solid #f59e0b;
    border-right: 2px solid #10b981;
    box-shadow: 
        0 0 15px rgba(245, 158, 11, 0.5),
        inset 0 0 10px rgba(16, 185, 129, 0.3);
    animation: fibonacciSpiral 4s ease-in-out infinite;
}

.fibonacci-spiral-spinner::after {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    background: 
        radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.3), transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.3), transparent 50%);
    border-radius: 50%;
    animation: fibonacciPulse 3s ease-in-out infinite;
}

@keyframes fibonacciRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes fibonacciSpiral {
    0% { 
        border-radius: 50% 30% 50% 30%;
        transform: scale(1) rotate(0deg);
    }
    50% { 
        border-radius: 30% 50% 30% 50%;
        transform: scale(1.1) rotate(180deg);
    }
    100% { 
        border-radius: 50% 30% 50% 30%;
        transform: scale(1) rotate(360deg);
    }
}

@keyframes fibonacciPulse {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.05); opacity: 1; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control Fibonacci spinner
const fibonacciSpinner = document.querySelector('.fibonacci-spiral-spinner');

// Change golden ratio colors
function setGoldenColors(color1, color2) {
    fibonacciSpinner.style.setProperty('--golden-color1', color1);
    fibonacciSpinner.style.setProperty('--golden-color2', color2);
}

// Adjust spiral tightness
function setSpiralTightness(tightness) {
    fibonacciSpinner.style.animation = \`fibonacciSpiral \${tightness}s ease-in-out infinite\`;
}`
    },

    // ====================================================================
    // TEMPLATE 22: Tesseract Spinner
    // ====================================================================
    loader22: {
        name: "Tesseract Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="tesseract-spinner">
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</div>`,
        css: `.tesseract-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    animation: tesseractRotate 6s linear infinite;
}

.tesseract-spinner .cube {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: cubeRotate 4s linear infinite reverse;
}

.tesseract-spinner .cube:nth-child(1) {
    transform: translateZ(35px);
    animation-delay: 0s;
}

.tesseract-spinner .cube:nth-child(2) {
    transform: translateZ(-35px);
    animation-delay: -2s;
}

.tesseract-spinner .cube::before,
.tesseract-spinner .cube::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(124, 58, 237, 0.6);
    background: rgba(124, 58, 237, 0.1);
}

.tesseract-spinner .cube::before {
    transform: rotateX(90deg);
    border-color: rgba(236, 72, 153, 0.6);
}

.tesseract-spinner .cube::after {
    transform: rotateY(90deg);
    border-color: rgba(59, 130, 246, 0.6);
}

@keyframes tesseractRotate {
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

@keyframes cubeRotate {
    0% { transform: translateZ(var(--z)) rotateX(0deg) rotateY(0deg); }
    100% { transform: translateZ(var(--z)) rotateX(360deg) rotateY(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control tesseract spinner
const tesseractSpinner = document.querySelector('.tesseract-spinner');

// Change dimensions
function setTesseractDimensions(x, y, z) {
    tesseractSpinner.style.transform = \`rotateX(\${x}deg) rotateY(\${y}deg) rotateZ(\${z}deg)\`;
}

// Adjust perspective
function setPerspective(value) {
    tesseractSpinner.style.perspective = value + 'px';
}`
    },

    // ====================================================================
    // TEMPLATE 23: Quantum Entanglement Spinner
    // ====================================================================
    loader23: {
        name: "Quantum Entanglement Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="quantum-entanglement-spinner">
        <div class="entangled-particle"></div>
        <div class="entangled-particle"></div>
        <div class="quantum-link"></div>
    </div>
</div>`,
        css: `.quantum-entanglement-spinner {
    width: 80px;
    height: 80px;
    position: relative;
    animation: entanglementOrbit 4s linear infinite;
}

.entangled-particle {
    position: absolute;
    width: 16px;
    height: 16px;
    background: linear-gradient(45deg, #7c3aed, #3b82f6);
    border-radius: 50%;
    filter: drop-shadow(0 0 8px #7c3aed);
    animation: quantumState 2s ease-in-out infinite;
}

.entangled-particle:nth-child(1) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
}

.entangled-particle:nth-child(2) {
    bottom: 20%;
    right: 20%;
    animation-delay: -1s;
}

.quantum-link {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px dashed rgba(124, 58, 237, 0.4);
    border-radius: 50%;
    animation: quantumLink 3s linear infinite;
}

@keyframes entanglementOrbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes quantumState {
    0%, 100% { 
        transform: scale(1); 
        background: linear-gradient(45deg, #7c3aed, #3b82f6);
    }
    50% { 
        transform: scale(1.3); 
        background: linear-gradient(45deg, #ec4899, #10b981);
        filter: drop-shadow(0 0 12px #ec4899);
    }
}

@keyframes quantumLink {
    0% { 
        border-color: rgba(124, 58, 237, 0.4);
        transform: translate(-50%, -50%) scale(1);
    }
    50% { 
        border-color: rgba(236, 72, 153, 0.6);
        transform: translate(-50%, -50%) scale(1.1);
    }
    100% { 
        border-color: rgba(124, 58, 237, 0.4);
        transform: translate(-50%, -50%) scale(1);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control quantum entanglement spinner
const quantumSpinner = document.querySelector('.quantum-entanglement-spinner');

// Change entanglement distance
function setEntanglementDistance(distance) {
    const particles = document.querySelectorAll('.entangled-particle');
    particles[0].style.top = \`\${50 - distance}%\`;
    particles[0].style.left = \`\${50 - distance}%\`;
    particles[1].style.bottom = \`\${50 - distance}%\`;
    particles[1].style.right = \`\${50 - distance}%\`;
}

// Change quantum state colors
function setQuantumStates(state1, state2) {
    document.querySelectorAll('.entangled-particle').forEach((particle, index) => {
        particle.style.background = \`linear-gradient(45deg, \${index === 0 ? state1 : state2})\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 24: Lissajous Curve Spinner
    // ====================================================================
    loader24: {
        name: "Lissajous Curve Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="lissajous-curve-spinner">
        <div class="curve-dot"></div>
    </div>
</div>`,
        css: `.lissajous-curve-spinner {
    width: 80px;
    height: 80px;
    position: relative;
    animation: lissajousRotate 6s linear infinite;
}

.lissajous-curve-spinner::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 50%;
    box-shadow: 
        inset 0 0 20px rgba(124, 58, 237, 0.2),
        0 0 10px rgba(124, 58, 237, 0.1);
}

.curve-dot {
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px #7c3aed);
    animation: lissajousPath 4s ease-in-out infinite;
}

@keyframes lissajousRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes lissajousPath {
    0% { 
        transform: translate(
            calc(40px * sin(0deg)),
            calc(40px * cos(0deg))
        );
    }
    25% { 
        transform: translate(
            calc(40px * sin(90deg)),
            calc(40px * cos(180deg))
        );
    }
    50% { 
        transform: translate(
            calc(40px * sin(180deg)),
            calc(40px * cos(0deg))
        );
    }
    75% { 
        transform: translate(
            calc(40px * sin(270deg)),
            calc(40px * cos(180deg))
        );
    }
    100% { 
        transform: translate(
            calc(40px * sin(360deg)),
            calc(40px * cos(0deg))
        );
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control Lissajous spinner
const lissajousSpinner = document.querySelector('.lissajous-curve-spinner');

// Change frequency ratio
function setFrequencyRatio(a, b) {
    const dot = lissajousSpinner.querySelector('.curve-dot');
    dot.style.animation = \`
        lissajousPath 4s ease-in-out infinite,
        lissajousPattern \${a} \${b}
    \`;
}

// Change pattern complexity
function setPatternComplexity(complexity) {
    lissajousSpinner.style.setProperty('--complexity', complexity);
}`
    },

    // ====================================================================
    // TEMPLATE 25: Particle Accelerator Spinner
    // ====================================================================
    loader25: {
        name: "Particle Accelerator Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="particle-accelerator-spinner">
        <div class="accelerator-ring"></div>
        <div class="particle-beam"></div>
    </div>
</div>`,
        css: `.particle-accelerator-spinner {
    width: 80px;
    height: 80px;
    position: relative;
}

.accelerator-ring {
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-radius: 50%;
    background: 
        radial-gradient(circle at center, transparent 60%, rgba(59, 130, 246, 0.1) 100%),
        conic-gradient(from 0deg, 
            transparent,
            rgba(59, 130, 246, 0.8),
            rgba(124, 58, 237, 0.8),
            rgba(236, 72, 153, 0.8),
            transparent
        );
    animation: acceleratorSpin 3s linear infinite;
    box-shadow: 
        inset 0 0 30px rgba(59, 130, 246, 0.3),
        0 0 20px rgba(59, 130, 246, 0.2);
}

.particle-beam {
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #00ff88, #00f3ff);
    border-radius: 50%;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0 0 10px #00ff88);
    animation: particleTravel 2s linear infinite;
}

@keyframes acceleratorSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes particleTravel {
    0% { 
        transform: translateX(-50%) rotate(0deg) translateY(40px);
        opacity: 1;
    }
    50% { 
        opacity: 0.8;
        filter: drop-shadow(0 0 15px #00f3ff);
    }
    100% { 
        transform: translateX(-50%) rotate(360deg) translateY(40px);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control particle accelerator spinner
const acceleratorSpinner = document.querySelector('.particle-accelerator-spinner');

// Change beam color
function setBeamColor(color) {
    const beam = acceleratorSpinner.querySelector('.particle-beam');
    beam.style.background = \`linear-gradient(45deg, \${color}, \${color}80)\`;
}

// Adjust acceleration speed
function setAccelerationSpeed(speed) {
    acceleratorSpinner.style.animationDuration = speed + 's';
}`
    },

    // ====================================================================
    // TEMPLATE 26: Gravitational Wave Spinner
    // ====================================================================
    loader26: {
        name: "Gravitational Wave Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="gravitational-wave-spinner">
        <div class="wave-ring"></div>
        <div class="wave-ring"></div>
        <div class="wave-ring"></div>
    </div>
</div>`,
        css: `.gravitational-wave-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    animation: gravityPulse 4s ease-in-out infinite;
}

.wave-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(124, 58, 237, 0.3);
    border-radius: 50%;
    animation: wavePropagate 3s ease-out infinite;
}

.wave-ring:nth-child(1) {
    animation-delay: 0s;
}

.wave-ring:nth-child(2) {
    animation-delay: -1s;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
}

.wave-ring:nth-child(3) {
    animation-delay: -2s;
    width: 40%;
    height: 40%;
    top: 30%;
    left: 30%;
}

@keyframes gravityPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes wavePropagate {
    0% {
        transform: scale(0.5);
        opacity: 1;
        border-width: 2px;
    }
    100% {
        transform: scale(2);
        opacity: 0;
        border-width: 0.5px;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control gravitational wave spinner
const gravitySpinner = document.querySelector('.gravitational-wave-spinner');

// Change wave frequency
function setWaveFrequency(frequency) {
    document.querySelectorAll('.wave-ring').forEach((ring, index) => {
        ring.style.animationDuration = frequency + 's';
        ring.style.animationDelay = \`-\${index * (frequency / 3)}s\`;
    });
}

// Change wave amplitude
function setWaveAmplitude(amplitude) {
    gravitySpinner.style.setProperty('--wave-amplitude', amplitude);
}`
    },
        // ====================================================================
    // TEMPLATE 27: Gradient Wave Progress
    // ====================================================================
    loader27: {
        name: "Gradient Wave Progress",
        category: "progress",
        html: `<div class="loader-container">
    <div class="gradient-wave-progress">
        <div class="wave-fill"></div>
        <div class="wave-fill"></div>
    </div>
</div>`,
        css: `.gradient-wave-progress {
    width: 200px;
    height: 30px;
    background: linear-gradient(45deg, 
        rgba(15, 23, 42, 0.1), 
        rgba(30, 41, 59, 0.2));
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(124, 58, 237, 0.2);
    box-shadow: 
        inset 0 2px 10px rgba(0, 0, 0, 0.1),
        0 4px 20px rgba(124, 58, 237, 0.1);
}

.wave-fill {
    position: absolute;
    height: 100%;
    width: 50%;
    background: linear-gradient(90deg, 
        #7c3aed, 
        #ec4899, 
        #f59e0b,
        #10b981,
        #3b82f6);
    background-size: 400% 100%;
    border-radius: 15px;
    animation: waveFill 3s ease-in-out infinite;
}

.wave-fill:nth-child(1) {
    animation: waveMotion 4s ease-in-out infinite;
    opacity: 0.8;
}

.wave-fill:nth-child(2) {
    animation: waveMotion 4s ease-in-out infinite -2s;
    opacity: 0.6;
    filter: blur(2px);
}

@keyframes waveFill {
    0%, 100% { 
        width: 30%;
        background-position: 0% 50%;
    }
    50% { 
        width: 70%;
        background-position: 100% 50%;
    }
}

@keyframes waveMotion {
    0% { 
        transform: translateX(-100%);
        background-position: 0% 50%;
    }
    50% { 
        background-position: 100% 50%;
    }
    100% { 
        transform: translateX(200%);
        background-position: 0% 50%;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control gradient wave progress
const waveProgress = document.querySelector('.gradient-wave-progress');

// Change gradient colors
function setWaveGradient(colors) {
    document.querySelectorAll('.wave-fill').forEach(wave => {
        wave.style.background = \`linear-gradient(90deg, \${colors.join(', ')})\`;
    });
}

// Adjust wave speed
function setWaveSpeed(speed) {
    document.querySelectorAll('.wave-fill').forEach((wave, index) => {
        wave.style.animationDuration = speed + 's';
        if (index === 1) {
            wave.style.animationDelay = \`-\${speed / 2}s\`;
        }
    });
}

// Set progress percentage
function setWaveProgress(percent) {
    document.querySelectorAll('.wave-fill').forEach(wave => {
        wave.style.width = percent + '%';
        wave.style.animation = 'none';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 28: Glitch Progress Bar
    // ====================================================================
    loader28: {
        name: "Glitch Progress Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="glitch-progress-bar">
        <div class="glitch-track"></div>
        <div class="glitch-fill"></div>
        <div class="glitch-effect"></div>
    </div>
</div>`,
        css: `.glitch-progress-bar {
    width: 200px;
    height: 25px;
    background: linear-gradient(45deg, 
        #0f172a, 
        #1e293b);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(59, 130, 246, 0.3);
    box-shadow: 
        inset 0 0 20px rgba(0, 0, 0, 0.5),
        0 0 20px rgba(59, 130, 246, 0.2);
}

.glitch-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 2px,
        rgba(59, 130, 246, 0.1) 2px,
        rgba(59, 130, 246, 0.1) 4px
    );
    animation: glitchScan 2s linear infinite;
}

.glitch-fill {
    position: absolute;
    height: 100%;
    width: 60%;
    background: linear-gradient(90deg, 
        #00f3ff,
        #3b82f6,
        #7c3aed);
    border-radius: 12px;
    animation: glitchProgress 3s ease-in-out infinite,
               glitchDistortion 0.3s steps(2) infinite;
    filter: drop-shadow(0 0 10px #00f3ff);
}

.glitch-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 0, 255, 0.1),
        rgba(0, 255, 255, 0.1),
        transparent);
    animation: glitchEffect 1s steps(1) infinite;
    mix-blend-mode: screen;
}

@keyframes glitchProgress {
    0%, 100% { width: 20%; }
    50% { width: 80%; }
}

@keyframes glitchScan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes glitchDistortion {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(2px); }
}

@keyframes glitchEffect {
    0%, 100% { opacity: 0; }
    10%, 90% { opacity: 0.1; }
    50% { opacity: 0.3; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control glitch progress bar
const glitchProgress = document.querySelector('.glitch-progress-bar');

// Set glitch intensity
function setGlitchIntensity(intensity) {
    const fill = glitchProgress.querySelector('.glitch-fill');
    fill.style.filter = \`drop-shadow(0 0 \${intensity}px #00f3ff)\`;
    fill.style.animation = \`glitchProgress 3s ease-in-out infinite, glitchDistortion \${intensity / 10}s steps(2) infinite\`;
}

// Change glitch colors
function setGlitchColors(color1, color2, color3) {
    const fill = glitchProgress.querySelector('.glitch-fill');
    fill.style.background = \`linear-gradient(90deg, \${color1}, \${color2}, \${color3})\`;
}

// Set progress percentage
function setGlitchProgress(percent) {
    const fill = glitchProgress.querySelector('.glitch-fill');
    fill.style.width = percent + '%';
    fill.style.animation = 'glitchDistortion 0.3s steps(2) infinite';
}`
    },

    // ====================================================================
    // TEMPLATE 29: Liquid Metal Progress
    // ====================================================================
    loader29: {
        name: "Liquid Metal Progress",
        category: "progress",
        html: `<div class="loader-container">
    <div class="liquid-metal-progress">
        <div class="metal-fill"></div>
        <div class="metal-reflection"></div>
    </div>
</div>`,
        css: `.liquid-metal-progress {
    width: 200px;
    height: 20px;
    background: linear-gradient(to bottom,
        #334155,
        #1e293b,
        #0f172a);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        inset 0 2px 4px rgba(255, 255, 255, 0.1),
        0 4px 15px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.metal-fill {
    position: absolute;
    height: 100%;
    width: 65%;
    background: linear-gradient(90deg,
        #cbd5e1,
        #94a3b8,
        #64748b,
        #475569);
    border-radius: 10px;
    animation: metalFlow 4s ease-in-out infinite;
    box-shadow: 
        inset 0 0 20px rgba(255, 255, 255, 0.3),
        0 0 15px rgba(255, 255, 255, 0.2);
    filter: brightness(1.2);
}

.metal-reflection {
    position: absolute;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1),
        transparent);
    border-radius: 10px 10px 0 0;
    animation: reflectionMove 3s ease-in-out infinite;
}

@keyframes metalFlow {
    0%, 100% { 
        width: 35%;
        background-position: 0% 50%;
    }
    25% { 
        width: 55%;
        background-position: 25% 50%;
    }
    50% { 
        width: 75%;
        background-position: 50% 50%;
    }
    75% { 
        width: 55%;
        background-position: 75% 50%;
    }
}

@keyframes reflectionMove {
    0%, 100% { transform: translateX(-50%); }
    50% { transform: translateX(50%); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control liquid metal progress
const metalProgress = document.querySelector('.liquid-metal-progress');

// Set metal type (color variations)
function setMetalType(type) {
    const fill = metalProgress.querySelector('.metal-fill');
    let gradient;
    
    switch(type) {
        case 'gold':
            gradient = 'linear-gradient(90deg, #fbbf24, #f59e0b, #d97706, #b45309)';
            break;
        case 'silver':
            gradient = 'linear-gradient(90deg, #e2e8f0, #cbd5e1, #94a3b8, #64748b)';
            break;
        case 'bronze':
            gradient = 'linear-gradient(90deg, #d97706, #92400e, #78350f, #451a03)';
            break;
        case 'chrome':
            gradient = 'linear-gradient(90deg, #ffffff, #d1d5db, #9ca3af, #6b7280)';
            break;
        default:
            gradient = 'linear-gradient(90deg, #cbd5e1, #94a3b8, #64748b, #475569)';
    }
    
    fill.style.background = gradient;
}

// Set progress viscosity
function setViscosity(viscosity) {
    const fill = metalProgress.querySelector('.metal-fill');
    fill.style.animationDuration = viscosity + 's';
}

// Set progress percentage
function setMetalProgress(percent) {
    const fill = metalProgress.querySelector('.metal-fill');
    fill.style.width = percent + '%';
    fill.style.animation = 'none';
}`
    },

    // ====================================================================
    // TEMPLATE 30: Particle Flow Progress
    // ====================================================================
    loader30: {
        name: "Particle Flow Progress",
        category: "progress",
        html: `<div class="loader-container">
    <div class="particle-flow-progress">
        <div class="flow-track"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>
</div>`,
        css: `.particle-flow-progress {
    width: 200px;
    height: 15px;
    background: rgba(15, 23, 42, 0.3);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(124, 58, 237, 0.2);
}

.flow-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(124, 58, 237, 0.1),
        transparent);
    animation: trackGlow 3s ease-in-out infinite;
}

.particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px #7c3aed);
    animation: particleFlow 2s linear infinite;
}

.particle:nth-child(2) {
    animation-delay: -0.66s;
    background: linear-gradient(45deg, #ec4899, #f59e0b);
}

.particle:nth-child(3) {
    animation-delay: -1.33s;
    background: linear-gradient(45deg, #10b981, #3b82f6);
}

.particle:nth-child(4) {
    animation-delay: -2s;
    background: linear-gradient(45deg, #3b82f6, #7c3aed);
}

@keyframes trackGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
}

@keyframes particleFlow {
    0% { 
        transform: translateX(-10px) translateY(0);
        opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { 
        transform: translateX(210px) translateY(0);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control particle flow progress
const particleProgress = document.querySelector('.particle-flow-progress');

// Set particle count
function setParticleCount(count) {
    // Clear existing particles except track
    const track = particleProgress.querySelector('.flow-track');
    particleProgress.innerHTML = '';
    particleProgress.appendChild(track);
    
    // Add new particles
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random colors
        const colors = [
            'linear-gradient(45deg, #7c3aed, #ec4899)',
            'linear-gradient(45deg, #ec4899, #f59e0b)',
            'linear-gradient(45deg, #10b981, #3b82f6)',
            'linear-gradient(45deg, #3b82f6, #7c3aed)',
            'linear-gradient(45deg, #f59e0b, #10b981)',
            'linear-gradient(45deg, #ec4899, #3b82f6)'
        ];
        
        particle.style.background = colors[i % colors.length];
        particle.style.animationDelay = \`-\${i * (2 / count)}s\`;
        particle.style.animationDuration = \`\${2 + (i * 0.2)}s\`;
        
        particleProgress.appendChild(particle);
    }
}

// Set particle speed
function setParticleSpeed(speed) {
    document.querySelectorAll('.particle').forEach(particle => {
        particle.style.animationDuration = speed + 's';
    });
}

// Set track glow intensity
function setTrackGlow(intensity) {
    const track = particleProgress.querySelector('.flow-track');
    track.style.opacity = intensity;
}`
    },

    // ====================================================================
    // TEMPLATE 31: Neon Scan Progress
    // ====================================================================
    loader31: {
        name: "Neon Scan Progress",
        category: "progress",
        html: `<div class="loader-container">
    <div class="neon-scan-progress">
        <div class="scan-track"></div>
        <div class="scan-beam"></div>
        <div class="scan-glow"></div>
    </div>
</div>`,
        css: `.neon-scan-progress {
    width: 200px;
    height: 25px;
    background: rgba(0, 0, 20, 0.8);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 243, 255, 0.3);
    box-shadow: 
        inset 0 0 20px rgba(0, 243, 255, 0.1),
        0 0 30px rgba(0, 243, 255, 0.2);
}

.scan-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 3px,
        rgba(0, 243, 255, 0.1) 3px,
        rgba(0, 243, 255, 0.1) 6px
    );
    animation: scanTrack 4s linear infinite;
}

.scan-beam {
    position: absolute;
    width: 70px;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        #00f3ff,
        #ff00ff,
        transparent);
    border-radius: 12px;
    filter: blur(2px);
    animation: scanBeam 3s ease-in-out infinite;
    mix-blend-mode: screen;
}

.scan-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(0, 243, 255, 0.1),
        rgba(255, 0, 255, 0.1),
        transparent);
    animation: scanGlow 2s ease-in-out infinite;
}

@keyframes scanTrack {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes scanBeam {
    0%, 100% { 
        transform: translateX(-100%);
        opacity: 0.5;
    }
    50% { 
        transform: translateX(150%);
        opacity: 1;
    }
}

@keyframes scanGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control neon scan progress
const scanProgress = document.querySelector('.neon-scan-progress');

// Set neon colors
function setNeonColors(color1, color2) {
    const beam = scanProgress.querySelector('.scan-beam');
    beam.style.background = \`linear-gradient(90deg, transparent, \${color1}, \${color2}, transparent)\`;
    
    const border = scanProgress.style;
    border.borderColor = \`\${color1}30\`;
    border.boxShadow = \`inset 0 0 20px \${color1}10, 0 0 30px \${color1}20\`;
}

// Set scan speed
function setScanSpeed(speed) {
    const beam = scanProgress.querySelector('.scan-beam');
    const track = scanProgress.querySelector('.scan-track');
    
    beam.style.animationDuration = speed + 's';
    track.style.animationDuration = (speed * 1.5) + 's';
}

// Set beam width
function setBeamWidth(width) {
    const beam = scanProgress.querySelector('.scan-beam');
    beam.style.width = width + 'px';
}

// Simulate scanning progress
function scanProgressSimulation(duration) {
    const beam = scanProgress.querySelector('.scan-beam');
    beam.style.animation = 'none';
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 100 / (duration * 10);
        beam.style.transform = \`translateX(\${progress}%)\`;
        
        if (progress >= 100) {
            clearInterval(interval);
            beam.style.animation = 'scanBeam 3s ease-in-out infinite';
        }
    }, 100);
}`
    },
        // ====================================================================
    // TEMPLATE 32: Quantum Field Spinner
    // ====================================================================
    loader32: {
        name: "Quantum Field Spinner",
        category: "animated",
        html: `<div class="loader-container">
    <div class="quantum-field-spinner">
        <div class="field-particle"></div>
        <div class="field-particle"></div>
        <div class="field-particle"></div>
        <div class="field-wave"></div>
    </div>
</div>`,
        css: `.quantum-field-spinner {
    width: 80px;
    height: 80px;
    position: relative;
    animation: quantumFieldRotate 8s linear infinite;
}

.field-particle {
    position: absolute;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle at center,
        rgba(124, 58, 237, 0.9) 0%,
        rgba(236, 72, 153, 0.7) 50%,
        transparent 70%);
    border-radius: 50%;
    filter: drop-shadow(0 0 8px #7c3aed);
    animation: quantumProbability 3s ease-in-out infinite;
}

.field-particle:nth-child(1) {
    top: 10%;
    left: 25%;
    animation-delay: 0s;
}

.field-particle:nth-child(2) {
    top: 60%;
    left: 10%;
    animation-delay: -1s;
}

.field-particle:nth-child(3) {
    top: 30%;
    right: 20%;
    animation-delay: -2s;
}

.field-wave {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top: 2px solid rgba(59, 130, 246, 0.4);
    border-bottom: 2px solid rgba(16, 185, 129, 0.4);
    animation: quantumWave 4s ease-in-out infinite;
    filter: blur(1px);
}

.field-wave::before,
.field-wave::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 50%;
    animation: quantumRipple 3s ease-out infinite;
}

.field-wave::after {
    width: 60%;
    height: 60%;
    top: 20%;
    left: 20%;
    animation-delay: -1.5s;
}

@keyframes quantumFieldRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(1); }
}

@keyframes quantumProbability {
    0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.7;
    }
    25% { 
        transform: translate(10px, -10px) scale(1.3);
        opacity: 1;
    }
    50% { 
        transform: translate(-5px, 15px) scale(0.9);
        opacity: 0.5;
    }
    75% { 
        transform: translate(-15px, -5px) scale(1.2);
        opacity: 0.9;
    }
}

@keyframes quantumWave {
    0%, 100% { 
        transform: rotate(0deg) scale(1);
        opacity: 0.3;
    }
    50% { 
        transform: rotate(180deg) scale(1.1);
        opacity: 0.8;
    }
}

@keyframes quantumRipple {
    0% {
        transform: scale(0.8);
        opacity: 1;
    }
    100% {
        transform: scale(1.5);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control quantum field spinner
const quantumField = document.querySelector('.quantum-field-spinner');

// Set quantum state (particle count)
function setQuantumState(particleCount) {
    quantumField.innerHTML = '<div class="field-wave"></div>';
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'field-particle';
        
        // Random position within circle
        const angle = (360 / particleCount) * i;
        const radius = 35;
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        particle.style.top = \`\${y}%\`;
        particle.style.left = \`\${x}%\`;
        particle.style.animationDelay = \`-\${i * (3 / particleCount)}s\`;
        
        quantumField.appendChild(particle);
    }
}

// Set field intensity
function setFieldIntensity(intensity) {
    quantumField.style.filter = \`brightness(\${intensity}) drop-shadow(0 0 \${intensity * 10}px rgba(124, 58, 237, 0.5))\`;
}

// Toggle superposition (random positions)
function toggleSuperposition() {
    document.querySelectorAll('.field-particle').forEach(particle => {
        const randomX = Math.random() * 80 + 10;
        const randomY = Math.random() * 80 + 10;
        particle.style.top = \`\${randomY}%\`;
        particle.style.left = \`\${randomX}%\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 33: Cosmic String Spinner
    // ====================================================================
    loader33: {
        name: "Cosmic String Spinner",
        category: "animated",
        html: `<div class="loader-container">
    <div class="cosmic-string-spinner">
        <div class="string-segment"></div>
        <div class="string-segment"></div>
        <div class="string-segment"></div>
    </div>
</div>`,
        css: `.cosmic-string-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    animation: cosmicRotate 6s linear infinite;
}

.string-segment {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
        transparent,
        #f59e0b,
        #ec4899,
        #7c3aed,
        transparent);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    filter: drop-shadow(0 0 5px #f59e0b);
    animation: cosmicVibrate 2s ease-in-out infinite;
}

.string-segment:nth-child(1) {
    transform: translateY(-50%) rotate(0deg);
    animation-delay: 0s;
}

.string-segment:nth-child(2) {
    transform: translateY(-50%) rotate(120deg);
    animation-delay: -0.66s;
}

.string-segment:nth-child(3) {
    transform: translateY(-50%) rotate(240deg);
    animation-delay: -1.33s;
}

.string-segment::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle at center,
        #f59e0b 0%,
        #ec4899 50%,
        transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 10px #f59e0b);
    animation: cosmicPulse 1.5s ease-in-out infinite;
}

@keyframes cosmicRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(1); }
}

@keyframes cosmicVibrate {
    0%, 100% { 
        opacity: 0.7;
        filter: drop-shadow(0 0 3px #f59e0b);
    }
    50% { 
        opacity: 1;
        filter: drop-shadow(0 0 10px #ec4899);
    }
}

@keyframes cosmicPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control cosmic string spinner
const cosmicSpinner = document.querySelector('.cosmic-string-spinner');

// Set string count
function setStringCount(count) {
    cosmicSpinner.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const segment = document.createElement('div');
        segment.className = 'string-segment';
        segment.style.transform = \`translateY(-50%) rotate(\${(360 / count) * i}deg)\`;
        segment.style.animationDelay = \`-\${i * (2 / count)}s\`;
        
        // Create the center dot
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = '12px';
        dot.style.height = '12px';
        dot.style.background = 'radial-gradient(circle at center, #f59e0b 0%, #ec4899 50%, transparent 70%)';
        dot.style.borderRadius = '50%';
        dot.style.top = '50%';
        dot.style.left = '50%';
        dot.style.transform = 'translate(-50%, -50%)';
        dot.style.filter = 'drop-shadow(0 0 10px #f59e0b)';
        dot.style.animation = \`cosmicPulse 1.5s ease-in-out infinite \${i * -0.3}s\`;
        
        segment.appendChild(dot);
        cosmicSpinner.appendChild(segment);
    }
}

// Set cosmic energy (colors)
function setCosmicEnergy(energyType) {
    let gradient;
    
    switch(energyType) {
        case 'dark':
            gradient = 'linear-gradient(90deg, transparent, #7c3aed, #3b82f6, #1e293b, transparent)';
            break;
        case 'nova':
            gradient = 'linear-gradient(90deg, transparent, #fbbf24, #f59e0b, #dc2626, transparent)';
            break;
        case 'nebula':
            gradient = 'linear-gradient(90deg, transparent, #ec4899, #8b5cf6, #3b82f6, transparent)';
            break;
        default:
            gradient = 'linear-gradient(90deg, transparent, #f59e0b, #ec4899, #7c3aed, transparent)';
    }
    
    document.querySelectorAll('.string-segment').forEach(segment => {
        segment.style.background = gradient;
    });
}

// Adjust string vibration
function setVibrationFrequency(frequency) {
    document.querySelectorAll('.string-segment').forEach(segment => {
        segment.style.animationDuration = frequency + 's';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 34: Holographic Matrix Spinner
    // ====================================================================
    loader34: {
        name: "Holographic Matrix Spinner",
        category: "animated",
        html: `<div class="loader-container">
    <div class="holographic-matrix-spinner">
        <div class="matrix-grid"></div>
        <div class="data-stream"></div>
        <div class="hologram-core"></div>
    </div>
</div>`,
        css: `.holographic-matrix-spinner {
    width: 80px;
    height: 80px;
    position: relative;
    perspective: 1000px;
    animation: matrixRotate 10s linear infinite;
}

.matrix-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        repeating-linear-gradient(0deg,
            transparent,
            transparent 9px,
            rgba(0, 255, 255, 0.1) 9px,
            rgba(0, 255, 255, 0.1) 10px),
        repeating-linear-gradient(90deg,
            transparent,
            transparent 9px,
            rgba(0, 255, 255, 0.1) 9px,
            rgba(0, 255, 255, 0.1) 10px);
    border: 1px solid rgba(0, 255, 255, 0.3);
    animation: gridPulse 3s ease-in-out infinite;
}

.data-stream {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg,
        transparent 0%,
        rgba(0, 255, 255, 0.3) 10%,
        transparent 20%,
        transparent 80%,
        rgba(255, 0, 255, 0.3) 90%,
        transparent 100%);
    animation: dataFlow 4s linear infinite;
    mix-blend-mode: screen;
}

.hologram-core {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateX(60deg);
    background: radial-gradient(circle at center,
        rgba(0, 255, 255, 0.8) 0%,
        rgba(255, 0, 255, 0.6) 30%,
        transparent 70%);
    border-radius: 50%;
    animation: hologramPulse 2s ease-in-out infinite;
    filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
}

@keyframes matrixRotate {
    0% { transform: rotateX(60deg) rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateX(60deg) rotateY(360deg) rotateZ(360deg); }
}

@keyframes gridPulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

@keyframes dataFlow {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

@keyframes hologramPulse {
    0%, 100% { 
        transform: translate(-50%, -50%) rotateX(60deg) scale(1);
        opacity: 0.7;
    }
    50% { 
        transform: translate(-50%, -50%) rotateX(60deg) scale(1.2);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control holographic matrix spinner
const matrixSpinner = document.querySelector('.holographic-matrix-spinner');

// Set grid density
function setGridDensity(density) {
    const grid = matrixSpinner.querySelector('.matrix-grid');
    grid.style.background = \`
        repeating-linear-gradient(0deg,
            transparent,
            transparent \${density - 1}px,
            rgba(0, 255, 255, 0.1) \${density - 1}px,
            rgba(0, 255, 255, 0.1) \${density}px),
        repeating-linear-gradient(90deg,
            transparent,
            transparent \${density - 1}px,
            rgba(0, 255, 255, 0.1) \${density - 1}px,
            rgba(0, 255, 255, 0.1) \${density}px)
    \`;
}

// Set data stream color
function setDataStreamColor(color1, color2) {
    const stream = matrixSpinner.querySelector('.data-stream');
    stream.style.background = \`linear-gradient(0deg,
        transparent 0%,
        \${color1} 10%,
        transparent 20%,
        transparent 80%,
        \${color2} 90%,
        transparent 100%)\`;
}

// Set hologram perspective
function setPerspective(perspective) {
    matrixSpinner.style.perspective = perspective + 'px';
}

// Toggle data encryption (random stream)
function toggleEncryption() {
    const stream = matrixSpinner.querySelector('.data-stream');
    const randomColor1 = \`rgb(\${Math.random() * 255}, \${Math.random() * 255}, \${Math.random() * 255})\`;
    const randomColor2 = \`rgb(\${Math.random() * 255}, \${Math.random() * 255}, \${Math.random() * 255})\`;
    
    stream.style.background = \`linear-gradient(0deg,
        transparent 0%,
        \${randomColor1} \${Math.random() * 20}%,
        transparent \${20 + Math.random() * 20}%,
        transparent \${60 + Math.random() * 20}%,
        \${randomColor2} \${80 + Math.random() * 20}%,
        transparent 100%)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 35: Temporal Vortex Spinner
    // ====================================================================
    loader35: {
        name: "Temporal Vortex Spinner",
        category: "animated",
        html: `<div class="loader-container">
    <div class="temporal-vortex-spinner">
        <div class="time-ring"></div>
        <div class="time-ring"></div>
        <div class="chrono-particle"></div>
    </div>
</div>`,
        css: `.temporal-vortex-spinner {
    width: 70px;
    height: 70px;
    position: relative;
    animation: temporalDistortion 5s ease-in-out infinite;
}

.time-ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top: 2px solid rgba(124, 58, 237, 0.6);
    border-bottom: 2px solid rgba(16, 185, 129, 0.6);
    animation: timeDilation 3s linear infinite;
    filter: blur(1px);
}

.time-ring:nth-child(1) {
    animation-delay: 0s;
    transform: rotateX(70deg);
}

.time-ring:nth-child(2) {
    animation-delay: -1.5s;
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    transform: rotateX(70deg) rotateY(45deg);
}

.chrono-particle {
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle at center,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(124, 58, 237, 0.7) 50%,
        transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 0 10px #7c3aed);
    animation: temporalOrbit 4s linear infinite;
}

@keyframes temporalDistortion {
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        filter: blur(0px);
    }
    25% { 
        transform: scale(1.05) rotate(90deg);
        filter: blur(1px);
    }
    50% { 
        transform: scale(0.95) rotate(180deg);
        filter: blur(2px);
    }
    75% { 
        transform: scale(1.1) rotate(270deg);
        filter: blur(1px);
    }
}

@keyframes timeDilation {
    0% { 
        transform: rotateX(var(--angle)) rotate(0deg) scale(1);
        opacity: 0.7;
    }
    50% { 
        transform: rotateX(var(--angle)) rotate(180deg) scale(1.1);
        opacity: 1;
    }
    100% { 
        transform: rotateX(var(--angle)) rotate(360deg) scale(1);
        opacity: 0.7;
    }
}

@keyframes temporalOrbit {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) translateX(30px) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) translateX(30px) rotate(-360deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control temporal vortex spinner
const temporalSpinner = document.querySelector('.temporal-vortex-spinner');

// Set time rings count
function setTimeRingCount(count) {
    temporalSpinner.innerHTML = '<div class="chrono-particle"></div>';
    
    for (let i = 0; i < count; i++) {
        const ring = document.createElement('div');
        ring.className = 'time-ring';
        
        const size = 100 - (i * (60 / count));
        ring.style.width = size + '%';
        ring.style.height = size + '%';
        ring.style.top = (100 - size) / 2 + '%';
        ring.style.left = (100 - size) / 2 + '%';
        
        const angle = 45 + (i * 15);
        ring.style.setProperty('--angle', angle + 'deg');
        ring.style.transform = \`rotateX(\${angle}deg) rotateY(\${i * 30}deg)\`;
        ring.style.animationDelay = \`-\${i * 0.5}s\`;
        ring.style.borderTopColor = \`rgba(\${124 + i * 20}, \${58 + i * 10}, \${237 - i * 20}, 0.6)\`;
        ring.style.borderBottomColor = \`rgba(\${16 + i * 20}, \${185 - i * 10}, \${129 + i * 20}, 0.6)\`;
        
        temporalSpinner.prepend(ring);
    }
}

// Set time dilation factor
function setTimeDilation(factor) {
    temporalSpinner.style.animationDuration = factor + 's';
    document.querySelectorAll('.time-ring').forEach((ring, index) => {
        ring.style.animationDuration = (factor * 0.6) + 's';
        ring.style.animationDelay = \`-\${index * (factor * 0.1)}s\`;
    });
}

// Reverse time flow
function reverseTimeFlow() {
    const particle = temporalSpinner.querySelector('.chrono-particle');
    const currentAnim = particle.style.animation;
    particle.style.animation = currentAnim.includes('reverse') 
        ? currentAnim.replace('reverse', 'normal') 
        : currentAnim.replace('normal', 'reverse');
    
    document.querySelectorAll('.time-ring').forEach(ring => {
        ring.style.animationDirection = ring.style.animationDirection === 'reverse' ? 'normal' : 'reverse';
    });
}

// Set temporal distortion
function setTemporalDistortion(distortion) {
    temporalSpinner.style.filter = \`blur(\${distortion}px) brightness(\${1 + distortion * 0.1})\`;
}`
    },

    // ====================================================================
    // TEMPLATE 36: Bio-Luminescent Spinner
    // ====================================================================
    loader36: {
        name: "Bio-Luminescent Spinner",
        category: "animated",
        html: `<div class="loader-container">
    <div class="bio-luminescent-spinner">
        <div class="bio-cell"></div>
        <div class="bio-cell"></div>
        <div class="bio-cell"></div>
        <div class="neural-connection"></div>
    </div>
</div>`,
        css: `.bio-luminescent-spinner {
    width: 80px;
    height: 80px;
    position: relative;
    animation: bioPulse 4s ease-in-out infinite;
}

.bio-cell {
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle at center,
        rgba(16, 185, 129, 0.9) 0%,
        rgba(34, 197, 94, 0.7) 40%,
        transparent 70%);
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #10b981);
    animation: bioFloat 3s ease-in-out infinite;
}

.bio-cell:nth-child(1) {
    top: 20%;
    left: 30%;
    animation-delay: 0s;
}

.bio-cell:nth-child(2) {
    top: 60%;
    left: 20%;
    animation-delay: -1s;
}

.bio-cell:nth-child(3) {
    top: 40%;
    right: 25%;
    animation-delay: -2s;
}

.neural-connection {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.2), transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.2), transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(101, 163, 13, 0.1), transparent 60%);
    border-radius: 50%;
    animation: neuralPulse 2s ease-in-out infinite;
}

.neural-connection::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        conic-gradient(from 0deg,
            transparent,
            rgba(34, 197, 94, 0.3),
            rgba(16, 185, 129, 0.4),
            rgba(101, 163, 13, 0.3),
            transparent);
    border-radius: 50%;
    animation: neuralRotate 6s linear infinite;
    filter: blur(3px);
    mix-blend-mode: screen;
}

@keyframes bioPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.9; }
}

@keyframes bioFloat {
    0%, 100% { 
        transform: translate(0, 0) scale(1);
        filter: drop-shadow(0 0 8px #10b981);
    }
    25% { 
        transform: translate(5px, -8px) scale(1.2);
        filter: drop-shadow(0 0 12px #34d399);
    }
    50% { 
        transform: translate(-8px, 5px) scale(0.9);
        filter: drop-shadow(0 0 6px #10b981);
    }
    75% { 
        transform: translate(8px, 8px) scale(1.1);
        filter: drop-shadow(0 0 10px #34d399);
    }
}

@keyframes neuralPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
}

@keyframes neuralRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control bio-luminescent spinner
const bioSpinner = document.querySelector('.bio-luminescent-spinner');

// Set cell count
function setCellCount(count) {
    // Clear existing cells
    const connection = bioSpinner.querySelector('.neural-connection');
    bioSpinner.innerHTML = '';
    bioSpinner.appendChild(connection);
    
    // Create cells in circular pattern
    for (let i = 0; i < count; i++) {
        const cell = document.createElement('div');
        cell.className = 'bio-cell';
        
        const angle = (360 / count) * i;
        const radius = 35;
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        cell.style.top = \`\${y}%\`;
        cell.style.left = \`\${x}%\`;
        cell.style.animationDelay = \`-\${i * (3 / count)}s\`;
        
        // Color variation based on position
        const hue = (i * (360 / count)) % 360;
        cell.style.background = \`radial-gradient(circle at center,
            hsl(\${hue}, 80%, 60%) 0%,
            hsl(\${(hue + 30) % 360}, 80%, 50%) 40%,
            transparent 70%)\`;
        cell.style.filter = \`drop-shadow(0 0 10px hsl(\${hue}, 80%, 60%))\`;
        
        bioSpinner.appendChild(cell);
    }
}

// Set organism type (color theme)
function setOrganismType(type) {
    let colors;
    
    switch(type) {
        case 'algae':
            colors = ['#10b981', '#34d399', '#059669', '#047857'];
            break;
        case 'jellyfish':
            colors = ['#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6'];
            break;
        case 'coral':
            colors = ['#ec4899', '#db2777', '#be185d', '#9d174d'];
            break;
        case 'plankton':
            colors = ['#3b82f6', '#60a5fa', '#2563eb', '#1d4ed8'];
            break;
        default:
            colors = ['#10b981', '#34d399', '#059669', '#047857'];
    }
    
    document.querySelectorAll('.bio-cell').forEach((cell, index) => {
        const color = colors[index % colors.length];
        cell.style.background = \`radial-gradient(circle at center,
            \${color}90 0%,
            \${color}70 40%,
            transparent 70%)\`;
        cell.style.filter = \`drop-shadow(0 0 10px \${color})\`;
    });
}

// Set metabolic rate (animation speed)
function setMetabolicRate(rate) {
    bioSpinner.style.animationDuration = rate + 's';
    document.querySelectorAll('.bio-cell').forEach(cell => {
        cell.style.animationDuration = (rate * 0.75) + 's';
    });
}

// Simulate cell division
function simulateCellDivision() {
    const cells = document.querySelectorAll('.bio-cell');
    cells.forEach(cell => {
        cell.style.animation = 'none';
        setTimeout(() => {
            cell.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cell.style.transform = 'scale(1)';
                cell.style.animation = 'bioFloat 3s ease-in-out infinite';
            }, 300);
        }, 100);
    });
}`
    },
        // ====================================================================
    // TEMPLATE 37: Morphing Blob Loader
    // ====================================================================
    loader37: {
        name: "Morphing Blob Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="morphing-blob-loader"></div>
</div>`,
        css: `.morphing-blob-loader {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, 
        #7c3aed, 
        #ec4899, 
        #f59e0b);
    border-radius: 50%;
    position: relative;
    animation: morphBlob 4s ease-in-out infinite;
    filter: blur(1px);
    box-shadow: 
        0 0 40px rgba(124, 58, 237, 0.4),
        inset 0 0 20px rgba(255, 255, 255, 0.2);
}

.morphing-blob-loader::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        rgba(124, 58, 237, 0.3), 
        rgba(236, 72, 153, 0.3), 
        rgba(245, 158, 11, 0.3));
    border-radius: 50%;
    animation: blobShadow 4s ease-in-out infinite;
    filter: blur(15px);
    z-index: -1;
}

@keyframes morphBlob {
    0%, 100% {
        border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
        transform: scale(1) rotate(0deg);
    }
    25% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        transform: scale(1.1) rotate(90deg);
    }
    50% {
        border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
        transform: scale(0.95) rotate(180deg);
    }
    75% {
        border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
        transform: scale(1.05) rotate(270deg);
    }
}

@keyframes blobShadow {
    0%, 100% {
        transform: scale(1);
        opacity: 0.7;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.4;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control morphing blob loader
const blobLoader = document.querySelector('.morphing-blob-loader');

// Set blob colors
function setBlobColors(colors) {
    blobLoader.style.background = \`linear-gradient(45deg, \${colors.join(', ')})\`;
    blobLoader.querySelector('::before').style.background = \`linear-gradient(45deg, \${colors.map(c => c + '50').join(', ')})\`;
}

// Adjust morphing speed
function setMorphSpeed(speed) {
    blobLoader.style.animationDuration = speed + 's';
}

// Set blob viscosity (blur amount)
function setViscosity(viscosity) {
    blobLoader.style.filter = \`blur(\${viscosity}px)\`;
    blobLoader.querySelector('::before').style.filter = \`blur(\${viscosity * 3}px)\`;
}

// Randomize blob shape
function randomizeBlob() {
    const shapes = [
        '63% 37% 54% 46% / 55% 48% 52% 45%',
        '30% 70% 70% 30% / 30% 30% 70% 70%',
        '50% 50% 20% 80% / 25% 80% 20% 75%',
        '40% 60% 70% 30% / 40% 40% 60% 50%',
        '25% 75% 25% 75% / 75% 25% 75% 25%'
    ];
    
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    blobLoader.style.borderRadius = randomShape;
}`
    },

    // ====================================================================
    // TEMPLATE 38: Geometric Pattern Loader
    // ====================================================================
    loader38: {
        name: "Geometric Pattern Loader",
        category: "minimal",
        html: `<div class="loader-container">
    <div class="geometric-pattern-loader">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
</div>`,
        css: `.geometric-pattern-loader {
    width: 80px;
    height: 80px;
    position: relative;
    animation: patternRotate 6s linear infinite;
}

.shape {
    position: absolute;
    width: 40px;
    height: 40px;
    border: 3px solid;
    animation: shapeMorph 3s ease-in-out infinite;
}

.shape:nth-child(1) {
    top: 0;
    left: 0;
    border-color: #7c3aed;
    border-radius: 50% 0 0 0;
    animation-delay: 0s;
}

.shape:nth-child(2) {
    top: 0;
    right: 0;
    border-color: #ec4899;
    border-radius: 0 50% 0 0;
    animation-delay: -1s;
}

.shape:nth-child(3) {
    bottom: 0;
    left: 20px;
    border-color: #3b82f6;
    border-radius: 0 0 50% 50%;
    width: 40px;
    animation-delay: -2s;
}

@keyframes patternRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes shapeMorph {
    0%, 100% {
        border-radius: 50% 0 0 0;
        transform: scale(1) rotate(0deg);
    }
    25% {
        border-radius: 0 50% 0 0;
        transform: scale(0.8) rotate(90deg);
    }
    50% {
        border-radius: 0 0 50% 0;
        transform: scale(1.2) rotate(180deg);
    }
    75% {
        border-radius: 0 0 0 50%;
        transform: scale(0.9) rotate(270deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control geometric pattern loader
const patternLoader = document.querySelector('.geometric-pattern-loader');

// Set shape count
function setShapeCount(count) {
    patternLoader.innerHTML = '';
    
    // Generate positions for shapes in a circle
    for (let i = 0; i < count; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        
        // Calculate position around circle
        const angle = (360 / count) * i;
        const radius = 30;
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        shape.style.top = \`\${y - 20}%\`; // Center the 40px shape
        shape.style.left = \`\${x - 20}%\`;
        shape.style.animationDelay = \`-\${i * (3 / count)}s\`;
        
        // Color variation
        const hue = (i * (360 / count)) % 360;
        shape.style.borderColor = \`hsl(\${hue}, 80%, 60%)\`;
        
        patternLoader.appendChild(shape);
    }
}

// Set geometric style
function setGeometricStyle(style) {
    const shapes = patternLoader.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        switch(style) {
            case 'circles':
                shape.style.borderRadius = '50%';
                shape.style.borderWidth = '4px';
                break;
            case 'squares':
                shape.style.borderRadius = '0%';
                shape.style.borderWidth = '2px';
                break;
            case 'triangles':
                shape.style.borderRadius = '0%';
                shape.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
                shape.style.border = 'none';
                shape.style.background = shape.style.borderColor;
                break;
            case 'hexagons':
                shape.style.borderRadius = '0%';
                shape.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
                shape.style.border = 'none';
                shape.style.background = shape.style.borderColor;
                break;
        }
    });
}

// Set pattern complexity
function setPatternComplexity(complexity) {
    patternLoader.style.animationDuration = complexity + 's';
}`
    },

    // ====================================================================
    // TEMPLATE 39: Text Reveal Loader
    // ====================================================================
    loader39: {
        name: "Text Reveal Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="text-reveal-loader">
        <span class="letter">L</span>
        <span class="letter">O</span>
        <span class="letter">A</span>
        <span class="letter">D</span>
        <span class="letter">I</span>
        <span class="letter">N</span>
        <span class="letter">G</span>
    </div>
</div>`,
        css: `.text-reveal-loader {
    display: flex;
    gap: 8px;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Arial', sans-serif;
}

.letter {
    position: relative;
    color: #7c3aed;
    animation: letterReveal 2s ease-in-out infinite;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.letter:nth-child(1) { animation-delay: 0s; }
.letter:nth-child(2) { animation-delay: 0.1s; }
.letter:nth-child(3) { animation-delay: 0.2s; }
.letter:nth-child(4) { animation-delay: 0.3s; }
.letter:nth-child(5) { animation-delay: 0.4s; }
.letter:nth-child(6) { animation-delay: 0.5s; }
.letter:nth-child(7) { animation-delay: 0.6s; }

.letter::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    animation: textFill 2s ease-in-out infinite;
    z-index: -1;
}

@keyframes letterReveal {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    50% {
        transform: translateY(-10px) scale(1.1);
        opacity: 0.8;
    }
}

@keyframes textFill {
    0%, 100% {
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    50% {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control text reveal loader
const textLoader = document.querySelector('.text-reveal-loader');

// Set custom text
function setLoaderText(text) {
    textLoader.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.textContent = text[i];
        letter.style.animationDelay = \`\${i * 0.1}s\`;
        
        // Color gradient based on position
        const hue = (i * (360 / text.length)) % 360;
        letter.style.color = \`hsl(\${hue}, 80%, 60%)\`;
        
        // Create fill effect
        const fill = document.createElement('div');
        fill.style.position = 'absolute';
        fill.style.top = '0';
        fill.style.left = '0';
        fill.style.width = '100%';
        fill.style.height = '100%';
        fill.style.background = \`linear-gradient(45deg, hsl(\${hue}, 80%, 60%), hsl(\${(hue + 30) % 360}, 80%, 60%))\`;
        fill.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
        fill.style.animation = \`textFill 2s ease-in-out infinite \${i * 0.1}s\`;
        fill.style.zIndex = '-1';
        
        letter.appendChild(fill);
        textLoader.appendChild(letter);
    }
}

// Set font properties
function setFontProperties(fontFamily, fontSize, fontWeight) {
    textLoader.style.fontFamily = fontFamily;
    textLoader.style.fontSize = fontSize + 'px';
    textLoader.style.fontWeight = fontWeight;
}

// Set animation type
function setAnimationType(type) {
    const letters = textLoader.querySelectorAll('.letter');
    
    letters.forEach(letter => {
        switch(type) {
            case 'bounce':
                letter.style.animation = 'letterReveal 2s ease-in-out infinite';
                break;
            case 'typewriter':
                letter.style.animation = 'typewriter 2s steps(1) infinite';
                break;
            case 'wave':
                letter.style.animation = 'wave 2s ease-in-out infinite';
                break;
            case 'pulse':
                letter.style.animation = 'pulse 1.5s ease-in-out infinite';
                break;
        }
    });
}

// Add typing cursor
function addTypingCursor() {
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s infinite';
    cursor.style.color = '#7c3aed';
    cursor.style.fontWeight = 'bold';
    
    textLoader.appendChild(cursor);
}`
    },

    // ====================================================================
    // TEMPLATE 40: Floating Islands Loader
    // ====================================================================
    loader40: {
        name: "Floating Islands Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="floating-islands-loader">
        <div class="island"></div>
        <div class="island"></div>
        <div class="island"></div>
    </div>
</div>`,
        css: `.floating-islands-loader {
    width: 100px;
    height: 60px;
    position: relative;
    animation: islandsFloat 6s ease-in-out infinite;
}

.island {
    position: absolute;
    background: linear-gradient(to bottom, 
        #10b981, 
        #059669, 
        #047857);
    border-radius: 50%;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    animation: islandBob 3s ease-in-out infinite;
}

.island:nth-child(1) {
    width: 40px;
    height: 20px;
    top: 10px;
    left: 10px;
    animation-delay: 0s;
}

.island:nth-child(2) {
    width: 30px;
    height: 15px;
    top: 30px;
    left: 50px;
    background: linear-gradient(to bottom, 
        #3b82f6, 
        #2563eb, 
        #1d4ed8);
    animation-delay: -1s;
}

.island:nth-child(3) {
    width: 25px;
    height: 12px;
    top: 15px;
    right: 15px;
    background: linear-gradient(to bottom, 
        #f59e0b, 
        #d97706, 
        #b45309);
    animation-delay: -2s;
}

.island::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, 
        rgba(255, 255, 255, 0.3), 
        rgba(255, 255, 255, 0.1));
    border-radius: 50% 50% 0 0;
    top: 0;
    left: 0;
}

@keyframes islandsFloat {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    25% {
        transform: translateY(-5px) rotate(2deg);
    }
    50% {
        transform: translateY(0) rotate(0deg);
    }
    75% {
        transform: translateY(5px) rotate(-2deg);
    }
}

@keyframes islandBob {
    0%, 100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-8px) scale(1.05);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control floating islands loader
const islandsLoader = document.querySelector('.floating-islands-loader');

// Set island count
function setIslandCount(count) {
    islandsLoader.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const island = document.createElement('div');
        island.className = 'island';
        
        // Random size between 20-40px
        const width = 20 + Math.random() * 20;
        const height = width / 2;
        
        // Random position
        const left = Math.random() * 70;
        const top = Math.random() * 40;
        
        island.style.width = width + 'px';
        island.style.height = height + 'px';
        island.style.top = top + 'px';
        island.style.left = left + 'px';
        island.style.animationDelay = \`-\${i * 0.5}s\`;
        
        // Random biome color
        const biomes = [
            'linear-gradient(to bottom, #10b981, #059669, #047857)', // Forest
            'linear-gradient(to bottom, #3b82f6, #2563eb, #1d4ed8)', // Ocean
            'linear-gradient(to bottom, #f59e0b, #d97706, #b45309)', // Desert
            'linear-gradient(to bottom, #ec4899, #db2777, #be185d)', // Cherry blossom
            'linear-gradient(to bottom, #8b5cf6, #7c3aed, #6d28d9)'  // Mountain
        ];
        
        island.style.background = biomes[Math.floor(Math.random() * biomes.length)];
        
        // Add reflection
        const reflection = document.createElement('div');
        reflection.style.position = 'absolute';
        reflection.style.width = '100%';
        reflection.style.height = '30%';
        reflection.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))';
        reflection.style.borderRadius = '50% 50% 0 0';
        reflection.style.top = '0';
        reflection.style.left = '0';
        
        island.appendChild(reflection);
        islandsLoader.appendChild(island);
    }
}

// Set floating speed
function setFloatingSpeed(speed) {
    islandsLoader.style.animationDuration = speed + 's';
    document.querySelectorAll('.island').forEach(island => {
        island.style.animationDuration = (speed / 2) + 's';
    });
}

// Add clouds
function addClouds() {
    for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.position = 'absolute';
        cloud.style.width = '30px';
        cloud.style.height = '15px';
        cloud.style.background = 'rgba(255, 255, 255, 0.8)';
        cloud.style.borderRadius = '50%';
        cloud.style.filter = 'blur(2px)';
        cloud.style.animation = \`cloudFloat \${4 + i}s linear infinite\`;
        cloud.style.top = \`\${Math.random() * 20}px\`;
        cloud.style.left = \`-\${30 + i * 20}px\`;
        
        islandsLoader.appendChild(cloud);
    }
}

// Simulate day/night cycle
function setTimeOfDay(time) {
    const container = islandsLoader.parentElement;
    switch(time) {
        case 'day':
            container.style.background = 'linear-gradient(to bottom, #87CEEB, #E0F7FF)';
            break;
        case 'night':
            container.style.background = 'linear-gradient(to bottom, #0f172a, #334155)';
            break;
        case 'sunset':
            container.style.background = 'linear-gradient(to bottom, #FF7E5F, #FEB47B)';
            break;
    }
}`
    },

    // ====================================================================
    // TEMPLATE 41: Gradient Orb Loader
    // ====================================================================
    loader41: {
        name: "Gradient Orb Loader",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="gradient-orb-loader">
        <div class="orb-layer"></div>
        <div class="orb-layer"></div>
        <div class="orb-layer"></div>
    </div>
</div>`,
        css: `.gradient-orb-loader {
    width: 70px;
    height: 70px;
    position: relative;
    animation: orbRotate 4s linear infinite;
}

.orb-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: orbPulse 3s ease-in-out infinite;
}

.orb-layer:nth-child(1) {
    background: radial-gradient(circle at 30% 30%,
        rgba(124, 58, 237, 0.9) 0%,
        rgba(124, 58, 237, 0.5) 50%,
        transparent 70%);
    animation-delay: 0s;
    filter: blur(5px);
}

.orb-layer:nth-child(2) {
    background: radial-gradient(circle at 70% 70%,
        rgba(236, 72, 153, 0.7) 0%,
        rgba(236, 72, 153, 0.3) 50%,
        transparent 70%);
    animation-delay: -1s;
    filter: blur(8px);
}

.orb-layer:nth-child(3) {
    background: radial-gradient(circle at 50% 50%,
        rgba(59, 130, 246, 0.5) 0%,
        rgba(59, 130, 246, 0.2) 50%,
        transparent 70%);
    animation-delay: -2s;
    filter: blur(12px);
}

@keyframes orbRotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(1); }
}

@keyframes orbPulse {
    0%, 100% {
        transform: scale(1);
        opacity: 0.8;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control gradient orb loader
const orbLoader = document.querySelector('.gradient-orb-loader');

// Set layer count
function setLayerCount(count) {
    orbLoader.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const layer = document.createElement('div');
        layer.className = 'orb-layer';
        
        // Calculate position for each layer
        const angle = (360 / count) * i;
        const x = 30 + 40 * Math.cos(angle * Math.PI / 180);
        const y = 30 + 40 * Math.sin(angle * Math.PI / 180);
        
        layer.style.background = \`radial-gradient(circle at \${x}% \${y}%,
            rgba(\${124 + i * 20}, \${58 + i * 10}, \${237 - i * 20}, 0.9) 0%,
            rgba(\${124 + i * 20}, \${58 + i * 10}, \${237 - i * 20}, 0.5) 50%,
            transparent 70%)\`;
        
        layer.style.animationDelay = \`-\${i * (3 / count)}s\`;
        layer.style.filter = \`blur(\${5 + i * 3}px)\`;
        
        orbLoader.appendChild(layer);
    }
}

// Set orb colors
function setOrbColors(colors) {
    const layers = orbLoader.querySelectorAll('.orb-layer');
    
    layers.forEach((layer, index) => {
        const color = colors[index % colors.length];
        layer.style.background = \`radial-gradient(circle at \${30 + index * 20}% \${30 + index * 20}%,
            \${color}90 0%,
            \${color}50 50%,
            transparent 70%)\`;
    });
}

// Set orb density (blur amount)
function setOrbDensity(density) {
    const layers = orbLoader.querySelectorAll('.orb-layer');
    
    layers.forEach((layer, index) => {
        layer.style.filter = \`blur(\${density + (index * 2)}px)\`;
    });
}

// Set rotation speed
function setRotationSpeed(speed) {
    orbLoader.style.animationDuration = speed + 's';
    document.querySelectorAll('.orb-layer').forEach((layer, index) => {
        layer.style.animationDuration = (speed * 0.75) + 's';
        layer.style.animationDelay = \`-\${index * (speed * 0.25)}s\`;
    });
}

// Add particle effect
function addParticles() {
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'orb-particle';
        particle.style.position = 'absolute';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = 'rgba(255, 255, 255, 0.8)';
        particle.style.borderRadius = '50%';
        particle.style.animation = \`particleOrbit \${2 + Math.random()}s linear infinite\`;
        particle.style.top = '50%';
        particle.style.left = '50%';
        
        orbLoader.appendChild(particle);
    }
}`
    },
    // ====================================================================
    // TEMPLATE 42: Simple Gradient Bar
    // ====================================================================
    loader42: {
        name: "Simple Gradient Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="simple-gradient-bar">
        <div class="gradient-fill"></div>
    </div>
</div>`,
        css: `.simple-gradient-bar {
    width: 200px;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}

.gradient-fill {
    position: absolute;
    height: 100%;
    width: 40%;
    background: linear-gradient(90deg, 
        #3b82f6, 
        #8b5cf6, 
        #ec4899);
    border-radius: 3px;
    animation: simpleFlow 2s ease-in-out infinite;
}

@keyframes simpleFlow {
    0% {
        left: -40%;
    }
    100% {
        left: 100%;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control simple gradient bar
const simpleBar = document.querySelector('.simple-gradient-bar');

// Change gradient colors
function setGradientColors(colors) {
    const fill = simpleBar.querySelector('.gradient-fill');
    fill.style.background = \`linear-gradient(90deg, \${colors.join(', ')})\`;
}

// Adjust animation speed
function setFlowSpeed(speed) {
    const fill = simpleBar.querySelector('.gradient-fill');
    fill.style.animationDuration = speed + 's';
}

// Set bar height
function setBarHeight(height) {
    simpleBar.style.height = height + 'px';
    simpleBar.style.borderRadius = height / 2 + 'px';
    const fill = simpleBar.querySelector('.gradient-fill');
    fill.style.borderRadius = height / 2 + 'px';
}

// Set background color
function setBackgroundColor(color) {
    simpleBar.style.background = color;
}`
    },

    // ====================================================================
    // TEMPLATE 43: Shimmer Bar
    // ====================================================================
    loader43: {
        name: "Shimmer Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="shimmer-bar">
        <div class="shimmer-fill"></div>
    </div>
</div>`,
        css: `.shimmer-bar {
    width: 200px;
    height: 8px;
    background: #f3f4f6;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.shimmer-fill {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, 
        #f3f4f6 0%, 
        #e5e7eb 20%, 
        #d1d5db 50%, 
        #e5e7eb 80%, 
        #f3f4f6 100%);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: shimmerSlide 2s linear infinite;
}

@keyframes shimmerSlide {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control shimmer bar
const shimmerBar = document.querySelector('.shimmer-bar');

// Change shimmer colors
function setShimmerColors(baseColor, highlightColor) {
    const fill = shimmerBar.querySelector('.shimmer-fill');
    fill.style.background = \`linear-gradient(90deg, 
        \${baseColor}80 0%, 
        \${highlightColor} 20%, 
        \${baseColor} 50%, 
        \${highlightColor} 80%, 
        \${baseColor}80 100%)\`;
}

// Adjust shimmer speed
function setShimmerSpeed(speed) {
    const fill = shimmerBar.querySelector('.shimmer-fill');
    fill.style.animationDuration = speed + 's';
}

// Set shimmer intensity
function setShimmerIntensity(intensity) {
    const fill = shimmerBar.querySelector('.shimmer-fill');
    fill.style.backgroundSize = \`\${intensity}% 100%\`;
}

// Toggle shimmer effect
function toggleShimmer() {
    const fill = shimmerBar.querySelector('.shimmer-fill');
    const isPaused = fill.style.animationPlayState === 'paused';
    fill.style.animationPlayState = isPaused ? 'running' : 'paused';
}`
    },

    // ====================================================================
    // TEMPLATE 44: Pulse Bar
    // ====================================================================
    loader44: {
        name: "Pulse Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="pulse-bar">
        <div class="pulse-fill"></div>
    </div>
</div>`,
        css: `.pulse-bar {
    width: 200px;
    height: 4px;
    background: #e5e7eb;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
}

.pulse-fill {
    position: absolute;
    height: 100%;
    width: 0%;
    background: #10b981;
    border-radius: 2px;
    animation: pulseExpand 1.5s ease-in-out infinite;
}

@keyframes pulseExpand {
    0%, 100% {
        width: 10%;
        left: 0%;
        opacity: 0.7;
    }
    50% {
        width: 100%;
        left: 0%;
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control pulse bar
const pulseBar = document.querySelector('.pulse-bar');

// Change pulse color
function setPulseColor(color) {
    const fill = pulseBar.querySelector('.pulse-fill');
    fill.style.background = color;
}

// Adjust pulse speed
function setPulseSpeed(speed) {
    const fill = pulseBar.querySelector('.pulse-fill');
    fill.style.animationDuration = speed + 's';
}

// Set pulse width range
function setPulseWidth(minWidth, maxWidth) {
    const fill = pulseBar.querySelector('.pulse-fill');
    const keyframes = \`
        @keyframes pulseExpand {
            0%, 100% {
                width: \${minWidth}%;
                left: 0%;
                opacity: 0.7;
            }
            50% {
                width: \${maxWidth}%;
                left: 0%;
                opacity: 1;
            }
        }
    \`;
    
    // Add the new keyframes
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
}

// Set background color
function setPulseBackground(color) {
    pulseBar.style.background = color;
}

// Simulate progress completion
function simulateProgress(duration) {
    const fill = pulseBar.querySelector('.pulse-fill');
    fill.style.animation = 'none';
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 100 / (duration * 10);
        fill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                fill.style.animation = 'pulseExpand 1.5s ease-in-out infinite';
            }, 500);
        }
    }, 100);
}`
    },

    // ====================================================================
    // TEMPLATE 45: Striped Bar
    // ====================================================================
    loader45: {
        name: "Striped Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="striped-bar">
        <div class="striped-fill"></div>
    </div>
</div>`,
        css: `.striped-bar {
    width: 200px;
    height: 10px;
    background: #f3f4f6;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
}

.striped-fill {
    position: absolute;
    height: 100%;
    width: 100%;
    background: repeating-linear-gradient(
        45deg,
        #3b82f6,
        #3b82f6 10px,
        #2563eb 10px,
        #2563eb 20px
    );
    background-size: 28px 28px;
    border-radius: 5px;
    animation: stripeMove 1s linear infinite;
}

@keyframes stripeMove {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 28px 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control striped bar
const stripedBar = document.querySelector('.striped-bar');

// Change stripe colors
function setStripeColors(color1, color2) {
    const fill = stripedBar.querySelector('.striped-fill');
    fill.style.background = \`repeating-linear-gradient(
        45deg,
        \${color1},
        \${color1} 10px,
        \${color2} 10px,
        \${color2} 20px
    )\`;
}

// Adjust stripe size
function setStripeSize(size) {
    const fill = stripedBar.querySelector('.striped-fill');
    const stripeWidth = size;
    const backgroundSize = stripeWidth * 2 * 1.414; // diagonal calculation
    
    fill.style.background = \`repeating-linear-gradient(
        45deg,
        transparent,
        transparent \${stripeWidth}px,
        var(--stripe-color) \${stripeWidth}px,
        var(--stripe-color) \${stripeWidth * 2}px
    )\`;
    fill.style.backgroundSize = \`\${backgroundSize}px \${backgroundSize}px\`;
}

// Adjust animation speed
function setStripeSpeed(speed) {
    const fill = stripedBar.querySelector('.striped-fill');
    fill.style.animationDuration = speed + 's';
}

// Change stripe angle
function setStripeAngle(angle) {
    const fill = stripedBar.querySelector('.striped-fill');
    const currentBg = fill.style.background;
    const newBg = currentBg.replace('45deg', \`\${angle}deg\`);
    fill.style.background = newBg;
}

// Set background color
function setStripeBackground(color) {
    stripedBar.style.background = color;
}`
    },

    // ====================================================================
    // TEMPLATE 46: Dual Flow Bar
    // ====================================================================
    loader46: {
        name: "Dual Flow Bar",
        category: "progress",
        html: `<div class="loader-container">
    <div class="dual-flow-bar">
        <div class="flow-left"></div>
        <div class="flow-right"></div>
    </div>
</div>`,
        css: `.dual-flow-bar {
    width: 200px;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}

.flow-left, .flow-right {
    position: absolute;
    height: 100%;
    width: 30%;
    background: #f59e0b;
    border-radius: 3px;
}

.flow-left {
    animation: flowFromLeft 2s ease-in-out infinite;
}

.flow-right {
    animation: flowFromRight 2s ease-in-out infinite;
}

@keyframes flowFromLeft {
    0% {
        left: -30%;
    }
    100% {
        left: 50%;
    }
}

@keyframes flowFromRight {
    0% {
        right: -30%;
    }
    100% {
        right: 50%;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control dual flow bar
const dualFlowBar = document.querySelector('.dual-flow-bar');

// Change flow colors
function setFlowColors(leftColor, rightColor) {
    const leftFlow = dualFlowBar.querySelector('.flow-left');
    const rightFlow = dualFlowBar.querySelector('.flow-right');
    
    leftFlow.style.background = leftColor;
    rightFlow.style.background = rightColor;
}

// Adjust flow speed
function setFlowSpeed(speed) {
    const leftFlow = dualFlowBar.querySelector('.flow-left');
    const rightFlow = dualFlowBar.querySelector('.flow-right');
    
    leftFlow.style.animationDuration = speed + 's';
    rightFlow.style.animationDuration = speed + 's';
}

// Set meeting point
function setMeetingPoint(percentage) {
    const leftFlow = dualFlowBar.querySelector('.flow-left');
    const rightFlow = dualFlowBar.querySelector('.flow-right');
    
    // Update keyframes for new meeting point
    const keyframes = \`
        @keyframes flowFromLeft {
            0% { left: -30%; }
            100% { left: \${percentage}%; }
        }
        @keyframes flowFromRight {
            0% { right: -30%; }
            100% { right: \${100 - percentage}%; }
        }
    \`;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
}

// Set flow width
function setFlowWidth(width) {
    const flows = dualFlowBar.querySelectorAll('.flow-left, .flow-right');
    flows.forEach(flow => {
        flow.style.width = width + '%';
    });
}

// Toggle sync mode
function toggleSyncMode() {
    const leftFlow = dualFlowBar.querySelector('.flow-left');
    const rightFlow = dualFlowBar.querySelector('.flow-right');
    
    if (leftFlow.style.animationDelay === '0s') {
        leftFlow.style.animationDelay = '-1s';
        rightFlow.style.animationDelay = '0s';
    } else {
        leftFlow.style.animationDelay = '0s';
        rightFlow.style.animationDelay = '-1s';
    }
}

// Set background color
function setDualBackground(color) {
    dualFlowBar.style.background = color;
}`
    },
        // ====================================================================
    // TEMPLATE 47: Progressive Skeleton Loader
    // ====================================================================
    loader47: {
        name: "Progressive Skeleton Loader",
        category: "minimal",
        html: `<div class="loader-container">
    <div class="progressive-skeleton-loader">
        <div class="skeleton-row" style="width: 70%"></div>
        <div class="skeleton-row" style="width: 85%"></div>
        <div class="skeleton-row" style="width: 60%"></div>
        <div class="skeleton-row" style="width: 90%"></div>
    </div>
</div>`,
        css: `.progressive-skeleton-loader {
    width: 240px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.08);
}

.skeleton-row {
    height: 12px;
    background: linear-gradient(90deg,
        rgba(229, 231, 235, 0.4) 25%,
        rgba(209, 213, 219, 0.6) 50%,
        rgba(229, 231, 235, 0.4) 75%);
    background-size: 200% 100%;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    opacity: 0;
    transform: translateY(4px);
    animation: skeletonFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.skeleton-row:nth-child(1) { animation-delay: 0.1s; }
.skeleton-row:nth-child(2) { animation-delay: 0.3s; }
.skeleton-row:nth-child(3) { animation-delay: 0.5s; }
.skeleton-row:nth-child(4) { animation-delay: 0.7s; }

.skeleton-row::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent);
    animation: skeletonShimmer 1.6s ease-in-out infinite;
}

@keyframes skeletonFadeIn {
    from {
        opacity: 0;
        transform: translateY(4px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes skeletonShimmer {
    0% {
        left: -100%;
    }
    100% {
        left: 100%;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Enterprise Progressive Skeleton Loader
class ProgressiveSkeletonLoader {
    constructor(container) {
        this.container = container;
        this.rows = container.querySelectorAll('.skeleton-row');
        this.progress = 0;
        this.initialize();
    }
    
    initialize() {
        // Performance optimization
        this.container.style.willChange = 'contents';
        this.container.style.contain = 'layout style paint';
        
        // Initialize rows with staggered animation
        this.rows.forEach((row, index) => {
            row.style.animationDelay = \`\${index * 0.2}s\`;
        });
    }
    
    // Simulate loading progress (0-100)
    updateProgress(percent) {
        this.progress = Math.min(100, Math.max(0, percent));
        
        // Calculate which rows should be active based on progress
        const activeRows = Math.ceil((this.progress / 100) * this.rows.length);
        
        this.rows.forEach((row, index) => {
            if (index < activeRows) {
                row.style.opacity = '1';
                row.style.transform = 'translateY(0)';
            } else {
                row.style.opacity = '0.3';
                row.style.transform = 'translateY(4px)';
            }
        });
        
        return this.progress;
    }
    
    // Complete loading with smooth transition
    complete() {
        return new Promise((resolve) => {
            // Fade out rows sequentially
            this.rows.forEach((row, index) => {
                setTimeout(() => {
                    row.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    row.style.opacity = '0';
                    row.style.transform = 'translateY(-4px)';
                }, index * 50);
            });
            
            // Fade out container
            setTimeout(() => {
                this.container.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                this.container.style.opacity = '0';
                resolve();
            }, this.rows.length * 50 + 100);
        });
    }
    
    // Reset loader
    reset() {
        this.progress = 0;
        this.rows.forEach(row => {
            row.style.transition = 'none';
            row.style.opacity = '0';
            row.style.transform = 'translateY(4px)';
        });
        
        // Re-initialize with slight delay
        setTimeout(() => this.initialize(), 50);
    }
}

// Usage example
const skeletonLoader = new ProgressiveSkeletonLoader(
    document.querySelector('.progressive-skeleton-loader')
);

// Simulate real loading progress
function simulateLoading() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        skeletonLoader.updateProgress(progress);
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => skeletonLoader.complete(), 500);
        }
    }, 200);
}

// Integrate with real loading events
function trackAssetLoading(assets) {
    let loaded = 0;
    assets.forEach(asset => {
        asset.addEventListener('load', () => {
            loaded++;
            const progress = (loaded / assets.length) * 100;
            skeletonLoader.updateProgress(progress);
            
            if (loaded === assets.length) {
                skeletonLoader.complete();
            }
        });
    });
}`
    },

    // ====================================================================
    // TEMPLATE 48: Intelligent Progress Ring
    // ====================================================================
    loader48: {
        name: "Intelligent Progress Ring",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="intelligent-progress-ring">
        <div class="progress-track"></div>
        <div class="progress-fill"></div>
        <div class="status-dot"></div>
        <div class="percentage">0%</div>
    </div>
</div>`,
        css: `.intelligent-progress-ring {
    width: 80px;
    height: 80px;
    position: relative;
}

.progress-track {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1.5px solid rgba(209, 213, 219, 0.3);
    border-radius: 50%;
}

.progress-fill {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1.5px solid transparent;
    border-top: 1.5px solid #3b82f6;
    border-right: 1.5px solid #3b82f6;
    border-radius: 50%;
    clip-path: inset(0 0 0 50%);
    transform: rotate(45deg);
    animation: progressFill 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    transition: stroke-dashoffset 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.status-dot {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #3b82f6;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg) translateY(-40px);
    animation: statusOrbit 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: 500;
    color: #4b5563;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    opacity: 0.9;
}

@keyframes progressFill {
    0% {
        transform: rotate(45deg);
        clip-path: inset(0 0 0 50%);
    }
    50% {
        transform: rotate(225deg);
        clip-path: inset(0 50% 0 0);
    }
    100% {
        transform: rotate(405deg);
        clip-path: inset(0 0 0 50%);
    }
}

@keyframes statusOrbit {
    0% {
        transform: translate(-50%, -50%) rotate(45deg) translateY(-40px);
        opacity: 0.6;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) rotate(405deg) translateY(-40px);
        opacity: 0.6;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Enterprise Progress Ring Loader
class IntelligentProgressRing {
    constructor(container) {
        this.container = container;
        this.fill = container.querySelector('.progress-fill');
        this.percentage = container.querySelector('.percentage');
        this.dot = container.querySelector('.status-dot');
        this.progress = 0;
        this.initialize();
    }
    
    initialize() {
        // Hardware acceleration
        this.container.style.willChange = 'transform, opacity';
        this.fill.style.willChange = 'transform, clip-path';
        this.dot.style.willChange = 'transform';
        
        // Initialize with 0%
        this.updatePercentage(0);
    }
    
    // Update progress percentage (0-100)
    updatePercentage(percent) {
        this.progress = Math.min(100, Math.max(0, percent));
        
        // Update percentage text with smooth transition
        this.percentage.style.transition = 'opacity 0.2s ease';
        this.percentage.style.opacity = '0.7';
        
        requestAnimationFrame(() => {
            this.percentage.textContent = \`\${Math.round(this.progress)}%\`;
            this.percentage.style.opacity = '0.9';
        });
        
        // Calculate rotation based on progress
        const rotation = (this.progress / 100) * 360;
        const clipPath = this.progress === 100 
            ? 'inset(0 0 0 0)' 
            : \`inset(0 0 0 \${50 - (this.progress / 2)}%)\`;
        
        // Apply smooth transformations
        this.fill.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        this.fill.style.transform = \`rotate(\${45 + rotation}deg)\`;
        this.fill.style.clipPath = clipPath;
        
        // Update dot position
        const dotRotation = 45 + rotation;
        const dotY = -40 * (1 - (this.progress / 100));
        this.dot.style.transform = \`translate(-50%, -50%) rotate(\${dotRotation}deg) translateY(\${dotY}px)\`;
        
        return this.progress;
    }
    
    // Complete loading with celebration animation
    complete() {
        return new Promise((resolve) => {
            // First, fill to 100%
            this.updatePercentage(100);
            
            // Celebration animation
            setTimeout(() => {
                // Pulse animation
                this.container.style.animation = 'pulse 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                this.fill.style.borderTopColor = '#10b981';
                this.fill.style.borderRightColor = '#10b981';
                this.dot.style.background = '#10b981';
                
                // Update text
                this.percentage.textContent = '✓';
                this.percentage.style.color = '#10b981';
                this.percentage.style.fontSize = '16px';
                
                // Fade out
                setTimeout(() => {
                    this.container.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    this.container.style.opacity = '0';
                    this.container.style.transform = 'scale(0.9)';
                    resolve();
                }, 600);
            }, 300);
        });
    }
    
    // Handle loading errors
    showError() {
        this.fill.style.borderTopColor = '#ef4444';
        this.fill.style.borderRightColor = '#ef4444';
        this.dot.style.background = '#ef4444';
        this.percentage.textContent = '!';
        this.percentage.style.color = '#ef4444';
    }
    
    // Reset to initial state
    reset() {
        this.progress = 0;
        this.fill.style.transition = 'none';
        this.fill.style.borderTopColor = '#3b82f6';
        this.fill.style.borderRightColor = '#3b82f6';
        this.dot.style.background = '#3b82f6';
        this.percentage.textContent = '0%';
        this.percentage.style.color = '#4b5563';
        this.percentage.style.fontSize = '14px';
        this.container.style.animation = '';
        this.container.style.opacity = '1';
        this.container.style.transform = 'scale(1)';
        
        this.initialize();
    }
}

// Real-time integration with loading events
function createProgressRing() {
    const ring = new IntelligentProgressRing(
        document.querySelector('.intelligent-progress-ring')
    );
    
    // Simulate file upload progress
    function simulateFileUpload(fileSize) {
        let uploaded = 0;
        const chunkSize = fileSize / 20;
        
        const interval = setInterval(() => {
            uploaded += chunkSize;
            const progress = (uploaded / fileSize) * 100;
            ring.updatePercentage(progress);
            
            if (uploaded >= fileSize) {
                clearInterval(interval);
                setTimeout(() => ring.complete(), 500);
            }
        }, 200);
    }
    
    // API request progress
    function trackApiRequest(request) {
        request.onprogress = (event) => {
            if (event.lengthComputable) {
                const progress = (event.loaded / event.total) * 100;
                ring.updatePercentage(progress);
            }
        };
        
        request.onload = () => {
            ring.complete();
        };
        
        request.onerror = () => {
            ring.showError();
        };
    }
    
    return {
        ring,
        simulateFileUpload,
        trackApiRequest
    };
}`
    },

    // ====================================================================
    // TEMPLATE 49: Phased Content Reveal
    // ====================================================================
    loader49: {
        name: "Phased Content Reveal",
        category: "animated",
        html: `<div class="loader-container">
    <div class="phased-content-reveal">
        <div class="phase phase-1 active"></div>
        <div class="phase phase-2"></div>
        <div class="phase phase-3"></div>
        <div class="phase-label">Initializing</div>
    </div>
</div>`,
        css: `.phased-content-reveal {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.phase {
    width: 60px;
    height: 4px;
    background: rgba(229, 231, 235, 0.8);
    border-radius: 2px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: left center;
}

.phase.active {
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    transform: scaleX(1.2);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.2);
}

.phase-2.active {
    transition-delay: 0.1s;
}

.phase-3.active {
    transition-delay: 0.2s;
}

.phase-label {
    font-size: 13px;
    font-weight: 500;
    color: #6b7280;
    letter-spacing: 0.02em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    opacity: 0.9;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.phase-label.active {
    color: #3b82f6;
    transform: translateY(-1px);
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Enterprise Phased Content Loader
class PhasedContentLoader {
    constructor(container) {
        this.container = container;
        this.phases = container.querySelectorAll('.phase');
        this.label = container.querySelector('.phase-label');
        this.currentPhase = 0;
        this.totalPhases = this.phases.length;
        this.initialize();
    }
    
    initialize() {
        // Set up phase transitions
        this.phases.forEach((phase, index) => {
            phase.style.transition = \`all 0.4s cubic-bezier(0.4, 0, 0.2, 1) \${index * 0.1}s\`;
        });
        
        // Start with first phase
        this.setPhase(0);
    }
    
    // Set active phase (0-indexed)
    setPhase(phaseIndex) {
        if (phaseIndex < 0 || phaseIndex >= this.totalPhases) return;
        
        // Update all phases
        this.phases.forEach((phase, index) => {
            if (index === phaseIndex) {
                phase.classList.add('active');
            } else if (index < phaseIndex) {
                phase.classList.add('active');
                phase.style.opacity = '0.6';
            } else {
                phase.classList.remove('active');
                phase.style.opacity = '1';
            }
        });
        
        // Update label based on phase
        const labels = [
            'Initializing',
            'Loading assets',
            'Processing data',
            'Finalizing'
        ];
        
        if (labels[phaseIndex]) {
            this.label.textContent = labels[phaseIndex];
            this.label.classList.add('active');
            
            setTimeout(() => {
                this.label.classList.remove('active');
            }, 300);
        }
        
        this.currentPhase = phaseIndex;
    }
    
    // Move to next phase
    nextPhase() {
        if (this.currentPhase < this.totalPhases - 1) {
            this.setPhase(this.currentPhase + 1);
            return true;
        }
        return false;
    }
    
    // Complete all phases with smooth transition
    complete() {
        return new Promise((resolve) => {
            // First, activate all phases
            for (let i = 0; i < this.totalPhases; i++) {
                setTimeout(() => {
                    this.setPhase(i);
                }, i * 200);
            }
            
            // Wait for all phases to complete
            setTimeout(() => {
                // Change all phases to success color
                this.phases.forEach(phase => {
                    phase.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
                    phase.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.2)';
                });
                
                // Update label
                this.label.textContent = 'Ready';
                this.label.style.color = '#10b981';
                this.label.classList.add('active');
                
                // Fade out
                setTimeout(() => {
                    this.container.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    this.container.style.opacity = '0';
                    this.container.style.transform = 'translateY(-10px)';
                    resolve();
                }, 600);
            }, this.totalPhases * 200);
        });
    }
    
    // Handle specific loading tasks
    async loadWithTasks(tasks) {
        const taskPromises = tasks.map(async (task, index) => {
            this.setPhase(index);
            
            try {
                await task();
                return true;
            } catch (error) {
                console.error('Task failed:', error);
                return false;
            }
        });
        
        const results = await Promise.all(taskPromises);
        const allSuccess = results.every(result => result);
        
        if (allSuccess) {
            await this.complete();
        } else {
            this.showError();
        }
        
        return allSuccess;
    }
    
    // Show error state
    showError() {
        this.phases.forEach(phase => {
            phase.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
            phase.style.boxShadow = '0 2px 8px rgba(239, 68, 68, 0.2)';
        });
        
        this.label.textContent = 'Error loading';
        this.label.style.color = '#ef4444';
        this.label.classList.add('active');
    }
    
    // Reset loader
    reset() {
        this.currentPhase = 0;
        this.phases.forEach(phase => {
            phase.classList.remove('active');
            phase.style.background = '';
            phase.style.boxShadow = '';
            phase.style.opacity = '1';
        });
        
        this.label.textContent = 'Initializing';
        this.label.style.color = '#6b7280';
        this.label.classList.remove('active');
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
    }
}

// Real-world usage with complex loading scenarios
function createPhasedLoader() {
    const loader = new PhasedContentLoader(
        document.querySelector('.phased-content-reveal')
    );
    
    // Example: Load dashboard with multiple dependencies
    async function loadDashboard() {
        const tasks = [
            async () => {
                // Phase 1: Load user data
                const userData = await fetch('/api/user');
                return userData.json();
            },
            async () => {
                // Phase 2: Load dashboard config
                const config = await fetch('/api/dashboard/config');
                return config.json();
            },
            async () => {
                // Phase 3: Load analytics data
                const analytics = await fetch('/api/analytics');
                return analytics.json();
            },
            async () => {
                // Phase 4: Initialize components
                return new Promise(resolve => {
                    setTimeout(() => {
                        // Simulate component initialization
                        resolve();
                    }, 500);
                });
            }
        ];
        
        return await loader.loadWithTasks(tasks);
    }
    
    return {
        loader,
        loadDashboard
    };
}`
    },

    // ====================================================================
    // TEMPLATE 50: Minimal Progress Wave
    // ====================================================================
    loader50: {
        name: "Minimal Progress Wave",
        category: "progress",
        html: `<div class="loader-container">
    <div class="minimal-progress-wave">
        <div class="wave-container">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="progress-text">Loading content...</div>
    </div>
</div>`,
        css: `.minimal-progress-wave {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.wave-container {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 30px;
}

.wave {
    width: 4px;
    background: linear-gradient(to top, #3b82f6, #60a5fa);
    border-radius: 2px;
    animation: wavePulse 1.6s ease-in-out infinite;
    transform-origin: bottom center;
}

.wave:nth-child(1) {
    height: 10px;
    animation-delay: 0s;
}

.wave:nth-child(2) {
    height: 20px;
    animation-delay: 0.2s;
}

.wave:nth-child(3) {
    height: 15px;
    animation-delay: 0.4s;
}

.progress-text {
    font-size: 13px;
    font-weight: 500;
    color: #6b7280;
    letter-spacing: 0.02em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    opacity: 0.9;
    animation: textFade 3s ease-in-out infinite;
}

@keyframes wavePulse {
    0%, 100% {
        transform: scaleY(1);
        opacity: 0.6;
    }
    50% {
        transform: scaleY(0.7);
        opacity: 1;
    }
}

@keyframes textFade {
    0%, 100% {
        opacity: 0.7;
    }
    50% {
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Enterprise Minimal Wave Loader
class MinimalWaveLoader {
    constructor(container) {
        this.container = container;
        this.waves = container.querySelectorAll('.wave');
        this.text = container.querySelector('.progress-text');
        this.isActive = false;
        this.initialize();
    }
    
    initialize() {
        // Optimize for performance
        this.container.style.willChange = 'opacity';
        this.waves.forEach(wave => {
            wave.style.willChange = 'transform, opacity';
        });
        
        // Set initial states
        this.setText('Loading...');
    }
    
    // Update loading text
    setText(message) {
        if (this.text) {
            this.text.textContent = message;
            this.text.style.opacity = '0.7';
            
            requestAnimationFrame(() => {
                this.text.style.transition = 'opacity 0.2s ease';
                this.text.style.opacity = '0.9';
            });
        }
    }
    
    // Start loading animation
    start() {
        this.isActive = true;
        this.container.style.opacity = '1';
        this.container.style.display = 'flex';
        
        // Reset wave animations
        this.waves.forEach((wave, index) => {
            wave.style.animation = \`wavePulse 1.6s ease-in-out infinite \${index * 0.2}s\`;
            wave.style.opacity = '0.6';
        });
        
        // Update text with loading indicator
        let dots = 0;
        this.textInterval = setInterval(() => {
            dots = (dots + 1) % 4;
            this.setText(\`Loading\${'.'.repeat(dots)}\`);
        }, 500);
    }
    
    // Update progress with custom messages
    updateProgress(progress, message) {
        if (!this.isActive) this.start();
        
        if (message) {
            this.setText(message);
        }
        
        // Adjust wave intensity based on progress
        const intensity = 0.6 + (progress / 100) * 0.4;
        this.waves.forEach((wave, index) => {
            wave.style.opacity = intensity - (index * 0.1);
            wave.style.animationDuration = \`\${1.6 - (progress / 100) * 0.6}s\`;
        });
        
        return progress;
    }
    
    // Complete loading with success animation
    complete(message = 'Complete') {
        return new Promise((resolve) => {
            if (!this.isActive) return resolve();
            
            clearInterval(this.textInterval);
            
            // Success animation
            this.waves.forEach((wave, index) => {
                setTimeout(() => {
                    wave.style.animation = 'none';
                    wave.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    wave.style.background = 'linear-gradient(to top, #10b981, #34d399)';
                    wave.style.transform = 'scaleY(1.2)';
                    wave.style.opacity = '1';
                }, index * 100);
            });
            
            // Update text
            this.setText(message);
            this.text.style.color = '#10b981';
            
            // Fade out
            setTimeout(() => {
                this.container.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                this.container.style.opacity = '0';
                this.container.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    this.reset();
                    resolve();
                }, 400);
            }, 600);
        });
    }
    
    // Show error state
    showError(message = 'Failed to load') {
        clearInterval(this.textInterval);
        
        this.waves.forEach(wave => {
            wave.style.animation = 'none';
            wave.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            wave.style.background = 'linear-gradient(to top, #ef4444, #f87171)';
            wave.style.opacity = '0.8';
        });
        
        this.setText(message);
        this.text.style.color = '#ef4444';
    }
    
    // Reset to initial state
    reset() {
        this.isActive = false;
        clearInterval(this.textInterval);
        
        this.waves.forEach(wave => {
            wave.style.animation = '';
            wave.style.transition = '';
            wave.style.background = 'linear-gradient(to top, #3b82f6, #60a5fa)';
            wave.style.transform = 'scaleY(1)';
            wave.style.opacity = '0.6';
        });
        
        this.setText('Loading...');
        this.text.style.color = '#6b7280';
        this.container.style.opacity = '1';
        this.container.style.transform = 'scale(1)';
        this.container.style.display = 'flex';
    }
    
    // Handle real-time data streaming
    handleDataStream(stream, onChunk, onComplete) {
        this.start();
        this.setText('Receiving data...');
        
        let receivedBytes = 0;
        let totalBytes = 0;
        
        stream.on('progress', (progress) => {
            this.updateProgress(progress.percent, \`Receiving data: \${Math.round(progress.percent)}%\`);
        });
        
        stream.on('data', (chunk) => {
            receivedBytes += chunk.length;
            if (totalBytes > 0) {
                const percent = (receivedBytes / totalBytes) * 100;
                this.updateProgress(percent);
            }
            onChunk(chunk);
        });
        
        stream.on('complete', () => {
            this.complete('Data received');
            onComplete();
        });
        
        stream.on('error', (error) => {
            this.showError('Data stream error');
            console.error('Stream error:', error);
        });
    }
}

// Create and export loader instance
const waveLoader = new MinimalWaveLoader(
    document.querySelector('.minimal-progress-wave')
);

// Example: Load image with progress
function loadImageWithProgress(imageUrl) {
    waveLoader.start();
    waveLoader.setText('Loading image...');
    
    return new Promise((resolve, reject) => {
        const img = new Image();
        let loaded = false;
        
        img.onloadstart = () => {
            waveLoader.setText('Starting download...');
        };
        
        img.onprogress = (event) => {
            if (event.lengthComputable) {
                const percent = (event.loaded / event.total) * 100;
                waveLoader.updateProgress(percent, \`Downloading: \${Math.round(percent)}%\`);
            }
        };
        
        img.onload = () => {
            loaded = true;
            waveLoader.complete('Image loaded').then(() => {
                resolve(img);
            });
        };
        
        img.onerror = () => {
            waveLoader.showError('Failed to load image');
            reject(new Error('Image load failed'));
        };
        
        img.src = imageUrl;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 51: Geometric Sequence Loader
    // ====================================================================
    loader51: {
        name: "Geometric Sequence Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="geometric-sequence-loader">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="status-indicator">Processing</div>
    </div>
</div>`,
        css: `.geometric-sequence-loader {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 24px;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.shape {
    width: 8px;
    height: 8px;
    background: #3b82f6;
    border-radius: 50%;
    opacity: 0.3;
    transform: scale(0.8);
    animation: shapeSequence 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.shape:nth-child(1) {
    animation-delay: 0s;
}

.shape:nth-child(2) {
    animation-delay: 0.8s;
}

.shape:nth-child(3) {
    animation-delay: 1.6s;
}

.status-indicator {
    font-size: 12px;
    font-weight: 500;
    color: #6b7280;
    letter-spacing: 0.03em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    opacity: 0.8;
    text-transform: uppercase;
}

@keyframes shapeSequence {
    0%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
    }
    20%, 80% {
        opacity: 1;
        transform: scale(1.2);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Enterprise Geometric Sequence Loader
class GeometricSequenceLoader {
    constructor(container) {
        this.container = container;
        this.shapes = container.querySelectorAll('.shape');
        this.status = container.querySelector('.status-indicator');
        this.sequence = 0;
        this.totalSequences = this.shapes.length;
        this.isActive = false;
        this.initialize();
    }
    
    initialize() {
        // Performance optimizations
        this.container.style.willChange = 'opacity';
        this.shapes.forEach(shape => {
            shape.style.willChange = 'transform, opacity';
        });
        
        // Set initial status
        this.setStatus('Ready');
    }
    
    // Set current status message
    setStatus(message) {
        if (this.status) {
            this.status.textContent = message.toUpperCase();
            this.status.style.opacity = '0.6';
            
            requestAnimationFrame(() => {
                this.status.style.transition = 'all 0.2s ease';
                this.status.style.opacity = '0.9';
            });
        }
    }
    
    // Start loading sequence
    start(message = 'Processing') {
        this.isActive = true;
        this.sequence = 0;
        this.setStatus(message);
        
        // Reset shapes
        this.shapes.forEach((shape, index) => {
            shape.style.animation = \`shapeSequence 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite \${index * 0.8}s\`;
            shape.style.opacity = '0.3';
            shape.style.transform = 'scale(0.8)';
            shape.style.background = '#3b82f6';
        });
        
        // Start sequence tracking
        this.sequenceInterval = setInterval(() => {
            this.sequence = (this.sequence + 1) % (this.totalSequences * 2);
            this.updateSequence();
        }, 400);
    }
    
    // Update current sequence
    updateSequence() {
        const activeIndex = this.sequence % this.totalSequences;
        
        this.shapes.forEach((shape, index) => {
            if (index === activeIndex) {
                shape.style.opacity = '1';
                shape.style.transform = 'scale(1.2)';
            } else if (index < activeIndex) {
                shape.style.opacity = '0.6';
                shape.style.transform = 'scale(1)';
            } else {
                shape.style.opacity = '0.3';
                shape.style.transform = 'scale(0.8)';
            }
        });
        
        // Update status based on sequence
        const statuses = [
            'Processing',
            'Analyzing',
            'Validating',
            'Finalizing'
        ];
        
        const statusIndex = Math.floor(this.sequence / 2) % statuses.length;
        this.setStatus(statuses[statusIndex]);
    }
    
    // Complete loading with success
    complete(message = 'Complete') {
        return new Promise((resolve) => {
            if (!this.isActive) return resolve();
            
            clearInterval(this.sequenceInterval);
            
            // Success animation sequence
            this.shapes.forEach((shape, index) => {
                setTimeout(() => {
                    shape.style.animation = 'none';
                    shape.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    shape.style.background = '#10b981';
                    shape.style.opacity = '1';
                    shape.style.transform = 'scale(1.5)';
                    
                    setTimeout(() => {
                        shape.style.transform = 'scale(1)';
                    }, 150);
                }, index * 100);
            });
            
            // Update status
            this.setStatus(message);
            this.status.style.color = '#10b981';
            
            // Fade out
            setTimeout(() => {
                this.container.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                this.container.style.opacity = '0';
                this.container.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    this.reset();
                    resolve();
                }, 400);
            }, 600);
        });
    }
    
    // Show error in sequence
    showError(message = 'Error') {
        clearInterval(this.sequenceInterval);
        
        this.shapes.forEach((shape, index) => {
            setTimeout(() => {
                shape.style.animation = 'none';
                shape.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                shape.style.background = '#ef4444';
                shape.style.opacity = '0.8';
                shape.style.transform = 'scale(1.2)';
            }, index * 50);
        });
        
        this.setStatus(message);
        this.status.style.color = '#ef4444';
    }
    
    // Reset loader
    reset() {
        this.isActive = false;
        this.sequence = 0;
        clearInterval(this.sequenceInterval);
        
        this.shapes.forEach(shape => {
            shape.style.animation = '';
            shape.style.transition = '';
            shape.style.background = '#3b82f6';
            shape.style.opacity = '0.3';
            shape.style.transform = 'scale(0.8)';
        });
        
        this.setStatus('Ready');
        this.status.style.color = '#6b7280';
        this.container.style.opacity = '1';
        this.container.style.transform = 'scale(1)';
    }
    
    // Handle complex multi-step operations
    async executeOperations(operations) {
        this.start('Starting operations');
        
        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i];
            
            try {
                this.setStatus(\`Step \${i + 1} of \${operations.length}\`);
                await operation();
                
                // Update sequence to show progress
                const progress = ((i + 1) / operations.length) * 100;
                this.updateProgress(progress);
                
            } catch (error) {
                this.showError(\`Step \${i + 1} failed\`);
                throw error;
            }
        }
        
        await this.complete('All operations complete');
        return true;
    }
    
    // Update progress based on percentage
    updateProgress(percent) {
        const activeShapes = Math.ceil((percent / 100) * this.totalSequences);
        
        this.shapes.forEach((shape, index) => {
            if (index < activeShapes) {
                shape.style.opacity = '1';
                shape.style.transform = 'scale(1.2)';
            } else {
                shape.style.opacity = '0.3';
                shape.style.transform = 'scale(0.8)';
            }
        });
        
        return percent;
    }
}

// Create loader instance
const geometricLoader = new GeometricSequenceLoader(
    document.querySelector('.geometric-sequence-loader')
);

// Integration with complex workflows
function setupWorkflowLoader() {
    // Example: Data processing workflow
    async function processDataWorkflow(data) {
        const operations = [
            async () => {
                geometricLoader.setStatus('Validating data');
                await validateData(data);
            },
            async () => {
                geometricLoader.setStatus('Transforming');
                await transformData(data);
            },
            async () => {
                geometricLoader.setStatus('Analyzing');
                await analyzeData(data);
            },
            async () => {
                geometricLoader.setStatus('Generating report');
                await generateReport(data);
            }
        ];
        
        return await geometricLoader.executeOperations(operations);
    }
    
    // Example: API call with retry logic
    async function fetchWithRetry(url, options, maxRetries = 3) {
        geometricLoader.start('Connecting to server');
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                geometricLoader.setStatus(\`Attempt \${attempt} of \${maxRetries}\`);
                
                const response = await fetch(url, options);
                
                if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
                
                geometricLoader.setStatus('Processing response');
                const data = await response.json();
                
                await geometricLoader.complete('Data loaded');
                return data;
                
            } catch (error) {
                geometricLoader.setStatus(\`Retry \${attempt} failed\`);
                
                if (attempt === maxRetries) {
                    geometricLoader.showError('Connection failed');
                    throw error;
                }
                
                // Exponential backoff
                await new Promise(resolve => 
                    setTimeout(resolve, Math.pow(2, attempt) * 1000)
                );
            }
        }
    }
    
    return {
        geometricLoader,
        processDataWorkflow,
        fetchWithRetry
    };
}

// Real-time progress tracking example
function trackRealTimeProgress(progressEmitter) {
    geometricLoader.start('Tracking progress');
    
    progressEmitter.on('progress', (progress) => {
        geometricLoader.updateProgress(progress.percent);
        geometricLoader.setStatus(progress.message);
    });
    
    progressEmitter.on('complete', () => {
        geometricLoader.complete('Process complete');
    });
    
    progressEmitter.on('error', (error) => {
        geometricLoader.showError('Process failed');
        console.error('Progress error:', error);
    });
}`
    },
        // ====================================================================
    // TEMPLATE 52: Real-time File Upload Loader
    // ====================================================================
    loader52: {
        name: "Real-time File Upload Loader",
        category: "progress",
        html: `<div class="loader-container">
    <div class="file-upload-loader">
        <div class="upload-progress">
            <div class="progress-bar"></div>
        </div>
        <div class="file-info">
            <div class="file-name">document.pdf</div>
            <div class="file-size">2.5 MB</div>
        </div>
        <div class="upload-stats">
            <div class="speed">1.2 MB/s</div>
            <div class="time">2s remaining</div>
        </div>
    </div>
</div>`,
        css: `.file-upload-loader {
    width: 280px;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
}

.upload-progress {
    width: 100%;
    height: 8px;
    background: #f3f4f6;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 16px;
}

.progress-bar {
    height: 100%;
    width: 65%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 4px;
    transition: width 0.3s ease;
    position: relative;
    overflow: hidden;
}

.progress-bar::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent);
    animation: uploadShimmer 1.5s ease-in-out infinite;
}

.file-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f3f4f6;
}

.file-name {
    font-size: 14px;
    font-weight: 500;
    color: #1f2937;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.file-size {
    font-size: 13px;
    color: #6b7280;
    font-weight: 500;
}

.upload-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.speed, .time {
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    background: #f9fafb;
    color: #374151;
}

@keyframes uploadShimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// File Upload Loader with Real-time Progress
class FileUploadLoader {
    constructor(container) {
        this.container = container;
        this.progressBar = container.querySelector('.progress-bar');
        this.fileName = container.querySelector('.file-name');
        this.fileSize = container.querySelector('.file-size');
        this.speed = container.querySelector('.speed');
        this.time = container.querySelector('.time');
        this.startTime = null;
        this.loadedBytes = 0;
        this.totalBytes = 0;
        this.uploadSpeed = 0;
        this.speedHistory = [];
        this.initialize();
    }
    
    initialize() {
        // Set initial state
        this.updateProgress(0);
        this.updateSpeed(0);
        this.updateTimeRemaining(0);
    }
    
    // Start upload with file
    startUpload(file) {
        this.startTime = Date.now();
        this.totalBytes = file.size;
        this.loadedBytes = 0;
        
        // Update file info
        this.fileName.textContent = file.name;
        this.fileSize.textContent = this.formatFileSize(file.size);
        
        // Reset progress
        this.updateProgress(0);
        this.speedHistory = [];
        
        // Start animation
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
        
        return this;
    }
    
    // Update upload progress
    updateUploadProgress(loaded, total) {
        this.loadedBytes = loaded;
        this.totalBytes = total;
        
        const percent = (loaded / total) * 100;
        this.updateProgress(percent);
        
        // Calculate speed
        const elapsedTime = (Date.now() - this.startTime) / 1000; // seconds
        const speed = loaded / elapsedTime; // bytes per second
        
        this.speedHistory.push(speed);
        if (this.speedHistory.length > 5) {
            this.speedHistory.shift();
        }
        
        // Average speed over last 5 updates
        const avgSpeed = this.speedHistory.reduce((a, b) => a + b, 0) / this.speedHistory.length;
        this.updateSpeed(avgSpeed);
        
        // Calculate time remaining
        const remainingBytes = total - loaded;
        const timeRemaining = remainingBytes / avgSpeed;
        this.updateTimeRemaining(timeRemaining);
        
        return percent;
    }
    
    // Update progress bar
    updateProgress(percent) {
        this.progressBar.style.width = percent + '%';
        
        // Change color based on progress
        if (percent < 30) {
            this.progressBar.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
        } else if (percent < 70) {
            this.progressBar.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
        } else if (percent < 100) {
            this.progressBar.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
        } else {
            this.progressBar.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
        }
        
        return percent;
    }
    
    // Update upload speed display
    updateSpeed(speedBytes) {
        const speedMB = speedBytes / (1024 * 1024);
        this.speed.textContent = speedMB > 0.1 
            ? \`\${speedMB.toFixed(1)} MB/s\`
            : \`\${(speedBytes / 1024).toFixed(1)} KB/s\`;
    }
    
    // Update time remaining
    updateTimeRemaining(seconds) {
        if (seconds <= 0 || !isFinite(seconds)) {
            this.time.textContent = 'Finishing up...';
            return;
        }
        
        if (seconds < 60) {
            this.time.textContent = \`\${Math.ceil(seconds)}s remaining\`;
        } else if (seconds < 3600) {
            const minutes = Math.ceil(seconds / 60);
            this.time.textContent = \`\${minutes}m remaining\`;
        } else {
            const hours = (seconds / 3600).toFixed(1);
            this.time.textContent = \`\${hours}h remaining\`;
        }
    }
    
    // Format file size
    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
        return (bytes / (1024 * 1024 * 1024)).toFixed(1) + ' GB';
    }
    
    // Complete upload
    complete() {
        return new Promise((resolve) => {
            // Show completion state
            this.updateProgress(100);
            this.speed.textContent = 'Complete';
            this.time.textContent = 'Upload finished';
            
            // Change to success color
            this.progressBar.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
            this.progressBar.style.animation = 'none';
            
            // Add checkmark animation
            const checkmark = document.createElement('div');
            checkmark.style.cssText = \`
                position: absolute;
                right: 10px;
                top: 10px;
                width: 20px;
                height: 20px;
                background: #10b981;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 12px;
                animation: scaleIn 0.3s ease;
            \`;
            checkmark.textContent = '✓';
            
            this.container.appendChild(checkmark);
            
            // Fade out after delay
            setTimeout(() => {
                this.container.style.transition = 'all 0.3s ease';
                this.container.style.opacity = '0';
                this.container.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    this.reset();
                    checkmark.remove();
                    resolve();
                }, 300);
            }, 1000);
        });
    }
    
    // Show upload error
    showError(message = 'Upload failed') {
        this.progressBar.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
        this.progressBar.style.animation = 'none';
        this.speed.textContent = 'Error';
        this.time.textContent = message;
        this.time.style.color = '#ef4444';
    }
    
    // Reset loader
    reset() {
        this.progressBar.style.width = '0%';
        this.progressBar.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
        this.progressBar.style.animation = 'uploadShimmer 1.5s ease-in-out infinite';
        this.fileName.textContent = 'document.pdf';
        this.fileSize.textContent = '2.5 MB';
        this.speed.textContent = '1.2 MB/s';
        this.time.textContent = '2s remaining';
        this.time.style.color = '';
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
    }
    
    // Simulate file upload (for demo)
    simulateUpload(fileSizeMB = 10) {
        const totalBytes = fileSizeMB * 1024 * 1024;
        const file = {
            name: 'document_' + Date.now() + '.pdf',
            size: totalBytes
        };
        
        this.startUpload(file);
        
        let loaded = 0;
        const chunkSize = totalBytes / 100; // 100 updates
        
        const interval = setInterval(() => {
            loaded += chunkSize;
            const progress = this.updateUploadProgress(loaded, totalBytes);
            
            if (loaded >= totalBytes) {
                clearInterval(interval);
                setTimeout(() => this.complete(), 500);
            }
        }, 100);
    }
    
    // Real file upload with XMLHttpRequest
    uploadFile(file, uploadUrl, options = {}) {
        return new Promise((resolve, reject) => {
            this.startUpload(file);
            
            const xhr = new XMLHttpRequest();
            const formData = new FormData();
            formData.append('file', file);
            
            // Add additional form data if provided
            if (options.formData) {
                Object.entries(options.formData).forEach(([key, value]) => {
                    formData.append(key, value);
                });
            }
            
            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    this.updateUploadProgress(event.loaded, event.total);
                }
            });
            
            xhr.addEventListener('load', () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    this.complete().then(() => {
                        resolve(JSON.parse(xhr.responseText));
                    });
                } else {
                    this.showError(\`Upload failed: \${xhr.status}\`);
                    reject(new Error(\`HTTP \${xhr.status}\`));
                }
            });
            
            xhr.addEventListener('error', () => {
                this.showError('Network error');
                reject(new Error('Network error'));
            });
            
            xhr.open('POST', uploadUrl);
            
            // Set headers if provided
            if (options.headers) {
                Object.entries(options.headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                });
            }
            
            xhr.send(formData);
        });
    }
}

// Create and export loader instance
const uploadLoader = new FileUploadLoader(
    document.querySelector('.file-upload-loader')
);

// Usage examples
window.fileUploadLoader = {
    // Demo simulation
    demoUpload: () => uploadLoader.simulateUpload(5),
    
    // Real file upload
    uploadFile: (file, url, options) => uploadLoader.uploadFile(file, url, options),
    
    // Direct control
    startUpload: (file) => uploadLoader.startUpload(file),
    updateProgress: (loaded, total) => uploadLoader.updateUploadProgress(loaded, total),
    complete: () => uploadLoader.complete(),
    showError: (message) => uploadLoader.showError(message)
};`
    },

    // ====================================================================
    // TEMPLATE 53: API Request Loader
    // ====================================================================
    loader53: {
        name: "API Request Loader",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="api-request-loader">
        <div class="request-status">
            <div class="spinner"></div>
            <div class="status-text">Sending request...</div>
        </div>
        <div class="request-details">
            <div class="endpoint">POST /api/data</div>
            <div class="status-code">Status: 200</div>
        </div>
    </div>
</div>`,
        css: `.api-request-loader {
    width: 240px;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
}

.request-status {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.spinner {
    width: 24px;
    height: 24px;
    border: 3px solid #e5e7eb;
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: apiSpin 1s linear infinite;
}

.status-text {
    font-size: 14px;
    font-weight: 500;
    color: #1f2937;
    animation: textPulse 2s ease-in-out infinite;
}

.request-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    border-top: 1px solid #f3f4f6;
}

.endpoint {
    font-size: 12px;
    font-family: 'Monaco', 'Consolas', monospace;
    color: #6b7280;
    background: #f9fafb;
    padding: 4px 8px;
    border-radius: 4px;
}

.status-code {
    font-size: 12px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 4px;
    background: #d1fae5;
    color: #065f46;
}

@keyframes apiSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes textPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// API Request Loader with Status Tracking
class ApiRequestLoader {
    constructor(container) {
        this.container = container;
        this.spinner = container.querySelector('.spinner');
        this.statusText = container.querySelector('.status-text');
        this.endpoint = container.querySelector('.endpoint');
        this.statusCode = container.querySelector('.status-code');
        this.requestStartTime = null;
        this.requestDuration = 0;
        this.currentRequest = null;
        this.initialize();
    }
    
    initialize() {
        this.reset();
    }
    
    // Start API request
    startRequest(method, endpoint, data = null) {
        this.requestStartTime = Date.now();
        this.endpoint.textContent = \`\${method.toUpperCase()} \${endpoint}\`;
        this.statusText.textContent = 'Sending request...';
        this.statusCode.textContent = 'Status: --';
        this.statusCode.style.background = '#f9fafb';
        this.statusCode.style.color = '#6b7280';
        
        // Show loader
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
        
        // Start spinner
        this.spinner.style.display = 'block';
        
        return this;
    }
    
    // Update request status
    updateStatus(status, message = null) {
        const statusMessages = {
            'sending': 'Sending request...',
            'receiving': 'Receiving response...',
            'processing': 'Processing data...',
            'parsing': 'Parsing JSON...',
            'complete': 'Request complete'
        };
        
        this.statusText.textContent = message || statusMessages[status] || status;
        
        // Update spinner color based on status
        if (status === 'complete') {
            this.spinner.style.borderTopColor = '#10b981';
        } else if (status === 'error') {
            this.spinner.style.borderTopColor = '#ef4444';
        } else {
            this.spinner.style.borderTopColor = '#3b82f6';
        }
    }
    
    // Update HTTP status code
    updateStatusCode(code) {
        this.statusCode.textContent = \`Status: \${code}\`;
        
        // Color code based on HTTP status
        if (code >= 200 && code < 300) {
            this.statusCode.style.background = '#d1fae5';
            this.statusCode.style.color = '#065f46';
        } else if (code >= 300 && code < 400) {
            this.statusCode.style.background = '#fef3c7';
            this.statusCode.style.color = '#92400e';
        } else if (code >= 400 && code < 500) {
            this.statusCode.style.background = '#fee2e2';
            this.statusCode.style.color = '#991b1b';
        } else if (code >= 500) {
            this.statusCode.style.background = '#f3f4f6';
            this.statusCode.style.color = '#6b7280';
        }
    }
    
    // Complete request successfully
    complete(responseTime = null) {
        if (!responseTime && this.requestStartTime) {
            responseTime = Date.now() - this.requestStartTime;
        }
        
        this.updateStatus('complete');
        this.updateStatusCode(200);
        
        return new Promise((resolve) => {
            // Stop spinner
            setTimeout(() => {
                this.spinner.style.display = 'none';
                
                // Show success checkmark
                const checkmark = document.createElement('div');
                checkmark.style.cssText = \`
                    width: 24px;
                    height: 24px;
                    background: #10b981;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 14px;
                    animation: scaleIn 0.3s ease;
                \`;
                checkmark.textContent = '✓';
                
                this.spinner.parentNode.replaceChild(checkmark, this.spinner);
                this.spinner = checkmark;
                
                // Update text with response time
                if (responseTime) {
                    this.statusText.textContent = \`Completed in \${responseTime}ms\`;
                }
                
                // Fade out after delay
                setTimeout(() => {
                    this.container.style.transition = 'all 0.3s ease';
                    this.container.style.opacity = '0';
                    this.container.style.transform = 'translateY(-10px)';
                    
                    setTimeout(() => {
                        this.reset();
                        resolve();
                    }, 300);
                }, 1500);
            }, 500);
        });
    }
    
    // Show request error
    showError(statusCode, message = 'Request failed') {
        this.updateStatus('error');
        this.updateStatusCode(statusCode);
        this.statusText.textContent = message;
        
        // Change spinner to error symbol
        setTimeout(() => {
            this.spinner.style.display = 'none';
            
            const errorSymbol = document.createElement('div');
            errorSymbol.style.cssText = \`
                width: 24px;
                height: 24px;
                background: #ef4444;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 14px;
                animation: scaleIn 0.3s ease;
            \`;
            errorSymbol.textContent = '!';
            
            this.spinner.parentNode.replaceChild(errorSymbol, this.spinner);
            this.spinner = errorSymbol;
        }, 500);
    }
    
    // Reset loader
    reset() {
        // Remove any custom spinner
        if (this.spinner && !this.spinner.classList.contains('spinner')) {
            const newSpinner = document.createElement('div');
            newSpinner.className = 'spinner';
            this.spinner.parentNode.replaceChild(newSpinner, this.spinner);
            this.spinner = newSpinner;
        }
        
        // Reset all fields
        this.spinner.style.display = 'block';
        this.spinner.style.borderTopColor = '#3b82f6';
        this.statusText.textContent = 'Sending request...';
        this.endpoint.textContent = 'POST /api/data';
        this.statusCode.textContent = 'Status: 200';
        this.statusCode.style.background = '#d1fae5';
        this.statusCode.style.color = '#065f46';
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
    }
    
    // Make API request with automatic tracking
    makeRequest(url, options = {}) {
        const method = options.method || 'GET';
        const headers = options.headers || { 'Content-Type': 'application/json' };
        const body = options.body ? JSON.stringify(options.body) : null;
        
        this.startRequest(method, url);
        
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            
            fetch(url, {
                method,
                headers,
                body,
                ...options
            })
            .then(async (response) => {
                this.updateStatusCode(response.status);
                
                // Track loading progress for large responses
                if (response.body) {
                    const reader = response.body.getReader();
                    let receivedLength = 0;
                    
                    while(true) {
                        const {done, value} = await reader.read();
                        
                        if (done) break;
                        
                        receivedLength += value.length;
                        this.updateStatus('receiving', \`Receiving data: \${this.formatBytes(receivedLength)}\`);
                    }
                }
                
                if (!response.ok) {
                    throw new Error(\`HTTP \${response.status}\`);
                }
                
                const data = await response.json();
                const responseTime = Date.now() - startTime;
                
                this.complete(responseTime).then(() => {
                    resolve(data);
                });
            })
            .catch((error) => {
                const responseTime = Date.now() - startTime;
                this.showError(0, error.message);
                
                setTimeout(() => {
                    reject(error);
                }, 1000);
            });
        });
    }
    
    // Format bytes for display
    formatBytes(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }
    
    // Monitor multiple concurrent requests
    monitorRequests(requests) {
        const total = requests.length;
        let completed = 0;
        let successful = 0;
        
        this.startRequest('BATCH', 'Multiple endpoints');
        this.statusText.textContent = \`Processing \${total} requests...\`;
        
        const updateProgress = () => {
            completed++;
            const percent = (completed / total) * 100;
            this.statusText.textContent = \`\${completed} of \${total} requests completed\`;
            
            if (completed === total) {
                if (successful === total) {
                    this.complete();
                } else {
                    this.showError(0, \`\${total - successful} requests failed\`);
                }
            }
        };
        
        return Promise.allSettled(requests.map(request => 
            request.then(() => {
                successful++;
                updateProgress();
            }).catch(() => {
                updateProgress();
            })
        ));
    }
}

// Create and export loader instance
const apiLoader = new ApiRequestLoader(
    document.querySelector('.api-request-loader')
);

// Enhanced fetch wrapper with loader
window.apiRequest = {
    // Make request with loader
    fetch: (url, options) => apiLoader.makeRequest(url, options),
    
    // GET request
    get: (url, options = {}) => apiLoader.makeRequest(url, { ...options, method: 'GET' }),
    
    // POST request
    post: (url, data, options = {}) => apiLoader.makeRequest(url, { 
        ...options, 
        method: 'POST', 
        body: data 
    }),
    
    // PUT request
    put: (url, data, options = {}) => apiLoader.makeRequest(url, { 
        ...options, 
        method: 'PUT', 
        body: data 
    }),
    
    // DELETE request
    delete: (url, options = {}) => apiLoader.makeRequest(url, { ...options, method: 'DELETE' }),
    
    // Monitor multiple requests
    monitor: (requests) => apiLoader.monitorRequests(requests),
    
    // Direct control
    startRequest: (method, endpoint) => apiLoader.startRequest(method, endpoint),
    updateStatus: (status, message) => apiLoader.updateStatus(status, message),
    updateStatusCode: (code) => apiLoader.updateStatusCode(code),
    complete: () => apiLoader.complete(),
    showError: (code, message) => apiLoader.showError(code, message)
};`
    },

    // ====================================================================
    // TEMPLATE 54: Multi-step Form Loader
    // ====================================================================
    loader54: {
        name: "Multi-step Form Loader",
        category: "progress",
        html: `<div class="loader-container">
    <div class="multi-step-loader">
        <div class="steps">
            <div class="step active">1</div>
            <div class="step">2</div>
            <div class="step">3</div>
            <div class="step">4</div>
        </div>
        <div class="step-content">
            <div class="step-title">Processing Payment</div>
            <div class="step-description">Verifying payment details...</div>
        </div>
    </div>
</div>`,
        css: `.multi-step-loader {
    width: 260px;
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
}

.steps {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
}

.steps::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 2px;
    background: #e5e7eb;
    transform: translateY(-50%);
    z-index: 1;
}

.step {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #f3f4f6;
    border: 2px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    color: #9ca3af;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
}

.step.active {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
}

.step.completed {
    background: #10b981;
    border-color: #10b981;
    color: white;
}

.step-content {
    text-align: center;
}

.step-title {
    font-size: 16px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 8px;
}

.step-description {
    font-size: 14px;
    color: #6b7280;
    animation: stepPulse 1.5s ease-in-out infinite;
}

@keyframes stepPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Multi-step Form Loader with Progress Tracking
class MultiStepLoader {
    constructor(container) {
        this.container = container;
        this.steps = container.querySelectorAll('.step');
        this.stepTitle = container.querySelector('.step-title');
        this.stepDescription = container.querySelector('.step-description');
        this.currentStep = 0;
        this.totalSteps = this.steps.length;
        this.stepData = [];
        this.isProcessing = false;
        this.initialize();
    }
    
    initialize() {
        this.reset();
    }
    
    // Define steps for the process
    defineSteps(steps) {
        this.stepData = steps;
        this.totalSteps = steps.length;
        
        // Update step numbers
        this.steps.forEach((step, index) => {
            if (index < steps.length) {
                step.textContent = index + 1;
                step.style.display = 'flex';
            } else {
                step.style.display = 'none';
            }
        });
        
        return this;
    }
    
    // Start the multi-step process
    startProcess(title = 'Processing...') {
        this.currentStep = 0;
        this.isProcessing = true;
        this.stepTitle.textContent = title;
        
        // Show loader
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
        
        // Activate first step
        this.activateStep(0);
        
        return this;
    }
    
    // Activate a specific step
    activateStep(stepIndex) {
        if (stepIndex < 0 || stepIndex >= this.totalSteps) return;
        
        // Update all steps
        this.steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            
            if (index < stepIndex) {
                step.classList.add('completed');
            } else if (index === stepIndex) {
                step.classList.add('active');
            }
        });
        
        // Update step content if step data exists
        if (this.stepData[stepIndex]) {
            const step = this.stepData[stepIndex];
            this.stepTitle.textContent = step.title || \`Step \${stepIndex + 1}\`;
            this.stepDescription.textContent = step.description || '';
            
            if (step.icon) {
                // Add icon to step if provided
                const stepElement = this.steps[stepIndex];
                stepElement.textContent = step.icon;
            }
        }
        
        this.currentStep = stepIndex;
        
        return stepIndex;
    }
    
    // Move to next step
    nextStep() {
        if (this.currentStep < this.totalSteps - 1) {
            return this.activateStep(this.currentStep + 1);
        }
        return null;
    }
    
    // Move to previous step
    previousStep() {
        if (this.currentStep > 0) {
            return this.activateStep(this.currentStep - 1);
        }
        return null;
    }
    
    // Execute step function with loading state
    async executeStep(stepIndex, stepFunction) {
        this.activateStep(stepIndex);
        
        try {
            // Show processing state
            const stepElement = this.steps[stepIndex];
            const originalContent = stepElement.textContent;
            stepElement.textContent = '⏳';
            stepElement.style.animation = 'pulse 1s ease-in-out infinite';
            
            // Execute step function
            const result = await stepFunction();
            
            // Mark step as completed
            stepElement.textContent = originalContent;
            stepElement.classList.remove('active');
            stepElement.classList.add('completed');
            stepElement.style.animation = '';
            
            return result;
            
        } catch (error) {
            // Mark step as error
            const stepElement = this.steps[stepIndex];
            stepElement.textContent = '!';
            stepElement.style.background = '#ef4444';
            stepElement.style.borderColor = '#ef4444';
            stepElement.style.animation = '';
            
            this.stepDescription.textContent = 'Error: ' + error.message;
            this.stepDescription.style.color = '#ef4444';
            
            throw error;
        }
    }
    
    // Execute all steps sequentially
    async executeAllSteps() {
        this.startProcess('Processing steps...');
        
        const results = [];
        
        for (let i = 0; i < this.stepData.length; i++) {
            const step = this.stepData[i];
            
            try {
                if (step.execute) {
                    const result = await this.executeStep(i, step.execute);
                    results.push(result);
                } else {
                    this.activateStep(i);
                    await new Promise(resolve => setTimeout(resolve, 500)); // Default delay
                    results.push(null);
                }
                
                // Auto-progress to next step
                if (i < this.stepData.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 300));
                }
                
            } catch (error) {
                // Stop execution on error
                this.showStepError(i, error.message);
                throw error;
            }
        }
        
        await this.completeProcess();
        return results;
    }
    
    // Show error for a specific step
    showStepError(stepIndex, message) {
        const stepElement = this.steps[stepIndex];
        stepElement.style.background = '#ef4444';
        stepElement.style.borderColor = '#ef4444';
        stepElement.textContent = '!';
        
        this.stepTitle.textContent = 'Error occurred';
        this.stepDescription.textContent = message;
        this.stepDescription.style.color = '#ef4444';
    }
    
    // Complete the entire process
    completeProcess() {
        return new Promise((resolve) => {
            this.isProcessing = false;
            
            // Mark all steps as completed
            this.steps.forEach(step => {
                if (step.style.display !== 'none') {
                    step.classList.remove('active');
                    step.classList.add('completed');
                    step.style.background = '#10b981';
                    step.style.borderColor = '#10b981';
                }
            });
            
            // Update content
            this.stepTitle.textContent = 'Process complete';
            this.stepDescription.textContent = 'All steps completed successfully';
            this.stepDescription.style.color = '#10b981';
            this.stepDescription.style.animation = '';
            
            // Add success animation
            const successIcon = document.createElement('div');
            successIcon.style.cssText = \`
                position: absolute;
                top: 20px;
                right: 20px;
                width: 24px;
                height: 24px;
                background: #10b981;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 14px;
                animation: scaleIn 0.3s ease;
            \`;
            successIcon.textContent = '✓';
            this.container.appendChild(successIcon);
            
            // Fade out after delay
            setTimeout(() => {
                this.container.style.transition = 'all 0.3s ease';
                this.container.style.opacity = '0';
                this.container.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    this.reset();
                    successIcon.remove();
                    resolve();
                }, 300);
            }, 1500);
        });
    }
    
    // Reset to initial state
    reset() {
        this.currentStep = 0;
        this.isProcessing = false;
        
        // Reset all steps
        this.steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            step.style.background = '';
            step.style.borderColor = '';
            step.style.animation = '';
            step.textContent = index + 1;
            step.style.display = 'flex';
        });
        
        // Activate first step
        if (this.steps.length > 0) {
            this.steps[0].classList.add('active');
        }
        
        // Reset content
        this.stepTitle.textContent = 'Processing Payment';
        this.stepDescription.textContent = 'Verifying payment details...';
        this.stepDescription.style.color = '';
        this.stepDescription.style.animation = 'stepPulse 1.5s ease-in-out infinite';
        
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
    }
    
    // Example: Payment processing workflow
    async simulatePaymentProcessing() {
        const steps = [
            {
                title: 'Validating card',
                description: 'Checking card details...',
                execute: async () => {
                    await new Promise(resolve => setTimeout(resolve, 800));
                    return { valid: true };
                }
            },
            {
                title: 'Processing payment',
                description: 'Connecting to payment gateway...',
                execute: async () => {
                    await new Promise(resolve => setTimeout(resolve, 1200));
                    return { transactionId: 'TXN_' + Date.now() };
                }
            },
            {
                title: 'Verifying funds',
                description: 'Checking account balance...',
                execute: async () => {
                    await new Promise(resolve => setTimeout(resolve, 600));
                    return { sufficient: true };
                }
            },
            {
                title: 'Completing transaction',
                description: 'Finalizing payment...',
                execute: async () => {
                    await new Promise(resolve => setTimeout(resolve, 800));
                    return { completed: true };
                }
            }
        ];
        
        this.defineSteps(steps);
        return await this.executeAllSteps();
    }
    
    // Example: Form submission workflow
    async submitForm(formData) {
        const steps = [
            {
                title: 'Validating form',
                description: 'Checking required fields...',
                execute: async () => this.validateForm(formData)
            },
            {
                title: 'Uploading files',
                description: 'Processing attachments...',
                execute: async () => this.uploadFiles(formData.files)
            },
            {
                title: 'Saving data',
                description: 'Storing in database...',
                execute: async () => this.saveToDatabase(formData)
            },
            {
                title: 'Sending notifications',
                description: 'Notifying relevant parties...',
                execute: async () => this.sendNotifications(formData)
            }
        ];
        
        this.defineSteps(steps);
        return await this.executeAllSteps();
    }
}

// Create and export loader instance
const multiStepLoader = new MultiStepLoader(
    document.querySelector('.multi-step-loader')
);

// Usage examples
window.formLoader = {
    // Define custom steps
    defineSteps: (steps) => multiStepLoader.defineSteps(steps),
    
    // Start process
    start: (title) => multiStepLoader.startProcess(title),
    
    // Control steps
    nextStep: () => multiStepLoader.nextStep(),
    previousStep: () => multiStepLoader.previousStep(),
    goToStep: (index) => multiStepLoader.activateStep(index),
    
    // Execute steps
    executeStep: (index, func) => multiStepLoader.executeStep(index, func),
    executeAll: () => multiStepLoader.executeAllSteps(),
    
    // Complete process
    complete: () => multiStepLoader.completeProcess(),
    
    // Examples
    simulatePayment: () => multiStepLoader.simulatePaymentProcessing(),
    submitForm: (formData) => multiStepLoader.submitForm(formData),
    
    // Direct access
    loader: multiStepLoader
};`
    },

    // ====================================================================
    // TEMPLATE 55: Data Table Loading
    // ====================================================================
    loader55: {
        name: "Data Table Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="data-table-loader">
        <div class="table-header">
            <div class="header-cell"></div>
            <div class="header-cell"></div>
            <div class="header-cell"></div>
        </div>
        <div class="table-rows">
            <div class="table-row"></div>
            <div class="table-row"></div>
            <div class="table-row"></div>
            <div class="table-row"></div>
        </div>
        <div class="loading-info">
            <span class="rows-loaded">Loading 50 rows...</span>
        </div>
    </div>
</div>`,
        css: `.data-table-loader {
    width: 300px;
    padding: 16px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
}

.table-header {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 2px solid #f3f4f6;
}

.header-cell {
    height: 16px;
    background: #f3f4f6;
    border-radius: 4px;
    animation: headerPulse 2s ease-in-out infinite;
}

.header-cell:nth-child(1) { width: 30%; }
.header-cell:nth-child(2) { width: 40%; }
.header-cell:nth-child(3) { width: 30%; }

.table-rows {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
}

.table-row {
    height: 12px;
    background: linear-gradient(90deg,
        #f9fafb 25%,
        #f3f4f6 50%,
        #f9fafb 75%);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: rowShimmer 1.5s ease-in-out infinite;
}

.table-row:nth-child(1) { width: 95%; animation-delay: 0s; }
.table-row:nth-child(2) { width: 90%; animation-delay: 0.1s; }
.table-row:nth-child(3) { width: 85%; animation-delay: 0.2s; }
.table-row:nth-child(4) { width: 80%; animation-delay: 0.3s; }

.loading-info {
    text-align: center;
    padding-top: 12px;
    border-top: 1px solid #f3f4f6;
}

.rows-loaded {
    font-size: 13px;
    font-weight: 500;
    color: #6b7280;
    animation: rowsPulse 2s ease-in-out infinite;
}

@keyframes headerPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}

@keyframes rowShimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}

@keyframes rowsPulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Data Table Loader with Row-by-Row Animation
class DataTableLoader {
    constructor(container) {
        this.container = container;
        this.tableRows = container.querySelector('.table-rows');
        this.rowsLoaded = container.querySelector('.rows-loaded');
        this.headerCells = container.querySelectorAll('.header-cell');
        this.totalRows = 0;
        this.loadedRows = 0;
        this.columns = 3;
        this.isLoading = false;
        this.initialize();
    }
    
    initialize() {
        // Set initial column widths
        this.setColumnWidths([30, 40, 30]);
        this.updateRowCount(4);
        return this;
    }
    
    // Set column configuration
    setColumns(columnCount, widths = null) {
        this.columns = columnCount;
        
        // Clear existing header cells
        const header = this.container.querySelector('.table-header');
        header.innerHTML = '';
        
        // Create new header cells
        for (let i = 0; i < columnCount; i++) {
            const cell = document.createElement('div');
            cell.className = 'header-cell';
            cell.style.width = widths ? widths[i] + '%' : (100 / columnCount) + '%';
            header.appendChild(cell);
        }
        
        return this;
    }
    
    // Set specific column widths
    setColumnWidths(widths) {
        this.headerCells.forEach((cell, index) => {
            if (widths[index] !== undefined) {
                cell.style.width = widths[index] + '%';
            }
        });
        return this;
    }
    
    // Update row count
    updateRowCount(count) {
        this.totalRows = count;
        this.tableRows.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const row = document.createElement('div');
            row.className = 'table-row';
            
            // Staggered width for visual interest
            const width = 95 - (i * 5);
            row.style.width = width + '%';
            row.style.animationDelay = (i * 0.1) + 's';
            
            this.tableRows.appendChild(row);
        }
        
        this.updateLoadingText();
        return this;
    }
    
    // Start loading data
    startLoading(totalRows, message = 'Loading data...') {
        this.isLoading = true;
        this.totalRows = totalRows;
        this.loadedRows = 0;
        
        this.updateRowCount(Math.min(totalRows, 10)); // Show first 10 rows as skeleton
        
        // Update loading text
        this.rowsLoaded.textContent = message;
        this.rowsLoaded.style.animation = 'rowsPulse 2s ease-in-out infinite';
        
        // Show container
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
        
        return this;
    }
    
    // Update loading progress
    updateProgress(loaded, total) {
        this.loadedRows = loaded;
        this.totalRows = total;
        
        const percent = (loaded / total) * 100;
        
        // Update text
        if (loaded < total) {
            this.rowsLoaded.textContent = \`Loading \${loaded} of \${total} rows (\${Math.round(percent)}%)\`;
        } else {
            this.rowsLoaded.textContent = \`Loaded \${total} rows\`;
        }
        
        // Animate rows as they load
        const visibleRows = this.tableRows.querySelectorAll('.table-row');
        const rowsToAnimate = Math.min(loaded, visibleRows.length);
        
        visibleRows.forEach((row, index) => {
            if (index < rowsToAnimate) {
                // Fade in loaded rows
                row.style.opacity = '1';
                row.style.animation = 'none';
                row.style.background = '#f3f4f6';
            } else {
                // Keep shimmer for loading rows
                row.style.opacity = '0.6';
                row.style.animation = 'rowShimmer 1.5s ease-in-out infinite';
            }
        });
        
        return percent;
    }
    
    // Load row with data (simulated)
    loadRow(rowIndex, rowData = null) {
        const rows = this.tableRows.querySelectorAll('.table-row');
        
        if (rowIndex < rows.length) {
            const row = rows[rowIndex];
            
            // If row data provided, simulate content
            if (rowData) {
                // Replace skeleton with content
                row.innerHTML = '';
                row.style.animation = 'none';
                row.style.background = 'none';
                row.style.height = 'auto';
                row.style.padding = '8px 0';
                
                // Create row content based on data
                const content = document.createElement('div');
                content.style.cssText = \`
                    display: flex;
                    gap: 12px;
                    align-items: center;
                \`;
                
                // Add cells based on data
                Object.values(rowData).forEach((value, cellIndex) => {
                    const cell = document.createElement('div');
                    cell.textContent = value;
                    cell.style.cssText = \`
                        font-size: 13px;
                        color: #4b5563;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    \`;
                    cell.style.width = this.headerCells[cellIndex]?.style.width || 'auto';
                    content.appendChild(cell);
                });
                
                row.appendChild(content);
                row.style.animation = 'fadeIn 0.3s ease';
            }
            
            // Update loaded count
            this.loadedRows++;
            this.updateProgress(this.loadedRows, this.totalRows);
        }
        
        return rowIndex;
    }
    
    // Load batch of rows
    async loadRowsBatch(data, batchSize = 5, delay = 200) {
        this.startLoading(data.length, \`Loading \${data.length} rows...\`);
        
        for (let i = 0; i < data.length; i += batchSize) {
            const batch = data.slice(i, i + batchSize);
            
            // Load each row in batch
            batch.forEach((rowData, index) => {
                setTimeout(() => {
                    this.loadRow(i + index, rowData);
                }, index * 50); // Stagger row loading
            });
            
            // Wait before next batch
            await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        return data;
    }
    
    // Complete loading
    complete() {
        return new Promise((resolve) => {
            this.isLoading = false;
            
            // Update text
            this.rowsLoaded.textContent = \`✓ Loaded \${this.totalRows} rows\`;
            this.rowsLoaded.style.color = '#10b981';
            this.rowsLoaded.style.animation = 'none';
            
            // Fade out skeleton rows
            const rows = this.tableRows.querySelectorAll('.table-row');
            rows.forEach(row => {
                if (row.innerHTML === '') {
                    // Empty skeleton rows fade out
                    row.style.transition = 'opacity 0.3s ease';
                    row.style.opacity = '0';
                }
            });
            
            // Show success animation
            const successBadge = document.createElement('div');
            successBadge.style.cssText = \`
                position: absolute;
                top: 16px;
                right: 16px;
                background: #10b981;
                color: white;
                font-size: 11px;
                font-weight: 600;
                padding: 4px 8px;
                border-radius: 12px;
                animation: scaleIn 0.3s ease;
            \`;
            successBadge.textContent = 'READY';
            this.container.appendChild(successBadge);
            
            // Fade out loader
            setTimeout(() => {
                this.container.style.transition = 'all 0.3s ease';
                this.container.style.opacity = '0';
                this.container.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    this.reset();
                    successBadge.remove();
                    resolve();
                }, 300);
            }, 1500);
        });
    }
    
    // Show error state
    showError(message = 'Failed to load data') {
        this.rowsLoaded.textContent = message;
        this.rowsLoaded.style.color = '#ef4444';
        this.rowsLoaded.style.animation = 'none';
        
        // Change header color to indicate error
        this.headerCells.forEach(cell => {
            cell.style.background = '#fee2e2';
        });
    }
    
    // Update loading text
    updateLoadingText() {
        if (this.totalRows > 0) {
            this.rowsLoaded.textContent = \`Loading \${this.totalRows} rows...\`;
        } else {
            this.rowsLoaded.textContent = 'Loading data...';
        }
    }
    
    // Reset to initial state
    reset() {
        this.isLoading = false;
        this.loadedRows = 0;
        this.totalRows = 4;
        
        // Reset header
        this.headerCells.forEach(cell => {
            cell.style.background = '#f3f4f6';
            cell.style.animation = 'headerPulse 2s ease-in-out infinite';
        });
        
        // Reset rows
        this.updateRowCount(4);
        
        // Reset text
        this.rowsLoaded.textContent = 'Loading 50 rows...';
        this.rowsLoaded.style.color = '#6b7280';
        this.rowsLoaded.style.animation = 'rowsPulse 2s ease-in-out infinite';
        
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
    }
    
    // Simulate API data loading
    simulateApiData(apiUrl, params = {}) {
        this.startLoading(0, 'Fetching data from API...');
        
        // Simulate API call
        setTimeout(() => {
            this.updateProgress(0, 50);
            
            // Simulate streaming data
            let loaded = 0;
            const total = 50;
            
            const interval = setInterval(() => {
                loaded += 5;
                this.updateProgress(loaded, total);
                
                // Simulate loading actual row data
                if (loaded % 10 === 0) {
                    const rowIndex = Math.floor(loaded / 10) - 1;
                    this.loadRow(rowIndex, {
                        id: rowIndex + 1,
                        name: \`Item \${rowIndex + 1}\`,
                        value: \`$\${(Math.random() * 100).toFixed(2)}\`
                    });
                }
                
                if (loaded >= total) {
                    clearInterval(interval);
                    setTimeout(() => this.complete(), 500);
                }
            }, 200);
        }, 1000);
    }
    
    // Load from JSON data
    async loadFromJson(jsonData, options = {}) {
        const {
            batchSize = 10,
            delay = 300,
            columns = ['ID', 'Name', 'Value']
        } = options;
        
        // Set columns based on data
        if (jsonData.length > 0) {
            const sampleKeys = Object.keys(jsonData[0]);
            this.setColumns(sampleKeys.length, Array(sampleKeys.length).fill(100 / sampleKeys.length));
        }
        
        return await this.loadRowsBatch(jsonData, batchSize, delay);
    }
}

// Create and export loader instance
const tableLoader = new DataTableLoader(
    document.querySelector('.data-table-loader')
);

// Usage examples
window.dataTableLoader = {
    // Configuration
    setColumns: (count, widths) => tableLoader.setColumns(count, widths),
    setColumnWidths: (widths) => tableLoader.setColumnWidths(widths),
    
    // Loading control
    startLoading: (totalRows, message) => tableLoader.startLoading(totalRows, message),
    updateProgress: (loaded, total) => tableLoader.updateProgress(loaded, total),
    loadRow: (index, data) => tableLoader.loadRow(index, data),
    
    // Batch operations
    loadBatch: (data, batchSize, delay) => tableLoader.loadRowsBatch(data, batchSize, delay),
    loadJson: (jsonData, options) => tableLoader.loadFromJson(jsonData, options),
    
    // Completion
    complete: () => tableLoader.complete(),
    showError: (message) => tableLoader.showError(message),
    
    // Simulation
    simulate: (apiUrl) => tableLoader.simulateApiData(apiUrl),
    
    // Example: Load user data
    loadUsers: async () => {
        // Simulate user data
        const users = Array.from({ length: 25 }, (_, i) => ({
            id: i + 1,
            name: \`User \${i + 1}\`,
            email: \`user\${i + 1}@example.com\`,
            role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Editor' : 'Viewer',
            status: i % 4 === 0 ? 'Active' : 'Inactive'
        }));
        
        tableLoader.setColumns(5, [10, 25, 35, 20, 10]);
        return await tableLoader.loadBatch(users, 5, 400);
    },
    
    // Example: Load product data
    loadProducts: async () => {
        const products = Array.from({ length: 40 }, (_, i) => ({
            id: \`PROD-\${String(i + 1).padStart(4, '0')}\`,
            name: \`Product \${i + 1}\`,
            category: ['Electronics', 'Clothing', 'Home', 'Books'][i % 4],
            price: \`$\{(Math.random() * 1000).toFixed(2)}\`,
            stock: Math.floor(Math.random() * 100)
        }));
        
        tableLoader.setColumns(5, [15, 30, 20, 15, 20]);
        return await tableLoader.loadBatch(products, 8, 300);
    },
    
    // Direct access
    loader: tableLoader
};`
    },

    // ====================================================================
    // TEMPLATE 56: Video Buffer Loader
    // ====================================================================
    loader56: {
        name: "Video Buffer Loader",
        category: "progress",
        html: `<div class="loader-container">
    <div class="video-buffer-loader">
        <div class="player-placeholder">
            <div class="play-button">▶</div>
        </div>
        <div class="buffer-progress">
            <div class="buffer-fill"></div>
        </div>
        <div class="buffer-stats">
            <div class="quality">HD • 720p</div>
            <div class="buffer-percent">45% buffered</div>
        </div>
    </div>
</div>`,
        css: `.video-buffer-loader {
    width: 260px;
    padding: 16px;
    background: #1f2937;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid #374151;
}

.player-placeholder {
    width: 100%;
    height: 140px;
    background: linear-gradient(135deg, #374151, #1f2937);
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

.player-placeholder::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 70%);
    animation: videoShimmer 2s linear infinite;
}

.play-button {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #1f2937;
    cursor: pointer;
    transition: all 0.2s ease;
    z-index: 2;
}

.play-button:hover {
    transform: scale(1.05);
    background: white;
}

.buffer-progress {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 12px;
}

.buffer-fill {
    height: 100%;
    width: 45%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    border-radius: 3px;
    transition: width 0.3s ease;
    position: relative;
    overflow: hidden;
}

.buffer-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent);
    animation: bufferShimmer 1.5s ease-in-out infinite;
}

.buffer-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quality {
    font-size: 12px;
    font-weight: 500;
    color: #9ca3af;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.buffer-percent {
    font-size: 12px;
    font-weight: 500;
    color: #60a5fa;
}

@keyframes videoShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes bufferShimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Video Buffer Loader with Streaming Progress
class VideoBufferLoader {
    constructor(container) {
        this.container = container;
        this.playerPlaceholder = container.querySelector('.player-placeholder');
        this.playButton = container.querySelector('.play-button');
        this.bufferFill = container.querySelector('.buffer-fill');
        this.quality = container.querySelector('.quality');
        this.bufferPercent = container.querySelector('.buffer-percent');
        this.videoElement = null;
        this.isBuffering = false;
        this.bufferInterval = null;
        this.initialize();
    }
    
    initialize() {
        this.reset();
        
        // Make play button interactive
        this.playButton.addEventListener('click', () => {
            if (this.videoElement) {
                if (this.videoElement.paused) {
                    this.videoElement.play();
                    this.playButton.textContent = '⏸';
                } else {
                    this.videoElement.pause();
                    this.playButton.textContent = '▶';
                }
            }
        });
        
        return this;
    }
    
    // Load video with URL
    loadVideo(videoUrl, options = {}) {
        // Create video element if not exists
        if (!this.videoElement) {
            this.videoElement = document.createElement('video');
            this.videoElement.style.cssText = \`
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 8px;
                display: none;
            \`;
            this.playerPlaceholder.appendChild(this.videoElement);
        }
        
        // Set video source
        this.videoElement.src = videoUrl;
        
        // Set options
        if (options.autoplay) this.videoElement.autoplay = true;
        if (options.controls) this.videoElement.controls = true;
        if (options.muted) this.videoElement.muted = true;
        if (options.loop) this.videoElement.loop = true;
        
        // Set quality display
        this.setQuality(options.quality || 'HD • 720p');
        
        // Show loader
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
        
        // Start monitoring buffer
        this.startBuffering();
        
        // Set up video event listeners
        this.setupVideoEvents();
        
        return this;
    }
    
    // Set video quality display
    setQuality(qualityText) {
        this.quality.textContent = qualityText;
        
        // Color code based on quality
        if (qualityText.includes('4K')) {
            this.quality.style.background = 'rgba(139, 92, 246, 0.3)';
            this.quality.style.color = '#a78bfa';
        } else if (qualityText.includes('HD') || qualityText.includes('1080')) {
            this.quality.style.background = 'rgba(59, 130, 246, 0.3)';
            this.quality.style.color = '#60a5fa';
        } else if (qualityText.includes('720')) {
            this.quality.style.background = 'rgba(34, 197, 94, 0.3)';
            this.quality.style.color = '#4ade80';
        } else {
            this.quality.style.background = 'rgba(255, 255, 255, 0.1)';
            this.quality.style.color = '#9ca3af';
        }
    }
    
    // Start buffering monitoring
    startBuffering() {
        this.isBuffering = true;
        
        // Clear any existing interval
        if (this.bufferInterval) {
            clearInterval(this.bufferInterval);
        }
        
        // Start monitoring buffer
        this.bufferInterval = setInterval(() => {
            this.updateBufferProgress();
        }, 500);
        
        // Initial update
        this.updateBufferProgress();
    }
    
    // Update buffer progress
    updateBufferProgress() {
        if (!this.videoElement) return;
        
        try {
            // Calculate buffered percentage
            if (this.videoElement.buffered.length > 0) {
                const bufferedEnd = this.videoElement.buffered.end(this.videoElement.buffered.length - 1);
                const duration = this.videoElement.duration || 1;
                const percent = (bufferedEnd / duration) * 100;
                
                this.updateBufferPercent(percent);
                
                // Check if enough buffered to play
                if (percent > 10 && this.videoElement.paused && !this.videoElement.autoplay) {
                    this.playButton.style.display = 'flex';
                }
            }
        } catch (error) {
            console.warn('Error calculating buffer:', error);
        }
    }
    
    // Update buffer percentage display
    updateBufferPercent(percent) {
        const roundedPercent = Math.round(percent);
        this.bufferFill.style.width = percent + '%';
        this.bufferPercent.textContent = \`\${roundedPercent}% buffered\`;
        
        // Update color based on buffer level
        if (percent < 20) {
            this.bufferFill.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
            this.bufferPercent.style.color = '#f87171';
        } else if (percent < 50) {
            this.bufferFill.style.background = 'linear-gradient(90deg, #f59e0b, #fbbf24)';
            this.bufferPercent.style.color = '#fbbf24';
        } else if (percent < 80) {
            this.bufferFill.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
            this.bufferPercent.style.color = '#60a5fa';
        } else {
            this.bufferFill.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
            this.bufferPercent.style.color = '#34d399';
        }
        
        return percent;
    }
    
    // Set up video event listeners
    setupVideoEvents() {
        if (!this.videoElement) return;
        
        // Clear existing listeners
        this.videoElement.replaceWith(this.videoElement.cloneNode(true));
        this.videoElement = this.playerPlaceholder.querySelector('video');
        
        // Add event listeners
        this.videoElement.addEventListener('loadedmetadata', () => {
            this.updateBufferProgress();
        });
        
        this.videoElement.addEventListener('progress', () => {
            this.updateBufferProgress();
        });
        
        this.videoElement.addEventListener('waiting', () => {
            this.showBuffering(true);
        });
        
        this.videoElement.addEventListener('playing', () => {
            this.showBuffering(false);
        });
        
        this.videoElement.addEventListener('canplay', () => {
            this.showBuffering(false);
            
            // Replace placeholder with video
            this.playerPlaceholder.style.background = 'none';
            this.playerPlaceholder.querySelector('.player-placeholder::before').style.animation = 'none';
            this.videoElement.style.display = 'block';
            this.playButton.style.display = 'flex';
        });
        
        this.videoElement.addEventListener('ended', () => {
            this.playButton.textContent = '↻';
            this.playButton.title = 'Replay';
        });
        
        this.videoElement.addEventListener('error', (e) => {
            this.showError('Video load failed');
            console.error('Video error:', e);
        });
    }
    
    // Show/hide buffering state
    showBuffering(isBuffering) {
        if (isBuffering) {
            this.playButton.style.display = 'none';
            this.bufferFill.style.animation = 'bufferShimmer 0.8s ease-in-out infinite';
        } else {
            this.playButton.style.display = 'flex';
            this.bufferFill.style.animation = '';
        }
    }
    
    // Show error state
    showError(message = 'Failed to load video') {
        this.bufferPercent.textContent = message;
        this.bufferPercent.style.color = '#ef4444';
        this.bufferFill.style.background = 'linear-gradient(90deg, #ef4444, #f87171)';
        this.bufferFill.style.animation = 'none';
        this.playButton.style.display = 'none';
    }
    
    // Complete loading (video ready)
    complete() {
        return new Promise((resolve) => {
            this.isBuffering = false;
            
            if (this.bufferInterval) {
                clearInterval(this.bufferInterval);
                this.bufferInterval = null;
            }
            
            // Update to ready state
            this.bufferFill.style.width = '100%';
            this.bufferFill.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
            this.bufferFill.style.animation = 'none';
            this.bufferPercent.textContent = 'Ready to play';
            this.bufferPercent.style.color = '#34d399';
            
            // Show play button
            this.playButton.style.display = 'flex';
            this.playButton.textContent = '▶';
            
            // Fade out progress bar after delay
            setTimeout(() => {
                this.bufferFill.style.transition = 'opacity 0.5s ease';
                this.bufferFill.style.opacity = '0';
                
                setTimeout(() => {
                    this.bufferFill.style.display = 'none';
                    this.quality.style.display = 'none';
                    this.bufferPercent.style.display = 'none';
                    resolve();
                }, 500);
            }, 2000);
        });
    }
    
    // Reset loader
    reset() {
        this.isBuffering = false;
        
        if (this.bufferInterval) {
            clearInterval(this.bufferInterval);
            this.bufferInterval = null;
        }
        
        // Remove video element if exists
        if (this.videoElement) {
            this.videoElement.remove();
            this.videoElement = null;
        }
        
        // Reset UI
        this.playerPlaceholder.style.background = 'linear-gradient(135deg, #374151, #1f2937)';
        this.playerPlaceholder.querySelector('.player-placeholder::before').style.animation = 'videoShimmer 2s linear infinite';
        this.bufferFill.style.width = '45%';
        this.bufferFill.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
        this.bufferFill.style.animation = 'bufferShimmer 1.5s ease-in-out infinite';
        this.bufferFill.style.opacity = '1';
        this.bufferFill.style.display = 'block';
        this.quality.textContent = 'HD • 720p';
        this.quality.style.background = 'rgba(255, 255, 255, 0.1)';
        this.quality.style.color = '#9ca3af';
        this.quality.style.display = 'block';
        this.bufferPercent.textContent = '45% buffered';
        this.bufferPercent.style.color = '#60a5fa';
        this.bufferPercent.style.display = 'block';
        this.playButton.textContent = '▶';
        this.playButton.style.display = 'flex';
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
    }
    
    // Simulate video streaming
    simulateStreaming(videoDuration = 120) {
        // Create fake video element for simulation
        const fakeVideo = {
            buffered: {
                length: 1,
                end: () => 0
            },
            duration: videoDuration
        };
        
        this.videoElement = fakeVideo;
        this.setQuality('HD • 1080p');
        this.startBuffering();
        
        // Simulate buffer progress
        let buffered = 0;
        const interval = setInterval(() => {
            buffered += Math.random() * 10;
            
            if (buffered >= videoDuration) {
                buffered = videoDuration;
                clearInterval(interval);
                
                // Show video is ready
                setTimeout(() => {
                    this.complete();
                }, 1000);
            }
            
            // Update fake buffered data
            fakeVideo.buffered.end = () => buffered;
            this.updateBufferProgress();
        }, 500);
        
        return this;
    }
    
    // Load YouTube video (requires embed)
    loadYouTube(videoId, options = {}) {
        // Create YouTube iframe
        const iframe = document.createElement('iframe');
        iframe.style.cssText = \`
            width: 100%;
            height: 100%;
            border-radius: 8px;
            border: none;
        \`;
        iframe.src = \`https://www.youtube.com/embed/\${videoId}?autoplay=\${options.autoplay ? 1 : 0}\`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        // Remove existing content
        this.playerPlaceholder.innerHTML = '';
        this.playerPlaceholder.appendChild(iframe);
        this.playButton.style.display = 'none';
        
        // Show buffering
        this.setQuality('YouTube • HD');
        this.startBuffering();
        
        // Simulate YouTube buffering (can't get real buffer data)
        let bufferPercent = 0;
        const bufferInterval = setInterval(() => {
            bufferPercent += Math.random() * 15;
            if (bufferPercent > 100) {
                bufferPercent = 100;
                clearInterval(bufferInterval);
                setTimeout(() => {
                    this.bufferFill.style.width = '100%';
                    this.bufferPercent.textContent = 'Ready';
                }, 1000);
            }
            this.updateBufferPercent(bufferPercent);
        }, 800);
        
        return this;
    }
    
    // Get video statistics
    getStats() {
        if (!this.videoElement || typeof this.videoElement.currentTime !== 'number') {
            return null;
        }
        
        return {
            buffered: this.bufferFill.style.width,
            quality: this.quality.textContent,
            duration: this.videoElement.duration,
            currentTime: this.videoElement.currentTime,
            isPlaying: !this.videoElement.paused,
            volume: this.videoElement.volume
        };
    }
    
    // Control methods
    play() {
        if (this.videoElement && this.videoElement.play) {
            this.videoElement.play();
            this.playButton.textContent = '⏸';
        }
    }
    
    pause() {
        if (this.videoElement && this.videoElement.pause) {
            this.videoElement.pause();
            this.playButton.textContent = '▶';
        }
    }
    
    seekTo(time) {
        if (this.videoElement) {
            this.videoElement.currentTime = time;
        }
    }
    
    setVolume(volume) {
        if (this.videoElement) {
            this.videoElement.volume = Math.max(0, Math.min(1, volume));
        }
    }
}

// Create and export loader instance
const videoLoader = new VideoBufferLoader(
    document.querySelector('.video-buffer-loader')
);

// Usage examples
window.videoLoader = {
    // Load video
    load: (url, options) => videoLoader.loadVideo(url, options),
    loadYouTube: (videoId, options) => videoLoader.loadYouTube(videoId, options),
    
    // Control
    play: () => videoLoader.play(),
    pause: () => videoLoader.pause(),
    seekTo: (time) => videoLoader.seekTo(time),
    setVolume: (volume) => videoLoader.setVolume(volume),
    
    // Quality
    setQuality: (quality) => videoLoader.setQuality(quality),
    
    // Progress
    updateBuffer: (percent) => videoLoader.updateBufferPercent(percent),
    
    // Completion
    complete: () => videoLoader.complete(),
    showError: (message) => videoLoader.showError(message),
    
    // Simulation
    simulate: (duration) => videoLoader.simulateStreaming(duration),
    
    // Stats
    getStats: () => videoLoader.getStats(),
    
    // Example: Load sample video
    loadSample: () => {
        // Use a sample video URL
        const sampleUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
        return videoLoader.loadVideo(sampleUrl, {
            autoplay: false,
            controls: true,
            quality: 'HD • 1080p'
        });
    },
    
    // Direct access
    loader: videoLoader
};`
    },
        // ====================================================================
    // TEMPLATE 57: Uiverse Radial Bars Spinner
    // ====================================================================
    loader57: {
        name: "Radial Bars Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="spinner-57 spinner-radial-bars">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div>
    </div>
</div>`,
        css: `.spinner-57.spinner-radial-bars {
    position: relative;
    width: 70px;
    height: 70px;
}

.spinner-57.spinner-radial-bars div {
    position: absolute;
    width: 8%;
    height: 30%;
    background: linear-gradient(to bottom, #7c3aed, #ec4899);
    border-radius: 4px;
    transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
    animation: radial-bars-bounce 1s calc(var(--delay) * 1s) infinite ease;
    filter: drop-shadow(0 0 3px #7c3aed);
}

.spinner-57.spinner-radial-bars div:nth-child(1) {
    --delay: 0.1;
    --rotation: 36;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(2) {
    --delay: 0.2;
    --rotation: 72;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(3) {
    --delay: 0.3;
    --rotation: 108;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(4) {
    --delay: 0.4;
    --rotation: 144;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(5) {
    --delay: 0.5;
    --rotation: 180;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(6) {
    --delay: 0.6;
    --rotation: 216;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(7) {
    --delay: 0.7;
    --rotation: 252;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(8) {
    --delay: 0.8;
    --rotation: 288;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(9) {
    --delay: 0.9;
    --rotation: 324;
    --translation: 140;
}

.spinner-57.spinner-radial-bars div:nth-child(10) {
    --delay: 1;
    --rotation: 360;
    --translation: 140;
}

@keyframes radial-bars-bounce {
    0%, 20%, 40%, 60%, 80%, 100% {
        transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
        opacity: 0.7;
    }
    50% {
        transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.3%));
        opacity: 1;
        filter: drop-shadow(0 0 6px #ec4899);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control radial bars spinner
const radialSpinner = document.querySelector('.spinner-radial-bars');

// Change number of bars
function setBarCount(count) {
    radialSpinner.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const bar = document.createElement('div');
        bar.style.setProperty('--delay', (i * 0.1).toFixed(1));
        bar.style.setProperty('--rotation', (360 / count) * i);
        bar.style.setProperty('--translation', '140');
        radialSpinner.appendChild(bar);
    }
}

// Change bar colors
function setBarColors(color1, color2) {
    document.querySelectorAll('.spinner-radial-bars div').forEach(bar => {
        bar.style.background = \`linear-gradient(to bottom, \${color1}, \${color2})\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 58: Uiverse Circle Pulse Spinner
    // ====================================================================
    loader58: {
        name: "Circle Pulse Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="loader-circle-9">
        <span></span>
        Loading
    </div>
</div>`,
        css: `.loader-circle-9 {
    position: relative;
    width: 70px;
    height: 70px;
    background: transparent;
    border: 3px solid rgba(124, 58, 237, 0.2);
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
    font-family: sans-serif;
    font-size: 11px;
    font-weight: 600;
    color: #7c3aed;
    text-transform: uppercase;
    box-shadow: 
        0 0 20px rgba(124, 58, 237, 0.3),
        inset 0 0 15px rgba(124, 58, 237, 0.1);
}

.loader-circle-9:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #7c3aed;
    border-right: 3px solid #ec4899;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
    filter: drop-shadow(0 0 8px #7c3aed);
}

.loader-circle-9 span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animateCircle9 2s linear infinite;
}

.loader-circle-9 span:before {
    content: "";
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    top: -5px;
    right: -7px;
    box-shadow: 
        0 0 15px #7c3aed,
        0 0 25px rgba(236, 72, 153, 0.5);
}

@keyframes animateC {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animateCircle9 {
    0% {
        transform: rotate(45deg);
    }
    100% {
        transform: rotate(405deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control circle pulse spinner
const circlePulse = document.querySelector('.loader-circle-9');

// Change loading text
function setLoadingText(text) {
    circlePulse.textContent = text;
    // Re-add the span element
    const span = document.createElement('span');
    circlePulse.appendChild(span);
}

// Change dot speed
function setDotSpeed(speed) {
    const dot = circlePulse.querySelector('span');
    dot.style.animationDuration = speed + 's';
    circlePulse.style.animationDuration = speed + 's';
}

// Change colors
function setPulseColors(borderColor, dotColor) {
    circlePulse.style.borderColor = \`rgba(\${borderColor}, 0.2)\`;
    circlePulse.style.color = borderColor;
    circlePulse.querySelector('span:before').style.background = \`linear-gradient(45deg, \${borderColor}, \${dotColor})\`;
}`
    },

    // ====================================================================
    // TEMPLATE 59: Uiverse Dot Orbit Spinner
    // ====================================================================
    loader59: {
        name: "Dot Orbit Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="dot-spinner-59">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
    </div>
</div>`,
        css: `.dot-spinner-59 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    --uib-speed: 0.9s;
    height: 70px;
    width: 70px;
}

.dot-spinner-59 .dot-spinner__dot::before {
    content: '';
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: radial-gradient(circle at center, #7c3aed, #ec4899);
    filter: drop-shadow(0 0 8px #7c3aed);
    box-shadow: 
        0 0 15px rgba(124, 58, 237, 0.5),
        inset 0 0 5px rgba(255, 255, 255, 0.3);
    transform: scale(0);
    opacity: 0.5;
    animation: pulse-dot-orbit calc(var(--uib-speed) * 1.111) ease-in-out infinite;
}

.dot-spinner-59 .dot-spinner__dot {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.dot-spinner-59 .dot-spinner__dot:nth-child(1) {
    transform: rotate(0deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(1)::before {
    animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(2) {
    transform: rotate(45deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(2)::before {
    animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(3) {
    transform: rotate(90deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(3)::before {
    animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(4) {
    transform: rotate(135deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(4)::before {
    animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(5) {
    transform: rotate(180deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(5)::before {
    animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(6) {
    transform: rotate(225deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(6)::before {
    animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(7) {
    transform: rotate(270deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(7)::before {
    animation-delay: calc(var(--uib-speed) * -0.125);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(8) {
    transform: rotate(315deg);
}

.dot-spinner-59 .dot-spinner__dot:nth-child(8)::before {
    animation-delay: calc(var(--uib-speed) * 0);
}

@keyframes pulse-dot-orbit {
    0%, 100% {
        transform: scale(0);
        opacity: 0.3;
    }
    50% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control dot orbit spinner
const dotOrbitSpinner = document.querySelector('.dot-spinner-59');

// Change number of dots
function setDotCount(count) {
    dotOrbitSpinner.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot-spinner__dot';
        dot.style.transform = \`rotate(\${(360 / count) * i}deg)\`;
        dot.style.setProperty('--delay', \`calc(var(--uib-speed) * -\${(i / count)})\`);
        dotOrbitSpinner.appendChild(dot);
    }
}

// Change animation speed
function setOrbitSpeed(speed) {
    dotOrbitSpinner.style.setProperty('--uib-speed', speed + 's');
}

// Change dot size
function setDotSize(size) {
    document.querySelectorAll('.dot-spinner__dot::before').forEach(dot => {
        dot.style.height = size + 'px';
        dot.style.width = size + 'px';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 60: Uiverse Neon Rings Spinner
    // ====================================================================
    loader60: {
        name: "Neon Rings Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="neon-rings-spinner">
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="ring ring-3"></div>
    </div>
</div>`,
        css: `.neon-rings-spinner {
    position: relative;
    width: 70px;
    height: 70px;
}

.neon-rings-spinner .ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
}

.neon-rings-spinner .ring-1 {
    width: 100%;
    height: 100%;
    border-top: 2px solid #00f3ff;
    border-right: 2px solid #ff00ff;
    animation: neon-ring-rotate 2s linear infinite;
    filter: drop-shadow(0 0 8px #00f3ff) drop-shadow(0 0 8px #ff00ff);
}

.neon-rings-spinner .ring-2 {
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    border-top: 2px solid #00ff88;
    border-right: 2px solid #ffaa00;
    animation: neon-ring-rotate 1.5s linear infinite reverse;
    filter: drop-shadow(0 0 6px #00ff88) drop-shadow(0 0 6px #ffaa00);
}

.neon-rings-spinner .ring-3 {
    width: 40%;
    height: 40%;
    top: 30%;
    left: 30%;
    border-top: 2px solid #ff0080;
    border-right: 2px solid #8000ff;
    animation: neon-ring-rotate 1s linear infinite;
    filter: drop-shadow(0 0 4px #ff0080) drop-shadow(0 0 4px #8000ff);
}

@keyframes neon-ring-rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control neon rings spinner
const neonRingsSpinner = document.querySelector('.neon-rings-spinner');

// Change number of rings
function setRingCount(count) {
    neonRingsSpinner.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const ring = document.createElement('div');
        ring.className = \`ring ring-\${i + 1}\`;
        const size = 100 - (i * 20);
        ring.style.width = size + '%';
        ring.style.height = size + '%';
        ring.style.top = (100 - size) / 2 + '%';
        ring.style.left = (100 - size) / 2 + '%';
        
        // Generate random neon colors
        const colors = ['#00f3ff', '#ff00ff', '#00ff88', '#ffaa00', '#ff0080', '#8000ff'];
        ring.style.borderTopColor = colors[i % colors.length];
        ring.style.borderRightColor = colors[(i + 1) % colors.length];
        ring.style.animationDuration = (2 - i * 0.5) + 's';
        
        neonRingsSpinner.appendChild(ring);
    }
}

// Change glow intensity
function setNeonGlow(intensity) {
    document.querySelectorAll('.neon-rings-spinner .ring').forEach(ring => {
        ring.style.filter = \`drop-shadow(0 0 \${intensity}px currentColor)\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 61: Uiverse Particle Wave Spinner
    // ====================================================================
    loader61: {
        name: "Particle Wave Spinner",
        category: "spinner",
        html: `<div class="loader-container">
    <div class="particle-wave-spinner">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>
</div>`,
        css: `.particle-wave-spinner {
    position: relative;
    width: 70px;
    height: 70px;
}

.particle-wave-spinner .particle {
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    filter: drop-shadow(0 0 5px #3b82f6);
    animation: particle-wave 1.5s ease-in-out infinite;
}

.particle-wave-spinner .particle:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0s;
}

.particle-wave-spinner .particle:nth-child(2) {
    top: 20%;
    right: 20%;
    animation-delay: -0.1s;
}

.particle-wave-spinner .particle:nth-child(3) {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    animation-delay: -0.2s;
}

.particle-wave-spinner .particle:nth-child(4) {
    bottom: 20%;
    right: 20%;
    animation-delay: -0.3s;
}

.particle-wave-spinner .particle:nth-child(5) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: -0.4s;
}

@keyframes particle-wave {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 0.5;
    }
    25% {
        transform: translateY(-15px) scale(1.2);
        opacity: 1;
    }
    50% {
        transform: translateY(0) scale(1);
        opacity: 0.5;
    }
    75% {
        transform: translateY(15px) scale(0.8);
        opacity: 0.3;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control particle wave spinner
const particleWaveSpinner = document.querySelector('.particle-wave-spinner');

// Change number of particles
function setParticleCount(count) {
    particleWaveSpinner.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position particles in a circle
        const angle = (360 / count) * i;
        const radius = 35;
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.animationDelay = \`-\${i * 0.1}s\`;
        
        particleWaveSpinner.appendChild(particle);
    }
}

// Change wave pattern
function setWavePattern(pattern) {
    const keyframes = \`
        @keyframes particle-wave {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
            25% { transform: translateY(-\${pattern.height}px) scale(\${pattern.scale}); opacity: 1; }
            50% { transform: translateY(0) scale(1); opacity: 0.5; }
            75% { transform: translateY(\${pattern.height}px) scale(\${0.8}); opacity: 0.3; }
        }
    \`;
    
    // Add or update the keyframes
    const styleSheet = document.styleSheets[0];
    const existingRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'particle-wave'
    );
    
    if (existingRule) {
        styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
    }
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Change particle colors
function setParticleColors(color1, color2) {
    document.querySelectorAll('.particle-wave-spinner .particle').forEach(particle => {
        particle.style.background = \`linear-gradient(45deg, \${color1}, \${color2})\`;
    });
}`
    },
        // ====================================================================
    // TEMPLATE 62: Morphing Blob Loader
    // ====================================================================
    loader62: {
        name: "Morphing Blob Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="morphing-blob-loader">
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
        <svg>
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
            </defs>
        </svg>
    </div>
</div>`,
        css: `.morphing-blob-loader {
    position: relative;
    width: 80px;
    height: 80px;
    filter: url(#goo);
}

.morphing-blob-loader .blob {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    animation: morphBlob 3s ease-in-out infinite;
}

.morphing-blob-loader .blob:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: 0s;
}

.morphing-blob-loader .blob:nth-child(2) {
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    animation-delay: -1s;
}

.morphing-blob-loader .blob:nth-child(3) {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    animation-delay: -2s;
}

@keyframes morphBlob {
    0%, 100% {
        border-radius: 50%;
        transform: scale(1) translate(var(--tx, 0), var(--ty, 0));
    }
    33% {
        border-radius: 40% 60% 60% 40% / 60% 40% 60% 40%;
        transform: scale(1.1) translate(calc(var(--tx, 0) + 10px), calc(var(--ty, 0) + 10px));
    }
    66% {
        border-radius: 60% 40% 40% 60% / 40% 60% 40% 60%;
        transform: scale(0.9) translate(calc(var(--tx, 0) - 10px), calc(var(--ty, 0) - 10px));
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control morphing blob loader
const morphingBlobLoader = document.querySelector('.morphing-blob-loader');

// Change blob count
function setBlobCount(count) {
    // Remove existing blobs
    const existingBlobs = morphingBlobLoader.querySelectorAll('.blob');
    existingBlobs.forEach(blob => blob.remove());
    
    // Add new blobs
    for (let i = 0; i < count; i++) {
        const blob = document.createElement('div');
        blob.className = 'blob';
        
        // Position blobs in a circle
        const angle = (360 / count) * i;
        const radius = 25;
        const x = 50 + radius * Math.cos(angle * Math.PI / 180);
        const y = 50 + radius * Math.sin(angle * Math.PI / 180);
        
        blob.style.left = x + '%';
        blob.style.top = y + '%';
        blob.style.setProperty('--tx', \`calc(50% - \${x}%)\`);
        blob.style.setProperty('--ty', \`calc(50% - \${y}%)\`);
        blob.style.animationDelay = \`-\${i}s\`;
        
        morphingBlobLoader.appendChild(blob);
    }
}

// Change blob viscosity (blur amount)
function setBlobViscosity(blur) {
    const filter = morphingBlobLoader.querySelector('feGaussianBlur');
    if (filter) {
        filter.setAttribute('stdDeviation', blur);
    }
}

// Change blob colors
function setBlobColors(color1, color2) {
    document.querySelectorAll('.morphing-blob-loader .blob').forEach(blob => {
        blob.style.background = \`linear-gradient(45deg, \${color1}, \${color2})\`;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 63: Hexagonal Grid Loader
    // ====================================================================
    loader63: {
        name: "Hexagonal Grid Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="hexagonal-grid-loader">
        <div class="hex-row">
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
        </div>
        <div class="hex-row">
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
        </div>
        <div class="hex-row">
            <div class="hex"></div>
            <div class="hex"></div>
            <div class="hex"></div>
        </div>
    </div>
</div>`,
        css: `.hexagonal-grid-loader {
    position: relative;
    width: 100px;
    height: 100px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 4px;
    justify-content: center;
}

.hex-row {
    display: flex;
    gap: 4px;
    justify-content: center;
}

.hex-row:nth-child(1) .hex:nth-child(2),
.hex-row:nth-child(3) .hex:nth-child(2) {
    margin-left: 22px;
}

.hex {
    width: 20px;
    height: 23px;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3));
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    animation: hexPulse 1.5s ease-in-out infinite;
}

.hex-row:nth-child(1) .hex:nth-child(1) { animation-delay: 0s; }
.hex-row:nth-child(1) .hex:nth-child(2) { animation-delay: 0.1s; }
.hex-row:nth-child(1) .hex:nth-child(3) { animation-delay: 0.2s; }

.hex-row:nth-child(2) .hex:nth-child(1) { animation-delay: 0.3s; }
.hex-row:nth-child(2) .hex:nth-child(2) { animation-delay: 0.4s; }
.hex-row:nth-child(2) .hex:nth-child(3) { animation-delay: 0.5s; }
.hex-row:nth-child(2) .hex:nth-child(4) { animation-delay: 0.6s; }

.hex-row:nth-child(3) .hex:nth-child(1) { animation-delay: 0.7s; }
.hex-row:nth-child(3) .hex:nth-child(2) { animation-delay: 0.8s; }
.hex-row:nth-child(3) .hex:nth-child(3) { animation-delay: 0.9s; }

@keyframes hexPulse {
    0%, 100% {
        background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3));
        transform: scale(1);
    }
    50% {
        background: linear-gradient(135deg, #7c3aed, #ec4899);
        transform: scale(1.1);
        filter: drop-shadow(0 0 6px #7c3aed);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control hexagonal grid loader
const hexGridLoader = document.querySelector('.hexagonal-grid-loader');

// Change grid size
function setGridSize(rows, cols) {
    hexGridLoader.innerHTML = '';
    hexGridLoader.style.gridTemplateRows = \`repeat(\${rows}, 1fr)\`;
    
    for (let r = 0; r < rows; r++) {
        const hexRow = document.createElement('div');
        hexRow.className = 'hex-row';
        
        // Alternate row lengths for honeycomb pattern
        const hexCount = r % 2 === 0 ? cols : cols - 1;
        
        for (let h = 0; h < hexCount; h++) {
            const hex = document.createElement('div');
            hex.className = 'hex';
            hex.style.animationDelay = \`\${(r * cols + h) * 0.1}s\`;
            hexRow.appendChild(hex);
        }
        
        if (r % 2 === 0 && cols > 1) {
            hexRow.style.marginLeft = '22px';
        }
        
        hexGridLoader.appendChild(hexRow);
    }
}

// Change pulse pattern
function setPulsePattern(pattern) {
    const keyframes = \`
        @keyframes hexPulse {
            0%, 100% {
                background: linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(236, 72, 153, 0.3));
                transform: scale(1);
            }
            50% {
                background: linear-gradient(135deg, #7c3aed, #ec4899);
                transform: scale(\${pattern.scale});
                filter: drop-shadow(0 0 \${pattern.glow}px #7c3aed);
            }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const existingRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'hexPulse'
    );
    
    if (existingRule) {
        styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
    }
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}`
    },

    // ====================================================================
    // TEMPLATE 64: Kinetic Typography Loader
    // ====================================================================
    loader64: {
        name: "Kinetic Typography Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="kinetic-typography-loader">
        <span class="letter">L</span>
        <span class="letter">O</span>
        <span class="letter">A</span>
        <span class="letter">D</span>
        <span class="letter">I</span>
        <span class="letter">N</span>
        <span class="letter">G</span>
    </div>
</div>`,
        css: `.kinetic-typography-loader {
    display: flex;
    gap: 8px;
    height: 60px;
    align-items: center;
}

.kinetic-typography-loader .letter {
    font-family: 'Arial', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #7c3aed;
    display: inline-block;
    animation: kineticLetter 2s ease-in-out infinite;
    text-shadow: 0 2px 4px rgba(124, 58, 237, 0.3);
}

.kinetic-typography-loader .letter:nth-child(1) { animation-delay: 0s; }
.kinetic-typography-loader .letter:nth-child(2) { animation-delay: -0.15s; }
.kinetic-typography-loader .letter:nth-child(3) { animation-delay: -0.3s; }
.kinetic-typography-loader .letter:nth-child(4) { animation-delay: -0.45s; }
.kinetic-typography-loader .letter:nth-child(5) { animation-delay: -0.6s; }
.kinetic-typography-loader .letter:nth-child(6) { animation-delay: -0.75s; }
.kinetic-typography-loader .letter:nth-child(7) { animation-delay: -0.9s; }

@keyframes kineticLetter {
    0%, 40%, 100% {
        transform: translateY(0) scale(1);
        color: #7c3aed;
    }
    20% {
        transform: translateY(-20px) scale(1.2);
        color: #ec4899;
        text-shadow: 0 5px 15px rgba(236, 72, 153, 0.5);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control kinetic typography loader
const kineticLoader = document.querySelector('.kinetic-typography-loader');

// Change loading text
function setLoadingText(text) {
    kineticLoader.innerHTML = '';
    text.split('').forEach((char, index) => {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.textContent = char;
        letter.style.animationDelay = \`-\${index * 0.15}s\`;
        kineticLoader.appendChild(letter);
    });
}

// Change animation style
function setAnimationStyle(style) {
    const keyframes = \`
        @keyframes kineticLetter {
            0%, 40%, 100% {
                transform: translateY(0) scale(1);
                color: var(--primary-color);
            }
            20% {
                transform: translateY(\${style.height}px) scale(\${style.scale});
                color: var(--secondary-color);
                text-shadow: 0 5px 15px rgba(var(--secondary-rgb), 0.5);
            }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const existingRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'kineticLetter'
    );
    
    if (existingRule) {
        styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
    }
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Change font properties
function setFontProperties(fontFamily, fontSize, fontWeight) {
    document.querySelectorAll('.kinetic-typography-loader .letter').forEach(letter => {
        letter.style.fontFamily = fontFamily;
        letter.style.fontSize = fontSize + 'px';
        letter.style.fontWeight = fontWeight;
    });
}`
    },

    // ====================================================================
    // TEMPLATE 65: Circuit Board Loader
    // ====================================================================
    loader65: {
        name: "Circuit Board Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="circuit-board-loader">
        <div class="circuit-path"></div>
        <div class="circuit-node"></div>
        <div class="circuit-node"></div>
        <div class="circuit-node"></div>
        <div class="electron"></div>
    </div>
</div>`,
        css: `.circuit-board-loader {
    position: relative;
    width: 100px;
    height: 80px;
}

.circuit-path {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, transparent 49%, rgba(124, 58, 237, 0.3) 50%, transparent 51%) 0 0/20px 20px,
        linear-gradient(0deg, transparent 49%, rgba(124, 58, 237, 0.3) 50%, transparent 51%) 0 0/20px 20px;
    border: 2px solid rgba(124, 58, 237, 0.2);
    border-radius: 8px;
    box-shadow: 
        inset 0 0 20px rgba(124, 58, 237, 0.1),
        0 0 15px rgba(124, 58, 237, 0.2);
}

.circuit-node {
    position: absolute;
    width: 12px;
    height: 12px;
    background: linear-gradient(45deg, #7c3aed, #3b82f6);
    border-radius: 50%;
    filter: drop-shadow(0 0 5px #7c3aed);
    animation: circuitNodeGlow 2s ease-in-out infinite;
}

.circuit-node:nth-child(2) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
}

.circuit-node:nth-child(3) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -0.66s;
}

.circuit-node:nth-child(4) {
    bottom: 20%;
    right: 20%;
    animation-delay: -1.33s;
}

.electron {
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #00ff88, #00f3ff);
    border-radius: 50%;
    filter: drop-shadow(0 0 8px #00ff88);
    animation: electronTravel 3s linear infinite;
}

@keyframes circuitNodeGlow {
    0%, 100% {
        transform: scale(1);
        filter: drop-shadow(0 0 5px #7c3aed);
    }
    50% {
        transform: scale(1.3);
        filter: drop-shadow(0 0 12px #ec4899);
    }
}

@keyframes electronTravel {
    0% {
        top: 20%;
        left: 20%;
        opacity: 1;
    }
    25% {
        top: 20%;
        left: 80%;
    }
    50% {
        top: 80%;
        left: 80%;
        opacity: 0.8;
    }
    75% {
        top: 80%;
        left: 20%;
    }
    100% {
        top: 20%;
        left: 20%;
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control circuit board loader
const circuitLoader = document.querySelector('.circuit-board-loader');

// Change grid density
function setGridDensity(density) {
    const path = circuitLoader.querySelector('.circuit-path');
    path.style.background = \`
        linear-gradient(90deg, transparent 49%, rgba(124, 58, 237, 0.3) 50%, transparent 51%) 0 0/\${density}px \${density}px,
        linear-gradient(0deg, transparent 49%, rgba(124, 58, 237, 0.3) 50%, transparent 51%) 0 0/\${density}px \${density}px
    \`;
}

// Change node positions
function setNodePositions(positions) {
    const nodes = circuitLoader.querySelectorAll('.circuit-node');
    positions.forEach((pos, index) => {
        if (nodes[index]) {
            nodes[index].style.top = pos.y + '%';
            nodes[index].style.left = pos.x + '%';
        }
    });
    
    // Update electron path
    const electron = circuitLoader.querySelector('.electron');
    if (electron && positions.length > 0) {
        const keyframes = \`
            @keyframes electronTravel {
                \${positions.map((pos, i) => \`
                    \${(i / positions.length) * 100}% {
                        top: \${pos.y}%;
                        left: \${pos.x}%;
                        opacity: \${i === 0 || i === positions.length - 1 ? 1 : 0.8};
                    }
                \`).join('')}
            }
        \`;
        
        const styleSheet = document.styleSheets[0];
        const existingRule = Array.from(styleSheet.cssRules).find(rule => 
            rule.name === 'electronTravel'
        );
        
        if (existingRule) {
            styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
        }
        
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
}

// Change electron speed
function setElectronSpeed(speed) {
    const electron = circuitLoader.querySelector('.electron');
    electron.style.animationDuration = speed + 's';
}`
    },

    // ====================================================================
    // TEMPLATE 66: Fluid Simulation Loader
    // ====================================================================
    loader66: {
        name: "Fluid Simulation Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="fluid-simulation-loader">
        <div class="fluid-wave"></div>
        <div class="fluid-wave"></div>
        <div class="fluid-wave"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
    </div>
</div>`,
        css: `.fluid-simulation-loader {
    position: relative;
    width: 100px;
    height: 60px;
    overflow: hidden;
    border-radius: 10px;
    background: linear-gradient(180deg, 
        rgba(59, 130, 246, 0.1) 0%, 
        rgba(124, 58, 237, 0.2) 100%);
    box-shadow: 
        inset 0 0 30px rgba(59, 130, 246, 0.3),
        0 0 20px rgba(59, 130, 246, 0.2);
}

.fluid-wave {
    position: absolute;
    width: 200%;
    height: 30px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(59, 130, 246, 0.4), 
        rgba(124, 58, 237, 0.6), 
        rgba(59, 130, 246, 0.4), 
        transparent);
    border-radius: 50% 50% 0 0;
    animation: fluidWave 4s ease-in-out infinite;
}

.fluid-wave:nth-child(1) {
    top: 40%;
    animation-delay: 0s;
    height: 25px;
}

.fluid-wave:nth-child(2) {
    top: 50%;
    animation-delay: -1s;
    height: 20px;
    opacity: 0.7;
}

.fluid-wave:nth-child(3) {
    top: 60%;
    animation-delay: -2s;
    height: 15px;
    opacity: 0.5;
}

.bubble {
    position: absolute;
    background: radial-gradient(circle at 30% 30%, 
        rgba(255, 255, 255, 0.9), 
        rgba(255, 255, 255, 0.3), 
        transparent);
    border-radius: 50%;
    animation: bubbleRise 3s ease-in infinite;
    filter: blur(1px);
}

.bubble:nth-child(4) {
    width: 12px;
    height: 12px;
    left: 20%;
    bottom: -10px;
    animation-delay: 0s;
}

.bubble:nth-child(5) {
    width: 8px;
    height: 8px;
    left: 50%;
    bottom: -10px;
    animation-delay: -1s;
}

.bubble:nth-child(6) {
    width: 10px;
    height: 10px;
    left: 80%;
    bottom: -10px;
    animation-delay: -2s;
}

@keyframes fluidWave {
    0% {
        transform: translateX(-50%) translateY(0);
    }
    50% {
        transform: translateX(0) translateY(-5px);
    }
    100% {
        transform: translateX(-50%) translateY(0);
    }
}

@keyframes bubbleRise {
    0% {
        transform: translateY(0) scale(0.5);
        opacity: 0;
    }
    10% {
        opacity: 0.8;
    }
    90% {
        opacity: 0.8;
    }
    100% {
        transform: translateY(-70px) scale(1.2);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control fluid simulation loader
const fluidLoader = document.querySelector('.fluid-simulation-loader');

// Change fluid color
function setFluidColor(color) {
    const rgb = hexToRgb(color);
    fluidLoader.style.background = \`linear-gradient(180deg, 
        rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, 0.1) 0%, 
        rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, 0.2) 100%)\`;
    
    // Update waves
    document.querySelectorAll('.fluid-wave').forEach(wave => {
        wave.style.background = \`linear-gradient(90deg, 
            transparent, 
            rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, 0.4), 
            rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, 0.6), 
            rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, 0.4), 
            transparent)\`;
    });
}

// Change wave count
function setWaveCount(count) {
    // Remove existing waves
    const existingWaves = fluidLoader.querySelectorAll('.fluid-wave');
    existingWaves.forEach(wave => wave.remove());
    
    // Add new waves
    for (let i = 0; i < count; i++) {
        const wave = document.createElement('div');
        wave.className = 'fluid-wave';
        wave.style.top = \`\${40 + (i * 10)}%\`;
        wave.style.height = \`\${25 - (i * 5)}px\`;
        wave.style.opacity = \`\${1 - (i * 0.3)}\`;
        wave.style.animationDelay = \`-\${i}s\`;
        fluidLoader.appendChild(wave);
    }
}

// Change bubble count
function setBubbleCount(count) {
    // Remove existing bubbles
    const existingBubbles = fluidLoader.querySelectorAll('.bubble');
    existingBubbles.forEach(bubble => bubble.remove());
    
    // Add new bubbles
    for (let i = 0; i < count; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = 8 + Math.random() * 8;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = \`\${i * (80 / (count - 1)) + 10}%\`;
        bubble.style.animationDelay = \`-\${i}s\`;
        fluidLoader.appendChild(bubble);
    }
}

// Helper function to convert hex to rgb
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 124, g: 58, b: 237 };
}`
    },
        // ====================================================================
    // TEMPLATE 67: Parallax Layers Loader
    // ====================================================================
    loader67: {
        name: "Parallax Layers Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="parallax-layers-loader">
        <div class="layer layer-1"></div>
        <div class="layer layer-2"></div>
        <div class="layer layer-3"></div>
        <div class="layer layer-4"></div>
    </div>
</div>`,
        css: `.parallax-layers-loader {
    position: relative;
    width: 100px;
    height: 100px;
    perspective: 500px;
    transform-style: preserve-3d;
}

.parallax-layers-loader .layer {
    position: absolute;
    border: 2px solid;
    border-radius: 50%;
    animation: parallaxFloat 4s ease-in-out infinite;
}

.parallax-layers-loader .layer-1 {
    width: 100%;
    height: 100%;
    border-color: rgba(124, 58, 237, 0.8);
    box-shadow: 
        0 0 30px rgba(124, 58, 237, 0.4),
        inset 0 0 20px rgba(124, 58, 237, 0.2);
    transform: translateZ(-100px);
    animation-delay: 0s;
}

.parallax-layers-loader .layer-2 {
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    border-color: rgba(236, 72, 153, 0.7);
    box-shadow: 
        0 0 25px rgba(236, 72, 153, 0.3),
        inset 0 0 15px rgba(236, 72, 153, 0.15);
    transform: translateZ(-50px);
    animation-delay: -1s;
}

.parallax-layers-loader .layer-3 {
    width: 60%;
    height: 60%;
    top: 20%;
    left: 20%;
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow: 
        0 0 20px rgba(59, 130, 246, 0.25),
        inset 0 0 10px rgba(59, 130, 246, 0.1);
    transform: translateZ(0px);
    animation-delay: -2s;
}

.parallax-layers-loader .layer-4 {
    width: 40%;
    height: 40%;
    top: 30%;
    left: 30%;
    border-color: rgba(16, 185, 129, 0.5);
    box-shadow: 
        0 0 15px rgba(16, 185, 129, 0.2),
        inset 0 0 5px rgba(16, 185, 129, 0.05);
    transform: translateZ(50px);
    animation-delay: -3s;
}

@keyframes parallaxFloat {
    0%, 100% {
        transform: 
            translateZ(var(--z, 0px))
            rotateX(0deg)
            rotateY(0deg);
    }
    25% {
        transform: 
            translateZ(calc(var(--z, 0px) + 20px))
            rotateX(15deg)
            rotateY(15deg);
    }
    50% {
        transform: 
            translateZ(var(--z, 0px))
            rotateX(0deg)
            rotateY(30deg);
    }
    75% {
        transform: 
            translateZ(calc(var(--z, 0px) - 20px))
            rotateX(-15deg)
            rotateY(15deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control parallax layers loader
const parallaxLoader = document.querySelector('.parallax-layers-loader');

// Change number of layers
function setLayerCount(count) {
    parallaxLoader.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const layer = document.createElement('div');
        layer.className = \`layer layer-\${i + 1}\`;
        
        const size = 100 - (i * (60 / (count - 1)));
        const zDepth = -100 + (i * (150 / (count - 1)));
        
        layer.style.width = size + '%';
        layer.style.height = size + '%';
        layer.style.top = (100 - size) / 2 + '%';
        layer.style.left = (100 - size) / 2 + '%';
        layer.style.transform = \`translateZ(\${zDepth}px)\`;
        layer.style.animationDelay = \`-\${i}s\`;
        
        // Generate gradient colors
        const colors = [
            'rgba(124, 58, 237, 0.8)',
            'rgba(236, 72, 153, 0.7)',
            'rgba(59, 130, 246, 0.6)',
            'rgba(16, 185, 129, 0.5)',
            'rgba(245, 158, 11, 0.4)',
            'rgba(239, 68, 68, 0.3)'
        ];
        
        layer.style.borderColor = colors[i % colors.length];
        
        parallaxLoader.appendChild(layer);
    }
}

// Change perspective depth
function setPerspectiveDepth(depth) {
    parallaxLoader.style.perspective = depth + 'px';
}

// Adjust animation speed
function setParallaxSpeed(speed) {
    document.querySelectorAll('.parallax-layers-loader .layer').forEach(layer => {
        layer.style.animationDuration = speed + 's';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 68: Glassmorphism Morph Loader
    // ====================================================================
    loader68: {
        name: "Glassmorphism Morph Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="glassmorphism-morph-loader">
        <div class="glass-shape shape-1"></div>
        <div class="glass-shape shape-2"></div>
        <div class="glass-shape shape-3"></div>
    </div>
</div>`,
        css: `.glassmorphism-morph-loader {
    position: relative;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 0 0 1px rgba(255, 255, 255, 0.05);
    overflow: hidden;
}

.glassmorphism-morph-loader::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: conic-gradient(
        from 0deg,
        transparent,
        rgba(124, 58, 237, 0.3),
        rgba(236, 72, 153, 0.3),
        rgba(59, 130, 246, 0.3),
        transparent
    );
    animation: glassRotate 4s linear infinite;
}

.glassmorphism-morph-loader .glass-shape {
    position: absolute;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: glassMorph 3s ease-in-out infinite;
    box-shadow: 
        0 8px 16px rgba(0, 0, 0, 0.1),
        inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.glassmorphism-morph-loader .shape-1 {
    width: 40px;
    height: 40px;
    top: 20%;
    left: 20%;
    animation-delay: 0s;
}

.glassmorphism-morph-loader .shape-2 {
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -1s;
}

.glassmorphism-morph-loader .shape-3 {
    width: 35px;
    height: 35px;
    bottom: 20%;
    right: 20%;
    animation-delay: -2s;
}

@keyframes glassRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes glassMorph {
    0%, 100% {
        border-radius: 50% 30% 50% 30%;
        transform: scale(1) translate(var(--tx, 0), var(--ty, 0));
    }
    33% {
        border-radius: 30% 50% 30% 50%;
        transform: scale(1.2) translate(calc(var(--tx, 0) + 5px), calc(var(--ty, 0) + 5px));
    }
    66% {
        border-radius: 40% 40% 60% 60%;
        transform: scale(0.9) translate(calc(var(--tx, 0) - 5px), calc(var(--ty, 0) - 5px));
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control glassmorphism loader
const glassLoader = document.querySelector('.glassmorphism-morph-loader');

// Change glass properties
function setGlassProperties(blur, opacity, border) {
    glassLoader.style.backdropFilter = \`blur(\${blur}px)\`;
    glassLoader.style.background = \`rgba(255, 255, 255, \${opacity})\`;
    glassLoader.style.border = \`1px solid rgba(255, 255, 255, \${border})\`;
    
    // Update shapes
    document.querySelectorAll('.glass-shape').forEach(shape => {
        shape.style.backdropFilter = \`blur(\${blur / 4}px)\`;
        shape.style.background = \`rgba(255, 255, 255, \${opacity * 3})\`;
        shape.style.border = \`1px solid rgba(255, 255, 255, \${border * 2})\`;
    });
}

// Change shape count and pattern
function setShapePattern(count, pattern) {
    // Remove existing shapes
    const existingShapes = glassLoader.querySelectorAll('.glass-shape');
    existingShapes.forEach(shape => shape.remove());
    
    // Add new shapes based on pattern
    for (let i = 0; i < count; i++) {
        const shape = document.createElement('div');
        shape.className = \`glass-shape shape-\${i + 1}\`;
        
        // Different patterns
        let size, top, left;
        switch(pattern) {
            case 'random':
                size = 25 + Math.random() * 25;
                top = Math.random() * 70 + 15;
                left = Math.random() * 70 + 15;
                break;
            case 'circle':
                const angle = (360 / count) * i;
                const radius = 30;
                top = 50 + radius * Math.sin(angle * Math.PI / 180);
                left = 50 + radius * Math.cos(angle * Math.PI / 180);
                size = 20 + (i % 3) * 10;
                break;
            case 'grid':
                const row = Math.floor(i / 3);
                const col = i % 3;
                top = 20 + row * 30;
                left = 20 + col * 30;
                size = 25;
                break;
        }
        
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        shape.style.top = top + '%';
        shape.style.left = left + '%';
        shape.style.animationDelay = \`-\${i}s\`;
        
        glassLoader.appendChild(shape);
    }
}

// Change conic gradient colors
function setGradientColors(colors) {
    const gradient = colors.map((color, i) => 
        \`rgba(\${color}, 0.3) \${(i / colors.length) * 100}%\`
    ).join(', ');
    
    glassLoader.style.background = \`conic-gradient(from 0deg, transparent, \${gradient}, transparent)\`;
}`
    },

    // ====================================================================
    // TEMPLATE 69: Isometric Grid Loader
    // ====================================================================
    loader69: {
        name: "Isometric Grid Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="isometric-grid-loader">
        <div class="grid-plane"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</div>`,
        css: `.isometric-grid-loader {
    position: relative;
    width: 120px;
    height: 100px;
    transform-style: preserve-3d;
    transform: rotateX(60deg) rotateZ(45deg);
    animation: gridRotate 8s linear infinite;
}

.isometric-grid-loader .grid-plane {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px) 0 0/20px 20px,
        linear-gradient(0deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px) 0 0/20px 20px;
    transform: translateZ(-20px);
}

.isometric-grid-loader .cube {
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transform-style: preserve-3d;
    animation: cubeFloat 3s ease-in-out infinite;
    box-shadow: 
        0 0 10px rgba(124, 58, 237, 0.5),
        inset 0 0 5px rgba(255, 255, 255, 0.3);
}

.isometric-grid-loader .cube::before,
.isometric-grid-loader .cube::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
}

.isometric-grid-loader .cube::before {
    transform: rotateX(90deg) translateZ(10px);
    opacity: 0.6;
}

.isometric-grid-loader .cube::after {
    transform: rotateY(90deg) translateZ(10px);
    opacity: 0.4;
}

.isometric-grid-loader .cube:nth-child(2) {
    top: 40px;
    left: 40px;
    animation-delay: -1s;
}

.isometric-grid-loader .cube:nth-child(3) {
    top: 20px;
    left: 80px;
    animation-delay: -2s;
}

.isometric-grid-loader .cube:nth-child(4) {
    top: 60px;
    left: 60px;
    animation-delay: -3s;
}

@keyframes gridRotate {
    0% { transform: rotateX(60deg) rotateZ(45deg); }
    100% { transform: rotateX(60deg) rotateZ(405deg); }
}

@keyframes cubeFloat {
    0%, 100% {
        transform: translateZ(0);
    }
    50% {
        transform: translateZ(30px);
        box-shadow: 
            0 0 20px rgba(124, 58, 237, 0.8),
            inset 0 0 10px rgba(255, 255, 255, 0.5);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control isometric grid loader
const isoLoader = document.querySelector('.isometric-grid-loader');

// Change grid density
function setGridDensity(cellSize) {
    const plane = isoLoader.querySelector('.grid-plane');
    plane.style.background = \`
        linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px) 0 0/\${cellSize}px \${cellSize}px,
        linear-gradient(0deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px) 0 0/\${cellSize}px \${cellSize}px
    \`;
    
    // Update cube size to match grid
    document.querySelectorAll('.cube').forEach(cube => {
        cube.style.width = cellSize + 'px';
        cube.style.height = cellSize + 'px';
    });
}

// Change cube arrangement
function setCubeArrangement(arrangement) {
    // Remove existing cubes (keep grid plane)
    const existingCubes = isoLoader.querySelectorAll('.cube');
    existingCubes.forEach(cube => cube.remove());
    
    // Add new cubes based on arrangement
    arrangement.forEach((pos, i) => {
        const cube = document.createElement('div');
        cube.className = 'cube';
        cube.style.top = pos.y + 'px';
        cube.style.left = pos.x + 'px';
        cube.style.animationDelay = \`-\${i}s\`;
        
        // Custom colors for each cube
        const colors = [
            ['#7c3aed', '#ec4899'],
            ['#3b82f6', '#8b5cf6'],
            ['#10b981', '#059669'],
            ['#f59e0b', '#fbbf24'],
            ['#ef4444', '#f97316']
        ];
        
        cube.style.background = \`linear-gradient(135deg, \${colors[i % colors.length][0]}, \${colors[i % colors.length][1]})\`;
        
        isoLoader.appendChild(cube);
    });
}

// Change view angle
function setViewAngle(xAngle, zAngle) {
    isoLoader.style.transform = \`rotateX(\${xAngle}deg) rotateZ(\${zAngle}deg)\`;
}

// Add more cubes dynamically
function addCube(x, y, color1, color2) {
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.style.top = y + 'px';
    cube.style.left = x + 'px';
    cube.style.background = \`linear-gradient(135deg, \${color1}, \${color2})\`;
    cube.style.animationDelay = \`-\${document.querySelectorAll('.cube').length}s\`;
    
    isoLoader.appendChild(cube);
}`
    },

    // ====================================================================
    // TEMPLATE 70: Data Stream Loader
    // ====================================================================
    loader70: {
        name: "Data Stream Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="data-stream-loader">
        <div class="stream-line"></div>
        <div class="stream-line"></div>
        <div class="stream-line"></div>
        <div class="data-node"></div>
        <div class="data-node"></div>
        <div class="data-node"></div>
    </div>
</div>`,
        css: `.data-stream-loader {
    position: relative;
    width: 120px;
    height: 80px;
    background: rgba(15, 23, 42, 0.05);
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(124, 58, 237, 0.1);
}

.data-stream-loader::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(124, 58, 237, 0.05) 50%,
        transparent
    );
    animation: dataScan 2s linear infinite;
}

.data-stream-loader .stream-line {
    position: absolute;
    height: 2px;
    background: linear-gradient(
        90deg,
        transparent,
        #7c3aed,
        #ec4899,
        transparent
    );
    filter: drop-shadow(0 0 3px #7c3aed);
    animation: streamFlow 1.5s linear infinite;
}

.data-stream-loader .stream-line:nth-child(1) {
    top: 20%;
    width: 80%;
    left: 10%;
    animation-delay: 0s;
}

.data-stream-loader .stream-line:nth-child(2) {
    top: 50%;
    width: 90%;
    left: 5%;
    animation-delay: -0.5s;
}

.data-stream-loader .stream-line:nth-child(3) {
    top: 80%;
    width: 70%;
    left: 15%;
    animation-delay: -1s;
}

.data-stream-loader .data-node {
    position: absolute;
    width: 12px;
    height: 12px;
    background: radial-gradient(circle at center, #3b82f6, #1d4ed8);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px #3b82f6);
    animation: nodePulse 2s ease-in-out infinite;
}

.data-stream-loader .data-node:nth-child(4) {
    top: 20%;
    left: 30%;
    animation-delay: 0s;
}

.data-stream-loader .data-node:nth-child(5) {
    top: 50%;
    left: 60%;
    animation-delay: -0.66s;
}

.data-stream-loader .data-node:nth-child(6) {
    top: 80%;
    left: 40%;
    animation-delay: -1.33s;
}

@keyframes dataScan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes streamFlow {
    0% {
        background-position: -100% 0;
        opacity: 0;
    }
    10%, 90% {
        opacity: 1;
    }
    100% {
        background-position: 200% 0;
        opacity: 0;
    }
}

@keyframes nodePulse {
    0%, 100% {
        transform: scale(1);
        filter: drop-shadow(0 0 6px #3b82f6);
    }
    50% {
        transform: scale(1.3);
        filter: drop-shadow(0 0 12px #60a5fa);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control data stream loader
const dataStreamLoader = document.querySelector('.data-stream-loader');

// Simulate real data flow
function simulateDataFlow(packetCount) {
    // Clear existing stream lines
    const existingLines = dataStreamLoader.querySelectorAll('.stream-line');
    existingLines.forEach(line => line.remove());
    
    // Add new stream lines for each data packet
    for (let i = 0; i < packetCount; i++) {
        const line = document.createElement('div');
        line.className = 'stream-line';
        
        // Randomize stream properties
        const top = 10 + Math.random() * 80;
        const width = 60 + Math.random() * 30;
        const left = (100 - width) / 2;
        const speed = 1 + Math.random() * 2;
        const delay = Math.random() * 2;
        
        line.style.top = top + '%';
        line.style.width = width + '%';
        line.style.left = left + '%';
        line.style.animationDuration = speed + 's';
        line.style.animationDelay = \`-\${delay}s\`;
        
        // Random color for each data packet
        const colors = [
            ['#7c3aed', '#ec4899'],
            ['#3b82f6', '#8b5cf6'],
            ['#10b981', '#059669'],
            ['#f59e0b', '#fbbf24']
        ];
        const colorPair = colors[Math.floor(Math.random() * colors.length)];
        line.style.background = \`linear-gradient(90deg, transparent, \${colorPair[0]}, \${colorPair[1]}, transparent)\`;
        
        dataStreamLoader.appendChild(line);
    }
}

// Add data nodes dynamically
function addDataNode(x, y, size, color) {
    const node = document.createElement('div');
    node.className = 'data-node';
    node.style.left = x + '%';
    node.style.top = y + '%';
    node.style.width = size + 'px';
    node.style.height = size + 'px';
    node.style.background = \`radial-gradient(circle at center, \${color}, \${darkenColor(color, 0.3)})\`;
    node.style.animationDelay = \`-\${document.querySelectorAll('.data-node').length}s\`;
    
    dataStreamLoader.appendChild(node);
}

// Change data stream background
function setStreamBackground(color, intensity) {
    const rgb = hexToRgb(color);
    dataStreamLoader.style.background = \`rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, \${intensity})\`;
    dataStreamLoader.style.borderColor = \`rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, \${intensity * 2})\`;
}

// Helper function to darken color
function darkenColor(hex, percent) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    
    r = Math.floor(r * (1 - percent));
    g = Math.floor(g * (1 - percent));
    b = Math.floor(b * (1 - percent));
    
    return \`#\${r.toString(16).padStart(2, '0')}\${g.toString(16).padStart(2, '0')}\${b.toString(16).padStart(2, '0')}\`;
}`
    },

    // ====================================================================
    // TEMPLATE 71: Holographic Interface Loader
    // ====================================================================
    loader71: {
        name: "Holographic Interface Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="holographic-interface-loader">
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="hologram-line"></div>
        <div class="interface-dot"></div>
        <div class="interface-dot"></div>
        <div class="interface-dot"></div>
    </div>
</div>`,
        css: `.holographic-interface-loader {
    position: relative;
    width: 120px;
    height: 80px;
    background: 
        linear-gradient(135deg, 
            rgba(0, 243, 255, 0.05) 0%, 
            rgba(255, 0, 255, 0.05) 100%);
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(0, 243, 255, 0.2);
    box-shadow: 
        0 0 30px rgba(0, 243, 255, 0.3),
        inset 0 0 20px rgba(255, 0, 255, 0.1);
}

.holographic-interface-loader::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 243, 255, 0.05) 2px,
            rgba(0, 243, 255, 0.05) 4px
        );
    animation: hologramScan 1s linear infinite;
}

.holographic-interface-loader::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 0, 255, 0.1),
        transparent
    );
    animation: hologramGlow 2s ease-in-out infinite;
}

.holographic-interface-loader .hologram-line {
    position: absolute;
    height: 1px;
    background: linear-gradient(
        90deg,
        transparent,
        #00f3ff,
        #ff00ff,
        transparent
    );
    filter: drop-shadow(0 0 3px #00f3ff);
    animation: lineScan 3s linear infinite;
}

.holographic-interface-loader .hologram-line:nth-child(1) {
    top: 25%;
    width: 100%;
    animation-delay: 0s;
}

.holographic-interface-loader .hologram-line:nth-child(2) {
    top: 50%;
    width: 100%;
    animation-delay: -1s;
}

.holographic-interface-loader .hologram-line:nth-child(3) {
    top: 75%;
    width: 100%;
    animation-delay: -2s;
}

.holographic-interface-loader .interface-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    background: radial-gradient(circle at center, #00f3ff, #ff00ff);
    border-radius: 50%;
    filter: drop-shadow(0 0 8px #00f3ff);
    animation: interfaceDot 2s ease-in-out infinite;
}

.holographic-interface-loader .interface-dot:nth-child(4) {
    top: 25%;
    left: 30%;
    animation-delay: 0s;
}

.holographic-interface-loader .interface-dot:nth-child(5) {
    top: 50%;
    left: 60%;
    animation-delay: -0.66s;
}

.holographic-interface-loader .interface-dot:nth-child(6) {
    top: 75%;
    left: 40%;
    animation-delay: -1.33s;
}

@keyframes hologramScan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

@keyframes hologramGlow {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
}

@keyframes lineScan {
    0% {
        background-position: -100% 0;
        opacity: 0;
    }
    10%, 90% {
        opacity: 1;
    }
    100% {
        background-position: 200% 0;
        opacity: 0;
    }
}

@keyframes interfaceDot {
    0%, 100% {
        transform: translateY(0) scale(1);
        filter: drop-shadow(0 0 8px #00f3ff);
    }
    50% {
        transform: translateY(-10px) scale(1.3);
        filter: drop-shadow(0 0 15px #ff00ff);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control holographic interface loader
const holographicLoader = document.querySelector('.holographic-interface-loader');

// Create interactive hologram
function createInteractiveHologram(density) {
    // Clear existing elements except pseudo-elements
    const existingLines = holographicLoader.querySelectorAll('.hologram-line');
    const existingDots = holographicLoader.querySelectorAll('.interface-dot');
    existingLines.forEach(line => line.remove());
    existingDots.forEach(dot => dot.remove());
    
    // Create scan lines
    for (let i = 0; i < density; i++) {
        const line = document.createElement('div');
        line.className = 'hologram-line';
        line.style.top = \`\${(i + 1) * (100 / (density + 1))}%\`;
        line.style.animationDelay = \`-\${i * 0.5}s\`;
        
        // Randomize line properties
        const width = 80 + Math.random() * 20;
        line.style.width = width + '%';
        line.style.left = (100 - width) / 2 + '%';
        
        holographicLoader.appendChild(line);
    }
    
    // Create interface dots
    for (let i = 0; i < density * 2; i++) {
        const dot = document.createElement('div');
        dot.className = 'interface-dot';
        
        // Position dots in grid pattern
        const row = Math.floor(i / 3);
        const col = i % 3;
        const top = 20 + row * 30;
        const left = 20 + col * 30;
        const size = 8 + Math.random() * 6;
        
        dot.style.top = top + '%';
        dot.style.left = left + '%';
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.animationDelay = \`-\${i * 0.33}s\`;
        
        // Random neon color
        const neonColors = [
            ['#00f3ff', '#ff00ff'],
            ['#00ff88', '#00f3ff'],
            ['#ff0080', '#8000ff'],
            ['#ffaa00', '#ff5500']
        ];
        const colors = neonColors[Math.floor(Math.random() * neonColors.length)];
        dot.style.background = \`radial-gradient(circle at center, \${colors[0]}, \${colors[1]})\`;
        
        holographicLoader.appendChild(dot);
    }
}

// Change hologram theme
function setHologramTheme(primaryColor, secondaryColor) {
    const primaryRGB = hexToRgb(primaryColor);
    const secondaryRGB = hexToRgb(secondaryColor);
    
    // Update background gradient
    holographicLoader.style.background = \`
        linear-gradient(135deg, 
            rgba(\${primaryRGB.r}, \${primaryRGB.g}, \${primaryRGB.b}, 0.05) 0%, 
            rgba(\${secondaryRGB.r}, \${secondaryRGB.g}, \${secondaryRGB.b}, 0.05) 100%)
    \`;
    
    // Update border and shadow
    holographicLoader.style.borderColor = \`rgba(\${primaryRGB.r}, \${primaryRGB.g}, \${primaryRGB.b}, 0.2)\`;
    holographicLoader.style.boxShadow = \`
        0 0 30px rgba(\${primaryRGB.r}, \${primaryRGB.g}, \${primaryRGB.b}, 0.3),
        inset 0 0 20px rgba(\${secondaryRGB.r}, \${secondaryRGB.g}, \${secondaryRGB.b}, 0.1)
    \`;
    
    // Update scan lines
    document.querySelectorAll('.hologram-line').forEach(line => {
        line.style.background = \`
            linear-gradient(90deg,
                transparent,
                \${primaryColor},
                \${secondaryColor},
                transparent)
        \`;
    });
    
    // Update interface dots
    document.querySelectorAll('.interface-dot').forEach(dot => {
        dot.style.background = \`radial-gradient(circle at center, \${primaryColor}, \${secondaryColor})\`;
    });
}

// Add real-time data display
function addDataDisplay(data) {
    const display = document.createElement('div');
    display.className = 'hologram-data';
    display.style.cssText = \`
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        font-family: 'Courier New', monospace;
        font-size: 10px;
        color: #00f3ff;
        text-shadow: 0 0 5px #00f3ff;
        opacity: 0.8;
    \`;
    
    // Format data for display
    const lines = [];
    for (const key in data) {
        lines.push(\`\${key.padEnd(10)}: \${data[key]}\`);
    }
    display.textContent = lines.join('\\n');
    
    holographicLoader.appendChild(display);
}

// Animate data flow between dots
function animateDataFlow() {
    const dots = document.querySelectorAll('.interface-dot');
    
    dots.forEach((dot, i) => {
        const nextDot = dots[(i + 1) % dots.length];
        
        // Create connection line
        const line = document.createElement('div');
        line.className = 'data-connection';
        line.style.cssText = \`
            position: absolute;
            background: linear-gradient(to right, #00f3ff, #ff00ff);
            height: 1px;
            border-radius: 1px;
            filter: drop-shadow(0 0 3px #00f3ff);
            animation: dataFlow 1s linear infinite;
            z-index: 1;
        \`;
        
        // Calculate positions
        const rect1 = dot.getBoundingClientRect();
        const rect2 = nextDot.getBoundingClientRect();
        const containerRect = holographicLoader.getBoundingClientRect();
        
        const x1 = rect1.left - containerRect.left + rect1.width / 2;
        const y1 = rect1.top - containerRect.top + rect1.height / 2;
        const x2 = rect2.left - containerRect.left + rect2.width / 2;
        const y2 = rect2.top - containerRect.top + rect2.height / 2;
        
        // Set line properties
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = length + 'px';
        line.style.left = x1 + 'px';
        line.style.top = y1 + 'px';
        line.style.transform = \`rotate(\${angle}deg)\`;
        line.style.transformOrigin = '0 0';
        line.style.animationDelay = \`-\${i * 0.2}s\`;
        
        holographicLoader.appendChild(line);
    });
}`
    },
    // ====================================================================
    // TEMPLATE 72: 3D Starfield Loader
    // ====================================================================
    loader72: {
        name: "3D Starfield Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="starfield-loader">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
    </div>
</div>`,
        css: `.starfield-loader {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    perspective: 600px;
    animation: starfieldRotate 20s linear infinite;
}

.starfield-loader .star {
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    border-radius: 50%;
    filter: drop-shadow(0 0 6px #7c3aed);
    animation: starFloat 4s ease-in-out infinite;
}

.starfield-loader .star:nth-child(1) {
    top: 20%;
    left: 20%;
    animation-delay: 0s;
    transform: translateZ(-50px);
}

.starfield-loader .star:nth-child(2) {
    top: 40%;
    left: 60%;
    animation-delay: -1s;
    transform: translateZ(-30px);
}

.starfield-loader .star:nth-child(3) {
    top: 70%;
    left: 30%;
    animation-delay: -2s;
    transform: translateZ(-10px);
}

.starfield-loader .star:nth-child(4) {
    top: 30%;
    left: 70%;
    animation-delay: -3s;
    transform: translateZ(10px);
}

.starfield-loader .star:nth-child(5) {
    top: 80%;
    left: 80%;
    animation-delay: -4s;
    transform: translateZ(30px);
}

@keyframes starfieldRotate {
    0% {
        transform: rotateX(60deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(60deg) rotateY(360deg);
    }
}

@keyframes starFloat {
    0%, 100% {
        transform: translateZ(var(--z)) scale(1);
        opacity: 0.7;
    }
    50% {
        transform: translateZ(calc(var(--z) + 40px)) scale(1.3);
        opacity: 1;
        filter: drop-shadow(0 0 12px #ec4899);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control 3D starfield loader
const starfieldLoader = document.querySelector('.starfield-loader');

// Create starfield with dynamic stars
function createStarfield(starCount) {
    starfieldLoader.innerHTML = '';
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random positioning
        const top = Math.random() * 90 + 5;
        const left = Math.random() * 90 + 5;
        const zDepth = -50 + Math.random() * 100;
        const delay = Math.random() * 4;
        const size = 6 + Math.random() * 6;
        
        star.style.top = top + '%';
        star.style.left = left + '%';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.setProperty('--z', zDepth + 'px');
        star.style.animationDelay = -delay + 's';
        
        // Random colors
        const colors = [
            ['#7c3aed', '#ec4899'],
            ['#3b82f6', '#8b5cf6'],
            ['#10b981', '#059669'],
            ['#f59e0b', '#fbbf24']
        ];
        const colorPair = colors[Math.floor(Math.random() * colors.length)];
        star.style.background = \`linear-gradient(45deg, \${colorPair[0]}, \${colorPair[1]})\`;
        
        starfieldLoader.appendChild(star);
    }
}

// Change rotation speed
function setRotationSpeed(speed) {
    starfieldLoader.style.animationDuration = speed + 's';
}

// Change perspective
function setPerspective(depth) {
    starfieldLoader.style.perspective = depth + 'px';
}

// Create constellation patterns
function createConstellation(pattern) {
    starfieldLoader.innerHTML = '';
    
    pattern.forEach((pos, i) => {
        const star = document.createElement('div');
        star.className = 'star';
        
        star.style.top = pos.y + '%';
        star.style.left = pos.x + '%';
        star.style.transform = \`translateZ(\${pos.z}px)\`;
        star.style.animationDelay = \`-\${i * 0.8}s\`;
        
        starfieldLoader.appendChild(star);
    });
}`
    },

    // ====================================================================
    // TEMPLATE 73: Modern Spinner with Text
    // ====================================================================
    loader73: {
        name: "Modern Spinner with Text",
        category: "modern",
        html: `<div class="loader-container">
    <div class="modern-spinner-loader">
        <svg class="spinner-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" 
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="loading-text">Processing...</span>
    </div>
</div>`,
        css: `.modern-spinner-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%;
    height: 100px;
}

.modern-spinner-loader .spinner-icon {
    width: 48px;
    height: 48px;
    color: #7c3aed;
    animation: spinModern 2s linear infinite;
    filter: drop-shadow(0 2px 4px rgba(124, 58, 237, 0.3));
}

.modern-spinner-loader .loading-text {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #6b7280;
    letter-spacing: 0.5px;
    animation: textPulse 2s ease-in-out infinite;
}

@keyframes spinModern {
    0% {
        transform: rotate(0deg);
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    100% {
        transform: rotate(360deg);
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}

@keyframes textPulse {
    0%, 100% {
        opacity: 0.7;
        transform: translateY(0);
    }
    50% {
        opacity: 1;
        transform: translateY(-2px);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control modern spinner with text
const modernSpinner = document.querySelector('.modern-spinner-loader');

// Change loading text
function setLoadingText(text) {
    const textElement = modernSpinner.querySelector('.loading-text');
    textElement.textContent = text;
}

// Change spinner style
function setSpinnerStyle(style) {
    const spinner = modernSpinner.querySelector('.spinner-icon');
    
    switch(style) {
        case 'simple':
            spinner.innerHTML = '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>';
            break;
        case 'dots':
            spinner.innerHTML = '<circle cx="4" cy="12" r="3"/><circle cx="12" cy="12" r="3"/><circle cx="20" cy="12" r="3"/>';
            break;
        case 'gear':
            spinner.innerHTML = '<path d="M12 2L14.5 8.5L21 9L16 13.5L17.5 21L12 17L6.5 21L8 13.5L3 9L9.5 8.5L12 2Z"/>';
            break;
        default:
            spinner.innerHTML = '<path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    }
}

// Change colors
function setSpinnerColors(iconColor, textColor) {
    const spinner = modernSpinner.querySelector('.spinner-icon');
    const text = modernSpinner.querySelector('.loading-text');
    
    spinner.style.color = iconColor;
    text.style.color = textColor;
    spinner.style.filter = \`drop-shadow(0 2px 4px rgba(\${hexToRgb(iconColor).r}, \${hexToRgb(iconColor).g}, \${hexToRgb(iconColor).b}, 0.3))\`;
}

// Show progress percentage
function showProgress(percentage) {
    const textElement = modernSpinner.querySelector('.loading-text');
    textElement.textContent = \`\${percentage}%\`;
    
    // Change animation speed based on progress
    const spinner = modernSpinner.querySelector('.spinner-icon');
    const speed = 2 - (percentage / 100); // Faster as it approaches 100%
    spinner.style.animationDuration = speed + 's';
}

// Simulate file upload
function simulateUpload(fileName) {
    let progress = 0;
    const textElement = modernSpinner.querySelector('.loading-text');
    
    const interval = setInterval(() => {
        progress += Math.random() * 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            textElement.textContent = 'Complete!';
        } else {
            textElement.textContent = \`Uploading \${fileName}: \${Math.round(progress)}%\`;
        }
    }, 200);
}`
    },

    // ====================================================================
    // TEMPLATE 74: Gradient Path Loader
    // ====================================================================
    loader74: {
        name: "Gradient Path Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="gradient-path-loader">
        <svg viewBox="0 0 187.3 93.7" class="path-svg">
            <defs>
                <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#7c3aed"></stop>
                    <stop offset="50%" stop-color="#ec4899"></stop>
                    <stop offset="100%" stop-color="#7c3aed"></stop>
                </linearGradient>
            </defs>
            <path stroke="url(#path-gradient)" 
                  d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z">
            </path>
        </svg>
    </div>
</div>`,
        css: `.gradient-path-loader {
    width: 150px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gradient-path-loader .path-svg {
    width: 100%;
    height: 100%;
}

.gradient-path-loader .path-svg path {
    stroke-width: 4;
    stroke-linecap: round;
    fill: none;
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: drawPath 3s ease-in-out infinite;
    filter: drop-shadow(0 0 8px rgba(124, 58, 237, 0.4));
}

@keyframes drawPath {
    0% {
        stroke-dashoffset: 300;
        opacity: 0.3;
    }
    50% {
        stroke-dashoffset: 0;
        opacity: 1;
    }
    100% {
        stroke-dashoffset: -300;
        opacity: 0.3;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control gradient path loader
const pathLoader = document.querySelector('.gradient-path-loader');

// Change SVG path
function setPath(pathData) {
    const path = pathLoader.querySelector('path');
    path.setAttribute('d', pathData);
    
    // Recalculate dash array based on path length
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
}

// Change gradient colors
function setGradientColors(colors) {
    const gradient = pathLoader.querySelector('#path-gradient');
    gradient.innerHTML = '';
    
    colors.forEach((color, index) => {
        const stop = document.createElement('stop');
        stop.setAttribute('offset', \`\${(index / (colors.length - 1)) * 100}%\`);
        stop.setAttribute('stop-color', color);
        gradient.appendChild(stop);
    });
}

// Change animation style
function setAnimationStyle(style) {
    const path = pathLoader.querySelector('path');
    
    switch(style) {
        case 'bounce':
            path.style.animation = 'drawPath 1.5s ease-in-out infinite alternate';
            break;
        case 'pulse':
            path.style.animation = 'drawPath 2s cubic-bezier(0.4, 0, 0.6, 1) infinite';
            break;
        case 'continuous':
            path.style.animation = 'drawPath 4s linear infinite';
            break;
        default:
            path.style.animation = 'drawPath 3s ease-in-out infinite';
    }
}

// Create custom shape
function createCustomShape(type) {
    let pathData;
    
    switch(type) {
        case 'circle':
            pathData = 'M50,25a25,25 0 1,0 50,0a25,25 0 1,0 -50,0';
            break;
        case 'triangle':
            pathData = 'M50,15 L85,85 L15,85 Z';
            break;
        case 'infinity':
            pathData = 'M30,50 C30,30 50,30 50,50 C50,70 70,70 70,50 C70,30 90,30 90,50 C90,70 70,70 70,50 C70,30 50,30 50,50 C50,70 30,70 30,50 Z';
            break;
        default:
            pathData = 'M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z';
    }
    
    setPath(pathData);
}

// Control stroke properties
function setStrokeProperties(width, cap) {
    const path = pathLoader.querySelector('path');
    path.style.strokeWidth = width;
    path.setAttribute('stroke-linecap', cap);
}`
    },

    // ====================================================================
    // TEMPLATE 75: Geometric Wave Loader
    // ====================================================================
    loader75: {
        name: "Geometric Wave Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="geometric-wave-loader">
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
        <div class="wave-bar"></div>
    </div>
</div>`,
        css: `.geometric-wave-loader {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 6px;
    height: 60px;
    width: 120px;
}

.geometric-wave-loader .wave-bar {
    width: 12px;
    background: linear-gradient(to top, #7c3aed, #ec4899);
    border-radius: 6px 6px 0 0;
    animation: waveMove 1.2s ease-in-out infinite;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%);
}

.geometric-wave-loader .wave-bar:nth-child(1) {
    height: 20px;
    animation-delay: 0s;
}

.geometric-wave-loader .wave-bar:nth-child(2) {
    height: 35px;
    animation-delay: -0.1s;
}

.geometric-wave-loader .wave-bar:nth-child(3) {
    height: 50px;
    animation-delay: -0.2s;
}

.geometric-wave-loader .wave-bar:nth-child(4) {
    height: 35px;
    animation-delay: -0.3s;
}

.geometric-wave-loader .wave-bar:nth-child(5) {
    height: 20px;
    animation-delay: -0.4s;
}

@keyframes waveMove {
    0%, 100% {
        transform: scaleY(1);
        opacity: 0.6;
    }
    50% {
        transform: scaleY(0.4);
        opacity: 1;
        filter: drop-shadow(0 0 8px #ec4899);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control geometric wave loader
const waveLoader = document.querySelector('.geometric-wave-loader');

// Create wave pattern
function createWavePattern(bars, pattern) {
    waveLoader.innerHTML = '';
    
    for (let i = 0; i < bars; i++) {
        const bar = document.createElement('div');
        bar.className = 'wave-bar';
        
        // Different patterns
        let height;
        switch(pattern) {
            case 'sine':
                height = 25 + 25 * Math.sin((i / bars) * Math.PI * 2);
                break;
            case 'random':
                height = 20 + Math.random() * 40;
                break;
            case 'pyramid':
                const middle = Math.floor(bars / 2);
                height = 20 + 30 * (1 - Math.abs(i - middle) / middle);
                break;
            default:
                const middleIdx = Math.floor(bars / 2);
                height = 20 + 30 * (1 - Math.abs(i - middleIdx) / middleIdx);
        }
        
        bar.style.height = height + 'px';
        bar.style.width = (100 / bars) + 'px';
        bar.style.animationDelay = \`-\${i * 0.1}s\`;
        
        waveLoader.appendChild(bar);
    }
}

// Change wave colors
function setWaveColors(color1, color2) {
    document.querySelectorAll('.wave-bar').forEach(bar => {
        bar.style.background = \`linear-gradient(to top, \${color1}, \${color2})\`;
    });
}

// Change clip-path shape
function setWaveShape(shape) {
    let clipPath;
    
    switch(shape) {
        case 'triangle':
            clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            break;
        case 'trapezoid':
            clipPath = 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)';
            break;
        case 'rounded':
            clipPath = 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)';
            break;
        default:
            clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 50% 85%, 0% 100%)';
    }
    
    document.querySelectorAll('.wave-bar').forEach(bar => {
        bar.style.clipPath = clipPath;
    });
}

// Control wave animation
function setWaveAnimation(speed, amplitude) {
    const keyframes = \`
        @keyframes waveMove {
            0%, 100% {
                transform: scaleY(1);
                opacity: 0.6;
            }
            50% {
                transform: scaleY(\${amplitude});
                opacity: 1;
                filter: drop-shadow(0 0 8px currentColor);
            }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const existingRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'waveMove'
    );
    
    if (existingRule) {
        styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
    }
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    
    document.querySelectorAll('.wave-bar').forEach(bar => {
        bar.style.animationDuration = speed + 's';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 76: Minimal Dot Sequence
    // ====================================================================
    loader76: {
        name: "Minimal Dot Sequence",
        category: "minimal",
        html: `<div class="loader-container">
    <div class="dot-sequence-loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</div>`,
        css: `.dot-sequence-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 60px;
    width: 120px;
}

.dot-sequence-loader .dot {
    width: 12px;
    height: 12px;
    background: #7c3aed;
    border-radius: 50%;
    animation: dotSequence 1.5s ease-in-out infinite;
    box-shadow: 0 2px 4px rgba(124, 58, 237, 0.3);
}

.dot-sequence-loader .dot:nth-child(1) {
    animation-delay: 0s;
}

.dot-sequence-loader .dot:nth-child(2) {
    animation-delay: -0.2s;
}

.dot-sequence-loader .dot:nth-child(3) {
    animation-delay: -0.4s;
}

.dot-sequence-loader .dot:nth-child(4) {
    animation-delay: -0.6s;
}

.dot-sequence-loader .dot:nth-child(5) {
    animation-delay: -0.8s;
}

@keyframes dotSequence {
    0%, 100% {
        transform: translateY(0) scale(1);
        background: #7c3aed;
        opacity: 0.4;
    }
    25% {
        transform: translateY(-15px) scale(1.2);
        background: #ec4899;
        opacity: 1;
        box-shadow: 0 5px 15px rgba(236, 72, 153, 0.4);
    }
    50% {
        transform: translateY(0) scale(1);
        background: #7c3aed;
        opacity: 0.4;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control minimal dot sequence loader
const dotSequenceLoader = document.querySelector('.dot-sequence-loader');

// Create dot sequence
function createDotSequence(count, pattern) {
    dotSequenceLoader.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        // Different patterns
        let size, delay;
        switch(pattern) {
            case 'equal':
                size = 12;
                delay = i * 0.2;
                break;
            case 'crescendo':
                size = 8 + (i * 2);
                delay = i * 0.15;
                break;
            case 'decrescendo':
                size = 16 - (i * 2);
                delay = i * 0.15;
                break;
            case 'random':
                size = 8 + Math.random() * 8;
                delay = Math.random() * 1.5;
                break;
            default:
                size = 12;
                delay = i * 0.2;
        }
        
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.animationDelay = \`-\${delay}s\`;
        
        dotSequenceLoader.appendChild(dot);
    }
    
    // Adjust gap based on count
    dotSequenceLoader.style.gap = \`\${100 / (count * 2)}px\`;
}

// Change dot colors
function setDotColors(colors) {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.style.background = colors[index % colors.length];
        
        // Create shadow color from background
        const rgb = hexToRgb(colors[index % colors.length]);
        dot.style.boxShadow = \`0 2px 4px rgba(\${rgb.r}, \${rgb.g}, \${rgb.b}, 0.3)\`;
    });
}

// Create traveling dot effect
function createTravelingDot() {
    const dots = document.querySelectorAll('.dot');
    
    dots.forEach((dot, index) => {
        dot.style.animation = \`
            dotTravel 2s ease-in-out infinite,
            dotPulse 0.5s ease-in-out infinite
        \`;
        dot.style.animationDelay = \`-\${index * 0.3}s, -\${index * 0.1}s\`;
    });
    
    // Add custom keyframes
    const keyframes = \`
        @keyframes dotTravel {
            0%, 100% {
                transform: translateX(-20px) translateY(0) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translateX(0) translateY(-15px) scale(1.3);
                opacity: 1;
            }
            50% {
                transform: translateX(20px) translateY(0) scale(1);
                opacity: 0.3;
            }
            75% {
                transform: translateX(0) translateY(15px) scale(0.8);
                opacity: 0.5;
            }
        }
        
        @keyframes dotPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const travelRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'dotTravel'
    );
    const pulseRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'dotPulse'
    );
    
    if (travelRule) styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(travelRule));
    if (pulseRule) styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(pulseRule));
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Create loading progress with dots
function showProgressWithDots(progress) {
    const dots = document.querySelectorAll('.dot');
    const activeDots = Math.ceil((progress / 100) * dots.length);
    
    dots.forEach((dot, index) => {
        if (index < activeDots) {
            dot.style.background = '#10b981';
            dot.style.opacity = '1';
            dot.style.animation = 'none';
            dot.style.transform = 'scale(1.1)';
        } else {
            dot.style.background = '#7c3aed';
            dot.style.opacity = '0.3';
            dot.style.animation = '';
            dot.style.transform = '';
        }
    });
}`
    },
        // ====================================================================
    // TEMPLATE 77: Water Droplet Loader
    // ====================================================================
    loader77: {
        name: "Water Droplet Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="water-droplet-loader">
        <div class="droplet"></div>
        <div class="ripple"></div>
        <div class="ripple"></div>
        <div class="ripple"></div>
    </div>
</div>`,
        css: `.water-droplet-loader {
    position: relative;
    width: 80px;
    height: 80px;
}

.water-droplet-loader .droplet {
    position: absolute;
    width: 30px;
    height: 40px;
    background: radial-gradient(circle at 30% 40%, 
        rgba(59, 130, 246, 0.9), 
        rgba(30, 64, 175, 0.7) 60%, 
        transparent 70%);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    animation: dropletDrip 3s ease-in-out infinite;
    box-shadow: 
        inset 0 -5px 10px rgba(255, 255, 255, 0.3),
        0 5px 15px rgba(59, 130, 246, 0.4);
    filter: blur(1px);
}

.water-droplet-loader .ripple {
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid rgba(59, 130, 246, 0.3);
    border-radius: 50%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rippleEffect 2s ease-out infinite;
}

.water-droplet-loader .ripple:nth-child(2) {
    animation-delay: 0.5s;
}

.water-droplet-loader .ripple:nth-child(3) {
    animation-delay: 1s;
}

@keyframes dropletDrip {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
        height: 40px;
        width: 30px;
    }
    30% {
        transform: translateX(-50%) translateY(20px);
        height: 50px;
        width: 25px;
    }
    60% {
        transform: translateX(-50%) translateY(20px);
        height: 20px;
        width: 30px;
    }
}

@keyframes rippleEffect {
    0% {
        width: 20px;
        height: 20px;
        opacity: 1;
        border-width: 2px;
    }
    100% {
        width: 80px;
        height: 80px;
        opacity: 0;
        border-width: 0.5px;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control water droplet loader
const dropletLoader = document.querySelector('.water-droplet-loader');

// Create multiple droplets
function createDroplets(count) {
    // Clear existing elements
    const existingElements = dropletLoader.querySelectorAll('*');
    existingElements.forEach(el => el.remove());
    
    for (let i = 0; i < count; i++) {
        // Create droplet
        const droplet = document.createElement('div');
        droplet.className = 'droplet';
        
        const left = 10 + (i * (80 / (count + 1)));
        const delay = i * 0.5;
        
        droplet.style.left = left + '%';
        droplet.style.animationDelay = -delay + 's';
        
        // Create color based on index
        const hue = 200 + (i * 20);
        droplet.style.background = \`radial-gradient(circle at 30% 40%, 
            hsla(\${hue}, 80%, 60%, 0.9), 
            hsla(\${hue}, 90%, 40%, 0.7) 60%, 
            transparent 70%)\`;
        
        dropletLoader.appendChild(droplet);
        
        // Create ripples for each droplet
        for (let j = 0; j < 3; j++) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.left = left + '%';
            ripple.style.animationDelay = \`-\${delay + j * 0.5}s\`;
            dropletLoader.appendChild(ripple);
        }
    }
}

// Change water properties
function setWaterProperties(viscosity, surfaceTension) {
    const droplets = dropletLoader.querySelectorAll('.droplet');
    const ripples = dropletLoader.querySelectorAll('.ripple');
    
    // Adjust animation based on properties
    droplets.forEach(droplet => {
        droplet.style.filter = \`blur(\${viscosity}px)\`;
        droplet.style.animationDuration = (3 / surfaceTension) + 's';
    });
    
    ripples.forEach(ripple => {
        ripple.style.animationDuration = (2 / surfaceTension) + 's';
        ripple.style.borderWidth = surfaceTension + 'px';
    });
}

// Simulate rain effect
function simulateRain(intensity) {
    // Clear all
    dropletLoader.innerHTML = '';
    
    for (let i = 0; i < intensity * 10; i++) {
        const droplet = document.createElement('div');
        droplet.className = 'droplet';
        
        const left = Math.random() * 100;
        const size = 20 + Math.random() * 20;
        const delay = Math.random() * 3;
        const speed = 1 + Math.random() * 2;
        
        droplet.style.left = left + '%';
        droplet.style.width = size + 'px';
        droplet.style.height = (size * 1.3) + 'px';
        droplet.style.animation = \`dropletDrip \${speed}s ease-in-out infinite\`;
        droplet.style.animationDelay = -delay + 's';
        
        dropletLoader.appendChild(droplet);
    }
}`
    },

    // ====================================================================
    // TEMPLATE 78: Clock Spinner Loader
    // ====================================================================
    loader78: {
        name: "Clock Spinner Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="clock-spinner-loader">
        <div class="clock-face">
            <div class="hour-hand"></div>
            <div class="minute-hand"></div>
            <div class="second-hand"></div>
            <div class="center-dot"></div>
            <div class="marker-1"></div>
            <div class="marker-2"></div>
        </div>
    </div>
</div>`,
        css: `.clock-spinner-loader {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.clock-spinner-loader .clock-face {
    position: relative;
    width: 100%;
    height: 100%;
    border: 3px solid #374151;
    border-radius: 50%;
    background: #f9fafb;
    box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.1),
        inset 0 0 20px rgba(0, 0, 0, 0.05);
}

.clock-spinner-loader .hour-hand {
    position: absolute;
    width: 4px;
    height: 25px;
    background: #1f2937;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    transform-origin: bottom center;
    border-radius: 2px;
    animation: hourRotation 24s linear infinite;
}

.clock-spinner-loader .minute-hand {
    position: absolute;
    width: 3px;
    height: 35px;
    background: #4b5563;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    transform-origin: bottom center;
    border-radius: 1.5px;
    animation: minuteRotation 4s linear infinite;
}

.clock-spinner-loader .second-hand {
    position: absolute;
    width: 2px;
    height: 40px;
    background: #ef4444;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    transform-origin: bottom center;
    border-radius: 1px;
    animation: secondRotation 1s linear infinite;
}

.clock-spinner-loader .center-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #1f2937;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

/* Clock markers */
.clock-spinner-loader .marker-1,
.clock-spinner-loader .marker-2 {
    position: absolute;
    background: #6b7280;
}

.clock-spinner-loader .clock-face::before,
.clock-spinner-loader .clock-face::after {
    content: '';
    position: absolute;
    background: #6b7280;
}

.clock-spinner-loader .clock-face::before {
    width: 3px;
    height: 12px;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1.5px;
}

.clock-spinner-loader .clock-face::after {
    width: 3px;
    height: 12px;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 1.5px;
}

.clock-spinner-loader .marker-1 {
    width: 12px;
    height: 3px;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    border-radius: 1.5px;
}

.clock-spinner-loader .marker-2 {
    width: 12px;
    height: 3px;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    border-radius: 1.5px;
}

@keyframes hourRotation {
    0% { transform: translate(-50%, -100%) rotate(0deg); }
    100% { transform: translate(-50%, -100%) rotate(360deg); }
}

@keyframes minuteRotation {
    0% { transform: translate(-50%, -100%) rotate(0deg); }
    100% { transform: translate(-50%, -100%) rotate(360deg); }
}

@keyframes secondRotation {
    0% { transform: translate(-50%, -100%) rotate(0deg); }
    100% { transform: translate(-50%, -100%) rotate(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control clock spinner loader
const clockLoader = document.querySelector('.clock-spinner-loader');

// Set real time
function setRealTime() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourHand = clockLoader.querySelector('.hour-hand');
    const minuteHand = clockLoader.querySelector('.minute-hand');
    const secondHand = clockLoader.querySelector('.second-hand');
    
    // Calculate angles
    const hourAngle = (hours * 30) + (minutes * 0.5);
    const minuteAngle = minutes * 6;
    const secondAngle = seconds * 6;
    
    // Set initial positions
    hourHand.style.transform = \`translate(-50%, -100%) rotate(\${hourAngle}deg)\`;
    minuteHand.style.transform = \`translate(-50%, -100%) rotate(\${minuteAngle}deg)\`;
    secondHand.style.transform = \`translate(-50%, -100%) rotate(\${secondAngle}deg)\`;
    
    // Animate from current time
    hourHand.style.animation = \`hourRotation 43200s linear infinite\`;
    hourHand.style.animationDelay = \`-\${(hourAngle / 360) * 43200}s\`;
    
    minuteHand.style.animation = \`minuteRotation 3600s linear infinite\`;
    minuteHand.style.animationDelay = \`-\${(minuteAngle / 360) * 3600}s\`;
    
    secondHand.style.animation = \`secondRotation 60s linear infinite\`;
    secondHand.style.animationDelay = \`-\${secondAngle / 6}s\`;
}

// Change clock style
function setClockStyle(style) {
    const clockFace = clockLoader.querySelector('.clock-face');
    
    switch(style) {
        case 'digital':
            // Convert to digital display
            clockLoader.innerHTML = \`
                <div class="digital-clock">
                    <div class="digital-display">00:00:00</div>
                </div>
            \`;
            
            // Add digital clock styles
            const styleSheet = document.createElement('style');
            styleSheet.textContent = \`
                .digital-clock {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #1f2937;
                    border-radius: 10px;
                    font-family: 'Courier New', monospace;
                }
                .digital-display {
                    color: #10b981;
                    font-size: 18px;
                    font-weight: bold;
                    text-shadow: 0 0 10px #10b981;
                    letter-spacing: 2px;
                    animation: digitalPulse 1s infinite alternate;
                }
                @keyframes digitalPulse {
                    from { opacity: 0.7; }
                    to { opacity: 1; }
                }
            \`;
            document.head.appendChild(styleSheet);
            
            // Update time
            const display = clockLoader.querySelector('.digital-display');
            setInterval(() => {
                const now = new Date();
                display.textContent = now.toLocaleTimeString();
            }, 1000);
            break;
            
        case 'roman':
            // Add Roman numeral markers
            const markers = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
            clockFace.querySelectorAll('.marker-1, .marker-2').forEach(m => m.remove());
            
            markers.forEach((numeral, i) => {
                const angle = (i * 30) * Math.PI / 180;
                const radius = 35;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                const marker = document.createElement('div');
                marker.className = 'roman-marker';
                marker.textContent = numeral;
                marker.style.cssText = \`
                    position: absolute;
                    font-size: 10px;
                    font-weight: bold;
                    color: #374151;
                    transform: translate(-50%, -50%);
                    top: \${y}%;
                    left: \${x}%;
                \`;
                clockFace.appendChild(marker);
            });
            break;
    }
}

// Add ticking sound simulation
function simulateTickSound() {
    const secondHand = clockLoader.querySelector('.second-hand');
    
    secondHand.addEventListener('animationiteration', () => {
        // Visual tick effect
        secondHand.style.boxShadow = '0 0 10px #ef4444';
        setTimeout(() => {
            secondHand.style.boxShadow = 'none';
        }, 100);
    });
}

// Show countdown timer
function showCountdown(minutes) {
    const clockFace = clockLoader.querySelector('.clock-face');
    clockFace.innerHTML = \`
        <div class="countdown-display">\${minutes}:00</div>
    \`;
    
    // Add countdown styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = \`
        .countdown-display {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: 'Arial', sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #ef4444;
            text-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
    \`;
    document.head.appendChild(styleSheet);
    
    // Start countdown
    let timeLeft = minutes * 60;
    const display = clockLoader.querySelector('.countdown-display');
    
    const interval = setInterval(() => {
        timeLeft--;
        const mins = Math.floor(timeLeft / 60);
        const secs = timeLeft % 60;
        display.textContent = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
        
        // Color changes
        if (timeLeft < 30) {
            display.style.color = '#ef4444';
            display.style.animation = 'pulse 0.5s infinite alternate';
        } else if (timeLeft < 60) {
            display.style.color = '#f59e0b';
        }
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            display.textContent = 'TIME\'S UP!';
            display.style.animation = 'none';
        }
    }, 1000);
}`
    },

    // ====================================================================
    // TEMPLATE 79: Fire Loader
    // ====================================================================
    loader79: {
        name: "Fire Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="fire-loader">
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="spark"></div>
        <div class="spark"></div>
        <div class="spark"></div>
    </div>
</div>`,
        css: `.fire-loader {
    position: relative;
    width: 80px;
    height: 100px;
    display: flex;
    justify-content: center;
}

.fire-loader .flame {
    position: absolute;
    background: linear-gradient(to top, 
        transparent,
        #f59e0b,
        #ef4444);
    border-radius: 50% 50% 20% 20%;
    animation: flameFlicker 0.8s ease-in-out infinite;
    filter: blur(2px);
}

.fire-loader .flame:nth-child(1) {
    width: 40px;
    height: 60px;
    bottom: 0;
    animation-delay: 0s;
}

.fire-loader .flame:nth-child(2) {
    width: 30px;
    height: 50px;
    bottom: 5px;
    left: 45%;
    animation-delay: -0.2s;
}

.fire-loader .flame:nth-child(3) {
    width: 25px;
    height: 45px;
    bottom: 10px;
    right: 20%;
    animation-delay: -0.4s;
}

.fire-loader .spark {
    position: absolute;
    width: 4px;
    height: 4px;
    background: radial-gradient(circle at center, #fbbf24, #f59e0b);
    border-radius: 50%;
    animation: sparkFloat 1.5s ease-out infinite;
    filter: blur(1px);
}

.fire-loader .spark:nth-child(4) {
    bottom: 40px;
    left: 30%;
    animation-delay: 0s;
}

.fire-loader .spark:nth-child(5) {
    bottom: 50px;
    left: 50%;
    animation-delay: -0.5s;
}

.fire-loader .spark:nth-child(6) {
    bottom: 35px;
    right: 30%;
    animation-delay: -1s;
}

@keyframes flameFlicker {
    0%, 100% {
        transform: scaleY(1) translateY(0);
        opacity: 0.8;
    }
    25% {
        transform: scaleY(1.1) translateY(-5px);
        opacity: 1;
    }
    50% {
        transform: scaleY(0.9) translateY(0);
        opacity: 0.9;
    }
    75% {
        transform: scaleY(1.05) translateY(-3px);
        opacity: 1;
    }
}

@keyframes sparkFloat {
    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    100% {
        transform: translateY(-60px) scale(0.5);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control fire loader
const fireLoader = document.querySelector('.fire-loader');

// Create campfire effect
function createCampfire(intensity) {
    fireLoader.innerHTML = '';
    
    // Create logs
    for (let i = 0; i < 3; i++) {
        const log = document.createElement('div');
        log.className = 'log';
        log.style.cssText = \`
            position: absolute;
            width: 40px;
            height: 10px;
            background: linear-gradient(to right, #78350f, #92400e);
            border-radius: 5px;
            bottom: 5px;
            transform: rotate(\${i * 60}deg);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        \`;
        fireLoader.appendChild(log);
    }
    
    // Create flames based on intensity
    for (let i = 0; i < intensity * 3; i++) {
        const flame = document.createElement('div');
        flame.className = 'flame';
        
        const width = 20 + Math.random() * 30;
        const height = 30 + Math.random() * 40;
        const left = 30 + Math.random() * 40;
        const delay = Math.random() * 2;
        
        flame.style.width = width + 'px';
        flame.style.height = height + 'px';
        flame.style.left = left + '%';
        flame.style.bottom = Math.random() * 10 + 'px';
        flame.style.animationDelay = -delay + 's';
        flame.style.animationDuration = (0.5 + Math.random() * 0.7) + 's';
        
        // Vary colors
        const hue = 20 + Math.random() * 20;
        flame.style.background = \`linear-gradient(to top, 
            transparent,
            hsl(\${hue}, 100%, 60%),
            hsl(\${hue + 10}, 100%, 40%))\`;
        
        fireLoader.appendChild(flame);
    }
    
    // Create sparks
    for (let i = 0; i < intensity * 5; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        
        const left = 20 + Math.random() * 60;
        const delay = Math.random() * 3;
        const duration = 1 + Math.random() * 2;
        
        spark.style.left = left + '%';
        spark.style.animationDelay = -delay + 's';
        spark.style.animationDuration = duration + 's';
        
        fireLoader.appendChild(spark);
    }
}

// Change fire temperature (color)
function setFireTemperature(temperature) {
    const flames = fireLoader.querySelectorAll('.flame');
    
    flames.forEach(flame => {
        let color1, color2;
        
        if (temperature === 'cold') {
            color1 = '#3b82f6'; // Blue
            color2 = '#8b5cf6'; // Purple
        } else if (temperature === 'hot') {
            color1 = '#f59e0b'; // Orange
            color2 = '#ef4444'; // Red
        } else if (temperature === 'whitehot') {
            color1 = '#fbbf24'; // Yellow
            color2 = '#ffffff'; // White
        } else {
            color1 = '#f59e0b';
            color2 = '#ef4444';
        }
        
        flame.style.background = \`linear-gradient(to top, 
            transparent,
            \${color1},
            \${color2})\`;
    });
}

// Simulate wind effect
function simulateWind(strength, direction) {
    const flames = fireLoader.querySelectorAll('.flame');
    const sparks = fireLoader.querySelectorAll('.spark');
    
    flames.forEach(flame => {
        flame.style.transform = \`scaleY(1) translateY(0) skewX(\${direction * strength}deg)\`;
        flame.style.animation = \`flameFlickerWind 0.8s ease-in-out infinite\`;
    });
    
    sparks.forEach(spark => {
        spark.style.animation = \`sparkFloatWind 1.5s ease-out infinite\`;
    });
    
    // Add wind keyframes
    const keyframes = \`
        @keyframes flameFlickerWind {
            0%, 100% {
                transform: scaleY(1) translateY(0) skewX(\${direction * strength}deg);
                opacity: 0.8;
            }
            25% {
                transform: scaleY(1.1) translateY(-5px) skewX(\${direction * (strength + 5)}deg);
                opacity: 1;
            }
            50% {
                transform: scaleY(0.9) translateY(0) skewX(\${direction * strength}deg);
                opacity: 0.9;
            }
            75% {
                transform: scaleY(1.05) translateY(-3px) skewX(\${direction * (strength + 3)}deg);
                opacity: 1;
            }
        }
        
        @keyframes sparkFloatWind {
            0% {
                transform: translateY(0) translateX(0) scale(1);
                opacity: 0;
            }
            20% {
                opacity: 1;
            }
            100% {
                transform: translateY(-60px) translateX(\${direction * 30}px) scale(0.5);
                opacity: 0;
            }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const existingFlameRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'flameFlickerWind'
    );
    const existingSparkRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'sparkFloatWind'
    );
    
    if (existingFlameRule) styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingFlameRule));
    if (existingSparkRule) styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingSparkRule));
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}`
    },

    // ====================================================================
    // TEMPLATE 80: Hourglass Loader
    // ====================================================================
    loader80: {
        name: "Hourglass Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="hourglass-loader">
        <div class="glass">
            <div class="sand-top"></div>
            <div class="sand-flow"></div>
            <div class="sand-bottom"></div>
        </div>
    </div>
</div>`,
        css: `.hourglass-loader {
    width: 70px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hourglass-loader .glass {
    position: relative;
    width: 50px;
    height: 80px;
    background: linear-gradient(to bottom, 
        rgba(156, 163, 175, 0.2),
        rgba(209, 213, 219, 0.1));
    clip-path: polygon(0% 0%, 100% 0%, 80% 10%, 20% 10%, 0% 0%, 
                       20% 10%, 80% 10%, 100% 90%, 80% 90%, 20% 90%, 
                       0% 90%, 20% 90%, 80% 90%, 100% 100%, 0% 100%);
    border: 2px solid #9ca3af;
    box-shadow: 
        inset 0 0 20px rgba(0, 0, 0, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.2);
}

.hourglass-loader .sand-top {
    position: absolute;
    width: 30px;
    height: 30px;
    background: linear-gradient(to bottom, #d97706, #b45309);
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50% 50% 40% 40%;
    animation: sandDeplete 4s linear infinite;
    box-shadow: 
        inset 0 -5px 10px rgba(0, 0, 0, 0.3),
        0 2px 5px rgba(0, 0, 0, 0.2);
}

.hourglass-loader .sand-flow {
    position: absolute;
    width: 6px;
    height: 20px;
    background: linear-gradient(to bottom, #d97706, #92400e);
    top: 45px;
    left: 50%;
    transform: translateX(-50%);
    animation: sandFlow 4s linear infinite;
    filter: blur(1px);
}

.hourglass-loader .sand-bottom {
    position: absolute;
    width: 30px;
    height: 0;
    background: linear-gradient(to top, #d97706, #b45309);
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 40% 40% 50% 50%;
    animation: sandAccumulate 4s linear infinite;
    box-shadow: 
        inset 0 5px 10px rgba(0, 0, 0, 0.3),
        0 -2px 5px rgba(0, 0, 0, 0.2);
}

@keyframes sandDeplete {
    0% {
        height: 30px;
        top: 15px;
    }
    100% {
        height: 0;
        top: 45px;
    }
}

@keyframes sandFlow {
    0%, 100% {
        height: 20px;
        opacity: 1;
    }
    50% {
        height: 25px;
        opacity: 0.8;
    }
}

@keyframes sandAccumulate {
    0% {
        height: 0;
    }
    100% {
        height: 30px;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control hourglass loader
const hourglassLoader = document.querySelector('.hourglass-loader');

// Create sand timer with time
function createSandTimer(seconds) {
    const glass = hourglassLoader.querySelector('.glass');
    
    // Clear existing animations
    const sandTop = glass.querySelector('.sand-top');
    const sandFlow = glass.querySelector('.sand-flow');
    const sandBottom = glass.querySelector('.sand-bottom');
    
    // Set animation duration based on seconds
    sandTop.style.animationDuration = seconds + 's';
    sandFlow.style.animationDuration = seconds + 's';
    sandBottom.style.animationDuration = seconds + 's';
    
    // Add time display
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time-display';
    timeDisplay.textContent = formatTime(seconds);
    timeDisplay.style.cssText = \`
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Arial', sans-serif;
        font-size: 12px;
        font-weight: bold;
        color: #374151;
        background: white;
        padding: 2px 6px;
        border-radius: 3px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    \`;
    hourglassLoader.appendChild(timeDisplay);
    
    // Update time display
    let timeLeft = seconds;
    const interval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = formatTime(timeLeft);
        
        if (timeLeft <= 0) {
            clearInterval(interval);
            timeDisplay.textContent = 'TIME\'S UP!';
            timeDisplay.style.color = '#ef4444';
            
            // Flip animation
            setTimeout(() => {
                sandTop.style.animation = 'sandDeplete 4s linear infinite reverse';
                sandBottom.style.animation = 'sandAccumulate 4s linear infinite reverse';
            }, 1000);
        }
    }, 1000);
}

// Helper function to format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
}

// Change sand color
function setSandColor(color) {
    const sandTop = hourglassLoader.querySelector('.sand-top');
    const sandFlow = hourglassLoader.querySelector('.sand-flow');
    const sandBottom = hourglassLoader.querySelector('.sand-bottom');
    
    const rgb = hexToRgb(color);
    const darker = darkenColor(color, 0.3);
    const darkest = darkenColor(color, 0.5);
    
    sandTop.style.background = \`linear-gradient(to bottom, \${color}, \${darker})\`;
    sandFlow.style.background = \`linear-gradient(to bottom, \${color}, \${darkest})\`;
    sandBottom.style.background = \`linear-gradient(to top, \${color}, \${darker})\`;
}

// Change sand flow speed
function setSandFlowSpeed(speed) {
    const sandTop = hourglassLoader.querySelector('.sand-top');
    const sandFlow = hourglassLoader.querySelector('.sand-flow');
    const sandBottom = hourglassLoader.querySelector('.sand-bottom');
    
    const duration = 4 / speed;
    
    sandTop.style.animationDuration = duration + 's';
    sandFlow.style.animationDuration = duration + 's';
    sandBottom.style.animationDuration = duration + 's';
}

// Add multiple hourglasses
function createHourglassGrid(rows, cols) {
    hourglassLoader.innerHTML = '';
    hourglassLoader.style.display = 'grid';
    hourglassLoader.style.gridTemplateColumns = \`repeat(\${cols}, 1fr)\`;
    hourglassLoader.style.gridTemplateRows = \`repeat(\${rows}, 1fr)\`;
    hourglassLoader.style.gap = '10px';
    hourglassLoader.style.width = '120px';
    hourglassLoader.style.height = '120px';
    
    for (let i = 0; i < rows * cols; i++) {
        const singleHourglass = document.createElement('div');
        singleHourglass.className = 'single-hourglass';
        singleHourglass.innerHTML = \`
            <div class="glass">
                <div class="sand-top"></div>
                <div class="sand-flow"></div>
                <div class="sand-bottom"></div>
            </div>
        \`;
        
        // Add individual styles
        const style = document.createElement('style');
        style.textContent = \`
            .single-hourglass {
                position: relative;
                width: 100%;
                height: 100%;
            }
            .single-hourglass .glass {
                width: 100%;
                height: 100%;
                /* Same as main hourglass styles but scaled */
            }
        \`;
        document.head.appendChild(style);
        
        hourglassLoader.appendChild(singleHourglass);
    }
}`
    },

    // ====================================================================
    // TEMPLATE 81: Plant Growth Loader
    // ====================================================================
    loader81: {
        name: "Plant Growth Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="plant-growth-loader">
        <div class="pot"></div>
        <div class="stem"></div>
        <div class="leaf leaf-1"></div>
        <div class="leaf leaf-2"></div>
        <div class="leaf leaf-3"></div>
        <div class="flower"></div>
    </div>
</div>`,
        css: `.plant-growth-loader {
    position: relative;
    width: 100px;
    height: 120px;
}

.plant-growth-loader .pot {
    position: absolute;
    width: 60px;
    height: 30px;
    background: linear-gradient(to top, #92400e, #78350f);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px 5px 20px 20px;
    box-shadow: 
        inset 0 -5px 10px rgba(0, 0, 0, 0.3),
        0 5px 15px rgba(0, 0, 0, 0.2);
}

.plant-growth-loader .stem {
    position: absolute;
    width: 6px;
    height: 0;
    background: linear-gradient(to top, #22c55e, #16a34a);
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 3px;
    animation: stemGrow 3s ease-out infinite;
}

.plant-growth-loader .leaf {
    position: absolute;
    background: linear-gradient(to right, #22c55e, #16a34a);
    border-radius: 50% 0 50% 0;
    opacity: 0;
    animation: leafGrow 3s ease-out infinite;
}

.plant-growth-loader .leaf-1 {
    width: 20px;
    height: 15px;
    bottom: 50px;
    left: 40%;
    transform: rotate(-30deg);
    animation-delay: 0.5s;
}

.plant-growth-loader .leaf-2 {
    width: 25px;
    height: 18px;
    bottom: 70px;
    right: 35%;
    transform: rotate(30deg);
    animation-delay: 1s;
}

.plant-growth-loader .leaf-3 {
    width: 18px;
    height: 12px;
    bottom: 90px;
    left: 45%;
    transform: rotate(-45deg);
    animation-delay: 1.5s;
}

.plant-growth-loader .flower {
    position: absolute;
    width: 0;
    height: 0;
    background: radial-gradient(circle at center, 
        #fbbf24 0%, 
        #f59e0b 30%, 
        #dc2626 70%);
    border-radius: 50%;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: flowerBloom 3s ease-out infinite;
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
}

@keyframes stemGrow {
    0% {
        height: 0;
    }
    30% {
        height: 40px;
    }
    60% {
        height: 80px;
    }
    100% {
        height: 80px;
    }
}

@keyframes leafGrow {
    0% {
        opacity: 0;
        transform: scale(0) rotate(var(--rotation));
    }
    30% {
        opacity: 0;
        transform: scale(0) rotate(var(--rotation));
    }
    50% {
        opacity: 0.8;
        transform: scale(1) rotate(var(--rotation));
    }
    100% {
        opacity: 0.8;
        transform: scale(1) rotate(var(--rotation));
    }
}

@keyframes flowerBloom {
    0%, 70% {
        width: 0;
        height: 0;
        opacity: 0;
    }
    80% {
        width: 0;
        height: 0;
        opacity: 0;
    }
    100% {
        width: 25px;
        height: 25px;
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control plant growth loader
const plantLoader = document.querySelector('.plant-growth-loader');

// Create different plant types
function createPlantType(type) {
    const stem = plantLoader.querySelector('.stem');
    const leaves = plantLoader.querySelectorAll('.leaf');
    const flower = plantLoader.querySelector('.flower');
    
    switch(type) {
        case 'cactus':
            stem.style.width = '20px';
            stem.style.background = 'linear-gradient(to top, #22c55e, #16a34a)';
            stem.style.borderRadius = '10px';
            
            // Remove leaves (cacti don't have traditional leaves)
            leaves.forEach(leaf => leaf.style.display = 'none');
            
            // Add cactus spines
            for (let i = 0; i < 8; i++) {
                const spine = document.createElement('div');
                spine.className = 'spine';
                spine.style.cssText = \`
                    position: absolute;
                    width: 2px;
                    height: 8px;
                    background: #374151;
                    border-radius: 1px;
                    top: \${30 + i * 10}px;
                    left: \${i % 2 ? '55%' : '45%'};
                    transform: rotate(\${i * 45}deg);
                    animation: spineGrow 3s ease-out infinite;
                    animation-delay: \${i * 0.2}s;
                \`;
                plantLoader.appendChild(spine);
            }
            
            // Change flower to cactus flower
            flower.style.background = 'radial-gradient(circle at center, #f472b6, #db2777)';
            break;
            
        case 'vine':
            stem.style.width = '3px';
            stem.style.background = 'linear-gradient(to top, #16a34a, #059669)';
            
            // Create curling vine effect
            stem.style.animation = 'vineGrow 3s ease-out infinite';
            
            // Add keyframes for vine
            const keyframes = \`
                @keyframes vineGrow {
                    0% {
                        height: 0;
                        transform: translateX(-50%) rotate(0deg);
                    }
                    30% {
                        height: 40px;
                        transform: translateX(-50%) rotate(90deg);
                    }
                    60% {
                        height: 80px;
                        transform: translateX(-50%) rotate(180deg);
                    }
                    100% {
                        height: 80px;
                        transform: translateX(-50%) rotate(270deg);
                    }
                }
            \`;
            
            const styleSheet = document.styleSheets[0];
            const existingRule = Array.from(styleSheet.cssRules).find(rule => 
                rule.name === 'vineGrow'
            );
            
            if (existingRule) {
                styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
            }
            
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
            break;
            
        case 'tree':
            // Create multiple branches
            const branchCount = 3;
            for (let i = 0; i < branchCount; i++) {
                const branch = document.createElement('div');
                branch.className = 'branch';
                branch.style.cssText = \`
                    position: absolute;
                    width: 4px;
                    height: 30px;
                    background: linear-gradient(to top, #92400e, #78350f);
                    bottom: 50px;
                    left: 50%;
                    transform: translateX(-50%) rotate(\${-30 + i * 30}deg);
                    transform-origin: bottom center;
                    border-radius: 2px;
                    animation: branchGrow 3s ease-out infinite;
                    animation-delay: \${i * 0.3}s;
                \`;
                plantLoader.appendChild(branch);
            }
            
            // Change stem to trunk
            stem.style.width = '15px';
            stem.style.background = 'linear-gradient(to top, #92400e, #78350f)';
            break;
    }
}

// Simulate seasons
function simulateSeason(season) {
    const stem = plantLoader.querySelector('.stem');
    const leaves = plantLoader.querySelectorAll('.leaf');
    const flower = plantLoader.querySelector('.flower');
    
    switch(season) {
        case 'spring':
            stem.style.background = 'linear-gradient(to top, #22c55e, #16a34a)';
            leaves.forEach(leaf => {
                leaf.style.background = 'linear-gradient(to right, #22c55e, #16a34a)';
            });
            flower.style.opacity = '1';
            break;
            
        case 'summer':
            stem.style.background = 'linear-gradient(to top, #16a34a, #059669)';
            leaves.forEach(leaf => {
                leaf.style.background = 'linear-gradient(to right, #16a34a, #059669)';
            });
            flower.style.opacity = '0.8';
            break;
            
        case 'autumn':
            stem.style.background = 'linear-gradient(to top, #d97706, #b45309)';
            leaves.forEach(leaf => {
                leaf.style.background = 'linear-gradient(to right, #d97706, #b45309)';
                leaf.style.animation = 'leafFall 3s ease-out infinite';
            });
            flower.style.opacity = '0';
            break;
            
        case 'winter':
            stem.style.background = 'linear-gradient(to top, #9ca3af, #6b7280)';
            leaves.forEach(leaf => {
                leaf.style.opacity = '0';
            });
            flower.style.opacity = '0';
            
            // Add snow
            for (let i = 0; i < 5; i++) {
                const snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.style.cssText = \`
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: white;
                    border-radius: 50%;
                    top: \${Math.random() * 80}px;
                    left: \${Math.random() * 100}%;
                    animation: snowFall 3s linear infinite;
                    animation-delay: \${Math.random() * 3}s;
                    filter: blur(1px);
                \`;
                plantLoader.appendChild(snowflake);
            }
            break;
    }
}

// Create garden with multiple plants
function createGarden(plantCount) {
    plantLoader.innerHTML = '';
    plantLoader.style.display = 'flex';
    plantLoader.style.justifyContent = 'space-around';
    plantLoader.style.alignItems = 'flex-end';
    plantLoader.style.width = '150px';
    
    for (let i = 0; i < plantCount; i++) {
        const singlePlant = document.createElement('div');
        singlePlant.className = 'single-plant';
        singlePlant.style.cssText = \`
            position: relative;
            width: 30px;
            height: 100px;
        \`;
        
        // Random plant height
        const height = 60 + Math.random() * 40;
        
        singlePlant.innerHTML = \`
            <div class="pot" style="
                position: absolute;
                width: 20px;
                height: 15px;
                background: linear-gradient(to top, #92400e, #78350f);
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 3px 3px 10px 10px;
            "></div>
            <div class="stem" style="
                position: absolute;
                width: 3px;
                height: \${height}px;
                background: linear-gradient(to top, #22c55e, #16a34a);
                bottom: 15px;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 1.5px;
                animation: stemGrowSingle 3s ease-out infinite;
            "></div>
        \`;
        
        plantLoader.appendChild(singlePlant);
    }
    
    // Add keyframes for individual plant growth
    const keyframes = \`
        @keyframes stemGrowSingle {
            0% { height: 0; }
            100% { height: var(--height); }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Add watering effect
function simulateWatering() {
    // Create water droplets
    for (let i = 0; i < 5; i++) {
        const droplet = document.createElement('div');
        droplet.className = 'water-droplet';
        droplet.style.cssText = \`
            position: absolute;
            width: 4px;
            height: 6px;
            background: radial-gradient(circle at 30% 40%, 
                rgba(59, 130, 246, 0.9), 
                rgba(30, 64, 175, 0.7));
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
            top: \${-10 - i * 5}px;
            left: \${40 + i * 5}%;
            animation: wateringDrip 1s ease-in-out infinite;
            animation-delay: \${i * 0.2}s;
            filter: blur(1px);
        \`;
        plantLoader.appendChild(droplet);
    }
    
    // Make plant grow faster temporarily
    const stem = plantLoader.querySelector('.stem');
    const originalDuration = getComputedStyle(stem).animationDuration;
    stem.style.animationDuration = '1s';
    
    // Reset after watering
    setTimeout(() => {
        stem.style.animationDuration = originalDuration;
    }, 3000);
}`
    },
        // ====================================================================
    // TEMPLATE 82: Retro CRT Loader
    // ====================================================================
    loader82: {
        name: "Retro CRT Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="retro-crt-loader">
        <div class="crt-screen">
            <div class="scan-line"></div>
            <div class="loading-text">SYSTEM BOOT</div>
            <div class="progress-bar"></div>
            <div class="glitch-text">></div>
        </div>
    </div>
</div>`,
        css: `.retro-crt-loader {
    width: 140px;
    height: 100px;
    background: #1a1a1a;
    border: 4px solid #333;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 20px rgba(0, 255, 0, 0.3),
        inset 0 0 30px rgba(0, 255, 0, 0.1);
}

.retro-crt-loader::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 255, 0, 0.05) 0px,
        rgba(0, 255, 0, 0.05) 2px,
        transparent 2px,
        transparent 4px
    );
    animation: crtFlicker 0.2s infinite;
}

.retro-crt-loader .crt-screen {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 15px;
    font-family: 'Courier New', monospace;
}

.retro-crt-loader .scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(0, 255, 0, 0.8), 
        transparent);
    top: 0;
    animation: scanLine 2s linear infinite;
    filter: blur(1px);
}

.retro-crt-loader .loading-text {
    color: #00ff00;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff00;
    margin-bottom: 10px;
    animation: textGlitch 3s infinite;
}

.retro-crt-loader .progress-bar {
    width: 100%;
    height: 8px;
    background: #222;
    border: 1px solid #00ff00;
    border-radius: 2px;
    overflow: hidden;
    position: relative;
}

.retro-crt-loader .progress-bar::before {
    content: '';
    position: absolute;
    width: 30%;
    height: 100%;
    background: linear-gradient(90deg, 
        #00ff00, 
        #00cc00, 
        #00ff00);
    animation: progressLoad 2s ease-in-out infinite alternate;
    box-shadow: 0 0 10px #00ff00;
}

.retro-crt-loader .glitch-text {
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: #00ff00;
    font-size: 16px;
    font-weight: bold;
    animation: cursorBlink 1s infinite;
}

@keyframes crtFlicker {
    0%, 100% { opacity: 0.95; }
    50% { opacity: 1; }
}

@keyframes scanLine {
    0% { top: 0; }
    100% { top: 100%; }
}

@keyframes textGlitch {
    0%, 100% { transform: translateX(0); }
    95% { transform: translateX(0); }
    96% { transform: translateX(-2px); }
    97% { transform: translateX(2px); }
    98% { transform: translateX(-1px); }
    99% { transform: translateX(1px); }
}

@keyframes progressLoad {
    0% { width: 10%; left: 0; }
    100% { width: 90%; left: 10%; }
}

@keyframes cursorBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control retro CRT loader
const crtLoader = document.querySelector('.retro-crt-loader');

// Simulate boot sequence
function simulateBootSequence() {
    const screen = crtLoader.querySelector('.crt-screen');
    const loadingText = screen.querySelector('.loading-text');
    const progressBar = screen.querySelector('.progress-bar');
    const glitchText = screen.querySelector('.glitch-text');
    
    // Clear existing content
    screen.innerHTML = '';
    
    // Add scan line
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    screen.appendChild(scanLine);
    
    // Create boot messages
    const messages = [
        'BIOS v2.0 INITIALIZING...',
        'MEMORY TEST: 64KB OK',
        'CPU: 4.77MHz READY',
        'DISK DRIVE: SEEKING...',
        'LOADING SYSTEM...',
        'READY.'
    ];
    
    let messageIndex = 0;
    let progress = 0;
    
    // Create message container
    const messageContainer = document.createElement('div');
    messageContainer.className = 'boot-messages';
    messageContainer.style.cssText = \`
        color: #00ff00;
        font-size: 12px;
        font-family: 'Courier New', monospace;
        line-height: 1.4;
        margin-bottom: 10px;
        height: 60px;
        overflow: hidden;
    \`;
    screen.appendChild(messageContainer);
    
    // Create progress bar
    const newProgressBar = document.createElement('div');
    newProgressBar.className = 'progress-bar';
    newProgressBar.innerHTML = '<div class="progress-fill"></div>';
    screen.appendChild(newProgressBar);
    
    // Create cursor
    const cursor = document.createElement('div');
    cursor.className = 'glitch-text';
    cursor.textContent = '>';
    screen.appendChild(cursor);
    
    // Simulate typing effect
    function typeMessage(message, callback) {
        let i = 0;
        const messageDiv = document.createElement('div');
        messageContainer.appendChild(messageDiv);
        
        function typeChar() {
            if (i < message.length) {
                messageDiv.textContent += message.charAt(i);
                i++;
                setTimeout(typeChar, 50 + Math.random() * 50);
            } else {
                messageDiv.innerHTML += '<br>';
                if (callback) callback();
            }
        }
        
        typeChar();
    }
    
    // Simulate boot process
    function bootStep() {
        if (messageIndex < messages.length) {
            typeMessage(messages[messageIndex], () => {
                messageIndex++;
                progress = (messageIndex / messages.length) * 100;
                
                // Update progress bar
                const progressFill = newProgressBar.querySelector('.progress-fill');
                progressFill.style.cssText = \`
                    width: \${progress}%;
                    height: 100%;
                    background: linear-gradient(90deg, 
                        #00ff00, 
                        #00cc00, 
                        #00ff00);
                    transition: width 0.5s ease;
                    box-shadow: 0 0 10px #00ff00;
                \`;
                
                // Random glitch effect
                if (Math.random() > 0.7) {
                    messageContainer.style.transform = 'translateX(' + (Math.random() > 0.5 ? 2 : -2) + 'px)';
                    setTimeout(() => {
                        messageContainer.style.transform = 'translateX(0)';
                    }, 100);
                }
                
                bootStep();
            });
        }
    }
    
    bootStep();
}

// Change CRT color scheme
function setCRTColor(scheme) {
    const colors = {
        amber: { primary: '#ffaa00', glow: 'rgba(255, 170, 0, 0.3)' },
        green: { primary: '#00ff00', glow: 'rgba(0, 255, 0, 0.3)' },
        blue: { primary: '#0088ff', glow: 'rgba(0, 136, 255, 0.3)' },
        white: { primary: '#ffffff', glow: 'rgba(255, 255, 255, 0.3)' }
    };
    
    const color = colors[scheme] || colors.green;
    
    // Update all green elements
    const elements = crtLoader.querySelectorAll('[style*="00ff00"], [style*="00cc00"]');
    elements.forEach(el => {
        el.style.cssText = el.style.cssText
            .replace(/#00ff00/g, color.primary)
            .replace(/#00cc00/g, color.primary + 'cc')
            .replace(/rgba\(0, 255, 0/g, \`rgba(\${color.primary.replace('#', '').match(/.{2}/g).map(c => parseInt(c, 16)).join(', ')}\`)
            .replace(/rgba\(0, 204, 0/g, \`rgba(\${color.primary.replace('#', '').match(/.{2}/g).map(c => parseInt(c, 16) * 0.8).join(', ')}\`);
    });
    
    // Update box shadows
    crtLoader.style.boxShadow = \`
        0 0 20px \${color.glow},
        inset 0 0 30px \${color.glow.replace('0.3', '0.1')}
    \`;
}

// Add screen saver mode
function enableScreenSaver() {
    const screen = crtLoader.querySelector('.crt-screen');
    screen.innerHTML = '';
    
    // Create bouncing ball
    const ball = document.createElement('div');
    ball.className = 'bouncing-ball';
    ball.style.cssText = \`
        position: absolute;
        width: 10px;
        height: 10px;
        background: #00ff00;
        border-radius: 50%;
        box-shadow: 0 0 10px #00ff00;
    \`;
    screen.appendChild(ball);
    
    let x = 50, y = 50;
    let dx = 2, dy = 2;
    
    function animateBall() {
        x += dx;
        y += dy;
        
        // Bounce off walls
        if (x <= 5 || x >= 95) dx = -dx;
        if (y <= 5 || y >= 95) dy = -dy;
        
        ball.style.left = x + '%';
        ball.style.top = y + '%';
        
        requestAnimationFrame(animateBall);
    }
    
    animateBall();
    
    // Add trail effect
    setInterval(() => {
        const trail = document.createElement('div');
        trail.style.cssText = \`
            position: absolute;
            width: 6px;
            height: 6px;
            background: rgba(0, 255, 0, 0.3);
            border-radius: 50%;
            left: \${x}%;
            top: \${y}%;
            transition: opacity 1s;
        \`;
        screen.appendChild(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            setTimeout(() => trail.remove(), 1000);
        }, 100);
    }, 100);
}`
    },

    // ====================================================================
    // TEMPLATE 83: Morphing Text Loader
    // ====================================================================
    loader83: {
        name: "Morphing Text Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="morphing-text-loader">
        <span class="text-part" data-text="LOADING">LOADING</span>
        <span class="text-part" data-text="PLEASE">PLEASE</span>
        <span class="text-part" data-text="WAIT">WAIT</span>
    </div>
</div>`,
        css: `.morphing-text-loader {
    width: 180px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.morphing-text-loader .text-part {
    position: absolute;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 24px;
    font-weight: 800;
    color: #7c3aed;
    opacity: 0;
    animation: textMorph 6s infinite;
    text-shadow: 0 2px 10px rgba(124, 58, 237, 0.3);
}

.morphing-text-loader .text-part:nth-child(1) {
    animation-delay: 0s;
}

.morphing-text-loader .text-part:nth-child(2) {
    animation-delay: 2s;
}

.morphing-text-loader .text-part:nth-child(3) {
    animation-delay: 4s;
}

@keyframes textMorph {
    0% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        filter: blur(5px);
    }
    15% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
    30% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0);
    }
    45% {
        opacity: 0;
        transform: translateY(-20px) scale(1.2);
        filter: blur(5px);
    }
    100% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        filter: blur(5px);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control morphing text loader
const morphingLoader = document.querySelector('.morphing-text-loader');

// Create custom text sequence
function createTextSequence(texts) {
    morphingLoader.innerHTML = '';
    
    texts.forEach((text, index) => {
        const textPart = document.createElement('span');
        textPart.className = 'text-part';
        textPart.textContent = text;
        textPart.dataset.text = text;
        
        // Calculate delay based on index
        const delay = index * (6 / texts.length);
        textPart.style.animationDelay = \`\${delay}s\`;
        
        morphingLoader.appendChild(textPart);
    });
    
    // Adjust animation duration based on number of texts
    const totalDuration = texts.length * 2;
    document.querySelectorAll('.text-part').forEach(part => {
        part.style.animationDuration = \`\${totalDuration}s\`;
    });
}

// Change morphing style
function setMorphingStyle(style) {
    const keyframes = {
        wave: \`
            @keyframes textMorph {
                0% {
                    opacity: 0;
                    transform: translateY(20px) rotateX(90deg);
                    filter: blur(10px);
                }
                20% {
                    opacity: 1;
                    transform: translateY(0) rotateX(0);
                    filter: blur(0);
                }
                40% {
                    opacity: 1;
                    transform: translateY(0) rotateX(0);
                    filter: blur(0);
                }
                60% {
                    opacity: 0;
                    transform: translateY(-20px) rotateX(-90deg);
                    filter: blur(10px);
                }
                100% {
                    opacity: 0;
                    transform: translateY(20px) rotateX(90deg);
                    filter: blur(10px);
                }
            }
        \`,
        slide: \`
            @keyframes textMorph {
                0% {
                    opacity: 0;
                    transform: translateX(-100px) scale(0.8);
                    filter: blur(5px);
                }
                20% {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                    filter: blur(0);
                }
                40% {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                    filter: blur(0);
                }
                60% {
                    opacity: 0;
                    transform: translateX(100px) scale(1.2);
                    filter: blur(5px);
                }
                100% {
                    opacity: 0;
                    transform: translateX(-100px) scale(0.8);
                    filter: blur(5px);
                }
            }
        \`,
        zoom: \`
            @keyframes textMorph {
                0% {
                    opacity: 0;
                    transform: scale(0.5) rotate(-180deg);
                    filter: blur(10px);
                }
                20% {
                    opacity: 1;
                    transform: scale(1) rotate(0);
                    filter: blur(0);
                }
                40% {
                    opacity: 1;
                    transform: scale(1) rotate(0);
                    filter: blur(0);
                }
                60% {
                    opacity: 0;
                    transform: scale(1.5) rotate(180deg);
                    filter: blur(10px);
                }
                100% {
                    opacity: 0;
                    transform: scale(0.5) rotate(-180deg);
                    filter: blur(10px);
                }
            }
        \`
    };
    
    const styleSheet = document.styleSheets[0];
    const existingRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'textMorph'
    );
    
    if (existingRule) {
        styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingRule));
    }
    
    styleSheet.insertRule(keyframes[style] || keyframes.wave, styleSheet.cssRules.length);
}

// Create typing effect instead of morphing
function createTypingEffect(text, speed = 100) {
    morphingLoader.innerHTML = '';
    
    const container = document.createElement('div');
    container.className = 'typing-container';
    container.style.cssText = \`
        position: relative;
        font-family: 'Courier New', monospace;
        font-size: 20px;
        color: #7c3aed;
        text-shadow: 0 2px 10px rgba(124, 58, 237, 0.3);
    \`;
    
    const textDisplay = document.createElement('span');
    textDisplay.className = 'typing-text';
    container.appendChild(textDisplay);
    
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '|';
    cursor.style.cssText = \`
        animation: cursorBlink 1s infinite;
        color: #ec4899;
    \`;
    container.appendChild(cursor);
    
    morphingLoader.appendChild(container);
    
    // Typing animation
    let i = 0;
    function typeCharacter() {
        if (i < text.length) {
            textDisplay.textContent += text.charAt(i);
            i++;
            setTimeout(typeCharacter, speed);
        } else {
            // Start deleting after a pause
            setTimeout(deleteText, 1000);
        }
    }
    
    function deleteText() {
        if (i > 0) {
            textDisplay.textContent = text.substring(0, i - 1);
            i--;
            setTimeout(deleteText, speed / 2);
        } else {
            // Start typing again after a pause
            setTimeout(() => typeCharacter(), 500);
        }
    }
    
    typeCharacter();
}

// Create gradient text effect
function createGradientText(text, colors) {
    morphingLoader.innerHTML = '';
    
    const gradientText = document.createElement('div');
    gradientText.className = 'gradient-text';
    gradientText.textContent = text;
    gradientText.style.cssText = \`
        font-size: 24px;
        font-weight: 800;
        background: linear-gradient(90deg, \${colors.join(', ')});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 100%;
        animation: gradientShift 3s ease infinite;
    \`;
    
    morphingLoader.appendChild(gradientText);
    
    // Add gradient shift animation
    const keyframes = \`
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const existingRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'gradientShift'
    );
    
    if (!existingRule) {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }
}`
    },

    // ====================================================================
    // TEMPLATE 84: Particle Explosion Loader
    // ====================================================================
    loader84: {
        name: "Particle Explosion Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="particle-explosion-loader">
        <div class="core"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>
</div>`,
        css: `.particle-explosion-loader {
    position: relative;
    width: 100px;
    height: 100px;
}

.particle-explosion-loader .core {
    position: absolute;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle at center, 
        #7c3aed 0%, 
        #ec4899 50%, 
        transparent 70%);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: corePulse 2s ease-in-out infinite;
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
    filter: blur(1px);
}

.particle-explosion-loader .particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: particleExplode 2s ease-in-out infinite;
    filter: drop-shadow(0 0 4px #7c3aed);
}

.particle-explosion-loader .particle:nth-child(2) {
    animation-delay: 0s;
}

.particle-explosion-loader .particle:nth-child(3) {
    animation-delay: -0.33s;
}

.particle-explosion-loader .particle:nth-child(4) {
    animation-delay: -0.66s;
}

.particle-explosion-loader .particle:nth-child(5) {
    animation-delay: -1s;
}

.particle-explosion-loader .particle:nth-child(6) {
    animation-delay: -1.33s;
}

@keyframes corePulse {
    0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 0.3;
    }
}

@keyframes particleExplode {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    50% {
        transform: 
            translate(
                calc(-50% + var(--x, 0px)), 
                calc(-50% + var(--y, 0px))
            ) 
            scale(1.5);
        opacity: 0.8;
    }
    80% {
        opacity: 0.3;
    }
    100% {
        transform: 
            translate(
                calc(-50% + var(--x, 0px)), 
                calc(-50% + var(--y, 0px))
            ) 
            scale(0);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control particle explosion loader
const particleLoader = document.querySelector('.particle-explosion-loader');

// Create particle explosion with custom particles
function createExplosion(particleCount, explosionForce) {
    particleLoader.innerHTML = '';
    
    // Create core
    const core = document.createElement('div');
    core.className = 'core';
    particleLoader.appendChild(core);
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Calculate random explosion direction
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = 30 + Math.random() * 20 * explosionForce;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        // Random properties
        const size = 4 + Math.random() * 8;
        const delay = Math.random() * 2;
        const duration = 1 + Math.random() * 1.5;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');
        particle.style.animationDelay = -delay + 's';
        particle.style.animationDuration = duration + 's';
        
        // Random color
        const hue = 270 + Math.random() * 60;
        particle.style.background = \`linear-gradient(45deg, 
            hsl(\${hue}, 80%, 60%), 
            hsl(\${hue + 30}, 90%, 50%))\`;
        
        particleLoader.appendChild(particle);
    }
}

// Create different explosion patterns
function createExplosionPattern(pattern) {
    const patterns = {
        circle: (i, total) => {
            const angle = (i / total) * Math.PI * 2;
            const x = Math.cos(angle) * 40;
            const y = Math.sin(angle) * 40;
            return { x, y };
        },
        spiral: (i, total) => {
            const angle = (i / total) * Math.PI * 8;
            const distance = (i / total) * 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            return { x, y };
        },
        random: () => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 20 + Math.random() * 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            return { x, y };
        },
        flower: (i, total) => {
            const angle = (i / total) * Math.PI * 2;
            const petals = 5;
            const distance = 30 * Math.abs(Math.sin(petals * angle / 2));
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            return { x, y };
        }
    };
    
    const patternFn = patterns[pattern] || patterns.circle;
    createExplosion(12, 1);
    
    // Update particles with pattern
    const particles = particleLoader.querySelectorAll('.particle');
    particles.forEach((particle, i) => {
        const { x, y } = patternFn(i, particles.length);
        particle.style.setProperty('--x', x + 'px');
        particle.style.setProperty('--y', y + 'px');
    });
}

// Simulate chain reaction
function simulateChainReaction(stages) {
    particleLoader.innerHTML = '';
    
    let currentStage = 0;
    
    function createStage() {
        if (currentStage >= stages) return;
        
        const centerX = Math.random() * 80 - 40;
        const centerY = Math.random() * 80 - 40;
        
        // Create new core for this stage
        const newCore = document.createElement('div');
        newCore.className = 'core';
        newCore.style.cssText = \`
            position: absolute;
            width: 20px;
            height: 20px;
            top: calc(50% + \${centerY}px);
            left: calc(50% + \${centerX}px);
            transform: translate(-50%, -50%);
            animation: corePulse 1s ease-in-out infinite;
        \`;
        particleLoader.appendChild(newCore);
        
        // Create particles for this stage
        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const angle = (i / 6) * Math.PI * 2;
            const distance = 25;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;
            
            particle.style.cssText = \`
                position: absolute;
                width: 6px;
                height: 6px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: particleExplode 1.5s ease-in-out infinite;
                animation-delay: \${currentStage * 0.5}s;
                --x: \${x}px;
                --y: \${y}px;
            \`;
            
            particleLoader.appendChild(particle);
        }
        
        currentStage++;
        setTimeout(createStage, 500);
    }
    
    createStage();
}

// Create gravitational pull effect
function createGravityEffect() {
    const core = particleLoader.querySelector('.core');
    const particles = particleLoader.querySelectorAll('.particle');
    
    // Make core larger and pulsing
    core.style.animation = 'gravityCore 2s ease-in-out infinite';
    
    // Update particle animation for gravity
    particles.forEach(particle => {
        particle.style.animation = 'gravityParticle 3s ease-in-out infinite';
    });
    
    // Add gravity keyframes
    const keyframes = \`
        @keyframes gravityCore {
            0%, 100% {
                transform: translate(-50%, -50%) scale(1);
                box-shadow: 0 0 40px rgba(124, 58, 237, 0.6);
            }
            50% {
                transform: translate(-50%, -50%) scale(1.3);
                box-shadow: 0 0 60px rgba(236, 72, 153, 0.8);
            }
        }
        
        @keyframes gravityParticle {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            20% {
                opacity: 1;
                transform: translate(
                    calc(-50% + var(--x, 0px)), 
                    calc(-50% + var(--y, 0px))
                ) scale(1.2);
            }
            60% {
                opacity: 0.8;
                transform: translate(-50%, -50%) scale(0.8);
            }
            100% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    const existingCoreRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'gravityCore'
    );
    const existingParticleRule = Array.from(styleSheet.cssRules).find(rule => 
        rule.name === 'gravityParticle'
    );
    
    if (existingCoreRule) styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingCoreRule));
    if (existingParticleRule) styleSheet.deleteRule(Array.from(styleSheet.cssRules).indexOf(existingParticleRule));
    
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}`
    },

    // ====================================================================
    // TEMPLATE 85: DNA Strand Loader
    // ====================================================================
    loader85: {
        name: "DNA Strand Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="dna-strand-loader">
        <div class="backbone"></div>
        <div class="backbone"></div>
        <div class="base-pair"></div>
        <div class="base-pair"></div>
        <div class="base-pair"></div>
        <div class="base-pair"></div>
    </div>
</div>`,
        css: `.dna-strand-loader {
    position: relative;
    width: 120px;
    height: 80px;
    transform-style: preserve-3d;
    animation: dnaRotate 6s linear infinite;
}

.dna-strand-loader .backbone {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, 
        transparent, 
        #3b82f6, 
        transparent);
    border-radius: 1px;
}

.dna-strand-loader .backbone:nth-child(1) {
    left: 30%;
    transform: rotateY(0deg);
}

.dna-strand-loader .backbone:nth-child(2) {
    right: 30%;
    transform: rotateY(180deg);
}

.dna-strand-loader .base-pair {
    position: absolute;
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, 
        transparent, 
        #10b981, 
        #ec4899, 
        transparent);
    left: 30%;
    top: var(--top, 0%);
    transform-origin: left center;
    animation: basePairConnect 2s ease-in-out infinite;
    animation-delay: var(--delay, 0s);
    filter: drop-shadow(0 0 3px #10b981);
}

.dna-strand-loader .base-pair:nth-child(3) {
    --top: 10%;
    --delay: 0s;
}

.dna-strand-loader .base-pair:nth-child(4) {
    --top: 30%;
    --delay: -0.5s;
}

.dna-strand-loader .base-pair:nth-child(5) {
    --top: 50%;
    --delay: -1s;
}

.dna-strand-loader .base-pair:nth-child(6) {
    --top: 70%;
    --delay: -1.5s;
}

@keyframes dnaRotate {
    0% {
        transform: rotateX(60deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(60deg) rotateY(360deg);
    }
}

@keyframes basePairConnect {
    0%, 100% {
        transform: rotateZ(0deg);
        width: 40px;
        opacity: 0.5;
    }
    50% {
        transform: rotateZ(180deg);
        width: 60px;
        opacity: 1;
        filter: drop-shadow(0 0 6px #ec4899);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control DNA strand loader
const dnaLoader = document.querySelector('.dna-strand-loader');

// Create DNA strand with custom parameters
function createDNAStrand(basePairs, twist) {
    dnaLoader.innerHTML = '';
    
    // Create backbones
    const backbone1 = document.createElement('div');
    backbone1.className = 'backbone';
    backbone1.style.left = '30%';
    dnaLoader.appendChild(backbone1);
    
    const backbone2 = document.createElement('div');
    backbone2.className = 'backbone';
    backbone2.style.right = '30%';
    dnaLoader.appendChild(backbone2);
    
    // Create base pairs
    for (let i = 0; i < basePairs; i++) {
        const basePair = document.createElement('div');
        basePair.className = 'base-pair';
        
        const top = (i / (basePairs - 1)) * 80 + 10;
        const delay = (i / basePairs) * 2;
        
        basePair.style.setProperty('--top', top + '%');
        basePair.style.setProperty('--delay', -delay + 's');
        basePair.style.animationDuration = (2 / twist) + 's';
        
        // Alternate colors for different base pairs
        const colors = [
            ['#10b981', '#ec4899'], // A-T
            ['#3b82f6', '#8b5cf6'], // G-C
            ['#f59e0b', '#fbbf24'], // Custom 1
            ['#ef4444', '#f97316']  // Custom 2
        ];
        const colorPair = colors[i % colors.length];
        basePair.style.background = \`linear-gradient(to right, 
            transparent, 
            \${colorPair[0]}, 
            \${colorPair[1]}, 
            transparent)\`;
        
        dnaLoader.appendChild(basePair);
    }
    
    // Adjust rotation speed based on twist
    dnaLoader.style.animationDuration = (6 / twist) + 's';
}

// Create different DNA structures
function createDNAStructure(structure) {
    switch(structure) {
        case 'double-helix':
            // Standard double helix
            createDNAStrand(8, 1);
            break;
            
        case 'triple-helix':
            // Create three backbones
            dnaLoader.innerHTML = '';
            
            for (let b = 0; b < 3; b++) {
                const backbone = document.createElement('div');
                backbone.className = 'backbone';
                backbone.style.cssText = \`
                    position: absolute;
                    width: 2px;
                    height: 100%;
                    background: linear-gradient(to bottom, 
                        transparent, 
                        #3b82f6, 
                        transparent);
                    border-radius: 1px;
                    left: \${30 + b * 20}%;
                \`;
                dnaLoader.appendChild(backbone);
            }
            
            // Create connecting lines
            for (let i = 0; i < 6; i++) {
                const connector = document.createElement('div');
                connector.className = 'connector';
                connector.style.cssText = \`
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(to right, 
                        #10b981, 
                        #ec4899);
                    top: \${10 + i * 15}%;
                    left: 30%;
                    right: 30%;
                    transform-origin: center;
                    animation: tripleHelix 2s ease-in-out infinite;
                    animation-delay: \${-i * 0.3}s;
                    filter: drop-shadow(0 0 3px #10b981);
                \`;
                dnaLoader.appendChild(connector);
            }
            break;
            
        case 'circular':
            // Circular DNA (plasmid)
            dnaLoader.innerHTML = '';
            dnaLoader.style.animation = 'dnaRotate 8s linear infinite';
            
            const circle = document.createElement('div');
            circle.className = 'circular-dna';
            circle.style.cssText = \`
                position: absolute;
                width: 80px;
                height: 80px;
                border: 2px solid #3b82f6;
                border-radius: 50%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation: circularPulse 3s ease-in-out infinite;
            \`;
            dnaLoader.appendChild(circle);
            
            // Add base pairs around the circle
            for (let i = 0; i < 12; i++) {
                const base = document.createElement('div');
                base.className = 'circular-base';
                const angle = (i / 12) * Math.PI * 2;
                const x = 40 + 35 * Math.cos(angle);
                const y = 40 + 35 * Math.sin(angle);
                
                base.style.cssText = \`
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    background: \${i % 2 ? '#10b981' : '#ec4899'};
                    border-radius: 50%;
                    top: \${y}px;
                    left: \${x}px;
                    transform: translate(-50%, -50%);
                    animation: circularBase 2s ease-in-out infinite;
                    animation-delay: \${-i * 0.2}s;
                    filter: drop-shadow(0 0 3px currentColor);
                \`;
                dnaLoader.appendChild(base);
            }
            break;
    }
}

// Simulate DNA replication
function simulateReplication() {
    const originalBackbone = dnaLoader.querySelector('.backbone');
    const basePairs = dnaLoader.querySelectorAll('.base-pair');
    
    // Create new backbone (daughter strand)
    const newBackbone = document.createElement('div');
    newBackbone.className = 'backbone new-backbone';
    newBackbone.style.cssText = \`
        position: absolute;
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom, 
            transparent, 
            #f59e0b, 
            transparent);
        border-radius: 1px;
        left: 40%;
        opacity: 0;
        animation: backboneReplicate 4s ease-out infinite;
    \`;
    dnaLoader.appendChild(newBackbone);
    
    // Create new base pairs
    basePairs.forEach((basePair, i) => {
        setTimeout(() => {
            const newBasePair = basePair.cloneNode(true);
            newBasebone.className = 'base-pair new-base-pair';
            newBasePair.style.cssText += \`
                left: 40%;
                background: linear-gradient(to right, 
                    transparent, 
                    #f59e0b, 
                    #fbbf24, 
                    transparent);
                animation: basePairReplicate 2s ease-out \${i * 0.5}s;
            \`;
            dnaLoader.appendChild(newBasePair);
        }, i * 500);
    });
    
    // Add replication animations
    const keyframes = \`
        @keyframes backboneReplicate {
            0% {
                height: 0;
                opacity: 0;
            }
            50% {
                height: 100%;
                opacity: 1;
            }
            100% {
                height: 100%;
                opacity: 1;
            }
        }
        
        @keyframes basePairReplicate {
            0% {
                transform: rotateZ(0deg) scale(0);
                opacity: 0;
            }
            50% {
                transform: rotateZ(90deg) scale(1);
                opacity: 1;
            }
            100% {
                transform: rotateZ(180deg) scale(1);
                opacity: 1;
            }
        }
    \`;
    
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
}

// Create genetic code visualization
function visualizeGeneticCode(sequence) {
    dnaLoader.innerHTML = '';
    
    // Convert sequence to visual elements
    const bases = {
        'A': { color: '#10b981', symbol: 'A' },
        'T': { color: '#ec4899', symbol: 'T' },
        'G': { color: '#3b82f6', symbol: 'G' },
        'C': { color: '#8b5cf6', symbol: 'C' }
    };
    
    // Create visualization
    for (let i = 0; i < Math.min(sequence.length, 8); i++) {
        const base = sequence[i];
        const baseInfo = bases[base] || bases['A'];
        
        const baseElement = document.createElement('div');
        baseElement.className = 'genetic-base';
        baseElement.textContent = baseInfo.symbol;
        baseElement.style.cssText = \`
            position: absolute;
            width: 20px;
            height: 20px;
            background: \${baseInfo.color};
            border-radius: 50%;
            top: 50%;
            left: \${10 + i * 12}%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 12px;
            animation: basePulse 1s ease-in-out infinite;
            animation-delay: \${-i * 0.2}s;
            box-shadow: 0 0 10px \${baseInfo.color};
        \`;
        
        dnaLoader.appendChild(baseElement);
    }
    
    // Create connecting lines
    for (let i = 0; i < Math.min(sequence.length, 8) - 1; i++) {
        const connector = document.createElement('div');
        connector.className = 'genetic-connector';
        connector.style.cssText = \`
            position: absolute;
            width: 12px;
            height: 2px;
            background: linear-gradient(to right, 
                \${bases[sequence[i]]?.color || '#10b981'}, 
                \${bases[sequence[i + 1]]?.color || '#ec4899'});
            top: 50%;
            left: \${10 + i * 12 + 6}%;
            transform: translateY(-50%);
            animation: connectorPulse 1s ease-in-out infinite;
            animation-delay: \${-i * 0.2}s;
        \`;
        dnaLoader.appendChild(connector);
    }
}`
    },
        // ====================================================================
    // TEMPLATE 86: Unique Bar Loader
    // ====================================================================
    loader86: {
        name: "Unique Bar Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="unique-bar-loader">
        <div class="bar-86"></div>
        <div class="bar-86"></div>
        <div class="bar-86"></div>
        <div class="bar-86"></div>
        <div class="bar-86"></div>
    </div>
</div>`,
        css: `.unique-bar-loader {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 50px;
    gap: 8px;
}

.bar-86 {
    width: 12px;
    height: 40px;
    background: linear-gradient(to top, #7c3aed, #ec4899);
    border-radius: 6px 6px 0 0;
    animation: barWave86 1.5s ease-in-out infinite;
    box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
}

.bar-86:nth-child(2) { 
    animation-delay: 0.1s; 
    height: 30px; 
}
.bar-86:nth-child(3) { 
    animation-delay: 0.2s; 
    height: 50px; 
}
.bar-86:nth-child(4) { 
    animation-delay: 0.3s; 
    height: 30px; 
}
.bar-86:nth-child(5) { 
    animation-delay: 0.4s; 
    height: 40px; 
}

@keyframes barWave86 {
    0%, 100% {
        transform: scaleY(1);
        opacity: 1;
    }
    50% {
        transform: scaleY(0.3);
        opacity: 0.7;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control unique bar loader
const barLoader = document.querySelector('.unique-bar-loader');

// Change bar colors
function changeBarColors(color1, color2) {
    document.querySelectorAll('.bar-86').forEach(bar => {
        bar.style.background = \`linear-gradient(to top, \${color1}, \${color2})\`;
    });
}

// Change animation speed
function setBarSpeed(speed) {
    document.querySelectorAll('.bar-86').forEach(bar => {
        bar.style.animationDuration = speed + 's';
    });
}

// Change number of bars
function setBarCount(count) {
    const container = document.querySelector('.unique-bar-loader');
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const bar = document.createElement('div');
        bar.className = 'bar-86';
        bar.style.height = (30 + i * 5) + 'px';
        bar.style.animationDelay = \`\${i * 0.1}s\`;
        container.appendChild(bar);
    }
}`
    },

    // ====================================================================
    // TEMPLATE 87: Pouring Liquid Loader
    // ====================================================================
    loader87: {
        name: "Pouring Liquid Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="loader-87"></div>
</div>`,
        css: `.loader-87 {
    --c1: #673b14;
    --c2: #f8b13b;
    width: 40px;
    height: 80px;
    border-top: 4px solid var(--c1);
    border-bottom: 4px solid var(--c1);
    background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px, var(--c1) 0) 50%/7px 8px no-repeat;
    display: grid;
    overflow: hidden;
    animation: l5-0 2s infinite linear;
}

.loader-87::before,
.loader-87::after {
    content: "";
    grid-area: 1/1;
    width: 75%;
    height: calc(50% - 4px);
    margin: 0 auto;
    border: 2px solid var(--c1);
    border-top: 0;
    box-sizing: content-box;
    border-radius: 0 0 40% 40%;
    -webkit-mask: linear-gradient(#000 0 0) bottom/4px 2px no-repeat,
                  linear-gradient(#000 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    background: linear-gradient(var(--d,0deg), var(--c2) 50%, #0000 0) bottom /100% 205%,
                linear-gradient(var(--c2) 0 0) center/0 100%;
    background-repeat: no-repeat;
    animation: inherit;
    animation-name: l5-1;
}

.loader-87::after {
    transform-origin: 50% calc(100% + 2px);
    transform: scaleY(-1);
    --s: 3px;
    --d: 180deg;
}

@keyframes l5-0 {
    80% { transform: rotate(0); }
    100% { transform: rotate(0.5turn); }
}

@keyframes l5-1 {
    10%, 70% {
        background-size: 100% 205%, var(--s,0) 100%;
    }
    70%, 100% {
        background-position: top, center;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control liquid loader
const liquidLoader = document.querySelector('.loader-87');

// Change liquid colors
function changeLiquidColors(color1, color2) {
    liquidLoader.style.setProperty('--c1', color1);
    liquidLoader.style.setProperty('--c2', color2);
}

// Change animation speed
function setLiquidSpeed(speed) {
    liquidLoader.style.animationDuration = speed + 's';
}

// Change size
function setLiquidSize(width, height) {
    liquidLoader.style.width = width + 'px';
    liquidLoader.style.height = height + 'px';
}`
    },

    // ====================================================================
    // TEMPLATE 88: Percentage Loader
    // ====================================================================
    loader88: {
        name: "Percentage Loader",
        category: "progress",
        html: `<div class="loader-container">
    <div class="loader-88"></div>
</div>`,
        css: `.loader-88 {
    display: block;
    position: relative;
    height: 32px;
    width: 200px;
    background: #fff;
    border: 2px solid #fff;
    color: #7c3aed;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
}

.loader-88::before {
    content: '';
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    animation: loading88 5s linear infinite;
    border-radius: 6px;
}

.loader-88::after {
    content: '0%';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    color: white;
    font-weight: bold;
    mix-blend-mode: difference;
    animation: percentage88 5s linear infinite;
}

@keyframes loading88 {
    0% { width: 0; }
    100% { width: 100%; }
}

@keyframes percentage88 {
    0% { content: "0%"; }
    5% { content: "5%"; }
    10% { content: "10%"; }
    20% { content: "20%"; }
    30% { content: "30%"; }
    40% { content: "40%"; }
    50% { content: "50%"; }
    60% { content: "60%"; }
    70% { content: "70%"; }
    80% { content: "80%"; }
    90% { content: "90%"; }
    95% { content: "95%"; }
    96% { content: "96%"; }
    97% { content: "97%"; }
    98% { content: "98%"; }
    99% { content: "99%"; }
    100% { content: "100%"; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control percentage loader
const percentageLoader = document.querySelector('.loader-88');

// Change colors
function setPercentageColors(color1, color2, bgColor) {
    percentageLoader.style.setProperty('--loader-color', color1);
    percentageLoader.style.setProperty('--loader-bg', bgColor);
    
    const beforeStyle = window.getComputedStyle(percentageLoader, '::before');
    percentageLoader.style.setProperty('--loader-gradient', \`linear-gradient(90deg, \${color1}, \${color2})\`);
}

// Change animation duration
function setPercentageSpeed(duration) {
    percentageLoader.style.animationDuration = duration + 's';
    
    // Update pseudo-element animation
    const style = document.createElement('style');
    style.textContent = \`
        .loader-88::before {
            animation: loading88 \${duration}s linear infinite;
        }
        .loader-88::after {
            animation: percentage88 \${duration}s linear infinite;
        }
    \`;
    document.head.appendChild(style);
}

// Set custom percentage values
function setCustomPercentages(steps) {
    const style = document.createElement('style');
    let keyframes = \`@keyframes customPercentage {\`;
    
    steps.forEach((step, index) => {
        const percentage = (index / (steps.length - 1)) * 100;
        keyframes += \`\${percentage}% { content: "\${step}"; }\`;
    });
    
    keyframes += \`}\`;
    style.textContent = keyframes;
    document.head.appendChild(style);
    
    percentageLoader.style.animationName = 'customPercentage';
}`
    },

    // ====================================================================
    // TEMPLATE 89: 3D Interactive Loader
    // ====================================================================
    loader89: {
        name: "3D Interactive Loader",
        category: "animated",
        html: `<div class="loader-container loader-container-89">
    <div class="area-89"></div>
    <div class="area-89"></div>
    <div class="area-89"></div>
    <div class="area-89"></div>
    <div class="area-89"></div>
    <div class="area-89"></div>
    <div class="loader-89">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>`,
        css: `.loader-container-89 {
    --color-primary: #7c3aed;
    --color-neutral: #f8fafc;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1000px;
}

.area-89 {
    position: absolute;
    width: 16.666%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
}

.area-89:nth-of-type(1) { left: 0; }
.area-89:nth-of-type(2) { left: 16.666%; }
.area-89:nth-of-type(3) { left: 33.333%; }
.area-89:nth-of-type(4) { left: 50%; }
.area-89:nth-of-type(5) { left: 66.666%; }
.area-89:nth-of-type(6) { left: 83.333%; }

.loader-89 {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transition: all 0.15s linear;
    transform: translate(-50%, -50%) rotateX(-20deg);
}

.loader-89 span {
    position: relative;
    height: 25px;
    background-color: var(--color-neutral);
    border-top: 0.2rem solid var(--color-primary);
    border-bottom: 0.2rem solid var(--color-primary);
}

.loader-89 span::before {
    content: "";
    position: absolute;
    top: 0.2rem;
    width: 100%;
    height: calc(100% - 0.4rem);
    background: linear-gradient(90deg, var(--color-primary), #ec4899);
    clip-path: inset(0 100% 0 0);
    animation: progress89 2s linear infinite;
}

.loader-89 > span:nth-of-type(1) {
    width: 80px;
    border-left: 0.2rem solid var(--color-primary);
    border-radius: 8px 0 0 8px;
}

.loader-89 > span:nth-of-type(1)::before {
    left: 0.2rem;
    width: calc(100% - 0.2rem + 1px);
    border-radius: 4px 0 0 4px;
}

.loader-89 > span:nth-of-type(2) {
    width: 8px;
}

.loader-89 > span:nth-of-type(2)::before {
    left: -1px;
    width: calc(100% + 2px);
}

.loader-89 > span:nth-of-type(3) {
    width: 40px;
    transform: translateZ(30px);
}

.loader-89 > span:nth-of-type(3)::before {
    left: -1px;
    width: calc(100% + 2px);
}

.loader-89 > span:nth-of-type(4) {
    width: 30px;
    border-right: 0.2rem solid var(--color-primary);
    border-radius: 0 8px 8px 0;
}

.loader-89 > span:nth-of-type(4)::before {
    right: 0.2rem;
    width: calc(100% - 0.2rem + 1px);
    border-radius: 0 4px 4px 0;
}

@keyframes progress89 {
    to {
        clip-path: inset(0 0 0 0);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control 3D interactive loader
const loader3D = document.querySelector('.loader-89');
const areas = document.querySelectorAll('.area-89');

// Change 3D perspective
function setPerspective(value) {
    document.querySelector('.loader-container-89').style.perspective = value + 'px';
}

// Change colors
function set3DColors(primary, neutral) {
    const container = document.querySelector('.loader-container-89');
    container.style.setProperty('--color-primary', primary);
    container.style.setProperty('--color-neutral', neutral);
}

// Reset rotation
function reset3DRotation() {
    loader3D.style.transform = 'translate(-50%, -50%) rotateX(-20deg) rotateY(0deg)';
}

// Interactive hover effects
areas.forEach((area, index) => {
    area.addEventListener('mouseenter', () => {
        const row = Math.floor(index / 6);
        const col = index % 6;
        
        let rotateX = -20;
        let rotateY = 0;
        
        if (row === 0) rotateX = -20;
        else if (row === 1) rotateX = -10;
        else if (row === 2) rotateX = -5;
        else if (row === 3) rotateX = 5;
        else if (row === 4) rotateX = 10;
        else if (row === 5) rotateX = 20;
        
        if (col === 0) rotateY = 20;
        else if (col === 1) rotateY = 10;
        else if (col === 2) rotateY = 5;
        else if (col === 3) rotateY = -5;
        else if (col === 4) rotateY = -10;
        else if (col === 5) rotateY = -20;
        
        loader3D.style.transform = \`translate(-50%, -50%) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
    });
});`
    },

    // ====================================================================
    // TEMPLATE 90: Swinging Bars Loader
    // ====================================================================
    loader90: {
        name: "Swinging Bars Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="bars-loader-90">
        <div class="bar-90"></div>
        <div class="bar-90"></div>
        <div class="bar-90"></div>
        <div class="bar-90"></div>
        <div class="bar-90"></div>
    </div>
</div>`,
        css: `.bars-loader-90 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 60px;
}

.bar-90 {
    position: relative;
    display: inline-block;
    margin: 0 8px;
    width: 10px;
    height: 50px;
    border-radius: 0px;
    background: linear-gradient(to bottom, #7c3aed, #ec4899);
    box-shadow: 0 4px 10px rgba(124, 58, 237, 0.3);
    animation: swing90 infinite 5s cubic-bezier(0.955, -0.01, 1, 1);
    transform-origin: 100% 100%;
}

.bar-90::before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    display: block;
    width: 10px;
    height: 10px;
    background: transparent;
    box-shadow: 0 4px rgba(124, 58, 237, 0.3);
    animation: extend90 infinite 5s cubic-bezier(0.955, -0.01, 1, 1);
    opacity: 0;
    transform-origin: 0% 0%;
}

.bar-90:nth-child(2),
.bar-90:nth-child(2)::before { 
    animation-delay: 0.3s; 
}
.bar-90:nth-child(3),
.bar-90:nth-child(3)::before { 
    animation-delay: 0.6s; 
}
.bar-90:nth-child(4),
.bar-90:nth-child(4)::before { 
    animation-delay: 0.9s; 
}
.bar-90:nth-child(5),
.bar-90:nth-child(5)::before { 
    animation-delay: 1.2s; 
}

.bar-90:last-of-type {
    animation-name: swing-last90;
}

.bar-90:last-of-type::before {
    animation-name: extend-last90;
}

@keyframes swing90 {
    10% { transform: rotate(70deg); }
    60% { transform: rotate(70deg); }
    70% { transform: rotate(0deg); }
}

@keyframes swing-last90 {
    10% { transform: rotate(90deg); }
    60% { transform: rotate(90deg); }
    70% { transform: rotate(0deg); }
}

@keyframes extend90 {
    10% {
        transform: rotate(-70deg);
        width: 20px;
        opacity: 1;
        left: 0px;
        bottom: -1px;
    }
    60% {
        transform: rotate(-70deg);
        width: 20px;
        opacity: 1;
    }
    70% {
        width: 10px;
        transform: rotate(0deg);
        opacity: 0;
    }
}

@keyframes extend-last90 {
    10% {
        transform: rotate(-90deg);
        width: 20px;
        height: 2px;
        opacity: 0.5;
        left: 3px;
        bottom: -1px;
    }
    60% {
        transform: rotate(-90deg);
        width: 20px;
        height: 2px;
        opacity: 0.5;
    }
    70% {
        transform: rotate(0deg);
        width: 10px;
        height: 10px;
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control swinging bars loader
const swingingBars = document.querySelector('.bars-loader-90');

// Change bar colors
function setSwingingColors(color1, color2) {
    document.querySelectorAll('.bar-90').forEach(bar => {
        bar.style.background = \`linear-gradient(to bottom, \${color1}, \${color2})\`;
    });
}

// Change animation speed
function setSwingingSpeed(speed) {
    document.querySelectorAll('.bar-90').forEach(bar => {
        bar.style.animationDuration = speed + 's';
    });
}

// Change shadow color
function setShadowColor(color) {
    document.querySelectorAll('.bar-90').forEach(bar => {
        bar.style.boxShadow = \`0 4px 10px \${color}\`;
    });
    document.querySelectorAll('.bar-90::before').forEach(bar => {
        bar.style.boxShadow = \`0 4px \${color}\`;
    });
}

// Toggle animation
function toggleSwingingAnimation() {
    document.querySelectorAll('.bar-90').forEach(bar => {
        bar.style.animationPlayState = 
            bar.style.animationPlayState === 'paused' ? 'running' : 'paused';
    });
}`
    },
        // ====================================================================
    // TEMPLATE 91: Neon Glow Spinner
    // ====================================================================
    loader91: {
        name: "Neon Glow Spinner",
        category: "animated",
        html: `<div class="loader-container dark-bg">
    <div class="neon-spinner-91"></div>
</div>`,
        css: `.neon-spinner-91 {
    width: 60px;
    height: 60px;
    border: 3px solid transparent;
    border-top: 3px solid #00ff9d;
    border-radius: 50%;
    position: relative;
    animation: neonSpin91 1.5s linear infinite;
    box-shadow: 
        0 0 15px #00ff9d,
        inset 0 0 15px rgba(0, 255, 157, 0.2);
}

.neon-spinner-91::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 3px solid transparent;
    border-top: 3px solid #ff00ff;
    border-radius: 50%;
    animation: neonSpin91 2s linear infinite reverse;
    filter: blur(5px);
    opacity: 0.7;
}

.neon-spinner-91::after {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border: 3px solid transparent;
    border-top: 3px solid #00ffff;
    border-radius: 50%;
    animation: neonSpin91 3s linear infinite;
    filter: blur(10px);
    opacity: 0.4;
}

@keyframes neonSpin91 {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #1a1a2e; /* Dark background for neon effect */
    border-radius: 8px;
}

.dark-bg {
    background: #1a1a2e;
}`,
        js: `// Control neon spinner
const neonSpinner = document.querySelector('.neon-spinner-91');

// Change neon colors
function setNeonColors(color1, color2, color3) {
    neonSpinner.style.borderTopColor = color1;
    neonSpinner.style.boxShadow = \`0 0 15px \${color1}, inset 0 0 15px \${color1}33\`;
    
    // Update pseudo-elements
    const beforeStyle = window.getComputedStyle(neonSpinner, '::before');
    const afterStyle = window.getComputedStyle(neonSpinner, '::after');
    
    // You would need to update via CSS variables or create new elements
    // For simplicity, we'll update via style tag
    const style = document.createElement('style');
    style.textContent = \`
        .neon-spinner-91::before {
            border-top-color: \${color2} !important;
        }
        .neon-spinner-91::after {
            border-top-color: \${color3} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change glow intensity
function setGlowIntensity(intensity) {
    neonSpinner.style.boxShadow = \`0 0 \${intensity}px #00ff9d, inset 0 0 \${intensity}px rgba(0, 255, 157, 0.2)\`;
}

// Change animation speeds
function setNeonSpeeds(mainSpeed, beforeSpeed, afterSpeed) {
    neonSpinner.style.animationDuration = mainSpeed + 's';
    
    const style = document.createElement('style');
    style.textContent = \`
        .neon-spinner-91::before {
            animation-duration: \${beforeSpeed}s !important;
        }
        .neon-spinner-91::after {
            animation-duration: \${afterSpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 92: Geometric Pattern Loader
    // ====================================================================
    loader92: {
        name: "Geometric Pattern Loader",
        category: "minimal",
        html: `<div class="loader-container">
    <div class="geometric-loader-92">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
</div>`,
        css: `.geometric-loader-92 {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
}

.geometric-loader-92 .shape {
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    animation: geometricPulse92 1.5s ease-in-out infinite;
    border-radius: 50%;
    position: relative;
}

.geometric-loader-92 .shape:nth-child(1) { 
    animation-delay: 0s; 
    background: linear-gradient(45deg, #ff6b6b, #ff8e53);
}
.geometric-loader-92 .shape:nth-child(2) { 
    animation-delay: 0.1s; 
    background: linear-gradient(45deg, #ff8e53, #ffd166);
}
.geometric-loader-92 .shape:nth-child(3) { 
    animation-delay: 0.2s; 
    background: linear-gradient(45deg, #ffd166, #06d6a0);
}
.geometric-loader-92 .shape:nth-child(4) { 
    animation-delay: 0.3s; 
    background: linear-gradient(45deg, #06d6a0, #118ab2);
}
.geometric-loader-92 .shape:nth-child(5) { 
    animation-delay: 0.4s; 
    background: linear-gradient(45deg, #118ab2, #ff6b6b);
}

@keyframes geometricPulse92 {
    0%, 100% {
        transform: scale(1) rotate(0deg);
        border-radius: 50%;
    }
    25% {
        transform: scale(1.5) rotate(90deg);
        border-radius: 25% 75% 25% 75%;
    }
    50% {
        transform: scale(1) rotate(180deg);
        border-radius: 75% 25% 75% 25%;
    }
    75% {
        transform: scale(0.8) rotate(270deg);
        border-radius: 50% 50% 25% 75%;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control geometric loader
const geometricLoader = document.querySelector('.geometric-loader-92');

// Change colors scheme
function setGeometricColors(color1, color2, color3, color4, color5) {
    const shapes = document.querySelectorAll('.geometric-loader-92 .shape');
    const gradients = [
        \`linear-gradient(45deg, \${color1}, \${color2})\`,
        \`linear-gradient(45deg, \${color2}, \${color3})\`,
        \`linear-gradient(45deg, \${color3}, \${color4})\`,
        \`linear-gradient(45deg, \${color4}, \${color5})\`,
        \`linear-gradient(45deg, \${color5}, \${color1})\`
    ];
    
    shapes.forEach((shape, index) => {
        shape.style.background = gradients[index];
    });
}

// Change shape count
function setShapeCount(count) {
    geometricLoader.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.style.animationDelay = \`\${i * 0.1}s\`;
        
        // Calculate color based on position
        const hue = (i * (360 / count)) % 360;
        const nextHue = ((i + 1) * (360 / count)) % 360;
        shape.style.background = \`linear-gradient(45deg, hsl(\${hue}, 100%, 65%), hsl(\${nextHue}, 100%, 65%))\`;
        
        geometricLoader.appendChild(shape);
    }
}

// Change animation speed
function setGeometricSpeed(speed) {
    document.querySelectorAll('.geometric-loader-92 .shape').forEach(shape => {
        shape.style.animationDuration = speed + 's';
    });
}`
    },

    // ====================================================================
    // TEMPLATE 93: Cyberpunk Grid Loader
    // ====================================================================
    loader93: {
        name: "Cyberpunk Grid Loader",
        category: "animated",
        html: `<div class="loader-container dark-bg">
    <div class="cyber-grid-93">
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div>
    </div>
</div>`,
        css: `.cyber-grid-93 {
    width: 100px;
    height: 100px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 5px;
}

.cyber-grid-93::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
        transparent, 
        #ff00ff, 
        #00ffff, 
        #ff00ff, 
        transparent);
    animation: scanLine93 2s linear infinite;
    filter: blur(1px);
    z-index: 2;
}

.cyber-grid-93 div {
    background: rgba(0, 255, 255, 0.1);
    border: 1px solid rgba(0, 255, 255, 0.3);
    animation: gridPulse93 2s ease-in-out infinite;
    box-shadow: 
        inset 0 0 10px rgba(0, 255, 255, 0.2),
        0 0 5px rgba(0, 255, 255, 0.1);
}

.cyber-grid-93 div:nth-child(4n+1) { animation-delay: 0s; }
.cyber-grid-93 div:nth-child(4n+2) { animation-delay: 0.1s; }
.cyber-grid-93 div:nth-child(4n+3) { animation-delay: 0.2s; }
.cyber-grid-93 div:nth-child(4n+4) { animation-delay: 0.3s; }

@keyframes scanLine93 {
    0% { top: 0; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
}

@keyframes gridPulse93 {
    0%, 100% {
        background: rgba(0, 255, 255, 0.1);
        box-shadow: 
            inset 0 0 10px rgba(0, 255, 255, 0.2),
            0 0 5px rgba(0, 255, 255, 0.1);
    }
    50% {
        background: rgba(255, 0, 255, 0.3);
        box-shadow: 
            inset 0 0 15px rgba(255, 0, 255, 0.4),
            0 0 10px rgba(255, 0, 255, 0.3);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #0a0a14; /* Dark cyberpunk background */
    border-radius: 8px;
}

.dark-bg {
    background: #0a0a14;
}`,
        js: `// Control cyberpunk grid
const cyberGrid = document.querySelector('.cyber-grid-93');

// Change grid size
function setGridSize(rows, cols) {
    cyberGrid.innerHTML = '';
    cyberGrid.style.gridTemplateColumns = \`repeat(\${cols}, 1fr)\`;
    cyberGrid.style.gridTemplateRows = \`repeat(\${rows}, 1fr)\`;
    
    const cellCount = rows * cols;
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        const delay = (i % cols) * 0.1;
        cell.style.animationDelay = \`\${delay}s\`;
        cyberGrid.appendChild(cell);
    }
}

// Change cyber colors
function setCyberColors(color1, color2) {
    const style = document.createElement('style');
    style.textContent = \`
        .cyber-grid-93::before {
            background: linear-gradient(90deg, 
                transparent, 
                \${color1}, 
                \${color2}, 
                \${color1}, 
                transparent) !important;
        }
        
        .cyber-grid-93 div {
            border-color: \${color1}4d !important;
            box-shadow: 
                inset 0 0 10px \${color1}33,
                0 0 5px \${color1}1a !important;
        }
        
        @keyframes customGridPulse {
            0%, 100% {
                background: \${color1}1a;
                box-shadow: 
                    inset 0 0 10px \${color1}33,
                    0 0 5px \${color1}1a;
            }
            50% {
                background: \${color2}4d;
                box-shadow: 
                    inset 0 0 15px \${color2}66,
                    0 0 10px \${color2}4d;
            }
        }
        
        .cyber-grid-93 div {
            animation-name: customGridPulse !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change scan line speed
function setScanSpeed(speed) {
    const style = document.createElement('style');
    style.textContent = \`
        .cyber-grid-93::before {
            animation-duration: \${speed}s !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 94: Water Ripple Loader
    // ====================================================================
    loader94: {
        name: "Water Ripple Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="water-ripple-94">
        <div class="ripple"></div>
        <div class="ripple"></div>
        <div class="ripple"></div>
    </div>
</div>`,
        css: `.water-ripple-94 {
    position: relative;
    width: 80px;
    height: 80px;
}

.water-ripple-94 .ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid transparent;
    border-radius: 50%;
    animation: ripple94 2.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.water-ripple-94 .ripple:nth-child(1) {
    width: 60px;
    height: 60px;
    border-color: #4ecdc4;
    animation-delay: 0s;
}

.water-ripple-94 .ripple:nth-child(2) {
    width: 80px;
    height: 80px;
    border-color: #1a8cff;
    animation-delay: 0.5s;
}

.water-ripple-94 .ripple:nth-child(3) {
    width: 100px;
    height: 100px;
    border-color: #0066cc;
    animation-delay: 1s;
}

@keyframes ripple94 {
    0% {
        transform: translate(-50%, -50%) scale(0.8);
        opacity: 1;
        border-width: 3px;
    }
    100% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
        border-width: 1px;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f0f8ff; /* Light blue background for water theme */
    border-radius: 8px;
}`,
        js: `// Control water ripple loader
const waterRipple = document.querySelector('.water-ripple-94');

// Change ripple colors
function setRippleColors(color1, color2, color3) {
    const ripples = document.querySelectorAll('.water-ripple-94 .ripple');
    const colors = [color1, color2, color3];
    
    ripples.forEach((ripple, index) => {
        ripple.style.borderColor = colors[index];
    });
}

// Change ripple count
function setRippleCount(count) {
    waterRipple.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        
        const size = 60 + (i * 20);
        ripple.style.width = size + 'px';
        ripple.style.height = size + 'px';
        ripple.style.animationDelay = (i * 0.5) + 's';
        
        // Calculate color based on position
        const hue = 200 + (i * 40);
        ripple.style.borderColor = \`hsl(\${hue}, 80%, 60%)\`;
        
        waterRipple.appendChild(ripple);
    }
}

// Change ripple speed
function setRippleSpeed(speed) {
    document.querySelectorAll('.water-ripple-94 .ripple').forEach(ripple => {
        ripple.style.animationDuration = speed + 's';
    });
}

// Change ripple expansion
function setRippleExpansion(minScale, maxScale) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customRipple {
            0% {
                transform: translate(-50%, -50%) scale(\${minScale});
                opacity: 1;
                border-width: 3px;
            }
            100% {
                transform: translate(-50%, -50%) scale(\${maxScale});
                opacity: 0;
                border-width: 1px;
            }
        }
        
        .water-ripple-94 .ripple {
            animation-name: customRipple !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 95: Fire Burst Loader
    // ====================================================================
    loader95: {
        name: "Fire Burst Loader",
        category: "animated",
        html: `<div class="loader-container dark-bg">
    <div class="fire-burst-95">
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
        <div class="flame"></div>
    </div>
</div>`,
        css: `.fire-burst-95 {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.fire-burst-95 .flame {
    width: 20px;
    height: 40px;
    background: linear-gradient(to top, 
        transparent 10%,
        #ff6b35 20%,
        #ff8e53 50%,
        #ffd166 80%,
        #ffb347 100%);
    border-radius: 50% 50% 20% 20%;
    animation: fireFlicker95 0.5s ease-in-out infinite alternate;
    position: relative;
    filter: blur(2px);
}

.fire-burst-95 .flame::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: #ff8e53;
    border-radius: 50%;
    filter: blur(5px);
    opacity: 0.7;
}

.fire-burst-95 .flame:nth-child(1) {
    animation-delay: 0s;
    transform: translateX(-25px) scale(0.8);
}
.fire-burst-95 .flame:nth-child(2) {
    animation-delay: 0.1s;
    transform: translateX(-12px) scale(1);
}
.fire-burst-95 .flame:nth-child(3) {
    animation-delay: 0.2s;
    transform: translateX(0px) scale(1.2);
}
.fire-burst-95 .flame:nth-child(4) {
    animation-delay: 0.3s;
    transform: translateX(12px) scale(0.9);
}

@keyframes fireFlicker95 {
    0%, 100% {
        height: 40px;
        background: linear-gradient(to top, 
            transparent 10%,
            #ff6b35 20%,
            #ff8e53 50%,
            #ffd166 80%,
            #ffb347 100%);
        filter: blur(2px);
    }
    50% {
        height: 45px;
        background: linear-gradient(to top, 
            transparent 10%,
            #ff8e53 20%,
            #ffb347 50%,
            #ffd166 80%,
            #ff6b35 100%);
        filter: blur(3px);
    }
}

/* Embers */
.fire-burst-95::before,
.fire-burst-95::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: #ffd166;
    border-radius: 50%;
    animation: emberFloat95 1.5s linear infinite;
    filter: blur(1px);
}

.fire-burst-95::before {
    top: 10px;
    left: 20px;
    animation-delay: 0s;
}

.fire-burst-95::after {
    top: 5px;
    right: 25px;
    animation-delay: 0.7s;
}

@keyframes emberFloat95 {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-30px) scale(0);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #1c0f0f; /* Dark red/brown for fire theme */
    border-radius: 8px;
}

.dark-bg {
    background: #1c0f0f;
}`,
        js: `// Control fire burst loader
const fireBurst = document.querySelector('.fire-burst-95');

// Change fire colors
function setFireColors(baseColor, midColor, tipColor) {
    const style = document.createElement('style');
    style.textContent = \`
        .fire-burst-95 .flame {
            background: linear-gradient(to top, 
                transparent 10%,
                \${baseColor} 20%,
                \${midColor} 50%,
                \${tipColor} 80%,
                \${baseColor} 100%) !important;
        }
        
        .fire-burst-95 .flame::after {
            background: \${midColor} !important;
        }
        
        .fire-burst-95::before,
        .fire-burst-95::after {
            background: \${tipColor} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change flame count
function setFlameCount(count) {
    fireBurst.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const flame = document.createElement('div');
        flame.className = 'flame';
        flame.style.animationDelay = (i * 0.1) + 's';
        
        // Position flames evenly
        const spacing = 80 / (count - 1);
        const position = -40 + (i * spacing);
        const scale = 0.8 + (Math.sin(i * Math.PI / (count - 1)) * 0.4);
        
        flame.style.transform = \`translateX(\${position}px) scale(\${scale})\`;
        
        fireBurst.appendChild(flame);
    }
}

// Change flicker speed
function setFlickerSpeed(speed) {
    document.querySelectorAll('.fire-burst-95 .flame').forEach(flame => {
        flame.style.animationDuration = speed + 's';
    });
}

// Toggle embers
function toggleEmbers(show) {
    const fire = document.querySelector('.fire-burst-95');
    if (show) {
        fire.style.setProperty('--ember-display', 'block');
    } else {
        fire.style.setProperty('--ember-display', 'none');
    }
}`
    },
        // ====================================================================
    // TEMPLATE 96: Typing Text Loader
    // ====================================================================
    loader96: {
        name: "Typing Text Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="typing-loader-96">
        <span class="text">Loading</span>
        <span class="cursor"></span>
        <span class="dots">
            <span class="dot">.</span>
            <span class="dot">.</span>
            <span class="dot">.</span>
        </span>
    </div>
</div>`,
        css: `.typing-loader-96 {
    display: flex;
    align-items: center;
    font-family: 'Courier New', monospace;
    font-size: 24px;
    font-weight: 600;
    color: #7c3aed;
}

.typing-loader-96 .text {
    overflow: hidden;
    border-right: 3px solid #7c3aed;
    white-space: nowrap;
    animation: typing96 3.5s steps(10, end) infinite;
}

.typing-loader-96 .cursor {
    width: 3px;
    height: 30px;
    background-color: #7c3aed;
    margin-left: 5px;
    animation: blink96 1s infinite;
}

.typing-loader-96 .dots {
    display: inline-flex;
    margin-left: 5px;
}

.typing-loader-96 .dot {
    opacity: 0;
    animation: dotPulse96 1.5s infinite;
}

.typing-loader-96 .dot:nth-child(1) { animation-delay: 0s; }
.typing-loader-96 .dot:nth-child(2) { animation-delay: 0.2s; }
.typing-loader-96 .dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing96 {
    0%, 100% { width: 0; }
    50%, 90% { width: 100px; }
}

@keyframes blink96 {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes dotPulse96 {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control typing loader
const typingLoader = document.querySelector('.typing-loader-96');

// Change typing text
function setTypingText(text) {
    const textElement = typingLoader.querySelector('.text');
    textElement.textContent = text;
    
    // Adjust animation for new text length
    const textLength = text.length;
    const animationStyle = document.createElement('style');
    animationStyle.textContent = \`
        @keyframes customTyping {
            0%, 100% { width: 0; }
            50%, 90% { width: \${textLength * 10}px; }
        }
        .typing-loader-96 .text {
            animation-name: customTyping !important;
        }
    \`;
    document.head.appendChild(animationStyle);
}

// Change colors
function setTypingColors(textColor, cursorColor) {
    typingLoader.style.color = textColor;
    typingLoader.querySelector('.text').style.borderRightColor = textColor;
    typingLoader.querySelector('.cursor').style.backgroundColor = cursorColor;
}

// Change typing speed
function setTypingSpeed(typeSpeed, blinkSpeed, dotSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .typing-loader-96 .text {
            animation-duration: \${typeSpeed}s !important;
        }
        .typing-loader-96 .cursor {
            animation-duration: \${blinkSpeed}s !important;
        }
        .typing-loader-96 .dot {
            animation-duration: \${dotSpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change number of dots
function setDotCount(count) {
    const dotsContainer = typingLoader.querySelector('.dots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.textContent = '.';
        dot.style.animationDelay = \`\${i * 0.2}s\`;
        dotsContainer.appendChild(dot);
    }
}`
    },

    // ====================================================================
    // TEMPLATE 97: Morphing Text Loader
    // ====================================================================
    loader97: {
        name: "Morphing Text Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="morphing-text-97">
        <span class="word">Loading</span>
        <span class="word">Please</span>
        <span class="word">Wait</span>
        <span class="word">...</span>
    </div>
</div>`,
        css: `.morphing-text-97 {
    position: relative;
    height: 60px;
    width: 200px;
    font-family: 'Segoe UI', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #7c3aed;
    overflow: hidden;
}

.morphing-text-97 .word {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(30px);
    animation: wordMorph97 8s infinite;
}

.morphing-text-97 .word:nth-child(1) { 
    animation-delay: 0s; 
    color: #7c3aed;
}
.morphing-text-97 .word:nth-child(2) { 
    animation-delay: 2s; 
    color: #ec4899;
}
.morphing-text-97 .word:nth-child(3) { 
    animation-delay: 4s; 
    color: #3b82f6;
}
.morphing-text-97 .word:nth-child(4) { 
    animation-delay: 6s; 
    color: #10b981;
}

@keyframes wordMorph97 {
    0%, 20% {
        opacity: 0;
        transform: translateY(30px);
    }
    25%, 45% {
        opacity: 1;
        transform: translateY(0);
    }
    50%, 100% {
        opacity: 0;
        transform: translateY(-30px);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control morphing text loader
const morphingText = document.querySelector('.morphing-text-97');

// Change words
function setMorphingWords(words) {
    morphingText.innerHTML = '';
    
    words.forEach((word, index) => {
        const wordElement = document.createElement('span');
        wordElement.className = 'word';
        wordElement.textContent = word;
        wordElement.style.animationDelay = \`\${index * 2}s\`;
        
        // Generate rainbow colors
        const hue = (index * (360 / words.length)) % 360;
        wordElement.style.color = \`hsl(\${hue}, 100%, 60%)\`;
        
        morphingText.appendChild(wordElement);
    });
    
    // Update animation duration
    const totalDuration = words.length * 2;
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customWordMorph {
            0%, 20% {
                opacity: 0;
                transform: translateY(30px);
            }
            25%, 45% {
                opacity: 1;
                transform: translateY(0);
            }
            50%, 100% {
                opacity: 0;
                transform: translateY(-30px);
            }
        }
        .morphing-text-97 .word {
            animation: customWordMorph \${totalDuration}s infinite !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change font size
function setMorphingFontSize(size) {
    morphingText.style.fontSize = size + 'px';
    morphingText.style.height = (size * 1.5) + 'px';
}

// Change animation direction
function setMorphingDirection(direction) {
    const translateY = direction === 'up' ? '30px' : '-30px';
    const translateY2 = direction === 'up' ? '-30px' : '30px';
    
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes morphDirection {
            0%, 20% {
                opacity: 0;
                transform: translateY(\${translateY});
            }
            25%, 45% {
                opacity: 1;
                transform: translateY(0);
            }
            50%, 100% {
                opacity: 0;
                transform: translateY(\${translateY2});
            }
        }
        .morphing-text-97 .word {
            animation-name: morphDirection !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 98: Particle Text Loader
    // ====================================================================
    loader98: {
        name: "Particle Text Loader",
        category: "animated",
        html: `<div class="loader-container dark-bg">
    <div class="particle-text-98" data-text="LOADING">
        LOADING
    </div>
</div>`,
        css: `.particle-text-98 {
    position: relative;
    font-family: 'Arial Black', sans-serif;
    font-size: 36px;
    font-weight: 900;
    color: transparent;
    background: linear-gradient(90deg, #7c3aed, #ec4899, #3b82f6, #10b981);
    -webkit-background-clip: text;
    background-clip: text;
    letter-spacing: 5px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
}

.particle-text-98::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.1);
    background: linear-gradient(90deg, 
        rgba(124, 58, 237, 0.3),
        rgba(236, 72, 153, 0.3),
        rgba(59, 130, 246, 0.3),
        rgba(16, 185, 129, 0.3));
    -webkit-background-clip: text;
    background-clip: text;
    animation: particleFlow98 3s linear infinite;
    filter: blur(10px);
    z-index: -1;
}

.particle-text-98::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent);
    animation: particleScan98 2s ease-in-out infinite;
}

@keyframes particleFlow98 {
    0% { transform: translateX(0); }
    100% { transform: translateX(10px); }
}

@keyframes particleScan98 {
    0%, 100% { left: -100%; }
    50% { left: 100%; }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #1a1a2e; /* Dark background for particle effect */
    border-radius: 8px;
}

.dark-bg {
    background: #1a1a2e;
}`,
        js: `// Control particle text loader
const particleText = document.querySelector('.particle-text-98');

// Change particle text
function setParticleText(text) {
    particleText.textContent = text;
    particleText.setAttribute('data-text', text);
}

// Change gradient colors
function setParticleGradient(...colors) {
    const gradient = \`linear-gradient(90deg, \${colors.join(', ')})\`;
    particleText.style.background = gradient;
    
    // Create shadow gradient with transparency
    const shadowColors = colors.map(color => {
        // Convert hex to rgba with 0.3 opacity
        if (color.startsWith('#')) {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return \`rgba(\${r}, \${g}, \${b}, 0.3)\`;
        }
        return color.replace(')', ', 0.3)').replace('rgb', 'rgba');
    });
    
    const shadowGradient = \`linear-gradient(90deg, \${shadowColors.join(', ')})\`;
    
    const style = document.createElement('style');
    style.textContent = \`
        .particle-text-98::before {
            background: \${shadowGradient} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change particle effects
function setParticleEffects(flowSpeed, scanSpeed, blurAmount) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customParticleFlow {
            0% { transform: translateX(0); }
            100% { transform: translateX(10px); }
        }
        @keyframes customParticleScan {
            0%, 100% { left: -100%; }
            50% { left: 100%; }
        }
        
        .particle-text-98::before {
            animation: customParticleFlow \${flowSpeed}s linear infinite !important;
            filter: blur(\${blurAmount}px) !important;
        }
        .particle-text-98::after {
            animation: customParticleScan \${scanSpeed}s ease-in-out infinite !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle effects
function toggleParticleEffect(effect, enabled) {
    if (effect === 'flow') {
        particleText.style.animationPlayState = enabled ? 'running' : 'paused';
    } else if (effect === 'scan') {
        const afterStyle = window.getComputedStyle(particleText, '::after');
        // You would need to handle this differently in a real implementation
    }
}`
    },

    // ====================================================================
    // TEMPLATE 99: Glitch Text Loader
    // ====================================================================
    loader99: {
        name: "Glitch Text Loader",
        category: "animated",
        html: `<div class="loader-container dark-bg">
    <div class="glitch-text-99">
        <span class="glitch" data-text="LOADING">LOADING</span>
    </div>
</div>`,
        css: `.glitch-text-99 {
    position: relative;
    font-family: 'Monospace', monospace;
    font-size: 36px;
    font-weight: 900;
    color: #00ff9d;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.glitch-text-99 .glitch {
    position: relative;
    display: inline-block;
    animation: glitchSkew99 5s infinite;
}

.glitch-text-99 .glitch::before,
.glitch-text-99 .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}

.glitch-text-99 .glitch::before {
    animation: glitch-anim-199 3s infinite linear alternate-reverse;
    color: #ff00ff;
    z-index: -1;
}

.glitch-text-99 .glitch::after {
    animation: glitch-anim-299 2s infinite linear alternate-reverse;
    color: #00ffff;
    z-index: -2;
}

@keyframes glitchSkew99 {
    0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
        transform: skew(0deg);
    }
    41% { transform: skew(10deg); }
    42% { transform: skew(-10deg); }
    59% { transform: skew(20deg) translate(5px, 0); }
    60% { transform: skew(-20deg) translate(-5px, 0); }
    63% { transform: skew(5deg); }
    70% { transform: skew(-5deg) translate(0, 5px); }
    71% { transform: skew(5deg) translate(0, -5px); }
}

@keyframes glitch-anim-199 {
    0%, 100% { clip-path: inset(40% 0 61% 0); }
    20% { clip-path: inset(92% 0 1% 0); }
    40% { clip-path: inset(43% 0 1% 0); }
    60% { clip-path: inset(25% 0 58% 0); }
    80% { clip-path: inset(54% 0 7% 0); }
}

@keyframes glitch-anim-299 {
    0%, 100% { clip-path: inset(20% 0 80% 0); }
    10% { clip-path: inset(5% 0 90% 0); }
    30% { clip-path: inset(70% 0 20% 0); }
    50% { clip-path: inset(10% 0 85% 0); }
    70% { clip-path: inset(90% 0 5% 0); }
    90% { clip-path: inset(30% 0 65% 0); }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #0a0a14; /* Dark cyberpunk background */
    border-radius: 8px;
}

.dark-bg {
    background: #0a0a14;
}`,
        js: `// Control glitch text loader
const glitchText = document.querySelector('.glitch-text-99 .glitch');

// Change glitch text
function setGlitchText(text) {
    glitchText.textContent = text;
    glitchText.setAttribute('data-text', text);
}

// Change glitch colors
function setGlitchColors(mainColor, glitch1Color, glitch2Color) {
    glitchText.style.color = mainColor;
    
    const style = document.createElement('style');
    style.textContent = \`
        .glitch-text-99 .glitch::before {
            color: \${glitch1Color} !important;
        }
        .glitch-text-99 .glitch::after {
            color: \${glitch2Color} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change glitch intensity
function setGlitchIntensity(skewAmount, translateAmount) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customGlitchSkew {
            0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
                transform: skew(0deg);
            }
            41% { transform: skew(\${skewAmount}deg); }
            42% { transform: skew(-\${skewAmount}deg); }
            59% { transform: skew(\${skewAmount * 2}deg) translate(\${translateAmount}px, 0); }
            60% { transform: skew(-\${skewAmount * 2}deg) translate(-\${translateAmount}px, 0); }
            63% { transform: skew(\${skewAmount / 2}deg); }
            70% { transform: skew(-\${skewAmount / 2}deg) translate(0, \${translateAmount}px); }
            71% { transform: skew(\${skewAmount / 2}deg) translate(0, -\${translateAmount}px); }
        }
        .glitch-text-99 .glitch {
            animation-name: customGlitchSkew !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change glitch frequency
function setGlitchFrequency(frequency) {
    glitchText.style.animationDuration = frequency + 's';
    
    const style = document.createElement('style');
    style.textContent = \`
        .glitch-text-99 .glitch::before {
            animation-duration: \${frequency * 0.6}s !important;
        }
        .glitch-text-99 .glitch::after {
            animation-duration: \${frequency * 0.4}s !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 100: Gradient Wave Text
    // ====================================================================
    loader100: {
        name: "Gradient Wave Text",
        category: "animated",
        html: `<div class="loader-container">
    <div class="gradient-wave-100">
        <span class="letter">L</span>
        <span class="letter">O</span>
        <span class="letter">A</span>
        <span class="letter">D</span>
        <span class="letter">I</span>
        <span class="letter">N</span>
        <span class="letter">G</span>
    </div>
</div>`,
        css: `.gradient-wave-100 {
    display: flex;
    gap: 8px;
    font-family: 'Arial Rounded MT Bold', sans-serif;
    font-size: 32px;
    font-weight: 900;
}

.gradient-wave-100 .letter {
    display: inline-block;
    background: linear-gradient(135deg, #7c3aed, #ec4899, #3b82f6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: letterWave100 1.5s ease-in-out infinite;
    position: relative;
    text-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

.gradient-wave-100 .letter:nth-child(1) { animation-delay: 0.0s; }
.gradient-wave-100 .letter:nth-child(2) { animation-delay: 0.1s; }
.gradient-wave-100 .letter:nth-child(3) { animation-delay: 0.2s; }
.gradient-wave-100 .letter:nth-child(4) { animation-delay: 0.3s; }
.gradient-wave-100 .letter:nth-child(5) { animation-delay: 0.4s; }
.gradient-wave-100 .letter:nth-child(6) { animation-delay: 0.5s; }
.gradient-wave-100 .letter:nth-child(7) { animation-delay: 0.6s; }

.gradient-wave-100 .letter::after {
    content: attr(data-letter);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3b82f6, #10b981, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    opacity: 0;
    animation: letterShadow100 1.5s ease-in-out infinite;
}

.gradient-wave-100 .letter:nth-child(1)::after { animation-delay: 0.0s; }
.gradient-wave-100 .letter:nth-child(2)::after { animation-delay: 0.1s; }
.gradient-wave-100 .letter:nth-child(3)::after { animation-delay: 0.2s; }
.gradient-wave-100 .letter:nth-child(4)::after { animation-delay: 0.3s; }
.gradient-wave-100 .letter:nth-child(5)::after { animation-delay: 0.4s; }
.gradient-wave-100 .letter:nth-child(6)::after { animation-delay: 0.5s; }
.gradient-wave-100 .letter:nth-child(7)::after { animation-delay: 0.6s; }

@keyframes letterWave100 {
    0%, 100% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    50% {
        transform: translateY(-20px) scale(1.1);
        opacity: 0.8;
    }
}

@keyframes letterShadow100 {
    0%, 100% {
        opacity: 0;
        transform: translate(0, 0);
    }
    50% {
        opacity: 0.3;
        transform: translate(3px, 3px);
        filter: blur(2px);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control gradient wave text
const gradientWave = document.querySelector('.gradient-wave-100');

// Change wave text
function setWaveText(text) {
    gradientWave.innerHTML = '';
    
    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.textContent = text.charAt(i);
        letter.setAttribute('data-letter', text.charAt(i));
        letter.style.animationDelay = \`\${i * 0.1}s\`;
        
        // Create shadow element
        const shadowStyle = document.createElement('style');
        shadowStyle.textContent = \`
            .gradient-wave-100 .letter:nth-child(\${i + 1})::after {
                animation-delay: \${i * 0.1}s !important;
            }
        \`;
        document.head.appendChild(shadowStyle);
        
        gradientWave.appendChild(letter);
    }
}

// Change wave colors
function setWaveColors(gradient1, gradient2) {
    const style = document.createElement('style');
    style.textContent = \`
        .gradient-wave-100 .letter {
            background: \${gradient1} !important;
        }
        .gradient-wave-100 .letter::after {
            background: \${gradient2} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change wave properties
function setWaveProperties(height, scale, speed) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customLetterWave {
            0%, 100% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            50% {
                transform: translateY(-\${height}px) scale(\${scale});
                opacity: 0.8;
            }
        }
        .gradient-wave-100 .letter {
            animation: customLetterWave \${speed}s ease-in-out infinite !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change letter spacing
function setLetterSpacing(spacing) {
    gradientWave.style.gap = spacing + 'px';
}

// Change wave direction
function setWaveDirection(direction) {
    const translateY = direction === 'up' ? '-20px' : '20px';
    const translateY2 = direction === 'up' ? '0' : '0';
    
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes waveDirection {
            0%, 100% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            50% {
                transform: translateY(\${translateY}) scale(1.1);
                opacity: 0.8;
            }
        }
        .gradient-wave-100 .letter {
            animation-name: waveDirection !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },
        // ====================================================================
    // TEMPLATE 101: Walking Human Loader
    // ====================================================================
    loader101: {
        name: "Walking Human Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="walking-human-101">
        <div class="head"></div>
        <div class="body"></div>
        <div class="arm left"></div>
        <div class="arm right"></div>
        <div class="leg left"></div>
        <div class="leg right"></div>
        <div class="shadow"></div>
    </div>
</div>`,
        css: `.walking-human-101 {
    position: relative;
    width: 100px;
    height: 120px;
    margin: 0 auto;
}

.walking-human-101 .head {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #ffb347;
    border-radius: 50%;
    z-index: 5;
}

.walking-human-101 .body {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 40px;
    background: #3b82f6;
    border-radius: 10px 10px 0 0;
}

.walking-human-101 .arm {
    position: absolute;
    top: 25px;
    width: 8px;
    height: 30px;
    background: #ffb347;
    border-radius: 4px;
    transform-origin: top center;
}

.walking-human-101 .arm.left {
    left: 35px;
    animation: armSwing101 1s ease-in-out infinite;
}

.walking-human-101 .arm.right {
    right: 35px;
    animation: armSwing101 1s ease-in-out infinite reverse;
}

.walking-human-101 .leg {
    position: absolute;
    top: 55px;
    width: 10px;
    height: 40px;
    background: #1e40af;
    border-radius: 0 0 5px 5px;
    transform-origin: top center;
}

.walking-human-101 .leg.left {
    left: 40px;
    animation: legSwing101 1s ease-in-out infinite;
}

.walking-human-101 .leg.right {
    right: 40px;
    animation: legSwing101 1s ease-in-out infinite reverse;
}

.walking-human-101 .shadow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    animation: shadowPulse101 1s ease-in-out infinite;
}

@keyframes armSwing101 {
    0%, 100% {
        transform: rotate(-30deg);
    }
    50% {
        transform: rotate(30deg);
    }
}

@keyframes legSwing101 {
    0%, 100% {
        transform: rotate(-20deg);
    }
    50% {
        transform: rotate(20deg);
    }
}

@keyframes shadowPulse101 {
    0%, 100% {
        transform: translateX(-50%) scale(1);
        opacity: 0.2;
    }
    50% {
        transform: translateX(-50%) scale(0.8);
        opacity: 0.4;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control walking human
const walkingHuman = document.querySelector('.walking-human-101');

// Change walking speed
function setWalkingSpeed(speed) {
    const style = document.createElement('style');
    style.textContent = \`
        .walking-human-101 .arm.left,
        .walking-human-101 .arm.right {
            animation-duration: \${speed}s !important;
        }
        .walking-human-101 .leg.left,
        .walking-human-101 .leg.right {
            animation-duration: \${speed}s !important;
        }
        .walking-human-101 .shadow {
            animation-duration: \${speed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change human colors
function setHumanColors(skinColor, shirtColor, pantsColor) {
    walkingHuman.querySelector('.head').style.background = skinColor;
    walkingHuman.querySelectorAll('.arm').forEach(arm => {
        arm.style.background = skinColor;
    });
    walkingHuman.querySelector('.body').style.background = shirtColor;
    walkingHuman.querySelectorAll('.leg').forEach(leg => {
        leg.style.background = pantsColor;
    });
}

// Change walking style
function setWalkingStyle(armSwing, legSwing) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customArmSwing {
            0%, 100% {
                transform: rotate(-\${armSwing}deg);
            }
            50% {
                transform: rotate(\${armSwing}deg);
            }
        }
        @keyframes customLegSwing {
            0%, 100% {
                transform: rotate(-\${legSwing}deg);
            }
            50% {
                transform: rotate(\${legSwing}deg);
            }
        }
        .walking-human-101 .arm.left,
        .walking-human-101 .arm.right {
            animation-name: customArmSwing !important;
        }
        .walking-human-101 .leg.left,
        .walking-human-101 .leg.right {
            animation-name: customLegSwing !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 102: Running Dog Loader
    // ====================================================================
    loader102: {
        name: "Running Dog Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="running-dog-102">
        <div class="dog">
            <div class="body"></div>
            <div class="head"></div>
            <div class="ear left"></div>
            <div class="ear right"></div>
            <div class="tail"></div>
            <div class="leg front-left"></div>
            <div class="leg front-right"></div>
            <div class="leg back-left"></div>
            <div class="leg back-right"></div>
        </div>
        <div class="paw-prints"></div>
    </div>
</div>`,
        css: `.running-dog-102 {
    position: relative;
    width: 150px;
    height: 100px;
}

.running-dog-102 .dog {
    position: relative;
    width: 100%;
    height: 100%;
}

.running-dog-102 .body {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 60px;
    height: 30px;
    background: #8b4513;
    border-radius: 15px;
}

.running-dog-102 .head {
    position: absolute;
    top: 20px;
    left: 85px;
    width: 25px;
    height: 25px;
    background: #a0522d;
    border-radius: 50%;
}

.running-dog-102 .ear {
    position: absolute;
    top: 15px;
    width: 15px;
    height: 20px;
    background: #8b4513;
    border-radius: 10px 10px 0 0;
}

.running-dog-102 .ear.left {
    left: 85px;
    transform: rotate(-30deg);
}

.running-dog-102 .ear.right {
    left: 105px;
    transform: rotate(30deg);
}

.running-dog-102 .tail {
    position: absolute;
    top: 25px;
    left: 15px;
    width: 25px;
    height: 8px;
    background: #a0522d;
    border-radius: 4px;
    animation: tailWag102 0.3s ease-in-out infinite;
    transform-origin: left center;
}

.running-dog-102 .leg {
    position: absolute;
    width: 8px;
    height: 30px;
    background: #8b4513;
    border-radius: 4px;
    transform-origin: top center;
}

.running-dog-102 .front-left {
    top: 55px;
    left: 40px;
    animation: frontLegRun102 0.4s ease-in-out infinite;
}

.running-dog-102 .front-right {
    top: 55px;
    left: 70px;
    animation: frontLegRun102 0.4s ease-in-out infinite 0.2s;
}

.running-dog-102 .back-left {
    top: 55px;
    left: 50px;
    animation: backLegRun102 0.4s ease-in-out infinite 0.1s;
}

.running-dog-102 .back-right {
    top: 55px;
    left: 80px;
    animation: backLegRun102 0.4s ease-in-out infinite 0.3s;
}

.running-dog-102 .paw-prints {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 20px;
}

.running-dog-102 .paw-prints::before,
.running-dog-102 .paw-prints::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: rgba(139, 69, 19, 0.3);
    border-radius: 50%;
    animation: pawPrint102 1s linear infinite;
}

.running-dog-102 .paw-prints::before {
    left: 30px;
    animation-delay: 0s;
}

.running-dog-102 .paw-prints::after {
    left: 80px;
    animation-delay: 0.5s;
}

@keyframes tailWag102 {
    0%, 100% {
        transform: rotate(-30deg);
    }
    50% {
        transform: rotate(30deg);
    }
}

@keyframes frontLegRun102 {
    0%, 100% {
        transform: rotate(-40deg);
    }
    50% {
        transform: rotate(40deg);
    }
}

@keyframes backLegRun102 {
    0%, 100% {
        transform: rotate(40deg);
    }
    50% {
        transform: rotate(-40deg);
    }
}

@keyframes pawPrint102 {
    0% {
        transform: scale(1);
        opacity: 0.3;
    }
    100% {
        transform: scale(0);
        opacity: 0;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control running dog
const runningDog = document.querySelector('.running-dog-102');

// Change dog colors
function setDogColors(bodyColor, earColor, legColor) {
    runningDog.querySelector('.body').style.background = bodyColor;
    runningDog.querySelector('.head').style.background = bodyColor;
    runningDog.querySelectorAll('.ear').forEach(ear => {
        ear.style.background = earColor;
    });
    runningDog.querySelector('.tail').style.background = earColor;
    runningDog.querySelectorAll('.leg').forEach(leg => {
        leg.style.background = legColor;
    });
}

// Change running speed
function setRunningSpeed(speed) {
    const style = document.createElement('style');
    style.textContent = \`
        .running-dog-102 .tail {
            animation-duration: \${speed * 0.3}s !important;
        }
        .running-dog-102 .front-left,
        .running-dog-102 .front-right,
        .running-dog-102 .back-left,
        .running-dog-102 .back-right {
            animation-duration: \${speed * 0.4}s !important;
        }
        .running-dog-102 .paw-prints::before,
        .running-dog-102 .paw-prints::after {
            animation-duration: \${speed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle paw prints
function togglePawPrints(show) {
    const pawPrints = runningDog.querySelector('.paw-prints');
    pawPrints.style.display = show ? 'block' : 'none';
}

// Change tail wag intensity
function setTailWagIntensity(intensity) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customTailWag {
            0%, 100% {
                transform: rotate(-\${intensity}deg);
            }
            50% {
                transform: rotate(\${intensity}deg);
            }
        }
        .running-dog-102 .tail {
            animation-name: customTailWag !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 103: Flying Bird Loader
    // ====================================================================
    loader103: {
        name: "Flying Bird Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="flying-bird-103">
        <div class="bird">
            <div class="body"></div>
            <div class="head"></div>
            <div class="beak"></div>
            <div class="eye"></div>
            <div class="wing left"></div>
            <div class="wing right"></div>
            <div class="tail"></div>
        </div>
        <div class="cloud"></div>
        <div class="cloud"></div>
    </div>
</div>`,
        css: `.flying-bird-103 {
    position: relative;
    width: 120px;
    height: 100px;
}

.flying-bird-103 .bird {
    position: relative;
    width: 100%;
    height: 100%;
    animation: birdFloat103 3s ease-in-out infinite;
}

.flying-bird-103 .body {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 40px;
    height: 20px;
    background: #1e40af;
    border-radius: 50%;
}

.flying-bird-103 .head {
    position: absolute;
    top: 35px;
    left: 75px;
    width: 15px;
    height: 15px;
    background: #1e40af;
    border-radius: 50%;
}

.flying-bird-103 .beak {
    position: absolute;
    top: 38px;
    left: 88px;
    width: 10px;
    height: 5px;
    background: #f59e0b;
    border-radius: 2px;
    transform: rotate(45deg);
}

.flying-bird-103 .eye {
    position: absolute;
    top: 36px;
    left: 78px;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
}

.flying-bird-103 .wing {
    position: absolute;
    width: 30px;
    height: 15px;
    background: #3b82f6;
    border-radius: 50%;
    transform-origin: center center;
}

.flying-bird-103 .wing.left {
    top: 35px;
    left: 35px;
    animation: wingFlap103 0.8s ease-in-out infinite;
}

.flying-bird-103 .wing.right {
    top: 45px;
    left: 45px;
    animation: wingFlap103 0.8s ease-in-out infinite reverse;
}

.flying-bird-103 .tail {
    position: absolute;
    top: 45px;
    left: 20px;
    width: 20px;
    height: 10px;
    background: #1e40af;
    border-radius: 10px 0 0 10px;
    animation: tailMove103 1s ease-in-out infinite;
}

.flying-bird-103 .cloud {
    position: absolute;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: cloudFloat103 4s ease-in-out infinite;
}

.flying-bird-103 .cloud:nth-child(2) {
    top: 20px;
    left: 10px;
    width: 25px;
    height: 15px;
    animation-delay: 0s;
}

.flying-bird-103 .cloud:nth-child(3) {
    top: 70px;
    right: 10px;
    width: 30px;
    height: 18px;
    animation-delay: 2s;
}

@keyframes birdFloat103 {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes wingFlap103 {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    50% {
        transform: translateY(-5px) rotate(10deg);
    }
}

@keyframes tailMove103 {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-10deg);
    }
}

@keyframes cloudFloat103 {
    0%, 100% {
        transform: translateX(0);
        opacity: 0.8;
    }
    50% {
        transform: translateX(10px);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #87ceeb; /* Sky blue background */
    border-radius: 8px;
}`,
        js: `// Control flying bird
const flyingBird = document.querySelector('.flying-bird-103');

// Change bird colors
function setBirdColors(bodyColor, wingColor, beakColor) {
    flyingBird.querySelector('.body').style.background = bodyColor;
    flyingBird.querySelector('.head').style.background = bodyColor;
    flyingBird.querySelector('.tail').style.background = bodyColor;
    flyingBird.querySelectorAll('.wing').forEach(wing => {
        wing.style.background = wingColor;
    });
    flyingBird.querySelector('.beak').style.background = beakColor;
}

// Change flying speed
function setFlyingSpeed(floatSpeed, flapSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .flying-bird-103 .bird {
            animation-duration: \${floatSpeed}s !important;
        }
        .flying-bird-103 .wing.left,
        .flying-bird-103 .wing.right {
            animation-duration: \${flapSpeed}s !important;
        }
        .flying-bird-103 .tail {
            animation-duration: \${flapSpeed * 1.25}s !important;
        }
        .flying-bird-103 .cloud {
            animation-duration: \${floatSpeed * 1.33}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle clouds
function toggleClouds(show) {
    const clouds = flyingBird.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.style.display = show ? 'block' : 'none';
    });
}

// Change wing flap intensity
function setWingFlapIntensity(height, rotation) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customWingFlap {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
            }
            50% {
                transform: translateY(-\${height}px) rotate(\${rotation}deg);
            }
        }
        .flying-bird-103 .wing.left,
        .flying-bird-103 .wing.right {
            animation-name: customWingFlap !important;
        }
    \`;
    document.head.appendChild(style);
}`
    },

    // ====================================================================
    // TEMPLATE 104: Hand Clapping Loader
    // ====================================================================
    loader104: {
        name: "Hand Clapping Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="hand-clapping-104">
        <div class="hand left">
            <div class="palm"></div>
            <div class="thumb"></div>
            <div class="finger"></div>
            <div class="finger"></div>
            <div class="finger"></div>
            <div class="finger"></div>
        </div>
        <div class="hand right">
            <div class="palm"></div>
            <div class="thumb"></div>
            <div class="finger"></div>
            <div class="finger"></div>
            <div class="finger"></div>
            <div class="finger"></div>
        </div>
        <div class="clap-effect"></div>
    </div>
</div>`,
        css: `.hand-clapping-104 {
    position: relative;
    width: 120px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hand-clapping-104 .hand {
    position: absolute;
    width: 40px;
    height: 50px;
}

.hand-clapping-104 .hand.left {
    left: 20px;
    animation: handClapLeft104 1s ease-in-out infinite;
}

.hand-clapping-104 .hand.right {
    right: 20px;
    animation: handClapRight104 1s ease-in-out infinite;
}

.hand-clapping-104 .palm {
    position: absolute;
    width: 30px;
    height: 40px;
    background: #ffb347;
    border-radius: 10px;
}

.hand-clapping-104 .thumb {
    position: absolute;
    top: 5px;
    left: -8px;
    width: 12px;
    height: 18px;
    background: #ffb347;
    border-radius: 6px;
    transform: rotate(-30deg);
}

.hand-clapping-104 .finger {
    position: absolute;
    width: 8px;
    height: 25px;
    background: #ffb347;
    border-radius: 4px;
}

.hand-clapping-104 .hand .finger:nth-child(3) {
    top: 5px;
    right: 0;
}

.hand-clapping-104 .hand .finger:nth-child(4) {
    top: 10px;
    right: 8px;
}

.hand-clapping-104 .hand .finger:nth-child(5) {
    top: 15px;
    right: 16px;
}

.hand-clapping-104 .hand .finger:nth-child(6) {
    top: 20px;
    right: 24px;
}

.hand-clapping-104 .clap-effect {
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    opacity: 0;
    animation: clapEffect104 1s ease-in-out infinite;
}

@keyframes handClapLeft104 {
    0%, 100% {
        transform: translateX(0) rotate(-10deg);
    }
    50% {
        transform: translateX(25px) rotate(-5deg);
    }
}

@keyframes handClapRight104 {
    0%, 100% {
        transform: translateX(0) rotate(10deg);
    }
    50% {
        transform: translateX(-25px) rotate(5deg);
    }
}

@keyframes clapEffect104 {
    0%, 100% {
        transform: scale(0);
        opacity: 0;
    }
    50% {
        transform: scale(1);
        opacity: 0.8;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control hand clapping
const handClapping = document.querySelector('.hand-clapping-104');

// Change hand colors
function setHandColor(skinColor) {
    handClapping.querySelectorAll('.palm').forEach(palm => {
        palm.style.background = skinColor;
    });
    handClapping.querySelectorAll('.thumb').forEach(thumb => {
        thumb.style.background = skinColor;
    });
    handClapping.querySelectorAll('.finger').forEach(finger => {
        finger.style.background = skinColor;
    });
}

// Change clapping speed
function setClappingSpeed(speed) {
    const style = document.createElement('style');
    style.textContent = \`
        .hand-clapping-104 .hand.left,
        .hand-clapping-104 .hand.right {
            animation-duration: \${speed}s !important;
        }
        .hand-clapping-104 .clap-effect {
            animation-duration: \${speed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change clapping distance
function setClappingDistance(distance) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customHandClapLeft {
            0%, 100% {
                transform: translateX(0) rotate(-10deg);
            }
            50% {
                transform: translateX(\${distance}px) rotate(-5deg);
            }
        }
        @keyframes customHandClapRight {
            0%, 100% {
                transform: translateX(0) rotate(10deg);
            }
            50% {
                transform: translateX(-\${distance}px) rotate(5deg);
            }
        }
        .hand-clapping-104 .hand.left {
            animation-name: customHandClapLeft !important;
        }
        .hand-clapping-104 .hand.right {
            animation-name: customHandClapRight !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle clap effect
function toggleClapEffect(show) {
    const clapEffect = handClapping.querySelector('.clap-effect');
    clapEffect.style.display = show ? 'block' : 'none';
}`
    },

    // ====================================================================
    // TEMPLATE 105: Jumping Rabbit Loader
    // ====================================================================
    loader105: {
        name: "Jumping Rabbit Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="jumping-rabbit-105">
        <div class="rabbit">
            <div class="body"></div>
            <div class="head"></div>
            <div class="ear left"></div>
            <div class="ear right"></div>
            <div class="eye left"></div>
            <div class="eye right"></div>
            <div class="nose"></div>
            <div class="front-leg left"></div>
            <div class="front-leg right"></div>
            <div class="back-leg left"></div>
            <div class="back-leg right"></div>
            <div class="tail"></div>
        </div>
        <div class="shadow"></div>
        <div class="grass"></div>
        <div class="grass"></div>
    </div>
</div>`,
        css: `.jumping-rabbit-105 {
    position: relative;
    width: 100px;
    height: 120px;
}

.jumping-rabbit-105 .rabbit {
    position: relative;
    width: 100%;
    height: 100%;
    animation: rabbitJump105 1.5s ease-in-out infinite;
}

.jumping-rabbit-105 .body {
    position: absolute;
    top: 40px;
    left: 35px;
    width: 40px;
    height: 50px;
    background: #f3f4f6;
    border-radius: 50% 50% 40% 40%;
}

.jumping-rabbit-105 .head {
    position: absolute;
    top: 30px;
    left: 45px;
    width: 30px;
    height: 25px;
    background: #f3f4f6;
    border-radius: 50%;
}

.jumping-rabbit-105 .ear {
    position: absolute;
    width: 8px;
    height: 30px;
    background: #f3f4f6;
    border-radius: 4px;
    animation: earTwitch105 2s ease-in-out infinite;
}

.jumping-rabbit-105 .ear.left {
    top: 15px;
    left: 50px;
    transform: rotate(-15deg);
    animation-delay: 0s;
}

.jumping-rabbit-105 .ear.right {
    top: 15px;
    left: 60px;
    transform: rotate(15deg);
    animation-delay: 0.5s;
}

.jumping-rabbit-105 .eye {
    position: absolute;
    top: 40px;
    width: 6px;
    height: 6px;
    background: #1f2937;
    border-radius: 50%;
}

.jumping-rabbit-105 .eye.left {
    left: 50px;
}

.jumping-rabbit-105 .eye.right {
    left: 65px;
}

.jumping-rabbit-105 .nose {
    position: absolute;
    top: 50px;
    left: 57px;
    width: 6px;
    height: 4px;
    background: #ef4444;
    border-radius: 3px;
    animation: noseTwitch105 1s ease-in-out infinite;
}

.jumping-rabbit-105 .front-leg {
    position: absolute;
    top: 85px;
    width: 6px;
    height: 20px;
    background: #f3f4f6;
    border-radius: 3px;
}

.jumping-rabbit-105 .front-leg.left {
    left: 45px;
    animation: frontLegJump105 1.5s ease-in-out infinite;
}

.jumping-rabbit-105 .front-leg.right {
    left: 60px;
    animation: frontLegJump105 1.5s ease-in-out infinite 0.2s;
}

.jumping-rabbit-105 .back-leg {
    position: absolute;
    top: 70px;
    width: 10px;
    height: 30px;
    background: #f3f4f6;
    border-radius: 5px;
    transform-origin: top center;
}

.jumping-rabbit-105 .back-leg.left {
    left: 35px;
    animation: backLegJump105 1.5s ease-in-out infinite;
}

.jumping-rabbit-105 .back-leg.right {
    left: 70px;
    animation: backLegJump105 1.5s ease-in-out infinite 0.1s;
}

.jumping-rabbit-105 .tail {
    position: absolute;
    top: 65px;
    left: 30px;
    width: 15px;
    height: 15px;
    background: #f3f4f6;
    border-radius: 50%;
    animation: tailWiggle105 1s ease-in-out infinite;
}

.jumping-rabbit-105 .shadow {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    animation: shadowJump105 1.5s ease-in-out infinite;
}

.jumping-rabbit-105 .grass {
    position: absolute;
    bottom: 0;
    width: 15px;
    height: 20px;
    background: #10b981;
    border-radius: 0 0 5px 5px;
    animation: grassSway105 2s ease-in-out infinite;
}

.jumping-rabbit-105 .grass:nth-child(3) {
    left: 20px;
    animation-delay: 0s;
}

.jumping-rabbit-105 .grass:nth-child(4) {
    right: 20px;
    animation-delay: 1s;
}

@keyframes rabbitJump105 {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-30px);
    }
}

@keyframes earTwitch105 {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(5deg);
    }
}

@keyframes noseTwitch105 {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

@keyframes frontLegJump105 {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes backLegJump105 {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-30deg);
    }
}

@keyframes tailWiggle105 {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(15deg);
    }
}

@keyframes shadowJump105 {
    0%, 100% {
        transform: translateX(-50%) scale(1);
        opacity: 0.2;
    }
    50% {
        transform: translateX(-50%) scale(0.7);
        opacity: 0.4;
    }
}

@keyframes grassSway105 {
    0%, 100% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(10deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #86efac; /* Light green background */
    border-radius: 8px;
}`,
        js: `// Control jumping rabbit
const jumpingRabbit = document.querySelector('.jumping-rabbit-105');

// Change rabbit colors
function setRabbitColors(furColor, eyeColor, noseColor) {
    jumpingRabbit.querySelector('.body').style.background = furColor;
    jumpingRabbit.querySelector('.head').style.background = furColor;
    jumpingRabbit.querySelectorAll('.ear').forEach(ear => {
        ear.style.background = furColor;
    });
    jumpingRabbit.querySelectorAll('.front-leg, .back-leg').forEach(leg => {
        leg.style.background = furColor;
    });
    jumpingRabbit.querySelector('.tail').style.background = furColor;
    jumpingRabbit.querySelectorAll('.eye').forEach(eye => {
        eye.style.background = eyeColor;
    });
    jumpingRabbit.querySelector('.nose').style.background = noseColor;
}

// Change jumping height
function setJumpHeight(height) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customRabbitJump {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-\${height}px);
            }
        }
        @keyframes customShadowJump {
            0%, 100% {
                transform: translateX(-50%) scale(1);
                opacity: 0.2;
            }
            50% {
                transform: translateX(-50%) scale(\${1 - (height / 100)});
                opacity: 0.4;
            }
        }
        .jumping-rabbit-105 .rabbit {
            animation-name: customRabbitJump !important;
        }
        .jumping-rabbit-105 .shadow {
            animation-name: customShadowJump !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change animation speeds
function setRabbitSpeeds(jumpSpeed, earSpeed, noseSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .jumping-rabbit-105 .rabbit {
            animation-duration: \${jumpSpeed}s !important;
        }
        .jumping-rabbit-105 .ear.left,
        .jumping-rabbit-105 .ear.right {
            animation-duration: \${earSpeed}s !important;
        }
        .jumping-rabbit-105 .nose {
            animation-duration: \${noseSpeed}s !important;
        }
        .jumping-rabbit-105 .shadow {
            animation-duration: \${jumpSpeed}s !important;
        }
        .jumping-rabbit-105 .grass {
            animation-duration: \${earSpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle grass
function toggleGrass(show) {
    const grasses = jumpingRabbit.querySelectorAll('.grass');
    grasses.forEach(grass => {
        grass.style.display = show ? 'block' : 'none';
    });
}`
    },
        // ====================================================================
    // TEMPLATE 106: iOS Style Loader
    // ====================================================================
    loader106: {
        name: "iOS Style Loader",
        category: "modern",
        html: `<div class="loader-container dark-bg">
    <div class="ios-loader-106">
        <div class="iphone-frame">
            <div class="notch"></div>
            <div class="screen">
                <div class="status-bar">
                    <span class="time">9:41</span>
                    <span class="status-icons">
                        <i class="wifi"></i>
                        <i class="signal"></i>
                        <i class="battery"></i>
                    </span>
                </div>
                <div class="app-icon"></div>
                <div class="loading-text">Loading...</div>
                <div class="progress-ring">
                    <div class="ring"></div>
                    <div class="ring"></div>
                    <div class="ring"></div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.ios-loader-106 {
    position: relative;
    width: 120px;
    height: 200px;
}

.ios-loader-106 .iphone-frame {
    position: relative;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border: 3px solid #333;
}

.ios-loader-106 .notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 20px;
    background: #000;
    border-radius: 0 0 10px 10px;
    z-index: 10;
}

.ios-loader-106 .screen {
    position: absolute;
    top: 20px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 25px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ios-loader-106 .status-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: white;
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    margin-bottom: 20px;
}

.ios-loader-106 .status-icons {
    display: flex;
    gap: 5px;
    align-items: center;
}

.ios-loader-106 .status-icons i {
    display: inline-block;
    width: 12px;
    height: 6px;
    background: white;
    border-radius: 1px;
}

.ios-loader-106 .status-icons .wifi {
    transform: rotate(45deg);
}

.ios-loader-106 .status-icons .signal {
    width: 10px;
    height: 6px;
    clip-path: polygon(0% 100%, 25% 0%, 50% 100%, 75% 0%, 100% 100%);
}

.ios-loader-106 .status-icons .battery {
    width: 15px;
    height: 8px;
    border: 1px solid white;
    border-radius: 2px;
    position: relative;
}

.ios-loader-106 .status-icons .battery::after {
    content: '';
    position: absolute;
    right: -2px;
    top: 2px;
    width: 2px;
    height: 4px;
    background: white;
    border-radius: 0 1px 1px 0;
}

.ios-loader-106 .app-icon {
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 12px;
    margin: 20px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    animation: appIconBounce106 2s ease-in-out infinite;
}

.ios-loader-106 .loading-text {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 12px;
    margin-bottom: 15px;
    opacity: 0.8;
}

.ios-loader-106 .progress-ring {
    position: relative;
    width: 40px;
    height: 40px;
}

.ios-loader-106 .progress-ring .ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    animation: ringRotate106 1.5s linear infinite;
}

.ios-loader-106 .progress-ring .ring:nth-child(1) {
    animation-delay: 0s;
}

.ios-loader-106 .progress-ring .ring:nth-child(2) {
    width: 70%;
    height: 70%;
    top: 15%;
    left: 15%;
    animation-delay: 0.2s;
}

.ios-loader-106 .progress-ring .ring:nth-child(3) {
    width: 40%;
    height: 40%;
    top: 30%;
    left: 30%;
    animation-delay: 0.4s;
}

@keyframes appIconBounce106 {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes ringRotate106 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #1a1a1a;
    border-radius: 8px;
}

.dark-bg {
    background: #1a1a1a;
}`,
        js: `// Control iOS loader
const iosLoader = document.querySelector('.ios-loader-106');

// Change iOS theme
function setIOSTheme(backgroundColor, appColor) {
    const screen = iosLoader.querySelector('.screen');
    screen.style.background = backgroundColor;
    
    const appIcon = iosLoader.querySelector('.app-icon');
    appIcon.style.background = appColor;
}

// Change loading text
function setIOSText(text) {
    const loadingText = iosLoader.querySelector('.loading-text');
    loadingText.textContent = text;
}

// Change animation speeds
function setIOSAnimations(bounceSpeed, ringSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .ios-loader-106 .app-icon {
            animation-duration: \${bounceSpeed}s !important;
        }
        .ios-loader-106 .progress-ring .ring {
            animation-duration: \${ringSpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change status bar time
function setIOSTime(time) {
    const timeElement = iosLoader.querySelector('.time');
    timeElement.textContent = time;
}

// Toggle status icons
function toggleIOSIcons(showWifi, showSignal, showBattery) {
    const wifi = iosLoader.querySelector('.wifi');
    const signal = iosLoader.querySelector('.signal');
    const battery = iosLoader.querySelector('.battery');
    
    wifi.style.display = showWifi ? 'block' : 'none';
    signal.style.display = showSignal ? 'block' : 'none';
    battery.style.display = showBattery ? 'block' : 'none';
}`
    },

    // ====================================================================
    // TEMPLATE 107: Android Material Loader
    // ====================================================================
    loader107: {
        name: "Android Material Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="android-loader-107">
        <div class="phone-frame">
            <div class="camera-cutout"></div>
            <div class="screen">
                <div class="material-header">
                    <div class="material-circle"></div>
                    <div class="material-title">Loading</div>
                </div>
                <div class="material-progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="material-content">
                    <div class="content-shimmer"></div>
                    <div class="content-shimmer"></div>
                    <div class="content-shimmer"></div>
                </div>
                <div class="material-fab">
                    <div class="fab-icon">+</div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.android-loader-107 {
    position: relative;
    width: 120px;
    height: 200px;
}

.android-loader-107 .phone-frame {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 3px solid #ddd;
}

.android-loader-107 .camera-cutout {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #333;
    border-radius: 50%;
    z-index: 10;
}

.android-loader-107 .screen {
    position: absolute;
    top: 30px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: white;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
}

.android-loader-107 .material-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.android-loader-107 .material-circle {
    width: 40px;
    height: 40px;
    background: #4285f4;
    border-radius: 50%;
    animation: materialPulse107 2s ease-in-out infinite;
}

.android-loader-107 .material-title {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #333;
}

.android-loader-107 .material-progress {
    width: 100%;
    height: 4px;
    background: #e0e0e0;
    border-radius: 2px;
    overflow: hidden;
    margin-bottom: 30px;
}

.android-loader-107 .progress-bar {
    width: 60%;
    height: 100%;
    background: #4285f4;
    border-radius: 2px;
    animation: progressLoad107 3s ease-in-out infinite;
}

.android-loader-107 .material-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.android-loader-107 .content-shimmer {
    width: 100%;
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    border-radius: 4px;
    animation: shimmer107 1.5s ease-in-out infinite;
}

.android-loader-107 .content-shimmer:nth-child(2) {
    width: 80%;
}

.android-loader-107 .content-shimmer:nth-child(3) {
    width: 60%;
}

.android-loader-107 .material-fab {
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    background: #4285f4;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(66, 133, 244, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fabFloat107 2s ease-in-out infinite;
}

.android-loader-107 .fab-icon {
    color: white;
    font-size: 24px;
    font-weight: bold;
}

@keyframes materialPulse107 {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

@keyframes progressLoad107 {
    0%, 100% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(100%);
    }
}

@keyframes shimmer107 {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

@keyframes fabFloat107 {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control Android loader
const androidLoader = document.querySelector('.android-loader-107');

// Change Material colors
function setMaterialColors(primaryColor, backgroundColor) {
    const style = document.createElement('style');
    style.textContent = \`
        .android-loader-107 .material-circle {
            background: \${primaryColor} !important;
        }
        .android-loader-107 .progress-bar {
            background: \${primaryColor} !important;
        }
        .android-loader-107 .material-fab {
            background: \${primaryColor} !important;
            box-shadow: 0 4px 10px \${primaryColor}4d !important;
        }
        .android-loader-107 .screen {
            background: \${backgroundColor} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change content shimmer
function setShimmerContent(lines) {
    const contentContainer = androidLoader.querySelector('.material-content');
    contentContainer.innerHTML = '';
    
    for (let i = 0; i < lines; i++) {
        const shimmer = document.createElement('div');
        shimmer.className = 'content-shimmer';
        shimmer.style.width = \`\${100 - (i * 20)}%\`;
        shimmer.style.animationDelay = \`\${i * 0.2}s\`;
        contentContainer.appendChild(shimmer);
    }
}

// Change FAB icon
function setFABIcon(icon) {
    const fabIcon = androidLoader.querySelector('.fab-icon');
    fabIcon.textContent = icon;
}

// Change animation speeds
function setMaterialAnimations(pulseSpeed, progressSpeed, shimmerSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .android-loader-107 .material-circle {
            animation-duration: \${pulseSpeed}s !important;
        }
        .android-loader-107 .progress-bar {
            animation-duration: \${progressSpeed}s !important;
        }
        .android-loader-107 .content-shimmer {
            animation-duration: \${shimmerSpeed}s !important;
        }
        .android-loader-107 .material-fab {
            animation-duration: \${pulseSpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle FAB
function toggleFAB(show) {
    const fab = androidLoader.querySelector('.material-fab');
    fab.style.display = show ? 'flex' : 'none';
}`
    },

    // ====================================================================
    // TEMPLATE 108: Foldable Phone Loader
    // ====================================================================
    loader108: {
        name: "Foldable Phone Loader",
        category: "modern",
        html: `<div class="loader-container">
    <div class="foldable-loader-108">
        <div class="foldable-phone">
            <div class="screen left">
                <div class="notification"></div>
                <div class="notification"></div>
                <div class="fold-line"></div>
            </div>
            <div class="screen right">
                <div class="app-grid">
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                    <div class="app"></div>
                </div>
                <div class="fold-line"></div>
            </div>
            <div class="hinge"></div>
        </div>
        <div class="fold-animation"></div>
    </div>
</div>`,
        css: `.foldable-loader-108 {
    position: relative;
    width: 180px;
    height: 120px;
}

.foldable-loader-108 .foldable-phone {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    perspective: 1000px;
}

.foldable-loader-108 .screen {
    position: relative;
    width: 50%;
    height: 100%;
    background: #111;
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid #333;
    animation: screenFold108 4s ease-in-out infinite;
}

.foldable-loader-108 .screen.left {
    transform-origin: right center;
    border-right: none;
    border-radius: 10px 0 0 10px;
    padding: 15px;
}

.foldable-loader-108 .screen.right {
    transform-origin: left center;
    border-left: none;
    border-radius: 0 10px 10px 0;
    padding: 15px;
    background: #222;
}

.foldable-loader-108 .notification {
    width: 100%;
    height: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    margin-bottom: 8px;
    animation: notificationPulse108 2s ease-in-out infinite;
}

.foldable-loader-108 .notification:nth-child(2) {
    animation-delay: 0.5s;
    width: 80%;
}

.foldable-loader-108 .fold-line {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, 
        transparent 10%, 
        rgba(255, 255, 255, 0.3) 50%, 
        transparent 90%);
}

.foldable-loader-108 .screen.left .fold-line {
    right: 0;
}

.foldable-loader-108 .screen.right .fold-line {
    left: 0;
}

.foldable-loader-108 .app-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 20px;
}

.foldable-loader-108 .app {
    width: 25px;
    height: 25px;
    background: rgba(66, 133, 244, 0.8);
    border-radius: 8px;
    animation: appGlow108 2s ease-in-out infinite;
}

.foldable-loader-108 .app:nth-child(2) {
    background: rgba(219, 68, 55, 0.8);
    animation-delay: 0.2s;
}

.foldable-loader-108 .app:nth-child(3) {
    background: rgba(244, 180, 0, 0.8);
    animation-delay: 0.4s;
}

.foldable-loader-108 .app:nth-child(4) {
    background: rgba(15, 157, 88, 0.8);
    animation-delay: 0.6s;
}

.foldable-loader-108 .hinge {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 40px;
    background: linear-gradient(45deg, #333, #666);
    border-radius: 5px;
    z-index: 2;
    animation: hingeGlow108 2s ease-in-out infinite;
}

.foldable-loader-108 .fold-animation {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 20px;
    background: #4285f4;
    border-radius: 2px;
    animation: foldIndicator108 4s ease-in-out infinite;
}

@keyframes screenFold108 {
    0%, 100% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(-20deg);
    }
}

@keyframes notificationPulse108 {
    0%, 100% {
        opacity: 0.1;
    }
    50% {
        opacity: 0.3;
    }
}

@keyframes appGlow108 {
    0%, 100% {
        transform: scale(1);
        opacity: 0.8;
    }
    50% {
        transform: scale(1.1);
        opacity: 1;
    }
}

@keyframes hingeGlow108 {
    0%, 100% {
        box-shadow: 0 0 5px rgba(102, 102, 102, 0.5);
    }
    50% {
        box-shadow: 0 0 15px rgba(102, 102, 102, 0.8);
    }
}

@keyframes foldIndicator108 {
    0%, 100% {
        transform: translateX(-50%) translateY(0);
        opacity: 0.5;
    }
    50% {
        transform: translateX(-50%) translateY(10px);
        opacity: 1;
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control foldable loader
const foldableLoader = document.querySelector('.foldable-loader-108');

// Change fold angle
function setFoldAngle(angle) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customScreenFold {
            0%, 100% {
                transform: rotateY(0deg);
            }
            50% {
                transform: rotateY(-\${angle}deg);
            }
        }
        .foldable-loader-108 .screen {
            animation-name: customScreenFold !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change screen colors
function setScreenColors(leftColor, rightColor) {
    const leftScreen = foldableLoader.querySelector('.screen.left');
    const rightScreen = foldableLoader.querySelector('.screen.right');
    
    leftScreen.style.background = leftColor;
    rightScreen.style.background = rightColor;
}

// Change app colors
function setAppColors(colors) {
    const apps = foldableLoader.querySelectorAll('.app');
    apps.forEach((app, index) => {
        if (colors[index]) {
            app.style.background = colors[index];
        }
    });
}

// Change fold speed
function setFoldSpeed(foldSpeed, notificationSpeed, appSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .foldable-loader-108 .screen {
            animation-duration: \${foldSpeed}s !important;
        }
        .foldable-loader-108 .notification {
            animation-duration: \${notificationSpeed}s !important;
        }
        .foldable-loader-108 .app {
            animation-duration: \${appSpeed}s !important;
        }
        .foldable-loader-108 .hinge {
            animation-duration: \${notificationSpeed}s !important;
        }
        .foldable-loader-108 .fold-animation {
            animation-duration: \${foldSpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle hinge
function toggleHinge(show) {
    const hinge = foldableLoader.querySelector('.hinge');
    hinge.style.display = show ? 'block' : 'none';
}`
    },

    // ====================================================================
    // TEMPLATE 109: Smartwatch Loader
    // ====================================================================
    loader109: {
        name: "Smartwatch Loader",
        category: "minimal",
        html: `<div class="loader-container dark-bg">
    <div class="smartwatch-loader-109">
        <div class="watch-body">
            <div class="watch-screen">
                <div class="watch-face">
                    <div class="hour-hand"></div>
                    <div class="minute-hand"></div>
                    <div class="second-hand"></div>
                    <div class="center-dot"></div>
                </div>
                <div class="watch-stats">
                    <div class="stat">
                        <div class="stat-icon">❤️</div>
                        <div class="stat-value">72</div>
                    </div>
                    <div class="stat">
                        <div class="stat-icon">⚡</div>
                        <div class="stat-value">65%</div>
                    </div>
                </div>
                <div class="loading-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
            <div class="watch-crown"></div>
            <div class="watch-button"></div>
        </div>
        <div class="watch-band"></div>
    </div>
</div>`,
        css: `.smartwatch-loader-109 {
    position: relative;
    width: 100px;
    height: 120px;
}

.smartwatch-loader-109 .watch-body {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    background: #222;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border: 3px solid #333;
}

.smartwatch-loader-109 .watch-screen {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: #000;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.smartwatch-loader-109 .watch-face {
    position: relative;
    width: 50px;
    height: 50px;
    border: 2px solid #4285f4;
    border-radius: 50%;
    margin-bottom: 10px;
}

.smartwatch-loader-109 .hour-hand {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 15px;
    background: white;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(30deg);
    animation: hourRotate109 12s linear infinite;
}

.smartwatch-loader-109 .minute-hand {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 20px;
    background: #4285f4;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(90deg);
    animation: minuteRotate109 6s linear infinite;
}

.smartwatch-loader-109 .second-hand {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1px;
    height: 22px;
    background: #ff4444;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(180deg);
    animation: secondRotate109 1s linear infinite;
}

.smartwatch-loader-109 .center-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
}

.smartwatch-loader-109 .watch-stats {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
}

.smartwatch-loader-109 .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
}

.smartwatch-loader-109 .stat-icon {
    font-size: 12px;
    margin-bottom: 2px;
}

.smartwatch-loader-109 .stat-value {
    font-weight: bold;
}

.smartwatch-loader-109 .loading-dots {
    display: flex;
    gap: 4px;
}

.smartwatch-loader-109 .loading-dots .dot {
    width: 6px;
    height: 6px;
    background: #4285f4;
    border-radius: 50%;
    animation: watchDotPulse109 1.5s ease-in-out infinite;
}

.smartwatch-loader-109 .loading-dots .dot:nth-child(2) {
    animation-delay: 0.2s;
}

.smartwatch-loader-109 .loading-dots .dot:nth-child(3) {
    animation-delay: 0.4s;
}

.smartwatch-loader-109 .watch-crown {
    position: absolute;
    right: -8px;
    top: 30px;
    width: 8px;
    height: 20px;
    background: #333;
    border-radius: 4px 0 0 4px;
}

.smartwatch-loader-109 .watch-button {
    position: absolute;
    right: -8px;
    top: 55px;
    width: 8px;
    height: 15px;
    background: #333;
    border-radius: 4px 0 0 4px;
}

.smartwatch-loader-109 .watch-band {
    position: absolute;
    top: 80px;
    left: 20px;
    right: 20px;
    height: 20px;
    background: #111;
    border-radius: 0 0 10px 10px;
    animation: bandPulse109 2s ease-in-out infinite;
}

@keyframes hourRotate109 {
    0% {
        transform: translate(-50%, -100%) rotate(30deg);
    }
    100% {
        transform: translate(-50%, -100%) rotate(390deg);
    }
}

@keyframes minuteRotate109 {
    0% {
        transform: translate(-50%, -100%) rotate(90deg);
    }
    100% {
        transform: translate(-50%, -100%) rotate(450deg);
    }
}

@keyframes secondRotate109 {
    0% {
        transform: translate(-50%, -100%) rotate(180deg);
    }
    100% {
        transform: translate(-50%, -100%) rotate(540deg);
    }
}

@keyframes watchDotPulse109 {
    0%, 100% {
        transform: scale(1);
        opacity: 0.5;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
}

@keyframes bandPulse109 {
    0%, 100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1.05);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #1a1a1a;
    border-radius: 8px;
}

.dark-bg {
    background: #1a1a1a;
}`,
        js: `// Control smartwatch loader
const smartwatchLoader = document.querySelector('.smartwatch-loader-109');

// Change watch colors
function setWatchColors(faceColor, handColor, bandColor) {
    const style = document.createElement('style');
    style.textContent = \`
        .smartwatch-loader-109 .watch-face {
            border-color: \${faceColor} !important;
        }
        .smartwatch-loader-109 .minute-hand {
            background: \${handColor} !important;
        }
        .smartwatch-loader-109 .loading-dots .dot {
            background: \${faceColor} !important;
        }
        .smartwatch-loader-109 .watch-band {
            background: \${bandColor} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Update watch stats
function setWatchStats(heartRate, battery) {
    const heartElement = smartwatchLoader.querySelector('.stat-value:nth-child(1)');
    const batteryElement = smartwatchLoader.querySelector('.stat-value:nth-child(2)');
    
    heartElement.textContent = heartRate;
    batteryElement.textContent = \`\${battery}%\`;
}

// Set current time
function setWatchTime(hours, minutes) {
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    
    const style = document.createElement('style');
    style.textContent = \`
        .smartwatch-loader-109 .hour-hand {
            animation: none;
            transform: translate(-50%, -100%) rotate(\${hourDeg}deg);
        }
        .smartwatch-loader-109 .minute-hand {
            animation: none;
            transform: translate(-50%, -100%) rotate(\${minuteDeg}deg);
        }
    \`;
    document.head.appendChild(style);
}

// Change animation speeds
function setWatchAnimations(hourSpeed, minuteSpeed, secondSpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes customHourRotate {
            0% {
                transform: translate(-50%, -100%) rotate(30deg);
            }
            100% {
                transform: translate(-50%, -100%) rotate(390deg);
            }
        }
        @keyframes customMinuteRotate {
            0% {
                transform: translate(-50%, -100%) rotate(90deg);
            }
            100% {
                transform: translate(-50%, -100%) rotate(450deg);
            }
        }
        @keyframes customSecondRotate {
            0% {
                transform: translate(-50%, -100%) rotate(180deg);
            }
            100% {
                transform: translate(-50%, -100%) rotate(540deg);
            }
        }
        
        .smartwatch-loader-109 .hour-hand {
            animation: customHourRotate \${hourSpeed}s linear infinite !important;
        }
        .smartwatch-loader-109 .minute-hand {
            animation: customMinuteRotate \${minuteSpeed}s linear infinite !important;
        }
        .smartwatch-loader-109 .second-hand {
            animation: customSecondRotate \${secondSpeed}s linear infinite !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle watch band
function toggleWatchBand(show) {
    const band = smartwatchLoader.querySelector('.watch-band');
    band.style.display = show ? 'block' : 'none';
}`
    },

    // ====================================================================
    // TEMPLATE 110: Retro Mobile Loader
    // ====================================================================
    loader110: {
        name: "Retro Mobile Loader",
        category: "animated",
        html: `<div class="loader-container">
    <div class="retro-mobile-loader-110">
        <div class="retro-phone">
            <div class="antenna"></div>
            <div class="phone-body">
                <div class="screen">
                    <div class="signal-bars">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                    <div class="battery-indicator">
                        <div class="battery-level"></div>
                    </div>
                    <div class="retro-text">Connecting...</div>
                    <div class="signal-wave"></div>
                    <div class="dialing-animation">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="keypad">
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                </div>
            </div>
        </div>
    </div>
</div>`,
        css: `.retro-mobile-loader-110 {
    position: relative;
    width: 120px;
    height: 180px;
}

.retro-mobile-loader-110 .retro-phone {
    position: relative;
    width: 100%;
    height: 100%;
}

.retro-mobile-loader-110 .antenna {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 20px;
    background: #333;
    border-radius: 2px 2px 0 0;
    animation: antennaBob110 2s ease-in-out infinite;
}

.retro-mobile-loader-110 .phone-body {
    position: absolute;
    top: 0;
    width: 100%;
    height: 160px;
    background: #888;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border: 2px solid #666;
}

.retro-mobile-loader-110 .screen {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    height: 80px;
    background: #000;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.retro-mobile-loader-110 .signal-bars {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: flex-end;
    gap: 2px;
}

.retro-mobile-loader-110 .signal-bars .bar {
    width: 4px;
    background: #0f0;
    border-radius: 1px;
    animation: signalPulse110 2s ease-in-out infinite;
}

.retro-mobile-loader-110 .signal-bars .bar:nth-child(1) {
    height: 6px;
    animation-delay: 0s;
}

.retro-mobile-loader-110 .signal-bars .bar:nth-child(2) {
    height: 9px;
    animation-delay: 0.2s;
}

.retro-mobile-loader-110 .signal-bars .bar:nth-child(3) {
    height: 12px;
    animation-delay: 0.4s;
}

.retro-mobile-loader-110 .signal-bars .bar:nth-child(4) {
    height: 15px;
    animation-delay: 0.6s;
}

.retro-mobile-loader-110 .battery-indicator {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 10px;
    border: 1px solid #0f0;
    border-radius: 2px;
    overflow: hidden;
}

.retro-mobile-loader-110 .battery-level {
    width: 60%;
    height: 100%;
    background: #0f0;
    animation: batteryCharge110 3s ease-in-out infinite;
}

.retro-mobile-loader-110 .retro-text {
    color: #0f0;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    margin-top: 20px;
    text-shadow: 0 0 5px #0f0;
}

.retro-mobile-loader-110 .signal-wave {
    position: absolute;
    bottom: 10px;
    left: 20%;
    right: 20%;
    height: 20px;
    background: linear-gradient(90deg, 
        transparent 0%, 
        #0f0 25%, 
        transparent 50%, 
        #0f0 75%, 
        transparent 100%);
    background-size: 200% 100%;
    animation: signalWave110 2s linear infinite;
    clip-path: polygon(0% 50%, 20% 30%, 40% 50%, 60% 70%, 80% 50%, 100% 30%);
}

.retro-mobile-loader-110 .dialing-animation {
    position: absolute;
    bottom: 5px;
    display: flex;
    gap: 5px;
}

.retro-mobile-loader-110 .dialing-animation .dot {
    width: 6px;
    height: 6px;
    background: #0f0;
    border-radius: 50%;
    animation: dialingDot110 1.5s ease-in-out infinite;
}

.retro-mobile-loader-110 .dialing-animation .dot:nth-child(2) {
    animation-delay: 0.2s;
}

.retro-mobile-loader-110 .dialing-animation .dot:nth-child(3) {
    animation-delay: 0.4s;
}

.retro-mobile-loader-110 .keypad {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
}

.retro-mobile-loader-110 .key {
    background: #666;
    border-radius: 5px;
    animation: keyPress110 2s ease-in-out infinite;
}

.retro-mobile-loader-110 .key:nth-child(1) {
    animation-delay: 0s;
}

.retro-mobile-loader-110 .key:nth-child(2) {
    animation-delay: 0.5s;
}

.retro-mobile-loader-110 .key:nth-child(3) {
    animation-delay: 1s;
}

.retro-mobile-loader-110 .key:nth-child(4) {
    animation-delay: 1.5s;
}

@keyframes antennaBob110 {
    0%, 100% {
        transform: translateX(-50%) rotate(0deg);
    }
    50% {
        transform: translateX(-50%) rotate(5deg);
    }
}

@keyframes signalPulse110 {
    0%, 100% {
        opacity: 0.3;
    }
    50% {
        opacity: 1;
    }
}

@keyframes batteryCharge110 {
    0%, 100% {
        width: 20%;
    }
    50% {
        width: 80%;
    }
}

@keyframes signalWave110 {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

@keyframes dialingDot110 {
    0%, 100% {
        transform: translateY(0);
        opacity: 0.3;
    }
    50% {
        transform: translateY(-5px);
        opacity: 1;
    }
}

@keyframes keyPress110 {
    0%, 100% {
        background: #666;
        transform: scale(1);
    }
    50% {
        background: #888;
        transform: scale(0.9);
    }
}

/* Container styling */
.loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background: #f8fafc;
    border-radius: 8px;
}`,
        js: `// Control retro mobile loader
const retroLoader = document.querySelector('.retro-mobile-loader-110');

// Change retro colors
function setRetroColors(screenColor, signalColor, keyColor) {
    const style = document.createElement('style');
    style.textContent = \`
        .retro-mobile-loader-110 .screen {
            background: \${screenColor} !important;
        }
        .retro-mobile-loader-110 .signal-bars .bar,
        .retro-mobile-loader-110 .battery-indicator,
        .retro-mobile-loader-110 .battery-level,
        .retro-mobile-loader-110 .retro-text,
        .retro-mobile-loader-110 .signal-wave,
        .retro-mobile-loader-110 .dialing-animation .dot {
            color: \${signalColor} !important;
            background: \${signalColor} !important;
            border-color: \${signalColor} !important;
            text-shadow: 0 0 5px \${signalColor} !important;
        }
        .retro-mobile-loader-110 .key {
            background: \${keyColor} !important;
        }
    \`;
    document.head.appendChild(style);
}

// Change retro text
function setRetroText(text) {
    const retroText = retroLoader.querySelector('.retro-text');
    retroText.textContent = text;
}

// Change signal strength
function setSignalStrength(strength) {
    const bars = retroLoader.querySelectorAll('.signal-bars .bar');
    bars.forEach((bar, index) => {
        bar.style.opacity = index < strength ? '1' : '0.3';
        bar.style.animationPlayState = index < strength ? 'running' : 'paused';
    });
}

// Change animation speeds
function setRetroAnimations(antennaSpeed, signalSpeed, keySpeed) {
    const style = document.createElement('style');
    style.textContent = \`
        .retro-mobile-loader-110 .antenna {
            animation-duration: \${antennaSpeed}s !important;
        }
        .retro-mobile-loader-110 .signal-bars .bar {
            animation-duration: \${signalSpeed}s !important;
        }
        .retro-mobile-loader-110 .battery-level {
            animation-duration: \${signalSpeed * 1.5}s !important;
        }
        .retro-mobile-loader-110 .signal-wave {
            animation-duration: \${signalSpeed}s !important;
        }
        .retro-mobile-loader-110 .dialing-animation .dot {
            animation-duration: \${signalSpeed * 0.75}s !important;
        }
        .retro-mobile-loader-110 .key {
            animation-duration: \${keySpeed}s !important;
        }
    \`;
    document.head.appendChild(style);
}

// Toggle antenna
function toggleAntenna(show) {
    const antenna = retroLoader.querySelector('.antenna');
    antenna.style.display = show ? 'block' : 'none';
}`
    },
};

// Main functionality for loader templates
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('codeModal');
    const codeBtns = document.querySelectorAll('.code-btn');
    const closeModal = document.querySelector('.close-modal');
    const codeTabs = document.querySelectorAll('.code-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const copyBtn = document.getElementById('copyButton');
    const copyNotification = document.getElementById('copyNotification');
    const categoryBtns = document.querySelectorAll('.category-btn');

    let currentTemplate = null;
    let currentTab = 'html';

    // Ensure copy notification is hidden on page load
    copyNotification.style.display = 'none';

    // Open modal with template code
    codeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (loaderTemplates[templateId]) {
                currentTemplate = loaderTemplates[templateId];
                
                // Update code content
                htmlCode.querySelector('code').textContent = currentTemplate.html;
                cssCode.querySelector('code').textContent = currentTemplate.css;
                jsCode.querySelector('code').textContent = currentTemplate.js;
                
                // Reset to HTML tab and hide notification
                showTab('html');
                copyNotification.style.display = 'none';
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        copyNotification.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            copyNotification.style.display = 'none';
        }
    });

    // Switch between code tabs
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    function showTab(tabId) {
        // Remove active class from all tabs
        codeTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked tab
        document.querySelector(`.code-tab[data-tab="${tabId}"]`).classList.add('active');
        
        // Hide all code content
        document.querySelectorAll('.code-content pre').forEach(pre => {
            pre.style.display = 'none';
        });
        
        // Show selected code content
        document.getElementById(`${tabId}-code`).style.display = 'block';
        currentTab = tabId;
    }

    // Copy code to clipboard
    copyBtn.addEventListener('click', async () => {
        if (!currentTemplate) return;
        
        let textToCopy = '';
        switch(currentTab) {
            case 'html':
                textToCopy = currentTemplate.html;
                break;
            case 'css':
                textToCopy = currentTemplate.css;
                break;
            case 'js':
                textToCopy = currentTemplate.js;
                break;
        }
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            showCopyNotification();
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showCopyNotification();
        }
    });

    function showCopyNotification() {
        copyNotification.style.display = 'none';
        void copyNotification.offsetWidth;
        copyNotification.style.display = 'block';
        
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000);
    }

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            filterTemplates(category);
        });
    });

    function filterTemplates(category) {
        const templateCards = document.querySelectorAll('.template-card');
        
        templateCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
// Button Templates Code Data
const buttonCodes = {
    // ====================================================================
    // TEMPLATE 1: PRIMARY BUTTON
    // ====================================================================
    btn1: {
        name: "Primary Button",
        category: "primary",
        html: `<button class="btn-primary">
    Primary Button
</button>`,
        css: `.btn-primary {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-primary:hover {
    background: #6d28d9;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
}`,
        js: `// No JavaScript required for basic functionality
// Add click event listeners as needed

document.querySelector('.btn-primary').addEventListener('click', function() {
    console.log('Primary button clicked!');
});`
    },
// ====================================================================
// TEMPLATE 2: OUTLINE PULSE BUTTON
// ====================================================================
btn2: {
    name: "Outline Pulse Button",
    category: "outline",
    html: `<button class="btn-outline-pulse">
    Outline Pulse
</button>`,
    css: `.btn-outline-pulse {
    background: transparent;
    color: #7c3aed;
    border: 2px solid #7c3aed;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-pulse:hover {
    color: white;
    animation: pulseOutline 1.5s infinite;
}

.btn-outline-pulse::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #7c3aed;
    transition: left 0.4s ease;
    z-index: -1;
}

.btn-outline-pulse:hover::before {
    left: 0;
}

@keyframes pulseOutline {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4);
    }
    50% {
        box-shadow: 0 0 0 10px rgba(124, 58, 237, 0);
    }
}`,
    js: `// Outline pulse button with animation
const pulseBtn = document.querySelector('.btn-outline-pulse');

pulseBtn.addEventListener('mouseenter', function() {
    this.style.animation = 'pulseOutline 1.5s infinite';
});

pulseBtn.addEventListener('mouseleave', function() {
    this.style.animation = 'none';
});`
},

// ====================================================================
// TEMPLATE 3: OUTLINE GLOW BUTTON
// ====================================================================
btn3: {
    name: "Outline Glow Button",
    category: "outline",
    html: `<button class="btn-outline-glow">
    Outline Glow
</button>`,
    css: `.btn-outline-glow {
    background: transparent;
    color: #10b981;
    border: 2px solid #10b981;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-glow:hover {
    color: white;
    background: #10b981;
    box-shadow: 
        0 0 15px #10b981,
        0 0 30px #10b981,
        0 0 45px #10b981;
    transform: translateY(-2px);
}

.btn-outline-glow::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.4), transparent);
    transition: left 0.5s ease;
}

.btn-outline-glow:hover::before {
    left: 100%;
}`,
    js: `// Outline glow button with shine effect
const glowBtn = document.querySelector('.btn-outline-glow');

glowBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 4: OUTLINE SLIDE BUTTON
// ====================================================================
btn4: {
    name: "Outline Slide Button",
    category: "outline",
    html: `<button class="btn-outline-slide">
    Outline Slide
</button>`,
    css: `.btn-outline-slide {
    background: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
}

.btn-outline-slide::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #3b82f6;
    transition: left 0.4s ease;
    z-index: -1;
}

.btn-outline-slide:hover::before {
    left: 0;
}

.btn-outline-slide:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}`,
    js: `// Outline slide button with fill effect
const slideBtn = document.querySelector('.btn-outline-slide');

slideBtn.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.4s ease';
});

slideBtn.addEventListener('mouseleave', function() {
    this.style.transition = 'all 0.4s ease';
});`
},

// ====================================================================
// TEMPLATE 5: OUTLINE BORDER ANIMATION
// ====================================================================
btn5: {
    name: "Outline Border Animation",
    category: "outline",
    html: `<button class="btn-outline-border">
    Border Animation
</button>`,
    css: `.btn-outline-border {
    background: transparent;
    color: #ec4899;
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #7c3aed, #ec4899, #3b82f6, #10b981);
    background-size: 400% 400%;
    border-radius: 10px;
    z-index: -1;
    animation: borderRotate 3s linear infinite;
}

.btn-outline-border::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 6px;
    z-index: -1;
    transition: all 0.3s ease;
}

.btn-outline-border:hover::after {
    background: transparent;
}

.btn-outline-border:hover {
    color: white;
    transform: translateY(-2px);
}

@keyframes borderRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
    js: `// Outline border animation button
const borderBtn = document.querySelector('.btn-outline-border');

borderBtn.addEventListener('click', function() {
    // Add click feedback
    this.style.transform = 'scale(0.95) translateY(-2px)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 6: OUTLINE MORPH BUTTON
// ====================================================================
btn6: {
    name: "Outline Morph Button",
    category: "outline",
    html: `<button class="btn-outline-morph">
    Outline Morph
</button>`,
    css: `.btn-outline-morph {
    background: transparent;
    color: #f59e0b;
    border: 2px solid #f59e0b;
    padding: 12px 24px;
    border-radius: 25px 8px 25px 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-morph::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #f59e0b;
    transition: left 0.5s ease;
    z-index: -1;
}

.btn-outline-morph:hover::before {
    left: 0;
}

.btn-outline-morph:hover {
    color: white;
    border-radius: 8px 25px 8px 25px;
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
}`,
    js: `// Outline morph button with shape change
const morphBtn = document.querySelector('.btn-outline-morph');

morphBtn.addEventListener('click', function() {
    // Add bounce effect on click
    this.style.transform = 'scale(1.05) translateY(-3px)';
    setTimeout(() => {
        this.style.transform = 'scale(1.1) translateY(-3px)';
    }, 100);
});`
},
// ====================================================================
// TEMPLATE 7: OUTLINE SHINE BUTTON
// ====================================================================
btn7: {
    name: "Outline Shine Button",
    category: "outline",
    html: `<button class="btn-outline-shine">
    Outline Shine
</button>`,
    css: `.btn-outline-shine {
    background: transparent;
    color: #8b5cf6;
    border: 2px solid #8b5cf6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-shine::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.4), transparent);
    transition: left 0.5s ease;
}

.btn-outline-shine:hover::before {
    left: 100%;
}

.btn-outline-shine:hover {
    background: #8b5cf6;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}`,
    js: `// Outline shine button with sweep effect
const shineBtn = document.querySelector('.btn-outline-shine');

shineBtn.addEventListener('click', function() {
    // Add click feedback
    this.style.transform = 'translateY(-1px) scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 8: OUTLINE DOUBLE BORDER
// ====================================================================
btn8: {
    name: "Outline Double Border",
    category: "outline",
    html: `<button class="btn-outline-double">
    Double Border
</button>`,
    css: `.btn-outline-double {
    background: transparent;
    color: #06b6d4;
    border: 2px solid #06b6d4;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    font-family: inherit;
}

.btn-outline-double::before,
.btn-outline-double::after {
    content: '';
    position: absolute;
    border: 2px solid transparent;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    top: -2px;
    left: -2px;
    transition: all 0.3s ease;
}

.btn-outline-double::before {
    border-top: 2px solid #06b6d4;
    border-bottom: 2px solid #06b6d4;
    transform: scaleX(0);
}

.btn-outline-double::after {
    border-left: 2px solid #06b6d4;
    border-right: 2px solid #06b6d4;
    transform: scaleY(0);
}

.btn-outline-double:hover::before {
    transform: scaleX(1);
}

.btn-outline-double:hover::after {
    transform: scaleY(1);
}

.btn-outline-double:hover {
    background: #06b6d4;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(6, 182, 212, 0.3);
}`,
    js: `// Outline double border button
const doubleBtn = document.querySelector('.btn-outline-double');

doubleBtn.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.4s ease';
});

doubleBtn.addEventListener('mouseleave', function() {
    this.style.transition = 'all 0.4s ease';
});`
},

// ====================================================================
// TEMPLATE 9: OUTLINE 3D EFFECT
// ====================================================================
btn9: {
    name: "Outline 3D Effect",
    category: "outline",
    html: `<button class="btn-outline-3d">
    3D Outline
</button>`,
    css: `.btn-outline-3d {
    background: transparent;
    color: #ef4444;
    border: 2px solid #ef4444;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    transform-style: preserve-3d;
    perspective: 500px;
    font-family: inherit;
}

.btn-outline-3d::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: -4px;
    bottom: -4px;
    background: #dc2626;
    border-radius: 8px;
    z-index: -1;
    transition: all 0.3s ease;
    transform: translateZ(-10px);
}

.btn-outline-3d:hover {
    background: #ef4444;
    color: white;
    transform: translateY(-2px) translateZ(10px);
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
}

.btn-outline-3d:hover::before {
    top: 2px;
    left: 2px;
    right: -2px;
    bottom: -2px;
}

.btn-outline-3d:active {
    transform: translateY(0) translateZ(5px);
}`,
    js: `// Outline 3D button with depth effect
const threeDBtn = document.querySelector('.btn-outline-3d');

threeDBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(0) translateZ(5px)';
});

threeDBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-2px) translateZ(10px)';
});`
},

// ====================================================================
// TEMPLATE 10: OUTLINE LIQUID FILL
// ====================================================================
btn10: {
    name: "Outline Liquid Fill",
    category: "outline",
    html: `<button class="btn-outline-liquid">
    Liquid Fill
</button>`,
    css: `.btn-outline-liquid {
    background: transparent;
    color: #10b981;
    border: 2px solid #10b981;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
}

.btn-outline-liquid::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: #10b981;
    transition: height 0.5s ease;
    z-index: -1;
    border-radius: 50% 50% 0 0;
}

.btn-outline-liquid:hover::before {
    height: 100%;
    border-radius: 0;
}

.btn-outline-liquid:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
}`,
    js: `// Outline liquid fill button
const liquidBtn = document.querySelector('.btn-outline-liquid');

liquidBtn.addEventListener('click', function() {
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = \`
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    \`;
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = \`
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
\`;
document.head.appendChild(style);`
},

// ====================================================================
// TEMPLATE 11: OUTLINE MAGNETIC
// ====================================================================
btn11: {
    name: "Outline Magnetic Button",
    category: "outline",
    html: `<button class="btn-outline-magnetic">
    Magnetic
</button>`,
    css: `.btn-outline-magnetic {
    background: transparent;
    color: #f59e0b;
    border: 2px solid #f59e0b;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-magnetic::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(245, 158, 11, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-outline-magnetic:hover::before {
    width: 300px;
    height: 300px;
}

.btn-outline-magnetic:hover {
    background: #f59e0b;
    color: white;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px rgba(245, 158, 11, 0.3);
}`,
    js: `// Outline magnetic button with interactive effects
const magneticBtn = document.querySelector('.btn-outline-magnetic');

// Magnetic effect on mousemove
magneticBtn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX * 10;
    const deltaY = (y - centerY) / centerY * 10;
    
    this.style.transform = \`translate(\${deltaX}px, \${deltaY - 2}px) scale(1.05)\`;
});

magneticBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
});

magneticBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
});`
},
// ====================================================================
// TEMPLATE 12: WAVE SHAPE BUTTON
// ====================================================================
btn12: {
    name: "Wave Shape Button",
    category: "animated",
    html: `<button class="btn-wave-shape"><span>Button</span></button>`,
    css: `/* From Uiverse.io by barisdogansutcu */ 
.btn-wave-shape {
    border: none;
    position: relative;
    width: 200px;
    height: 73px;
    padding: 0;
    z-index: 2;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
    -webkit-mask-size: 100%;
    cursor: pointer;
    background-color: transparent;
    transform: translateY(8px)
}

.btn-wave-shape:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px 0 0 0 white;
    transition: all 2s ease;
}

.btn-wave-shape:hover:after {
    box-shadow: 0px -13px 56px 12px #ffffffa6;
}

.btn-wave-shape span {
    position: absolute;
    width: 100%;
    font-size: 15px;
    font-weight: 100;
    left: 50%;
    top: 39%;
    letter-spacing: 3px;
    text-align: center;
    transform: translate(-50%,-50%);
    color: black;
    transition: all 2s ease;
}

.btn-wave-shape:hover span {
    color: white;
}

.btn-wave-shape:before {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    background-color: black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 1s ease;
}

.btn-wave-shape:hover:before {
    width: 100%;
}`,
    js: `// Wave shape button functionality
const waveBtn = document.querySelector('.btn-wave-shape');

waveBtn.addEventListener('click', function() {
    console.log('Wave button clicked!');
    // Add any additional click functionality here
});`
},

// ====================================================================
// TEMPLATE 13: NEON GLOW BUTTON
// ====================================================================
btn13: {
    name: "Neon Glow Button",
    category: "animated",
    html: `<div class="btn-wrapper">
    <button class="btn">
        <span class="btn-letter">N</span>
        <span class="btn-letter">E</span>
        <span class="btn-letter">O</span>
        <span class="btn-letter">N</span>
        <svg class="btn-svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M9,21.035C9,21.035,3,14,3,9C3,5.686,5.686,3,9,3c3.314,0,6,2.686,6,6C15,14,9,21.035,9,21.035z"/>
        </svg>
    </button>
</div>`,
    css: `/* From Uiverse.io by dexter-st */ 
.btn-wrapper {
    position: relative;
    display: inline-block;
}

.btn {
    --border-radius: 24px;
    --padding: 4px;
    --transition: 0.4s;
    --button-color: #101010;
    --highlight-color-hue: 210deg;

    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em 0.5em 0.5em 1.1em;
    font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
    font-size: 1em;
    font-weight: 400;
    background-color: var(--button-color);
    box-shadow:
        inset 0px 1px 1px rgba(255, 255, 255, 0.2),
        inset 0px 2px 2px rgba(255, 255, 255, 0.15),
        inset 0px 4px 4px rgba(255, 255, 255, 0.1),
        0px -1px 1px rgba(0, 0, 0, 0.02),
        0px -2px 2px rgba(0, 0, 0, 0.03);
    border: solid 1px #fff2;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all var(--transition);
    gap: 8px;
}

.btn::before {
    content: "";
    position: absolute;
    top: calc(0px - var(--padding));
    left: calc(0px - var(--padding));
    width: calc(100% + var(--padding) * 2);
    height: calc(100% + var(--padding) * 2);
    border-radius: calc(var(--border-radius) + var(--padding));
    pointer-events: none;
    background-image: linear-gradient(0deg, #0004, #000a);
    z-index: -1;
    transition: all var(--transition);
    box-shadow:
        0 -8px 8px -6px #0000 inset,
        1px 1px 1px #fff2,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
}

.btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;
    background-image: linear-gradient(
        0deg,
        #fff,
        hsl(var(--highlight-color-hue), 100%, 70%),
        hsla(var(--highlight-color-hue), 100%, 70%, 50%),
        8%,
        transparent
    );
    background-position: 0 0;
    opacity: 0;
    transition: all var(--transition);
}

.btn-letter {
    position: relative;
    display: inline-block;
    color: #fff5;
    animation: letter-anim 2s ease-in-out infinite;
    transition: all var(--transition);
}

@keyframes letter-anim {
    50% {
        text-shadow: 0 0 3px #fff8;
        color: #fff;
    }
}

.btn-svg {
    height: 24px;
    fill: #e8e8e8;
    animation: flicker 2s linear infinite;
    animation-delay: 0.5s;
    filter: drop-shadow(0 0 2px #fff9);
    transition: all var(--transition);
}

@keyframes flicker {
    50% {
        opacity: 0.3;
    }
}

.btn:hover {
    border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 40%);
}

.btn:hover::before {
    box-shadow:
        0 -8px 8px -6px #fffa inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 30%) inset,
        1px 1px 1px #fff2,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
}

.btn:hover::after {
    opacity: 1;
    mask-image: linear-gradient(0deg, #fff, transparent);
}

.btn:hover .btn-svg {
    fill: #fff;
    filter: drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%));
    animation: none;
}

/* Animation delays for letters */
.btn-letter:nth-child(1) { animation-delay: 0s; }
.btn-letter:nth-child(2) { animation-delay: 0.08s; }
.btn-letter:nth-child(3) { animation-delay: 0.16s; }
.btn-letter:nth-child(4) { animation-delay: 0.24s; }`,
    js: `// Neon glow button functionality
const neonBtn = document.querySelector('.btn');

neonBtn.addEventListener('click', function() {
    console.log('Neon button clicked!');
    // Add focus effect on click
    this.focus();
});`
},

// ====================================================================
// TEMPLATE 14: TEXT TRANSFORM BUTTON
// ====================================================================
btn14: {
    name: "Text Transform Button",
    category: "animated",
    html: `<button class="btn-text-transform">
    <span class="original">Hover me</span>
    <div class="letters">
        <span>H</span>
        <span>o</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
        <span>!</span>
    </div>
</button>`,
    css: `/* From Uiverse.io by doniaskima */ 
.btn-text-transform,
.btn-text-transform *,
.btn-text-transform :after,
.btn-text-transform :before,
.btn-text-transform:after,
.btn-text-transform:before {
    border: 0 solid;
    box-sizing: border-box;
}

.btn-text-transform {
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: #000;
    background-image: none;
    color: #fff;
    cursor: pointer;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
        Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 100%;
    line-height: 1.5;
    margin: 0;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
}

.btn-text-transform:disabled {
    cursor: default;
}

.btn-text-transform:-moz-focusring {
    outline: auto;
}

.btn-text-transform svg {
    display: block;
    vertical-align: middle;
}

.btn-text-transform [hidden] {
    display: none;
}

.btn-text-transform {
    border: 1px solid;
    border-radius: 999px;
    box-sizing: border-box;
    display: block;
    font-weight: 900;
    overflow: hidden;
    padding: 1.2rem 3rem;
    position: relative;
    text-transform: uppercase;
}

.btn-text-transform .original {
    background: #fff;
    color: #000;
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
}

.btn-text-transform:hover .original {
    transform: translateY(100%);
}

.btn-text-transform .letters {
    display: inline-flex;
}

.btn-text-transform span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
}

.btn-text-transform span:nth-child(2n) {
    transform: translateY(15px);
}

.btn-text-transform:hover span {
    opacity: 1;
    transform: translateY(0);
}

.btn-text-transform:hover span:nth-child(2) {
    transition-delay: 0.1s;
}

.btn-text-transform:hover span:nth-child(3) {
    transition-delay: 0.2s;
}

.btn-text-transform:hover span:nth-child(4) {
    transition-delay: 0.3s;
}

.btn-text-transform:hover span:nth-child(5) {
    transition-delay: 0.4s;
}

.btn-text-transform:hover span:nth-child(6) {
    transition-delay: 0.5s;
}`,
    js: `// Text transform button functionality
const textBtn = document.querySelector('.btn-text-transform');

textBtn.addEventListener('click', function() {
    console.log('Text transform button clicked!');
    // Reset animation on click
    this.classList.remove('hover');
    void this.offsetWidth; // Trigger reflow
    this.classList.add('hover');
});`
},
// ====================================================================
// TEMPLATE 15: SOCIAL MEDIA GRID
// ====================================================================
btn15: {
    name: "Social Media Grid",
    category: "animated",
    html: `<!-- From Uiverse.io by Praashoo7 --> 
<div class="main">
  <div class="card">
    <svg class="instagram" viewBox="0 0 256 256">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/>
    </svg>
  </div>
  <div class="card">
    <svg class="twitter" viewBox="0 0 48 48">
      <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"/>
    </svg>
  </div>
  <div class="card">
    <svg class="dribble" viewBox="0 0 40 40">
      <path d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z"/>
      <path d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z" fill="#ea4c89"/>
      <path d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194" stroke-miterlimit="10" stroke="#ea4c89" fill="none"/>
    </svg>
  </div>
  <div class="card">
    <svg class="codepen" viewBox="0 0 50 50">
      <path d="M 25 4 L 4 17.34375 L 4 32.652344 L 25 46 L 46 32.65625 L 46 17.34375 Z M 25 29.183594 L 19.066406 25.070313 L 25 21.023438 L 30.933594 25.070313 Z M 27 17.605469 L 27 9.949219 L 40.429688 18.484375 L 34.410156 22.65625 Z M 23 17.605469 L 15.589844 22.65625 L 9.570313 18.484375 L 23 9.949219 Z M 12.09375 25.042969 L 8 27.832031 L 8 22.203125 Z M 15.570313 27.453125 L 23 32.605469 L 23 40.050781 L 9.589844 31.527344 Z M 27 32.605469 L 34.429688 27.453125 L 40.410156 31.527344 L 27 40.050781 Z M 37.90625 25.042969 L 42 22.203125 L 42 27.832031 Z"/>
    </svg>
  </div>
  <div class="card">
    <svg class="uiverse" viewBox="0 0 100 100">
      <path fill="url(#paint0_linear_501_142)" d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"/>
      <path fill="url(#paint1_linear_501_142)" d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"/>
      <path fill="url(#paint2_linear_501_142)" d="M2.86102e-06 83.2195C2.86102e-06 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L2.86102e-06 83.2195Z"/>
      <defs>
        <linearGradient id="paint0_linear_501_142">
          <stop stop-color="#BF66FF"/>
          <stop stop-color="#6248FF" offset="0.510417"/>
          <stop stop-color="#00DDEB" offset="1"/>
        </linearGradient>
        <linearGradient id="paint1_linear_501_142">
          <stop stop-color="#BF66FF"/>
          <stop stop-color="#6248FF" offset="0.510417"/>
          <stop stop-color="#00DDEB" offset="1"/>
        </linearGradient>
        <linearGradient id="paint2_linear_501_142">
          <stop stop-color="#BF66FF"/>
          <stop stop-color="#6248FF" offset="0.510417"/>
          <stop stop-color="#00DDEB" offset="1"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="card">
    <svg class="discord" viewBox="0 0 48 48">
      <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"/>
    </svg>
  </div>
  <div class="card">
    <svg class="github" viewBox="0 0 30 30">
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
    </svg>
  </div>
  <div class="card">
    <svg class="telegram" viewBox="0 0 48 48">
      <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"/>
      <path d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z" fill="#fff"/>
      <path d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z" fill="#b0bec5"/>
      <path d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z" fill="#cfd8dc"/>
    </svg>
  </div>
  <div class="card">
    <svg class="reddit" viewBox="0 0 256 256">
      <circle r="45" cy="45" cx="45"/>
      <path d="M75.011 45 c -0.134 -3.624 -3.177 -6.454 -6.812 -6.331 c -1.611 0.056 -3.143 0.716 -4.306 1.823 c -5.123 -3.49 -11.141 -5.403 -17.327 -5.537 l 2.919 -14.038 l 9.631 2.025 c 0.268 2.472 2.483 4.262 4.955 3.993 c 2.472 -0.268 4.262 -2.483 3.993 -4.955 s -2.483 -4.262 -4.955 -3.993 c -1.421 0.145 -2.696 0.973 -3.4 2.204 L 48.68 17.987 c -0.749 -0.168 -1.499 0.302 -1.667 1.063 c 0 0.011 0 0.011 0 0.022 l -3.322 15.615 c -6.264 0.101 -12.36 2.025 -17.55 5.537 c -2.64 -2.483 -6.801 -2.36 -9.284 0.291 c -2.483 2.64 -2.36 6.801 0.291 9.284 c 0.515 0.481 1.107 0.895 1.767 1.186 c -0.045 0.66 -0.045 1.32 0 1.98 c 0 10.078 11.745 18.277 26.23 18.277 c 14.485 0 26.23 -8.188 26.23 -18.277 c 0.045 -0.66 0.045 -1.32 0 -1.98 C 73.635 49.855 75.056 47.528 75.011 45 z M 30.011 49.508 c 0 -2.483 2.025 -4.508 4.508 -4.508 c 2.483 0 4.508 2.025 4.508 4.508 s -2.025 4.508 -4.508 4.508 C 32.025 53.993 30.011 51.991 30.011 49.508 z M 56.152 62.058 v -0.179 c -3.199 2.405 -7.114 3.635 -11.119 3.468 c -4.005 0.168 -7.919 -1.063 -11.119 -3.468 c -0.425 -0.515 -0.347 -1.286 0.168 -1.711 c 0.447 -0.369 1.085 -0.369 1.544 0 c 2.707 1.98 6.007 2.987 9.362 2.83 c 3.356 0.179 6.667 -0.783 9.407 -2.74 c 0.492 -0.481 1.297 -0.47 1.779 0.022 C 56.655 60.772 56.644 61.577 56.152 62.058 z M 55.537 54.34 c -0.078 0 -0.145 0 -0.224 0 l 0.034 -0.168 c -2.483 0 -4.508 -2.025 -4.508 -4.508 s 2.025 -4.508 4.508 -4.508 s 4.508 2.025 4.508 4.508 C 59.955 52.148 58.02 54.239 55.537 54.34 z"/>
    </svg>
  </div>
  <p class="text">HOVER<br/><br/>FOR<br/><br/>SOCIAL</p>
  <div class="main_back"></div>
</div>`,
    css: `/* From Uiverse.io by Praashoo7 */ 
.main_back {
  position: absolute;
  border-radius: 10px;
  transform: rotate(90deg);
  width: 11em;
  height: 11em;
  background: linear-gradient(270deg, #03a9f4, #cc39a4, #ffb5d2);
  z-index: -2;
  box-shadow: inset 0px 0px 180px 5px #ffffff;
}

.main {
  display: flex;
  flex-wrap: wrap;
  width: 14em;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

.card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
    0.2s background-image ease-in-out;
  background: rgba(255, 255, 255, 0.596);
  backdrop-filter: blur(5px);
  border: 1px solid transparent;
  -webkit-backdrop-filter: blur(5px);
}

.card .instagram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #cc39a4;
}

.card:nth-child(2) {
  border-radius: 0px;
}

.card:nth-child(2) .twitter {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #03a9f4;
}

.card:nth-child(3) {
  border-top-right-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(3) .dribble {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #ffb5d2;
}

.card:nth-child(4) {
  border-radius: 0px;
}

.card:nth-child(4) .codepen {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
}

.card:nth-child(5) {
  border-radius: 0px;
}

.card:nth-child(5) .uiverse {
  position: absolute;
  margin-left: 0.2em;
  margin-top: 0.2em;
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.card:nth-child(6) {
  border-radius: 0px;
}

.card:nth-child(6) .discord {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #8c9eff;
}

.card:nth-child(7) {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(7) .github {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: black;
}

.card:nth-child(8) {
  border-radius: 0px;
}

.card:nth-child(8) .telegram {
  opacity: 0;
  transition: 0.2s ease-in-out;
  fill: #29b6f6;
}

.card:nth-child(9) {
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
}

.card:nth-child(9) .reddit {
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.main:hover {
  width: 14em;
  cursor: pointer;
}

.main:hover .main_back {
  opacity: 0;
}

.main:hover .card {
  margin: 0.2em;
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.2);
}

.main:hover .card:nth-child(5) {
  border: transparent;
}

.main:hover .text {
  opacity: 0;
  z-index: -3;
}

.main:hover .instagram {
  opacity: 1;
}

.main:hover .twitter {
  opacity: 1;
}

.main:hover .dribble {
  opacity: 1;
}

.main:hover .codepen {
  opacity: 1;
}

.main:hover .uiverse {
  opacity: 1;
}

.main:hover .discord {
  opacity: 1;
}

.main:hover .github {
  opacity: 1;
}

.main:hover .telegram {
  opacity: 1;
}

.main:hover .reddit {
  opacity: 1;
}

.card:nth-child(1):hover {
  background-color: #cc39a4;
}

.card:nth-child(1):hover .instagram {
  fill: white;
}

.card:nth-child(2):hover {
  background-color: #03a9f4;
}

.card:nth-child(2):hover .twitter {
  fill: white;
}

.card:nth-child(3):hover {
  background-color: #ffb5d2;
}

.card:nth-child(3):hover .dribble {
  fill: white;
}

.card:nth-child(4):hover {
  background-color: #1e1f26;
}

.card:nth-child(4):hover .codepen {
  fill: white;
}

.card:nth-child(5):hover {
  animation: backgroundIMG 0.1s;
  animation-fill-mode: forwards;
}

.card:nth-child(5):hover .uiverse #paint0_linear_501_142 stop {
  stop-color: white;
}

.card:nth-child(5):hover .uiverse #paint1_linear_501_142 stop {
  stop-color: white;
}

.card:nth-child(5):hover .uiverse #paint2_linear_501_142 stop {
  stop-color: white;
}

@keyframes backgroundIMG {
  100% {
    background-image: linear-gradient(#bf66ff, #6248ff, #00ddeb);
  }
}

.card:nth-child(6):hover {
  background-color: #8c9eff;
}

.card:nth-child(6):hover .discord {
  fill: white;
}

.card:nth-child(7):hover {
  background-color: black;
}

.card:nth-child(7):hover .github {
  fill: white;
}

.card:nth-child(8):hover {
  background-color: #29b6f6;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(1) {
  fill: white;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(2) {
  fill: #29b6f6;
}

.card:nth-child(8):hover .telegram > path:nth-of-type(3) {
  fill: #29b6f6;
}

.card:nth-child(9):hover {
  background-color: rgb(255, 69, 0);
}

.card:nth-child(9) .reddit > g circle {
  fill: rgb(255, 69, 0);
}

.card:nth-child(9) .reddit > g path {
  fill: white;
}

.text {
  position: absolute;
  font-size: 0.7em;
  transition: 0.4s ease-in-out;
  color: black;
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.33em;
  z-index: 3;
}`,
    js: `// Social media grid functionality
const socialGrid = document.querySelector('.main');

socialGrid.addEventListener('click', function(e) {
    if (e.target.closest('.card')) {
        const card = e.target.closest('.card');
        const iconType = Array.from(card.querySelectorAll('svg'))[0]?.classList[0];
        console.log('Social icon clicked:', iconType);
        
        // Add click animation
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    }
});`
},

// ====================================================================
// TEMPLATE 16: EMOJI REACTION BUTTONS
// ====================================================================
btn16: {
    name: "Emoji Reaction Buttons",
    category: "animated",
    html: `<!-- From Uiverse.io by Mayurwaghgpr --> 
<div class="emoji-container">
  <button class="emoji-btn" data-tooltip="Like">
    👍
  </button>
  <button class="emoji-btn" data-tooltip="Cheer">
    👏🏻
  </button>
  <button class="emoji-btn" data-tooltip="Celebrate">
    🎉
  </button>
  <button class="emoji-btn" data-tooltip="Appreciate">
    ✨
  </button>
  <button class="emoji-btn" data-tooltip="Smile">
    🙂
  </button>
</div>`,
    css: `.emoji-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: #e8e4df;
  padding: 8px;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.emoji-btn {
  position: relative;
  background: white;
  border: none;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.emoji-btn::before {
  content: attr(data-tooltip);
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s ease;
  pointer-events: none;
}

.emoji-btn:hover::before {
  opacity: 1;
  top: -35px;
}

.emoji-btn:hover {
  transform: translateY(-5px) scale(1.2);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.emoji-btn:active {
  transform: translateY(-2px) scale(1.1);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .emoji-container {
    background: #191818;
  }
  
  .emoji-btn {
    background: #191818;
    color: white;
  }
  
  .emoji-btn::before {
    background: rgba(255, 255, 255, 0.9);
    color: black;
  }
}`,
    js: `// Emoji reaction buttons functionality
const emojiButtons = document.querySelectorAll('.emoji-btn');

emojiButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const reaction = this.getAttribute('data-tooltip');
        console.log('Reaction:', reaction, this.textContent);
        
        // Add click animation
        this.style.transform = 'translateY(-2px) scale(1.1)';
        this.style.backgroundColor = '#f0f0f0';
        
        setTimeout(() => {
            this.style.transform = 'translateY(-5px) scale(1.2)';
            this.style.backgroundColor = 'white';
        }, 150);
        
        // In a real app, you would send this reaction to your backend
        // sendReaction(reaction);
    });
});

// Dark mode detection and application
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('.emoji-container').classList.add('dark-mode');
}`,
},
// ====================================================================
// TEMPLATE 17: LIQUID WAVE BUTTON
// ====================================================================
btn17: {
    name: "Liquid Wave Button",
    category: "animated",
    html: `<button class="btn-liquid-wave">
    <span>Liquid Wave</span>
    <div class="liquid-wave"></div>
</button>`,
    css: `.btn-liquid-wave {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    font-family: inherit;
}

.btn-liquid-wave .liquid-wave {
    position: absolute;
    top: -60px;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(255, 255, 255, 0.3);
    transition: top 0.6s ease;
    border-radius: 0 0 50% 50%;
}

.btn-liquid-wave:hover .liquid-wave {
    top: 0;
}

.btn-liquid-wave:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}`,
    js: `// Liquid wave button
const liquidWaveBtn = document.querySelector('.btn-liquid-wave');

liquidWaveBtn.addEventListener('click', function() {
    // Add click ripple effect
    const wave = this.querySelector('.liquid-wave');
    wave.style.transition = 'none';
    wave.style.top = '-60px';
    
    setTimeout(() => {
        wave.style.transition = 'top 0.6s ease';
        wave.style.top = '0';
    }, 10);
    
    setTimeout(() => {
        wave.style.top = '-60px';
    }, 600);
});`
},

// ====================================================================
// TEMPLATE 18: PARTICLE EFFECT BUTTON
// ====================================================================
btn18: {
    name: "Particle Effect Button",
    category: "animated",
    html: `<button class="btn-particle-effect">
    <span>Particle Effect</span>
</button>`,
    css: `.btn-particle-effect {
    background: #1a1a1a;
    color: #00ff88;
    border: 2px solid #00ff88;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-particle-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
    transition: left 0.6s ease;
}

.btn-particle-effect:hover::before {
    left: 100%;
}

.btn-particle-effect:hover {
    background: #00ff88;
    color: #1a1a1a;
    box-shadow: 
        0 0 15px #00ff88,
        0 0 30px #00ff88,
        0 0 45px #00ff88;
    transform: translateY(-2px);
}`,
    js: `// Particle effect button
const particleBtn = document.querySelector('.btn-particle-effect');

particleBtn.addEventListener('click', function() {
    // Create particle effect
    for(let i = 0; i < 8; i++) {
        createParticle(this);
    }
});

function createParticle(button) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
        position: absolute;
        width: 4px;
        height: 4px;
        background: #00ff88;
        border-radius: 50%;
        pointer-events: none;
        animation: float 1s ease-out forwards;
    \`;
    
    const rect = button.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    const translateX = Math.cos(angle) * distance;
    const translateY = Math.sin(angle) * distance;
    
    particle.style.setProperty('--translate-x', translateX + 'px');
    particle.style.setProperty('--translate-y', translateY + 'px');
    
    button.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Add particle animation
const style = document.createElement('style');
style.textContent = \`
    @keyframes float {
        to {
            transform: translate(var(--translate-x), var(--translate-y));
            opacity: 0;
        }
    }
\`;
document.head.appendChild(style);`
},

// ====================================================================
// TEMPLATE 19: MORPHING GRADIENT BUTTON
// ====================================================================
btn19: {
    name: "Morphing Gradient Button",
    category: "animated",
    html: `<button class="btn-morphing-gradient">
    <span>Morph Gradient</span>
</button>`,
    css: `.btn-morphing-gradient {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    background-size: 400% 400%;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px 8px 25px 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation: gradientShift 3s ease infinite;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-morphing-gradient::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-morphing-gradient:hover::before {
    left: 100%;
}

.btn-morphing-gradient:hover {
    border-radius: 8px 25px 8px 25px;
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}`,
    js: `// Morphing gradient button
const morphGradientBtn = document.querySelector('.btn-morphing-gradient');

morphGradientBtn.addEventListener('click', function() {
    // Add bounce effect
    this.style.transform = 'scale(1.05) translateY(-3px)';
    setTimeout(() => {
        this.style.transform = 'scale(1.1) translateY(-3px)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 20: NEON FLICKER BUTTON
// ====================================================================
btn20: {
    name: "Neon Flicker Button",
    category: "animated",
    html: `<button class="btn-neon-flicker">
    <span>Neon Flicker</span>
</button>`,
    css: `.btn-neon-flicker {
    background: transparent;
    color: #ff0080;
    border: 2px solid #ff0080;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px #ff0080;
    box-shadow: 
        0 0 5px #ff0080,
        inset 0 0 5px #ff0080;
    animation: flicker 2s infinite alternate;
    font-family: inherit;
}

.btn-neon-flicker:hover {
    background: #ff0080;
    color: #000;
    text-shadow: none;
    box-shadow: 
        0 0 20px #ff0080,
        0 0 40px #ff0080,
        inset 0 0 20px #ff0080;
    transform: translateY(-2px);
    animation: none;
}

@keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        opacity: 1;
        box-shadow: 
            0 0 5px #ff0080,
            inset 0 0 5px #ff0080;
    }
    20%, 24%, 55% {
        opacity: 0.8;
        box-shadow: 
            0 0 2px #ff0080,
            inset 0 0 2px #ff0080;
    }
}`,
    js: `// Neon flicker button
const neonBtn = document.querySelector('.btn-neon-flicker');

neonBtn.addEventListener('click', function() {
    // Intensify flicker on click
    this.style.animation = 'flicker 0.1s infinite alternate';
    setTimeout(() => {
        this.style.animation = 'flicker 2s infinite alternate';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 21: 3D FLIP BUTTON
// ====================================================================
btn21: {
    name: "3D Flip Button",
    category: "animated",
    html: `<button class="btn-3d-flip">
    <span class="front">3D Flip</span>
    <span class="back">Click Me!</span>
</button>`,
    css: `.btn-3d-flip {
    background: linear-gradient(45deg, #8b5cf6, #3b82f6);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: inherit;
    width: 120px;
    height: 45px;
}

.btn-3d-flip .front,
.btn-3d-flip .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    border-radius: 8px;
}

.btn-3d-flip .front {
    background: linear-gradient(45deg, #8b5cf6, #3b82f6);
}

.btn-3d-flip .back {
    transform: rotateX(180deg);
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
}

.btn-3d-flip:hover {
    transform: rotateX(180deg);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
}`,
    js: `// 3D flip button
const flipBtn = document.querySelector('.btn-3d-flip');

flipBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Reset animation
    this.style.transform = 'rotateX(0deg)';
    setTimeout(() => {
        this.style.transform = 'rotateX(180deg)';
    }, 10);
});

// Auto flip back after hover
flipBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'rotateX(0deg)';
});`
},
// ====================================================================
// TEMPLATE 22: HOLOGRAPHIC BUTTON
// ====================================================================
btn22: {
    name: "Holographic Button",
    category: "animated",
    html: `<button class="btn-holographic">
    <span class="hologram-text">Holographic</span>
    <div class="hologram-effect"></div>
</button>`,
    css: `.btn-holographic {
    background: linear-gradient(45deg, 
        rgba(255, 0, 255, 0.1), 
        rgba(0, 255, 255, 0.1), 
        rgba(255, 255, 0, 0.1)
    );
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: transparent;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    font-family: inherit;
}

.hologram-text {
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: hologramShift 2s ease infinite;
}

.hologram-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.4), 
        transparent
    );
    transition: left 0.6s ease;
}

.btn-holographic:hover .hologram-effect {
    left: 100%;
}

.btn-holographic:hover {
    transform: translateY(-2px);
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.5),
        0 0 40px rgba(0, 255, 255, 0.3),
        inset 0 0 20px rgba(255, 255, 255, 0.1);
}

@keyframes hologramShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}`,
    js: `// Holographic button with advanced effects
const holographicBtn = document.querySelector('.btn-holographic');

holographicBtn.addEventListener('click', function() {
    // Add click distortion effect
    this.style.animation = 'hologramShift 0.5s ease';
    setTimeout(() => {
        this.style.animation = 'hologramShift 2s ease infinite';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 23: MATRIX DIGITAL RAIN
// ====================================================================
btn23: {
    name: "Matrix Digital Rain",
    category: "animated",
    html: `<button class="btn-matrix">
    <span class="matrix-text">Matrix</span>
    <div class="digital-rain"></div>
</button>`,
    css: `.btn-matrix {
    background: rgba(0, 20, 0, 0.8);
    border: 1px solid #00ff00;
    color: #00ff00;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px #00ff00;
}

.matrix-text {
    position: relative;
    z-index: 2;
}

.digital-rain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent 50%, rgba(0, 255, 0, 0.1) 50%);
    background-size: 100% 4px;
    animation: matrixScan 0.5s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.btn-matrix:hover .digital-rain {
    opacity: 1;
}

.btn-matrix:hover {
    background: rgba(0, 255, 0, 0.1);
    box-shadow: 
        0 0 10px #00ff00,
        0 0 20px #00ff00,
        inset 0 0 10px #00ff00;
    transform: translateY(-1px);
}

@keyframes matrixScan {
    0% { background-position: 0 0; }
    100% { background-position: 0 4px; }
}`,
    js: `// Matrix digital rain button
const matrixBtn = document.querySelector('.btn-matrix');

// Add falling code characters on hover
matrixBtn.addEventListener('mouseenter', function() {
    createMatrixCode(this);
});

function createMatrixCode(button) {
    const chars = '0101010101';
    const code = document.createElement('div');
    code.textContent = chars;
    code.style.cssText = \`
        position: absolute;
        top: -20px;
        left: \${Math.random() * 80 + 10}%;
        color: #00ff00;
        font-size: 10px;
        font-family: 'Courier New', monospace;
        animation: fall 1s linear forwards;
        opacity: 0.7;
        pointer-events: none;
    \`;
    
    button.appendChild(code);
    
    setTimeout(() => {
        code.remove();
    }, 1000);
}

// Add falling animation
const matrixStyle = document.createElement('style');
matrixStyle.textContent = \`
    @keyframes fall {
        to {
            top: 100%;
            opacity: 0;
        }
    }
\`;
document.head.appendChild(matrixStyle);`
},

// ====================================================================
// TEMPLATE 24: QUANTUM PARTICLE BUTTON
// ====================================================================
btn24: {
    name: "Quantum Particle Button",
    category: "animated",
    html: `<button class="btn-quantum">
    <span>Quantum</span>
    <div class="quantum-field"></div>
</button>`,
    css: `.btn-quantum {
    background: radial-gradient(circle at 30% 30%, #1a1a2e, #16213e, #0f3460);
    border: 1px solid rgba(127, 0, 255, 0.5);
    color: #7f00ff;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    font-family: inherit;
}

.quantum-field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 20%, rgba(127, 0, 255, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 0, 127, 0.3) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: quantumPulse 2s ease-in-out infinite;
}

.btn-quantum:hover .quantum-field {
    opacity: 1;
}

.btn-quantum:hover {
    color: #ffffff;
    box-shadow: 
        0 0 15px rgba(127, 0, 255, 0.7),
        0 0 30px rgba(255, 0, 127, 0.5),
        inset 0 0 15px rgba(127, 0, 255, 0.3);
    transform: translateY(-2px) scale(1.05);
}

@keyframes quantumPulse {
    0%, 100% { 
        transform: scale(1);
        opacity: 0.7;
    }
    50% { 
        transform: scale(1.1);
        opacity: 1;
    }
}`,
    js: `// Quantum particle button
const quantumBtn = document.querySelector('.btn-quantum');

quantumBtn.addEventListener('click', function() {
    // Create quantum particles on click
    for(let i = 0; i < 6; i++) {
        createQuantumParticle(this);
    }
});

function createQuantumParticle(button) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
        position: absolute;
        width: 3px;
        height: 3px;
        background: #7f00ff;
        border-radius: 50%;
        pointer-events: none;
        animation: quantumFloat 1s ease-out forwards;
    \`;
    
    const rect = button.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;
    
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 15 + Math.random() * 25;
    const translateX = Math.cos(angle) * distance;
    const translateY = Math.sin(angle) * distance;
    
    particle.style.setProperty('--translate-x', translateX + 'px');
    particle.style.setProperty('--translate-y', translateY + 'px');
    
    button.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Add quantum animation
const quantumStyle = document.createElement('style');
quantumStyle.textContent = \`
    @keyframes quantumFloat {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--translate-x), var(--translate-y)) scale(0);
            opacity: 0;
        }
    }
\`;
document.head.appendChild(quantumStyle);`
},

// ====================================================================
// TEMPLATE 25: CYBERPUNK GLITCH BUTTON
// ====================================================================
btn25: {
    name: "Cyberpunk Glitch Button",
    category: "animated",
    html: `<button class="btn-cyberpunk">
    <span data-text="CYBERPUNK">CYBERPUNK</span>
    <div class="glitch-layers"></div>
</button>`,
    css: `.btn-cyberpunk {
    background: linear-gradient(45deg, #ff0080, #00ff80, #0080ff);
    background-size: 300% 300%;
    border: none;
    color: #000;
    padding: 12px 24px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 900;
    font-family: 'Orbitron', sans-serif;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    animation: cyberGradient 3s ease infinite;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.btn-cyberpunk span {
    position: relative;
    z-index: 2;
}

.glitch-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.btn-cyberpunk:hover .glitch-layers {
    opacity: 1;
    animation: cyberGlitch 0.3s infinite;
}

.btn-cyberpunk:hover {
    animation: cyberGradient 1s ease infinite;
    box-shadow: 
        0 0 20px #ff0080,
        0 0 40px #00ff80,
        0 0 60px #0080ff;
    transform: skew(-2deg) translateY(-2px);
}

@keyframes cyberGradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

@keyframes cyberGlitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}`,
    js: `// Cyberpunk glitch button
const cyberpunkBtn = document.querySelector('.btn-cyberpunk');

cyberpunkBtn.addEventListener('click', function() {
    // Intensify glitch effect on click
    this.style.animation = 'cyberGradient 0.5s ease infinite, cyberGlitch 0.1s infinite';
    setTimeout(() => {
        this.style.animation = 'cyberGradient 3s ease infinite';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 26: LIQUID METAL BUTTON
// ====================================================================
btn26: {
    name: "Liquid Metal Button",
    category: "animated",
    html: `<button class="btn-liquid-metal">
    <span>Liquid Metal</span>
    <div class="metal-reflection"></div>
</button>`,
    css: `.btn-liquid-metal {
    background: linear-gradient(135deg, 
        #b8b8b8, #d4d4d4, #b8b8b8, 
        #a0a0a0, #c8c8c8, #a0a0a0
    );
    background-size: 200% 200%;
    border: none;
    color: #2c3e50;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
    animation: metalShine 3s ease-in-out infinite;
    font-family: inherit;
}

.metal-reflection {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
        transparent 30%, 
        rgba(255, 255, 255, 0.4) 50%, 
        transparent 70%
    );
    transform: rotate(45deg);
    transition: left 0.6s ease;
}

.btn-liquid-metal:hover .metal-reflection {
    left: 100%;
}

.btn-liquid-metal:hover {
    background: linear-gradient(135deg, 
        #c8c8c8, #e8e8e8, #c8c8c8, 
        #b0b0b0, #d8d8d8, #b0b0b0
    );
    box-shadow: 
        0 5px 15px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-2px) scale(1.02);
}

@keyframes metalShine {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}`,
    js: `// Liquid metal button
const metalBtn = document.querySelector('.btn-liquid-metal');

metalBtn.addEventListener('click', function() {
    // Add metal deformation effect
    this.style.animation = 'metalShine 0.5s ease-in-out';
    this.style.transform = 'translateY(-1px) scale(0.98)';
    
    setTimeout(() => {
        this.style.animation = 'metalShine 3s ease-in-out infinite';
        this.style.transform = 'translateY(-2px) scale(1.02)';
    }, 150);
});`
},
// ====================================================================
// TEMPLATE 27: 3D OUTLINE LIFT
// ====================================================================
btn27: {
    name: "3D Outline Lift",
    category: "outline",
    html: `<button class="btn-3d-outline-lift">
    <span>3D Lift</span>
</button>`,
    css: `.btn-3d-outline-lift {
    background: transparent;
    color: #7c3aed;
    border: 2px solid #7c3aed;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    perspective: 500px;
    font-family: inherit;
}

.btn-3d-outline-lift::before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: -6px;
    bottom: -6px;
    background: #6d28d9;
    border-radius: 8px;
    z-index: -1;
    transition: all 0.3s ease;
    transform: translateZ(-10px);
    opacity: 0.3;
}

.btn-3d-outline-lift:hover {
    background: #7c3aed;
    color: white;
    transform: translateY(-4px) translateZ(10px);
    box-shadow: 
        0 10px 20px rgba(124, 58, 237, 0.3),
        0 6px 6px rgba(124, 58, 237, 0.2);
}

.btn-3d-outline-lift:hover::before {
    top: 3px;
    left: 3px;
    right: -3px;
    bottom: -3px;
    opacity: 0.5;
}

.btn-3d-outline-lift:active {
    transform: translateY(-2px) translateZ(5px);
}`,
    js: `// 3D Outline Lift button
const liftBtn = document.querySelector('.btn-3d-outline-lift');

liftBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(-2px) translateZ(5px)';
});

liftBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(-4px) translateZ(10px)';
});`
},

// ====================================================================
// TEMPLATE 28: OUTLINE PERSPECTIVE
// ====================================================================
btn28: {
    name: "Outline Perspective",
    category: "outline",
    html: `<button class="btn-outline-perspective">
    <span>Perspective</span>
</button>`,
    css: `.btn-outline-perspective {
    background: transparent;
    color: #10b981;
    border: 2px solid #10b981;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    perspective: 600px;
    font-family: inherit;
}

.btn-outline-perspective::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #10b981;
    border-radius: 8px;
    transform: rotateX(90deg);
    transform-origin: bottom;
    transition: transform 0.4s ease;
    z-index: -1;
    opacity: 0;
}

.btn-outline-perspective:hover {
    color: white;
    transform: rotateX(-15deg) translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
}

.btn-outline-perspective:hover::before {
    transform: rotateX(0deg);
    opacity: 1;
}`,
    js: `// Outline Perspective button
const perspectiveBtn = document.querySelector('.btn-outline-perspective');

perspectiveBtn.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
});

perspectiveBtn.addEventListener('mouseleave', function() {
    this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
});`
},

// ====================================================================
// TEMPLATE 29: FLOATING OUTLINE
// ====================================================================
btn29: {
    name: "Floating Outline",
    category: "outline",
    html: `<button class="btn-floating-outline">
    <span>Floating</span>
</button>`,
    css: `.btn-floating-outline {
    background: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: floatOutline 3s ease-in-out infinite;
    font-family: inherit;
}

.btn-floating-outline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #3b82f6;
    border-radius: 8px;
    transition: all 0.4s ease;
    z-index: -1;
    opacity: 0;
    transform: scale(0.8);
}

.btn-floating-outline:hover {
    color: white;
    transform: translateY(-6px) scale(1.05);
    animation: none;
    box-shadow: 
        0 15px 30px rgba(59, 130, 246, 0.4),
        0 5px 15px rgba(59, 130, 246, 0.3);
}

.btn-floating-outline:hover::before {
    opacity: 1;
    transform: scale(1);
}

@keyframes floatOutline {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
}`,
    js: `// Floating Outline button
const floatingBtn = document.querySelector('.btn-floating-outline');

floatingBtn.addEventListener('click', function() {
    // Enhance floating effect on click
    this.style.transform = 'translateY(-8px) scale(1.08)';
    setTimeout(() => {
        this.style.transform = 'translateY(-6px) scale(1.05)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 30: OUTLINE DEPTH
// ====================================================================
btn30: {
    name: "Outline Depth",
    category: "outline",
    html: `<button class="btn-outline-depth">
    <span>Depth</span>
</button>`,
    css: `.btn-outline-depth {
    background: transparent;
    color: #ec4899;
    border: 2px solid #ec4899;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    font-family: inherit;
}

.btn-outline-depth::before,
.btn-outline-depth::after {
    content: '';
    position: absolute;
    border: 2px solid #ec4899;
    border-radius: 8px;
    transition: all 0.4s ease;
}

.btn-outline-depth::before {
    top: 3px;
    left: 3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    opacity: 0.6;
}

.btn-outline-depth::after {
    top: 6px;
    left: 6px;
    right: -6px;
    bottom: -6px;
    z-index: -2;
    opacity: 0.3;
}

.btn-outline-depth:hover {
    background: #ec4899;
    color: white;
    transform: translateY(-4px) translateZ(10px);
    box-shadow: 
        0 12px 25px rgba(236, 72, 153, 0.4),
        0 8px 15px rgba(236, 72, 153, 0.3);
}

.btn-outline-depth:hover::before {
    top: 2px;
    left: 2px;
    right: -2px;
    bottom: -2px;
    opacity: 0.8;
}

.btn-outline-depth:hover::after {
    top: 4px;
    left: 4px;
    right: -4px;
    bottom: -4px;
    opacity: 0.5;
}`,
    js: `// Outline Depth button
const depthBtn = document.querySelector('.btn-outline-depth');

depthBtn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / centerX * 5;
    const rotateX = (centerY - y) / centerY * 5;
    
    this.style.transform = \`translateY(-4px) translateZ(10px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
});

depthBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(-4px) translateZ(10px)';
});`
},

// ====================================================================
// TEMPLATE 31: 3D OUTLINE ROTATE
// ====================================================================
btn31: {
    name: "3D Outline Rotate",
    category: "outline",
    html: `<button class="btn-3d-outline-rotate">
    <span>3D Rotate</span>
</button>`,
    css: `.btn-3d-outline-rotate {
    background: transparent;
    color: #f59e0b;
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    perspective: 800px;
    font-family: inherit;
}

.btn-3d-outline-rotate::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #f59e0b, #d97706, #f59e0b);
    border-radius: 10px;
    z-index: -1;
    transition: all 0.5s ease;
    transform: rotateY(0deg) rotateX(0deg);
}

.btn-3d-outline-rotate::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 6px;
    z-index: -1;
    transition: all 0.5s ease;
}

.btn-3d-outline-rotate:hover {
    color: #d97706;
    transform: rotateY(15deg) rotateX(10deg) translateZ(10px);
    box-shadow: 0 15px 30px rgba(245, 158, 11, 0.3);
}

.btn-3d-outline-rotate:hover::before {
    transform: rotateY(-15deg) rotateX(-10deg);
    background: linear-gradient(45deg, #d97706, #f59e0b, #d97706);
}

.btn-3d-outline-rotate:hover::after {
    background: transparent;
}`,
    js: `// 3D Outline Rotate button
const rotateBtn = document.querySelector('.btn-3d-outline-rotate');

rotateBtn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = (x - centerX) / centerX * 20;
    const rotateX = (centerY - y) / centerY * 20;
    
    this.style.transform = \`rotateY(\${rotateY}deg) rotateX(\${rotateX}deg) translateZ(10px)\`;
    
    const beforeElement = this.querySelector('::before');
    if (beforeElement) {
        beforeElement.style.transform = \`rotateY(\${-rotateY}deg) rotateX(\${-rotateX}deg)\`;
    }
});

rotateBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'rotateY(15deg) rotateX(10deg) translateZ(10px)';
});`
},

// ====================================================================
// TEMPLATE 32: EXPAND DELETE BUTTON
// ====================================================================
btn32: {
    name: "Expand Delete Button",
    category: "animated",
    html: `<!-- From Uiverse.io by vinodjangid07 --> 
<button class="btn-expand-delete">
    <svg class="svgIcon" viewBox="0 0 448 512">
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
    </svg>
</button>`,
    css: `/* From Uiverse.io by vinodjangid07 */ 
.btn-expand-delete {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: .3s;
    overflow: hidden;
    position: relative;
    font-family: inherit;
}

.btn-expand-delete .svgIcon {
    width: 12px;
    transition-duration: .3s;
}

.btn-expand-delete .svgIcon path {
    fill: white;
}

.btn-expand-delete:hover {
    width: 140px;
    border-radius: 50px;
    transition-duration: .3s;
    background-color: rgb(255, 69, 69);
    align-items: center;
}

.btn-expand-delete:hover .svgIcon {
    width: 50px;
    transition-duration: .3s;
    transform: translateY(60%);
}

.btn-expand-delete::before {
    position: absolute;
    top: -20px;
    content: "Delete";
    color: white;
    transition-duration: .3s;
    font-size: 2px;
    opacity: 0;
}

.btn-expand-delete:hover::before {
    font-size: 13px;
    opacity: 1;
    transform: translateY(30px);
    transition-duration: .3s;
}`,
    js: `// Expand delete button functionality
const deleteBtn = document.querySelector('.btn-expand-delete');

deleteBtn.addEventListener('click', function() {
    // Add confirmation effect
    this.style.backgroundColor = '#ff4444';
    setTimeout(() => {
        this.style.backgroundColor = 'rgb(255, 69, 69)';
    }, 300);
    
    console.log('Delete action triggered!');
});`
},

// ====================================================================
// TEMPLATE 33: GRADIENT BORDER BUTTON
// ====================================================================
btn33: {
    name: "Gradient Border Button",
    category: "gradient",
    html: `<!-- From Uiverse.io by nima-mollazadeh --> 
<button class="btn-gradient-border">
    <span>Gradient Border</span>
</button>`,
    css: `/* From Uiverse.io by nima-mollazadeh */ 
.btn-gradient-border {
    position: relative;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    padding: 14px 25px;
    border-radius: 10px;
    font-size: 1.25em;
    cursor: pointer;
    border: none;
    font-family: inherit;
}

.btn-gradient-border span {
    position: relative;
    z-index: 1;
}

.btn-gradient-border::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: #272727;
    border-radius: 9px;
    transition: 0.5s;
}

.btn-gradient-border:hover::before {
    opacity: 0.7;
}

.btn-gradient-border::after {
    content: "";
    position: absolute;
    inset: 0px;
    background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
    border-radius: 9px;
    transition: 0.5s;
    opacity: 0;
    filter: blur(20px);
}

.btn-gradient-border:hover:after {
    opacity: 1;
}`,
    js: `// Gradient border button
const gradientBorderBtn = document.querySelector('.btn-gradient-border');

gradientBorderBtn.addEventListener('click', function() {
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 34: 3D PRESS BUTTON
// ====================================================================
btn34: {
    name: "3D Press Button",
    category: "animated",
    html: `<!-- From Uiverse.io by FColombati --> 
<button class="btn-3d-press">
    <div class="button-outer">
        <div class="button-inner">
            <span>3D Press</span>
        </div>
    </div>
</button>`,
    css: `/* From Uiverse.io by FColombati */ 
.btn-3d-press {
    all: unset;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
    border-radius: 100em;
    background-color: rgba(0, 0, 0, 0.75);
    box-shadow:
        -0.15em -0.15em 0.15em -0.075em rgba(5, 5, 5, 0.25),
        0.0375em 0.0375em 0.0675em 0 rgba(5, 5, 5, 0.1);
}

.btn-3d-press::after {
    content: "";
    position: absolute;
    z-index: 0;
    width: calc(100% + 0.3em);
    height: calc(100% + 0.3em);
    top: -0.15em;
    left: -0.15em;
    border-radius: inherit;
    background: linear-gradient(
        -135deg,
        rgba(5, 5, 5, 0.5),
        transparent 20%,
        transparent 100%
    );
    filter: blur(0.0125em);
    opacity: 0.25;
    mix-blend-mode: multiply;
}

.btn-3d-press .button-outer {
    position: relative;
    z-index: 1;
    border-radius: inherit;
    transition: box-shadow 300ms ease;
    will-change: box-shadow;
    box-shadow:
        0 0.05em 0.05em -0.01em rgba(5, 5, 5, 1),
        0 0.01em 0.01em -0.01em rgba(5, 5, 5, 0.5),
        0.15em 0.3em 0.1em -0.01em rgba(5, 5, 5, 0.25);
}

.btn-3d-press:hover .button-outer {
    box-shadow:
        0 0 0 0 rgba(5, 5, 5, 1),
        0 0 0 0 rgba(5, 5, 5, 0.5),
        0 0 0 0 rgba(5, 5, 5, 0.25);
}

.btn-3d-press .button-inner {
    --inset: 0.035em;
    position: relative;
    z-index: 1;
    border-radius: inherit;
    padding: 1em 1.5em;
    background-image: linear-gradient(
        135deg,
        rgba(230, 230, 230, 1),
        rgba(180, 180, 180, 1)
    );
    transition:
        box-shadow 300ms ease,
        clip-path 250ms ease,
        background-image 250ms ease,
        transform 250ms ease;
    will-change: box-shadow, clip-path, background-image, transform;
    overflow: clip;
    clip-path: inset(0 0 0 0 round 100em);
    box-shadow:
        0 0 0 0 inset rgba(5, 5, 5, 0.1),
        -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25),
        0 0 0 0 inset rgba(5, 5, 5, 0.1),
        0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25),
        0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1),
        0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
        -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25);
}

.btn-3d-press:hover .button-inner {
    clip-path: inset(
        clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px)
        clamp(1px, 0.0625em, 2px) clamp(1px, 0.0625em, 2px) round 100em
    );
    box-shadow:
        0.1em 0.15em 0.05em 0 inset rgba(5, 5, 5, 0.75),
        -0.025em -0.03em 0.05em 0.025em inset rgba(5, 5, 5, 0.5),
        0.25em 0.25em 0.2em 0 inset rgba(5, 5, 5, 0.5),
        0 0 0.05em 0.5em inset rgba(255, 255, 255, 0.15),
        0 0 0 0 inset rgba(255, 255, 255, 1),
        0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25),
        -0.075em -0.12em 0.2em 0.1em inset rgba(5, 5, 5, 0.25);
}

.btn-3d-press .button-inner span {
    position: relative;
    z-index: 4;
    font-family: "Inter", sans-serif;
    letter-spacing: -0.05em;
    font-weight: 500;
    color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
        135deg,
        rgba(25, 25, 25, 1),
        rgba(75, 75, 75, 1)
    );
    -webkit-background-clip: text;
    background-clip: text;
    transition: transform 250ms ease;
    display: block;
    will-change: transform;
    text-shadow: rgba(0, 0, 0, 0.1) 0 0 0.1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.btn-3d-press:hover .button-inner span {
    transform: scale(0.975);
}

.btn-3d-press:active .button-inner {
    transform: scale(0.975);
}`,
    js: `// 3D press button functionality
const pressBtn = document.querySelector('.btn-3d-press');

pressBtn.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.98)';
});

pressBtn.addEventListener('mouseup', function() {
    this.style.transform = '';
});

pressBtn.addEventListener('mouseleave', function() {
    this.style.transform = '';
});`
},

// ====================================================================
// TEMPLATE 35: LEAF ANIMATION BUTTON
// ====================================================================
btn35: {
    name: "Leaf Animation Button",
    category: "animated",
    html: `<!-- From Uiverse.io by MuhammadHasann --> 
<button class="btn-leaf-animation">
    Click Me
    <svg class="icon-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="fil-leaf-1" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
        <path class="fil-leaf-2" d="M12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8Z"/>
    </svg>
    <svg class="icon-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="fil-leaf-3" d="M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z"/>
    </svg>
    <svg class="icon-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="fil-leaf-4" d="M12 20C13.1 20 14 20.9 14 22C14 23.1 13.1 24 12 24C10.9 24 10 23.1 10 22C10 20.9 10.9 20 12 20Z"/>
    </svg>
</button>`,
    css: `/* From Uiverse.io by MuhammadHasann */ 
.btn-leaf-animation {
    position: relative;
    padding: 13px 35px;
    background: #f5ddb7;
    font-size: 17px;
    font-weight: 900;
    color: #181818;
    border: none;
    border-radius: 8px;
    box-shadow: 2px 2px 5px #18181869, inset 2px 2px 10px #ffffffb0;
    transition: all .3s ease-in-out;
    cursor: pointer;
    font-family: inherit;
}

.btn-leaf-animation .icon-1 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0px;
    height: auto;
    transition: all .5s ease-in-out;
    z-index: -1;
}

.btn-leaf-animation .icon-2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0px;
    height: auto;
    transition: all .5s ease-in-out;
    z-index: -2;
}

.btn-leaf-animation .icon-3 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 0px;
    height: auto;
    transition: all .5s ease-in-out;
    z-index: -2;
}

.btn-leaf-animation:hover {
    padding: 13px 25px;
    border-radius: 8px 8px 24px 24px;
}

.btn-leaf-animation:hover .icon-1 {
    top: -250%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50px;
    height: auto;
    animation: inIcon1 1s ease .45s forwards;
}

.btn-leaf-animation:hover .icon-2 {
    position: absolute;
    top: -200%;
    left: 90%;
    transform: translate(-50%, 0);
    width: 75px;
    height: auto;
    animation: inIcon2 1s ease .45s forwards;
}

.btn-leaf-animation:hover .icon-3 {
    position: absolute;
    top: -130%;
    left: 20%;
    transform: translate(-50%, 0);
    width: 60px;
    height: auto;
    animation: inIcon3 1s ease .45s forwards;
}

@keyframes inIcon1 {
    0% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(0deg); }
    25% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(5deg); }
    50% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(1deg); }
    65% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(3deg); }
    100% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(0deg); }
}

@keyframes inIcon2 {
    0% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(0deg); }
    35% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(10deg); }
    50% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(4deg); }
    80% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(5deg); }
    100% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(0deg); }
}

@keyframes inIcon3 {
    0% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(0deg); }
    35% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(-2deg); }
    100% { transform-origin: 0 100%; transform: translate(-50%, 0) rotate(0deg); }
}

.fil-leaf-1 { fill: #7B9B3A }
.fil-leaf-2 { fill: #556729; fill-rule: nonzero }
.fil-leaf-3 { fill: #556729 }
.fil-leaf-4 { fill: #3C4819 }`,
    js: `// Leaf animation button
const leafBtn = document.querySelector('.btn-leaf-animation');

leafBtn.addEventListener('click', function() {
    // Reset animations on click
    const icons = this.querySelectorAll('.icon-1, .icon-2, .icon-3');
    icons.forEach(icon => {
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = '';
        }, 10);
    });
});`
},

// ====================================================================
// TEMPLATE 36: TEXT REVEAL BUTTON
// ====================================================================
btn36: {
    name: "Text Reveal Button",
    category: "animated",
    html: `<!-- From Uiverse.io by satyamchaudharydev --> 
<button class="btn-text-reveal" data-text="Hover Me">
    <span class="hover-text" data-text="Hover Me"></span>
    Hover Me
</button>`,
    css: `/* From Uiverse.io by satyamchaudharydev */ 
/* === removing default button style ===*/
.btn-text-reveal {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: inherit;
}

/* button styling */
.btn-text-reveal {
    --border-right: 6px;
    --text-stroke-color: rgba(255,255,255,0.6);
    --animation-color: #37FF8B;
    --fs-size: 2em;
    letter-spacing: 3px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial";
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
}
/* this is the text, when you hover on button */
.btn-text-reveal .hover-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: var(--animation-color);
    width: 0%;
    inset: 0;
    border-right: var(--border-right) solid var(--animation-color);
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px var(--animation-color);
}
/* hover */
.btn-text-reveal:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
}`,
    js: `// Text reveal button
const textRevealBtn = document.querySelector('.btn-text-reveal');

textRevealBtn.addEventListener('click', function() {
    // Add click effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});`
},
// ====================================================================
// TEMPLATE 37: ANIMATED BORDER CUT
// ====================================================================
btn37: {
    name: "Animated Border Cut",
    category: "animated",
    html: `<a href="#" class="btn-animated-cut">
    <span>Hover Me</span>
</a>`,
    css: `.btn-animated-cut {
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #fefefe;
    text-transform: uppercase;
    color: #fefefe;
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    background: #212121;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.btn-animated-cut::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background-color: #212121;
    transition: 0.3s ease-in-out;
    transform: scaleY(1);
    border-radius: 2px;
}

.btn-animated-cut:hover::before {
    transform: scaleY(0);
}

.btn-animated-cut::after {
    content: '';
    position: absolute;
    left: 6px;
    top: -2px;
    height: calc(100% + 4px);
    width: calc(100% - 12px);
    background-color: #212121;
    transition: 0.3s ease-in-out;
    transform: scaleX(1);
    transition-delay: 0.3s;
    border-radius: 2px;
}

.btn-animated-cut:hover::after {
    transform: scaleX(0);
}

.btn-animated-cut span {
    position: relative;
    z-index: 3;
}

.btn-animated-cut:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}`,
    js: `// Animated border cut button
const cutBtn = document.querySelector('.btn-animated-cut');

cutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Animated border cut button clicked!');
});`
},

// ====================================================================
// TEMPLATE 38: LEARN MORE BUTTON
// ====================================================================
btn38: {
    name: "Learn More Button",
    category: "animated",
    html: `<button class="btn-learn-more">
    <span class="circle">
        <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
</button>`,
    css: `button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
}

.btn-learn-more {
    width: 12rem;
    height: auto;
}

.btn-learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
}

.btn-learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
}

.btn-learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
}

.btn-learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
}

.btn-learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #282936;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
}

.btn-learn-more:hover .circle {
    width: 100%;
}

.btn-learn-more:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
}

.btn-learn-more:hover .button-text {
    color: #fff;
}`,
    js: `// Learn more button functionality
const learnBtn = document.querySelector('.btn-learn-more');

learnBtn.addEventListener('click', function() {
    console.log('Learn more button clicked!');
    // Add your learn more functionality here
});`
},

// ====================================================================
// TEMPLATE 39: SLIDING FILL BUTTON
// ====================================================================
btn39: {
    name: "Sliding Fill Button",
    category: "animated",
    html: `<button class="btn-sliding-fill">
    <span></span>
    Hover Me
</button>`,
    css: `.btn-sliding-fill {
    border: none;
    display: block;
    position: relative;
    padding: 0.7em 2.4em;
    font-size: 18px;
    background: transparent;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    color: royalblue;
    z-index: 1;
    font-family: inherit;
    font-weight: 500;
}

.btn-sliding-fill span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: -1;
    border: 4px solid royalblue;
}

.btn-sliding-fill span::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
}

.btn-sliding-fill:hover span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: royalblue;
}

.btn-sliding-fill:hover {
    color: white;
}

.btn-sliding-fill:active span::before {
    background: #2751cd;
}`,
    js: `// Sliding fill button functionality
const slidingBtn = document.querySelector('.btn-sliding-fill');

slidingBtn.addEventListener('click', function() {
    console.log('Sliding fill button clicked!');
});`
},

// ====================================================================
// TEMPLATE 40: ICON HOVER BUTTON
// ====================================================================
btn40: {
    name: "Icon Hover Button",
    category: "animated",
    html: `<button class="btn-icon-hover">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4V20M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
    Hover Me
</button>`,
    css: `.btn-icon-hover {
    display: flex;
    height: 3em;
    width: 100px;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee4b;
    border-radius: 3px;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
    background: #fff;
    font-size: 14px;
    font-weight: 600;
    color: #333;
}

.btn-icon-hover > svg {
    margin-right: 5px;
    margin-left: 5px;
    transition: all 0.4s ease-in;
}

.btn-icon-hover:hover > svg {
    transform: translateX(-5px);
}

.btn-icon-hover:hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
}`,
    js: `// Icon hover button functionality
const iconHoverBtn = document.querySelector('.btn-icon-hover');

iconHoverBtn.addEventListener('click', function() {
    console.log('Icon hover button clicked!');
    
    // Add click animation
    this.style.transform = 'translateY(0px)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 41: 3D CUBE BUTTON
// ====================================================================
btn41: {
    name: "3D Cube Button",
    category: "animated",
    html: `<div class="scene">
    <div class="cube">
        <div class="side front">Hover Me</div>
        <div class="side top">Hello!</div>
    </div>
</div>`,
    css: `.scene {
    width: 10em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cube {
    color: #ccc;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    transition: all 0.85s cubic-bezier(.17,.67,.14,.93);
    transform-style: preserve-3d;
    transform-origin: 100% 50%;
    width: 10em;
    height: 4em;
}

.cube:hover {
    transform: rotateX(-90deg);
}

.side {
    box-sizing: border-box;
    position: absolute;
    display: inline-block;
    height: 4em;
    width: 10em;
    text-align: center;
    text-transform: uppercase;
    padding-top: 1.5em;
    font-weight: bold;
    border-radius: 4px;
}

.top {
    background: wheat;
    color: #222229;
    transform: rotateX(90deg) translate3d(0, 0, 2em);
    box-shadow: inset 0 0 0 5px #fff;
}

.front {
    background: #222229;
    color: #fff;
    box-shadow: inset 0 0 0 5px #fff;
    transform: translate3d(0, 0, 2em);
}`,
    js: `// 3D Cube button functionality
const cube = document.querySelector('.cube');

cube.addEventListener('click', function() {
    console.log('3D Cube button clicked!');
    
    // Add click feedback
    this.style.transform = 'rotateX(-90deg) scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'rotateX(-90deg)';
    }, 150);
});

// Reset on mouse leave
cube.addEventListener('mouseleave', function() {
    this.style.transform = 'rotateX(0deg)';
});`
},
// ====================================================================
// TEMPLATE 42: 3D FLIP BUTTON
// ====================================================================
btn42: {
    name: "3D Flip Button",
    category: "3d",
    html: `<button class="btn-3d-flip">
    <span class="front">Click Me</span>
    <span class="back">Hello!</span>
</button>`,
    css: `.btn-3d-flip {
    position: relative;
    width: 150px;
    height: 50px;
    perspective: 500px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.btn-3d-flip .front,
.btn-3d-flip .back {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
}

.btn-3d-flip .front {
    background: linear-gradient(145deg, #7c3aed, #6d28d9);
    color: white;
    transform: rotateX(0deg);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
}

.btn-3d-flip .back {
    background: linear-gradient(145deg, #ec4899, #db2777);
    color: white;
    transform: rotateX(180deg);
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
}

.btn-3d-flip:hover .front {
    transform: rotateX(-180deg);
}

.btn-3d-flip:hover .back {
    transform: rotateX(0deg);
}`,
    js: `// 3D Flip button functionality
const flipBtn = document.querySelector('.btn-3d-flip');

flipBtn.addEventListener('click', function() {
    console.log('3D Flip button clicked!');
    
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 43: 3D PRESS BUTTON
// ====================================================================
btn43: {
    name: "3D Press Button",
    category: "3d",
    html: `<button class="btn-3d-press">
    Press Me
</button>`,
    css: `.btn-3d-press {
    position: relative;
    padding: 15px 30px;
    background: linear-gradient(145deg, #3b82f6, #2563eb);
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 10px 0 #1d4ed8,
        0 15px 20px rgba(59, 130, 246, 0.4);
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-3d-press:hover {
    transform: translateY(5px);
    box-shadow: 
        0 5px 0 #1d4ed8,
        0 8px 10px rgba(59, 130, 246, 0.3);
}

.btn-3d-press:active {
    transform: translateY(8px);
    box-shadow: 
        0 2px 0 #1d4ed8,
        0 3px 5px rgba(59, 130, 246, 0.2);
}`,
    js: `// 3D Press button functionality
const pressBtn = document.querySelector('.btn-3d-press');

pressBtn.addEventListener('mousedown', function() {
    this.style.transform = 'translateY(8px)';
    this.style.boxShadow = '0 2px 0 #1d4ed8, 0 3px 5px rgba(59, 130, 246, 0.2)';
});

pressBtn.addEventListener('mouseup', function() {
    this.style.transform = 'translateY(5px)';
    this.style.boxShadow = '0 5px 0 #1d4ed8, 0 8px 10px rgba(59, 130, 246, 0.3)';
});

pressBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 10px 0 #1d4ed8, 0 15px 20px rgba(59, 130, 246, 0.4)';
});`
},

// ====================================================================
// TEMPLATE 44: 3D GRADIENT ROTATE
// ====================================================================
btn44: {
    name: "3D Gradient Rotate",
    category: "3d",
    html: `<button class="btn-3d-gradient">
    Hover Me
</button>`,
    css: `.btn-3d-gradient {
    position: relative;
    padding: 15px 30px;
    background: linear-gradient(45deg, #7c3aed, #ec4899, #3b82f6);
    background-size: 300% 300%;
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
    animation: gradientShift 3s ease infinite;
    box-shadow: 
        0 8px 0 #6d28d9,
        0 12px 25px rgba(124, 58, 237, 0.5);
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-3d-gradient::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
    border-radius: 12px;
    transform: translateZ(-8px);
    transition: all 0.5s ease;
}

.btn-3d-gradient:hover {
    transform: translateY(-4px) rotateX(15deg);
    box-shadow: 
        0 12px 0 #6d28d9,
        0 18px 35px rgba(124, 58, 237, 0.7);
}

.btn-3d-gradient:hover::before {
    transform: translateZ(-3px);
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}`,
    js: `// 3D Gradient Rotate button functionality
const gradientBtn = document.querySelector('.btn-3d-gradient');

gradientBtn.addEventListener('click', function() {
    console.log('3D Gradient button clicked!');
    
    // Add bounce effect
    this.style.transform = 'translateY(-2px) rotateX(15deg) scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'translateY(-4px) rotateX(15deg)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 45: 3D LIQUID RISE
// ====================================================================
btn45: {
    name: "3D Liquid Rise",
    category: "3d",
    html: `<button class="btn-3d-liquid">
    <span>Liquid Rise</span>
</button>`,
    css: `.btn-3d-liquid {
    position: relative;
    padding: 15px 30px;
    background: #10b981;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 8px 0 #059669,
        0 12px 20px rgba(16, 185, 129, 0.4);
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-3d-liquid::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s ease;
}

.btn-3d-liquid:hover::before {
    left: 100%;
}

.btn-3d-liquid:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 
        0 11px 0 #059669,
        0 16px 30px rgba(16, 185, 129, 0.6);
}

.btn-3d-liquid:active {
    transform: translateY(6px) scale(1);
    box-shadow: 
        0 2px 0 #059669,
        0 6px 12px rgba(16, 185, 129, 0.3);
}`,
    js: `// 3D Liquid Rise button functionality
const liquid3DBtn = document.querySelector('.btn-3d-liquid');

liquid3DBtn.addEventListener('click', function() {
    console.log('3D Liquid Rise button clicked!');
    
    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = \`
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    \`;
    
    this.appendChild(ripple);
    
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = '0px';
    ripple.style.top = '0px';
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = \`
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
\`;
document.head.appendChild(rippleStyle);`
},

// ====================================================================
// TEMPLATE 46: 3D HOLOGRAM
// ====================================================================
btn46: {
    name: "3D Hologram Button",
    category: "3d",
    html: `<button class="btn-3d-hologram">
    Hologram
</button>`,
    css: `.btn-3d-hologram {
    position: relative;
    padding: 15px 30px;
    background: transparent;
    border: 2px solid #00ff88;
    border-radius: 10px;
    color: #00ff88;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transform-style: preserve-3d;
    transition: all 0.4s ease;
    overflow: hidden;
    text-shadow: 0 0 8px #00ff88;
    box-shadow: 
        0 0 15px #00ff88,
        inset 0 0 8px #00ff88;
    font-family: inherit;
}

.btn-3d-hologram::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(0, 255, 136, 0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
}

.btn-3d-hologram::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-3d-hologram:hover::before {
    transform: rotate(45deg) translate(20px, 20px);
}

.btn-3d-hologram:hover::after {
    left: 100%;
}

.btn-3d-hologram:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-4px) translateZ(15px);
    box-shadow: 
        0 0 25px #00ff88,
        inset 0 0 15px #00ff88,
        0 8px 20px rgba(0, 255, 136, 0.5);
}

.btn-3d-hologram:active {
    transform: translateY(-2px) translateZ(10px);
    box-shadow: 
        0 0 20px #00ff88,
        inset 0 0 10px #00ff88,
        0 4px 10px rgba(0, 255, 136, 0.4);
}`,
    js: `// 3D Hologram button functionality
const hologramBtn = document.querySelector('.btn-3d-hologram');

hologramBtn.addEventListener('click', function() {
    console.log('3D Hologram button clicked!');
    
    // Add pulse effect
    this.style.animation = 'hologramPulse 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});

// Add pulse animation
const hologramStyle = document.createElement('style');
hologramStyle.textContent = \`
    @keyframes hologramPulse {
        0%, 100% { 
            box-shadow: 
                0 0 25px #00ff88,
                inset 0 0 15px #00ff88,
                0 8px 20px rgba(0, 255, 136, 0.5);
        }
        50% { 
            box-shadow: 
                0 0 35px #00ff88,
                inset 0 0 20px #00ff88,
                0 12px 30px rgba(0, 255, 136, 0.7);
        }
    }
\`;
document.head.appendChild(hologramStyle);`
},
// ====================================================================
// TEMPLATE 47: BOUNCE ANIMATION
// ====================================================================
btn47: {
    name: "Bounce Animation",
    category: "animated",
    html: `<button class="btn-bounce">
    Bounce Me
</button>`,
    css: `.btn-bounce {
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    font-family: inherit;
}

.btn-bounce:hover {
    animation: bounce 0.5s ease infinite alternate;
    transform: translateY(-4px);
}

@keyframes bounce {
    from { transform: translateY(-4px); }
    to { transform: translateY(-8px); }
}`,
    js: `// Bounce button functionality
const bounceBtn = document.querySelector('.btn-bounce');

bounceBtn.addEventListener('click', function() {
    console.log('Bounce button clicked!');
    
    // Add click effect
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'bounce 0.5s ease infinite alternate';
    }, 50);
});`
},

// ====================================================================
// TEMPLATE 48: WAVE ANIMATION
// ====================================================================
btn48: {
    name: "Wave Animation",
    category: "animated",
    html: `<button class="btn-wave">
    Wave Effect
</button>`,
    css: `.btn-wave {
    position: relative;
    padding: 15px 30px;
    background: #10b981;
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-wave::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
}

.btn-wave:hover::before {
    width: 400px;
    height: 400px;
}

.btn-wave:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(16, 185, 129, 0.5);
}`,
    js: `// Wave button functionality
const waveBtn = document.querySelector('.btn-wave');

waveBtn.addEventListener('click', function(e) {
    console.log('Wave button clicked!');
    
    // Create multiple waves
    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            const wave = document.createElement('span');
            wave.style.cssText = \`
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: translate(-50%, -50%);
                animation: waveExpand 0.6s ease-out;
                pointer-events: none;
            \`;
            this.appendChild(wave);
            
            setTimeout(() => wave.remove(), 600);
        }, i * 200);
    }
});

// Add wave animation
const waveStyle = document.createElement('style');
waveStyle.textContent = \`
    @keyframes waveExpand {
        to {
            width: 400px;
            height: 400px;
            opacity: 0;
        }
    }
\`;
document.head.appendChild(waveStyle);`
},

// ====================================================================
// TEMPLATE 49: NEON PULSE
// ====================================================================
btn49: {
    name: "Neon Pulse",
    category: "animated",
    html: `<button class="btn-neon-pulse">
    Neon Pulse
</button>`,
    css: `.btn-neon-pulse {
    padding: 15px 30px;
    background: transparent;
    border: 2px solid #ff0080;
    border-radius: 12px;
    color: #ff0080;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    animation: neonPulse 2s infinite;
    text-shadow: 0 0 8px #ff0080;
    box-shadow: 
        0 0 15px #ff0080,
        inset 0 0 8px #ff0080;
    font-family: inherit;
    transition: all 0.3s ease;
}

@keyframes neonPulse {
    0%, 100% { 
        box-shadow: 
            0 0 15px #ff0080,
            inset 0 0 8px #ff0080;
    }
    50% { 
        box-shadow: 
            0 0 25px #ff0080,
            inset 0 0 12px #ff0080;
    }
}

.btn-neon-pulse:hover {
    background: #ff0080;
    color: white;
    animation: none;
    transform: translateY(-2px);
}`,
    js: `// Neon pulse button functionality
const neonBtn = document.querySelector('.btn-neon-pulse');

neonBtn.addEventListener('click', function() {
    console.log('Neon pulse button clicked!');
    
    // Intensify pulse on click
    this.style.animation = 'neonPulse 0.5s infinite';
    setTimeout(() => {
        this.style.animation = 'neonPulse 2s infinite';
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 50: MAGNETIC 2D
// ====================================================================
btn50: {
    name: "Magnetic 2D",
    category: "animated",
    html: `<button class="btn-magnetic-2d">
    Magnetic 2D
</button>`,
    css: `.btn-magnetic-2d {
    padding: 15px 30px;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-magnetic-2d::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
}

.btn-magnetic-2d:hover::before {
    left: 100%;
}

.btn-magnetic-2d:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(240, 147, 251, 0.4);
}`,
    js: `// Magnetic 2D button functionality
const magnetic2dBtn = document.querySelector('.btn-magnetic-2d');

magnetic2dBtn.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX * 5;
    const deltaY = (y - centerY) / centerY * 5;
    
    this.style.transform = \`translate(\${deltaX}px, \${deltaY - 3}px)\`;
});

magnetic2dBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(-3px)';
});`
},

// ====================================================================
// TEMPLATE 51: SHAKE ANIMATION
// ====================================================================
btn51: {
    name: "Shake Animation",
    category: "animated",
    html: `<button class="btn-shake">
    Shake Me
</button>`,
    css: `.btn-shake {
    padding: 15px 30px;
    background: #f59e0b;
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-shake:hover {
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
}`,
    js: `// Shake button functionality
const shakeBtn = document.querySelector('.btn-shake');

shakeBtn.addEventListener('click', function() {
    console.log('Shake button clicked!');
    
    // Trigger shake animation
    this.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 52: ROTATE 3D
// ====================================================================
btn52: {
    name: "Rotate 3D",
    category: "animated",
    html: `<button class="btn-rotate-3d">
    Rotate 3D
</button>`,
    css: `.btn-rotate-3d {
    padding: 15px 30px;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    font-family: inherit;
}

.btn-rotate-3d:hover {
    transform: rotateX(20deg) rotateY(20deg) scale(1.1);
    box-shadow: 
        0 20px 40px rgba(79, 172, 254, 0.5),
        inset 0 2px 0 rgba(255, 255, 255, 0.4);
}`,
    js: `// Rotate 3D button functionality
const rotate3dBtn = document.querySelector('.btn-rotate-3d');

rotate3dBtn.addEventListener('click', function() {
    console.log('Rotate 3D button clicked!');
    
    // Add click rotation
    this.style.transform = 'rotateX(30deg) rotateY(30deg) scale(1.05)';
    setTimeout(() => {
        this.style.transform = 'rotateX(20deg) rotateY(20deg) scale(1.1)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 53: GLITCH EFFECT
// ====================================================================
btn53: {
    name: "Glitch Effect",
    category: "animated",
    html: `<button class="btn-glitch">
    Glitch Effect
</button>`,
    css: `.btn-glitch {
    padding: 15px 30px;
    background: #000;
    border: 2px solid #00ffff;
    border-radius: 12px;
    color: #00ffff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    text-shadow: 0 0 8px #00ffff;
    font-family: inherit;
    transition: all 0.3s ease;
}

.btn-glitch:hover {
    animation: glitch 0.3s linear;
    background: rgba(0, 255, 255, 0.1);
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(3px, -3px); }
    100% { transform: translate(0); }
}`,
    js: `// Glitch button functionality
const glitchBtn = document.querySelector('.btn-glitch');

glitchBtn.addEventListener('click', function() {
    console.log('Glitch button clicked!');
    
    // Multiple glitch effects on click
    for(let i = 0; i < 2; i++) {
        setTimeout(() => {
            this.style.animation = 'glitch 0.2s linear';
            setTimeout(() => {
                this.style.animation = '';
            }, 200);
        }, i * 300);
    }
});`
},

// ====================================================================
// TEMPLATE 54: PARTICLE EXPLOSION
// ====================================================================
btn54: {
    name: "Particle Explosion",
    category: "animated",
    html: `<button class="btn-particle">
    Particles
</button>`,
    css: `.btn-particle {
    position: relative;
    padding: 15px 30px;
    background: #8b5cf6;
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-particle::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease;
}

.btn-particle:hover::before {
    transform: translate(-50%, -50%) scale(15);
    opacity: 0;
}

.btn-particle:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(139, 92, 246, 0.5);
}`,
    js: `// Particle button functionality
const particleBtn = document.querySelector('.btn-particle');

particleBtn.addEventListener('click', function() {
    console.log('Particle button clicked!');
    
    // Create multiple particles
    for(let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50;
        
        particle.style.cssText = \`
            position: absolute;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            animation: particleMove 0.8s ease-out forwards;
            pointer-events: none;
        \`;
        
        document.body.appendChild(particle);
        
        const rect = this.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        
        particle.style.left = startX + 'px';
        particle.style.top = startY + 'px';
        
        setTimeout(() => particle.remove(), 800);
    }
});

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = \`
    @keyframes particleMove {
        to {
            transform: translate(
                \${Math.cos(0) * 50}px,
                \${Math.sin(0) * 50}px
            );
            opacity: 0;
        }
    }
\`;
document.head.appendChild(particleStyle);`
},

// ====================================================================
// TEMPLATE 55: MORPH SHAPE
// ====================================================================
btn55: {
    name: "Morph Shape",
    category: "animated",
    html: `<button class="btn-morph">
    Morph Me
</button>`,
    css: `.btn-morph {
    padding: 15px 30px;
    background: linear-gradient(135deg, #ff6b6b, #ffa8a8);
    border: none;
    border-radius: 30px 10px 30px 10px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: inherit;
}

.btn-morph:hover {
    border-radius: 10px 30px 10px 30px;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 15px 40px rgba(255, 107, 107, 0.5);
}`,
    js: `// Morph button functionality
const morphBtn = document.querySelector('.btn-morph');

morphBtn.addEventListener('click', function() {
    console.log('Morph button clicked!');
    
    // Add extra morph on click
    this.style.borderRadius = '15px 15px 15px 15px';
    this.style.transform = 'scale(1.05) rotate(-5deg)';
    
    setTimeout(() => {
        this.style.borderRadius = '10px 30px 10px 30px';
        this.style.transform = 'scale(1.1) rotate(5deg)';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 56: INFINITE SPIN
// ====================================================================
btn56: {
    name: "Infinite Spin",
    category: "animated",
    html: `<button class="btn-spin">
    Spin Forever
</button>`,
    css: `.btn-spin {
    position: relative;
    padding: 15px 30px;
    background: transparent;
    border: none;
    border-radius: 12px;
    color: #6366f1;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    font-family: inherit;
    transition: color 0.3s ease;
}

.btn-spin::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1);
    border-radius: 15px;
    animation: spin 2s linear infinite;
    z-index: -1;
}

.btn-spin::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: white;
    border-radius: 10px;
    z-index: -1;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.btn-spin:hover::before {
    animation-duration: 0.5s;
}

.btn-spin:hover {
    color: #8b5cf6;
}`,
    js: `// Infinite spin button functionality
const spinBtn = document.querySelector('.btn-spin');

spinBtn.addEventListener('click', function() {
    console.log('Spin button clicked!');
    
    // Speed up spin on click
    this.style.setProperty('--spin-duration', '0.2s');
    setTimeout(() => {
        this.style.setProperty('--spin-duration', '2s');
    }, 500);
});`
},
// ====================================================================
// TEMPLATE 57: SLIDE FILL ANIMATION
// ====================================================================
btn57: {
    name: "Slide Fill Animation",
    category: "animated",
    html: `<button class="btn-slide-fill" style="--clr: #7c3aed">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-rocket"></i>
        </span>
        <span class="btn-text">Slide Fill</span>
    </span>
</button>`,
    css: `.btn-slide-fill {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: translateX(-100%);
    transition: transform .3s;
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-slide-fill:hover .btn-text {
    color: #fff;
}

.btn-slide-fill:hover .btn-decor {
    transform: translate(0);
}`,
    js: `// Slide fill button functionality
const slideFillBtn = document.querySelector('.btn-slide-fill');

slideFillBtn.addEventListener('click', function() {
    console.log('Slide fill button clicked!');
    
    // Add click feedback
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 58: GRADIENT SLIDE
// ====================================================================
btn58: {
    name: "Gradient Slide",
    category: "animated",
    html: `<button class="btn-gradient-slide" style="--clr: linear-gradient(135deg, #667eea, #764ba2)">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-star"></i>
        </span>
        <span class="btn-text">Gradient Slide</span>
    </span>
</button>`,
    css: `.btn-gradient-slide {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background: var(--clr);
    transform: translateX(-100%);
    transition: transform .3s;
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-gradient-slide:hover .btn-text {
    color: #fff;
}

.btn-gradient-slide:hover .btn-decor {
    transform: translate(0);
}

.btn-gradient-slide:hover .btn-icon {
    background: rgba(255, 255, 255, 0.2);
}`,
    js: `// Gradient slide button functionality
const gradientSlideBtn = document.querySelector('.btn-gradient-slide');

gradientSlideBtn.addEventListener('click', function() {
    console.log('Gradient slide button clicked!');
    
    // Add bounce effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 200);
});`
},

// ====================================================================
// TEMPLATE 59: DUAL COLOR FILL
// ====================================================================
btn59: {
    name: "Dual Color Fill",
    category: "animated",
    html: `<button class="btn-dual-fill" style="--clr1: #ec4899; --clr2: #8b5cf6">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-heart"></i>
        </span>
        <span class="btn-text">Dual Color</span>
    </span>
</button>`,
    css: `.btn-dual-fill {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--clr1) 0%, var(--clr2) 100%);
    transform: translateX(-100%) scaleX(1.5);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background: var(--clr1);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-dual-fill:hover .btn-text {
    color: #fff;
}

.btn-dual-fill:hover .btn-decor {
    transform: translate(0) scaleX(1);
}

.btn-dual-fill:hover .btn-icon {
    background: linear-gradient(90deg, var(--clr1) 0%, var(--clr2) 100%);
}`,
    js: `// Dual color fill button functionality
const dualFillBtn = document.querySelector('.btn-dual-fill');

dualFillBtn.addEventListener('click', function() {
    console.log('Dual color fill button clicked!');
    
    // Add pulse effect
    this.style.animation = 'pulse 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = \`
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
\`;
document.head.appendChild(pulseStyle);`
},

// ====================================================================
// TEMPLATE 60: BOUNCE FILL
// ====================================================================
btn60: {
    name: "Bounce Fill",
    category: "animated",
    html: `<button class="btn-bounce-fill" style="--clr: #10b981">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-check"></i>
        </span>
        <span class="btn-text">Bounce Fill</span>
    </span>
</button>`,
    css: `.btn-bounce-fill {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
    transition: transform 0.3s ease;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: translateX(-100%);
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-bounce-fill:hover .btn-text {
    color: #fff;
}

.btn-bounce-fill:hover .btn-decor {
    transform: translate(0);
}

.btn-bounce-fill:hover {
    animation: bounceButton 0.5s ease;
}

@keyframes bounceButton {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}`,
    js: `// Bounce fill button functionality
const bounceFillBtn = document.querySelector('.btn-bounce-fill');

bounceFillBtn.addEventListener('click', function() {
    console.log('Bounce fill button clicked!');
    
    // Add extra bounce on click
    this.style.animation = 'bounceButton 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 61: WAVE FILL
// ====================================================================
btn61: {
    name: "Wave Fill",
    category: "animated",
    html: `<button class="btn-wave-fill" style="--clr: #3b82f6">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-water"></i>
        </span>
        <span class="btn-text">Wave Fill</span>
    </span>
</button>`,
    css: `.btn-wave-fill {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: translateX(-100%) skewX(-15deg);
    transition: transform 0.4s ease;
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-wave-fill:hover .btn-text {
    color: #fff;
}

.btn-wave-fill:hover .btn-decor {
    transform: translate(0) skewX(-15deg);
}

.btn-wave-fill:hover .btn-icon {
    animation: waveIcon 0.6s ease;
}

@keyframes waveIcon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}`,
    js: `// Wave fill button functionality
const waveFillBtn = document.querySelector('.btn-wave-fill');

waveFillBtn.addEventListener('click', function() {
    console.log('Wave fill button clicked!');
    
    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = \`
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 2;
    \`;
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = \`
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
\`;
document.head.appendChild(rippleStyle);`
},

// ====================================================================
// TEMPLATE 62: DIAGONAL SLIDE
// ====================================================================
btn62: {
    name: "Diagonal Slide",
    category: "animated",
    html: `<button class="btn-diagonal-slide" style="--clr: #f59e0b">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-bolt"></i>
        </span>
        <span class="btn-text">Diagonal Slide</span>
    </span>
</button>`,
    css: `.btn-diagonal-slide {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    transform-origin: top left;
    transition: transform 0.4s ease;
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-diagonal-slide:hover .btn-text {
    color: #fff;
}

.btn-diagonal-slide:hover .btn-decor {
    transform: translate(0) rotate(45deg);
}`,
    js: `// Diagonal slide button functionality
const diagonalSlideBtn = document.querySelector('.btn-diagonal-slide');

diagonalSlideBtn.addEventListener('click', function() {
    console.log('Diagonal slide button clicked!');
    
    // Add lightning effect
    this.style.filter = 'brightness(1.2)';
    setTimeout(() => {
        this.style.filter = 'brightness(1)';
    }, 200);
});`
},

// ====================================================================
// TEMPLATE 63: CIRCULAR EXPAND
// ====================================================================
btn63: {
    name: "Circular Expand",
    category: "animated",
    html: `<button class="btn-circular-expand" style="--clr: #ef4444">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-fire"></i>
        </span>
        <span class="btn-text">Circular Expand</span>
    </span>
</button>`,
    css: `.btn-circular-expand {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: scale(0);
    border-radius: 50%;
    transition: transform 0.5s ease;
    transform-origin: center;
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-circular-expand:hover .btn-text {
    color: #fff;
}

.btn-circular-expand:hover .btn-decor {
    transform: scale(2);
}`,
    js: `// Circular expand button functionality
const circularExpandBtn = document.querySelector('.btn-circular-expand');

circularExpandBtn.addEventListener('click', function() {
    console.log('Circular expand button clicked!');
    
    // Add fire effect
    this.style.animation = 'firePulse 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});

// Add fire pulse animation
const fireStyle = document.createElement('style');
fireStyle.textContent = \`
    @keyframes firePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); filter: brightness(1.3); }
    }
\`;
document.head.appendChild(fireStyle);`
},

// ====================================================================
// TEMPLATE 64: DOUBLE SLIDE
// ====================================================================
btn64: {
    name: "Double Slide",
    category: "animated",
    html: `<button class="btn-double-slide" style="--clr1: #8b5cf6; --clr2: #ec4899">
    <span class="btn-decor-top"></span>
    <span class="btn-decor-bottom"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-gem"></i>
        </span>
        <span class="btn-text">Double Slide</span>
    </span>
</button>`,
    css: `.btn-double-slide {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
}

.btn-decor-top,
.btn-decor-bottom {
    position: absolute;
    left: 0;
    right: 0;
    height: 50%;
    transition: transform 0.4s ease;
    z-index: 0;
}

.btn-decor-top {
    top: 0;
    background: var(--clr1);
    transform: translateX(-100%);
}

.btn-decor-bottom {
    bottom: 0;
    background: var(--clr2);
    transform: translateX(100%);
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background: var(--clr1);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-double-slide:hover .btn-text {
    color: #fff;
}

.btn-double-slide:hover .btn-decor-top {
    transform: translateX(0);
}

.btn-double-slide:hover .btn-decor-bottom {
    transform: translateX(0);
}

.btn-double-slide:hover .btn-icon {
    background: linear-gradient(135deg, var(--clr1), var(--clr2));
}`,
    js: `// Double slide button functionality
const doubleSlideBtn = document.querySelector('.btn-double-slide');

doubleSlideBtn.addEventListener('click', function() {
    console.log('Double slide button clicked!');
    
    // Add sparkle effect
    this.style.animation = 'sparkle 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = \`
    @keyframes sparkle {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.3); }
    }
\`;
document.head.appendChild(sparkleStyle);`
},

// ====================================================================
// TEMPLATE 65: NEON SLIDE
// ====================================================================
btn65: {
    name: "Neon Slide",
    category: "animated",
    html: `<button class="btn-neon-slide" style="--clr: #00ff88">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-gamepad"></i>
        </span>
        <span class="btn-text">Neon Slide</span>
    </span>
</button>`,
    css: `.btn-neon-slide {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    background: #000;
    color: var(--clr);
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
    box-shadow: 
        0 0 15px var(--clr),
        inset 0 0 8px var(--clr);
    text-shadow: 0 0 5px var(--clr);
    transition: all 0.3s ease;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background: var(--clr);
    transform: translateX(-100%);
    transition: transform .3s;
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background: var(--clr);
    display: grid;
    place-items: center;
    color: #000;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-neon-slide:hover .btn-text {
    color: #000;
    text-shadow: none;
}

.btn-neon-slide:hover .btn-decor {
    transform: translate(0);
}

.btn-neon-slide:hover {
    box-shadow: 
        0 0 25px var(--clr),
        inset 0 0 12px var(--clr);
}`,
    js: `// Neon slide button functionality
const neonSlideBtn = document.querySelector('.btn-neon-slide');

neonSlideBtn.addEventListener('click', function() {
    console.log('Neon slide button clicked!');
    
    // Add gamepad vibration effect
    this.style.animation = 'vibrate 0.1s ease 3';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});

// Add vibrate animation
const vibrateStyle = document.createElement('style');
vibrateStyle.textContent = \`
    @keyframes vibrate {
        0%, 100% { transform: translateX(0); }
        50% { transform: translateX(2px); }
    }
\`;
document.head.appendChild(vibrateStyle);`
},

// ====================================================================
// TEMPLATE 66: 3D SLIDE FILL
// ====================================================================
btn66: {
    name: "3D Slide Fill",
    category: "animated",
    html: `<button class="btn-3d-slide" style="--clr: #06b6d4">
    <span class="btn-decor"></span>
    <span class="btn-content">
        <span class="btn-icon">
            <i class="fas fa-cube"></i>
        </span>
        <span class="btn-text">3D Slide</span>
    </span>
</button>`,
    css: `.btn-3d-slide {
    text-decoration: none;
    line-height: 1;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px rgba(0,0,0,.05);
    background-color: #fff;
    color: #121212;
    border: none;
    cursor: pointer;
    padding: 0;
    font-family: inherit;
    font-weight: 600;
    transform-style: preserve-3d;
    perspective: 500px;
    transition: all 0.3s ease;
}

.btn-decor {
    position: absolute;
    inset: 0;
    background-color: var(--clr);
    transform: translateX(-100%) rotateY(45deg);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
}

.btn-content {
    display: flex;
    align-items: center;
    font-weight: 600;
    position: relative;
    overflow: hidden;
}

.btn-icon {
    width: 48px;
    height: 40px;
    background-color: var(--clr);
    display: grid;
    place-items: center;
    color: white;
    transition: all 0.3s ease;
}

.btn-text {
    display: inline-block;
    transition: color .2s;
    padding: 2px 1.5rem 2px;
    padding-left: .75rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 150px;
}

.btn-3d-slide:hover .btn-text {
    color: #fff;
}

.btn-3d-slide:hover .btn-decor {
    transform: translate(0) rotateY(0);
}

.btn-3d-slide:hover {
    transform: translateY(-3px) rotateX(5deg);
    box-shadow: 
        0 12px 30px rgba(6, 182, 212, 0.4),
        0 6px 15px rgba(0, 0, 0, 0.1);
}`,
    js: `// 3D slide button functionality
const threeDSlideBtn = document.querySelector('.btn-3d-slide');

threeDSlideBtn.addEventListener('click', function() {
    console.log('3D slide button clicked!');
    
    // Add 3D click effect
    this.style.transform = 'translateY(-1px) rotateX(10deg) scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'translateY(-3px) rotateX(5deg)';
    }, 150);
});`
},
// ====================================================================
// TEMPLATE 77: DARK NEON GLOW
// ====================================================================
btn77: {
    name: "Dark Neon Glow",
    category: "dark",
    html: `<button class="btn-dark-neon">
    Neon Glow
</button>`,
    css: `.btn-dark-neon {
    background: transparent;
    color: #00ff88;
    border: 2px solid #00ff88;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 5px #00ff88;
    box-shadow: 
        0 0 5px #00ff88,
        inset 0 0 5px #00ff88;
    font-family: inherit;
}

.btn-dark-neon:hover {
    background: #00ff88;
    color: #000;
    text-shadow: none;
    box-shadow: 
        0 0 20px #00ff88,
        0 0 40px #00ff88,
        inset 0 0 10px #00ff88;
    transform: translateY(-2px);
}

.btn-dark-neon:active {
    transform: translateY(0);
}`,
    js: `// Dark neon glow button
const neonBtn = document.querySelector('.btn-dark-neon');

neonBtn.addEventListener('click', function() {
    console.log('Neon glow button clicked!');
    
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 78: CYBERPUNK BUTTON
// ====================================================================
btn78: {
    name: "Cyberpunk Button",
    category: "dark",
    html: `<button class="btn-cyberpunk">
    CYBERPUNK
</button>`,
    css: `.btn-cyberpunk {
    background: linear-gradient(45deg, #ff0080, #8000ff);
    color: #00ffff;
    border: none;
    padding: 12px 24px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 10px #00ffff;
    clip-path: polygon(
        0 0, 
        calc(100% - 10px) 0, 
        100% 10px, 
        100% 100%, 
        10px 100%, 
        0 calc(100% - 10px)
    );
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-cyberpunk::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #000;
    clip-path: polygon(
        0 0, 
        calc(100% - 10px) 0, 
        100% 10px, 
        100% 100%, 
        10px 100%, 
        0 calc(100% - 10px)
    );
    z-index: -1;
}

.btn-cyberpunk:hover {
    transform: translateY(-2px);
    box-shadow: 
        0 0 20px #ff0080,
        0 0 40px #8000ff;
}

.btn-cyberpunk:active {
    transform: translateY(0);
}`,
    js: `// Cyberpunk button functionality
const cyberBtn = document.querySelector('.btn-cyberpunk');

cyberBtn.addEventListener('click', function() {
    console.log('Cyberpunk button activated!');
    
    // Add glitch effect on click
    this.style.animation = 'glitch 0.2s linear';
    setTimeout(() => {
        this.style.animation = '';
    }, 200);
});`
},

// ====================================================================
// TEMPLATE 79: MATRIX RAIN
// ====================================================================
btn79: {
    name: "Matrix Rain",
    category: "dark",
    html: `<button class="btn-matrix">
    MATRIX
</button>`,
    css: `.btn-matrix {
    background: #000;
    color: #00ff00;
    border: 1px solid #00ff00;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 5px #00ff00;
    transition: all 0.3s ease;
}

.btn-matrix::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        to bottom,
        transparent 30%,
        rgba(0, 255, 0, 0.1) 50%,
        transparent 70%
    );
    animation: matrixRain 2s linear infinite;
    transform: rotate(30deg);
}

@keyframes matrixRain {
    0% { transform: translateY(-100%) rotate(30deg); }
    100% { transform: translateY(100%) rotate(30deg); }
}

.btn-matrix:hover {
    box-shadow: 
        0 0 10px #00ff00,
        0 0 20px #00ff00;
    background: #001100;
    transform: translateY(-2px);
}

.btn-matrix:active {
    transform: translateY(0);
}`,
    js: `// Matrix rain button
const matrixBtn = document.querySelector('.btn-matrix');

matrixBtn.addEventListener('click', function() {
    console.log('Matrix button clicked!');
    
    // Add digital sound effect simulation
    this.style.background = '#002200';
    setTimeout(() => {
        this.style.background = '#000';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 80: HOLOGRAM BUTTON
// ====================================================================
btn80: {
    name: "Hologram Button",
    category: "dark",
    html: `<button class="btn-hologram">
    HOLOGRAM
</button>`,
    css: `.btn-hologram {
    background: rgba(0, 255, 255, 0.1);
    color: #00ffff;
    border: 1px solid #00ffff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px #00ffff;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-hologram::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 255, 255, 0.4),
        transparent
    );
    transition: left 0.5s ease;
}

.btn-hologram:hover::before {
    left: 100%;
}

.btn-hologram:hover {
    background: rgba(0, 255, 255, 0.2);
    box-shadow: 
        0 0 15px #00ffff,
        inset 0 0 15px rgba(0, 255, 255, 0.2);
    transform: translateY(-2px);
}

.btn-hologram:active {
    transform: translateY(0);
}`,
    js: `// Hologram button functionality
const hologramBtn = document.querySelector('.btn-hologram');

hologramBtn.addEventListener('click', function() {
    console.log('Hologram button activated!');
    
    // Add scan effect
    this.style.animation = 'scan 0.5s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});

// Add scan animation
const style = document.createElement('style');
style.textContent = \`
    @keyframes scan {
        0% { background-position: -100% 0; }
        100% { background-position: 100% 0; }
    }
\`;
document.head.appendChild(style);`
},

// ====================================================================
// TEMPLATE 81: DARK GRADIENT PULSE
// ====================================================================
btn81: {
    name: "Dark Gradient Pulse",
    category: "dark",
    html: `<button class="btn-gradient-pulse">
    Gradient Pulse
</button>`,
    css: `.btn-gradient-pulse {
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
    background-size: 300% 300%;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    animation: gradientShift 3s ease infinite;
    font-family: inherit;
    transition: all 0.3s ease;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.btn-gradient-pulse::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.btn-gradient-pulse:hover::before {
    left: 100%;
}

.btn-gradient-pulse:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.btn-gradient-pulse:active {
    transform: translateY(0);
}`,
    js: `// Gradient pulse button
const gradientPulseBtn = document.querySelector('.btn-gradient-pulse');

gradientPulseBtn.addEventListener('click', function() {
    console.log('Gradient pulse button clicked!');
    
    // Speed up animation on click
    this.style.animationDuration = '1s';
    setTimeout(() => {
        this.style.animationDuration = '3s';
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 82: DARK GLASS MORPHISM
// ====================================================================
btn82: {
    name: "Dark Glass Morphism",
    category: "dark",
    html: `<button class="btn-dark-glass">
    Glass Effect
</button>`,
    css: `.btn-dark-glass {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-dark-glass::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    transition: left 0.5s ease;
}

.btn-dark-glass:hover::before {
    left: 100%;
}

.btn-dark-glass:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.btn-dark-glass:active {
    transform: translateY(0);
}`,
    js: `// Dark glass morphism button
const glassBtn = document.querySelector('.btn-dark-glass');

glassBtn.addEventListener('click', function() {
    console.log('Glass morphism button clicked!');
    
    // Add ripple effect
    const ripple = document.createElement('span');
    ripple.style.cssText = \`
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    \`;
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});`
},

// ====================================================================
// TEMPLATE 83: DARK PARTICLE EFFECT
// ====================================================================
btn83: {
    name: "Dark Particle Effect",
    category: "dark",
    html: `<button class="btn-particle">
    Particles
</button>`,
    css: `.btn-particle {
    background: #1a1a1a;
    color: #ff6b6b;
    border: 2px solid #ff6b6b;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-particle::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 4px;
    background: #ff6b6b;
    border-radius: 50%;
    animation: particleFloat 3s infinite linear;
    opacity: 0;
}

.btn-particle::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    background: #4ecdc4;
    border-radius: 50%;
    animation: particleFloat 2s infinite linear 1s;
    opacity: 0;
}

@keyframes particleFloat {
    0% {
        transform: translateY(100%) translateX(-10px);
        opacity: 1;
    }
    100% {
        transform: translateY(-100%) translateX(10px);
        opacity: 0;
    }
}

.btn-particle:hover::before,
.btn-particle:hover::after {
    animation-play-state: running;
}

.btn-particle:hover {
    box-shadow: 
        0 0 10px #ff6b6b,
        inset 0 0 10px rgba(255, 107, 107, 0.1);
    transform: translateY(-2px);
}

.btn-particle:active {
    transform: translateY(0);
}`,
    js: `// Particle effect button
const particleBtn = document.querySelector('.btn-particle');

particleBtn.addEventListener('mouseenter', function() {
    // Start particle animation
    this.style.setProperty('--particle-1', 'running');
    this.style.setProperty('--particle-2', 'running');
});

particleBtn.addEventListener('click', function() {
    console.log('Particle button clicked!');
    
    // Create burst effect
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = \`
                position: absolute;
                width: 3px;
                height: 3px;
                background: #ff6b6b;
                border-radius: 50%;
                pointer-events: none;
                animation: burst 0.6s ease-out forwards;
            \`;
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            this.appendChild(particle);
            
            setTimeout(() => particle.remove(), 600);
        }, i * 100);
    }
});

// Add burst animation
const burstStyle = document.createElement('style');
burstStyle.textContent = \`
    @keyframes burst {
        0% {
            transform: scale(0) translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: scale(1) translate(\${Math.random() * 40 - 20}px, \${Math.random() * 40 - 20}px);
            opacity: 0;
        }
    }
\`;
document.head.appendChild(burstStyle);`
},

// ====================================================================
// TEMPLATE 84: DARK LIQUID FILL
// ====================================================================
btn84: {
    name: "Dark Liquid Fill",
    category: "dark",
    html: `<button class="btn-liquid-dark">
    Liquid Dark
</button>`,
    css: `.btn-liquid-dark {
    background: transparent;
    color: #8b5cf6;
    border: 2px solid #8b5cf6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: color 0.3s ease;
    font-family: inherit;
}

.btn-liquid-dark::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(45deg, #8b5cf6, #6366f1);
    transition: height 0.5s ease;
    z-index: -1;
    border-radius: 0 0 50% 50%;
}

.btn-liquid-dark:hover::before {
    height: 100%;
    border-radius: 0;
}

.btn-liquid-dark:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
}

.btn-liquid-dark:active {
    transform: translateY(0);
}`,
    js: `// Dark liquid fill button
const liquidDarkBtn = document.querySelector('.btn-liquid-dark');

liquidDarkBtn.addEventListener('click', function() {
    console.log('Liquid dark button clicked!');
    
    // Add wave effect
    this.style.animation = 'liquidWave 0.6s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 600);
});

// Add wave animation
const waveStyle = document.createElement('style');
waveStyle.textContent = \`
    @keyframes liquidWave {
        0% { transform: translateY(-2px) scale(1); }
        50% { transform: translateY(-2px) scale(1.02); }
        100% { transform: translateY(-2px) scale(1); }
    }
\`;
document.head.appendChild(waveStyle);`
},

// ====================================================================
// TEMPLATE 85: DARK GLITCH TEXT
// ====================================================================
btn85: {
    name: "Dark Glitch Text",
    category: "dark",
    html: `<button class="btn-glitch">
    GLITCH MODE
</button>`,
    css: `.btn-glitch {
    background: #000;
    color: #fff;
    border: 2px solid #ff0080;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
    overflow: hidden;
}

.btn-glitch:hover {
    animation: glitch 0.3s linear;
    background: #ff0080;
    color: #000;
    box-shadow: 0 0 20px #ff0080;
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

.btn-glitch:active {
    transform: scale(0.95);
}`,
    js: `// Glitch text button
const glitchBtn = document.querySelector('.btn-glitch');

glitchBtn.addEventListener('click', function() {
    console.log('Glitch mode activated!');
    
    // Extended glitch effect on click
    this.style.animation = 'glitch 0.5s linear';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 86: DARK SPACE THEME
// ====================================================================
btn86: {
    name: "Dark Space Theme",
    category: "dark",
    html: `<button class="btn-space">
    EXPLORE SPACE
</button>`,
    css: `.btn-space {
    background: #000;
    color: #fff;
    border: 1px solid #6366f1;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-space::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
    animation: spaceTwinkle 4s infinite;
}

@keyframes spaceTwinkle {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
}

.btn-space:hover {
    background: #111;
    box-shadow: 
        0 0 20px #6366f1,
        inset 0 0 20px rgba(99, 102, 241, 0.1);
    transform: translateY(-2px);
}

.btn-space:active {
    transform: translateY(0);
}`,
    js: `// Space theme button
const spaceBtn = document.querySelector('.btn-space');

spaceBtn.addEventListener('click', function() {
    console.log('Space exploration initiated!');
    
    // Add star burst effect
    this.style.animation = 'starBurst 0.6s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 600);
});

// Add star burst animation
const starStyle = document.createElement('style');
starStyle.textContent = \`
    @keyframes starBurst {
        0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7); }
        70% { box-shadow: 0 0 0 20px rgba(99, 102, 241, 0); }
        100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
    }
\`;
document.head.appendChild(starStyle);`
},
// ====================================================================
// TEMPLATE 87: DARK CYBER GRID
// ====================================================================
btn87: {
    name: "Dark Cyber Grid",
    category: "dark",
    html: `<button class="btn-cyber-grid">
    CYBER GRID
</button>`,
    css: `.btn-cyber-grid {
    background: #000;
    color: #00ff88;
    border: 1px solid #00ff88;
    padding: 12px 24px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
}

.btn-cyber-grid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(90deg, transparent 49%, #00ff88 50%, transparent 51%),
        linear-gradient(0deg, transparent 49%, #00ff88 50%, transparent 51%);
    background-size: 15px 15px;
    opacity: 0.3;
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

.btn-cyber-grid:hover {
    background: #001100;
    box-shadow: 
        0 0 20px #00ff88,
        inset 0 0 15px #00ff88;
    text-shadow: 0 0 10px #00ff88;
}

.btn-cyber-grid:active {
    transform: scale(0.98);
}`,
    js: `// Cyber grid button
const cyberGridBtn = document.querySelector('.btn-cyber-grid');

cyberGridBtn.addEventListener('click', function() {
    console.log('Cyber grid activated!');
    
    // Add scan effect
    this.style.animation = 'gridScan 0.5s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});

// Add grid scan animation
const gridStyle = document.createElement('style');
gridStyle.textContent = \`
    @keyframes gridScan {
        0% { background-size: 15px 15px; }
        50% { background-size: 20px 20px; }
        100% { background-size: 15px 15px; }
    }
\`;
document.head.appendChild(gridStyle);`
},

// ====================================================================
// TEMPLATE 88: DARK BINARY RAIN
// ====================================================================
btn88: {
    name: "Dark Binary Rain",
    category: "dark",
    html: `<button class="btn-binary">
    BINARY CODE
</button>`,
    css: `.btn-binary {
    background: #000;
    color: #00ffff;
    border: 1px solid #00ffff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
}

.btn-binary::before {
    content: '01010101010101011010101010101010';
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    color: #00ffff;
    font-size: 12px;
    opacity: 0.3;
    animation: binaryFall 3s linear infinite;
}

@keyframes binaryFall {
    0% { top: -100%; }
    100% { top: 100%; }
}

.btn-binary:hover::before {
    animation-duration: 1s;
    opacity: 0.6;
}

.btn-binary:hover {
    background: #001133;
    box-shadow: 0 0 25px #00ffff;
}

.btn-binary:active {
    transform: scale(0.98);
}`,
    js: `// Binary rain button
const binaryBtn = document.querySelector('.btn-binary');

binaryBtn.addEventListener('click', function() {
    console.log('Binary system engaged!');
    
    // Speed up binary rain
    const before = this.querySelector('::before');
    this.style.setProperty('--binary-speed', '0.5s');
    
    setTimeout(() => {
        this.style.setProperty('--binary-speed', '3s');
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 89: DARK PLASMA BALL
// ====================================================================
btn89: {
    name: "Dark Plasma Ball",
    category: "dark",
    html: `<button class="btn-plasma">
    PLASMA
</button>`,
    css: `.btn-plasma {
    background: radial-gradient(circle at center, #8b5cf6, #000);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-plasma::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6, #8b5cf6);
    animation: plasmaRotate 4s linear infinite;
    opacity: 0.5;
}

@keyframes plasmaRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.btn-plasma:hover {
    transform: scale(1.1);
    box-shadow: 
        0 0 40px #8b5cf6,
        0 0 80px #ec4899;
}

.btn-plasma:active {
    transform: scale(1.05);
}`,
    js: `// Plasma ball button
const plasmaBtn = document.querySelector('.btn-plasma');

plasmaBtn.addEventListener('click', function() {
    console.log('Plasma energy activated!');
    
    // Add electric arc effect
    this.style.animation = 'plasmaPulse 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});

// Add plasma pulse animation
const plasmaStyle = document.createElement('style');
plasmaStyle.textContent = \`
    @keyframes plasmaPulse {
        0%, 100% { box-shadow: 0 0 40px #8b5cf6, 0 0 80px #ec4899; }
        50% { box-shadow: 0 0 60px #8b5cf6, 0 0 120px #ec4899; }
    }
\`;
document.head.appendChild(plasmaStyle);`
},

// ====================================================================
// TEMPLATE 90: DARK DATA STREAM
// ====================================================================
btn90: {
    name: "Dark Data Stream",
    category: "dark",
    html: `<button class="btn-data-stream">
    DATA FLOW
</button>`,
    css: `.btn-data-stream {
    background: #000;
    color: #ff0080;
    border: 1px solid #ff0080;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
}

.btn-data-stream::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff0080, transparent);
    animation: dataStream 2s linear infinite;
}

@keyframes dataStream {
    0% { left: -100%; }
    100% { left: 100%; }
}

.btn-data-stream:hover {
    background: #1a001a;
    box-shadow: 
        0 0 20px #ff0080,
        inset 0 0 15px rgba(255, 0, 128, 0.2);
}

.btn-data-stream:active {
    transform: scale(0.98);
}`,
    js: `// Data stream button
const dataStreamBtn = document.querySelector('.btn-data-stream');

dataStreamBtn.addEventListener('click', function() {
    console.log('Data stream initiated!');
    
    // Add multiple data streams
    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            const stream = document.createElement('div');
            stream.style.cssText = \`
                position: absolute;
                top: \${i * 33}%;
                left: -100%;
                width: 100%;
                height: 1px;
                background: linear-gradient(90deg, transparent, #ff0080, transparent);
                animation: dataStream 1s linear;
            \`;
            this.appendChild(stream);
            
            setTimeout(() => stream.remove(), 1000);
        }, i * 200);
    }
});`
},

// ====================================================================
// TEMPLATE 91: DARK NEON SIGN
// ====================================================================
btn91: {
    name: "Dark Neon Sign",
    category: "dark",
    html: `<button class="btn-neon-sign">
    OPEN 24/7
</button>`,
    css: `.btn-neon-sign {
    background: #000;
    color: #ff0080;
    border: 2px solid #ff0080;
    padding: 12px 24px;
    border-radius: 0;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-family: 'Arial Black', sans-serif;
    animation: neonFlicker 2s infinite alternate;
    transition: all 0.3s ease;
}

@keyframes neonFlicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow: 
            0 0 5px #ff0080,
            0 0 10px #ff0080,
            0 0 15px #ff0080;
        box-shadow: 
            0 0 5px #ff0080,
            inset 0 0 5px #ff0080;
    }
    20%, 24%, 55% {
        text-shadow: none;
        box-shadow: none;
    }
}

.btn-neon-sign:hover {
    animation-duration: 0.5s;
    background: #ff0080;
    color: #000;
}

.btn-neon-sign:active {
    transform: scale(0.95);
}`,
    js: `// Neon sign button
const neonSignBtn = document.querySelector('.btn-neon-sign');

neonSignBtn.addEventListener('click', function() {
    console.log('Neon sign activated!');
    
    // Add power on effect
    this.style.animation = 'powerOn 1s ease';
    setTimeout(() => {
        this.style.animation = 'neonFlicker 2s infinite alternate';
    }, 1000);
});

// Add power on animation
const powerStyle = document.createElement('style');
powerStyle.textContent = \`
    @keyframes powerOn {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
    }
\`;
document.head.appendChild(powerStyle);`
},

// ====================================================================
// TEMPLATE 92: DARK CIRCUIT BOARD
// ====================================================================
btn92: {
    name: "Dark Circuit Board",
    category: "dark",
    html: `<button class="btn-circuit">
    CIRCUIT
</button>`,
    css: `.btn-circuit {
    background: #000;
    color: #00ff88;
    border: 1px solid #00ff88;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-circuit::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 30% 30%, #00ff88 1px, transparent 1px),
        radial-gradient(circle at 70% 70%, #00ff88 1px, transparent 1px);
    background-size: 15px 15px;
    opacity: 0.3;
    animation: circuitPulse 2s infinite;
}

@keyframes circuitPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
}

.btn-circuit:hover {
    background: #001100;
    box-shadow: 0 0 25px #00ff88;
}

.btn-circuit:active {
    transform: scale(0.98);
}`,
    js: `// Circuit board button
const circuitBtn = document.querySelector('.btn-circuit');

circuitBtn.addEventListener('click', function() {
    console.log('Circuit activated!');
    
    // Add electricity flow effect
    this.style.animation = 'electricFlow 0.5s ease';
    setTimeout(() => {
        this.style.animation = 'circuitPulse 2s infinite';
    }, 500);
});

// Add electric flow animation
const electricStyle = document.createElement('style');
electricStyle.textContent = \`
    @keyframes electricFlow {
        0% { background-size: 15px 15px; }
        50% { background-size: 20px 20px; }
        100% { background-size: 15px 15px; }
    }
\`;
document.head.appendChild(electricStyle);`
},

// ====================================================================
// TEMPLATE 93: DARK DIGITAL CLOCK
// ====================================================================
btn93: {
    name: "Dark Digital Clock",
    category: "dark",
    html: `<button class="btn-digital-clock">
    00:00:00
</button>`,
    css: `.btn-digital-clock {
    background: #000;
    color: #00ffff;
    border: 2px solid #00ffff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    font-family: 'Courier New', monospace;
    letter-spacing: 3px;
    text-shadow: 0 0 5px #00ffff;
    box-shadow: inset 0 0 10px rgba(0, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.btn-digital-clock:hover {
    background: #001133;
    box-shadow: 
        0 0 20px #00ffff,
        inset 0 0 15px rgba(0, 255, 255, 0.3);
    animation: digitalBlink 0.5s infinite alternate;
}

@keyframes digitalBlink {
    0% { opacity: 1; }
    100% { opacity: 0.8; }
}

.btn-digital-clock:active {
    transform: scale(0.98);
}`,
    js: `// Digital clock button
const digitalClockBtn = document.querySelector('.btn-digital-clock');

// Update time function
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    digitalClockBtn.textContent = timeString;
}

// Update time every second
setInterval(updateTime, 1000);
updateTime(); // Initial call

digitalClockBtn.addEventListener('click', function() {
    console.log('Digital clock clicked! Current time: ' + this.textContent);
    
    // Add time freeze effect
    const originalText = this.textContent;
    this.textContent = '--:--:--';
    
    setTimeout(() => {
        this.textContent = originalText;
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 94: DARK WORMHOLE
// ====================================================================
btn94: {
    name: "Dark Wormhole",
    category: "dark",
    html: `<button class="btn-wormhole">
    WORMHOLE
</button>`,
    css: `.btn-wormhole {
    background: radial-gradient(circle at center, #000 0%, #4a00e0 50%, #000 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-wormhole::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, #8b5cf6, transparent, #ec4899, transparent);
    animation: wormholeSpin 3s linear infinite;
}

@keyframes wormholeSpin {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.2); }
    100% { transform: rotate(360deg) scale(1); }
}

.btn-wormhole:hover::before {
    animation-duration: 1s;
}

.btn-wormhole:hover {
    transform: scale(1.1);
    box-shadow: 0 0 50px #8b5cf6;
}

.btn-wormhole:active {
    transform: scale(1.05);
}`,
    js: `// Wormhole button
const wormholeBtn = document.querySelector('.btn-wormhole');

wormholeBtn.addEventListener('click', function() {
    console.log('Wormhole engaged!');
    
    // Add warp effect
    this.style.animation = 'warpDrive 1s ease';
    setTimeout(() => {
        this.style.animation = 'wormholeSpin 3s linear infinite';
    }, 1000);
});

// Add warp drive animation
const warpStyle = document.createElement('style');
warpStyle.textContent = \`
    @keyframes warpDrive {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1.1); }
    }
\`;
document.head.appendChild(warpStyle);`
},

// ====================================================================
// TEMPLATE 95: DARK LASER GRID
// ====================================================================
btn95: {
    name: "Dark Laser Grid",
    category: "dark",
    html: `<button class="btn-laser-grid">
    LASER GRID
</button>`,
    css: `.btn-laser-grid {
    background: #000;
    color: #ff0000;
    border: 1px solid #ff0000;
    padding: 12px 24px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: 'Arial Black', sans-serif;
    transition: all 0.3s ease;
}

.btn-laser-grid::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, transparent 49%, #ff0000 50%, transparent 51%) 0 0 / 15px 15px,
        linear-gradient(0deg, transparent 49%, #ff0000 50%, transparent 51%) 0 0 / 15px 15px;
    animation: laserScan 1s linear infinite;
}

@keyframes laserScan {
    0% { background-position: 0 0; }
    100% { background-position: 15px 15px; }
}

.btn-laser-grid:hover {
    background: #330000;
    box-shadow: 
        0 0 25px #ff0000,
        inset 0 0 15px #ff0000;
}

.btn-laser-grid:active {
    transform: scale(0.98);
}`,
    js: `// Laser grid button
const laserGridBtn = document.querySelector('.btn-laser-grid');

laserGridBtn.addEventListener('click', function() {
    console.log('Laser grid activated! Security breach!');
    
    // Add alarm effect
    this.style.animation = 'alarmFlash 0.2s ease 3';
    setTimeout(() => {
        this.style.animation = 'laserScan 1s linear infinite';
    }, 600);
});

// Add alarm flash animation
const alarmStyle = document.createElement('style');
alarmStyle.textContent = \`
    @keyframes alarmFlash {
        0%, 100% { background-color: #000; }
        50% { background-color: #ff0000; }
    }
\`;
document.head.appendChild(alarmStyle);`
},

// ====================================================================
// TEMPLATE 96: DARK QUANTUM
// ====================================================================
btn96: {
    name: "Dark Quantum",
    category: "dark",
    html: `<button class="btn-quantum">
    QUANTUM
</button>`,
    css: `.btn-quantum {
    background: #000;
    color: #bb86fc;
    border: 1px solid #bb86fc;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-quantum::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(187, 134, 252, 0.4), transparent);
    transition: left 0.5s ease;
}

.btn-quantum:hover::before {
    left: 100%;
}

.btn-quantum:hover {
    background: #1a1a1a;
    box-shadow: 
        0 0 25px #bb86fc,
        0 0 50px rgba(187, 134, 252, 0.3);
    animation: quantumSuperposition 0.5s infinite alternate;
}

@keyframes quantumSuperposition {
    0% { transform: translateX(0); }
    100% { transform: translateX(3px); }
}

.btn-quantum:active {
    transform: scale(0.98);
}`,
    js: `// Quantum button
const quantumBtn = document.querySelector('.btn-quantum');

quantumBtn.addEventListener('click', function() {
    console.log('Quantum state observed!');
    
    // Add quantum collapse effect
    this.style.animation = 'quantumCollapse 0.3s ease';
    setTimeout(() => {
        this.style.animation = 'quantumSuperposition 0.5s infinite alternate';
    }, 300);
});

// Add quantum collapse animation
const quantumStyle = document.createElement('style');
quantumStyle.textContent = \`
    @keyframes quantumCollapse {
        0% { transform: scale(1) translateX(0); }
        50% { transform: scale(0.9) translateX(5px); }
        100% { transform: scale(1) translateX(3px); }
    }
\`;
document.head.appendChild(quantumStyle);`
},
// ====================================================================
// TEMPLATE 97: DARK MORSE CODE
// ====================================================================
btn97: {
    name: "Dark Morse Code",
    category: "dark",
    html: `<button class="btn-morse-code">
    ••• --- •••
</button>`,
    css: `.btn-morse-code {
    background: #000;
    color: #00ff88;
    border: 1px solid #00ff88;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    letter-spacing: 4px;
    animation: morseBlink 2s infinite;
    transition: all 0.3s ease;
}

@keyframes morseBlink {
    0%, 20% { opacity: 1; }
    21%, 40% { opacity: 0.3; }
    41%, 60% { opacity: 1; }
    61%, 80% { opacity: 0.3; }
    81%, 100% { opacity: 1; }
}

.btn-morse-code:hover {
    background: #001100;
    box-shadow: 0 0 25px #00ff88;
    animation-duration: 1s;
}

.btn-morse-code:active {
    transform: scale(0.98);
}`,
    js: `// Morse code button
const morseBtn = document.querySelector('.btn-morse-code');

morseBtn.addEventListener('click', function() {
    console.log('Morse code transmitted: SOS');
    
    // Decode animation
    const originalText = this.textContent;
    this.textContent = 'S O S';
    
    setTimeout(() => {
        this.textContent = originalText;
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 98: DARK DNA HELIX
// ====================================================================
btn98: {
    name: "Dark DNA Helix",
    category: "dark",
    html: `<button class="btn-dna-helix">
    DNA SEQUENCE
</button>`,
    css: `.btn-dna-helix {
    background: #000;
    color: #ff6b6b;
    border: 1px solid #ff6b6b;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-dna-helix::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(45deg, transparent 45%, #ff6b6b 50%, transparent 55%),
        linear-gradient(-45deg, transparent 45%, #4ecdc4 50%, transparent 55%);
    background-size: 25px 25px;
    animation: dnaRotate 3s linear infinite;
    opacity: 0.3;
}

@keyframes dnaRotate {
    0% { background-position: 0 0; }
    100% { background-position: 25px 25px; }
}

.btn-dna-helix:hover {
    background: #1a0000;
    box-shadow: 0 0 25px #ff6b6b;
}

.btn-dna-helix:active {
    transform: scale(0.98);
}`,
    js: `// DNA helix button
const dnaBtn = document.querySelector('.btn-dna-helix');

dnaBtn.addEventListener('click', function() {
    console.log('DNA sequence analyzed!');
    
    // Add genetic mutation effect
    this.style.animation = 'dnaMutate 0.5s ease';
    setTimeout(() => {
        this.style.animation = 'dnaRotate 3s linear infinite';
    }, 500);
});

// Add DNA mutation animation
const dnaStyle = document.createElement('style');
dnaStyle.textContent = \`
    @keyframes dnaMutate {
        0% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(180deg); }
        100% { filter: hue-rotate(360deg); }
    }
\`;
document.head.appendChild(dnaStyle);`
},

// ====================================================================
// TEMPLATE 99: DARK SOLAR SYSTEM
// ====================================================================
btn99: {
    name: "Dark Solar System",
    category: "dark",
    html: `<button class="btn-solar-system">
    SOLAR SYSTEM
</button>`,
    css: `.btn-solar-system {
    background: #000;
    color: #ffd700;
    border: 1px solid #ffd700;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-solar-system::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #ffd700;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 
        20px 0 0 3px #ff6b6b,
        40px 0 0 2px #4ecdc4,
        -20px 0 0 3px #ff6b6b,
        -40px 0 0 2px #4ecdc4;
    animation: planetOrbit 4s linear infinite;
}

@keyframes planetOrbit {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

.btn-solar-system:hover::before {
    animation-duration: 2s;
}

.btn-solar-system:hover {
    background: #1a1a00;
    box-shadow: 0 0 25px #ffd700;
}

.btn-solar-system:active {
    transform: scale(0.98);
}`,
    js: `// Solar system button
const solarBtn = document.querySelector('.btn-solar-system');

solarBtn.addEventListener('click', function() {
    console.log('Solar system exploration initiated!');
    
    // Add supernova effect
    this.style.animation = 'supernova 0.5s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});

// Add supernova animation
const supernovaStyle = document.createElement('style');
supernovaStyle.textContent = \`
    @keyframes supernova {
        0% { box-shadow: 0 0 25px #ffd700; }
        50% { box-shadow: 0 0 50px #ff6b6b, 0 0 100px #ffd700; }
        100% { box-shadow: 0 0 25px #ffd700; }
    }
\`;
document.head.appendChild(supernovaStyle);`
},

// ====================================================================
// TEMPLATE 100: DARK CHESS BOARD
// ====================================================================
btn100: {
    name: "Dark Chess Board",
    category: "dark",
    html: `<button class="btn-chess-board">
    ♛ CHESS ♛
</button>`,
    css: `.btn-chess-board {
    background: #000;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Times New Roman', serif;
    transition: all 0.3s ease;
}

.btn-chess-board::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, transparent 49%, #fff 50%, transparent 51%),
        linear-gradient(0deg, transparent 49%, #fff 50%, transparent 51%);
    background-size: 15px 15px;
    opacity: 0.2;
    animation: chessMove 10s linear infinite;
}

@keyframes chessMove {
    0% { background-position: 0 0; }
    100% { background-position: 15px 15px; }
}

.btn-chess-board:hover {
    background: #1a1a1a;
    box-shadow: 0 0 25px #fff;
}

.btn-chess-board:active {
    transform: scale(0.98);
}`,
    js: `// Chess board button
const chessBtn = document.querySelector('.btn-chess-board');

chessBtn.addEventListener('click', function() {
    console.log('Chess match started!');
    
    // Add piece move effect
    const pieces = ['♛', '♚', '♜', '♝', '♞', '♟'];
    const originalText = this.textContent;
    
    let count = 0;
    const moveInterval = setInterval(() => {
        this.textContent = pieces[count % pieces.length] + ' CHESS ' + pieces[(count + 1) % pieces.length];
        count++;
        if (count > 6) {
            clearInterval(moveInterval);
            this.textContent = originalText;
        }
    }, 200);
});`
},

// ====================================================================
// TEMPLATE 101: DARK AUDIO WAVE
// ====================================================================
btn101: {
    name: "Dark Audio Wave",
    category: "dark",
    html: `<button class="btn-audio-wave">
    AUDIO WAVE
</button>`,
    css: `.btn-audio-wave {
    background: #000;
    color: #00ffff;
    border: 1px solid #00ffff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-audio-wave::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, 
            transparent 10%, #00ffff 12%, transparent 14%,
            transparent 20%, #00ffff 22%, transparent 24%,
            transparent 30%, #00ffff 32%, transparent 34%,
            transparent 40%, #00ffff 42%, transparent 44%,
            transparent 50%, #00ffff 52%, transparent 54%,
            transparent 60%, #00ffff 62%, transparent 64%,
            transparent 70%, #00ffff 72%, transparent 74%,
            transparent 80%, #00ffff 82%, transparent 84%,
            transparent 90%, #00ffff 92%, transparent 94%
        );
    animation: audioPulse 0.5s ease-in-out infinite alternate;
    opacity: 0.3;
}

@keyframes audioPulse {
    0% { height: 30%; }
    100% { height: 80%; }
}

.btn-audio-wave:hover {
    background: #001133;
    box-shadow: 0 0 25px #00ffff;
}

.btn-audio-wave:active {
    transform: scale(0.98);
}`,
    js: `// Audio wave button
const audioBtn = document.querySelector('.btn-audio-wave');

audioBtn.addEventListener('click', function() {
    console.log('Audio wave activated!');
    
    // Add sound peak effect
    this.style.animation = 'audioPeak 0.3s ease';
    setTimeout(() => {
        this.style.animation = 'audioPulse 0.5s ease-in-out infinite alternate';
    }, 300);
});

// Add audio peak animation
const audioStyle = document.createElement('style');
audioStyle.textContent = \`
    @keyframes audioPeak {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
\`;
document.head.appendChild(audioStyle);`
},

// ====================================================================
// TEMPLATE 102: DARK RADAR SCAN
// ====================================================================
btn102: {
    name: "Dark Radar Scan",
    category: "dark",
    html: `<button class="btn-radar-scan">
    RADAR SCAN
</button>`,
    css: `.btn-radar-scan {
    background: #000;
    color: #00ff88;
    border: 1px solid #00ff88;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-radar-scan::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0deg, transparent, #00ff88, transparent);
    animation: radarRotate 2s linear infinite;
    border-radius: 50px;
}

@keyframes radarRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.btn-radar-scan:hover::before {
    animation-duration: 1s;
}

.btn-radar-scan:hover {
    background: #001100;
    box-shadow: 0 0 25px #00ff88;
}

.btn-radar-scan:active {
    transform: scale(0.98);
}`,
    js: `// Radar scan button
const radarBtn = document.querySelector('.btn-radar-scan');

radarBtn.addEventListener('click', function() {
    console.log('Radar scan initiated!');
    
    // Add target lock effect
    this.style.animation = 'targetLock 0.5s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 500);
});

// Add target lock animation
const radarStyle = document.createElement('style');
radarStyle.textContent = \`
    @keyframes targetLock {
        0% { box-shadow: 0 0 25px #00ff88; }
        50% { box-shadow: 0 0 50px #00ff88, 0 0 0 5px rgba(0, 255, 136, 0.5); }
        100% { box-shadow: 0 0 25px #00ff88; }
    }
\`;
document.head.appendChild(radarStyle);`
},

// ====================================================================
// TEMPLATE 103: DARK BARCODE
// ====================================================================
btn103: {
    name: "Dark Barcode",
    category: "dark",
    html: `<button class="btn-barcode">
    ⎸▌⎹⎸⎹▌⎸⎹⎸▌⎹
</button>`,
    css: `.btn-barcode {
    background: #000;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 24px;
    border-radius: 2px;
    font-size: 10px;
    font-weight: 900;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    letter-spacing: 2px;
    transition: all 0.3s ease;
}

.btn-barcode::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
    animation: barcodeScan 2s linear infinite;
}

@keyframes barcodeScan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.btn-barcode:hover {
    background: #1a1a1a;
    box-shadow: 0 0 25px #fff;
}

.btn-barcode:active {
    transform: scale(0.98);
}`,
    js: `// Barcode button
const barcodeBtn = document.querySelector('.btn-barcode');

barcodeBtn.addEventListener('click', function() {
    console.log('Barcode scanned!');
    
    // Add successful scan effect
    const originalText = this.textContent;
    this.textContent = 'SCANNED ✓';
    this.style.color = '#00ff88';
    
    setTimeout(() => {
        this.textContent = originalText;
        this.style.color = '#fff';
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 104: DARK FRACTAL
// ====================================================================
btn104: {
    name: "Dark Fractal",
    category: "dark",
    html: `<button class="btn-fractal">
    FRACTAL
</button>`,
    css: `.btn-fractal {
    background: #000;
    color: #bb86fc;
    border: 1px solid #bb86fc;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-fractal::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 30% 30%, #bb86fc 1px, transparent 1px),
        radial-gradient(circle at 70% 70%, #bb86fc 1px, transparent 1px),
        radial-gradient(circle at 30% 70%, #bb86fc 1px, transparent 1px),
        radial-gradient(circle at 70% 30%, #bb86fc 1px, transparent 1px);
    background-size: 25px 25px;
    animation: fractalGrow 3s ease-in-out infinite alternate;
    opacity: 0.3;
}

@keyframes fractalGrow {
    0% { background-size: 25px 25px; }
    100% { background-size: 30px 30px; }
}

.btn-fractal:hover {
    background: #1a1a1a;
    box-shadow: 0 0 25px #bb86fc;
}

.btn-fractal:active {
    transform: scale(0.98);
}`,
    js: `// Fractal button
const fractalBtn = document.querySelector('.btn-fractal');

fractalBtn.addEventListener('click', function() {
    console.log('Fractal pattern generated!');
    
    // Add infinite recursion effect
    this.style.animation = 'fractalInfinity 1s ease-in-out infinite alternate';
    setTimeout(() => {
        this.style.animation = 'fractalGrow 3s ease-in-out infinite alternate';
    }, 2000);
});

// Add fractal infinity animation
const fractalStyle = document.createElement('style');
fractalStyle.textContent = \`
    @keyframes fractalInfinity {
        0% { background-size: 25px 25px; }
        50% { background-size: 35px 35px; }
        100% { background-size: 25px 25px; }
    }
\`;
document.head.appendChild(fractalStyle);`
},

// ====================================================================
// TEMPLATE 105: DARK QR CODE
// ====================================================================
btn105: {
    name: "Dark QR Code",
    category: "dark",
    html: `<button class="btn-qr-code">
    ⎕ QR CODE ⎕
</button>`,
    css: `.btn-qr-code {
    background: #000;
    color: #fff;
    border: 1px solid #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Courier New', monospace;
    letter-spacing: 3px;
    transition: all 0.3s ease;
}

.btn-qr-code::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, 
            #fff 10%, transparent 12%, #fff 14%, transparent 16%,
            #fff 20%, transparent 22%, #fff 24%, transparent 26%,
            #fff 30%, transparent 32%, #fff 34%, transparent 36%,
            #fff 40%, transparent 42%, #fff 44%, transparent 46%,
            #fff 50%, transparent 52%, #fff 54%, transparent 56%,
            #fff 60%, transparent 62%, #fff 64%, transparent 66%,
            #fff 70%, transparent 72%, #fff 74%, transparent 76%,
            #fff 80%, transparent 82%, #fff 84%, transparent 86%,
            #fff 90%, transparent 92%, #fff 94%, transparent 96%
        ),
        linear-gradient(0deg, 
            #fff 10%, transparent 12%, #fff 14%, transparent 16%,
            #fff 20%, transparent 22%, #fff 24%, transparent 26%,
            #fff 30%, transparent 32%, #fff 34%, transparent 36%,
            #fff 40%, transparent 42%, #fff 44%, transparent 46%,
            #fff 50%, transparent 52%, #fff 54%, transparent 56%,
            #fff 60%, transparent 62%, #fff 64%, transparent 66%,
            #fff 70%, transparent 72%, #fff 74%, transparent 76%,
            #fff 80%, transparent 82%, #fff 84%, transparent 86%,
            #fff 90%, transparent 92%, #fff 94%, transparent 96%
        );
    opacity: 0.2;
    animation: qrScan 3s linear infinite;
}

@keyframes qrScan {
    0% { background-position: 0 0; }
    100% { background-position: 25px 25px; }
}

.btn-qr-code:hover {
    background: #1a1a1a;
    box-shadow: 0 0 25px #fff;
}

.btn-qr-code:active {
    transform: scale(0.98);
}`,
    js: `// QR code button
const qrBtn = document.querySelector('.btn-qr-code');

qrBtn.addEventListener('click', function() {
    console.log('QR code scanned!');
    
    // Add successful decode effect
    const originalText = this.textContent;
    this.textContent = 'DECODED ✓';
    this.style.color = '#00ff88';
    
    setTimeout(() => {
        this.textContent = originalText;
        this.style.color = '#fff';
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 106: DARK PIXEL ART
// ====================================================================
btn106: {
    name: "Dark Pixel Art",
    category: "dark",
    html: `<button class="btn-pixel-art">
    PIXEL ART
</button>`,
    css: `.btn-pixel-art {
    background: #000;
    color: #ff6b6b;
    border: 2px solid #ff6b6b;
    padding: 12px 24px;
    border-radius: 0;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    image-rendering: pixelated;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
}

.btn-pixel-art::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, transparent 49%, #ff6b6b 50%, transparent 51%) 0 0 / 8px 8px,
        linear-gradient(0deg, transparent 49%, #ff6b6b 50%, transparent 51%) 0 0 / 8px 8px;
    opacity: 0.3;
    animation: pixelGlitch 0.5s steps(2) infinite;
}

@keyframes pixelGlitch {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(1px, 1px); }
    50% { transform: translate(-1px, -1px); }
    75% { transform: translate(1px, -1px); }
}

.btn-pixel-art:hover {
    background: #1a0000;
    box-shadow: 
        0 0 15px #ff6b6b,
        inset 0 0 15px rgba(255, 107, 107, 0.2);
}

.btn-pixel-art:active {
    transform: scale(0.98);
}`,
    js: `// Pixel art button
const pixelBtn = document.querySelector('.btn-pixel-art');

pixelBtn.addEventListener('click', function() {
    console.log('Pixel art created!');
    
    // Add 8-bit game effect
    this.style.animation = 'pixelJump 0.3s steps(2)';
    setTimeout(() => {
        this.style.animation = 'pixelGlitch 0.5s steps(2) infinite';
    }, 300);
});

// Add pixel jump animation
const pixelStyle = document.createElement('style');
pixelStyle.textContent = \`
    @keyframes pixelJump {
        0% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
        100% { transform: translateY(0); }
    }
\`;
document.head.appendChild(pixelStyle);`
},
// ====================================================================
// TEMPLATE 107: DARK TWITTER BUTTON
// ====================================================================
btn107: {
    name: "Dark Twitter Button",
    category: "dark",
    html: `<button class="btn-dark-twitter">
    <i class="fab fa-twitter"></i>
    Follow
</button>`,
    css: `.btn-dark-twitter {
    background: #1da1f2;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
    box-shadow: 0 4px 15px rgba(29, 161, 242, 0.3);
}

.btn-dark-twitter:hover {
    background: #1a91da;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(29, 161, 242, 0.5);
}

.btn-dark-twitter i {
    font-size: 16px;
}`,
    js: `// Twitter button with click animation
const twitterBtn = document.querySelector('.btn-dark-twitter');

twitterBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95) translateY(-2px)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 108: DARK INSTAGRAM BUTTON
// ====================================================================
btn108: {
    name: "Dark Instagram Button",
    category: "dark",
    html: `<button class="btn-dark-instagram">
    <i class="fab fa-instagram"></i>
    Follow
</button>`,
    css: `.btn-dark-instagram {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-dark-instagram::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.btn-dark-instagram:hover::before {
    left: 100%;
}

.btn-dark-instagram:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(220, 39, 67, 0.4);
}

.btn-dark-instagram i {
    font-size: 16px;
}`,
    js: `// Instagram button with gradient animation
const instagramBtn = document.querySelector('.btn-dark-instagram');

instagramBtn.addEventListener('click', function() {
    this.style.background = 'linear-gradient(45deg, #bc1888, #cc2366, #dc2743, #e6683c, #f09433)';
    setTimeout(() => {
        this.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 109: DARK FACEBOOK BUTTON
// ====================================================================
btn109: {
    name: "Dark Facebook Button",
    category: "dark",
    html: `<button class="btn-dark-facebook">
    <i class="fab fa-facebook-f"></i>
    Like
</button>`,
    css: `.btn-dark-facebook {
    background: #1877f2;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-dark-facebook:hover {
    background: #166fe5;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(24, 119, 242, 0.4);
}

.btn-dark-facebook::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.3s, height 0.3s;
}

.btn-dark-facebook:active::after {
    width: 100px;
    height: 100px;
}

.btn-dark-facebook i {
    font-size: 16px;
}`,
    js: `// Facebook button with ripple effect
const facebookBtn = document.querySelector('.btn-dark-facebook');

facebookBtn.addEventListener('click', function(e) {
    // Ripple effect is handled in CSS
    console.log('Facebook button clicked!');
});`
},

// ====================================================================
// TEMPLATE 110: DARK LINKEDIN BUTTON
// ====================================================================
btn110: {
    name: "Dark LinkedIn Button",
    category: "dark",
    html: `<button class="btn-dark-linkedin">
    <i class="fab fa-linkedin-in"></i>
    Connect
</button>`,
    css: `.btn-dark-linkedin {
    background: #0077b5;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
}

.btn-dark-linkedin:hover {
    background: #00669c;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0, 119, 181, 0.4);
}

.btn-dark-linkedin i {
    font-size: 16px;
}`,
    js: `// LinkedIn button with professional animation
const linkedinBtn = document.querySelector('.btn-dark-linkedin');

linkedinBtn.addEventListener('click', function() {
    this.style.transform = 'scale(1.02)';
    setTimeout(() => {
        this.style.transform = 'scale(1.05)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 111: DARK GITHUB BUTTON
// ====================================================================
btn111: {
    name: "Dark GitHub Button",
    category: "dark",
    html: `<button class="btn-dark-github">
    <i class="fab fa-github"></i>
    Star
</button>`,
    css: `.btn-dark-github {
    background: #6e5494;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
}

.btn-dark-github:hover {
    background: #5d447c;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(110, 84, 148, 0.5);
}

.btn-dark-github i {
    font-size: 16px;
}`,
    js: `// GitHub button with star animation
const githubBtn = document.querySelector('.btn-dark-github');

githubBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        icon.style.transform = 'scale(1)';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 112: DARK YOUTUBE BUTTON
// ====================================================================
btn112: {
    name: "Dark YouTube Button",
    category: "dark",
    html: `<button class="btn-dark-youtube">
    <i class="fab fa-youtube"></i>
    Subscribe
</button>`,
    css: `.btn-dark-youtube {
    background: #ff0000;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-dark-youtube:hover {
    background: #e60000;
    animation: youtubePulse 1.5s infinite;
}

@keyframes youtubePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4); }
    50% { box-shadow: 0 0 0 10px rgba(255, 0, 0, 0); }
}

.btn-dark-youtube i {
    font-size: 16px;
}`,
    js: `// YouTube button with pulse animation
const youtubeBtn = document.querySelector('.btn-dark-youtube');

youtubeBtn.addEventListener('mouseenter', function() {
    this.style.animation = 'youtubePulse 1.5s infinite';
});

youtubeBtn.addEventListener('mouseleave', function() {
    this.style.animation = 'none';
});`
},

// ====================================================================
// TEMPLATE 113: DARK DISCORD BUTTON
// ====================================================================
btn113: {
    name: "Dark Discord Button",
    category: "dark",
    html: `<button class="btn-dark-discord">
    <i class="fab fa-discord"></i>
    Join Server
</button>`,
    css: `.btn-dark-discord {
    background: #5865f2;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
}

.btn-dark-discord:hover {
    background: #4752c4;
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(88, 101, 242, 0.4);
}

.btn-dark-discord i {
    font-size: 16px;
}`,
    js: `// Discord button with hover effects
const discordBtn = document.querySelector('.btn-dark-discord');

discordBtn.addEventListener('click', function() {
    this.style.background = '#7289da';
    setTimeout(() => {
        this.style.background = '#5865f2';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 114: DARK TIKTOK BUTTON
// ====================================================================
btn114: {
    name: "Dark TikTok Button",
    category: "dark",
    html: `<button class="btn-dark-tiktok">
    <i class="fab fa-tiktok"></i>
    Follow
</button>`,
    css: `.btn-dark-tiktok {
    background: #000000;
    color: #00f2ea;
    border: 2px solid #00f2ea;
    padding: 10px 22px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-dark-tiktok::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 242, 234, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-dark-tiktok:hover::before {
    left: 100%;
}

.btn-dark-tiktok:hover {
    background: #00f2ea;
    color: #000000;
    box-shadow: 0 0 20px #00f2ea;
}

.btn-dark-tiktok i {
    font-size: 16px;
}`,
    js: `// TikTok button with neon effect
const tiktokBtn = document.querySelector('.btn-dark-tiktok');

tiktokBtn.addEventListener('click', function() {
    this.style.boxShadow = '0 0 30px #00f2ea, 0 0 40px #00f2ea';
    setTimeout(() => {
        this.style.boxShadow = '0 0 20px #00f2ea';
    }, 200);
});`
},

// ====================================================================
// TEMPLATE 115: DARK REDDIT BUTTON
// ====================================================================
btn115: {
    name: "Dark Reddit Button",
    category: "dark",
    html: `<button class="btn-dark-reddit">
    <i class="fab fa-reddit-alien"></i>
    Join
</button>`,
    css: `.btn-dark-reddit {
    background: #ff4500;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
}

.btn-dark-reddit:hover {
    background: #e63e00;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 69, 0, 0.4);
}

.btn-dark-reddit i {
    font-size: 16px;
}`,
    js: `// Reddit button with upvote animation
const redditBtn = document.querySelector('.btn-dark-reddit');

redditBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.style.transform = 'translateY(-5px)';
    setTimeout(() => {
        icon.style.transform = 'translateY(0)';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 116: DARK WHATSAPP BUTTON
// ====================================================================
btn116: {
    name: "Dark WhatsApp Button",
    category: "dark",
    html: `<button class="btn-dark-whatsapp">
    <i class="fab fa-whatsapp"></i>
    Message
</button>`,
    css: `.btn-dark-whatsapp {
    background: #25d366;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: inherit;
}

.btn-dark-whatsapp:hover {
    background: #20bd5c;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(37, 211, 102, 0.4);
}

.btn-dark-whatsapp i {
    font-size: 16px;
}`,
    js: `// WhatsApp button with message animation
const whatsappBtn = document.querySelector('.btn-dark-whatsapp');

whatsappBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95) translateY(-2px)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 150);
});`
},
// ====================================================================
// TEMPLATE 117: 3D HOVER BUTTON
// ====================================================================
btn117: {
    name: "3D Hover Button",
    category: "animated",
    html: `<button class="btn-3d-hover">
    3D Hover Effect
</button>`,
    css: `.btn-3d-hover {
    background: linear-gradient(145deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    box-shadow: 
        0 8px 0 #5a67d8,
        0 12px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    top: 0;
}

.btn-3d-hover:hover {
    top: 4px;
    box-shadow: 
        0 4px 0 #5a67d8,
        0 6px 6px rgba(0, 0, 0, 0.2);
}

.btn-3d-hover:active {
    top: 8px;
    box-shadow: 
        0 0 0 #5a67d8,
        0 2px 4px rgba(0, 0, 0, 0.2);
}`,
    js: `// 3D button with depth effect
const btn3d = document.querySelector('.btn-3d-hover');

btn3d.addEventListener('click', function() {
    this.style.background = 'linear-gradient(145deg, #764ba2, #667eea)';
    setTimeout(() => {
        this.style.background = 'linear-gradient(145deg, #667eea, #764ba2)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 118: LIQUID FILL BUTTON
// ====================================================================
btn118: {
    name: "Liquid Fill Button",
    category: "animated",
    html: `<button class="btn-liquid-fill">
    Liquid Fill
</button>`,
    css: `.btn-liquid-fill {
    background: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
}

.btn-liquid-fill::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: #3b82f6;
    transition: height 0.4s ease;
    z-index: -1;
    border-radius: 0 0 6px 6px;
}

.btn-liquid-fill:hover::before {
    height: 100%;
}

.btn-liquid-fill:hover {
    color: white;
    transform: translateY(-2px);
}`,
    js: `// Liquid fill button
const liquidBtn = document.querySelector('.btn-liquid-fill');

liquidBtn.addEventListener('click', function() {
    this.style.transform = 'translateY(-1px)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 119: MAGNETIC CURSOR BUTTON
// ====================================================================
btn119: {
    name: "Magnetic Cursor Button",
    category: "animated",
    html: `<button class="btn-magnetic">
    Magnetic Cursor
</button>`,
    css: `.btn-magnetic {
    background: #10b981;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-magnetic:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
}`,
    js: `// Magnetic cursor effect
const magneticBtn = document.querySelector('.btn-magnetic');

document.addEventListener('mousemove', function(e) {
    const rect = magneticBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (distance < 100) {
        const moveX = distanceX * 0.1;
        const moveY = distanceY * 0.1;
        magneticBtn.style.transform = \`translate(\${moveX}px, \${moveY}px) scale(1.1)\`;
    } else {
        magneticBtn.style.transform = 'scale(1)';
    }
});`
},

// ====================================================================
// TEMPLATE 120: PARTICLE EXPLOSION BUTTON
// ====================================================================
btn120: {
    name: "Particle Explosion Button",
    category: "animated",
    html: `<button class="btn-particle">
    Particle Effect
</button>`,
    css: `.btn-particle {
    background: #ec4899;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-particle::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.btn-particle:active::before {
    width: 200px;
    height: 200px;
}`,
    js: `// Particle explosion effect
const particleBtn = document.querySelector('.btn-particle');

particleBtn.addEventListener('click', function(e) {
    // Create particles
    for (let i = 0; i < 10; i++) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
        position: fixed;
        top: \${y}px;
        left: \${x}px;
        width: 4px;
        height: 4px;
        background: #ec4899;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    \`;
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = Math.random() * Math.PI * 2;
    const speed = 2 + Math.random() * 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    
    let opacity = 1;
    const animate = () => {
        particle.style.transform = \`translate(\${vx * 10}px, \${vy * 10}px)\`;
        particle.style.opacity = opacity;
        opacity -= 0.02;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            particle.remove();
        }
    };
    animate();
}`
},

// ====================================================================
// TEMPLATE 121: GLITCH EFFECT BUTTON
// ====================================================================
btn121: {
    name: "Glitch Effect Button",
    category: "dark",
    html: `<button class="btn-glitch">
    Glitch Effect
</button>`,
    css: `.btn-glitch {
    background: #000;
    color: #00ff88;
    border: 2px solid #00ff88;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
    position: relative;
}

.btn-glitch:hover {
    animation: glitch 0.3s linear;
    text-shadow: 
        2px 0 #ff0080,
        -2px 0 #0080ff;
}

@keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}`,
    js: `// Glitch effect button
const glitchBtn = document.querySelector('.btn-glitch');

glitchBtn.addEventListener('mouseenter', function() {
    this.style.animation = 'glitch 0.3s linear';
});

glitchBtn.addEventListener('animationend', function() {
    this.style.animation = '';
});`
},

// ====================================================================
// TEMPLATE 122: NEON SIGN BUTTON
// ====================================================================
btn122: {
    name: "Neon Sign Button",
    category: "dark",
    html: `<button class="btn-neon-sign">
    Neon Sign
</button>`,
    css: `.btn-neon-sign {
    background: transparent;
    color: #ff0080;
    border: 3px solid #ff0080;
    padding: 12px 24px;
    border-radius: 0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
    text-shadow: 0 0 5px #ff0080;
    box-shadow: 
        0 0 10px #ff0080,
        inset 0 0 10px rgba(255, 0, 128, 0.1);
}

.btn-neon-sign:hover {
    animation: neonFlicker 1s infinite alternate;
    background: #ff0080;
    color: #000;
}

@keyframes neonFlicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        box-shadow: 
            0 0 10px #ff0080,
            0 0 20px #ff0080,
            inset 0 0 10px rgba(255, 0, 128, 0.1);
    }
    20%, 24%, 55% {
        box-shadow: 
            0 0 5px #ff0080,
            0 0 10px #ff0080,
            inset 0 0 5px rgba(255, 0, 128, 0.1);
    }
}`,
    js: `// Neon sign button with flicker
const neonBtn = document.querySelector('.btn-neon-sign');

neonBtn.addEventListener('click', function() {
    this.style.animation = 'neonFlicker 0.5s infinite alternate';
    setTimeout(() => {
        this.style.animation = 'neonFlicker 1s infinite alternate';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 123: MORPHING GRADIENT BUTTON
// ====================================================================
btn123: {
    name: "Morphing Gradient Button",
    category: "gradient",
    html: `<button class="btn-morph-gradient">
    Morph Gradient
</button>`,
    css: `.btn-morph-gradient {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    animation: gradientShift 3s ease infinite;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-morph-gradient:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(35, 166, 213, 0.4);
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
    js: `// Morphing gradient button
const morphGradientBtn = document.querySelector('.btn-morph-gradient');

morphGradientBtn.addEventListener('click', function() {
    this.style.animationDuration = '1s';
    setTimeout(() => {
        this.style.animationDuration = '3s';
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 124: GLASS REFLECTION BUTTON
// ====================================================================
btn124: {
    name: "Glass Reflection Button",
    category: "glassmorphism",
    html: `<button class="btn-glass-reflection">
    Glass Reflection
</button>`,
    css: `.btn-glass-reflection {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    color: #7c3aed;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-glass-reflection::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.6s ease;
}

.btn-glass-reflection:hover::before {
    transform: rotate(45deg) translate(50%, 50%);
}

.btn-glass-reflection:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
    js: `// Glass reflection button
const glassReflectionBtn = document.querySelector('.btn-glass-reflection');

glassReflectionBtn.addEventListener('click', function() {
    this.style.backdropFilter = 'blur(15px)';
    setTimeout(() => {
        this.style.backdropFilter = 'blur(10px)';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 125: HOLOGRAPHIC BUTTON
// ====================================================================
btn125: {
    name: "Holographic Button",
    category: "animated",
    html: `<button class="btn-holographic">
    Holographic
</button>`,
    css: `.btn-holographic {
    background: linear-gradient(45deg, 
        #ff0000, #ff8000, #ffff00, #00ff00, 
        #00ffff, #0000ff, #8000ff, #ff0080
    );
    background-size: 800% 800%;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    animation: holographic 4s linear infinite;
    transition: all 0.3s ease;
    font-family: inherit;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

@keyframes holographic {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
}

.btn-holographic:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 0, 128, 0.4);
}`,
    js: `// Holographic button
const holographicBtn = document.querySelector('.btn-holographic');

holographicBtn.addEventListener('click', function() {
    this.style.animationDuration = '2s';
    setTimeout(() => {
        this.style.animationDuration = '4s';
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 126: BINARY CODE BUTTON
// ====================================================================
btn126: {
    name: "Binary Code Button",
    category: "dark",
    html: `<button class="btn-binary">
    01001101 01100101
</button>`,
    css: `.btn-binary {
    background: #000;
    color: #00ff41;
    border: 1px solid #00ff41;
    padding: 12px 24px;
    border-radius: 2px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
    position: relative;
    overflow: hidden;
}

.btn-binary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.1), transparent);
    animation: binaryScan 2s linear infinite;
}

@keyframes binaryScan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.btn-binary:hover {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 20px #00ff41;
}`,
    js: `// Binary code button
const binaryBtn = document.querySelector('.btn-binary');

binaryBtn.addEventListener('click', function() {
    const originalText = this.textContent;
    // Create binary flicker effect
    let count = 0;
    const interval = setInterval(() => {
        this.textContent = this.textContent.split('').map(char => 
            Math.random() > 0.5 ? (char === '0' ? '1' : '0') : char
        ).join('');
        count++;
        if (count > 10) {
            clearInterval(interval);
            this.textContent = originalText;
        }
    }, 50);
});`
},
// ====================================================================
// TEMPLATE 127: OUTLINE DOUBLE BORDER
// ====================================================================
btn127: {
    name: "Outline Double Border",
    category: "outline",
    html: `<button class="btn-outline-double">
    Double Border
</button>`,
    css: `.btn-outline-double {
    background: transparent;
    color: #8b5cf6;
    border: 2px solid #8b5cf6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-double::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid #ec4899;
    border-radius: 12px;
    opacity: 0;
    transition: all 0.4s ease;
}

.btn-outline-double:hover::before {
    opacity: 1;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
}

.btn-outline-double:hover {
    background: linear-gradient(45deg, #8b5cf6, #ec4899);
    color: white;
    transform: translateY(-2px);
}`,
    js: `// Double border outline button
const doubleBorderBtn = document.querySelector('.btn-outline-double');

doubleBorderBtn.addEventListener('click', function() {
    this.style.transform = 'translateY(-1px) scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'translateY(-2px)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 128: OUTLINE CORNER GROW
// ====================================================================
btn128: {
    name: "Outline Corner Grow",
    category: "outline",
    html: `<button class="btn-outline-corner">
    <span>Corner Grow</span>
</button>`,
    css: `.btn-outline-corner {
    background: transparent;
    color: #10b981;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    font-family: inherit;
}

.btn-outline-corner::before,
.btn-outline-corner::after {
    content: '';
    position: absolute;
    background: #10b981;
    transition: all 0.4s ease;
}

.btn-outline-corner::before {
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
}

.btn-outline-corner::after {
    bottom: 0;
    right: 0;
    width: 2px;
    height: 0;
}

.btn-outline-corner:hover::before,
.btn-outline-corner:hover::after {
    height: 100%;
}

.btn-outline-corner span::before,
.btn-outline-corner span::after {
    content: '';
    position: absolute;
    background: #10b981;
    transition: all 0.4s ease;
}

.btn-outline-corner span::before {
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
}

.btn-outline-corner span::after {
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
}

.btn-outline-corner:hover span::before,
.btn-outline-corner:hover span::after {
    width: 100%;
}

.btn-outline-corner:hover {
    color: #10b981;
    transform: translateY(-2px);
}`,
    js: `// Corner grow outline button
const cornerGrowBtn = document.querySelector('.btn-outline-corner');

cornerGrowBtn.addEventListener('click', function() {
    this.style.color = '#059669';
    setTimeout(() => {
        this.style.color = '#10b981';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 129: OUTLINE DOTTED SPIN
// ====================================================================
btn129: {
    name: "Outline Dotted Spin",
    category: "outline",
    html: `<button class="btn-outline-dotted">
    Dotted Spin
</button>`,
    css: `.btn-outline-dotted {
    background: transparent;
    color: #f59e0b;
    border: 2px dotted #f59e0b;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-dotted:hover {
    border-style: solid;
    border-color: #d97706;
    color: #d97706;
    transform: rotate(5deg) scale(1.05);
    box-shadow: 0 5px 15px rgba(245, 158, 11, 0.3);
}`,
    js: `// Dotted spin outline button
const dottedSpinBtn = document.querySelector('.btn-outline-dotted');

dottedSpinBtn.addEventListener('click', function() {
    this.style.transform = 'rotate(-5deg) scale(1.02)';
    setTimeout(() => {
        this.style.transform = 'rotate(5deg) scale(1.05)';
    }, 150);
});`
},

// ====================================================================
// TEMPLATE 130: OUTLINE SHAKE
// ====================================================================
btn130: {
    name: "Outline Shake",
    category: "outline",
    html: `<button class="btn-outline-shake">
    Outline Shake
</button>`,
    css: `.btn-outline-shake {
    background: transparent;
    color: #ef4444;
    border: 2px solid #ef4444;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
}

.btn-outline-shake:hover {
    animation: outlineShake 0.5s ease;
    background: #ef4444;
    color: white;
}

@keyframes outlineShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-3px); }
}`,
    js: `// Shake outline button
const shakeBtn = document.querySelector('.btn-outline-shake');

shakeBtn.addEventListener('click', function() {
    this.style.animation = 'outlineShake 0.3s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 131: OUTLINE GRADIENT BORDER
// ====================================================================
btn131: {
    name: "Outline Gradient Border",
    category: "outline",
    html: `<button class="btn-outline-gradient-border">
    Gradient Border
</button>`,
    css: `.btn-outline-gradient-border {
    background: transparent;
    color: #6366f1;
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    background-clip: padding-box;
    font-family: inherit;
}

.btn-outline-gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #6366f1, #ec4899, #f59e0b, #10b981);
    background-size: 400% 400%;
    border-radius: 10px;
    z-index: -1;
    animation: gradientRotate 3s linear infinite;
}

.btn-outline-gradient-border:hover {
    color: white;
    background: #6366f1;
}

@keyframes gradientRotate {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
    js: `// Gradient border outline button
const gradientBorderBtn = document.querySelector('.btn-outline-gradient-border');

gradientBorderBtn.addEventListener('click', function() {
    this.style.animationDuration = '1s';
    setTimeout(() => {
        this.style.animationDuration = '3s';
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 132: OUTLINE SPLIT
// ====================================================================
btn132: {
    name: "Outline Split",
    category: "outline",
    html: `<button class="btn-outline-split">
    Outline Split
</button>`,
    css: `.btn-outline-split {
    background: transparent;
    color: #8b5cf6;
    border: 2px solid #8b5cf6;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-split::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
    transition: left 0.5s ease;
}

.btn-outline-split:hover::before {
    left: 100%;
}

.btn-outline-split:hover {
    border-color: #7c3aed;
    color: #7c3aed;
    box-shadow: 
        0 0 0 1px #8b5cf6,
        0 0 0 3px #7c3aed;
}`,
    js: `// Split outline button
const splitBtn = document.querySelector('.btn-outline-split');

splitBtn.addEventListener('click', function() {
    this.style.boxShadow = '0 0 0 2px #8b5cf6, 0 0 0 4px #7c3aed';
    setTimeout(() => {
        this.style.boxShadow = '0 0 0 1px #8b5cf6, 0 0 0 3px #7c3aed';
    }, 100);
});`
},

// ====================================================================
// TEMPLATE 133: OUTLINE BOUNCE
// ====================================================================
btn133: {
    name: "Outline Bounce",
    category: "outline",
    html: `<button class="btn-outline-bounce">
    Outline Bounce
</button>`,
    css: `.btn-outline-bounce {
    background: transparent;
    color: #06b6d4;
    border: 2px solid #06b6d4;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    font-family: inherit;
}

.btn-outline-bounce:hover {
    animation: outlineBounce 0.6s ease;
    background: #06b6d4;
    color: white;
    transform: translateY(-4px);
}

@keyframes outlineBounce {
    0%, 20%, 60%, 100% { transform: translateY(-4px); }
    40% { transform: translateY(-8px); }
    80% { transform: translateY(-6px); }
}`,
    js: `// Bounce outline button
const bounceBtn = document.querySelector('.btn-outline-bounce');

bounceBtn.addEventListener('click', function() {
    this.style.animation = 'outlineBounce 0.4s ease';
    setTimeout(() => {
        this.style.animation = '';
    }, 400);
});`
},

// ====================================================================
// TEMPLATE 134: OUTLINE WAVE
// ====================================================================
btn134: {
    name: "Outline Wave",
    category: "outline",
    html: `<button class="btn-outline-wave">
    Outline Wave
</button>`,
    css: `.btn-outline-wave {
    background: transparent;
    color: #ec4899;
    border: 2px solid #ec4899;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
    font-family: inherit;
}

.btn-outline-wave::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(236, 72, 153, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-outline-wave:hover::before {
    left: 100%;
}

.btn-outline-wave:hover {
    border-color: #db2777;
    color: #db2777;
    box-shadow: 0 0 15px rgba(236, 72, 153, 0.3);
}`,
    js: `// Wave outline button
const waveBtn = document.querySelector('.btn-outline-wave');

waveBtn.addEventListener('click', function() {
    this.style.borderColor = '#be185d';
    setTimeout(() => {
        this.style.borderColor = '#ec4899';
    }, 300);
});`
},

// ====================================================================
// TEMPLATE 135: OUTLINE NEON PULSE
// ====================================================================
btn135: {
    name: "Outline Neon Pulse",
    category: "outline",
    html: `<button class="btn-outline-neon-pulse">
    Neon Pulse
</button>`,
    css: `.btn-outline-neon-pulse {
    background: transparent;
    color: #00ff88;
    border: 2px solid #00ff88;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    font-family: inherit;
    text-shadow: 0 0 5px #00ff88;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
}

.btn-outline-neon-pulse:hover {
    animation: neonPulse 1s infinite alternate;
    background: #00ff88;
    color: #000;
    border-color: #00ff88;
}

@keyframes neonPulse {
    0% {
        box-shadow: 
            0 0 10px #00ff88,
            0 0 20px #00ff88,
            0 0 30px #00ff88;
    }
    100% {
        box-shadow: 
            0 0 5px #00ff88,
            0 0 10px #00ff88,
            0 0 15px #00ff88;
    }
}`,
    js: `// Neon pulse outline button
const neonPulseBtn = document.querySelector('.btn-outline-neon-pulse');

neonPulseBtn.addEventListener('click', function() {
    this.style.animation = 'neonPulse 0.5s infinite alternate';
    setTimeout(() => {
        this.style.animation = 'neonPulse 1s infinite alternate';
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 136: OUTLINE REVEAL
// ====================================================================
btn136: {
    name: "Outline Reveal",
    category: "outline",
    html: `<button class="btn-outline-reveal">
    Outline Reveal
</button>`,
    css: `.btn-outline-reveal {
    background: transparent;
    color: #3b82f6;
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    position: relative;
    font-family: inherit;
}

.btn-outline-reveal::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 2px solid #3b82f6;
    border-radius: 10px;
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    transition: clip-path 0.6s ease;
}

.btn-outline-reveal:hover::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

.btn-outline-reveal:hover {
    color: #3b82f6;
    transform: translateY(-2px);
}`,
    js: `// Reveal outline button
const revealBtn = document.querySelector('.btn-outline-reveal');

revealBtn.addEventListener('click', function() {
    this.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    setTimeout(() => {
        this.style.clipPath = '';
    }, 600);
});`
},

};

// ====================================================================
// MAIN FUNCTIONALITY - BUTTON TEMPLATES GALLERY
// ====================================================================

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
            if (buttonCodes[templateId]) {
                currentTemplate = buttonCodes[templateId];
                
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
        // Hide any existing notification first
        copyNotification.style.display = 'none';
        
        // Force reflow
        void copyNotification.offsetWidth;
        
        // Show notification
        copyNotification.style.display = 'block';
        
        // Hide after 2 seconds
        setTimeout(() => {
            copyNotification.style.display = 'none';
        }, 2000);
    }

    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
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
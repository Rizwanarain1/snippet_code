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
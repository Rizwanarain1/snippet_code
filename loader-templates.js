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
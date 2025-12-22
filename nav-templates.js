// Extended template code data with 9 navigation templates
const templateCodes = {
    
    // ====================================================================
    // TEMPLATE 1: GLASSMORPHISM NAVIGATION
    // Features: Glass effect, gradient buttons, hover animations
    // Category: Glassmorphism
    // ====================================================================
    nav1: {
        name: "Glassmorphism Navigation",
        category: "glassmorphism",
        html: `<nav class="glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-cube"></i>
                BrandName
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <div class="nav-actions">
            <button class="btn-primary">Get Started</button>
        </div>
    </div>
</nav>`,
        css: `.glass-navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #7c3aed;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-primary {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
}

.btn-primary:hover {
    transform: translateY(-2px);
}`,
        js: `// Mobile menu functionality can be added here`
    },

    // ====================================================================
    // TEMPLATE 2: MINIMAL NAVIGATION  
    // Features: Clean design, green accent, simple hover effects
    // Category: Minimal
    // ====================================================================
    nav2: {
        name: "Minimal Navigation",
        category: "minimal",
        html: `<nav class="minimal-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-leaf"></i>
                Minimal
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.minimal-navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 1rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #10b981;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #10b981;
}`,
        js: `// No JavaScript required for this navigation`
    },

    // ====================================================================
    // TEMPLATE 3: DARK SIDEBAR
    // Features: Dark theme, gradient background, active state indicator
    // Category: Sidebar
    // ====================================================================
    nav3: {
        name: "Dark Sidebar",
        category: "sidebar",
        html: `<div class="dark-sidebar">
    <div class="sidebar-header">
        <h2>Dashboard</h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-users"></i>
                <span>Users</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li>
    </ul>
</div>`,
        css: `.dark-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    padding: 25px 0;
    border-radius: 16px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.2);
    color: white;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
        js: `// No JavaScript required for this sidebar`
    },

    // ====================================================================
    // TEMPLATE 4: MODERN NAVIGATION
    // Features: Dark background, yellow accent, dual buttons
    // Category: Modern
    // ====================================================================
    nav4: {
        name: "Modern Navigation",
        category: "modern",
        html: `<nav class="modern-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-rocket"></i>
                ModernApp
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <div class="nav-actions">
            <button class="btn-outline">Login</button>
            <button class="btn-primary">Sign Up</button>
        </div>
    </div>
</nav>`,
        css: `.modern-navbar {
    background: #1e293b;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #fbbf24;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #fbbf24;
}

.nav-actions {
    display: flex;
    gap: 1rem;
}

.btn-outline {
    background: transparent;
    border: 1px solid #cbd5e1;
    color: #cbd5e1;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-outline:hover {
    border-color: #fbbf24;
    color: #fbbf24;
}

.btn-primary {
    background: #fbbf24;
    color: #1e293b;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover {
    background: #f59e0b;
    transform: translateY(-2px);
}`,
        js: `// No JavaScript required for this navigation`
    },

    // ====================================================================
    // TEMPLATE 5: DARK NAVIGATION
    // Features: Deep dark theme, purple gradient button
    // Category: Dark
    // ====================================================================
    nav5: {
        name: "Dark Navigation",
        category: "dark",
        html: `<nav class="dark-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-moon"></i>
                DarkApp
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="nav-btn">Get Started</button>
    </div>
</nav>`,
        css: `.dark-navbar {
    background: #0f172a;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #8b5cf6;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #8b5cf6;
}

.nav-btn {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
}

.nav-btn:hover {
    transform: translateY(-2px);
}`,
        js: `// No JavaScript required for this navigation`
    },

    // ====================================================================
    // TEMPLATE 6: GRADIENT NAVIGATION
    // Features: Purple to blue gradient background
    // Category: Modern
    // ====================================================================
    nav6: {
        name: "Gradient Navigation",
        category: "modern",
        html: `<nav class="gradient-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-palette"></i>
                Gradient
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Solutions</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.gradient-navbar {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: white;
}`,
        js: `// No JavaScript required for this navigation`
    },

    // ====================================================================
    // TEMPLATE 7: CENTERED NAVIGATION
    // Features: Centered layout, vertical arrangement
    // Category: Minimal
    // ====================================================================
    nav7: {
        name: "Centered Navigation",
        category: "minimal",
        html: `<nav class="centered-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Centered</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.centered-navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 1rem 0;
}

.nav-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #7c3aed;
}`,
        js: `// No JavaScript required for this navigation`
    },

    // ====================================================================
    // TEMPLATE 8: TRANSPARENT NAVIGATION
    // Features: Transparent background, absolute positioning
    // Category: Modern
    // ====================================================================
    nav8: {
        name: "Transparent Navigation",
        category: "modern",
        html: `<nav class="transparent-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Transparent</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.transparent-navbar {
    background: transparent;
    padding: 1.5rem 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: white;
}`,
        js: `// No JavaScript required for this navigation`
    },

    // ====================================================================
    // TEMPLATE 9: MOBILE NAVIGATION
    // Features: Hamburger menu, responsive design
    // Category: Modern
    // ====================================================================
    nav9: {
        name: "Mobile Navigation",
        category: "modern",
        html: `<nav class="mobile-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Mobile</a>
        </div>
        <button class="nav-hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.mobile-navbar {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
}

.nav-hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.nav-hamburger span {
    width: 20px;
    height: 2px;
    background: #1e293b;
    transition: all 0.3s;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #7c3aed;
}

@media (max-width: 768px) {
    .nav-hamburger {
        display: flex;
    }
    
    .nav-menu {
        display: none;
    }
}`,
        js: `// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});`
    },

    // ====================================================================
    // TEMPLATE 10: MEGA MENU NAVIGATION
    // Features: Advanced dropdown with multiple columns
    // Category: Modern
    // ====================================================================
    nav10: {
        name: "Mega Menu Navigation",
        category: "modern",
        html: `<nav class="mega-menu-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-th-large"></i>
                MegaMenu
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item dropdown">
                <a href="#" class="nav-link">Products <i class="fas fa-chevron-down"></i></a>
                <div class="dropdown-menu">
                    <div class="dropdown-content">
                        <div class="dropdown-column">
                            <h4>Web Products</h4>
                            <a href="#">Web Templates</a>
                            <a href="#">UI Kits</a>
                            <a href="#">Dashboards</a>
                        </div>
                        <div class="dropdown-column">
                            <h4>Mobile</h4>
                            <a href="#">App Templates</a>
                            <a href="#">Icons</a>
                            <a href="#">UI Components</a>
                        </div>
                        <div class="dropdown-column">
                            <h4>Resources</h4>
                            <a href="#">Documentation</a>
                            <a href="#">Tutorials</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <div class="nav-actions">
            <button class="btn-primary">Get Started</button>
        </div>
    </div>
</nav>`,
        css: `.mega-menu-navbar {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #7c3aed;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-item {
    position: relative;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.nav-link:hover {
    color: #7c3aed;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 600px;
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    border-radius: 8px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    z-index: 1000;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
}

.dropdown-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
}

.dropdown-column h4 {
    margin-bottom: 1rem;
    color: #1e293b;
    font-size: 1rem;
}

.dropdown-column a {
    display: block;
    padding: 0.5rem 0;
    color: #64748b;
    text-decoration: none;
    transition: color 0.3s;
}

.dropdown-column a:hover {
    color: #7c3aed;
}

.btn-primary {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s;
}

.btn-primary:hover {
    transform: translateY(-2px);
}`,
        js: `// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.opacity = '1';
            this.querySelector('.dropdown-menu').style.visibility = 'visible';
        });
        
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.opacity = '0';
            this.querySelector('.dropdown-menu').style.visibility = 'hidden';
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 11: STICKY NAVIGATION
    // Features: Sticks to top on scroll, background change
    // Category: Modern
    // ====================================================================
    nav11: {
        name: "Sticky Navigation",
        category: "modern",
        html: `<nav class="sticky-navbar" id="stickyNavbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-paperclip"></i>
                StickyNav
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
        css: `.sticky-navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.sticky-navbar.scrolled {
    background: rgba(255, 255, 255, 0.98);
    padding: 0.5rem 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #7c3aed;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7c3aed;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
        js: `// Sticky navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('stickyNavbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});`
    },

    // ====================================================================
    // TEMPLATE 12: SOCIAL MEDIA NAVIGATION
    // Features: Social media icons, search bar
    // Category: Modern
    // ====================================================================
    nav12: {
        name: "Social Media Navigation",
        category: "modern",
        html: `<nav class="social-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-share-alt"></i>
                SocialApp
            </a>
        </div>
        <div class="nav-search">
            <input type="text" placeholder="Search...">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Feed</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Messages</a>
            </li>
        </ul>
        <div class="social-icons">
            <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
</nav>`,
        css: `.social-navbar {
    background: #1e293b;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #ec4899;
}

.nav-search {
    display: flex;
    align-items: center;
    background: #374151;
    border-radius: 25px;
    padding: 0.5rem 1rem;
}

.nav-search input {
    background: transparent;
    border: none;
    color: white;
    outline: none;
    width: 200px;
}

.nav-search input::placeholder {
    color: #9ca3af;
}

.search-btn {
    background: transparent;
    border: none;
    color: #9ca3af;
    cursor: pointer;
}

.search-btn:hover {
    color: white;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #ec4899;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-link {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s;
}

.social-link:hover {
    color: #ec4899;
}`,
        js: `// Search functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.nav-search input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert('Searching for: ' + searchInput.value);
                searchInput.value = '';
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (searchInput.value.trim() !== '') {
                    alert('Searching for: ' + searchInput.value);
                    searchInput.value = '';
                }
            }
        });
    }
});`
    },

    // ====================================================================
// TEMPLATE 13: GLASSMORPHISM WITH SEARCH
// Features: Glass effect with integrated search bar
// Category: Glassmorphism
// ====================================================================
nav13: {
    name: "Glassmorphism with Search",
    category: "glassmorphism",
    html: `<nav class="glass-search-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-gem"></i>
                GlassSearch
            </a>
        </div>
        <div class="nav-search">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search...">
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.glass-search-navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-search {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 25px;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    transition: all 0.3s;
}

.nav-search:focus-within {
    background: rgba(255, 255, 255, 0.8);
    border-color: #7c3aed;
}

.nav-search i {
    color: #7c3aed;
    margin-right: 8px;
}

.nav-search input {
    background: transparent;
    border: none;
    outline: none;
    width: 200px;
    color: #4b5563;
}

.nav-search input::placeholder {
    color: #9ca3af;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #7c3aed;
}`,
    js: `// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.nav-search input');
    
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.background = 'rgba(255, 255, 255, 0.9)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.background = 'rgba(255, 255, 255, 0.6)';
        });
    }
});`
},

// ====================================================================
// TEMPLATE 14: GLASSMORPHISM SIDEBAR
// Features: Glass effect sidebar with gradient accents
// Category: Glassmorphism
// ====================================================================
nav14: {
    name: "Glassmorphism Sidebar",
    category: "glassmorphism",
    html: `<div class="glass-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-palette"></i>
            GlassSide
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span>Statistics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-user"></i>
                <span>Profile</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.glass-sidebar {
    width: 280px;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #4b5563;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.15);
    color: #7c3aed;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 15: GRADIENT GLASSMORPHISM
// Features: Glass effect with gradient background
// Category: Glassmorphism
// ====================================================================
nav15: {
    name: "Gradient Glassmorphism",
    category: "glassmorphism",
    html: `<nav class="gradient-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-gem"></i>
                GradientGlass
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-glass">Get Started</button>
    </div>
</nav>`,
    css: `.gradient-glass-navbar {
    background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.1), 
        rgba(236, 72, 153, 0.1)
    );
    backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #7c3aed;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-glass {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.btn-glass:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 16: GLASSMORPHISM WITH ICONS
// Features: Icon-based glass navigation
// Category: Glassmorphism
// ====================================================================
nav16: {
    name: "Glassmorphism with Icons",
    category: "glassmorphism",
    html: `<nav class="glass-icons-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">GlassIcons</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-envelope"></i>
                    <span>Messages</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.glass-icons-navbar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(25px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    border-radius: 20px;
    margin: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 12px;
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    border: 1px solid rgba(124, 58, 237, 0.1);
}

.nav-link:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
}

.nav-link i {
    font-size: 1.1rem;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 17: DARK GLASSMORPHISM
// Features: Dark theme glassmorphism with neon effects
// Category: Glassmorphism
// ====================================================================
nav17: {
    name: "Dark Glassmorphism",
    category: "glassmorphism",
    html: `<nav class="dark-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-moon"></i>
                DarkGlass
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <button class="btn-dark-glass">Explore</button>
    </div>
</nav>`,
    css: `.dark-glass-navbar {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #8b5cf6;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #8b5cf6;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #6366f1);
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-dark-glass {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

.btn-dark-glass:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
}`,
    js: `// No JavaScript required for this navigation`
},



// ====================================================================
// TEMPLATE 18: MINIMAL WITH BORDER
// Features: Clean design with subtle bottom border
// Category: Minimal
// ====================================================================
nav18: {
    name: "Minimal with Border",
    category: "minimal",
    html: `<nav class="minimal-border-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.minimal-border-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 2px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #1e293b;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 19: MINIMAL CENTERED LOGO
// Features: Logo centered with balanced menu distribution
// Category: Minimal
// ====================================================================
nav19: {
    name: "Minimal Centered Logo",
    category: "minimal",
    html: `<nav class="minimal-centered-navbar">
    <div class="nav-container">
        <div class="nav-menu-left">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Work</a>
        </div>
        <div class="nav-logo">
            <a href="#">Logo</a>
        </div>
        <div class="nav-menu-right">
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Contact</a>
        </div>
    </div>
</nav>`,
    css: `.minimal-centered-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
}

.nav-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu-left,
.nav-menu-right {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #1e293b;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 20: MINIMAL WITH BADGE
// Features: Clean design with notification badge
// Category: Minimal
// ====================================================================
nav20: {
    name: "Minimal with Badge",
    category: "minimal",
    html: `<nav class="minimal-badge-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                Brand
                <span class="badge">New</span>
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.minimal-badge-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
}

.badge {
    background: #10b981;
    color: white;
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-weight: 700;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #10b981;
    transition: width 0.3s;
}

.nav-link:hover::before {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 21: MINIMAL DARK
// Features: Dark theme with clean typography
// Category: Minimal
// ====================================================================
nav21: {
    name: "Minimal Dark",
    category: "minimal",
    html: `<nav class="minimal-dark-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.minimal-dark-navbar {
    background: #1e293b;
    padding: 1.5rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: white;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 22: MINIMAL WITH BUTTON
// Features: Clean design with subtle action button
// Category: Minimal
// ====================================================================
nav22: {
    name: "Minimal with Button",
    category: "minimal",
    html: `<nav class="minimal-button-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Simple</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
        </ul>
        <button class="nav-btn">Sign In</button>
    </div>
</nav>`,
    css: `.minimal-button-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-btn {
    background: transparent;
    border: 1px solid #1e293b;
    color: #1e293b;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.nav-btn:hover {
    background: #1e293b;
    color: white;
}`,
    js: `// No JavaScript required for this navigation`
},


// ====================================================================
// TEMPLATE 23: LIGHT GLASS SIDEBAR
// Features: Elegant glass effect with modern design
// Category: Sidebar
// ====================================================================
nav23: {
    name: "Light Glass Sidebar",
    category: "sidebar",
    html: `<div class="light-glass-sidebar">
    <div class="sidebar-header">
        <h2>Dashboard</h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-users"></i>
                <span>Users</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.light-glass-sidebar {
    width: 280px;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(124, 58, 237, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #4b5563;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.15);
    color: #7c3aed;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 24: GRADIENT SIDEBAR
// Features: Beautiful gradient background
// Category: Sidebar
// ====================================================================
nav24: {
    name: "Gradient Sidebar",
    category: "sidebar",
    html: `<div class="gradient-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-palette"></i>
            Creative
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-image"></i>
                <span>Gallery</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-music"></i>
                <span>Music</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.gradient-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
}

.menu-item.active a {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-right: 3px solid white;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 25: MINIMAL WHITE SIDEBAR
// Features: Clean white design with subtle shadows
// Category: Sidebar
// ====================================================================
nav25: {
    name: "Minimal White Sidebar",
    category: "sidebar",
    html: `<div class="minimal-white-sidebar">
    <div class="sidebar-header">
        <h2>Workspace</h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-file"></i>
                <span>Projects</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-calendar"></i>
                <span>Calendar</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.minimal-white-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: #f8fafc;
    color: #1e293b;
}

.menu-item.active a {
    background: #f8fafc;
    color: #1e293b;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 26: DARK MODERN SIDEBAR
// Features: Modern dark theme with professional icons
// Category: Sidebar
// ====================================================================
nav26: {
    name: "Dark Modern Sidebar",
    category: "sidebar",
    html: `<div class="dark-modern-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-rocket"></i>
            Admin Panel
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-database"></i>
                <span>Data</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-line"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.dark-modern-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.menu-item.active a {
    background: rgba(59, 130, 246, 0.2);
    color: white;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 27: COLORFUL SIDEBAR
// Features: Vibrant colors for each menu item
// Category: Sidebar
// ====================================================================
nav27: {
    name: "Colorful Sidebar",
    category: "sidebar",
    html: `<div class="colorful-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-star"></i>
            Premium
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#" style="color: #7c3aed;">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #10b981;">
                <i class="fas fa-chart-line"></i>
                <span>Growth</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #f59e0b;">
                <i class="fas fa-users"></i>
                <span>Team</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #ef4444;">
                <i class="fas fa-bell"></i>
                <span>Alerts</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" style="color: #3b82f6;">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.colorful-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
    color: #f59e0b;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 8px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    text-decoration: none;
    transition: all 0.3s;
    border-right: 3px solid transparent;
    background: #f8fafc;
    margin: 0 15px;
    border-radius: 8px;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.05);
    transform: translateX(5px);
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.1);
    border-right: 3px solid currentColor;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 28: DARK GRADIENT NAVIGATION
// Features: Elegant dark gradient with glowing effects
// Category: Dark
// ====================================================================
nav28: {
    name: "Dark Gradient Navigation",
    category: "dark",
    html: `<nav class="dark-gradient-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-moon"></i>
                DarkGrad
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-glow">Get Started</button>
    </div>
</nav>`,
    css: `.dark-gradient-navbar {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #8b5cf6;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: white;
}

.btn-glow {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.btn-glow:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.7);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 29: DARK GLASS NAVIGATION
// Features: Dark glassmorphism with blur effect
// Category: Dark
// ====================================================================
nav29: {
    name: "Dark Glass Navigation",
    category: "dark",
    html: `<nav class="dark-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">DarkGlass</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.dark-glass-navbar {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: white;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #8b5cf6;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 30: DARK MINIMAL NAVIGATION
// Features: Clean dark design with subtle effects
// Category: Dark
// ====================================================================
nav30: {
    name: "Dark Minimal Navigation",
    category: "dark",
    html: `<nav class="dark-minimal-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.dark-minimal-navbar {
    background: #1e293b;
    padding: 1.5rem 0;
    border-bottom: 1px solid #334155;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
    text-decoration: none;
    letter-spacing: -0.5px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: white;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
}

.nav-link:hover::before {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 31: DARK WITH SEARCH
// Features: Dark navigation with search functionality
// Category: Dark
// ====================================================================
nav31: {
    name: "Dark with Search",
    category: "dark",
    html: `<nav class="dark-search-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-search"></i>
                SearchApp
            </a>
        </div>
        <div class="nav-search">
            <input type="text" placeholder="Search...">
            <button class="search-btn">
                <i class="fas fa-search"></i>
            </button>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.dark-search-navbar {
    background: #0f172a;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    padding: 1.5rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #60a5fa;
}

.nav-search {
    display: flex;
    align-items: center;
    background: #1e293b;
    border-radius: 25px;
    padding: 0.5rem 1rem;
    border: 1px solid #334155;
    transition: all 0.3s;
}

.nav-search:focus-within {
    border-color: #60a5fa;
}

.nav-search input {
    background: transparent;
    border: none;
    outline: none;
    width: 200px;
    color: white;
}

.nav-search input::placeholder {
    color: #64748b;
}

.search-btn {
    background: transparent;
    border: none;
    color: #64748b;
    cursor: pointer;
    transition: color 0.3s;
}

.search-btn:hover {
    color: #60a5fa;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #60a5fa;
}`,
    js: `// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.nav-search input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim() !== '') {
                alert('Searching for: ' + searchInput.value);
                searchInput.value = '';
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (searchInput.value.trim() !== '') {
                    alert('Searching for: ' + searchInput.value);
                    searchInput.value = '';
                }
            }
        });
    }
});`
},

// ====================================================================
// TEMPLATE 32: DARK WITH SOCIAL ICONS
// Features: Dark theme with social icons and notifications
// Category: Dark
// ====================================================================
nav32: {
    name: "Dark with Social Icons",
    category: "dark",
    html: `<nav class="dark-social-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">SocialApp</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Feed</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Explore</a>
            </li>
        </ul>
        <div class="social-icons">
            <a href="#" class="social-link">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-link">
                <i class="fab fa-discord"></i>
            </a>
            <a href="#" class="social-link notification">
                <i class="fas fa-bell"></i>
                <span class="notification-badge">3</span>
            </a>
        </div>
    </div>
</nav>`,
    css: `.dark-social-navbar {
    background: #1e293b;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border: 1px solid #334155;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #60a5fa;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-link {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s;
    position: relative;
    display: flex;
    align-items: center;
}

.social-link:hover {
    color: #60a5fa;
}

.social-link.notification {
    position: relative;
}

.notification-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ef4444;
    color: white;
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    border-radius: 50%;
    min-width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
}`,
    js: `// Notification functionality can be added here
document.addEventListener('DOMContentLoaded', function() {
    const notificationBtn = document.querySelector('.social-link.notification');
    
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('You have 3 new notifications!');
        });
    }
});`
},

// ====================================================================
// TEMPLATE 33: FROSTED GLASS NAVIGATION
// Features: Intense frosted effect with icy blue theme
// Category: Glassmorphism
// ====================================================================
nav33: {
    name: "Frosted Glass Navigation",
    category: "glassmorphism",
    html: `<nav class="frosted-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-snowflake"></i>
                Frost
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-frost">Explore</button>
    </div>
</nav>`,
    css: `.frosted-glass-navbar {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #0ea5e9;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #0ea5e9;
}

.btn-frost {
    background: rgba(14, 165, 233, 0.8);
    backdrop-filter: blur(10px);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-frost:hover {
    background: rgba(14, 165, 233, 0.9);
    transform: translateY(-2px);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 34: NEON GLASS NAVIGATION
// Features: Vibrant neon colors with glass effects
// Category: Glassmorphism
// ====================================================================
nav34: {
    name: "Neon Glass Navigation",
    category: "glassmorphism",
    html: `<nav class="neon-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-bolt"></i>
                Neon
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
        </ul>
        <button class="btn-neon">Get Started</button>
    </div>
</nav>`,
    css: `.neon-glass-navbar {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(236, 72, 153, 0.2);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(236, 72, 153, 0.3);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #ec4899;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    text-shadow: 0 0 5px rgba(236, 72, 153, 0.3);
}

.nav-link:hover {
    color: #ec4899;
    text-shadow: 0 0 10px rgba(236, 72, 153, 0.8);
}

.btn-neon {
    background: rgba(236, 72, 153, 0.8);
    backdrop-filter: blur(10px);
    color: white;
    border: 1px solid rgba(236, 72, 153, 0.5);
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    text-shadow: 0 0 5px rgba(236, 72, 153, 0.5);
    box-shadow: 0 0 20px rgba(236, 72, 153, 0.4);
}

.btn-neon:hover {
    background: rgba(236, 72, 153, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(236, 72, 153, 0.6);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 35: FLOATING GLASS NAVIGATION
// Features: Floating glass panel with strong elevation
// Category: Glassmorphism
// ====================================================================
nav35: {
    name: "Floating Glass Navigation",
    category: "glassmorphism",
    html: `<nav class="floating-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Float</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.floating-glass-navbar {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(30px);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.4);
    padding: 1.5rem 2rem;
    border-radius: 20px;
    margin: 2rem auto;
    max-width: 1200px;
    border: 1px solid rgba(255, 255, 255, 0.6);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    background: rgba(255, 255, 255, 0.6);
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
}

.nav-link:hover {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.2);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 36: COLORFUL GLASS NAVIGATION
// Features: Multi-colored glass design
// Category: Glassmorphism
// ====================================================================
nav36: {
    name: "Colorful Glass Navigation",
    category: "glassmorphism",
    html: `<nav class="colorful-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-palette"></i>
                Colorful
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link" style="color: #7c3aed;">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" style="color: #10b981;">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" style="color: #f59e0b;">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" style="color: #ef4444;">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.colorful-glass-navbar {
    background: linear-gradient(
        135deg,
        rgba(124, 58, 237, 0.1),
        rgba(16, 185, 129, 0.1),
        rgba(245, 158, 11, 0.1),
        rgba(239, 68, 68, 0.1)
    );
    backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #7c3aed;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav-link {
    text-decoration: none;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.7);
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-link:hover {
    background: currentColor;
    color: white !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 37: DARK GLASS NAVIGATION
// Features: Premium dark glass with purple accents
// Category: Glassmorphism
// ====================================================================
nav37: {
    name: "Dark Glass Navigation",
    category: "glassmorphism",
    html: `<nav class="dark-glass-pro-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-moon"></i>
                DarkGlass
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <button class="btn-dark-glass-pro">Explore</button>
    </div>
</nav>`,
    css: `.dark-glass-pro-navbar {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(30px);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        0 0 20px rgba(124, 58, 237, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(124, 58, 237, 0.3);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #8b5cf6;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #8b5cf6;
}

.btn-dark-glass-pro {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
}

.btn-dark-glass-pro:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.6);
}`,
    js: `// No JavaScript required for this navigation`
},
// ====================================================================
// TEMPLATE 38: ULTRA MINIMAL NAVIGATION
// Features: Extremely clean with single letter logo
// Category: Minimal
// ====================================================================
nav38: {
    name: "Ultra Minimal Navigation",
    category: "minimal",
    html: `<nav class="ultra-minimal-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">M</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.ultra-minimal-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #e2e8f0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    background: #1e293b;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #1e293b;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 39: MINIMAL WITH UNDERLINE
// Features: Active state underline indicator
// Category: Minimal
// ====================================================================
nav39: {
    name: "Minimal with Underline",
    category: "minimal",
    html: `<nav class="minimal-underline-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Brand</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link active">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.minimal-underline-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link.active {
    color: #1e293b;
    font-weight: 600;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #1e293b;
}

.nav-link:hover {
    color: #1e293b;
}`,
    js: `// Active state management
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});`
},

// ====================================================================
// TEMPLATE 40: MINIMAL WITH ICONS
// Features: Icon-only navigation for ultimate minimalism
// Category: Minimal
// ====================================================================
nav40: {
    name: "Minimal with Icons",
    category: "minimal",
    html: `<nav class="minimal-icons-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-leaf"></i>
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span class="nav-text">Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span class="nav-text">Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-envelope"></i>
                    <span class="nav-text">Messages</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-cog"></i>
                    <span class="nav-text">Settings</span>
                </a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.minimal-icons-navbar {
    background: white;
    padding: 1rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    color: #10b981;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    padding: 0.8rem 1rem;
    border-radius: 8px;
}

.nav-link:hover {
    background: #f1f5f9;
    color: #10b981;
}

.nav-text {
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .nav-text {
        display: none;
    }
    
    .nav-link {
        padding: 0.8rem;
    }
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 41: MINIMAL SPLIT NAVIGATION
// Features: Centered separator with balanced layout
// Category: Minimal
// ====================================================================
nav41: {
    name: "Minimal Split Navigation",
    category: "minimal",
    html: `<nav class="minimal-split-navbar">
    <div class="nav-container">
        <div class="nav-menu-left">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Work</a>
        </div>
        <div class="nav-separator">•</div>
        <div class="nav-menu-right">
            <a href="#" class="nav-link">About</a>
            <a href="#" class="nav-link">Contact</a>
        </div>
    </div>
</nav>`,
    css: `.minimal-split-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
}

.nav-menu-left,
.nav-menu-right {
    display: flex;
    gap: 2rem;
}

.nav-separator {
    color: #cbd5e1;
    font-size: 1.2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #1e293b;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 42: MINIMAL WITH BADGE & BUTTON
// Features: Clean design with badge and action button
// Category: Minimal
// ====================================================================
nav42: {
    name: "Minimal with Badge & Button",
    category: "minimal",
    html: `<nav class="minimal-badge-btn-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                App
                <span class="badge">NEW</span>
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
        </ul>
        <button class="nav-btn">Try Free</button>
    </div>
</nav>`,
    css: `.minimal-badge-btn-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #e2e8f0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
}

.badge {
    background: #ef4444;
    color: white;
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-weight: 700;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-btn {
    background: #1e293b;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.nav-btn:hover {
    background: #374151;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 43: ANIMATED GRADIENT SIDEBAR
// Features: Beautiful gradient animation with hover effects
// Category: Sidebar
// ====================================================================
nav43: {
    name: "Animated Gradient Sidebar",
    category: "sidebar",
    html: `<div class="animated-gradient-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-star"></i>
            Premium
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-rocket"></i>
                <span>Launch</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-line"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.animated-gradient-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    transform: translateX(8px);
}

.menu-item.active a {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-right: 3px solid white;
    transform: translateX(5px);
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 44: SLIDE-IN ANIMATION SIDEBAR
// Features: Staggered slide-in animations
// Category: Sidebar
// ====================================================================
nav44: {
    name: "Slide-in Animation Sidebar",
    category: "sidebar",
    html: `<div class="slide-in-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-bolt"></i>
            Quick Access
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-line"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-users"></i>
                <span>Team</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.slide-in-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
    color: #3b82f6;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
    transform: translateX(-20px);
    opacity: 0;
    animation: slideIn 0.5s ease forwards;
}

.menu-item:nth-child(1) a { animation-delay: 0.1s; }
.menu-item:nth-child(2) a { animation-delay: 0.2s; }
.menu-item:nth-child(3) a { animation-delay: 0.3s; }
.menu-item:nth-child(4) a { animation-delay: 0.4s; }

@keyframes slideIn {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    transform: translateX(5px);
}

.menu-item.active a {
    background: rgba(59, 130, 246, 0.2);
    color: white;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 45: BOUNCE ANIMATION SIDEBAR
// Features: Bounce effects with smooth transitions
// Category: Sidebar
// ====================================================================
nav45: {
    name: "Bounce Animation Sidebar",
    category: "sidebar",
    html: `<div class="bounce-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-play-circle"></i>
            Animate
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-gamepad"></i>
                <span>Games</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-music"></i>
                <span>Music</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-film"></i>
                <span>Movies</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.bounce-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.05);
    color: #7c3aed;
    transform: scale(1.05) translateX(5px);
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
    border-right: 3px solid #7c3aed;
    animation: bounce 0.5s ease;
}

@keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateX(0); }
    40% { transform: translateX(8px); }
    80% { transform: translateX(4px); }
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 46: GLOW EFFECT SIDEBAR
// Features: Magical glow and pulse animations
// Category: Sidebar
// ====================================================================
nav46: {
    name: "Glow Effect Sidebar",
    category: "sidebar",
    html: `<div class="glow-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-magic"></i>
            Magic Panel
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-wand-magic-sparkles"></i>
                <span>Spells</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-dragon"></i>
                <span>Creatures</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-scroll"></i>
                <span>Scrolls</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.glow-sidebar {
    width: 280px;
    height: 100%;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(20px);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(139, 92, 246, 0.2);
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #8b5cf6;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
    position: relative;
    overflow: hidden;
}

.menu-item a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
    transition: left 0.5s ease;
}

.menu-item a:hover::before {
    left: 100%;
}

.menu-item a:hover {
    background: rgba(139, 92, 246, 0.15);
    color: white;
    text-shadow: 0 0 5px rgba(139, 92, 246, 0.8);
}

.menu-item.active a {
    background: rgba(139, 92, 246, 0.2);
    color: white;
    border-right: 3px solid #8b5cf6;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(139, 92, 246, 0.4);
    }
    50% { 
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
    }
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 47: 3D TRANSFORM SIDEBAR
// Features: 3D transformation effects with depth
// Category: Sidebar
// ====================================================================
nav47: {
    name: "3D Transform Sidebar",
    category: "sidebar",
    html: `<div class="transform-3d-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-cube"></i>
            3D Space
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cube"></i>
                <span>Models</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-vr-cardboard"></i>
                <span>VR View</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.transform-3d-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 
        0 10px 40px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform-style: preserve-3d;
    perspective: 500px;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #f59e0b;
    display: flex;
    align-items: center;
    transform: translateZ(20px);
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-right: 3px solid transparent;
    transform: translateZ(0);
    position: relative;
}

.menu-item a:hover {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    transform: translateX(8px) translateZ(5px) rotateY(5deg);
    box-shadow: -3px 0 10px rgba(245, 158, 11, 0.2);
}

.menu-item.active a {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border-right: 3px solid #f59e0b;
    transform: translateX(10px) translateZ(10px);
    box-shadow: -5px 0 15px rgba(245, 158, 11, 0.3);
}

.menu-item a::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #f59e0b;
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.menu-item a:hover::after {
    transform: scaleY(1);
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},
// ====================================================================
// TEMPLATE 48: DARK PULSE NAVIGATION
// Features: Pulsating glow effects with heartbeat animation
// Category: Dark
// ====================================================================
nav48: {
    name: "Dark Pulse Navigation",
    category: "dark",
    html: `<nav class="dark-pulse-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-heart"></i>
                Pulse
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-pulse">Join Now</button>
    </div>
</nav>`,
    css: `.dark-pulse-navbar {
    background: #0f172a;
    box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(239, 68, 68, 0.2);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(239, 68, 68, 0.3);
    animation: borderPulse 2s infinite;
}

@keyframes borderPulse {
    0%, 100% { border-color: rgba(239, 68, 68, 0.3); }
    50% { border-color: rgba(239, 68, 68, 0.8); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #ef4444;
    text-decoration: none;
    display: flex;
    align-items: center;
    animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ef4444;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link:hover {
    color: #ef4444;
}

.btn-pulse {
    background: #ef4444;
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: buttonPulse 2s infinite;
}

@keyframes buttonPulse {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
    }
    50% { 
        box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
    }
}

.btn-pulse:hover {
    transform: translateY(-2px);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 49: DARK SLIDE NAVIGATION
// Features: Smooth slide-in animations
// Category: Dark
// ====================================================================
nav49: {
    name: "Dark Slide Navigation",
    category: "dark",
    html: `<nav class="dark-slide-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Slide</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <button class="btn-slide">Explore</button>
    </div>
</nav>`,
    css: `.dark-slide-navbar {
    background: #1e293b;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-bottom: 2px solid #3b82f6;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    transform: translateX(-50px);
    animation: slideInLogo 0.8s ease forwards;
}

@keyframes slideInLogo {
    to { transform: translateX(0); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
    transform: translateY(-20px);
    opacity: 0;
    animation: slideInMenu 0.6s ease forwards;
}

.nav-item:nth-child(1) { animation-delay: 0.2s; }
.nav-item:nth-child(2) { animation-delay: 0.3s; }
.nav-item:nth-child(3) { animation-delay: 0.4s; }
.nav-item:nth-child(4) { animation-delay: 0.5s; }

@keyframes slideInMenu {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.nav-link {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
}

.nav-link:hover {
    color: #3b82f6;
    transform: translateY(-2px);
}

.btn-slide {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    transform: scale(0);
    animation: scaleIn 0.5s ease 0.6s forwards;
}

@keyframes scaleIn {
    to { transform: scale(1); }
}

.btn-slide:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 50: DARK GLITCH NAVIGATION
// Features: Cyberpunk glitch effects
// Category: Dark
// ====================================================================
nav50: {
    name: "Dark Glitch Navigation",
    category: "dark",
    html: `<nav class="dark-glitch-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">GLITCH</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Matrix</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Code</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">System</a>
            </li>
        </ul>
        <button class="btn-glitch">HACK</button>
    </div>
</nav>`,
    css: `.dark-glitch-navbar {
    background: #000;
    box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.6),
        inset 0 0 20px rgba(34, 197, 94, 0.1);
    padding: 1.5rem 0;
    border: 1px solid #22c55e;
    position: relative;
    overflow: hidden;
}

.dark-glitch-navbar::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
    animation: glitchScan 3s linear infinite;
}

@keyframes glitchScan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #22c55e;
    text-decoration: none;
    text-shadow: 0 0 5px #22c55e;
    animation: textGlitch 2s infinite;
}

@keyframes textGlitch {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #22c55e;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #86efac;
    animation: linkGlitch 0.3s;
}

@keyframes linkGlitch {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-1px); }
    50% { transform: translateX(1px); }
    75% { transform: translateX(-1px); }
}

.btn-glitch {
    background: transparent;
    color: #22c55e;
    border: 1px solid #22c55e;
    padding: 0.8rem 1.8rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.btn-glitch::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent);
    transition: left 0.5s ease;
}

.btn-glitch:hover::before {
    left: 100%;
}

.btn-glitch:hover {
    background: rgba(34, 197, 94, 0.1);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 51: DARK WAVE NAVIGATION
// Features: Liquid wave animations
// Category: Dark
// ====================================================================
nav51: {
    name: "Dark Wave Navigation",
    category: "dark",
    html: `<nav class="dark-wave-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-water"></i>
                Wave
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Flow</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Ocean</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Depth</a>
            </li>
        </ul>
        <button class="btn-wave">Ride Wave</button>
    </div>
</nav>`,
    css: `.dark-wave-navbar {
    background: linear-gradient(135deg, #0f172a, #1e40af);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
}

.dark-wave-navbar::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 2px;
    background: linear-gradient(90deg, 
        transparent, 
        #60a5fa, 
        #3b82f6, 
        #60a5fa, 
        transparent
    );
    animation: waveFlow 3s linear infinite;
}

@keyframes waveFlow {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #60a5fa;
    text-decoration: none;
    display: flex;
    align-items: center;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #bfdbfe;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #60a5fa;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover {
    color: white;
}

.btn-wave {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.btn-wave::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg);
    transition: all 0.3s ease;
}

.btn-wave:hover::before {
    transform: rotate(45deg) translate(20px, 20px);
}

.btn-wave:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 52: DARK NEON NAVIGATION
// Features: Vibrant neon signs with flickering
// Category: Dark
// ====================================================================
nav52: {
    name: "Dark Neon Navigation",
    category: "dark",
    html: `<nav class="dark-neon-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">NEON</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Club</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Party</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Night</a>
            </li>
        </ul>
        <button class="btn-neon-dark">ENTER</button>
    </div>
</nav>`,
    css: `.dark-neon-navbar {
    background: #000;
    box-shadow: 
        0 0 10px #a855f7,
        0 0 20px #a855f7,
        inset 0 0 10px rgba(168, 85, 247, 0.1);
    padding: 1.5rem 0;
    border: 1px solid #a855f7;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #a855f7;
    text-decoration: none;
    text-shadow: 
        0 0 5px #a855f7,
        0 0 10px #a855f7;
    animation: neonFlicker 2s infinite alternate;
}

@keyframes neonFlicker {
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
        text-shadow: 
            0 0 5px #a855f7,
            0 0 10px #a855f7;
        opacity: 1;
    }
    20%, 24%, 55% {
        text-shadow: none;
        opacity: 0.8;
    }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #c084fc;
    text-decoration: none;
    font-weight: 600;
    text-shadow: 0 0 5px rgba(168, 85, 247, 0.5);
    transition: all 0.3s;
    position: relative;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #a855f7;
    box-shadow: 0 0 5px #a855f7;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link:hover {
    color: #e9d5ff;
    text-shadow: 
        0 0 10px #a855f7,
        0 0 20px #a855f7;
}

.btn-neon-dark {
    background: transparent;
    color: #a855f7;
    border: 1px solid #a855f7;
    padding: 0.8rem 1.8rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    text-shadow: 0 0 5px #a855f7;
    box-shadow: 
        inset 0 0 10px rgba(168, 85, 247, 0.2),
        0 0 10px rgba(168, 85, 247, 0.5);
    transition: all 0.3s;
    animation: buttonFlicker 3s infinite;
}

@keyframes buttonFlicker {
    0%, 100% { 
        box-shadow: 
            inset 0 0 10px rgba(168, 85, 247, 0.2),
            0 0 10px rgba(168, 85, 247, 0.5);
    }
    50% { 
        box-shadow: 
            inset 0 0 15px rgba(168, 85, 247, 0.3),
            0 0 15px rgba(168, 85, 247, 0.8);
    }
}

.btn-neon-dark:hover {
    background: rgba(168, 85, 247, 0.1);
    transform: translateY(-2px);
}`,
    js: `// Animation already handled in CSS`
},
// ====================================================================
// TEMPLATE 53: MODERN HOLOGRAM NAVIGATION
// Features: Futuristic hologram effects with scanning animations
// Category: Modern
// ====================================================================
nav53: {
    name: "Modern Hologram Navigation",
    category: "modern",
    html: `<nav class="modern-hologram-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-atom"></i>
                Hologram
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Technology</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Innovation</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Future</a>
            </li>
        </ul>
        <button class="btn-hologram">Activate</button>
    </div>
</nav>`,
    css: `.modern-hologram-navbar {
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(20px);
    box-shadow: 
        0 0 20px rgba(59, 130, 246, 0.3),
        inset 0 0 20px rgba(59, 130, 246, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(59, 130, 246, 0.5);
    position: relative;
    overflow: hidden;
}

.modern-hologram-navbar::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(59, 130, 246, 0.2), 
        transparent
    );
    animation: hologramScan 2s linear infinite;
}

@keyframes hologramScan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #3b82f6;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    animation: hologramFlicker 3s infinite;
}

@keyframes hologramFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #93c5fd;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    box-shadow: 0 0 5px #3b82f6;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link:hover {
    color: white;
    text-shadow: 0 0 5px #3b82f6;
}

.btn-hologram {
    background: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    text-shadow: 0 0 5px #3b82f6;
    box-shadow: 
        inset 0 0 10px rgba(59, 130, 246, 0.2),
        0 0 10px rgba(59, 130, 246, 0.5);
    transition: all 0.3s;
    animation: holoPulse 2s infinite;
}

@keyframes holoPulse {
    0%, 100% { 
        box-shadow: 
            inset 0 0 10px rgba(59, 130, 246, 0.2),
            0 0 10px rgba(59, 130, 246, 0.5);
    }
    50% { 
        box-shadow: 
            inset 0 0 15px rgba(59, 130, 246, 0.3),
            0 0 15px rgba(59, 130, 246, 0.8);
    }
}

.btn-hologram:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 54: MODERN PARTICLE NAVIGATION
// Features: Floating particle effects with scientific theme
// Category: Modern
// ====================================================================
nav54: {
    name: "Modern Particle Navigation",
    category: "modern",
    html: `<nav class="modern-particle-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Particle</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Science</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Research</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Lab</a>
            </li>
        </ul>
        <button class="btn-particle">Experiment</button>
    </div>
</nav>`,
    css: `.modern-particle-navbar {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
}

.modern-particle-navbar::before,
.modern-particle-navbar::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
    animation: floatParticle 4s linear infinite;
}

.modern-particle-navbar::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.modern-particle-navbar::after {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

@keyframes floatParticle {
    0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(-30px) translateX(15px);
        opacity: 0;
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #10b981;
    text-decoration: none;
    text-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #6ee7b7;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: white;
    transform: translateY(-2px);
    text-shadow: 0 0 10px #10b981;
}

.btn-particle {
    background: #10b981;
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.5);
    transition: all 0.3s;
}

.btn-particle:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(16, 185, 129, 0.8);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 55: MODERN MATRIX NAVIGATION
// Features: Digital rain effect with binary code
// Category: Modern
// ====================================================================
nav55: {
    name: "Modern Matrix Navigation",
    category: "modern",
    html: `<nav class="modern-matrix-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Matrix</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Code</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">System</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Digital</a>
            </li>
        </ul>
        <button class="btn-matrix">Execute</button>
    </div>
</nav>`,
    css: `.modern-matrix-navbar {
    background: #000;
    box-shadow: 
        inset 0 0 20px rgba(34, 197, 94, 0.1),
        0 0 20px rgba(34, 197, 94, 0.3);
    padding: 1.5rem 0;
    border: 1px solid #22c55e;
    position: relative;
    overflow: hidden;
}

.modern-matrix-navbar::before {
    content: '0101010101';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: rgba(34, 197, 94, 0.1);
    font-size: 8px;
    line-height: 1;
    font-family: 'Courier New', monospace;
    animation: matrixRain 10s linear infinite;
}

@keyframes matrixRain {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #22c55e;
    text-decoration: none;
    text-shadow: 0 0 10px #22c55e;
    font-family: 'Courier New', monospace;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4ade80;
    text-decoration: none;
    font-weight: 500;
    font-family: 'Courier New', monospace;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #86efac;
    text-shadow: 0 0 10px #22c55e;
    animation: binaryFlicker 0.1s;
}

@keyframes binaryFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.btn-matrix {
    background: transparent;
    color: #22c55e;
    border: 1px solid #22c55e;
    padding: 0.8rem 1.8rem;
    border-radius: 6px;
    font-weight: 600;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.btn-matrix::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.3), transparent);
    transition: left 0.5s ease;
}

.btn-matrix:hover::before {
    left: 100%;
}

.btn-matrix:hover {
    background: rgba(34, 197, 94, 0.1);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 56: MODERN LIQUID NAVIGATION
// Features: Liquid motion effects with water animations
// Category: Modern
// ====================================================================
nav56: {
    name: "Modern Liquid Navigation",
    category: "modern",
    html: `<nav class="modern-liquid-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-tint"></i>
                Liquid
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Flow</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Fluid</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Water</a>
            </li>
        </ul>
        <button class="btn-liquid">Pour</button>
    </div>
</nav>`,
    css: `.modern-liquid-navbar {
    background: linear-gradient(135deg, #0ea5e9, #3b82f6);
    box-shadow: 0 8px 32px rgba(14, 165, 233, 0.3);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
}

.modern-liquid-navbar::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40%;
    animation: liquidWave 6s linear infinite;
}

@keyframes liquidWave {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover {
    color: white;
    transform: translateY(-2px);
}

.btn-liquid {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 0.8rem 1.8rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.btn-liquid:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 57: MODERN COSMIC NAVIGATION
// Features: Space theme with twinkling stars
// Category: Modern
// ====================================================================
nav57: {
    name: "Modern Cosmic Navigation",
    category: "modern",
    html: `<nav class="modern-cosmic-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-star"></i>
                Cosmic
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Space</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Stars</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Galaxy</a>
            </li>
        </ul>
        <button class="btn-cosmic">Launch</button>
    </div>
</nav>`,
    css: `.modern-cosmic-navbar {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    box-shadow: 
        0 0 20px rgba(139, 92, 246, 0.4),
        inset 0 0 20px rgba(139, 92, 246, 0.1);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
}

.modern-cosmic-navbar::before,
.modern-cosmic-navbar::after {
    content: '✦';
    position: absolute;
    color: rgba(255, 255, 255, 0.5);
    font-size: 6px;
    animation: twinkle 3s infinite;
}

.modern-cosmic-navbar::before {
    top: 25%;
    left: 20%;
    animation-delay: 0s;
}

.modern-cosmic-navbar::after {
    top: 65%;
    right: 25%;
    animation-delay: 1.5s;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #c4b5fd;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(196, 181, 253, 0.5);
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #a5b4fc;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: white;
    text-shadow: 0 0 10px #818cf8;
    transform: translateY(-2px);
}

.btn-cosmic {
    background: linear-gradient(135deg, #8b5cf6, #6366f1);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.btn-cosmic::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}

.btn-cosmic:hover::before {
    left: 100%;
}

.btn-cosmic:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(139, 92, 246, 0.8);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 58: GLASS MORPH ANIMATION
// Features: Dynamic shape morphing with glass effects
// Category: Glassmorphism
// ====================================================================
nav58: {
    name: "Glass Morph Animation",
    category: "glassmorphism",
    html: `<nav class="glass-morph-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-shapes"></i>
                Morph
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Shape</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Form</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Design</a>
            </li>
        </ul>
        <button class="btn-morph">Transform</button>
    </div>
</nav>`,
    css: `.glass-morph-navbar {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    margin: 1rem auto;
    max-width: 1200px;
    border-radius: 20px;
    animation: morphShape 6s ease-in-out infinite;
}

@keyframes morphShape {
    0%, 100% { border-radius: 20px; }
    25% { border-radius: 30px 10px 30px 10px; }
    50% { border-radius: 10px 30px 10px 30px; }
    75% { border-radius: 25px 15px 25px 15px; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
    animation: colorShift 4s infinite;
}

@keyframes colorShift {
    0%, 100% { color: #7c3aed; }
    50% { color: #ec4899; }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.3);
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background: rgba(124, 58, 237, 0.2);
    color: #7c3aed;
    transform: scale(1.1);
}

.btn-morph {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: buttonMorph 3s ease-in-out infinite;
}

@keyframes buttonMorph {
    0%, 100% { border-radius: 12px; }
    50% { border-radius: 20px 6px 20px 6px; }
}

.btn-morph:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.4);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 59: GLASS PRISM ANIMATION
// Features: Prismatic light effects with color spectrum
// Category: Glassmorphism
// ====================================================================
nav59: {
    name: "Glass Prism Animation",
    category: "glassmorphism",
    html: `<nav class="glass-prism-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-gem"></i>
                Prism
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Light</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Color</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Spectrum</a>
            </li>
        </ul>
        <button class="btn-prism">Refract</button>
    </div>
</nav>`,
    css: `.glass-prism-navbar {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    margin: 1rem auto;
    max-width: 1200px;
    position: relative;
    overflow: hidden;
}

.glass-prism-navbar::before {
    content: '';
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
    animation: prismScan 3s linear infinite;
}

@keyframes prismScan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
    animation: prismColors 4s infinite;
}

@keyframes prismColors {
    0% { color: #ef4444; }
    25% { color: #f59e0b; }
    50% { color: #10b981; }
    75% { color: #3b82f6; }
    100% { color: #8b5cf6; }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #1e293b;
    transform: translateY(-2px);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-prism {
    background: rgba(255, 255, 255, 0.3);
    color: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: prismButton 3s infinite;
}

@keyframes prismButton {
    0%, 100% { 
        background: rgba(255, 255, 255, 0.3);
        color: #1e293b;
    }
    25% { 
        background: rgba(239, 68, 68, 0.3);
        color: #ef4444;
    }
    50% { 
        background: rgba(16, 185, 129, 0.3);
        color: #10b981;
    }
    75% { 
        background: rgba(59, 130, 246, 0.3);
        color: #3b82f6;
    }
}

.btn-prism:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 60: GLASS BUBBLE ANIMATION
// Features: Floating bubble effects with glass transparency
// Category: Glassmorphism
// ====================================================================
nav60: {
    name: "Glass Bubble Animation",
    category: "glassmorphism",
    html: `<nav class="glass-bubble-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-bubbles"></i>
                Bubble
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Float</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pop</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Rise</a>
            </li>
        </ul>
        <button class="btn-bubble">Float</button>
    </div>
</nav>`,
    css: `.glass-bubble-navbar {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    margin: 1rem auto;
    max-width: 1200px;
    border-radius: 50% 20px 50% 20px;
    animation: bubbleFloat 4s ease-in-out infinite;
}

@keyframes bubbleFloat {
    0%, 100% { 
        transform: translateY(0) scale(1);
        border-radius: 50% 20px 50% 20px;
    }
    33% { 
        transform: translateY(-5px) scale(1.02);
        border-radius: 20px 50% 20px 50%;
    }
    66% { 
        transform: translateY(3px) scale(0.98);
        border-radius: 30px 30px 30px 30px;
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #0ea5e9;
    text-decoration: none;
    display: flex;
    align-items: center;
    animation: bubbleRise 3s ease-in-out infinite;
}

@keyframes bubbleRise {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav-link {
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.4);
    padding: 0.8rem 1.2rem;
    border-radius: 25px;
    transition: all 0.3s;
    animation: bubblePop 2s infinite;
}

.nav-link:nth-child(1) { animation-delay: 0s; }
.nav-link:nth-child(2) { animation-delay: 0.5s; }
.nav-link:nth-child(3) { animation-delay: 1s; }
.nav-link:nth-child(4) { animation-delay: 1.5s; }

@keyframes bubblePop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.nav-link:hover {
    background: rgba(14, 165, 233, 0.3);
    color: #0ea5e9;
}

.btn-bubble {
    background: rgba(14, 165, 233, 0.6);
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: bubbleFloatBtn 3s ease-in-out infinite;
}

@keyframes bubbleFloatBtn {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.btn-bubble:hover {
    background: rgba(14, 165, 233, 0.8);
    transform: scale(1.1);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 61: GLASS CRYSTAL ANIMATION
// Features: Crystal clear effects with sparkling animations
// Category: Glassmorphism
// ====================================================================
nav61: {
    name: "Glass Crystal Animation",
    category: "glassmorphism",
    html: `<nav class="glass-crystal-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-crystal"></i>
                Crystal
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Shine</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Sparkle</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Clear</a>
            </li>
        </ul>
        <button class="btn-crystal">Shine</button>
    </div>
</nav>`,
    css: `.glass-crystal-navbar {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(35px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 0 20px rgba(255, 255, 255, 0.1);
    padding: 1.5rem 2rem;
    margin: 1rem auto;
    max-width: 1200px;
    position: relative;
    overflow: hidden;
}

.glass-crystal-navbar::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
        transparent, 
        rgba(255, 255, 255, 0.1), 
        transparent
    );
    animation: crystalShine 4s linear infinite;
}

@keyframes crystalShine {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #06b6d4;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
    animation: crystalSparkle 2s infinite;
}

@keyframes crystalSparkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #06b6d4;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link:hover {
    color: #06b6d4;
}

.btn-crystal {
    background: rgba(6, 182, 212, 0.3);
    color: #06b6d4;
    border: 1px solid rgba(6, 182, 212, 0.5);
    padding: 0.8rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: crystalPulse 2s infinite;
}

@keyframes crystalPulse {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(6, 182, 212, 0.3);
    }
    50% { 
        box-shadow: 0 0 15px rgba(6, 182, 212, 0.6);
    }
}

.btn-crystal:hover {
    background: rgba(6, 182, 212, 0.4);
    transform: translateY(-2px);
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 62: GLASS AURORA ANIMATION
// Features: Northern lights effect with flowing color waves
// Category: Glassmorphism
// ====================================================================
nav62: {
    name: "Glass Aurora Animation",
    category: "glassmorphism",
    html: `<nav class="glass-aurora-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-cloud-moon"></i>
                Aurora
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Sky</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Light</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Dance</a>
            </li>
        </ul>
        <button class="btn-aurora">Dance</button>
    </div>
</nav>`,
    css: `.glass-aurora-navbar {
    background: linear-gradient(45deg, 
        rgba(139, 92, 246, 0.1), 
        rgba(16, 185, 129, 0.1), 
        rgba(59, 130, 246, 0.1)
    );
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    margin: 1rem auto;
    max-width: 1200px;
    position: relative;
    overflow: hidden;
}

.glass-aurora-navbar::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(139, 92, 246, 0.2), 
        rgba(16, 185, 129, 0.2), 
        rgba(59, 130, 246, 0.2), 
        transparent
    );
    animation: auroraFlow 5s linear infinite;
}

@keyframes auroraFlow {
    0% { left: -100%; }
    100% { left: 100%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    display: flex;
    align-items: center;
    animation: auroraColors 6s infinite;
}

@keyframes auroraColors {
    0% { color: #8b5cf6; }
    33% { color: #10b981; }
    66% { color: #3b82f6; }
    100% { color: #8b5cf6; }
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #1e293b;
    transform: translateY(-2px);
}

.btn-aurora {
    background: rgba(255, 255, 255, 0.3);
    color: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: auroraDance 4s infinite;
}

@keyframes auroraDance {
    0%, 100% { 
        background: rgba(139, 92, 246, 0.3);
        color: #8b5cf6;
    }
    33% { 
        background: rgba(16, 185, 129, 0.3);
        color: #10b981;
    }
    66% { 
        background: rgba(59, 130, 246, 0.3);
        color: #3b82f6;
    }
}

.btn-aurora:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}`,
    js: `// Animation already handled in CSS`
},
// ====================================================================
// TEMPLATE 63: MINIMAL BREATH ANIMATION
// Features: Breathing effect with smooth expansion
// Category: Minimal
// ====================================================================
nav63: {
    name: "Minimal Breath Animation",
    category: "minimal",
    html: `<nav class="minimal-breath-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Breathe</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Calm</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Peace</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Zen</a>
            </li>
        </ul>
        <button class="btn-breath">Relax</button>
    </div>
</nav>`,
    css: `.minimal-breath-navbar {
    background: white;
    border: 1px solid #f1f5f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 0;
    animation: breath 4s ease-in-out infinite;
}

@keyframes breath {
    0%, 100% { 
        transform: scale(1);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    50% { 
        transform: scale(1.01);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #1e293b;
    text-decoration: none;
    letter-spacing: -0.5px;
    animation: textBreath 4s ease-in-out infinite;
}

@keyframes textBreath {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 400;
    transition: all 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #1e293b;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link:hover {
    color: #1e293b;
}

.btn-breath {
    background: #1e293b;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    animation: buttonBreath 3s ease-in-out infinite;
}

@keyframes buttonBreath {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.btn-breath:hover {
    background: #374151;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 64: MINIMAL PULSE ANIMATION
// Features: Subtle pulse effects with rhythmic timing
// Category: Minimal
// ====================================================================
nav64: {
    name: "Minimal Pulse Animation",
    category: "minimal",
    html: `<nav class="minimal-pulse-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Pulse</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Beat</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Rhythm</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Flow</a>
            </li>
        </ul>
        <button class="btn-pulse">Start</button>
    </div>
</nav>`,
    css: `.minimal-pulse-navbar {
    background: white;
    border-bottom: 2px solid #f1f5f9;
    padding: 1.5rem 0;
    position: relative;
}

.minimal-pulse-navbar::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #10b981;
    transform: scaleX(0);
    animation: pulseLine 2s ease-in-out infinite;
}

@keyframes pulseLine {
    0%, 100% { transform: scaleX(0); }
    50% { transform: scaleX(1); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    animation: logoPulse 3s infinite;
}

@keyframes logoPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #10b981;
    animation: linkPulse 0.5s;
}

@keyframes linkPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.btn-pulse {
    background: #10b981;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    animation: buttonPulse 2s infinite;
}

@keyframes buttonPulse {
    0%, 100% { 
        box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
    }
    50% { 
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.8);
    }
}

.btn-pulse:hover {
    background: #059669;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 65: MINIMAL FLOAT ANIMATION
// Features: Floating elements with weightless movement
// Category: Minimal
// ====================================================================
nav65: {
    name: "Minimal Float Animation",
    category: "minimal",
    html: `<nav class="minimal-float-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Float</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Air</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Light</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Cloud</a>
            </li>
        </ul>
        <button class="btn-float">Lift</button>
    </div>
</nav>`,
    css: `.minimal-float-navbar {
    background: white;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 1.5rem 0;
    animation: floatContainer 6s ease-in-out infinite;
}

@keyframes floatContainer {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #1e293b;
    text-decoration: none;
    animation: floatLogo 4s ease-in-out infinite;
}

@keyframes floatLogo {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 400;
    transition: all 0.3s;
    animation: floatStagger 3s ease-in-out infinite;
}

.nav-link:nth-child(1) { animation-delay: 0s; }
.nav-link:nth-child(2) { animation-delay: 0.2s; }
.nav-link:nth-child(3) { animation-delay: 0.4s; }
.nav-link:nth-child(4) { animation-delay: 0.6s; }

@keyframes floatStagger {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
}

.nav-link:hover {
    color: #1e293b;
    transform: translateY(-3px);
}

.btn-float {
    background: #1e293b;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    animation: floatButton 5s ease-in-out infinite;
}

@keyframes floatButton {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

.btn-float:hover {
    background: #374151;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 66: MINIMAL GLOW ANIMATION
// Features: Soft glow effects with subtle illumination
// Category: Minimal
// ====================================================================
nav66: {
    name: "Minimal Glow Animation",
    category: "minimal",
    html: `<nav class="minimal-glow-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Glow</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Light</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Shine</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Bright</a>
            </li>
        </ul>
        <button class="btn-glow">Bright</button>
    </div>
</nav>`,
    css: `.minimal-glow-navbar {
    background: white;
    border: 1px solid #f1f5f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 0;
    animation: glowContainer 4s ease-in-out infinite;
}

@keyframes glowContainer {
    0%, 100% { 
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }
    50% { 
        box-shadow: 0 4px 25px rgba(99, 102, 241, 0.1);
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #6366f1;
    text-decoration: none;
    animation: textGlow 3s ease-in-out infinite;
}

@keyframes textGlow {
    0%, 100% { 
        text-shadow: 0 0 0 rgba(99, 102, 241, 0);
    }
    50% { 
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
    }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}

.nav-link:hover {
    color: #6366f1;
    animation: linkGlow 0.5s;
}

@keyframes linkGlow {
    0%, 100% { 
        text-shadow: 0 0 0 rgba(99, 102, 241, 0);
    }
    50% { 
        text-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
    }
}

.btn-glow {
    background: #6366f1;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    animation: buttonGlow 2s infinite;
}

@keyframes buttonGlow {
    0%, 100% { 
        box-shadow: 0 0 0 rgba(99, 102, 241, 0.4);
    }
    50% { 
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
    }
}

.btn-glow:hover {
    background: #4f46e5;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 67: MINIMAL WAVE ANIMATION
// Features: Wave-like motion with smooth transitions
// Category: Minimal
// ====================================================================
nav67: {
    name: "Minimal Wave Animation",
    category: "minimal",
    html: `<nav class="minimal-wave-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Wave</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Flow</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Motion</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Ocean</a>
            </li>
        </ul>
        <button class="btn-wave">Flow</button>
    </div>
</nav>`,
    css: `.minimal-wave-navbar {
    background: white;
    border-bottom: 1px solid #f1f5f9;
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
}

.minimal-wave-navbar::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ec4899, transparent);
    animation: waveFlow 3s linear infinite;
}

@keyframes waveFlow {
    0% { left: -100%; }
    100% { left: 100%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 500;
    color: #1e293b;
    text-decoration: none;
    animation: waveText 4s ease-in-out infinite;
}

@keyframes waveText {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-2px); }
    75% { transform: translateY(2px); }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 400;
    transition: all 0.3s;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ec4899;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.nav-link:hover {
    color: #ec4899;
    animation: waveHover 0.5s;
}

@keyframes waveHover {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}

.btn-wave {
    background: #ec4899;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    animation: waveButton 3s ease-in-out infinite;
}

@keyframes waveButton {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
}

.btn-wave:hover {
    background: #db2777;
}`,
    js: `// Animation already handled in CSS`
},
// ====================================================================
// TEMPLATE 68: SIDEBAR SLIDE ANIMATION
// Features: Smooth slide-in effects with staggered timing
// Category: Sidebar
// ====================================================================
nav68: {
    name: "Sidebar Slide Animation",
    category: "sidebar",
    html: `<div class="sidebar-slide-animation">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-sliders-h"></i>
            Dashboard
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span>Statistics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-user"></i>
                <span>Profile</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.sidebar-slide-animation {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
    transform: translateX(-30px);
    animation: slideInHeader 0.6s ease forwards;
}

@keyframes slideInHeader {
    to { transform: translateX(0); }
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
    transform: translateX(-20px);
    opacity: 0;
    animation: slideInMenu 0.5s ease forwards;
}

.menu-item:nth-child(1) { animation-delay: 0.1s; }
.menu-item:nth-child(2) { animation-delay: 0.2s; }
.menu-item:nth-child(3) { animation-delay: 0.3s; }
.menu-item:nth-child(4) { animation-delay: 0.4s; }
.menu-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInMenu {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    transform: translateX(5px);
}

.menu-item.active a {
    background: rgba(59, 130, 246, 0.2);
    color: white;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 69: SIDEBAR BOUNCE ANIMATION
// Features: Spring-like bounce effects with energetic movement
// Category: Sidebar
// ====================================================================
nav69: {
    name: "Sidebar Bounce Animation",
    category: "sidebar",
    html: `<div class="sidebar-bounce-animation">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-bounce"></i>
            Control Panel
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-rocket"></i>
                <span>Launch</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-star"></i>
                <span>Stars</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-bolt"></i>
                <span>Energy</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.sidebar-bounce-animation {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    display: flex;
    align-items: center;
    animation: bounceHeader 2s infinite;
}

@keyframes bounceHeader {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-5px); }
    60% { transform: translateY(-3px); }
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(124, 58, 237, 0.05);
    color: #7c3aed;
    transform: scale(1.05) translateX(5px);
}

.menu-item.active a {
    background: rgba(124, 58, 237, 0.1);
    color: #7c3aed;
    border-right: 3px solid #7c3aed;
    animation: bounceActive 0.5s;
}

@keyframes bounceActive {
    0%, 20%, 60%, 100% { transform: translateX(0); }
    40% { transform: translateX(8px); }
    80% { transform: translateX(4px); }
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 70: SIDEBAR GLOW ANIMATION
// Features: Magical glow effects with pulse animations
// Category: Sidebar
// ====================================================================
nav70: {
    name: "Sidebar Glow Animation",
    category: "sidebar",
    html: `<div class="sidebar-glow-animation">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-magic"></i>
            Magic Panel
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-sparkles"></i>
                <span>Sparkle</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-wand-magic-sparkles"></i>
                <span>Magic</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-crystal-ball"></i>
                <span>Crystal</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-hat-wizard"></i>
                <span>Wizard</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.sidebar-glow-animation {
    width: 280px;
    height: 100%;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(20px);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(139, 92, 246, 0.2);
    border: 1px solid rgba(139, 92, 246, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #8b5cf6;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    animation: glowHeader 3s infinite;
}

@keyframes glowHeader {
    0%, 100% { 
        text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    }
    50% { 
        text-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
    }
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
    position: relative;
    overflow: hidden;
}

.menu-item a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent);
    transition: left 0.5s ease;
}

.menu-item a:hover::before {
    left: 100%;
}

.menu-item a:hover {
    background: rgba(139, 92, 246, 0.15);
    color: white;
    text-shadow: 0 0 5px rgba(139, 92, 246, 0.8);
}

.menu-item.active a {
    background: rgba(139, 92, 246, 0.2);
    color: white;
    border-right: 3px solid #8b5cf6;
    animation: pulseActive 2s infinite;
}

@keyframes pulseActive {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(139, 92, 246, 0.4);
    }
    50% { 
        box-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
    }
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation already handled in CSS`
},

// ====================================================================
// TEMPLATE 71: ANIMATED GRADIENT NAVIGATION
// Features: Moving gradient background with animations
// Category: Modern
// ====================================================================
nav71: {
    name: "Animated Gradient Navigation",
    category: "modern",
    html: `<nav class="animated-gradient-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-star"></i>
                Animate
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-pulse">Get Started</button>
    </div>
</nav>`,
    css: `.animated-gradient-navbar {
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 400% 400%;
    animation: gradientShift 3s ease infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    padding: 1.5rem 0;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
}

.nav-link:hover {
    color: white;
    transform: translateY(-2px);
}

.btn-pulse {
    background: white;
    color: #667eea;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: pulse 2s infinite;
    transition: all 0.3s;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

.btn-pulse:hover {
    animation: none;
    transform: scale(1.1);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 72: FLOATING ICONS NAVIGATION
// Features: Floating icons with hover animations
// Category: Modern
// ====================================================================
nav72: {
    name: "Floating Icons Navigation",
    category: "modern",
    html: `<nav class="floating-icons-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-rocket"></i>
                Float
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </li>
        </ul>
        <button class="btn-float">Launch</button>
    </div>
</nav>`,
    css: `.floating-icons-navbar {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #fbbf24;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    animation: float 3s ease-in-out infinite;
    animation-delay: calc(var(--i) * 0.2s);
}

.nav-item:nth-child(1) .nav-link { --i: 1; }
.nav-item:nth-child(2) .nav-link { --i: 2; }
.nav-item:nth-child(3) .nav-link { --i: 3; }

.nav-link:hover {
    color: #fbbf24;
    transform: translateY(-3px);
}

.nav-link i {
    font-size: 1.1rem;
}

.btn-float {
    background: #fbbf24;
    color: #1e293b;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: float 2s ease-in-out infinite;
    transition: all 0.3s;
}

.btn-float:hover {
    animation: none;
    transform: translateY(-3px);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 73: GLOWING BORDER NAVIGATION
// Features: Animated glowing borders and effects
// Category: Modern
// ====================================================================
nav73: {
    name: "Glowing Border Navigation",
    category: "modern",
    html: `<nav class="glowing-border-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-bolt"></i>
                Glow
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <button class="btn-glow">Try Now</button>
    </div>
</nav>`,
    css: `.glowing-border-navbar {
    background: #0f172a;
    border: 1px solid #3b82f6;
    box-shadow: 
        0 0 10px rgba(59, 130, 246, 0.5),
        inset 0 0 10px rgba(59, 130, 246, 0.1);
    animation: borderGlow 2s ease-in-out infinite alternate;
    padding: 1.5rem 0;
}

@keyframes borderGlow {
    from {
        box-shadow: 
            0 0 10px rgba(59, 130, 246, 0.5),
            inset 0 0 10px rgba(59, 130, 246, 0.1);
    }
    to {
        box-shadow: 
            0 0 20px rgba(59, 130, 246, 0.8),
            inset 0 0 15px rgba(59, 130, 246, 0.2);
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b82f6;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.nav-logo i {
    margin-right: 8px;
    animation: spin 3s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #3b82f6;
    text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
}

.btn-glow {
    background: transparent;
    color: #3b82f6;
    border: 1px solid #3b82f6;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: buttonGlow 2s ease-in-out infinite alternate;
    transition: all 0.3s;
}

@keyframes buttonGlow {
    from {
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
    }
    to {
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
    }
}

.btn-glow:hover {
    background: #3b82f6;
    color: white;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 74: SLIDE-IN MENU NAVIGATION
// Features: Staggered slide-in animations
// Category: Modern
// ====================================================================
nav74: {
    name: "Slide-in Menu Navigation",
    category: "modern",
    html: `<nav class="slide-in-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">SlideNav</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link slide-item">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link slide-item">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link slide-item">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link slide-item">Contact</a>
            </li>
        </ul>
        <button class="btn-slide">Explore</button>
    </div>
</nav>`,
    css: `.slide-in-navbar {
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    overflow: hidden;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-30px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.slide-item {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transform: translateY(20px);
    opacity: 0;
    animation: slideInUp 0.6s ease-out forwards;
}

.nav-item:nth-child(1) .slide-item { animation-delay: 0.1s; }
.nav-item:nth-child(2) .slide-item { animation-delay: 0.2s; }
.nav-item:nth-child(3) .slide-item { animation-delay: 0.3s; }
.nav-item:nth-child(4) .slide-item { animation-delay: 0.4s; }

@keyframes slideInUp {
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.slide-item:hover {
    color: #7c3aed;
    transform: translateY(-2px);
}

.btn-slide {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transform: translateX(20px);
    opacity: 0;
    animation: slideInRight 0.8s ease-out 0.5s forwards;
    transition: all 0.3s;
}

@keyframes slideInRight {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.btn-slide:hover {
    background: #6d28d9;
    transform: translateY(-2px);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 75: MORPHING NAVIGATION
// Features: Shape-shifting animations
// Category: Modern
// ====================================================================
nav75: {
    name: "Morphing Navigation",
    category: "modern",
    html: `<nav class="morphing-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-shapes"></i>
                Morph
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link morph-item">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link morph-item">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link morph-item">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link morph-item">Contact</a>
            </li>
        </ul>
        <button class="btn-morph">Transform</button>
    </div>
</nav>`,
    css: `.morphing-navbar {
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 1.5rem 0;
    border-radius: 15px;
    margin: 1rem auto;
    max-width: 1200px;
    animation: morphBackground 4s ease-in-out infinite;
}

@keyframes morphBackground {
    0%, 100% { border-radius: 15px; }
    50% { border-radius: 25px; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    animation: morphIcon 3s ease-in-out infinite;
}

@keyframes morphIcon {
    0%, 100% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(90deg) scale(1.1); }
    50% { transform: rotate(180deg) scale(1); }
    75% { transform: rotate(270deg) scale(1.1); }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.morph-item {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    transition: all 0.3s;
    animation: morphItem 3s ease-in-out infinite;
    animation-delay: calc(var(--i) * 0.5s);
}

.nav-item:nth-child(1) .morph-item { --i: 1; }
.nav-item:nth-child(2) .morph-item { --i: 2; }
.nav-item:nth-child(3) .morph-item { --i: 3; }
.nav-item:nth-child(4) .morph-item { --i: 4; }

@keyframes morphItem {
    0%, 100% { border-radius: 10px; transform: scale(1); }
    50% { border-radius: 20px; transform: scale(1.05); }
}

.morph-item:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1) !important;
}

.btn-morph {
    background: white;
    color: #667eea;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: morphButton 2s ease-in-out infinite;
    transition: all 0.3s;
}

@keyframes morphButton {
    0%, 100% { border-radius: 10px; transform: scale(1); }
    50% { border-radius: 20px; transform: scale(1.05); }
}

.btn-morph:hover {
    animation: none;
    transform: scale(1.1);
}`,
    js: `// No JavaScript required for this navigation`
},
// ====================================================================
// TEMPLATE 76: ANIMATED BLUR GLASS
// Features: Dynamic blur animation with hover effects
// Category: Glassmorphism
// ====================================================================
nav76: {
    name: "Animated Blur Glass",
    category: "glassmorphism",
    html: `<nav class="animated-blur-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-wave-square"></i>
                BlurEffect
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-pulse">Hover Me</button>
    </div>
</nav>`,
    css: `.animated-blur-navbar {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.5s ease;
}

.animated-blur-navbar:hover {
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #7c3aed;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7c3aed;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-pulse {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: pulse 2s infinite;
}

.btn-pulse:hover {
    animation: none;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(124, 58, 237, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(124, 58, 237, 0);
    }
}`,
    js: `// Additional hover effects
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.animated-blur-navbar');
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});`
},

// ====================================================================
// TEMPLATE 77: GRADIENT SHIFT GLASS
// Features: Animated gradient background
// Category: Glassmorphism
// ====================================================================
nav77: {
    name: "Gradient Shift Glass",
    category: "glassmorphism",
    html: `<nav class="gradient-shift-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-sync-alt"></i>
                GradientShift
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.gradient-shift-navbar {
    background: linear-gradient(-45deg, 
        rgba(124, 58, 237, 0.2), 
        rgba(236, 72, 153, 0.2),
        rgba(59, 130, 246, 0.2),
        rgba(16, 185, 129, 0.2)
    );
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    background-size: 400% 400%;
    animation: gradientShift 6s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    animation: spin 3s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #7c3aed;
    animation: bounce 0.5s;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #7c3aed;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No additional JavaScript required`
},

// ====================================================================
// TEMPLATE 78: FLOATING PARTICLES GLASS
// Features: Animated floating particles
// Category: Glassmorphism
// ====================================================================
nav78: {
    name: "Floating Particles Glass",
    category: "glassmorphism",
    html: `<nav class="floating-particles-navbar">
    <div class="particles-container" id="particles"></div>
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-sparkles"></i>
                Particles
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.floating-particles-navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle {
    position: absolute;
    background: rgba(124, 58, 237, 0.3);
    border-radius: 50%;
    animation: float 6s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(100%) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100%) translateX(20px);
        opacity: 0;
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    animation: sparkle 2s infinite;
}

@keyframes sparkle {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.8;
    }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #7c3aed;
}`,
    js: `// Particle generation
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = Math.random() * 4 + 4;
        
        particle.style.width = \`\${size}px\`;
        particle.style.height = \`\${size}px\`;
        particle.style.left = \`\${left}%\`;
        particle.style.animationDelay = \`\${delay}s\`;
        particle.style.animationDuration = \`\${duration}s\`;
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            particle.remove();
            createParticle(container);
        }, (delay + duration) * 1000);
    }
});`
},

// ====================================================================
// TEMPLATE 79: MORPHING GLASS
// Features: Shape-shifting glass elements
// Category: Glassmorphism
// ====================================================================
nav79: {
    name: "Morphing Glass",
    category: "glassmorphism",
    html: `<nav class="morphing-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-shapes"></i>
                Morph
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link morph-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link morph-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link morph-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link morph-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.morphing-glass-navbar {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 0px;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.morphing-glass-navbar:hover {
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
    margin: 0 1rem;
    transform: translateY(-5px);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-logo i {
    margin-right: 8px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.morphing-glass-navbar:hover .nav-logo a {
    transform: scale(1.1);
}

.morphing-glass-navbar:hover .nav-logo i {
    transform: rotate(180deg);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.morph-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.morph-link:hover {
    background: #7c3aed;
    color: white;
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.3);
    border-radius: 15px;
}`,
    js: `// Morphing animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.morphing-glass-navbar');
    const links = document.querySelectorAll('.morph-link');
    
    navbar.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    navbar.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(3deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});`
},

// ====================================================================
// TEMPLATE 80: GLITCH GLASS
// Features: Cyberpunk glitch effects
// Category: Glassmorphism
// ====================================================================
nav80: {
    name: "Glitch Glass",
    category: "glassmorphism",
    html: `<nav class="glitch-glass-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#" class="glitch-text" data-text="Glitch">
                <i class="fas fa-bolt"></i>
                Glitch
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.glitch-glass-navbar {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
}

.glitch-glass-navbar:hover {
    animation: glitch-bg 0.3s infinite;
}

@keyframes glitch-bg {
    0% {
        transform: translateX(0);
        background: rgba(255, 255, 255, 0.8);
    }
    20% {
        transform: translateX(-2px);
        background: rgba(236, 72, 153, 0.1);
    }
    40% {
        transform: translateX(2px);
        background: rgba(59, 130, 246, 0.1);
    }
    60% {
        transform: translateX(-1px);
        background: rgba(255, 255, 255, 0.9);
    }
    80% {
        transform: translateX(1px);
        background: rgba(16, 185, 129, 0.1);
    }
    100% {
        transform: translateX(0);
        background: rgba(255, 255, 255, 0.8);
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.glitch-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: #7c3aed;
    text-decoration: none;
    display: flex;
    align-items: center;
    position: relative;
}

.glitch-text i {
    margin-right: 8px;
}

.glitch-text:hover::before,
.glitch-text:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
}

.glitch-text:hover::before {
    animation: glitch-1 0.5s infinite;
    color: #ec4899;
    left: 2px;
    text-shadow: 2px 0 #ec4899;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
}

.glitch-text:hover::after {
    animation: glitch-2 0.5s infinite;
    color: #60a5fa;
    left: -2px;
    text-shadow: -2px 0 #60a5fa;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
}

@keyframes glitch-1 {
    0% {
        transform: translateX(0);
    }
    33% {
        transform: translateX(-1px);
    }
    66% {
        transform: translateX(1px);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes glitch-2 {
    0% {
        transform: translateX(0);
    }
    33% {
        transform: translateX(1px);
    }
    66% {
        transform: translateX(-1px);
    }
    100% {
        transform: translateX(0);
    }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.glitch-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.glitch-link:hover {
    color: #7c3aed;
    animation: text-glitch 0.3s infinite;
}

@keyframes text-glitch {
    0% {
        transform: translateX(0);
        color: #7c3aed;
    }
    25% {
        transform: translateX(-1px);
        color: #ec4899;
    }
    50% {
        transform: translateX(1px);
        color: #60a5fa;
    }
    75% {
        transform: translateX(-1px);
        color: #10b981;
    }
    100% {
        transform: translateX(0);
        color: #7c3aed;
    }
}`,
    js: `// Enhanced glitch effects
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.glitch-glass-navbar');
    const links = document.querySelectorAll('.glitch-link');
    
    let glitchInterval;
    
    navbar.addEventListener('mouseenter', function() {
        // Start random glitch effects
        glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                this.style.transform = \`translateX(\${Math.random() > 0.5 ? '-' : ''}\${Math.floor(Math.random() * 3)}px)\`;
                setTimeout(() => {
                    this.style.transform = 'translateX(0)';
                }, 100);
            }
        }, 500);
    });
    
    navbar.addEventListener('mouseleave', function() {
        clearInterval(glitchInterval);
        this.style.transform = 'translateX(0)';
    });
    
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'text-glitch 0.3s infinite';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
            this.style.color = '#4b5563';
        });
    });
});`
},
// ====================================================================
// TEMPLATE 80: ANIMATED BORDER BOTTOM
// Features: Smooth underline animation on hover
// Category: Minimal
// ====================================================================
nav80: {
    name: "Animated Border Bottom",
    category: "minimal",
    html: `<nav class="animated-border-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal80</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.animated-border-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 81: SLIDE UP ANIMATION
// Features: Menu items slide up with smooth transition
// Category: Minimal
// ====================================================================
nav81: {
    name: "Slide Up Animation",
    category: "minimal",
    html: `<nav class="slide-up-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal81</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.slide-up-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.nav-link:hover {
    color: #1e293b;
    transform: translateY(-3px);
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #10b981;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
}

.nav-link:hover::before {
    transform: scaleX(1);
    transform-origin: left;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 82: FADE IN ANIMATION
// Features: Smooth fade-in with background transition
// Category: Minimal
// ====================================================================
nav82: {
    name: "Fade In Animation",
    category: "minimal",
    html: `<nav class="fade-in-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal82</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.fade-in-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    transition: all 0.4s ease;
    opacity: 0.8;
}

.nav-link:hover {
    opacity: 1;
    color: #1e293b;
    background: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 83: BOUNCE EFFECT
// Features: Playful bounce animation on hover
// Category: Minimal
// ====================================================================
nav83: {
    name: "Bounce Effect",
    category: "minimal",
    html: `<nav class="bounce-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Minimal83</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Projects</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.bounce-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
}

.nav-link:hover {
    color: #1e293b;
    transform: scale(1.1);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #f59e0b;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.nav-link:hover::after {
    transform: scaleX(1);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 84: TYPEWRITER EFFECT
// Features: Typewriter animation on logo
// Category: Minimal
// ====================================================================
nav84: {
    name: "Typewriter Effect",
    category: "minimal",
    html: `<nav class="typewriter-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#" class="typewriter-text">Minimal84</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.typewriter-navbar {
    background: white;
    padding: 1.5rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.typewriter-text {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    border-right: 2px solid #3b82f6;
    white-space: nowrap;
    animation: typewriter 3s steps(20) 1s 1 normal both,
               blinkCursor 0.8s steps(20) infinite normal;
}

@keyframes typewriter {
    from { width: 0; }
    to { width: 100%; }
}

@keyframes blinkCursor {
    from { border-right-color: #3b82f6; }
    to { border-right-color: transparent; }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #1e293b;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #ef4444;
    transition: width 0.3s ease;
}

.nav-link:hover::before {
    width: 100%;
}`,
    js: `// Typewriter effect reset on hover
document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.querySelector('.typewriter-text');
    
    if (typewriterText) {
        typewriterText.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    }
});`
},
// ====================================================================
// TEMPLATE 85: ANIMATED GRADIENT SIDEBAR
// Features: Sidebar with animated gradient background
// Category: Sidebar
// ====================================================================
nav85: {
    name: "Animated Gradient Sidebar",
    category: "sidebar",
    html: `<div class="animated-gradient-sidebar">
    <div class="sidebar-header">
        <h2>Dashboard</h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-bar"></i>
                <span>Analytics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-users"></i>
                <span>Users</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.animated-gradient-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    transform: translateX(8px);
}

.menu-item.active a {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-right: 3px solid white;
    transform: translateX(5px);
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// No JavaScript required for this sidebar`
},

// ====================================================================
// TEMPLATE 86: SLIDE-IN SIDEBAR
// Features: Sidebar with slide-in animation
// Category: Sidebar
// ====================================================================
nav86: {
    name: "Slide-in Sidebar",
    category: "sidebar",
    html: `<div class="slide-in-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-bars"></i>
            Menu
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-user"></i>
                <span>Profile</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.slide-in-sidebar {
    width: 280px;
    height: 100%;
    background: #1e293b;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
    transform: translateX(-100%);
    animation: slideIn 0.6s ease forwards;
    opacity: 0;
}

.menu-item:nth-child(1) a { animation-delay: 0.1s; }
.menu-item:nth-child(2) a { animation-delay: 0.2s; }
.menu-item:nth-child(3) a { animation-delay: 0.3s; }
.menu-item:nth-child(4) a { animation-delay: 0.4s; }

@keyframes slideIn {
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
    transform: translateX(5px);
}

.menu-item.active a {
    background: rgba(59, 130, 246, 0.2);
    color: white;
    border-right: 3px solid #3b82f6;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Animation triggers on page load automatically`
},

// ====================================================================
// TEMPLATE 87: BOUNCING ICONS SIDEBAR
// Features: Sidebar with bouncing icon animations
// Category: Sidebar
// ====================================================================
nav87: {
    name: "Bouncing Icons Sidebar",
    category: "sidebar",
    html: `<div class="bouncing-icons-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-star"></i>
            Premium
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-rocket"></i>
                <span>Projects</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-chart-line"></i>
                <span>Statistics</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.bouncing-icons-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f9;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
    color: #f59e0b;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #64748b;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
}

.menu-item a i {
    transition: transform 0.3s ease;
}

.menu-item a:hover i {
    animation: bounce 0.6s ease;
}

@keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0); }
    40% { transform: translateY(-8px); }
    80% { transform: translateY(-4px); }
}

.menu-item a:hover {
    background: #f8fafc;
    color: #1e293b;
    transform: translateX(5px);
}

.menu-item.active a {
    background: #f8fafc;
    color: #1e293b;
    border-right: 3px solid #7c3aed;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Bouncing animation triggers on hover automatically`
},

// ====================================================================
// TEMPLATE 88: PULSE GLOW SIDEBAR
// Features: Sidebar with pulsing glow effects
// Category: Sidebar
// ====================================================================
nav88: {
    name: "Pulse Glow Sidebar",
    category: "sidebar",
    html: `<div class="pulse-glow-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-bolt"></i>
            Energy
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item active">
            <a href="#">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-fire"></i>
                <span>Trending</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-shield-alt"></i>
                <span>Security</span>
            </a>
        </li>
        <li class="menu-item">
            <a href="#">
                <i class="fas fa-cog"></i>
                <span>Settings</span>
            </a>
        </li>
    </ul>
</div>`,
    css: `.pulse-glow-sidebar {
    width: 280px;
    height: 100%;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #334155;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #60a5fa;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

.sidebar-header i {
    margin-right: 12px;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 5px;
}

.menu-item a {
    display: flex;
    align-items: center;
    padding: 12px 25px;
    color: #cbd5e1;
    text-decoration: none;
    transition: all 0.3s ease;
    border-right: 3px solid transparent;
}

.menu-item.active a {
    background: rgba(96, 165, 250, 0.2);
    color: white;
    border-right: 3px solid #60a5fa;
    animation: pulseGlow 2s infinite;
}

@keyframes pulseGlow {
    0%, 100% { 
        box-shadow: 0 0 5px rgba(96, 165, 250, 0.3);
    }
    50% { 
        box-shadow: 0 0 20px rgba(96, 165, 250, 0.6);
    }
}

.menu-item a:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
}

.menu-item i {
    margin-right: 12px;
    width: 20px;
    text-align: center;
}`,
    js: `// Pulse animation runs automatically for active items`
},

// ====================================================================
// TEMPLATE 89: FLIP CARD SIDEBAR
// Features: Sidebar with flip card animation
// Category: Sidebar
// ====================================================================
nav89: {
    name: "Flip Card Sidebar",
    category: "sidebar",
    html: `<div class="flip-card-sidebar">
    <div class="sidebar-header">
        <h2>
            <i class="fas fa-sync"></i>
            Interactive
        </h2>
    </div>
    <ul class="sidebar-menu">
        <li class="menu-item">
            <a href="#" class="flip-item">
                <div class="flip-front">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </div>
                <div class="flip-back">
                    <span>Welcome Home!</span>
                </div>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" class="flip-item">
                <div class="flip-front">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </div>
                <div class="flip-back">
                    <span>Your Profile</span>
                </div>
            </a>
        </li>
        <li class="menu-item">
            <a href="#" class="flip-item">
                <div class="flip-front">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </div>
                <div class="flip-back">
                    <span>Configure</span>
                </div>
            </a>
        </li>
    </ul>
</div>`,
    css: `.flip-card-sidebar {
    width: 280px;
    height: 100%;
    background: white;
    padding: 25px 0;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f9;
    perspective: 1000px;
}

.sidebar-header {
    padding: 0 25px 25px;
    border-bottom: 1px solid #f1f5f9;
}

.sidebar-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
}

.sidebar-header i {
    margin-right: 12px;
    color: #7c3aed;
}

.sidebar-menu {
    list-style: none;
    margin-top: 25px;
}

.menu-item {
    margin-bottom: 8px;
    padding: 0 15px;
}

.flip-item {
    display: block;
    height: 50px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    text-decoration: none;
    cursor: pointer;
}

.flip-item:hover {
    transform: rotateY(180deg);
}

.flip-front, .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    padding: 0 15px;
    border-radius: 10px;
    border: 1px solid #f1f5f9;
}

.flip-front {
    background: #f8fafc;
    color: #64748b;
    gap: 12px;
}

.flip-back {
    background: #7c3aed;
    color: white;
    transform: rotateY(180deg);
    justify-content: center;
    font-weight: 600;
}

.flip-front i {
    width: 20px;
    text-align: center;
}`,
    js: `// Flip animation triggers on hover automatically`
},
// ====================================================================
// TEMPLATE 90: ANIMATED GRADIENT DARK NAV
// Features: Pulsing gradient and bouncing animations
// Category: Dark
// ====================================================================
nav90: {
    name: "Animated Gradient Dark Nav",
    category: "dark",
    html: `<nav class="animated-gradient-dark-nav">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-star"></i>
                Animate
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-pulse">Explore</button>
    </div>
</nav>`,
    css: `.animated-gradient-dark-nav {
    background: linear-gradient(-45deg, #0f172a, #1e293b, #334155, #475569);
    background-size: 400% 400%;
    animation: gradientShift 6s ease infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(139, 92, 246, 0.3);
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #8b5cf6;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: #8b5cf6;
    transition: left 0.3s;
}

.nav-link:hover::before {
    left: 0;
}

.nav-link:hover {
    color: white;
}

.btn-pulse {
    background: #8b5cf6;
    color: white;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
}

.btn-pulse:hover {
    transform: translateY(-2px);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 91: GLITCH EFFECT DARK NAV
// Features: Cyberpunk glitch animations
// Category: Dark
// ====================================================================
nav91: {
    name: "Glitch Effect Dark Nav",
    category: "dark",
    html: `<nav class="glitch-dark-nav">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#" class="glitch-text" data-text="Glitch">Glitch</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link glitch-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.glitch-dark-nav {
    background: #0f0f0f;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    padding: 1.5rem 0;
    border-bottom: 1px solid #00ff88;
    position: relative;
    overflow: hidden;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.glitch-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00ff88;
    text-decoration: none;
    position: relative;
    animation: glitch-skew 4s infinite linear;
    text-shadow: 0 0 5px #00ff88;
}

@keyframes glitch-skew {
    0% { transform: skew(0deg); }
    10% { transform: skew(2deg); }
    20% { transform: skew(-1deg); }
    30% { transform: skew(1deg); }
    40% { transform: skew(0deg); }
    100% { transform: skew(0deg); }
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch-text::before {
    animation: glitch-anim-1 3s infinite linear alternate-reverse;
    color: #ff0080;
    z-index: -1;
}

.glitch-text::after {
    animation: glitch-anim-2 2s infinite linear alternate-reverse;
    color: #0080ff;
    z-index: -2;
}

@keyframes glitch-anim-1 {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
    100% { transform: translate(0); }
}

@keyframes glitch-anim-2 {
    0% { transform: translate(0); }
    20% { transform: translate(2px, -2px); }
    40% { transform: translate(2px, 2px); }
    60% { transform: translate(-2px, -2px); }
    80% { transform: translate(-2px, 2px); }
    100% { transform: translate(0); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.glitch-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.glitch-link:hover {
    color: #00ff88;
    animation: text-flicker 0.3s linear;
    text-shadow: 0 0 8px #00ff88;
}

@keyframes text-flicker {
    0% { opacity: 1; transform: translateX(0); }
    25% { opacity: 0.8; transform: translateX(-1px); }
    50% { opacity: 0.6; transform: translateX(1px); }
    75% { opacity: 0.8; transform: translateX(-1px); }
    100% { opacity: 1; transform: translateX(0); }
}`,
    js: `// Additional glitch effects on click
document.addEventListener('DOMContentLoaded', function() {
    const glitchLinks = document.querySelectorAll('.glitch-link');
    
    glitchLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.animation = 'text-flicker 0.5s linear';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});`
},

// ====================================================================
// TEMPLATE 92: FLOATING PARTICLES DARK NAV
// Features: Animated floating particles
// Category: Dark
// ====================================================================
nav92: {
    name: "Floating Particles Dark Nav",
    category: "dark",
    html: `<nav class="particles-dark-nav">
    <div class="particles-container" id="particles"></div>
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Particles</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Gallery</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.particles-dark-nav {
    background: #0f172a;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid rgba(59, 130, 246, 0.3);
}

.particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle {
    position: absolute;
    background: #3b82f6;
    border-radius: 50%;
    animation: float 6s infinite linear;
}

@keyframes float {
    0% {
        transform: translateY(100%) translateX(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100%) translateX(20px);
        opacity: 0;
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #3b82f6;
}`,
    js: `// Generate particles dynamically
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = Math.random() * 4 + 4;
        
        particle.style.width = \`\${size}px\`;
        particle.style.height = \`\${size}px\`;
        particle.style.left = \`\${left}%\`;
        particle.style.animationDelay = \`\${delay}s\`;
        particle.style.animationDuration = \`\${duration}s\`;
        
        container.appendChild(particle);
        
        // Remove and recreate particle after animation
        setTimeout(() => {
            particle.remove();
            createParticle(container);
        }, (duration + delay) * 1000);
    }
});`
},

// ====================================================================
// TEMPLATE 93: WAVE ANIMATION DARK NAV
// Features: Liquid wave animations
// Category: Dark
// ====================================================================
nav93: {
    name: "Wave Animation Dark Nav",
    category: "dark",
    html: `<nav class="wave-dark-nav">
    <div class="wave-container">
        <div class="wave wave-1"></div>
        <div class="wave wave-2"></div>
    </div>
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-water"></i>
                Wave
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Services</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.wave-dark-nav {
    background: #0f172a;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid rgba(6, 182, 212, 0.3);
}

.wave-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    overflow: hidden;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(6, 182, 212, 0.4), 
        transparent
    );
}

.wave-1 {
    animation: wave-anim-1 4s infinite linear;
}

.wave-2 {
    animation: wave-anim-2 3s infinite linear;
    opacity: 0.5;
}

@keyframes wave-anim-1 {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
}

@keyframes wave-anim-2 {
    0% { transform: translateX(0%); }
    100% { transform: translateX(50%); }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    color: #06b6d4;
    animation: water-drop 2s infinite;
}

@keyframes water-drop {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-3px) scale(1.1); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #06b6d4;
    transform: translateY(-2px);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 94: NEON SCAN LINES DARK NAV
// Features: Matrix-style scan line effects
// Category: Dark
// ====================================================================
nav94: {
    name: "Neon Scan Lines Dark Nav",
    category: "dark",
    html: `<nav class="scan-dark-nav">
    <div class="scan-lines">
        <div class="scan-line"></div>
        <div class="scan-line"></div>
        <div class="scan-line"></div>
    </div>
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#" class="scan-text">Matrix</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link scan-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link scan-link">Data</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link scan-link">System</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link scan-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.scan-dark-nav {
    background: #000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #00ff41;
}

.scan-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.scan-line {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: #00ff41;
    animation: scan 3s infinite linear;
    box-shadow: 0 0 5px #00ff41;
}

.scan-line:nth-child(1) {
    animation-delay: 0s;
}

.scan-line:nth-child(2) {
    animation-delay: 1s;
}

.scan-line:nth-child(3) {
    animation-delay: 2s;
}

@keyframes scan {
    0% { top: 0; opacity: 1; }
    50% { opacity: 0.5; }
    100% { top: 100%; opacity: 1; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 2;
}

.scan-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00ff41;
    text-decoration: none;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 5px #00ff41;
    animation: text-flicker 3s infinite;
}

@keyframes text-flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
    75% { opacity: 0.9; }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.scan-link {
    color: #00ff41;
    text-decoration: none;
    font-weight: 500;
    font-family: 'Courier New', monospace;
    transition: all 0.3s;
    position: relative;
}

.scan-link::before {
    content: '>';
    margin-right: 8px;
    opacity: 0;
    transition: opacity 0.3s;
}

.scan-link:hover::before {
    opacity: 1;
}

.scan-link:hover {
    text-shadow: 0 0 8px #00ff41;
    transform: translateX(5px);
}`,
    js: `// Add random text flicker effect
document.addEventListener('DOMContentLoaded', function() {
    const scanText = document.querySelector('.scan-text');
    
    function randomFlicker() {
        const duration = Math.random() * 100 + 50;
        scanText.style.animationDuration = \`\${duration}ms\`;
        
        setTimeout(randomFlicker, Math.random() * 3000 + 1000);
    }
    
    randomFlicker();
});`
},
// ====================================================================
// TEMPLATE 95: ANIMATED GRADIENT NAVIGATION
// Features: Dynamic gradient background with animations
// Category: Modern
// ====================================================================
nav95: {
    name: "Animated Gradient Navigation",
    category: "modern",
    html: `<nav class="animated-gradient-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-star"></i>
                Modern
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
        </ul>
        <button class="btn-pulse">Get Started</button>
    </div>
</nav>`,
    css: `.animated-gradient-navbar {
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
    background-size: 300% 300%;
    animation: gradientShift 3s ease infinite;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    padding: 1.5rem 0;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
}

.nav-logo i {
    margin-right: 8px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
}

.nav-link:hover {
    color: white;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}

.btn-pulse {
    background: white;
    color: #667eea;
    border: none;
    padding: 0.8rem 1.8rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
    100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
}

.btn-pulse:hover {
    transform: translateY(-2px);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 96: FLOATING ICONS NAVIGATION
// Features: Floating icons with hover animations
// Category: Modern
// ====================================================================
nav96: {
    name: "Floating Icons Navigation",
    category: "modern",
    html: `<nav class="floating-icons-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">FloatNav</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </li>
        </ul>
        <button class="btn-float">Menu</button>
    </div>
</nav>`,
    css: `.floating-icons-navbar {
    background: #1e293b;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 1.5rem 0;
    border-radius: 15px;
    margin: 1rem auto;
    max-width: 1200px;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 1.5rem;
}

.nav-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    animation: float 3s ease-in-out infinite;
}

.nav-item:nth-child(2) .nav-link {
    animation-delay: 0.2s;
}

.nav-item:nth-child(3) .nav-link {
    animation-delay: 0.4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.nav-link:hover {
    background: #3b82f6;
    color: white;
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}

.nav-link i {
    font-size: 1.1rem;
}

.btn-float {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-float:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 97: SLIDE-IN NAVIGATION
// Features: Staggered slide-in animations
// Category: Modern
// ====================================================================
nav97: {
    name: "Slide-In Navigation",
    category: "modern",
    html: `<nav class="slide-in-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">SlideNav</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <button class="btn-slide">Contact</button>
    </div>
</nav>`,
    css: `.slide-in-navbar {
    background: white;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
    border-radius: 12px;
    margin: 1rem auto;
    max-width: 1200px;
    overflow: hidden;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    text-decoration: none;
    animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
    from { transform: translateX(-30px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transform: translateY(20px);
    opacity: 0;
    animation: slideInUp 0.6s ease-out forwards;
}

.nav-item:nth-child(1) .nav-link { animation-delay: 0.1s; }
.nav-item:nth-child(2) .nav-link { animation-delay: 0.2s; }
.nav-item:nth-child(3) .nav-link { animation-delay: 0.3s; }
.nav-item:nth-child(4) .nav-link { animation-delay: 0.4s; }

@keyframes slideInUp {
    to { transform: translateY(0); opacity: 1; }
}

.nav-link:hover {
    color: #7c3aed;
}

.btn-slide {
    background: linear-gradient(45deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transform: translateX(20px);
    opacity: 0;
    animation: slideInRight 0.8s ease-out 0.5s forwards;
}

@keyframes slideInRight {
    to { transform: translateX(0); opacity: 1; }
}

.btn-slide:hover {
    transform: translateX(0) translateY(-2px);
    box-shadow: 0 5px 15px rgba(124, 58, 237, 0.4);
}`,
    js: `// Animation triggers on page load
document.addEventListener('DOMContentLoaded', function() {
    // Animations are handled by CSS
});`
},

// ====================================================================
// TEMPLATE 98: GLOW BORDER NAVIGATION
// Features: Animated glowing border effects
// Category: Modern
// ====================================================================
nav98: {
    name: "Glow Border Navigation",
    category: "modern",
    html: `<nav class="glow-border-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">
                <i class="fas fa-bolt"></i>
                Glow
            </a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Features</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Pricing</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
    </div>
</nav>`,
    css: `.glow-border-navbar {
    background: #0f172a;
    border: 1px solid #3b82f6;
    box-shadow: 
        0 0 15px rgba(59, 130, 246, 0.5),
        inset 0 0 15px rgba(59, 130, 246, 0.1);
    animation: borderGlow 2s ease-in-out infinite alternate;
    padding: 1.5rem 0;
    border-radius: 12px;
    margin: 1rem auto;
    max-width: 1200px;
}

@keyframes borderGlow {
    from { 
        box-shadow: 
            0 0 15px rgba(59, 130, 246, 0.5),
            inset 0 0 15px rgba(59, 130, 246, 0.1);
    }
    to { 
        box-shadow: 
            0 0 25px rgba(59, 130, 246, 0.8),
            inset 0 0 20px rgba(59, 130, 246, 0.2);
    }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #3b82f6;
    text-decoration: none;
    display: flex;
    align-items: center;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.nav-logo i {
    margin-right: 8px;
    animation: spin 3s linear infinite;
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-item {
    margin-left: 2rem;
}

.nav-link {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s;
    position: relative;
}

.nav-link:hover {
    color: #3b82f6;
    text-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    box-shadow: 0 0 8px #3b82f6;
    transition: width 0.3s;
}

.nav-link:hover::after {
    width: 100%;
}`,
    js: `// No JavaScript required for this navigation`
},

// ====================================================================
// TEMPLATE 99: MORPHING NAVIGATION
// Features: Morphing shapes and smooth transitions
// Category: Modern
// ====================================================================
nav99: {
    name: "Morphing Navigation",
    category: "modern",
    html: `<nav class="morphing-navbar">
    <div class="nav-container">
        <div class="nav-logo">
            <a href="#">Morph</a>
        </div>
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="#" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">About</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Work</a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact</a>
            </li>
        </ul>
        <button class="btn-morph">Let's Go</button>
    </div>
</nav>`,
    css: `.morphing-navbar {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 20px 8px 20px 8px;
    animation: morphShape 4s ease-in-out infinite;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 1.5rem 0;
    margin: 1rem auto;
    max-width: 1200px;
}

@keyframes morphShape {
    0%, 100% { border-radius: 20px 8px 20px 8px; }
    25% { border-radius: 8px 20px 8px 20px; }
    50% { border-radius: 20px 20px 8px 8px; }
    75% { border-radius: 8px 8px 20px 20px; }
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.nav-logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
    animation: colorChange 3s ease-in-out infinite;
}

@keyframes colorChange {
    0%, 100% { color: white; }
    50% { color: #ffe66d; }
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem 1.2rem;
    border-radius: 10px;
    transition: all 0.3s;
    animation: bounceIn 1s ease-out;
}

@keyframes bounceIn {
    0% { transform: scale(0); opacity: 0; }
    60% { transform: scale(1.1); }
    100% { transform: scale(1); opacity: 1; }
}

.nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

.btn-morph {
    background: rgba(255, 255, 255, 0.9);
    color: #ff6b6b;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    animation: pulseMorph 2s ease-in-out infinite;
}

@keyframes pulseMorph {
    0%, 100% { 
        transform: scale(1);
        border-radius: 12px;
    }
    50% { 
        transform: scale(1.05);
        border-radius: 16px;
    }
}

.btn-morph:hover {
    background: white;
    transform: scale(1.1);
}`,
    js: `// No JavaScript required for this navigation`
},
    

};
// ====================================================================
// MAIN FUNCTIONALITY - NAVIGATION TEMPLATES GALLERY
// Handles modal, code preview, copy functionality and filtering
// ====================================================================

// Fixed navigation templates functionality
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
            if (templateCodes[templateId]) {
                currentTemplate = templateCodes[templateId];
                
                // Update code content
                htmlCode.querySelector('code').textContent = currentTemplate.html;
                cssCode.querySelector('code').textContent = currentTemplate.css;
                jsCode.querySelector('code').textContent = currentTemplate.js;
                
                // Reset to HTML tab and hide notification
                showTab('html');
                copyNotification.style.display = 'none'; // Hide notification when modal opens
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        copyNotification.style.display = 'none'; // Hide notification when modal closes
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            copyNotification.style.display = 'none'; // Hide notification when modal closes
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

    // Copy code to clipboard - FIXED VERSION
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

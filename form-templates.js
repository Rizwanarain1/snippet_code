// Form templates data
const templateCodes = {
    // ====================================================================
    // TEMPLATE 1: Modern Login Form
    // ====================================================================
    form1: {
        name: "Modern Login Form",
        category: "login modern",
        html: `<div class="form-container">
    <form class="modern-form">
        <h3>Login Form</h3>
        <div class="input-group">
            <input type="email" placeholder="Email Address" required>
            <i class="fas fa-envelope"></i>
        </div>
        <div class="input-group">
            <input type="password" placeholder="Password" required>
            <i class="fas fa-lock"></i>
        </div>
        <button type="submit" class="form-submit-btn">Login</button>
    </form>
</div>`,
        css: `.modern-form {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    max-width: 320px;
    margin: 0 auto;
}

.modern-form h3 {
    margin-bottom: 15px;
    color: #1e293b;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
}

.input-group {
    position: relative;
    margin-bottom: 15px;
}

.input-group input {
    width: 100%;
    padding: 12px 15px 12px 40px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    background: white;
    color: #1e293b;
}

.input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.input-group i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.9rem;
}

.form-submit-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.form-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(124, 58, 237, 0.3);
}`,
        js: `// Modern login form functionality
const loginForm = document.querySelector('.modern-form');
if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Form validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate login process
        const submitBtn = this.querySelector('.form-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Logging in...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Login successful! (This is a demo)');
            loginForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}`
    },
    
    // ====================================================================
    // TEMPLATE 2: Contact Form
    // ====================================================================
    form2: {
        name: "Contact Form",
        category: "contact modern",
        html: `<div class="form-container">
    <form class="contact-form">
        <h3>Contact Us</h3>
        <div class="input-group">
            <input type="text" placeholder="Full Name" required>
            <i class="fas fa-user"></i>
        </div>
        <div class="input-group">
            <input type="email" placeholder="Email Address" required>
            <i class="fas fa-envelope"></i>
        </div>
        <div class="input-group">
            <textarea placeholder="Your Message" rows="3" required></textarea>
            <i class="fas fa-comment"></i>
        </div>
        <button type="submit" class="form-submit-btn">Send Message</button>
    </form>
</div>`,
        css: `.contact-form {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    max-width: 350px;
    margin: 0 auto;
}

.contact-form h3 {
    margin-bottom: 15px;
    color: #1e293b;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
}

.input-group {
    position: relative;
    margin-bottom: 15px;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 12px 15px 12px 40px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    background: white;
    color: #1e293b;
    font-family: inherit;
}

.input-group textarea {
    min-height: 90px;
    resize: vertical;
    padding-top: 12px;
}

.input-group input:focus,
.input-group textarea:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.input-group i {
    position: absolute;
    left: 14px;
    top: 22px;
    color: #94a3b8;
    font-size: 0.9rem;
}

.input-group textarea + i {
    top: 18px;
}

.form-submit-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.form-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(124, 58, 237, 0.3);
}`,
        js: `// Contact form functionality
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate sending message
        const submitBtn = this.querySelector('.form-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Message sent successfully! (This is a demo)');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}`
    },
    
    // ====================================================================
    // TEMPLATE 3: Signup Form
    // ====================================================================
    form3: {
        name: "Signup Form",
        category: "signup",
        html: `<div class="form-container">
    <form class="signup-form">
        <h3>Create Account</h3>
        <div class="input-row">
            <div class="input-group half">
                <input type="text" placeholder="First Name" required>
                <i class="fas fa-user"></i>
            </div>
            <div class="input-group half">
                <input type="text" placeholder="Last Name" required>
                <i class="fas fa-user"></i>
            </div>
        </div>
        <div class="input-group">
            <input type="email" placeholder="Email Address" required>
            <i class="fas fa-envelope"></i>
        </div>
        <div class="input-group">
            <input type="password" placeholder="Password" required>
            <i class="fas fa-lock"></i>
        </div>
        <button type="submit" class="form-submit-btn gradient-btn">Sign Up</button>
    </form>
</div>`,
        css: `.signup-form {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    max-width: 350px;
    margin: 0 auto;
}

.signup-form h3 {
    margin-bottom: 15px;
    color: #1e293b;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 600;
}

.input-row {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 15px;
}

.input-group {
    position: relative;
    margin-bottom: 15px;
}

.input-group.half {
    width: 48%;
}

.input-group input {
    width: 100%;
    padding: 12px 15px 12px 40px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    background: white;
    color: #1e293b;
}

.input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.input-group i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.9rem;
}

.gradient-btn {
    background: linear-gradient(135deg, #7c3aed, #ec4899) !important;
}

.gradient-btn:hover {
    box-shadow: 0 6px 15px rgba(124, 58, 237, 0.4);
}`,
        js: `// Signup form functionality
const signupForm = document.querySelector('.signup-form');
if(signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = this.querySelector('.input-group.half:first-child input').value;
        const lastName = this.querySelector('.input-group.half:last-child input').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
        
        // Validation
        if (!firstName || !lastName || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate signup process
        const submitBtn = this.querySelector('.form-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Creating Account...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Account created successfully! (This is a demo)');
            signupForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}`
    }
};

// Main functionality for form templates
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
            const cardCategories = card.getAttribute('data-category').split(' ');
            
            if (category === 'all' || cardCategories.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
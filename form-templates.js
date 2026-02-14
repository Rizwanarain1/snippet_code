// Add this script before closing body tag
document.addEventListener('DOMContentLoaded', function() {
    // Form Type Controls
    const formDemoControls = document.querySelectorAll('.form-demo-control');
    const demoForms = document.querySelectorAll('.demo-form');
    
    formDemoControls.forEach(control => {
        control.addEventListener('click', () => {
            // Remove active class from all controls
            formDemoControls.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked control
            control.classList.add('active');
            
            // Get form type
            const formType = control.getAttribute('data-form');
            
            // Show selected form
            showForm(formType);
            
            // Add click animation
            control.style.transform = 'scale(0.95)';
            setTimeout(() => {
                control.style.transform = '';
            }, 150);
        });
    });
    
    // Show Selected Form
    function showForm(formType) {
        // Hide all forms
        demoForms.forEach(form => {
            form.classList.remove('active');
        });
        
        // Show selected form
        const selectedForm = document.querySelector(`.${formType}-form`);
        if (selectedForm) {
            selectedForm.classList.add('active');
        }
    }
    
    // Password Toggle
    const passwordToggles = document.querySelectorAll('.password-toggle');
    passwordToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = toggle.parentNode.querySelector('input');
            const icon = toggle.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    // Character Count for Textarea
    const textarea = document.querySelector('.form-textarea');
    const charCount = document.querySelector('.char-count');
    
    if (textarea && charCount) {
        textarea.addEventListener('input', () => {
            const count = textarea.value.length;
            charCount.textContent = `${count}/500`;
            
            // Change color based on length
            if (count > 450) {
                charCount.style.color = '#ef4444';
            } else if (count > 400) {
                charCount.style.color = '#f59e0b';
            } else {
                charCount.style.color = '#64748b';
            }
        });
    }
    
    // Password Strength Meter
    const passwordInput = document.querySelector('#signup-password');
    const strengthBar = document.querySelector('.strength-bar');
    
    if (passwordInput && strengthBar) {
        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;
            let strength = 0;
            
            // Length check
            if (password.length >= 8) strength += 25;
            
            // Contains numbers
            if (/\d/.test(password)) strength += 25;
            
            // Contains lowercase
            if (/[a-z]/.test(password)) strength += 25;
            
            // Contains uppercase
            if (/[A-Z]/.test(password)) strength += 25;
            
            // Update strength bar
            strengthBar.style.width = `${strength}%`;
            
            // Update color based on strength
            if (strength >= 75) {
                strengthBar.style.background = '#10b981';
            } else if (strength >= 50) {
                strengthBar.style.background = '#f59e0b';
            } else {
                strengthBar.style.background = '#ef4444';
            }
        });
    }
    
    // Username Availability Check
    const usernameInput = document.querySelector('#username');
    const usernameStatus = document.querySelector('.input-status');
    
    if (usernameInput && usernameStatus) {
        usernameInput.addEventListener('input', () => {
            const username = usernameInput.value.trim();
            
            if (username.length >= 3) {
                // Simulate API check
                setTimeout(() => {
                    const isAvailable = Math.random() > 0.3; // 70% chance of being available
                    if (isAvailable) {
                        usernameStatus.className = 'input-status available';
                        usernameStatus.innerHTML = '<i class="fas fa-check-circle"></i>';
                    } else {
                        usernameStatus.className = 'input-status taken';
                        usernameStatus.innerHTML = '<i class="fas fa-times-circle"></i>';
                        usernameStatus.style.color = '#ef4444';
                    }
                }, 500);
            } else {
                usernameStatus.className = 'input-status';
                usernameStatus.style.opacity = '0';
                usernameStatus.style.transform = 'scale(0)';
            }
        });
    }
    
    // Form Validation
    const forms = document.querySelectorAll('.demo-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get all required inputs
            const requiredInputs = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                    input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        input.style.borderColor = '';
                        input.style.boxShadow = '';
                    }, 3000);
                }
            });
            
            if (isValid) {
                // Show success state
                const submitBtn = form.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
                submitBtn.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
                }, 3000);
                
                // Show notification
                showFormNotification('Form submitted successfully!');
            } else {
                showFormNotification('Please fill all required fields.');
            }
        });
    });
    
    // Copy Code Button
    const formCopyBtn = document.querySelector('.form-copy-code-btn');
    if (formCopyBtn) {
        formCopyBtn.addEventListener('click', () => {
            const originalText = formCopyBtn.innerHTML;
            
            // Update button state
            formCopyBtn.innerHTML = '<i class="fas fa-check"></i><span>Code Copied!</span>';
            formCopyBtn.style.background = 'linear-gradient(90deg, #1d4ed8, #2563eb)';
            
            // Simulate copy action
            const codeToCopy = `/* Modern Form Component */
.form-container {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-input {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.submit-btn {
    width: 100%;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

/* Full code available at SnippetCode */`;
            
            navigator.clipboard.writeText(codeToCopy)
                .then(() => {
                    console.log('Form code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy code:', err);
                });
            
            // Reset button after 2 seconds
            setTimeout(() => {
                formCopyBtn.innerHTML = originalText;
                formCopyBtn.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
            }, 2000);
            
            // Show success notification
            showFormNotification('Form code copied to clipboard!');
        });
    }
    
    // Social Login Buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const service = button.classList.contains('google') ? 'Google' : 'GitHub';
            showFormNotification(`Signing in with ${service}...`);
            
            // Animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 300);
        });
    });
    
    // Form Link Click
    const formLinks = document.querySelectorAll('.form-link');
    formLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showFormNotification('Opening link...');
        });
    });
    
    // Notification Function
    function showFormNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.form-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'form-notification';
        notification.innerHTML = `
            <span>${message}</span>
            <button class="close-form-notification">×</button>
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
        const closeBtn = notification.querySelector('.close-form-notification');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        });
    }
    
    // Component Card Hover Effects
    const formComponentCards = document.querySelectorAll('.form-component-card');
    
    formComponentCards.forEach(card => {
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
    
    // Add animation keyframes for notification
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
        
        .close-form-notification {
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .close-form-notification:hover {
            color: white;
        }
    `;
    document.head.appendChild(style);
});





























// Form templates data
const formTemplateCodes = {
    // ====================================================================
    // TEMPLATE 1: Modern Login Form
    // ====================================================================
    form1: {
        name: "Modern Login Form",
        category: "login modern",
        html: `<div class="form-container">
    <div class="form-header">
        <h3>Welcome Back</h3>
        <p>Sign in to your account</p>
    </div>
    <form class="modern-form">
        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email Address" required>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
        </div>
        <div class="form-options">
            <label class="checkbox-small">
                <input type="checkbox">
                <span class="checkmark"></span>
                Remember me
            </label>
            <a href="#" class="forgot-link">Forgot Password?</a>
        </div>
        <button type="submit" class="form-btn">Sign In</button>
        <div class="divider">
            <span>or continue with</span>
        </div>
        <div class="social-login">
            <button type="button" class="social-btn">
                <i class="fab fa-google"></i> Google
            </button>
            <button type="button" class="social-btn">
                <i class="fab fa-github"></i> GitHub
            </button>
        </div>
    </form>
</div>`,
        css: `.form-container {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1e293b;
}

.form-header p {
    color: #64748b;
    font-size: 0.9rem;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    z-index: 2;
}

.input-group input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 14px;
    transition: all 0.3s ease;
    background: white;
}

.input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.checkbox-small {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: #64748b;
}

.checkbox-small input {
    display: none;
}

.checkbox-small .checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-small input:checked + .checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
}

.checkbox-small input:checked + .checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    font-weight: bold;
}

.forgot-link {
    font-size: 13px;
    color: #7c3aed;
    text-decoration: none;
    transition: color 0.3s ease;
}

.forgot-link:hover {
    color: #6d28d9;
}

.form-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.divider {
    display: flex;
    align-items: center;
    margin: 25px 0;
    color: #64748b;
    font-size: 13px;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
}

.divider span {
    padding: 0 15px;
}

.social-login {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.social-btn {
    flex: 1;
    padding: 12px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 14px;
    color: #475569;
    cursor: pointer;
    transition: all 0.3s ease;
}

.social-btn:hover {
    border-color: #7c3aed;
    transform: translateY(-2px);
}`,
        js: `// Modern Login Form functionality
document.querySelector('.modern-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
    
    // Example validation
    if(email && password) {
        alert('Login successful!');
    } else {
        alert('Please fill in all fields');
    }
});

// Social login buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.querySelector('i').className.includes('google') ? 'Google' : 'GitHub';
        alert('Sign in with ' + provider + ' clicked');
    });
});`
    },

    // ====================================================================
    // TEMPLATE 2: Contact Form
    // ====================================================================
    form2: {
        name: "Contact Form",
        category: "contact modern",
        html: `<div class="form-container">
    <div class="form-header">
        <h3>Contact Us</h3>
        <p>We'd love to hear from you</p>
    </div>
    <form class="contact-form">
        <div class="input-row">
            <div class="input-group">
                <input type="text" placeholder="First Name" required>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Last Name" required>
            </div>
        </div>
        <div class="input-group">
            <input type="email" placeholder="Email Address" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Subject" required>
        </div>
        <div class="input-group">
            <textarea placeholder="Your Message" rows="4" required></textarea>
        </div>
        <button type="submit" class="form-btn">Send Message</button>
    </form>
</div>`,
        css: `.form-container {
    width: 100%;
    max-width: 500px;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1e293b;
}

.form-header p {
    color: #64748b;
    font-size: 0.9rem;
}

.input-row {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.input-row .input-group {
    flex: 1;
    margin-bottom: 0;
}

.input-group {
    margin-bottom: 20px;
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 15px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 14px;
    transition: all 0.3s ease;
    font-family: inherit;
}

.input-group textarea {
    resize: vertical;
    min-height: 100px;
}

.input-group input:focus,
.input-group textarea:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.form-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}`,
        js: `// Contact Form functionality
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: this.querySelector('input[placeholder="First Name"]').value,
        lastName: this.querySelector('input[placeholder="Last Name"]').value,
        email: this.querySelector('input[type="email"]').value,
        subject: this.querySelector('input[placeholder="Subject"]').value,
        message: this.querySelector('textarea').value
    };
    
    // Add your contact form logic here
    console.log('Contact form submitted:', formData);
    
    // Example: Form validation
    if(Object.values(formData).every(value => value.trim() !== '')) {
        alert('Message sent successfully!');
        this.reset();
    } else {
        alert('Please fill in all fields');
    }
});`
    },

    // ====================================================================
    // TEMPLATE 3: Gradient Signup Form
    // ====================================================================
    form3: {
        name: "Gradient Signup Form",
        category: "signup modern",
        html: `<div class="form-container gradient-bg">
    <div class="form-header">
        <h3>Create Account</h3>
        <p>Join our community today</p>
    </div>
    <form class="signup-form">
        <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Full Name" required>
        </div>
        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email Address" required>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Confirm Password" required>
        </div>
        <label class="checkbox-small">
            <input type="checkbox" required>
            <span class="checkmark"></span>
            I agree to the <a href="#">Terms & Conditions</a>
        </label>
        <button type="submit" class="form-btn gradient-btn">Create Account</button>
        <p class="form-footer">
            Already have an account? <a href="#">Sign In</a>
        </p>
    </form>
</div>`,
        css: `.form-container.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 20px;
    padding: 35px;
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.8);
    z-index: 2;
}

.input-group input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    font-size: 14px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.input-group input:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.checkbox-small {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    margin: 20px 0;
}

.checkbox-small a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}

.checkbox-small input {
    display: none;
}

.checkbox-small .checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-small input:checked + .checkmark {
    background: white;
    border-color: white;
}

.checkbox-small input:checked + .checkmark::after {
    content: '✓';
    color: #667eea;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    font-weight: bold;
}

.form-btn.gradient-btn {
    background: white;
    color: #667eea;
    font-weight: 600;
    margin-top: 10px;
}

.form-btn.gradient-btn:hover {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

.form-footer {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
}

.form-footer a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}`,
        js: `// Gradient Signup Form functionality
document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = this.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = this.querySelector('input[placeholder="Confirm Password"]').value;
    
    // Password validation
    if(password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Add your signup logic here
    console.log('Signup form submitted');
    alert('Account created successfully!');
    
    // Reset form
    this.reset();
});`
    },

    // ====================================================================
    // TEMPLATE 4: Newsletter Form
    // ====================================================================
    form4: {
        name: "Newsletter Form",
        category: "modern",
        html: `<div class="newsletter-container">
    <div class="newsletter-header">
        <i class="fas fa-paper-plane"></i>
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter for the latest updates</p>
    </div>
    <form class="newsletter-form">
        <div class="input-group">
            <input type="email" placeholder="Enter your email" required>
            <button type="submit" class="subscribe-btn">
                <i class="fas fa-paper-plane"></i> Subscribe
            </button>
        </div>
        <label class="checkbox-small">
            <input type="checkbox" required>
            <span class="checkmark"></span>
            I agree to receive newsletter emails
        </label>
    </form>
</div>`,
        css: `.newsletter-container {
    width: 100%;
    max-width: 450px;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 20px;
    padding: 40px;
    color: white;
    text-align: center;
}

.newsletter-header i {
    font-size: 2.5rem;
    color: #7c3aed;
    margin-bottom: 20px;
}

.newsletter-header h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.newsletter-header p {
    color: #94a3b8;
    font-size: 0.9rem;
    margin-bottom: 30px;
}

.newsletter-form .input-group {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.newsletter-form .input-group input {
    flex: 1;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    font-size: 14px;
}

.newsletter-form .input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

.subscribe-btn {
    padding: 15px 25px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.subscribe-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.checkbox-small {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 13px;
    color: #94a3b8;
}

.checkbox-small input {
    display: none;
}

.checkbox-small .checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-small input:checked + .checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
}

.checkbox-small input:checked + .checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    font-weight: bold;
}`,
        js: `// Newsletter Form functionality
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const agreed = this.querySelector('input[type="checkbox"]').checked;
    
    // Validation
    if(!agreed) {
        alert('Please agree to receive newsletter emails');
        return;
    }
    
    // Add your newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    alert('Thank you for subscribing!');
    
    // Reset form
    this.reset();
    this.querySelector('input[type="checkbox"]').checked = false;
});`
    },

    // ====================================================================
    // TEMPLATE 5: Dark Mode Login
    // ====================================================================
    form5: {
        name: "Dark Mode Login",
        category: "login",
        html: `<div class="form-container dark-form">
    <div class="form-header">
        <h3>Welcome Back</h3>
        <p>Sign in to continue</p>
    </div>
    <form class="dark-mode-form">
        <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Username or Email" required>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
        </div>
        <button type="submit" class="form-btn dark-btn">Sign In</button>
        <div class="form-links">
            <a href="#">Create Account</a>
            <a href="#">Forgot Password?</a>
        </div>
    </form>
</div>`,
        css: `.form-container.dark-form {
    background: #1e293b;
    color: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: #94a3b8;
    font-size: 0.9rem;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    z-index: 2;
}

.input-group input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 2px solid #334155;
    border-radius: 12px;
    font-size: 14px;
    transition: all 0.3s ease;
    background: #0f172a;
    color: white;
}

.input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

.input-group input::placeholder {
    color: #64748b;
}

.form-btn.dark-btn {
    background: #475569;
    margin-top: 10px;
}

.form-btn.dark-btn:hover {
    background: #4f5e75;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.form-links {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
}

.form-links a {
    color: #cbd5e1;
    text-decoration: none;
    transition: color 0.3s ease;
}

.form-links a:hover {
    color: #7c3aed;
}`,
        js: `// Dark Mode Login functionality
document.querySelector('.dark-mode-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // Add your dark mode login logic here
    if(username && password) {
        console.log('Dark mode login:', { username, password });
        alert('Logged in successfully!');
    } else {
        alert('Please fill in all fields');
    }
});`
    },

    // ====================================================================
    // TEMPLATE 6: Payment Form
    // ====================================================================
    form6: {
        name: "Payment Form",
        category: "modern",
        html: `<div class="form-container">
    <div class="form-header">
        <h3>Payment Details</h3>
        <p>Complete your purchase</p>
    </div>
    <form class="payment-form">
        <div class="input-group">
            <input type="text" placeholder="Cardholder Name" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Card Number" required>
        </div>
        <div class="input-row">
            <div class="input-group">
                <input type="text" placeholder="MM/YY" required>
            </div>
            <div class="input-group">
                <input type="text" placeholder="CVV" required>
            </div>
        </div>
        <div class="total-amount">
            <span>Total Amount:</span>
            <span class="amount">$99.99</span>
        </div>
        <button type="submit" class="form-btn payment-btn">
            <i class="fas fa-lock"></i> Pay Now
        </button>
        <p class="secure-note">
            <i class="fas fa-shield-alt"></i> Your payment is secure and encrypted
        </p>
    </form>
</div>`,
        css: `.form-container {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1e293b;
}

.form-header p {
    color: #64748b;
    font-size: 0.9rem;
}

.input-group {
    margin-bottom: 20px;
}

.input-group input {
    width: 100%;
    padding: 15px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
}

.input-row {
    display: flex;
    gap: 15px;
}

.input-row .input-group {
    flex: 1;
    margin-bottom: 0;
}

.total-amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #e2e8f0;
    border-bottom: 1px solid #e2e8f0;
    margin: 25px 0;
    font-size: 16px;
    color: #475569;
}

.amount {
    font-size: 24px;
    font-weight: 700;
    color: #7c3aed;
}

.form-btn.payment-btn {
    background: linear-gradient(135deg, #10b981, #059669);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.payment-btn:hover {
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
}

.secure-note {
    text-align: center;
    font-size: 12px;
    color: #64748b;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.secure-note i {
    color: #10b981;
}`,
        js: `// Payment Form functionality
document.querySelector('.payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const cardName = this.querySelector('input[placeholder="Cardholder Name"]').value;
    const cardNumber = this.querySelector('input[placeholder="Card Number"]').value;
    const expiry = this.querySelector('input[placeholder="MM/YY"]').value;
    const cvv = this.querySelector('input[placeholder="CVV"]').value;
    
    // Basic validation
    if(!cardName || !cardNumber || !expiry || !cvv) {
        alert('Please fill in all payment details');
        return;
    }
    
    // Card number validation (simple version)
    if(cardNumber.replace(/\s/g, '').length !== 16) {
        alert('Please enter a valid 16-digit card number');
        return;
    }
    
    // Add your payment processing logic here
    console.log('Payment processing:', { cardName, cardNumber, expiry, cvv });
    
    // Simulate payment processing
    this.querySelector('.payment-btn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    this.querySelector('.payment-btn').disabled = true;
    
    setTimeout(() => {
        alert('Payment successful! Thank you for your purchase.');
        this.reset();
        this.querySelector('.payment-btn').innerHTML = '<i class="fas fa-lock"></i> Pay Now';
        this.querySelector('.payment-btn').disabled = false;
    }, 2000);
});`
    },
    // ====================================================================
// TEMPLATE 7: Feedback Form
// ====================================================================
form7: {
    name: "Feedback Form",
    category: "feedback modern",
    html: `<div class="form-container feedback-bg">
    <div class="form-header">
        <h3>Share Feedback</h3>
        <p>Help us improve our service</p>
    </div>
    <form class="feedback-form">
        <div class="input-group">
            <i class="fas fa-star"></i>
            <div class="rating-stars">
                <span class="star" data-rating="1">★</span>
                <span class="star" data-rating="2">★</span>
                <span class="star" data-rating="3">★</span>
                <span class="star" data-rating="4">★</span>
                <span class="star active" data-rating="5">★</span>
            </div>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Title of your feedback" required>
        </div>
        <div class="input-group">
            <textarea placeholder="Tell us about your experience..." rows="3" required></textarea>
            <div class="char-count">0/300</div>
        </div>
        <div class="form-group">
            <label class="radio-group-label">
                How likely are you to recommend us?
            </label>
            <div class="likert-scale">
                <label class="likert-option">
                    <input type="radio" name="recommend" value="1">
                    <span>1</span>
                </label>
                <label class="likert-option">
                    <input type="radio" name="recommend" value="2">
                    <span>2</span>
                </label>
                <label class="likert-option">
                    <input type="radio" name="recommend" value="3" checked>
                    <span>3</span>
                </label>
                <label class="likert-option">
                    <input type="radio" name="recommend" value="4">
                    <span>4</span>
                </label>
                <label class="likert-option">
                    <input type="radio" name="recommend" value="5">
                    <span>5</span>
                </label>
            </div>
        </div>
        <button type="submit" class="form-btn feedback-btn">
            <i class="fas fa-paper-plane"></i> Submit Feedback
        </button>
    </form>
</div>`,
    css: `.feedback-bg {
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.input-group {
    margin-bottom: 20px;
}

.input-group i {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
    display: block;
}

.rating-stars {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.rating-stars .star {
    font-size: 1.8rem;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
}

.rating-stars .star:hover,
.rating-stars .star.active {
    color: #fbbf24;
    transform: scale(1.2);
}

.input-group input,
.input-group textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 14px;
}

.input-group textarea {
    resize: vertical;
    min-height: 80px;
    max-height: 120px;
}

.input-group input:focus,
.input-group textarea:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.char-count {
    text-align: right;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
    margin-top: 5px;
}

.radio-group-label {
    display: block;
    margin-bottom: 10px;
    color: white;
    font-weight: 500;
}

.likert-scale {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.likert-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.likert-option input {
    display: none;
}

.likert-option span {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    transition: all 0.3s ease;
}

.likert-option input:checked + span {
    background: #fbbf24;
    color: #1e293b;
    transform: scale(1.1);
}

.form-btn.feedback-btn {
    width: 100%;
    padding: 14px;
    background: white;
    color: #8b5cf6;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.form-btn.feedback-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Feedback Form functionality
document.querySelector('.feedback-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const rating = this.querySelector('.star.active')?.getAttribute('data-rating');
    const title = this.querySelector('input[type="text"]').value;
    const feedback = this.querySelector('textarea').value;
    const recommendation = this.querySelector('input[name="recommend"]:checked')?.value;
    
    console.log('Feedback submitted:', { rating, title, feedback, recommendation });
    
    // Show success message
    const btn = this.querySelector('.feedback-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Thank You!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
        // Reset stars
        this.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
        this.querySelector('.star[data-rating="5"]').classList.add('active');
        this.querySelector('input[value="3"]').checked = true;
    }, 2000);
});

// Star rating interaction
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-rating');
        const stars = this.parentElement.querySelectorAll('.star');
        
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});`
},

// ====================================================================
// TEMPLATE 8: Survey Form
// ====================================================================
form8: {
    name: "Survey Form",
    category: "survey modern",
    html: `<div class="form-container survey-bg">
    <div class="form-header">
        <h3>Quick Survey</h3>
        <p>Your opinion matters to us</p>
    </div>
    <form class="survey-form">
        <div class="form-group">
            <label class="survey-question">
                How often do you use our service?
            </label>
            <div class="survey-options">
                <label class="survey-option">
                    <input type="radio" name="frequency" value="daily">
                    <span class="option-checkmark"></span>
                    <span class="option-text">Daily</span>
                </label>
                <label class="survey-option">
                    <input type="radio" name="frequency" value="weekly" checked>
                    <span class="option-checkmark"></span>
                    <span class="option-text">Weekly</span>
                </label>
                <label class="survey-option">
                    <input type="radio" name="frequency" value="monthly">
                    <span class="option-checkmark"></span>
                    <span class="option-text">Monthly</span>
                </label>
                <label class="survey-option">
                    <input type="radio" name="frequency" value="rarely">
                    <span class="option-checkmark"></span>
                    <span class="option-text">Rarely</span>
                </label>
            </div>
        </div>
        
        <div class="form-group">
            <label class="survey-question">
                What features do you like? (Select all)
            </label>
            <div class="survey-checkboxes">
                <label class="survey-checkbox">
                    <input type="checkbox" checked>
                    <span class="checkbox-checkmark"></span>
                    <span class="checkbox-text">Easy to use</span>
                </label>
                <label class="survey-checkbox">
                    <input type="checkbox">
                    <span class="checkbox-checkmark"></span>
                    <span class="checkbox-text">Fast performance</span>
                </label>
                <label class="survey-checkbox">
                    <input type="checkbox" checked>
                    <span class="checkbox-checkmark"></span>
                    <span class="checkbox-text">Good design</span>
                </label>
                <label class="survey-checkbox">
                    <input type="checkbox">
                    <span class="checkbox-checkmark"></span>
                    <span class="checkbox-text">Customer support</span>
                </label>
            </div>
        </div>
        
        <div class="form-group">
            <label class="survey-question">
                How satisfied are you overall?
            </label>
            <div class="satisfaction-scale">
                <div class="scale-labels">
                    <span>Very Dissatisfied</span>
                    <span>Very Satisfied</span>
                </div>
                <input type="range" min="1" max="10" value="7" class="satisfaction-slider">
                <div class="scale-ticks">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                    <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                </div>
            </div>
        </div>
        
        <button type="submit" class="form-btn survey-btn">
            <i class="fas fa-chart-bar"></i> Submit Survey
        </button>
    </form>
</div>`,
    css: `.survey-bg {
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.survey-question {
    display: block;
    margin-bottom: 12px;
    color: white;
    font-weight: 500;
    font-size: 0.95rem;
}

.survey-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 25px;
}

.survey-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.survey-option:hover {
    background: rgba(255, 255, 255, 0.15);
}

.survey-option input {
    display: none;
}

.option-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;
}

.survey-option input:checked + .option-checkmark {
    background: white;
    border-color: white;
}

.survey-option input:checked + .option-checkmark::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
}

.survey-checkboxes {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
}

.survey-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.survey-checkbox input {
    display: none;
}

.checkbox-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.survey-checkbox input:checked + .checkbox-checkmark {
    background: white;
    border-color: white;
}

.survey-checkbox input:checked + .checkbox-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #10b981;
    font-size: 12px;
}

.satisfaction-scale {
    margin-top: 15px;
    margin-bottom: 25px;
}

.scale-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 5px;
}

.satisfaction-slider {
    width: 100%;
    height: 8px;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    outline: none;
    margin: 10px 0;
}

.satisfaction-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.scale-ticks {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
}

.form-btn.survey-btn {
    width: 100%;
    padding: 14px;
    background: white;
    color: #10b981;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.survey-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Survey Form functionality
document.querySelector('.survey-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const frequency = this.querySelector('input[name="frequency"]:checked')?.value;
    const features = Array.from(this.querySelectorAll('input[type="checkbox"]:checked'))
        .map(cb => cb.parentElement.querySelector('.checkbox-text').textContent);
    const satisfaction = this.querySelector('.satisfaction-slider').value;
    
    console.log('Survey submitted:', { frequency, features, satisfaction });
    
    // Show success message
    const btn = this.querySelector('.survey-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Survey Submitted!';
    btn.style.background = '#0ea5e9';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
        this.querySelector('input[value="weekly"]').checked = true;
        this.querySelector('input[type="checkbox"]').checked = true;
        this.querySelector('.satisfaction-slider').value = 7;
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 9: Booking Form
// ====================================================================
form9: {
    name: "Booking Form",
    category: "booking modern",
    html: `<div class="form-container booking-bg">
    <div class="form-header">
        <h3>Book Appointment</h3>
        <p>Schedule your next visit</p>
    </div>
    <form class="booking-form">
        <div class="input-row">
            <div class="input-group">
                <i class="fas fa-calendar"></i>
                <input type="date" required>
            </div>
            <div class="input-group">
                <i class="fas fa-clock"></i>
                <select class="form-select">
                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                </select>
            </div>
        </div>
        
        <div class="input-group">
            <i class="fas fa-user"></i>
            <select class="form-select">
                <option value="">Select Service</option>
                <option value="consultation">Consultation</option>
                <option value="repair">Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="installation">Installation</option>
            </select>
        </div>
        
        <div class="input-group">
            <i class="fas fa-users"></i>
            <select class="form-select">
                <option value="">Number of People</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
            </select>
        </div>
        
        <div class="input-group">
            <i class="fas fa-phone"></i>
            <input type="tel" placeholder="Phone Number" required>
        </div>
        
        <div class="input-group">
            <textarea placeholder="Additional notes (optional)" rows="2"></textarea>
        </div>
        
        <div class="booking-summary">
            <div class="summary-item">
                <span>Date:</span>
                <span class="summary-value">Not selected</span>
            </div>
            <div class="summary-item">
                <span>Duration:</span>
                <span class="summary-value">60 minutes</span>
            </div>
            <div class="summary-item">
                <span>Estimated Cost:</span>
                <span class="summary-price">$99</span>
            </div>
        </div>
        
        <button type="submit" class="form-btn booking-btn">
            <i class="fas fa-calendar-check"></i> Book Now
        </button>
    </form>
</div>`,
    css: `.booking-bg {
    background: linear-gradient(135deg, #0ea5e9, #3b82f6);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.input-row {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.input-row .input-group {
    flex: 1;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.8);
    z-index: 2;
}

.input-group input,
.input-group select,
.input-group textarea {
    width: 100%;
    padding: 12px 12px 12px 45px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
}

.input-group textarea {
    resize: vertical;
    min-height: 60px;
    padding: 12px;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
}

.booking-summary {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 0.9rem;
}

.summary-item:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.summary-price {
    font-weight: 600;
    color: #fbbf24;
}

.form-btn.booking-btn {
    width: 100%;
    padding: 14px;
    background: white;
    color: #0ea5e9;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.booking-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Booking Form functionality
document.querySelector('.booking-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const date = this.querySelector('input[type="date"]').value;
    const time = this.querySelector('select').value;
    const service = this.querySelectorAll('select')[1].value;
    const people = this.querySelectorAll('select')[2].value;
    const phone = this.querySelector('input[type="tel"]').value;
    const notes = this.querySelector('textarea').value;
    
    console.log('Booking submitted:', { date, time, service, people, phone, notes });
    
    // Show success message
    const btn = this.querySelector('.booking-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Booked Successfully!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
        // Reset summary
        this.querySelector('.summary-value').textContent = 'Not selected';
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 10: Job Application Form
// ====================================================================
form10: {
    name: "Job Application Form",
    category: "job modern",
    html: `<div class="form-container job-bg">
    <div class="form-header">
        <h3>Job Application</h3>
        <p>Apply for your dream position</p>
    </div>
    <form class="job-form">
        <div class="input-row">
            <div class="input-group">
                <input type="text" placeholder="First Name" required>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Last Name" required>
            </div>
        </div>
        
        <div class="input-group">
            <input type="email" placeholder="Email Address" required>
        </div>
        
        <div class="input-group">
            <input type="tel" placeholder="Phone Number" required>
        </div>
        
        <div class="input-group">
            <input type="text" placeholder="Position applying for" required>
        </div>
        
        <div class="input-row">
            <div class="input-group">
                <select class="form-select">
                    <option value="">Experience Level</option>
                    <option value="entry">Entry Level</option>
                    <option value="mid">Mid Level</option>
                    <option value="senior">Senior Level</option>
                </select>
            </div>
            <div class="input-group">
                <select class="form-select">
                    <option value="">Employment Type</option>
                    <option value="full">Full Time</option>
                    <option value="part">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <label class="upload-label">
                <i class="fas fa-cloud-upload-alt"></i>
                <span>Upload Resume (PDF, DOC)</span>
                <input type="file" accept=".pdf,.doc,.docx" class="file-input">
                <div class="upload-progress">
                    <div class="progress-bar"></div>
                </div>
            </label>
        </div>
        
        <div class="form-group">
            <label class="upload-label">
                <i class="fas fa-cloud-upload-alt"></i>
                <span>Upload Cover Letter (Optional)</span>
                <input type="file" accept=".pdf,.doc,.docx" class="file-input">
            </label>
        </div>
        
        <div class="input-group">
            <textarea placeholder="Additional comments or portfolio links..." rows="2"></textarea>
        </div>
        
        <button type="submit" class="form-btn job-btn">
            <i class="fas fa-briefcase"></i> Submit Application
        </button>
    </form>
</div>`,
    css: `.job-bg {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.input-row {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.input-row .input-group {
    flex: 1;
}

.input-group {
    margin-bottom: 20px;
}

.input-group input,
.input-group select,
.input-group textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
}

.input-group textarea {
    resize: vertical;
    min-height: 60px;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
}

.upload-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px;
}

.upload-label:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.5);
}

.upload-label i {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.8);
}

.upload-progress {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-top: 15px;
    overflow: hidden;
}

.progress-bar {
    width: 0%;
    height: 100%;
    background: #10b981;
    transition: width 2s ease;
}

.file-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
}

.form-btn.job-btn {
    width: 100%;
    padding: 14px;
    background: white;
    color: #6366f1;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.form-btn.job-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Job Application Form functionality
document.querySelector('.job-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const firstName = this.querySelector('input[placeholder="First Name"]').value;
    const lastName = this.querySelector('input[placeholder="Last Name"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const position = this.querySelector('input[placeholder="Position applying for"]').value;
    const experience = this.querySelectorAll('select')[0].value;
    const employment = this.querySelectorAll('select')[1].value;
    const comments = this.querySelector('textarea').value;
    
    console.log('Job application submitted:', { 
        firstName, lastName, email, phone, position, experience, employment, comments 
    });
    
    // Show success message
    const btn = this.querySelector('.job-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Application Submitted!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
    }, 2000);
});

// File upload simulation
document.querySelectorAll('.file-input').forEach(input => {
    input.addEventListener('change', function() {
        const label = this.parentElement;
        const progressBar = label.querySelector('.progress-bar');
        
        if (progressBar) {
            progressBar.style.width = '0%';
            progressBar.style.width = '100%';
            
            setTimeout(() => {
                label.style.background = 'rgba(16, 185, 129, 0.1)';
                label.style.borderColor = '#10b981';
            }, 2000);
        }
    });
});`
},

// ====================================================================
// TEMPLATE 11: Order Form
// ====================================================================
form11: {
    name: "Order Form",
    category: "order modern",
    html: `<div class="form-container order-bg">
    <div class="form-header">
        <h3>Place Order</h3>
        <p>Complete your purchase</p>
    </div>
    <form class="order-form">
        <div class="cart-items">
            <div class="cart-item">
                <span class="item-name">Premium Service</span>
                <span class="item-price">$99.99</span>
            </div>
            <div class="cart-item">
                <span class="item-name">Add-on Feature</span>
                <span class="item-price">$29.99</span>
            </div>
            <div class="cart-divider"></div>
            <div class="cart-total">
                <span>Total:</span>
                <span class="total-price">$129.98</span>
            </div>
        </div>
        
        <div class="input-group">
            <i class="fas fa-tag"></i>
            <input type="text" placeholder="Discount Code (Optional)">
            <button type="button" class="apply-discount-btn">Apply</button>
        </div>
        
        <div class="form-group">
            <label class="radio-group-label">
                Shipping Method
            </label>
            <div class="shipping-options">
                <label class="shipping-option">
                    <input type="radio" name="shipping" value="standard" checked>
                    <span class="shipping-checkmark"></span>
                    <div class="shipping-content">
                        <span class="shipping-name">Standard Shipping</span>
                        <span class="shipping-time">5-7 business days</span>
                        <span class="shipping-price">Free</span>
                    </div>
                </label>
                <label class="shipping-option">
                    <input type="radio" name="shipping" value="express">
                    <span class="shipping-checkmark"></span>
                    <div class="shipping-content">
                        <span class="shipping-name">Express Shipping</span>
                        <span class="shipping-time">2-3 business days</span>
                        <span class="shipping-price">$9.99</span>
                    </div>
                </label>
            </div>
        </div>
        
        <div class="form-group">
            <label class="radio-group-label">
                Payment Method
            </label>
            <div class="payment-methods">
                <label class="payment-method">
                    <input type="radio" name="payment" value="credit" checked>
                    <span class="payment-checkmark"></span>
                    <i class="fab fa-cc-visa"></i>
                    <span>Credit Card</span>
                </label>
                <label class="payment-method">
                    <input type="radio" name="payment" value="paypal">
                    <span class="payment-checkmark"></span>
                    <i class="fab fa-paypal"></i>
                    <span>PayPal</span>
                </label>
                <label class="payment-method">
                    <input type="radio" name="payment" value="applepay">
                    <span class="payment-checkmark"></span>
                    <i class="fab fa-apple"></i>
                    <span>Apple Pay</span>
                </label>
            </div>
        </div>
        
        <button type="submit" class="form-btn order-btn">
            <i class="fas fa-shopping-cart"></i> Complete Order
        </button>
        
        <p class="secure-note">
            <i class="fas fa-lock"></i> Secure checkout with 256-bit encryption
        </p>
    </form>
</div>`,
    css: `.order-bg {
    background: linear-gradient(135deg, #1e293b, #334155);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: #94a3b8;
    font-size: 0.9rem;
}

.cart-items {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 20px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 0.95rem;
}

.cart-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 10px 0;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 10px;
    color: #fbbf24;
}

.input-group {
    position: relative;
    margin-bottom: 25px;
}

.input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    z-index: 2;
}

.input-group input {
    width: 100%;
    padding: 12px 12px 12px 45px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2);
}

.apply-discount-btn {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: #7c3aed;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
}

.apply-discount-btn:hover {
    background: #6d28d9;
}

.radio-group-label {
    display: block;
    margin-bottom: 15px;
    color: white;
    font-weight: 500;
    font-size: 0.95rem;
}

.shipping-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
}

.shipping-option {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.shipping-option:hover {
    background: rgba(255, 255, 255, 0.08);
}

.shipping-option input {
    display: none;
}

.shipping-checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;
}

.shipping-option input:checked + .shipping-checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
}

.shipping-option input:checked + .shipping-checkmark::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
}

.shipping-content {
    flex: 1;
}

.shipping-name {
    display: block;
    font-weight: 500;
    margin-bottom: 4px;
}

.shipping-time {
    font-size: 0.85rem;
    color: #94a3b8;
}

.shipping-price {
    font-weight: 600;
    color: #fbbf24;
    margin-left: 15px;
}

.payment-methods {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.payment-method {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.payment-method:hover {
    background: rgba(255, 255, 255, 0.08);
}

.payment-method input {
    display: none;
}

.payment-checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    position: relative;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.payment-method input:checked + .payment-checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
}

.payment-method i {
    font-size: 2rem;
    margin-bottom: 8px;
    color: #94a3b8;
}

.form-btn.order-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.order-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
}

.secure-note {
    text-align: center;
    font-size: 0.8rem;
    color: #94a3b8;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}`,
    js: `// Order Form functionality
document.querySelector('.order-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const shipping = this.querySelector('input[name="shipping"]:checked')?.value;
    const payment = this.querySelector('input[name="payment"]:checked')?.value;
    
    console.log('Order submitted:', { shipping, payment });
    
    // Show success message
    const btn = this.querySelector('.order-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Order Placed!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
        this.querySelector('input[value="standard"]').checked = true;
        this.querySelector('input[value="credit"]').checked = true;
    }, 2000);
});

// Discount code functionality
document.querySelector('.apply-discount-btn')?.addEventListener('click', function() {
    const input = this.parentElement.querySelector('input');
    const code = input.value.trim();
    
    if (!code) {
        alert('Please enter a discount code');
        return;
    }
    
    // Simulate discount application
    this.textContent = 'Applying...';
    this.disabled = true;
    
    setTimeout(() => {
        if (code.toUpperCase() === 'SAVE10') {
            alert('Discount applied! 10% off your order.');
            // Update total price
            document.querySelector('.total-price').textContent = '$116.98';
            this.textContent = 'Applied!';
            this.style.background = '#10b981';
        } else {
            alert('Invalid discount code');
            this.textContent = 'Apply';
            this.disabled = false;
        }
    }, 1000);
});`
},

// ====================================================================
// TEMPLATE 12: Event Registration Form
// ====================================================================
form12: {
    name: "Event Registration Form",
    category: "event modern",
    html: `<div class="form-container event-bg">
    <div class="form-header">
        <h3>Event Registration</h3>
        <p>Join our exclusive event</p>
    </div>
    <form class="event-form">
        <div class="event-details">
            <div class="event-info">
                <i class="fas fa-calendar-alt"></i>
                <div>
                    <span class="event-date">December 15, 2024</span>
                    <span class="event-time">2:00 PM - 6:00 PM</span>
                </div>
            </div>
            <div class="event-info">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <span class="event-location">Virtual Event</span>
                    <span class="event-platform">Zoom & Live Stream</span>
                </div>
            </div>
        </div>
        
        <div class="input-row">
            <div class="input-group">
                <input type="number" min="1" max="10" value="1" class="guest-count">
                <label>Number of Guests</label>
            </div>
            <div class="input-group">
                <select class="form-select">
                    <option value="">Ticket Type</option>
                    <option value="general">General Admission - $49</option>
                    <option value="vip">VIP Access - $99</option>
                    <option value="student">Student - $29</option>
                </select>
            </div>
        </div>
        
        <div class="form-group">
            <label class="radio-group-label">
                Dietary Preferences
            </label>
            <div class="diet-options">
                <label class="diet-option">
                    <input type="checkbox">
                    <span class="diet-checkmark"></span>
                    <span>Vegetarian</span>
                </label>
                <label class="diet-option">
                    <input type="checkbox">
                    <span class="diet-checkmark"></span>
                    <span>Vegan</span>
                </label>
                <label class="diet-option">
                    <input type="checkbox">
                    <span class="diet-checkmark"></span>
                    <span>Gluten Free</span>
                </label>
                <label class="diet-option">
                    <input type="checkbox" checked>
                    <span class="diet-checkmark"></span>
                    <span>No Restrictions</span>
                </label>
            </div>
        </div>
        
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox" checked>
                <span class="checkmark"></span>
                I would like to receive event updates via email
            </label>
        </div>
        
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkmark"></span>
                I agree to the <a href="#" class="form-link">Terms & Conditions</a>
            </label>
        </div>
        
        <div class="price-summary">
            <div class="price-item">
                <span>Tickets (1 x $49)</span>
                <span>$49.00</span>
            </div>
            <div class="price-item">
                <span>Service Fee</span>
                <span>$4.90</span>
            </div>
            <div class="price-item total">
                <span>Total</span>
                <span>$53.90</span>
            </div>
        </div>
        
        <button type="submit" class="form-btn event-btn">
            <i class="fas fa-ticket-alt"></i> Register Now
        </button>
    </form>
</div>`,
    css: `.event-bg {
    background: linear-gradient(135deg, #ec4899, #f59e0b);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: white;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.event-details {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 25px;
}

.event-info {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.event-info:last-child {
    margin-bottom: 0;
}

.event-info i {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
}

.event-date, .event-location {
    display: block;
    font-weight: 500;
    margin-bottom: 4px;
}

.event-time, .event-platform {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
}

.input-row {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

.input-row .input-group {
    flex: 1;
}

.input-group {
    margin-bottom: 20px;
}

.guest-count {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 5px;
}

.input-group label {
    display: block;
    text-align: center;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 5px;
}

.input-group select {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
}

.input-group select:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.radio-group-label {
    display: block;
    margin-bottom: 15px;
    color: white;
    font-weight: 500;
    font-size: 0.95rem;
}

.diet-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 25px;
}

.diet-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.diet-option:hover {
    background: rgba(255, 255, 255, 0.08);
}

.diet-option input {
    display: none;
}

.diet-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.diet-option input:checked + .diet-checkmark {
    background: white;
    border-color: white;
}

.diet-option input:checked + .diet-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ec4899;
    font-size: 10px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 15px;
    user-select: none;
}

.checkbox-label input {
    display: none;
}

.checkbox-label .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-label input:checked + .checkmark {
    background: white;
    border-color: white;
}

.checkbox-label input:checked + .checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ec4899;
    font-size: 10px;
}

.form-link {
    color: white;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;
}

.form-link:hover {
    text-decoration: underline;
}

.price-summary {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 15px;
    margin: 25px 0;
}

.price-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 0.9rem;
}

.price-item.total {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 10px;
    padding-top: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    color: #fbbf24;
}

.form-btn.event-btn {
    width: 100%;
    padding: 15px;
    background: white;
    color: #ec4899;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.event-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Event Registration Form functionality
document.querySelector('.event-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const guests = this.querySelector('.guest-count').value;
    const ticketType = this.querySelector('select').value;
    const updates = this.querySelector('input[type="checkbox"]').checked;
    const terms = this.querySelectorAll('input[type="checkbox"]')[1].checked;
    const dietary = Array.from(this.querySelectorAll('.diet-option input:checked'))
        .map(cb => cb.parentElement.querySelector('span:last-child').textContent);
    
    console.log('Event registration:', { guests, ticketType, updates, terms, dietary });
    
    if (!terms) {
        alert('Please agree to the Terms & Conditions');
        return;
    }
    
    // Show success message
    const btn = this.querySelector('.event-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Registered Successfully!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
        this.querySelector('.guest-count').value = 1;
        this.querySelector('.diet-option:last-child input').checked = true;
        this.querySelector('input[type="checkbox"]').checked = true;
    }, 2000);
});

// Guest count functionality
document.querySelector('.guest-count')?.addEventListener('change', function() {
    const count = parseInt(this.value) || 1;
    const ticketPrice = 49; // Base price
    
    // Update price summary
    const ticketAmount = count * ticketPrice;
    const serviceFee = ticketAmount * 0.1;
    const total = ticketAmount + serviceFee;
    
    document.querySelector('.price-item:first-child span:last-child').textContent = 
        {ticketAmount.toFixed(2)};
    document.querySelector('.price-item:nth-child(2) span:last-child').textContent = 
        {serviceFeetoFixed(2)};
    document.querySelector('.price-item.total span:last-child').textContent = 
        {total.toFixed(2)};
});`
},
// ====================================================================
// TEMPLATE 13: Glassmorphism Login - Complete JavaScript
// ====================================================================
form13: {
    name: "Glassmorphism Login",
    category: "login modern",
    html: `<div class="form-container glassmorphism-bg">
    <div class="form-header">
        <div class="avatar-container">
            <div class="avatar">
                <i class="fas fa-user"></i>
            </div>
        </div>
        <h3>Welcome Back</h3>
        <p>Sign in to your account</p>
    </div>
    <form class="glassmorphism-form">
        <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email Address" required>
        </div>
        <div class="input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
            <button type="button" class="password-toggle">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <div class="form-options">
            <label class="checkbox-label">
                <input type="checkbox" checked>
                <span class="checkbox-checkmark"></span>
                Remember me
            </label>
            <a href="#" class="forgot-link">Forgot Password?</a>
        </div>
        <button type="submit" class="form-btn glassmorphism-btn">
            <i class="fas fa-sign-in-alt"></i>
            Sign In
        </button>
        <div class="form-divider">
            <span>or continue with</span>
        </div>
        <div class="social-login-icons">
            <button type="button" class="social-icon google">
                <i class="fab fa-google"></i>
            </button>
            <button type="button" class="social-icon facebook">
                <i class="fab fa-facebook-f"></i>
            </button>
            <button type="button" class="social-icon twitter">
                <i class="fab fa-twitter"></i>
            </button>
            <button type="button" class="social-icon github">
                <i class="fab fa-github"></i>
            </button>
        </div>
    </form>
    <div class="form-footer">
        <p>Don't have an account? <a href="#" class="form-link">Sign up</a></p>
    </div>
</div>`,
    css: `.glassmorphism-bg {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
        0 8px 32px rgba(31, 38, 135, 0.37),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.glassmorphism-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, 
        rgba(108, 99, 255, 0.1) 0%,
        rgba(255, 107, 159, 0.1) 100%);
    z-index: -1;
}

.avatar-container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.avatar {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #6c63ff, #ff6b9f);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.4);
}

.form-header h3 {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 600;
}

.form-header p {
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    margin-bottom: 20px;
}

.glassmorphism-form .input-group {
    position: relative;
    margin-bottom: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    overflow: hidden;
}

.glassmorphism-form .input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    z-index: 1;
}

.glassmorphism-form .input-group input {
    width: 100%;
    padding: 12px 15px 12px 45px;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.9rem;
}

.glassmorphism-form .input-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.glassmorphism-form .input-group input:focus {
    outline: none;
}

.password-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    font-size: 0.9rem;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
}

.checkbox-label input {
    display: none;
}

.checkbox-checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-label input:checked + .checkbox-checkmark {
    background: #6c63ff;
    border-color: #6c63ff;
}

.checkbox-label input:checked + .checkbox-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.7rem;
}

.forgot-link {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s ease;
}

.forgot-link:hover {
    color: #6c63ff;
}

.form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.form-btn.glassmorphism-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #6c63ff, #ff6b9f);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
}

.form-btn.glassmorphism-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(108, 99, 255, 0.4);
}

.form-divider {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
}

.form-divider::before,
.form-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
}

.form-divider span {
    padding: 0 10px;
}

.social-login-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.social-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    color: white;
}

.social-icon.google { background: #DB4437; }
.social-icon.facebook { background: #4267B2; }
.social-icon.twitter { background: #1DA1F2; }
.social-icon.github { background: #333; }

.social-icon:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.form-footer {
    text-align: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
}

.form-link {
    color: #6c63ff;
    text-decoration: none;
    font-weight: 500;
}

.form-link:hover {
    text-decoration: underline;
}

.glassmorphism-bg::-webkit-scrollbar {
    width: 4px;
}

.glassmorphism-bg::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.glassmorphism-bg::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.glassmorphism-bg::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}`,
    js: `// Glassmorphism Login - Complete JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const glassmorphismForm = document.querySelector('.glassmorphism-form');
    
    if (glassmorphismForm) {
        // Form submission
        glassmorphismForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const rememberMe = this.querySelector('input[type="checkbox"]').checked;
            
            // Validation
            if (!email || !password) {
                showGlassNotification('Please fill in all fields', 'error');
                shakeEmptyInputs();
                return;
            }
            
            // Email validation
            if (!isValidEmail(email)) {
                showGlassNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('.glassmorphism-btn');
            const originalContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                showGlassNotification('Login successful! Welcome back.', 'success');
                
                // Reset form
                this.reset();
                this.querySelector('input[type="checkbox"]').checked = true;
                
                // Restore button
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                
                // Add success animation
                submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                setTimeout(() => {
                    submitBtn.style.background = 'linear-gradient(135deg, #6c63ff, #ff6b9f)';
                }, 2000);
                
            }, 1500);
        });
        
        // Password toggle functionality
        const passwordToggle = glassmorphismForm.querySelector('.password-toggle');
        if (passwordToggle) {
            passwordToggle.addEventListener('click', function() {
                const passwordInput = this.parentElement.querySelector('input');
                const eyeIcon = this.querySelector('i');
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                    this.style.color = '#6c63ff';
                } else {
                    passwordInput.type = 'password';
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                    this.style.color = '';
                }
            });
        }
        
        // Social login buttons
        const socialButtons = glassmorphismForm.querySelectorAll('.social-icon');
        socialButtons.forEach(button => {
            button.addEventListener('click', function() {
                const platform = this.classList.contains('google') ? 'Google' :
                               this.classList.contains('facebook') ? 'Facebook' :
                               this.classList.contains('twitter') ? 'Twitter' : 'GitHub';
                
                // Animate button
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
                
                // Show platform-specific message
                showGlassNotification(\`Connecting with \${platform}...\`, 'info');
                
                // Simulate social login
                setTimeout(() => {
                    showGlassNotification(\`\${platform} login successful!\`, 'success');
                }, 1000);
            });
        });
        
        // Forgot password link
        const forgotLink = glassmorphismForm.querySelector('.forgot-link');
        if (forgotLink) {
            forgotLink.addEventListener('click', function(e) {
                e.preventDefault();
                showGlassNotification('Password reset link sent to your email', 'info');
            });
        }
        
        // Form footer link
        const signupLink = document.querySelector('.form-link');
        if (signupLink) {
            signupLink.addEventListener('click', function(e) {
                e.preventDefault();
                showGlassNotification('Redirecting to signup page...', 'info');
            });
        }
        
        // Input focus effects
        const inputs = glassmorphismForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.background = 'rgba(255, 255, 255, 0.15)';
                this.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.background = 'rgba(255, 255, 255, 0.1)';
                this.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            });
        });
    }
    
    // Helper functions
    function isValidEmail(email) {
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(email);
    }
    
    function shakeEmptyInputs() {
        const inputs = glassmorphismForm.querySelectorAll('input[required]');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            }
        });
    }
    
    function showGlassNotification(message, type = 'info') {
        // Remove existing notification
        const existingNotification = document.querySelector('.glass-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'glass-notification';
        notification.innerHTML = \`
            <div class="notification-content">
                <i class="fas \${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>\${message}</span>
            </div>
        \`;
        
        // Style notification
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 12px 20px;
            color: white;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
        \`;
        
        // Add color based on type
        if (type === 'success') {
            notification.style.borderLeft = '3px solid #4CAF50';
        } else if (type === 'error') {
            notification.style.borderLeft = '3px solid #f44336';
        } else {
            notification.style.borderLeft = '3px solid #6c63ff';
        }
        
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add keyframes if not exists
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = \`
                @keyframes slideInRight {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOutRight {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
            \`;
            document.head.appendChild(style);
        }
    }
});`
},

// ====================================================================
// TEMPLATE 14: Gradient Wave Login - Complete JavaScript
// ====================================================================
form14: {
    name: "Gradient Wave Login",
    category: "login modern",
    html: `<div class="form-container gradient-wave-bg">
    <div class="wave-container">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
    </div>
    <div class="form-header">
        <div class="logo-icon">
            <i class="fas fa-lock"></i>
        </div>
        <h3>Secure Login</h3>
        <p>Access your secure account</p>
    </div>
    <form class="gradient-wave-form">
        <div class="floating-input-group">
            <input type="email" id="wave-email" required>
            <label for="wave-email">
                <i class="fas fa-envelope"></i>
                Email Address
            </label>
            <div class="underline"></div>
        </div>
        <div class="floating-input-group">
            <input type="password" id="wave-password" required>
            <label for="wave-password">
                <i class="fas fa-lock"></i>
                Password
            </label>
            <div class="underline"></div>
            <button type="button" class="password-toggle">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <div class="form-options">
            <label class="switch">
                <input type="checkbox" checked>
                <span class="slider"></span>
                <span class="switch-label">Remember me</span>
            </label>
            <a href="#" class="forgot-link">
                <i class="fas fa-key"></i>
                Forgot?
            </a>
        </div>
        <button type="submit" class="form-btn gradient-wave-btn">
            <span class="btn-text">Sign In</span>
            <div class="btn-wave"></div>
            <i class="fas fa-arrow-right"></i>
        </button>
        <div class="security-info">
            <i class="fas fa-shield-alt"></i>
            <span>Protected by 256-bit SSL encryption</span>
        </div>
    </form>
</div>`,
    css: `.gradient-wave-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.wave-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    overflow: hidden;
    z-index: 1;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50% 50% 0 0;
    animation: waveAnimation 10s linear infinite;
}

.wave1 {
    animation-delay: 0s;
    opacity: 0.7;
    height: 50px;
}

.wave2 {
    animation-delay: 0.5s;
    opacity: 0.5;
    height: 40px;
}

.wave3 {
    animation-delay: 1s;
    opacity: 0.3;
    height: 30px;
}

@keyframes waveAnimation {
    0% { transform: translateX(0) translateZ(0); }
    50% { transform: translateX(-25%) translateZ(0); }
    100% { transform: translateX(-50%) translateZ(0); }
}

.logo-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.floating-input-group {
    position: relative;
    margin-bottom: 20px;
}

.floating-input-group input {
    width: 100%;
    padding: 15px 15px 5px 15px;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.floating-input-group input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
}

.floating-input-group label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    pointer-events: none;
}

.floating-input-group input:focus + label,
.floating-input-group input:not(:placeholder-shown) + label {
    top: 10px;
    transform: translateY(0);
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.9);
}

.underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.floating-input-group input:focus ~ .underline {
    width: 100%;
}

.switch {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
}

.switch input {
    display: none;
}

.slider {
    position: relative;
    width: 40px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.slider::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.3s ease;
}

.switch input:checked + .slider {
    background: #4CAF50;
}

.switch input:checked + .slider::before {
    transform: translateX(20px);
}

.form-btn.gradient-wave-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-wave {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.form-btn.gradient-wave-btn:hover .btn-wave {
    left: 100%;
}

.security-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 15px;
}

.gradient-wave-bg::-webkit-scrollbar {
    width: 4px;
}

.gradient-wave-bg::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.gradient-wave-bg::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.gradient-wave-bg::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}`,
    js: `// Gradient Wave Login - Complete JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const waveForm = document.querySelector('.gradient-wave-form');
    
    if (waveForm) {
        // Initialize floating labels
        initFloatingLabels();
        
        // Form submission
        waveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('wave-email').value;
            const password = document.getElementById('wave-password').value;
            const rememberMe = this.querySelector('input[type="checkbox"]').checked;
            
            // Validation
            if (!email || !password) {
                showWaveError('Please fill in all fields');
                shakeWaveElements();
                return;
            }
            
            if (!isValidEmail(email)) {
                showWaveError('Please enter a valid email address');
                return;
            }
            
            // Show secure login process
            const submitBtn = this.querySelector('.gradient-wave-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const originalText = btnText.textContent;
            
            // Security animation
            submitBtn.style.borderColor = '#4CAF50';
            submitBtn.style.color = '#4CAF50';
            btnText.textContent = 'Verifying Security...';
            
            // Add scanning animation
            const scanningWave = document.createElement('div');
            scanningWave.className = 'scanning-wave';
            scanningWave.style.cssText = \`
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, 
                    transparent, 
                    rgba(76, 175, 80, 0.3), 
                    transparent);
                animation: scanSecurity 2s linear;
            \`;
            submitBtn.appendChild(scanningWave);
            
            // Simulate security verification
            setTimeout(() => {
                // Update security info
                const securityInfo = document.querySelector('.security-info');
                securityInfo.innerHTML = \`
                    <i class="fas fa-shield-check" style="color: #4CAF50"></i>
                    <span style="color: #4CAF50">✓ Security verified</span>
                \`;
                
                // Complete login
                setTimeout(() => {
                    btnText.textContent = 'Access Granted!';
                    submitBtn.style.background = 'rgba(76, 175, 80, 0.2)';
                    
                    // Show success
                    showWaveSuccess('Secure login successful!');
                    
                    // Reset form
                    setTimeout(() => {
                        waveForm.reset();
                        submitBtn.style.borderColor = '';
                        submitBtn.style.color = '';
                        submitBtn.style.background = '';
                        btnText.textContent = originalText;
                        scanningWave.remove();
                        securityInfo.innerHTML = \`
                            <i class="fas fa-shield-alt"></i>
                            <span>Protected by 256-bit SSL encryption</span>
                        \`;
                        initFloatingLabels(); // Re-init labels
                    }, 1000);
                    
                }, 500);
                
            }, 1500);
        });
        
        // Password toggle
        const passwordToggle = waveForm.querySelector('.password-toggle');
        if (passwordToggle) {
            passwordToggle.addEventListener('click', function() {
                const passwordInput = document.getElementById('wave-password');
                const eyeIcon = this.querySelector('i');
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                    this.style.transform = 'translateY(-50%) scale(1.2)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-50%)';
                    }, 200);
                } else {
                    passwordInput.type = 'password';
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                    this.style.transform = 'translateY(-50%) scale(0.8)';
                    setTimeout(() => {
                        this.style.transform = 'translateY(-50%)';
                    }, 200);
                }
            });
        }
        
        // Forgot password
        const forgotLink = waveForm.querySelector('.forgot-link');
        if (forgotLink) {
            forgotLink.addEventListener('click', function(e) {
                e.preventDefault();
                showWaveNotification('Initiating secure password reset...', 'info');
                
                // Simulate secure reset process
                setTimeout(() => {
                    showWaveSuccess('Security token sent to your registered email');
                }, 1000);
            });
        }
        
        // Password strength indicator
        const passwordInput = document.getElementById('wave-password');
        if (passwordInput) {
            passwordInput.addEventListener('input', function() {
                const strength = calculatePasswordStrength(this.value);
                updatePasswordStrengthIndicator(strength);
            });
        }
        
        // Toggle switch animation
        const toggleSwitch = waveForm.querySelector('.switch input');
        if (toggleSwitch) {
            toggleSwitch.addEventListener('change', function() {
                const slider = this.nextElementSibling;
                if (this.checked) {
                    slider.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.5)';
                    setTimeout(() => {
                        slider.style.boxShadow = '';
                    }, 300);
                }
            });
        }
    }
    
    // Helper functions
    function initFloatingLabels() {
        const floatingGroups = document.querySelectorAll('.floating-input-group');
        floatingGroups.forEach(group => {
            const input = group.querySelector('input');
            const label = group.querySelector('label');
            
            if (input.value) {
                label.style.top = '10px';
                label.style.transform = 'translateY(0)';
                label.style.fontSize = '0.75rem';
                label.style.color = 'rgba(255, 255, 255, 0.9)';
            }
            
            input.addEventListener('focus', function() {
                label.style.top = '10px';
                label.style.transform = 'translateY(0)';
                label.style.fontSize = '0.75rem';
                label.style.color = 'rgba(255, 255, 255, 0.9)';
                this.style.background = 'rgba(255, 255, 255, 0.15)';
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    label.style.top = '50%';
                    label.style.transform = 'translateY(-50%)';
                    label.style.fontSize = '0.9rem';
                    label.style.color = 'rgba(255, 255, 255, 0.7)';
                }
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
        });
    }
    
    function calculatePasswordStrength(password) {
        let strength = 0;
        
        // Length check
        if (password.length >= 8) strength += 25;
        if (password.length >= 12) strength += 15;
        
        // Character variety
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[0-9]/.test(password)) strength += 20;
        if (/[^A-Za-z0-9]/.test(password)) strength += 20;
        
        return Math.min(strength, 100);
    }
    
    function updatePasswordStrengthIndicator(strength) {
        const passwordInput = document.getElementById('wave-password');
        if (!passwordInput) return;
        
        const group = passwordInput.closest('.floating-input-group');
        const underline = group.querySelector('.underline');
        
        if (strength < 30) {
            underline.style.background = '#f44336';
        } else if (strength < 70) {
            underline.style.background = '#ff9800';
        } else {
            underline.style.background = '#4CAF50';
        }
        
        // Animate width based on strength
        if (passwordInput === document.activeElement) {
            underline.style.width = strength + '%';
        }
    }
    
    function shakeWaveElements() {
        const inputs = document.querySelectorAll('.gradient-wave-form input');
        inputs.forEach(input => {
            if (!input.value) {
                input.style.animation = 'waveShake 0.5s';
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            }
        });
    }
    
    function showWaveError(message) {
        showWaveNotification(message, 'error');
    }
    
    function showWaveSuccess(message) {
        showWaveNotification(message, 'success');
    }
    
    function showWaveNotification(message, type = 'info') {
        // Create wave notification
        const notification = document.createElement('div');
        notification.className = 'wave-notification';
        notification.innerHTML = \`
            <div class="notification-wave"></div>
            <div class="notification-content">
                <i class="fas \${type === 'success' ? 'fa-shield-check' : type === 'error' ? 'fa-exclamation-triangle' : 'fa-info-circle'}"></i>
                <span>\${message}</span>
            </div>
        \`;
        
        // Style notification
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 12px 20px;
            color: white;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            overflow: hidden;
            animation: waveSlideIn 0.3s ease-out;
        \`;
        
        // Add wave effect
        const wave = notification.querySelector('.notification-wave');
        wave.style.cssText = \`
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: \${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#667eea'};
            transform: scaleX(0);
            transform-origin: left;
            animation: waveGrow 2s ease-out;
        \`;
        
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'waveSlideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add animations if not exists
        if (!document.querySelector('#wave-styles')) {
            const style = document.createElement('style');
            style.id = 'wave-styles';
            style.textContent = \`
                @keyframes waveSlideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes waveSlideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                @keyframes waveGrow {
                    0% { transform: scaleX(0); }
                    50% { transform: scaleX(1); }
                    100% { transform: scaleX(0); }
                }
                @keyframes waveShake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                @keyframes scanSecurity {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            \`;
            document.head.appendChild(style);
        }
    }
    
    function isValidEmail(email) {
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(email);
    }
});`
},

// ====================================================================
// TEMPLATE 15: Neon Glow Login - Complete JavaScript
// ====================================================================
form15: {
    name: "Neon Glow Login",
    category: "login modern",
    html: `<div class="form-container neon-glow-bg">
    <div class="neon-border">
        <div class="neon-corner tl"></div>
        <div class="neon-corner tr"></div>
        <div class="neon-corner bl"></div>
        <div class="neon-corner br"></div>
    </div>
    <div class="form-header">
        <h3 class="neon-text">
            <span class="neon-letter">L</span>
            <span class="neon-letter">O</span>
            <span class="neon-letter">G</span>
            <span class="neon-letter">I</span>
            <span class="neon-letter">N</span>
        </h3>
        <p class="neon-subtext">Enter the portal</p>
    </div>
    <form class="neon-glow-form">
        <div class="neon-input-group">
            <i class="fas fa-user-astronaut"></i>
            <input type="text" placeholder="Username" required class="neon-input">
            <div class="neon-glow"></div>
        </div>
        <div class="neon-input-group">
            <i class="fas fa-key"></i>
            <input type="password" placeholder="Password" required class="neon-input">
            <div class="neon-glow"></div>
            <button type="button" class="password-toggle neon-toggle">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <div class="form-options">
            <label class="neon-checkbox">
                <input type="checkbox">
                <span class="neon-checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span class="neon-label">Stay logged in</span>
            </label>
            <a href="#" class="neon-link">
                <i class="fas fa-question-circle"></i>
                Need help?
            </a>
        </div>
        <button type="submit" class="form-btn neon-btn">
            <span class="neon-btn-text">ACCESS</span>
            <div class="neon-btn-glow"></div>
            <i class="fas fa-rocket"></i>
        </button>
        <div class="neon-divider">
            <span>OR</span>
        </div>
        <div class="neon-social">
            <button type="button" class="neon-social-btn">
                <i class="fab fa-discord"></i>
            </button>
            <button type="button" class="neon-social-btn">
                <i class="fab fa-steam"></i>
            </button>
            <button type="button" class="neon-social-btn">
                <i class="fab fa-twitch"></i>
            </button>
        </div>
        <div class="neon-footer">
            <span class="pulse-dot"></span>
            <span>Secure connection active</span>
        </div>
    </form>
</div>`,
    css: `.neon-glow-bg {
    background: #0a0a0a;
    border-radius: 15px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.neon-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.neon-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #00ff88;
    animation: neonPulse 2s infinite;
}

.neon-corner.tl {
    top: -1px;
    left: -1px;
    border-right: none;
    border-bottom: none;
}

.neon-corner.tr {
    top: -1px;
    right: -1px;
    border-left: none;
    border-bottom: none;
}

.neon-corner.bl {
    bottom: -1px;
    left: -1px;
    border-right: none;
    border-top: none;
}

.neon-corner.br {
    bottom: -1px;
    right: -1px;
    border-left: none;
    border-top: none;
}

@keyframes neonPulse {
    0%, 100% { 
        box-shadow: 0 0 5px #00ff88,
                   0 0 10px #00ff88,
                   inset 0 0 5px #00ff88;
    }
    50% { 
        box-shadow: 0 0 10px #00ff88,
                   0 0 20px #00ff88,
                   inset 0 0 10px #00ff88;
    }
}

.neon-text {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 5px;
    letter-spacing: 3px;
    text-shadow: 0 0 10px #00ff88;
}

.neon-letter {
    display: inline-block;
    animation: letterGlow 3s infinite;
}

.neon-letter:nth-child(1) { animation-delay: 0s; }
.neon-letter:nth-child(2) { animation-delay: 0.2s; }
.neon-letter:nth-child(3) { animation-delay: 0.4s; }
.neon-letter:nth-child(4) { animation-delay: 0.6s; }
.neon-letter:nth-child(5) { animation-delay: 0.8s; }

@keyframes letterGlow {
    0%, 100% { 
        text-shadow: 0 0 10px #00ff88,
                   0 0 20px #00ff88;
    }
    50% { 
        text-shadow: 0 0 5px #00ff88,
                   0 0 10px #00ff88;
    }
}

.neon-subtext {
    text-align: center;
    color: #00ff88;
    font-size: 0.8rem;
    margin-bottom: 20px;
    letter-spacing: 1px;
}

.neon-input-group {
    position: relative;
    margin-bottom: 15px;
}

.neon-input {
    width: 100%;
    padding: 12px 15px 12px 45px;
    background: rgba(0, 255, 136, 0.05);
    border: 2px solid rgba(0, 255, 136, 0.3);
    border-radius: 8px;
    color: #00ff88;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.neon-input::placeholder {
    color: rgba(0, 255, 136, 0.5);
}

.neon-input:focus {
    outline: none;
    border-color: #00ff88;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.neon-input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #00ff88;
    z-index: 1;
}

.neon-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #00ff88;
    box-shadow: 0 0 10px #00ff88;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.neon-input:focus ~ .neon-glow {
    transform: scaleX(1);
}

.neon-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #00ff88;
    cursor: pointer;
    font-size: 0.9rem;
}

.neon-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(0, 255, 136, 0.9);
}

.neon-checkbox input {
    display: none;
}

.neon-checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid #00ff88;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: transparent;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px rgba(0, 255, 136, 0.5);
}

.neon-checkbox input:checked + .neon-checkmark {
    background: #00ff88;
    color: #0a0a0a;
    box-shadow: 0 0 10px #00ff88;
}

.neon-link {
    color: #00ff88;
    text-decoration: none;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 5px;
}

.form-btn.neon-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: transparent;
    color: #00ff88;
    border: 2px solid #00ff88;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.neon-btn-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(0, 255, 136, 0.3), 
        transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.form-btn.neon-btn:hover {
    background: rgba(0, 255, 136, 0.1);
    box-shadow: 0 0 15px rgba(0, 255, 136, 0.5);
}

.form-btn.neon-btn:hover .neon-btn-glow {
    left: 100%;
}

.neon-divider {
    display: flex;
    align-items: center;
    margin: 15px 0;
    color: #00ff88;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.neon-divider::before,
.neon-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(0, 255, 136, 0.3);
}

.neon-divider span {
    padding: 0 10px;
    text-shadow: 0 0 5px #00ff88;
}

.neon-social {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 15px 0;
}

.neon-social-btn {
    width: 35px;
    height: 35px;
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid #00ff88;
    border-radius: 50%;
    color: #00ff88;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.neon-social-btn:hover {
    background: #00ff88;
    color: #0a0a0a;
    box-shadow: 0 0 15px #00ff88;
    transform: translateY(-2px);
}

.neon-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.7rem;
    color: #00ff88;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 255, 136, 0.2);
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #00ff88;
    border-radius: 50%;
    animation: pulse 2s infinite;
    box-shadow: 0 0 10px #00ff88;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.neon-glow-bg::-webkit-scrollbar {
    width: 4px;
}

.neon-glow-bg::-webkit-scrollbar-track {
    background: rgba(0, 255, 136, 0.1);
    border-radius: 10px;
}

.neon-glow-bg::-webkit-scrollbar-thumb {
    background: rgba(0, 255, 136, 0.3);
    border-radius: 10px;
}

.neon-glow-bg::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 255, 136, 0.5);
}`,
    js: `// Neon Glow Login - Complete JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const neonForm = document.querySelector('.neon-glow-form');
    
    if (neonForm) {
        // Initialize neon effects
        initNeonEffects();
        
        // Form submission
        neonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const stayLoggedIn = this.querySelector('input[type="checkbox"]').checked;
            
            // Validation
            if (!username || !password) {
                showNeonError('ACCESS DENIED: Missing credentials');
                neonErrorEffect();
                return;
            }
            
            // Start access sequence
            const submitBtn = this.querySelector('.neon-btn');
            const btnText = submitBtn.querySelector('.neon-btn-text');
            const originalText = btnText.textContent;
            const rocketIcon = submitBtn.querySelector('.fa-rocket');
            
            // Begin access animation
            btnText.textContent = 'ACCESSING...';
            submitBtn.style.borderColor = '#ff00ff';
            submitBtn.style.color = '#ff00ff';
            rocketIcon.style.transform = 'rotate(45deg)';
            
            // Add scanning effect
            const scanLine = document.createElement('div');
            scanLine.className = 'neon-scan';
            scanLine.style.cssText = \`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    to right,
                    transparent,
                    rgba(255, 0, 255, 0.3),
                    transparent
                );
                animation: neonScan 1.5s linear;
            \`;
            submitBtn.appendChild(scanLine);
            
            // Simulate access protocol
            setTimeout(() => {
                // First scan complete
                btnText.textContent = 'VERIFYING...';
                submitBtn.style.borderColor = '#00ffff';
                submitBtn.style.color = '#00ffff';
                rocketIcon.style.transform = 'rotate(90deg)';
                
                // Update footer status
                const pulseDot = document.querySelector('.pulse-dot');
                const statusText = document.querySelector('.neon-footer span:nth-child(2)');
                pulseDot.style.animation = 'pulse 0.5s infinite';
                statusText.textContent = 'Identity verification in progress';
                
                setTimeout(() => {
                    // Second verification
                    btnText.textContent = 'AUTHORIZING...';
                    submitBtn.style.borderColor = '#ffff00';
                    submitBtn.style.color = '#ffff00';
                    rocketIcon.style.transform = 'rotate(135deg)';
                    
                    // Add matrix effect
                    createMatrixEffect();
                    
                    setTimeout(() => {
                        // Access granted
                        btnText.textContent = 'ACCESS GRANTED';
                        submitBtn.style.borderColor = '#00ff88';
                        submitBtn.style.color = '#00ff88';
                        rocketIcon.style.transform = 'rotate(0deg)';
                        rocketIcon.style.color = '#00ff88';
                        
                        // Launch rocket
                        rocketIcon.style.animation = 'launchRocket 1s forwards';
                        
                        // Show success
                        showNeonSuccess('Welcome to the system');
                        
                        // Reset form
                        setTimeout(() => {
                            neonForm.reset();
                            btnText.textContent = originalText;
                            submitBtn.style.borderColor = '';
                            submitBtn.style.color = '';
                            rocketIcon.style.animation = '';
                            rocketIcon.style.transform = '';
                            rocketIcon.style.color = '';
                            scanLine.remove();
                            pulseDot.style.animation = '';
                            statusText.textContent = 'Secure connection active';
                            stopMatrixEffect();
                        }, 2000);
                        
                    }, 1000);
                    
                }, 1000);
                
            }, 1000);
        });
        
        // Password toggle with neon effect
        const neonToggle = neonForm.querySelector('.neon-toggle');
        if (neonToggle) {
            neonToggle.addEventListener('click', function() {
                const passwordInput = this.parentElement.querySelector('.neon-input');
                const eyeIcon = this.querySelector('i');
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                    
                    // Neon effect
                    this.style.boxShadow = '0 0 10px #00ff88';
                    setTimeout(() => {
                        this.style.boxShadow = '';
                    }, 300);
                } else {
                    passwordInput.type = 'password';
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                }
            });
        }
        
        // Neon checkbox
        const neonCheckbox = neonForm.querySelector('.neon-checkbox input');
        if (neonCheckbox) {
            neonCheckbox.addEventListener('change', function() {
                const checkmark = this.nextElementSibling;
                if (this.checked) {
                    checkmark.style.transform = 'scale(1.2)';
                    checkmark.style.boxShadow = '0 0 15px #00ff88';
                    setTimeout(() => {
                        checkmark.style.transform = '';
                        checkmark.style.boxShadow = '';
                    }, 300);
                }
            });
        }
        
        // Neon social buttons
        const neonSocialButtons = neonForm.querySelectorAll('.neon-social-btn');
        neonSocialButtons.forEach(button => {
            button.addEventListener('click', function() {
                const platform = this.querySelector('i').className.includes('discord') ? 'Discord' :
                               this.querySelector('i').className.includes('steam') ? 'Steam' : 'Twitch';
                
                // Button glow effect
                this.style.animation = 'socialPulse 0.5s';
                
                // Show platform-specific message
                showNeonNotification(\`Connecting to \${platform}...\`);
                
                setTimeout(() => {
                    showNeonSuccess(\`\${platform} connection established\`);
                    this.style.animation = '';
                }, 1000);
            });
        });
        
        // Need help link
        const helpLink = neonForm.querySelector('.neon-link');
        if (helpLink) {
            helpLink.addEventListener('click', function(e) {
                e.preventDefault();
                showNeonNotification('Initiating support protocol...');
                
                setTimeout(() => {
                    showNeonNotification('Support drone dispatched to your location');
                }, 1500);
            });
        }
        
        // Input focus effects
        const neonInputs = neonForm.querySelectorAll('.neon-input');
        neonInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.boxShadow = '0 0 15px #00ff88';
                const glow = this.nextElementSibling;
                if (glow && glow.classList.contains('neon-glow')) {
                    glow.style.transform = 'scaleX(1)';
                }
            });
            
            input.addEventListener('blur', function() {
                this.style.boxShadow = '';
                const glow = this.nextElementSibling;
                if (glow && glow.classList.contains('neon-glow')) {
                    glow.style.transform = 'scaleX(0)';
                }
            });
            
            // Typing effect
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.style.borderColor = '#00ff88';
                } else {
                    this.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                }
            });
        });
    }
    
    // Helper functions
    function initNeonEffects() {
        // Make letters glow sequentially
        const letters = document.querySelectorAll('.neon-letter');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = \`\${index * 0.2}s\`;
        });
        
        // Make corners pulse
        const corners = document.querySelectorAll('.neon-corner');
        corners.forEach((corner, index) => {
            corner.style.animationDelay = \`\${index * 0.5}s\`;
        });
    }
    
    function neonErrorEffect() {
        // Red flash effect
        const form = document.querySelector('.neon-glow-bg');
        form.style.animation = 'neonErrorFlash 0.5s';
        
        // Shake inputs
        const inputs = document.querySelectorAll('.neon-input');
        inputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = '#ff416c';
                input.style.boxShadow = '0 0 15px #ff416c';
                
                // Create error particles
                createErrorParticles(input);
            }
        });
        
        setTimeout(() => {
            form.style.animation = '';
            inputs.forEach(input => {
                input.style.borderColor = '';
                input.style.boxShadow = '';
            });
        }, 1000);
    }
    
    function createErrorParticles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'error-particle';
            particle.style.cssText = \`
                position: fixed;
                width: 3px;
                height: 3px;
                background: #ff416c;
                border-radius: 50%;
                top: \${rect.top + rect.height / 2}px;
                left: \${rect.left + rect.width / 2}px;
                pointer-events: none;
                z-index: 1000;
                animation: errorParticle 1s forwards;
            \`;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }
    
    function createMatrixEffect() {
        const form = document.querySelector('.neon-glow-bg');
        const matrixOverlay = document.createElement('div');
        matrixOverlay.className = 'matrix-overlay';
        matrixOverlay.style.cssText = \`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            pointer-events: none;
            z-index: 2;
            animation: matrixScan 2s linear;
        \`;
        form.appendChild(matrixOverlay);
        
        // Store reference for removal
        window.matrixOverlay = matrixOverlay;
    }
    
    function stopMatrixEffect() {
        if (window.matrixOverlay) {
            window.matrixOverlay.remove();
            window.matrixOverlay = null;
        }
    }
    
    function showNeonError(message) {
        showNeonNotification(message, 'error');
    }
    
    function showNeonSuccess(message) {
        showNeonNotification(message, 'success');
    }
    
    function showNeonNotification(message, type = 'info') {
        // Create neon notification
        const notification = document.createElement('div');
        notification.className = 'neon-notification';
        notification.innerHTML = \`
            <div class="neon-border"></div>
            <div class="notification-content">
                <i class="fas \${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>\${message}</span>
            </div>
        \`;
        
        // Style notification
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(10, 10, 10, 0.9);
            border: 1px solid \${type === 'success' ? '#00ff88' : type === 'error' ? '#ff416c' : '#00ffff'};
            border-radius: 8px;
            padding: 12px 20px;
            color: \${type === 'success' ? '#00ff88' : type === 'error' ? '#ff416c' : '#00ffff'};
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            overflow: hidden;
            animation: neonSlideIn 0.3s ease-out;
            box-shadow: 0 0 15px \${type === 'success' ? 'rgba(0, 255, 136, 0.5)' : type === 'error' ? 'rgba(255, 65, 108, 0.5)' : 'rgba(0, 255, 255, 0.5)'};
        \`;
        
        // Add neon border
        const border = notification.querySelector('.neon-border');
        border.style.cssText = \`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid \${type === 'success' ? '#00ff88' : type === 'error' ? '#ff416c' : '#00ffff'};
            border-radius: 8px;
            animation: neonBorderPulse 2s infinite;
            pointer-events: none;
        \`;
        
        document.body.appendChild(notification);
        
        // Auto remove
        setTimeout(() => {
            notification.style.animation = 'neonSlideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add animations if not exists
        if (!document.querySelector('#neon-styles')) {
            const style = document.createElement('style');
            style.id = 'neon-styles';
            style.textContent = \`
                @keyframes neonSlideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes neonSlideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                @keyframes neonBorderPulse {
                    0%, 100% { 
                        box-shadow: 0 0 5px currentColor,
                                   0 0 10px currentColor,
                                   inset 0 0 5px currentColor;
                    }
                    50% { 
                        box-shadow: 0 0 10px currentColor,
                                   0 0 20px currentColor,
                                   inset 0 0 10px currentColor;
                    }
                }
                @keyframes neonErrorFlash {
                    0%, 100% { box-shadow: 0 0 0 rgba(255, 65, 108, 0); }
                    50% { box-shadow: 0 0 30px rgba(255, 65, 108, 0.5); }
                }
                @keyframes errorParticle {
                    0% { 
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% { 
                        transform: translate(\${Math.random() * 100 - 50}px, \${Math.random() * 100 - 50}px) scale(0);
                        opacity: 0;
                    }
                }
                @keyframes neonScan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes matrixScan {
                    0% { background-position: 0 0; }
                    100% { background-position: 20px 20px; }
                }
                @keyframes socialPulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 0 #00ff88; }
                    50% { transform: scale(1.1); box-shadow: 0 0 15px #00ff88; }
                }
                @keyframes launchRocket {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-100px) rotate(45deg); opacity: 0; }
                }
            \`;
            document.head.appendChild(style);
        }
    }
});`
},

// ====================================================================
// TEMPLATE 16: 3D Depth Login - Complete JavaScript
// ====================================================================
form16: {
    name: "3D Depth Login",
    category: "login modern",
    html: `<div class="form-container depth-3d-bg">
    <div class="depth-card">
        <div class="depth-shadow"></div>
        <div class="depth-content">
            <div class="form-header">
                <div class="depth-logo">
                    <div class="depth-icon">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h3>CubeSpace</h3>
                </div>
                <p>Enter your workspace</p>
            </div>
            <form class="depth-3d-form">
                <div class="depth-input-group">
                    <div class="input-wrapper">
                        <i class="fas fa-user-circle"></i>
                        <input type="email" placeholder=" " required>
                        <label>Email Address</label>
                        <div class="input-depth"></div>
                    </div>
                </div>
                <div class="depth-input-group">
                    <div class="input-wrapper">
                        <i class="fas fa-fingerprint"></i>
                        <input type="password" placeholder=" " required>
                        <label>Password</label>
                        <div class="input-depth"></div>
                        <button type="button" class="password-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="depth-checkbox-group">
                    <label class="depth-checkbox">
                        <input type="checkbox" checked>
                        <div class="checkbox-3d">
                            <div class="checkbox-front">
                                <i class="fas fa-check"></i>
                            </div>
                            <div class="checkbox-back"></div>
                        </div>
                        <span>Keep me signed in</span>
                    </label>
                    <a href="#" class="depth-link">
                        <i class="fas fa-lock"></i>
                        Reset password
                    </a>
                </div>
                <button type="submit" class="form-btn depth-btn">
                    <span>Enter Workspace</span>
                    <div class="btn-3d-effect"></div>
                    <i class="fas fa-arrow-right"></i>
                </button>
                <div class="depth-divider">
                    <div class="divider-line"></div>
                    <span>New here?</span>
                    <div class="divider-line"></div>
                </div>
                <button type="button" class="depth-alt-btn">
                    <i class="fas fa-user-plus"></i>
                    Create Account
                </button>
            </form>
        </div>
    </div>
</div>`,
    css: `.depth-3d-bg {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 20px;
    padding: 25px;
    position: relative;
    max-height: 280px;
    overflow-y: auto;
}

.depth-card {
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
}

.depth-shadow {
    position: absolute;
    bottom: -10px;
    left: 5%;
    width: 90%;
    height: 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    filter: blur(10px);
    transform: translateZ(-20px);
}

.depth-content {
    background: white;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateZ(20px);
}

.depth-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
}

.depth-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    transform: rotate(45deg);
}

.depth-icon i {
    transform: rotate(-45deg);
}

.depth-logo h3 {
    font-size: 1.3rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}

.form-header p {
    text-align: center;
    color: #666;
    font-size: 0.85rem;
    margin-bottom: 20px;
}

.depth-input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-wrapper {
    position: relative;
}

.input-wrapper i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #667eea;
    z-index: 2;
}

.input-wrapper input {
    width: 100%;
    padding: 15px 15px 15px 45px;
    background: #f8f9fa;
    border: 2px solid transparent;
    border-radius: 10px;
    color: #333;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

.input-wrapper input:focus {
    outline: none;
    background: white;
    border-color: #667eea;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.1);
}

.input-wrapper label {
    position: absolute;
    left: 45px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    pointer-events: none;
    z-index: 1;
}

.input-wrapper input:focus + label,
.input-wrapper input:not(:placeholder-shown) + label {
    top: -10px;
    left: 15px;
    font-size: 0.75rem;
    color: #667eea;
    background: white;
    padding: 0 5px;
    z-index: 3;
}

.input-depth {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e9ecef;
    border-radius: 10px;
    transform: translateZ(-10px);
    transition: all 0.3s ease;
    z-index: 0;
}

.input-wrapper input:focus ~ .input-depth {
    bottom: -5px;
    height: calc(100% + 5px);
    background: #dee2e6;
}

.depth-checkbox-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.depth-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #666;
}

.depth-checkbox input {
    display: none;
}

.checkbox-3d {
    position: relative;
    width: 20px;
    height: 20px;
    transform-style: preserve-3d;
    perspective: 1000px;
    cursor: pointer;
}

.checkbox-front,
.checkbox-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s;
}

.checkbox-front {
    background: #667eea;
    color: white;
    font-size: 0.7rem;
    transform: rotateY(0deg);
}

.checkbox-back {
    background: #e9ecef;
    border: 2px solid #dee2e6;
    transform: rotateY(180deg);
}

.depth-checkbox input:checked + .checkbox-3d .checkbox-front {
    transform: rotateY(180deg);
}

.depth-checkbox input:checked + .checkbox-3d .checkbox-back {
    transform: rotateY(0deg);
}

.depth-link {
    color: #667eea;
    text-decoration: none;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 5px;
}

.form-btn.depth-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    margin: 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    transform-style: preserve-3d;
}

.btn-3d-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    transform: translateZ(-5px);
}

.form-btn.depth-btn:hover .btn-3d-effect {
    opacity: 1;
}

.depth-divider {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #999;
    font-size: 0.8rem;
}

.divider-line {
    flex: 1;
    height: 1px;
    background: #e9ecef;
}

.depth-divider span {
    padding: 0 10px;
}

.depth-alt-btn {
    width: 100%;
    padding: 10px;
    background: transparent;
    color: #667eea;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.depth-alt-btn:hover {
    border-color: #667eea;
    background: rgba(102, 126, 234, 0.05);
}

.depth-3d-bg::-webkit-scrollbar {
    width: 4px;
}

.depth-3d-bg::-webkit-scrollbar-track {
    background: rgba(102, 126, 234, 0.1);
    border-radius: 10px;
}

.depth-3d-bg::-webkit-scrollbar-thumb {
    background: rgba(102, 126, 234, 0.3);
    border-radius: 10px;
}

.depth-3d-bg::-webkit-scrollbar-thumb:hover {
    background: rgba(102, 126, 234, 0.5);
}`,
    js: `// 3D Depth Login - Complete JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const depthForm = document.querySelector('.depth-3d-form');
    
    if (depthForm) {
        // Initialize 3D effects
        init3DEffects();
        
        // Form submission
        depthForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            const keepSignedIn = this.querySelector('input[type="checkbox"]').checked;
            
            // Validation
            if (!email || !password) {
                showDepthError('Please fill in all fields');
                depthShakeEffect();
                return;
            }
            
            if (!isValidEmail(email)) {
                showDepthError('Please enter a valid email address');
                return;
            }
            
            // Start 3D login animation
            const submitBtn = this.querySelector('.depth-btn');
            const btnText = submitBtn.querySelector('span');
            const arrowIcon = submitBtn.querySelector('.fa-arrow-right');
            const originalText = btnText.textContent;
            
            // Phase 1: Pressing animation
            submitBtn.style.transform = 'translateZ(-15px)';
            btnText.textContent = 'Authenticating...';
            arrowIcon.style.transform = 'translateX(10px)';
            
            // Update shadow
            const shadow = document.querySelector('.depth-shadow');
            shadow.style.transform = 'translateZ(-30px)';
            shadow.style.width = '95%';
            
            setTimeout(() => {
                // Phase 2: Verification
                submitBtn.style.transform = 'translateZ(5px)';
                btnText.textContent = 'Verifying credentials...';
                arrowIcon.style.transform = 'rotate(90deg) translateX(10px)';
                
                // Animate card
                const card = document.querySelector('.depth-card');
                card.style.transform = 'rotateX(5deg)';
                
                setTimeout(() => {
                    // Phase 3: Success
                    submitBtn.style.transform = 'translateZ(30px)';
                    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                    btnText.textContent = 'Access Granted!';
                    arrowIcon.style.transform = 'rotate(180deg)';
                    arrowIcon.style.color = 'white';
                    
                    // Success card animation
                    card.style.transform = 'rotateX(0deg) translateY(-10px)';
                    shadow.style.transform = 'translateZ(-10px)';
                    shadow.style.width = '85%';
                    shadow.style.opacity = '0.5';
                    
                    // Show success
                    showDepthSuccess('Welcome to your workspace');
                    
                    // Reset form
                    setTimeout(() => {
                        depthForm.reset();
                        submitBtn.style.transform = '';
                        submitBtn.style.background = '';
                        btnText.textContent = originalText;
                        arrowIcon.style.transform = '';
                        arrowIcon.style.color = '';
                        card.style.transform = '';
                        shadow.style.transform = '';
                        shadow.style.width = '';
                        shadow.style.opacity = '';
                        resetFloatingLabels();
                        reset3DCheckbox();
                    }, 2000);
                    
                }, 1000);
                
            }, 800);
        });
        
        // Password toggle with 3D effect
        const passwordToggle = depthForm.querySelector('.password-toggle');
        if (passwordToggle) {
            passwordToggle.addEventListener('click', function() {
                const passwordInput = this.parentElement.querySelector('input');
                const eyeIcon = this.querySelector('i');
                const inputDepth = this.parentElement.querySelector('.input-depth');
                
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                    
                    // 3D effect
                    this.style.transform = 'translateY(-50%) scale(1.2)';
                    inputDepth.style.bottom = '-8px';
                    inputDepth.style.height = 'calc(100% + 8px)';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-50%)';
                    }, 200);
                } else {
                    passwordInput.type = 'password';
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                    
                    this.style.transform = 'translateY(-50%) scale(0.8)';
                    inputDepth.style.bottom = '-2px';
                    inputDepth.style.height = '100%';
                    
                    setTimeout(() => {
                        this.style.transform = 'translateY(-50%)';
                    }, 200);
                }
            });
        }
        
        // 3D Checkbox interaction
        const depthCheckbox = depthForm.querySelector('.depth-checkbox input');
        if (depthCheckbox) {
            depthCheckbox.addEventListener('change', function() {
                const checkbox3d = this.nextElementSibling;
                if (this.checked) {
                    // Flip animation
                    checkbox3d.style.transform = 'rotateY(180deg) scale(1.2)';
                    setTimeout(() => {
                        checkbox3d.style.transform = '';
                    }, 600);
                    
                    // Add glow effect
                    checkbox3d.style.boxShadow = '0 0 15px rgba(102, 126, 234, 0.5)';
                    setTimeout(() => {
                        checkbox3d.style.boxShadow = '';
                    }, 1000);
                }
            });
        }
        
        // Reset password link
        const resetLink = depthForm.querySelector('.depth-link');
        if (resetLink) {
            resetLink.addEventListener('click', function(e) {
                e.preventDefault();
                showDepthNotification('Initiating secure password reset...');
                
                // Create 3D modal effect
                const emailInput = depthForm.querySelector('input[type="email"]');
                if (emailInput && emailInput.value) {
                    setTimeout(() => {
                        showDepthSuccess('Reset instructions sent to ' + emailInput.value);
                    }, 1500);
                } else {
                    setTimeout(() => {
                        showDepthError('Please enter your email first');
                    }, 1000);
                }
            });
        }
        
        // Create Account button
        const createAccountBtn = depthForm.querySelector('.depth-alt-btn');
        if (createAccountBtn) {
            createAccountBtn.addEventListener('click', function() {
                // 3D button press
                this.style.transform = 'translateZ(-10px)';
                this.style.borderColor = '#667eea';
                this.style.background = 'rgba(102, 126, 234, 0.1)';
                
                showDepthNotification('Opening registration portal...');
                
                setTimeout(() => {
                    this.style.transform = '';
                    this.style.borderColor = '';
                    this.style.background = '';
                    
                    // Simulate redirect
                    setTimeout(() => {
                        showDepthSuccess('Registration portal ready');
                    }, 500);
                }, 300);
            });
        }
        
        // Input focus 3D effects
        const depthInputs = depthForm.querySelectorAll('.input-wrapper input');
        depthInputs.forEach(input => {
            input.addEventListener('focus', function() {
                const wrapper = this.closest('.input-wrapper');
                const depth = wrapper.querySelector('.input-depth');
                const label = wrapper.querySelector('label');
                
                // Elevate input
                wrapper.style.transform = 'translateZ(10px)';
                depth.style.bottom = '-5px';
                depth.style.height = 'calc(100% + 5px)';
                depth.style.background = '#dee2e6';
                
                // Float label
                if (label) {
                    label.style.top = '-10px';
                    label.style.fontSize = '0.75rem';
                    label.style.color = '#667eea';
                    label.style.background = 'white';
                    label.style.padding = '0 5px';
                    label.style.zIndex = '3';
                }
            });
            
            input.addEventListener('blur', function() {
                const wrapper = this.closest('.input-wrapper');
                const depth = wrapper.querySelector('.input-depth');
                const label = wrapper.querySelector('label');
                
                // Lower input
                wrapper.style.transform = '';
                depth.style.bottom = '-2px';
                depth.style.height = '100%';
                depth.style.background = '#e9ecef';
                
                // Reset label if empty
                if (label && !this.value) {
                    label.style.top = '50%';
                    label.style.fontSize = '0.9rem';
                    label.style.color = '#999';
                    label.style.background = 'transparent';
                    label.style.padding = '0';
                    label.style.zIndex = '1';
                }
            });
            
            // Real-time validation
            input.addEventListener('input', function() {
                if (this.type === 'email' && this.value) {
                    if (isValidEmail(this.value)) {
                        this.style.borderColor = '#4CAF50';
                        const icon = this.previousElementSibling;
                        if (icon && icon.tagName === 'I') {
                            icon.style.color = '#4CAF50';
                        }
                    } else {
                        this.style.borderColor = '#f44336';
                        const icon = this.previousElementSibling;
                        if (icon && icon.tagName === 'I') {
                            icon.style.color = '#f44336';
                        }
                    }
                }
            });
        });
    }
    
    // Helper functions
    function init3DEffects() {
        // Initialize floating labels for existing values
        const inputs = document.querySelectorAll('.input-wrapper input');
        inputs.forEach(input => {
            if (input.value) {
                const label = input.nextElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.style.top = '-10px';
                    label.style.fontSize = '0.75rem';
                    label.style.color = '#667eea';
                    label.style.background = 'white';
                    label.style.padding = '0 5px';
                    label.style.zIndex = '3';
                }
            }
        });
        
        // Add hover effect to card
        const card = document.querySelector('.depth-card');
        if (card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'rotateY(2deg) rotateX(2deg)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        }
    }
    
    function resetFloatingLabels() {
        const labels = document.querySelectorAll('.input-wrapper label');
        labels.forEach(label => {
            label.style.top = '50%';
            label.style.fontSize = '0.9rem';
            label.style.color = '#999';
            label.style.background = 'transparent';
            label.style.padding = '0';
            label.style.zIndex = '1';
        });
    }
    
    function reset3DCheckbox() {
        const checkbox = document.querySelector('.depth-checkbox input');
        if (checkbox) {
            checkbox.checked = true;
            const checkbox3d = checkbox.nextElementSibling;
            checkbox3d.style.transform = 'rotateY(0deg)';
        }
    }
    
    function depthShakeEffect() {
        const card = document.querySelector('.depth-card');
        card.style.animation = 'depthShake 0.5s';
        
        // Shake empty inputs
        const inputs = document.querySelectorAll('.input-wrapper input');
        inputs.forEach(input => {
            if (!input.value) {
                input.style.borderColor = '#f44336';
                input.style.animation = 'inputShake 0.5s';
                
                // Create falling particles
                createDepthParticles(input);
                
                setTimeout(() => {
                    input.style.borderColor = '';
                    input.style.animation = '';
                }, 500);
            }
        });
        
        setTimeout(() => {
            card.style.animation = '';
        }, 500);
    }
    
    function createDepthParticles(element) {
        const rect = element.getBoundingClientRect();
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'depth-particle';
            particle.style.cssText = \`
                position: fixed;
                width: 4px;
                height: 4px;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 50%;
                top: \${rect.top}px;
                left: \${rect.left + Math.random() * rect.width}px;
                pointer-events: none;
                z-index: 1000;
                animation: depthFall 1s forwards;
            \`;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }
    
    function showDepthError(message) {
        showDepthNotification(message, 'error');
    }
    
    function showDepthSuccess(message) {
        showDepthNotification(message, 'success');
    }
    
    function showDepthNotification(message, type = 'info') {
        // Create 3D notification
        const notification = document.createElement('div');
        notification.className = 'depth-notification';
        notification.innerHTML = \`
            <div class="notification-shadow"></div>
            <div class="notification-content">
                <i class="fas \${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>\${message}</span>
            </div>
        \`;
        
        // Style notification
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            padding: 15px 20px;
            color: \${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#667eea'};
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 10px;
            z-index: 1000;
            animation: depthSlideIn 0.3s ease-out;
            box-shadow: 
                0 10px 30px rgba(0, 0, 0, 0.1),
                0 5px 15px rgba(0, 0, 0, 0.05);
            transform-style: preserve-3d;
        \`;
        
        // Add 3D shadow
        const shadow = notification.querySelector('.notification-shadow');
        shadow.style.cssText = \`
            position: absolute;
            bottom: -5px;
            left: 5%;
            width: 90%;
            height: 10px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            filter: blur(5px);
            transform: translateZ(-10px);
            z-index: -1;
        \`;
        
        document.body.appendChild(notification);
        
        // Auto remove with 3D animation
        setTimeout(() => {
            notification.style.animation = 'depthSlideOut 0.3s ease-out forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        // Add animations if not exists
        if (!document.querySelector('#depth-styles')) {
            const style = document.createElement('style');
            style.id = 'depth-styles';
            style.textContent = \`
                @keyframes depthSlideIn {
                    from { 
                        transform: translateX(100%) rotateY(90deg);
                        opacity: 0;
                    }
                    to { 
                        transform: translateX(0) rotateY(0);
                        opacity: 1;
                    }
                }
                @keyframes depthSlideOut {
                    from { 
                        transform: translateX(0) rotateY(0);
                        opacity: 1;
                    }
                    to { 
                        transform: translateX(100%) rotateY(90deg);
                        opacity: 0;
                    }
                }
                @keyframes depthShake {
                    0%, 100% { transform: translateZ(20px) rotateX(0) rotateY(0); }
                    25% { transform: translateZ(20px) rotateX(5deg) rotateY(5deg); }
                    75% { transform: translateZ(20px) rotateX(-5deg) rotateY(-5deg); }
                }
                @keyframes inputShake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                @keyframes depthFall {
                    0% { 
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                    100% { 
                        transform: translateY(100px) scale(0);
                        opacity: 0;
                    }
                }
            \`;
            document.head.appendChild(style);
        }
    }
    
    function isValidEmail(email) {
        const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return re.test(email);
    }
});`
}, 
// ====================================================================
// TEMPLATE 17: Minimal Signup
// ====================================================================
form17: {
    name: "Minimal Signup",
    category: "signup modern",
    html: `<div class="form-container minimal-signup-bg">
    <div class="form-header">
        <div class="logo-minimal">
            <i class="fas fa-user-plus"></i>
        </div>
        <h3>Create Account</h3>
        <p>Join us in seconds</p>
    </div>
    <form class="minimal-signup-form">
        <div class="input-group">
            <input type="text" placeholder="Username" required>
        </div>
        <div class="input-group">
            <input type="email" placeholder="Email" required>
        </div>
        <div class="input-group">
            <input type="password" placeholder="Password" required>
        </div>
        <div class="privacy-notice">
            By signing up, you agree to our <a href="#">Terms</a> & <a href="#">Privacy</a>
        </div>
        <button type="submit" class="form-btn minimal-signup-btn">
            Create Account
        </button>
        <div class="auth-links">
            <span>Already have an account? <a href="#">Sign in</a></span>
        </div>
    </form>
</div>`,
    css: `.minimal-signup-bg {
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.logo-minimal {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.5rem;
}

.form-header h3 {
    font-size: 1.4rem;
    text-align: center;
    margin-bottom: 5px;
    color: #333;
}

.form-header p {
    text-align: center;
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 25px;
}

.minimal-signup-form .input-group {
    margin-bottom: 15px;
}

.minimal-signup-form .input-group input {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.3s ease;
    background: #fafafa;
}

.minimal-signup-form .input-group input:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.privacy-notice {
    text-align: center;
    font-size: 0.8rem;
    color: #666;
    margin: 20px 0;
    line-height: 1.4;
}

.privacy-notice a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
}

.form-btn.minimal-signup-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.form-btn.minimal-signup-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.auth-links {
    text-align: center;
    margin-top: 20px;
    font-size: 0.9rem;
    color: #666;
}

.auth-links a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
}`,
    js: `// Minimal Signup Form functionality
document.querySelector('.minimal-signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = this.querySelector('input[placeholder="Username"]').value;
    const email = this.querySelector('input[placeholder="Email"]').value;
    const password = this.querySelector('input[placeholder="Password"]').value;
    
    if (username && email && password) {
        const btn = this.querySelector('.minimal-signup-btn');
        const originalText = btn.textContent;
        
        btn.textContent = 'Creating Account...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Account created successfully!');
            this.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    } else {
        alert('Please fill all fields');
    }
});`
},

// ====================================================================
// TEMPLATE 18: Social Signup
// ====================================================================
form18: {
    name: "Social Signup",
    category: "signup modern",
    html: `<div class="form-container social-signup-bg">
    <div class="form-header">
        <h3>Get Started</h3>
        <p>Choose your signup method</p>
    </div>
    <div class="social-buttons">
        <button type="button" class="social-signup-btn google">
            <i class="fab fa-google"></i>
            Continue with Google
        </button>
        <button type="button" class="social-signup-btn facebook">
            <i class="fab fa-facebook"></i>
            Continue with Facebook
        </button>
        <button type="button" class="social-signup-btn twitter">
            <i class="fab fa-twitter"></i>
            Continue with Twitter
        </button>
        <button type="button" class="social-signup-btn github">
            <i class="fab fa-github"></i>
            Continue with GitHub
        </button>
    </div>
    <div class="divider">
        <span>or sign up with email</span>
    </div>
    <form class="social-signup-form">
        <div class="input-group">
            <input type="email" placeholder="Email address" required>
        </div>
        <div class="input-group">
            <input type="password" placeholder="Create password" required>
        </div>
        <button type="submit" class="form-btn social-email-btn">
            Continue with Email
        </button>
    </form>
    <div class="terms-text">
        By continuing, you agree to our <a href="#">Terms of Service</a>
    </div>
</div>`,
    css: `.social-signup-bg {
    background: linear-gradient(135deg, #f5f7fa, #e4e8f0);
    border-radius: 20px;
    padding: 25px;
}

.social-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
}

.social-signup-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    background: white;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.social-signup-btn i {
    font-size: 1.2rem;
}

.social-signup-btn.google:hover {
    border-color: #DB4437;
    background: rgba(219, 68, 55, 0.05);
}

.social-signup-btn.facebook:hover {
    border-color: #4267B2;
    background: rgba(66, 103, 178, 0.05);
}

.social-signup-btn.twitter:hover {
    border-color: #1DA1F2;
    background: rgba(29, 161, 242, 0.05);
}

.social-signup-btn.github:hover {
    border-color: #333;
    background: rgba(51, 51, 51, 0.05);
}

.divider {
    display: flex;
    align-items: center;
    margin: 25px 0;
    color: #666;
    font-size: 13px;
    font-weight: 500;
}

.divider::before,
.divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e0e0e0;
}

.divider span {
    padding: 0 15px;
    background: #f5f7fa;
}

.social-signup-form .input-group {
    margin-bottom: 15px;
}

.social-signup-form .input-group input {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.3s ease;
}

.social-signup-form .input-group input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-btn.social-email-btn {
    width: 100%;
    padding: 14px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.form-btn.social-email-btn:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.terms-text {
    text-align: center;
    margin-top: 20px;
    font-size: 0.8rem;
    color: #666;
    line-height: 1.4;
}

.terms-text a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
}`,
    js: `// Social Signup Form functionality
document.querySelectorAll('.social-signup-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const platform = this.classList.contains('google') ? 'Google' :
                       this.classList.contains('facebook') ? 'Facebook' :
                       this.classList.contains('twitter') ? 'Twitter' : 'GitHub';
        
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        alert('Signing up with ' + platform + '...');
    });
});

document.querySelector('.social-signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    if (email && password) {
        const btn = this.querySelector('.social-email-btn');
        const originalText = btn.textContent;
        
        btn.textContent = 'Creating Account...';
        btn.disabled = true;
        
        setTimeout(() => {
            alert('Account created! Check your email for verification.');
            this.reset();
            btn.textContent = originalText;
            btn.disabled = false;
        }, 1500);
    }
});`
},

// ====================================================================
// TEMPLATE 19: Step Progress Signup
// ====================================================================
form19: {
    name: "Step Progress Signup",
    category: "signup modern",
    html: `<div class="form-container step-signup-bg">
    <div class="step-progress">
        <div class="step active" data-step="1">
            <div class="step-number">1</div>
            <div class="step-label">Account</div>
        </div>
        <div class="step" data-step="2">
            <div class="step-number">2</div>
            <div class="step-label">Profile</div>
        </div>
        <div class="step" data-step="3">
            <div class="step-number">3</div>
            <div class="step-label">Complete</div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: 33%"></div>
        </div>
    </div>
    <form class="step-signup-form">
        <div class="form-step active" data-step="1">
            <div class="form-header">
                <h3>Create Account</h3>
                <p>Step 1: Basic information</p>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Full name" required>
            </div>
            <div class="input-group">
                <input type="email" placeholder="Email address" required>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Password" required>
            </div>
            <button type="button" class="form-btn next-step-btn">
                Next Step
            </button>
        </div>
        
        <div class="form-step" data-step="2">
            <div class="form-header">
                <h3>Profile Details</h3>
                <p>Step 2: Tell us about yourself</p>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Company (Optional)">
            </div>
            <div class="input-group">
                <select class="form-select">
                    <option value="">Job Role</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="manager">Manager</option>
                    <option value="student">Student</option>
                </select>
            </div>
            <div class="button-group">
                <button type="button" class="form-btn prev-step-btn">
                    Back
                </button>
                <button type="submit" class="form-btn complete-btn">
                    Complete
                </button>
            </div>
        </div>
    </form>
</div>`,
    css: `.step-signup-bg {
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.step-progress {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 30px;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}

.step-number {
    width: 36px;
    height: 36px;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: #666;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.step.active .step-number {
    background: #667eea;
    border-color: #667eea;
    color: white;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.step-label {
    font-size: 11px;
    color: #666;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.progress-bar {
    position: absolute;
    top: 18px;
    left: 10%;
    right: 10%;
    height: 2px;
    background: #e0e0e0;
    z-index: 1;
}

.progress-fill {
    height: 100%;
    background: #667eea;
    transition: width 0.3s ease;
    border-radius: 2px;
}

.form-step {
    display: none;
}

.form-step.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.step-signup-form .input-group {
    margin-bottom: 15px;
}

.step-signup-form .input-group input,
.step-signup-form .input-group select {
    width: 100%;
    padding: 14px;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    font-size: 14px;
    transition: all 0.3s ease;
    background: white;
}

.step-signup-form .input-group input:focus,
.step-signup-form .input-group select:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 16px;
}

.form-btn.next-step-btn,
.form-btn.prev-step-btn,
.form-btn.complete-btn {
    padding: 14px 30px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.form-btn.next-step-btn {
    background: #667eea;
    color: white;
    width: 100%;
    margin-top: 10px;
}

.form-btn.next-step-btn:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
}

.button-group {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.form-btn.prev-step-btn {
    flex: 1;
    background: #f0f0f0;
    color: #666;
}

.form-btn.prev-step-btn:hover {
    background: #e0e0e0;
}

.form-btn.complete-btn {
    flex: 2;
    background: #10b981;
    color: white;
}

.form-btn.complete-btn:hover {
    background: #0da271;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
}`,
    js: `// Step Progress Signup functionality
let currentStep = 1;
const totalSteps = 3;

function updateProgress() {
    // Update steps
    document.querySelectorAll('.step').forEach(step => {
        const stepNum = parseInt(step.getAttribute('data-step'));
        if (stepNum <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
    
    // Update progress bar
    const progress = (currentStep / totalSteps) * 100;
    document.querySelector('.progress-fill').style.width = progress + '%';
    
    // Show/hide form steps
    document.querySelectorAll('.form-step').forEach(step => {
        const stepNum = parseInt(step.getAttribute('data-step'));
        if (stepNum === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Next step button
document.querySelector('.next-step-btn')?.addEventListener('click', function() {
    const inputs = document.querySelector('.form-step[data-step="1"]').querySelectorAll('input[required]');
    let valid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.borderColor = '#f44336';
            setTimeout(() => {
                input.style.borderColor = '';
            }, 2000);
        }
    });
    
    if (valid) {
        currentStep = 2;
        updateProgress();
    }
});

// Previous step button
document.querySelector('.prev-step-btn')?.addEventListener('click', function() {
    currentStep = 1;
    updateProgress();
});

// Complete button
document.querySelector('.complete-btn')?.addEventListener('click', function(e) {
    e.preventDefault();
    
    const btn = this;
    const originalText = btn.textContent;
    
    btn.textContent = 'Finishing...';
    btn.disabled = true;
    
    setTimeout(() => {
        currentStep = 3;
        updateProgress();
        
        // Show success message
        alert('Account created successfully! Welcome aboard!');
        
        // Reset form
        document.querySelector('.step-signup-form').reset();
        currentStep = 1;
        updateProgress();
        
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
});`
},

// ====================================================================
// TEMPLATE 20: Dark Premium Signup
// ====================================================================
form20: {
    name: "Premium Signup",
    category: "signup",
    html: `<div class="form-container premium-signup-bg">
    <div class="premium-badge">
        <i class="fas fa-crown"></i>
        <span>PREMIUM</span>
    </div>
    <div class="form-header">
        <h3>Unlock Premium</h3>
        <p>Start your 14-day free trial</p>
    </div>
    <div class="plan-features">
        <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>All premium features</span>
        </div>
        <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>Priority support</span>
        </div>
        <div class="feature">
            <i class="fas fa-check-circle"></i>
            <span>No credit card required</span>
        </div>
    </div>
    <form class="premium-signup-form">
        <div class="input-group">
            <input type="email" placeholder="Work email" required>
        </div>
        <div class="input-group">
            <input type="password" placeholder="Create password" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Company name">
        </div>
        <button type="submit" class="form-btn premium-btn">
            <i class="fas fa-rocket"></i>
            Start Free Trial
        </button>
        <div class="trial-note">
            Free for 14 days • No credit card required
        </div>
    </form>
</div>`,
    css: `.premium-signup-bg {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: white;
    border-radius: 20px;
    padding: 25px;
    position: relative;
    overflow: hidden;
}

.premium-signup-bg::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
    opacity: 0.5;
}

.premium-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #ffd700, #ffaa00);
    color: #1a1a2e;
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
    z-index: 2;
}

.plan-features {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    margin: 20px 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
}

.feature:last-child {
    margin-bottom: 0;
}

.feature i {
    color: #ffd700;
    font-size: 1rem;
}

.premium-signup-form .input-group {
    margin-bottom: 15px;
}

.premium-signup-form .input-group input {
    width: 100%;
    padding: 14px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
}

.premium-signup-form .input-group input:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
}

.premium-signup-form .input-group input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.form-btn.premium-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #ffd700, #ffaa00);
    color: #1a1a2e;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
}

.form-btn.premium-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
}

.form-btn.premium-btn:hover::before {
    left: 100%;
}

.form-btn.premium-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 24px rgba(255, 215, 0, 0.4);
}

.trial-note {
    text-align: center;
    margin-top: 15px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.4;
}`,
    js: `// Premium Signup Form functionality
document.querySelector('.premium-signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[placeholder="Work email"]').value;
    const password = this.querySelector('input[placeholder="Create password"]').value;
    const company = this.querySelector('input[placeholder="Company name"]').value;
    
    if (!email || !password) {
        alert('Please fill required fields');
        return;
    }
    
    // Validate work email
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid work email');
        return;
    }
    
    const btn = this.querySelector('.premium-btn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting Trial...';
    btn.disabled = true;
    
    // Simulate premium signup process
    setTimeout(() => {
        // Success animation
        btn.innerHTML = '<i class="fas fa-check"></i> Trial Started!';
        btn.style.background = 'linear-gradient(135deg, #10b981, #0da271)';
        
        // Show premium welcome
        setTimeout(() => {
            alert(\`🎉 Premium trial activated!\\n\\nWelcome \${company || email.split('@')[0]}!\\nYour 14-day premium trial has started.\\n\\nCheck your email for next steps.\`);
            
            // Reset form
            this.reset();
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.disabled = false;
        }, 500);
        
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 21: Floating Label Signup
// ====================================================================
form21: {
    name: "Floating Label Signup",
    category: "signup modern",
    html: `<div class="form-container floating-signup-bg">
    <div class="form-header">
        <h3>Join Our Community</h3>
        <p>Become a member today</p>
    </div>
    <form class="floating-signup-form">
        <div class="floating-input">
            <input type="text" id="floating-name" placeholder=" " required>
            <label for="floating-name">
                <i class="fas fa-user"></i>
                Full Name
            </label>
            <div class="floating-line"></div>
        </div>
        <div class="floating-input">
            <input type="email" id="floating-email" placeholder=" " required>
            <label for="floating-email">
                <i class="fas fa-envelope"></i>
                Email Address
            </label>
            <div class="floating-line"></div>
        </div>
        <div class="floating-input">
            <input type="password" id="floating-password" placeholder=" " required>
            <label for="floating-password">
                <i class="fas fa-lock"></i>
                Password
            </label>
            <div class="floating-line"></div>
            <button type="button" class="password-toggle">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        <div class="floating-input">
            <input type="password" id="floating-confirm" placeholder=" " required>
            <label for="floating-confirm">
                <i class="fas fa-lock"></i>
                Confirm Password
            </label>
            <div class="floating-line"></div>
        </div>
        <div class="password-rules">
            <p>Password must contain:</p>
            <ul>
                <li class="rule"><i class="fas fa-check"></i> 8+ characters</li>
                <li class="rule"><i class="fas fa-check"></i> 1 uppercase letter</li>
                <li class="rule"><i class="fas fa-check"></i> 1 number</li>
            </ul>
        </div>
        <button type="submit" class="form-btn floating-btn">
            <i class="fas fa-user-plus"></i>
            Create Account
        </button>
    </form>
</div>`,
    css: `.floating-signup-bg {
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    border-radius: 20px;
    padding: 25px;
    color: white;
}

.floating-input {
    position: relative;
    margin-bottom: 20px;
}

.floating-input input {
    width: 100%;
    padding: 16px 15px 8px 45px;
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid transparent;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    transition: all 0.3s ease;
}

.floating-input input:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: white;
}

.floating-input input:focus + label,
.floating-input input:not(:placeholder-shown) + label {
    top: 8px;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.9);
}

.floating-input label {
    position: absolute;
    top: 50%;
    left: 45px;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    transition: all 0.3s ease;
    pointer-events: none;
    display: flex;
    align-items: center;
    gap: 8px;
}

.floating-input i {
    font-size: 0.9rem;
}

.floating-line {
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
    height: 2px;
    background: rgba(255, 255, 255, 0.3);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.floating-input input:focus ~ .floating-line {
    transform: scaleX(1);
}

.floating-input .password-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    font-size: 0.9rem;
}

.password-rules {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px 15px;
    margin: 15px 0 20px;
}

.password-rules p {
    font-size: 0.8rem;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
}

.password-rules ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.password-rules li {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 4px;
}

.password-rules li:last-child {
    margin-bottom: 0;
}

.password-rules li i {
    font-size: 0.7rem;
    color: #00ff88;
}

.form-btn.floating-btn {
    width: 100%;
    padding: 16px;
    background: white;
    color: #0984e3;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
}

.form-btn.floating-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Floating Label Signup Form functionality
document.querySelector('.floating-signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('floating-name').value;
    const email = document.getElementById('floating-email').value;
    const password = document.getElementById('floating-password').value;
    const confirmPassword = document.getElementById('floating-confirm').value;
    
    // Validate password match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        document.getElementById('floating-confirm').style.borderColor = '#ff6b6b';
        return;
    }
    
    // Validate password strength
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasMinLength = password.length >= 8;
    
    if (!hasUpperCase || !hasNumber || !hasMinLength) {
        alert('Password must contain at least 8 characters, one uppercase letter, and one number');
        return;
    }
    
    // Update password rules with checkmarks
    const rules = document.querySelectorAll('.rule i');
    rules[0].style.color = hasMinLength ? '#00ff88' : '#ff6b6b';
    rules[1].style.color = hasUpperCase ? '#00ff88' : '#ff6b6b';
    rules[2].style.color = hasNumber ? '#00ff88' : '#ff6b6b';
    
    if (hasUpperCase && hasNumber && hasMinLength) {
        const btn = this.querySelector('.floating-btn');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Account Created!';
            btn.style.background = '#00ff88';
            btn.style.color = '#0984e3';
            
            setTimeout(() => {
                this.reset();
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
                resetFloatingLabels();
                resetPasswordRules();
            }, 1000);
        }, 1500);
    }
});

// Password toggle
document.querySelector('.floating-input .password-toggle')?.addEventListener('click', function() {
    const input = this.parentElement.querySelector('input');
    const icon = this.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        this.style.color = 'white';
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        this.style.color = '';
    }
});

// Real-time password validation
document.getElementById('floating-password')?.addEventListener('input', function() {
    const password = this.value;
    const rules = document.querySelectorAll('.rule i');
    
    // Check each rule
    rules[0].style.color = password.length >= 8 ? '#00ff88' : '#ff6b6b';
    rules[1].style.color = /[A-Z]/.test(password) ? '#00ff88' : '#ff6b6b';
    rules[2].style.color = /\d/.test(password) ? '#00ff88' : '#ff6b6b';
});

// Helper functions
function resetFloatingLabels() {
    document.querySelectorAll('.floating-input label').forEach(label => {
        label.style.top = '50%';
        label.style.fontSize = '14px';
        label.style.color = 'rgba(255, 255, 255, 0.7)';
    });
}

function resetPasswordRules() {
    document.querySelectorAll('.rule i').forEach(icon => {
        icon.style.color = '#00ff88';
    });
}`,
},
// ====================================================================
// TEMPLATE 22: Professional Contact Form
// ====================================================================
form22: {
    name: "Professional Contact Form",
    category: "contact modern professional",
    html: `<div class="form-container professional-contact">
    <div class="form-header">
        <div class="header-icon">
            <i class="fas fa-handshake"></i>
        </div>
        <h3>Business Contact</h3>
        <p>Get in touch with our team</p>
    </div>
    <form class="contact-form-professional">
        <div class="input-group">
            <div class="input-icon">
                <i class="fas fa-building"></i>
            </div>
            <input type="text" placeholder="Company Name" required>
        </div>
        <div class="input-row">
            <div class="input-group">
                <div class="input-icon">
                    <i class="fas fa-user"></i>
                </div>
                <input type="text" placeholder="Your Name" required>
            </div>
            <div class="input-group">
                <div class="input-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <input type="text" placeholder="Position" required>
            </div>
        </div>
        <div class="input-group">
            <div class="input-icon">
                <i class="fas fa-envelope"></i>
            </div>
            <input type="email" placeholder="Business Email" required>
        </div>
        <div class="input-group">
            <div class="input-icon">
                <i class="fas fa-phone"></i>
            </div>
            <input type="tel" placeholder="Business Phone" required>
        </div>
        <div class="input-group">
            <div class="input-icon">
                <i class="fas fa-comment-alt"></i>
            </div>
            <select class="form-select">
                <option value="">Nature of Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="quote">Request Quote</option>
                <option value="support">Technical Support</option>
                <option value="general">General Inquiry</option>
            </select>
        </div>
        <div class="input-group">
            <textarea placeholder="Project details or requirements..." rows="3" required></textarea>
            <div class="char-count">0/500</div>
        </div>
        <div class="form-group">
            <label class="checkbox-label">
                <input type="checkbox" required>
                <span class="checkmark"></span>
                I agree to receive business communications
            </label>
        </div>
        <button type="submit" class="form-btn professional-btn">
            <i class="fas fa-paper-plane"></i> Send Business Inquiry
        </button>
    </form>
</div>`,
    css: `.professional-contact {
    width: 100%;
    max-width: 400px;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.header-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.2rem;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.input-group {
    position: relative;
    margin-bottom: 15px;
}

.input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    z-index: 2;
}

.input-row {
    display: flex;
    gap: 10px;
}

.input-row .input-group {
    flex: 1;
    margin-bottom: 0;
}

.professional-contact input,
.professional-contact select,
.professional-contact textarea {
    width: 100%;
    padding: 12px 12px 12px 35px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.professional-contact textarea {
    padding: 12px;
    min-height: 80px;
    resize: vertical;
}

.professional-contact input:focus,
.professional-contact select:focus,
.professional-contact textarea:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.form-select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 16px;
}

.char-count {
    text-align: right;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 5px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    user-select: none;
}

.checkbox-label input {
    display: none;
}

.checkbox-label .checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-label input:checked + .checkmark {
    background: white;
    border-color: white;
}

.checkbox-label input:checked + .checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #1e3c72;
    font-size: 10px;
}

.form-btn.professional-btn {
    width: 100%;
    padding: 12px;
    background: white;
    color: #1e3c72;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.form-btn.professional-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Professional Contact Form functionality
document.querySelector('.contact-form-professional')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const company = this.querySelector('input[placeholder="Company Name"]').value;
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const position = this.querySelector('input[placeholder="Position"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const inquiry = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    const agreed = this.querySelector('input[type="checkbox"]').checked;
    
    console.log('Business inquiry:', { company, name, position, email, phone, inquiry, message, agreed });
    
    if (!agreed) {
        alert('Please agree to receive business communications');
        return;
    }
    
    // Show success
    const btn = this.querySelector('.professional-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Inquiry Sent!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 23: Minimal Contact Form
// ====================================================================
form23: {
    name: "Minimal Contact Form",
    category: "contact modern minimal",
    html: `<div class="form-container minimal-contact">
    <div class="form-header">
        <h3>Say Hello</h3>
        <p>Simple and clean contact form</p>
    </div>
    <form class="contact-form-minimal">
        <div class="input-group">
            <input type="text" placeholder="Name" required class="minimal-input">
            <div class="input-line"></div>
        </div>
        <div class="input-group">
            <input type="email" placeholder="Email" required class="minimal-input">
            <div class="input-line"></div>
        </div>
        <div class="input-group">
            <textarea placeholder="Message" rows="3" required class="minimal-input"></textarea>
            <div class="input-line"></div>
        </div>
        <button type="submit" class="form-btn minimal-btn">
            Send Message
        </button>
    </form>
</div>`,
    css: `.minimal-contact {
    width: 100%;
    max-width: 350px;
    background: white;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333;
}

.form-header p {
    color: #666;
    font-size: 0.9rem;
}

.input-group {
    position: relative;
    margin-bottom: 25px;
}

.minimal-input {
    width: 100%;
    padding: 10px 0;
    border: none;
    border-bottom: 2px solid #e2e8f0;
    background: transparent;
    font-size: 0.9rem;
    color: #333;
    transition: all 0.3s ease;
}

.minimal-input:focus {
    outline: none;
    border-bottom-color: #667eea;
}

.minimal-input::placeholder {
    color: #999;
}

.input-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #667eea;
    transition: width 0.3s ease;
}

.minimal-input:focus ~ .input-line {
    width: 100%;
}

.form-btn.minimal-btn {
    width: 100%;
    padding: 12px;
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 10px;
}

.form-btn.minimal-btn:hover {
    background: #667eea;
    color: white;
}`,
    js: `// Minimal Contact Form functionality
document.querySelector('.contact-form-minimal')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[placeholder="Name"]').value;
    const email = this.querySelector('input[placeholder="Email"]').value;
    const message = this.querySelector('textarea').value;
    
    console.log('Minimal contact:', { name, email, message });
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Show success
    const btn = this.querySelector('.minimal-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Sent!';
    btn.style.borderColor = '#10b981';
    btn.style.color = '#10b981';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.borderColor = '';
        btn.style.color = '';
        this.reset();
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 24: Support Ticket Form
// ====================================================================
form24: {
    name: "Support Ticket Form",
    category: "contact support modern",
    html: `<div class="form-container support-contact">
    <div class="form-header">
        <div class="support-badge">
            <i class="fas fa-headset"></i>
            <span>Support Ticket</span>
        </div>
        <h3>Create Support Ticket</h3>
        <p>We'll respond within 24 hours</p>
    </div>
    <form class="contact-form-support">
        <div class="input-group">
            <input type="text" placeholder="Ticket Title" required>
        </div>
        <div class="input-group">
            <select class="form-select">
                <option value="">Priority Level</option>
                <option value="low">Low - General Question</option>
                <option value="medium">Medium - Feature Request</option>
                <option value="high">High - Bug Report</option>
                <option value="urgent">Urgent - System Down</option>
            </select>
        </div>
        <div class="input-group">
            <select class="form-select">
                <option value="">Category</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Problem</option>
                <option value="account">Account Access</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="input-group">
            <textarea placeholder="Describe your issue in detail..." rows="3" required></textarea>
            <div class="char-count">0/1000</div>
        </div>
        <div class="form-group">
            <label class="upload-label">
                <i class="fas fa-paperclip"></i>
                <span>Attach Screenshots (Optional)</span>
                <input type="file" accept="image/*" multiple class="file-input">
            </label>
        </div>
        <div class="priority-indicator">
            <div class="priority-dot low"></div>
            <span>Response Time: 24-48 hours</span>
        </div>
        <button type="submit" class="form-btn support-btn">
            <i class="fas fa-ticket-alt"></i> Submit Ticket
        </button>
    </form>
</div>`,
    css: `.support-contact {
    width: 100%;
    max-width: 400px;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.support-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(59, 130, 246, 0.2);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 15px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.form-header p {
    color: #94a3b8;
    font-size: 0.9rem;
}

.input-group {
    margin-bottom: 15px;
}

.support-contact input,
.support-contact select,
.support-contact textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
}

.support-contact textarea {
    min-height: 80px;
    resize: vertical;
}

.support-contact input:focus,
.support-contact select:focus,
.support-contact textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.char-count {
    text-align: right;
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 5px;
}

.upload-label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px dashed rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #94a3b8;
    transition: all 0.3s ease;
}

.upload-label:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.3);
}

.file-input {
    display: none;
}

.priority-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0;
    font-size: 0.8rem;
    color: #94a3b8;
}

.priority-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.priority-dot.low { background: #10b981; }
.priority-dot.medium { background: #f59e0b; }
.priority-dot.high { background: #ef4444; }
.priority-dot.urgent { 
    background: #dc2626; 
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.form-btn.support-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.support-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}`,
    js: `// Support Ticket Form functionality
document.querySelector('.contact-form-support')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = this.querySelector('input[placeholder="Ticket Title"]').value;
    const priority = this.querySelectorAll('select')[0].value;
    const category = this.querySelectorAll('select')[1].value;
    const message = this.querySelector('textarea').value;
    
    console.log('Support ticket:', { title, priority, category, message });
    
    // Validate
    if (!priority || !category) {
        alert('Please select priority and category');
        return;
    }
    
    // Update priority indicator based on selection
    const priorityDot = this.querySelector('.priority-dot');
    const timeText = this.querySelector('.priority-indicator span');
    
    if (priority === 'urgent') {
        priorityDot.className = 'priority-dot urgent';
        timeText.textContent = 'Response Time: 1-4 hours (Urgent)';
    } else if (priority === 'high') {
        priorityDot.className = 'priority-dot high';
        timeText.textContent = 'Response Time: 4-8 hours (High)';
    } else if (priority === 'medium') {
        priorityDot.className = 'priority-dot medium';
        timeText.textContent = 'Response Time: 8-24 hours (Medium)';
    } else {
        priorityDot.className = 'priority-dot low';
        timeText.textContent = 'Response Time: 24-48 hours (Low)';
    }
    
    // Show success
    const btn = this.querySelector('.support-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Ticket Submitted!';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
        priorityDot.className = 'priority-dot low';
        timeText.textContent = 'Response Time: 24-48 hours';
    }, 2000);
});`
},

// ====================================================================
// TEMPLATE 25: Quick Contact Form
// ====================================================================
form25: {
    name: "Quick Contact Form",
    category: "contact modern quick",
    html: `<div class="form-container quick-contact">
    <div class="form-header">
        <h3>Quick Contact</h3>
        <p>Send us a message in seconds</p>
    </div>
    <form class="contact-form-quick">
        <div class="input-group">
            <input type="text" placeholder="Your Name" required>
            <span class="quick-note">Required</span>
        </div>
        <div class="input-group">
            <input type="email" placeholder="Email Address" required>
            <span class="quick-note">Required</span>
        </div>
        <div class="input-group">
            <textarea placeholder="Your message..." rows="2" required></textarea>
            <span class="quick-note">Max 200 characters</span>
        </div>
        <div class="quick-options">
            <label class="quick-radio">
                <input type="radio" name="response-type" value="email" checked>
                <span class="radio-dot"></span>
                <span>Reply via Email</span>
            </label>
            <label class="quick-radio">
                <input type="radio" name="response-type" value="phone">
                <span class="radio-dot"></span>
                <span>Call me back</span>
            </label>
        </div>
        <button type="submit" class="form-btn quick-btn">
            <i class="fas fa-bolt"></i> Send Quick Message
        </button>
    </form>
</div>`,
    css: `.quick-contact {
    width: 100%;
    max-width: 350px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.form-header p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
}

.input-group {
    margin-bottom: 20px;
}

.quick-contact input,
.quick-contact textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
}

.quick-contact textarea {
    min-height: 60px;
    resize: vertical;
}

.quick-contact input:focus,
.quick-contact textarea:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.quick-contact input::placeholder,
.quick-contact textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.quick-note {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 5px;
    display: block;
}

.quick-options {
    display: flex;
    gap: 20px;
    margin: 20px 0;
}

.quick-radio {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
}

.quick-radio input {
    display: none;
}

.radio-dot {
    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;
}

.quick-radio input:checked + .radio-dot {
    background: white;
}

.quick-radio input:checked + .radio-dot::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: #f59e0b;
    border-radius: 50%;
}

.form-btn.quick-btn {
    width: 100%;
    padding: 12px;
    background: white;
    color: #f59e0b;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.quick-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Quick Contact Form functionality
document.querySelector('.contact-form-quick')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[placeholder="Your Name"]').value;
    const email = this.querySelector('input[placeholder="Email Address"]').value;
    const message = this.querySelector('textarea').value;
    const responseType = this.querySelector('input[name="response-type"]:checked').value;
    
    console.log('Quick contact:', { name, email, message, responseType });
    
    // Character limit validation
    if (message.length > 200) {
        alert('Message exceeds 200 characters limit');
        return;
    }
    
    // Show fast sending animation
    const btn = this.querySelector('.quick-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;
    
    // Simulate quick sending
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        btn.style.background = '#10b981';
        btn.style.color = 'white';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.color = '';
            btn.disabled = false;
            this.reset();
            this.querySelector('input[value="email"]').checked = true;
        }, 1000);
    }, 500);
});`
},

// ====================================================================
// TEMPLATE 26: Animated Contact Form
// ====================================================================
form26: {
    name: "Animated Contact Form",
    category: "contact modern animated",
    html: `<div class="form-container animated-contact">
    <div class="form-header">
        <div class="animated-icon">
            <i class="fas fa-comments"></i>
        </div>
        <h3>Let's Chat</h3>
        <p>Send us an animated message</p>
    </div>
    <form class="contact-form-animated">
        <div class="input-group animated-input">
            <input type="text" placeholder=" " required>
            <label>Your Name</label>
            <div class="animated-border"></div>
        </div>
        <div class="input-group animated-input">
            <input type="email" placeholder=" " required>
            <label>Email Address</label>
            <div class="animated-border"></div>
        </div>
        <div class="input-group animated-input">
            <textarea placeholder=" " rows="2" required></textarea>
            <label>Your Message</label>
            <div class="animated-border"></div>
            <div class="char-count-animated">0/300</div>
        </div>
        <div class="emoji-selector">
            <span class="emoji-label">How are you feeling?</span>
            <div class="emoji-options">
                <label class="emoji-option">
                    <input type="radio" name="mood" value="happy">
                    <span class="emoji">😊</span>
                </label>
                <label class="emoji-option">
                    <input type="radio" name="mood" value="neutral" checked>
                    <span class="emoji">😐</span>
                </label>
                <label class="emoji-option">
                    <input type="radio" name="mood" value="sad">
                    <span class="emoji">😔</span>
                </label>
                <label class="emoji-option">
                    <input type="radio" name="mood" value="excited">
                    <span class="emoji">🤩</span>
                </label>
            </div>
        </div>
        <button type="submit" class="form-btn animated-btn">
            <span class="btn-text">Send Message</span>
            <div class="btn-wave"></div>
            <i class="fas fa-paper-plane"></i>
        </button>
    </form>
</div>`,
    css: `.animated-contact {
    width: 100%;
    max-width: 400px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    border-radius: 16px;
    padding: 25px;
    position: relative;
    overflow: hidden;
}

.animated-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    text-align: center;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.form-header p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.animated-input {
    position: relative;
    margin-bottom: 25px;
}

.animated-input input,
.animated-input textarea {
    width: 100%;
    padding: 15px 0 5px 0;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.animated-input textarea {
    min-height: 60px;
    resize: vertical;
}

.animated-input label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    pointer-events: none;
}

.animated-input input:focus + label,
.animated-input input:not(:placeholder-shown) + label,
.animated-input textarea:focus + label,
.animated-input textarea:not(:placeholder-shown) + label {
    top: 0;
    font-size: 0.7rem;
    color: white;
}

.animated-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s ease;
}

.animated-input input:focus ~ .animated-border,
.animated-input textarea:focus ~ .animated-border {
    width: 100%;
}

.char-count-animated {
    text-align: right;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 5px;
}

.emoji-selector {
    margin: 25px 0;
}

.emoji-label {
    display: block;
    margin-bottom: 12px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
}

.emoji-options {
    display: flex;
    gap: 15px;
}

.emoji-option {
    cursor: pointer;
}

.emoji-option input {
    display: none;
}

.emoji {
    font-size: 2rem;
    opacity: 0.5;
    transition: all 0.3s ease;
    display: block;
}

.emoji-option input:checked + .emoji {
    opacity: 1;
    transform: scale(1.2);
}

.form-btn.animated-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.btn-wave {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent);
    transition: left 0.5s ease;
}

.form-btn.animated-btn:hover .btn-wave {
    left: 100%;
}

.form-btn.animated-btn:hover {
    background: rgba(255, 255, 255, 0.1);
}`,
    js: `// Animated Contact Form functionality
document.querySelector('.contact-form-animated')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    const mood = this.querySelector('input[name="mood"]:checked').value;
    
    console.log('Animated contact:', { name, email, message, mood });
    
    // Character count validation
    if (message.length > 300) {
        alert('Message exceeds 300 characters limit');
        return;
    }
    
    // Animated send button
    const btn = this.querySelector('.animated-btn');
    const btnText = btn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    const planeIcon = btn.querySelector('.fa-paper-plane');
    
    btnText.textContent = 'Sending...';
    planeIcon.style.transform = 'rotate(45deg)';
    
    // Wave animation
    const wave = btn.querySelector('.btn-wave');
    wave.style.left = '-100%';
    wave.style.transition = 'left 1.5s ease';
    wave.style.left = '100%';
    
    setTimeout(() => {
        btnText.textContent = 'Sent!';
        planeIcon.style.transform = 'rotate(0)';
        planeIcon.style.color = '#4CAF50';
        btn.style.borderColor = '#4CAF50';
        btn.style.color = '#4CAF50';
        
        // Reset
        setTimeout(() => {
            btnText.textContent = originalText;
            planeIcon.style.transform = '';
            planeIcon.style.color = '';
            btn.style.borderColor = '';
            btn.style.color = '';
            this.reset();
            this.querySelector('input[value="neutral"]').checked = true;
            wave.style.transition = '';
        }, 1500);
    }, 1500);
});`
},

// ====================================================================
// TEMPLATE 27: Multi-Step Contact Form
// ====================================================================
form27: {
    name: "Multi-Step Contact Form",
    category: "contact modern multistep",
    html: `<div class="form-container multistep-contact">
    <div class="form-header">
        <div class="step-indicator">
            <div class="step active">1</div>
            <div class="step-line"></div>
            <div class="step">2</div>
            <div class="step-line"></div>
            <div class="step">3</div>
        </div>
        <h3>Contact Wizard</h3>
        <p>Step 1: Basic Information</p>
    </div>
    <form class="contact-form-multistep">
        <!-- Step 1 -->
        <div class="form-step active" data-step="1">
            <div class="input-group">
                <input type="text" placeholder="Full Name" required>
            </div>
            <div class="input-group">
                <input type="email" placeholder="Email Address" required>
            </div>
            <div class="input-group">
                <input type="tel" placeholder="Phone Number" required>
            </div>
            <button type="button" class="form-btn next-btn">
                Next Step <i class="fas fa-arrow-right"></i>
            </button>
        </div>
        
        <!-- Step 2 -->
        <div class="form-step" data-step="2">
            <div class="input-group">
                <select class="form-select">
                    <option value="">Inquiry Type</option>
                    <option value="general">General Question</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Subject" required>
            </div>
            <div class="input-group">
                <textarea placeholder="Brief description..." rows="2" required></textarea>
            </div>
            <div class="step-buttons">
                <button type="button" class="form-btn prev-btn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <button type="button" class="form-btn next-btn">
                    Next <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        
        <!-- Step 3 -->
        <div class="form-step" data-step="3">
            <div class="input-group">
                <textarea placeholder="Detailed message..." rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label class="checkbox-label">
                    <input type="checkbox" required>
                    <span class="checkmark"></span>
                    I agree to terms and privacy policy
                </label>
            </div>
            <div class="step-buttons">
                <button type="button" class="form-btn prev-btn">
                    <i class="fas fa-arrow-left"></i> Back
                </button>
                <button type="submit" class="form-btn submit-btn">
                    <i class="fas fa-paper-plane"></i> Send Message
                </button>
            </div>
        </div>
    </form>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 33%"></div>
    </div>
</div>`,
    css: `.multistep-contact {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.step-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.step {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #e2e8f0;
    color: #64748b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.step.active {
    background: #667eea;
    color: white;
    transform: scale(1.1);
}

.step-line {
    width: 50px;
    height: 2px;
    background: #e2e8f0;
    transition: background 0.3s ease;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333;
}

.form-header p {
    color: #666;
    font-size: 0.9rem;
}

.form-step {
    display: none;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.form-step.active {
    display: block;
}

.input-group {
    margin-bottom: 15px;
}

.multistep-contact input,
.multistep-contact select,
.multistep-contact textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.multistep-contact input:focus,
.multistep-contact select:focus,
.multistep-contact textarea:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.step-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.form-btn {
    flex: 1;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.form-btn.prev-btn {
    background: #e2e8f0;
    color: #64748b;
}

.form-btn.next-btn {
    background: #667eea;
    color: white;
}

.form-btn.submit-btn {
    background: #10b981;
    color: white;
}

.form-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.progress-bar {
    width: 100%;
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    margin-top: 25px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: #667eea;
    transition: width 0.3s ease;
}`,
    js: `// Multi-Step Contact Form functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form-multistep');
    if (!form) return;
    
    const steps = form.querySelectorAll('.form-step');
    const stepIndicator = form.querySelectorAll('.step');
    const stepLines = form.querySelectorAll('.step-line');
    const progressFill = document.querySelector('.progress-fill');
    const stepText = document.querySelector('.form-header p');
    let currentStep = 1;
    
    // Next button functionality
    form.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Validate current step
            if (!validateStep(currentStep)) {
                return;
            }
            
            // Move to next step
            if (currentStep < 3) {
                steps.forEach(step => step.classList.remove('active'));
                stepIndicator.forEach(step => step.classList.remove('active'));
                
                currentStep++;
                
                form.querySelector(\`.form-step[data-step="\${currentStep}"]\`).classList.add('active');
                stepIndicator[currentStep - 1].classList.add('active');
                
                // Update step lines
                if (currentStep === 2) {
                    stepLines[0].style.background = '#667eea';
                } else if (currentStep === 3) {
                    stepLines[1].style.background = '#667eea';
                }
                
                // Update progress bar
                progressFill.style.width = \`\${currentStep * 33}%\`;
                
                // Update step text
                const stepTitles = ['Step 1: Basic Information', 'Step 2: Inquiry Details', 'Step 3: Final Message'];
                stepText.textContent = stepTitles[currentStep - 1];
            }
        });
    });
    
    // Previous button functionality
    form.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                steps.forEach(step => step.classList.remove('active'));
                stepIndicator.forEach(step => step.classList.remove('active'));
                
                currentStep--;
                
                form.querySelector(\`.form-step[data-step="\${currentStep}"]\`).classList.add('active');
                stepIndicator[currentStep - 1].classList.add('active');
                
                // Update step lines
                if (currentStep === 1) {
                    stepLines[0].style.background = '#e2e8f0';
                } else if (currentStep === 2) {
                    stepLines[1].style.background = '#e2e8f0';
                }
                
                // Update progress bar
                progressFill.style.width = \`\${currentStep * 33}%\`;
                
                // Update step text
                const stepTitles = ['Step 1: Basic Information', 'Step 2: Inquiry Details', 'Step 3: Final Message'];
                stepText.textContent = stepTitles[currentStep - 1];
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateStep(3)) {
            return;
        }
        
        // Get all form data
        const formData = {
            name: this.querySelector('input[placeholder="Full Name"]').value,
            email: this.querySelector('input[placeholder="Email Address"]').value,
            phone: this.querySelector('input[placeholder="Phone Number"]').value,
            inquiry: this.querySelector('select').value,
            subject: this.querySelector('input[placeholder="Subject"]').value,
            brief: this.querySelectorAll('textarea')[0].value,
            message: this.querySelectorAll('textarea')[1].value
        };
        
        console.log('Multi-step contact:', formData);
        
        // Show success animation
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
        submitBtn.style.background = '#059669';
        
        // Reset form after success
        setTimeout(() => {
            // Reset to step 1
            steps.forEach(step => step.classList.remove('active'));
            stepIndicator.forEach(step => step.classList.remove('active'));
            stepLines.forEach(line => line.style.background = '#e2e8f0');
            
            currentStep = 1;
            form.querySelector('.form-step[data-step="1"]').classList.add('active');
            stepIndicator[0].classList.add('active');
            progressFill.style.width = '33%';
            stepText.textContent = 'Step 1: Basic Information';
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            this.reset();
        }, 2000);
    });
    
    // Validation function
    function validateStep(step) {
        const currentStepElement = form.querySelector(\`.form-step[data-step="\${step}"]\`);
        const inputs = currentStepElement.querySelectorAll('input[required], select[required], textarea[required]');
        
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
                input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
                
                setTimeout(() => {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                }, 2000);
            }
        });
        
        return isValid;
    }
});`
},

// ====================================================================
// TEMPLATE 28: Creative Contact Form
// ====================================================================
form28: {
    name: "Creative Contact Form",
    category: "contact modern creative",
    html: `<div class="form-container creative-contact">
    <div class="form-header">
        <div class="creative-shape">
            <i class="fas fa-pen-fancy"></i>
        </div>
        <h3>Creative Contact</h3>
        <p>Share your creative ideas with us</p>
    </div>
    <form class="contact-form-creative">
        <div class="creative-input-group">
            <div class="input-container">
                <input type="text" placeholder=" " required>
                <label>Your Creative Name</label>
                <div class="input-decoration"></div>
            </div>
        </div>
        <div class="creative-input-group">
            <div class="input-container">
                <input type="email" placeholder=" " required>
                <label>Email for Collaboration</label>
                <div class="input-decoration"></div>
            </div>
        </div>
        <div class="creative-input-group">
            <div class="input-container">
                <select class="form-select">
                    <option value="">Project Type</option>
                    <option value="design">Graphic Design</option>
                    <option value="web">Web Development</option>
                    <option value="content">Content Creation</option>
                    <option value="branding">Brand Identity</option>
                </select>
                <div class="select-decoration"></div>
            </div>
        </div>
        <div class="creative-input-group">
            <div class="input-container">
                <textarea placeholder=" " rows="2" required></textarea>
                <label>Describe your creative vision</label>
                <div class="input-decoration"></div>
                <div class="inspiration-hint">
                    <i class="fas fa-lightbulb"></i>
                    Be as detailed as possible
                </div>
            </div>
        </div>
        <div class="color-picker">
            <span>Preferred Color Theme:</span>
            <div class="color-options">
                <button type="button" class="color-option" style="background: #667eea;"></button>
                <button type="button" class="color-option" style="background: #764ba2;"></button>
                <button type="button" class="color-option" style="background: #f093fb;"></button>
                <button type="button" class="color-option" style="background: #f5576c;"></button>
                <button type="button" class="color-option" style="background: #4facfe;"></button>
            </div>
        </div>
        <button type="submit" class="form-btn creative-btn">
            <i class="fas fa-palette"></i> Share Creative Idea
        </button>
    </form>
</div>`,
    css: `.creative-contact {
    width: 100%;
    max-width: 400px;
    background: linear-gradient(135deg, #ff6b6b, #ff8e53);
    color: white;
    border-radius: 20px;
    padding: 25px;
}

.creative-shape {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.5rem;
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.form-header p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
}

.input-container {
    position: relative;
    margin-bottom: 25px;
}

.input-container input,
.input-container textarea {
    width: 100%;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.input-container textarea {
    min-height: 80px;
    resize: vertical;
}

.input-container input:focus,
.input-container textarea:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

.input-container label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    pointer-events: none;
}

.input-container input:focus + label,
.input-container input:not(:placeholder-shown) + label,
.input-container textarea:focus + label,
.input-container textarea:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    font-size: 0.7rem;
    color: white;
    background: #ff6b6b;
    padding: 2px 8px;
    border-radius: 10px;
}

.input-decoration {
    position: absolute;
    bottom: -5px;
    left: 10px;
    right: 10px;
    height: 2px;
    background: white;
    border-radius: 1px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.input-container input:focus ~ .input-decoration,
.input-container textarea:focus ~ .input-decoration {
    transform: scaleX(1);
}

.inspiration-hint {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.color-picker {
    margin: 25px 0;
}

.color-picker span {
    display: block;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
}

.color-options {
    display: flex;
    gap: 10px;
}

.color-option {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.color-option:hover,
.color-option.active {
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.form-btn.creative-btn {
    width: 100%;
    padding: 12px;
    background: white;
    color: #ff6b6b;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.form-btn.creative-btn:hover {
    transform: translateY(-2px) rotate(1deg);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
}`,
    js: `// Creative Contact Form functionality
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form-creative');
    if (!form) return;
    
    // Color picker functionality
    const colorOptions = form.querySelectorAll('.color-option');
    let selectedColor = '#667eea';
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            selectedColor = this.style.background;
            
            // Animate button with selected color
            const btn = form.querySelector('.creative-btn');
            btn.style.color = this.style.background;
            btn.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                btn.style.transform = '';
            }, 300);
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const projectType = this.querySelector('select').value;
        const vision = this.querySelector('textarea').value;
        
        console.log('Creative contact:', { name, email, projectType, vision, selectedColor });
        
        if (!projectType) {
            alert('Please select a project type');
            return;
        }
        
        // Creative success animation
        const btn = this.querySelector('.creative-btn');
        const originalText = btn.innerHTML;
        const paletteIcon = btn.querySelector('.fa-palette');
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sharing...';
        
        // Color burst animation
        createColorBurst(btn);
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Idea Shared!';
            btn.style.background = selectedColor;
            btn.style.color = 'white';
            paletteIcon.style.transform = 'rotate(360deg)';
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.style.color = '';
                paletteIcon.style.transform = '';
                this.reset();
                colorOptions[0].click();
            }, 1500);
        }, 1500);
    });
    
    // Helper function for color burst effect
    function createColorBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#ff6b6b', '#ff8e53'];
        
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'color-particle';
            particle.style.cssText = \`
                position: fixed;
                width: 8px;
                height: 8px;
                background: \${colors[i % colors.length]};
                border-radius: 50%;
                top: \${centerY}px;
                left: \${centerX}px;
                pointer-events: none;
                z-index: 1000;
                animation: colorBurst 1s forwards;
            \`;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
        
        // Add animation if not exists
        if (!document.querySelector('#color-burst-styles')) {
            const style = document.createElement('style');
            style.id = 'color-burst-styles';
            style.textContent = \`
                @keyframes colorBurst {
                    0% { 
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    100% { 
                        transform: translate(\${Math.random() * 100 - 50}px, \${Math.random() * 100 - 50}px) scale(0);
                        opacity: 0;
                    }
                }
            \`;
            document.head.appendChild(style);
        }
    }
});`
},

// ====================================================================
// TEMPLATE 29: Advanced Contact Form
// ====================================================================
form29: {
    name: "Advanced Contact Form",
    category: "contact modern advanced",
    html: `<div class="form-container advanced-contact">
    <div class="form-header">
        <div class="advanced-badge">
            <i class="fas fa-cogs"></i>
            <span>Advanced Contact</span>
        </div>
        <h3>Detailed Contact Form</h3>
        <p>Complete contact information</p>
    </div>
    <form class="contact-form-advanced">
        <div class="section-title">
            <i class="fas fa-user-circle"></i>
            <span>Personal Information</span>
        </div>
        <div class="input-row">
            <div class="input-group">
                <input type="text" placeholder="First Name" required>
            </div>
            <div class="input-group">
                <input type="text" placeholder="Last Name" required>
            </div>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Job Title" required>
        </div>
        
        <div class="section-title">
            <i class="fas fa-building"></i>
            <span>Company Information</span>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Company Name" required>
        </div>
        <div class="input-group">
            <input type="text" placeholder="Industry" required>
        </div>
        <div class="input-group">
            <input type="number" placeholder="Company Size" min="1">
        </div>
        
        <div class="section-title">
            <i class="fas fa-comments"></i>
            <span>Inquiry Details</span>
        </div>
        <div class="input-group">
            <select class="form-select">
                <option value="">How did you hear about us?</option>
                <option value="search">Search Engine</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div class="input-group">
            <textarea placeholder="Project requirements or questions..." rows="3" required></textarea>
            <div class="char-count">0/1000</div>
        </div>
        
        <div class="input-group">
            <label class="checkbox-label">
                <input type="checkbox">
                <span class="checkmark"></span>
                Subscribe to newsletter
            </label>
            <label class="checkbox-label">
                <input type="checkbox" required>
                <span class="checkmark"></span>
                I agree to privacy policy
            </label>
        </div>
        
        <button type="submit" class="form-btn advanced-btn">
            <i class="fas fa-rocket"></i> Submit Detailed Inquiry
        </button>
        <div class="privacy-note">
            <i class="fas fa-shield-alt"></i>
            <span>Your information is secure and encrypted</span>
        </div>
    </form>
</div>`,
    css: `.advanced-contact {
    width: 100%;
    max-width: 450px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: white;
    border-radius: 16px;
    padding: 25px;
}

.advanced-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(99, 102, 241, 0.2);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-bottom: 15px;
}

.form-header {
    text-align: center;
    margin-bottom: 25px;
}

.form-header h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.form-header p {
    color: #a5b4fc;
    font-size: 0.9rem;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 25px 0 15px 0;
    font-size: 0.9rem;
    color: #a5b4fc;
    border-bottom: 1px solid rgba(165, 180, 252, 0.2);
    padding-bottom: 8px;
}

.section-title i {
    font-size: 1rem;
}

.input-row {
    display: flex;
    gap: 10px;
}

.input-row .input-group {
    flex: 1;
    margin-bottom: 0;
}

.input-group {
    margin-bottom: 15px;
}

.advanced-contact input,
.advanced-contact select,
.advanced-contact textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.advanced-contact input:focus,
.advanced-contact select:focus,
.advanced-contact textarea:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.advanced-contact textarea {
    min-height: 80px;
    resize: vertical;
}

.char-count {
    text-align: right;
    font-size: 0.75rem;
    color: #94a3b8;
    margin-top: 5px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 10px;
    user-select: none;
}

.checkbox-label input {
    display: none;
}

.checkbox-label .checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-label input:checked + .checkmark {
    background: #6366f1;
    border-color: #6366f1;
}

.checkbox-label input:checked + .checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10px;
}

.form-btn.advanced-btn {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.form-btn.advanced-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

.privacy-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
    font-size: 0.7rem;
    color: #94a3b8;
}`,
    js: `// Advanced Contact Form functionality
document.querySelector('.contact-form-advanced')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Personal information
    const firstName = this.querySelector('input[placeholder="First Name"]').value;
    const lastName = this.querySelector('input[placeholder="Last Name"]').value;
    const jobTitle = this.querySelector('input[placeholder="Job Title"]').value;
    
    // Company information
    const company = this.querySelector('input[placeholder="Company Name"]').value;
    const industry = this.querySelector('input[placeholder="Industry"]').value;
    const companySize = this.querySelector('input[placeholder="Company Size"]').value;
    
    // Inquiry details
    const referral = this.querySelector('select').value;
    const message = this.querySelector('textarea').value;
    const newsletter = this.querySelectorAll('input[type="checkbox"]')[0].checked;
    const privacy = this.querySelectorAll('input[type="checkbox"]')[1].checked;
    
    console.log('Advanced contact:', { 
        firstName, lastName, jobTitle, company, industry, companySize, 
        referral, message, newsletter, privacy 
    });
    
    // Validation
    if (!privacy) {
        alert('You must agree to the privacy policy');
        return;
    }
    
    if (message.length > 1000) {
        alert('Message exceeds 1000 characters limit');
        return;
    }
    
    // Advanced submission with progress
    const btn = this.querySelector('.advanced-btn');
    const originalText = btn.innerHTML;
    const rocketIcon = btn.querySelector('.fa-rocket');
    
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;
    
    // Simulate multi-step processing
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 25;
        if (progress <= 100) {
            btn.innerHTML = \`<i class="fas fa-spinner fa-spin"></i> Processing \${progress}%\`;
        }
    }, 500);
    
    // Simulate API call
    setTimeout(() => {
        clearInterval(progressInterval);
        
        // Success animation
        btn.innerHTML = '<i class="fas fa-check"></i> Submission Complete!';
        rocketIcon.style.transform = 'translateY(-10px)';
        btn.style.background = '#10b981';
        
        // Privacy note update
        const privacyNote = this.querySelector('.privacy-note');
        privacyNote.innerHTML = '<i class="fas fa-shield-check" style="color: #10b981"></i><span style="color: #10b981">✓ Data securely submitted</span>';
        
        setTimeout(() => {
            // Reset form
            btn.innerHTML = originalText;
            rocketIcon.style.transform = '';
            btn.style.background = '';
            btn.disabled = false;
            this.reset();
            privacyNote.innerHTML = '<i class="fas fa-shield-alt"></i><span>Your information is secure and encrypted</span>';
        }, 2000);
    }, 2000);
});`
},
// Add this to your formTemplateCodes object after form16

// ====================================================================
// TEMPLATE 30: Minimalist Bordered Login
// ====================================================================
form30: {
    name: "Minimalist Bordered Login",
    category: "login modern minimalist",
    html: `<div class="form-container minimalist-bordered-bg">
    <div class="form-header">
        <h3>Sign In</h3>
        <p>Welcome back! Please enter your details</p>
    </div>
    <form class="minimalist-bordered-form">
        <div class="bordered-input-group">
            <label for="minimal-email">Email</label>
            <input type="email" id="minimal-email" placeholder="michael@example.com" required>
            <div class="input-border"></div>
        </div>
        <div class="bordered-input-group">
            <label for="minimal-password">Password</label>
            <input type="password" id="minimal-password" placeholder="••••••••" required>
            <button type="button" class="password-toggle bordered-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="input-border"></div>
        </div>
        <div class="form-options minimal-options">
            <label class="minimal-checkbox">
                <input type="checkbox" checked>
                <span class="minimal-checkmark"></span>
                <span class="minimal-label">Keep me signed in</span>
            </label>
            <a href="#" class="minimal-link">Forgot password?</a>
        </div>
        <button type="submit" class="form-btn minimalist-btn">
            <span>Sign In</span>
            <i class="fas fa-arrow-right"></i>
        </button>
        <div class="minimal-divider">
            <span>New to platform?</span>
            <a href="#" class="minimal-signup-link">Create account</a>
        </div>
    </form>
</div>`,
    css: `.minimalist-bordered-bg {
    background: white;
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
    border: 1px solid #f0f0f0;
    max-height: 280px;
    overflow-y: auto;
}

.bordered-input-group {
    position: relative;
    margin-bottom: 25px;
}

.bordered-input-group label {
    position: absolute;
    top: -8px;
    left: 12px;
    background: white;
    padding: 0 6px;
    font-size: 0.7rem;
    color: #6b7280;
    font-weight: 500;
    letter-spacing: 0.3px;
    z-index: 2;
}

.bordered-input-group input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    background: white;
    color: #1f2937;
}

.bordered-input-group input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.05);
}

.input-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
    border-radius: 2px;
}

.bordered-input-group input:focus ~ .input-border {
    width: 100%;
}

.bordered-toggle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    font-size: 0.9rem;
    z-index: 3;
}

.bordered-toggle:hover {
    color: #3b82f6;
}

.minimal-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 25px;
}

.minimal-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #4b5563;
}

.minimal-checkbox input {
    display: none;
}

.minimal-checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid #d1d5db;
    border-radius: 4px;
    position: relative;
    transition: all 0.2s ease;
}

.minimal-checkbox input:checked + .minimal-checkmark {
    background: #3b82f6;
    border-color: #3b82f6;
}

.minimal-checkbox input:checked + .minimal-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10px;
}

.minimal-link {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.2s ease;
    border-bottom: 1px dashed #d1d5db;
    padding-bottom: 2px;
}

.minimal-link:hover {
    color: #3b82f6;
    border-bottom-color: #3b82f6;
}

.form-btn.minimalist-btn {
    width: 100%;
    padding: 14px;
    background: white;
    color: #1f2937;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.form-btn.minimalist-btn:hover {
    background: #f9fafb;
    border-color: #3b82f6;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.1);
}

.form-btn.minimalist-btn i {
    transition: transform 0.3s ease;
}

.form-btn.minimalist-btn:hover i {
    transform: translateX(5px);
    color: #3b82f6;
}

.minimal-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.8rem;
    color: #6b7280;
}

.minimal-signup-link {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
}`,
    js: `// Minimalist Bordered Login
document.addEventListener('DOMContentLoaded', function() {
    const minimalistForm = document.querySelector('.minimalist-bordered-form');
    
    if (minimalistForm) {
        // Form submission
        minimalistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showMinimalNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.minimalist-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Signing in...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showMinimalNotification('Login successful!', 'success');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                this.reset();
                this.querySelector('input[type="checkbox"]').checked = true;
            }, 1500);
        });
        
        // Password toggle
        const toggleBtn = minimalistForm.querySelector('.bordered-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showMinimalNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 31: Cyberpunk Grid Login
// ====================================================================
form31: {
    name: "Cyberpunk Grid Login",
    category: "login modern cyberpunk",
    html: `<div class="form-container cyberpunk-grid-bg">
    <div class="cyber-grid-overlay"></div>
    <div class="glitch-container">
        <div class="form-header">
            <h3 class="glitch-text" data-text="TERMINAL ACCESS">TERMINAL ACCESS</h3>
            <p class="cyber-subtext">Authorization required</p>
        </div>
    </div>
    <form class="cyberpunk-form">
        <div class="cyber-input-group">
            <span class="cyber-prefix">></span>
            <input type="text" placeholder="USERNAME" required class="cyber-input">
            <div class="cyber-glow-line"></div>
        </div>
        <div class="cyber-input-group">
            <span class="cyber-prefix">#</span>
            <input type="password" placeholder="PASSWORD" required class="cyber-input">
            <button type="button" class="cyber-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="cyber-glow-line"></div>
        </div>
        <div class="cyber-options">
            <label class="cyber-checkbox">
                <input type="checkbox" checked>
                <span class="cyber-checkmark"></span>
                <span class="cyber-label">Remember terminal</span>
            </label>
            <a href="#" class="cyber-link">[Reset]</a>
        </div>
        <button type="submit" class="form-btn cyber-btn">
            <span class="btn-glitch">EXECUTE</span>
            <span class="btn-glitch-layer"></span>
            <i class="fas fa-terminal"></i>
        </button>
        <div class="cyber-status">
            <span class="status-dot"></span>
            <span class="status-text">SECURE CONNECTION ESTABLISHED</span>
        </div>
    </form>
    <div class="cyber-footer">
        <span class="scan-line"></span>
        <span>© 2025 CYBERSPACE</span>
    </div>
</div>`,
    css: `.cyberpunk-grid-bg {
    background: #0a0c0f;
    border-radius: 8px;
    padding: 25px;
    color: #00ff9d;
    position: relative;
    overflow: hidden;
    border: 1px solid #00ff9d;
    box-shadow: 0 0 20px rgba(0, 255, 157, 0.2);
    max-height: 280px;
    overflow-y: auto;
}

.cyber-grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(0, 255, 157, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 157, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
}

.glitch-text {
    font-size: 1.1rem;
    font-weight: 700;
    text-align: center;
    color: #00ff9d;
    text-transform: uppercase;
    letter-spacing: 4px;
    position: relative;
    animation: glitch 3s infinite;
    margin-bottom: 5px;
}

.glitch-text::before,
.glitch-text::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}

.glitch-text::before {
    color: #ff00c1;
    z-index: -1;
    animation: glitch-offset 0.3s infinite;
}

.glitch-text::after {
    color: #00fff9;
    z-index: -2;
    animation: glitch-offset2 0.2s infinite;
}

@keyframes glitch {
    0%, 100% { transform: none; opacity: 1; }
    7% { transform: skew(-0.5deg, -0.9deg); opacity: 0.75; }
    10% { transform: none; opacity: 1; }
    27% { transform: none; opacity: 1; }
    30% { transform: skew(0.8deg, -0.1deg); opacity: 0.75; }
    35% { transform: none; opacity: 1; }
    52% { transform: none; opacity: 1; }
    55% { transform: skew(-1deg, 0.2deg); opacity: 0.75; }
    50% { transform: none; opacity: 1; }
    72% { transform: none; opacity: 1; }
    75% { transform: skew(0.4deg, 1deg); opacity: 0.75; }
    80% { transform: none; opacity: 1; }
    100% { transform: none; opacity: 1; }
}

@keyframes glitch-offset {
    0%, 100% { left: 0; }
    20% { left: -2px; }
    40% { left: 2px; }
    60% { left: -1px; }
    80% { left: 1px; }
}

@keyframes glitch-offset2 {
    0%, 100% { left: 0; }
    20% { left: 2px; }
    40% { left: -2px; }
    60% { left: 1px; }
    80% { left: -1px; }
}

.cyber-subtext {
    text-align: center;
    color: #6c7a89;
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.cyber-input-group {
    position: relative;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.cyber-prefix {
    position: absolute;
    left: 12px;
    color: #00ff9d;
    font-weight: 700;
    z-index: 2;
    text-shadow: 0 0 5px #00ff9d;
}

.cyber-input {
    width: 100%;
    padding: 14px 14px 14px 30px;
    background: rgba(0, 255, 157, 0.05);
    border: 1px solid #00ff9d;
    border-radius: 4px;
    color: #00ff9d;
    font-size: 0.8rem;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
}

.cyber-input:focus {
    outline: none;
    background: rgba(0, 255, 157, 0.1);
    box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);
}

.cyber-input::placeholder {
    color: rgba(0, 255, 157, 0.3);
    font-family: 'Courier New', monospace;
}

.cyber-glow-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: #00ff9d;
    box-shadow: 0 0 10px #00ff9d;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.cyber-input:focus ~ .cyber-glow-line {
    transform: scaleX(1);
}

.cyber-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: #00ff9d;
    cursor: pointer;
    font-size: 0.9rem;
    z-index: 3;
}

.cyber-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 20px;
}

.cyber-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.75rem;
    color: #00ff9d;
}

.cyber-checkbox input {
    display: none;
}

.cyber-checkmark {
    width: 16px;
    height: 16px;
    border: 1px solid #00ff9d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
}

.cyber-checkbox input:checked + .cyber-checkmark::after {
    content: '✓';
    color: #00ff9d;
}

.cyber-link {
    color: #ff00c1;
    text-decoration: none;
    font-size: 0.75rem;
    font-family: 'Courier New', monospace;
}

.form-btn.cyber-btn {
    position: relative;
    width: 100%;
    padding: 14px;
    background: transparent;
    color: #00ff9d;
    border: 1px solid #00ff9d;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.btn-glitch-layer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 157, 0.2), transparent);
    animation: btn-scan 2s infinite;
}

@keyframes btn-scan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.cyber-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}

.status-dot {
    width: 6px;
    height: 6px;
    background: #00ff9d;
    border-radius: 50%;
    animation: pulse 1s infinite;
}

.status-text {
    color: #6c7a89;
    font-size: 0.6rem;
    letter-spacing: 1px;
}

.cyber-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 255, 157, 0.2);
    font-size: 0.6rem;
    color: #6c7a89;
    position: relative;
}

.scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(0, 255, 157, 0.3);
    animation: scan 4s linear infinite;
}

@keyframes scan {
    0% { transform: translateY(0); }
    100% { transform: translateY(100px); }
}`,
    js: `// Cyberpunk Grid Login
document.addEventListener('DOMContentLoaded', function() {
    const cyberForm = document.querySelector('.cyberpunk-form');
    
    if (cyberForm) {
        // Form submission
        cyberForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.querySelector('input[placeholder="USERNAME"]').value;
            const password = this.querySelector('input[placeholder="PASSWORD"]').value;
            
            if (!username || !password) {
                showCyberNotification('ACCESS DENIED: Missing credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.cyber-btn');
            const btnText = submitBtn.querySelector('.btn-glitch');
            const originalText = btnText.textContent;
            
            btnText.textContent = 'AUTHENTICATING...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                btnText.textContent = 'ACCESS GRANTED';
                submitBtn.style.background = 'rgba(0, 255, 157, 0.2)';
                showCyberNotification('Welcome to the grid', 'success');
                
                setTimeout(() => {
                    btnText.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('input[type="checkbox"]').checked = true;
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const cyberToggle = cyberForm.querySelector('.cyber-toggle');
        if (cyberToggle) {
            cyberToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.cyber-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showCyberNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0a0c0f;
            border: 1px solid \${type === 'success' ? '#00ff9d' : '#ff00c1'};
            color: \${type === 'success' ? '#00ff9d' : '#ff00c1'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-family: 'Courier New', monospace;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 15px \${type === 'success' ? 'rgba(0, 255, 157, 0.3)' : 'rgba(255, 0, 193, 0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 32: Floating Particles Login
// ====================================================================
form32: {
    name: "Floating Particles Login",
    category: "login modern animated",
    html: `<div class="form-container particles-bg">
    <div class="particles-container">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>
    <div class="form-header">
        <div class="particle-logo">
            <i class="fas fa-atom"></i>
        </div>
        <h3>Welcome to Cosmos</h3>
        <p>Sign in to explore the universe</p>
    </div>
    <form class="particles-form">
        <div class="particle-input-wrapper">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="cosmic@example.com" required class="particle-input">
            <div class="input-ring"></div>
        </div>
        <div class="particle-input-wrapper">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="••••••••" required class="particle-input">
            <button type="button" class="particle-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="input-ring"></div>
        </div>
        <div class="particle-options">
            <label class="particle-check">
                <input type="checkbox">
                <span class="particle-checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span>Stay connected</span>
            </label>
            <a href="#" class="particle-link">Orbit lost?</a>
        </div>
        <button type="submit" class="form-btn particle-btn">
            <span>Launch</span>
            <i class="fas fa-rocket"></i>
            <div class="btn-particles"></div>
        </button>
        <div class="particle-divider">
            <span>Join the journey</span>
            <a href="#" class="particle-signup">Create account</a>
        </div>
    </form>
</div>`,
    css: `.particles-bg {
    background: linear-gradient(135deg, #0b0c1e, #1a1b3c);
    border-radius: 20px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
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
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    animation: float-particle 8s infinite;
}

.particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 1s; }
.particle:nth-child(3) { top: 80%; left: 30%; animation-delay: 2s; }
.particle:nth-child(4) { top: 40%; left: 60%; animation-delay: 3s; }
.particle:nth-child(5) { top: 10%; left: 90%; animation-delay: 4s; }
.particle:nth-child(6) { top: 70%; left: 10%; animation-delay: 5s; }

@keyframes float-particle {
    0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
    25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
    50% { transform: translateY(0) translateX(20px); opacity: 0.3; }
    75% { transform: translateY(20px) translateX(10px); opacity: 0.6; }
}

.particle-logo {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.3rem;
    color: #7c9eff;
    box-shadow: 0 0 30px rgba(124, 158, 255, 0.3);
}

.particle-input-wrapper {
    position: relative;
    margin-bottom: 20px;
}

.particle-input-wrapper i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #7c9eff;
    z-index: 2;
    font-size: 0.9rem;
}

.particle-input {
    width: 100%;
    padding: 14px 14px 14px 45px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.particle-input:focus {
    outline: none;
    border-color: #7c9eff;
    box-shadow: 0 0 20px rgba(124, 158, 255, 0.3);
}

.input-ring {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid #7c9eff;
    border-radius: 30px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.particle-input:focus ~ .input-ring {
    opacity: 0.5;
}

.particle-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    z-index: 3;
}

.particle-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.particle-check {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
}

.particle-check input {
    display: none;
}

.particle-checkmark {
    width: 18px;
    height: 18px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: transparent;
    transition: all 0.3s ease;
}

.particle-check input:checked + .particle-checkmark {
    background: #7c9eff;
    border-color: #7c9eff;
    color: white;
}

.particle-link {
    color: #7c9eff;
    text-decoration: none;
    font-size: 0.8rem;
}

.form-btn.particle-btn {
    position: relative;
    width: 100%;
    padding: 14px;
    background: linear-gradient(45deg, #7c9eff, #a78bfa);
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
}

.btn-particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, white 1px, transparent 1px);
    background-size: 10px 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.form-btn.particle-btn:hover .btn-particles {
    opacity: 0.2;
}

.particle-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
}

.particle-signup {
    color: #7c9eff;
    text-decoration: none;
    font-weight: 500;
}`,
    js: `// Floating Particles Login
document.addEventListener('DOMContentLoaded', function() {
    const particleForm = document.querySelector('.particles-form');
    
    if (particleForm) {
        // Form submission
        particleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showParticleNotification('Please enter cosmic credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.particle-btn');
            const rocketIcon = submitBtn.querySelector('.fa-rocket');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Launching...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                rocketIcon.style.animation = 'launch 1s';
                showParticleNotification('Welcome to the cosmos!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const particleToggle = particleForm.querySelector('.particle-toggle');
        if (particleToggle) {
            particleToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.particle-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showParticleNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #0b0c1e, #1a1b3c);
            border: 1px solid \${type === 'success' ? '#7c9eff' : '#ff6b6b'};
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? 'rgba(124, 158, 255, 0.3)' : 'rgba(255, 107, 107, 0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 33: Retro Terminal Login
// ====================================================================
form33: {
    name: "Retro Terminal Login",
    category: "login retro",
    html: `<div class="form-container retro-terminal-bg">
    <div class="crt-effect"></div>
    <div class="scanlines"></div>
    <div class="terminal-header">
        <div class="terminal-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
        </div>
        <span class="terminal-title">root@localhost:~/login</span>
    </div>
    <div class="terminal-body">
        <div class="terminal-prompt">
            <span class="prompt-user">user@system:~$</span>
            <span class="prompt-command">login --secure</span>
        </div>
        <form class="retro-form">
            <div class="retro-input-line">
                <span class="retro-label">username:</span>
                <input type="text" placeholder="enter username" required class="retro-input">
                <span class="retro-cursor"></span>
            </div>
            <div class="retro-input-line">
                <span class="retro-label">password:</span>
                <input type="password" placeholder="••••••••" required class="retro-input">
                <button type="button" class="retro-toggle">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
            <div class="retro-checkbox-line">
                <label class="retro-checkbox">
                    <input type="checkbox" checked>
                    <span class="retro-checkmark">[x]</span>
                    <span class="retro-check-label">remember session</span>
                </label>
            </div>
            <div class="retro-actions">
                <button type="submit" class="retro-btn">
                    <span>></span> AUTHENTICATE
                </button>
                <a href="#" class="retro-link">reset</a>
            </div>
        </form>
        <div class="terminal-footer">
            <span class="blink">_</span>
            <span class="system-msg">[SYSTEM READY]</span>
        </div>
    </div>
</div>`,
    css: `.retro-terminal-bg {
    background: #0a0f0a;
    border-radius: 8px;
    padding: 20px;
    color: #33ff33;
    position: relative;
    overflow: hidden;
    border: 1px solid #33ff33;
    box-shadow: 0 0 15px rgba(51, 255, 51, 0.2);
    font-family: 'Courier New', monospace;
    max-height: 280px;
    overflow-y: auto;
}

.crt-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, transparent 50%, rgba(0, 0, 0, 0.1) 100%);
    pointer-events: none;
    z-index: 2;
}

.scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 2;
    opacity: 0.3;
}

.terminal-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #33ff33;
}

.terminal-dots {
    display: flex;
    gap: 5px;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.terminal-title {
    color: #33ff33;
    font-size: 0.7rem;
}

.terminal-prompt {
    margin-bottom: 15px;
    color: #33ff33;
    font-size: 0.8rem;
}

.prompt-user {
    color: #33ff33;
}

.prompt-command {
    color: #88ff88;
    margin-left: 10px;
}

.retro-input-line {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.retro-label {
    width: 80px;
    color: #33ff33;
    font-size: 0.8rem;
    text-transform: uppercase;
}

.retro-input {
    flex: 1;
    padding: 8px;
    background: transparent;
    border: 1px solid #33ff33;
    color: #33ff33;
    font-size: 0.8rem;
    font-family: 'Courier New', monospace;
}

.retro-input:focus {
    outline: none;
    background: rgba(51, 255, 51, 0.1);
}

.retro-cursor {
    position: absolute;
    right: 8px;
    width: 8px;
    height: 16px;
    background: #33ff33;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.retro-toggle {
    position: absolute;
    right: 8px;
    background: none;
    border: none;
    color: #33ff33;
    cursor: pointer;
}

.retro-checkbox-line {
    margin: 15px 0;
}

.retro-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #33ff33;
    font-size: 0.8rem;
}

.retro-checkbox input {
    display: none;
}

.retro-checkmark {
    display: inline-block;
    width: 20px;
}

.retro-btn {
    background: transparent;
    border: 1px solid #33ff33;
    color: #33ff33;
    padding: 10px 20px;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
}

.retro-btn:hover {
    background: #33ff33;
    color: #0a0f0a;
}

.retro-link {
    color: #33ff33;
    text-decoration: none;
    font-size: 0.8rem;
    margin-left: 15px;
}

.terminal-footer {
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid #33ff33;
    display: flex;
    align-items: center;
    gap: 10px;
}

.blink {
    animation: blink 1s infinite;
}

.system-msg {
    color: #88ff88;
    font-size: 0.7rem;
}`,
    js: `// Retro Terminal Login
document.addEventListener('DOMContentLoaded', function() {
    const retroForm = document.querySelector('.retro-form');
    
    if (retroForm) {
        // Form submission
        retroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.querySelector('input[placeholder="enter username"]').value;
            const password = this.querySelector('input[placeholder="••••••••"]').value;
            
            if (!username || !password) {
                showRetroNotification('ERROR: Missing credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.retro-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>></span> PROCESSING...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>></span> AUTHENTICATED';
                submitBtn.style.background = '#33ff33';
                submitBtn.style.color = '#0a0f0a';
                showRetroNotification('Login successful', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('input[type="checkbox"]').checked = true;
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const retroToggle = retroForm.querySelector('.retro-toggle');
        if (retroToggle) {
            retroToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.retro-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showRetroNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0a0f0a;
            border: 1px solid \${type === 'success' ? '#33ff33' : '#ff5f56'};
            color: \${type === 'success' ? '#33ff33' : '#ff5f56'};
            padding: 12px 24px;
            font-family: 'Courier New', monospace;
            font-size: 0.8rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 15px \${type === 'success' ? 'rgba(51, 255, 51, 0.3)' : 'rgba(255, 95, 86, 0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 34: Brutalist Geometric Login
// ====================================================================
form34: {
    name: "Brutalist Geometric Login",
    category: "login modern brutalist",
    html: `<div class="form-container brutalist-bg">
    <div class="geometric-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
    </div>
    <div class="brutalist-header">
        <div class="brutalist-badge">ACCESS</div>
        <h3>LOGIN</h3>
        <p>IDENTIFY YOURSELF</p>
    </div>
    <form class="brutalist-form">
        <div class="brutalist-field">
            <label>EMAIL</label>
            <div class="brutalist-input-wrapper">
                <input type="email" placeholder="user@domain.com" required>
                <div class="brutalist-corner tl"></div>
                <div class="brutalist-corner tr"></div>
                <div class="brutalist-corner bl"></div>
                <div class="brutalist-corner br"></div>
            </div>
        </div>
        <div class="brutalist-field">
            <label>PASSWORD</label>
            <div class="brutalist-input-wrapper">
                <input type="password" placeholder="••••••••" required>
                <button type="button" class="brutalist-toggle">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="brutalist-corner tl"></div>
                <div class="brutalist-corner tr"></div>
                <div class="brutalist-corner bl"></div>
                <div class="brutalist-corner br"></div>
            </div>
        </div>
        <div class="brutalist-options">
            <label class="brutalist-checkbox">
                <input type="checkbox">
                <span class="brutalist-checkbox-mark">[ ]</span>
                <span class="brutalist-checkbox-label">REMEMBER</span>
            </label>
            <a href="#" class="brutalist-link">FORGOT?</a>
        </div>
        <button type="submit" class="brutalist-submit-btn">
            <span>ENTER</span>
            <i class="fas fa-arrow-right"></i>
        </button>
        <div class="brutalist-divider">
            <span>—— OR ——</span>
        </div>
        <button type="button" class="brutalist-ghost-btn">
            <span>CREATE ACCOUNT</span>
        </button>
    </form>
</div>`,
    css: `.brutalist-bg {
    background: #f5f3f0;
    border-radius: 0;
    padding: 25px;
    color: #1a1e24;
    position: relative;
    overflow: hidden;
    border: 4px solid #1a1e24;
    box-shadow: 8px 8px 0 #1a1e24;
    max-height: 280px;
    overflow-y: auto;
}

.geometric-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.shape {
    position: absolute;
    background: rgba(255, 107, 107, 0.1);
}

.shape-1 {
    width: 80px;
    height: 80px;
    top: -20px;
    right: -20px;
    background: #ff6b6b;
    transform: rotate(45deg);
}

.shape-2 {
    width: 60px;
    height: 60px;
    bottom: -20px;
    left: -20px;
    background: #4ecdc4;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.shape-3 {
    width: 40px;
    height: 40px;
    top: 50%;
    left: -20px;
    background: #ffe66d;
    clip-path: circle(50% at 50% 50%);
}

.shape-4 {
    width: 30px;
    height: 30px;
    bottom: 20px;
    right: 20px;
    background: #a37eba;
    transform: rotate(45deg);
}

.brutalist-header {
    text-align: center;
    margin-bottom: 25px;
    position: relative;
    z-index: 2;
}

.brutalist-badge {
    display: inline-block;
    background: #1a1e24;
    color: #f5f3f0;
    padding: 4px 12px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.brutalist-header h3 {
    font-size: 2rem;
    font-weight: 900;
    color: #1a1e24;
    margin-bottom: 5px;
    letter-spacing: -1px;
}

.brutalist-header p {
    color: #6b7280;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 1px;
}

.brutalist-field {
    margin-bottom: 20px;
}

.brutalist-field label {
    display: block;
    font-size: 0.7rem;
    font-weight: 700;
    color: #1a1e24;
    margin-bottom: 5px;
    letter-spacing: 1px;
}

.brutalist-input-wrapper {
    position: relative;
}

.brutalist-input-wrapper input {
    width: 100%;
    padding: 14px;
    background: white;
    border: 3px solid #1a1e24;
    font-size: 0.9rem;
    color: #1a1e24;
    font-weight: 500;
}

.brutalist-input-wrapper input:focus {
    outline: none;
    background: #fff9e6;
}

.brutalist-corner {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid #1a1e24;
    pointer-events: none;
}

.brutalist-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
.brutalist-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
.brutalist-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
.brutalist-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

.brutalist-toggle {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #1a1e24;
    cursor: pointer;
}

.brutalist-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.brutalist-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    color: #1a1e24;
}

.brutalist-checkbox input {
    display: none;
}

.brutalist-checkbox-mark {
    display: inline-block;
    width: 20px;
    font-weight: 900;
}

.brutalist-link {
    color: #1a1e24;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    border-bottom: 2px solid #1a1e24;
}

.brutalist-submit-btn {
    width: 100%;
    padding: 16px;
    background: #1a1e24;
    color: white;
    border: 3px solid #1a1e24;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.1s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.brutalist-submit-btn:hover {
    background: #2c3e50;
    transform: translate(2px, 2px);
    box-shadow: none;
}

.brutalist-divider {
    text-align: center;
    margin: 15px 0;
    color: #1a1e24;
    font-weight: 600;
}

.brutalist-ghost-btn {
    width: 100%;
    padding: 14px;
    background: transparent;
    color: #1a1e24;
    border: 3px solid #1a1e24;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.1s ease;
}

.brutalist-ghost-btn:hover {
    background: #1a1e24;
    color: white;
}`,
    js: `// Brutalist Geometric Login
document.addEventListener('DOMContentLoaded', function() {
    const brutalistForm = document.querySelector('.brutalist-form');
    
    if (brutalistForm) {
        // Form submission
        brutalistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showBrutalistNotification('FILL ALL FIELDS', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.brutalist-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>ENTERING...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>WELCOME</span> <i class="fas fa-check"></i>';
                showBrutalistNotification('ACCESS GRANTED', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const brutalistToggle = brutalistForm.querySelector('.brutalist-toggle');
        if (brutalistToggle) {
            brutalistToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showBrutalistNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #f5f3f0;
            border: 4px solid #1a1e24;
            box-shadow: 6px 6px 0 #1a1e24;
            color: #1a1e24;
            padding: 12px 24px;
            font-size: 0.9rem;
            font-weight: 700;
            z-index: 9999;
            animation: slideIn 0.1s ease;
            text-transform: uppercase;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.1s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 35: Nature Organic Login
// ====================================================================
form35: {
    name: "Nature Organic Login",
    category: "login modern nature",
    html: `<div class="form-container nature-organic-bg">
    <div class="organic-blob"></div>
    <div class="organic-blob blob-2"></div>
    <div class="organic-blob blob-3"></div>
    <div class="form-header">
        <div class="leaf-icon">
            <i class="fas fa-leaf"></i>
        </div>
        <h3>Welcome Back</h3>
        <p>Sign in to your natural space</p>
    </div>
    <form class="nature-form">
        <div class="nature-input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="your@email.com" required>
            <div class="nature-underline"></div>
        </div>
        <div class="nature-input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
            <button type="button" class="nature-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="nature-underline"></div>
        </div>
        <div class="nature-options">
            <label class="nature-checkbox">
                <input type="checkbox" checked>
                <span class="nature-checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span>Remember me</span>
            </label>
            <a href="#" class="nature-link">Forget password?</a>
        </div>
        <button type="submit" class="form-btn nature-btn">
            <span>Sign In</span>
            <i class="fas fa-seedling"></i>
        </button>
        <div class="nature-footer">
            <span>New to nature?</span>
            <a href="#" class="nature-signup">Create account</a>
        </div>
    </form>
</div>`,
    css: `.nature-organic-bg {
    background: linear-gradient(145deg, #e8f5e9, #c8e6c9);
    border-radius: 30px 30px 30px 0;
    padding: 25px;
    color: #2e7d32;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.organic-blob {
    position: absolute;
    background: rgba(129, 199, 132, 0.2);
    border-radius: 50%;
    filter: blur(40px);
    z-index: 1;
}

.organic-blob:nth-child(1) {
    width: 200px;
    height: 200px;
    top: -50px;
    right: -50px;
    background: rgba(76, 175, 80, 0.15);
}

.blob-2 {
    width: 150px;
    height: 150px;
    bottom: -50px;
    left: -50px;
    background: rgba(139, 195, 74, 0.15);
}

.blob-3 {
    width: 100px;
    height: 100px;
    top: 30%;
    left: 20%;
    background: rgba(165, 214, 167, 0.2);
}

.leaf-icon {
    width: 50px;
    height: 50px;
    background: #4caf50;
    border-radius: 50% 50% 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    color: white;
    font-size: 1.3rem;
    transform: rotate(15deg);
    box-shadow: 0 10px 20px rgba(76, 175, 80, 0.3);
}

.nature-input-group {
    position: relative;
    margin-bottom: 20px;
    z-index: 2;
}

.nature-input-group i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #66bb6a;
    z-index: 2;
    font-size: 0.9rem;
}

.nature-input-group input {
    width: 100%;
    padding: 14px 14px 14px 45px;
    background: rgba(255, 255, 255, 0.7);
    border: 2px solid transparent;
    border-radius: 25px;
    color: #1e3a1e;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.nature-input-group input:focus {
    outline: none;
    border-color: #66bb6a;
    background: white;
    box-shadow: 0 0 0 6px rgba(102, 187, 106, 0.1);
}

.nature-underline {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #66bb6a;
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nature-input-group input:focus ~ .nature-underline {
    width: 80%;
}

.nature-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #66bb6a;
    cursor: pointer;
}

.nature-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    z-index: 2;
    position: relative;
}

.nature-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #2e7d32;
}

.nature-checkbox input {
    display: none;
}

.nature-checkmark {
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid #66bb6a;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.7rem;
}

.nature-checkbox input:checked + .nature-checkmark {
    background: #66bb6a;
    color: white;
}

.nature-link {
    color: #66bb6a;
    text-decoration: none;
    font-size: 0.8rem;
    border-bottom: 1px dashed #66bb6a;
}

.form-btn.nature-btn {
    width: 100%;
    padding: 14px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    box-shadow: 0 8px 20px rgba(76, 175, 80, 0.3);
}

.form-btn.nature-btn:hover {
    background: #43a047;
    transform: translateY(-2px);
    box-shadow: 0 12px 25px rgba(76, 175, 80, 0.4);
}

.nature-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #2e7d32;
}

.nature-signup {
    color: #4caf50;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}`,
    js: `// Nature Organic Login
document.addEventListener('DOMContentLoaded', function() {
    const natureForm = document.querySelector('.nature-form');
    
    if (natureForm) {
        // Form submission
        natureForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showNatureNotification('Please fill all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.nature-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Signing in...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome!</span> <i class="fas fa-check"></i>';
                showNatureNotification('Welcome back to nature!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('input[type="checkbox"]').checked = true;
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const natureToggle = natureForm.querySelector('.nature-toggle');
        if (natureToggle) {
            natureToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showNatureNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #e8f5e9;
            border: 2px solid \${type === 'success' ? '#4caf50' : '#f44336'};
            border-radius: 30px;
            color: \${type === 'success' ? '#2e7d32' : '#c62828'};
            padding: 12px 24px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(76, 175, 80, 0.2);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 36: Holographic Futuristic Login
// ====================================================================
form36: {
    name: "Holographic Futuristic Login",
    category: "login modern futuristic",
    html: `<div class="form-container holographic-bg">
    <div class="holographic-grid"></div>
    <div class="holographic-overlay"></div>
    <div class="form-header">
        <div class="holographic-icon">
            <i class="fas fa-fingerprint"></i>
        </div>
        <h3 class="holographic-title">BIOMETRIC ACCESS</h3>
        <p class="holographic-subtitle">Secure identity verification</p>
    </div>
    <form class="holographic-form">
        <div class="holographic-scan-area">
            <div class="scan-line"></div>
            <i class="fas fa-qrcode"></i>
            <span>Place finger on scanner</span>
        </div>
        <div class="holographic-divider">
            <span>or use credentials</span>
        </div>
        <div class="holographic-input-group">
            <div class="holographic-label">
                <i class="fas fa-id-card"></i>
                <span>USER ID</span>
            </div>
            <input type="text" placeholder="Enter your ID" required class="holographic-input">
            <div class="holographic-glow"></div>
        </div>
        <div class="holographic-input-group">
            <div class="holographic-label">
                <i class="fas fa-key"></i>
                <span>PASSKEY</span>
            </div>
            <input type="password" placeholder="Enter passkey" required class="holographic-input">
            <button type="button" class="holographic-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="holographic-glow"></div>
        </div>
        <label class="holographic-checkbox">
            <input type="checkbox" checked>
            <span class="holographic-checkmark">
                <i class="fas fa-check"></i>
            </span>
            <span>Enable biometric sync</span>
        </label>
        <button type="submit" class="form-btn holographic-btn">
            <span>VERIFY IDENTITY</span>
            <i class="fas fa-scan"></i>
            <div class="btn-hologram"></div>
        </button>
        <div class="holographic-status">
            <span class="status-led"></span>
            <span class="status-message">System secure · 256-bit encryption</span>
        </div>
    </form>
</div>`,
    css: `.holographic-bg {
    background: linear-gradient(135deg, #0a192f, #112240);
    border-radius: 16px;
    padding: 25px;
    color: #64ffda;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(100, 255, 218, 0.3);
    box-shadow: 0 0 30px rgba(100, 255, 218, 0.1);
    max-height: 280px;
    overflow-y: auto;
}

.holographic-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(100, 255, 218, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(100, 255, 218, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    transform: perspective(500px) rotateX(60deg);
    transform-origin: top;
    pointer-events: none;
}

.holographic-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 70%);
    pointer-events: none;
}

.holographic-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #64ffda;
    text-shadow: 0 0 10px #64ffda, 0 0 20px #64ffda;
    animation: hologram-pulse 2s infinite;
}

@keyframes hologram-pulse {
    0%, 100% { opacity: 1; text-shadow: 0 0 10px #64ffda, 0 0 20px #64ffda; }
    50% { opacity: 0.8; text-shadow: 0 0 20px #64ffda, 0 0 40px #64ffda; }
}

.holographic-title {
    text-align: center;
    color: #64ffda;
    font-size: 1rem;
    letter-spacing: 4px;
    margin-bottom: 5px;
    text-shadow: 0 0 5px #64ffda;
}

.holographic-subtitle {
    text-align: center;
    color: #8892b0;
    font-size: 0.7rem;
    margin-bottom: 20px;
}

.holographic-scan-area {
    background: rgba(100, 255, 218, 0.05);
    border: 1px solid #64ffda;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.holographic-scan-area .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #64ffda;
    box-shadow: 0 0 10px #64ffda;
    animation: scan-move 2s linear infinite;
}

@keyframes scan-move {
    0% { transform: translateY(0); }
    100% { transform: translateY(100px); }
}

.holographic-scan-area i {
    font-size: 2rem;
    color: #64ffda;
    filter: drop-shadow(0 0 5px #64ffda);
}

.holographic-divider {
    display: flex;
    align-items: center;
    margin: 15px 0;
    color: #64ffda;
    font-size: 0.7rem;
}

.holographic-divider::before,
.holographic-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
}

.holographic-input-group {
    margin-bottom: 20px;
    position: relative;
}

.holographic-label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #64ffda;
    font-size: 0.7rem;
    margin-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.holographic-input {
    width: 100%;
    padding: 14px;
    background: rgba(100, 255, 218, 0.03);
    border: 1px solid #64ffda;
    border-radius: 4px;
    color: #64ffda;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.holographic-input:focus {
    outline: none;
    background: rgba(100, 255, 218, 0.1);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
}

.holographic-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #64ffda;
    box-shadow: 0 0 10px #64ffda;
    transition: width 0.3s ease;
}

.holographic-input:focus ~ .holographic-glow {
    width: 100%;
}

.holographic-toggle {
    position: absolute;
    right: 14px;
    bottom: 14px;
    background: none;
    border: none;
    color: #64ffda;
    cursor: pointer;
}

.holographic-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #8892b0;
    margin-bottom: 20px;
}

.holographic-checkbox input {
    display: none;
}

.holographic-checkmark {
    width: 18px;
    height: 18px;
    border: 1px solid #64ffda;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
}

.holographic-checkbox input:checked + .holographic-checkmark {
    background: #64ffda;
    color: #0a192f;
}

.form-btn.holographic-btn {
    position: relative;
    width: 100%;
    padding: 14px;
    background: transparent;
    color: #64ffda;
    border: 1px solid #64ffda;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 15px;
}

.btn-hologram {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.form-btn.holographic-btn:hover .btn-hologram {
    left: 100%;
}

.holographic-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
}

.status-led {
    width: 6px;
    height: 6px;
    background: #64ffda;
    border-radius: 50%;
    box-shadow: 0 0 10px #64ffda;
    animation: led-blink 2s infinite;
}

@keyframes led-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.status-message {
    color: #8892b0;
    font-size: 0.6rem;
    letter-spacing: 1px;
}`,
    js: `// Holographic Futuristic Login
document.addEventListener('DOMContentLoaded', function() {
    const holographicForm = document.querySelector('.holographic-form');
    
    if (holographicForm) {
        // Form submission
        holographicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userId = this.querySelector('input[placeholder="Enter your ID"]').value;
            const passkey = this.querySelector('input[placeholder="Enter passkey"]').value;
            
            if (!userId || !passkey) {
                showHolographicNotification('IDENTITY VERIFICATION FAILED', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.holographic-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>VERIFYING...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>IDENTITY CONFIRMED</span> <i class="fas fa-check"></i>';
                showHolographicNotification('Biometric scan successful', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('input[type="checkbox"]').checked = true;
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const holographicToggle = holographicForm.querySelector('.holographic-toggle');
        if (holographicToggle) {
            holographicToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.holographic-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showHolographicNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0a192f;
            border: 1px solid \${type === 'success' ? '#64ffda' : '#ff6b6b'};
            color: \${type === 'success' ? '#64ffda' : '#ff6b6b'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.8rem;
            letter-spacing: 1px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? 'rgba(100, 255, 218, 0.3)' : 'rgba(255, 107, 107, 0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 37: Liquid Morph Login
// ====================================================================
form37: {
    name: "Liquid Morph Login",
    category: "login modern animated",
    html: `<div class="form-container liquid-morph-bg">
    <div class="liquid-blob"></div>
    <div class="liquid-blob blob-2"></div>
    <div class="liquid-blob blob-3"></div>
    <div class="form-header">
        <div class="liquid-icon">
            <i class="fas fa-droplet"></i>
        </div>
        <h3>Fluid Access</h3>
        <p>Seamless authentication</p>
    </div>
    <form class="liquid-form">
        <div class="liquid-input-wrapper">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email address" required>
            <div class="liquid-border"></div>
        </div>
        <div class="liquid-input-wrapper">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required>
            <button type="button" class="liquid-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="liquid-border"></div>
        </div>
        <div class="liquid-options">
            <label class="liquid-check">
                <input type="checkbox">
                <span class="liquid-checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span>Stay signed in</span>
            </label>
            <a href="#" class="liquid-link">Recover</a>
        </div>
        <button type="submit" class="form-btn liquid-btn">
            <span>Flow In</span>
            <i class="fas fa-water"></i>
            <div class="liquid-ripple"></div>
        </button>
        <div class="liquid-footer">
            <span>Need an account?</span>
            <a href="#" class="liquid-signup">Create one</a>
        </div>
    </form>
</div>`,
    css: `.liquid-morph-bg {
    background: linear-gradient(145deg, #0f172a, #1e293b);
    border-radius: 40px 40px 40px 40px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.liquid-blob {
    position: absolute;
    background: rgba(56, 189, 248, 0.1);
    border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%;
    animation: liquid-morph 15s infinite ease-in-out;
    z-index: 1;
}

.liquid-blob:nth-child(1) {
    width: 200px;
    height: 200px;
    top: -50px;
    right: -50px;
    background: rgba(56, 189, 248, 0.1);
}

.blob-2 {
    width: 150px;
    height: 150px;
    bottom: -50px;
    left: -50px;
    background: rgba(139, 92, 246, 0.1);
    animation-delay: -3s;
}

.blob-3 {
    width: 120px;
    height: 120px;
    top: 40%;
    left: 10%;
    background: rgba(244, 114, 182, 0.1);
    animation-delay: -7s;
}

@keyframes liquid-morph {
    0%, 100% { border-radius: 60% 40% 70% 30% / 40% 60% 30% 70%; }
    33% { border-radius: 40% 60% 30% 70% / 60% 40% 70% 30%; }
    66% { border-radius: 70% 30% 60% 40% / 30% 70% 40% 60%; }
}

.liquid-icon {
    width: 50px;
    height: 50px;
    background: rgba(56, 189, 248, 0.2);
    border-radius: 40% 60% 30% 70% / 50% 40% 60% 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    color: #38bdf8;
    font-size: 1.3rem;
    animation: liquid-rotate 10s infinite;
}

@keyframes liquid-rotate {
    0%, 100% { transform: rotate(0deg); }
    33% { transform: rotate(10deg); }
    66% { transform: rotate(-5deg); }
}

.liquid-input-wrapper {
    position: relative;
    margin-bottom: 20px;
    z-index: 2;
}

.liquid-input-wrapper i {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #38bdf8;
    z-index: 2;
}

.liquid-input-wrapper input {
    width: 100%;
    padding: 16px 16px 16px 45px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.liquid-input-wrapper input:focus {
    outline: none;
    border-color: #38bdf8;
    background: rgba(56, 189, 248, 0.1);
}

.liquid-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #38bdf8;
    border-radius: 30px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.liquid-input-wrapper input:focus ~ .liquid-border {
    opacity: 0.3;
}

.liquid-toggle {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    z-index: 3;
}

.liquid-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    z-index: 2;
    position: relative;
}

.liquid-check {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #cbd5e1;
}

.liquid-check input {
    display: none;
}

.liquid-checkmark {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #38bdf8;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.7rem;
}

.liquid-check input:checked + .liquid-checkmark {
    background: #38bdf8;
    color: white;
}

.liquid-link {
    color: #38bdf8;
    text-decoration: none;
    font-size: 0.8rem;
}

.form-btn.liquid-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: #38bdf8;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    z-index: 2;
    box-shadow: 0 8px 20px rgba(56, 189, 248, 0.3);
}

.liquid-ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
    background-size: 10px 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.form-btn.liquid-btn:hover .liquid-ripple {
    opacity: 0.2;
}

.liquid-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #94a3b8;
    z-index: 2;
    position: relative;
}

.liquid-signup {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;
}`,
    js: `// Liquid Morph Login
document.addEventListener('DOMContentLoaded', function() {
    const liquidForm = document.querySelector('.liquid-form');
    
    if (liquidForm) {
        // Form submission
        liquidForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showLiquidNotification('Please fill all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.liquid-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Flowing...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome!</span> <i class="fas fa-check"></i>';
                showLiquidNotification('Login successful!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 1500);
            }, 2000);
        });
        
        // Password toggle
        const liquidToggle = liquidForm.querySelector('.liquid-toggle');
        if (liquidToggle) {
            liquidToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showLiquidNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(145deg, #0f172a, #1e293b);
            border: 1px solid \${type === 'success' ? '#38bdf8' : '#ef4444'};
            border-radius: 30px;
            color: white;
            padding: 12px 24px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px \${type === 'success' ? 'rgba(56, 189, 248, 0.3)' : 'rgba(239, 68, 68, 0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 38: Multi-Step Signup Wizard
// ====================================================================
form38: {
    name: "Multi-Step Signup Wizard",
    category: "signup modern wizard",
    html: `<div class="form-container multi-step-signup-bg">
    <div class="step-indicator">
        <div class="step-item active">
            <div class="step-number">1</div>
            <span class="step-label">Account</span>
        </div>
        <div class="step-line"></div>
        <div class="step-item">
            <div class="step-number">2</div>
            <span class="step-label">Profile</span>
        </div>
        <div class="step-line"></div>
        <div class="step-item">
            <div class="step-number">3</div>
            <span class="step-label">Confirm</span>
        </div>
    </div>
    
    <div class="step-content active" data-step="1">
        <div class="form-header">
            <h3>Create Account</h3>
            <p>Step 1: Account information</p>
        </div>
        <form class="multi-step-form step-1-form">
            <div class="step-input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email address" required>
                <div class="input-highlight"></div>
            </div>
            <div class="step-input-group">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required>
                <button type="button" class="step-password-toggle">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="input-highlight"></div>
            </div>
            <div class="step-input-group">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Confirm password" required>
                <div class="input-highlight"></div>
            </div>
            <div class="step-password-strength">
                <div class="strength-label">Password strength</div>
                <div class="strength-meter">
                    <div class="strength-bar"></div>
                </div>
            </div>
            <button type="button" class="step-next-btn">
                <span>Continue</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </form>
    </div>
    
    <div class="step-content" data-step="2">
        <div class="form-header">
            <h3>Profile Details</h3>
            <p>Step 2: Tell us about yourself</p>
        </div>
        <form class="multi-step-form step-2-form">
            <div class="step-input-group">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Full name" required>
                <div class="input-highlight"></div>
            </div>
            <div class="step-input-group">
                <i class="fas fa-phone"></i>
                <input type="tel" placeholder="Phone number">
                <div class="input-highlight"></div>
            </div>
            <div class="step-radio-group">
                <label class="step-radio">
                    <input type="radio" name="account-type" value="personal" checked>
                    <span class="step-radio-mark"></span>
                    <span class="step-radio-label">Personal</span>
                </label>
                <label class="step-radio">
                    <input type="radio" name="account-type" value="business">
                    <span class="step-radio-mark"></span>
                    <span class="step-radio-label">Business</span>
                </label>
            </div>
            <div class="step-buttons">
                <button type="button" class="step-prev-btn">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                </button>
                <button type="button" class="step-next-btn">
                    <span>Continue</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </form>
    </div>
    
    <div class="step-content" data-step="3">
        <div class="form-header">
            <h3>Almost Done!</h3>
            <p>Step 3: Review and confirm</p>
        </div>
        <form class="multi-step-form step-3-form">
            <div class="step-summary">
                <div class="summary-row">
                    <span class="summary-label">Email:</span>
                    <span class="summary-value">user@example.com</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Name:</span>
                    <span class="summary-value">John Doe</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">Account:</span>
                    <span class="summary-value">Personal</span>
                </div>
            </div>
            <div class="step-checkbox-group">
                <label class="step-checkbox">
                    <input type="checkbox" required>
                    <span class="step-checkmark">
                        <i class="fas fa-check"></i>
                    </span>
                    <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </label>
            </div>
            <div class="step-buttons">
                <button type="button" class="step-prev-btn">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                </button>
                <button type="submit" class="step-submit-btn">
                    <span>Create Account</span>
                    <i class="fas fa-check"></i>
                </button>
            </div>
        </form>
    </div>
</div>`,
    css: `.multi-step-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 25px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    border: 1px solid #f0f0f0;
    max-height: 280px;
    overflow-y: auto;
}

.step-indicator {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 5px;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1;
}

.step-number {
    width: 32px;
    height: 32px;
    background: #f3f4f6;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: #6b7280;
    transition: all 0.3s ease;
}

.step-item.active .step-number {
    background: #6366f1;
    color: white;
    box-shadow: 0 6px 12px rgba(99, 102, 241, 0.2);
}

.step-label {
    font-size: 0.65rem;
    color: #9ca3af;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.step-item.active .step-label {
    color: #6366f1;
}

.step-line {
    flex: 0.5;
    height: 2px;
    background: #e5e7eb;
    margin: 0 5px;
    position: relative;
    top: -8px;
}

.step-content {
    display: none;
}

.step-content.active {
    display: block;
    animation: fadeIn 0.4s ease;
}

.step-input-group {
    position: relative;
    margin-bottom: 20px;
}

.step-input-group i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    z-index: 2;
}

.step-input-group input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    border: 2px solid #f3f4f6;
    border-radius: 16px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    background: #fafafa;
}

.step-input-group input:focus {
    outline: none;
    border-color: #6366f1;
    background: white;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
}

.input-highlight {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: all 0.3s ease;
    transform: translateX(-50%);
    border-radius: 2px;
}

.step-input-group input:focus ~ .input-highlight {
    width: calc(100% - 32px);
}

.step-password-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    z-index: 3;
}

.step-password-strength {
    margin-bottom: 25px;
}

.strength-label {
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 6px;
}

.strength-meter {
    height: 6px;
    background: #f3f4f6;
    border-radius: 3px;
    overflow: hidden;
}

.strength-bar {
    width: 40%;
    height: 100%;
    background: #f59e0b;
    border-radius: 3px;
    transition: width 0.3s ease;
}

.step-radio-group {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
}

.step-radio {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.85rem;
    color: #4b5563;
}

.step-radio input {
    display: none;
}

.step-radio-mark {
    width: 18px;
    height: 18px;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease;
}

.step-radio input:checked + .step-radio-mark {
    border-color: #6366f1;
    border-width: 6px;
}

.step-buttons {
    display: flex;
    gap: 12px;
    margin-top: 25px;
}

.step-prev-btn,
.step-next-btn,
.step-submit-btn {
    padding: 14px 24px;
    border: none;
    border-radius: 16px;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
}

.step-prev-btn {
    background: #f3f4f6;
    color: #4b5563;
}

.step-prev-btn:hover {
    background: #e5e7eb;
}

.step-next-btn {
    background: #6366f1;
    color: white;
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.2);
}

.step-next-btn:hover {
    background: #4f52e0;
    transform: translateY(-2px);
}

.step-submit-btn {
    background: #10b981;
    color: white;
    box-shadow: 0 8px 16px rgba(16, 185, 129, 0.2);
}

.step-submit-btn:hover {
    background: #0ea271;
    transform: translateY(-2px);
}

.step-summary {
    background: #f9fafb;
    border-radius: 16px;
    padding: 16px;
    margin-bottom: 20px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #edf2f7;
}

.summary-row:last-child {
    border-bottom: none;
}

.summary-label {
    font-size: 0.8rem;
    color: #6b7280;
}

.summary-value {
    font-size: 0.8rem;
    font-weight: 600;
    color: #1f2937;
}

.step-checkbox-group {
    margin-bottom: 25px;
}

.step-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #4b5563;
}

.step-checkbox input {
    display: none;
}

.step-checkmark {
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid #d1d5db;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.65rem;
    flex-shrink: 0;
}

.step-checkbox input:checked + .step-checkmark {
    background: #6366f1;
    border-color: #6366f1;
    color: white;
}

.step-checkbox a {
    color: #6366f1;
    text-decoration: none;
}`,
    js: `// Multi-Step Signup Wizard
document.addEventListener('DOMContentLoaded', function() {
    const stepContainer = document.querySelector('.multi-step-signup-bg');
    if (!stepContainer) return;
    
    let currentStep = 1;
    const stepContents = stepContainer.querySelectorAll('.step-content');
    const stepItems = stepContainer.querySelectorAll('.step-item');
    
    function updateStep(step) {
        // Update step content
        stepContents.forEach(content => content.classList.remove('active'));
        stepContainer.querySelector(\`.step-content[data-step="\${step}"]\`).classList.add('active');
        
        // Update step indicators
        stepItems.forEach((item, index) => {
            if (index + 1 === step) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        currentStep = step;
    }
    
    // Password strength checker
    const passwordInput = stepContainer.querySelector('.step-1-form input[type="password"]');
    const strengthBar = stepContainer.querySelector('.strength-bar');
    
    if (passwordInput && strengthBar) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            if (password.length >= 8) strength += 25;
            if (/[A-Z]/.test(password)) strength += 25;
            if (/[0-9]/.test(password)) strength += 25;
            if (/[^A-Za-z0-9]/.test(password)) strength += 25;
            
            strengthBar.style.width = strength + '%';
            
            if (strength < 50) {
                strengthBar.style.background = '#ef4444';
            } else if (strength < 75) {
                strengthBar.style.background = '#f59e0b';
            } else {
                strengthBar.style.background = '#10b981';
            }
        });
    }
    
    // Next buttons
    stepContainer.querySelectorAll('.step-next-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep < 3) {
                // Simulate data transfer between steps
                if (currentStep === 1) {
                    const email = stepContainer.querySelector('.step-1-form input[type="email"]').value;
                    if (email) {
                        stepContainer.querySelector('.summary-row:first-child .summary-value').textContent = email;
                    }
                }
                if (currentStep === 2) {
                    const name = stepContainer.querySelector('.step-2-form input[type="text"]').value;
                    const accountType = stepContainer.querySelector('input[name="account-type"]:checked + .step-radio-mark + .step-radio-label');
                    if (name) {
                        stepContainer.querySelector('.summary-row:nth-child(2) .summary-value').textContent = name;
                    }
                    if (accountType) {
                        stepContainer.querySelector('.summary-row:nth-child(3) .summary-value').textContent = accountType.textContent;
                    }
                }
                updateStep(currentStep + 1);
            }
        });
    });
    
    // Previous buttons
    stepContainer.querySelectorAll('.step-prev-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                updateStep(currentStep - 1);
            }
        });
    });
    
    // Form submission
    const submitBtn = stepContainer.querySelector('.step-submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const checkbox = stepContainer.querySelector('.step-checkbox input');
            if (checkbox && !checkbox.checked) {
                showStepNotification('Please accept the terms and conditions', 'error');
                return;
            }
            
            this.innerHTML = '<span>Creating Account...</span> <i class="fas fa-spinner fa-spin"></i>';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<span>Account Created!</span> <i class="fas fa-check"></i>';
                showStepNotification('Welcome! Your account has been created', 'success');
                
                setTimeout(() => {
                    this.innerHTML = '<span>Create Account</span> <i class="fas fa-check"></i>';
                    this.disabled = false;
                    updateStep(1);
                    stepContainer.querySelectorAll('form').forEach(form => form.reset());
                }, 1500);
            }, 2000);
        });
    }
    
    // Password toggle
    stepContainer.querySelectorAll('.step-password-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
    
    function showStepNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 39: Gamified Achievement Signup
// ====================================================================
form39: {
    name: "Gamified Achievement Signup",
    category: "signup modern gamified",
    html: `<div class="form-container gamified-signup-bg">
    <div class="achievement-badge">
        <i class="fas fa-trophy"></i>
        <span class="achievement-points">+100 XP</span>
    </div>
    <div class="form-header">
        <div class="gamified-icon">
            <i class="fas fa-gamepad"></i>
        </div>
        <h3>Level Up Your Account</h3>
        <p>Complete challenges to unlock rewards</p>
    </div>
    <form class="gamified-form">
        <div class="quest-item completed">
            <div class="quest-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="quest-content">
                <span class="quest-title">Choose username</span>
                <span class="quest-xp">+50 XP</span>
            </div>
        </div>
        <div class="gamified-input-group">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Enter username" required class="gamified-input">
            <div class="xp-progress"></div>
            <span class="input-xp">+50</span>
        </div>
        
        <div class="quest-item active">
            <div class="quest-icon">
                <i class="fas fa-lock-open"></i>
            </div>
            <div class="quest-content">
                <span class="quest-title">Secure your account</span>
                <span class="quest-xp">+100 XP</span>
            </div>
        </div>
        <div class="gamified-input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" placeholder="Email address" required class="gamified-input">
            <span class="input-xp">+25</span>
        </div>
        <div class="gamified-input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required class="gamified-input">
            <button type="button" class="gamified-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <span class="input-xp">+50</span>
        </div>
        
        <div class="quest-item locked">
            <div class="quest-icon">
                <i class="fas fa-shield-alt"></i>
            </div>
            <div class="quest-content">
                <span class="quest-title">Verify email</span>
                <span class="quest-xp">+75 XP</span>
            </div>
        </div>
        
        <div class="gamified-rewards">
            <div class="reward-badge">
                <i class="fas fa-medal"></i>
                <span>Bronze</span>
            </div>
            <div class="reward-progress">
                <div class="progress-bar" style="width: 65%"></div>
            </div>
            <span class="reward-text">65/100 XP</span>
        </div>
        
        <button type="submit" class="form-btn gamified-btn">
            <span>START QUEST</span>
            <i class="fas fa-arrow-right"></i>
            <div class="btn-glow"></div>
        </button>
        <div class="gamified-footer">
            <span>Already have an account?</span>
            <a href="#" class="gamified-link">Login for bonus XP</a>
        </div>
    </form>
</div>`,
    css: `.gamified-signup-bg {
    background: linear-gradient(145deg, #1a1e2c, #151928);
    border-radius: 24px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.achievement-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 30px;
    padding: 6px 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #1a1e2c;
    font-size: 0.7rem;
    font-weight: 600;
    box-shadow: 0 8px 16px rgba(245, 158, 11, 0.3);
    animation: pulse-achievement 2s infinite;
}

@keyframes pulse-achievement {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.gamified-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.8rem;
    color: white;
    transform: rotate(10deg);
    box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);
}

.quest-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    margin-bottom: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.quest-item.completed {
    background: rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.3);
}

.quest-item.active {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.2);
}

.quest-item.locked {
    opacity: 0.5;
    filter: grayscale(0.8);
}

.quest-icon {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.quest-item.completed .quest-icon {
    background: #10b981;
}

.quest-item.active .quest-icon {
    background: #6366f1;
    box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
}

.quest-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quest-title {
    font-size: 0.8rem;
    font-weight: 500;
}

.quest-xp {
    font-size: 0.7rem;
    color: #fbbf24;
    font-weight: 600;
}

.gamified-input-group {
    position: relative;
    margin-bottom: 20px;
}

.gamified-input-group i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    z-index: 2;
}

.gamified-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.gamified-input:focus {
    outline: none;
    border-color: #6366f1;
    background: rgba(99, 102, 241, 0.1);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

.xp-progress {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 2px;
    transition: width 0.5s ease;
}

.gamified-input:focus ~ .xp-progress {
    width: 100%;
}

.input-xp {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #fbbf24;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 4px 8px;
    background: rgba(251, 191, 36, 0.1);
    border-radius: 20px;
}

.gamified-toggle {
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.gamified-rewards {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0;
    padding: 12px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
}

.reward-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 12px;
    background: linear-gradient(135deg, #92400e, #b45309);
    border-radius: 12px;
}

.reward-badge i {
    font-size: 1rem;
    color: #fbbf24;
}

.reward-badge span {
    font-size: 0.55rem;
    font-weight: 600;
    color: white;
}

.reward-progress {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.reward-progress .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    border-radius: 4px;
}

.reward-text {
    font-size: 0.7rem;
    color: #fbbf24;
    font-weight: 600;
}

.form-btn.gamified-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 0 12px 24px rgba(99, 102, 241, 0.4);
}

.btn-glow {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: btn-glide 2s infinite;
}

@keyframes btn-glide {
    0% { left: -100%; }
    100% { left: 100%; }
}

.gamified-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #94a3b8;
}

.gamified-link {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}`,
    js: `// Gamified Achievement Signup
document.addEventListener('DOMContentLoaded', function() {
    const gamifiedForm = document.querySelector('.gamified-form');
    
    if (gamifiedForm) {
        let xp = 65;
        const xpDisplay = gamifiedForm.querySelector('.reward-text');
        const progressBar = gamifiedForm.querySelector('.reward-progress .progress-bar');
        
        // Form submission
        gamifiedForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.querySelector('input[placeholder="Enter username"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!username || !email || !password) {
                showGamifiedNotification('Complete all quests first!', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.gamified-btn');
            const originalText = submitBtn.innerHTML;
            
            // Add XP
            xp += 100;
            if (xp > 100) xp = 100;
            progressBar.style.width = xp + '%';
            xpDisplay.textContent = xp + '/100 XP';
            
            if (xp >= 100) {
                gamifiedForm.querySelector('.quest-item.locked').classList.add('active');
                gamifiedForm.querySelector('.reward-badge').innerHTML = '<i class="fas fa-crown"></i><span>Gold</span>';
            }
            
            submitBtn.innerHTML = '<span>COMPLETING QUEST...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>QUEST COMPLETE!</span> <i class="fas fa-trophy"></i>';
                showGamifiedNotification('+100 XP! Welcome to the game!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // XP gain on input
        gamifiedForm.querySelectorAll('.gamified-input').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    const xpValue = parseInt(this.parentElement.querySelector('.input-xp').textContent);
                    xp = Math.min(xp + xpValue, 100);
                    progressBar.style.width = xp + '%';
                    xpDisplay.textContent = xp + '/100 XP';
                    
                    if (xp >= 100) {
                        gamifiedForm.querySelector('.quest-item.locked').classList.add('active');
                        gamifiedForm.querySelector('.reward-badge').innerHTML = '<i class="fas fa-crown"></i><span>Gold</span>';
                    }
                }
            });
        });
        
        // Password toggle
        const gamifiedToggle = gamifiedForm.querySelector('.gamified-toggle');
        if (gamifiedToggle) {
            gamifiedToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.gamified-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showGamifiedNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 40: Social Connect Signup
// ====================================================================
form40: {
    name: "Social Connect Signup",
    category: "signup modern social",
    html: `<div class="form-container social-connect-bg">
    <div class="social-illustration">
        <i class="fas fa-share-alt"></i>
    </div>
    <div class="form-header">
        <h3>Join the Community</h3>
        <p>Connect with friends and discover more</p>
    </div>
    <form class="social-form">
        <div class="social-buttons-grid">
            <button type="button" class="social-connect-btn google">
                <i class="fab fa-google"></i>
                <span>Google</span>
            </button>
            <button type="button" class="social-connect-btn facebook">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </button>
            <button type="button" class="social-connect-btn twitter">
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
            </button>
            <button type="button" class="social-connect-btn github">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
            </button>
            <button type="button" class="social-connect-btn apple">
                <i class="fab fa-apple"></i>
                <span>Apple</span>
            </button>
            <button type="button" class="social-connect-btn discord">
                <i class="fab fa-discord"></i>
                <span>Discord</span>
            </button>
        </div>
        
        <div class="social-divider">
            <span class="divider-line"></span>
            <span class="divider-text">or sign up with email</span>
            <span class="divider-line"></span>
        </div>
        
        <div class="social-input-row">
            <div class="social-input-group">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Full name" required>
            </div>
            <div class="social-input-group">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email address" required>
            </div>
        </div>
        
        <div class="social-input-group">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Create password" required>
            <button type="button" class="social-toggle">
                <i class="fas fa-eye"></i>
            </button>
        </div>
        
        <div class="social-terms">
            <label class="social-checkbox">
                <input type="checkbox" checked>
                <span class="social-checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span>I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></span>
            </label>
        </div>
        
        <button type="submit" class="form-btn social-submit-btn">
            <span>Create Account</span>
            <i class="fas fa-handshake"></i>
        </button>
        
        <div class="social-footer">
            <span>Already have an account?</span>
            <a href="#" class="social-link">Sign in</a>
        </div>
    </form>
</div>`,
    css: `.social-connect-bg {
    background: white;
    border-radius: 28px;
    padding: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #f1f5f9;
    max-height: 280px;
    overflow-y: auto;
}

.social-illustration {
    width: 70px;
    height: 70px;
    background: linear-gradient(145deg, #f8fafc, #eef2f6);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 2rem;
    color: #6366f1;
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.15);
}

.social-buttons-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 25px;
}

.social-connect-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 12px 8px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #334155;
}

.social-connect-btn i {
    font-size: 1.2rem;
}

.social-connect-btn span {
    font-size: 0.65rem;
    font-weight: 500;
}

.social-connect-btn.google:hover {
    background: #ea4335;
    border-color: #ea4335;
    color: white;
}

.social-connect-btn.facebook:hover {
    background: #1877f2;
    border-color: #1877f2;
    color: white;
}

.social-connect-btn.twitter:hover {
    background: #1da1f2;
    border-color: #1da1f2;
    color: white;
}

.social-connect-btn.github:hover {
    background: #333;
    border-color: #333;
    color: white;
}

.social-connect-btn.apple:hover {
    background: #000;
    border-color: #000;
    color: white;
}

.social-connect-btn.discord:hover {
    background: #5865f2;
    border-color: #5865f2;
    color: white;
}

.social-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0;
}

.divider-line {
    flex: 1;
    height: 1px;
    background: #e2e8f0;
}

.divider-text {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.social-input-row {
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
}

.social-input-group {
    position: relative;
    flex: 1;
    margin-bottom: 15px;
}

.social-input-group i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.85rem;
}

.social-input-group input {
    width: 100%;
    padding: 14px 14px 14px 42px;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
    background: #f8fafc;
}

.social-input-group input:focus {
    outline: none;
    border-color: #6366f1;
    background: white;
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.social-toggle {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.social-terms {
    margin: 20px 0;
}

.social-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #475569;
}

.social-checkbox input {
    display: none;
}

.social-checkmark {
    width: 18px;
    height: 18px;
    background: white;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.65rem;
    flex-shrink: 0;
}

.social-checkbox input:checked + .social-checkmark {
    background: #6366f1;
    border-color: #6366f1;
    color: white;
}

.social-checkbox a {
    color: #6366f1;
    text-decoration: none;
}

.form-btn.social-submit-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(145deg, #6366f1, #4f52e0);
    color: white;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    box-shadow: 0 12px 24px rgba(99, 102, 241, 0.25);
}

.form-btn.social-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 30px rgba(99, 102, 241, 0.35);
}

.social-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #64748b;
}

.social-link {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}`,
    js: `// Social Connect Signup
document.addEventListener('DOMContentLoaded', function() {
    const socialForm = document.querySelector('.social-form');
    
    if (socialForm) {
        // Form submission
        socialForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Create password"]').value;
            const terms = this.querySelector('.social-checkbox input').checked;
            
            if (!name || !email || !password) {
                showSocialNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!terms) {
                showSocialNotification('Please accept the terms and privacy policy', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.social-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating Account...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to the Community!</span> <i class="fas fa-handshake"></i>';
                showSocialNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.social-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Social login buttons
        socialForm.querySelectorAll('.social-connect-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.classList.contains('google') ? 'Google' :
                               this.classList.contains('facebook') ? 'Facebook' :
                               this.classList.contains('twitter') ? 'Twitter' :
                               this.classList.contains('github') ? 'GitHub' :
                               this.classList.contains('apple') ? 'Apple' : 'Discord';
                
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Connecting...</span>';
                
                setTimeout(() => {
                    this.innerHTML = \`<i class="fab fa-\${provider.toLowerCase()}"></i><span>\${provider}</span>\`;
                    showSocialNotification(\`Connected with \${provider}!\`, 'success');
                }, 1000);
            });
        });
        
        // Password toggle
        const socialToggle = socialForm.querySelector('.social-toggle');
        if (socialToggle) {
            socialToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showSocialNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 14px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 41: Gradient Mesh Signup
// ====================================================================
form41: {
    name: "Gradient Mesh Signup",
    category: "signup modern gradient",
    html: `<div class="form-container gradient-mesh-bg">
    <div class="mesh-overlay"></div>
    <div class="form-header">
        <div class="mesh-icon">
            <i class="fas fa-palette"></i>
        </div>
        <h3>Create Account</h3>
        <p>Start your colorful journey</p>
    </div>
    <form class="mesh-form">
        <div class="mesh-input-container">
            <div class="mesh-input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Full name" required class="mesh-input">
                <div class="mesh-border"></div>
            </div>
        </div>
        
        <div class="mesh-input-container">
            <div class="mesh-input-wrapper">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email address" required class="mesh-input">
                <div class="mesh-border"></div>
            </div>
        </div>
        
        <div class="mesh-input-row">
            <div class="mesh-input-wrapper half">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required class="mesh-input">
                <button type="button" class="mesh-toggle">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="mesh-border"></div>
            </div>
            <div class="mesh-input-wrapper half">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Confirm" required class="mesh-input">
                <div class="mesh-border"></div>
            </div>
        </div>
        
        <div class="mesh-preferences">
            <span class="preferences-label">Interests (optional)</span>
            <div class="mesh-tags">
                <label class="mesh-tag">
                    <input type="checkbox">
                    <span class="tag-text">Design</span>
                </label>
                <label class="mesh-tag">
                    <input type="checkbox">
                    <span class="tag-text">Development</span>
                </label>
                <label class="mesh-tag">
                    <input type="checkbox">
                    <span class="tag-text">Marketing</span>
                </label>
                <label class="mesh-tag">
                    <input type="checkbox">
                    <span class="tag-text">Photography</span>
                </label>
                <label class="mesh-tag">
                    <input type="checkbox">
                    <span class="tag-text">Music</span>
                </label>
            </div>
        </div>
        
        <label class="mesh-checkbox">
            <input type="checkbox" checked>
            <span class="mesh-checkmark">
                <i class="fas fa-check"></i>
            </span>
            <span>I want to receive updates and newsletters</span>
        </label>
        
        <button type="submit" class="form-btn mesh-btn">
            <span>Sign Up</span>
            <i class="fas fa-arrow-right"></i>
            <div class="mesh-btn-glow"></div>
        </button>
        
        <div class="mesh-footer">
            <span>Already have an account?</span>
            <a href="#" class="mesh-link">Log in</a>
        </div>
    </form>
</div>`,
    css: `.gradient-mesh-bg {
    background: linear-gradient(145deg, #4158D0, #C850C0, #FFCC70);
    background-size: 400% 400%;
    animation: mesh-shift 10s ease infinite;
    border-radius: 28px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

@keyframes mesh-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.mesh-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
}

.mesh-icon {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.8rem;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.mesh-input-container {
    margin-bottom: 15px;
}

.mesh-input-wrapper {
    position: relative;
}

.mesh-input-wrapper.half {
    width: calc(50% - 6px);
}

.mesh-input-row {
    display: flex;
    gap: 12px;
    margin-bottom: 15px;
}

.mesh-input-wrapper i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.8);
    z-index: 2;
    font-size: 0.9rem;
}

.mesh-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.mesh-input::placeholder {
    color: rgba(255, 255, 255, 0.6);
}

.mesh-input:focus {
    outline: none;
    border-color: white;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
}

.mesh-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-radius: 20px;
    transition: all 0.3s ease;
    pointer-events: none;
}

.mesh-input:focus ~ .mesh-border {
    border-color: white;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.mesh-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
}

.mesh-preferences {
    margin: 20px 0;
}

.preferences-label {
    display: block;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 10px;
}

.mesh-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.mesh-tag {
    display: inline-flex;
    cursor: pointer;
}

.mesh-tag input {
    display: none;
}

.tag-text {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    font-size: 0.75rem;
    color: white;
    transition: all 0.3s ease;
}

.mesh-tag input:checked + .tag-text {
    background: white;
    color: #4158D0;
    font-weight: 600;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.mesh-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 20px;
}

.mesh-checkbox input {
    display: none;
}

.mesh-checkmark {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.65rem;
}

.mesh-checkbox input:checked + .mesh-checkmark {
    background: white;
    border-color: white;
    color: #4158D0;
}

.form-btn.mesh-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: white;
    color: #4158D0;
    border: none;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
}

.mesh-btn-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(65, 88, 208, 0.1), transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.form-btn.mesh-btn:hover .mesh-btn-glow {
    left: 100%;
}

.mesh-footer {
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
}

.mesh-link {
    color: white;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}`,
    js: `// Gradient Mesh Signup
document.addEventListener('DOMContentLoaded', function() {
    const meshForm = document.querySelector('.mesh-form');
    
    if (meshForm) {
        // Form submission
        meshForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            const confirm = this.querySelector('input[placeholder="Confirm"]').value;
            
            if (!name || !email || !password || !confirm) {
                showMeshNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirm) {
                showMeshNotification('Passwords do not match', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.mesh-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Get selected interests
            const interests = [];
            this.querySelectorAll('.mesh-tag input:checked').forEach(tag => {
                interests.push(tag.parentElement.querySelector('.tag-text').textContent);
            });
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome Aboard!</span> <i class="fas fa-palette"></i>';
                showMeshNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.mesh-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const meshToggle = meshForm.querySelector('.mesh-toggle');
        if (meshToggle) {
            meshToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.mesh-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Tag selection animation
        meshForm.querySelectorAll('.mesh-tag').forEach(tag => {
            tag.addEventListener('click', function() {
                const input = this.querySelector('input');
                const text = this.querySelector('.tag-text');
                
                if (input.checked) {
                    text.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        text.style.transform = '';
                    }, 200);
                }
            });
        });
    }
    
    function showMeshNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 20px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 42: Neumorphic Soft UI Signup
// ====================================================================
form42: {
    name: "Neumorphic Soft UI Signup",
    category: "signup modern neumorphic",
    html: `<div class="form-container neumorphic-signup-bg">
    <div class="neumorphic-logo">
        <div class="logo-emboss">
            <i class="fas fa-cube"></i>
        </div>
    </div>
    <div class="form-header">
        <h3>Create Account</h3>
        <p>Soft and subtle registration</p>
    </div>
    <form class="neumorphic-form">
        <div class="neumorphic-field">
            <div class="neumorphic-input-wrapper">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Full name" required class="neumorphic-input">
            </div>
        </div>
        
        <div class="neumorphic-field">
            <div class="neumorphic-input-wrapper">
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email address" required class="neumorphic-input">
            </div>
        </div>
        
        <div class="neumorphic-field">
            <div class="neumorphic-input-wrapper">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required class="neumorphic-input">
                <button type="button" class="neumorphic-toggle">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        
        <div class="neumorphic-field">
            <div class="neumorphic-input-wrapper">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Confirm password" required class="neumorphic-input">
            </div>
        </div>
        
        <div class="neumorphic-option-group">
            <div class="neumorphic-option-label">Account type</div>
            <div class="neumorphic-options">
                <label class="neumorphic-option">
                    <input type="radio" name="neumorphic-account" value="personal" checked>
                    <span class="neumorphic-option-mark"></span>
                    <span class="neumorphic-option-text">Personal</span>
                </label>
                <label class="neumorphic-option">
                    <input type="radio" name="neumorphic-account" value="business">
                    <span class="neumorphic-option-mark"></span>
                    <span class="neumorphic-option-text">Business</span>
                </label>
            </div>
        </div>
        
        <label class="neumorphic-checkbox">
            <input type="checkbox" required>
            <span class="neumorphic-checkmark">
                <i class="fas fa-check"></i>
            </span>
            <span class="neumorphic-checkbox-text">
                I accept the <a href="#">Terms of Service</a>
            </span>
        </label>
        
        <button type="submit" class="form-btn neumorphic-btn">
            <span>Register</span>
            <i class="fas fa-arrow-right"></i>
        </button>
        
        <div class="neumorphic-footer">
            <span class="footer-text">Already registered?</span>
            <a href="#" class="neumorphic-footer-link">Sign in</a>
        </div>
    </form>
</div>`,
    css: `.neumorphic-signup-bg {
    background: #eef0f4;
    border-radius: 32px;
    padding: 25px;
    color: #4a5568;
    position: relative;
    box-shadow: 
        12px 12px 24px rgba(166, 180, 200, 0.2),
        -12px -12px 24px rgba(255, 255, 255, 0.7);
    max-height: 280px;
    overflow-y: auto;
}

.neumorphic-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.logo-emboss {
    width: 70px;
    height: 70px;
    background: #eef0f4;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #6366f1;
    box-shadow: 
        inset 8px 8px 16px rgba(166, 180, 200, 0.2),
        inset -8px -8px 16px rgba(255, 255, 255, 0.7),
        8px 8px 16px rgba(166, 180, 200, 0.2),
        -8px -8px 16px rgba(255, 255, 255, 0.7);
}

.neumorphic-field {
    margin-bottom: 18px;
}

.neumorphic-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: #eef0f4;
    border-radius: 20px;
    box-shadow: 
        inset 4px 4px 8px rgba(166, 180, 200, 0.2),
        inset -4px -4px 8px rgba(255, 255, 255, 0.7),
        4px 4px 8px rgba(166, 180, 200, 0.2),
        -4px -4px 8px rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;
}

.neumorphic-input-wrapper:focus-within {
    box-shadow: 
        inset 6px 6px 12px rgba(166, 180, 200, 0.25),
        inset -6px -6px 12px rgba(255, 255, 255, 0.8);
}

.neumorphic-input-wrapper i {
    position: absolute;
    left: 16px;
    color: #94a3b8;
    font-size: 0.95rem;
}

.neumorphic-input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    background: transparent;
    border: none;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #4a5568;
}

.neumorphic-input:focus {
    outline: none;
}

.neumorphic-input::placeholder {
    color: #a0aec0;
}

.neumorphic-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    padding: 8px;
    border-radius: 12px;
    transition: all 0.2s ease;
}

.neumorphic-toggle:hover {
    box-shadow: 
        2px 2px 4px rgba(166, 180, 200, 0.2),
        -2px -2px 4px rgba(255, 255, 255, 0.7);
}

.neumorphic-option-group {
    margin-bottom: 20px;
}

.neumorphic-option-label {
    font-size: 0.8rem;
    color: #64748b;
    margin-bottom: 12px;
    font-weight: 500;
}

.neumorphic-options {
    display: flex;
    gap: 20px;
}

.neumorphic-option {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.neumorphic-option input {
    display: none;
}

.neumorphic-option-mark {
    width: 22px;
    height: 22px;
    background: #eef0f4;
    border-radius: 50%;
    box-shadow: 
        4px 4px 8px rgba(166, 180, 200, 0.2),
        -4px -4px 8px rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;
}

.neumorphic-option input:checked + .neumorphic-option-mark {
    background: #6366f1;
    box-shadow: 
        inset 2px 2px 4px rgba(0, 0, 0, 0.1),
        inset -2px -2px 4px rgba(255, 255, 255, 0.3);
}

.neumorphic-option-text {
    font-size: 0.85rem;
    color: #4a5568;
}

.neumorphic-checkbox {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    margin-bottom: 25px;
}

.neumorphic-checkbox input {
    display: none;
}

.neumorphic-checkmark {
    width: 22px;
    height: 22px;
    background: #eef0f4;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.7rem;
    box-shadow: 
        inset 2px 2px 4px rgba(166, 180, 200, 0.1),
        inset -2px -2px 4px rgba(255, 255, 255, 0.5),
        4px 4px 8px rgba(166, 180, 200, 0.2),
        -4px -4px 8px rgba(255, 255, 255, 0.7);
}

.neumorphic-checkbox input:checked + .neumorphic-checkmark {
    background: #6366f1;
    color: white;
    box-shadow: 
        inset 2px 2px 4px rgba(0, 0, 0, 0.1),
        inset -2px -2px 4px rgba(255, 255, 255, 0.3);
}

.neumorphic-checkbox-text {
    font-size: 0.8rem;
    color: #4a5568;
}

.neumorphic-checkbox-text a {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
}

.form-btn.neumorphic-btn {
    width: 100%;
    padding: 16px;
    background: #eef0f4;
    color: #4a5568;
    border: none;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    box-shadow: 
        8px 8px 16px rgba(166, 180, 200, 0.2),
        -8px -8px 16px rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;
}

.form-btn.neumorphic-btn:hover {
    box-shadow: 
        inset 4px 4px 8px rgba(166, 180, 200, 0.2),
        inset -4px -4px 8px rgba(255, 255, 255, 0.7);
    color: #6366f1;
}

.neumorphic-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #64748b;
}

.neumorphic-footer-link {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
    padding: 6px 12px;
    border-radius: 12px;
    transition: all 0.2s ease;
}

.neumorphic-footer-link:hover {
    box-shadow: 
        4px 4px 8px rgba(166, 180, 200, 0.2),
        -4px -4px 8px rgba(255, 255, 255, 0.7);
}`,
    js: `// Neumorphic Soft UI Signup
document.addEventListener('DOMContentLoaded', function() {
    const neumorphicForm = document.querySelector('.neumorphic-form');
    
    if (neumorphicForm) {
        // Form submission
        neumorphicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            const confirm = this.querySelector('input[placeholder="Confirm password"]').value;
            const terms = this.querySelector('.neumorphic-checkbox input').checked;
            
            if (!name || !email || !password || !confirm) {
                showNeumorphicNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirm) {
                showNeumorphicNotification('Passwords do not match', 'error');
                return;
            }
            
            if (!terms) {
                showNeumorphicNotification('Please accept the Terms of Service', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.neumorphic-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Registering...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome!</span> <i class="fas fa-check"></i>';
                showNeumorphicNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('input[name="neumorphic-account"][value="personal"]').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const neumorphicToggle = neumorphicForm.querySelector('.neumorphic-toggle');
        if (neumorphicToggle) {
            neumorphicToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.neumorphic-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                    
                    // Neumorphic press effect
                    this.style.boxShadow = 'inset 2px 2px 4px rgba(166,180,200,0.2), inset -2px -2px 4px rgba(255,255,255,0.7)';
                    setTimeout(() => {
                        this.style.boxShadow = '';
                    }, 200);
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Neumorphic radio button effect
        neumorphicForm.querySelectorAll('.neumorphic-option').forEach(option => {
            option.addEventListener('click', function() {
                const mark = this.querySelector('.neumorphic-option-mark');
                mark.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    mark.style.transform = '';
                }, 200);
            });
        });
    }
    
    function showNeumorphicNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #eef0f4;
            color: \${type === 'success' ? '#10b981' : '#ef4444'};
            padding: 16px 28px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 
                8px 8px 16px rgba(166, 180, 200, 0.2),
                -8px -8px 16px rgba(255, 255, 255, 0.7);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 43: Floating Card 3D Signup
// ====================================================================
form43: {
    name: "Floating Card 3D Signup",
    category: "signup modern 3d",
    html: `<div class="form-container floating-3d-signup-bg">
    <div class="floating-card">
        <div class="card-glow"></div>
        <div class="card-content">
            <div class="form-header">
                <div class="floating-icon">
                    <i class="fas fa-cube"></i>
                </div>
                <h3>Create Account</h3>
                <p>Join the 3D experience</p>
            </div>
            <form class="floating-3d-form">
                <div class="floating-input-3d">
                    <div class="input-face front">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Full name" required>
                    </div>
                    <div class="input-face back"></div>
                </div>
                
                <div class="floating-input-3d">
                    <div class="input-face front">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email address" required>
                    </div>
                    <div class="input-face back"></div>
                </div>
                
                <div class="floating-input-3d">
                    <div class="input-face front">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required>
                        <button type="button" class="floating-3d-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="input-face back"></div>
                </div>
                
                <div class="floating-checkbox-3d">
                    <label class="checkbox-3d-label">
                        <input type="checkbox" checked>
                        <span class="checkbox-3d-box">
                            <span class="checkbox-face front">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="checkbox-face back"></span>
                        </span>
                        <span class="checkbox-3d-text">I agree to terms</span>
                    </label>
                </div>
                
                <button type="submit" class="form-btn floating-3d-btn">
                    <span>Sign Up</span>
                    <i class="fas fa-arrow-right"></i>
                    <div class="btn-3d-layers">
                        <span class="layer layer-1"></span>
                        <span class="layer layer-2"></span>
                        <span class="layer layer-3"></span>
                    </div>
                </button>
                
                <div class="floating-footer-3d">
                    <span>Already have an account?</span>
                    <a href="#" class="floating-3d-link">Sign in</a>
                </div>
            </form>
        </div>
    </div>
</div>`,
    css: `.floating-3d-signup-bg {
    background: linear-gradient(145deg, #1a2639, #0e1a2b);
    border-radius: 24px;
    padding: 25px;
    perspective: 1200px;
    max-height: 280px;
    overflow-y: auto;
}

.floating-card {
    position: relative;
    transform-style: preserve-3d;
    animation: float-3d 6s ease-in-out infinite;
}

@keyframes float-3d {
    0%, 100% { transform: translateY(0) rotateX(0deg) rotateY(0deg); }
    25% { transform: translateY(-5px) rotateX(2deg) rotateY(-2deg); }
    75% { transform: translateY(5px) rotateX(-2deg) rotateY(2deg); }
}

.card-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.2), transparent 70%);
    filter: blur(15px);
    border-radius: 30px;
    z-index: 1;
}

.card-content {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateZ(20px);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.05);
    z-index: 2;
}

.floating-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.8rem;
    color: white;
    transform: rotate(45deg) translateZ(30px);
    box-shadow: 
        0 10px 30px rgba(79, 172, 254, 0.4),
        0 0 0 2px rgba(255, 255, 255, 0.1);
}

.floating-icon i {
    transform: rotate(-45deg);
}

.floating-input-3d {
    position: relative;
    margin-bottom: 18px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.input-face {
    position: relative;
    backface-visibility: hidden;
}

.input-face.front {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 0 16px;
    transform: translateZ(10px);
    transition: all 0.3s ease;
}

.input-face.front i {
    color: #4facfe;
    font-size: 0.95rem;
    margin-right: 12px;
}

.input-face.front input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.9rem;
}

.input-face.front input:focus {
    outline: none;
}

.input-face.front input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.floating-input-3d:hover {
    transform: translateZ(15px);
}

.floating-input-3d:focus-within {
    transform: translateZ(20px);
}

.floating-input-3d:focus-within .input-face.front {
    border-color: #4facfe;
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.2);
    background: rgba(79, 172, 254, 0.1);
}

.floating-3d-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}

.floating-checkbox-3d {
    margin: 20px 0;
}

.checkbox-3d-label {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    perspective: 800px;
}

.checkbox-3d-label input {
    display: none;
}

.checkbox-3d-box {
    position: relative;
    width: 24px;
    height: 24px;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
}

.checkbox-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox-face.front {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: transparent;
    transform: rotateY(0deg);
}

.checkbox-face.back {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    transform: rotateY(180deg);
    color: white;
    font-size: 0.8rem;
}

.checkbox-3d-label input:checked + .checkbox-3d-box {
    transform: rotateY(180deg);
}

.checkbox-3d-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
}

.form-btn.floating-3d-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    transform-style: preserve-3d;
    transform: translateZ(0);
    transition: transform 0.3s ease;
}

.btn-3d-layers {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
}

.layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border-radius: 12px;
    opacity: 0.5;
}

.layer-1 { transform: translateZ(-5px); }
.layer-2 { transform: translateZ(-10px); opacity: 0.3; }
.layer-3 { transform: translateZ(-15px); opacity: 0.2; }

.form-btn.floating-3d-btn:hover {
    transform: translateZ(10px);
}

.floating-footer-3d {
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.floating-3d-link {
    color: #4facfe;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}`,
    js: `// Floating Card 3D Signup
document.addEventListener('DOMContentLoaded', function() {
    const floating3DForm = document.querySelector('.floating-3d-form');
    
    if (floating3DForm) {
        floating3DForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            
            if (!name || !email || !password) {
                show3DNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.floating-3d-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to 3D!</span> <i class="fas fa-cube"></i>';
                show3DNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.checkbox-3d-label input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // 3D Password toggle
        const toggle3D = floating3DForm.querySelector('.floating-3d-toggle');
        if (toggle3D) {
            toggle3D.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                    
                    // 3D effect
                    this.parentElement.parentElement.style.transform = 'translateZ(25px)';
                    setTimeout(() => {
                        this.parentElement.parentElement.style.transform = '';
                    }, 200);
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // 3D Checkbox effect
        const checkbox3D = floating3DForm.querySelector('.checkbox-3d-label');
        if (checkbox3D) {
            checkbox3D.addEventListener('click', function() {
                const box = this.querySelector('.checkbox-3d-box');
                box.style.transform = 'rotateY(180deg) scale(1.2)';
                setTimeout(() => {
                    box.style.transform = '';
                }, 400);
            });
        }
    }
    
    function show3DNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #1a2639, #0e1a2b);
            border: 1px solid \${type === 'success' ? '#4facfe' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transform: translateZ(20px);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 44: Kinetic Typography Signup
// ====================================================================
form44: {
    name: "Kinetic Typography Signup",
    category: "signup modern kinetic",
    html: `<div class="form-container kinetic-signup-bg">
    <div class="kinetic-particles">
        <span class="particle-text">W</span>
        <span class="particle-text">E</span>
        <span class="particle-text">L</span>
        <span class="particle-text">C</span>
        <span class="particle-text">O</span>
        <span class="particle-text">M</span>
        <span class="particle-text">E</span>
    </div>
    <div class="form-header">
        <div class="kinetic-logo">
            <span class="char" style="--char-index: 0">J</span>
            <span class="char" style="--char-index: 1">O</span>
            <span class="char" style="--char-index: 2">I</span>
            <span class="char" style="--char-index: 3">N</span>
        </div>
        <h3 class="kinetic-title">
            <span class="kinetic-word" data-word="Create">C</span>
            <span class="kinetic-word" data-word="Your">Y</span>
            <span class="kinetic-word" data-word="Account">A</span>
        </h3>
        <p class="kinetic-subtitle">Start your journey</p>
    </div>
    <form class="kinetic-form">
        <div class="kinetic-input-group">
            <div class="kinetic-label">
                <span class="label-letter" style="--letter-index: 0">N</span>
                <span class="label-letter" style="--letter-index: 1">A</span>
                <span class="label-letter" style="--letter-index: 2">M</span>
                <span class="label-letter" style="--letter-index: 3">E</span>
            </div>
            <input type="text" placeholder="Enter your name" required class="kinetic-input">
            <div class="kinetic-underline"></div>
        </div>
        
        <div class="kinetic-input-group">
            <div class="kinetic-label">
                <span class="label-letter" style="--letter-index: 0">E</span>
                <span class="label-letter" style="--letter-index: 1">M</span>
                <span class="label-letter" style="--letter-index: 2">A</span>
                <span class="label-letter" style="--letter-index: 3">I</span>
                <span class="label-letter" style="--letter-index: 4">L</span>
            </div>
            <input type="email" placeholder="Enter your email" required class="kinetic-input">
            <div class="kinetic-underline"></div>
        </div>
        
        <div class="kinetic-input-group">
            <div class="kinetic-label">
                <span class="label-letter" style="--letter-index: 0">P</span>
                <span class="label-letter" style="--letter-index: 1">A</span>
                <span class="label-letter" style="--letter-index: 2">S</span>
                <span class="label-letter" style="--letter-index: 3">S</span>
                <span class="label-letter" style="--letter-index: 4">W</span>
                <span class="label-letter" style="--letter-index: 5">O</span>
                <span class="label-letter" style="--letter-index: 6">R</span>
                <span class="label-letter" style="--letter-index: 7">D</span>
            </div>
            <input type="password" placeholder="Create password" required class="kinetic-input">
            <button type="button" class="kinetic-toggle">
                <i class="fas fa-eye"></i>
            </button>
            <div class="kinetic-underline"></div>
        </div>
        
        <div class="kinetic-strength">
            <div class="strength-bar-kinetic"></div>
        </div>
        
        <button type="submit" class="form-btn kinetic-submit-btn">
            <span class="btn-char" style="--btn-index: 0">S</span>
            <span class="btn-char" style="--btn-index: 1">I</span>
            <span class="btn-char" style="--btn-index: 2">G</span>
            <span class="btn-char" style="--btn-index: 3">N</span>
            <span class="btn-char" style="--btn-index: 4"> </span>
            <span class="btn-char" style="--btn-index: 5">U</span>
            <span class="btn-char" style="--btn-index: 6">P</span>
            <i class="fas fa-arrow-right"></i>
        </button>
        
        <div class="kinetic-footer">
            <span class="footer-text">Already member?</span>
            <a href="#" class="kinetic-footer-link">
                <span class="link-char" style="--link-index: 0">L</span>
                <span class="link-char" style="--link-index: 1">o</span>
                <span class="link-char" style="--link-index: 2">g</span>
                <span class="link-char" style="--link-index: 3">i</span>
                <span class="link-char" style="--link-index: 4">n</span>
            </a>
        </div>
    </form>
</div>`,
    css: `.kinetic-signup-bg {
    background: #0b0c10;
    border-radius: 20px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.kinetic-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle-text {
    position: absolute;
    font-size: 1.2rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.03);
    animation: kinetic-float 15s linear infinite;
}

.particle-text:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.particle-text:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
.particle-text:nth-child(3) { top: 80%; left: 30%; animation-delay: 4s; }
.particle-text:nth-child(4) { top: 40%; left: 70%; animation-delay: 6s; }
.particle-text:nth-child(5) { top: 10%; left: 90%; animation-delay: 8s; }
.particle-text:nth-child(6) { top: 70%; left: 20%; animation-delay: 10s; }
.particle-text:nth-child(7) { top: 30%; left: 50%; animation-delay: 12s; }

@keyframes kinetic-float {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(100px, -100px) rotate(360deg); }
}

.kinetic-logo {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
}

.char {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: char-bounce 2s ease infinite;
    animation-delay: calc(var(--char-index) * 0.1s);
}

@keyframes char-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

.kinetic-title {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 5px;
}

.kinetic-word {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    position: relative;
    animation: word-flicker 3s infinite;
    animation-delay: calc(var(--char-index) * 0.2s);
}

@keyframes word-flicker {
    0%, 100% { opacity: 1; text-shadow: 0 0 0 transparent; }
    25% { opacity: 0.8; text-shadow: 0 0 8px rgba(255,255,255,0.5); }
    75% { opacity: 0.9; text-shadow: 0 0 4px rgba(255,255,255,0.3); }
}

.kinetic-subtitle {
    text-align: center;
    color: #a0aec0;
    font-size: 0.75rem;
    margin-bottom: 20px;
    animation: fade-slide 1s ease;
}

.kinetic-input-group {
    position: relative;
    margin-bottom: 20px;
}

.kinetic-label {
    display: flex;
    gap: 2px;
    margin-bottom: 6px;
}

.label-letter {
    font-size: 0.7rem;
    font-weight: 600;
    color: #cbd5e0;
    text-transform: uppercase;
    letter-spacing: 1px;
    animation: label-reveal 0.5s ease forwards;
    animation-delay: calc(var(--letter-index) * 0.05s);
    opacity: 0;
    transform: translateX(-10px);
}

@keyframes label-reveal {
    to { opacity: 1; transform: translateX(0); }
}

.kinetic-input {
    width: 100%;
    padding: 14px 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.kinetic-input:focus {
    outline: none;
}

.kinetic-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.85rem;
}

.kinetic-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
    background-size: 200% 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.kinetic-input:focus ~ .kinetic-underline {
    transform: scaleX(1);
    animation: gradient-shift 2s linear infinite;
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
}

.kinetic-toggle {
    position: absolute;
    right: 0;
    bottom: 14px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}

.kinetic-strength {
    margin-bottom: 25px;
}

.strength-bar-kinetic {
    height: 4px;
    background: linear-gradient(90deg, #ef4444, #f59e0b, #10b981);
    width: 0%;
    border-radius: 2px;
    transition: width 0.3s ease;
}

.form-btn.kinetic-submit-btn {
    width: 100%;
    padding: 16px;
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.btn-char {
    display: inline-block;
    animation: btn-pop 2s infinite;
    animation-delay: calc(var(--btn-index) * 0.1s);
}

@keyframes btn-pop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.form-btn.kinetic-submit-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
}

.kinetic-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #a0aec0;
}

.kinetic-footer-link {
    display: inline-flex;
    gap: 2px;
    color: white;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}

.link-char {
    display: inline-block;
    animation: link-hover 1s infinite;
    animation-delay: calc(var(--link-index) * 0.1s);
}

@keyframes link-hover {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); color: #48dbfb; }
}`,
    js: `// Kinetic Typography Signup
document.addEventListener('DOMContentLoaded', function() {
    const kineticForm = document.querySelector('.kinetic-form');
    
    if (kineticForm) {
        // Password strength
        const passwordInput = kineticForm.querySelector('input[type="password"]');
        const strengthBar = kineticForm.querySelector('.strength-bar-kinetic');
        
        if (passwordInput && strengthBar) {
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                
                if (password.length >= 8) strength += 25;
                if (/[A-Z]/.test(password)) strength += 25;
                if (/[0-9]/.test(password)) strength += 25;
                if (/[^A-Za-z0-9]/.test(password)) strength += 25;
                
                strengthBar.style.width = strength + '%';
                
                // Animate strength bar
                strengthBar.style.animation = 'none';
                strengthBar.offsetHeight;
                strengthBar.style.animation = 'gradient-shift 2s linear infinite';
            });
        }
        
        // Form submission
        kineticForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Enter your name"]').value;
            const email = this.querySelector('input[placeholder="Enter your email"]').value;
            const password = this.querySelector('input[placeholder="Create password"]').value;
            
            if (!name || !email || !password) {
                showKineticNotification('Please complete all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.kinetic-submit-btn');
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="btn-char">C</span><span class="btn-char">r</span><span class="btn-char">e</span><span class="btn-char">a</span><span class="btn-char">t</span><span class="btn-char">i</span><span class="btn-char">n</span><span class="btn-char">g</span><span class="btn-char">.</span><span class="btn-char">.</span><span class="btn-char">.</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span class="btn-char">W</span><span class="btn-char">e</span><span class="btn-char">l</span><span class="btn-char">c</span><span class="btn-char">o</span><span class="btn-char">m</span><span class="btn-char">e</span><span class="btn-char">!</span>';
                showKineticNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                    this.reset();
                    strengthBar.style.width = '0%';
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const kineticToggle = kineticForm.querySelector('.kinetic-toggle');
        if (kineticToggle) {
            kineticToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Animate label letters on focus
        kineticForm.querySelectorAll('.kinetic-input').forEach(input => {
            input.addEventListener('focus', function() {
                const labels = this.parentElement.querySelectorAll('.label-letter');
                labels.forEach((label, index) => {
                    label.style.animation = 'none';
                    label.offsetHeight;
                    label.style.animation = \`label-reveal 0.5s ease forwards\`;
                    label.style.animationDelay = \`\${index * 0.05}s\`;
                });
            });
        });
    }
    
    function showKineticNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0b0c10;
            border: 1px solid \${type === 'success' ? '#48dbfb' : '#ff6b6b'};
            color: white;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? 'rgba(72,219,251,0.3)' : 'rgba(255,107,107,0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 45: Morphing Blob Signup
// ====================================================================
form45: {
    name: "Morphing Blob Signup",
    category: "signup modern morphing",
    html: `<div class="form-container morphing-blob-signup-bg">
    <svg class="blob-svg" viewBox="0 0 500 500" width="100%" height="100%">
        <defs>
            <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#4158D0;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#C850C0;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFCC70;stop-opacity:1" />
            </linearGradient>
        </defs>
        <path class="morphing-blob" fill="url(#blob-gradient)" opacity="0.1">
            <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values="M442.5,296Q423,342,387.5,379.5Q352,417,301,436Q250,455,197,439.5Q144,424,108.5,386.5Q73,349,50,299.5Q27,250,44,197.5Q61,145,102.5,108.5Q144,72,197,54Q250,36,303.5,53.5Q357,71,392.5,111Q428,151,441,200.5Q454,250,442.5,296Z;
                    
                    M433,295.5Q426,341,393,379.5Q360,418,305,433Q250,448,200,423.5Q150,399,108,368.5Q66,338,54,294Q42,250,52,205Q62,160,97.5,125Q133,90,183.5,71Q234,52,284.5,64Q335,76,375.5,109Q416,142,427.5,196Q439,250,433,295.5Z;
                    
                    M449,297Q434,344,402.5,384Q371,424,310.5,438Q250,452,197,424Q144,396,102,366Q60,336,52.5,293Q45,250,55,208.5Q65,167,104.5,139.5Q144,112,197,86Q250,60,303,86Q356,112,393.5,142.5Q431,173,446.5,211.5Q462,250,449,297Z;
                    
                    M442.5,296Q423,342,387.5,379.5Q352,417,301,436Q250,455,197,439.5Q144,424,108.5,386.5Q73,349,50,299.5Q27,250,44,197.5Q61,145,102.5,108.5Q144,72,197,54Q250,36,303.5,53.5Q357,71,392.5,111Q428,151,441,200.5Q454,250,442.5,296Z"
            />
        </path>
    </svg>
    
    <div class="morphing-content">
        <div class="form-header">
            <div class="morph-icon">
                <i class="fas fa-shapes"></i>
            </div>
            <h3>Create Account</h3>
            <p>Be part of something beautiful</p>
        </div>
        
        <form class="morphing-form">
            <div class="morph-input-container">
                <div class="morph-input-wrapper">
                    <input type="text" placeholder="Full name" required class="morph-input">
                    <div class="morph-border"></div>
                    <div class="morph-corner tl"></div>
                    <div class="morph-corner tr"></div>
                    <div class="morph-corner bl"></div>
                    <div class="morph-corner br"></div>
                </div>
            </div>
            
            <div class="morph-input-container">
                <div class="morph-input-wrapper">
                    <input type="email" placeholder="Email address" required class="morph-input">
                    <div class="morph-border"></div>
                    <div class="morph-corner tl"></div>
                    <div class="morph-corner tr"></div>
                    <div class="morph-corner bl"></div>
                    <div class="morph-corner br"></div>
                </div>
            </div>
            
            <div class="morph-input-row">
                <div class="morph-input-wrapper half">
                    <input type="password" placeholder="Password" required class="morph-input">
                    <button type="button" class="morph-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                    <div class="morph-border"></div>
                    <div class="morph-corner tl"></div>
                    <div class="morph-corner tr"></div>
                    <div class="morph-corner bl"></div>
                    <div class="morph-corner br"></div>
                </div>
                <div class="morph-input-wrapper half">
                    <input type="password" placeholder="Confirm" required class="morph-input">
                    <div class="morph-border"></div>
                    <div class="morph-corner tl"></div>
                    <div class="morph-corner tr"></div>
                    <div class="morph-corner bl"></div>
                    <div class="morph-corner br"></div>
                </div>
            </div>
            
            <div class="morph-checkbox-group">
                <label class="morph-checkbox">
                    <input type="checkbox" checked>
                    <span class="morph-checkmark">
                        <svg viewBox="0 0 24 24">
                            <path d="M20 6L9 17L4 12" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <span class="morph-checkbox-text">I agree to the terms</span>
                </label>
            </div>
            
            <button type="submit" class="form-btn morph-submit-btn">
                <span>Sign Up</span>
                <i class="fas fa-arrow-right"></i>
                <div class="morph-ripple"></div>
            </button>
            
            <div class="morph-footer">
                <span>Already have an account?</span>
                <a href="#" class="morph-link">Log in</a>
            </div>
        </form>
    </div>
</div>`,
    css: `.morphing-blob-signup-bg {
    background: #0f172a;
    border-radius: 24px;
    padding: 25px;
    color: white;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.blob-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.morphing-blob {
    animation: blob-rotate 20s linear infinite;
    transform-origin: center;
}

@keyframes blob-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.morphing-content {
    position: relative;
    z-index: 2;
}

.morph-icon {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.8rem;
    color: white;
    animation: morph-icon 8s ease-in-out infinite;
}

@keyframes morph-icon {
    0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    33% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
    66% { border-radius: 50% 50% 50% 50% / 60% 40% 60% 40%; }
}

.morph-input-container {
    margin-bottom: 16px;
}

.morph-input-wrapper {
    position: relative;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
}

.morph-input-wrapper.half {
    width: calc(50% - 6px);
}

.morph-input-row {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
}

.morph-input {
    width: 100%;
    padding: 16px 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.9rem;
    position: relative;
    z-index: 2;
}

.morph-input:focus {
    outline: none;
}

.morph-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
}

.morph-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    transition: all 0.3s ease;
}

.morph-input:focus ~ .morph-border {
    border-color: #4158D0;
    border-width: 2px;
    box-shadow: 0 0 20px rgba(65, 88, 208, 0.3);
}

.morph-corner {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    pointer-events: none;
}

.morph-corner.tl { top: -2px; left: -2px; border-top-color: #4158D0; border-left-color: #4158D0; }
.morph-corner.tr { top: -2px; right: -2px; border-top-color: #C850C0; border-right-color: #C850C0; }
.morph-corner.bl { bottom: -2px; left: -2px; border-bottom-color: #FFCC70; border-left-color: #FFCC70; }
.morph-corner.br { bottom: -2px; right: -2px; border-bottom-color: #4158D0; border-right-color: #C850C0; }

.morph-input:focus ~ .morph-corner {
    width: 12px;
    height: 12px;
}

.morph-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    z-index: 3;
}

.morph-checkbox-group {
    margin: 20px 0;
}

.morph-checkbox {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
}

.morph-checkbox input {
    display: none;
}

.morph-checkmark {
    width: 22px;
    height: 22px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.morph-checkmark svg {
    width: 14px;
    height: 14px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s ease;
}

.morph-checkbox input:checked + .morph-checkmark {
    background: linear-gradient(145deg, #4158D0, #C850C0);
    border-color: transparent;
}

.morph-checkbox input:checked + .morph-checkmark svg {
    opacity: 1;
    transform: scale(1);
}

.morph-checkbox-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
}

.form-btn.morph-submit-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: linear-gradient(145deg, #4158D0, #C850C0, #FFCC70);
    background-size: 200% 100%;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    animation: gradient-shift 3s linear infinite;
}

.morph-ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 100%);
    transform: scale(0);
    opacity: 0;
    transition: all 0.5s ease;
}

.form-btn.morph-submit-btn:hover .morph-ripple {
    transform: scale(2);
    opacity: 0.5;
}

.morph-footer {
    text-align: center;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.morph-link {
    color: #C850C0;
    text-decoration: none;
    font-weight: 600;
    margin-left: 5px;
}`,
    js: `// Morphing Blob Signup
document.addEventListener('DOMContentLoaded', function() {
    const morphForm = document.querySelector('.morphing-form');
    
    if (morphForm) {
        // Form submission
        morphForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            const confirm = this.querySelector('input[placeholder="Confirm"]').value;
            
            if (!name || !email || !password || !confirm) {
                showMorphNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (password !== confirm) {
                showMorphNotification('Passwords do not match', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.morph-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome!</span> <i class="fas fa-shapes"></i>';
                showMorphNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.morph-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const morphToggle = morphForm.querySelector('.morph-toggle');
        if (morphToggle) {
            morphToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('.morph-input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Animate corners on focus
        morphForm.querySelectorAll('.morph-input').forEach(input => {
            input.addEventListener('focus', function() {
                const corners = this.parentElement.querySelectorAll('.morph-corner');
                corners.forEach(corner => {
                    corner.style.width = '12px';
                    corner.style.height = '12px';
                });
            });
            
            input.addEventListener('blur', function() {
                const corners = this.parentElement.querySelectorAll('.morph-corner');
                corners.forEach(corner => {
                    corner.style.width = '8px';
                    corner.style.height = '8px';
                });
            });
        });
    }
    
    function showMorphNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0f172a;
            border: 1px solid \${type === 'success' ? '#C850C0' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 16px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? 'rgba(200,80,192,0.3)' : 'rgba(239,68,68,0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 46: Split Screen Visual Signup
// ====================================================================
form46: {
    name: "Split Screen Visual Signup",
    category: "signup modern split",
    html: `<div class="form-container split-screen-signup-bg">
    <div class="split-layout">
        <div class="split-visual">
            <div class="visual-content">
                <div class="visual-icon">
                    <i class="fas fa-rocket"></i>
                </div>
                <h4 class="visual-title">Launch Your Journey</h4>
                <p class="visual-text">Join 10,000+ creators already on our platform</p>
                <div class="visual-stats">
                    <div class="stat-item">
                        <span class="stat-number">10k+</span>
                        <span class="stat-label">Users</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50k+</span>
                        <span class="stat-label">Projects</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4.9</span>
                        <span class="stat-label">Rating</span>
                    </div>
                </div>
                <div class="visual-testimonials">
                    <div class="testimonial-avatars">
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user">
                        <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user">
                        <span class="avatar-more">+2k</span>
                    </div>
                    <span class="testimonial-text">Trusted by creators worldwide</span>
                </div>
            </div>
        </div>
        
        <div class="split-form">
            <div class="form-header">
                <h3>Sign Up</h3>
                <p>Create your free account</p>
            </div>
            
            <form class="split-form-fields">
                <div class="split-input-group">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Full name" required>
                </div>
                
                <div class="split-input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" placeholder="Email address" required>
                </div>
                
                <div class="split-input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Password" required>
                    <button type="button" class="split-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                
                <div class="split-options">
                    <label class="split-checkbox">
                        <input type="checkbox" checked>
                        <span class="split-checkmark"></span>
                        <span class="split-checkbox-text">Send me product updates</span>
                    </label>
                </div>
                
                <button type="submit" class="form-btn split-submit-btn">
                    <span>Get Started</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
                
                <div class="split-divider">
                    <span>or sign up with</span>
                </div>
                
                <div class="split-social">
                    <button type="button" class="split-social-btn google">
                        <i class="fab fa-google"></i>
                    </button>
                    <button type="button" class="split-social-btn github">
                        <i class="fab fa-github"></i>
                    </button>
                    <button type="button" class="split-social-btn twitter">
                        <i class="fab fa-twitter"></i>
                    </button>
                </div>
                
                <div class="split-footer">
                    <span>Already have an account?</span>
                    <a href="#" class="split-link">Log in</a>
                </div>
            </form>
        </div>
    </div>
</div>`,
    css: `.split-screen-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 0;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.split-layout {
    display: flex;
    min-height: 260px;
}

.split-visual {
    flex: 1;
    background: linear-gradient(145deg, #6366f1, #8b5cf6);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.visual-content {
    color: white;
    text-align: center;
}

.visual-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    font-size: 1.5rem;
    backdrop-filter: blur(5px);
}

.visual-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 6px;
}

.visual-text {
    font-size: 0.7rem;
    opacity: 0.9;
    margin-bottom: 15px;
}

.visual-stats {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 1rem;
    font-weight: 700;
}

.stat-label {
    font-size: 0.55rem;
    text-transform: uppercase;
    opacity: 0.8;
}

.visual-testimonials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.testimonial-avatars {
    display: flex;
    align-items: center;
}

.testimonial-avatars img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid white;
    margin-left: -8px;
}

.testimonial-avatars img:first-child {
    margin-left: 0;
}

.avatar-more {
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: 600;
    margin-left: -8px;
}

.testimonial-text {
    font-size: 0.65rem;
    opacity: 0.9;
}

.split-form {
    flex: 1;
    padding: 20px;
    background: white;
}

.split-form .form-header {
    margin-bottom: 15px;
}

.split-form .form-header h3 {
    font-size: 1.2rem;
    color: #1e293b;
    margin-bottom: 4px;
}

.split-form .form-header p {
    font-size: 0.7rem;
    color: #64748b;
}

.split-input-group {
    position: relative;
    margin-bottom: 12px;
}

.split-input-group i {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.8rem;
}

.split-input-group input {
    width: 100%;
    padding: 10px 10px 10px 35px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
}

.split-input-group input:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.split-toggle {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.split-options {
    margin: 12px 0;
}

.split-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.75rem;
    color: #475569;
}

.split-checkbox input {
    display: none;
}

.split-checkmark {
    width: 16px;
    height: 16px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.split-checkbox input:checked + .split-checkmark {
    background: #6366f1;
    border-color: #6366f1;
    color: white;
}

.form-btn.split-submit-btn {
    width: 100%;
    padding: 12px;
    background: #6366f1;
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 12px;
}

.split-divider {
    display: flex;
    align-items: center;
    margin: 12px 0;
    color: #94a3b8;
    font-size: 0.7rem;
}

.split-divider::before,
.split-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e2e8f0;
}

.split-divider span {
    padding: 0 8px;
}

.split-social {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 12px;
}

.split-social-btn {
    width: 36px;
    height: 36px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background: white;
    color: #334155;
    cursor: pointer;
    transition: all 0.3s ease;
}

.split-social-btn:hover {
    background: #f8fafc;
    transform: translateY(-2px);
}

.split-social-btn.google:hover { color: #ea4335; border-color: #ea4335; }
.split-social-btn.github:hover { color: #333; border-color: #333; }
.split-social-btn.twitter:hover { color: #1da1f2; border-color: #1da1f2; }

.split-footer {
    text-align: center;
    font-size: 0.75rem;
    color: #64748b;
}

.split-link {
    color: #6366f1;
    text-decoration: none;
    font-weight: 600;
    margin-left: 4px;
}`,
    js: `// Split Screen Visual Signup
document.addEventListener('DOMContentLoaded', function() {
    const splitForm = document.querySelector('.split-form-fields');
    
    if (splitForm) {
        // Form submission
        splitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            
            if (!name || !email || !password) {
                showSplitNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.split-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome Aboard!</span> <i class="fas fa-rocket"></i>';
                showSplitNotification('Account created successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.split-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const splitToggle = splitForm.querySelector('.split-toggle');
        if (splitToggle) {
            splitToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Social buttons
        splitForm.querySelectorAll('.split-social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.classList.contains('google') ? 'Google' :
                               this.classList.contains('github') ? 'GitHub' : 'Twitter';
                
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                
                setTimeout(() => {
                    this.innerHTML = \`<i class="fab fa-\${provider.toLowerCase()}"></i>\`;
                    showSplitNotification(\`Connected with \${provider}\`, 'success');
                }, 1000);
            });
        });
    }
    
    function showSplitNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: 1px solid \${type === 'success' ? '#6366f1' : '#ef4444'};
            color: \${type === 'success' ? '#6366f1' : '#ef4444'};
            padding: 12px 24px;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 600;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 47: Micro-Interaction Signup
// ====================================================================
form47: {
    name: "Micro-Interaction Signup",
    category: "signup modern micro",
    html: `<div class="form-container micro-interaction-signup-bg">
    <div class="micro-header">
        <div class="micro-progress">
            <div class="progress-step active" data-step="1">
                <div class="step-indicator">
                    <i class="fas fa-user"></i>
                </div>
                <span class="step-label">Info</span>
            </div>
            <div class="progress-line"></div>
            <div class="progress-step" data-step="2">
                <div class="step-indicator">
                    <i class="fas fa-lock"></i>
                </div>
                <span class="step-label">Security</span>
            </div>
            <div class="progress-line"></div>
            <div class="progress-step" data-step="3">
                <div class="step-indicator">
                    <i class="fas fa-check"></i>
                </div>
                <span class="step-label">Done</span>
            </div>
        </div>
    </div>
    
    <div class="micro-panel active" data-panel="1">
        <div class="form-header">
            <h3>Tell us about yourself</h3>
            <p>We'll use this to personalize your experience</p>
        </div>
        <form class="micro-form micro-form-1">
            <div class="micro-field">
                <div class="micro-label">What's your name?</div>
                <div class="micro-input-wrapper">
                    <input type="text" placeholder="e.g. John Doe" required class="micro-input">
                    <div class="micro-underline"></div>
                </div>
            </div>
            
            <div class="micro-field">
                <div class="micro-label">Where should we email you?</div>
                <div class="micro-input-wrapper">
                    <input type="email" placeholder="hello@example.com" required class="micro-input">
                    <div class="micro-underline"></div>
                </div>
            </div>
            
            <div class="micro-feedback"></div>
            
            <button type="button" class="micro-next-btn" data-next="2">
                <span>Continue</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </form>
    </div>
    
    <div class="micro-panel" data-panel="2">
        <div class="form-header">
            <h3>Secure your account</h3>
            <p>Create a strong password</p>
        </div>
        <form class="micro-form micro-form-2">
            <div class="micro-field">
                <div class="micro-label">Create password</div>
                <div class="micro-input-wrapper">
                    <input type="password" placeholder="Enter password" required class="micro-input" id="micro-password">
                    <button type="button" class="micro-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                    <div class="micro-underline"></div>
                </div>
            </div>
            
            <div class="micro-password-strength">
                <div class="strength-meter">
                    <div class="strength-segment"></div>
                    <div class="strength-segment"></div>
                    <div class="strength-segment"></div>
                    <div class="strength-segment"></div>
                </div>
                <div class="strength-text">Enter a password</div>
            </div>
            
            <div class="micro-field">
                <div class="micro-label">Confirm password</div>
                <div class="micro-input-wrapper">
                    <input type="password" placeholder="Confirm password" required class="micro-input" id="micro-confirm">
                    <div class="micro-underline"></div>
                </div>
            </div>
            
            <div class="micro-match-feedback"></div>
            
            <div class="micro-button-group">
                <button type="button" class="micro-prev-btn" data-prev="1">
                    <i class="fas fa-arrow-left"></i>
                    <span>Back</span>
                </button>
                <button type="button" class="micro-next-btn" data-next="3">
                    <span>Continue</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </form>
    </div>
    
    <div class="micro-panel" data-panel="3">
        <div class="micro-success-animation">
            <div class="success-checkmark">
                <i class="fas fa-check"></i>
            </div>
        </div>
        <div class="form-header">
            <h3>You're all set!</h3>
            <p>Your account has been created successfully</p>
        </div>
        
        <div class="micro-welcome">
            <div class="welcome-username">John Doe</div>
            <div class="welcome-email">hello@example.com</div>
        </div>
        
        <form class="micro-form micro-form-3">
            <div class="micro-terms">
                <label class="micro-checkbox">
                    <input type="checkbox" checked>
                    <span class="micro-checkmark">
                        <i class="fas fa-check"></i>
                    </span>
                    <span>Stay signed in on this device</span>
                </label>
            </div>
            
            <button type="submit" class="micro-submit-btn">
                <span>Go to Dashboard</span>
                <i class="fas fa-rocket"></i>
            </button>
            
            <div class="micro-footer">
                <a href="#" class="micro-link">Take me to login instead</a>
            </div>
        </form>
    </div>
</div>`,
    css: `.micro-interaction-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #f1f5f9;
    max-height: 280px;
    overflow-y: auto;
}

.micro-progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.step-indicator {
    width: 36px;
    height: 36px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.progress-step.active .step-indicator {
    background: #6366f1;
    color: white;
    transform: scale(1.1);
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.2);
}

.step-label {
    font-size: 0.6rem;
    color: #94a3b8;
    font-weight: 500;
}

.progress-step.active .step-label {
    color: #6366f1;
}

.progress-line {
    flex: 1;
    height: 2px;
    background: #e2e8f0;
    margin: 0 8px;
    position: relative;
    top: -10px;
}

.micro-panel {
    display: none;
    animation: micro-fade 0.4s ease;
}

.micro-panel.active {
    display: block;
}

@keyframes micro-fade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.micro-field {
    margin-bottom: 20px;
}

.micro-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 6px;
}

.micro-input-wrapper {
    position: relative;
}

.micro-input {
    width: 100%;
    padding: 12px 0;
    border: none;
    border-bottom: 2px solid #e2e8f0;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.micro-input:focus {
    outline: none;
    border-bottom-color: #6366f1;
}

.micro-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: width 0.3s ease;
}

.micro-input:focus ~ .micro-underline {
    width: 100%;
}

.micro-feedback {
    height: 20px;
    margin-top: 5px;
    font-size: 0.7rem;
    color: #10b981;
}

.micro-password-strength {
    margin: 15px 0;
}

.strength-meter {
    display: flex;
    gap: 6px;
    margin-bottom: 6px;
}

.strength-segment {
    flex: 1;
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.strength-segment.active {
    background: #f59e0b;
}

.strength-text {
    font-size: 0.7rem;
    color: #64748b;
}

.micro-match-feedback {
    font-size: 0.7rem;
    margin-top: -10px;
    margin-bottom: 15px;
    min-height: 20px;
}

.micro-button-group {
    display: flex;
    gap: 12px;
    margin-top: 20px;
}

.micro-prev-btn,
.micro-next-btn,
.micro-submit-btn {
    padding: 12px 20px;
    border: none;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
}

.micro-prev-btn {
    background: #f1f5f9;
    color: #475569;
}

.micro-prev-btn:hover {
    background: #e2e8f0;
}

.micro-next-btn,
.micro-submit-btn {
    background: #6366f1;
    color: white;
    box-shadow: 0 8px 16px rgba(99, 102, 241, 0.2);
}

.micro-next-btn:hover,
.micro-submit-btn:hover {
    background: #4f52e0;
    transform: translateY(-2px);
}

.micro-toggle {
    position: absolute;
    right: 0;
    bottom: 12px;
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.micro-success-animation {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.success-checkmark {
    width: 60px;
    height: 60px;
    background: #10b981;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: white;
    animation: micro-success 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes micro-success {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
}

.micro-welcome {
    background: #f8fafc;
    border-radius: 12px;
    padding: 12px;
    margin-bottom: 20px;
    text-align: center;
}

.welcome-username {
    font-size: 1rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 4px;
}

.welcome-email {
    font-size: 0.7rem;
    color: #64748b;
}

.micro-terms {
    margin-bottom: 20px;
}

.micro-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.75rem;
    color: #475569;
}

.micro-checkbox input {
    display: none;
}

.micro-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.micro-checkbox input:checked + .micro-checkmark {
    background: #6366f1;
    border-color: #6366f1;
    color: white;
}

.micro-footer {
    text-align: center;
    margin-top: 15px;
}

.micro-link {
    color: #6366f1;
    text-decoration: none;
    font-size: 0.75rem;
}`,
    js: `// Micro-Interaction Signup
document.addEventListener('DOMContentLoaded', function() {
    const microContainer = document.querySelector('.micro-interaction-signup-bg');
    
    if (microContainer) {
        const panels = microContainer.querySelectorAll('.micro-panel');
        const progressSteps = microContainer.querySelectorAll('.progress-step');
        const nameInput = microContainer.querySelector('.micro-panel[data-panel="1"] .micro-input[type="text"]');
        const emailInput = microContainer.querySelector('.micro-panel[data-panel="1"] .micro-input[type="email"]');
        const passwordInput = microContainer.querySelector('#micro-password');
        const confirmInput = microContainer.querySelector('#micro-confirm');
        const strengthSegments = microContainer.querySelectorAll('.strength-segment');
        const strengthText = microContainer.querySelector('.strength-text');
        
        let currentPanel = 1;
        
        // Switch panel function
        function switchPanel(panelNumber) {
            panels.forEach(panel => panel.classList.remove('active'));
            microContainer.querySelector(\`.micro-panel[data-panel="\${panelNumber}"]\`).classList.add('active');
            
            progressSteps.forEach((step, index) => {
                if (index + 1 === panelNumber) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });
            
            currentPanel = panelNumber;
        }
        
        // Next buttons
        microContainer.querySelectorAll('.micro-next-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const nextPanel = this.getAttribute('data-next');
                
                if (currentPanel === 1) {
                    const name = nameInput?.value;
                    const email = emailInput?.value;
                    const feedback = microContainer.querySelector('.micro-feedback');
                    
                    if (!name || !email) {
                        feedback.textContent = 'Please fill in all fields';
                        feedback.style.color = '#ef4444';
                        nameInput?.focus();
                        return;
                    }
                    
                    if (!email.includes('@') || !email.includes('.')) {
                        feedback.textContent = 'Please enter a valid email';
                        feedback.style.color = '#ef4444';
                        emailInput?.focus();
                        return;
                    }
                    
                    feedback.textContent = '✓ Looks good!';
                    feedback.style.color = '#10b981';
                    
                    // Update welcome panel
                    microContainer.querySelector('.welcome-username').textContent = name;
                    microContainer.querySelector('.welcome-email').textContent = email;
                }
                
                if (currentPanel === 2) {
                    const password = passwordInput?.value;
                    const confirm = confirmInput?.value;
                    const matchFeedback = microContainer.querySelector('.micro-match-feedback');
                    
                    if (!password || !confirm) {
                        matchFeedback.textContent = 'Please fill in all fields';
                        matchFeedback.style.color = '#ef4444';
                        return;
                    }
                    
                    if (password !== confirm) {
                        matchFeedback.textContent = 'Passwords do not match';
                        matchFeedback.style.color = '#ef4444';
                        return;
                    }
                    
                    matchFeedback.textContent = '✓ Passwords match';
                    matchFeedback.style.color = '#10b981';
                }
                
                switchPanel(parseInt(nextPanel));
            });
        });
        
        // Previous buttons
        microContainer.querySelectorAll('.micro-prev-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const prevPanel = this.getAttribute('data-prev');
                switchPanel(parseInt(prevPanel));
            });
        });
        
        // Password strength meter
        if (passwordInput) {
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                
                if (password.length >= 8) strength++;
                if (/[A-Z]/.test(password)) strength++;
                if (/[0-9]/.test(password)) strength++;
                if (/[^A-Za-z0-9]/.test(password)) strength++;
                
                strengthSegments.forEach((segment, index) => {
                    if (index < strength) {
                        segment.classList.add('active');
                    } else {
                        segment.classList.remove('active');
                    }
                });
                
                const strengthLevels = ['Weak', 'Fair', 'Good', 'Strong'];
                const strengthColors = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'];
                
                if (strength > 0) {
                    strengthText.textContent = strengthLevels[strength - 1];
                    strengthText.style.color = strengthColors[strength - 1];
                    
                    strengthSegments.forEach((segment, index) => {
                        if (index < strength) {
                            segment.style.background = strengthColors[strength - 1];
                        }
                    });
                } else {
                    strengthText.textContent = 'Enter a password';
                    strengthText.style.color = '#64748b';
                }
            });
        }
        
        // Password match checker
        if (confirmInput) {
            confirmInput.addEventListener('input', function() {
                const password = passwordInput?.value;
                const confirm = this.value;
                const matchFeedback = microContainer.querySelector('.micro-match-feedback');
                
                if (confirm.length === 0) {
                    matchFeedback.textContent = '';
                    return;
                }
                
                if (password === confirm) {
                    matchFeedback.textContent = '✓ Passwords match';
                    matchFeedback.style.color = '#10b981';
                    this.style.borderBottomColor = '#10b981';
                } else {
                    matchFeedback.textContent = '✗ Passwords do not match';
                    matchFeedback.style.color = '#ef4444';
                    this.style.borderBottomColor = '#ef4444';
                }
            });
        }
        
        // Password toggle
        const microToggle = microContainer.querySelector('.micro-toggle');
        if (microToggle) {
            microToggle.addEventListener('click', function() {
                const input = document.getElementById('micro-password');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Final form submission
        const finalForm = microContainer.querySelector('.micro-form-3');
        if (finalForm) {
            finalForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const submitBtn = this.querySelector('.micro-submit-btn');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span>Redirecting...</span> <i class="fas fa-spinner fa-spin"></i>';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showMicroNotification('Welcome to your dashboard!', 'success');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        switchPanel(1);
                        
                        // Reset all forms
                        microContainer.querySelectorAll('form').forEach(form => form.reset());
                        microContainer.querySelectorAll('.progress-step').forEach((step, index) => {
                            if (index === 0) step.classList.add('active');
                            else step.classList.remove('active');
                        });
                        
                        strengthSegments.forEach(segment => {
                            segment.classList.remove('active');
                            segment.style.background = '';
                        });
                        if (strengthText) {
                            strengthText.textContent = 'Enter a password';
                            strengthText.style.color = '#64748b';
                        }
                    }, 2000);
                }, 2000);
            });
        }
    }
    
    function showMicroNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 0.85rem;
            font-weight: 600;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 48: Aurora Glassmorphism Login
// ====================================================================
form48: {
    name: "Aurora Glassmorphism Login",
    category: "login modern glassmorphism",
    html: `<div class="form-container aurora-glass-bg">
    <div class="aurora-overlay"></div>
    <div class="aurora-layers">
        <div class="aurora-layer"></div>
        <div class="aurora-layer"></div>
        <div class="aurora-layer"></div>
        <div class="aurora-layer"></div>
    </div>
    <div class="glass-card">
        <div class="glass-reflection"></div>
        <div class="form-header">
            <div class="aurora-icon">
                <i class="fas fa-aurora"></i>
                <i class="fas fa-circle-notch"></i>
            </div>
            <h3>Aurora Access</h3>
            <p>Sign in to the light</p>
        </div>
        <form class="aurora-form">
            <div class="aurora-input-group">
                <div class="input-aurora-bg"></div>
                <i class="fas fa-envelope"></i>
                <input type="email" placeholder="Email address" required>
                <div class="aurora-glow"></div>
            </div>
            <div class="aurora-input-group">
                <div class="input-aurora-bg"></div>
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Password" required>
                <button type="button" class="aurora-toggle">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="aurora-glow"></div>
            </div>
            
            <div class="aurora-options">
                <label class="aurora-checkbox">
                    <input type="checkbox" checked>
                    <span class="aurora-checkmark">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="aurora-checkbox-text">Remember light</span>
                </label>
                <a href="#" class="aurora-link">Forgot password?</a>
            </div>
            
            <button type="submit" class="form-btn aurora-btn">
                <span>Illuminate</span>
                <i class="fas fa-sun"></i>
                <div class="aurora-btn-glow"></div>
            </button>
            
            <div class="aurora-divider">
                <span class="divider-line"></span>
                <span class="divider-text">New to aurora?</span>
                <span class="divider-line"></span>
            </div>
            
            <div class="aurora-footer">
                <a href="#" class="aurora-signup-link">
                    <span>Create account</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </form>
    </div>
</div>`,
    css: `.aurora-glass-bg {
    background: #0a0f1e;
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.aurora-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 40%, rgba(46, 213, 115, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(0, 184, 148, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 90% 20%, rgba(9, 132, 227, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.aurora-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.aurora-layer {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(46, 213, 115, 0.1) 50%,
        rgba(0, 184, 148, 0.1) 60%,
        transparent 70%
    );
    animation: aurora-flow 15s linear infinite;
    opacity: 0.3;
}

.aurora-layer:nth-child(2) {
    background: linear-gradient(
        135deg,
        transparent 30%,
        rgba(9, 132, 227, 0.1) 50%,
        rgba(108, 92, 231, 0.1) 60%,
        transparent 70%
    );
    animation-delay: -5s;
    opacity: 0.2;
}

.aurora-layer:nth-child(3) {
    background: linear-gradient(
        225deg,
        transparent 30%,
        rgba(232, 67, 147, 0.1) 50%,
        rgba(214, 48, 49, 0.1) 60%,
        transparent 70%
    );
    animation-delay: -10s;
    opacity: 0.15;
}

.aurora-layer:nth-child(4) {
    background: linear-gradient(
        315deg,
        transparent 30%,
        rgba(255, 118, 117, 0.1) 50%,
        rgba(255, 186, 8, 0.1) 60%,
        transparent 70%
    );
    animation-delay: -15s;
    opacity: 0.1;
}

@keyframes aurora-flow {
    0% { transform: rotate(0deg) translateY(0); }
    50% { transform: rotate(5deg) translateY(-5%); }
    100% { transform: rotate(0deg) translateY(0); }
}

.glass-card {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    z-index: 10;
}

.glass-reflection {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 60%);
    pointer-events: none;
}

.aurora-icon {
    position: relative;
    width: 70px;
    height: 70px;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.aurora-icon i:first-child {
    position: absolute;
    font-size: 3rem;
    color: rgba(46, 213, 115, 0.5);
    filter: blur(5px);
    animation: aurora-pulse 3s infinite;
}

.aurora-icon i:last-child {
    position: relative;
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 20px rgba(46, 213, 115, 0.8);
    animation: aurora-spin 10s linear infinite;
}

@keyframes aurora-pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.8; }
}

@keyframes aurora-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.aurora-input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-aurora-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.aurora-input-group i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
    z-index: 2;
    transition: all 0.3s ease;
}

.aurora-input-group input {
    width: 100%;
    padding: 16px 16px 16px 48px;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.95rem;
    position: relative;
    z-index: 2;
}

.aurora-input-group input:focus {
    outline: none;
}

.aurora-input-group input:focus ~ .input-aurora-bg {
    background: rgba(46, 213, 115, 0.05);
    border-color: rgba(46, 213, 115, 0.3);
    box-shadow: 0 0 20px rgba(46, 213, 115, 0.1);
}

.aurora-input-group input:focus + i {
    color: #2ed573;
}

.aurora-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #2ed573, #00b894, #0984e3);
    transition: width 0.3s ease;
    border-radius: 2px;
}

.aurora-input-group input:focus ~ .aurora-glow {
    width: 100%;
}

.aurora-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    z-index: 3;
}

.aurora-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.aurora-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
}

.aurora-checkbox input {
    display: none;
}

.aurora-checkmark {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.aurora-checkbox input:checked + .aurora-checkmark {
    background: #2ed573;
    border-color: #2ed573;
    color: white;
}

.aurora-link {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    font-size: 0.8rem;
    transition: color 0.3s ease;
}

.aurora-link:hover {
    color: #2ed573;
}

.form-btn.aurora-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: rgba(46, 213, 115, 0.1);
    color: white;
    border: 1px solid rgba(46, 213, 115, 0.3);
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
}

.aurora-btn-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(46, 213, 115, 0.3), transparent);
    top: 0;
    left: -100%;
    animation: aurora-scan 3s infinite;
}

@keyframes aurora-scan {
    0% { left: -100%; }
    100% { left: 100%; }
}

.form-btn.aurora-btn:hover {
    background: rgba(46, 213, 115, 0.2);
    border-color: rgba(46, 213, 115, 0.6);
    transform: translateY(-2px);
}

.aurora-divider {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
}

.divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.divider-text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.aurora-footer {
    text-align: center;
}

.aurora-signup-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.aurora-signup-link:hover {
    color: #2ed573;
    gap: 12px;
}`,
    js: `// Aurora Glassmorphism Login
document.addEventListener('DOMContentLoaded', function() {
    const auroraForm = document.querySelector('.aurora-form');
    
    if (auroraForm) {
        auroraForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showAuroraNotification('Please enter your credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.aurora-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Illuminating...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to Aurora!</span> <i class="fas fa-sun"></i>';
                showAuroraNotification('Login successful! The light welcomes you.', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.aurora-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const auroraToggle = auroraForm.querySelector('.aurora-toggle');
        if (auroraToggle) {
            auroraToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showAuroraNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(10, 15, 30, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid \${type === 'success' ? '#2ed573' : '#ff6b6b'};
            border-radius: 16px;
            color: white;
            padding: 16px 28px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 49: Circuit Board Login
// ====================================================================
form49: {
    name: "Circuit Board Login",
    category: "login modern tech",
    html: `<div class="form-container circuit-board-bg">
    <div class="circuit-paths">
        <div class="path vertical"></div>
        <div class="path horizontal"></div>
        <div class="path diagonal"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="node"></div>
        <div class="trace"></div>
    </div>
    <div class="circuit-core">
        <div class="form-header">
            <div class="circuit-logo">
                <i class="fas fa-microchip"></i>
            </div>
            <h3>System Login</h3>
            <p>Secure core access</p>
        </div>
        <form class="circuit-form">
            <div class="circuit-input-field">
                <div class="field-label">
                    <span class="label-text">USER_ID</span>
                    <span class="label-status">[REQUIRED]</span>
                </div>
                <div class="circuit-input-wrapper">
                    <i class="fas fa-id-card"></i>
                    <input type="text" placeholder="Enter user ID" required>
                    <div class="input-trace"></div>
                </div>
            </div>
            
            <div class="circuit-input-field">
                <div class="field-label">
                    <span class="label-text">PASSKEY</span>
                    <span class="label-status">[ENCRYPTED]</span>
                </div>
                <div class="circuit-input-wrapper">
                    <i class="fas fa-key"></i>
                    <input type="password" placeholder="Enter passkey" required>
                    <button type="button" class="circuit-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                    <div class="input-trace"></div>
                </div>
            </div>
            
            <div class="circuit-options">
                <label class="circuit-checkbox">
                    <input type="checkbox" checked>
                    <span class="circuit-checkmark"></span>
                    <span class="circuit-checkbox-text">Establish secure session</span>
                </label>
                <a href="#" class="circuit-link">
                    <i class="fas fa-shield"></i>
                    Reset
                </a>
            </div>
            
            <button type="submit" class="form-btn circuit-btn">
                <span>INITIALIZE</span>
                <i class="fas fa-power-off"></i>
                <div class="circuit-pulse"></div>
            </button>
            
            <div class="circuit-footer">
                <span class="footer-signal">📶 SIGNAL STRONG</span>
                <div class="footer-links">
                    <a href="#" class="circuit-footer-link">Diagnostic</a>
                    <span class="separator">|</span>
                    <a href="#" class="circuit-footer-link">Recovery</a>
                </div>
            </div>
        </form>
    </div>
</div>`,
    css: `.circuit-board-bg {
    background: #0b0e14;
    border-radius: 20px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    border: 1px solid #2a3a4a;
    max-height: 280px;
    overflow-y: auto;
}

.circuit-paths {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.path {
    position: absolute;
    background: rgba(0, 255, 157, 0.1);
}

.path.vertical {
    width: 1px;
    height: 100%;
    left: 20%;
    background: linear-gradient(to bottom, transparent, rgba(0, 255, 157, 0.2), transparent);
}

.path.horizontal {
    width: 100%;
    height: 1px;
    top: 30%;
    background: linear-gradient(to right, transparent, rgba(0, 255, 157, 0.2), transparent);
}

.path.diagonal {
    width: 2px;
    height: 100%;
    left: 70%;
    transform: rotate(45deg);
    background: linear-gradient(to bottom, transparent, rgba(0, 255, 157, 0.15), transparent);
}

.node {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00ff9d;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff9d;
}

.node:nth-child(4) { top: 20%; left: 20%; animation: node-pulse 2s infinite; }
.node:nth-child(5) { top: 60%; left: 45%; animation: node-pulse 2s infinite 0.5s; }
.node:nth-child(6) { top: 40%; left: 75%; animation: node-pulse 2s infinite 1s; }
.node:nth-child(7) { top: 80%; left: 30%; animation: node-pulse 2s infinite 1.5s; }

@keyframes node-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
}

.trace {
    position: absolute;
    width: 40px;
    height: 2px;
    background: rgba(0, 255, 157, 0.1);
    top: 25%;
    right: 15%;
    transform: rotate(45deg);
}

.trace::before,
.trace::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #00ff9d;
    border-radius: 50%;
    top: -2px;
}

.trace::before { left: -3px; }
.trace::after { right: -3px; }

.circuit-core {
    position: relative;
    z-index: 10;
}

.circuit-logo {
    width: 70px;
    height: 70px;
    background: rgba(0, 255, 157, 0.05);
    border: 2px solid rgba(0, 255, 157, 0.3);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 2rem;
    color: #00ff9d;
    position: relative;
}

.circuit-logo::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid rgba(0, 255, 157, 0.3);
    border-radius: 17px;
    animation: circuit-pulse 2s infinite;
}

@keyframes circuit-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
}

.circuit-input-field {
    margin-bottom: 20px;
}

.field-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.label-text {
    color: #00ff9d;
    font-weight: 600;
}

.label-status {
    color: rgba(0, 255, 157, 0.5);
    font-size: 0.6rem;
}

.circuit-input-wrapper {
    position: relative;
    background: rgba(0, 255, 157, 0.03);
    border: 1px solid rgba(0, 255, 157, 0.2);
    border-radius: 8px;
    padding: 0 16px;
    display: flex;
    align-items: center;
}

.circuit-input-wrapper i {
    color: rgba(0, 255, 157, 0.5);
    font-size: 0.9rem;
}

.circuit-input-wrapper input {
    width: 100%;
    padding: 14px 12px;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.9rem;
    font-family: 'Courier New', monospace;
}

.circuit-input-wrapper input:focus {
    outline: none;
}

.circuit-input-wrapper:focus-within {
    border-color: #00ff9d;
    box-shadow: 0 0 15px rgba(0, 255, 157, 0.2);
}

.input-trace {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    background: #00ff9d;
    box-shadow: 0 0 10px #00ff9d;
    transition: width 0.3s ease;
}

.circuit-input-wrapper:focus-within .input-trace {
    width: 100%;
}

.circuit-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: rgba(0, 255, 157, 0.5);
    cursor: pointer;
}

.circuit-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.circuit-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: rgba(0, 255, 157, 0.8);
    font-size: 0.75rem;
    font-family: 'Courier New', monospace;
}

.circuit-checkbox input {
    display: none;
}

.circuit-checkmark {
    width: 16px;
    height: 16px;
    border: 1px solid #00ff9d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    color: transparent;
}

.circuit-checkbox input:checked + .circuit-checkmark {
    background: #00ff9d;
    color: #0b0e14;
}

.circuit-link {
    color: rgba(0, 255, 157, 0.7);
    text-decoration: none;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 5px;
}

.form-btn.circuit-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: transparent;
    color: #00ff9d;
    border: 1px solid #00ff9d;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: 'Courier New', monospace;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
}

.circuit-pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 255, 157, 0.1);
    top: 0;
    left: -100%;
    transition: left 0.3s ease;
}

.form-btn.circuit-btn:hover .circuit-pulse {
    left: 0;
}

.circuit-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.65rem;
    font-family: 'Courier New', monospace;
}

.footer-signal {
    color: #00ff9d;
    animation: signal-blink 2s infinite;
}

@keyframes signal-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.footer-links {
    display: flex;
    gap: 8px;
}

.circuit-footer-link {
    color: rgba(0, 255, 157, 0.5);
    text-decoration: none;
}

.separator {
    color: rgba(0, 255, 157, 0.2);
}`,
    js: `// Circuit Board Login
document.addEventListener('DOMContentLoaded', function() {
    const circuitForm = document.querySelector('.circuit-form');
    
    if (circuitForm) {
        circuitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const userId = this.querySelector('input[placeholder="Enter user ID"]').value;
            const passkey = this.querySelector('input[placeholder="Enter passkey"]').value;
            
            if (!userId || !passkey) {
                showCircuitNotification('ACCESS DENIED: Missing credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.circuit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>INITIALIZING...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>ACCESS GRANTED</span> <i class="fas fa-check"></i>';
                showCircuitNotification('Secure connection established', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.circuit-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const circuitToggle = circuitForm.querySelector('.circuit-toggle');
        if (circuitToggle) {
            circuitToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showCircuitNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0b0e14;
            border: 1px solid \${type === 'success' ? '#00ff9d' : '#ff6b6b'};
            color: \${type === 'success' ? '#00ff9d' : '#ff6b6b'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-family: 'Courier New', monospace;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? 'rgba(0, 255, 157, 0.3)' : 'rgba(255, 107, 107, 0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 50: Claymorphism Login
// ====================================================================
form50: {
    name: "Claymorphism Login",
    category: "login modern clay",
    html: `<div class="form-container claymorphism-bg">
    <div class="clay-shapes">
        <div class="clay-circle"></div>
        <div class="clay-rect"></div>
        <div class="clay-blob"></div>
    </div>
    <div class="clay-card">
        <div class="form-header">
            <div class="clay-icon">
                <i class="fas fa-hand-peace"></i>
            </div>
            <h3>Welcome back</h3>
            <p>Sign in to your clay world</p>
        </div>
        <form class="clay-form">
            <div class="clay-input-container">
                <div class="clay-input-wrapper">
                    <div class="clay-input-inner">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email address" required>
                    </div>
                </div>
            </div>
            
            <div class="clay-input-container">
                <div class="clay-input-wrapper">
                    <div class="clay-input-inner">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required>
                        <button type="button" class="clay-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="clay-options">
                <label class="clay-checkbox">
                    <input type="checkbox" checked>
                    <span class="clay-checkmark">
                        <i class="fas fa-check"></i>
                    </span>
                    <span class="clay-checkbox-text">Keep me signed in</span>
                </label>
            </div>
            
            <button type="submit" class="form-btn clay-btn">
                <span>Sign In</span>
                <i class="fas fa-arrow-right"></i>
            </button>
            
            <div class="clay-links">
                <a href="#" class="clay-link">Forgot password?</a>
                <span class="clay-divider">•</span>
                <a href="#" class="clay-link">Create account</a>
            </div>
            
            <div class="clay-social">
                <span class="social-label">Or continue with</span>
                <div class="social-icons">
                    <button type="button" class="clay-social-btn">
                        <i class="fab fa-google"></i>
                    </button>
                    <button type="button" class="clay-social-btn">
                        <i class="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" class="clay-social-btn">
                        <i class="fab fa-apple"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>`,
    css: `.claymorphism-bg {
    background: #f4e4d4;
    border-radius: 40px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.clay-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.clay-circle {
    position: absolute;
    width: 150px;
    height: 150px;
    background: #ffb88c;
    border-radius: 50%;
    top: -50px;
    right: -50px;
    opacity: 0.3;
    filter: blur(30px);
}

.clay-rect {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #a5d8ff;
    border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
    bottom: -80px;
    left: -80px;
    opacity: 0.3;
    filter: blur(40px);
}

.clay-blob {
    position: absolute;
    width: 120px;
    height: 120px;
    background: #ffd3b6;
    border-radius: 70% 30% 60% 40% / 50% 60% 40% 50%;
    top: 40%;
    left: 20%;
    opacity: 0.2;
    filter: blur(30px);
}

.clay-card {
    position: relative;
    background: #ffe8d6;
    border-radius: 40px;
    padding: 20px;
    box-shadow: 
        20px 20px 40px rgba(163, 137, 119, 0.2),
        -10px -10px 30px rgba(255, 255, 255, 0.7),
        inset 2px 2px 5px rgba(255, 255, 255, 0.5),
        inset -3px -3px 7px rgba(163, 137, 119, 0.1);
    z-index: 10;
}

.clay-icon {
    width: 70px;
    height: 70px;
    background: #ffe8d6;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 2rem;
    color: #a7826e;
    box-shadow: 
        12px 12px 24px rgba(163, 137, 119, 0.2),
        -12px -12px 24px rgba(255, 255, 255, 0.7),
        inset 4px 4px 8px rgba(255, 255, 255, 0.5),
        inset -4px -4px 8px rgba(163, 137, 119, 0.1);
}

.clay-input-container {
    margin-bottom: 20px;
}

.clay-input-wrapper {
    background: #ffe8d6;
    border-radius: 50px;
    padding: 4px;
    box-shadow: 
        inset 6px 6px 12px rgba(163, 137, 119, 0.1),
        inset -6px -6px 12px rgba(255, 255, 255, 0.5);
}

.clay-input-inner {
    display: flex;
    align-items: center;
    background: #ffe8d6;
    border-radius: 50px;
    padding: 0 20px;
    box-shadow: 
        6px 6px 12px rgba(163, 137, 119, 0.1),
        -6px -6px 12px rgba(255, 255, 255, 0.5);
}

.clay-input-inner i {
    color: #a7826e;
    font-size: 0.95rem;
    margin-right: 12px;
}

.clay-input-inner input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: #4a3b30;
    font-size: 0.95rem;
}

.clay-input-inner input:focus {
    outline: none;
}

.clay-input-inner input::placeholder {
    color: #c0a392;
}

.clay-toggle {
    background: none;
    border: none;
    color: #a7826e;
    cursor: pointer;
}

.clay-options {
    margin: 25px 0;
}

.clay-checkbox {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: #5e4b3c;
    font-size: 0.85rem;
}

.clay-checkbox input {
    display: none;
}

.clay-checkmark {
    width: 22px;
    height: 22px;
    background: #ffe8d6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 0.7rem;
    box-shadow: 
        4px 4px 8px rgba(163, 137, 119, 0.1),
        -4px -4px 8px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.5),
        inset -2px -2px 4px rgba(163, 137, 119, 0.1);
}

.clay-checkbox input:checked + .clay-checkmark {
    background: #a7826e;
    color: white;
    box-shadow: 
        inset 4px 4px 8px rgba(75, 59, 48, 0.2),
        inset -4px -4px 8px rgba(255, 255, 255, 0.1);
}

.form-btn.clay-btn {
    width: 100%;
    padding: 18px;
    background: #ffe8d6;
    color: #4a3b30;
    border: none;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    box-shadow: 
        12px 12px 24px rgba(163, 137, 119, 0.2),
        -12px -12px 24px rgba(255, 255, 255, 0.7),
        inset 2px 2px 5px rgba(255, 255, 255, 0.5),
        inset -3px -3px 7px rgba(163, 137, 119, 0.1);
    transition: all 0.2s ease;
}

.form-btn.clay-btn:hover {
    box-shadow: 
        inset 8px 8px 16px rgba(163, 137, 119, 0.2),
        inset -8px -8px 16px rgba(255, 255, 255, 0.7);
    color: #a7826e;
}

.clay-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.clay-link {
    color: #a7826e;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 500;
}

.clay-divider {
    color: #d4b6a4;
}

.clay-social {
    text-align: center;
}

.social-label {
    display: block;
    color: #a7826e;
    font-size: 0.75rem;
    margin-bottom: 15px;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
}

.clay-social-btn {
    width: 48px;
    height: 48px;
    background: #ffe8d6;
    border: none;
    border-radius: 25px;
    color: #a7826e;
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: 
        8px 8px 16px rgba(163, 137, 119, 0.1),
        -8px -8px 16px rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease;
}

.clay-social-btn:hover {
    box-shadow: 
        inset 6px 6px 12px rgba(163, 137, 119, 0.1),
        inset -6px -6px 12px rgba(255, 255, 255, 0.5);
    color: #8b6b5a;
}`,
    js: `// Claymorphism Login
document.addEventListener('DOMContentLoaded', function() {
    const clayForm = document.querySelector('.clay-form');
    
    if (clayForm) {
        clayForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showClayNotification('Please mold your credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.clay-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Shaping...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome back!</span> <i class="fas fa-hand-peace"></i>';
                showClayNotification('Signed in successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.clay-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const clayToggle = clayForm.querySelector('.clay-toggle');
        if (clayToggle) {
            clayToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                    
                    // Clay press effect
                    this.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 200);
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Social buttons
        clayForm.querySelectorAll('.clay-social-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });
    }
    
    function showClayNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ffe8d6;
            border-radius: 50px;
            color: \${type === 'success' ? '#5e4b3c' : '#ff6b6b'};
            padding: 16px 28px;
            font-size: 0.9rem;
            font-weight: 500;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 
                12px 12px 24px rgba(163, 137, 119, 0.2),
                -12px -12px 24px rgba(255, 255, 255, 0.7);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 51: Floating Island Login
// ====================================================================
form51: {
    name: "Floating Island Login",
    category: "login modern whimsical",
    html: `<div class="form-container floating-island-bg">
    <div class="sky">
        <div class="cloud cloud-1"></div>
        <div class="cloud cloud-2"></div>
        <div class="cloud cloud-3"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
    </div>
    <div class="floating-island">
        <div class="island-base">
            <div class="island-grass"></div>
            <div class="island-shadow"></div>
        </div>
        <div class="tree">
            <div class="tree-trunk"></div>
            <div class="tree-leaves"></div>
        </div>
        <div class="island-content">
            <div class="form-header">
                <div class="island-icon">
                    <i class="fas fa-feather"></i>
                </div>
                <h3>Welcome to the Island</h3>
                <p>Sign in to your paradise</p>
            </div>
            <form class="island-form">
                <div class="island-input-group">
                    <div class="input-sand">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email address" required>
                    </div>
                </div>
                
                <div class="island-input-group">
                    <div class="input-sand">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required>
                        <button type="button" class="island-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <div class="island-options">
                    <label class="island-checkbox">
                        <input type="checkbox" checked>
                        <span class="island-checkmark"></span>
                        <span class="island-checkbox-text">Stay on the island</span>
                    </label>
                    <a href="#" class="island-link">Lost password?</a>
                </div>
                
                <button type="submit" class="form-btn island-btn">
                    <span>Arrive</span>
                    <i class="fas fa-sailboat"></i>
                </button>
                
                <div class="island-footer">
                    <span>New to the island?</span>
                    <a href="#" class="island-signup-link">Build your hut</a>
                </div>
            </form>
        </div>
    </div>
    <div class="sea">
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</div>`,
    css: `.floating-island-bg {
    background: linear-gradient(180deg, #87CEEB 0%, #B0E0E6 100%);
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.cloud {
    position: absolute;
    background: white;
    border-radius: 50px;
    opacity: 0.4;
}

.cloud-1 {
    width: 60px;
    height: 25px;
    top: 20%;
    left: 10%;
    animation: float-cloud 20s linear infinite;
}

.cloud-2 {
    width: 80px;
    height: 30px;
    top: 15%;
    right: 15%;
    animation: float-cloud 25s linear infinite;
}

.cloud-3 {
    width: 50px;
    height: 20px;
    bottom: 30%;
    left: 20%;
    animation: float-cloud 18s linear infinite;
}

.cloud::before,
.cloud::after {
    content: '';
    position: absolute;
    background: white;
    border-radius: 50%;
}

.cloud::before {
    width: 30px;
    height: 30px;
    top: -15px;
    left: 10px;
}

.cloud::after {
    width: 40px;
    height: 40px;
    top: -20px;
    left: 25px;
}

@keyframes float-cloud {
    from { transform: translateX(-50px); }
    to { transform: translateX(150px); }
}

.star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 6px white;
}

.star:nth-child(4) { top: 30%; right: 20%; animation: twinkle 2s infinite; }
.star:nth-child(5) { top: 50%; left: 15%; animation: twinkle 2s infinite 0.5s; }
.star:nth-child(6) { bottom: 40%; right: 30%; animation: twinkle 2s infinite 1s; }

@keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
}

.floating-island {
    position: relative;
    z-index: 20;
    animation: float-island 6s ease-in-out infinite;
}

@keyframes float-island {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

.island-base {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: #8B4513;
    border-radius: 50% 50% 30px 30px;
    z-index: 1;
}

.island-grass {
    position: absolute;
    top: -15px;
    left: 0;
    width: 100%;
    height: 25px;
    background: #90EE90;
    border-radius: 50% 50% 0 0;
    z-index: 2;
}

.island-shadow {
    position: absolute;
    bottom: -10px;
    left: 10%;
    width: 80%;
    height: 15px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    filter: blur(5px);
    z-index: 0;
}

.tree {
    position: absolute;
    bottom: 35px;
    right: 20px;
    z-index: 5;
}

.tree-trunk {
    width: 12px;
    height: 35px;
    background: #8B4513;
    border-radius: 5px;
    margin: 0 auto;
}

.tree-leaves {
    position: absolute;
    top: -25px;
    left: -25px;
    width: 60px;
    height: 40px;
    background: #228B22;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    box-shadow: 0 0 0 8px rgba(34, 139, 34, 0.2);
}

.island-content {
    position: relative;
    background: rgba(255, 248, 220, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 30px;
    padding: 20px;
    margin-bottom: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    z-index: 10;
}

.island-icon {
    width: 60px;
    height: 60px;
    background: #FFD700;
    border-radius: 50% 50% 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    color: white;
    font-size: 1.8rem;
    transform: rotate(15deg);
    box-shadow: 0 10px 20px rgba(255, 215, 0, 0.3);
}

.island-input-group {
    margin-bottom: 18px;
}

.input-sand {
    position: relative;
    background: rgba(244, 164, 96, 0.2);
    border: 2px solid rgba(244, 164, 96, 0.3);
    border-radius: 30px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    backdrop-filter: blur(5px);
}

.input-sand i {
    color: #CD853F;
    font-size: 0.9rem;
    margin-right: 12px;
}

.input-sand input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: #5D3A1A;
    font-size: 0.9rem;
}

.input-sand input:focus {
    outline: none;
}

.input-sand input::placeholder {
    color: #A0522D;
}

.island-toggle {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #CD853F;
    cursor: pointer;
}

.island-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.island-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #5D3A1A;
    font-size: 0.8rem;
}

.island-checkbox input {
    display: none;
}

.island-checkmark {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #CD853F;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.island-checkbox input:checked + .island-checkmark {
    background: #CD853F;
    border-color: #CD853F;
    color: white;
}

.island-link {
    color: #8B4513;
    text-decoration: none;
    font-size: 0.8rem;
    border-bottom: 1px dashed #CD853F;
}

.form-btn.island-btn {
    width: 100%;
    padding: 16px;
    background: #FFD700;
    color: #5D3A1A;
    border: none;
    border-radius: 30px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    box-shadow: 0 15px 30px rgba(255, 215, 0, 0.3);
    transition: all 0.3s ease;
}

.form-btn.island-btn:hover {
    background: #FFC800;
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.4);
}

.island-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #5D3A1A;
}

.island-signup-link {
    color: #8B4513;
    text-decoration: none;
    font-weight: 700;
    margin-left: 5px;
    border-bottom: 2px solid #FFD700;
}

.sea {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: #4682B4;
    opacity: 0.3;
    z-index: 5;
}

.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: rgba(70, 130, 180, 0.2);
    border-radius: 50% 50% 0 0;
    animation: wave-move 8s linear infinite;
}

.wave:nth-child(2) {
    bottom: 5px;
    opacity: 0.2;
    animation-delay: -2s;
}

.wave:nth-child(3) {
    bottom: 10px;
    opacity: 0.1;
    animation-delay: -4s;
}

@keyframes wave-move {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}`,
    js: `// Floating Island Login
document.addEventListener('DOMContentLoaded', function() {
    const islandForm = document.querySelector('.island-form');
    
    if (islandForm) {
        islandForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showIslandNotification('Please enter your credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.island-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sailing...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to the island!</span> <i class="fas fa-feather"></i>';
                showIslandNotification('Arrived successfully!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.island-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const islandToggle = islandForm.querySelector('.island-toggle');
        if (islandToggle) {
            islandToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showIslandNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(255, 248, 220, 0.95);
            backdrop-filter: blur(5px);
            border: 2px solid \${type === 'success' ? '#FFD700' : '#CD853F'};
            border-radius: 30px;
            color: \${type === 'success' ? '#5D3A1A' : '#8B4513'};
            padding: 16px 28px;
            font-size: 0.9rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 52: Terminal Matrix Login
// ====================================================================
form52: {
    name: "Terminal Matrix Login",
    category: "login modern matrix",
    html: `<div class="form-container terminal-matrix-bg">
    <canvas class="matrix-canvas"></canvas>
    <div class="matrix-overlay"></div>
    <div class="terminal-window">
        <div class="terminal-bar">
            <div class="terminal-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
            </div>
            <span class="terminal-path">root@matrix:~</span>
        </div>
        <div class="terminal-content">
            <div class="matrix-header">
                <div class="matrix-glitch">>_ MATRIX LOGIN</div>
                <div class="matrix-subtitle">Identify yourself</div>
            </div>
            
            <form class="matrix-form">
                <div class="matrix-line">
                    <span class="prompt">$</span>
                    <span class="command">login --user</span>
                </div>
                <div class="matrix-input-line">
                    <span class="prompt">></span>
                    <input type="text" placeholder="enter username" required class="matrix-input" id="matrix-username">
                    <span class="cursor"></span>
                </div>
                
                <div class="matrix-line">
                    <span class="prompt">$</span>
                    <span class="command">login --pass</span>
                </div>
                <div class="matrix-input-line">
                    <span class="prompt">#</span>
                    <input type="password" placeholder="enter password" required class="matrix-input" id="matrix-password">
                    <button type="button" class="matrix-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                    <span class="cursor"></span>
                </div>
                
                <div class="matrix-options">
                    <label class="matrix-checkbox">
                        <input type="checkbox" checked>
                        <span class="matrix-checkmark">[ ]</span>
                        <span class="matrix-checkbox-text">remember_session</span>
                    </label>
                </div>
                
                <div class="matrix-buttons">
                    <button type="submit" class="matrix-btn">
                        <span>[ EXECUTE ]</span>
                    </button>
                    <button type="button" class="matrix-reset-btn">
                        <span>[ RESET ]</span>
                    </button>
                </div>
                
                <div class="matrix-footer">
                    <span class="matrix-status">🟢 SYSTEM SECURE</span>
                    <span class="matrix-time">$(date)</span>
                </div>
            </form>
        </div>
    </div>
</div>`,
    css: `.terminal-matrix-bg {
    background: #000000;
    border-radius: 16px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    border: 1px solid #00ff00;
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.1);
    max-height: 280px;
    overflow-y: auto;
}

.matrix-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.15;
    pointer-events: none;
}

.matrix-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.1) 0px,
        rgba(0, 255, 0, 0.05) 1px,
        rgba(0, 0, 0, 0.1) 2px
    );
    pointer-events: none;
}

.terminal-window {
    position: relative;
    background: rgba(0, 0, 0, 0.85);
    border-radius: 12px;
    border: 1px solid #00ff00;
    overflow: hidden;
    backdrop-filter: blur(5px);
    z-index: 10;
}

.terminal-bar {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: rgba(0, 255, 0, 0.05);
    border-bottom: 1px solid rgba(0, 255, 0, 0.2);
}

.terminal-dots {
    display: flex;
    gap: 8px;
    margin-right: 15px;
}

.terminal-dots .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.terminal-dots .dot.red { background: #ff5f56; }
.terminal-dots .dot.yellow { background: #ffbd2e; }
.terminal-dots .dot.green { background: #27c93f; }

.terminal-path {
    color: #00ff00;
    font-size: 0.7rem;
    font-family: 'Courier New', monospace;
    opacity: 0.8;
}

.terminal-content {
    padding: 20px;
}

.matrix-header {
    margin-bottom: 20px;
}

.matrix-glitch {
    font-size: 1.1rem;
    font-weight: 700;
    color: #00ff00;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 3px;
    animation: matrix-glitch 3s infinite;
    position: relative;
}

@keyframes matrix-glitch {
    0%, 100% { text-shadow: 0 0 5px #00ff00; }
    25% { text-shadow: -2px 0 #ff0000, 2px 2px #0000ff; }
    75% { text-shadow: 2px 0 #00ff00, -2px -2px #ff00ff; }
}

.matrix-subtitle {
    color: #008000;
    font-size: 0.7rem;
    font-family: 'Courier New', monospace;
    margin-top: 5px;
}

.matrix-line {
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
    color: #00ff00;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
}

.prompt {
    color: #00ff00;
    font-weight: 700;
}

.command {
    color: #008000;
}

.matrix-input-line {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    padding: 8px;
    background: rgba(0, 255, 0, 0.02);
    border: 1px solid rgba(0, 255, 0, 0.1);
}

.matrix-input {
    flex: 1;
    background: transparent;
    border: none;
    color: #00ff00;
    font-size: 0.85rem;
    font-family: 'Courier New', monospace;
    padding: 8px 0;
}

.matrix-input:focus {
    outline: none;
}

.matrix-input::placeholder {
    color: rgba(0, 255, 0, 0.3);
    font-family: 'Courier New', monospace;
}

.cursor {
    position: absolute;
    right: 12px;
    width: 8px;
    height: 18px;
    background: #00ff00;
    animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.matrix-toggle {
    position: absolute;
    right: 30px;
    background: none;
    border: none;
    color: #00ff00;
    cursor: pointer;
    z-index: 2;
}

.matrix-options {
    margin: 20px 0;
}

.matrix-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #00ff00;
    font-size: 0.75rem;
    font-family: 'Courier New', monospace;
}

.matrix-checkbox input {
    display: none;
}

.matrix-checkmark {
    display: inline-block;
    width: 20px;
}

.matrix-checkbox input:checked + .matrix-checkmark {
    color: #00ff00;
}

.matrix-buttons {
    display: flex;
    gap: 12px;
    margin: 25px 0;
}

.matrix-btn,
.matrix-reset-btn {
    flex: 1;
    padding: 12px;
    background: transparent;
    color: #00ff00;
    border: 1px solid #00ff00;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.matrix-btn:hover {
    background: #00ff00;
    color: #000000;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
}

.matrix-reset-btn {
    opacity: 0.5;
}

.matrix-reset-btn:hover {
    opacity: 1;
    border-color: #ff0000;
    color: #ff0000;
}

.matrix-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 255, 0, 0.2);
    font-size: 0.65rem;
    font-family: 'Courier New', monospace;
}

.matrix-status {
    color: #00ff00;
    display: flex;
    align-items: center;
    gap: 5px;
}

.matrix-status i {
    animation: status-pulse 2s infinite;
}

@keyframes status-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.matrix-time {
    color: rgba(0, 255, 0, 0.5);
}`,
    js: `// Terminal Matrix Login
document.addEventListener('DOMContentLoaded', function() {
    const matrixForm = document.querySelector('.matrix-form');
    
    // Matrix rain effect
    const canvas = document.querySelector('.matrix-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}:<>?';
        const fontSize = 12;
        const columns = canvas.width / fontSize;
        
        const drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        
        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#0f0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        
        const matrixInterval = setInterval(drawMatrix, 50);
        
        // Clear interval when page unloads
        window.addEventListener('beforeunload', function() {
            clearInterval(matrixInterval);
        });
    }
    
    if (matrixForm) {
        matrixForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('matrix-username').value;
            const password = document.getElementById('matrix-password').value;
            
            if (!username || !password) {
                showMatrixNotification('ACCESS DENIED: Missing credentials', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.matrix-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>[ PROCESSING ]</span>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>[ ACCESS GRANTED ]</span>';
                showMatrixNotification('Welcome to the Matrix', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.matrix-checkbox input').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const matrixToggle = matrixForm.querySelector('.matrix-toggle');
        if (matrixToggle) {
            matrixToggle.addEventListener('click', function() {
                const input = document.getElementById('matrix-password');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Reset button
        const resetBtn = matrixForm.querySelector('.matrix-reset-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                matrixForm.reset();
                showMatrixNotification('System reset', 'info');
            });
        }
    }
    
    function showMatrixNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #000000;
            border: 1px solid \${type === 'success' ? '#00ff00' : '#ff0000'};
            color: \${type === 'success' ? '#00ff00' : '#ff0000'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-family: 'Courier New', monospace;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? 'rgba(0,255,0,0.3)' : 'rgba(255,0,0,0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 53: Modern Minimal Contact Form
// ====================================================================
form53: {
    name: "Modern Minimal Contact",
    category: "contact modern minimal",
    html: `<div class="form-container modern-minimal-contact-bg">
    <div class="form-header">
        <div class="contact-icon-wrapper">
            <div class="contact-icon">
                <i class="fas fa-envelope-open-text"></i>
            </div>
        </div>
        <h3>Get in Touch</h3>
        <p>We'd love to hear from you</p>
    </div>
    <form class="modern-minimal-contact-form">
        <div class="form-row">
            <div class="contact-input-group half">
                <div class="input-minimal-wrapper">
                    <input type="text" placeholder="First name" required>
                    <span class="input-highlight"></span>
                </div>
            </div>
            <div class="contact-input-group half">
                <div class="input-minimal-wrapper">
                    <input type="text" placeholder="Last name" required>
                    <span class="input-highlight"></span>
                </div>
            </div>
        </div>
        
        <div class="contact-input-group">
            <div class="input-minimal-wrapper">
                <input type="email" placeholder="Email address" required>
                <span class="input-highlight"></span>
            </div>
        </div>
        
        <div class="contact-input-group">
            <div class="input-minimal-wrapper">
                <select required class="minimal-select">
                    <option value="" disabled selected>Select subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                </select>
                <span class="input-highlight"></span>
            </div>
        </div>
        
        <div class="contact-input-group">
            <div class="input-minimal-wrapper">
                <textarea placeholder="Your message" rows="3" required></textarea>
                <span class="input-highlight"></span>
            </div>
            <div class="char-counter">0/500</div>
        </div>
        
        <div class="contact-options">
            <label class="contact-checkbox">
                <input type="checkbox" checked>
                <span class="contact-checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span class="contact-checkbox-text">Send me a copy</span>
            </label>
        </div>
        
        <button type="submit" class="form-btn minimal-contact-btn">
            <span>Send Message</span>
            <i class="fas fa-paper-plane"></i>
        </button>
        
        <div class="contact-alt-info">
            <span class="alt-text">Prefer email?</span>
            <a href="mailto:hello@example.com" class="alt-email">hello@example.com</a>
        </div>
    </form>
</div>`,
    css: `.modern-minimal-contact-bg {
    background: white;
    border-radius: 32px;
    padding: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #f0f0f0;
    max-height: 280px;
    overflow-y: auto;
}

.contact-icon-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.contact-icon {
    width: 70px;
    height: 70px;
    background: #f8fafc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #3b82f6;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
}

.form-row {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.contact-input-group {
    margin-bottom: 20px;
}

.contact-input-group.half {
    flex: 1;
    margin-bottom: 0;
}

.input-minimal-wrapper {
    position: relative;
}

.input-minimal-wrapper input,
.input-minimal-wrapper select,
.input-minimal-wrapper textarea {
    width: 100%;
    padding: 14px 0;
    border: none;
    border-bottom: 2px solid #e2e8f0;
    background: transparent;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    color: #1e293b;
}

.input-minimal-wrapper select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0 center;
    background-size: 16px;
}

.input-minimal-wrapper textarea {
    resize: vertical;
    min-height: 60px;
}

.input-minimal-wrapper input:focus,
.input-minimal-wrapper select:focus,
.input-minimal-wrapper textarea:focus {
    outline: none;
    border-bottom-color: #3b82f6;
}

.input-minimal-wrapper input::placeholder,
.input-minimal-wrapper textarea::placeholder {
    color: #94a3b8;
}

.input-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
}

.input-minimal-wrapper input:focus ~ .input-highlight,
.input-minimal-wrapper select:focus ~ .input-highlight,
.input-minimal-wrapper textarea:focus ~ .input-highlight {
    width: 100%;
}

.char-counter {
    text-align: right;
    font-size: 0.7rem;
    color: #94a3b8;
    margin-top: 5px;
}

.contact-options {
    margin: 20px 0;
}

.contact-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.8rem;
    color: #475569;
}

.contact-checkbox input {
    display: none;
}

.contact-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.contact-checkbox input:checked + .contact-checkmark {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
}

.form-btn.minimal-contact-btn {
    width: 100%;
    padding: 16px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.form-btn.minimal-contact-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.contact-alt-info {
    text-align: center;
    font-size: 0.8rem;
    color: #64748b;
}

.alt-email {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;
}`,
    js: `// Modern Minimal Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const minimalContactForm = document.querySelector('.modern-minimal-contact-form');
    
    if (minimalContactForm) {
        // Character counter
        const textarea = minimalContactForm.querySelector('textarea');
        const counter = minimalContactForm.querySelector('.char-counter');
        
        if (textarea && counter) {
            textarea.addEventListener('input', function() {
                const length = this.value.length;
                counter.textContent = \`\${length}/500\`;
                
                if (length > 450) {
                    counter.style.color = '#ef4444';
                } else if (length > 400) {
                    counter.style.color = '#f59e0b';
                } else {
                    counter.style.color = '#94a3b8';
                }
            });
        }
        
        // Form submission
        minimalContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = this.querySelector('input[placeholder="First name"]').value;
            const lastName = this.querySelector('input[placeholder="Last name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const subject = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            if (!firstName || !lastName || !email || !subject || !message) {
                showContactNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.minimal-contact-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                showContactNotification('Thank you for contacting us!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.contact-checkbox input').checked = true;
                    counter.textContent = '0/500';
                }, 2000);
            }, 2000);
        });
    }
    
    function showContactNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 54: Floating Label Contact Form
// ====================================================================
form54: {
    name: "Floating Label Contact",
    category: "contact modern floating",
    html: `<div class="form-container floating-label-contact-bg">
    <div class="floating-particles">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>
    <div class="form-header">
        <div class="floating-contact-icon">
            <i class="fas fa-comment-dots"></i>
        </div>
        <h3>Drop us a line</h3>
        <p>We typically reply within 24 hours</p>
    </div>
    <form class="floating-label-form">
        <div class="floating-input-group">
            <div class="floating-label-wrapper">
                <input type="text" id="floating-name" required class="floating-input">
                <label for="floating-name">Your full name</label>
                <div class="floating-border"></div>
                <i class="fas fa-user"></i>
            </div>
        </div>
        
        <div class="floating-input-group">
            <div class="floating-label-wrapper">
                <input type="email" id="floating-email" required class="floating-input">
                <label for="floating-email">Email address</label>
                <div class="floating-border"></div>
                <i class="fas fa-envelope"></i>
            </div>
        </div>
        
        <div class="floating-input-group">
            <div class="floating-label-wrapper">
                <select id="floating-subject" required class="floating-select">
                    <option value="" disabled selected></option>
                    <option value="question">Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                    <option value="collaboration">Collaboration</option>
                </select>
                <label for="floating-subject">Select subject</label>
                <div class="floating-border"></div>
                <i class="fas fa-tag"></i>
            </div>
        </div>
        
        <div class="floating-input-group">
            <div class="floating-label-wrapper">
                <textarea id="floating-message" required class="floating-textarea" rows="3"></textarea>
                <label for="floating-message">Your message</label>
                <div class="floating-border"></div>
                <i class="fas fa-pencil-alt"></i>
            </div>
            <div class="floating-counter">0/500</div>
        </div>
        
        <div class="floating-actions">
            <button type="submit" class="form-btn floating-contact-btn">
                <span>Send</span>
                <i class="fas fa-paper-plane"></i>
                <div class="btn-floating-effect"></div>
            </button>
        </div>
        
        <div class="floating-footer">
            <span class="response-time">
                <i class="fas fa-clock"></i>
                Average response: 2.4h
            </span>
        </div>
    </form>
</div>`,
    css: `.floating-label-contact-bg {
    background: linear-gradient(145deg, #0f172a, #1e293b);
    border-radius: 28px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.floating-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.floating-particles .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: rgba(59, 130, 246, 0.2);
    border-radius: 50%;
    animation: float-particle 15s linear infinite;
}

.floating-particles .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.floating-particles .particle:nth-child(2) { top: 60%; left: 80%; animation-delay: 3s; }
.floating-particles .particle:nth-child(3) { top: 80%; left: 30%; animation-delay: 6s; }
.floating-particles .particle:nth-child(4) { top: 40%; left: 70%; animation-delay: 9s; }

@keyframes float-particle {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
    50% { transform: translateY(-20px) scale(1.5); opacity: 0.5; }
}

.floating-contact-icon {
    width: 70px;
    height: 70px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 2rem;
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
    backdrop-filter: blur(5px);
}

.floating-input-group {
    margin-bottom: 25px;
    position: relative;
    z-index: 2;
}

.floating-label-wrapper {
    position: relative;
}

.floating-label-wrapper i {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    z-index: 2;
}

.floating-input,
.floating-select,
.floating-textarea {
    width: 100%;
    padding: 16px 0 16px 30px;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.floating-textarea {
    resize: vertical;
    min-height: 50px;
}

.floating-select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0 center;
    background-size: 16px;
}

.floating-select option {
    background: #1e293b;
    color: white;
}

.floating-input:focus,
.floating-select:focus,
.floating-textarea:focus {
    outline: none;
    border-bottom-color: #3b82f6;
}

.floating-label-wrapper label {
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    pointer-events: none;
}

.floating-textarea + label {
    top: 16px;
    transform: none;
}

.floating-input:focus + label,
.floating-select:focus + label,
.floating-textarea:focus + label,
.floating-input:not(:placeholder-shown) + label,
.floating-select:not([value=""]):valid + label,
.floating-textarea:not(:placeholder-shown) + label {
    top: -10px;
    left: 0;
    font-size: 0.7rem;
    color: #3b82f6;
}

.floating-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
}

.floating-input:focus ~ .floating-border,
.floating-select:focus ~ .floating-border,
.floating-textarea:focus ~ .floating-border {
    width: 100%;
}

.floating-counter {
    text-align: right;
    font-size: 0.7rem;
    color: #94a3b8;
    margin-top: 5px;
}

.form-btn.floating-contact-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.btn-floating-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 100%);
    transform: scale(0);
    opacity: 0;
    transition: all 0.5s ease;
}

.form-btn.floating-contact-btn:hover .btn-floating-effect {
    transform: scale(2);
    opacity: 0.5;
}

.floating-footer {
    text-align: center;
}

.response-time {
    color: #94a3b8;
    font-size: 0.75rem;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.response-time i {
    color: #3b82f6;
}`,
    js: `// Floating Label Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const floatingForm = document.querySelector('.floating-label-form');
    
    if (floatingForm) {
        // Character counter
        const textarea = floatingForm.querySelector('.floating-textarea');
        const counter = floatingForm.querySelector('.floating-counter');
        
        if (textarea && counter) {
            textarea.addEventListener('input', function() {
                const length = this.value.length;
                counter.textContent = \`\${length}/500\`;
            });
        }
        
        // Form submission
        floatingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('floating-name').value;
            const email = document.getElementById('floating-email').value;
            const subject = document.getElementById('floating-subject').value;
            const message = document.getElementById('floating-message').value;
            
            if (!name || !email || !subject || !message) {
                showFloatingNotification('Please complete all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.floating-contact-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Sent!</span> <i class="fas fa-check"></i>';
                showFloatingNotification('Your message has been sent', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    counter.textContent = '0/500';
                }, 2000);
            }, 2000);
        });
    }
    
    function showFloatingNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(145deg, #0f172a, #1e293b);
            border: 1px solid \${type === 'success' ? '#3b82f6' : '#ef4444'};
            border-radius: 12px;
            color: white;
            padding: 12px 24px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 55: Gradient Card Contact Form
// ====================================================================
form55: {
    name: "Gradient Card Contact",
    category: "contact modern gradient",
    html: `<div class="form-container gradient-card-contact-bg">
    <div class="gradient-orb orb-1"></div>
    <div class="gradient-orb orb-2"></div>
    <div class="gradient-orb orb-3"></div>
    <div class="gradient-card">
        <div class="card-shine"></div>
        <div class="form-header">
            <div class="gradient-contact-icon">
                <i class="fas fa-heart"></i>
            </div>
            <h3>We're here to help</h3>
            <p>Send us a message anytime</p>
        </div>
        
        <div class="contact-info-bar">
            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>San Francisco, CA</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-item">
                <i class="fas fa-phone-alt"></i>
                <span>+1 (555) 123-4567</span>
            </div>
            <div class="info-divider"></div>
            <div class="info-item">
                <i class="fas fa-envelope"></i>
                <span>hello@company.com</span>
            </div>
        </div>
        
        <form class="gradient-contact-form">
            <div class="gradient-input-row">
                <div class="gradient-input-group">
                    <div class="gradient-input-wrapper">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Full name" required>
                        <div class="gradient-border"></div>
                    </div>
                </div>
                <div class="gradient-input-group">
                    <div class="gradient-input-wrapper">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" required>
                        <div class="gradient-border"></div>
                    </div>
                </div>
            </div>
            
            <div class="gradient-input-group">
                <div class="gradient-input-wrapper">
                    <i class="fas fa-heading"></i>
                    <input type="text" placeholder="Subject" required>
                    <div class="gradient-border"></div>
                </div>
            </div>
            
            <div class="gradient-input-group">
                <div class="gradient-input-wrapper">
                    <i class="fas fa-comment"></i>
                    <textarea placeholder="Your message..." rows="3" required></textarea>
                    <div class="gradient-border"></div>
                </div>
                <div class="gradient-char-counter">0/500</div>
            </div>
            
            <div class="gradient-attachment">
                <label class="attachment-label">
                    <i class="fas fa-paperclip"></i>
                    <span>Attach file (max 10MB)</span>
                    <input type="file" class="attachment-input">
                </label>
            </div>
            
            <button type="submit" class="form-btn gradient-contact-btn">
                <span>Send Message</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </form>
        
        <div class="gradient-social">
            <span class="social-text">Connect with us:</span>
            <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
</div>`,
    css: `.gradient-card-contact-bg {
    background: #0b0e14;
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
}

.orb-1 {
    width: 200px;
    height: 200px;
    background: #4158D0;
    top: -50px;
    right: -50px;
    opacity: 0.3;
}

.orb-2 {
    width: 250px;
    height: 250px;
    background: #C850C0;
    bottom: -80px;
    left: -80px;
    opacity: 0.2;
}

.orb-3 {
    width: 150px;
    height: 150px;
    background: #FFCC70;
    top: 30%;
    left: 20%;
    opacity: 0.15;
}

.gradient-card {
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 10;
}

.card-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 80%);
    pointer-events: none;
}

.gradient-contact-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, #4158D0, #C850C0);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    font-size: 1.8rem;
    color: white;
    transform: rotate(5deg);
}

.contact-info-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 20px 0;
    padding: 12px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50px;
    flex-wrap: wrap;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.75rem;
}

.info-item i {
    color: #C850C0;
    font-size: 0.8rem;
}

.info-divider {
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
}

.gradient-input-row {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.gradient-input-group {
    flex: 1;
    margin-bottom: 15px;
}

.gradient-input-wrapper {
    position: relative;
}

.gradient-input-wrapper i {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    z-index: 2;
}

.gradient-input-wrapper input,
.gradient-input-wrapper textarea {
    width: 100%;
    padding: 16px 16px 16px 48px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: white;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.gradient-input-wrapper textarea {
    resize: vertical;
    min-height: 60px;
}

.gradient-input-wrapper input:focus,
.gradient-input-wrapper textarea:focus {
    outline: none;
    border-color: #4158D0;
    background: rgba(65, 88, 208, 0.1);
}

.gradient-border {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid transparent;
    border-radius: 16px;
    transition: all 0.3s ease;
    pointer-events: none;
}

.gradient-input-wrapper input:focus ~ .gradient-border,
.gradient-input-wrapper textarea:focus ~ .gradient-border {
    border-color: linear-gradient(45deg, #4158D0, #C850C0);
}

.gradient-char-counter {
    text-align: right;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 5px;
}

.gradient-attachment {
    margin: 15px 0;
}

.attachment-label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px dashed rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    transition: all 0.3s ease;
}

.attachment-label:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: #C850C0;
}

.attachment-label i {
    color: #C850C0;
}

.attachment-input {
    display: none;
}

.form-btn.gradient-contact-btn {
    width: 100%;
    padding: 16px;
    background: linear-gradient(45deg, #4158D0, #C850C0);
    color: white;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    transition: all 0.3s ease;
}

.form-btn.gradient-contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(65, 88, 208, 0.4);
}

.gradient-social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-text {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.75rem;
}

.social-icons {
    display: flex;
    gap: 12px;
}

.social-icons .social-icon {
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-icons .social-icon:hover {
    background: linear-gradient(45deg, #4158D0, #C850C0);
    color: white;
    transform: translateY(-3px);
}`,
    js: `// Gradient Card Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const gradientForm = document.querySelector('.gradient-contact-form');
    
    if (gradientForm) {
        // Character counter
        const textarea = gradientForm.querySelector('textarea');
        const counter = gradientForm.querySelector('.gradient-char-counter');
        
        if (textarea && counter) {
            textarea.addEventListener('input', function() {
                const length = this.value.length;
                counter.textContent = \`\${length}/500\`;
            });
        }
        
        // File attachment
        const fileInput = gradientForm.querySelector('.attachment-input');
        const fileLabel = gradientForm.querySelector('.attachment-label span');
        
        if (fileInput && fileLabel) {
            fileInput.addEventListener('change', function() {
                if (this.files.length > 0) {
                    fileLabel.textContent = this.files[0].name;
                } else {
                    fileLabel.textContent = 'Attach file (max 10MB)';
                }
            });
        }
        
        // Form submission
        gradientForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Full name"]').value;
            const email = this.querySelector('input[placeholder="Email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!name || !email || !subject || !message) {
                showGradientNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.gradient-contact-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                showGradientNotification('Your message has been delivered', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    counter.textContent = '0/500';
                    fileLabel.textContent = 'Attach file (max 10MB)';
                }, 2000);
            }, 2000);
        });
    }
    
    function showGradientNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(145deg, #4158D0, #C850C0);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(65,88,208,0.4);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 56: Interactive Map Contact Form
// ====================================================================
form56: {
    name: "Interactive Map Contact",
    category: "contact modern interactive",
    html: `<div class="form-container interactive-map-contact-bg">
    <div class="map-container">
        <div class="map-placeholder">
            <div class="map-grid"></div>
            <div class="map-marker">
                <i class="fas fa-map-pin"></i>
                <span class="marker-pulse"></span>
            </div>
            <div class="map-location-detail">
                <span class="location-name">SnippetCodeHub HQ</span>
                <span class="location-address">123 Code Street, San Francisco</span>
            </div>
        </div>
    </div>
    
    <div class="contact-panel">
        <div class="form-header">
            <h3>Visit our office</h3>
            <p>Or send us a message</p>
        </div>
        
        <div class="quick-contact-info">
            <div class="quick-info-item">
                <div class="info-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="info-detail">
                    <span class="info-label">Call us</span>
                    <span class="info-value">+1 (555) 987-6543</span>
                </div>
            </div>
            <div class="quick-info-item">
                <div class="info-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="info-detail">
                    <span class="info-label">Working hours</span>
                    <span class="info-value">Mon-Fri 9am-6pm</span>
                </div>
            </div>
        </div>
        
        <form class="interactive-contact-form">
            <div class="interactive-input-row">
                <div class="interactive-input-group">
                    <input type="text" placeholder="Name" required>
                    <i class="fas fa-user"></i>
                </div>
                <div class="interactive-input-group">
                    <input type="email" placeholder="Email" required>
                    <i class="fas fa-envelope"></i>
                </div>
            </div>
            
            <div class="interactive-input-group">
                <input type="text" placeholder="Subject" required>
                <i class="fas fa-tag"></i>
            </div>
            
            <div class="interactive-input-group">
                <textarea placeholder="How can we help?" rows="2" required></textarea>
                <i class="fas fa-comment"></i>
            </div>
            
            <div class="interactive-urgency">
                <span class="urgency-label">How urgent is this?</span>
                <div class="urgency-options">
                    <label class="urgency-option">
                        <input type="radio" name="urgency" value="low">
                        <span class="urgency-dot"></span>
                        <span class="urgency-text">Low</span>
                    </label>
                    <label class="urgency-option">
                        <input type="radio" name="urgency" value="medium" checked>
                        <span class="urgency-dot"></span>
                        <span class="urgency-text">Medium</span>
                    </label>
                    <label class="urgency-option">
                        <input type="radio" name="urgency" value="high">
                        <span class="urgency-dot"></span>
                        <span class="urgency-text">High</span>
                    </label>
                </div>
            </div>
            
            <button type="submit" class="form-btn interactive-contact-btn">
                <span>Send Inquiry</span>
                <i class="fas fa-paper-plane"></i>
            </button>
        </form>
    </div>
</div>`,
    css: `.interactive-map-contact-bg {
    background: white;
    border-radius: 24px;
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: 280px;
    overflow-y: auto;
}

.map-container {
    height: 100px;
    background: linear-gradient(145deg, #1e293b, #0f172a);
    position: relative;
    overflow: hidden;
}

.map-placeholder {
    width: 100%;
    height: 100%;
    position: relative;
}

.map-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
}

.map-marker {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.map-marker i {
    font-size: 1.8rem;
    color: #ef4444;
    filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));
    animation: marker-bounce 1.5s infinite;
}

@keyframes marker-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

.marker-pulse {
    position: absolute;
    width: 30px;
    height: 30px;
    background: rgba(239, 68, 68, 0.3);
    border-radius: 50%;
    animation: marker-pulse 2s infinite;
}

@keyframes marker-pulse {
    0% { transform: scale(0.5); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
}

.map-location-detail {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 6px 12px;
    border-radius: 20px;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.location-name {
    font-size: 0.7rem;
    font-weight: 600;
    color: #1e293b;
}

.location-address {
    font-size: 0.6rem;
    color: #64748b;
}

.contact-panel {
    padding: 20px;
}

.quick-contact-info {
    display: flex;
    gap: 20px;
    margin: 15px 0 20px;
}

.quick-info-item {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.info-icon {
    width: 40px;
    height: 40px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b82f6;
}

.info-detail {
    display: flex;
    flex-direction: column;
}

.info-label {
    font-size: 0.65rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.info-value {
    font-size: 0.8rem;
    font-weight: 600;
    color: #1e293b;
}

.interactive-input-row {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
}

.interactive-input-group {
    position: relative;
    flex: 1;
    margin-bottom: 12px;
}

.interactive-input-group i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.85rem;
}

.interactive-input-group input,
.interactive-input-group textarea {
    width: 100%;
    padding: 12px 12px 12px 42px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.interactive-input-group textarea {
    resize: vertical;
    min-height: 50px;
    padding-top: 12px;
}

.interactive-input-group input:focus,
.interactive-input-group textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.interactive-urgency {
    margin: 15px 0;
}

.urgency-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 10px;
}

.urgency-options {
    display: flex;
    gap: 20px;
}

.urgency-option {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.urgency-option input {
    display: none;
}

.urgency-dot {
    width: 16px;
    height: 16px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.urgency-option input:checked + .urgency-dot {
    border-color: #3b82f6;
    border-width: 5px;
}

.urgency-text {
    font-size: 0.75rem;
    color: #475569;
}

.form-btn.interactive-contact-btn {
    width: 100%;
    padding: 14px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    transition: all 0.3s ease;
}

.form-btn.interactive-contact-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}`,
    js: `// Interactive Map Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const interactiveForm = document.querySelector('.interactive-contact-form');
    
    if (interactiveForm) {
        // Form submission
        interactiveForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Name"]').value;
            const email = this.querySelector('input[placeholder="Email"]').value;
            const subject = this.querySelector('input[placeholder="Subject"]').value;
            const message = this.querySelector('textarea').value;
            const urgency = this.querySelector('input[name="urgency"]:checked')?.value;
            
            if (!name || !email || !subject || !message) {
                showMapNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.interactive-contact-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Inquiry Sent!</span> <i class="fas fa-check"></i>';
                showMapNotification('We\'ll get back to you soon!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('input[value="medium"]').checked = true;
                }, 2000);
            }, 2000);
        });
        
        // Map marker animation
        const marker = document.querySelector('.map-marker i');
        if (marker) {
            setInterval(() => {
                marker.style.transform = 'translateY(-8px)';
                setTimeout(() => {
                    marker.style.transform = 'translateY(0)';
                }, 150);
            }, 1500);
        }
    }
    
    function showMapNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 57: Customer Support Contact Form
// ====================================================================
form57: {
    name: "Customer Support Contact",
    category: "contact modern support",
    html: `<div class="form-container support-contact-bg">
    <div class="support-header">
        <div class="support-avatar">
            <i class="fas fa-headset"></i>
        </div>
        <div class="support-title">
            <h3>Customer Support</h3>
            <p>We're here 24/7 to assist you</p>
        </div>
        <div class="support-status">
            <span class="status-dot"></span>
            <span class="status-text">Online</span>
        </div>
    </div>
    
    <div class="support-ticket-panel">
        <div class="ticket-prefill">
            <span class="ticket-label">Common topics:</span>
            <div class="topic-chips">
                <button type="button" class="topic-chip" data-topic="billing">💰 Billing</button>
                <button type="button" class="topic-chip" data-topic="technical">🔧 Technical</button>
                <button type="button" class="topic-chip" data-topic="account">👤 Account</button>
                <button type="button" class="topic-chip" data-topic="feature">✨ Feature request</button>
            </div>
        </div>
        
        <form class="support-form">
            <div class="support-input-row">
                <div class="support-input-group">
                    <label>Full name</label>
                    <div class="support-input-wrapper">
                        <input type="text" placeholder="John Doe" required>
                        <i class="fas fa-user"></i>
                    </div>
                </div>
                <div class="support-input-group">
                    <label>Email address</label>
                    <div class="support-input-wrapper">
                        <input type="email" placeholder="john@example.com" required>
                        <i class="fas fa-envelope"></i>
                    </div>
                </div>
            </div>
            
            <div class="support-input-group">
                <label>Order/Account ID (optional)</label>
                <div class="support-input-wrapper">
                    <input type="text" placeholder="#SCH-12345">
                    <i class="fas fa-hashtag"></i>
                </div>
            </div>
            
            <div class="support-input-group">
                <label>Subject</label>
                <div class="support-input-wrapper">
                    <input type="text" placeholder="Brief summary of your issue" required>
                    <i class="fas fa-heading"></i>
                </div>
            </div>
            
            <div class="support-input-group">
                <label>Message</label>
                <div class="support-input-wrapper">
                    <textarea placeholder="Please describe your issue in detail..." rows="3" required></textarea>
                    <i class="fas fa-comment-dots"></i>
                </div>
                <div class="support-char-counter">0/1000</div>
            </div>
            
            <div class="support-attachment-row">
                <div class="support-attachment">
                    <label class="support-file-label">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <span class="file-label-text">Attach screenshot</span>
                        <span class="file-hint">PNG, JPG up to 5MB</span>
                        <input type="file" accept="image/*" class="support-file-input">
                    </label>
                </div>
                <div class="support-priority">
                    <label class="priority-label">Priority</label>
                    <select class="priority-select">
                        <option value="low">Low</option>
                        <option value="medium" selected>Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                    </select>
                </div>
            </div>
            
            <div class="support-options">
                <label class="support-checkbox">
                    <input type="checkbox" checked>
                    <span class="support-checkmark"></span>
                    <span class="support-checkbox-text">Send me a confirmation email</span>
                </label>
            </div>
            
            <button type="submit" class="form-btn support-submit-btn">
                <span>Create Ticket</span>
                <i class="fas fa-ticket-alt"></i>
            </button>
        </form>
        
        <div class="support-footer">
            <span class="live-chat-link">
                <i class="fas fa-comment"></i>
                Need immediate help? <a href="#">Start live chat</a>
            </span>
            <span class="support-hours">
                <i class="fas fa-clock"></i>
                Avg. response: 15 min
            </span>
        </div>
    </div>
</div>`,
    css: `.support-contact-bg {
    background: white;
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #f0f0f0;
    max-height: 280px;
    overflow-y: auto;
}

.support-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f1f5f9;
}

.support-avatar {
    width: 50px;
    height: 50px;
    background: linear-gradient(145deg, #3b82f6, #2563eb);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
}

.support-title {
    flex: 1;
}

.support-title h3 {
    font-size: 1rem;
    color: #1e293b;
    margin-bottom: 2px;
}

.support-title p {
    font-size: 0.7rem;
    color: #64748b;
}

.support-status {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #f1f5f9;
    padding: 6px 12px;
    border-radius: 30px;
}

.status-dot {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: status-pulse 2s infinite;
}

@keyframes status-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
}

.status-text {
    font-size: 0.7rem;
    font-weight: 600;
    color: #10b981;
}

.support-ticket-panel {
    background: #f8fafc;
    border-radius: 16px;
    padding: 16px;
}

.ticket-prefill {
    margin-bottom: 20px;
}

.ticket-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 10px;
}

.topic-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.topic-chip {
    padding: 8px 14px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 30px;
    font-size: 0.7rem;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s ease;
}

.topic-chip:hover {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;
}

.support-input-row {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.support-input-group {
    flex: 1;
    margin-bottom: 15px;
}

.support-input-group label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 6px;
}

.support-input-wrapper {
    position: relative;
}

.support-input-wrapper i {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    font-size: 0.85rem;
}

.support-input-wrapper input,
.support-input-wrapper select,
.support-input-wrapper textarea {
    width: 100%;
    padding: 12px 12px 12px 42px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.support-input-wrapper textarea {
    resize: vertical;
    min-height: 60px;
    padding-top: 12px;
}

.support-input-wrapper input:focus,
.support-input-wrapper select:focus,
.support-input-wrapper textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.support-char-counter {
    text-align: right;
    font-size: 0.65rem;
    color: #94a3b8;
    margin-top: 5px;
}

.support-attachment-row {
    display: flex;
    gap: 15px;
    margin: 20px 0;
}

.support-attachment {
    flex: 1;
}

.support-file-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background: white;
    border: 1px dashed #cbd5e1;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.support-file-label:hover {
    border-color: #3b82f6;
    background: #f8fafc;
}

.support-file-label i {
    font-size: 1.2rem;
    color: #3b82f6;
    margin-bottom: 5px;
}

.file-label-text {
    font-size: 0.7rem;
    font-weight: 600;
    color: #1e293b;
}

.file-hint {
    font-size: 0.6rem;
    color: #94a3b8;
}

.support-file-input {
    display: none;
}

.support-priority {
    flex: 0.5;
}

.priority-label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 6px;
}

.priority-select {
    width: 100%;
    padding: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.8rem;
    color: #1e293b;
    background: white;
    cursor: pointer;
}

.priority-select:focus {
    outline: none;
    border-color: #3b82f6;
}

.support-options {
    margin: 15px 0;
}

.support-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 0.75rem;
    color: #475569;
}

.support-checkbox input {
    display: none;
}

.support-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.support-checkbox input:checked + .support-checkmark {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
}

.form-btn.support-submit-btn {
    width: 100%;
    padding: 14px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.form-btn.support-submit-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.support-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #e2e8f0;
}

.live-chat-link {
    font-size: 0.75rem;
    color: #64748b;
}

.live-chat-link i {
    color: #3b82f6;
}

.live-chat-link a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 600;
}

.support-hours {
    font-size: 0.7rem;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 5px;
}

.support-hours i {
    color: #3b82f6;
}`,
    js: `// Customer Support Contact Form
document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.querySelector('.support-form');
    
    if (supportForm) {
        // Character counter
        const textarea = supportForm.querySelector('textarea');
        const counter = supportForm.querySelector('.support-char-counter');
        
        if (textarea && counter) {
            textarea.addEventListener('input', function() {
                const length = this.value.length;
                counter.textContent = \`\${length}/1000\`;
                
                if (length > 950) {
                    counter.style.color = '#ef4444';
                } else if (length > 800) {
                    counter.style.color = '#f59e0b';
                } else {
                    counter.style.color = '#94a3b8';
                }
            });
        }
        
        // Topic chips
        const topicChips = document.querySelectorAll('.topic-chip');
        topicChips.forEach(chip => {
            chip.addEventListener('click', function() {
                const topic = this.dataset.topic;
                const subjectInput = supportForm.querySelector('input[placeholder="Brief summary of your issue"]');
                
                if (subjectInput) {
                    if (topic === 'billing') subjectInput.value = 'Billing inquiry';
                    if (topic === 'technical') subjectInput.value = 'Technical support needed';
                    if (topic === 'account') subjectInput.value = 'Account issue';
                    if (topic === 'feature') subjectInput.value = 'Feature request';
                }
                
                // Visual feedback
                this.style.background = '#3b82f6';
                this.style.color = 'white';
                
                setTimeout(() => {
                    this.style.background = '';
                    this.style.color = '';
                }, 200);
            });
        });
        
        // File attachment
        const fileInput = supportForm.querySelector('.support-file-input');
        const fileLabel = supportForm.querySelector('.file-label-text');
        
        if (fileInput && fileLabel) {
            fileInput.addEventListener('change', function() {
                if (this.files.length > 0) {
                    fileLabel.textContent = this.files[0].name;
                } else {
                    fileLabel.textContent = 'Attach screenshot';
                }
            });
        }
        
        // Form submission
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="John Doe"]').value;
            const email = this.querySelector('input[placeholder="john@example.com"]').value;
            const subject = this.querySelector('input[placeholder="Brief summary of your issue"]').value;
            const message = this.querySelector('textarea').value;
            
            if (!name || !email || !subject || !message) {
                showSupportNotification('Please fill in all required fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.support-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating Ticket...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Ticket Created!</span> <i class="fas fa-check"></i>';
                showSupportNotification('Your support ticket has been submitted', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.support-checkbox input').checked = true;
                    counter.textContent = '0/1000';
                    fileLabel.textContent = 'Attach screenshot';
                }, 2000);
            }, 2000);
        });
    }
    
    function showSupportNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: \${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 58: Quantum 3D Cube Login
// ====================================================================
form58: {
    name: "Quantum 3D Cube Login",
    category: "login 3d quantum",
    html: `<div class="form-container quantum-3d-cube-bg">
    <div class="quantum-particles" id="quantum-particles-58"></div>
    <div class="cube-3d-container">
        <div class="cube-3d-wrapper">
            <div class="cube-face front">
                <div class="cube-content">
                    <div class="quantum-logo">
                        <i class="fas fa-atom"></i>
                    </div>
                    <h3 class="quantum-title">QUANTUM<span>ACCESS</span></h3>
                    <form class="quantum-form">
                        <div class="quantum-input-field">
                            <div class="quantum-input-wrapper">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Quantum ID" required>
                                <div class="quantum-glow"></div>
                            </div>
                        </div>
                        <div class="quantum-input-field">
                            <div class="quantum-input-wrapper">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Entanglement Key" required>
                                <button type="button" class="quantum-toggle">
                                    <i class="fas fa-eye"></i>
                                </button>
                                <div class="quantum-glow"></div>
                            </div>
                        </div>
                        <div class="quantum-options">
                            <label class="quantum-checkbox">
                                <input type="checkbox" checked>
                                <span class="quantum-checkmark"></span>
                                <span>Quantum Memory</span>
                            </label>
                            <a href="#" class="quantum-link">Decoherence?</a>
                        </div>
                        <button type="submit" class="quantum-btn">
                            <span>ENTANGLE</span>
                            <i class="fas fa-arrow-right"></i>
                            <div class="quantum-pulse"></div>
                        </button>
                    </form>
                </div>
            </div>
            <div class="cube-face back">
                <div class="cube-back-content">
                    <i class="fas fa-cube"></i>
                    <h4>SECURE NODE</h4>
                    <p>256-bit Quantum Encryption</p>
                </div>
            </div>
            <div class="cube-face right">
                <div class="cube-side-content">
                    <span class="side-digit">01</span>
                    <span class="side-label">QUANTUM</span>
                </div>
            </div>
            <div class="cube-face left">
                <div class="cube-side-content">
                    <span class="side-digit">02</span>
                    <span class="side-label">ENTANGLE</span>
                </div>
            </div>
            <div class="cube-face top">
                <div class="cube-side-content">
                    <span class="side-digit">03</span>
                    <span class="side-label">OBSERVE</span>
                </div>
            </div>
            <div class="cube-face bottom">
                <div class="cube-side-content">
                    <span class="side-digit">04</span>
                    <span class="side-label">COLLAPSE</span>
                </div>
            </div>
        </div>
    </div>
    <div class="quantum-footer">
        <span class="quantum-status">⚛ QUANTUM STATE: SUPERPOSITION</span>
    </div>
</div>`,
    css: `.quantum-3d-cube-bg {
    background: radial-gradient(circle at 50% 50%, #0a0c12, #030507);
    border-radius: 24px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    perspective: 1200px;
    max-height: 280px;
    overflow-y: auto;
    border: 1px solid rgba(0, 255, 255, 0.1);
}

.quantum-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.cube-3d-container {
    position: relative;
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    transform-style: preserve-3d;
    z-index: 10;
}

.cube-3d-wrapper {
    position: relative;
    width: 180px;
    height: 180px;
    transform-style: preserve-3d;
    transform: rotateX(-15deg) rotateY(30deg);
    animation: cube-float 6s infinite ease-in-out;
}

@keyframes cube-float {
    0%, 100% { transform: rotateX(-15deg) rotateY(30deg) translateZ(0); }
    50% { transform: rotateX(-18deg) rotateY(33deg) translateZ(15px); }
}

.cube-face {
    position: absolute;
    width: 180px;
    height: 180px;
    background: rgba(10, 20, 40, 0.85);
    border: 2px solid rgba(0, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.1);
}

.cube-face.front {
    transform: translateZ(90px);
    background: linear-gradient(145deg, rgba(0, 150, 255, 0.1), rgba(0, 100, 255, 0.2));
}

.cube-face.back {
    transform: rotateY(180deg) translateZ(90px);
    background: rgba(20, 30, 50, 0.9);
}

.cube-face.right {
    transform: rotateY(90deg) translateZ(90px);
    background: rgba(10, 30, 60, 0.8);
}

.cube-face.left {
    transform: rotateY(-90deg) translateZ(90px);
    background: rgba(10, 30, 60, 0.8);
}

.cube-face.top {
    transform: rotateX(90deg) translateZ(90px);
    background: rgba(0, 200, 255, 0.1);
}

.cube-face.bottom {
    transform: rotateX(-90deg) translateZ(90px);
    background: rgba(0, 50, 100, 0.8);
}

.cube-content {
    width: 100%;
    height: 100%;
    padding: 20px;
    color: white;
    transform: translateZ(10px);
}

.quantum-logo {
    width: 50px;
    height: 50px;
    background: rgba(0, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
    font-size: 1.5rem;
    color: #00ffff;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    animation: quantum-spin 10s linear infinite;
}

@keyframes quantum-spin {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
}

.quantum-title {
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 15px;
    letter-spacing: 2px;
}

.quantum-title span {
    color: #00ffff;
    margin-left: 5px;
}

.quantum-input-field {
    margin-bottom: 15px;
}

.quantum-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 8px;
    padding: 0 12px;
    transition: all 0.3s ease;
}

.quantum-input-wrapper i {
    color: #00ffff;
    font-size: 0.85rem;
    margin-right: 10px;
}

.quantum-input-wrapper input {
    width: 100%;
    padding: 12px 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
}

.quantum-input-wrapper input:focus {
    outline: none;
}

.quantum-input-wrapper:focus-within {
    border-color: #00ffff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

.quantum-glow {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 2px;
    background: #00ffff;
    box-shadow: 0 0 10px #00ffff;
    transition: width 0.3s ease;
}

.quantum-input-wrapper:focus-within .quantum-glow {
    width: 100%;
}

.quantum-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: rgba(0, 255, 255, 0.5);
    cursor: pointer;
}

.quantum-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.quantum-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;
    cursor: pointer;
}

.quantum-checkbox input {
    display: none;
}

.quantum-checkmark {
    width: 16px;
    height: 16px;
    border: 1px solid #00ffff;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.quantum-checkbox input:checked + .quantum-checkmark {
    background: #00ffff;
    color: #000;
}

.quantum-link {
    color: rgba(0, 255, 255, 0.7);
    text-decoration: none;
    font-size: 0.7rem;
}

.quantum-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: transparent;
    color: #00ffff;
    border: 1px solid #00ffff;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.quantum-pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 255, 255, 0.2);
    top: 0;
    left: -100%;
    transition: left 0.3s ease;
}

.quantum-btn:hover .quantum-pulse {
    left: 0;
}

.cube-back-content,
.cube-side-content {
    color: white;
    text-align: center;
    transform: rotateY(180deg);
}

.cube-back-content i {
    font-size: 2rem;
    color: #00ffff;
    margin-bottom: 10px;
}

.cube-back-content h4 {
    font-size: 0.8rem;
    letter-spacing: 2px;
}

.cube-side-content .side-digit {
    font-size: 1.5rem;
    color: #00ffff;
    display: block;
}

.cube-side-content .side-label {
    font-size: 0.6rem;
    color: rgba(255,255,255,0.7);
}

.quantum-footer {
    position: relative;
    z-index: 20;
    text-align: center;
    margin-top: 10px;
}

.quantum-status {
    color: rgba(0, 255, 255, 0.6);
    font-size: 0.6rem;
    letter-spacing: 2px;
    animation: quantum-blink 2s infinite;
}

@keyframes quantum-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}`,
    js: `// Quantum 3D Cube Login
document.addEventListener('DOMContentLoaded', function() {
    const quantumForm = document.querySelector('.quantum-form');
    
    if (quantumForm) {
        // Cube rotation on mouse move
        const cube = document.querySelector('.cube-3d-wrapper');
        if (cube) {
            document.addEventListener('mousemove', function(e) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                cube.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${-yAxis}deg)\`;
            });
        }
        
        // Form submission
        quantumForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="Quantum ID"]').value;
            const password = this.querySelector('input[placeholder="Entanglement Key"]').value;
            
            if (!email || !password) {
                showQuantumNotification('QUANTUM STATE: INCOMPLETE', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.quantum-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>ENTANGLING...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>OBSERVED!</span> <i class="fas fa-check"></i>';
                showQuantumNotification('QUANTUM STATE: COLLAPSED - ACCESS GRANTED', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const quantumToggle = quantumForm.querySelector('.quantum-toggle');
        if (quantumToggle) {
            quantumToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Quantum particles
        const particlesContainer = document.getElementById('quantum-particles-58');
        if (particlesContainer) {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = Math.random() * 3 + 'px';
                particle.style.height = particle.style.width;
                particle.style.background = 'rgba(0, 255, 255, ' + (Math.random() * 0.3) + ')';
                particle.style.borderRadius = '50%';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animation = \`quantum-float \${5 + Math.random() * 10}s linear infinite\`;
                particle.style.animationDelay = Math.random() * 5 + 's';
                particlesContainer.appendChild(particle);
            }
        }
    }
    
    function showQuantumNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #030507;
            border: 1px solid \${type === 'success' ? '#00ffff' : '#ff00ff'};
            color: \${type === 'success' ? '#00ffff' : '#ff00ff'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.7rem;
            letter-spacing: 2px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? 'rgba(0,255,255,0.3)' : 'rgba(255,0,255,0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add keyframes for quantum particles
    const style = document.createElement('style');
    style.textContent = \`
        @keyframes quantum-float {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
            50% { transform: translateY(-50px) translateX(30px) scale(1.5); opacity: 0.8; }
            100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
        }
    \`;
    document.head.appendChild(style);
});`
},

// ====================================================================
// TEMPLATE 59: Holographic Portal 3D Login
// ====================================================================
form59: {
    name: "Holographic Portal 3D Login",
    category: "login 3d holographic",
    html: `<div class="form-container holographic-portal-3d-bg">
    <div class="portal-3d-container">
        <div class="portal-ring portal-ring-1"></div>
        <div class="portal-ring portal-ring-2"></div>
        <div class="portal-ring portal-ring-3"></div>
        <div class="portal-ring portal-ring-4"></div>
        <div class="portal-core">
            <div class="portal-content">
                <div class="holographic-badge">⚡ HOLOGRAPHIC ACCESS</div>
                <div class="portal-logo">
                    <i class="fas fa-portal"></i>
                    <i class="fas fa-circle-notch"></i>
                </div>
                <h3 class="portal-title">ENTER THE PORTAL</h3>
                <form class="portal-form">
                    <div class="portal-input-3d">
                        <div class="portal-input-field">
                            <div class="portal-input-front">
                                <i class="fas fa-fingerprint"></i>
                                <input type="text" placeholder="Identity Code" required>
                            </div>
                            <div class="portal-input-back"></div>
                        </div>
                    </div>
                    <div class="portal-input-3d">
                        <div class="portal-input-field">
                            <div class="portal-input-front">
                                <i class="fas fa-key"></i>
                                <input type="password" placeholder="Portal Key" required>
                                <button type="button" class="portal-toggle">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                            <div class="portal-input-back"></div>
                        </div>
                    </div>
                    <div class="portal-3d-checkbox">
                        <label class="portal-checkbox-3d">
                            <input type="checkbox" checked>
                            <span class="portal-checkbox-box">
                                <span class="checkbox-face front">✓</span>
                                <span class="checkbox-face back"></span>
                            </span>
                            <span class="portal-checkbox-text">Establish wormhole</span>
                        </label>
                    </div>
                    <button type="submit" class="portal-3d-btn">
                        <span class="btn-text">TRANSMIT</span>
                        <span class="btn-3d-layers">
                            <span class="layer"></span>
                            <span class="layer"></span>
                            <span class="layer"></span>
                        </span>
                        <i class="fas fa-portal"></i>
                    </button>
                </form>
                <div class="portal-stats">
                    <div class="stat-3d">
                        <span class="stat-value">88%</span>
                        <span class="stat-label">STABLE</span>
                    </div>
                    <div class="stat-3d">
                        <span class="stat-value">3.7s</span>
                        <span class="stat-label">LATENCY</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <canvas class="portal-canvas" id="portal-canvas-59"></canvas>
</div>`,
    css: `.holographic-portal-3d-bg {
    background: #05070a;
    border-radius: 28px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    perspective: 1500px;
    max-height: 280px;
    overflow-y: auto;
}

.portal-3d-container {
    position: relative;
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
}

.portal-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(0, 200, 255, 0.3);
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.1);
    transform-style: preserve-3d;
}

.portal-ring-1 {
    width: 200px;
    height: 200px;
    border-width: 3px;
    border-color: rgba(0, 255, 255, 0.2);
    transform: rotateX(60deg) rotateY(20deg) translateZ(0);
    animation: portal-rotate 20s linear infinite;
}

.portal-ring-2 {
    width: 160px;
    height: 160px;
    border-width: 2px;
    border-color: rgba(100, 0, 255, 0.2);
    transform: rotateX(45deg) rotateY(-30deg) translateZ(30px);
    animation: portal-rotate-reverse 15s linear infinite;
}

.portal-ring-3 {
    width: 120px;
    height: 120px;
    border-width: 2px;
    border-color: rgba(255, 0, 200, 0.2);
    transform: rotateX(30deg) rotateY(40deg) translateZ(-20px);
    animation: portal-rotate 12s linear infinite;
}

.portal-ring-4 {
    width: 80px;
    height: 80px;
    border-width: 1px;
    border-color: rgba(0, 255, 150, 0.2);
    transform: rotateX(75deg) rotateY(-15deg) translateZ(50px);
    animation: portal-rotate-reverse 18s linear infinite;
}

@keyframes portal-rotate {
    from { transform: rotateX(60deg) rotateY(0deg) translateZ(0); }
    to { transform: rotateX(60deg) rotateY(360deg) translateZ(0); }
}

@keyframes portal-rotate-reverse {
    from { transform: rotateX(45deg) rotateY(0deg) translateZ(30px); }
    to { transform: rotateX(45deg) rotateY(-360deg) translateZ(30px); }
}

.portal-core {
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at 50% 50%, rgba(0,200,255,0.2), transparent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateZ(80px);
    backdrop-filter: blur(5px);
}

.portal-content {
    width: 100%;
    padding: 15px;
    color: white;
}

.holographic-badge {
    background: rgba(0, 200, 255, 0.1);
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 30px;
    padding: 4px 12px;
    font-size: 0.55rem;
    letter-spacing: 2px;
    display: inline-block;
    margin-bottom: 10px;
    color: #00ffff;
}

.portal-logo {
    position: relative;
    width: 50px;
    height: 50px;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.portal-logo i:first-child {
    position: absolute;
    font-size: 2.2rem;
    color: rgba(0, 200, 255, 0.3);
    filter: blur(3px);
    animation: portal-pulse 2s infinite;
}

.portal-logo i:last-child {
    position: relative;
    font-size: 1.5rem;
    color: #00ffff;
    animation: portal-spin 8s linear infinite;
}

@keyframes portal-pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.6; }
}

@keyframes portal-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.portal-title {
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 15px;
    color: white;
}

.portal-input-3d {
    margin-bottom: 15px;
    transform-style: preserve-3d;
    perspective: 800px;
}

.portal-input-field {
    position: relative;
    width: 100%;
    height: 45px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.portal-input-front {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    backdrop-filter: blur(5px);
    transform: translateZ(10px);
}

.portal-input-front i {
    color: #00ffff;
    margin-right: 10px;
    font-size: 0.85rem;
}

.portal-input-front input {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
}

.portal-input-front input:focus {
    outline: none;
}

.portal-input-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    background: rgba(0, 100, 255, 0.2);
    border: 1px solid rgba(0, 200, 255, 0.3);
    border-radius: 8px;
    transform: translateZ(-5px);
}

.portal-input-3d:hover .portal-input-field {
    transform: translateZ(5px);
}

.portal-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: #00ffff;
    cursor: pointer;
}

.portal-3d-checkbox {
    margin: 15px 0;
}

.portal-checkbox-3d {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    perspective: 500px;
}

.portal-checkbox-3d input {
    display: none;
}

.portal-checkbox-box {
    position: relative;
    width: 20px;
    height: 20px;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
}

.checkbox-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
}

.checkbox-face.front {
    background: rgba(0, 200, 255, 0.1);
    border: 1px solid #00ffff;
    color: #00ffff;
    transform: rotateY(0deg);
}

.checkbox-face.back {
    background: #00ffff;
    border: 1px solid #00ffff;
    color: #000;
    transform: rotateY(180deg);
}

.portal-checkbox-3d input:checked + .portal-checkbox-box {
    transform: rotateY(180deg);
}

.portal-checkbox-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.75rem;
}

.portal-3d-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: transparent;
    color: #00ffff;
    border: 1px solid #00ffff;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 15px;
    transform-style: preserve-3d;
    transition: all 0.3s ease;
}

.btn-3d-layers {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-style: preserve-3d;
}

.btn-3d-layers .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 200, 255, 0.2);
    border-radius: 30px;
}

.btn-3d-layers .layer:nth-child(1) { transform: translateZ(-5px); }
.btn-3d-layers .layer:nth-child(2) { transform: translateZ(-10px); opacity: 0.5; }
.btn-3d-layers .layer:nth-child(3) { transform: translateZ(-15px); opacity: 0.3; }

.portal-3d-btn:hover {
    transform: translateZ(5px);
    box-shadow: 0 0 30px rgba(0, 200, 255, 0.3);
}

.portal-stats {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
}

.stat-3d {
    transform: translateZ(20px);
}

.stat-value {
    display: block;
    font-size: 0.9rem;
    font-weight: 700;
    color: #00ffff;
}

.stat-label {
    font-size: 0.55rem;
    color: rgba(255,255,255,0.5);
    letter-spacing: 1px;
}

.portal-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.2;
}`,
    js: `// Holographic Portal 3D Login
document.addEventListener('DOMContentLoaded', function() {
    const portalForm = document.querySelector('.portal-form');
    
    if (portalForm) {
        // Portal rotation animation
        const rings = document.querySelectorAll('.portal-ring');
        let rotation = 0;
        
        function animateRings() {
            rotation += 0.1;
            rings.forEach((ring, index) => {
                const speed = 1 + (index * 0.2);
                ring.style.transform = \`rotateX(60deg) rotateY(\${rotation * speed}deg) translateZ(0)\`;
            });
            requestAnimationFrame(animateRings);
        }
        // animateRings(); // Uncomment for continuous animation
        
        // Form submission
        portalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const identity = this.querySelector('input[placeholder="Identity Code"]').value;
            const key = this.querySelector('input[placeholder="Portal Key"]').value;
            
            if (!identity || !key) {
                showPortalNotification('PORTAL: ACCESS DENIED - MISSING CREDENTIALS', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.portal-3d-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>TRANSMITTING...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>WORMHOLE ESTABLISHED</span> <i class="fas fa-check"></i>';
                showPortalNotification('PORTAL: ACCESS GRANTED - WELCOME', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const portalToggle = portalForm.querySelector('.portal-toggle');
        if (portalToggle) {
            portalToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Portal canvas effect
        const canvas = document.getElementById('portal-canvas-59');
        if (canvas) {
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            
            function drawPortalEffect() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw energy particles
                for (let i = 0; i < 30; i++) {
                    ctx.beginPath();
                    ctx.arc(
                        Math.random() * canvas.width,
                        Math.random() * canvas.height,
                        Math.random() * 2,
                        0,
                        Math.PI * 2
                    );
                    ctx.fillStyle = 'rgba(0, 255, 255, ' + (Math.random() * 0.3) + ')';
                    ctx.fill();
                }
                
                // Draw energy waves
                ctx.beginPath();
                ctx.arc(
                    canvas.width / 2,
                    canvas.height / 2,
                    30 + Math.sin(Date.now() / 500) * 10,
                    0,
                    Math.PI * 2
                );
                ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
                ctx.stroke();
                
                requestAnimationFrame(drawPortalEffect);
            }
            
            drawPortalEffect();
        }
    }
    
    function showPortalNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #05070a;
            border: 1px solid \${type === 'success' ? '#00ffff' : '#ff00ff'};
            color: \${type === 'success' ? '#00ffff' : '#ff00ff'};
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 0.7rem;
            letter-spacing: 2px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? 'rgba(0,255,255,0.3)' : 'rgba(255,0,255,0.3)'};
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 60: Parallax Depth 3D Login
// ====================================================================
form60: {
    name: "Parallax Depth 3D Login",
    category: "login 3d parallax",
    html: `<div class="form-container parallax-depth-3d-bg">
    <div class="parallax-layers">
        <div class="layer layer-bg" data-depth="0.1"></div>
        <div class="layer layer-mountains" data-depth="0.3"></div>
        <div class="layer layer-forest" data-depth="0.5"></div>
        <div class="layer layer-trees" data-depth="0.7"></div>
        <div class="layer layer-particles" data-depth="0.9"></div>
    </div>
    <div class="parallax-card-container" id="parallax-card">
        <div class="parallax-card">
            <div class="card-3d-layer card-glow"></div>
            <div class="card-3d-layer card-content">
                <div class="parallax-logo">
                    <i class="fas fa-mountain"></i>
                    <span>DEPTH</span>
                </div>
                <h3 class="parallax-title">Ascend to the Summit</h3>
                <form class="parallax-form">
                    <div class="parallax-input-3d">
                        <div class="input-3d-layer input-bg"></div>
                        <div class="input-3d-layer input-content">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email address" required>
                        </div>
                        <div class="input-3d-layer input-shadow"></div>
                    </div>
                    <div class="parallax-input-3d">
                        <div class="input-3d-layer input-bg"></div>
                        <div class="input-3d-layer input-content">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required>
                            <button type="button" class="parallax-toggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="input-3d-layer input-shadow"></div>
                    </div>
                    <div class="parallax-3d-options">
                        <label class="parallax-3d-checkbox">
                            <input type="checkbox" checked>
                            <span class="parallax-checkbox-3d">
                                <span class="checkbox-layer front">✓</span>
                                <span class="checkbox-layer back"></span>
                            </span>
                            <span>Remember this peak</span>
                        </label>
                        <a href="#" class="parallax-3d-link">Lost trail?</a>
                    </div>
                    <button type="submit" class="parallax-3d-btn">
                        <span class="btn-layer front">CLIMB</span>
                        <span class="btn-layer back">GO</span>
                        <span class="btn-layer shadow"></span>
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="parallax-footer">
        <span>⚡ 3D PARALLAX ENGINE v2.0</span>
    </div>
</div>`,
    css: `.parallax-depth-3d-bg {
    background: #080c14;
    border-radius: 28px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    perspective: 1800px;
    max-height: 280px;
    overflow-y: auto;
}

.parallax-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transform-style: preserve-3d;
}

.layer-bg {
    background: linear-gradient(to bottom, #0a1a2f, #1a2a3f);
    transform: translateZ(-50px) scale(1.1);
}

.layer-mountains {
    background: linear-gradient(to top, transparent 60%, rgba(50, 80, 120, 0.3) 100%);
    clip-path: polygon(0% 70%, 15% 50%, 30% 60%, 45% 40%, 60% 55%, 75% 35%, 90% 50%, 100% 40%, 100% 100%, 0% 100%);
    transform: translateZ(-30px) scale(1.05);
    opacity: 0.4;
}

.layer-forest {
    background: linear-gradient(to top, transparent 70%, rgba(30, 70, 50, 0.3) 100%);
    clip-path: polygon(0% 80%, 8% 75%, 18% 82%, 28% 75%, 38% 78%, 48% 72%, 58% 77%, 68% 70%, 78% 75%, 88% 68%, 100% 73%, 100% 100%, 0% 100%);
    transform: translateZ(-10px);
    opacity: 0.3;
}

.layer-trees {
    background: repeating-linear-gradient(90deg, rgba(60, 120, 80, 0.2) 0px, transparent 15px);
    transform: translateZ(0px);
    opacity: 0.2;
}

.layer-particles {
    background: radial-gradient(circle at 30% 40%, rgba(100, 200, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 60%, rgba(200, 100, 255, 0.1) 0%, transparent 50%);
    transform: translateZ(20px);
}

.parallax-card-container {
    position: relative;
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    z-index: 50;
}

.parallax-card {
    position: relative;
    width: 200px;
    height: 220px;
    transform-style: preserve-3d;
    transition: transform 0.1s ease;
}

.card-3d-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.card-glow {
    background: radial-gradient(circle at 50% 50%, rgba(100, 200, 255, 0.2), transparent 70%);
    transform: translateZ(-30px);
    filter: blur(20px);
    opacity: 0.6;
}

.card-content {
    background: rgba(20, 30, 50, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
    transform: translateZ(20px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.parallax-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #4ec0e9;
    margin-bottom: 10px;
}

.parallax-logo i {
    font-size: 1.5rem;
}

.parallax-logo span {
    font-size: 0.9rem;
    letter-spacing: 3px;
}

.parallax-title {
    color: white;
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 15px;
}

.parallax-input-3d {
    position: relative;
    margin-bottom: 15px;
    height: 45px;
    transform-style: preserve-3d;
}

.input-3d-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.input-bg {
    background: rgba(30, 40, 60, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateZ(5px);
    backdrop-filter: blur(5px);
}

.input-content {
    display: flex;
    align-items: center;
    padding: 0 12px;
    transform: translateZ(10px);
}

.input-content i {
    color: #4ec0e9;
    margin-right: 10px;
    font-size: 0.85rem;
}

.input-content input {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
}

.input-content input:focus {
    outline: none;
}

.input-shadow {
    background: rgba(0, 0, 0, 0.3);
    transform: translateZ(-5px);
    filter: blur(4px);
}

.parallax-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: #4ec0e9;
    cursor: pointer;
}

.parallax-3d-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.parallax-3d-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;
}

.parallax-3d-checkbox input {
    display: none;
}

.parallax-checkbox-3d {
    position: relative;
    width: 18px;
    height: 18px;
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
}

.checkbox-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
}

.checkbox-layer.front {
    background: rgba(78, 192, 233, 0.1);
    border: 1px solid #4ec0e9;
    color: #4ec0e9;
    transform: translateZ(2px);
}

.checkbox-layer.back {
    background: #4ec0e9;
    border: 1px solid #4ec0e9;
    color: #000;
    transform: translateZ(-2px) rotateY(180deg);
}

.parallax-3d-checkbox input:checked + .parallax-checkbox-3d {
    transform: rotateY(180deg);
}

.parallax-3d-link {
    color: #4ec0e9;
    text-decoration: none;
    font-size: 0.7rem;
}

.parallax-3d-btn {
    position: relative;
    width: 100%;
    height: 45px;
    background: transparent;
    border: none;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.2s ease;
}

.btn-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    backface-visibility: hidden;
}

.btn-layer.front {
    background: linear-gradient(145deg, #4ec0e9, #2a6f8a);
    color: white;
    transform: translateZ(10px);
}

.btn-layer.back {
    background: #2a6f8a;
    color: white;
    transform: translateZ(-5px) rotateY(180deg);
}

.btn-layer.shadow {
    background: rgba(0, 0, 0, 0.3);
    transform: translateZ(-10px);
    filter: blur(5px);
}

.parallax-3d-btn i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    z-index: 20;
}

.parallax-3d-btn:hover {
    transform: translateY(-2px);
}

.parallax-footer {
    position: relative;
    z-index: 100;
    text-align: center;
    color: rgba(78, 192, 233, 0.6);
    font-size: 0.55rem;
    letter-spacing: 2px;
    margin-top: 10px;
}`,
    js: `// Parallax Depth 3D Login
document.addEventListener('DOMContentLoaded', function() {
    const parallaxForm = document.querySelector('.parallax-form');
    const parallaxCard = document.getElementById('parallax-card');
    
    if (parallaxForm) {
        // Parallax effect on mouse move
        if (parallaxCard) {
            document.addEventListener('mousemove', function(e) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
                
                parallaxCard.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
                
                // Move layers based on depth
                const layers = document.querySelectorAll('.layer');
                layers.forEach(layer => {
                    const depth = parseFloat(layer.getAttribute('data-depth') || 0);
                    const moveX = (window.innerWidth / 2 - e.pageX) * depth * 0.1;
                    const moveY = (window.innerHeight / 2 - e.pageY) * depth * 0.1;
                    layer.style.transform = \`translateX(\${moveX}px) translateY(\${moveY}px) translateZ(\${depth * 100}px)\`;
                });
            });
        }
        
        // Form submission
        parallaxForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            
            if (!email || !password) {
                showParallaxNotification('Cannot ascend: Missing gear', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.parallax-3d-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="btn-layer front">CLIMBING...</span><span class="btn-layer back">UP</span><span class="btn-layer shadow"></span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span class="btn-layer front">SUMMIT!</span><span class="btn-layer back">DONE</span><span class="btn-layer shadow"></span><i class="fas fa-check"></i>';
                showParallaxNotification('Peak reached! Welcome back.', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const parallaxToggle = parallaxForm.querySelector('.parallax-toggle');
        if (parallaxToggle) {
            parallaxToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showParallaxNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #080c14;
            border: 1px solid \${type === 'success' ? '#4ec0e9' : '#e94e4e'};
            border-radius: 8px;
            color: \${type === 'success' ? '#4ec0e9' : '#e94e4e'};
            padding: 12px 24px;
            font-size: 0.8rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.5);
            transform: translateZ(50px);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 61: Isometric 3D City Login
// ====================================================================
form61: {
    name: "Isometric 3D City Login",
    category: "login 3d isometric",
    html: `<div class="form-container isometric-city-3d-bg">
    <div class="isometric-grid"></div>
    <div class="isometric-city">
        <div class="building building-1">
            <div class="building-face front"></div>
            <div class="building-face side"></div>
            <div class="building-face top"></div>
        </div>
        <div class="building building-2">
            <div class="building-face front"></div>
            <div class="building-face side"></div>
            <div class="building-face top"></div>
        </div>
        <div class="building building-3">
            <div class="building-face front"></div>
            <div class="building-face side"></div>
            <div class="building-face top"></div>
        </div>
        <div class="building building-4">
            <div class="building-face front"></div>
            <div class="building-face side"></div>
            <div class="building-face top"></div>
        </div>
        <div class="isometric-platform">
            <div class="platform-top"></div>
            <div class="platform-side"></div>
        </div>
    </div>
    <div class="isometric-card">
        <div class="isometric-card-inner">
            <div class="isometric-logo">
                <i class="fas fa-city"></i>
            </div>
            <h3 class="isometric-title">METROPOLIS</h3>
            <p class="isometric-subtitle">Access your digital domain</p>
            <form class="isometric-form">
                <div class="isometric-input-3d">
                    <div class="isometric-input-container">
                        <div class="isometric-input-front">
                            <i class="fas fa-id-card"></i>
                            <input type="text" placeholder="Citizen ID" required>
                        </div>
                        <div class="isometric-input-side"></div>
                        <div class="isometric-input-bottom"></div>
                    </div>
                </div>
                <div class="isometric-input-3d">
                    <div class="isometric-input-container">
                        <div class="isometric-input-front">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Security Key" required>
                            <button type="button" class="isometric-toggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                        <div class="isometric-input-side"></div>
                        <div class="isometric-input-bottom"></div>
                    </div>
                </div>
                <div class="isometric-3d-checkbox">
                    <label class="isometric-checkbox-3d">
                        <input type="checkbox" checked>
                        <span class="isometric-checkbox-box">
                            <span class="box-face front">✓</span>
                            <span class="box-face side"></span>
                            <span class="box-face bottom"></span>
                        </span>
                        <span>Maintain connection</span>
                    </label>
                </div>
                <button type="submit" class="isometric-3d-btn">
                    <span class="btn-front">ENTER CITY</span>
                    <span class="btn-side"></span>
                    <span class="btn-bottom"></span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </form>
        </div>
    </div>
    <div class="isometric-footer">
        <span class="grid-coords">X: 42 Y: 73 Z: 19</span>
        <span class="city-status">⚡ DISTRICT 7 - SECURE</span>
    </div>
</div>`,
    css: `.isometric-city-3d-bg {
    background: #1a2634;
    border-radius: 24px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 1200px;
    max-height: 280px;
    overflow-y: auto;
}

.isometric-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(to right, rgba(100, 200, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100, 200, 255, 0.05) 1px, transparent 1px);
    background-size: 30px 30px;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
    transform-origin: center;
    transform-style: preserve-3d;
}

.isometric-city {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%) rotateX(60deg) rotateZ(-45deg);
    transform-style: preserve-3d;
    width: 200px;
    height: 200px;
}

.building {
    position: absolute;
    width: 20px;
    height: 40px;
    transform-style: preserve-3d;
}

.building-1 {
    bottom: 0;
    left: 20px;
    width: 25px;
    height: 60px;
}

.building-2 {
    bottom: 0;
    right: 20px;
    width: 30px;
    height: 80px;
}

.building-3 {
    top: 30px;
    left: 60px;
    width: 20px;
    height: 45px;
}

.building-4 {
    top: 50px;
    right: 60px;
    width: 25px;
    height: 55px;
}

.building-face {
    position: absolute;
    border: 1px solid rgba(100, 200, 255, 0.2);
}

.building-face.front {
    width: 100%;
    height: 100%;
    background: rgba(30, 60, 90, 0.7);
    transform: translateZ(10px);
}

.building-face.side {
    width: 20px;
    height: 100%;
    background: rgba(20, 50, 80, 0.7);
    transform: rotateY(90deg) translateX(-10px);
}

.building-face.top {
    width: 100%;
    height: 20px;
    background: rgba(50, 100, 150, 0.7);
    transform: rotateX(90deg) translateY(-10px) translateZ(10px);
}

.isometric-platform {
    position: absolute;
    bottom: -20px;
    left: -40px;
    width: 120px;
    height: 20px;
    transform-style: preserve-3d;
}

.platform-top {
    width: 100%;
    height: 100%;
    background: rgba(40, 80, 120, 0.5);
    border: 1px solid rgba(100, 200, 255, 0.2);
    transform: translateZ(5px);
}

.platform-side {
    width: 20px;
    height: 100%;
    background: rgba(20, 60, 100, 0.5);
    transform: rotateY(90deg) translateX(-10px);
}

.isometric-card {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    transform-style: preserve-3d;
}

.isometric-card-inner {
    width: 200px;
    padding: 20px;
    background: rgba(20, 30, 45, 0.8);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(100, 200, 255, 0.2);
    transform: rotateX(10deg) rotateY(-10deg) translateZ(30px);
    transform-style: preserve-3d;
    box-shadow: 
        -10px 10px 20px rgba(0,0,0,0.3),
        0 0 0 1px rgba(100,200,255,0.1);
}

.isometric-logo {
    width: 50px;
    height: 50px;
    background: rgba(100, 200, 255, 0.1);
    border: 1px solid rgba(100, 200, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
    font-size: 1.5rem;
    color: #64c8ff;
    transform: translateZ(10px);
}

.isometric-title {
    color: white;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 5px;
}

.isometric-subtitle {
    color: rgba(100, 200, 255, 0.7);
    font-size: 0.6rem;
    text-align: center;
    margin-bottom: 15px;
    letter-spacing: 1px;
}

.isometric-input-3d {
    margin-bottom: 15px;
    transform-style: preserve-3d;
}

.isometric-input-container {
    position: relative;
    width: 100%;
    height: 45px;
    transform-style: preserve-3d;
}

.isometric-input-front {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(100, 200, 255, 0.2);
    display: flex;
    align-items: center;
    padding: 0 12px;
    transform: translateZ(10px);
    backdrop-filter: blur(5px);
}

.isometric-input-front i {
    color: #64c8ff;
    margin-right: 10px;
    font-size: 0.85rem;
}

.isometric-input-front input {
    width: 100%;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
}

.isometric-input-front input:focus {
    outline: none;
}

.isometric-input-side {
    position: absolute;
    width: 20px;
    height: 100%;
    background: rgba(0, 30, 50, 0.5);
    border: 1px solid rgba(100, 200, 255, 0.2);
    transform: rotateY(90deg) translateX(-10px) translateZ(10px);
}

.isometric-input-bottom {
    position: absolute;
    width: 100%;
    height: 20px;
    background: rgba(0, 20, 40, 0.5);
    border: 1px solid rgba(100, 200, 255, 0.2);
    transform: rotateX(90deg) translateY(-10px) translateZ(10px);
}

.isometric-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: #64c8ff;
    cursor: pointer;
}

.isometric-3d-checkbox {
    margin: 15px 0;
}

.isometric-checkbox-3d {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;
}

.isometric-checkbox-3d input {
    display: none;
}

.isometric-checkbox-box {
    position: relative;
    width: 20px;
    height: 20px;
    transform-style: preserve-3d;
}

.box-face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    backface-visibility: hidden;
}

.box-face.front {
    background: rgba(100, 200, 255, 0.1);
    border: 1px solid #64c8ff;
    color: #64c8ff;
    transform: translateZ(5px);
}

.box-face.side {
    width: 10px;
    background: rgba(50, 150, 200, 0.3);
    border: 1px solid #64c8ff;
    transform: rotateY(90deg) translateX(-5px);
}

.box-face.bottom {
    height: 10px;
    background: rgba(30, 100, 150, 0.3);
    border: 1px solid #64c8ff;
    transform: rotateX(90deg) translateY(-5px) translateZ(5px);
}

.isometric-3d-btn {
    position: relative;
    width: 100%;
    height: 45px;
    background: transparent;
    border: none;
    cursor: pointer;
    transform-style: preserve-3d;
    margin-top: 10px;
}

.btn-front {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(145deg, #64c8ff, #2a6f8a);
    color: white;
    border: none;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    transform: translateZ(10px);
}

.btn-side {
    position: absolute;
    width: 20px;
    height: 100%;
    background: #2a6f8a;
    transform: rotateY(90deg) translateX(-10px);
}

.btn-bottom {
    position: absolute;
    width: 100%;
    height: 20px;
    background: #1a4f6a;
    transform: rotateX(90deg) translateY(-10px);
}

.isometric-3d-btn i {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    z-index: 20;
}

.isometric-3d-btn:hover .btn-front {
    background: linear-gradient(145deg, #7ad0ff, #3a8fab);
}

.isometric-footer {
    position: absolute;
    bottom: 15px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    color: rgba(100, 200, 255, 0.5);
    font-size: 0.55rem;
    letter-spacing: 1px;
}`,
    js: `// Isometric 3D City Login
document.addEventListener('DOMContentLoaded', function() {
    const isometricForm = document.querySelector('.isometric-form');
    
    if (isometricForm) {
        // Isometric tilt on mouse move
        const card = document.querySelector('.isometric-card-inner');
        if (card) {
            document.addEventListener('mousemove', function(e) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                
                card.style.transform = \`rotateX(\${-yAxis}deg) rotateY(\${xAxis}deg) translateZ(30px)\`;
            });
        }
        
        // Form submission
        isometricForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const citizenId = this.querySelector('input[placeholder="Citizen ID"]').value;
            const securityKey = this.querySelector('input[placeholder="Security Key"]').value;
            
            if (!citizenId || !securityKey) {
                showIsometricNotification('IDENTITY VERIFICATION FAILED', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.isometric-3d-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span class="btn-front">ENTERING...</span><span class="btn-side"></span><span class="btn-bottom"></span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span class="btn-front">WELCOME</span><span class="btn-side"></span><span class="btn-bottom"></span><i class="fas fa-check"></i>';
                showIsometricNotification('ACCESS GRANTED - WELCOME TO METROPOLIS', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const isometricToggle = isometricForm.querySelector('.isometric-toggle');
        if (isometricToggle) {
            isometricToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showIsometricNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1a2634;
            border: 1px solid \${type === 'success' ? '#64c8ff' : '#ff6464'};
            color: \${type === 'success' ? '#64c8ff' : '#ff6464'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.7rem;
            letter-spacing: 1px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            transform: rotateX(10deg) rotateY(-10deg);
            box-shadow: -5px 5px 20px rgba(0,0,0,0.5);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 62: Tesseract Hypercube 4D Login
// ====================================================================
form62: {
    name: "Tesseract Hypercube 4D Login",
    category: "login 3d hypercube",
    html: `<div class="form-container tesseract-hypercube-bg">
    <canvas class="tesseract-canvas" id="tesseract-canvas-62"></canvas>
    <div class="hypercube-overlay"></div>
    <div class="tesseract-container">
        <div class="tesseract-3d">
            <div class="tesseract-wireframe">
                <div class="cube-outer">
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                </div>
                <div class="cube-inner">
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                    <div class="cube-line"></div>
                </div>
                <div class="connector-lines">
                    <span class="connector"></span>
                    <span class="connector"></span>
                    <span class="connector"></span>
                    <span class="connector"></span>
                    <span class="connector"></span>
                    <span class="connector"></span>
                    <span class="connector"></span>
                    <span class="connector"></span>
                </div>
            </div>
        </div>
        <div class="tesseract-core">
            <div class="hypercube-logo">
                <i class="fas fa-cube"></i>
                <i class="fas fa-cube"></i>
                <i class="fas fa-cube"></i>
            </div>
            <h3 class="hypercube-title">TESSERACT</h3>
            <p class="hypercube-subtitle">4th Dimensional Access</p>
            <form class="hypercube-form">
                <div class="hypercube-input-4d">
                    <div class="input-dimension dim-1">
                        <input type="text" placeholder="X Dimension" required>
                        <i class="fas fa-vector-square"></i>
                    </div>
                    <div class="input-dimension dim-2">
                        <input type="email" placeholder="Y Dimension" required>
                        <i class="fas fa-vector-square"></i>
                    </div>
                </div>
                <div class="hypercube-input-4d">
                    <div class="input-dimension dim-3">
                        <input type="password" placeholder="Z Dimension" required>
                        <button type="button" class="hypercube-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                        <i class="fas fa-vector-square"></i>
                    </div>
                    <div class="input-dimension dim-4">
                        <input type="password" placeholder="W Dimension" required>
                        <i class="fas fa-vector-square"></i>
                    </div>
                </div>
                <div class="hypercube-4d-checkbox">
                    <label class="hypercube-checkbox-4d">
                        <input type="checkbox" checked>
                        <span class="hypercube-checkbox-box">
                            <span class="box-vertex"></span>
                            <span class="box-vertex"></span>
                            <span class="box-vertex"></span>
                            <span class="box-vertex"></span>
                            <span class="box-edge"></span>
                        </span>
                        <span>Project to 4D</span>
                    </label>
                </div>
                <button type="submit" class="hypercube-4d-btn">
                    <span>TRANSCEND</span>
                    <i class="fas fa-arrow-right"></i>
                    <div class="btn-dimension"></div>
                </button>
            </form>
        </div>
    </div>
    <div class="hypercube-footer">
        <span>4D ROTATION • WARP STABLE</span>
    </div>
</div>`,
    css: `.tesseract-hypercube-bg {
    background: #000000;
    border-radius: 24px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
    border: 1px solid rgba(100, 0, 255, 0.2);
}

.tesseract-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    pointer-events: none;
}

.hypercube-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(100, 0, 255, 0.05), transparent 70%);
    pointer-events: none;
}

.tesseract-container {
    position: relative;
    width: 100%;
    min-height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.tesseract-3d {
    position: absolute;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: tesseract-rotate 30s linear infinite;
}

@keyframes tesseract-rotate {
    from { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    to { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

.tesseract-wireframe {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.cube-outer,
.cube-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.cube-line {
    position: absolute;
    background: rgba(100, 0, 255, 0.3);
    box-shadow: 0 0 10px rgba(100, 0, 255, 0.3);
}

.cube-outer .cube-line:nth-child(1) {
    width: 2px;
    height: 100%;
    left: 0;
    background: linear-gradient(to bottom, transparent, #6400ff, transparent);
}

.cube-outer .cube-line:nth-child(2) {
    width: 2px;
    height: 100%;
    right: 0;
    background: linear-gradient(to bottom, transparent, #6400ff, transparent);
}

.cube-outer .cube-line:nth-child(3) {
    width: 100%;
    height: 2px;
    top: 0;
    background: linear-gradient(to right, transparent, #6400ff, transparent);
}

.cube-outer .cube-line:nth-child(4) {
    width: 100%;
    height: 2px;
    bottom: 0;
    background: linear-gradient(to right, transparent, #6400ff, transparent);
}

.cube-outer .cube-line:nth-child(5) {
    width: 2px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, transparent, #6400ff, transparent);
    opacity: 0.3;
}

.cube-outer .cube-line:nth-child(6) {
    width: 100%;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(to right, transparent, #6400ff, transparent);
    opacity: 0.3;
}

.cube-inner {
    transform: scale(0.6);
}

.connector-lines {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.connector {
    position: absolute;
    width: 2px;
    height: 100%;
    background: rgba(100, 0, 255, 0.1);
    transform-origin: center;
}

.connector:nth-child(1) { transform: rotateY(45deg) translateX(50px); }
.connector:nth-child(2) { transform: rotateY(-45deg) translateX(-50px); }
.connector:nth-child(3) { transform: rotateX(45deg) translateY(50px); }
.connector:nth-child(4) { transform: rotateX(-45deg) translateY(-50px); }

.tesseract-core {
    position: relative;
    width: 200px;
    padding: 20px;
    background: rgba(10, 0, 20, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(100, 0, 255, 0.3);
    border-radius: 16px;
    z-index: 20;
    transform: translateZ(50px);
}

.hypercube-logo {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 15px;
}

.hypercube-logo i {
    font-size: 1.2rem;
    color: #6400ff;
    text-shadow: 0 0 15px #6400ff;
    animation: cube-pulse 2s infinite;
}

.hypercube-logo i:nth-child(2) {
    animation-delay: 0.3s;
    font-size: 1.5rem;
}

.hypercube-logo i:nth-child(3) {
    animation-delay: 0.6s;
}

@keyframes cube-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.7; }
}

.hypercube-title {
    color: #a07aff;
    font-size: 0.9rem;
    text-align: center;
    letter-spacing: 4px;
    margin-bottom: 5px;
}

.hypercube-subtitle {
    color: rgba(160, 122, 255, 0.6);
    font-size: 0.6rem;
    text-align: center;
    margin-bottom: 15px;
    letter-spacing: 2px;
}

.hypercube-input-4d {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.input-dimension {
    position: relative;
    flex: 1;
}

.input-dimension i {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #6400ff;
    font-size: 0.75rem;
}

.input-dimension input {
    width: 100%;
    padding: 12px 12px 12px 30px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(100, 0, 255, 0.2);
    border-radius: 8px;
    color: white;
    font-size: 0.75rem;
}

.input-dimension input:focus {
    outline: none;
    border-color: #6400ff;
    box-shadow: 0 0 15px rgba(100, 0, 255, 0.2);
}

.hypercube-toggle {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #6400ff;
    cursor: pointer;
}

.hypercube-4d-checkbox {
    margin: 15px 0;
}

.hypercube-checkbox-4d {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;
}

.hypercube-checkbox-4d input {
    display: none;
}

.hypercube-checkbox-box {
    position: relative;
    width: 22px;
    height: 22px;
    transform-style: preserve-3d;
}

.box-vertex {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #6400ff;
    border-radius: 50%;
    box-shadow: 0 0 10px #6400ff;
}

.box-vertex:nth-child(1) { top: 0; left: 0; }
.box-vertex:nth-child(2) { top: 0; right: 0; }
.box-vertex:nth-child(3) { bottom: 0; left: 0; }
.box-vertex:nth-child(4) { bottom: 0; right: 0; }

.box-edge {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #6400ff, transparent);
    transform: translate(-50%, -50%);
}

.hypercube-checkbox-4d input:checked ~ .hypercube-checkbox-box .box-vertex {
    background: #a07aff;
    box-shadow: 0 0 15px #a07aff;
}

.hypercube-4d-btn {
    position: relative;
    width: 100%;
    padding: 14px;
    background: transparent;
    color: #a07aff;
    border: 1px solid #6400ff;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
    transition: all 0.3s ease;
}

.btn-dimension {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(100, 0, 255, 0.1);
    top: 0;
    left: -100%;
    transition: left 0.3s ease;
}

.hypercube-4d-btn:hover .btn-dimension {
    left: 0;
}

.hypercube-footer {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgba(100, 0, 255, 0.5);
    font-size: 0.55rem;
    letter-spacing: 2px;
}`,
    js: `// Tesseract Hypercube 4D Login
document.addEventListener('DOMContentLoaded', function() {
    const hypercubeForm = document.querySelector('.hypercube-form');
    
    if (hypercubeForm) {
        // Tesseract rotation
        const tesseract = document.querySelector('.tesseract-3d');
        let rotation = 0;
        
        function rotateTesseract() {
            rotation += 0.5;
            if (tesseract) {
                tesseract.style.transform = \`rotateX(\${rotation}deg) rotateY(\${rotation}deg) rotateZ(\${rotation * 0.5}deg)\`;
            }
            requestAnimationFrame(rotateTesseract);
        }
        rotateTesseract();
        
        // Canvas animation
        const canvas = document.getElementById('tesseract-canvas-62');
        if (canvas) {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
            
            const ctx = canvas.getContext('2d');
            
            function drawTesseractField() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Draw grid points
                for (let i = 0; i < 100; i++) {
                    const x = (Math.sin(Date.now() * 0.001 + i) * 50 + i * 20) % canvas.width;
                    const y = (Math.cos(Date.now() * 0.001 + i) * 50 + i * 15) % canvas.height;
                    
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(100, 0, 255, 0.2)';
                    ctx.fill();
                    
                    // Draw connections
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 20, y + 20);
                    ctx.strokeStyle = 'rgba(100, 0, 255, 0.05)';
                    ctx.stroke();
                }
                
                requestAnimationFrame(drawTesseractField);
            }
            
            drawTesseractField();
        }
        
        // Form submission
        hypercubeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const xDim = this.querySelector('.dim-1 input').value;
            const yDim = this.querySelector('.dim-2 input').value;
            const zDim = this.querySelector('.dim-3 input').value;
            const wDim = this.querySelector('.dim-4 input').value;
            
            if (!xDim || !yDim || !zDim || !wDim) {
                showHypercubeNotification('4D PROJECTION: INCOMPLETE', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.hypercube-4d-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>PROJECTING...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>TRANSCENDED</span> <i class="fas fa-check"></i>';
                showHypercubeNotification('4D ACCESS GRANTED - WELCOME TO THE TESSERACT', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const hypercubeToggle = hypercubeForm.querySelector('.hypercube-toggle');
        if (hypercubeToggle) {
            hypercubeToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showHypercubeNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #000000;
            border: 1px solid \${type === 'success' ? '#a07aff' : '#ff00ff'};
            color: \${type === 'success' ? '#a07aff' : '#ff00ff'};
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.7rem;
            letter-spacing: 2px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? 'rgba(160,122,255,0.3)' : 'rgba(255,0,255,0.3)'};
            transform: rotateX(10deg) rotateY(10deg);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 63: Corporate Professional Signup
// ====================================================================
form63: {
    name: "Corporate Professional Signup",
    category: "signup professional corporate",
    html: `<div class="form-container corporate-signup-bg">
    <div class="corporate-header">
        <div class="company-badge">
            <i class="fas fa-building"></i>
            <span>ENTERPRISE</span>
        </div>
        <h3>Create Business Account</h3>
        <p>Start your 14-day free trial • No credit card required</p>
    </div>
    
    <div class="corporate-tabs">
        <button class="corporate-tab active" data-type="individual">Individual</button>
        <button class="corporate-tab" data-type="business">Business</button>
        <button class="corporate-tab" data-type="enterprise">Enterprise</button>
    </div>
    
    <form class="corporate-form">
        <div class="form-row">
            <div class="corporate-input-group">
                <label>Full name</label>
                <div class="input-wrapper">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="John Doe" required>
                </div>
            </div>
            <div class="corporate-input-group">
                <label>Job title</label>
                <div class="input-wrapper">
                    <i class="fas fa-briefcase"></i>
                    <input type="text" placeholder="Product Manager">
                </div>
            </div>
        </div>
        
        <div class="form-row">
            <div class="corporate-input-group">
                <label>Work email</label>
                <div class="input-wrapper">
                    <i class="fas fa-envelope"></i>
                    <input type="email" placeholder="john@company.com" required>
                </div>
            </div>
            <div class="corporate-input-group">
                <label>Phone number</label>
                <div class="input-wrapper">
                    <i class="fas fa-phone"></i>
                    <input type="tel" placeholder="+1 (555) 000-0000">
                </div>
            </div>
        </div>
        
        <div class="form-row">
            <div class="corporate-input-group">
                <label>Company name</label>
                <div class="input-wrapper">
                    <i class="fas fa-building"></i>
                    <input type="text" placeholder="Acme Inc." required>
                </div>
            </div>
            <div class="corporate-input-group">
                <label>Company size</label>
                <div class="input-wrapper">
                    <i class="fas fa-users"></i>
                    <select required>
                        <option value="" disabled selected>Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                    </select>
                </div>
            </div>
        </div>
        
        <div class="corporate-password-row">
            <div class="corporate-input-group">
                <label>Password</label>
                <div class="input-wrapper">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Create password" required id="corporate-password">
                    <button type="button" class="corporate-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="corporate-password-strength">
                <div class="strength-meter">
                    <div class="strength-segment"></div>
                    <div class="strength-segment"></div>
                    <div class="strength-segment"></div>
                    <div class="strength-segment"></div>
                </div>
                <span class="strength-text">Password strength</span>
            </div>
        </div>
        
        <div class="corporate-checkbox-group">
            <label class="corporate-checkbox">
                <input type="checkbox" checked>
                <span class="checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span class="checkbox-text">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
            </label>
            
            <label class="corporate-checkbox">
                <input type="checkbox" checked>
                <span class="checkmark">
                    <i class="fas fa-check"></i>
                </span>
                <span class="checkbox-text">Send me product updates and newsletters</span>
            </label>
        </div>
        
        <button type="submit" class="corporate-submit-btn">
            <span>Create Business Account</span>
            <i class="fas fa-arrow-right"></i>
        </button>
        
        <div class="corporate-footer">
            <span class="footer-text">Already have an account?</span>
            <a href="#" class="corporate-link">Sign in</a>
            <span class="divider">•</span>
            <a href="#" class="corporate-link">Contact sales</a>
        </div>
    </form>
    
    <div class="corporate-trust-badge">
        <i class="fas fa-shield-alt"></i>
        <span>Enterprise-grade security • SOC2 Type II compliant</span>
    </div>
</div>`,
    css: `.corporate-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
    border: 1px solid #eef2f6;
    max-height: 280px;
    overflow-y: auto;
}

.corporate-header {
    text-align: center;
    margin-bottom: 20px;
}

.company-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #f0f5ff;
    padding: 6px 16px;
    border-radius: 30px;
    margin-bottom: 15px;
}

.company-badge i {
    color: #2563eb;
    font-size: 0.9rem;
}

.company-badge span {
    color: #2563eb;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1px;
}

.corporate-header h3 {
    font-size: 1.2rem;
    color: #1e293b;
    margin-bottom: 5px;
}

.corporate-header p {
    font-size: 0.75rem;
    color: #64748b;
}

.corporate-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 25px;
    background: #f8fafc;
    padding: 4px;
    border-radius: 10px;
}

.corporate-tab {
    flex: 1;
    padding: 10px;
    border: none;
    background: transparent;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #64748b;
    cursor: pointer;
    transition: all 0.2s ease;
}

.corporate-tab.active {
    background: white;
    color: #2563eb;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.form-row {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.corporate-input-group {
    flex: 1;
}

.corporate-input-group label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 6px;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-wrapper i {
    position: absolute;
    left: 14px;
    color: #94a3b8;
    font-size: 0.85rem;
}

.input-wrapper input,
.input-wrapper select {
    width: 100%;
    padding: 12px 12px 12px 42px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.85rem;
    transition: all 0.2s ease;
    background: white;
    color: #1e293b;
}

.input-wrapper select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 14px;
}

.input-wrapper input:focus,
.input-wrapper select:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.corporate-password-row {
    margin-bottom: 20px;
}

.corporate-password-strength {
    margin-top: 10px;
}

.strength-meter {
    display: flex;
    gap: 6px;
    margin-bottom: 5px;
}

.strength-segment {
    flex: 1;
    height: 4px;
    background: #e2e8f0;
    border-radius: 2px;
    transition: all 0.3s ease;
}

.strength-text {
    font-size: 0.65rem;
    color: #64748b;
}

.corporate-toggle {
    position: absolute;
    right: 14px;
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.corporate-checkbox-group {
    margin: 20px 0;
}

.corporate-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 12px;
    cursor: pointer;
}

.corporate-checkbox input {
    display: none;
}

.corporate-checkbox .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    flex-shrink: 0;
    margin-top: 2px;
}

.corporate-checkbox input:checked + .checkmark {
    background: #2563eb;
    border-color: #2563eb;
    color: white;
}

.checkbox-text {
    font-size: 0.75rem;
    color: #475569;
    line-height: 1.5;
}

.checkbox-text a {
    color: #2563eb;
    text-decoration: none;
}

.corporate-submit-btn {
    width: 100%;
    padding: 16px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.corporate-submit-btn:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.corporate-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #64748b;
}

.corporate-link {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    margin: 0 5px;
}

.divider {
    color: #cbd5e1;
}

.corporate-trust-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #e2e8f0;
    color: #64748b;
    font-size: 0.65rem;
}

.corporate-trust-badge i {
    color: #2563eb;
}`,
    js: `// Corporate Professional Signup
document.addEventListener('DOMContentLoaded', function() {
    const corporateForm = document.querySelector('.corporate-form');
    const passwordInput = document.getElementById('corporate-password');
    const strengthSegments = document.querySelectorAll('.strength-segment');
    const strengthText = document.querySelector('.strength-text');
    
    // Account type tabs
    const tabs = document.querySelectorAll('.corporate-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showCorporateNotification(\`Switched to \${this.dataset.type} account\`, 'info');
        });
    });
    
    // Password strength meter
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            if (password.length >= 8) strength += 25;
            if (/[A-Z]/.test(password)) strength += 25;
            if (/[0-9]/.test(password)) strength += 25;
            if (/[^A-Za-z0-9]/.test(password)) strength += 25;
            
            strengthSegments.forEach((segment, index) => {
                if (index < strength / 25) {
                    segment.style.background = 
                        strength < 50 ? '#ef4444' : 
                        strength < 75 ? '#f59e0b' : '#10b981';
                } else {
                    segment.style.background = '#e2e8f0';
                }
            });
            
            if (strength === 0) strengthText.textContent = 'Password strength';
            else if (strength < 50) strengthText.textContent = 'Weak password';
            else if (strength < 75) strengthText.textContent = 'Good password';
            else strengthText.textContent = 'Strong password';
        });
    }
    
    // Form submission
    if (corporateForm) {
        corporateForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = this.querySelector('input[placeholder="John Doe"]').value;
            const email = this.querySelector('input[placeholder="john@company.com"]').value;
            const password = passwordInput.value;
            
            if (!fullName || !email || !password) {
                showCorporateNotification('Please fill in all required fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.corporate-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating Account...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Account Created!</span> <i class="fas fa-check"></i>';
                showCorporateNotification('Your business account has been created', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    strengthSegments.forEach(s => s.style.background = '#e2e8f0');
                    strengthText.textContent = 'Password strength';
                }, 2000);
            }, 2000);
        });
    }
    
    // Password toggle
    const corporateToggle = document.querySelector('.corporate-toggle');
    if (corporateToggle) {
        corporateToggle.addEventListener('click', function() {
            const input = document.getElementById('corporate-password');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }
    
    function showCorporateNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: 1px solid \${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
            color: \${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 500;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 64: SaaS Product Signup
// ====================================================================
form64: {
    name: "SaaS Product Signup",
    category: "signup professional saas",
    html: `<div class="form-container saas-signup-bg">
    <div class="saas-header">
        <div class="saas-logo">
            <i class="fas fa-cloud"></i>
            <span>CLOUDSUITE</span>
        </div>
        <h3>Start your free trial</h3>
        <p>Join 10,000+ teams already shipping faster</p>
    </div>
    
    <div class="saas-pricing-tag">
        <span class="plan-name">Professional Plan</span>
        <span class="plan-price">$29</span>
        <span class="plan-period">/month after trial</span>
    </div>
    
    <form class="saas-form">
        <div class="saas-input-row">
            <div class="saas-input-group">
                <label>Work email</label>
                <input type="email" placeholder="you@company.com" required>
            </div>
        </div>
        
        <div class="saas-input-row">
            <div class="saas-input-group half">
                <label>First name</label>
                <input type="text" placeholder="John" required>
            </div>
            <div class="saas-input-group half">
                <label>Last name</label>
                <input type="text" placeholder="Doe" required>
            </div>
        </div>
        
        <div class="saas-input-row">
            <div class="saas-input-group">
                <label>Company name</label>
                <input type="text" placeholder="Acme Corporation" required>
            </div>
        </div>
        
        <div class="saas-input-row">
            <div class="saas-input-group">
                <label>Password</label>
                <div class="saas-password-wrapper">
                    <input type="password" placeholder="Create password" required id="saas-password">
                    <button type="button" class="saas-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="saas-password-requirements">
            <div class="requirement" data-requirement="length">
                <i class="far fa-circle"></i>
                <span>At least 8 characters</span>
            </div>
            <div class="requirement" data-requirement="number">
                <i class="far fa-circle"></i>
                <span>Contains a number</span>
            </div>
            <div class="requirement" data-requirement="uppercase">
                <i class="far fa-circle"></i>
                <span>Contains uppercase letter</span>
            </div>
        </div>
        
        <div class="saas-checkbox-group">
            <label class="saas-checkbox">
                <input type="checkbox" checked>
                <span class="checkmark"></span>
                <span class="checkbox-text">I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></span>
            </label>
        </div>
        
        <button type="submit" class="saas-submit-btn">
            <span>Start 14-day free trial</span>
            <i class="fas fa-arrow-right"></i>
        </button>
        
        <div class="saas-divider">
            <span>Or sign up with</span>
        </div>
        
        <div class="saas-social">
            <button type="button" class="saas-social-btn google">
                <i class="fab fa-google"></i>
                <span>Google</span>
            </button>
            <button type="button" class="saas-social-btn github">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
            </button>
        </div>
    </form>
    
    <div class="saas-footer">
        <span>Already have an account?</span>
        <a href="#">Sign in</a>
    </div>
</div>`,
    css: `.saas-signup-bg {
    background: linear-gradient(145deg, #0b1120, #1a2639);
    border-radius: 24px;
    padding: 25px;
    color: white;
    max-height: 280px;
    overflow-y: auto;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.saas-header {
    text-align: center;
    margin-bottom: 20px;
}

.saas-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
}

.saas-logo i {
    font-size: 1.5rem;
    color: #3b82f6;
}

.saas-logo span {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: white;
}

.saas-header h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.saas-header p {
    font-size: 0.75rem;
    color: #94a3b8;
}

.saas-pricing-tag {
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 25px;
}

.plan-name {
    font-size: 0.8rem;
    color: #94a3b8;
}

.plan-price {
    font-size: 1.2rem;
    font-weight: 700;
    color: #3b82f6;
}

.plan-period {
    font-size: 0.7rem;
    color: #64748b;
}

.saas-input-row {
    margin-bottom: 20px;
}

.saas-input-group {
    flex: 1;
}

.saas-input-group.half {
    display: inline-block;
    width: calc(50% - 7.5px);
}

.saas-input-group.half:first-child {
    margin-right: 15px;
}

.saas-input-group label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #cbd5e1;
    margin-bottom: 6px;
}

.saas-input-group input,
.saas-input-group select {
    width: 100%;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: white;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.saas-input-group input:focus,
.saas-input-group select:focus {
    outline: none;
    border-color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
}

.saas-password-wrapper {
    position: relative;
}

.saas-password-wrapper input {
    padding-right: 50px;
}

.saas-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.saas-password-requirements {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0 25px;
    background: rgba(255, 255, 255, 0.03);
    padding: 12px;
    border-radius: 10px;
}

.requirement {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.7rem;
    color: #94a3b8;
}

.requirement i {
    font-size: 0.65rem;
}

.requirement.valid i {
    color: #10b981;
}

.saas-checkbox-group {
    margin-bottom: 25px;
}

.saas-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.saas-checkbox input {
    display: none;
}

.saas-checkbox .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
}

.saas-checkbox input:checked + .checkmark {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
}

.saas-checkbox .checkbox-text {
    font-size: 0.75rem;
    color: #cbd5e1;
}

.saas-checkbox .checkbox-text a {
    color: #3b82f6;
    text-decoration: none;
}

.saas-submit-btn {
    width: 100%;
    padding: 16px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.saas-submit-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.saas-divider {
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #64748b;
    font-size: 0.7rem;
}

.saas-divider::before,
.saas-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
}

.saas-divider span {
    padding: 0 15px;
}

.saas-social {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.saas-social-btn {
    flex: 1;
    padding: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.saas-social-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

.saas-social-btn.google:hover {
    background: #ea4335;
    border-color: #ea4335;
}

.saas-social-btn.github:hover {
    background: #333;
    border-color: #333;
}

.saas-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #94a3b8;
}

.saas-footer a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;
}`,
    js: `// SaaS Product Signup
document.addEventListener('DOMContentLoaded', function() {
    const saasForm = document.querySelector('.saas-form');
    const passwordInput = document.getElementById('saas-password');
    const requirements = document.querySelectorAll('.requirement');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            
            // Length check
            const lengthReq = document.querySelector('[data-requirement="length"]');
            if (password.length >= 8) {
                lengthReq.classList.add('valid');
                lengthReq.querySelector('i').className = 'fas fa-check-circle';
            } else {
                lengthReq.classList.remove('valid');
                lengthReq.querySelector('i').className = 'far fa-circle';
            }
            
            // Number check
            const numberReq = document.querySelector('[data-requirement="number"]');
            if (/[0-9]/.test(password)) {
                numberReq.classList.add('valid');
                numberReq.querySelector('i').className = 'fas fa-check-circle';
            } else {
                numberReq.classList.remove('valid');
                numberReq.querySelector('i').className = 'far fa-circle';
            }
            
            // Uppercase check
            const upperReq = document.querySelector('[data-requirement="uppercase"]');
            if (/[A-Z]/.test(password)) {
                upperReq.classList.add('valid');
                upperReq.querySelector('i').className = 'fas fa-check-circle';
            } else {
                upperReq.classList.remove('valid');
                upperReq.querySelector('i').className = 'far fa-circle';
            }
        });
    }
    
    // Form submission
    if (saasForm) {
        saasForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="you@company.com"]').value;
            const firstName = this.querySelector('input[placeholder="John"]').value;
            const lastName = this.querySelector('input[placeholder="Doe"]').value;
            const company = this.querySelector('input[placeholder="Acme Corporation"]').value;
            const password = passwordInput?.value;
            
            if (!email || !firstName || !lastName || !company || !password) {
                showSaaSNotification('Please fill in all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.saas-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating Trial...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Trial Started!</span> <i class="fas fa-check"></i>';
                showSaaSNotification('Your 14-day free trial has been activated', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    requirements.forEach(req => {
                        req.classList.remove('valid');
                        req.querySelector('i').className = 'far fa-circle';
                    });
                }, 2000);
            }, 2000);
        });
    }
    
    // Password toggle
    const saasToggle = document.querySelector('.saas-toggle');
    if (saasToggle) {
        saasToggle.addEventListener('click', function() {
            const input = document.getElementById('saas-password');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }
    
    // Social buttons
    const socialBtns = document.querySelectorAll('.saas-social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'GitHub';
            showSaaSNotification(\`Signing up with \${provider}\`, 'info');
        });
    });
    
    function showSaaSNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #0b1120;
            border: 1px solid \${type === 'success' ? '#3b82f6' : type === 'error' ? '#ef4444' : '#94a3b8'};
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 65: Professional Services Signup
// ====================================================================
form65: {
    name: "Professional Services Signup",
    category: "signup professional services",
    html: `<div class="form-container services-signup-bg">
    <div class="services-sidebar">
        <div class="services-icon">
            <i class="fas fa-handshake"></i>
        </div>
        <h4 class="services-sidebar-title">Why join us?</h4>
        <ul class="services-benefits">
            <li><i class="fas fa-check-circle"></i> 24/7 dedicated support</li>
            <li><i class="fas fa-check-circle"></i> Free consultation</li>
            <li><i class="fas fa-check-circle"></i> No long-term contracts</li>
            <li><i class="fas fa-check-circle"></i> Money-back guarantee</li>
        </ul>
        <div class="services-testimonial">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">The best decision we made for our business. Their platform transformed our workflow.</p>
            <div class="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson">
                <div class="author-info">
                    <span class="author-name">Sarah Johnson</span>
                    <span class="author-title">CEO, TechStart</span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="services-main">
        <div class="form-header">
            <h3>Create your account</h3>
            <p>Get started with your free consultation</p>
        </div>
        
        <form class="services-form">
            <div class="services-input-row">
                <div class="services-input-group">
                    <label>Full name</label>
                    <input type="text" placeholder="Enter your full name" required>
                </div>
            </div>
            
            <div class="services-input-row">
                <div class="services-input-group">
                    <label>Email address</label>
                    <input type="email" placeholder="you@example.com" required>
                </div>
            </div>
            
            <div class="services-input-row">
                <div class="services-input-group">
                    <label>Phone number</label>
                    <input type="tel" placeholder="+1 (555) 123-4567" required>
                </div>
            </div>
            
            <div class="services-input-row">
                <div class="services-input-group">
                    <label>Company name (optional)</label>
                    <input type="text" placeholder="Your company">
                </div>
            </div>
            
            <div class="services-input-row">
                <div class="services-input-group">
                    <label>How can we help?</label>
                    <select>
                        <option value="" disabled selected>Select a service</option>
                        <option value="consulting">Business Consulting</option>
                        <option value="development">Software Development</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="design">UI/UX Design</option>
                    </select>
                </div>
            </div>
            
            <div class="services-input-row">
                <div class="services-input-group">
                    <label>Password</label>
                    <div class="services-password-wrapper">
                        <input type="password" placeholder="Create password" required id="services-password">
                        <button type="button" class="services-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="services-terms">
                <label class="services-checkbox">
                    <input type="checkbox" checked>
                    <span class="checkmark"></span>
                    <span class="checkbox-text">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </label>
            </div>
            
            <button type="submit" class="services-submit-btn">
                <span>Schedule Free Consultation</span>
                <i class="fas fa-calendar-alt"></i>
            </button>
            
            <div class="services-login-link">
                <span>Already have an account?</span>
                <a href="#">Log in</a>
            </div>
        </form>
    </div>
</div>`,
    css: `.services-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 0;
    overflow: hidden;
    display: flex;
    max-height: 280px;
    overflow-y: auto;
}

.services-sidebar {
    width: 40%;
    background: linear-gradient(145deg, #2563eb, #1d4ed8);
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
}

.services-icon {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.services-sidebar-title {
    font-size: 1.1rem;
    margin-bottom: 20px;
    font-weight: 600;
}

.services-benefits {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
}

.services-benefits li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 0.8rem;
}

.services-benefits i {
    color: #86efac;
    font-size: 0.9rem;
}

.services-testimonial {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 15px;
    margin-top: auto;
}

.testimonial-quote {
    font-size: 2rem;
    line-height: 1;
    opacity: 0.5;
    margin-bottom: 5px;
}

.testimonial-text {
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 15px;
    font-style: italic;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 10px;
}

.testimonial-author img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid white;
}

.author-info {
    display: flex;
    flex-direction: column;
}

.author-name {
    font-size: 0.75rem;
    font-weight: 600;
}

.author-title {
    font-size: 0.6rem;
    opacity: 0.8;
}

.services-main {
    width: 60%;
    padding: 20px;
}

.services-main .form-header {
    margin-bottom: 20px;
}

.services-main .form-header h3 {
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 5px;
}

.services-main .form-header p {
    font-size: 0.7rem;
    color: #64748b;
}

.services-input-row {
    margin-bottom: 15px;
}

.services-input-group {
    width: 100%;
}

.services-input-group label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 5px;
}

.services-input-group input,
.services-input-group select {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.85rem;
    transition: all 0.2s ease;
}

.services-input-group input:focus,
.services-input-group select:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.services-password-wrapper {
    position: relative;
}

.services-password-wrapper input {
    padding-right: 45px;
}

.services-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.services-terms {
    margin: 20px 0;
}

.services-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
}

.services-checkbox input {
    display: none;
}

.services-checkbox .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    flex-shrink: 0;
    margin-top: 2px;
}

.services-checkbox input:checked + .checkmark {
    background: #2563eb;
    border-color: #2563eb;
    color: white;
}

.services-checkbox .checkbox-text {
    font-size: 0.75rem;
    color: #475569;
}

.services-checkbox a {
    color: #2563eb;
    text-decoration: none;
}

.services-submit-btn {
    width: 100%;
    padding: 14px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
}

.services-submit-btn:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

.services-login-link {
    text-align: center;
    font-size: 0.75rem;
    color: #64748b;
}

.services-login-link a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    margin-left: 5px;
}`,
    js: `// Professional Services Signup
document.addEventListener('DOMContentLoaded', function() {
    const servicesForm = document.querySelector('.services-form');
    
    if (servicesForm) {
        servicesForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = this.querySelector('input[placeholder="Enter your full name"]').value;
            const email = this.querySelector('input[placeholder="you@example.com"]').value;
            const phone = this.querySelector('input[placeholder="+1 (555) 123-4567"]').value;
            const password = document.getElementById('services-password').value;
            
            if (!fullName || !email || !phone || !password) {
                showServicesNotification('Please fill in all required fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.services-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Scheduling...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Consultation Scheduled!</span> <i class="fas fa-check"></i>';
                showServicesNotification('Your free consultation has been scheduled', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
    }
    
    // Password toggle
    const servicesToggle = document.querySelector('.services-toggle');
    if (servicesToggle) {
        servicesToggle.addEventListener('click', function() {
            const input = document.getElementById('services-password');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }
    
    function showServicesNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: 1px solid \${type === 'success' ? '#2563eb' : '#ef4444'};
            color: \${type === 'success' ? '#2563eb' : '#ef4444'};
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 66: Multi-step Professional Signup
// ====================================================================
form66: {
    name: "Multi-step Professional Signup",
    category: "signup professional multi-step",
    html: `<div class="form-container multi-step-pro-signup-bg">
    <div class="step-progress">
        <div class="step-item active" data-step="1">
            <div class="step-number">1</div>
            <span class="step-label">Account</span>
        </div>
        <div class="step-line"></div>
        <div class="step-item" data-step="2">
            <div class="step-number">2</div>
            <span class="step-label">Profile</span>
        </div>
        <div class="step-line"></div>
        <div class="step-item" data-step="3">
            <div class="step-number">3</div>
            <span class="step-label">Company</span>
        </div>
        <div class="step-line"></div>
        <div class="step-item" data-step="4">
            <div class="step-number">4</div>
            <span class="step-label">Confirm</span>
        </div>
    </div>
    
    <div class="step-panel active" data-step="1">
        <div class="panel-header">
            <h3>Create your account</h3>
            <p>Step 1 of 4: Account information</p>
        </div>
        <form class="step-form step-1-form">
            <div class="form-group">
                <label>Email address</label>
                <input type="email" placeholder="you@example.com" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <div class="password-field">
                    <input type="password" placeholder="Create password" required id="step1-password">
                    <button type="button" class="step-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
                <div class="password-hint">Must be at least 8 characters</div>
            </div>
            <div class="form-group">
                <label>Confirm password</label>
                <div class="password-field">
                    <input type="password" placeholder="Confirm password" required id="step1-confirm">
                </div>
            </div>
            <button type="button" class="step-next-btn" data-next="2">Continue</button>
        </form>
    </div>
    
    <div class="step-panel" data-step="2">
        <div class="panel-header">
            <h3>Personal details</h3>
            <p>Step 2 of 4: Tell us about yourself</p>
        </div>
        <form class="step-form step-2-form">
            <div class="form-row">
                <div class="form-group half">
                    <label>First name</label>
                    <input type="text" placeholder="John" required>
                </div>
                <div class="form-group half">
                    <label>Last name</label>
                    <input type="text" placeholder="Doe" required>
                </div>
            </div>
            <div class="form-group">
                <label>Phone number</label>
                <input type="tel" placeholder="+1 (555) 000-0000">
            </div>
            <div class="form-group">
                <label>Job title</label>
                <input type="text" placeholder="e.g. Product Manager">
            </div>
            <div class="form-buttons">
                <button type="button" class="step-prev-btn" data-prev="1">Back</button>
                <button type="button" class="step-next-btn" data-next="3">Continue</button>
            </div>
        </form>
    </div>
    
    <div class="step-panel" data-step="3">
        <div class="panel-header">
            <h3>Company information</h3>
            <p>Step 3 of 4: Tell us about your business</p>
        </div>
        <form class="step-form step-3-form">
            <div class="form-group">
                <label>Company name</label>
                <input type="text" placeholder="Acme Inc." required>
            </div>
            <div class="form-group">
                <label>Company size</label>
                <select required>
                    <option value="" disabled selected>Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                </select>
            </div>
            <div class="form-group">
                <label>Industry</label>
                <select>
                    <option value="" disabled selected>Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                </select>
            </div>
            <div class="form-buttons">
                <button type="button" class="step-prev-btn" data-prev="2">Back</button>
                <button type="button" class="step-next-btn" data-next="4">Continue</button>
            </div>
        </form>
    </div>
    
    <div class="step-panel" data-step="4">
        <div class="panel-header">
            <h3>Review & confirm</h3>
            <p>Step 4 of 4: Verify your information</p>
        </div>
        <div class="review-summary">
            <div class="summary-section">
                <h4>Account</h4>
                <div class="summary-row"><span>Email:</span> <span class="summary-value">john@example.com</span></div>
            </div>
            <div class="summary-section">
                <h4>Personal</h4>
                <div class="summary-row"><span>Name:</span> <span class="summary-value">John Doe</span></div>
                <div class="summary-row"><span>Phone:</span> <span class="summary-value">+1 (555) 123-4567</span></div>
            </div>
            <div class="summary-section">
                <h4>Company</h4>
                <div class="summary-row"><span>Company:</span> <span class="summary-value">Acme Inc.</span></div>
                <div class="summary-row"><span>Size:</span> <span class="summary-value">11-50 employees</span></div>
            </div>
        </div>
        
        <form class="step-form step-4-form">
            <div class="terms-group">
                <label class="terms-checkbox">
                    <input type="checkbox" checked>
                    <span class="checkmark"></span>
                    <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                </label>
                <label class="terms-checkbox">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                    <span>Send me product updates (optional)</span>
                </label>
            </div>
            
            <div class="form-buttons">
                <button type="button" class="step-prev-btn" data-prev="3">Back</button>
                <button type="submit" class="step-submit-btn">Create Account</button>
            </div>
        </form>
    </div>
</div>`,
    css: `.multi-step-pro-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
    border: 1px solid #eef2f6;
    max-height: 280px;
    overflow-y: auto;
}

.step-progress {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 5px;
}

.step-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    flex: 1;
}

.step-number {
    width: 32px;
    height: 32px;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: #64748b;
    transition: all 0.3s ease;
}

.step-item.active .step-number {
    background: #2563eb;
    color: white;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.step-label {
    font-size: 0.6rem;
    color: #94a3b8;
    font-weight: 500;
}

.step-item.active .step-label {
    color: #2563eb;
}

.step-line {
    flex: 0.5;
    height: 2px;
    background: #e2e8f0;
    margin: 0 5px;
    position: relative;
    top: -8px;
}

.step-panel {
    display: none;
}

.step-panel.active {
    display: block;
    animation: stepFade 0.4s ease;
}

@keyframes stepFade {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.panel-header {
    margin-bottom: 20px;
}

.panel-header h3 {
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 4px;
}

.panel-header p {
    font-size: 0.7rem;
    color: #64748b;
}

.step-form .form-group {
    margin-bottom: 20px;
}

.step-form .form-group label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 6px;
}

.step-form .form-group input,
.step-form .form-group select {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 0.85rem;
    transition: all 0.2s ease;
}

.step-form .form-group input:focus,
.step-form .form-group select:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.password-field {
    position: relative;
}

.password-field input {
    padding-right: 50px;
}

.step-toggle {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #94a3b8;
    cursor: pointer;
}

.password-hint {
    font-size: 0.65rem;
    color: #94a3b8;
    margin-top: 5px;
}

.form-row {
    display: flex;
    gap: 15px;
}

.form-group.half {
    flex: 1;
}

.form-buttons {
    display: flex;
    gap: 15px;
    margin-top: 25px;
}

.step-prev-btn,
.step-next-btn,
.step-submit-btn {
    padding: 14px 24px;
    border: none;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
}

.step-prev-btn {
    background: #f1f5f9;
    color: #475569;
}

.step-prev-btn:hover {
    background: #e2e8f0;
}

.step-next-btn {
    background: #2563eb;
    color: white;
}

.step-next-btn:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

.step-submit-btn {
    background: #10b981;
    color: white;
}

.step-submit-btn:hover {
    background: #059669;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.2);
}

.review-summary {
    background: #f8fafc;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 25px;
}

.summary-section {
    margin-bottom: 15px;
}

.summary-section h4 {
    font-size: 0.8rem;
    color: #2563eb;
    margin-bottom: 10px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #e2e8f0;
    font-size: 0.75rem;
}

.summary-row:last-child {
    border-bottom: none;
}

.summary-value {
    font-weight: 600;
    color: #1e293b;
}

.terms-group {
    margin: 20px 0;
}

.terms-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    cursor: pointer;
}

.terms-checkbox input {
    display: none;
}

.terms-checkbox .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    flex-shrink: 0;
    margin-top: 2px;
}

.terms-checkbox input:checked + .checkmark {
    background: #2563eb;
    border-color: #2563eb;
    color: white;
}

.terms-checkbox span {
    font-size: 0.75rem;
    color: #475569;
}

.terms-checkbox a {
    color: #2563eb;
    text-decoration: none;
}`,
    js: `// Multi-step Professional Signup
document.addEventListener('DOMContentLoaded', function() {
    const stepContainer = document.querySelector('.multi-step-pro-signup-bg');
    if (!stepContainer) return;
    
    let currentStep = 1;
    const stepPanels = stepContainer.querySelectorAll('.step-panel');
    const stepItems = stepContainer.querySelectorAll('.step-item');
    const formData = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        jobTitle: '',
        company: '',
        size: '',
        industry: ''
    };
    
    // Switch panel function
    function switchStep(step) {
        stepPanels.forEach(panel => panel.classList.remove('active'));
        stepContainer.querySelector(\`.step-panel[data-step="\${step}"]\`).classList.add('active');
        
        stepItems.forEach((item, index) => {
            if (index + 1 === step) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
        
        currentStep = step;
    }
    
    // Collect data from step 1
    function collectStep1() {
        const email = stepContainer.querySelector('.step-1-form input[type="email"]').value;
        const password = document.getElementById('step1-password').value;
        const confirm = document.getElementById('step1-confirm').value;
        
        if (!email || !password || !confirm) {
            showStepNotification('Please fill in all fields', 'error');
            return false;
        }
        
        if (password !== confirm) {
            showStepNotification('Passwords do not match', 'error');
            return false;
        }
        
        if (password.length < 8) {
            showStepNotification('Password must be at least 8 characters', 'error');
            return false;
        }
        
        formData.email = email;
        formData.password = password;
        
        // Update summary
        stepContainer.querySelector('.summary-section:first-child .summary-value').textContent = email;
        return true;
    }
    
    // Collect data from step 2
    function collectStep2() {
        const firstName = stepContainer.querySelector('.step-2-form input[placeholder="John"]').value;
        const lastName = stepContainer.querySelector('.step-2-form input[placeholder="Doe"]').value;
        const phone = stepContainer.querySelector('.step-2-form input[type="tel"]').value;
        const jobTitle = stepContainer.querySelector('.step-2-form input[placeholder="e.g. Product Manager"]').value;
        
        if (!firstName || !lastName) {
            showStepNotification('Please enter your name', 'error');
            return false;
        }
        
        formData.firstName = firstName;
        formData.lastName = lastName;
        formData.phone = phone || 'Not provided';
        formData.jobTitle = jobTitle || 'Not specified';
        
        // Update summary
        stepContainer.querySelector('.summary-section:nth-child(2) .summary-value').textContent = 
            \`\${firstName} \${lastName}\`;
        return true;
    }
    
    // Collect data from step 3
    function collectStep3() {
        const company = stepContainer.querySelector('.step-3-form input[placeholder="Acme Inc."]').value;
        const size = stepContainer.querySelector('.step-3-form select').value;
        const industry = stepContainer.querySelectorAll('.step-3-form select')[1].value;
        
        if (!company || !size) {
            showStepNotification('Please enter company information', 'error');
            return false;
        }
        
        formData.company = company;
        formData.size = size;
        formData.industry = industry || 'Not specified';
        
        // Update summary
        stepContainer.querySelector('.summary-section:last-child .summary-value').textContent = company;
        return true;
    }
    
    // Next buttons
    stepContainer.querySelectorAll('.step-next-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            
            let canProceed = true;
            if (currentStep === 1) canProceed = collectStep1();
            else if (currentStep === 2) canProceed = collectStep2();
            else if (currentStep === 3) canProceed = collectStep3();
            
            if (canProceed) {
                switchStep(nextStep);
            }
        });
    });
    
    // Previous buttons
    stepContainer.querySelectorAll('.step-prev-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            switchStep(prevStep);
        });
    });
    
    // Password toggle
    const stepToggle = stepContainer.querySelector('.step-toggle');
    if (stepToggle) {
        stepToggle.addEventListener('click', function() {
            const input = document.getElementById('step1-password');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }
    
    // Final form submission
    const finalForm = stepContainer.querySelector('.step-4-form');
    if (finalForm) {
        finalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const termsChecked = this.querySelector('.terms-checkbox:first-child input').checked;
            
            if (!termsChecked) {
                showStepNotification('Please accept the Terms of Service', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.step-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Creating Account...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Account Created!</span> <i class="fas fa-check"></i>';
                showStepNotification('Welcome! Your account has been created', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    switchStep(1);
                    stepContainer.querySelectorAll('form').forEach(form => form.reset());
                }, 2000);
            }, 2000);
        });
    }
    
    function showStepNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: 1px solid \${type === 'success' ? '#10b981' : '#ef4444'};
            color: \${type === 'success' ? '#10b981' : '#ef4444'};
            padding: 12px 24px;
            border-radius: 8px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 67: B2B Enterprise Signup
// ====================================================================
form67: {
    name: "B2B Enterprise Signup",
    category: "signup professional b2b",
    html: `<div class="form-container b2b-enterprise-signup-bg">
    <div class="b2b-header">
        <div class="b2b-logo">
            <i class="fas fa-chart-line"></i>
            <span>ENTERPRISE</span>
        </div>
        <h3>Request Enterprise Demo</h3>
        <p>See how our platform can scale with your business</p>
    </div>
    
    <div class="b2b-features">
        <div class="feature">
            <i class="fas fa-shield-alt"></i>
            <span>SOC2 Type II</span>
        </div>
        <div class="feature">
            <i class="fas fa-clock"></i>
            <span>99.9% Uptime SLA</span>
        </div>
        <div class="feature">
            <i class="fas fa-users"></i>
            <span>Unlimited users</span>
        </div>
        <div class="feature">
            <i class="fas fa-headset"></i>
            <span>24/7 Support</span>
        </div>
    </div>
    
    <form class="b2b-form">
        <div class="b2b-form-row">
            <div class="b2b-input-group">
                <label>Full name</label>
                <input type="text" placeholder="John Doe" required>
            </div>
            <div class="b2b-input-group">
                <label>Work email</label>
                <input type="email" placeholder="john.doe@company.com" required>
            </div>
        </div>
        
        <div class="b2b-form-row">
            <div class="b2b-input-group">
                <label>Company name</label>
                <input type="text" placeholder="Acme Corporation" required>
            </div>
            <div class="b2b-input-group">
                <label>Job title</label>
                <input type="text" placeholder="CTO / VP of Engineering" required>
            </div>
        </div>
        
        <div class="b2b-form-row">
            <div class="b2b-input-group">
                <label>Phone number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" required>
            </div>
            <div class="b2b-input-group">
                <label>Employee count</label>
                <select required>
                    <option value="" disabled selected>Select range</option>
                    <option value="1-50">1-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201-1000">201-1000</option>
                    <option value="1000+">1000+</option>
                </select>
            </div>
        </div>
        
        <div class="b2b-form-row">
            <div class="b2b-input-group full">
                <label>How do you plan to use our platform?</label>
                <textarea rows="2" placeholder="Tell us about your use case..."></textarea>
            </div>
        </div>
        
        <div class="b2b-checkbox-group">
            <label class="b2b-checkbox">
                <input type="checkbox" checked>
                <span class="checkmark"></span>
                <span>I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></span>
            </label>
            <label class="b2b-checkbox">
                <input type="checkbox">
                <span class="checkmark"></span>
                <span>Contact me about enterprise offers</span>
            </label>
        </div>
        
        <button type="submit" class="b2b-submit-btn">
            <span>Request Demo</span>
            <i class="fas fa-calendar-check"></i>
        </button>
        
        <div class="b2b-security-note">
            <i class="fas fa-lock"></i>
            <span>Your information is protected by enterprise-grade security</span>
        </div>
    </form>
    
    <div class="b2b-footer">
        <span>Already have an account?</span>
        <a href="#">Sign in</a>
        <span class="divider">|</span>
        <a href="#">Contact sales</a>
    </div>
</div>`,
    css: `.b2b-enterprise-signup-bg {
    background: white;
    border-radius: 24px;
    padding: 25px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
    border: 1px solid #e9edf2;
    max-height: 280px;
    overflow-y: auto;
}

.b2b-header {
    text-align: center;
    margin-bottom: 20px;
}

.b2b-logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #f0f5ff;
    padding: 8px 20px;
    border-radius: 40px;
    margin-bottom: 15px;
}

.b2b-logo i {
    color: #2563eb;
}

.b2b-logo span {
    color: #2563eb;
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

.b2b-header h3 {
    font-size: 1.2rem;
    color: #1e293b;
    margin-bottom: 5px;
}

.b2b-header p {
    font-size: 0.75rem;
    color: #64748b;
}

.b2b-features {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.feature {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.7rem;
    color: #475569;
}

.feature i {
    color: #2563eb;
    font-size: 0.8rem;
}

.b2b-form-row {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
}

.b2b-input-group {
    flex: 1;
}

.b2b-input-group.full {
    width: 100%;
}

.b2b-input-group label {
    display: block;
    font-size: 0.7rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 6px;
}

.b2b-input-group input,
.b2b-input-group select,
.b2b-input-group textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 0.85rem;
    transition: all 0.2s ease;
}

.b2b-input-group textarea {
    resize: vertical;
    min-height: 50px;
    font-family: inherit;
}

.b2b-input-group input:focus,
.b2b-input-group select:focus,
.b2b-input-group textarea:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.b2b-checkbox-group {
    margin: 20px 0;
}

.b2b-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    cursor: pointer;
}

.b2b-checkbox input {
    display: none;
}

.b2b-checkbox .checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    flex-shrink: 0;
    margin-top: 2px;
}

.b2b-checkbox input:checked + .checkmark {
    background: #2563eb;
    border-color: #2563eb;
    color: white;
}

.b2b-checkbox span {
    font-size: 0.75rem;
    color: #475569;
}

.b2b-checkbox a {
    color: #2563eb;
    text-decoration: none;
}

.b2b-submit-btn {
    width: 100%;
    padding: 16px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
}

.b2b-submit-btn:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.b2b-security-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px;
    background: #f8fafc;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 0.7rem;
    color: #64748b;
}

.b2b-security-note i {
    color: #10b981;
}

.b2b-footer {
    text-align: center;
    font-size: 0.75rem;
    color: #64748b;
    padding-top: 15px;
    border-top: 1px solid #e2e8f0;
}

.b2b-footer a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
    margin: 0 5px;
}`,
    js: `// B2B Enterprise Signup
document.addEventListener('DOMContentLoaded', function() {
    const b2bForm = document.querySelector('.b2b-form');
    
    if (b2bForm) {
        b2bForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = this.querySelector('input[placeholder="John Doe"]').value;
            const email = this.querySelector('input[placeholder="john.doe@company.com"]').value;
            const company = this.querySelector('input[placeholder="Acme Corporation"]').value;
            const jobTitle = this.querySelector('input[placeholder="CTO / VP of Engineering"]').value;
            const phone = this.querySelector('input[placeholder="+1 (555) 000-0000"]').value;
            const employeeCount = this.querySelector('select').value;
            
            if (!fullName || !email || !company || !jobTitle || !phone || !employeeCount) {
                showB2BNotification('Please fill in all required fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.b2b-submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Requesting Demo...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Demo Requested!</span> <i class="fas fa-check"></i>';
                showB2BNotification('An enterprise sales representative will contact you within 24 hours', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                    this.querySelector('.b2b-checkbox:first-child input').checked = true;
                }, 2000);
            }, 2000);
        });
    }
    
    function showB2BNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-left: 4px solid \${type === 'success' ? '#10b981' : '#ef4444'};
            color: #1e293b;
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 0.85rem;
            font-weight: 500;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 68: Crystal Glass Morphism Login
// ====================================================================
form68: {
    name: "Crystal Glass Morphism Login",
    category: "login modern glass crystal",
    html: `<div class="form-container crystal-glass-bg">
    <div class="crystal-shards">
        <div class="shard"></div>
        <div class="shard"></div>
        <div class="shard"></div>
        <div class="shard"></div>
        <div class="shard"></div>
        <div class="shard"></div>
    </div>
    <div class="crystal-card">
        <div class="crystal-reflection"></div>
        <div class="crystal-content">
            <div class="crystal-logo">
                <i class="fas fa-gem"></i>
                <span>CRYSTAL</span>
            </div>
            <h3 class="crystal-title">Luminous Access</h3>
            <p class="crystal-subtitle">Experience pure clarity</p>
            
            <form class="crystal-form">
                <div class="crystal-input-group">
                    <div class="crystal-input-wrapper">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Enter your email" required>
                        <div class="input-glow"></div>
                    </div>
                </div>
                
                <div class="crystal-input-group">
                    <div class="crystal-input-wrapper">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Enter password" required>
                        <button type="button" class="crystal-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                        <div class="input-glow"></div>
                    </div>
                </div>
                
                <div class="crystal-options">
                    <label class="crystal-checkbox">
                        <input type="checkbox" checked>
                        <span class="crystal-checkmark">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="crystal-checkbox-text">Keep me radiant</span>
                    </label>
                    <a href="#" class="crystal-link">Refract password?</a>
                </div>
                
                <button type="submit" class="crystal-btn">
                    <span>Illuminate</span>
                    <i class="fas fa-arrow-right"></i>
                    <div class="btn-crystal-effect"></div>
                </button>
            </form>
            
            <div class="crystal-divider">
                <span class="line"></span>
                <span class="text">or continue with</span>
                <span class="line"></span>
            </div>
            
            <div class="crystal-social">
                <button class="crystal-social-btn">
                    <i class="fab fa-google"></i>
                    <div class="social-glow"></div>
                </button>
                <button class="crystal-social-btn">
                    <i class="fab fa-apple"></i>
                    <div class="social-glow"></div>
                </button>
                <button class="crystal-social-btn">
                    <i class="fab fa-microsoft"></i>
                    <div class="social-glow"></div>
                </button>
            </div>
            
            <div class="crystal-footer">
                <span>New to the crystal?</span>
                <a href="#">Create account</a>
            </div>
        </div>
    </div>
    
    <div class="floating-crystals">
        <div class="floating-crystal"></div>
        <div class="floating-crystal"></div>
        <div class="floating-crystal"></div>
        <div class="floating-crystal"></div>
    </div>
</div>`,
    css: `.crystal-glass-bg {
    background: linear-gradient(145deg, #0a0f1f, #1a1f2f);
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.crystal-shards {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.shard {
    position: absolute;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(2px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    transform-origin: center;
}

.shard:nth-child(1) {
    width: 80px;
    height: 80px;
    top: -20px;
    left: -20px;
    transform: rotate(15deg);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: linear-gradient(45deg, rgba(255,255,255,0.02), rgba(100,200,255,0.02));
}

.shard:nth-child(2) {
    width: 120px;
    height: 120px;
    bottom: -40px;
    right: -40px;
    transform: rotate(45deg);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: linear-gradient(135deg, rgba(200,100,255,0.02), rgba(255,255,255,0.02));
}

.shard:nth-child(3) {
    width: 60px;
    height: 60px;
    top: 40%;
    left: 10%;
    transform: rotate(60deg);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: rgba(100, 200, 255, 0.03);
}

.shard:nth-child(4) {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 20%;
    transform: rotate(30deg);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: rgba(255, 100, 200, 0.02);
}

.shard:nth-child(5) {
    width: 70px;
    height: 70px;
    top: 20%;
    right: 15%;
    transform: rotate(75deg);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: rgba(200, 255, 100, 0.02);
}

.shard:nth-child(6) {
    width: 90px;
    height: 90px;
    bottom: 10%;
    right: 10%;
    transform: rotate(90deg);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    background: rgba(255, 200, 100, 0.02);
}

.crystal-card {
    position: relative;
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 28px;
    padding: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    z-index: 10;
    animation: crystal-float 6s ease-in-out infinite;
}

@keyframes crystal-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.01); }
}

.crystal-reflection {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%);
    transform: rotate(30deg);
    animation: crystal-shine 8s linear infinite;
}

@keyframes crystal-shine {
    0% { transform: rotate(30deg) translateX(-30%); }
    100% { transform: rotate(30deg) translateX(30%); }
}

.crystal-content {
    position: relative;
    z-index: 20;
}

.crystal-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.crystal-logo i {
    font-size: 2rem;
    color: rgba(100, 200, 255, 0.8);
    filter: drop-shadow(0 0 15px rgba(100, 200, 255, 0.5));
    animation: crystal-pulse 3s infinite;
}

@keyframes crystal-pulse {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
}

.crystal-logo span {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 3px;
    background: linear-gradient(135deg, #fff, #aaddff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.crystal-title {
    text-align: center;
    color: white;
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.crystal-subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.7rem;
    margin-bottom: 20px;
}

.crystal-input-group {
    margin-bottom: 20px;
}

.crystal-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 0 16px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.crystal-input-wrapper i {
    color: rgba(100, 200, 255, 0.5);
    font-size: 0.9rem;
    margin-right: 12px;
    z-index: 2;
}

.crystal-input-wrapper input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.9rem;
}

.crystal-input-wrapper input:focus {
    outline: none;
}

.crystal-input-wrapper input::placeholder {
    color: rgba(255, 255, 255, 0.2);
}

.crystal-input-wrapper:focus-within {
    border-color: rgba(100, 200, 255, 0.3);
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.1);
}

.input-glow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #64c8ff, #ff64c8, #c864ff);
    border-radius: 2px;
    transition: width 0.3s ease;
    box-shadow: 0 0 10px #64c8ff;
}

.crystal-input-wrapper:focus-within .input-glow {
    width: 100%;
}

.crystal-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    z-index: 3;
    transition: all 0.3s ease;
}

.crystal-toggle:hover {
    color: #64c8ff;
}

.crystal-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.crystal-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.75rem;
}

.crystal-checkbox input {
    display: none;
}

.crystal-checkmark {
    width: 18px;
    height: 18px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(100, 200, 255, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.crystal-checkbox input:checked + .crystal-checkmark {
    background: #64c8ff;
    border-color: #64c8ff;
    color: white;
}

.crystal-link {
    color: rgba(100, 200, 255, 0.7);
    text-decoration: none;
    font-size: 0.75rem;
    transition: all 0.3s ease;
}

.crystal-link:hover {
    color: #64c8ff;
    text-shadow: 0 0 8px #64c8ff;
}

.crystal-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: transparent;
    color: white;
    border: 1px solid rgba(100, 200, 255, 0.3);
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.btn-crystal-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(100, 200, 255, 0.2), transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.crystal-btn:hover {
    border-color: #64c8ff;
    box-shadow: 0 0 20px rgba(100, 200, 255, 0.2);
}

.crystal-btn:hover .btn-crystal-effect {
    left: 100%;
}

.crystal-divider {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.crystal-divider .line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
}

.crystal-divider .text {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.7rem;
}

.crystal-social {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
}

.crystal-social-btn {
    position: relative;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;
}

.social-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #64c8ff, transparent);
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.crystal-social-btn:hover {
    border-color: #64c8ff;
    transform: translateY(-3px);
}

.crystal-social-btn:hover .social-glow {
    opacity: 0.3;
}

.crystal-footer {
    text-align: center;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
}

.crystal-footer a {
    color: #64c8ff;
    text-decoration: none;
    margin-left: 5px;
    transition: all 0.3s ease;
}

.crystal-footer a:hover {
    text-shadow: 0 0 8px #64c8ff;
}

.floating-crystals {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.floating-crystal {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(100, 200, 255, 0.3);
    border-radius: 1px;
    animation: float-crystal 10s linear infinite;
}

.floating-crystal:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.floating-crystal:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
.floating-crystal:nth-child(3) { top: 80%; left: 30%; animation-delay: 4s; }
.floating-crystal:nth-child(4) { top: 40%; left: 70%; animation-delay: 6s; }

@keyframes float-crystal {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
    50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
    100% { transform: translateY(0) rotate(360deg); opacity: 0.3; }
}`,
    js: `// Crystal Glass Morphism Login
document.addEventListener('DOMContentLoaded', function() {
    const crystalForm = document.querySelector('.crystal-form');
    
    if (crystalForm) {
        crystalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!email || !password) {
                showCrystalNotification('Please illuminate all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.crystal-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Illuminating...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Radiant!</span> <i class="fas fa-gem"></i>';
                showCrystalNotification('Welcome to the crystal realm!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const crystalToggle = crystalForm.querySelector('.crystal-toggle');
        if (crystalToggle) {
            crystalToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Social buttons
        const socialBtns = crystalForm.querySelectorAll('.crystal-social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const provider = this.querySelector('i').className.includes('google') ? 'Google' :
                               this.querySelector('i').className.includes('apple') ? 'Apple' : 'Microsoft';
                showCrystalNotification(\`Connecting to \${provider}\`, 'info');
            });
        });
    }
    
    function showCrystalNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(10, 15, 31, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid \${type === 'success' ? '#64c8ff' : type === 'error' ? '#ff64c8' : '#c864ff'};
            border-radius: 16px;
            color: white;
            padding: 12px 24px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? '#64c8ff' : type === 'error' ? '#ff64c8' : '#c864ff'}33;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 69: Bioluminescent Nature Login
// ====================================================================
form69: {
    name: "Bioluminescent Nature Login",
    category: "login modern nature bioluminescent",
    html: `<div class="form-container bioluminescent-bg">
    <div class="forest-depth">
        <div class="tree-layer layer-1"></div>
        <div class="tree-layer layer-2"></div>
        <div class="tree-layer layer-3"></div>
    </div>
    <div class="glow-worms">
        <div class="worm"></div>
        <div class="worm"></div>
        <div class="worm"></div>
        <div class="worm"></div>
        <div class="worm"></div>
    </div>
    <div class="glowing-mushrooms">
        <div class="mushroom"></div>
        <div class="mushroom"></div>
        <div class="mushroom"></div>
    </div>
    <div class="floating-fireflies">
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
        <div class="firefly"></div>
    </div>
    
    <div class="bioluminescent-card">
        <div class="card-aura"></div>
        <div class="card-content">
            <div class="nature-logo">
                <i class="fas fa-leaf"></i>
                <i class="fas fa-circle small"></i>
                <i class="fas fa-circle medium"></i>
            </div>
            <h3 class="nature-title">Awaken</h3>
            <p class="nature-subtitle">Enter the glowing forest</p>
            
            <form class="bioluminescent-form">
                <div class="glowing-input">
                    <div class="input-container">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Your essence" required>
                        <div class="glow-bar"></div>
                    </div>
                    <div class="input-glow-effect"></div>
                </div>
                
                <div class="glowing-input">
                    <div class="input-container">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Your secret" required>
                        <button type="button" class="nature-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                        <div class="glow-bar"></div>
                    </div>
                    <div class="input-glow-effect"></div>
                </div>
                
                <div class="nature-options">
                    <label class="nature-checkbox">
                        <input type="checkbox" checked>
                        <span class="nature-checkmark">
                            <i class="fas fa-seedling"></i>
                        </span>
                        <span>Remember the path</span>
                    </label>
                    <a href="#" class="nature-link">Lost in woods?</a>
                </div>
                
                <button type="submit" class="nature-btn">
                    <span>Enter the Grove</span>
                    <i class="fas fa-tree"></i>
                    <div class="btn-glow-pulse"></div>
                </button>
            </form>
            
            <div class="nature-footer">
                <span class="footer-text">Don't have an account?</span>
                <a href="#" class="footer-link">Plant a seed</a>
            </div>
        </div>
    </div>
</div>`,
    css: `.bioluminescent-bg {
    background: #0a1a0a;
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.forest-depth {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.tree-layer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: bottom;
}

.layer-1 {
    background: linear-gradient(to top, transparent, rgba(20, 80, 20, 0.2));
    clip-path: polygon(0% 70%, 10% 60%, 20% 65%, 30% 55%, 40% 60%, 50% 50%, 60% 55%, 70% 45%, 80% 50%, 90% 40%, 100% 45%, 100% 100%, 0% 100%);
}

.layer-2 {
    background: linear-gradient(to top, transparent, rgba(40, 120, 40, 0.3));
    clip-path: polygon(0% 75%, 15% 70%, 25% 72%, 35% 68%, 45% 70%, 55% 65%, 65% 68%, 75% 62%, 85% 65%, 95% 60%, 100% 63%, 100% 100%, 0% 100%);
}

.layer-3 {
    background: linear-gradient(to top, transparent, rgba(60, 160, 60, 0.4));
    clip-path: polygon(0% 80%, 20% 78%, 30% 80%, 40% 76%, 50% 78%, 60% 74%, 70% 76%, 80% 72%, 90% 74%, 100% 70%, 100% 100%, 0% 100%);
}

.glow-worms {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.worm {
    position: absolute;
    width: 2px;
    height: 15px;
    background: #7cfc00;
    filter: blur(2px);
    animation: worm-glow 2s infinite;
}

.worm:nth-child(1) { bottom: 20%; left: 15%; animation-delay: 0s; }
.worm:nth-child(2) { bottom: 30%; left: 35%; animation-delay: 0.4s; }
.worm:nth-child(3) { bottom: 15%; left: 55%; animation-delay: 0.8s; }
.worm:nth-child(4) { bottom: 25%; left: 75%; animation-delay: 1.2s; }
.worm:nth-child(5) { bottom: 18%; left: 90%; animation-delay: 1.6s; }

@keyframes worm-glow {
    0%, 100% { opacity: 0.3; height: 15px; }
    50% { opacity: 1; height: 20px; box-shadow: 0 0 15px #7cfc00; }
}

.glowing-mushrooms {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.mushroom {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ff9f00;
    border-radius: 50%;
    filter: blur(3px);
    animation: mushroom-glow 3s infinite;
}

.mushroom:nth-child(1) { bottom: 10%; left: 20%; animation-delay: 0s; }
.mushroom:nth-child(2) { bottom: 15%; right: 25%; animation-delay: 1s; }
.mushroom:nth-child(3) { bottom: 12%; left: 70%; animation-delay: 2s; }

@keyframes mushroom-glow {
    0%, 100% { box-shadow: 0 0 10px #ff9f00; transform: scale(1); }
    50% { box-shadow: 0 0 25px #ff9f00; transform: scale(1.3); }
}

.floating-fireflies {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.firefly {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #ffd700;
    border-radius: 50%;
    filter: blur(1px);
    animation: firefly-float 8s infinite;
}

.firefly:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
.firefly:nth-child(2) { top: 40%; left: 85%; animation-delay: 1s; }
.firefly:nth-child(3) { top: 70%; left: 30%; animation-delay: 2s; }
.firefly:nth-child(4) { top: 50%; left: 60%; animation-delay: 3s; }
.firefly:nth-child(5) { top: 85%; left: 45%; animation-delay: 4s; }
.firefly:nth-child(6) { top: 15%; left: 75%; animation-delay: 5s; }

@keyframes firefly-float {
    0% { transform: translate(0, 0); opacity: 0.3; }
    25% { transform: translate(20px, -20px); opacity: 1; }
    50% { transform: translate(40px, 0); opacity: 0.6; }
    75% { transform: translate(20px, 20px); opacity: 1; }
    100% { transform: translate(0, 0); opacity: 0.3; }
}

.bioluminescent-card {
    position: relative;
    background: rgba(10, 30, 10, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    padding: 20px;
    border: 1px solid rgba(124, 252, 0, 0.2);
    z-index: 20;
    overflow: hidden;
}

.card-aura {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(124, 252, 0, 0.1), transparent 70%);
    animation: aura-pulse 4s infinite;
}

@keyframes aura-pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.6; }
}

.nature-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
    position: relative;
}

.nature-logo i:first-child {
    font-size: 2rem;
    color: #7cfc00;
    filter: drop-shadow(0 0 15px #7cfc00);
    animation: leaf-float 3s infinite;
}

@keyframes leaf-float {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
}

.nature-logo .small {
    font-size: 0.5rem;
    color: #ffd700;
    animation: glow-pulse 2s infinite;
}

.nature-logo .medium {
    font-size: 0.8rem;
    color: #ff9f00;
    animation: glow-pulse 2s infinite 0.5s;
}

.nature-title {
    text-align: center;
    color: #e0ffe0;
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-shadow: 0 0 15px #7cfc00;
}

.nature-subtitle {
    text-align: center;
    color: #a0d0a0;
    font-size: 0.7rem;
    margin-bottom: 20px;
}

.glowing-input {
    position: relative;
    margin-bottom: 20px;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(0, 20, 0, 0.4);
    border: 1px solid rgba(124, 252, 0, 0.2);
    border-radius: 20px;
    padding: 0 16px;
    transition: all 0.3s ease;
}

.input-container i {
    color: #7cfc00;
    font-size: 0.9rem;
    margin-right: 12px;
    filter: drop-shadow(0 0 5px #7cfc00);
}

.input-container input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: #e0ffe0;
    font-size: 0.9rem;
}

.input-container input:focus {
    outline: none;
}

.input-container input::placeholder {
    color: rgba(124, 252, 0, 0.3);
}

.glow-bar {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7cfc00;
    box-shadow: 0 0 15px #7cfc00;
    transition: width 0.3s ease;
}

.input-container:focus-within .glow-bar {
    width: 100%;
}

.input-glow-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #7cfc00, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    filter: blur(15px);
}

.input-container:focus-within ~ .input-glow-effect {
    opacity: 0.2;
}

.nature-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: #7cfc00;
    cursor: pointer;
    z-index: 3;
}

.nature-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.nature-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #c0e0c0;
    font-size: 0.75rem;
}

.nature-checkbox input {
    display: none;
}

.nature-checkmark {
    width: 20px;
    height: 20px;
    background: rgba(124, 252, 0, 0.1);
    border: 1px solid #7cfc00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.nature-checkbox input:checked + .nature-checkmark {
    background: #7cfc00;
    color: #0a1a0a;
    box-shadow: 0 0 15px #7cfc00;
}

.nature-link {
    color: #7cfc00;
    text-decoration: none;
    font-size: 0.75rem;
    transition: all 0.3s ease;
}

.nature-link:hover {
    text-shadow: 0 0 8px #7cfc00;
}

.nature-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: rgba(124, 252, 0, 0.1);
    color: #e0ffe0;
    border: 1px solid #7cfc00;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.btn-glow-pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #7cfc00, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.nature-btn:hover {
    background: rgba(124, 252, 0, 0.2);
    box-shadow: 0 0 30px rgba(124, 252, 0, 0.3);
}

.nature-btn:hover .btn-glow-pulse {
    opacity: 0.3;
}

.nature-footer {
    text-align: center;
    font-size: 0.75rem;
    color: #a0d0a0;
}

.footer-link {
    color: #7cfc00;
    text-decoration: none;
    margin-left: 5px;
    transition: all 0.3s ease;
}

.footer-link:hover {
    text-shadow: 0 0 8px #7cfc00;
}`,
    js: `// Bioluminescent Nature Login
document.addEventListener('DOMContentLoaded', function() {
    const natureForm = document.querySelector('.bioluminescent-form');
    
    if (natureForm) {
        natureForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="Your essence"]').value;
            const password = this.querySelector('input[placeholder="Your secret"]').value;
            
            if (!email || !password) {
                showNatureNotification('The forest whispers: fill all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.nature-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Awakening...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to the Grove!</span> <i class="fas fa-tree"></i>';
                showNatureNotification('The forest welcomes you!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const natureToggle = natureForm.querySelector('.nature-toggle');
        if (natureToggle) {
            natureToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showNatureNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(10, 26, 10, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid \${type === 'success' ? '#7cfc00' : type === 'error' ? '#ff6347' : '#ffd700'};
            border-radius: 20px;
            color: white;
            padding: 12px 24px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? '#7cfc00' : type === 'error' ? '#ff6347' : '#ffd700'}33;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 70: Cosmic Nebula 3D Login
// ====================================================================
form70: {
    name: "Cosmic Nebula 3D Login",
    category: "login modern cosmic 3d",
    html: `<div class="form-container cosmic-nebula-bg">
    <div class="nebula-layers">
        <div class="nebula-layer layer-1"></div>
        <div class="nebula-layer layer-2"></div>
        <div class="nebula-layer layer-3"></div>
        <div class="star-field"></div>
        <div class="shooting-stars">
            <div class="shooting-star"></div>
            <div class="shooting-star"></div>
            <div class="shooting-star"></div>
        </div>
    </div>
    
    <div class="planets">
        <div class="planet planet-1">
            <div class="planet-ring"></div>
        </div>
        <div class="planet planet-2"></div>
        <div class="planet planet-3"></div>
        <div class="moon"></div>
    </div>
    
    <div class="cosmic-card-container">
        <div class="cosmic-card">
            <div class="card-3d-effect">
                <div class="effect-layer"></div>
                <div class="effect-layer"></div>
                <div class="effect-layer"></div>
            </div>
            <div class="cosmic-content">
                <div class="cosmic-logo">
                    <i class="fas fa-meteor"></i>
                    <span>NEBULA</span>
                </div>
                <h3 class="cosmic-title">Galactic Gateway</h3>
                <p class="cosmic-subtitle">Journey through the stars</p>
                
                <form class="cosmic-form">
                    <div class="cosmic-input-3d">
                        <div class="input-star-field"></div>
                        <div class="cosmic-input-wrapper">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Stellar ID" required>
                        </div>
                    </div>
                    
                    <div class="cosmic-input-3d">
                        <div class="input-star-field"></div>
                        <div class="cosmic-input-wrapper">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Nebula Key" required>
                            <button type="button" class="cosmic-toggle">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="cosmic-options">
                        <label class="cosmic-checkbox">
                            <input type="checkbox" checked>
                            <span class="cosmic-checkmark">
                                <i class="fas fa-star"></i>
                            </span>
                            <span>Orbit this device</span>
                        </label>
                        <a href="#" class="cosmic-link">Gravitational pull?</a>
                    </div>
                    
                    <button type="submit" class="cosmic-btn">
                        <span>Launch</span>
                        <i class="fas fa-rocket"></i>
                        <div class="btn-trail"></div>
                    </button>
                </form>
                
                <div class="cosmic-constellation">
                    <div class="stars">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                    </div>
                    <div class="constellation-text">
                        <span>New to the universe?</span>
                        <a href="#">Create constellation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    css: `.cosmic-nebula-bg {
    background: #03050a;
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.nebula-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.nebula-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
}

.layer-1 {
    background: radial-gradient(circle at 30% 40%, #ff4d4d, transparent 70%);
    opacity: 0.3;
    animation: nebula-drift 20s infinite;
}

.layer-2 {
    background: radial-gradient(circle at 70% 60%, #4d79ff, transparent 70%);
    opacity: 0.3;
    animation: nebula-drift 25s infinite reverse;
}

.layer-3 {
    background: radial-gradient(circle at 50% 50%, #aa4dff, transparent 70%);
    opacity: 0.2;
    animation: nebula-drift 30s infinite;
}

@keyframes nebula-drift {
    0% { transform: scale(1) translate(0, 0); }
    50% { transform: scale(1.2) translate(2%, 2%); }
    100% { transform: scale(1) translate(0, 0); }
}

.star-field {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(2px 2px at 10px 10px, white, rgba(0,0,0,0)),
                      radial-gradient(2px 2px at 30px 40px, white, rgba(0,0,0,0)),
                      radial-gradient(2px 2px at 50px 80px, white, rgba(0,0,0,0)),
                      radial-gradient(2px 2px at 80px 20px, white, rgba(0,0,0,0)),
                      radial-gradient(2px 2px at 120px 60px, white, rgba(0,0,0,0));
    background-repeat: repeat;
    background-size: 200px 200px;
    animation: stars-twinkle 2s infinite;
}

@keyframes stars-twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.8; }
}

.shooting-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.shooting-star {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(to bottom, white, transparent);
    transform: rotate(45deg);
    animation: shoot 5s linear infinite;
    opacity: 0;
}

.shooting-star:nth-child(1) { top: 10%; left: -10%; animation-delay: 0s; }
.shooting-star:nth-child(2) { top: 30%; left: -10%; animation-delay: 2s; }
.shooting-star:nth-child(3) { top: 60%; left: -10%; animation-delay: 4s; }

@keyframes shoot {
    0% { transform: rotate(45deg) translateX(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: rotate(45deg) translateX(500px); opacity: 0; }
}

.planets {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.planet {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(145deg, #ffaa00, #aa5500);
    filter: blur(2px);
    animation: planet-orbit 30s linear infinite;
}

.planet-1 {
    width: 30px;
    height: 30px;
    top: 15%;
    right: 15%;
    background: radial-gradient(circle at 30% 30%, #ffaa00, #aa5500);
}

.planet-ring {
    position: absolute;
    width: 45px;
    height: 10px;
    border: 2px solid rgba(255, 200, 100, 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
}

.planet-2 {
    width: 20px;
    height: 20px;
    bottom: 20%;
    left: 20%;
    background: radial-gradient(circle at 30% 30%, #4d79ff, #0022aa);
    animation: planet-orbit 20s linear infinite reverse;
}

.planet-3 {
    width: 15px;
    height: 15px;
    top: 40%;
    left: 30%;
    background: radial-gradient(circle at 30% 30%, #ff4d4d, #aa0000);
    animation: planet-orbit 25s linear infinite;
}

.moon {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #ccc;
    border-radius: 50%;
    top: 25%;
    right: 25%;
    filter: blur(1px);
    animation: moon-orbit 10s linear infinite;
}

@keyframes planet-orbit {
    from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
}

@keyframes moon-orbit {
    from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
}

.cosmic-card-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 220px;
    z-index: 30;
    perspective: 1000px;
}

.cosmic-card {
    position: relative;
    width: 220px;
    height: 220px;
    transform-style: preserve-3d;
    animation: card-float 6s ease-in-out infinite;
}

@keyframes card-float {
    0%, 100% { transform: rotateY(0deg) rotateX(5deg) translateZ(0); }
    50% { transform: rotateY(5deg) rotateX(0deg) translateZ(20px); }
}

.card-3d-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

.effect-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: rgba(20, 30, 50, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.effect-layer:nth-child(1) { transform: translateZ(20px); }
.effect-layer:nth-child(2) { transform: translateZ(10px); opacity: 0.7; }
.effect-layer:nth-child(3) { transform: translateZ(0px); opacity: 0.4; }

.cosmic-content {
    position: relative;
    padding: 20px;
    transform: translateZ(30px);
}

.cosmic-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 10px;
}

.cosmic-logo i {
    font-size: 1.8rem;
    color: #ffaa00;
    filter: drop-shadow(0 0 15px #ffaa00);
    animation: meteor-spin 8s linear infinite;
}

@keyframes meteor-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.cosmic-logo span {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: white;
    text-shadow: 0 0 10px #ffaa00;
}

.cosmic-title {
    text-align: center;
    color: white;
    font-size: 1rem;
    margin-bottom: 3px;
}

.cosmic-subtitle {
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.6rem;
    margin-bottom: 15px;
}

.cosmic-input-3d {
    position: relative;
    margin-bottom: 15px;
    transform-style: preserve-3d;
}

.input-star-field {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent);
    border-radius: 12px;
    transform: translateZ(-5px);
    filter: blur(5px);
}

.cosmic-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 0 12px;
    backdrop-filter: blur(5px);
    transform: translateZ(5px);
}

.cosmic-input-wrapper i {
    color: #ffaa00;
    font-size: 0.85rem;
    margin-right: 10px;
}

.cosmic-input-wrapper input {
    width: 100%;
    padding: 12px 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
}

.cosmic-input-wrapper input:focus {
    outline: none;
}

.cosmic-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
}

.cosmic-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.cosmic-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;
}

.cosmic-checkbox input {
    display: none;
}

.cosmic-checkmark {
    width: 18px;
    height: 18px;
    border: 1px solid #ffaa00;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    transition: all 0.2s ease;
}

.cosmic-checkbox input:checked + .cosmic-checkmark {
    background: #ffaa00;
    color: #000;
}

.cosmic-link {
    color: #ffaa00;
    text-decoration: none;
    font-size: 0.7rem;
}

.cosmic-btn {
    position: relative;
    width: 100%;
    padding: 12px;
    background: transparent;
    color: white;
    border: 1px solid #ffaa00;
    border-radius: 25px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 15px 0;
    transition: all 0.3s ease;
}

.btn-trail {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 170, 0, 0.3), transparent);
    top: 0;
    left: -100%;
    animation: trail-move 3s infinite;
}

@keyframes trail-move {
    0% { left: -100%; }
    100% { left: 100%; }
}

.cosmic-btn:hover {
    background: rgba(255, 170, 0, 0.1);
    box-shadow: 0 0 30px rgba(255, 170, 0, 0.3);
}

.cosmic-constellation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.stars {
    display: flex;
    gap: 15px;
}

.star {
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    animation: star-twinkle 1.5s infinite;
}

.star:nth-child(1) { animation-delay: 0s; }
.star:nth-child(2) { animation-delay: 0.5s; }
.star:nth-child(3) { animation-delay: 1s; }

.constellation-text {
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.6);
}

.constellation-text a {
    color: #ffaa00;
    text-decoration: none;
    margin-left: 5px;
}`,
    js: `// Cosmic Nebula 3D Login
document.addEventListener('DOMContentLoaded', function() {
    const cosmicForm = document.querySelector('.cosmic-form');
    
    if (cosmicForm) {
        cosmicForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const stellarId = this.querySelector('input[placeholder="Stellar ID"]').value;
            const nebulaKey = this.querySelector('input[placeholder="Nebula Key"]').value;
            
            if (!stellarId || !nebulaKey) {
                showCosmicNotification('Insufficient stellar coordinates', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.cosmic-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Launching...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to the Nebula!</span> <i class="fas fa-rocket"></i>';
                showCosmicNotification('Warp successful! You have entered the galaxy.', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const cosmicToggle = cosmicForm.querySelector('.cosmic-toggle');
        if (cosmicToggle) {
            cosmicToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showCosmicNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(3, 5, 10, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid \${type === 'success' ? '#ffaa00' : type === 'error' ? '#ff4d4d' : '#aa4dff'};
            border-radius: 12px;
            color: white;
            padding: 12px 24px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? '#ffaa00' : type === 'error' ? '#ff4d4d' : '#aa4dff'}33;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 71: Art Deco Geometric Login
// ====================================================================
form71: {
    name: "Art Deco Geometric Login",
    category: "login modern artdeco geometric",
    html: `<div class="form-container artdeco-geometric-bg">
    <div class="geometric-patterns">
        <div class="pattern sunburst"></div>
        <div class="pattern zigzag"></div>
        <div class="pattern chevron"></div>
        <div class="pattern fan"></div>
        <div class="pattern border-deco"></div>
    </div>
    
    <div class="golden-lines">
        <div class="line-vertical"></div>
        <div class="line-horizontal"></div>
        <div class="line-diagonal"></div>
    </div>
    
    <div class="artdeco-card">
        <div class="card-gold-border">
            <div class="corner top-left"></div>
            <div class="corner top-right"></div>
            <div class="corner bottom-left"></div>
            <div class="corner bottom-right"></div>
        </div>
        
        <div class="artdeco-content">
            <div class="artdeco-logo">
                <i class="fas fa-crown"></i>
                <span>ART DECO</span>
            </div>
            <h3 class="artdeco-title">The Gatsby Era</h3>
            <p class="artdeco-subtitle">Timeless elegance awaits</p>
            
            <form class="artdeco-form">
                <div class="artdeco-input-group">
                    <div class="artdeco-input-wrapper">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email address" required>
                    </div>
                    <div class="input-decoration"></div>
                </div>
                
                <div class="artdeco-input-group">
                    <div class="artdeco-input-wrapper">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required>
                        <button type="button" class="artdeco-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="input-decoration"></div>
                </div>
                
                <div class="artdeco-options">
                    <label class="artdeco-checkbox">
                        <input type="checkbox" checked>
                        <span class="artdeco-checkmark">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Remember me</span>
                    </label>
                    <a href="#" class="artdeco-link">Forgot password?</a>
                </div>
                
                <button type="submit" class="artdeco-btn">
                    <span>Enter</span>
                    <i class="fas fa-arrow-right"></i>
                    <div class="btn-golden-shine"></div>
                </button>
            </form>
            
            <div class="artdeco-divider">
                <span class="divider-line"></span>
                <span class="divider-icon">✦</span>
                <span class="divider-line"></span>
            </div>
            
            <div class="artdeco-social">
                <button class="artdeco-social-btn">
                    <i class="fab fa-facebook-f"></i>
                </button>
                <button class="artdeco-social-btn">
                    <i class="fab fa-twitter"></i>
                </button>
                <button class="artdeco-social-btn">
                    <i class="fab fa-instagram"></i>
                </button>
            </div>
            
            <div class="artdeco-footer">
                <span class="footer-text">New to the era?</span>
                <a href="#" class="footer-link">Join the society</a>
            </div>
        </div>
    </div>
    
    <div class="geometric-footer">
        <span>✦ 1920-2025 ✦</span>
    </div>
</div>`,
    css: `.artdeco-geometric-bg {
    background: #1a120b;
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.geometric-patterns {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.pattern {
    position: absolute;
    opacity: 0.1;
}

.sunburst {
    top: -20px;
    right: -20px;
    width: 200px;
    height: 200px;
    background: repeating-radial-gradient(circle at 100% 0%, #d4af37 2px, transparent 4px);
    transform: rotate(15deg);
}

.zigzag {
    bottom: 20px;
    left: 20px;
    width: 150px;
    height: 100px;
    background: repeating-linear-gradient(45deg, #d4af37 0px, #d4af37 2px, transparent 2px, transparent 8px);
}

.chevron {
    top: 40%;
    left: 10%;
    width: 120px;
    height: 60px;
    background: repeating-linear-gradient(135deg, #d4af37 0px, #d4af37 2px, transparent 2px, transparent 12px);
}

.fan {
    bottom: 10%;
    right: 15%;
    width: 100px;
    height: 100px;
    background: conic-gradient(from 0deg, #d4af37 0deg 15deg, transparent 15deg 30deg);
    background-size: 30px 30px;
}

.border-deco {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(0deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 10px),
                repeating-linear-gradient(90deg, #d4af37 0px, #d4af37 1px, transparent 1px, transparent 10px);
    pointer-events: none;
}

.golden-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.line-vertical {
    position: absolute;
    height: 100%;
    width: 1px;
    background: linear-gradient(to bottom, transparent, #d4af37, transparent);
    left: 20%;
}

.line-horizontal {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
    top: 40%;
}

.line-diagonal {
    position: absolute;
    width: 200%;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
    transform: rotate(45deg);
    top: 30%;
    left: -50%;
}

.artdeco-card {
    position: relative;
    background: rgba(26, 18, 11, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 25px;
    border: 2px solid #d4af37;
    z-index: 20;
}

.card-gold-border {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    pointer-events: none;
}

.corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #d4af37;
}

.corner.top-left {
    top: -2px;
    left: -2px;
    border-right: none;
    border-bottom: none;
}

.corner.top-right {
    top: -2px;
    right: -2px;
    border-left: none;
    border-bottom: none;
}

.corner.bottom-left {
    bottom: -2px;
    left: -2px;
    border-right: none;
    border-top: none;
}

.corner.bottom-right {
    bottom: -2px;
    right: -2px;
    border-left: none;
    border-top: none;
}

.artdeco-content {
    position: relative;
}

.artdeco-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.artdeco-logo i {
    font-size: 2rem;
    color: #d4af37;
}

.artdeco-logo span {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 4px;
    color: #d4af37;
}

.artdeco-title {
    text-align: center;
    color: #f0e6d2;
    font-size: 1.2rem;
    margin-bottom: 5px;
    font-family: 'Playfair Display', serif;
}

.artdeco-subtitle {
    text-align: center;
    color: #b8a99a;
    font-size: 0.7rem;
    margin-bottom: 25px;
    font-style: italic;
}

.artdeco-input-group {
    margin-bottom: 20px;
}

.artdeco-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: transparent;
    border: 1px solid #d4af37;
    padding: 0 16px;
}

.artdeco-input-wrapper i {
    color: #d4af37;
    font-size: 0.9rem;
    margin-right: 12px;
}

.artdeco-input-wrapper input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: #f0e6d2;
    font-size: 0.9rem;
}

.artdeco-input-wrapper input:focus {
    outline: none;
}

.artdeco-input-wrapper input::placeholder {
    color: #7a6b5c;
}

.input-decoration {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #d4af37, transparent);
}

.artdeco-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: #d4af37;
    cursor: pointer;
}

.artdeco-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
}

.artdeco-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #c0b1a2;
    font-size: 0.8rem;
}

.artdeco-checkbox input {
    display: none;
}

.artdeco-checkmark {
    width: 18px;
    height: 18px;
    border: 1px solid #d4af37;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    background: transparent;
}

.artdeco-checkbox input:checked + .artdeco-checkmark {
    background: #d4af37;
    color: #1a120b;
}

.artdeco-link {
    color: #d4af37;
    text-decoration: none;
    font-size: 0.8rem;
}

.artdeco-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: #d4af37;
    color: #1a120b;
    border: none;
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 25px;
    transition: all 0.3s ease;
}

.btn-golden-shine {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.artdeco-btn:hover .btn-golden-shine {
    left: 100%;
}

.artdeco-divider {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
}

.divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
}

.divider-icon {
    color: #d4af37;
    font-size: 1.2rem;
}

.artdeco-social {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 25px;
}

.artdeco-social-btn {
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid #d4af37;
    border-radius: 0;
    color: #d4af37;
    cursor: pointer;
    transition: all 0.3s ease;
    transform: rotate(45deg);
}

.artdeco-social-btn i {
    transform: rotate(-45deg);
}

.artdeco-social-btn:hover {
    background: #d4af37;
    color: #1a120b;
}

.artdeco-footer {
    text-align: center;
    font-size: 0.8rem;
    color: #b8a99a;
}

.footer-link {
    color: #d4af37;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 600;
}

.geometric-footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgba(212, 175, 55, 0.3);
    font-size: 0.6rem;
    letter-spacing: 2px;
}`,
    js: `// Art Deco Geometric Login
document.addEventListener('DOMContentLoaded', function() {
    const artdecoForm = document.querySelector('.artdeco-form');
    
    if (artdecoForm) {
        artdecoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            
            if (!email || !password) {
                showArtDecoNotification('Please complete the form', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.artdeco-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Entering...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Welcome to the Era!</span> <i class="fas fa-crown"></i>';
                showArtDecoNotification('Access granted. The Gatsby Era welcomes you.', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const artdecoToggle = artdecoForm.querySelector('.artdeco-toggle');
        if (artdecoToggle) {
            artdecoToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
        
        // Social buttons
        const socialBtns = artdecoForm.querySelectorAll('.artdeco-social-btn');
        socialBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                showArtDecoNotification('Social connection coming soon', 'info');
            });
        });
    }
    
    function showArtDecoNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1a120b;
            border: 1px solid #d4af37;
            color: #d4af37;
            padding: 12px 24px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 72: Liquid Metal Chrome Login
// ====================================================================
form72: {
    name: "Liquid Metal Chrome Login",
    category: "login modern liquid chrome",
    html: `<div class="form-container liquid-metal-chrome-bg">
    <div class="liquid-waves">
        <div class="wave metal-wave-1"></div>
        <div class="wave metal-wave-2"></div>
        <div class="wave metal-wave-3"></div>
    </div>
    
    <div class="chrome-spheres">
        <div class="sphere sphere-1"></div>
        <div class="sphere sphere-2"></div>
        <div class="sphere sphere-3"></div>
        <div class="sphere sphere-4"></div>
    </div>
    
    <div class="liquid-metal-card">
        <div class="metal-shine"></div>
        <div class="metal-card-content">
            <div class="metal-logo">
                <i class="fas fa-droplet"></i>
                <span>LIQUID METAL</span>
            </div>
            <h3 class="metal-title">Molten Access</h3>
            <p class="metal-subtitle">Fluid like mercury</p>
            
            <form class="liquid-metal-form">
                <div class="metal-input-container">
                    <div class="metal-input-wrapper">
                        <div class="metal-input-highlight"></div>
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" required>
                    </div>
                </div>
                
                <div class="metal-input-container">
                    <div class="metal-input-wrapper">
                        <div class="metal-input-highlight"></div>
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required>
                        <button type="button" class="metal-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <div class="metal-options">
                    <label class="metal-checkbox">
                        <input type="checkbox" checked>
                        <span class="metal-checkmark">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="metal-checkbox-text">Flow with me</span>
                    </label>
                    <a href="#" class="metal-link">Meltdown?</a>
                </div>
                
                <button type="submit" class="metal-btn">
                    <span>Flow In</span>
                    <i class="fas fa-water"></i>
                    <div class="btn-liquid-effect"></div>
                </button>
            </form>
            
            <div class="metal-drip"></div>
        </div>
    </div>
    
    <div class="liquid-footer">
        <span class="liquid-text">⚡ 99.9% PURE CHROME ⚡</span>
    </div>
</div>`,
    css: `.liquid-metal-chrome-bg {
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border-radius: 32px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.liquid-waves {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.wave {
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent 30%, rgba(192, 192, 192, 0.1) 50%, transparent 70%);
    animation: wave-flow 10s linear infinite;
}

.metal-wave-1 {
    top: -50%;
    left: -50%;
    transform: rotate(30deg);
    animation: wave-flow 15s linear infinite;
}

.metal-wave-2 {
    bottom: -50%;
    right: -50%;
    transform: rotate(-45deg);
    animation: wave-flow 20s linear infinite reverse;
}

.metal-wave-3 {
    top: 0;
    left: 0;
    transform: rotate(15deg);
    animation: wave-flow 25s linear infinite;
}

@keyframes wave-flow {
    0% { transform: rotate(30deg) translateX(0); }
    100% { transform: rotate(30deg) translateX(50%); }
}

.chrome-spheres {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.sphere {
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #fff, #aaa, #666);
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: sphere-float 8s infinite;
}

.sphere-1 {
    width: 40px;
    height: 40px;
    top: 10%;
    left: 10%;
    animation: sphere-float 6s infinite;
}

.sphere-2 {
    width: 25px;
    height: 25px;
    bottom: 15%;
    right: 15%;
    animation: sphere-float 7s infinite reverse;
}

.sphere-3 {
    width: 30px;
    height: 30px;
    top: 40%;
    right: 20%;
    animation: sphere-float 8s infinite;
}

.sphere-4 {
    width: 20px;
    height: 20px;
    bottom: 30%;
    left: 20%;
    animation: sphere-float 5s infinite reverse;
}

@keyframes sphere-float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.liquid-metal-card {
    position: relative;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    border-radius: 32px;
    padding: 25px;
    overflow: hidden;
    z-index: 20;
    box-shadow: 
        0 20px 40px rgba(0,0,0,0.5),
        inset 0 1px 1px rgba(255,255,255,0.2),
        inset 0 -2px 2px rgba(0,0,0,0.3);
}

.metal-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 70%);
    animation: metal-shine 5s linear infinite;
}

@keyframes metal-shine {
    0% { transform: rotate(0deg) scale(1); opacity: 0.3; }
    50% { transform: rotate(5deg) scale(1.1); opacity: 0.6; }
    100% { transform: rotate(0deg) scale(1); opacity: 0.3; }
}

.metal-card-content {
    position: relative;
    z-index: 30;
}

.metal-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

.metal-logo i {
    font-size: 2rem;
    color: #c0c0c0;
    text-shadow: 
        0 1px 2px rgba(255,255,255,0.3),
        0 -1px 2px rgba(0,0,0,0.5);
    animation: droplet-pulse 3s infinite;
}

@keyframes droplet-pulse {
    0%, 100% { transform: scale(1); filter: brightness(1); }
    50% { transform: scale(1.1); filter: brightness(1.2); }
}

.metal-logo span {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 3px;
    background: linear-gradient(135deg, #fff, #aaa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.metal-title {
    text-align: center;
    color: #e0e0e0;
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.metal-subtitle {
    text-align: center;
    color: #a0a0a0;
    font-size: 0.7rem;
    margin-bottom: 25px;
}

.metal-input-container {
    margin-bottom: 20px;
}

.metal-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(145deg, #2d2d2d, #222);
    border-radius: 16px;
    padding: 0 16px;
    box-shadow: 
        inset 0 2px 5px rgba(0,0,0,0.5),
        inset 0 -1px 2px rgba(255,255,255,0.1);
}

.metal-input-highlight {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.metal-input-wrapper:focus-within .metal-input-highlight {
    opacity: 1;
}

.metal-input-wrapper i {
    color: #c0c0c0;
    font-size: 0.9rem;
    margin-right: 12px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

.metal-input-wrapper input {
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 0.9rem;
}

.metal-input-wrapper input:focus {
    outline: none;
}

.metal-input-wrapper input::placeholder {
    color: #707070;
}

.metal-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: #c0c0c0;
    cursor: pointer;
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}

.metal-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.metal-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #c0c0c0;
    font-size: 0.8rem;
}

.metal-checkbox input {
    display: none;
}

.metal-checkmark {
    width: 18px;
    height: 18px;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    box-shadow: 
        inset 0 1px 2px rgba(255,255,255,0.1),
        inset 0 -1px 2px rgba(0,0,0,0.3);
}

.metal-checkbox input:checked + .metal-checkmark {
    background: linear-gradient(145deg, #c0c0c0, #a0a0a0);
    color: #2a2a2a;
}

.metal-link {
    color: #c0c0c0;
    text-decoration: none;
    font-size: 0.8rem;
}

.metal-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    color: #c0c0c0;
    border: none;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 25px 0;
    box-shadow: 
        0 5px 15px rgba(0,0,0,0.3),
        inset 0 1px 2px rgba(255,255,255,0.1),
        inset 0 -2px 2px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
}

.btn-liquid-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3), transparent);
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.metal-btn:hover {
    background: linear-gradient(145deg, #4a4a4a, #3a3a3a);
    transform: translateY(-2px);
    box-shadow: 
        0 8px 20px rgba(0,0,0,0.4),
        inset 0 1px 2px rgba(255,255,255,0.2),
        inset 0 -2px 2px rgba(0,0,0,0.3);
}

.metal-btn:hover .btn-liquid-effect {
    opacity: 0.2;
}

.metal-drip {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom, #3a3a3a, #2a2a2a);
    border-radius: 50%;
    filter: blur(10px);
    transform: translateX(-50%);
    animation: drip 3s infinite;
}

@keyframes drip {
    0% { transform: translateX(-50%) scale(1); opacity: 0.3; }
    50% { transform: translateX(-50%) scale(1.5); opacity: 0.6; }
    100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
}

.liquid-footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgba(192, 192, 192, 0.3);
    font-size: 0.6rem;
    letter-spacing: 2px;
}`,
    js: `// Liquid Metal Chrome Login
document.addEventListener('DOMContentLoaded', function() {
    const metalForm = document.querySelector('.liquid-metal-form');
    
    if (metalForm) {
        metalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="Email"]').value;
            const password = this.querySelector('input[placeholder="Password"]').value;
            
            if (!email || !password) {
                showMetalNotification('Please fill all fields', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.metal-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Flowing...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Merged!</span> <i class="fas fa-water"></i>';
                showMetalNotification('You have become one with the liquid metal', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const metalToggle = metalForm.querySelector('.metal-toggle');
        if (metalToggle) {
            metalToggle.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showMetalNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
            border: 1px solid #c0c0c0;
            border-radius: 16px;
            color: #c0c0c0;
            padding: 12px 24px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px rgba(192, 192, 192, 0.3);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
// ====================================================================
// TEMPLATE 73: Retro Cassette Player Form
// ====================================================================
form73: {
    name: "Retro Cassette Player Form",
    category: "creative retro cassette",
    html: `<div class="form-container cassette-player-bg">
    <div class="cassette-body">
        <div class="cassette-label">
            <div class="label-lines">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="label-text">
                <span>MIXTAPE</span>
                <span>VOL.1</span>
            </div>
        </div>
        
        <div class="cassette-holes">
            <div class="hole left"></div>
            <div class="hole right"></div>
        </div>
        
        <div class="tape-reels">
            <div class="reel left-reel">
                <div class="reel-spindle"></div>
                <div class="reel-teeth"></div>
                <div class="reel-teeth"></div>
                <div class="reel-teeth"></div>
                <div class="reel-teeth"></div>
            </div>
            <div class="tape-path">
                <div class="tape"></div>
            </div>
            <div class="reel right-reel">
                <div class="reel-spindle"></div>
                <div class="reel-teeth"></div>
                <div class="reel-teeth"></div>
                <div class="reel-teeth"></div>
                <div class="reel-teeth"></div>
            </div>
        </div>
        
        <div class="cassette-screws">
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
        </div>
        
        <div class="cassette-interface">
            <div class="cassette-header">
                <span class="model">T-120</span>
                <div class="led red"></div>
                <div class="led green"></div>
            </div>
            
            <form class="cassette-form">
                <div class="track-display">
                    <span class="track-label">SIDE A</span>
                    <div class="track-meters">
                        <div class="meter"></div>
                        <div class="meter"></div>
                        <div class="meter"></div>
                        <div class="meter"></div>
                        <div class="meter"></div>
                    </div>
                </div>
                
                <div class="cassette-input">
                    <div class="input-channel left">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <input type="email" placeholder="RECORD EMAIL" class="cassette-field">
                    <div class="input-channel right">
                        <span class="db">dB</span>
                    </div>
                </div>
                
                <div class="cassette-input">
                    <div class="input-channel left">
                        <i class="fas fa-lock"></i>
                    </div>
                    <input type="password" placeholder="RECORD PASSWORD" class="cassette-field" id="cassette-password">
                    <button type="button" class="cassette-toggle">
                        <i class="fas fa-eye"></i>
                    </button>
                    <div class="input-channel right">
                        <span class="db">dB</span>
                    </div>
                </div>
                
                <div class="cassette-controls">
                    <div class="control-group">
                        <label class="cassette-check">
                            <input type="checkbox" checked>
                            <span class="cassette-checkmark">⏺</span>
                            <span>REC</span>
                        </label>
                    </div>
                    <div class="control-buttons">
                        <button type="button" class="ctrl-btn play">▶</button>
                        <button type="submit" class="ctrl-btn record">●</button>
                        <button type="button" class="ctrl-btn pause">⏸</button>
                        <button type="button" class="ctrl-btn eject">⏏</button>
                    </div>
                </div>
            </form>
            
            <div class="cassette-footer">
                <div class="tape-counter">0000</div>
                <div class="audio-levels">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="cassette-reflection"></div>
</div>`,
    css: `.cassette-player-bg {
    background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
    border-radius: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
    border: 2px solid #444;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.cassette-body {
    position: relative;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    border-radius: 15px;
    padding: 15px;
    border: 1px solid #555;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
}

.cassette-label {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 50px;
    background: linear-gradient(145deg, #f0f0f0, #d0d0d0);
    border-radius: 5px;
    border: 2px solid #888;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
}

.label-lines {
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
}

.label-lines span {
    width: 80%;
    height: 2px;
    background: #888;
}

.label-text {
    text-align: center;
    font-family: 'Courier New', monospace;
    font-weight: bold;
    color: #333;
    font-size: 0.6rem;
}

.label-text span:first-child {
    font-size: 0.7rem;
    letter-spacing: 2px;
}

.cassette-holes {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 4;
}

.hole {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: rgba(0,0,0,0.5);
    border: 2px solid #555;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
}

.tape-reels {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 30px;
}

.reel {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(145deg, #666, #444);
    border: 3px solid #888;
    box-shadow: inset 0 -2px 5px rgba(0,0,0,0.5);
    animation: reel-spin 3s linear infinite;
}

@keyframes reel-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.reel-spindle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #222;
    border: 2px solid #888;
    z-index: 2;
}

.reel-teeth {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #888;
    border-radius: 2px;
}

.reel-teeth:nth-child(2) { top: -5px; left: 50%; transform: translateX(-50%); }
.reel-teeth:nth-child(3) { bottom: -5px; left: 50%; transform: translateX(-50%); }
.reel-teeth:nth-child(4) { left: -5px; top: 50%; transform: translateY(-50%); }
.reel-teeth:nth-child(5) { right: -5px; top: 50%; transform: translateY(-50%); }

.tape-path {
    flex: 1;
    height: 20px;
    background: rgba(0,0,0,0.3);
    margin: 0 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.tape {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #8b4513, #c19a6b, #8b4513);
    background-size: 200% 100%;
    animation: tape-move 2s linear infinite;
}

@keyframes tape-move {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
}

.cassette-screws {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    pointer-events: none;
}

.screw {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #888;
    border: 1px solid #aaa;
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.3);
}

.screw:nth-child(1) { top: 0; left: 0; }
.screw:nth-child(2) { top: 0; right: 0; }
.screw:nth-child(3) { bottom: 0; left: 0; }
.screw:nth-child(4) { bottom: 0; right: 0; }

.cassette-interface {
    position: relative;
    z-index: 10;
}

.cassette-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}

.model {
    color: #c0c0c0;
    font-size: 0.6rem;
    font-family: 'Courier New', monospace;
    background: rgba(0,0,0,0.3);
    padding: 3px 8px;
    border-radius: 10px;
}

.led {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.led.red {
    background: #ff4444;
    box-shadow: 0 0 10px #ff4444;
    animation: led-blink 1s infinite;
}

.led.green {
    background: #44ff44;
    box-shadow: 0 0 10px #44ff44;
}

@keyframes led-blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.track-display {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    background: rgba(0,0,0,0.3);
    padding: 8px;
    border-radius: 10px;
}

.track-label {
    color: #ffaa00;
    font-size: 0.7rem;
    font-weight: bold;
    font-family: 'Courier New', monospace;
}

.track-meters {
    display: flex;
    gap: 3px;
    flex: 1;
}

.meter {
    flex: 1;
    height: 15px;
    background: rgba(0,0,0,0.5);
    border-radius: 2px;
    position: relative;
    overflow: hidden;
}

.meter::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(to top, #ffaa00, #ffdd00);
    animation: meter-level 2s infinite;
}

@keyframes meter-level {
    0% { height: 20%; }
    50% { height: 80%; }
    100% { height: 40%; }
}

.cassette-input {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.input-channel {
    width: 30px;
    height: 30px;
    background: #444;
    border: 2px solid #666;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffaa00;
    font-size: 0.8rem;
}

.input-channel.left {
    border-right: none;
    border-radius: 5px 0 0 5px;
}

.input-channel.right {
    border-left: none;
    border-radius: 0 5px 5px 0;
}

.cassette-field {
    flex: 1;
    padding: 12px;
    background: #222;
    border: 2px solid #666;
    border-left: none;
    border-right: none;
    color: #0f0;
    font-size: 0.8rem;
    font-family: 'Courier New', monospace;
    outline: none;
}

.cassette-field:focus {
    background: #2a2a2a;
    color: #ff0;
}

.cassette-toggle {
    position: absolute;
    right: 40px;
    background: none;
    border: none;
    color: #ffaa00;
    cursor: pointer;
    font-size: 0.9rem;
}

.cassette-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}

.control-group {
    display: flex;
    align-items: center;
}

.cassette-check {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #c0c0c0;
    font-size: 0.7rem;
    cursor: pointer;
}

.cassette-check input {
    display: none;
}

.cassette-checkmark {
    width: 25px;
    height: 25px;
    background: #444;
    border: 2px solid #666;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffaa00;
    font-size: 0.9rem;
}

.cassette-check input:checked + .cassette-checkmark {
    background: #ffaa00;
    color: #222;
}

.control-buttons {
    display: flex;
    gap: 10px;
}

.ctrl-btn {
    width: 35px;
    height: 35px;
    background: #444;
    border: 2px solid #666;
    border-radius: 50%;
    color: #c0c0c0;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

.ctrl-btn:hover {
    background: #ffaa00;
    color: #222;
    border-color: #ffaa00;
}

.ctrl-btn.record {
    color: #ff4444;
}

.ctrl-btn.record:hover {
    background: #ff4444;
    color: white;
}

.cassette-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid #444;
}

.tape-counter {
    color: #ffaa00;
    font-family: 'Courier New', monospace;
    font-size: 0.8rem;
    background: #222;
    padding: 3px 8px;
    border-radius: 5px;
}

.audio-levels {
    display: flex;
    gap: 3px;
}

.audio-levels span {
    width: 5px;
    height: 15px;
    background: #444;
    border-radius: 2px;
    animation: audio-level 1s infinite;
}

.audio-levels span:nth-child(1) { animation-delay: 0s; }
.audio-levels span:nth-child(2) { animation-delay: 0.2s; }
.audio-levels span:nth-child(3) { animation-delay: 0.4s; }
.audio-levels span:nth-child(4) { animation-delay: 0.6s; }
.audio-levels span:nth-child(5) { animation-delay: 0.8s; }

@keyframes audio-level {
    0%, 100% { height: 5px; background: #44ff44; }
    50% { height: 15px; background: #ffaa00; }
}

.cassette-reflection {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent);
    pointer-events: none;
}`,
    js: `// Retro Cassette Player Form
document.addEventListener('DOMContentLoaded', function() {
    const cassetteForm = document.querySelector('.cassette-form');
    
    if (cassetteForm) {
        cassetteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[placeholder="RECORD EMAIL"]').value;
            const password = document.getElementById('cassette-password').value;
            
            if (!email || !password) {
                showCassetteNotification('Please record all tracks', 'error');
                return;
            }
            
            const recordBtn = this.querySelector('.ctrl-btn.record');
            const originalText = recordBtn.innerHTML;
            
            recordBtn.innerHTML = '⏺';
            recordBtn.style.background = '#44ff44';
            recordBtn.disabled = true;
            
            setTimeout(() => {
                recordBtn.innerHTML = originalText;
                recordBtn.style.background = '';
                recordBtn.disabled = false;
                showCassetteNotification('Recording saved! Welcome to the mixtape!', 'success');
                this.reset();
            }, 2000);
        });
        
        // Play button
        const playBtn = cassetteForm.querySelector('.ctrl-btn.play');
        if (playBtn) {
            playBtn.addEventListener('click', function() {
                showCassetteNotification('▶ Playing...', 'info');
            });
        }
        
        // Pause button
        const pauseBtn = cassetteForm.querySelector('.ctrl-btn.pause');
        if (pauseBtn) {
            pauseBtn.addEventListener('click', function() {
                showCassetteNotification('⏸ Paused', 'info');
            });
        }
        
        // Eject button
        const ejectBtn = cassetteForm.querySelector('.ctrl-btn.eject');
        if (ejectBtn) {
            ejectBtn.addEventListener('click', function() {
                showCassetteNotification('⏏ Ejecting tape', 'info');
            });
        }
        
        // Password toggle
        const cassetteToggle = cassetteForm.querySelector('.cassette-toggle');
        if (cassetteToggle) {
            cassetteToggle.addEventListener('click', function() {
                const input = document.getElementById('cassette-password');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showCassetteNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2a2a2a;
            border: 2px solid \${type === 'success' ? '#44ff44' : type === 'error' ? '#ff4444' : '#ffaa00'};
            border-radius: 5px;
            color: white;
            padding: 12px 24px;
            font-family: 'Courier New', monospace;
            font-size: 0.8rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 20px \${type === 'success' ? '#44ff44' : type === 'error' ? '#ff4444' : '#ffaa00'}66;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 74: Steampunk Victorian Form
// ====================================================================
form74: {
    name: "Steampunk Victorian Form",
    category: "creative steampunk victorian",
    html: `<div class="form-container steampunk-bg">
    <div class="brass-gears">
        <div class="gear gear-1">
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-center"></div>
        </div>
        <div class="gear gear-2">
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-center"></div>
        </div>
        <div class="gear gear-3">
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-teeth"></div>
            <div class="gear-center"></div>
        </div>
        <div class="piston"></div>
        <div class="valve"></div>
    </div>
    
    <div class="brass-pipes">
        <div class="pipe vertical"></div>
        <div class="pipe horizontal"></div>
        <div class="pipe curved"></div>
        <div class="pressure-gauge">
            <div class="gauge-needle"></div>
            <span>PSI</span>
        </div>
    </div>
    
    <div class="steampunk-card">
        <div class="riveted-border">
            <div class="rivet"></div>
            <div class="rivet"></div>
            <div class="rivet"></div>
            <div class="rivet"></div>
            <div class="rivet"></div>
            <div class="rivet"></div>
            <div class="rivet"></div>
            <div class="rivet"></div>
        </div>
        
        <div class="steampunk-content">
            <div class="steampunk-logo">
                <i class="fas fa-cog"></i>
                <span>VICTORIAN</span>
                <i class="fas fa-clock"></i>
            </div>
            <h3 class="steampunk-title">The Aeronaut's Log</h3>
            <p class="steampunk-subtitle">Register your airship</p>
            
            <form class="steampunk-form">
                <div class="brass-input">
                    <div class="input-plate">
                        <i class="fas fa-feather"></i>
                        <input type="text" placeholder="Pilot's name" required>
                        <div class="brass-knob"></div>
                    </div>
                </div>
                
                <div class="brass-input">
                    <div class="input-plate">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Telegraph address" required>
                        <div class="brass-knob"></div>
                    </div>
                </div>
                
                <div class="brass-input">
                    <div class="input-plate">
                        <i class="fas fa-key"></i>
                        <input type="password" placeholder="Cipher key" required id="steampunk-password">
                        <button type="button" class="steampunk-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                        <div class="brass-knob"></div>
                    </div>
                </div>
                
                <div class="steampunk-options">
                    <label class="steampunk-check">
                        <input type="checkbox" checked>
                        <span class="steampunk-checkmark">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Remember this airship</span>
                    </label>
                    <a href="#" class="steampunk-link">
                        <i class="fas fa-wrench"></i> Forgot key?
                    </a>
                </div>
                
                <div class="pressure-controls">
                    <div class="pressure-level">
                        <div class="pressure-bar"></div>
                    </div>
                    <button type="submit" class="steampunk-btn">
                        <span>ENGAGE</span>
                        <i class="fas fa-cog fa-spin"></i>
                    </button>
                </div>
            </form>
            
            <div class="steampunk-footer">
                <span class="manometer">⚡ 220 PSI</span>
                <span class="temperature">🔥 180°C</span>
            </div>
        </div>
    </div>
    
    <div class="steam-vents">
        <div class="steam"></div>
        <div class="steam"></div>
        <div class="steam"></div>
    </div>
</div>`,
    css: `.steampunk-bg {
    background: linear-gradient(145deg, #3a2a1a, #2a1a0a);
    border-radius: 30px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
    border: 3px solid #b8860b;
    box-shadow: inset 0 0 20px #8b4513;
}

.brass-gears {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.gear {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 3px solid #daa520;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    animation: gear-rotate 10s linear infinite;
}

.gear-1 {
    top: 10%;
    left: 5%;
    width: 50px;
    height: 50px;
}

.gear-2 {
    bottom: 15%;
    right: 5%;
    width: 70px;
    height: 70px;
    animation-direction: reverse;
}

.gear-3 {
    top: 40%;
    right: 10%;
    width: 40px;
    height: 40px;
    animation-duration: 15s;
}

@keyframes gear-rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.gear-teeth {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #daa520;
    border-radius: 3px;
}

.gear-1 .gear-teeth:nth-child(1) { top: -8px; left: 50%; transform: translateX(-50%); }
.gear-1 .gear-teeth:nth-child(2) { bottom: -8px; left: 50%; transform: translateX(-50%); }
.gear-1 .gear-teeth:nth-child(3) { left: -8px; top: 50%; transform: translateY(-50%); }
.gear-1 .gear-teeth:nth-child(4) { right: -8px; top: 50%; transform: translateY(-50%); }

.gear-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #8b4513;
    border: 2px solid #daa520;
}

.piston {
    position: absolute;
    bottom: 20%;
    left: 20%;
    width: 30px;
    height: 60px;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 2px solid #daa520;
    border-radius: 10px;
    animation: piston-move 2s ease-in-out infinite;
}

@keyframes piston-move {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.valve {
    position: absolute;
    top: 15%;
    right: 15%;
    width: 20px;
    height: 40px;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 2px solid #daa520;
    border-radius: 10px 10px 5px 5px;
    transform: rotate(15deg);
}

.brass-pipes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.pipe {
    position: absolute;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 2px solid #daa520;
}

.pipe.vertical {
    width: 10px;
    height: 100px;
    left: 80%;
    top: 10%;
}

.pipe.horizontal {
    height: 10px;
    width: 100px;
    left: 60%;
    top: 30%;
}

.pipe.curved {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-top: 5px solid #daa520;
    border-right: 5px solid #daa520;
    border-bottom: none;
    border-left: none;
    background: transparent;
    transform: rotate(45deg);
    left: 70%;
    top: 15%;
}

.pressure-gauge {
    position: absolute;
    bottom: 10%;
    right: 10%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #f0f0f0;
    border: 3px solid #b8860b;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gauge-needle {
    width: 2px;
    height: 20px;
    background: #8b0000;
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: bottom;
    transform: rotate(30deg);
    animation: gauge-move 3s infinite;
}

@keyframes gauge-move {
    0% { transform: rotate(10deg); }
    50% { transform: rotate(50deg); }
    100% { transform: rotate(10deg); }
}

.steampunk-card {
    position: relative;
    background: rgba(42, 26, 10, 0.8);
    backdrop-filter: blur(5px);
    border-radius: 25px;
    padding: 20px;
    z-index: 20;
    border: 2px solid #b8860b;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.riveted-border {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    pointer-events: none;
}

.rivet {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 1px solid #daa520;
}

.rivet:nth-child(1) { top: -4px; left: 10%; }
.rivet:nth-child(2) { top: -4px; right: 10%; }
.rivet:nth-child(3) { bottom: -4px; left: 10%; }
.rivet:nth-child(4) { bottom: -4px; right: 10%; }

.steampunk-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
}

.steampunk-logo i {
    font-size: 1.5rem;
    color: #b8860b;
    filter: drop-shadow(0 0 5px #daa520);
}

.steampunk-logo span {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 3px;
    color: #daa520;
    font-family: 'Cinzel', serif;
}

.steampunk-title {
    text-align: center;
    color: #f0e68c;
    font-size: 1rem;
    margin-bottom: 3px;
    font-family: 'Cinzel', serif;
}

.steampunk-subtitle {
    text-align: center;
    color: #c0b0a0;
    font-size: 0.65rem;
    margin-bottom: 20px;
    font-style: italic;
}

.brass-input {
    margin-bottom: 15px;
}

.input-plate {
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(145deg, #3a2a1a, #2a1a0a);
    border: 2px solid #b8860b;
    border-radius: 30px;
    padding: 0 15px;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.5);
}

.input-plate i {
    color: #b8860b;
    font-size: 0.9rem;
    margin-right: 10px;
}

.input-plate input {
    flex: 1;
    padding: 14px 0;
    background: transparent;
    border: none;
    color: #f0e68c;
    font-size: 0.85rem;
    font-family: 'Courier New', monospace;
}

.input-plate input:focus {
    outline: none;
}

.input-plate input::placeholder {
    color: #8b7355;
}

.brass-knob {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 2px solid #daa520;
    cursor: pointer;
    transition: all 0.2s ease;
}

.brass-knob:hover {
    transform: rotate(45deg);
}

.steampunk-toggle {
    position: absolute;
    right: 45px;
    background: none;
    border: none;
    color: #b8860b;
    cursor: pointer;
    font-size: 0.9rem;
}

.steampunk-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
}

.steampunk-check {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #c0b0a0;
    font-size: 0.75rem;
}

.steampunk-check input {
    display: none;
}

.steampunk-checkmark {
    width: 20px;
    height: 20px;
    background: #2a1a0a;
    border: 2px solid #b8860b;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
}

.steampunk-check input:checked + .steampunk-checkmark {
    background: #b8860b;
    color: #2a1a0a;
}

.steampunk-link {
    color: #b8860b;
    text-decoration: none;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 5px;
}

.pressure-controls {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 20px 0;
}

.pressure-level {
    flex: 1;
    height: 10px;
    background: #2a1a0a;
    border: 2px solid #b8860b;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.pressure-bar {
    height: 100%;
    width: 70%;
    background: linear-gradient(90deg, #ff4444, #ffaa00);
    animation: pressure-pulse 2s infinite;
}

@keyframes pressure-pulse {
    0%, 100% { width: 70%; }
    50% { width: 80%; }
}

.steampunk-btn {
    padding: 12px 25px;
    background: linear-gradient(145deg, #b8860b, #8b4513);
    border: 2px solid #daa520;
    border-radius: 30px;
    color: #f0e68c;
    font-size: 0.85rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.steampunk-btn:hover {
    background: linear-gradient(145deg, #daa520, #b8860b);
    transform: scale(1.05);
    box-shadow: 0 0 20px #b8860b;
}

.steampunk-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 2px solid #b8860b;
    color: #c0b0a0;
    font-size: 0.65rem;
    font-family: 'Courier New', monospace;
}

.steam-vents {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    pointer-events: none;
}

.steam {
    position: absolute;
    width: 20px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    filter: blur(10px);
    animation: steam-rise 3s infinite;
}

.steam:nth-child(1) { left: 20%; animation-delay: 0s; }
.steam:nth-child(2) { left: 50%; animation-delay: 1s; }
.steam:nth-child(3) { left: 80%; animation-delay: 2s; }

@keyframes steam-rise {
    0% { transform: translateY(0) scale(1); opacity: 0.3; }
    100% { transform: translateY(-50px) scale(2); opacity: 0; }
}`,
    js: `// Steampunk Victorian Form
document.addEventListener('DOMContentLoaded', function() {
    const steampunkForm = document.querySelector('.steampunk-form');
    
    if (steampunkForm) {
        steampunkForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const pilotName = this.querySelector('input[placeholder="Pilot\'s name"]').value;
            const telegraph = this.querySelector('input[placeholder="Telegraph address"]').value;
            const cipher = document.getElementById('steampunk-password').value;
            
            if (!pilotName || !telegraph || !cipher) {
                showSteampunkNotification('Pressure insufficient! Fill all gauges!', 'error');
                return;
            }
            
            const engageBtn = this.querySelector('.steampunk-btn');
            const originalText = engageBtn.innerHTML;
            
            engageBtn.innerHTML = '<span>ENGAGING...</span> <i class="fas fa-cog fa-spin"></i>';
            engageBtn.disabled = true;
            
            setTimeout(() => {
                engageBtn.innerHTML = '<span>LIFT OFF!</span> <i class="fas fa-rocket"></i>';
                showSteampunkNotification('Airship registered! Welcome aboard, pilot!', 'success');
                
                setTimeout(() => {
                    engageBtn.innerHTML = originalText;
                    engageBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Knob rotation
        const knobs = steampunkForm.querySelectorAll('.brass-knob');
        knobs.forEach(knob => {
            knob.addEventListener('click', function() {
                this.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
            });
        });
        
        // Password toggle
        const steampunkToggle = steampunkForm.querySelector('.steampunk-toggle');
        if (steampunkToggle) {
            steampunkToggle.addEventListener('click', function() {
                const input = document.getElementById('steampunk-password');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showSteampunkNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(145deg, #3a2a1a, #2a1a0a);
            border: 2px solid \${type === 'success' ? '#daa520' : type === 'error' ? '#b22222' : '#b8860b'};
            border-radius: 5px;
            color: #f0e68c;
            padding: 12px 24px;
            font-family: 'Cinzel', serif;
            font-size: 0.8rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px \${type === 'success' ? '#daa520' : type === 'error' ? '#b22222' : '#b8860b'}66;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 75: Pixel Art 8-bit Game Form
// ====================================================================
form75: {
    name: "Pixel Art 8-bit Game Form",
    category: "creative pixel retro",
    html: `<div class="form-container pixel-game-bg">
    <div class="game-screen">
        <div class="scanlines"></div>
        <div class="pixel-sky">
            <div class="cloud"></div>
            <div class="cloud"></div>
            <div class="sun"></div>
        </div>
        <div class="pixel-ground">
            <div class="grass-block"></div>
            <div class="grass-block"></div>
            <div class="grass-block"></div>
            <div class="grass-block"></div>
        </div>
        
        <div class="pixel-castle">
            <div class="castle-tower left"></div>
            <div class="castle-wall"></div>
            <div class="castle-tower right"></div>
            <div class="castle-door"></div>
        </div>
        
        <div class="pixel-character">
            <div class="character-head"></div>
            <div class="character-body"></div>
            <div class="character-legs">
                <div class="leg"></div>
                <div class="leg"></div>
            </div>
        </div>
        
        <div class="pixel-ui">
            <div class="pixel-hearts">
                <span>❤️</span><span>❤️</span><span>❤️</span>
            </div>
            <div class="pixel-score">SCORE: 0000</div>
        </div>
        
        <div class="pixel-form-container">
            <div class="pixel-header">
                <span class="pixel-title">▶ NEW GAME ◀</span>
                <span class="pixel-subtitle">Enter your hero name</span>
            </div>
            
            <form class="pixel-form">
                <div class="pixel-input-block">
                    <span class="pixel-label">NAME</span>
                    <div class="pixel-input-wrapper">
                        <input type="text" placeholder="HERO" class="pixel-input" maxlength="8">
                        <div class="pixel-cursor"></div>
                    </div>
                </div>
                
                <div class="pixel-input-block">
                    <span class="pixel-label">PASSWORD</span>
                    <div class="pixel-input-wrapper">
                        <input type="password" placeholder="●●●●●●" class="pixel-input" id="pixel-password">
                        <button type="button" class="pixel-toggle">👁️</button>
                        <div class="pixel-cursor"></div>
                    </div>
                </div>
                
                <div class="pixel-class-select">
                    <span class="select-label">CLASS</span>
                    <div class="pixel-options">
                        <label class="pixel-option">
                            <input type="radio" name="class" value="warrior" checked>
                            <span class="pixel-option-box">⚔️</span>
                            <span class="pixel-option-text">WARRIOR</span>
                        </label>
                        <label class="pixel-option">
                            <input type="radio" name="class" value="mage">
                            <span class="pixel-option-box">🔮</span>
                            <span class="pixel-option-text">MAGE</span>
                        </label>
                        <label class="pixel-option">
                            <input type="radio" name="class" value="rogue">
                            <span class="pixel-option-box">🗡️</span>
                            <span class="pixel-option-text">ROGUE</span>
                        </label>
                    </div>
                </div>
                
                <div class="pixel-checkbox-block">
                    <label class="pixel-checkbox">
                        <input type="checkbox" checked>
                        <span class="pixel-checkbox-box">☐</span>
                        <span class="pixel-checkbox-text">Save game</span>
                    </label>
                    <label class="pixel-checkbox">
                        <input type="checkbox">
                        <span class="pixel-checkbox-box">☐</span>
                        <span class="pixel-checkbox-text">Enable cheats</span>
                    </label>
                </div>
                
                <div class="pixel-buttons">
                    <button type="submit" class="pixel-btn start">▶ START</button>
                    <button type="button" class="pixel-btn reset">⟲ RESET</button>
                </div>
            </form>
            
            <div class="pixel-footer">
                <span class="pixel-lives">LIVES: 3</span>
                <span class="pixel-level">LEVEL 1</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.pixel-game-bg {
    background: #1a3355;
    border-radius: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
    image-rendering: pixelated;
    image-rendering: crisp-edges;
    border: 4px solid #ffaa00;
}

.game-screen {
    position: relative;
    background: #87CEEB;
    border: 4px solid #000;
    padding: 15px;
    image-rendering: pixelated;
}

.scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        0deg,
        rgba(0,0,0,0.1) 0px,
        rgba(0,0,0,0.1) 2px,
        transparent 2px,
        transparent 4px
    );
    pointer-events: none;
    z-index: 10;
}

.pixel-sky {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60%;
    pointer-events: none;
}

.cloud {
    position: absolute;
    width: 40px;
    height: 20px;
    background: white;
    border: 2px solid #ddd;
    image-rendering: pixelated;
}

.cloud:nth-child(1) {
    top: 20px;
    left: 20px;
    animation: cloud-move 20s linear infinite;
}

.cloud:nth-child(2) {
    top: 40px;
    right: 20px;
    animation: cloud-move 25s linear infinite reverse;
}

@keyframes cloud-move {
    from { transform: translateX(-100px); }
    to { transform: translateX(300px); }
}

.sun {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: #ffff00;
    border: 2px solid #ffaa00;
    border-radius: 0;
    image-rendering: pixelated;
}

.pixel-ground {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: #8b4513;
    display: flex;
    flex-wrap: wrap;
}

.grass-block {
    width: 16px;
    height: 8px;
    background: #228B22;
    border: 1px solid #006400;
}

.pixel-castle {
    position: absolute;
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-end;
    image-rendering: pixelated;
}

.castle-tower {
    width: 30px;
    height: 80px;
    background: #aaa;
    border: 2px solid #666;
    border-top: 10px solid #c0c0c0;
}

.castle-wall {
    width: 60px;
    height: 50px;
    background: #aaa;
    border: 2px solid #666;
    border-top: 10px solid #c0c0c0;
}

.castle-door {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 25px;
    background: #8b4513;
    border: 2px solid #5a2e0e;
}

.pixel-character {
    position: absolute;
    bottom: 40%;
    left: 20%;
    image-rendering: pixelated;
}

.character-head {
    width: 16px;
    height: 16px;
    background: #ffdbac;
    border: 2px solid #8b5a2b;
    margin-left: 8px;
}

.character-body {
    width: 20px;
    height: 25px;
    background: #ff0000;
    border: 2px solid #8b0000;
}

.character-legs {
    display: flex;
    gap: 4px;
}

.leg {
    width: 8px;
    height: 15px;
    background: #0000ff;
    border: 2px solid #00008b;
}

.pixel-ui {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 20;
    image-rendering: pixelated;
}

.pixel-hearts {
    display: flex;
    gap: 5px;
    font-size: 1.2rem;
    filter: drop-shadow(2px 2px 0 #000);
}

.pixel-score {
    font-family: 'Press Start 2P', monospace;
    font-size: 0.5rem;
    color: #fff;
    text-shadow: 2px 2px 0 #000;
    margin-top: 5px;
}

.pixel-form-container {
    position: relative;
    background: #000;
    border: 4px solid #c0c0c0;
    padding: 15px;
    margin-top: 20px;
    image-rendering: pixelated;
    z-index: 30;
}

.pixel-header {
    text-align: center;
    margin-bottom: 15px;
}

.pixel-title {
    display: block;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.7rem;
    color: #ffff00;
    text-shadow: 2px 2px 0 #ff0000;
    margin-bottom: 5px;
}

.pixel-subtitle {
    font-family: 'Press Start 2P', monospace;
    font-size: 0.5rem;
    color: #0f0;
    text-shadow: 1px 1px 0 #000;
}

.pixel-input-block {
    margin-bottom: 15px;
}

.pixel-label {
    display: block;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.5rem;
    color: #fff;
    margin-bottom: 5px;
}

.pixel-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.pixel-input {
    flex: 1;
    padding: 10px;
    background: #000;
    border: 2px solid #c0c0c0;
    color: #0f0;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.6rem;
    text-transform: uppercase;
}

.pixel-input:focus {
    outline: none;
    border-color: #ffff00;
}

.pixel-cursor {
    position: absolute;
    right: 10px;
    width: 10px;
    height: 15px;
    background: #0f0;
    animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.pixel-toggle {
    position: absolute;
    right: 30px;
    background: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
}

.pixel-class-select {
    margin-bottom: 15px;
}

.select-label {
    display: block;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.5rem;
    color: #fff;
    margin-bottom: 5px;
}

.pixel-options {
    display: flex;
    gap: 10px;
}

.pixel-option {
    flex: 1;
    cursor: pointer;
}

.pixel-option input {
    display: none;
}

.pixel-option-box {
    display: block;
    padding: 8px;
    background: #000;
    border: 2px solid #c0c0c0;
    text-align: center;
    font-size: 1rem;
    margin-bottom: 3px;
}

.pixel-option input:checked + .pixel-option-box {
    background: #ffaa00;
    border-color: #ffff00;
}

.pixel-option-text {
    display: block;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.4rem;
    color: #fff;
    text-align: center;
}

.pixel-checkbox-block {
    margin-bottom: 15px;
}

.pixel-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    cursor: pointer;
}

.pixel-checkbox input {
    display: none;
}

.pixel-checkbox-box {
    font-size: 1rem;
    color: #fff;
}

.pixel-checkbox input:checked + .pixel-checkbox-box {
    color: #0f0;
}

.pixel-checkbox-text {
    font-family: 'Press Start 2P', monospace;
    font-size: 0.5rem;
    color: #fff;
}

.pixel-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.pixel-btn {
    flex: 1;
    padding: 10px;
    background: #000;
    border: 2px solid #c0c0c0;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.6rem;
    color: #fff;
    cursor: pointer;
    transition: all 0.1s ease;
}

.pixel-btn.start {
    background: #0f0;
    color: #000;
    border-color: #00ff00;
}

.pixel-btn.start:hover {
    background: #00ff00;
}

.pixel-btn.reset:hover {
    background: #ff0000;
    border-color: #ff0000;
}

.pixel-footer {
    display: flex;
    justify-content: space-between;
    font-family: 'Press Start 2P', monospace;
    font-size: 0.5rem;
    color: #fff;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid #c0c0c0;
}`,
    js: `// Pixel Art 8-bit Game Form
document.addEventListener('DOMContentLoaded', function() {
    const pixelForm = document.querySelector('.pixel-form');
    
    if (pixelForm) {
        pixelForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const heroName = this.querySelector('input[placeholder="HERO"]').value;
            const password = document.getElementById('pixel-password').value;
            const charClass = this.querySelector('input[name="class"]:checked').value;
            
            if (!heroName) {
                showPixelNotification('ENTER YOUR NAME, HERO!', 'error');
                return;
            }
            
            const startBtn = this.querySelector('.pixel-btn.start');
            const originalText = startBtn.innerHTML;
            
            startBtn.innerHTML = '▶ LOADING...';
            startBtn.disabled = true;
            
            setTimeout(() => {
                startBtn.innerHTML = '▶ GAME START!';
                showPixelNotification(\`Welcome, \${heroName} the \${charClass.toUpperCase()}!\`, 'success');
                
                setTimeout(() => {
                    startBtn.innerHTML = originalText;
                    startBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Reset button
        const resetBtn = pixelForm.querySelector('.pixel-btn.reset');
        if (resetBtn) {
            resetBtn.addEventListener('click', function() {
                pixelForm.reset();
                showPixelNotification('Game reset! Start over?', 'info');
            });
        }
        
        // Password toggle
        const pixelToggle = pixelForm.querySelector('.pixel-toggle');
        if (pixelToggle) {
            pixelToggle.addEventListener('click', function() {
                const input = document.getElementById('pixel-password');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    this.textContent = '🔒';
                } else {
                    input.type = 'password';
                    this.textContent = '👁️';
                }
            });
        }
    }
    
    function showPixelNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #000;
            border: 4px solid \${type === 'success' ? '#0f0' : type === 'error' ? '#f00' : '#ff0'};
            color: \${type === 'success' ? '#0f0' : type === 'error' ? '#f00' : '#ff0'};
            padding: 15px;
            font-family: 'Press Start 2P', monospace;
            font-size: 0.6rem;
            image-rendering: pixelated;
            z-index: 9999;
            animation: slideIn 0.1s step-end;
            box-shadow: 4px 4px 0 #000;
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.1s step-end';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 76: Origami Paper Craft Form
// ====================================================================
form76: {
    name: "Origami Paper Craft Form",
    category: "creative origami paper",
    html: `<div class="form-container origami-bg">
    <div class="paper-texture"></div>
    <div class="origami-folds">
        <div class="fold fold-1"></div>
        <div class="fold fold-2"></div>
        <div class="fold fold-3"></div>
        <div class="fold fold-4"></div>
    </div>
    
    <div class="origami-creatures">
        <div class="crane crane-1">
            <div class="crane-wing"></div>
            <div class="crane-wing"></div>
            <div class="crane-head"></div>
        </div>
        <div class="crane crane-2">
            <div class="crane-wing"></div>
            <div class="crane-wing"></div>
            <div class="crane-head"></div>
        </div>
        <div class="origami-frog"></div>
    </div>
    
    <div class="origami-card">
        <div class="paper-fold-corner top-left"></div>
        <div class="paper-fold-corner top-right"></div>
        <div class="paper-fold-corner bottom-left"></div>
        <div class="paper-fold-corner bottom-right"></div>
        
        <div class="origami-content">
            <div class="origami-logo">
                <span class="folded-letter">O</span>
                <span class="folded-letter">R</span>
                <span class="folded-letter">I</span>
                <span class="folded-letter">G</span>
                <span class="folded-letter">A</span>
                <span class="folded-letter">M</span>
                <span class="folded-letter">I</span>
            </div>
            <h3 class="origami-title">Fold Your Dreams</h3>
            <p class="origami-subtitle">Create something beautiful</p>
            
            <form class="origami-form">
                <div class="paper-input">
                    <div class="paper-input-inner">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Your name" required>
                        <div class="paper-edge"></div>
                    </div>
                </div>
                
                <div class="paper-input">
                    <div class="paper-input-inner">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email address" required>
                        <div class="paper-edge"></div>
                    </div>
                </div>
                
                <div class="paper-input">
                    <div class="paper-input-inner">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Secret fold" required id="origami-password">
                        <button type="button" class="origami-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                        <div class="paper-edge"></div>
                    </div>
                </div>
                
                <div class="origami-options">
                    <label class="origami-check">
                        <input type="checkbox" checked>
                        <span class="origami-checkmark">
                            <i class="fas fa-check"></i>
                        </span>
                        <span>Remember my folds</span>
                    </label>
                    <a href="#" class="origami-link">Unfold password?</a>
                </div>
                
                <div class="origami-colors">
                    <span class="color-label">Paper color:</span>
                    <div class="color-palette">
                        <label class="color-option">
                            <input type="radio" name="color" value="white" checked>
                            <span class="color-dot white"></span>
                        </label>
                        <label class="color-option">
                            <input type="radio" name="color" value="red">
                            <span class="color-dot red"></span>
                        </label>
                        <label class="color-option">
                            <input type="radio" name="color" value="blue">
                            <span class="color-dot blue"></span>
                        </label>
                        <label class="color-option">
                            <input type="radio" name="color" value="green">
                            <span class="color-dot green"></span>
                        </label>
                        <label class="color-option">
                            <input type="radio" name="color" value="yellow">
                            <span class="color-dot yellow"></span>
                        </label>
                    </div>
                </div>
                
                <button type="submit" class="origami-btn">
                    <span>Fold & Send</span>
                    <i class="fas fa-paper-plane"></i>
                </button>
            </form>
            
            <div class="origami-footer">
                <span class="fold-count">✨ 1000 cranes folded ✨</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.origami-bg {
    background: #f5f5dc;
    border-radius: 30px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
    border: 3px solid #d2b48c;
}

.paper-texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(45deg, rgba(210, 180, 140, 0.1) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(210, 180, 140, 0.1) 25%, transparent 25%);
    background-size: 20px 20px;
    pointer-events: none;
}

.origami-folds {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.fold {
    position: absolute;
    border-style: solid;
    border-width: 0 0 50px 50px;
    border-color: transparent transparent rgba(210, 180, 140, 0.2) transparent;
}

.fold-1 {
    top: 0;
    right: 0;
    transform: rotate(90deg);
}

.fold-2 {
    bottom: 0;
    left: 0;
    transform: rotate(-90deg);
}

.fold-3 {
    top: 30%;
    left: 10%;
    transform: rotate(45deg);
}

.fold-4 {
    bottom: 20%;
    right: 10%;
    transform: rotate(-135deg);
}

.origami-creatures {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.crane {
    position: absolute;
    width: 40px;
    height: 40px;
    animation: crane-float 6s ease-in-out infinite;
}

.crane-1 {
    top: 15%;
    left: 10%;
}

.crane-2 {
    bottom: 20%;
    right: 10%;
    animation-delay: -2s;
}

@keyframes crane-float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(5deg); }
}

.crane-wing {
    position: absolute;
    width: 25px;
    height: 10px;
    background: linear-gradient(145deg, #ffb6c1, #ff69b4);
    border: 2px solid #d45d7a;
    border-radius: 10px 10px 0 0;
}

.crane-wing:first-child {
    top: 10px;
    left: 5px;
    transform: rotate(-30deg);
}

.crane-wing:last-child {
    top: 10px;
    right: 5px;
    transform: rotate(30deg);
}

.crane-head {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 15px;
    background: #ff69b4;
    border: 2px solid #d45d7a;
    border-radius: 5px 5px 0 0;
}

.origami-frog {
    position: absolute;
    bottom: 30%;
    left: 20%;
    width: 25px;
    height: 15px;
    background: #98fb98;
    border: 2px solid #32cd32;
    border-radius: 50% 50% 30% 30%;
}

.origami-card {
    position: relative;
    background: #fff8dc;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
    z-index: 20;
    border: 2px solid #d2b48c;
}

.paper-fold-corner {
    position: absolute;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #fff8dc 50%, #d2b48c 50%);
}

.paper-fold-corner.top-left {
    top: -2px;
    left: -2px;
    transform: rotate(0deg);
}

.paper-fold-corner.top-right {
    top: -2px;
    right: -2px;
    transform: rotate(90deg);
}

.paper-fold-corner.bottom-left {
    bottom: -2px;
    left: -2px;
    transform: rotate(270deg);
}

.paper-fold-corner.bottom-right {
    bottom: -2px;
    right: -2px;
    transform: rotate(180deg);
}

.origami-logo {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-bottom: 15px;
}

.folded-letter {
    font-size: 1.5rem;
    font-weight: bold;
    color: #d2b48c;
    transform: rotate(-5deg);
    display: inline-block;
    animation: letter-flutter 3s infinite;
}

.folded-letter:nth-child(even) {
    transform: rotate(5deg);
    animation-delay: 0.2s;
}

@keyframes letter-flutter {
    0%, 100% { transform: rotate(-5deg) translateY(0); }
    50% { transform: rotate(-5deg) translateY(-3px); }
}

.origami-title {
    text-align: center;
    color: #8b4513;
    font-size: 1rem;
    margin-bottom: 3px;
    font-family: 'Crafty Girls', cursive;
}

.origami-subtitle {
    text-align: center;
    color: #a0522d;
    font-size: 0.65rem;
    margin-bottom: 20px;
}

.paper-input {
    margin-bottom: 15px;
}

.paper-input-inner {
    position: relative;
    display: flex;
    align-items: center;
    background: #fff8dc;
    border: 2px solid #d2b48c;
    padding: 0 12px;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.paper-input-inner i {
    color: #8b4513;
    font-size: 0.9rem;
    margin-right: 10px;
}

.paper-input-inner input {
    flex: 1;
    padding: 14px 0;
    background: transparent;
    border: none;
    color: #5a3e1b;
    font-size: 0.85rem;
    font-family: 'Crafty Girls', cursive;
}

.paper-input-inner input:focus {
    outline: none;
}

.paper-input-inner input::placeholder {
    color: #c0a080;
}

.paper-edge {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #d2b48c, #8b4513, #d2b48c);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.paper-input-inner:focus-within .paper-edge {
    opacity: 1;
}

.origami-toggle {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    color: #8b4513;
    cursor: pointer;
}

.origami-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.origami-check {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #8b4513;
    font-size: 0.75rem;
}

.origami-check input {
    display: none;
}

.origami-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #d2b48c;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    background: #fff8dc;
}

.origami-check input:checked + .origami-checkmark {
    background: #d2b48c;
    color: #fff8dc;
}

.origami-link {
    color: #8b4513;
    text-decoration: none;
    font-size: 0.75rem;
    border-bottom: 1px dashed #d2b48c;
}

.origami-colors {
    margin: 20px 0;
}

.color-label {
    display: block;
    color: #8b4513;
    font-size: 0.7rem;
    margin-bottom: 8px;
}

.color-palette {
    display: flex;
    gap: 10px;
}

.color-option {
    cursor: pointer;
}

.color-option input {
    display: none;
}

.color-dot {
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #d2b48c;
    transition: all 0.2s ease;
}

.color-dot.white { background: #fff; }
.color-dot.red { background: #ff6b6b; }
.color-dot.blue { background: #6b9eff; }
.color-dot.green { background: #6bff6b; }
.color-dot.yellow { background: #ffff6b; }

.color-option input:checked + .color-dot {
    transform: scale(1.2);
    box-shadow: 0 0 10px #d2b48c;
    border-color: #8b4513;
}

.origami-btn {
    width: 100%;
    padding: 16px;
    background: #d2b48c;
    color: #5a3e1b;
    border: 2px solid #8b4513;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.origami-btn:hover {
    background: #8b4513;
    color: #d2b48c;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
}

.origami-footer {
    text-align: center;
    margin-top: 15px;
    color: #a0522d;
    font-size: 0.65rem;
}`,
    js: `// Origami Paper Craft Form
document.addEventListener('DOMContentLoaded', function() {
    const origamiForm = document.querySelector('.origami-form');
    
    if (origamiForm) {
        origamiForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[placeholder="Your name"]').value;
            const email = this.querySelector('input[placeholder="Email address"]').value;
            const password = document.getElementById('origami-password').value;
            const color = this.querySelector('input[name="color"]:checked').value;
            
            if (!name || !email || !password) {
                showOrigamiNotification('Please complete all folds!', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.origami-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Folding...</span> <i class="fas fa-spinner fa-pulse"></i>';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<span>Folded with love!</span> <i class="fas fa-heart"></i>';
                showOrigamiNotification('Your origami creation is complete!', 'success');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 2000);
        });
        
        // Paper color selection animation
        const colorOptions = origamiForm.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                const dot = this.querySelector('.color-dot');
                dot.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    dot.style.transform = '';
                }, 200);
            });
        });
        
        // Password toggle
        const origamiToggle = origamiForm.querySelector('.origami-toggle');
        if (origamiToggle) {
            origamiToggle.addEventListener('click', function() {
                const input = document.getElementById('origami-password');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showOrigamiNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fff8dc;
            border: 3px solid \${type === 'success' ? '#8b4513' : type === 'error' ? '#b22222' : '#d2b48c'};
            border-radius: 5px;
            color: #5a3e1b;
            padding: 15px 25px;
            font-family: 'Crafty Girls', cursive;
            font-size: 0.8rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
            transform: rotate(-1deg);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},

// ====================================================================
// TEMPLATE 77: Underwater Ocean Form
// ====================================================================
form77: {
    name: "Underwater Ocean Form",
    category: "creative underwater ocean",
    html: `<div class="form-container underwater-ocean-bg">
    <div class="ocean-layers">
        <div class="water-layer surface"></div>
        <div class="water-layer mid"></div>
        <div class="water-layer deep"></div>
    </div>
    
    <div class="sun-rays">
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
    </div>
    
    <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
    </div>
    
    <div class="sea-life">
        <div class="fish fish-1">
            <div class="fish-body"></div>
            <div class="fish-eye"></div>
            <div class="fish-fin"></div>
        </div>
        <div class="fish fish-2">
            <div class="fish-body"></div>
            <div class="fish-eye"></div>
            <div class="fish-fin"></div>
        </div>
        <div class="jellyfish">
            <div class="jelly-bell"></div>
            <div class="jelly-tentacles"></div>
            <div class="jelly-tentacles"></div>
            <div class="jelly-tentacles"></div>
        </div>
        <div class="seaweed"></div>
        <div class="seaweed"></div>
        <div class="starfish"></div>
        <div class="coral"></div>
    </div>
    
    <div class="sunken-ship"></div>
    
    <div class="treasure-chest">
        <div class="chest-lid"></div>
        <div class="chest-base"></div>
        <div class="gold-coins"></div>
    </div>
    
    <div class="pearl-card">
        <div class="pearl-shine"></div>
        <div class="pearl-content">
            <div class="seashell-icon">
                <i class="fas fa-shell"></i>
            </div>
            <h3 class="ocean-title">Ocean Depths</h3>
            <p class="ocean-subtitle">Dive into the unknown</p>
            
            <form class="ocean-form">
                <div class="coral-input">
                    <div class="coral-input-wrapper">
                        <i class="fas fa-fish"></i>
                        <input type="text" placeholder="Diver's name" required>
                    </div>
                </div>
                
                <div class="coral-input">
                    <div class="coral-input-wrapper">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Bubble message" required>
                    </div>
                </div>
                
                <div class="coral-input">
                    <div class="coral-input-wrapper">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Deep secret" required id="ocean-password">
                        <button type="button" class="ocean-toggle">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <div class="ocean-options">
                    <label class="ocean-checkbox">
                        <input type="checkbox" checked>
                        <span class="ocean-checkmark">🌊</span>
                        <span>Float on surface</span>
                    </label>
                    <a href="#" class="ocean-link">Lost pearl?</a>
                </div>
                
                <div class="depth-selector">
                    <span class="depth-label">Dive depth:</span>
                    <div class="depth-bar">
                        <div class="depth-fill"></div>
                        <div class="depth-marker" style="left: 30%"></div>
                    </div>
                    <span class="depth-value">30m</span>
                </div>
                
                <button type="submit" class="ocean-btn">
                    <span>Dive In</span>
                    <i class="fas fa-water"></i>
                    <div class="bubble-effect"></div>
                </button>
            </form>
            
            <div class="ocean-footer">
                <span class="depth">🌊 -50m</span>
                <span class="temperature">🌡️ 22°C</span>
                <span class="pressure">⚡ 5atm</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.underwater-ocean-bg {
    background: linear-gradient(180deg, #006994, #003366);
    border-radius: 30px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    max-height: 280px;
    overflow-y: auto;
}

.ocean-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.water-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: overlay;
}

.surface {
    background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1), transparent);
    animation: surface-ripple 5s ease-in-out infinite;
}

.mid {
    background: radial-gradient(circle at 70% 60%, rgba(100,200,255,0.1), transparent);
    animation: surface-ripple 7s ease-in-out infinite reverse;
}

.deep {
    background: radial-gradient(circle at 50% 50%, rgba(0,50,100,0.3), transparent);
}

@keyframes surface-ripple {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.sun-rays {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.ray {
    position: absolute;
    top: 0;
    left: 20%;
    width: 2px;
    height: 200px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
    transform: rotate(15deg);
    animation: ray-move 8s infinite;
}

.ray:nth-child(2) { left: 40%; transform: rotate(25deg); animation-delay: 1s; }
.ray:nth-child(3) { left: 60%; transform: rotate(5deg); animation-delay: 2s; }
.ray:nth-child(4) { left: 80%; transform: rotate(35deg); animation-delay: 3s; }

@keyframes ray-move {
    0%, 100% { opacity: 0.3; transform: rotate(15deg) scaleY(1); }
    50% { opacity: 0.8; transform: rotate(15deg) scaleY(1.2); }
}

.bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.bubble {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.3);
    animation: bubble-rise 5s linear infinite;
}

.bubble:nth-child(1) { left: 10%; animation-delay: 0s; }
.bubble:nth-child(2) { left: 30%; animation-delay: 1s; width: 15px; }
.bubble:nth-child(3) { left: 50%; animation-delay: 2s; width: 8px; }
.bubble:nth-child(4) { left: 70%; animation-delay: 3s; width: 20px; }
.bubble:nth-child(5) { left: 90%; animation-delay: 4s; width: 12px; }

@keyframes bubble-rise {
    0% { bottom: -10%; opacity: 0.3; }
    100% { bottom: 110%; opacity: 0; transform: translateX(20px); }
}

.sea-life {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.fish {
    position: absolute;
    width: 40px;
    height: 20px;
    animation: fish-swim 15s linear infinite;
}

.fish-1 {
    top: 20%;
    left: -10%;
    animation: fish-swim 12s linear infinite;
}

.fish-2 {
    bottom: 30%;
    right: -10%;
    animation: fish-swim 15s linear infinite reverse;
}

@keyframes fish-swim {
    from { transform: translateX(-100px); }
    to { transform: translateX(300px); }
}

.fish-body {
    width: 30px;
    height: 15px;
    background: #ffa07a;
    border-radius: 50% 50% 50% 50% / 60% 40% 40% 60%;
    position: relative;
}

.fish-eye {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 4px;
    height: 4px;
    background: black;
    border-radius: 50%;
}

.fish-fin {
    position: absolute;
    top: 0;
    right: -5px;
    width: 10px;
    height: 15px;
    background: #ff8c69;
    border-radius: 50%;
    transform: rotate(15deg);
}

.jellyfish {
    position: absolute;
    bottom: 40%;
    left: 20%;
    animation: jelly-float 8s ease-in-out infinite;
}

.jelly-bell {
    width: 25px;
    height: 30px;
    background: rgba(255,192,203,0.5);
    border-radius: 50% 50% 40% 40%;
    border: 2px solid rgba(255,255,255,0.3);
}

.jelly-tentacles {
    width: 2px;
    height: 20px;
    background: rgba(255,192,203,0.5);
    margin: 0 auto;
    transform-origin: top;
    animation: tentacle-wave 2s infinite;
}

.jelly-tentacles:nth-child(2) { transform: rotate(5deg); animation-delay: 0.2s; }
.jelly-tentacles:nth-child(3) { transform: rotate(-5deg); animation-delay: 0.4s; }

@keyframes tentacle-wave {
    0%, 100% { transform: rotate(0deg) scaleY(1); }
    50% { transform: rotate(10deg) scaleY(1.2); }
}

.seaweed {
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 10px;
    height: 50px;
    background: #2e8b57;
    border-radius: 10px;
    transform-origin: bottom;
    animation: seaweed-sway 3s ease-in-out infinite;
}

.seaweed:nth-child(6) { left: 80%; animation-delay: 1s; }

@keyframes seaweed-sway {
    0%, 100% { transform: rotate(5deg); }
    50% { transform: rotate(-5deg); }
}

.starfish {
    position: absolute;
    bottom: 10%;
    right: 15%;
    width: 20px;
    height: 20px;
    background: #ff6b6b;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: starfish-pulse 2s infinite;
}

@keyframes starfish-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.coral {
    position: absolute;
    bottom: 0;
    right: 20%;
    width: 30px;
    height: 40px;
    background: #ff7f50;
    clip-path: polygon(50% 0%, 80% 30%, 60% 50%, 90% 80%, 50% 100%, 10% 80%, 40% 50%, 20% 30%);
}

.sunken-ship {
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 50px;
    height: 20px;
    background: #8b4513;
    border-radius: 20px 20px 0 0;
    transform: rotate(-5deg);
}

.treasure-chest {
    position: absolute;
    bottom: 15%;
    right: 10%;
    width: 30px;
    height: 20px;
    background: #daa520;
    border: 2px solid #b8860b;
}

.chest-lid {
    position: absolute;
    top: -10px;
    left: -2px;
    width: 34px;
    height: 10px;
    background: #daa520;
    border: 2px solid #b8860b;
    border-radius: 5px 5px 0 0;
    transform-origin: bottom;
    animation: chest-open 3s infinite;
}

@keyframes chest-open {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
}

.gold-coins {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 8px;
    height: 8px;
    background: #ffd700;
    border-radius: 50%;
    box-shadow: 10px 0 #ffd700, 5px 5px #ffd700;
}

.pearl-card {
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 30px;
    padding: 20px;
    border: 1px solid rgba(255,255,255,0.2);
    z-index: 30;
    overflow: hidden;
}

.pearl-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent);
    animation: pearl-shine 5s linear infinite;
}

@keyframes pearl-shine {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.pearl-content {
    position: relative;
    z-index: 40;
}

.seashell-icon {
    text-align: center;
    font-size: 2rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 10px;
    text-shadow: 0 0 20px rgba(255,255,255,0.3);
}

.ocean-title {
    text-align: center;
    color: white;
    font-size: 1rem;
    margin-bottom: 3px;
    text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

.ocean-subtitle {
    text-align: center;
    color: rgba(255,255,255,0.7);
    font-size: 0.65rem;
    margin-bottom: 20px;
}

.coral-input {
    margin-bottom: 15px;
}

.coral-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 30px;
    padding: 0 16px;
    backdrop-filter: blur(5px);
}

.coral-input-wrapper i {
    color: #7fffd4;
    font-size: 0.9rem;
    margin-right: 10px;
}

.coral-input-wrapper input {
    flex: 1;
    padding: 14px 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 0.85rem;
}

.coral-input-wrapper input:focus {
    outline: none;
}

.coral-input-wrapper input::placeholder {
    color: rgba(255,255,255,0.3);
}

.ocean-toggle {
    position: absolute;
    right: 16px;
    background: none;
    border: none;
    color: rgba(255,255,255,0.5);
    cursor: pointer;
}

.ocean-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.ocean-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: rgba(255,255,255,0.8);
    font-size: 0.75rem;
}

.ocean-checkbox input {
    display: none;
}

.ocean-checkmark {
    font-size: 1rem;
    filter: drop-shadow(0 0 5px #7fffd4);
}

.ocean-link {
    color: #7fffd4;
    text-decoration: none;
    font-size: 0.75rem;
}

.depth-selector {
    margin: 20px 0;
}

.depth-label {
    display: block;
    color: rgba(255,255,255,0.8);
    font-size: 0.7rem;
    margin-bottom: 8px;
}

.depth-bar {
    position: relative;
    height: 6px;
    background: rgba(255,255,255,0.1);
    border-radius: 3px;
    overflow: hidden;
}

.depth-fill {
    width: 70%;
    height: 100%;
    background: linear-gradient(90deg, #7fffd4, #006994);
    border-radius: 3px;
    animation: depth-wave 3s infinite;
}

@keyframes depth-wave {
    0%, 100% { width: 70%; }
    50% { width: 80%; }
}

.depth-marker {
    position: absolute;
    top: -4px;
    width: 12px;
    height: 12px;
    background: white;
    border: 2px solid #7fffd4;
    border-radius: 50%;
    transform: translateX(-50%);
}

.depth-value {
    position: absolute;
    right: 0;
    top: -15px;
    color: white;
    font-size: 0.7rem;
}

.ocean-btn {
    position: relative;
    width: 100%;
    padding: 16px;
    background: linear-gradient(90deg, #006994, #003366);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    transition: all 0.3s ease;
}

.bubble-effect {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent);
    top: 0;
    left: -100%;
    transition: left 0.5s ease;
}

.ocean-btn:hover .bubble-effect {
    left: 100%;
}

.ocean-footer {
    display: flex;
    justify-content: space-between;
    color: rgba(255,255,255,0.6);
    font-size: 0.6rem;
    margin-top: 15px;
    padding-top: 10px;
    border-top: 1px solid rgba(255,255,255,0.1);
}`,
    js: `// Underwater Ocean Form
document.addEventListener('DOMContentLoaded', function() {
    const oceanForm = document.querySelector('.ocean-form');
    
    if (oceanForm) {
        // Depth marker interaction
        const depthBar = oceanForm.querySelector('.depth-bar');
        const depthMarker = oceanForm.querySelector('.depth-marker');
        const depthValue = oceanForm.querySelector('.depth-value');
        
        if (depthBar && depthMarker) {
            depthBar.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = (x / rect.width) * 100;
                
                if (percentage >= 0 && percentage <= 100) {
                    depthMarker.style.left = percentage + '%';
                    depthValue.textContent = Math.round(percentage) + 'm';
                }
            });
        }
        
        // Form submission
        oceanForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const diverName = this.querySelector('input[placeholder="Diver\'s name"]').value;
            const bubbleMessage = this.querySelector('input[placeholder="Bubble message"]').value;
            const deepSecret = document.getElementById('ocean-password').value;
            
            if (!diverName || !bubbleMessage || !deepSecret) {
                showOceanNotification('The ocean requires all offerings!', 'error');
                return;
            }
            
            const diveBtn = this.querySelector('.ocean-btn');
            const originalText = diveBtn.innerHTML;
            
            diveBtn.innerHTML = '<span>Descending...</span> <i class="fas fa-spinner fa-spin"></i>';
            diveBtn.disabled = true;
            
            setTimeout(() => {
                diveBtn.innerHTML = '<span>Welcome to the depths!</span> <i class="fas fa-fish"></i>';
                showOceanNotification('You have discovered the underwater realm!', 'success');
                
                setTimeout(() => {
                    diveBtn.innerHTML = originalText;
                    diveBtn.disabled = false;
                    this.reset();
                    depthMarker.style.left = '30%';
                    depthValue.textContent = '30m';
                }, 2000);
            }, 2000);
        });
        
        // Password toggle
        const oceanToggle = oceanForm.querySelector('.ocean-toggle');
        if (oceanToggle) {
            oceanToggle.addEventListener('click', function() {
                const input = document.getElementById('ocean-password');
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        }
    }
    
    function showOceanNotification(message, type) {
        const notification = document.createElement('div');
        notification.style.cssText = \`
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 105, 148, 0.9);
            backdrop-filter: blur(10px);
            border: 2px solid \${type === 'success' ? '#7fffd4' : type === 'error' ? '#ff6b6b' : '#ffd700'};
            border-radius: 30px;
            color: white;
            padding: 15px 25px;
            font-size: 0.85rem;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 0 30px rgba(127, 255, 212, 0.3);
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        \`;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});`
},
     


    
    
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
            if (formTemplateCodes[templateId]) {
                currentTemplate = formTemplateCodes[templateId];
                
                // Update code content
                htmlCode.querySelector('code').textContent = currentTemplate.html;
                cssCode.querySelector('code').textContent = currentTemplate.css;
                jsCode.querySelector('code').textContent = currentTemplate.js;
                
                // Highlight code syntax (you can add a syntax highlighter library if needed)
                // For now, we'll just display the code
                
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

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

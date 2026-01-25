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

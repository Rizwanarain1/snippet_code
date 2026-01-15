// Add this script before closing body tag
document.addEventListener('DOMContentLoaded', function() {
    // Style Control Functionality
    const styleControls = document.querySelectorAll('.checkbox-demo-control');
    
    styleControls.forEach(control => {
        control.addEventListener('click', () => {
            // Remove active class from all controls
            styleControls.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked control
            control.classList.add('active');
            
            // Get style type
            const style = control.getAttribute('data-style');
            
            // Update preview based on style
            updateCheckboxStyle(style);
            
            // Add click animation
            control.style.transform = 'scale(0.95)';
            setTimeout(() => {
                control.style.transform = '';
            }, 150);
        });
    });
    
    // Update Checkbox Style
    function updateCheckboxStyle(style) {
        // Show feedback based on style
        let message = '';
        switch(style) {
            case 'default':
                message = 'Showing standard checkbox designs';
                highlightCheckboxGroup('.default-group');
                break;
            case 'animated':
                message = 'Showing animated checkbox effects';
                highlightCheckboxGroup('.animated-group');
                break;
            case 'custom':
                message = 'Showing custom checkbox styles';
                highlightCheckboxGroup('.custom-group');
                break;
        }
        
        // Show notification
        showCheckboxNotification(message);
    }
    
    // Highlight Checkbox Group
    function highlightCheckboxGroup(selector) {
        const group = document.querySelector(selector);
        if (group) {
            group.style.animation = 'pulseGroup 0.5s ease-out';
            group.style.borderColor = '#ec4899';
            
            setTimeout(() => {
                group.style.animation = '';
                setTimeout(() => {
                    group.style.borderColor = '';
                }, 1000);
            }, 500);
        }
    }
    
    // Size Controls
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all size buttons
            sizeButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get size
            const size = button.getAttribute('data-size');
            
            // Update checkbox sizes
            updateCheckboxSize(size);
            
            // Show notification
            showCheckboxNotification(`Changed checkbox size to ${size}`);
        });
    });
    
    // Update Checkbox Size
    function updateCheckboxSize(size) {
        const checkboxes = document.querySelectorAll('.checkbox-box, .animated-checkbox, .custom-checkbox');
        
        checkboxes.forEach(checkbox => {
            // Reset to default
            checkbox.style.width = '';
            checkbox.style.height = '';
            checkbox.style.fontSize = '';
            
            // Apply size
            switch(size) {
                case 'small':
                    checkbox.style.width = '16px';
                    checkbox.style.height = '16px';
                    if (checkbox.classList.contains('animated-checkbox') || 
                        checkbox.classList.contains('custom-checkbox')) {
                        checkbox.style.width = '20px';
                        checkbox.style.height = '20px';
                    }
                    break;
                case 'large':
                    checkbox.style.width = '24px';
                    checkbox.style.height = '24px';
                    if (checkbox.classList.contains('animated-checkbox') || 
                        checkbox.classList.contains('custom-checkbox')) {
                        checkbox.style.width = '28px';
                        checkbox.style.height = '28px';
                    }
                    break;
            }
        });
        
        // Update tick sizes
        const ticks = document.querySelectorAll('.animated-tick, .custom-tick');
        ticks.forEach(tick => {
            tick.style.width = '';
            tick.style.height = '';
            
            switch(size) {
                case 'small':
                    tick.style.width = '10px';
                    tick.style.height = '10px';
                    break;
                case 'large':
                    tick.style.width = '16px';
                    tick.style.height = '16px';
                    break;
            }
        });
    }
    
    // Color Controls
    const colorButtons = document.querySelectorAll('.color-btn');
    
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all color buttons
            colorButtons.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get color
            const color = button.getAttribute('data-color');
            
            // Update checkbox colors
            updateCheckboxColor(color);
            
            // Show notification
            showCheckboxNotification(`Changed checkbox theme to ${color}`);
        });
    });
    
    // Update Checkbox Color
    function updateCheckboxColor(color) {
        let colorValue;
        let gradient;
        
        switch(color) {
            case 'pink':
                colorValue = '#ec4899';
                gradient = 'linear-gradient(90deg, #ec4899, #f472b6)';
                break;
            case 'purple':
                colorValue = '#8b5cf6';
                gradient = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
                break;
            case 'blue':
                colorValue = '#3b82f6';
                gradient = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
                break;
            case 'green':
                colorValue = '#10b981';
                gradient = 'linear-gradient(90deg, #10b981, #34d399)';
                break;
        }
        
        // Update CSS variables
        document.documentElement.style.setProperty('--checkbox-color', colorValue);
        document.documentElement.style.setProperty('--checkbox-gradient', gradient);
        
        // Update all checkboxes
        const checkboxes = document.querySelectorAll('.checkbox-box, .animated-checkbox, .custom-checkbox');
        checkboxes.forEach(checkbox => {
            if (checkbox.classList.contains('gradient')) {
                checkbox.style.background = gradient;
            }
        });
        
        // Update checked state colors
        const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked + label .checkbox-box');
        checkedBoxes.forEach(box => {
            box.style.background = colorValue;
            box.style.borderColor = colorValue;
        });
        
        const checkedAnimated = document.querySelectorAll('input[type="checkbox"]:checked + label .animated-checkbox');
        checkedAnimated.forEach(box => {
            box.style.background = colorValue;
            box.style.borderColor = colorValue;
        });
        
        const checkedCustom = document.querySelectorAll('input[type="checkbox"]:checked + label .custom-checkbox.outlined');
        checkedCustom.forEach(box => {
            box.style.borderColor = colorValue;
            box.style.background = `${colorValue}20`;
        });
    }
    
    // Interactive Checkbox Functionality
    const previewCheckboxes = document.querySelectorAll('.preview-checkbox input[type="checkbox"]');
    
    previewCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            
            if (this.checked) {
                // Add checked animation
                label.style.animation = 'checkBounce 0.3s ease';
                setTimeout(() => {
                    label.style.animation = '';
                }, 300);
                
                // Show notification
                const checkboxLabel = label.querySelector('.checkbox-label').textContent;
                showCheckboxNotification(`Checked: ${checkboxLabel}`);
            } else {
                // Add unchecked animation
                label.style.animation = 'uncheckFade 0.3s ease';
                setTimeout(() => {
                    label.style.animation = '';
                }, 300);
            }
        });
    });
    
    // Copy Code Button
    const checkboxCopyBtn = document.querySelector('.checkbox-copy-code-btn');
    if (checkboxCopyBtn) {
        checkboxCopyBtn.addEventListener('click', () => {
            const originalText = checkboxCopyBtn.innerHTML;
            
            // Update button state
            checkboxCopyBtn.innerHTML = '<i class="fas fa-check"></i><span>Code Copied!</span>';
            checkboxCopyBtn.style.background = 'linear-gradient(90deg, #be185d, #9d174d)';
            
            // Simulate copy action
            const codeToCopy = `/* Modern Checkbox Component */
.checkbox-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.checkbox-item input[type="checkbox"] {
    display: none;
}

.checkbox-item label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    user-select: none;
}

.checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;
}

.checkbox-custom::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: white;
    font-size: 14px;
    font-weight: bold;
    transition: transform 0.3s ease;
}

.checkbox-item input[type="checkbox"]:checked + label .checkbox-custom {
    background: #ec4899;
    border-color: #ec4899;
}

.checkbox-item input[type="checkbox"]:checked + label .checkbox-custom::after {
    transform: translate(-50%, -50%) scale(1);
}

.checkbox-label {
    color: #cbd5e1;
    font-weight: 500;
    transition: color 0.3s ease;
}

.checkbox-item input[type="checkbox"]:checked + label .checkbox-label {
    color: white;
}

/* Animated version */
.checkbox-animated {
    animation: checkboxBounce 0.5s ease;
}

@keyframes checkboxBounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.9); }
}

/* Full code available at SnippetCode */`;
            
            navigator.clipboard.writeText(codeToCopy)
                .then(() => {
                    console.log('Checkbox code copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy code:', err);
                });
            
            // Reset button after 2 seconds
            setTimeout(() => {
                checkboxCopyBtn.innerHTML = originalText;
                checkboxCopyBtn.style.background = 'linear-gradient(90deg, #ec4899, #f472b6)';
            }, 2000);
            
            // Show success notification
            showCheckboxNotification('Checkbox code copied to clipboard!');
        });
    }
    
    // Component Card Hover Effects
    const checkboxComponentCards = document.querySelectorAll('.checkbox-component-card');
    
    checkboxComponentCards.forEach(card => {
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
    
    // Notification Function
    function showCheckboxNotification(message) {
        // Remove existing notification
        const existingNotification = document.querySelector('.checkbox-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'checkbox-notification';
        notification.innerHTML = `
            <span>${message}</span>
            <button class="close-checkbox-notification">×</button>
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
        const closeBtn = notification.querySelector('.close-checkbox-notification');
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
        
        @keyframes pulseGroup {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        @keyframes checkBounce {
            0% { transform: translateX(0); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0); }
        }
        
        @keyframes uncheckFade {
            0% { opacity: 1; }
            50% { opacity: 0.7; }
            100% { opacity: 1; }
        }
        
        .close-checkbox-notification {
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        
        .close-checkbox-notification:hover {
            color: white;
        }
        
        /* CSS Variables for dynamic colors */
        :root {
            --checkbox-color: #ec4899;
            --checkbox-gradient: linear-gradient(90deg, #ec4899, #f472b6);
        }
    `;
    document.head.appendChild(style);
});


























// Checkbox templates data
const templateCodes = {
    // ====================================================================
    // TEMPLATE 1:  Modern Checkbox 
    // ====================================================================
    checkbox1: {
        name: "Modern Checkbox",
        category: "modern",
        html: `<div class="checkbox-container">
    <label class="checkbox-modern">
        <input type="checkbox">
        <span class="checkmark"></span>
        Option 1
    </label>
    <label class="checkbox-modern">
        <input type="checkbox" checked>
        <span class="checkmark"></span>
        Option 2
    </label>
    <label class="checkbox-modern">
        <input type="checkbox">
        <span class="checkmark"></span>
        Option 3
    </label>
</div>`,
        css: `.checkbox-modern {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 10px;
}

.checkbox-modern input {
    display: none;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: white;
}

.checkbox-modern input:checked + .checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
    animation: checkmarkPop 0.3s ease;
}

.checkbox-modern input:checked + .checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
}

@keyframes checkmarkPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`,
        js: `// Modern checkbox functionality
document.querySelectorAll('.checkbox-modern input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add your custom functionality here
        console.log('Checkbox changed:', this.checked);
    });
});`
    },
    // ====================================================================
    // TEMPLATE 2: Gradient Checkbox
    // ====================================================================
    checkbox2: {
        name: "Gradient Checkbox",
        category: "modern",
        html: `<div class="checkbox-container">
    <label class="checkbox-gradient">
        <input type="checkbox">
        <span class="gradient-checkmark"></span>
        Gradient Option 1
    </label>
    <label class="checkbox-gradient">
        <input type="checkbox" checked>
        <span class="gradient-checkmark"></span>
        Gradient Option 2
    </label>
</div>`,
        css: `.checkbox-gradient {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 10px;
}

.checkbox-gradient input {
    display: none;
}

.gradient-checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}

.checkbox-gradient input:checked + .gradient-checkmark {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-color: transparent;
}

.checkbox-gradient input:checked + .gradient-checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
}`,
        js: `// Gradient checkbox functionality
document.querySelectorAll('.checkbox-gradient input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add gradient specific functionality
        console.log('Gradient checkbox changed:', this.checked);
    });
});`
    },
    // ====================================================================
// TEMPLATE 3: 3D Flip Checkbox
// ====================================================================
checkbox3: {
    name: "3D Flip Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-flip">
        <input type="checkbox">
        <span class="flip-box">
            <span class="flip-front">✗</span>
            <span class="flip-back">✓</span>
        </span>
        3D Flip Option
    </label>
    <label class="checkbox-3d-flip">
        <input type="checkbox" checked>
        <span class="flip-box">
            <span class="flip-front">✗</span>
            <span class="flip-back">✓</span>
        </span>
        3D Flip Checked
    </label>
</div>`,
    css: `.checkbox-3d-flip {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-flip input {
    display: none;
}

.flip-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    perspective: 1000px;
}

.flip-front, .flip-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-size: 12px;
    font-weight: bold;
}

.flip-front {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    transform: rotateY(0deg);
}

.flip-back {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    transform: rotateY(180deg);
}

.checkbox-3d-flip input:checked + .flip-box {
    transform: rotateY(180deg);
}`,
    js: `// 3D Flip checkbox functionality
document.querySelectorAll('.checkbox-3d-flip input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Flip checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 4: 3D Swing Checkbox
// ====================================================================
checkbox4: {
    name: "3D Swing Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-swing">
        <input type="checkbox">
        <span class="swing-box">
            <span class="swing-icon">→</span>
        </span>
        Swing Animation
    </label>
    <label class="checkbox-3d-swing">
        <input type="checkbox" checked>
        <span class="swing-box">
            <span class="swing-icon">→</span>
        </span>
        Swing Checked
    </label>
</div>`,
    css: `.checkbox-3d-swing {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-swing input {
    display: none;
}

.swing-box {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 15px rgba(139, 92, 246, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.swing-icon {
    color: white;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(0deg);
}

.checkbox-3d-swing input:checked + .swing-box {
    transform: rotateY(180deg) rotateZ(10deg);
    background: linear-gradient(135deg, #10b981, #059669);
}

.checkbox-3d-swing input:checked + .swing-box .swing-icon {
    transform: rotate(-180deg);
    content: '✓';
}`,
    js: `// 3D Swing checkbox functionality
document.querySelectorAll('.checkbox-3d-swing input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Swing checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 5: 3D Bounce Checkbox
// ====================================================================
checkbox5: {
    name: "3D Bounce Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-bounce">
        <input type="checkbox">
        <span class="bounce-box">
            <span class="bounce-inner"></span>
        </span>
        Bounce Effect
    </label>
    <label class="checkbox-3d-bounce">
        <input type="checkbox" checked>
        <span class="bounce-box">
            <span class="bounce-inner"></span>
        </span>
        Bounce Checked
    </label>
</div>`,
    css: `.checkbox-3d-bounce {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-bounce input {
    display: none;
}

.bounce-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.4s ease;
    background: white;
}

.bounce-inner {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 4px;
    transform: scale(0) rotate(0deg);
    transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);
}

.checkbox-3d-bounce input:checked + .bounce-box {
    border-color: #7c3aed;
    transform: rotateY(180deg) scale(1.1);
}

.checkbox-3d-bounce input:checked + .bounce-box .bounce-inner {
    transform: scale(1) rotate(180deg);
    animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes bounceIn {
    0% { transform: scale(0) rotate(0deg); }
    50% { transform: scale(1.2) rotate(90deg); }
    100% { transform: scale(1) rotate(180deg); }
}`,
    js: `// 3D Bounce checkbox functionality
document.querySelectorAll('.checkbox-3d-bounce input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Bounce checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 6: 3D Rotate Checkbox
// ====================================================================
checkbox6: {
    name: "3D Rotate Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-rotate">
        <input type="checkbox">
        <span class="rotate-box">
            <span class="rotate-icon">○</span>
        </span>
        Rotate 3D
    </label>
    <label class="checkbox-3d-rotate">
        <input type="checkbox" checked>
        <span class="rotate-box">
            <span class="rotate-icon">○</span>
        </span>
        Rotate Checked
    </label>
</div>`,
    css: `.checkbox-3d-rotate {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-rotate input {
    display: none;
}

.rotate-box {
    width: 28px;
    height: 28px;
    margin-right: 12px;
    background: linear-gradient(135deg, #f59e0b, #d97706);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 20px rgba(245, 158, 11, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.rotate-icon {
    color: white;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.8s ease;
}

.checkbox-3d-rotate input:checked + .rotate-box {
    transform: rotate3d(1, 1, 0, 360deg) scale(1.1);
    background: linear-gradient(135deg, #10b981, #059669);
}

.checkbox-3d-rotate input:checked + .rotate-box .rotate-icon {
    transform: scale(1.2);
    content: '●';
}`,
    js: `// 3D Rotate checkbox functionality
document.querySelectorAll('.checkbox-3d-rotate input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Rotate checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 7: 3D Cube Checkbox
// ====================================================================
checkbox7: {
    name: "3D Cube Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d-cube">
        <input type="checkbox">
        <span class="cube">
            <span class="cube-face cube-front">+</span>
            <span class="cube-face cube-back">✓</span>
        </span>
        Cube 3D
    </label>
    <label class="checkbox-3d-cube">
        <input type="checkbox" checked>
        <span class="cube">
            <span class="cube-face cube-front">+</span>
            <span class="cube-face cube-back">✓</span>
        </span>
        Cube Checked
    </label>
</div>`,
    css: `.checkbox-3d-cube {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d-cube input {
    display: none;
}

.cube {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotateX(0deg) rotateY(0deg);
}

.cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    backface-visibility: hidden;
    border-radius: 4px;
}

.cube-front {
    background: linear-gradient(135deg, #6b7280, #4b5563);
    color: white;
    transform: translateZ(12px);
}

.cube-back {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    transform: rotateY(180deg) translateZ(12px);
}

.checkbox-3d-cube input:checked + .cube {
    transform: rotateY(180deg);
    animation: cubeRotate 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes cubeRotate {
    0% { transform: rotateY(0deg) scale(1); }
    50% { transform: rotateY(90deg) scale(1.1); }
    100% { transform: rotateY(180deg) scale(1); }
}`,
    js: `// 3D Cube checkbox functionality
document.querySelectorAll('.checkbox-3d-cube input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('3D Cube checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 8: Neumorphism Checkbox
// ====================================================================
checkbox8: {
    name: "Neumorphism Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-neumorphism">
        <input type="checkbox">
        <span class="neuo-box"></span>
        Neumorphism Style
    </label>
    <label class="checkbox-neumorphism">
        <input type="checkbox" checked>
        <span class="neuo-box"></span>
        Neumorphism Checked
    </label>
</div>`,
    css: `.checkbox-neumorphism {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-neumorphism input {
    display: none;
}

.neuo-box {
    width: 22px;
    height: 22px;
    margin-right: 12px;
    border-radius: 8px;
    background: #f0f0f0;
    box-shadow: 
        5px 5px 10px #d9d9d9,
        -5px -5px 10px #ffffff,
        inset 0 0 0 transparent;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
}

.checkbox-neumorphism input:checked + .neuo-box {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    box-shadow: 
        0 0 0 transparent,
        inset 3px 3px 5px rgba(0, 0, 0, 0.1),
        inset -3px -3px 5px rgba(255, 255, 255, 0.1);
    animation: neuoPress 0.4s ease;
}

.checkbox-neumorphism input:checked + .neuo-box::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
}

@keyframes neuoPress {
    0% { transform: scale(1); }
    50% { transform: scale(0.9); }
    100% { transform: scale(1); }
}`,
    js: `// Neumorphism checkbox functionality
document.querySelectorAll('.checkbox-neumorphism input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Neumorphism checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 9: Glow Pulse Checkbox
// ====================================================================
checkbox9: {
    name: "Glow Pulse Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-glow">
        <input type="checkbox">
        <span class="glow-box">
            <span class="glow-core"></span>
        </span>
        Glow Pulse Effect
    </label>
    <label class="checkbox-glow">
        <input type="checkbox" checked>
        <span class="glow-box">
            <span class="glow-core"></span>
        </span>
        Glow Checked
    </label>
</div>`,
    css: `.checkbox-glow {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-glow input {
    display: none;
}

.glow-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    position: relative;
    transition: all 0.4s ease;
    background: white;
    overflow: hidden;
}

.glow-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: radial-gradient(circle, #7c3aed, transparent);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
}

.checkbox-glow input:checked + .glow-box {
    border-color: #7c3aed;
    box-shadow: 
        0 0 20px rgba(124, 58, 237, 0.4),
        0 0 40px rgba(124, 58, 237, 0.2);
    animation: glowPulse 2s infinite;
}

.checkbox-glow input:checked + .glow-box .glow-core {
    width: 200%;
    height: 200%;
    opacity: 1;
    animation: coreGlow 2s infinite;
}

@keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2); }
    50% { box-shadow: 0 0 30px rgba(124, 58, 237, 0.6), 0 0 60px rgba(124, 58, 237, 0.3); }
}

@keyframes coreGlow {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
}`,
    js: `// Glow Pulse checkbox functionality
document.querySelectorAll('.checkbox-glow input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Glow Pulse checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 10: Morphing Checkbox
// ====================================================================
checkbox10: {
    name: "Morphing Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-morph">
        <input type="checkbox">
        <span class="morph-box">
            <span class="morph-line-1"></span>
            <span class="morph-line-2"></span>
        </span>
        Morphing Animation
    </label>
    <label class="checkbox-morph">
        <input type="checkbox" checked>
        <span class="morph-box">
            <span class="morph-line-1"></span>
            <span class="morph-line-2"></span>
        </span>
        Morphing Checked
    </label>
</div>`,
    css: `.checkbox-morph {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-morph input {
    display: none;
}

.morph-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: white;
    overflow: hidden;
}

.morph-line-1, .morph-line-2 {
    position: absolute;
    background: #7c3aed;
    border-radius: 2px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.morph-line-1 {
    width: 0;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
}

.morph-line-2 {
    width: 0;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
}

.checkbox-morph input:checked + .morph-box {
    border-color: #7c3aed;
    background: #7c3aed;
    transform: rotate(180deg);
}

.checkbox-morph input:checked + .morph-box .morph-line-1 {
    width: 12px;
    transform: translate(-50%, -50%) rotate(45deg);
    background: white;
}

.checkbox-morph input:checked + .morph-box .morph-line-2 {
    width: 6px;
    transform: translate(-50%, -50%) rotate(-45deg);
    background: white;
}`,
    js: `// Morphing checkbox functionality
document.querySelectorAll('.checkbox-morph input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Morphing checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 11: Liquid Fill Checkbox
// ====================================================================
checkbox11: {
    name: "Liquid Fill Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-liquid">
        <input type="checkbox">
        <span class="liquid-box">
            <span class="liquid-fill"></span>
            <span class="liquid-icon">✓</span>
        </span>
        Liquid Fill Effect
    </label>
    <label class="checkbox-liquid">
        <input type="checkbox" checked>
        <span class="liquid-box">
            <span class="liquid-fill"></span>
            <span class="liquid-icon">✓</span>
        </span>
        Liquid Checked
    </label>
</div>`,
    css: `.checkbox-liquid {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-liquid input {
    display: none;
}

.liquid-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    background: white;
    transition: border-color 0.3s ease;
}

.liquid-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-radius: 4px;
}

.liquid-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: opacity 0.3s ease 0.2s;
    z-index: 2;
}

.checkbox-liquid input:checked + .liquid-box {
    border-color: #7c3aed;
}

.checkbox-liquid input:checked + .liquid-box .liquid-fill {
    height: 100%;
    animation: liquidWave 0.8s ease;
}

.checkbox-liquid input:checked + .liquid-box .liquid-icon {
    opacity: 1;
}

@keyframes liquidWave {
    0% { height: 0%; border-radius: 50%; }
    50% { border-radius: 30%; }
    100% { height: 100%; border-radius: 4px; }
}`,
    js: `// Liquid Fill checkbox functionality
document.querySelectorAll('.checkbox-liquid input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Liquid Fill checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 12: Particle Explosion Checkbox
// ====================================================================
checkbox12: {
    name: "Particle Explosion Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-particle">
        <input type="checkbox">
        <span class="particle-box">
            <span class="particle-core"></span>
            <span class="particles">
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
            </span>
        </span>
        Particle Explosion
    </label>
    <label class="checkbox-particle">
        <input type="checkbox" checked>
        <span class="particle-box">
            <span class="particle-core"></span>
            <span class="particles">
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
                <span class="particle"></span>
            </span>
        </span>
        Particle Checked
    </label>
</div>`,
    css: `.checkbox-particle {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-particle input {
    display: none;
}

.particle-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 6px;
    position: relative;
    background: white;
    transition: all 0.4s ease;
    overflow: visible;
}

.particle-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: #7c3aed;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s ease;
}

.particles {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
}

.particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #7c3aed;
    border-radius: 50%;
    opacity: 0;
}

.checkbox-particle input:checked + .particle-box {
    border-color: #7c3aed;
    background: #7c3aed;
}

.checkbox-particle input:checked + .particle-box .particle-core {
    transform: translate(-50%, -50%) scale(1);
    background: white;
    animation: corePulse 0.6s ease;
}

.checkbox-particle input:checked + .particle-box .particle:nth-child(1) { animation: particleExplode 0.8s ease 0.1s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(2) { animation: particleExplode 0.8s ease 0.2s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(3) { animation: particleExplode 0.8s ease 0.3s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(4) { animation: particleExplode 0.8s ease 0.4s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(5) { animation: particleExplode 0.8s ease 0.1s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(6) { animation: particleExplode 0.8s ease 0.2s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(7) { animation: particleExplode 0.8s ease 0.3s; }
.checkbox-particle input:checked + .particle-box .particle:nth-child(8) { animation: particleExplode 0.8s ease 0.4s; }

@keyframes corePulse {
    0% { transform: translate(-50%, -50%) scale(0); }
    50% { transform: translate(-50%, -50%) scale(1.5); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

@keyframes particleExplode {
    0% { 
        transform: translate(0, 0) scale(1);
        opacity: 1;
    }
    100% { 
        transform: translate(
            calc(cos(var(--angle)) * 20px),
            calc(sin(var(--angle)) * 20px)
        ) scale(0);
        opacity: 0;
    }
}

.particle:nth-child(1) { --angle: 0deg; }
.particle:nth-child(2) { --angle: 45deg; }
.particle:nth-child(3) { --angle: 90deg; }
.particle:nth-child(4) { --angle: 135deg; }
.particle:nth-child(5) { --angle: 180deg; }
.particle:nth-child(6) { --angle: 225deg; }
.particle:nth-child(7) { --angle: 270deg; }
.particle:nth-child(8) { --angle: 315deg; }`,
    js: `// Particle Explosion checkbox functionality
document.querySelectorAll('.checkbox-particle input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Particle Explosion checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 13: Toggle Switch Group
// ====================================================================
checkbox13: {
    name: "Toggle Switch Group",
    category: "modern",
    html: `<div class="toggle-group">
    <h4>Notification Settings</h4>
    <label class="toggle-item">
        <span class="toggle-label">Email Notifications</span>
        <input type="checkbox">
        <span class="toggle-slider"></span>
    </label>
    <label class="toggle-item">
        <span class="toggle-label">Push Notifications</span>
        <input type="checkbox" checked>
        <span class="toggle-slider"></span>
    </label>
    <label class="toggle-item">
        <span class="toggle-label">SMS Alerts</span>
        <input type="checkbox">
        <span class="toggle-slider"></span>
    </label>
    <label class="toggle-item">
        <span class="toggle-label">Desktop Notifications</span>
        <input type="checkbox" checked>
        <span class="toggle-slider"></span>
    </label>
</div>`,
    css: `.toggle-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.toggle-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.toggle-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
    cursor: pointer;
}

.toggle-item:last-child {
    border-bottom: none;
}

.toggle-label {
    font-size: 14px;
    color: #475569;
    font-weight: 500;
}

.toggle-item input {
    display: none;
}

.toggle-slider {
    width: 44px;
    height: 24px;
    background: #cbd5e1;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s ease;
}

.toggle-slider::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-item input:checked + .toggle-slider {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
}

.toggle-item input:checked + .toggle-slider::before {
    transform: translateX(20px);
}`,
    js: `// Toggle switch functionality
document.querySelectorAll('.toggle-item input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        const label = this.closest('.toggle-item').querySelector('.toggle-label').textContent;
        console.log(\`\${label}: \${this.checked ? 'ON' : 'OFF'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 14: Radio Button Group
// ====================================================================
checkbox14: {
    name: "Radio Button Group",
    category: "modern",
    html: `<div class="radio-group">
    <h4>Select Payment Method</h4>
    <label class="radio-item">
        <input type="radio" name="payment" value="credit-card">
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">Credit Card</span>
            <span class="radio-desc">Pay with your credit card</span>
        </span>
    </label>
    <label class="radio-item">
        <input type="radio" name="payment" value="paypal" checked>
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">PayPal</span>
            <span class="radio-desc">Secure online payment</span>
        </span>
    </label>
    <label class="radio-item">
        <input type="radio" name="payment" value="bank-transfer">
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">Bank Transfer</span>
            <span class="radio-desc">Direct bank transfer</span>
        </span>
    </label>
    <label class="radio-item">
        <input type="radio" name="payment" value="crypto">
        <span class="radio-custom"></span>
        <span class="radio-content">
            <span class="radio-title">Cryptocurrency</span>
            <span class="radio-desc">Pay with Bitcoin/ETH</span>
        </span>
    </label>
</div>`,
    css: `.radio-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.radio-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.radio-item {
    display: flex;
    align-items: flex-start;
    padding: 15px;
    border: 2px solid #f1f5f9;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.radio-item:last-child {
    margin-bottom: 0;
}

.radio-item:hover {
    border-color: #cbd5e1;
}

.radio-item input {
    display: none;
}

.radio-custom {
    width: 20px;
    height: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    margin-right: 12px;
    margin-top: 2px;
    position: relative;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.radio-content {
    flex: 1;
}

.radio-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
}

.radio-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.radio-item input:checked + .radio-custom {
    border-color: #7c3aed;
    background: #7c3aed;
}

.radio-item input:checked + .radio-custom::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.radio-item input:checked ~ .radio-content .radio-title {
    color: #7c3aed;
}

.radio-item input:checked {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.05);
}`,
    js: `// Radio button functionality
document.querySelectorAll('.radio-item input').forEach(radio => {
    radio.addEventListener('change', function() {
        console.log(\`Selected payment method: \${this.value}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 15: Checkbox Card Group
// ====================================================================
checkbox15: {
    name: "Checkbox Card Group",
    category: "modern",
    html: `<div class="card-group">
    <h4>Select Features</h4>
    <label class="card-item">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">🚀</div>
            <div class="card-text">
                <span class="card-title">Premium Support</span>
                <span class="card-desc">24/7 priority support</span>
            </div>
        </div>
    </label>
    <label class="card-item">
        <input type="checkbox" checked>
        <div class="card-content">
            <div class="card-icon">🛡️</div>
            <div class="card-text">
                <span class="card-title">Advanced Security</span>
                <span class="card-desc">Enhanced protection</span>
            </div>
        </div>
    </label>
    <label class="card-item">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">📊</div>
            <div class="card-text">
                <span class="card-title">Analytics Dashboard</span>
                <span class="card-desc">Detailed insights</span>
            </div>
        </div>
    </label>
    <label class="card-item">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">🌐</div>
            <div class="card-text">
                <span class="card-title">Multi-language</span>
                <span class="card-desc">15+ languages</span>
            </div>
        </div>
    </label>
</div>`,
    css: `.card-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.card-item {
    display: block;
    border: 2px solid #f1f5f9;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
}

.card-item:last-child {
    margin-bottom: 0;
}

.card-item:hover {
    border-color: #cbd5e1;
    transform: translateY(-2px);
}

.card-item input {
    display: none;
}

.card-content {
    display: flex;
    align-items: center;
    padding: 15px;
}

.card-icon {
    font-size: 24px;
    margin-right: 15px;
    transition: all 0.3s ease;
}

.card-text {
    flex: 1;
}

.card-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
}

.card-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.card-item input:checked + .card-content {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
}

.card-item input:checked + .card-content .card-icon {
    transform: scale(1.1);
}

.card-item input:checked + .card-content .card-title,
.card-item input:checked + .card-content .card-desc {
    color: white;
}`,
    js: `// Card checkbox functionality
document.querySelectorAll('.card-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const title = this.closest('.card-item').querySelector('.card-title').textContent;
        console.log(\`\${title}: \${this.checked ? 'Selected' : 'Deselected'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 16: Multi-step Checkbox
// ====================================================================
checkbox16: {
    name: "Multi-step Checkbox",
    category: "animated",
    html: `<div class="multi-step-group">
    <h4>Setup Progress</h4>
    <label class="step-item">
        <input type="checkbox">
        <span class="step-number">1</span>
        <span class="step-content">
            <span class="step-title">Account Created</span>
            <span class="step-desc">Basic information setup</span>
        </span>
        <span class="step-check">✓</span>
    </label>
    <label class="step-item">
        <input type="checkbox" checked>
        <span class="step-number">2</span>
        <span class="step-content">
            <span class="step-title">Profile Completed</span>
            <span class="step-desc">Personal details added</span>
        </span>
        <span class="step-check">✓</span>
    </label>
    <label class="step-item">
        <input type="checkbox">
        <span class="step-number">3</span>
        <span class="step-content">
            <span class="step-title">Verification Done</span>
            <span class="step-desc">Email & phone verified</span>
        </span>
        <span class="step-check">✓</span>
    </label>
    <label class="step-item">
        <input type="checkbox">
        <span class="step-number">4</span>
        <span class="step-content">
            <span class="step-title">Preferences Set</span>
            <span class="step-desc">Custom settings applied</span>
        </span>
        <span class="step-check">✓</span>
    </label>
</div>`,
    css: `.multi-step-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.multi-step-group h4 {
    margin: 0 0 20px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.step-item {
    display: flex;
    align-items: center;
    padding: 15px;
    border: 2px solid #f1f5f9;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.step-item:last-child {
    margin-bottom: 0;
}

.step-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transition: width 0.3s ease;
    z-index: 1;
}

.step-item input {
    display: none;
}

.step-number {
    width: 30px;
    height: 30px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    margin-right: 15px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.step-content {
    flex: 1;
    position: relative;
    z-index: 2;
}

.step-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
    transition: all 0.3s ease;
}

.step-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
    transition: all 0.3s ease;
}

.step-check {
    opacity: 0;
    color: white;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
}

.step-item input:checked + .step-number {
    background: white;
    border-color: white;
    color: #7c3aed;
    transform: scale(1.1);
}

.step-item input:checked ~ .step-content .step-title,
.step-item input:checked ~ .step-content .step-desc {
    color: white;
}

.step-item input:checked ~ .step-check {
    opacity: 1;
    transform: scale(1.2);
}

.step-item input:checked::before {
    width: 100%;
}`,
    js: `// Multi-step checkbox functionality
document.querySelectorAll('.step-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const step = this.closest('.step-item').querySelector('.step-title').textContent;
        console.log(\`\${step}: \${this.checked ? 'Completed' : 'Incomplete'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 17: Filter Tag Group
// ====================================================================
checkbox17: {
    name: "Filter Tag Group",
    category: "modern",
    html: `<div class="filter-group">
    <h4>Filter by Category</h4>
    <div class="filter-tags">
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Technology</span>
                <span class="tag-count">12</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox" checked>
            <span class="tag-content">
                <span class="tag-text">Design</span>
                <span class="tag-count">8</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Marketing</span>
                <span class="tag-count">15</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Business</span>
                <span class="tag-count">6</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox" checked>
            <span class="tag-content">
                <span class="tag-text">Development</span>
                <span class="tag-count">20</span>
            </span>
        </label>
        <label class="filter-tag">
            <input type="checkbox">
            <span class="tag-content">
                <span class="tag-text">Finance</span>
                <span class="tag-count">9</span>
            </span>
        </label>
    </div>
</div>`,
    css: `.filter-group {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.filter-group h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.filter-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.filter-tag {
    cursor: pointer;
}

.filter-tag input {
    display: none;
}

.tag-content {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 20px;
    background: #f8fafc;
    transition: all 0.3s ease;
    font-size: 13px;
    font-weight: 500;
}

.tag-text {
    color: #475569;
    margin-right: 8px;
    transition: all 0.3s ease;
}

.tag-count {
    background: #e2e8f0;
    color: #64748b;
    padding: 2px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.filter-tag input:checked + .tag-content {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-color: transparent;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}

.filter-tag input:checked + .tag-content .tag-text {
    color: white;
}

.filter-tag input:checked + .tag-content .tag-count {
    background: rgba(255, 255, 255, 0.2);
    color: white;
}

.filter-tag:hover .tag-content {
    border-color: #cbd5e1;
    transform: translateY(-1px);
}`,
    js: `// Filter tag functionality
document.querySelectorAll('.filter-tag input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const tag = this.closest('.filter-tag').querySelector('.tag-text').textContent;
        console.log(\`\${tag} filter: \${this.checked ? 'Applied' : 'Removed'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 18: Animated Lock Toggle
// ====================================================================
checkbox18: {
    name: "Animated Lock Toggle",
    category: "animated",
    html: `<div class="lock-container">
    <input id="lockToggle" type="checkbox">
    <label class="btn-lock" for="lockToggle">
        <svg width="36" height="40" viewBox="0 0 36 40">
            <path class="lockb" d="M27 27C27 34.1797 21.1797 40 14 40C6.8203 40 1 34.1797 1 27C1 19.8203 6.8203 14 14 14C21.1797 14 27 19.8203 27 27ZM15.6298 26.5191C16.4544 25.9845 17 25.056 17 24C17 22.3431 15.6569 21 14 21C12.3431 21 11 22.3431 11 24C11 25.056 11.5456 25.9845 12.3702 26.5191L11 32H17L15.6298 26.5191Z"></path>
            <path class="lock" d="M6 21V10C6 5.58172 9.58172 2 14 2V2C18.4183 2 22 5.58172 22 10V21"></path>
            <path class="bling" d="M29 20L31 22"></path>
            <path class="bling" d="M31.5 15H34.5"></path>
            <path class="bling" d="M29 10L31 8"></path>
        </svg>
    </label>
    <span class="lock-status">Locked</span>
</div>`,
    css: `.lock-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.btn-lock {
    display: inline-block;
    background: #ff5b5b;
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    padding: 12px 0 0 18px;
    border-radius: 50%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: all 0.3s ease;
}

.btn-lock svg {
    fill: none;
    transform: translate3d(0, 0, 0);
}

.btn-lock svg .bling {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-dasharray: 3;
    stroke-dashoffset: 15;
    transition: all 0.3s ease;
}

.btn-lock svg .lock {
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 36;
    transition: all 0.4s ease;
}

.btn-lock svg .lockb {
    fill: #fff;
    fill-rule: evenodd;
    clip-rule: evenodd;
    transform: rotate(8deg);
    transform-origin: 14px 20px;
    transition: all 0.2s ease;
}

#lockToggle {
    display: none;
}

.lock-status {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    transition: all 0.3s ease;
}

#lockToggle:checked + .btn-lock {
    background: #20cca5;
}

#lockToggle:checked + .btn-lock svg {
    opacity: 1;
}

#lockToggle:checked + .btn-lock svg .bling {
    animation: bling6132 0.3s linear forwards;
    animation-delay: 0.2s;
}

#lockToggle:checked + .btn-lock svg .lock {
    stroke-dasharray: 48;
    animation: locked 0.3s linear forwards;
}

#lockToggle:checked + .btn-lock svg .lockb {
    transform: rotate(0);
    transform-origin: 14px 22px;
}

#lockToggle:checked ~ .lock-status {
    color: #20cca5;
    content: 'Unlocked';
}

@keyframes bling6132 {
    50% {
        stroke-dasharray: 3;
        stroke-dashoffset: 12;
    }
    100% {
        stroke-dasharray: 3;
        stroke-dashoffset: 9;
    }
}

@keyframes locked {
    50% {
        transform: translateY(1px);
    }
}`,
    js: `// Lock toggle functionality
document.getElementById('lockToggle')?.addEventListener('change', function() {
    const status = document.querySelector('.lock-status');
    if (status) {
        status.textContent = this.checked ? 'Unlocked' : 'Locked';
    }
    console.log('Lock status:', this.checked ? 'Unlocked' : 'Locked');
});`
},
// ====================================================================
// TEMPLATE 19: Heart Like Toggle
// ====================================================================
checkbox19: {
    name: "Heart Like Toggle",
    category: "animated",
    html: `<div class="heart-container">
    <input id="heartToggle" type="checkbox">
    <label class="heart-btn" for="heartToggle">
        <svg class="heart-svg" viewBox="0 0 24 24">
            <path class="heart-outline" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            <path class="heart-filled" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z"/>
        </svg>
    </label>
    <span class="heart-count">0</span>
</div>`,
    css: `.heart-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.heart-btn {
    width: 60px;
    height: 60px;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.heart-svg {
    width: 32px;
    height: 32px;
}

.heart-outline {
    fill: #94a3b8;
    transition: all 0.3s ease;
}

.heart-filled {
    fill: #ef4444;
    transform: scale(0);
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.heart-count {
    font-size: 14px;
    font-weight: 600;
    color: #64748b;
}

#heartToggle {
    display: none;
}

#heartToggle:checked + .heart-btn {
    background: rgba(239, 68, 68, 0.1);
}

#heartToggle:checked + .heart-btn .heart-outline {
    fill: transparent;
}

#heartToggle:checked + .heart-btn .heart-filled {
    transform: scale(1);
    animation: heartBeat 0.6s ease;
}

@keyframes heartBeat {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`,
    js: `// Heart like functionality
let likeCount = 0;
document.getElementById('heartToggle')?.addEventListener('change', function() {
    const countElement = document.querySelector('.heart-count');
    if (countElement) {
        likeCount = this.checked ? likeCount + 1 : Math.max(0, likeCount - 1);
        countElement.textContent = likeCount;
    }
    console.log('Liked:', this.checked);
});`
},
// ====================================================================
// TEMPLATE 20: Star Rating
// ====================================================================
checkbox20: {
    name: "Star Rating",
    category: "modern",
    html: `<div class="star-rating">
    <h4>Rate this product</h4>
    <div class="stars">
        <input type="radio" id="star5" name="rating" value="5">
        <label for="star5">★</label>
        <input type="radio" id="star4" name="rating" value="4">
        <label for="star4">★</label>
        <input type="radio" id="star3" name="rating" value="3">
        <label for="star3">★</label>
        <input type="radio" id="star2" name="rating" value="2">
        <label for="star2">★</label>
        <input type="radio" id="star1" name="rating" value="1">
        <label for="star1">★</label>
    </div>
    <div class="rating-text">Select rating</div>
</div>`,
    css: `.star-rating {
    text-align: center;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.star-rating h4 {
    margin: 0 0 15px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.stars {
    direction: rtl;
    display: inline-block;
}

.stars input {
    display: none;
}

.stars label {
    color: #cbd5e1;
    font-size: 40px;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.stars label:hover,
.stars label:hover ~ label {
    color: #fbbf24;
}

.stars input:checked ~ label {
    color: #fbbf24;
}

.rating-text {
    margin-top: 10px;
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
    transition: all 0.3s ease;
}

.stars input:checked + label ~ .rating-text {
    color: #f59e0b;
}`,
    js: `// Star rating functionality
document.querySelectorAll('.stars input').forEach(star => {
    star.addEventListener('change', function() {
        const ratingText = document.querySelector('.rating-text');
        const ratings = {
            '1': 'Poor',
            '2': 'Fair',
            '3': 'Good',
            '4': 'Very Good',
            '5': 'Excellent'
        };
        if (ratingText) {
            ratingText.textContent = ratings[this.value] || 'Select rating';
        }
        console.log('Rating:', this.value + ' stars');
    });
});`
},
// ====================================================================
// TEMPLATE 21: Slider Toggle
// ====================================================================
checkbox21: {
    name: "Slider Toggle",
    category: "animated",
    html: `<div class="slider-toggle">
    <input id="sliderSwitch" type="checkbox">
    <label class="slider-label" for="sliderSwitch">
        <span class="slider-track">
            <span class="slider-thumb"></span>
        </span>
        <span class="slider-icons">
            <span class="icon-off">🌙</span>
            <span class="icon-on">☀️</span>
        </span>
    </label>
    <span class="slider-text">Dark Mode</span>
</div>`,
    css: `.slider-toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.slider-label {
    position: relative;
    display: block;
    width: 80px;
    height: 40px;
    cursor: pointer;
}

.slider-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #475569, #1e293b);
    border-radius: 20px;
    transition: all 0.4s ease;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
}

.slider-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 2;
}

.slider-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    z-index: 1;
}

.icon-off, .icon-on {
    font-size: 18px;
    transition: all 0.3s ease;
}

.icon-off {
    opacity: 1;
}

.icon-on {
    opacity: 0.5;
}

.slider-text {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    transition: all 0.3s ease;
}

#sliderSwitch {
    display: none;
}

#sliderSwitch:checked + .slider-label .slider-track {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
}

#sliderSwitch:checked + .slider-label .slider-thumb {
    transform: translateX(40px);
    background: white;
}

#sliderSwitch:checked + .slider-label .icon-off {
    opacity: 0.5;
}

#sliderSwitch:checked + .slider-label .icon-on {
    opacity: 1;
}

#sliderSwitch:checked ~ .slider-text {
    color: #f59e0b;
    content: 'Light Mode';
}`,
    js: `// Slider toggle functionality
document.getElementById('sliderSwitch')?.addEventListener('change', function() {
    const text = document.querySelector('.slider-text');
    if (text) {
        text.textContent = this.checked ? 'Light Mode' : 'Dark Mode';
    }
    console.log('Mode:', this.checked ? 'Light' : 'Dark');
});`
},
// ====================================================================
// TEMPLATE 22: Circular Progress Toggle
// ====================================================================
checkbox22: {
    name: "Circular Progress Toggle",
    category: "animated",
    html: `<div class="circle-toggle">
    <input id="circleSwitch" type="checkbox">
    <label class="circle-label" for="circleSwitch">
        <svg class="circle-svg" width="80" height="80">
            <circle class="circle-bg" cx="40" cy="40" r="36"></circle>
            <circle class="circle-progress" cx="40" cy="40" r="36"></circle>
            <circle class="circle-indicator" cx="40" cy="40" r="30"></circle>
            <text class="circle-text" x="40" y="45" text-anchor="middle">OFF</text>
        </svg>
    </label>
</div>`,
    css: `.circle-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle-label {
    cursor: pointer;
    transition: all 0.3s ease;
}

.circle-svg {
    transform: rotate(-90deg);
}

.circle-bg {
    fill: none;
    stroke: #e2e8f0;
    stroke-width: 4;
}

.circle-progress {
    fill: none;
    stroke: #7c3aed;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 226;
    stroke-dashoffset: 226;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.circle-indicator {
    fill: white;
    stroke: #7c3aed;
    stroke-width: 2;
    transition: all 0.4s ease;
}

.circle-text {
    fill: #64748b;
    font-size: 12px;
    font-weight: 600;
    text-anchor: middle;
    transform: rotate(90deg);
    transform-origin: 40px 40px;
    transition: all 0.3s ease;
}

#circleSwitch {
    display: none;
}

#circleSwitch:checked + .circle-label .circle-progress {
    stroke-dashoffset: 0;
    stroke: #10b981;
}

#circleSwitch:checked + .circle-label .circle-indicator {
    stroke: #10b981;
    fill: #10b981;
}

#circleSwitch:checked + .circle-label .circle-text {
    fill: #10b981;
    content: 'ON';
}`,
    js: `// Circular toggle functionality
document.getElementById('circleSwitch')?.addEventListener('change', function() {
    const text = document.querySelector('.circle-text');
    if (text) {
        text.textContent = this.checked ? 'ON' : 'OFF';
    }
    console.log('Circle toggle:', this.checked ? 'ON' : 'OFF');
});`
},
// ====================================================================
// TEMPLATE 23: Glassmorphism Checkbox
// ====================================================================
checkbox23: {
    name: "Glassmorphism Checkbox",
    category: "modern",
    html: `<div class="glass-checkbox-container">
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-checkmark">
            <span class="glass-icon">✓</span>
        </span>
        <span class="glass-label">Glass Effect Option</span>
    </label>
    <label class="checkbox-glass">
        <input type="checkbox" checked>
        <span class="glass-checkmark">
            <span class="glass-icon">✓</span>
        </span>
        <span class="glass-label">Glass Checked Option</span>
    </label>
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-checkmark">
            <span class="glass-icon">✓</span>
        </span>
        <span class="glass-label">Premium Feature</span>
    </label>
</div>`,
    css: `.glass-checkbox-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 25px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    max-width: 320px;
}

.checkbox-glass {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    padding: 12px 15px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.checkbox-glass:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(8px);
}

.checkbox-glass input {
    display: none;
}

.glass-checkmark {
    width: 26px;
    height: 26px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    margin-right: 15px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.glass-icon {
    color: transparent;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.glass-label {
    font-size: 14px;
    color: white;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.checkbox-glass input:checked + .glass-checkmark {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(236, 72, 153, 0.8));
    border-color: transparent;
    box-shadow: 
        0 4px 20px rgba(124, 58, 237, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    transform: scale(1.1) rotate(5deg);
    animation: glassPulse 0.6s ease;
}

.checkbox-glass input:checked + .glass-checkmark .glass-icon {
    color: white;
    transform: scale(1.2);
}

@keyframes glassPulse {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1.1) rotate(5deg); }
}

/* Dark background for glass effect */
body .live-preview-mini {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}`,
    js: `// Glassmorphism checkbox functionality
document.querySelectorAll('.checkbox-glass input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-glass').querySelector('.glass-label').textContent;
        console.log(\`Glass checkbox "\${label}": \${this.checked ? 'Checked' : 'Unchecked'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 24: Cyberpunk Neon Checkbox
// ====================================================================
checkbox24: {
    name: "Cyberpunk Neon Checkbox",
    category: "animated",
    html: `<div class="cyberpunk-container">
    <label class="checkbox-cyberpunk">
        <input type="checkbox">
        <span class="cyber-checkmark"></span>
        <span class="cyber-label">SYSTEM ONLINE</span>
    </label>
    <label class="checkbox-cyberpunk">
        <input type="checkbox" checked>
        <span class="cyber-checkmark"></span>
        <span class="cyber-label">NEURAL LINK</span>
    </label>
    <label class="checkbox-cyberpunk">
        <input type="checkbox">
        <span class="cyber-checkmark"></span>
        <span class="cyber-label">AUGMENTATION</span>
    </label>
</div>`,
    css: `/* Cyberpunk Background */
.cyberpunk-container {
    background: #0a0a0a;
    padding: 25px;
    border: 1px solid #00ffff;
    position: relative;
    overflow: hidden;
}

.cyberpunk-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff00ff, transparent);
    animation: scanLine 2s linear infinite;
}

@keyframes scanLine {
    0% { left: -100%; }
    100% { left: 100%; }
}

.checkbox-cyberpunk {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid #00ffff;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.checkbox-cyberpunk:hover {
    box-shadow: 0 0 20px #00ffff;
    transform: translateY(-3px);
}

.checkbox-cyberpunk input {
    display: none;
}

.cyber-checkmark {
    width: 22px;
    height: 22px;
    border: 2px solid #ff00ff;
    margin-right: 15px;
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease;
}

.cyber-checkmark::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: #00ffff;
    transition: transform 0.3s ease;
    box-shadow: 0 0 15px #00ffff;
}

.cyber-label {
    font-size: 13px;
    color: #00ffff;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: 'Courier New', monospace;
    text-shadow: 0 0 8px #00ffff;
}

.checkbox-cyberpunk input:checked + .cyber-checkmark {
    border-color: #00ffff;
    box-shadow: 0 0 15px #00ffff;
    animation: cyberPulse 0.5s ease;
}

.checkbox-cyberpunk input:checked + .cyber-checkmark::before {
    transform: translate(-50%, -50%) scale(1);
    animation: innerGlow 1s infinite alternate;
}

.checkbox-cyberpunk input:checked ~ .cyber-label {
    color: #ff00ff;
    text-shadow: 0 0 15px #ff00ff;
    animation: textGlitch 0.5s ease;
}

@keyframes cyberPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes innerGlow {
    0% { box-shadow: 0 0 10px #00ffff; }
    100% { box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff; }
}

@keyframes textGlitch {
    0% { transform: translateX(0); opacity: 1; }
    20% { transform: translateX(-3px); opacity: 0.8; }
    40% { transform: translateX(3px); opacity: 1; }
    60% { transform: translateX(-2px); opacity: 0.9; }
    80% { transform: translateX(2px); opacity: 1; }
    100% { transform: translateX(0); opacity: 1; }
}

/* Live preview background */
body .live-preview-mini.cyberpunk-bg {
    background: linear-gradient(45deg, #0a0a0a, #1a1a2e) !important;
}`,
    js: `// Cyberpunk checkbox functionality
document.querySelectorAll('.checkbox-cyberpunk input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-cyberpunk').querySelector('.cyber-label').textContent;
        console.log(\`[\${this.checked ? '✓' : '✗'}] CYBERPUNK: \${label} - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
        
        // Add cyberpunk sound effect simulation
        if(this.checked) {
            console.log('🔊 BEEP! System activated');
        }
    });
});`
},
// ====================================================================
// TEMPLATE 25: Minimalist Dot Checkbox
// ====================================================================
checkbox25: {
    name: "Minimalist Dot Checkbox",
    category: "modern",
    html: `<div class="minimalist-container">
    <label class="checkbox-minimalist">
        <input type="checkbox">
        <span class="dot-checkmark"></span>
        <span class="minimalist-label">Clean Design</span>
    </label>
    <label class="checkbox-minimalist">
        <input type="checkbox" checked>
        <span class="dot-checkmark"></span>
        <span class="minimalist-label">Minimal Aesthetic</span>
    </label>
    <label class="checkbox-minimalist">
        <input type="checkbox">
        <span class="dot-checkmark"></span>
        <span class="minimalist-label">Simple Interface</span>
    </label>
</div>`,
    css: `.minimalist-container {
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    max-width: 320px;
    border: 1px solid #f3f4f6;
}

.checkbox-minimalist {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
}

.checkbox-minimalist:hover {
    background: #f9fafb;
    border-color: #e5e7eb;
    transform: translateX(8px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.checkbox-minimalist input {
    display: none;
}

.dot-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #d1d5db;
    border-radius: 50%;
    margin-right: 18px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: white;
}

.dot-checkmark::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: #1f2937;
    border-radius: 50%;
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.minimalist-label {
    font-size: 15px;
    color: #6b7280;
    font-weight: 500;
    letter-spacing: -0.3px;
    transition: all 0.3s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.checkbox-minimalist input:checked + .dot-checkmark {
    border-color: #1f2937;
    background: #1f2937;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(31, 41, 55, 0.2);
}

.checkbox-minimalist input:checked + .dot-checkmark::before {
    transform: translate(-50%, -50%) scale(1);
    background: white;
    animation: minimalistPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-minimalist input:checked ~ .minimalist-label {
    color: #1f2937;
    font-weight: 600;
}

@keyframes minimalistPop {
    0% { 
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
    50% { 
        transform: translate(-50%, -50%) scale(1.4);
        opacity: 1;
    }
    100% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}

/* Hover effect for dot */
.checkbox-minimalist:hover .dot-checkmark {
    border-color: #9ca3af;
}

.checkbox-minimalist:hover .minimalist-label {
    color: #4b5563;
}`,
    js: `// Minimalist checkbox functionality
document.querySelectorAll('.checkbox-minimalist input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-minimalist').querySelector('.minimalist-label').textContent;
        console.log(\`Minimalist: "\${label}" - \${this.checked ? 'Selected' : 'Deselected'}\`);
        
        // Add minimalist sound effect simulation
        if(this.checked) {
            console.log('🔘 Click! Option selected');
        }
    });
});`
},
// ====================================================================
// TEMPLATE 26: Gradient Border Checkbox
// ====================================================================
checkbox26: {
    name: "Gradient Border Checkbox",
    category: "animated",
    html: `<div class="gradient-border-container">
    <label class="checkbox-gradient-border">
        <input type="checkbox">
        <span class="gradient-border-checkmark"></span>
        <span class="gradient-border-label">Rainbow Border</span>
    </label>
    <label class="checkbox-gradient-border">
        <input type="checkbox" checked>
        <span class="gradient-border-checkmark"></span>
        <span class="gradient-border-label">Gradient Flow</span>
    </label>
    <label class="checkbox-gradient-border">
        <input type="checkbox">
        <span class="gradient-border-checkmark"></span>
        <span class="gradient-border-label">Color Spectrum</span>
    </label>
</div>`,
    css: `.gradient-border-container {
    background: #0f172a;
    padding: 30px;
    border-radius: 20px;
    max-width: 320px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.gradient-border-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    border-radius: 22px;
    z-index: 0;
    animation: borderRotate 3s linear infinite;
    filter: blur(2px);
    opacity: 0.5;
}

@keyframes borderRotate {
    0% { background-position: 0% 50%; transform: rotate(0deg); }
    50% { background-position: 100% 50%; transform: rotate(180deg); }
    100% { background-position: 0% 50%; transform: rotate(360deg); }
}

.checkbox-gradient-border {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 18px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 2;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.checkbox-gradient-border:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.checkbox-gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    border-radius: 16px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: gradientFlow 4s linear infinite;
}

@keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.checkbox-gradient-border input {
    display: none;
}

.gradient-border-checkmark {
    width: 26px;
    height: 26px;
    border: 2px solid #475569;
    border-radius: 8px;
    margin-right: 18px;
    position: relative;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 2;
    backdrop-filter: blur(5px);
}

.gradient-border-checkmark::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.gradient-border-label {
    font-size: 15px;
    color: #e2e8f0;
    font-weight: 500;
    z-index: 2;
    position: relative;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.checkbox-gradient-border input:checked + .gradient-border-checkmark {
    border-color: transparent;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transform: scale(1.1) rotate(15deg);
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);
    animation: checkmarkSpin 0.6s ease;
}

.checkbox-gradient-border input:checked + .gradient-border-checkmark::before {
    color: white;
    transform: translate(-50%, -50%) scale(1.2);
}

.checkbox-gradient-border input:checked ~ .gradient-border-label {
    color: white;
    text-shadow: 0 2px 10px rgba(124, 58, 237, 0.5);
    font-weight: 600;
}

.checkbox-gradient-border input:checked::before {
    opacity: 1;
}

@keyframes checkmarkSpin {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(180deg); }
    100% { transform: scale(1.1) rotate(15deg); }
}`,
    js: `// Gradient Border checkbox functionality
document.querySelectorAll('.checkbox-gradient-border input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-gradient-border').querySelector('.gradient-border-label').textContent;
        console.log(\`Gradient Border: "\${label}" - \${this.checked ? 'ACTIVE' : 'INACTIVE'}\`);
        
        // Add visual feedback
        const container = this.closest('.checkbox-gradient-border');
        if(this.checked) {
            container.style.background = 'rgba(124, 58, 237, 0.1)';
            setTimeout(() => {
                container.style.background = '';
            }, 300);
        }
    });
});`
},
// ====================================================================
// TEMPLATE 27: Retro CRT Checkbox
// ====================================================================
checkbox27: {
    name: "Retro CRT Checkbox",
    category: "animated",
    html: `<div class="retro-crt-container">
    <div class="crt-header">
        <span class="crt-title">SYSTEM CONTROL v1.0</span>
        <span class="crt-status">[ONLINE]</span>
    </div>
    <div class="crt-body">
        <label class="checkbox-retro">
            <input type="checkbox">
            <span class="retro-checkmark">[ ]</span>
            <span class="retro-label">MAINFRAME BOOT</span>
            <span class="retro-status">READY</span>
        </label>
        <label class="checkbox-retro">
            <input type="checkbox" checked>
            <span class="retro-checkmark">[X]</span>
            <span class="retro-label">DISK DRIVE A:</span>
            <span class="retro-status">ACTIVE</span>
        </label>
        <label class="checkbox-retro">
            <input type="checkbox">
            <span class="retro-checkmark">[ ]</span>
            <span class="retro-label">NETWORK PROTOCOL</span>
            <span class="retro-status">OFFLINE</span>
        </label>
    </div>
    <div class="crt-footer">
        <span class="crt-prompt">&gt; SYSTEM READY</span>
    </div>
</div>`,
    css: `/* Retro CRT Container */
.retro-crt-container {
    background: rgba(0, 40, 0, 0.9);
    padding: 20px;
    border: 3px solid #00ff00;
    box-shadow: 
        inset 0 0 20px #00ff00,
        0 0 30px #00ff00;
    position: relative;
    overflow: hidden;
    max-width: 350px;
    font-family: 'Courier New', monospace;
}

.retro-crt-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 4px, 6px 100%;
    pointer-events: none;
    animation: crtScan 8s linear infinite;
}

@keyframes crtScan {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 0 200px, 0 0; }
}

/* CRT Header */
.crt-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #00aa00;
}

.crt-title {
    color: #00ff00;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff00;
    letter-spacing: 1px;
}

.crt-status {
    color: #00ff00;
    font-size: 12px;
    animation: statusBlink 2s infinite;
}

@keyframes statusBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* CRT Body */
.crt-body {
    margin-bottom: 20px;
}

.checkbox-retro {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 15px;
    padding: 12px 15px;
    background: rgba(0, 20, 0, 0.8);
    border: 1px solid #00aa00;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.checkbox-retro:hover {
    background: rgba(0, 40, 0, 0.9);
    box-shadow: 0 0 15px #00ff00;
    transform: translateX(5px);
}

.checkbox-retro::before {
    content: '>';
    position: absolute;
    left: 5px;
    color: #00ff00;
    opacity: 0;
    animation: cursorBlink 1s infinite;
}

.checkbox-retro:hover::before {
    opacity: 1;
}

.checkbox-retro input {
    display: none;
}

.retro-checkmark {
    margin-right: 15px;
    color: #00ff00;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px #00ff00;
    transition: all 0.3s ease;
    min-width: 30px;
}

.retro-label {
    font-size: 13px;
    color: #00ff00;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 0 0 5px #00ff00;
    text-transform: uppercase;
    transition: all 0.3s ease;
    flex: 1;
}

.retro-status {
    font-size: 11px;
    color: #00aa00;
    padding: 2px 8px;
    background: rgba(0, 40, 0, 0.8);
    border: 1px solid #00aa00;
    transition: all 0.3s ease;
}

.checkbox-retro input:checked + .retro-checkmark {
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00;
    animation: retroGlitch 0.5s ease;
}

.checkbox-retro input:checked ~ .retro-label {
    color: #ffff00;
    text-shadow: 0 0 10px #ffff00;
}

.checkbox-retro input:checked ~ .retro-status {
    color: #ffff00;
    border-color: #ffff00;
    background: rgba(255, 255, 0, 0.1);
    animation: statusPulse 1s infinite;
}

@keyframes cursorBlink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

@keyframes retroGlitch {
    0% { transform: translateX(0) scale(1); }
    25% { transform: translateX(-3px) scale(1.1); }
    50% { transform: translateX(3px) scale(1.2); }
    75% { transform: translateX(-2px) scale(1.1); }
    100% { transform: translateX(0) scale(1); }
}

@keyframes statusPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* CRT Footer */
.crt-footer {
    padding-top: 10px;
    border-top: 2px solid #00aa00;
}

.crt-prompt {
    color: #00ff00;
    font-size: 12px;
    animation: typing 3s steps(20, end) infinite;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid #00ff00;
    width: 0;
    display: inline-block;
}

@keyframes typing {
    0% { width: 0; }
    50% { width: 100%; }
    100% { width: 0; }
}`,
    js: `// Retro CRT checkbox functionality
document.querySelectorAll('.checkbox-retro input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-retro').querySelector('.retro-label').textContent;
        const status = this.closest('.checkbox-retro').querySelector('.retro-status');
        
        console.log(\`CRT SYSTEM: \${label} - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
        
        // Update status text
        if(this.checked) {
            status.textContent = 'ACTIVE';
            status.style.color = '#ffff00';
            status.style.borderColor = '#ffff00';
            
            // Simulate CRT sound
            console.log('🔊 BEEP! System activated');
        } else {
            status.textContent = 'OFFLINE';
            status.style.color = '#00aa00';
            status.style.borderColor = '#00aa00';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 28: Smart Animated Checkbox
// ====================================================================
checkbox28: {
    name: "Smart Animated Checkbox",
    category: "animated",
    html: `<div class="smart-checkbox-container">
    <label class="smart-checkbox">
        <input type="checkbox">
        <span class="smart-track">
            <span class="smart-thumb"></span>
        </span>
        <span class="smart-label">Enable AI Features</span>
        <span class="smart-status">INACTIVE</span>
    </label>
    <label class="smart-checkbox">
        <input type="checkbox" checked>
        <span class="smart-track">
            <span class="smart-thumb"></span>
        </span>
        <span class="smart-label">Dark Mode</span>
        <span class="smart-status">ACTIVE</span>
    </label>
    <label class="smart-checkbox">
        <input type="checkbox">
        <span class="smart-track">
            <span class="smart-thumb"></span>
        </span>
        <span class="smart-label">Auto Updates</span>
        <span class="smart-status">OFF</span>
    </label>
</div>`,
    css: `.smart-checkbox-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 40px;
    border-radius: 25px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(102, 126, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.smart-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 25px 30px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    margin-bottom: 15px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.smart-checkbox:last-child {
    margin-bottom: 0;
}

.smart-checkbox:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.smart-checkbox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.smart-checkbox:hover::before {
    opacity: 1;
}

.smart-checkbox input {
    display: none;
}

.smart-track {
    width: 70px;
    height: 36px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 18px;
    margin-right: 25px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    overflow: hidden;
    flex-shrink: 0;
}

.smart-track::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcf7f);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.smart-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 28px;
    height: 28px;
    background: white;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 15px rgba(0, 0, 0, 0.3),
        inset 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 2;
}

.smart-label {
    font-size: 18px;
    color: white;
    font-weight: 600;
    flex: 1;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.smart-status {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    padding: 8px 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    font-weight: 500;
    transition: all 0.4s ease;
    min-width: 80px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.smart-checkbox input:checked + .smart-track {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
}

.smart-checkbox input:checked + .smart-track::before {
    opacity: 1;
}

.smart-checkbox input:checked + .smart-track .smart-thumb {
    transform: translateX(34px);
    background: white;
    animation: smartBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 4px 20px rgba(255, 255, 255, 0.4),
        inset 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.smart-checkbox input:checked ~ .smart-status {
    background: rgba(255, 255, 255, 0.3);
    color: #ffd93d;
    text-shadow: 0 2px 4px rgba(255, 217, 61, 0.3);
    box-shadow: 0 4px 15px rgba(255, 217, 61, 0.2);
}

@keyframes smartBounce {
    0% { transform: translateX(34px) scale(1); }
    30% { transform: translateX(34px) scale(1.3); }
    50% { transform: translateX(34px) scale(0.9); }
    70% { transform: translateX(34px) scale(1.1); }
    100% { transform: translateX(34px) scale(1); }
}

/* Status color variations */
.smart-checkbox:nth-child(1) input:checked ~ .smart-status {
    color: #ff6b6b;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
}

.smart-checkbox:nth-child(2) input:checked ~ .smart-status {
    color: #6bcf7f;
    box-shadow: 0 4px 15px rgba(107, 207, 127, 0.2);
}

.smart-checkbox:nth-child(3) input:checked ~ .smart-status {
    color: #4d96ff;
    box-shadow: 0 4px 15px rgba(77, 150, 255, 0.2);
}`,
    js: `// Smart checkbox functionality
document.querySelectorAll('.smart-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.smart-checkbox').querySelector('.smart-label').textContent;
        const status = this.closest('.smart-checkbox').querySelector('.smart-status');
        
        // Update status text
        status.textContent = this.checked ? 'ACTIVE' : 'INACTIVE';
        
        // Add visual feedback
        const track = this.nextElementSibling;
        if(this.checked) {
            track.style.transform = 'scale(1.02)';
            setTimeout(() => {
                track.style.transform = '';
            }, 300);
        }
        
        console.log(\`Smart Feature: "\${label}" - \${this.checked ? 'Enabled' : 'Disabled'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 29: Floating Action Checkbox
// ====================================================================
checkbox29: {
    name: "Floating Action Checkbox",
    category: "animated",
    html: `<div class="floating-checkbox-container">
    <label class="floating-checkbox">
        <input type="checkbox">
        <span class="floating-circle">
            <span class="floating-icon">+</span>
        </span>
        <span class="floating-label">Add to Wishlist</span>
    </label>
    <label class="floating-checkbox">
        <input type="checkbox" checked>
        <span class="floating-circle">
            <span class="floating-icon">★</span>
        </span>
        <span class="floating-label">Premium Feature</span>
    </label>
    <label class="floating-checkbox">
        <input type="checkbox">
        <span class="floating-circle">
            <span class="floating-icon">🔔</span>
        </span>
        <span class="floating-label">Enable Notifications</span>
    </label>
</div>`,
    css: `.floating-checkbox-container {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(245, 87, 108, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.floating-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 25px 35px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 60px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 2px solid rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
    min-width: 350px;
    max-width: 400px;
}

.floating-checkbox:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.floating-checkbox::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
}

.floating-checkbox:hover::after {
    transform: translateX(100%);
}

.floating-checkbox input {
    display: none;
}

.floating-circle {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    margin-right: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.5);
    overflow: hidden;
    flex-shrink: 0;
}

.floating-circle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.floating-circle::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #f093fb, #f5576c);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: circlePulse 2s infinite;
}

@keyframes circlePulse {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.2); opacity: 0; }
}

.floating-icon {
    font-size: 28px;
    font-weight: bold;
    color: #f5576c;
    transition: all 0.4s ease;
    position: relative;
    z-index: 2;
}

.floating-label {
    font-size: 20px;
    color: white;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex: 1;
    transition: all 0.4s ease;
}

.floating-checkbox input:checked + .floating-circle {
    transform: rotate(360deg) scale(1.15);
    box-shadow: 
        0 20px 50px rgba(245, 87, 108, 0.6),
        inset 0 2px 0 rgba(255, 255, 255, 0.4);
    animation: circleBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.floating-checkbox input:checked + .floating-circle::before {
    opacity: 1;
}

.floating-checkbox input:checked + .floating-circle::after {
    opacity: 1;
    animation: circlePulseChecked 1s infinite;
}

@keyframes circlePulseChecked {
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.3); opacity: 0; }
}

.floating-checkbox input:checked + .floating-circle .floating-icon {
    color: white;
    transform: scale(1.3);
    animation: iconPop 0.4s ease;
}

@keyframes iconPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1.3); }
}

.floating-checkbox input:checked ~ .floating-label {
    color: #ffeb3b;
    animation: labelGlow 1.5s ease infinite alternate;
    font-weight: 700;
}

@keyframes circleBounce {
    0% { transform: rotate(0deg) scale(1); }
    30% { transform: rotate(180deg) scale(1.3); }
    50% { transform: rotate(270deg) scale(0.9); }
    70% { transform: rotate(330deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1.15); }
}

@keyframes labelGlow {
    0% { 
        text-shadow: 0 0 5px rgba(255, 235, 59, 0.5);
        transform: translateX(0);
    }
    50% { 
        text-shadow: 0 0 20px rgba(255, 235, 59, 0.8);
        transform: translateX(5px);
    }
    100% { 
        text-shadow: 0 0 10px rgba(255, 235, 59, 0.6);
        transform: translateX(0);
    }
}

/* Different icons for different checkboxes */
.floating-checkbox:nth-child(1) .floating-icon {
    color: #f093fb;
}

.floating-checkbox:nth-child(2) .floating-icon {
    color: #ffd93d;
}

.floating-checkbox:nth-child(3) .floating-icon {
    color: #6bcf7f;
}

.floating-checkbox:nth-child(2) .floating-circle::before {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.floating-checkbox:nth-child(3) .floating-circle::before {
    background: linear-gradient(135deg, #43e97b, #38f9d7);
}`,
    js: `// Floating checkbox functionality
document.querySelectorAll('.floating-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.floating-checkbox').querySelector('.floating-label').textContent;
        const icon = this.nextElementSibling.querySelector('.floating-icon');
        
        // Change icon based on state
        if(this.checked) {
            if(icon.textContent === '+') icon.textContent = '✓';
            if(icon.textContent === '★') icon.textContent = '⭐';
            if(icon.textContent === '🔔') icon.textContent = '🔕';
            
            // Create ripple effect
            createRipple(this.nextElementSibling);
        } else {
            if(icon.textContent === '✓') icon.textContent = '+';
            if(icon.textContent === '⭐') icon.textContent = '★';
            if(icon.textContent === '🔕') icon.textContent = '🔔';
        }
        
        console.log(\`Floating Action: "\${label}" - \${this.checked ? 'Activated' : 'Deactivated'}\`);
    });
    
    function createRipple(element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.cssText = \`
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: \${size}px;
            height: \${size}px;
            top: \${(rect.height - size) / 2}px;
            left: \${(rect.width - size) / 2}px;
            pointer-events: none;
            z-index: 1;
        \`;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});`
},
// ====================================================================
// TEMPLATE 30: Gradient Wave Checkbox
// ====================================================================
checkbox30: {
    name: "Gradient Wave Checkbox",
    category: "animated",
    html: `<div class="gradient-wave-container">
    <label class="checkbox-gradient-wave">
        <input type="checkbox">
        <span class="wave-checkmark"></span>
        <span class="wave-label">Ocean Wave</span>
    </label>
    <label class="checkbox-gradient-wave">
        <input type="checkbox" checked>
        <span class="wave-checkmark"></span>
        <span class="wave-label">Sunset Glow</span>
    </label>
    <label class="checkbox-gradient-wave">
        <input type="checkbox">
        <span class="wave-checkmark"></span>
        <span class="wave-label">Aurora Effect</span>
    </label>
</div>`,
    css: `.gradient-wave-container {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(94, 231, 223, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-gradient-wave {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 300px;
    max-width: 350px;
    position: relative;
    overflow: hidden;
}

.checkbox-gradient-wave:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-8px);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.checkbox-gradient-wave::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
}

.checkbox-gradient-wave:hover::before {
    left: 100%;
}

.checkbox-gradient-wave input {
    display: none;
}

.wave-checkmark {
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
}

.wave-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.checkbox-gradient-wave:nth-child(1) .wave-checkmark::before {
    background: linear-gradient(135deg, #5ee7df, #b490ca, #5ee7df);
}

.checkbox-gradient-wave:nth-child(2) .wave-checkmark::before {
    background: linear-gradient(135deg, #ff6b6b, #ffd93d, #ff6b6b);
}

.checkbox-gradient-wave:nth-child(3) .wave-checkmark::before {
    background: linear-gradient(135deg, #43e97b, #38f9d7, #43e97b);
}

.wave-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 24px;
    font-weight: bold;
    opacity: 0;
    transition: all 0.4s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 2;
}

.wave-label {
    font-size: 22px;
    color: white;
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex: 1;
    transition: all 0.4s ease;
    letter-spacing: 0.5px;
}

.checkbox-gradient-wave input:checked + .wave-checkmark {
    border-color: transparent;
    transform: scale(1.1) rotate(5deg);
    animation: wavePulse 2s ease infinite;
}

.checkbox-gradient-wave input:checked + .wave-checkmark::before {
    opacity: 1;
    animation: gradientWave 3s linear infinite;
}

.checkbox-gradient-wave input:checked + .wave-checkmark::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
    animation: checkFloat 1.5s ease infinite alternate;
}

.checkbox-gradient-wave input:checked ~ .wave-label {
    color: #ffeb3b;
    animation: labelFloat 2s ease infinite alternate;
    font-weight: 700;
}

@keyframes wavePulse {
    0%, 100% { 
        transform: scale(1.1) rotate(5deg);
        box-shadow: 
            0 10px 30px rgba(255, 255, 255, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.2);
    }
    50% { 
        transform: scale(1.15) rotate(0deg);
        box-shadow: 
            0 20px 50px rgba(255, 255, 255, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
    }
}

@keyframes gradientWave {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes checkFloat {
    0% { transform: translate(-50%, -50%) scale(1.2); }
    100% { transform: translate(-50%, -55%) scale(1.2); }
}

@keyframes labelFloat {
    0% { 
        transform: translateY(0);
        text-shadow: 0 2px 8px rgba(255, 235, 59, 0.5);
    }
    100% { 
        transform: translateY(-5px);
        text-shadow: 0 5px 15px rgba(255, 235, 59, 0.8);
    }
}

/* Wave effect for each checkbox */
.checkbox-gradient-wave:nth-child(1) input:checked + .wave-checkmark {
    animation: oceanWave 3s ease infinite;
}

.checkbox-gradient-wave:nth-child(2) input:checked + .wave-checkmark {
    animation: sunsetWave 3s ease infinite;
}

.checkbox-gradient-wave:nth-child(3) input:checked + .wave-checkmark {
    animation: auroraWave 3s ease infinite;
}

@keyframes oceanWave {
    0%, 100% { transform: scale(1.1) rotate(5deg); }
    25% { transform: scale(1.15) rotate(-5deg); }
    50% { transform: scale(1.1) rotate(5deg); }
    75% { transform: scale(1.12) rotate(-2deg); }
}

@keyframes sunsetWave {
    0%, 100% { transform: scale(1.1) rotate(-5deg); }
    25% { transform: scale(1.15) rotate(5deg); }
    50% { transform: scale(1.1) rotate(-5deg); }
    75% { transform: scale(1.12) rotate(2deg); }
}

@keyframes auroraWave {
    0%, 100% { transform: scale(1.1) rotate(0deg); }
    33% { transform: scale(1.15) rotate(10deg); }
    66% { transform: scale(1.12) rotate(-10deg); }
}`,
    js: `// Gradient Wave checkbox functionality
document.querySelectorAll('.checkbox-gradient-wave input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-gradient-wave').querySelector('.wave-label').textContent;
        
        // Add wave animation effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            // Create wave particles
            createWaveParticles(checkmark);
        }
        
        console.log(\`Gradient Wave: "\${label}" - \${this.checked ? 'Activated' : 'Deactivated'}\`);
    });
    
    function createWaveParticles(element) {
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const rect = element.getBoundingClientRect();
                const angle = (i * 45) * Math.PI / 180;
                const distance = 30;
                
                particle.style.cssText = \`
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: particleWave 0.8s ease-out forwards;
                    z-index: 1;
                \`;
                
                element.appendChild(particle);
                
                // Animate particle
                const keyframes = [
                    { 
                        transform: \`translate(-50%, -50%) translate(0, 0) scale(1)\`,
                        opacity: 1 
                    },
                    { 
                        transform: \`translate(-50%, -50%) translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: 800,
                    easing: 'ease-out'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, 800);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 31: 3D Depth Checkbox
// ====================================================================
checkbox31: {
    name: "3D Depth Checkbox",
    category: "animated",
    html: `<div class="depth-checkbox-container">
    <label class="checkbox-depth">
        <input type="checkbox">
        <span class="depth-checkmark"></span>
        <span class="depth-label">Deep Press</span>
    </label>
    <label class="checkbox-depth">
        <input type="checkbox" checked>
        <span class="depth-checkmark"></span>
        <span class="depth-label">3D Shadow</span>
    </label>
    <label class="checkbox-depth">
        <input type="checkbox">
        <span class="depth-checkmark"></span>
        <span class="depth-label">Perspective</span>
    </label>
</div>`,
    css: `.depth-checkbox-container {
    background: linear-gradient(135deg, #434343 0%, #000000 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        0 20px 50px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
}

.depth-checkbox-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.1), transparent 50%);
    pointer-events: none;
}

.checkbox-depth {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: linear-gradient(145deg, #2d2d2d, #1d1d1d);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    min-width: 300px;
    max-width: 350px;
    border: none;
    box-shadow: 
        15px 15px 30px #1a1a1a,
        -10px -10px 20px #3a3a3a,
        inset 1px 1px 0 rgba(255, 255, 255, 0.1);
}

.checkbox-depth:hover {
    transform: translateY(-10px) translateZ(20px);
    box-shadow: 
        20px 20px 40px #151515,
        -15px -15px 30px #454545,
        inset 1px 1px 0 rgba(255, 255, 255, 0.2);
}

.checkbox-depth::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(145deg, #2a2a2a, #222222);
    border-radius: 23px;
    z-index: 1;
    transition: all 0.3s ease;
}

.checkbox-depth::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent, rgba(124, 58, 237, 0.1));
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-depth:hover::after {
    opacity: 1;
}

.checkbox-depth input {
    display: none;
}

.depth-checkmark {
    width: 50px;
    height: 50px;
    background: linear-gradient(145deg, #3a3a3a, #2a2a2a);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        8px 8px 16px #1a1a1a,
        -6px -6px 12px #4a4a4a,
        inset 1px 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateZ(30px);
    z-index: 2;
    flex-shrink: 0;
}

.depth-checkmark::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.3s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    z-index: 3;
}

.depth-label {
    font-size: 22px;
    color: #e0e0e0;
    font-weight: 600;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 2;
}

.checkbox-depth input:checked + .depth-checkmark {
    background: linear-gradient(145deg, #7c3aed, #6d28d9);
    box-shadow: 
        inset 8px 8px 16px #5b21b6,
        inset -6px -6px 12px #9d7afc,
        0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateZ(15px) scale(0.95);
    animation: depthPress3D 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-depth input:checked + .depth-checkmark::before {
    color: white;
    transform: translate(-50%, -50%) scale(1.2);
    animation: checkGlow 1.5s ease infinite alternate;
}

.checkbox-depth input:checked ~ .depth-label {
    color: #ffffff;
    text-shadow: 0 2px 10px rgba(124, 58, 237, 0.5);
    transform: translateX(10px);
}

@keyframes depthPress3D {
    0% { 
        transform: translateZ(30px) scale(1);
        box-shadow: 
            8px 8px 16px #1a1a1a,
            -6px -6px 12px #4a4a4a;
    }
    30% { 
        transform: translateZ(5px) scale(0.9);
        box-shadow: 
            inset 4px 4px 8px #1a1a1a,
            inset -3px -3px 6px #4a4a4a;
    }
    60% { 
        transform: translateZ(20px) scale(1.05);
        box-shadow: 
            12px 12px 24px #1a1a1a,
            -8px -8px 16px #4a4a4a;
    }
    100% { 
        transform: translateZ(15px) scale(0.95);
        box-shadow: 
            inset 8px 8px 16px #5b21b6,
            inset -6px -6px 12px #9d7afc;
    }
}

@keyframes checkGlow {
    0% { 
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        transform: translate(-50%, -50%) scale(1.2);
    }
    100% { 
        text-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        transform: translate(-50%, -50%) scale(1.3);
    }
}

/* Different depths for each checkbox */
.checkbox-depth:nth-child(1) {
    transform: perspective(1000px) rotateX(5deg);
}

.checkbox-depth:nth-child(2) {
    transform: perspective(1000px) rotateX(0deg);
}

.checkbox-depth:nth-child(3) {
    transform: perspective(1000px) rotateX(-5deg);
}

.checkbox-depth:nth-child(1):hover {
    transform: perspective(1000px) rotateX(5deg) translateY(-10px) translateZ(20px);
}

.checkbox-depth:nth-child(2):hover {
    transform: perspective(1000px) rotateX(0deg) translateY(-10px) translateZ(20px);
}

.checkbox-depth:nth-child(3):hover {
    transform: perspective(1000px) rotateX(-5deg) translateY(-10px) translateZ(20px);
}`,
    js: `// 3D Depth checkbox functionality
document.querySelectorAll('.checkbox-depth input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-depth').querySelector('.depth-label').textContent;
        
        // Add 3D press effect
        const checkmark = this.nextElementSibling;
        const container = this.closest('.checkbox-depth');
        
        if(this.checked) {
            // Add shadow depth
            container.style.boxShadow = \`
                0 0 0 2px rgba(124, 58, 237, 0.3),
                15px 15px 30px #1a1a1a,
                -10px -10px 20px #3a3a3a
            \`;
            
            setTimeout(() => {
                container.style.boxShadow = \`
                    15px 15px 30px #1a1a1a,
                    -10px -10px 20px #3a3a3a,
                    inset 1px 1px 0 rgba(255, 255, 255, 0.1)
                \`;
            }, 300);
        }
        
        console.log(\`3D Depth: "\${label}" - \${this.checked ? 'Pressed' : 'Released'}\`);
    });
    
    // Add mouse down effect for realistic press
    checkbox.addEventListener('mousedown', function() {
        const checkmark = this.nextElementSibling;
        checkmark.style.transform = 'translateZ(5px) scale(0.9)';
    });
    
    checkbox.addEventListener('mouseup', function() {
        const checkmark = this.nextElementSibling;
        if(!this.checked) {
            checkmark.style.transform = 'translateZ(30px) scale(1)';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 32: Interactive Card Checkbox
// ====================================================================
checkbox32: {
    name: "Interactive Card Checkbox",
    category: "modern",
    html: `<div class="interactive-card-container">
    <label class="checkbox-interactive-card">
        <input type="checkbox">
        <div class="card-front">
            <div class="card-icon">💎</div>
            <div class="card-content">
                <div class="card-title">Premium Plan</div>
                <div class="card-features">
                    <span class="feature">✓ Unlimited Projects</span>
                    <span class="feature">✓ 24/7 Support</span>
                    <span class="feature">✓ Advanced Analytics</span>
                </div>
                <div class="card-price">$29<span>/month</span></div>
            </div>
            <div class="card-selector">
                <span class="selector-text">Select Plan</span>
                <span class="selector-icon">→</span>
            </div>
        </div>
    </label>
    <label class="checkbox-interactive-card">
        <input type="checkbox" checked>
        <div class="card-front">
            <div class="card-icon">🚀</div>
            <div class="card-content">
                <div class="card-title">Business Plan</div>
                <div class="card-features">
                    <span class="feature">✓ Team Collaboration</span>
                    <span class="feature">✓ API Access</span>
                    <span class="feature">✓ Custom Branding</span>
                </div>
                <div class="card-price">$99<span>/month</span></div>
            </div>
            <div class="card-selector">
                <span class="selector-text">Selected</span>
                <span class="selector-icon">✓</span>
            </div>
        </div>
    </label>
</div>`,
    css: `.interactive-card-container {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 
        0 30px 60px rgba(250, 112, 154, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-interactive-card {
    cursor: pointer;
    perspective: 1000px;
    width: 300px;
    height: 200px;
    position: relative;
}

.checkbox-interactive-card input {
    display: none;
}

.card-front {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    padding: 30px;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.15),
        0 0 0 1px rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    backdrop-filter: blur(10px);
}

.card-front::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #fa709a, #fee140);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.card-front::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    transition: transform 0.6s ease;
    opacity: 0;
}

.card-icon {
    font-size: 48px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.card-content {
    flex: 1;
}

.card-title {
    font-size: 24px;
    color: #333;
    font-weight: 700;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.card-features {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
}

.feature {
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.card-price {
    font-size: 42px;
    color: #fa709a;
    font-weight: 800;
    transition: all 0.3s ease;
    margin-top: auto;
}

.card-price span {
    font-size: 18px;
    color: #666;
    font-weight: 500;
    transition: all 0.3s ease;
}

.card-selector {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    background: rgba(250, 112, 154, 0.1);
    border-radius: 15px;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(10px);
}

.selector-text {
    font-size: 14px;
    color: #fa709a;
    font-weight: 600;
    transition: all 0.3s ease;
}

.selector-icon {
    font-size: 16px;
    color: #fa709a;
    font-weight: bold;
    transition: all 0.3s ease;
}

.checkbox-interactive-card:hover .card-front {
    transform: translateY(-15px) rotateX(10deg);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.25),
        0 0 0 2px rgba(255, 255, 255, 0.2);
}

.checkbox-interactive-card:hover .card-front::after {
    opacity: 1;
    transform: rotate(45deg) translate(20%, 20%);
    animation: shimmer 1.5s ease infinite;
}

@keyframes shimmer {
    0% { transform: rotate(45deg) translate(-30%, -30%); }
    100% { transform: rotate(45deg) translate(30%, 30%); }
}

.checkbox-interactive-card input:checked + .card-front {
    background: linear-gradient(135deg, #fa709a, #fee140);
    transform: scale(1.05);
    box-shadow: 
        0 30px 60px rgba(250, 112, 154, 0.4),
        0 0 0 3px rgba(255, 255, 255, 0.3);
    animation: cardSelected 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes cardSelected {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1.05); }
}

.checkbox-interactive-card input:checked + .card-front::before {
    opacity: 1;
    animation: borderGlow 2s ease infinite alternate;
}

@keyframes borderGlow {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
}

.checkbox-interactive-card input:checked + .card-front .card-icon,
.checkbox-interactive-card input:checked + .card-front .card-title,
.checkbox-interactive-card input:checked + .card-front .card-price,
.checkbox-interactive-card input:checked + .card-front .card-price span,
.checkbox-interactive-card input:checked + .card-front .feature {
    color: white;
}

.checkbox-interactive-card input:checked + .card-front .feature::before {
    content: '✓';
    color: white;
}

.checkbox-interactive-card input:checked + .card-front .card-selector {
    opacity: 1;
    transform: translateY(0);
    background: rgba(255, 255, 255, 0.2);
}

.checkbox-interactive-card input:checked + .card-front .selector-text,
.checkbox-interactive-card input:checked + .card-front .selector-icon {
    color: white;
}

/* Different card colors */
.checkbox-interactive-card:nth-child(2) .card-price {
    color: #4d96ff;
}

.checkbox-interactive-card:nth-child(2) input:checked + .card-front {
    background: linear-gradient(135deg, #4d96ff, #6bcf7f);
}

.checkbox-interactive-card:nth-child(2) .card-selector {
    background: rgba(77, 150, 255, 0.1);
}

.checkbox-interactive-card:nth-child(2) .selector-text,
.checkbox-interactive-card:nth-child(2) .selector-icon {
    color: #4d96ff;
}`,
    js: `// Interactive Card checkbox functionality
document.querySelectorAll('.checkbox-interactive-card input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const title = this.closest('.checkbox-interactive-card').querySelector('.card-title').textContent;
        const price = this.closest('.checkbox-interactive-card').querySelector('.card-price').textContent;
        
        // Update selector text
        const selectorText = this.closest('.checkbox-interactive-card').querySelector('.selector-text');
        const selectorIcon = this.closest('.checkbox-interactive-card').querySelector('.selector-icon');
        
        if(this.checked) {
            selectorText.textContent = 'Selected';
            selectorIcon.textContent = '✓';
            selectorIcon.style.transform = 'scale(1.2)';
            
            // Add celebration effect
            const card = this.nextElementSibling;
            createConfetti(card);
        } else {
            selectorText.textContent = 'Select Plan';
            selectorIcon.textContent = '→';
            selectorIcon.style.transform = 'scale(1)';
        }
        
        console.log(\`Plan Selected: "\${title}" - \${price}\`);
    });
    
    function createConfetti(element) {
        const colors = ['#fa709a', '#fee140', '#4d96ff', '#6bcf7f'];
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 20; i++) {
            setTimeout(() => {
                const confetti = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 10 + 5;
                
                confetti.style.cssText = \`
                    position: absolute;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                \`;
                
                document.body.appendChild(confetti);
                
                // Animate confetti
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const duration = Math.random() * 1000 + 500;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) rotate(0deg) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance - 50}px) rotate(\${Math.random() * 360}deg) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                confetti.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    confetti.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 33: Holographic Checkbox
// ====================================================================
checkbox33: {
    name: "Holographic Checkbox",
    category: "animated",
    html: `<div class="holographic-container">
    <label class="checkbox-holographic">
        <input type="checkbox">
        <span class="holographic-checkmark"></span>
        <span class="holographic-label">Holo Grid</span>
    </label>
    <label class="checkbox-holographic">
        <input type="checkbox" checked>
        <span class="holographic-checkmark"></span>
        <span class="holographic-label">Rainbow Shift</span>
    </label>
    <label class="checkbox-holographic">
        <input type="checkbox">
        <span class="holographic-checkmark"></span>
        <span class="holographic-label">Future Tech</span>
    </label>
</div>`,
    css: `.holographic-container {
    background: #000000;
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 100px rgba(120, 119, 198, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.holographic-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.4), transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.4), transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.4), transparent 50%);
    animation: holoFloat 15s ease infinite alternate;
    z-index: 1;
}

@keyframes holoFloat {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(20px);
    }
    25% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(25px);
    }
    50% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(15px);
    }
    75% { 
        transform: translate(20px, 20px) scale(1.05);
        filter: blur(22px);
    }
    100% { 
        transform: translate(-20px, -20px) scale(1);
        filter: blur(20px);
    }
}

.checkbox-holographic {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 300px;
    max-width: 350px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-holographic:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-8px);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.5),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.checkbox-holographic::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.checkbox-holographic:hover::before {
    left: 100%;
}

.checkbox-holographic input {
    display: none;
}

.holographic-checkmark {
    width: 50px;
    height: 50px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
    z-index: 2;
}

.holographic-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    background-size: 400% 400%;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: holoRainbow 4s linear infinite;
    filter: brightness(1.2);
}

@keyframes holoRainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
}

.holographic-checkmark::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff0000, #ff7300, #fffb00, #48ff00,
        #00ffd5, #002bff, #7a00ff, #ff00c8);
    background-size: 400% 400%;
    border-radius: 14px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: holoRainbow 3s linear infinite;
    filter: blur(10px);
}

.holographic-checkmark .check-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    transition: all 0.4s ease;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    z-index: 3;
}

.holographic-label {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
    flex: 1;
    transition: all 0.4s ease;
    letter-spacing: 1px;
    position: relative;
    z-index: 2;
}

.checkbox-holographic input:checked + .holographic-checkmark {
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 
        0 0 40px rgba(255, 255, 255, 0.6),
        inset 0 0 30px rgba(255, 255, 255, 0.4);
    animation: holoGlow 2s ease infinite alternate;
}

@keyframes holoGlow {
    0% { 
        box-shadow: 
            0 0 30px rgba(255, 255, 255, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
    100% { 
        box-shadow: 
            0 0 60px rgba(255, 255, 255, 0.8),
            inset 0 0 40px rgba(255, 255, 255, 0.5);
        transform: scale(1.15);
    }
}

.checkbox-holographic input:checked + .holographic-checkmark::before {
    opacity: 1;
    animation: holoRainbow 2s linear infinite;
}

.checkbox-holographic input:checked + .holographic-checkmark::after {
    opacity: 0.8;
    animation: holoRainbow 1.5s linear infinite;
}

.checkbox-holographic input:checked + .holographic-checkmark .check-icon {
    color: white;
    text-shadow: 
        0 0 20px white,
        0 0 40px rgba(255, 255, 255, 0.8);
    animation: iconHolo 1s ease infinite alternate;
}

@keyframes iconHolo {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.9;
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 1;
    }
}

.checkbox-holographic input:checked ~ .holographic-label {
    color: white;
    text-shadow: 
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(255, 255, 255, 0.4);
    animation: labelHolo 2s ease infinite alternate;
}

@keyframes labelHolo {
    0% { 
        text-shadow: 
            0 0 10px rgba(255, 255, 255, 0.6),
            0 0 20px rgba(255, 255, 255, 0.3);
        transform: translateX(0);
    }
    50% { 
        text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.8),
            0 0 40px rgba(255, 255, 255, 0.5);
        transform: translateX(5px);
    }
    100% { 
        text-shadow: 
            0 0 15px rgba(255, 255, 255, 0.7),
            0 0 30px rgba(255, 255, 255, 0.4);
        transform: translateX(0);
    }
}

/* Holographic grid effect */
.checkbox-holographic:nth-child(1)::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    border-radius: 25px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
}

.checkbox-holographic:nth-child(1):hover::after {
    opacity: 0.5;
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; }
}`,
    js: `// Holographic checkbox functionality
document.querySelectorAll('.checkbox-holographic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-holographic').querySelector('.holographic-label').textContent;
        
        // Add holographic particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createHoloParticles(checkmark);
        }
        
        console.log(\`Holographic: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
    });
    
    function createHoloParticles(element) {
        const colors = ['#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5', '#002bff', '#7a00ff', '#ff00c8'];
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 12; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 8 + 4;
                const angle = Math.random() * Math.PI * 2;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                    filter: blur(2px);
                \`;
                
                document.body.appendChild(particle);
                
                // Animate particle
                const distance = Math.random() * 80 + 40;
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 100);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 34: Animated Progress Checkbox
// ====================================================================
checkbox34: {
    name: "Animated Progress Checkbox",
    category: "animated",
    html: `<div class="progress-checkbox-container">
    <label class="checkbox-progress">
        <input type="checkbox">
        <span class="progress-circle">
            <span class="progress-fill"></span>
            <span class="progress-icon">0%</span>
        </span>
        <span class="progress-label">Upload Complete</span>
    </label>
    <label class="checkbox-progress">
        <input type="checkbox" checked>
        <span class="progress-circle">
            <span class="progress-fill"></span>
            <span class="progress-icon">100%</span>
        </span>
        <span class="progress-label">Process Finished</span>
    </label>
    <label class="checkbox-progress">
        <input type="checkbox">
        <span class="progress-circle">
            <span class="progress-fill"></span>
            <span class="progress-icon">0%</span>
        </span>
        <span class="progress-label">Sync Progress</span>
    </label>
</div>`,
    css: `.progress-checkbox-container {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(168, 237, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-progress {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.checkbox-progress:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.3);
}

.checkbox-progress::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(168, 237, 234, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-progress:hover::before {
    opacity: 1;
    animation: shimmerMove 2s linear infinite;
}

@keyframes shimmerMove {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.checkbox-progress input {
    display: none;
}

.progress-circle {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    background: conic-gradient(
        #a8edea 0deg,
        #fed6e3 0deg
    );
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        0 10px 20px rgba(168, 237, 234, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
}

/* Different progress colors */
.checkbox-progress:nth-child(1) .progress-circle {
    background: conic-gradient(#a8edea 0deg, #fed6e3 0deg);
}

.checkbox-progress:nth-child(2) .progress-circle {
    background: conic-gradient(#ff9a9e 0deg, #fad0c4 0deg);
}

.checkbox-progress:nth-child(3) .progress-circle {
    background: conic-gradient(#a1c4fd 0deg, #c2e9fb 0deg);
}

.progress-fill {
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    background: white;
    border-radius: 50%;
    z-index: 1;
    box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.1),
        0 2px 0 rgba(255, 255, 255, 0.5);
}

.progress-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: bold;
    color: #666;
    z-index: 2;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

.progress-label {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

.checkbox-progress input:checked + .progress-circle {
    transform: scale(1.1);
    animation: progressComplete 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-progress:nth-child(1) input:checked + .progress-circle {
    background: conic-gradient(#a8edea 0deg, #fed6e3 360deg);
}

.checkbox-progress:nth-child(2) input:checked + .progress-circle {
    background: conic-gradient(#ff9a9e 0deg, #fad0c4 360deg);
}

.checkbox-progress:nth-child(3) input:checked + .progress-circle {
    background: conic-gradient(#a1c4fd 0deg, #c2e9fb 360deg);
}

@keyframes progressComplete {
    0% { 
        transform: scale(1) rotate(0deg);
        background: conic-gradient(#a8edea 0deg, #fed6e3 0deg);
    }
    25% { 
        transform: scale(1.2) rotate(90deg);
    }
    50% { 
        transform: scale(1.1) rotate(180deg);
    }
    75% { 
        transform: scale(1.15) rotate(270deg);
    }
    100% { 
        transform: scale(1.1) rotate(360deg);
        background: conic-gradient(#a8edea 0deg, #fed6e3 360deg);
    }
}

.checkbox-progress input:checked + .progress-circle .progress-icon {
    color: #a8edea;
    font-size: 18px;
    font-weight: 800;
    animation: percentagePop 0.4s ease;
}

.checkbox-progress:nth-child(1) input:checked + .progress-circle .progress-icon {
    color: #a8edea;
}

.checkbox-progress:nth-child(2) input:checked + .progress-circle .progress-icon {
    color: #ff9a9e;
}

.checkbox-progress:nth-child(3) input:checked + .progress-circle .progress-icon {
    color: #a1c4fd;
}

@keyframes percentagePop {
    0% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox-progress input:checked ~ .progress-label {
    color: #a8edea;
    font-weight: 700;
    animation: labelComplete 0.6s ease;
}

.checkbox-progress:nth-child(1) input:checked ~ .progress-label {
    color: #a8edea;
}

.checkbox-progress:nth-child(2) input:checked ~ .progress-label {
    color: #ff9a9e;
}

.checkbox-progress:nth-child(3) input:checked ~ .progress-label {
    color: #a1c4fd;
}

@keyframes labelComplete {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
}

/* Progress animation for unchecked state */
.checkbox-progress:not(:has(input:checked)) .progress-circle {
    animation: progressPulse 2s ease infinite;
}

@keyframes progressPulse {
    0%, 100% { 
        box-shadow: 
            0 10px 20px rgba(168, 237, 234, 0.3),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
    50% { 
        box-shadow: 
            0 15px 30px rgba(168, 237, 234, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
}`,
    js: `// Animated Progress checkbox functionality
document.querySelectorAll('.checkbox-progress input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-progress').querySelector('.progress-label').textContent;
        const progressIcon = this.nextElementSibling.querySelector('.progress-icon');
        const progressCircle = this.nextElementSibling;
        
        if(this.checked) {
            // Animate progress from 0% to 100%
            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                progressIcon.textContent = \`\${progress}%\`;
                
                // Update conic gradient
                const deg = (progress / 100) * 360;
                if(progress <= 100) {
                    progressCircle.style.background = \`conic-gradient(#a8edea \${deg}deg, #fed6e3 \${deg}deg)\`;
                }
                
                if(progress >= 100) {
                    clearInterval(interval);
                    progressIcon.textContent = '✓';
                    progressIcon.style.fontSize = '24px';
                    
                    // Complete animation
                    progressCircle.style.animation = 'progressComplete 0.8s ease';
                }
            }, 30);
        } else {
            progressIcon.textContent = '0%';
            progressIcon.style.fontSize = '16px';
            progressCircle.style.background = 'conic-gradient(#a8edea 0deg, #fed6e3 0deg)';
            progressCircle.style.animation = 'progressPulse 2s ease infinite';
        }
        
        console.log(\`Progress: "\${label}" - \${this.checked ? 'Completed' : 'Reset'}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 35: Magnetic Checkbox
// ====================================================================
checkbox35: {
    name: "Magnetic Checkbox",
    category: "animated",
    html: `<div class="magnetic-checkbox-container">
    <label class="checkbox-magnetic">
        <input type="checkbox">
        <span class="magnetic-checkmark">
            <span class="magnetic-dot"></span>
        </span>
        <span class="magnetic-label">Magnetic Field</span>
    </label>
    <label class="checkbox-magnetic">
        <input type="checkbox" checked>
        <span class="magnetic-checkmark">
            <span class="magnetic-dot"></span>
        </span>
        <span class="magnetic-label">Particle Attraction</span>
    </label>
    <label class="checkbox-magnetic">
        <input type="checkbox">
        <span class="magnetic-checkmark">
            <span class="magnetic-dot"></span>
        </span>
        <span class="magnetic-label">Force Pull</span>
    </label>
</div>`,
    css: `.magnetic-checkbox-container {
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(255, 154, 158, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.magnetic-checkbox-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 30%, rgba(255, 154, 158, 0.2), transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(250, 208, 196, 0.2), transparent 40%);
    animation: magneticField 10s ease infinite alternate;
}

@keyframes magneticField {
    0% { 
        transform: scale(1) rotate(0deg);
        filter: blur(20px);
    }
    50% { 
        transform: scale(1.1) rotate(180deg);
        filter: blur(25px);
    }
    100% { 
        transform: scale(1) rotate(360deg);
        filter: blur(20px);
    }
}

.checkbox-magnetic {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-magnetic:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.2),
        0 0 0 2px rgba(255, 255, 255, 0.3);
}

.checkbox-magnetic input {
    display: none;
}

.magnetic-checkmark {
    width: 60px;
    height: 60px;
    border: 3px solid #ff9a9e;
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    overflow: visible;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
}

.magnetic-checkmark::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid rgba(255, 154, 158, 0.3);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.magnetic-checkmark::after {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border: 1px solid rgba(255, 154, 158, 0.2);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.magnetic-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    background: #ff9a9e;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 15px rgba(255, 154, 158, 0.4);
    z-index: 2;
}

.magnetic-label {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 2;
}

/* Different magnetic colors */
.checkbox-magnetic:nth-child(1) .magnetic-checkmark {
    border-color: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) .magnetic-checkmark {
    border-color: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) .magnetic-checkmark {
    border-color: #c2e9fb;
}

.checkbox-magnetic:nth-child(1) .magnetic-dot {
    background: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) .magnetic-dot {
    background: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) .magnetic-dot {
    background: #c2e9fb;
}

.checkbox-magnetic input:checked + .magnetic-checkmark {
    border-color: transparent;
    background: #ff9a9e;
    transform: scale(1.1);
    animation: magneticGlow 2s ease infinite alternate;
    box-shadow: 
        0 0 40px rgba(255, 154, 158, 0.6),
        inset 0 2px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-magnetic:nth-child(1) input:checked + .magnetic-checkmark {
    background: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) input:checked + .magnetic-checkmark {
    background: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) input:checked + .magnetic-checkmark {
    background: #c2e9fb;
}

.checkbox-magnetic input:checked + .magnetic-checkmark::before {
    opacity: 1;
    animation: magneticRing 2s ease infinite;
}

.checkbox-magnetic input:checked + .magnetic-checkmark::after {
    opacity: 1;
    animation: magneticRing 2s ease infinite 0.5s;
}

@keyframes magneticGlow {
    0% { 
        box-shadow: 
            0 0 30px rgba(255, 154, 158, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
    }
    100% { 
        box-shadow: 
            0 0 60px rgba(255, 154, 158, 0.8),
            inset 0 2px 0 rgba(255, 255, 255, 0.5);
    }
}

@keyframes magneticRing {
    0% { 
        transform: scale(1);
        opacity: 0.8;
    }
    100% { 
        transform: scale(1.2);
        opacity: 0;
    }
}

.checkbox-magnetic input:checked + .magnetic-checkmark .magnetic-dot {
    background: white;
    transform: translate(-50%, -50%) scale(1);
    animation: magneticOrbit 3s linear infinite;
    box-shadow: 
        0 0 20px rgba(255, 255, 255, 0.8),
        0 0 40px rgba(255, 255, 255, 0.4);
}

@keyframes magneticOrbit {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg) scale(1);
    }
    25% { 
        transform: translate(-50%, -50%) rotate(90deg) translateX(25px) rotate(-90deg) scale(1.2);
    }
    50% { 
        transform: translate(-50%, -50%) rotate(180deg) translateX(20px) rotate(-180deg) scale(1);
    }
    75% { 
        transform: translate(-50%, -50%) rotate(270deg) translateX(25px) rotate(-270deg) scale(1.2);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg) translateX(20px) rotate(-360deg) scale(1);
    }
}

.checkbox-magnetic input:checked ~ .magnetic-label {
    color: #ff9a9e;
    font-weight: 700;
    animation: magneticText 1s ease infinite alternate;
}

.checkbox-magnetic:nth-child(1) input:checked ~ .magnetic-label {
    color: #ff9a9e;
}

.checkbox-magnetic:nth-child(2) input:checked ~ .magnetic-label {
    color: #a1c4fd;
}

.checkbox-magnetic:nth-child(3) input:checked ~ .magnetic-label {
    color: #c2e9fb;
}

@keyframes magneticText {
    0% { 
        text-shadow: 0 0 5px rgba(255, 154, 158, 0.5);
        transform: translateX(0);
    }
    100% { 
        text-shadow: 0 0 15px rgba(255, 154, 158, 0.8);
        transform: translateX(5px);
    }
}`,
    js: `// Magnetic checkbox functionality
document.querySelectorAll('.checkbox-magnetic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-magnetic').querySelector('.magnetic-label').textContent;
        
        // Add magnetic particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createMagneticParticles(checkmark);
        }
        
        console.log(\`Magnetic Field: "\${label}" - \${this.checked ? 'ACTIVE' : 'INACTIVE'}\`);
    });
    
    // Add mouse move magnetic effect
    const container = document.querySelector('.magnetic-checkbox-container');
    const checkboxes = document.querySelectorAll('.checkbox-magnetic');
    
    container.addEventListener('mousemove', (e) => {
        checkboxes.forEach(checkbox => {
            const checkmark = checkbox.querySelector('.magnetic-checkmark');
            const rect = checkmark.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distance = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
            
            if(distance < 200) { // Magnetic radius
                const strength = (1 - distance / 200) * 0.2;
                const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
                
                checkmark.style.transform = \`translate(\${Math.cos(angle) * strength * 10}px, \${Math.sin(angle) * strength * 10}px)\`;
            } else {
                checkmark.style.transform = 'translate(0, 0)';
            }
        });
    });
    
    function createMagneticParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for(let i = 0; i < 16; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 150 + 50;
                const startX = centerX + Math.cos(angle) * distance;
                const startY = centerY + Math.sin(angle) * distance;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: 6px;
                    height: 6px;
                    background: #ff9a9e;
                    border-radius: 50%;
                    top: \${startY}px;
                    left: \${startX}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                    filter: blur(1px);
                \`;
                
                document.body.appendChild(particle);
                
                // Magnetic attraction animation
                const duration = Math.random() * 600 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`translate(\${centerX - startX}px, \${centerY - startY}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 36: Morphing Icon Checkbox
// ====================================================================
checkbox36: {
    name: "Morphing Icon Checkbox",
    category: "animated",
    html: `<div class="morphing-icon-container">
    <label class="checkbox-morphing-icon">
        <input type="checkbox">
        <span class="morphing-icon">❤️</span>
        <span class="morphing-label">Add to Favorites</span>
    </label>
    <label class="checkbox-morphing-icon">
        <input type="checkbox" checked>
        <span class="morphing-icon">🔔</span>
        <span class="morphing-label">Notifications</span>
    </label>
    <label class="checkbox-morphing-icon">
        <input type="checkbox">
        <span class="morphing-icon">★</span>
        <span class="morphing-label">Premium Feature</span>
    </label>
</div>`,
    css: `.morphing-icon-container {
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    box-shadow: 
        0 30px 60px rgba(252, 182, 159, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-morphing-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.1),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
}

.checkbox-morphing-icon:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.2),
        0 0 0 2px rgba(255, 255, 255, 0.3);
}

.checkbox-morphing-icon::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(252, 182, 159, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.checkbox-morphing-icon:hover::before {
    opacity: 1;
    animation: iconShimmer 2s linear infinite;
}

@keyframes iconShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.checkbox-morphing-icon input {
    display: none;
}

.morphing-icon {
    font-size: 48px;
    margin-right: 30px;
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: inline-block;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    flex-shrink: 0;
}

.morphing-label {
    font-size: 22px;
    color: #333;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
}

/* Different icon colors and effects */
.checkbox-morphing-icon:nth-child(1) .morphing-icon {
    color: #ff6b6b;
}

.checkbox-morphing-icon:nth-child(2) .morphing-icon {
    color: #4d96ff;
}

.checkbox-morphing-icon:nth-child(3) .morphing-icon {
    color: #ffd93d;
}

.checkbox-morphing-icon input:checked + .morphing-icon {
    transform: scale(1.3) rotate(360deg);
    animation: iconMorphComplete 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
}

.checkbox-morphing-icon:nth-child(1) input:checked + .morphing-icon {
    animation: heartBeat 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-morphing-icon:nth-child(2) input:checked + .morphing-icon {
    animation: bellRing 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-morphing-icon:nth-child(3) input:checked + .morphing-icon {
    animation: starTwinkle 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes iconMorphComplete {
    0% { 
        transform: scale(1) rotate(0deg);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    }
    25% { 
        transform: scale(1.5) rotate(90deg);
        filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.3));
    }
    50% { 
        transform: scale(1.2) rotate(180deg);
        filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }
    75% { 
        transform: scale(1.4) rotate(270deg);
        filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.25));
    }
    100% { 
        transform: scale(1.3) rotate(360deg);
        filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }
}

@keyframes heartBeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.4); }
    28% { transform: scale(1); }
    42% { transform: scale(1.4); }
    70% { transform: scale(1); }
    100% { transform: scale(1.3); }
}

@keyframes bellRing {
    0%, 100% { transform: rotate(0deg) scale(1); }
    10%, 30%, 50%, 70%, 90% { transform: rotate(-10deg) scale(1.4); }
    20%, 40%, 60%, 80% { transform: rotate(10deg) scale(1.4); }
}

@keyframes starTwinkle {
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
    25% { 
        transform: scale(1.5) rotate(90deg);
        opacity: 0.7;
    }
    50% { 
        transform: scale(1.2) rotate(180deg);
        opacity: 1;
    }
    75% { 
        transform: scale(1.4) rotate(270deg);
        opacity: 0.7;
    }
}

.checkbox-morphing-icon input:checked ~ .morphing-label {
    color: #fcb69f;
    font-weight: 700;
    animation: labelMorph 0.6s ease;
}

.checkbox-morphing-icon:nth-child(1) input:checked ~ .morphing-label {
    color: #ff6b6b;
}

.checkbox-morphing-icon:nth-child(2) input:checked ~ .morphing-label {
    color: #4d96ff;
}

.checkbox-morphing-icon:nth-child(3) input:checked ~ .morphing-label {
    color: #ffd93d;
}

@keyframes labelMorph {
    0% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-3px); }
    100% { transform: translateX(0); }
}

/* Icon change on hover for unchecked state */
.checkbox-morphing-icon:not(:has(input:checked)):hover .morphing-icon {
    transform: scale(1.1);
    animation: iconFloat 2s ease infinite;
}

@keyframes iconFloat {
    0%, 100% { transform: translateY(0) scale(1.1); }
    50% { transform: translateY(-5px) scale(1.1); }
}`,
    js: `// Morphing Icon checkbox functionality
document.querySelectorAll('.checkbox-morphing-icon input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-morphing-icon').querySelector('.morphing-label').textContent;
        const icon = this.nextElementSibling;
        
        // Store original icon
        const originalIcon = icon.textContent;
        
        if(this.checked) {
            // Change icon based on type
            if(originalIcon === '❤️') {
                icon.textContent = '💖';
                icon.style.color = '#ff6b6b';
                createHeartParticles(icon);
            } else if(originalIcon === '🔔') {
                icon.textContent = '🔕';
                icon.style.color = '#4d96ff';
                createBellParticles(icon);
            } else if(originalIcon === '★') {
                icon.textContent = '⭐';
                icon.style.color = '#ffd93d';
                createStarParticles(icon);
            }
        } else {
            // Restore original icon
            icon.textContent = originalIcon;
        }
        
        console.log(\`Icon: "\${label}" - \${this.checked ? 'Activated' : 'Deactivated'}\`);
    });
    
    function createHeartParticles(element) {
        createParticles(element, '❤️', '#ff6b6b', 12);
    }
    
    function createBellParticles(element) {
        createParticles(element, '🔔', '#4d96ff', 10);
    }
    
    function createStarParticles(element) {
        createParticles(element, '★', '#ffd93d', 15);
    }
    
    function createParticles(element, emoji, color, count) {
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < count; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const size = Math.random() * 24 + 16;
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 60 + 40;
                
                particle.style.cssText = \`
                    position: fixed;
                    font-size: \${size}px;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0;
                    transform: translate(0, 0) scale(0);
                    color: \${color};
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                \`;
                
                particle.textContent = emoji;
                document.body.appendChild(particle);
                
                // Animate particle
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(0)\`,
                        opacity: 0 
                    },
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 1 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 37: Floating Label Checkbox
// ====================================================================
checkbox37: {
    name: "Floating Label Checkbox",
    category: "modern",
    html: `<div class="floating-label-container">
    <label class="checkbox-floating-label">
        <input type="checkbox">
        <span class="floating-box"></span>
        <span class="floating-text">Username</span>
        <span class="floating-hint">Enter your username</span>
    </label>
    <label class="checkbox-floating-label">
        <input type="checkbox" checked>
        <span class="floating-box"></span>
        <span class="floating-text">Email Address</span>
        <span class="floating-hint">Your email will be verified</span>
    </label>
    <label class="checkbox-floating-label">
        <input type="checkbox">
        <span class="floating-box"></span>
        <span class="floating-text">Password</span>
        <span class="floating-hint">Minimum 8 characters</span>
    </label>
</div>`,
    css: `.floating-label-container {
    background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
    padding: 50px;
    border-radius: 25px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        0 30px 60px rgba(161, 196, 253, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.checkbox-floating-label {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 0;
    background: transparent;
    border-radius: 0;
    transition: all 0.3s ease;
    position: relative;
    min-width: 300px;
    max-width: 350px;
    border-bottom: 2px solid rgba(161, 196, 253, 0.3);
    padding-bottom: 8px;
}

.checkbox-floating-label:hover {
    border-bottom-color: rgba(161, 196, 253, 0.6);
    transform: translateY(-5px);
}

.checkbox-floating-label::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #a1c4fd, #c2e9fb);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: left;
}

.checkbox-floating-label:hover::before {
    transform: scaleX(1);
}

.checkbox-floating-label input {
    display: none;
}

.floating-box {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(161, 196, 253, 0.6);
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(255, 255, 255, 0.9);
    z-index: 2;
}

.floating-box::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.floating-text {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    padding-left: 40px;
    padding-bottom: 5px;
    transform-origin: left;
}

.floating-hint {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    padding-left: 40px;
    padding-top: 5px;
    opacity: 0;
    transform: translateY(-10px);
}

.checkbox-floating-label input:checked + .floating-box {
    background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
    border-color: transparent;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 
        0 4px 15px rgba(161, 196, 253, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.3);
    animation: boxFloat 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes boxFloat {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1.1) rotate(5deg); }
}

.checkbox-floating-label input:checked + .floating-box::after {
    color: white;
    transform: translate(-50%, -50%) scale(1.2);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.checkbox-floating-label input:checked ~ .floating-text {
    color: #a1c4fd;
    font-weight: 600;
    transform: translateY(-5px);
    padding-left: 45px;
}

.checkbox-floating-label input:checked ~ .floating-hint {
    opacity: 1;
    transform: translateY(0);
    color: rgba(161, 196, 253, 0.8);
}

/* Focus effect */
.checkbox-floating-label:has(input:focus) .floating-box {
    border-color: #a1c4fd;
    box-shadow: 0 0 0 3px rgba(161, 196, 253, 0.2);
}

/* Different colors for each checkbox */
.checkbox-floating-label:nth-child(1) .floating-box {
    border-color: rgba(255, 107, 107, 0.6);
}

.checkbox-floating-label:nth-child(1) input:checked + .floating-box {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
}

.checkbox-floating-label:nth-child(1) input:checked ~ .floating-text {
    color: #ff6b6b;
}

.checkbox-floating-label:nth-child(1) input:checked ~ .floating-hint {
    color: rgba(255, 107, 107, 0.8);
}

.checkbox-floating-label:nth-child(2) .floating-box {
    border-color: rgba(107, 207, 127, 0.6);
}

.checkbox-floating-label:nth-child(2) input:checked + .floating-box {
    background: linear-gradient(135deg, #6bcf7f, #8de29d);
}

.checkbox-floating-label:nth-child(2) input:checked ~ .floating-text {
    color: #6bcf7f;
}

.checkbox-floating-label:nth-child(2) input:checked ~ .floating-hint {
    color: rgba(107, 207, 127, 0.8);
}

.checkbox-floating-label:nth-child(3) .floating-box {
    border-color: rgba(255, 217, 61, 0.6);
}

.checkbox-floating-label:nth-child(3) input:checked + .floating-box {
    background: linear-gradient(135deg, #ffd93d, #ffe57f);
}

.checkbox-floating-label:nth-child(3) input:checked ~ .floating-text {
    color: #ffd93d;
}

.checkbox-floating-label:nth-child(3) input:checked ~ .floating-hint {
    color: rgba(255, 217, 61, 0.8);
}

/* Hover effects for different checkboxes */
.checkbox-floating-label:nth-child(1):hover::before {
    background: linear-gradient(90deg, #ff6b6b, #ff8e8e);
}

.checkbox-floating-label:nth-child(2):hover::before {
    background: linear-gradient(90deg, #6bcf7f, #8de29d);
}

.checkbox-floating-label:nth-child(3):hover::before {
    background: linear-gradient(90deg, #ffd93d, #ffe57f);
}`,
    js: `// Floating Label checkbox functionality
document.querySelectorAll('.checkbox-floating-label input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-floating-label').querySelector('.floating-text').textContent;
        
        // Add ripple effect
        const box = this.nextElementSibling;
        createRippleEffect(box);
        
        // Update hint text based on state
        const hint = this.closest('.checkbox-floating-label').querySelector('.floating-hint');
        if(this.checked) {
            if(hint.textContent.includes('Enter')) {
                hint.textContent = 'Username will be saved';
            } else if(hint.textContent.includes('email')) {
                hint.textContent = 'Email verification sent';
            } else if(hint.textContent.includes('Password')) {
                hint.textContent = 'Password requirements met';
            }
        } else {
            if(hint.textContent.includes('saved')) {
                hint.textContent = 'Enter your username';
            } else if(hint.textContent.includes('verification')) {
                hint.textContent = 'Your email will be verified';
            } else if(hint.textContent.includes('requirements')) {
                hint.textContent = 'Minimum 8 characters';
            }
        }
        
        console.log(\`Field: "\${label}" - \${this.checked ? 'Completed' : 'Incomplete'}\`);
    });
    
    // Add focus effect
    checkbox.addEventListener('focus', function() {
        const label = this.closest('.checkbox-floating-label');
        label.style.borderBottomColor = '#a1c4fd';
        label.style.transform = 'translateY(-8px)';
    });
    
    checkbox.addEventListener('blur', function() {
        const label = this.closest('.checkbox-floating-label');
        if(!this.checked) {
            label.style.borderBottomColor = 'rgba(161, 196, 253, 0.3)';
            label.style.transform = 'translateY(0)';
        }
    });
    
    function createRippleEffect(element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;
        
        ripple.style.cssText = \`
            position: absolute;
            border-radius: 50%;
            background: rgba(161, 196, 253, 0.3);
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            width: \${size}px;
            height: \${size}px;
            top: \${(rect.height - size) / 2}px;
            left: \${(rect.width - size) / 2}px;
            pointer-events: none;
            z-index: 1;
        \`;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});`
},
// ====================================================================
// TEMPLATE 38: Liquid Metal Checkbox
// ====================================================================
checkbox38: {
    name: "Liquid Metal Checkbox",
    category: "animated",
    html: `<div class="liquid-metal-container">
    <label class="checkbox-liquid-metal">
        <input type="checkbox">
        <span class="metal-checkmark">
            <span class="metal-reflect"></span>
        </span>
        <span class="metal-label">Mercury Mode</span>
    </label>
    <label class="checkbox-liquid-metal">
        <input type="checkbox" checked>
        <span class="metal-checkmark">
            <span class="metal-reflect"></span>
        </span>
        <span class="metal-label">Chrome Finish</span>
    </label>
    <label class="checkbox-liquid-metal">
        <input type="checkbox">
        <span class="metal-checkmark">
            <span class="metal-reflect"></span>
        </span>
        <span class="metal-label">Steel Texture</span>
    </label>
</div>`,
    css: `.liquid-metal-container {
    background: linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        0 30px 60px rgba(44, 62, 80, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
}

.liquid-metal-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(76, 161, 175, 0.3), transparent 40%),
        radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1), transparent 40%);
    animation: metalAmbient 10s ease infinite alternate;
}

@keyframes metalAmbient {
    0% { transform: translate(0, 0); }
    100% { transform: translate(20px, 20px); }
}

.checkbox-liquid-metal {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-liquid-metal:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.6),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.5);
}

.checkbox-liquid-metal::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
}

.checkbox-liquid-metal:hover::before {
    left: 100%;
}

.checkbox-liquid-metal input {
    display: none;
}

.metal-checkmark {
    width: 60px;
    height: 60px;
    background: linear-gradient(145deg, 
        #7d7d7d 0%, 
        #a3a3a3 25%, 
        #c9c9c9 50%, 
        #a3a3a3 75%, 
        #7d7d7d 100%);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 
        inset 0 3px 8px rgba(255, 255, 255, 0.4),
        0 8px 25px rgba(0, 0, 0, 0.6),
        0 2px 0 rgba(255, 255, 255, 0.1);
    flex-shrink: 0;
}

.metal-checkmark::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(145deg, 
        #6d6d6d 0%, 
        #939393 25%, 
        #b9b9b9 50%, 
        #939393 75%, 
        #6d6d6d 100%);
    border-radius: 10px;
    z-index: 1;
}

.metal-reflect {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent);
    transform: rotate(45deg);
    transition: all 0.5s ease;
    z-index: 2;
    filter: blur(2px);
}

.metal-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    z-index: 3;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.metal-label {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

/* Different metal types */
.checkbox-liquid-metal:nth-child(1) input:checked + .metal-checkmark {
    background: linear-gradient(145deg, 
        #4ca1af 0%, 
        #7dd3ea 25%, 
        #b5f7ff 50%, 
        #7dd3ea 75%, 
        #4ca1af 100%);
}

.checkbox-liquid-metal:nth-child(2) input:checked + .metal-checkmark {
    background: linear-gradient(145deg, 
        #bdc3c7 0%, 
        #ecf0f1 25%, 
        #ffffff 50%, 
        #ecf0f1 75%, 
        #bdc3c7 100%);
}

.checkbox-liquid-metal:nth-child(3) input:checked + .metal-checkmark {
    background: linear-gradient(145deg, 
        #7f8c8d 0%, 
        #95a5a6 25%, 
        #bdc3c7 50%, 
        #95a5a6 75%, 
        #7f8c8d 100%);
}

.checkbox-liquid-metal input:checked + .metal-checkmark {
    transform: scale(1.15);
    animation: liquidMetal 2s ease infinite alternate;
    box-shadow: 
        inset 0 3px 8px rgba(255, 255, 255, 0.5),
        0 15px 40px rgba(0, 0, 0, 0.8),
        0 0 20px currentColor,
        0 2px 0 rgba(255, 255, 255, 0.2);
}

@keyframes liquidMetal {
    0% { 
        transform: scale(1.15) rotate(0deg);
        filter: brightness(1);
    }
    50% { 
        transform: scale(1.2) rotate(2deg);
        filter: brightness(1.2);
    }
    100% { 
        transform: scale(1.15) rotate(-2deg);
        filter: brightness(1);
    }
}

.checkbox-liquid-metal input:checked + .metal-checkmark .metal-reflect {
    animation: metalReflect 3s linear infinite;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.8), 
        transparent);
}

@keyframes metalReflect {
    0% { transform: rotate(45deg) translateX(-100%); }
    100% { transform: rotate(45deg) translateX(100%); }
}

.checkbox-liquid-metal input:checked + .metal-checkmark::after {
    color: rgba(255, 255, 255, 0.9);
    animation: metalCheck 0.6s ease;
}

@keyframes metalCheck {
    0% { transform: translate(-50%, -50%) scale(0); }
    60% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox-liquid-metal input:checked ~ .metal-label {
    color: #ffffff;
    text-shadow: 
        0 0 20px currentColor,
        0 2px 8px rgba(0, 0, 0, 0.6);
    animation: metalText 1.5s ease infinite alternate;
}

.checkbox-liquid-metal:nth-child(1) input:checked ~ .metal-label {
    color: #b5f7ff;
}

.checkbox-liquid-metal:nth-child(2) input:checked ~ .metal-label {
    color: #ffffff;
}

.checkbox-liquid-metal:nth-child(3) input:checked ~ .metal-label {
    color: #bdc3c7;
}

@keyframes metalText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
    }
    100% { 
        letter-spacing: 2.5px;
        transform: translateX(5px);
    }
}

/* Liquid mercury effect */
.checkbox-liquid-metal:nth-child(1) .metal-checkmark {
    animation: mercuryFlow 3s ease infinite;
}

@keyframes mercuryFlow {
    0%, 100% { transform: scale(1) translateY(0); }
    25% { transform: scale(1.02) translateY(-2px); }
    50% { transform: scale(1) translateY(0); }
    75% { transform: scale(1.02) translateY(2px); }
}`,
    js: `// Liquid Metal checkbox functionality
document.querySelectorAll('.checkbox-liquid-metal input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-liquid-metal').querySelector('.metal-label').textContent;
        
        // Create mercury droplet effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createMercuryDroplets(checkmark);
        }
        
        console.log(\`Metal Mode: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
    });
    
    // Add hover metal sound effect simulation
    checkbox.addEventListener('mouseenter', function() {
        console.log('🔊 Metal clink sound');
    });
    
    function createMercuryDroplets(element) {
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const droplet = document.createElement('span');
                const size = Math.random() * 12 + 8;
                const angle = Math.random() * Math.PI * 2;
                
                droplet.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: linear-gradient(145deg, #4ca1af, #7dd3ea);
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 
                        0 0 10px rgba(76, 161, 175, 0.6),
                        inset 0 2px 0 rgba(255, 255, 255, 0.4);
                \`;
                
                document.body.appendChild(droplet);
                
                // Mercury-like movement
                const distance = Math.random() * 60 + 30;
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                droplet.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    droplet.remove();
                }, duration);
            }, i * 75);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 39: Space Galaxy Checkbox
// ====================================================================
checkbox39: {
    name: "Space Galaxy Checkbox",
    category: "animated",
    html: `<div class="space-galaxy-container">
    <label class="checkbox-space">
        <input type="checkbox">
        <span class="space-checkmark">
            <span class="space-star">★</span>
        </span>
        <span class="space-label">Nebula Mode</span>
    </label>
    <label class="checkbox-space">
        <input type="checkbox" checked>
        <span class="space-checkmark">
            <span class="space-star">🌌</span>
        </span>
        <span class="space-label">Black Hole</span>
    </label>
    <label class="checkbox-space">
        <input type="checkbox">
        <span class="space-checkmark">
            <span class="space-star">🌠</span>
        </span>
        <span class="space-label">Supernova</span>
    </label>
</div>`,
    css: `.space-galaxy-container {
    background: #000000;
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 100px rgba(138, 43, 226, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.space-galaxy-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.4), transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(0, 191, 255, 0.4), transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.4), transparent 50%);
    animation: spaceNebula 20s ease infinite alternate;
    filter: blur(50px);
    z-index: 1;
}

@keyframes spaceNebula {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px);
    }
    33% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(60px);
    }
    66% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(40px);
    }
    100% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px);
    }
}

.space-galaxy-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(2px 2px at 20px 30px, #eee, transparent),
        radial-gradient(1px 1px at 40px 70px, #fff, transparent),
        radial-gradient(3px 3px at 90px 40px, #ff0, transparent),
        radial-gradient(2px 2px at 130px 80px, #0ff, transparent),
        radial-gradient(1px 1px at 160px 20px, #fff, transparent),
        radial-gradient(2px 2px at 200px 60px, #f0f, transparent),
        radial-gradient(1px 1px at 240px 90px, #fff, transparent),
        radial-gradient(3px 3px at 280px 30px, #0f0, transparent);
    background-repeat: repeat;
    animation: galaxyTwinkle 6s infinite alternate;
    z-index: 1;
}

@keyframes galaxyTwinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
}

.checkbox-space {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-space:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.8),
        0 0 0 2px rgba(138, 43, 226, 0.3);
    background: rgba(0, 0, 0, 0.8);
}

.checkbox-space::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(138, 43, 226, 0.2), transparent);
    transition: left 0.8s ease;
}

.checkbox-space:hover::before {
    left: 100%;
}

.checkbox-space input {
    display: none;
}

.space-checkmark {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(138, 43, 226, 0.5);
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 
        inset 0 0 20px rgba(138, 43, 226, 0.3),
        0 8px 25px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
}

.space-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(138, 43, 226, 0.2), transparent 70%);
    border-radius: 50%;
}

.space-star {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgba(255, 255, 255, 0.6);
    font-size: 28px;
    transition: all 0.3s ease;
    z-index: 2;
    text-shadow: 0 0 10px currentColor;
}

.space-label {
    font-size: 22px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(138, 43, 226, 0.5);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

/* Different space themes */
.checkbox-space:nth-child(1) .space-checkmark {
    border-color: rgba(138, 43, 226, 0.5);
}

.checkbox-space:nth-child(2) .space-checkmark {
    border-color: rgba(0, 191, 255, 0.5);
}

.checkbox-space:nth-child(3) .space-checkmark {
    border-color: rgba(255, 105, 180, 0.5);
}

.checkbox-space:nth-child(1) input:checked + .space-checkmark {
    background: radial-gradient(circle, #8a2be2, #4b0082, #000000);
}

.checkbox-space:nth-child(2) input:checked + .space-checkmark {
    background: radial-gradient(circle, #00bfff, #0080ff, #000000);
}

.checkbox-space:nth-child(3) input:checked + .space-checkmark {
    background: radial-gradient(circle, #ff69b4, #ff1493, #000000);
}

.checkbox-space input:checked + .space-checkmark {
    transform: scale(1.2);
    animation: spacePulse 2s ease infinite alternate;
    box-shadow: 
        0 0 50px currentColor,
        inset 0 0 30px rgba(255, 255, 255, 0.4),
        0 15px 40px rgba(0, 0, 0, 0.8);
}

@keyframes spacePulse {
    0% { 
        transform: scale(1.2);
        box-shadow: 
            0 0 40px currentColor,
            inset 0 0 20px rgba(255, 255, 255, 0.4);
    }
    100% { 
        transform: scale(1.3);
        box-shadow: 
            0 0 80px currentColor,
            inset 0 0 40px rgba(255, 255, 255, 0.6);
    }
}

.checkbox-space input:checked + .space-checkmark .space-star {
    color: white;
    text-shadow: 
        0 0 30px white,
        0 0 60px currentColor;
    animation: starGlow 1.5s ease infinite alternate;
}

@keyframes starGlow {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        filter: brightness(1);
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.3);
        filter: brightness(1.5);
    }
}

.checkbox-space input:checked ~ .space-label {
    color: white;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.5);
    animation: spaceText 2s ease infinite alternate;
}

.checkbox-space:nth-child(1) input:checked ~ .space-label {
    color: #8a2be2;
}

.checkbox-space:nth-child(2) input:checked ~ .space-label {
    color: #00bfff;
}

.checkbox-space:nth-child(3) input:checked ~ .space-label {
    color: #ff69b4;
}

@keyframes spaceText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
    }
    100% { 
        letter-spacing: 3px;
        transform: translateX(10px);
    }
}

/* Create orbiting planets */
.checkbox-space:nth-child(2) input:checked + .space-checkmark::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: #00bfff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) translateX(40px);
    animation: orbitPlanet 3s linear infinite;
    box-shadow: 0 0 10px #00bfff;
}

@keyframes orbitPlanet {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg) translateX(40px) rotate(0deg);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg) translateX(40px) rotate(-360deg);
    }
}

/* Create shooting stars on hover */
.checkbox-space:hover .space-checkmark::before {
    animation: shootingStar 2s linear infinite;
}

@keyframes shootingStar {
    0% { 
        transform: translateX(-100%) translateY(-100%);
        opacity: 0;
    }
    50% { 
        transform: translateX(0) translateY(0);
        opacity: 1;
    }
    100% { 
        transform: translateX(100%) translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Space Galaxy checkbox functionality
document.querySelectorAll('.checkbox-space input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-space').querySelector('.space-label').textContent;
        
        // Create space particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createSpaceParticles(checkmark);
        }
        
        console.log(\`Space System: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
    });
    
    // Create shooting stars on container
    const container = document.querySelector('.space-galaxy-container');
    setInterval(() => {
        createShootingStar(container);
    }, 3000);
    
    function createSpaceParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#8a2be2', '#00bfff', '#ff69b4', '#ff0', '#0ff', '#f0f'];
        
        for(let i = 0; i < 12; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 8 + 4;
                const angle = Math.random() * Math.PI * 2;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 0 0 20px \${color};
                \`;
                
                document.body.appendChild(particle);
                
                // Space-like movement
                const distance = Math.random() * 100 + 50;
                const duration = Math.random() * 1200 + 600;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 100);
        }
    }
    
    function createShootingStar(container) {
        const rect = container.getBoundingClientRect();
        const star = document.createElement('div');
        
        star.style.cssText = \`
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            top: \${Math.random() * rect.height}px;
            left: \${Math.random() * rect.width}px;
            pointer-events: none;
            z-index: 1;
            box-shadow: 0 0 10px white;
        \`;
        
        container.appendChild(star);
        
        const distance = 100;
        const angle = Math.random() * Math.PI * 2;
        
        const keyframes = [
            { 
                transform: \`translate(0, 0) scale(1)\`,
                opacity: 0 
            },
            { 
                transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(3)\`,
                opacity: 1 
            },
            { 
                transform: \`translate(\${Math.cos(angle) * distance * 2}px, \${Math.sin(angle) * distance * 2}px) scale(0)\`,
                opacity: 0 
            }
        ];
        
        star.animate(keyframes, {
            duration: 1000,
            easing: 'linear'
        });
        
        setTimeout(() => {
            star.remove();
        }, 1000);
    }
});`
},
// ====================================================================
// TEMPLATE 40: Crystal Glass Checkbox
// ====================================================================
checkbox40: {
    name: "Crystal Glass Checkbox",
    category: "modern",
    html: `<div class="crystal-glass-container">
    <label class="checkbox-crystal">
        <input type="checkbox">
        <span class="crystal-checkmark"></span>
        <span class="crystal-label">Clear Quartz</span>
    </label>
    <label class="checkbox-crystal">
        <input type="checkbox" checked>
        <span class="crystal-checkmark"></span>
        <span class="crystal-label">Sapphire Glass</span>
    </label>
    <label class="checkbox-crystal">
        <input type="checkbox">
        <span class="crystal-checkmark"></span>
        <span class="crystal-label">Diamond Cut</span>
    </label>
</div>`,
    css: `.crystal-glass-container {
    background: linear-gradient(135deg, #e0f7fa 0%, #80deea 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    box-shadow: 
        0 30px 60px rgba(128, 222, 234, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    position: relative;
    overflow: hidden;
}

.crystal-glass-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.4), transparent 40%),
        radial-gradient(circle at 70% 80%, rgba(128, 222, 234, 0.3), transparent 40%);
    animation: crystalLight 10s ease infinite alternate;
}

@keyframes crystalLight {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: brightness(1);
    }
    100% { 
        transform: translate(20px, 20px) scale(1.1);
        filter: brightness(1.2);
    }
}

.checkbox-crystal {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
    box-shadow: 
        0 20px 40px rgba(128, 222, 234, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.2);
}

.checkbox-crystal:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(128, 222, 234, 0.5),
        0 0 0 2px rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.95);
}

.checkbox-crystal::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transition: left 0.6s ease;
}

.checkbox-crystal:hover::before {
    left: 100%;
}

.checkbox-crystal input {
    display: none;
}

.crystal-checkmark {
    width: 60px;
    height: 60px;
    border: 2px solid rgba(128, 222, 234, 0.6);
    border-radius: 12px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 
        inset 0 0 20px rgba(255, 255, 255, 0.8),
        0 8px 25px rgba(128, 222, 234, 0.3);
    flex-shrink: 0;
}

.crystal-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.9) 0%, 
        rgba(128, 222, 234, 0.4) 50%, 
        rgba(255, 255, 255, 0.9) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.crystal-checkmark::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 24px;
    font-weight: bold;
    z-index: 2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.crystal-label {
    font-size: 22px;
    color: #006064;
    font-weight: 600;
    flex: 1;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    font-family: 'Arial', sans-serif;
}

/* Different crystal types */
.checkbox-crystal:nth-child(1) .crystal-checkmark {
    border-color: rgba(128, 222, 234, 0.6);
}

.checkbox-crystal:nth-child(2) .crystal-checkmark {
    border-color: rgba(77, 208, 225, 0.6);
}

.checkbox-crystal:nth-child(3) .crystal-checkmark {
    border-color: rgba(38, 198, 218, 0.6);
}

.checkbox-crystal:nth-child(1) input:checked + .crystal-checkmark {
    background: linear-gradient(135deg, #80deea, #4dd0e1);
}

.checkbox-crystal:nth-child(2) input:checked + .crystal-checkmark {
    background: linear-gradient(135deg, #4dd0e1, #26c6da);
}

.checkbox-crystal:nth-child(3) input:checked + .crystal-checkmark {
    background: linear-gradient(135deg, #26c6da, #00bcd4);
}

.checkbox-crystal input:checked + .crystal-checkmark {
    transform: scale(1.15);
    animation: crystalGlow 2s ease infinite alternate;
    box-shadow: 
        0 0 40px rgba(128, 222, 234, 0.6),
        inset 0 0 30px rgba(255, 255, 255, 0.8),
        0 15px 40px rgba(128, 222, 234, 0.4);
    border-color: transparent;
}

@keyframes crystalGlow {
    0% { 
        box-shadow: 
            0 0 30px rgba(128, 222, 234, 0.5),
            inset 0 0 20px rgba(255, 255, 255, 0.7);
    }
    100% { 
        box-shadow: 
            0 0 60px rgba(128, 222, 234, 0.8),
            inset 0 0 40px rgba(255, 255, 255, 0.9);
    }
}

.checkbox-crystal input:checked + .crystal-checkmark::before {
    opacity: 1;
    animation: crystalRefract 3s linear infinite;
}

@keyframes crystalRefract {
    0% { 
        background-position: 0% 50%;
        transform: rotate(0deg);
    }
    50% { 
        background-position: 100% 50%;
        transform: rotate(180deg);
    }
    100% { 
        background-position: 0% 50%;
        transform: rotate(360deg);
    }
}

.checkbox-crystal input:checked + .crystal-checkmark::after {
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(255, 255, 255, 0.5);
    animation: crystalCheck 0.6s ease;
}

@keyframes crystalCheck {
    0% { transform: translate(-50%, -50%) scale(0); }
    60% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); }
}

.checkbox-crystal input:checked ~ .crystal-label {
    color: #004d40;
    font-weight: 700;
    text-shadow: 
        0 2px 4px rgba(128, 222, 234, 0.3),
        0 0 10px rgba(128, 222, 234, 0.2);
    animation: crystalLabel 1.5s ease infinite alternate;
}

@keyframes crystalLabel {
    0% { 
        transform: translateX(0);
        letter-spacing: 0.5px;
    }
    100% { 
        transform: translateX(5px);
        letter-spacing: 1px;
    }
}

/* Crystal refraction lines */
.checkbox-crystal:nth-child(3) .crystal-checkmark {
    position: relative;
    overflow: visible;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8), transparent);
    animation: refractionScan 2s linear infinite;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line:nth-child(1) {
    left: 25%;
    animation-delay: 0s;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line:nth-child(2) {
    left: 50%;
    animation-delay: 0.5s;
}

.checkbox-crystal:nth-child(3) .crystal-checkmark .refraction-line:nth-child(3) {
    left: 75%;
    animation-delay: 1s;
}

@keyframes refractionScan {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(100%); opacity: 0; }
}`,
    js: `// Crystal Glass checkbox functionality
document.querySelectorAll('.checkbox-crystal input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-crystal').querySelector('.crystal-label').textContent;
        
        // Create crystal shatter effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createCrystalShards(checkmark);
            
            // Add diamond refraction lines for third checkbox
            if(label.includes('Diamond')) {
                addRefractionLines(checkmark);
            }
        } else {
            // Remove refraction lines
            const lines = checkmark.querySelectorAll('.refraction-line');
            lines.forEach(line => line.remove());
        }
        
        console.log(\`Crystal: "\${label}" - \${this.checked ? 'SELECTED' : 'DESELECTED'}\`);
    });
    
    // Add crystal sound effect simulation
    checkbox.addEventListener('click', function() {
        console.log('🔊 Crystal chime sound');
    });
    
    function createCrystalShards(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#80deea', '#4dd0e1', '#26c6da', '#00bcd4'];
        
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                const shard = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 15 + 10;
                const rotation = Math.random() * 360;
                
                // Create triangle shape for shard
                shard.style.cssText = \`
                    position: fixed;
                    width: 0;
                    height: 0;
                    border-left: \${size/2}px solid transparent;
                    border-right: \${size/2}px solid transparent;
                    border-bottom: \${size}px solid \${color};
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.8;
                    transform: rotate(\${rotation}deg);
                    filter: drop-shadow(0 0 10px \${color});
                \`;
                
                document.body.appendChild(shard);
                
                // Crystal-like movement
                const distance = Math.random() * 80 + 40;
                const angle = Math.random() * Math.PI * 2;
                const duration = Math.random() * 1000 + 500;
                
                const keyframes = [
                    { 
                        transform: \`rotate(\${rotation}deg) translate(0, 0) scale(1)\`,
                        opacity: 0.8 
                    },
                    { 
                        transform: \`rotate(\${rotation + 360}deg) translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                shard.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    shard.remove();
                }, duration);
            }, i * 60);
        }
    }
    
    function addRefractionLines(element) {
        for(let i = 1; i <= 3; i++) {
            const line = document.createElement('span');
            line.className = 'refraction-line';
            element.appendChild(line);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 41: Glitch Effect Checkbox
// ====================================================================
checkbox41: {
    name: "Glitch Effect Checkbox",
    category: "animated",
    html: `<div class="glitch-effect-container">
    <label class="checkbox-glitch">
        <input type="checkbox">
        <span class="glitch-checkmark"></span>
        <span class="glitch-label">SYSTEM CORRUPT</span>
    </label>
    <label class="checkbox-glitch">
        <input type="checkbox" checked>
        <span class="glitch-checkmark"></span>
        <span class="glitch-label">DATA BREACH</span>
    </label>
    <label class="checkbox-glitch">
        <input type="checkbox">
        <span class="glitch-checkmark"></span>
        <span class="glitch-label">HACK PROTOCOL</span>
    </label>
</div>`,
    css: `.glitch-effect-container {
    background: #000000;
    padding: 50px;
    border-radius: 20px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 0 50px rgba(0, 255, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 2px solid #00ff00;
}

.glitch-effect-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 6px, 8px 100%;
    pointer-events: none;
    animation: glitchScan 2s linear infinite;
    z-index: 1;
}

@keyframes glitchScan {
    0% { background-position: 0 0, 0 0; }
    100% { background-position: 0 200px, 0 0; }
}

.glitch-effect-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.1), transparent 10%),
        radial-gradient(circle at 80% 70%, rgba(0, 255, 0, 0.1), transparent 10%),
        radial-gradient(circle at 40% 80%, rgba(0, 0, 255, 0.1), transparent 10%);
    animation: glitchNoise 0.1s infinite;
    opacity: 0.1;
    pointer-events: none;
    z-index: 1;
}

@keyframes glitchNoise {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

.checkbox-glitch {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 15px;
    border: 2px solid #00ff00;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    font-family: 'Courier New', monospace;
    position: relative;
    overflow: hidden;
    min-width: 350px;
    max-width: 400px;
    z-index: 2;
}

.checkbox-glitch:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 0 30px #00ff00,
        0 10px 40px rgba(0, 255, 0, 0.3);
    animation: containerGlitch 0.5s infinite;
}

@keyframes containerGlitch {
    0%, 100% { border-color: #00ff00; }
    33% { border-color: #ff0000; }
    66% { border-color: #0000ff; }
}

.checkbox-glitch::before {
    content: '>';
    position: absolute;
    left: 15px;
    color: #00ff00;
    opacity: 0;
    animation: cursorBlink 1s infinite;
    font-weight: bold;
}

.checkbox-glitch:hover::before {
    opacity: 1;
}

@keyframes cursorBlink {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
}

.checkbox-glitch input {
    display: none;
}

.glitch-checkmark {
    width: 60px;
    height: 60px;
    border: 3px solid #00ff00;
    border-radius: 10px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 
        inset 0 0 20px rgba(0, 255, 0, 0.3),
        0 0 20px rgba(0, 255, 0, 0.2);
    flex-shrink: 0;
}

.glitch-checkmark::before {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: transparent;
    font-size: 28px;
    font-weight: bold;
    font-family: 'Courier New', monospace;
    transition: all 0.3s ease;
    text-shadow: 0 0 10px currentColor;
}

.glitch-checkmark::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 0, 0.3), transparent);
    transition: left 0.5s ease;
}

.checkbox-glitch:hover .glitch-checkmark::after {
    left: 100%;
}

.glitch-label {
    font-size: 22px;
    color: #00ff00;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-shadow: 0 0 15px #00ff00;
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
}

/* Different glitch colors */
.checkbox-glitch:nth-child(1) {
    border-color: #00ff00;
}

.checkbox-glitch:nth-child(2) {
    border-color: #ff0000;
}

.checkbox-glitch:nth-child(3) {
    border-color: #0000ff;
}

.checkbox-glitch:nth-child(1) .glitch-checkmark {
    border-color: #00ff00;
}

.checkbox-glitch:nth-child(2) .glitch-checkmark {
    border-color: #ff0000;
}

.checkbox-glitch:nth-child(3) .glitch-checkmark {
    border-color: #0000ff;
}

.checkbox-glitch:nth-child(1) .glitch-label {
    color: #00ff00;
    text-shadow: 0 0 15px #00ff00;
}

.checkbox-glitch:nth-child(2) .glitch-label {
    color: #ff0000;
    text-shadow: 0 0 15px #ff0000;
}

.checkbox-glitch:nth-child(3) .glitch-label {
    color: #0000ff;
    text-shadow: 0 0 15px #0000ff;
}

.checkbox-glitch input:checked + .glitch-checkmark {
    background: rgba(0, 0, 0, 0.95);
    animation: glitchEffect 0.5s infinite;
    box-shadow: 
        0 0 40px currentColor,
        inset 0 0 30px rgba(255, 255, 255, 0.2);
}

@keyframes glitchEffect {
    0% { 
        transform: translate(0, 0) scale(1);
        border-color: currentColor;
    }
    20% { 
        transform: translate(-4px, 4px) scale(1.05);
        border-color: #ff00ff;
    }
    40% { 
        transform: translate(4px, -4px) scale(0.95);
        border-color: #00ffff;
    }
    60% { 
        transform: translate(-4px, -4px) scale(1.1);
        border-color: #ffff00;
    }
    80% { 
        transform: translate(4px, 4px) scale(0.9);
        border-color: currentColor;
    }
    100% { 
        transform: translate(0, 0) scale(1);
        border-color: currentColor;
    }
}

.checkbox-glitch input:checked + .glitch-checkmark::before {
    color: currentColor;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.5);
    animation: glitchCheck 0.3s infinite;
}

@keyframes glitchCheck {
    0%, 100% { transform: translate(-50%, -50%); }
    25% { transform: translate(-52%, -48%); }
    50% { transform: translate(-48%, -52%); }
    75% { transform: translate(-52%, -52%); }
}

.checkbox-glitch input:checked ~ .glitch-label {
    animation: glitchText 0.5s infinite;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.3);
}

@keyframes glitchText {
    0%, 100% { 
        transform: translateX(0);
        opacity: 1;
        color: currentColor;
    }
    20% { 
        transform: translateX(-5px);
        opacity: 0.8;
        color: #ff00ff;
    }
    40% { 
        transform: translateX(5px);
        opacity: 1;
        color: #00ffff;
    }
    60% { 
        transform: translateX(-3px);
        opacity: 0.9;
        color: #ffff00;
    }
    80% { 
        transform: translateX(3px);
        opacity: 1;
        color: currentColor;
    }
}

/* Glitch distortion lines */
.glitch-distortion {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, currentColor, transparent);
    opacity: 0;
    animation: distortionLine 2s linear infinite;
}

.checkbox-glitch input:checked ~ .glitch-distortion {
    opacity: 0.5;
}

@keyframes distortionLine {
    0% { 
        transform: translateY(0);
        opacity: 0;
    }
    10% { 
        transform: translateY(0);
        opacity: 0.5;
    }
    90% { 
        transform: translateY(100%);
        opacity: 0.5;
    }
    100% { 
        transform: translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Glitch Effect checkbox functionality
document.querySelectorAll('.checkbox-glitch input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-glitch').querySelector('.glitch-label').textContent;
        
        // Create glitch distortion effect
        const container = this.closest('.checkbox-glitch');
        if(this.checked) {
            createGlitchDistortion(container);
            
            // Add distortion lines
            for(let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.className = 'glitch-distortion';
                    line.style.top = \`\${Math.random() * 100}%\`;
                    line.style.animationDelay = \`\${Math.random() * 2}s\`;
                    container.appendChild(line);
                    
                    setTimeout(() => {
                        line.remove();
                    }, 2000);
                }, i * 200);
            }
        }
        
        console.log(\`[GLITCH] "\${label}" - \${this.checked ? 'CORRUPTED' : 'RESTORED'}\`);
        
        // Simulate glitch sound
        if(this.checked) {
            console.log('🔊 *STATIC NOISE* System corrupted');
        }
    });
    
    // Random glitch effect on hover
    checkbox.addEventListener('mouseenter', function() {
        const label = this.nextElementSibling.nextElementSibling;
        const originalText = label.textContent;
        
        // Temporarily glitch the text
        const glitchInterval = setInterval(() => {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
            let glitchedText = '';
            
            for(let i = 0; i < originalText.length; i++) {
                if(Math.random() > 0.7) {
                    glitchedText += chars[Math.floor(Math.random() * chars.length)];
                } else {
                    glitchedText += originalText[i];
                }
            }
            
            label.textContent = glitchedText;
        }, 50);
        
        setTimeout(() => {
            clearInterval(glitchInterval);
            label.textContent = originalText;
        }, 300);
    });
    
    function createGlitchDistortion(element) {
        const rect = element.getBoundingClientRect();
        
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                const distortion = document.createElement('span');
                const colors = ['#00ff00', '#ff0000', '#0000ff', '#ff00ff', '#00ffff', '#ffff00'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                const width = Math.random() * 20 + 10;
                const height = Math.random() * 10 + 5;
                
                distortion.style.cssText = \`
                    position: fixed;
                    width: \${width}px;
                    height: \${height}px;
                    background: \${color};
                    top: \${rect.top + Math.random() * rect.height}px;
                    left: \${rect.left + Math.random() * rect.width}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.7;
                    filter: blur(1px);
                    mix-blend-mode: screen;
                \`;
                
                document.body.appendChild(distortion);
                
                // Glitch movement
                const duration = Math.random() * 300 + 200;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.7 
                    },
                    { 
                        transform: \`translate(\${Math.random() * 40 - 20}px, \${Math.random() * 40 - 20}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                distortion.animate(keyframes, {
                    duration: duration,
                    easing: 'linear'
                });
                
                setTimeout(() => {
                    distortion.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 42: Fire & Flame Checkbox
// ====================================================================
checkbox42: {
    name: "Fire & Flame Checkbox",
    category: "animated",
    html: `<div class="fire-flame-container">
    <label class="checkbox-fire">
        <input type="checkbox">
        <span class="fire-checkmark">
            <span class="fire-flame">🔥</span>
        </span>
        <span class="fire-label">Wildfire</span>
    </label>
    <label class="checkbox-fire">
        <input type="checkbox" checked>
        <span class="fire-checkmark">
            <span class="fire-flame">🔥</span>
        </span>
        <span class="fire-label">Inferno</span>
    </label>
    <label class="checkbox-fire">
        <input type="checkbox">
        <span class="fire-checkmark">
            <span class="fire-flame">🔥</span>
        </span>
        <span class="fire-label">Blaze</span>
    </label>
</div>`,
    css: `.fire-flame-container {
    background: linear-gradient(135deg, #ff6b35 0%, #ffa500 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 30px 60px rgba(255, 107, 53, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.fire-flame-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.6), transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(255, 165, 0, 0.6), transparent 50%);
    animation: fireAmbient 5s ease infinite alternate;
    filter: blur(40px);
    z-index: 1;
}

@keyframes fireAmbient {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(40px) brightness(1);
    }
    50% { 
        transform: translate(10px, -10px) scale(1.1);
        filter: blur(50px) brightness(1.2);
    }
    100% { 
        transform: translate(-10px, 10px) scale(0.9);
        filter: blur(30px) brightness(0.9);
    }
}

.checkbox-fire {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 2px solid rgba(255, 107, 53, 0.6);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-fire:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(255, 107, 53, 0.7),
        0 0 0 3px rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.5);
}

.checkbox-fire::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.3), transparent);
    transition: left 0.6s ease;
}

.checkbox-fire:hover::before {
    left: 100%;
}

.checkbox-fire input {
    display: none;
}

.fire-checkmark {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(255, 107, 53, 0.7);
    border-radius: 15px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 
        inset 0 0 30px rgba(255, 107, 53, 0.4),
        0 10px 30px rgba(0, 0, 0, 0.5);
    flex-shrink: 0;
}

.fire-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, rgba(255, 107, 53, 0.3), transparent 70%);
    border-radius: 12px;
}

.fire-flame {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    transition: all 0.3s ease;
    filter: 
        drop-shadow(0 0 10px #ff6b35)
        drop-shadow(0 0 20px #ffa500);
    z-index: 2;
}

.fire-label {
    font-size: 24px;
    color: #ffa500;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 
        0 0 20px rgba(255, 107, 53, 0.8),
        0 0 40px rgba(255, 165, 0, 0.5);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial Black', sans-serif;
}

/* Different fire intensities */
.checkbox-fire:nth-child(1) .fire-checkmark {
    border-color: rgba(255, 107, 53, 0.6);
}

.checkbox-fire:nth-child(2) .fire-checkmark {
    border-color: rgba(255, 69, 0, 0.7);
}

.checkbox-fire:nth-child(3) .fire-checkmark {
    border-color: rgba(255, 0, 0, 0.8);
}

.checkbox-fire:nth-child(1) input:checked + .fire-checkmark {
    background: linear-gradient(135deg, #ff6b35, #ffa500);
}

.checkbox-fire:nth-child(2) input:checked + .fire-checkmark {
    background: linear-gradient(135deg, #ff4500, #ff8c00);
}

.checkbox-fire:nth-child(3) input:checked + .fire-checkmark {
    background: linear-gradient(135deg, #ff0000, #ff4500);
}

.checkbox-fire input:checked + .fire-checkmark {
    transform: scale(1.15);
    animation: fireBurn 2s ease infinite alternate;
    box-shadow: 
        0 0 60px currentColor,
        inset 0 0 40px rgba(255, 255, 255, 0.4),
        0 20px 50px rgba(0, 0, 0, 0.7);
    border-color: transparent;
}

@keyframes fireBurn {
    0% { 
        transform: scale(1.15);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(255, 255, 255, 0.4);
    }
    50% { 
        transform: scale(1.2);
        box-shadow: 
            0 0 80px currentColor,
            inset 0 0 50px rgba(255, 255, 255, 0.6);
    }
    100% { 
        transform: scale(1.15);
        box-shadow: 
            0 0 60px currentColor,
            inset 0 0 40px rgba(255, 255, 255, 0.5);
    }
}

.checkbox-fire input:checked + .fire-checkmark .fire-flame {
    filter: 
        drop-shadow(0 0 20px #ff6b35)
        drop-shadow(0 0 40px #ffa500)
        drop-shadow(0 0 60px #ffff00);
    animation: flameFlicker 0.3s infinite alternate;
}

@keyframes flameFlicker {
    0% { 
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        filter: 
            drop-shadow(0 0 15px #ff6b35)
            drop-shadow(0 0 30px #ffa500);
    }
    33% { 
        transform: translate(-50%, -52%) scale(1.1) rotate(-5deg);
        filter: 
            drop-shadow(0 0 20px #ff4500)
            drop-shadow(0 0 40px #ff8c00);
    }
    66% { 
        transform: translate(-50%, -48%) scale(1.05) rotate(5deg);
        filter: 
            drop-shadow(0 0 18px #ffa500)
            drop-shadow(0 0 35px #ffff00);
    }
    100% { 
        transform: translate(-50%, -50%) scale(1) rotate(0deg);
        filter: 
            drop-shadow(0 0 15px #ff6b35)
            drop-shadow(0 0 30px #ffa500);
    }
}

.checkbox-fire input:checked ~ .fire-label {
    color: #ff6b35;
    text-shadow: 
        0 0 30px currentColor,
        0 0 60px rgba(255, 255, 255, 0.5);
    animation: fireText 1.5s ease infinite alternate;
}

.checkbox-fire:nth-child(1) input:checked ~ .fire-label {
    color: #ff6b35;
}

.checkbox-fire:nth-child(2) input:checked ~ .fire-label {
    color: #ff4500;
}

.checkbox-fire:nth-child(3) input:checked ~ .fire-label {
    color: #ff0000;
}

@keyframes fireText {
    0% { 
        transform: translateX(0);
        letter-spacing: 1.5px;
    }
    100% { 
        transform: translateX(5px);
        letter-spacing: 3px;
    }
}

/* Create heat waves */
.heat-wave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    animation: heatRipple 2s linear infinite;
}

.checkbox-fire input:checked ~ .heat-wave {
    opacity: 0.3;
}

@keyframes heatRipple {
    0% { 
        transform: translateY(-100%);
        opacity: 0;
    }
    50% { 
        transform: translateY(0);
        opacity: 0.3;
    }
    100% { 
        transform: translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Fire & Flame checkbox functionality
document.querySelectorAll('.checkbox-fire input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-fire').querySelector('.fire-label').textContent;
        
        // Create fire particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createFireParticles(checkmark);
            
            // Add heat waves
            for(let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const heatWave = document.createElement('div');
                    heatWave.className = 'heat-wave';
                    heatWave.style.animationDelay = \`\${i * 0.5}s\`;
                    this.closest('.checkbox-fire').appendChild(heatWave);
                    
                    setTimeout(() => {
                        heatWave.remove();
                    }, 2000);
                }, i * 500);
            }
        }
        
        console.log(\`Fire Mode: "\${label}" - \${this.checked ? 'IGNITED' : 'EXTINGUISHED'}\`);
        
        // Simulate fire sound
        if(this.checked) {
            console.log('🔥 *CRACKLING FIRE*');
        }
    });
    
    // Add hover heat effect
    checkbox.addEventListener('mouseenter', function() {
        const checkmark = this.nextElementSibling;
        checkmark.style.boxShadow = \`
            inset 0 0 40px rgba(255, 107, 53, 0.6),
            0 0 40px rgba(255, 107, 53, 0.5)
        \`;
    });
    
    checkbox.addEventListener('mouseleave', function() {
        const checkmark = this.nextElementSibling;
        if(!this.checked) {
            checkmark.style.boxShadow = \`
                inset 0 0 30px rgba(255, 107, 53, 0.4),
                0 10px 30px rgba(0, 0, 0, 0.5)
            \`;
        }
    });
    
    function createFireParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#ff6b35', '#ffa500', '#ffff00', '#ff4500', '#ff0000'];
        
        for(let i = 0; i < 15; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 12 + 8;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 0 0 20px \${color};
                    filter: blur(1px);
                \`;
                
                document.body.appendChild(particle);
                
                // Fire-like movement (upwards with flicker)
                const distanceX = Math.random() * 40 - 20;
                const distanceY = Math.random() * -80 - 40;
                const duration = Math.random() * 800 + 400;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${distanceX}px, \${distanceY}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                // Flicker effect
                const flickerKeyframes = [
                    { opacity: 0.9, transform: 'scale(1)' },
                    { opacity: 0.6, transform: 'scale(1.2)' },
                    { opacity: 0.9, transform: 'scale(1)' }
                ];
                
                particle.animate(flickerKeyframes, {
                    duration: 100,
                    iterations: Math.floor(duration / 100)
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 50);
        }
    }
});`
},
// ====================================================================
// TEMPLATE 43: Neural Network Checkbox
// ====================================================================
checkbox43: {
    name: "Neural Network Checkbox",
    category: "animated",
    html: `<div class="neural-network-container">
    <label class="checkbox-neural">
        <input type="checkbox">
        <span class="neural-checkmark">
            <span class="neuron"></span>
            <span class="synapse"></span>
        </span>
        <span class="neural-label">AI Processor</span>
    </label>
    <label class="checkbox-neural">
        <input type="checkbox" checked>
        <span class="neural-checkmark">
            <span class="neuron"></span>
            <span class="synapse"></span>
            <span class="synapse" style="width: 40px; height: 40px;"></span>
        </span>
        <span class="neural-label">Deep Learning</span>
    </label>
    <label class="checkbox-neural">
        <input type="checkbox">
        <span class="neural-checkmark">
            <span class="neuron"></span>
            <span class="synapse"></span>
        </span>
        <span class="neural-label">Neural Mesh</span>
    </label>
</div>`,
    css: `.neural-network-container {
    background: #0a0e17;
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 30px 60px rgba(102, 51, 153, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.neural-network-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(102, 51, 153, 0.3), transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(0, 204, 204, 0.3), transparent 50%);
    animation: neuralNetwork 15s ease infinite alternate;
    z-index: 1;
}

@keyframes neuralNetwork {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(20px);
    }
    33% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(25px);
    }
    66% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(15px);
    }
    100% { 
        transform: translate(0, 0) scale(1);
        filter: blur(20px);
    }
}

/* Neural connections animation */
.neural-network-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(90deg, transparent 49%, rgba(0, 204, 204, 0.1) 50%, transparent 51%),
        linear-gradient(transparent 49%, rgba(0, 204, 204, 0.1) 50%, transparent 51%);
    background-size: 50px 50px;
    animation: neuralGrid 20s linear infinite;
    opacity: 0.1;
    z-index: 1;
}

@keyframes neuralGrid {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

.checkbox-neural {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(16, 24, 40, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 2px solid rgba(102, 51, 153, 0.4);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-neural:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(102, 51, 153, 0.6),
        0 0 0 3px rgba(0, 204, 204, 0.2);
    border-color: rgba(0, 204, 204, 0.6);
}

.checkbox-neural::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 204, 204, 0.2), transparent);
    transition: left 0.8s ease;
}

.checkbox-neural:hover::before {
    left: 100%;
}

.checkbox-neural input {
    display: none;
}

.neural-checkmark {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(102, 51, 153, 0.6);
    border-radius: 50%;
    margin-right: 30px;
    position: relative;
    overflow: visible;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(16, 24, 40, 0.95);
    box-shadow: 
        inset 0 0 30px rgba(102, 51, 153, 0.4),
        0 10px 30px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
}

.neural-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(102, 51, 153, 0.3), transparent 70%);
    border-radius: 50%;
}

.neuron {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: #663399;
    border-radius: 50%;
    transition: all 0.3s ease;
    box-shadow: 
        0 0 15px #663399,
        inset 0 0 5px rgba(255, 255, 255, 0.3);
    z-index: 2;
}

.synapse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border: 2px solid rgba(0, 204, 204, 0.3);
    border-radius: 50%;
    transition: all 0.3s ease;
    z-index: 1;
}

.synapse:nth-child(3) {
    width: 70px;
    height: 70px;
    border-width: 1px;
}

.neural-label {
    font-size: 22px;
    color: #00cccc;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 
        0 0 20px rgba(0, 204, 204, 0.6),
        0 0 40px rgba(102, 51, 153, 0.3);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Courier New', monospace;
}

/* Different neural patterns */
.checkbox-neural:nth-child(1) .neural-checkmark {
    border-color: rgba(102, 51, 153, 0.6);
}

.checkbox-neural:nth-child(2) .neural-checkmark {
    border-color: rgba(0, 204, 204, 0.6);
}

.checkbox-neural:nth-child(3) .neural-checkmark {
    border-color: rgba(153, 50, 204, 0.6);
}

.checkbox-neural:nth-child(1) .neuron {
    background: #663399;
}

.checkbox-neural:nth-child(2) .neuron {
    background: #00cccc;
}

.checkbox-neural:nth-child(3) .neuron {
    background: #9932cc;
}

.checkbox-neural input:checked + .neural-checkmark {
    border-color: transparent;
    background: radial-gradient(circle, #663399, #0a0e17);
    transform: scale(1.15);
    animation: neuralActivate 2s ease infinite alternate;
    box-shadow: 
        0 0 60px currentColor,
        inset 0 0 40px rgba(0, 204, 204, 0.4),
        0 20px 50px rgba(0, 0, 0, 0.8);
}

.checkbox-neural:nth-child(1) input:checked + .neural-checkmark {
    background: radial-gradient(circle, #663399, #0a0e17);
}

.checkbox-neural:nth-child(2) input:checked + .neural-checkmark {
    background: radial-gradient(circle, #00cccc, #0a0e17);
}

.checkbox-neural:nth-child(3) input:checked + .neural-checkmark {
    background: radial-gradient(circle, #9932cc, #0a0e17);
}

@keyframes neuralActivate {
    0% { 
        transform: scale(1.15);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(0, 204, 204, 0.4);
    }
    100% { 
        transform: scale(1.2);
        box-shadow: 
            0 0 80px currentColor,
            inset 0 0 50px rgba(0, 204, 204, 0.6);
    }
}

.checkbox-neural input:checked + .neural-checkmark .neuron {
    background: #00cccc;
    box-shadow: 
        0 0 30px #00cccc,
        inset 0 0 10px rgba(255, 255, 255, 0.5);
    animation: neuronFire 0.5s infinite alternate;
}

@keyframes neuronFire {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        filter: brightness(1);
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.4);
        filter: brightness(1.5);
    }
}

.checkbox-neural input:checked + .neural-checkmark .synapse {
    border-color: #00cccc;
    animation: synapseOrbit 4s linear infinite;
}

.checkbox-neural input:checked + .neural-checkmark .synapse:nth-child(3) {
    animation: synapseOrbit 6s linear infinite reverse;
}

@keyframes synapseOrbit {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg);
        border-color: #00cccc;
    }
    25% { 
        transform: translate(-50%, -50%) rotate(90deg);
        border-color: #663399;
    }
    50% { 
        transform: translate(-50%, -50%) rotate(180deg);
        border-color: #9932cc;
    }
    75% { 
        transform: translate(-50%, -50%) rotate(270deg);
        border-color: #00cccc;
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg);
        border-color: #00cccc;
    }
}

.checkbox-neural input:checked ~ .neural-label {
    color: #ffffff;
    text-shadow: 
        0 0 40px currentColor,
        0 0 80px rgba(255, 255, 255, 0.3);
    animation: neuralText 2s ease infinite alternate;
}

.checkbox-neural:nth-child(1) input:checked ~ .neural-label {
    color: #00cccc;
}

.checkbox-neural:nth-child(2) input:checked ~ .neural-label {
    color: #663399;
}

.checkbox-neural:nth-child(3) input:checked ~ .neural-label {
    color: #9932cc;
}

@keyframes neuralText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
    }
    100% { 
        letter-spacing: 3px;
        transform: translateX(10px);
    }
}

/* Create neural connections between checkboxes */
.neural-connection {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00cccc, transparent);
    transform-origin: left center;
    opacity: 0;
    filter: blur(1px);
    z-index: 1;
}

.checkbox-neural input:checked ~ .neural-connection {
    opacity: 0.3;
    animation: neuralFlow 2s linear infinite;
}

@keyframes neuralFlow {
    0% { 
        background-position: 0% 50%;
        opacity: 0.3;
    }
    50% { 
        background-position: 100% 50%;
        opacity: 0.6;
    }
    100% { 
        background-position: 0% 50%;
        opacity: 0.3;
    }
}`,
    js: `// Neural Network checkbox functionality
document.querySelectorAll('.checkbox-neural input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-neural').querySelector('.neural-label').textContent;
        
        // Create neural network effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createNeuralParticles(checkmark);
            createNeuralConnections();
        } else {
            removeNeuralConnections();
        }
        
        console.log(\`Neural Network: "\${label}" - \${this.checked ? 'ACTIVATED' : 'DEACTIVATED'}\`);
        
        // Simulate neural sound
        if(this.checked) {
            console.log('🔊 *NEURAL BEEP* Synapses firing');
        }
    });
    
    // Create neural connections between activated checkboxes
    function createNeuralConnections() {
        const checkboxes = document.querySelectorAll('.checkbox-neural input:checked');
        const container = document.querySelector('.neural-network-container');
        
        // Remove existing connections
        removeNeuralConnections();
        
        if(checkboxes.length > 1) {
            const positions = [];
            checkboxes.forEach(cb => {
                const rect = cb.nextElementSibling.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                positions.push({
                    x: rect.left + rect.width/2 - containerRect.left,
                    y: rect.top + rect.height/2 - containerRect.top
                });
            });
            
            // Create connections between all activated neurons
            for(let i = 0; i < positions.length - 1; i++) {
                for(let j = i + 1; j < positions.length; j++) {
                    const connection = document.createElement('div');
                    const dx = positions[j].x - positions[i].x;
                    const dy = positions[j].y - positions[i].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
                    
                    connection.className = 'neural-connection';
                    connection.style.cssText = \`
                        position: absolute;
                        top: \${positions[i].y}px;
                        left: \${positions[i].x}px;
                        width: \${distance}px;
                        transform: rotate(\${angle}deg);
                        z-index: 1;
                    \`;
                    
                    container.appendChild(connection);
                }
            }
        }
    }
    
    function removeNeuralConnections() {
        const connections = document.querySelectorAll('.neural-connection');
        connections.forEach(conn => conn.remove());
    }
    
    function createNeuralParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#663399', '#00cccc', '#9932cc', '#ffffff'];
        
        for(let i = 0; i < 12; i++) {
            setTimeout(() => {
                const particle = document.createElement('span');
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 6 + 3;
                
                particle.style.cssText = \`
                    position: fixed;
                    width: \${size}px;
                    height: \${size}px;
                    background: \${color};
                    border-radius: 50%;
                    top: \${rect.top + rect.height/2}px;
                    left: \${rect.left + rect.width/2}px;
                    pointer-events: none;
                    z-index: 1000;
                    opacity: 0.9;
                    box-shadow: 0 0 15px \${color};
                \`;
                
                document.body.appendChild(particle);
                
                // Neural-like movement (random with some intelligence)
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 100 + 50;
                const duration = Math.random() * 1000 + 500;
                
                // Create a "smart" path (not completely random)
                const controlX = Math.cos(angle + Math.PI/4) * distance/2;
                const controlY = Math.sin(angle + Math.PI/4) * distance/2;
                
                const keyframes = [
                    { 
                        transform: \`translate(0, 0) scale(1)\`,
                        opacity: 0.9 
                    },
                    { 
                        transform: \`translate(\${controlX}px, \${controlY}px) scale(1.2)\`,
                        opacity: 0.7 
                    },
                    { 
                        transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                        opacity: 0 
                    }
                ];
                
                particle.animate(keyframes, {
                    duration: duration,
                    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                });
                
                setTimeout(() => {
                    particle.remove();
                }, duration);
            }, i * 100);
        }
    }
    
    // Update connections when any checkbox changes
    document.querySelectorAll('.checkbox-neural input').forEach(cb => {
        cb.addEventListener('change', createNeuralConnections);
    });
});`
},
// ====================================================================
// TEMPLATE 44: Quantum Particle Checkbox
// ====================================================================
checkbox44: {
    name: "Quantum Particle Checkbox",
    category: "animated",
    html: `<div class="quantum-particle-container">
    <label class="checkbox-quantum">
        <input type="checkbox">
        <span class="quantum-checkmark">
            <span class="particle">⚛️</span>
        </span>
        <span class="quantum-label">Superposition</span>
    </label>
    <label class="checkbox-quantum">
        <input type="checkbox" checked>
        <span class="quantum-checkmark">
            <span class="particle">⚛️</span>
        </span>
        <span class="quantum-label">Entanglement</span>
    </label>
    <label class="checkbox-quantum">
        <input type="checkbox">
        <span class="quantum-checkmark">
            <span class="particle">⚛️</span>
        </span>
        <span class="quantum-label">Wave Function</span>
    </label>
</div>`,
    css: `.quantum-particle-container {
    background: linear-gradient(135deg, #0b3d91 0%, #1a237e 100%);
    padding: 50px;
    border-radius: 30px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 30px 60px rgba(66, 165, 245, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.quantum-particle-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(66, 165, 245, 0.4), transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(171, 71, 188, 0.4), transparent 50%);
    animation: quantumUniverse 20s ease infinite alternate;
    filter: blur(50px);
    z-index: 1;
}

@keyframes quantumUniverse {
    0% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px) hue-rotate(0deg);
    }
    25% { 
        transform: translate(20px, -20px) scale(1.1);
        filter: blur(60px) hue-rotate(90deg);
    }
    50% { 
        transform: translate(-20px, 20px) scale(0.9);
        filter: blur(40px) hue-rotate(180deg);
    }
    75% { 
        transform: translate(20px, 20px) scale(1.05);
        filter: blur(55px) hue-rotate(270deg);
    }
    100% { 
        transform: translate(0, 0) scale(1);
        filter: blur(50px) hue-rotate(360deg);
    }
}

/* Quantum probability waves */
.quantum-particle-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 1px, transparent 2px),
        radial-gradient(circle at 60% 60%, rgba(255, 255, 255, 0.05) 1px, transparent 2px);
    background-size: 100px 100px;
    animation: quantumWaves 10s linear infinite;
    opacity: 0.3;
    z-index: 1;
}

@keyframes quantumWaves {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
}

.checkbox-quantum {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 30px 40px;
    background: rgba(13, 27, 42, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 2px solid rgba(66, 165, 245, 0.4);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    min-width: 350px;
    max-width: 400px;
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.checkbox-quantum:hover {
    transform: translateY(-10px);
    box-shadow: 
        0 30px 60px rgba(66, 165, 245, 0.6),
        0 0 0 3px rgba(171, 71, 188, 0.2);
    border-color: rgba(171, 71, 188, 0.6);
}

.checkbox-quantum::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(171, 71, 188, 0.3), transparent);
    transition: left 0.8s ease;
}

.checkbox-quantum:hover::before {
    left: 100%;
}

.checkbox-quantum input {
    display: none;
}

.quantum-checkmark {
    width: 70px;
    height: 70px;
    border: 3px solid rgba(66, 165, 245, 0.6);
    border-radius: 15px;
    margin-right: 30px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(13, 27, 42, 0.95);
    box-shadow: 
        inset 0 0 30px rgba(66, 165, 245, 0.4),
        0 10px 30px rgba(0, 0, 0, 0.6);
    flex-shrink: 0;
}

.quantum-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        rgba(66, 165, 245, 0.2) 0%, 
        rgba(171, 71, 188, 0.2) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.particle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 36px;
    transition: all 0.3s ease;
    filter: 
        drop-shadow(0 0 15px #42a5f5)
        drop-shadow(0 0 30px #ab47bc);
    z-index: 2;
}

.quantum-label {
    font-size: 22px;
    color: #42a5f5;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-shadow: 
        0 0 20px rgba(66, 165, 245, 0.6),
        0 0 40px rgba(171, 71, 188, 0.3);
    flex: 1;
    transition: all 0.3s ease;
    font-family: 'Arial', sans-serif;
}

/* Different quantum states */
.checkbox-quantum:nth-child(1) .quantum-checkmark {
    border-color: rgba(66, 165, 245, 0.6);
}

.checkbox-quantum:nth-child(2) .quantum-checkmark {
    border-color: rgba(171, 71, 188, 0.6);
}

.checkbox-quantum:nth-child(3) .quantum-checkmark {
    border-color: rgba(0, 188, 212, 0.6);
}

.checkbox-quantum:nth-child(1) input:checked + .quantum-checkmark {
    background: linear-gradient(135deg, #42a5f5, #2196f3);
}

.checkbox-quantum:nth-child(2) input:checked + .quantum-checkmark {
    background: linear-gradient(135deg, #ab47bc, #7b1fa2);
}

.checkbox-quantum:nth-child(3) input:checked + .quantum-checkmark {
    background: linear-gradient(135deg, #00bcd4, #0097a7);
}

.checkbox-quantum input:checked + .quantum-checkmark {
    border-color: transparent;
    transform: scale(1.15);
    animation: quantumSuperposition 3s ease infinite alternate;
    box-shadow: 
        0 0 60px currentColor,
        inset 0 0 40px rgba(255, 255, 255, 0.4),
        0 20px 50px rgba(0, 0, 0, 0.8);
}

@keyframes quantumSuperposition {
    0% { 
        transform: scale(1.15);
        filter: hue-rotate(0deg);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(255, 255, 255, 0.4);
    }
    33% { 
        transform: scale(1.2);
        filter: hue-rotate(120deg);
        box-shadow: 
            0 0 70px currentColor,
            inset 0 0 45px rgba(255, 255, 255, 0.5);
    }
    66% { 
        transform: scale(1.18);
        filter: hue-rotate(240deg);
        box-shadow: 
            0 0 60px currentColor,
            inset 0 0 35px rgba(255, 255, 255, 0.45);
    }
    100% { 
        transform: scale(1.15);
        filter: hue-rotate(360deg);
        box-shadow: 
            0 0 50px currentColor,
            inset 0 0 30px rgba(255, 255, 255, 0.4);
    }
}

.checkbox-quantum input:checked + .quantum-checkmark::before {
    opacity: 1;
    animation: quantumWave 2s linear infinite;
}

@keyframes quantumWave {
    0% { 
        background-position: 0% 50%;
        transform: rotate(0deg);
    }
    50% { 
        background-position: 100% 50%;
        transform: rotate(180deg);
    }
    100% { 
        background-position: 0% 50%;
        transform: rotate(360deg);
    }
}

.checkbox-quantum input:checked + .quantum-checkmark .particle {
    animation: quantumDuality 4s linear infinite;
    filter: 
        drop-shadow(0 0 25px currentColor)
        drop-shadow(0 0 50px rgba(255, 255, 255, 0.3));
}

@keyframes quantumDuality {
    0% { 
        transform: translate(-50%, -50%) rotate(0deg) scale(1);
        filter: 
            drop-shadow(0 0 20px #42a5f5)
            drop-shadow(0 0 40px #ab47bc);
    }
    25% { 
        transform: translate(-50%, -50%) rotate(90deg) scale(1.3);
        filter: 
            drop-shadow(0 0 25px #ab47bc)
            drop-shadow(0 0 50px #42a5f5);
    }
    50% { 
        transform: translate(-50%, -50%) rotate(180deg) scale(1);
        filter: 
            drop-shadow(0 0 20px #00bcd4)
            drop-shadow(0 0 40px #ab47bc);
    }
    75% { 
        transform: translate(-50%, -50%) rotate(270deg) scale(1.3);
        filter: 
            drop-shadow(0 0 25px #42a5f5)
            drop-shadow(0 0 50px #00bcd4);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(360deg) scale(1);
        filter: 
            drop-shadow(0 0 20px #42a5f5)
            drop-shadow(0 0 40px #ab47bc);
    }
}

.checkbox-quantum input:checked ~ .quantum-label {
    color: #ffffff;
    text-shadow: 
        0 0 40px currentColor,
        0 0 80px rgba(255, 255, 255, 0.3);
    animation: quantumText 2s ease infinite alternate;
}

.checkbox-quantum:nth-child(1) input:checked ~ .quantum-label {
    color: #42a5f5;
}

.checkbox-quantum:nth-child(2) input:checked ~ .quantum-label {
    color: #ab47bc;
}

.checkbox-quantum:nth-child(3) input:checked ~ .quantum-label {
    color: #00bcd4;
}

@keyframes quantumText {
    0% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
        opacity: 1;
    }
    50% { 
        letter-spacing: 3px;
        transform: translateX(5px);
        opacity: 0.8;
    }
    100% { 
        letter-spacing: 1.5px;
        transform: translateX(0);
        opacity: 1;
    }
}

/* Quantum entanglement effect */
.quantum-entanglement {
    position: absolute;
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, currentColor, transparent);
    opacity: 0;
    filter: blur(2px);
    z-index: 1;
}

.checkbox-quantum input:checked ~ .quantum-entanglement {
    opacity: 0.4;
    animation: entanglement 2s linear infinite;
}

@keyframes entanglement {
    0% { 
        transform: translateY(-100%);
        opacity: 0;
    }
    50% { 
        transform: translateY(0);
        opacity: 0.4;
    }
    100% { 
        transform: translateY(100%);
        opacity: 0;
    }
}`,
    js: `// Quantum Particle checkbox functionality
document.querySelectorAll('.checkbox-quantum input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.checkbox-quantum').querySelector('.quantum-label').textContent;
        
        // Create quantum particle effect
        const checkmark = this.nextElementSibling;
        if(this.checked) {
            createQuantumParticles(checkmark);
            
            // Add entanglement effect
            for(let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const entanglement = document.createElement('div');
                    entanglement.className = 'quantum-entanglement';
                    entanglement.style.left = \`\${Math.random() * 100}%\`;
                    entanglement.style.animationDelay = \`\${i * 0.3}s\`;
                    this.closest('.checkbox-quantum').appendChild(entanglement);
                    
                    setTimeout(() => {
                        entanglement.remove();
                    }, 2000);
                }, i * 300);
            }
        }
        
        console.log(\`Quantum State: "\${label}" - \${this.checked ? 'OBSERVED' : 'UNOBSERVED'}\`);
        
        // Quantum observation effect
        if(this.checked) {
            // Create wave function collapse effect
            const container = this.closest('.checkbox-quantum');
            container.style.animation = 'none';
            setTimeout(() => {
                container.style.animation = '';
            }, 100);
            
            console.log('🔊 *QUANTUM COLLAPSE* Wave function collapsed');
        }
    });
    
    // Add quantum uncertainty on hover
    checkbox.addEventListener('mouseenter', function() {
        const checkmark = this.nextElementSibling;
        const particle = checkmark.querySelector('.particle');
        
        // Create uncertainty effect (particle appears in multiple places)
        const uncertaintyInterval = setInterval(() => {
            const x = Math.random() * 20 - 10;
            const y = Math.random() * 20 - 10;
            particle.style.transform = \`translate(\${x}px, \${y}px)\`;
        }, 100);
        
        setTimeout(() => {
            clearInterval(uncertaintyInterval);
            if(!this.checked) {
                particle.style.transform = 'translate(-50%, -50%)';
            }
        }, 500);
    });
    
    function createQuantumParticles(element) {
        const rect = element.getBoundingClientRect();
        const colors = ['#42a5f5', '#ab47bc', '#00bcd4', '#ffffff'];
        
        for(let i = 0; i < 10; i++) {
            setTimeout(() => {
                // Create particle and anti-particle pairs
                for(let j = 0; j < 2; j++) {
                    const particle = document.createElement('span');
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    const size = Math.random() * 8 + 4;
                    const isAnti = j === 1;
                    
                    particle.style.cssText = \`
                        position: fixed;
                        width: \${size}px;
                        height: \${size}px;
                        background: \${color};
                        border-radius: 50%;
                        top: \${rect.top + rect.height/2}px;
                        left: \${rect.left + rect.width/2}px;
                        pointer-events: none;
                        z-index: 1000;
                        opacity: 0.9;
                        box-shadow: 0 0 20px \${color};
                        filter: blur(\${isAnti ? '2px' : '1px'});
                    \`;
                    
                    if(isAnti) {
                        particle.style.background = 'conic-gradient(from 0deg, transparent, white, transparent)';
                        particle.style.mixBlendMode = 'screen';
                    }
                    
                    document.body.appendChild(particle);
                    
                    // Quantum-like movement (uncertain position)
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 120 + 60;
                    const duration = Math.random() * 1200 + 600;
                    
                    // Quantum tunneling effect (teleportation)
                    const keyframes = [
                        { 
                            transform: \`translate(0, 0) scale(1)\`,
                            opacity: 0.9 
                        },
                        { 
                            transform: \`translate(\${Math.cos(angle) * distance/2}px, \${Math.sin(angle) * distance/2}px) scale(0.5)\`,
                            opacity: 0.5 
                        },
                        { 
                            transform: \`translate(\${Math.cos(angle) * distance}px, \${Math.sin(angle) * distance}px) scale(0)\`,
                            opacity: 0 
                        }
                    ];
                    
                    particle.animate(keyframes, {
                        duration: duration,
                        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                    });
                    
                    setTimeout(() => {
                        particle.remove();
                    }, duration);
                }
            }, i * 150);
        }
    }
    
    // Quantum entanglement between checkboxes
    const checkboxes = document.querySelectorAll('.checkbox-quantum input');
    checkboxes.forEach(cb1 => {
        cb1.addEventListener('change', function() {
            if(this.checked) {
                // When one quantum checkbox is checked, others might get affected
                const probability = 0.3; // 30% chance of entanglement
                if(Math.random() < probability) {
                    checkboxes.forEach(cb2 => {
                        if(cb2 !== this && !cb2.checked && Math.random() < 0.5) {
                            setTimeout(() => {
                                cb2.click();
                                console.log('⚛️ Quantum entanglement detected!');
                            }, 300);
                        }
                    });
                }
            }
        });
    });
});`
},
// ====================================================================
// TEMPLATE 45: Professional Glass Checkbox
// ====================================================================
checkbox45: {
    name: "Glass Morphism Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-checkmark">
            <i class="fas fa-check"></i>
        </span>
        Glass Design Option
    </label>
    <label class="checkbox-glass">
        <input type="checkbox" checked>
        <span class="glass-checkmark">
            <i class="fas fa-check"></i>
        </span>
        Glass Design Checked
    </label>
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-checkmark">
            <i class="fas fa-check"></i>
        </span>
        Glass Design Option 3
    </label>
</div>`,
    css: `.checkbox-glass {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    padding: 10px 15px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.checkbox-glass:hover {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.checkbox-glass input {
    display: none;
}

.glass-checkmark {
    width: 22px;
    height: 22px;
    margin-right: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
    border: 2px solid rgba(124, 58, 237, 0.3);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
}

.glass-checkmark::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.glass-checkmark i {
    font-size: 10px;
    color: transparent;
    transition: all 0.3s ease;
    z-index: 1;
}

.checkbox-glass input:checked + .glass-checkmark {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.1);
}

.checkbox-glass input:checked + .glass-checkmark::before {
    opacity: 1;
}

.checkbox-glass input:checked + .glass-checkmark i {
    color: #7c3aed;
    animation: glassCheck 0.4s ease;
}

@keyframes glassCheck {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`,
    js: `// Glass checkbox functionality
document.querySelectorAll('.checkbox-glass input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const parent = this.closest('.checkbox-glass');
        if (this.checked) {
            parent.style.background = 'rgba(124, 58, 237, 0.05)';
            parent.style.borderColor = 'rgba(124, 58, 237, 0.3)';
        } else {
            parent.style.background = 'rgba(255, 255, 255, 0.7)';
            parent.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 46: Professional Toggle Switch
// ====================================================================
checkbox46: {
    name: "Toggle Switch",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="toggle-switch">
        <input type="checkbox">
        <span class="toggle-slider">
            <span class="toggle-knob"></span>
        </span>
        <span class="toggle-label">Toggle Switch</span>
    </label>
    <label class="toggle-switch">
        <input type="checkbox" checked>
        <span class="toggle-slider">
            <span class="toggle-knob"></span>
        </span>
        <span class="toggle-label">Active Toggle</span>
    </label>
</div>`,
    css: `.toggle-switch {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 20px;
}

.toggle-switch input {
    display: none;
}

.toggle-slider {
    position: relative;
    width: 60px;
    height: 30px;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
    border-radius: 30px;
    margin-right: 15px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.1),
        0 2px 4px rgba(0, 0, 0, 0.05);
}

.toggle-knob {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 2px 6px rgba(0, 0, 0, 0.15),
        0 0 0 2px rgba(124, 58, 237, 0);
}

.toggle-switch input:checked + .toggle-slider {
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(124, 58, 237, 0.3);
}

.toggle-switch input:checked + .toggle-slider .toggle-knob {
    transform: translateX(30px);
    box-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.2),
        0 0 0 2px rgba(255, 255, 255, 0.5);
    animation: knobGlow 0.4s ease;
}

@keyframes knobGlow {
    0% { box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }
    50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.8); }
    100% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(255, 255, 255, 0.5); }
}

.toggle-label {
    font-weight: 500;
    transition: color 0.3s ease;
}

.toggle-switch input:checked ~ .toggle-label {
    color: #7c3aed;
    font-weight: 600;
}`,
    js: `// Toggle switch functionality
document.querySelectorAll('.toggle-switch input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        console.log('Toggle switch:', this.checked ? 'ON' : 'OFF');
    });
});`
},
// ====================================================================
// TEMPLATE 47: Professional Radio Checkbox
// ====================================================================
checkbox47: {
    name: "Radio Style Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-radio">
        <input type="checkbox">
        <span class="radio-circle">
            <span class="radio-dot"></span>
        </span>
        <span class="radio-content">
            <span class="radio-title">Premium Plan</span>
            <span class="radio-description">All features included</span>
        </span>
    </label>
    <label class="checkbox-radio">
        <input type="checkbox" checked>
        <span class="radio-circle">
            <span class="radio-dot"></span>
        </span>
        <span class="radio-content">
            <span class="radio-title">Pro Plan</span>
            <span class="radio-description">Recommended for teams</span>
        </span>
    </label>
</div>`,
    css: `.checkbox-radio {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px;
    border-radius: 12px;
    background: #f8fafc;
    border: 2px solid #e2e8f0;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.checkbox-radio:hover {
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.checkbox-radio input {
    display: none;
}

.radio-circle {
    width: 24px;
    height: 24px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.radio-dot {
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.radio-content {
    flex: 1;
}

.radio-title {
    display: block;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
    font-size: 14px;
}

.radio-description {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.checkbox-radio input:checked + .radio-circle {
    border-color: #7c3aed;
    background: #7c3aed;
    animation: radioPulse 0.6s ease;
}

.checkbox-radio input:checked + .radio-circle .radio-dot {
    transform: scale(1);
    background: white;
}

.checkbox-radio input:checked ~ .radio-content .radio-title {
    color: #7c3aed;
}

.checkbox-radio input:checked {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.03);
}

@keyframes radioPulse {
    0% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(124, 58, 237, 0); }
    100% { box-shadow: 0 0 0 0 rgba(124, 58, 237, 0); }
}`,
    js: `// Radio checkbox functionality
document.querySelectorAll('.checkbox-radio input').forEach(radio => {
    radio.addEventListener('change', function() {
        // Uncheck other radio checkboxes in same container
        const container = this.closest('.checkbox-container');
        if (container) {
            container.querySelectorAll('.checkbox-radio input').forEach(otherRadio => {
                if (otherRadio !== this) {
                    otherRadio.checked = false;
                }
            });
        }
        console.log('Radio selected:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 48: Professional Card Checkbox
// ====================================================================
checkbox48: {
    name: "Card Style Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-card">
        <input type="checkbox">
        <div class="card-content">
            <div class="card-icon">
                <i class="fas fa-star"></i>
            </div>
            <div class="card-text">
                <h4>Premium Feature</h4>
                <p>Access all premium features with this option</p>
            </div>
            <div class="card-check">
                <i class="fas fa-check-circle"></i>
            </div>
        </div>
    </label>
    <label class="checkbox-card">
        <input type="checkbox" checked>
        <div class="card-content">
            <div class="card-icon">
                <i class="fas fa-bolt"></i>
            </div>
            <div class="card-text">
                <h4>Pro Feature</h4>
                <p>Enhanced performance and priority support</p>
            </div>
            <div class="card-check">
                <i class="fas fa-check-circle"></i>
            </div>
        </div>
    </label>
</div>`,
    css: `.checkbox-card {
    display: block;
    cursor: pointer;
    margin-bottom: 15px;
}

.checkbox-card input {
    display: none;
}

.card-content {
    display: flex;
    align-items: center;
    padding: 20px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
}

.card-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
}

.card-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
    transition: all 0.3s ease;
}

.card-icon i {
    font-size: 20px;
    color: #64748b;
    transition: all 0.3s ease;
}

.card-text {
    flex: 1;
}

.card-text h4 {
    margin: 0 0 8px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.card-text p {
    margin: 0;
    color: #64748b;
    font-size: 13px;
    line-height: 1.5;
}

.card-check {
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.card-check i {
    font-size: 24px;
    color: #7c3aed;
}

.checkbox-card:hover .card-content {
    border-color: #7c3aed;
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
}

.checkbox-card input:checked + .card-content {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.02);
}

.checkbox-card input:checked + .card-content::before {
    transform: scaleX(1);
}

.checkbox-card input:checked + .card-content .card-icon {
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
}

.checkbox-card input:checked + .card-content .card-icon i {
    color: white;
}

.checkbox-card input:checked + .card-content .card-text h4 {
    color: #7c3aed;
}

.checkbox-card input:checked + .card-content .card-check {
    opacity: 1;
    transform: scale(1);
    animation: cardCheckBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes cardCheckBounce {
    0% { transform: scale(0) rotate(-180deg); }
    70% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
}`,
    js: `// Card checkbox functionality
document.querySelectorAll('.checkbox-card input').forEach(card => {
    card.addEventListener('change', function() {
        console.log('Card checkbox:', this.checked ? 'Selected' : 'Deselected');
    });
});`
},
// ====================================================================
// TEMPLATE 49: Professional Multi-step Checkbox
// ====================================================================
checkbox49: {
    name: "Multi-step Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-multistep">
        <input type="checkbox">
        <div class="step-indicator">
            <span class="step-number">1</span>
            <span class="step-line"></span>
        </div>
        <div class="step-content">
            <h4>Basic Configuration</h4>
            <p>Set up your basic preferences</p>
        </div>
        <span class="step-status"></span>
    </label>
    <label class="checkbox-multistep">
        <input type="checkbox" checked>
        <div class="step-indicator">
            <span class="step-number">2</span>
            <span class="step-line"></span>
        </div>
        <div class="step-content">
            <h4>Advanced Settings</h4>
            <p>Configure advanced options</p>
        </div>
        <span class="step-status"></span>
    </label>
    <label class="checkbox-multistep">
        <input type="checkbox">
        <div class="step-indicator">
            <span class="step-number">3</span>
            <span class="step-line"></span>
        </div>
        <div class="step-content">
            <h4>Final Review</h4>
            <p>Review and confirm settings</p>
        </div>
        <span class="step-status"></span>
    </label>
</div>`,
    css: `.checkbox-multistep {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    background: white;
    border-radius: 16px;
    margin-bottom: 10px;
    border: 2px solid #f1f5f9;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
}

.checkbox-multistep:hover {
    border-color: #e2e8f0;
    transform: translateX(5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.checkbox-multistep input {
    display: none;
}

.step-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    position: relative;
}

.step-number {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #64748b;
    font-size: 16px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    z-index: 2;
}

.step-line {
    position: absolute;
    top: 40px;
    width: 2px;
    height: calc(100% - 40px);
    background: #e2e8f0;
    transition: all 0.4s ease;
}

.checkbox-multistep:last-child .step-line {
    display: none;
}

.step-content {
    flex: 1;
}

.step-content h4 {
    margin: 0 0 6px 0;
    color: #1e293b;
    font-size: 15px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.step-content p {
    margin: 0;
    color: #64748b;
    font-size: 13px;
}

.step-status {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.step-status::before {
    content: '✓';
    color: white;
    font-size: 12px;
    font-weight: bold;
}

.checkbox-multistep input:checked + .step-indicator .step-number {
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.3);
    animation: stepPulse 0.6s ease;
}

.checkbox-multistep input:checked + .step-indicator .step-line {
    background: linear-gradient(to bottom, #7c3aed, #e2e8f0);
}

.checkbox-multistep input:checked ~ .step-content h4 {
    color: #7c3aed;
}

.checkbox-multistep input:checked ~ .step-status {
    background: #10b981;
    opacity: 1;
    transform: scale(1);
    animation: statusBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes stepPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}

@keyframes statusBounce {
    0% { transform: scale(0) rotate(-180deg); }
    70% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
}`,
    js: `// Multi-step checkbox functionality
document.querySelectorAll('.checkbox-multistep input').forEach(step => {
    step.addEventListener('change', function() {
        console.log('Step ' + this.closest('.checkbox-multistep').querySelector('.step-number').textContent + ':', 
                    this.checked ? 'Completed' : 'Incomplete');
    });
});`
},
// ====================================================================
// TEMPLATE 50: Professional Enterprise Toggle
// ====================================================================
checkbox50: {
    name: "Enterprise Toggle",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="enterprise-toggle">
        <input type="checkbox">
        <span class="toggle-wrapper">
            <span class="toggle-track">
                <span class="toggle-thumb">
                    <span class="thumb-icon">
                        <svg viewBox="0 0 24 24" width="12" height="12">
                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
                </span>
            </span>
            <span class="toggle-labels">
                <span class="label-off">OFF</span>
                <span class="label-on">ON</span>
            </span>
        </span>
        <span class="toggle-text">Enterprise Feature</span>
        <span class="toggle-badge">PRO</span>
    </label>
</div>`,
    css: `.enterprise-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 20px;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    margin-bottom: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.enterprise-toggle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.enterprise-toggle:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.enterprise-toggle input {
    display: none;
}

.toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 20px;
}

.toggle-track {
    position: relative;
    width: 60px;
    height: 32px;
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    border-radius: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle-thumb {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.thumb-icon {
    color: #94a3b8;
    transition: all 0.3s ease;
}

.toggle-labels {
    display: flex;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
}

.label-off, .label-on {
    padding: 2px 8px;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.label-off {
    background: #f1f5f9;
}

.toggle-text {
    flex: 1;
    font-weight: 500;
    color: #1e293b;
    font-size: 15px;
}

.toggle-badge {
    padding: 4px 12px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

/* Checked state */
.enterprise-toggle input:checked + .toggle-wrapper .toggle-track {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.enterprise-toggle input:checked + .toggle-wrapper .toggle-thumb {
    transform: translateX(28px);
    box-shadow: 0 2px 12px rgba(16, 185, 129, 0.3);
}

.enterprise-toggle input:checked + .toggle-wrapper .thumb-icon {
    color: #10b981;
}

.enterprise-toggle input:checked + .toggle-wrapper .toggle-labels .label-off {
    opacity: 0.5;
}

.enterprise-toggle input:checked + .toggle-wrapper .toggle-labels .label-on {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.enterprise-toggle input:checked ~ .toggle-text {
    color: #10b981;
    font-weight: 600;
}

.enterprise-toggle input:checked::before {
    opacity: 1;
}`,
    js: `// Enterprise toggle functionality
document.querySelectorAll('.enterprise-toggle input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        const label = this.closest('.enterprise-toggle').querySelector('.toggle-text');
        label.textContent = this.checked ? 'Enterprise Feature (Enabled)' : 'Enterprise Feature';
        console.log('Enterprise toggle:', this.checked ? 'ENABLED' : 'DISABLED');
    });
});`
},
// ====================================================================
// TEMPLATE 51: Official Dashboard Checkbox
// ====================================================================
checkbox51: {
    name: "Dashboard Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="dashboard-card">
        <label class="dashboard-checkbox">
            <input type="checkbox">
            <span class="dashboard-checkmark">
                <svg class="check-icon" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
            </span>
            <div class="dashboard-content">
                <div class="dashboard-header">
                    <h4>Performance Metrics</h4>
                    <span class="dashboard-status">Inactive</span>
                </div>
                <p class="dashboard-description">Track real-time performance metrics and analytics</p>
                <div class="dashboard-meta">
                    <span class="meta-item">
                        <i class="fas fa-chart-line"></i>
                        Advanced Analytics
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-clock"></i>
                        Real-time Updates
                    </span>
                </div>
            </div>
            <div class="dashboard-actions">
                <button class="dashboard-btn configure">
                    <i class="fas fa-cog"></i>
                </button>
            </div>
        </label>
    </div>
</div>`,
    css: `.dashboard-card {
    background: white;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dashboard-checkbox {
    display: flex;
    align-items: flex-start;
    padding: 24px;
    cursor: pointer;
    position: relative;
}

.dashboard-checkbox input {
    display: none;
}

.dashboard-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
    margin-top: 2px;
}

.check-icon {
    width: 14px;
    height: 14px;
    fill: transparent;
    transition: fill 0.3s ease;
}

.dashboard-content {
    flex: 1;
    min-width: 0;
}

.dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.dashboard-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.dashboard-status {
    padding: 4px 12px;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.dashboard-description {
    margin: 0 0 16px 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.dashboard-meta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
    font-size: 13px;
}

.meta-item i {
    color: #94a3b8;
    font-size: 12px;
}

.dashboard-actions {
    margin-left: 16px;
    display: flex;
    gap: 8px;
}

.dashboard-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    color: #64748b;
}

.dashboard-btn:hover {
    background: #f8fafc;
    color: #3b82f6;
}

/* Checked state */
.dashboard-checkbox input:checked + .dashboard-checkmark {
    border-color: #3b82f6;
    background: #3b82f6;
    animation: checkPulse 0.6s ease;
}

.dashboard-checkbox input:checked + .dashboard-checkmark .check-icon {
    fill: white;
}

.dashboard-checkbox input:checked ~ .dashboard-content .dashboard-header h4 {
    color: #3b82f6;
}

.dashboard-checkbox input:checked ~ .dashboard-content .dashboard-status {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

.dashboard-card input:checked ~ .dashboard-checkbox {
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.02) 0%, transparent 100%);
}

.dashboard-card {
    transition: all 0.3s ease;
}

.dashboard-checkbox:hover ~ .dashboard-card {
    border-color: #cbd5e1;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

@keyframes checkPulse {
    0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
    70% { box-shadow: 0 0 0 10px rgba(59, 130, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
}`,
    js: `// Dashboard checkbox functionality
document.querySelectorAll('.dashboard-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const status = this.closest('.dashboard-checkbox').querySelector('.dashboard-status');
        status.textContent = this.checked ? 'Active' : 'Inactive';
        status.style.background = this.checked ? 'rgba(59, 130, 246, 0.1)' : '#f1f5f9';
        status.style.color = this.checked ? '#3b82f6' : '#64748b';
        console.log('Dashboard feature:', this.checked ? 'ACTIVATED' : 'DEACTIVATED');
    });
});`
},
// ====================================================================
// TEMPLATE 52: Data Grid Checkbox
// ====================================================================
checkbox52: {
    name: "Data Grid Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="data-grid">
        <div class="grid-header">
            <label class="grid-master-checkbox">
                <input type="checkbox" id="masterCheckbox">
                <span class="grid-checkmark"></span>
                <span class="grid-select-all">Select All</span>
            </label>
            <div class="grid-actions">
                <button class="grid-action-btn" data-action="export">
                    <i class="fas fa-download"></i>
                </button>
                <button class="grid-action-btn" data-action="delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
        
        <div class="grid-items">
            <label class="grid-item">
                <input type="checkbox" class="grid-item-checkbox">
                <span class="grid-item-checkmark"></span>
                <div class="grid-item-content">
                    <span class="item-name">User Profile Data</span>
                    <span class="item-meta">Updated 2 hours ago • 245 KB</span>
                </div>
                <span class="item-type">CSV</span>
            </label>
            
            <label class="grid-item">
                <input type="checkbox" class="grid-item-checkbox" checked>
                <span class="grid-item-checkmark"></span>
                <div class="grid-item-content">
                    <span class="item-name">Transaction Logs</span>
                    <span class="item-meta">Updated yesterday • 1.2 MB</span>
                </div>
                <span class="item-type">JSON</span>
            </label>
            
            <label class="grid-item">
                <input type="checkbox" class="grid-item-checkbox">
                <span class="grid-item-checkmark"></span>
                <div class="grid-item-content">
                    <span class="item-name">API Analytics</span>
                    <span class="item-meta">Updated 5 minutes ago • 45 KB</span>
                </div>
                <span class="item-type">XML</span>
            </label>
        </div>
    </div>
</div>`,
    css: `.data-grid {
    background: white;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.grid-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
}

.grid-master-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
}

.grid-master-checkbox input {
    display: none;
}

.grid-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #94a3b8;
    border-radius: 4px;
    position: relative;
    transition: all 0.2s ease;
}

.grid-checkmark::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    background: #3b82f6;
    border-radius: 2px;
    transition: transform 0.2s ease;
}

.grid-select-all {
    font-weight: 600;
    color: #1e293b;
    font-size: 14px;
}

.grid-actions {
    display: flex;
    gap: 8px;
}

.grid-action-btn {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #64748b;
    transition: all 0.2s ease;
}

.grid-action-btn:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
}

.grid-action-btn[data-action="export"]:hover {
    color: #10b981;
}

.grid-action-btn[data-action="delete"]:hover {
    color: #ef4444;
}

.grid-items {
    padding: 8px 0;
}

.grid-item {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.2s ease;
    position: relative;
}

.grid-item:last-child {
    border-bottom: none;
}

.grid-item:hover {
    background: #f8fafc;
}

.grid-item-checkbox {
    display: none;
}

.grid-item-checkmark {
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e1;
    border-radius: 4px;
    margin-right: 12px;
    position: relative;
    transition: all 0.2s ease;
    flex-shrink: 0;
}

.grid-item-checkmark::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    background: #3b82f6;
    border-radius: 2px;
    transition: transform 0.2s ease;
}

.grid-item-content {
    flex: 1;
    min-width: 0;
    margin-right: 16px;
}

.item-name {
    display: block;
    font-weight: 500;
    color: #1e293b;
    font-size: 14px;
    margin-bottom: 4px;
}

.item-meta {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.item-type {
    padding: 4px 12px;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Checked states */
.grid-master-checkbox input:checked + .grid-checkmark {
    border-color: #3b82f6;
    background: #3b82f6;
}

.grid-master-checkbox input:checked + .grid-checkmark::after {
    transform: translate(-50%, -50%) scale(1);
    background: white;
}

.grid-item-checkbox:checked + .grid-item-checkmark {
    border-color: #3b82f6;
    background: #3b82f6;
}

.grid-item-checkbox:checked + .grid-item-checkmark::after {
    transform: translate(-50%, -50%) scale(1);
    background: white;
}

.grid-item-checkbox:checked ~ .grid-item-content .item-name {
    color: #3b82f6;
}

.grid-item-checkbox:checked ~ .item-type {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}`,
    js: `// Data grid functionality
document.addEventListener('DOMContentLoaded', function() {
    const masterCheckbox = document.getElementById('masterCheckbox');
    const itemCheckboxes = document.querySelectorAll('.grid-item-checkbox');
    const actionButtons = document.querySelectorAll('.grid-action-btn');
    
    // Master checkbox functionality
    if (masterCheckbox) {
        masterCheckbox.addEventListener('change', function() {
            itemCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
                checkbox.dispatchEvent(new Event('change'));
            });
        });
    }
    
    // Individual checkbox functionality
    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateMasterCheckbox();
        });
    });
    
    // Action buttons
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            const selectedItems = Array.from(itemCheckboxes).filter(cb => cb.checked);
            
            if (action === 'export' && selectedItems.length > 0) {
                alert(\`Exporting \${selectedItems.length} selected items\`);
            } else if (action === 'delete' && selectedItems.length > 0) {
                if (confirm(\`Delete \${selectedItems.length} selected items?\`)) {
                    alert('Items deleted');
                }
            }
        });
    });
    
    function updateMasterCheckbox() {
        if (!masterCheckbox) return;
        
        const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
        const anyChecked = Array.from(itemCheckboxes).some(cb => cb.checked);
        
        masterCheckbox.checked = allChecked;
        masterCheckbox.indeterminate = anyChecked && !allChecked;
    }
});`
},
// ====================================================================
// TEMPLATE 53: Settings Toggle
// ====================================================================
checkbox53: {
    name: "Settings Toggle",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="settings-panel">
        <div class="settings-section">
            <div class="section-header">
                <h4>Notification Settings</h4>
                <span class="section-badge">3 Active</span>
            </div>
            
            <div class="settings-group">
                <label class="setting-toggle">
                    <input type="checkbox" checked>
                    <span class="setting-info">
                        <i class="setting-icon fas fa-envelope"></i>
                        <div class="setting-text">
                            <span class="setting-title">Email Notifications</span>
                            <span class="setting-desc">Receive updates via email</span>
                        </div>
                    </span>
                    <span class="setting-switch">
                        <span class="switch-slider"></span>
                    </span>
                </label>
                
                <label class="setting-toggle">
                    <input type="checkbox">
                    <span class="setting-info">
                        <i class="setting-icon fas fa-bell"></i>
                        <div class="setting-text">
                            <span class="setting-title">Push Notifications</span>
                            <span class="setting-desc">Desktop and mobile alerts</span>
                        </div>
                    </span>
                    <span class="setting-switch">
                        <span class="switch-slider"></span>
                    </span>
                </label>
                
                <label class="setting-toggle">
                    <input type="checkbox" checked>
                    <span class="setting-info">
                        <i class="setting-icon fas fa-sms"></i>
                        <div class="setting-text">
                            <span class="setting-title">SMS Alerts</span>
                            <span class="setting-desc">Critical alerts via SMS</span>
                        </div>
                    </span>
                    <span class="setting-switch">
                        <span class="switch-slider"></span>
                    </span>
                </label>
            </div>
        </div>
        
        <div class="settings-divider"></div>
        
        <div class="settings-section">
            <div class="section-header">
                <h4>Privacy Settings</h4>
            </div>
            
            <div class="settings-group">
                <label class="setting-toggle">
                    <input type="checkbox" checked>
                    <span class="setting-info">
                        <i class="setting-icon fas fa-user-shield"></i>
                        <div class="setting-text">
                            <span class="setting-title">Two-Factor Auth</span>
                            <span class="setting-desc">Extra security layer</span>
                        </div>
                    </span>
                    <span class="setting-switch">
                        <span class="switch-slider"></span>
                    </span>
                </label>
                
                <label class="setting-toggle">
                    <input type="checkbox">
                    <span class="setting-info">
                        <i class="setting-icon fas fa-history"></i>
                        <div class="setting-text">
                            <span class="setting-title">Activity Logging</span>
                            <span class="setting-desc">Track account activity</span>
                        </div>
                    </span>
                    <span class="setting-switch">
                        <span class="switch-slider"></span>
                    </span>
                </label>
            </div>
        </div>
    </div>
</div>`,
    css: `.settings-panel {
    background: white;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.settings-section {
    padding: 24px;
}

.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.section-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 18px;
    font-weight: 600;
}

.section-badge {
    padding: 4px 12px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.settings-divider {
    height: 1px;
    background: #f1f5f9;
    margin: 0;
}

.settings-group {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.setting-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    background: #f8fafc;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
}

.setting-toggle:hover {
    background: white;
    border-color: #e2e8f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.setting-toggle input {
    display: none;
}

.setting-info {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
}

.setting-icon {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-size: 18px;
    transition: all 0.3s ease;
    flex-shrink: 0;
    border: 1px solid #e2e8f0;
}

.setting-text {
    flex: 1;
    min-width: 0;
}

.setting-title {
    display: block;
    font-weight: 500;
    color: #1e293b;
    font-size: 15px;
    margin-bottom: 4px;
}

.setting-desc {
    display: block;
    font-size: 13px;
    color: #64748b;
}

.setting-switch {
    width: 52px;
    height: 28px;
    position: relative;
    margin-left: 16px;
}

.switch-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
    border-radius: 14px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
}

.switch-slider::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Checked state */
.setting-toggle input:checked ~ .setting-switch .switch-slider {
    background: linear-gradient(135deg, #10b981, #059669);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.setting-toggle input:checked ~ .setting-switch .switch-slider::before {
    transform: translateX(24px);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.setting-toggle input:checked ~ .setting-info .setting-icon {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border-color: rgba(16, 185, 129, 0.3);
}

.setting-toggle input:checked ~ .setting-info .setting-title {
    color: #10b981;
    font-weight: 600;
}

/* Specific colors for different settings */
.setting-toggle:nth-child(1) input:checked ~ .setting-info .setting-icon {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    border-color: rgba(59, 130, 246, 0.3);
}

.setting-toggle:nth-child(2) input:checked ~ .setting-info .setting-icon {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
    border-color: rgba(245, 158, 11, 0.3);
}

.setting-toggle:nth-child(3) input:checked ~ .setting-info .setting-icon {
    background: rgba(139, 92, 246, 0.1);
    color: #8b5cf6;
    border-color: rgba(139, 92, 246, 0.3);
}`,
    js: `// Settings toggle functionality
document.querySelectorAll('.setting-toggle input').forEach(toggle => {
    toggle.addEventListener('change', function() {
        const settingTitle = this.closest('.setting-toggle').querySelector('.setting-title');
        const icon = this.closest('.setting-toggle').querySelector('.setting-icon');
        
        if (this.checked) {
            console.log('Setting enabled:', settingTitle.textContent);
            icon.classList.add('fa-spin');
            setTimeout(() => icon.classList.remove('fa-spin'), 300);
        } else {
            console.log('Setting disabled:', settingTitle.textContent);
        }
        
        // Update active badge count
        updateActiveSettingsCount();
    });
});

function updateActiveSettingsCount() {
    const activeToggles = document.querySelectorAll('.setting-toggle input:checked').length;
    const badge = document.querySelector('.section-badge');
    if (badge) {
        badge.textContent = \`\${activeToggles} Active\`;
    }
}

// Initialize badge count
updateActiveSettingsCount();`
},
// ====================================================================
// TEMPLATE 54: Selection Card
// ====================================================================
checkbox54: {
    name: "Selection Card",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="selection-grid">
        <label class="selection-card">
            <input type="checkbox" name="plan">
            <div class="card-border"></div>
            <div class="card-content">
                <div class="card-header">
                    <span class="card-badge">Popular</span>
                    <span class="card-radio">
                        <span class="radio-indicator"></span>
                    </span>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Professional Plan</h4>
                    <div class="card-price">
                        <span class="price-amount">$29</span>
                        <span class="price-period">/month</span>
                    </div>
                    <ul class="card-features">
                        <li><i class="fas fa-check"></i> 10 Projects</li>
                        <li><i class="fas fa-check"></i> 50 GB Storage</li>
                        <li><i class="fas fa-check"></i> Priority Support</li>
                        <li><i class="fas fa-check"></i> Advanced Analytics</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <span class="card-recommended">Recommended for teams</span>
                </div>
            </div>
        </label>
        
        <label class="selection-card">
            <input type="checkbox" name="plan" checked>
            <div class="card-border"></div>
            <div class="card-content">
                <div class="card-header">
                    <span class="card-badge enterprise">Enterprise</span>
                    <span class="card-radio">
                        <span class="radio-indicator"></span>
                    </span>
                </div>
                <div class="card-body">
                    <h4 class="card-title">Enterprise Plan</h4>
                    <div class="card-price">
                        <span class="price-amount">$99</span>
                        <span class="price-period">/month</span>
                    </div>
                    <ul class="card-features">
                        <li><i class="fas fa-check"></i> Unlimited Projects</li>
                        <li><i class="fas fa-check"></i> 500 GB Storage</li>
                        <li><i class="fas fa-check"></i> 24/7 Support</li>
                        <li><i class="fas fa-check"></i> Custom Solutions</li>
                    </ul>
                </div>
                <div class="card-footer">
                    <span class="card-recommended">For large organizations</span>
                </div>
            </div>
        </label>
    </div>
</div>`,
    css: `.selection-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}

.selection-card {
    display: block;
    cursor: pointer;
    position: relative;
}

.selection-card input {
    display: none;
}

.card-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #e2e8f0;
    border-radius: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

.card-content {
    background: white;
    border-radius: 20px;
    padding: 32px;
    height: 100%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    transition: all 0.3s ease;
}

.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
}

.card-badge {
    padding: 6px 16px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.card-badge.enterprise {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.card-radio {
    width: 24px;
    height: 24px;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.radio-indicator {
    width: 12px;
    height: 12px;
    background: transparent;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.card-body {
    margin-bottom: 24px;
}

.card-title {
    margin: 0 0 16px 0;
    color: #1e293b;
    font-size: 24px;
    font-weight: 700;
    transition: color 0.3s ease;
}

.card-price {
    margin-bottom: 24px;
}

.price-amount {
    font-size: 48px;
    font-weight: 800;
    color: #1e293b;
    line-height: 1;
    transition: color 0.3s ease;
}

.price-period {
    color: #64748b;
    font-size: 16px;
    margin-left: 4px;
}

.card-features {
    list-style: none;
    padding: 0;
    margin: 0;
}

.card-features li {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #64748b;
    margin-bottom: 12px;
    font-size: 14px;
}

.card-features i {
    color: #10b981;
    font-size: 12px;
}

.card-footer {
    padding-top: 20px;
    border-top: 1px solid #f1f5f9;
}

.card-recommended {
    font-size: 13px;
    color: #64748b;
    font-weight: 500;
}

/* Hover state */
.selection-card:hover .card-border {
    border-color: #cbd5e1;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.selection-card:hover .card-radio {
    border-color: #94a3b8;
}

/* Selected state */
.selection-card input:checked ~ .card-border {
    border-color: #3b82f6;
    border-width: 3px;
    transform: translateY(-4px);
    box-shadow: 
        0 20px 40px rgba(59, 130, 246, 0.15),
        0 0 0 1px rgba(59, 130, 246, 0.1);
}

.selection-card input:checked ~ .card-content .card-radio {
    border-color: #3b82f6;
    background: #3b82f6;
}

.selection-card input:checked ~ .card-content .radio-indicator {
    background: white;
    width: 8px;
    height: 8px;
}

.selection-card input:checked ~ .card-content .card-title {
    color: #3b82f6;
}

.selection-card input:checked ~ .card-content .price-amount {
    color: #3b82f6;
}

.selection-card input:checked ~ .card-content {
    background: linear-gradient(180deg, rgba(59, 130, 246, 0.02) 0%, transparent 100%);
}

/* Make cards exclusive (radio behavior) */
.selection-card input:checked ~ .card-border::before {
    content: '✓ SELECTED';
    position: absolute;
    top: -12px;
    right: 20px;
    background: #3b82f6;
    color: white;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}`,
    js: `// Selection card functionality
document.querySelectorAll('.selection-card input[name="plan"]').forEach(card => {
    card.addEventListener('change', function() {
        // Uncheck other cards in the same group
        if (this.checked) {
            document.querySelectorAll('.selection-card input[name="plan"]').forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.checked = false;
                    otherCard.dispatchEvent(new Event('change'));
                }
            });
        }
        
        const cardTitle = this.closest('.selection-card').querySelector('.card-title');
        console.log('Selected plan:', this.checked ? cardTitle.textContent : 'None');
    });
});`
},
// ====================================================================
// TEMPLATE 55: Wizard Step Checkbox
// ====================================================================
checkbox55: {
    name: "Wizard Step Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="wizard-steps">
        <label class="wizard-step">
            <input type="checkbox">
            <div class="step-progress">
                <span class="step-number">1</span>
                <span class="step-connector"></span>
            </div>
            <div class="step-content">
                <div class="step-header">
                    <h4>Account Setup</h4>
                    <span class="step-status">Pending</span>
                </div>
                <p>Configure your account settings and preferences</p>
                <div class="step-actions">
                    <button class="step-btn configure">Configure</button>
                </div>
            </div>
            <div class="step-check">
                <svg class="check-icon" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </div>
        </label>
        
        <label class="wizard-step">
            <input type="checkbox" checked>
            <div class="step-progress">
                <span class="step-number">2</span>
                <span class="step-connector"></span>
            </div>
            <div class="step-content">
                <div class="step-header">
                    <h4>Integration Setup</h4>
                    <span class="step-status">Completed</span>
                </div>
                <p>Connect with your existing tools and services</p>
                <div class="step-actions">
                    <button class="step-btn manage">Manage</button>
                </div>
            </div>
            <div class="step-check">
                <svg class="check-icon" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </div>
        </label>
        
        <label class="wizard-step">
            <input type="checkbox">
            <div class="step-progress">
                <span class="step-number">3</span>
                <span class="step-connector"></span>
            </div>
            <div class="step-content">
                <div class="step-header">
                    <h4>Team Setup</h4>
                    <span class="step-status">Not Started</span>
                </div>
                <p>Invite team members and set permissions</p>
                <div class="step-actions">
                    <button class="step-btn invite">Invite Team</button>
                </div>
            </div>
            <div class="step-check">
                <svg class="check-icon" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </div>
        </label>
    </div>
</div>`,
    css: `.wizard-steps {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.wizard-step {
    display: flex;
    align-items: flex-start;
    padding: 24px;
    cursor: pointer;
    position: relative;
    background: white;
    border: 1px solid #e2e8f0;
    border-bottom: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.wizard-step:first-child {
    border-radius: 12px 12px 0 0;
}

.wizard-step:last-child {
    border-bottom: 1px solid #e2e8f0;
    border-radius: 0 0 12px 12px;
}

.wizard-step:hover {
    background: #f8fafc;
    z-index: 2;
    transform: translateX(4px);
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.05);
}

.wizard-step input {
    display: none;
}

.step-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    position: relative;
}

.step-number {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #64748b;
    font-size: 14px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid transparent;
    position: relative;
    z-index: 2;
}

.step-connector {
    position: absolute;
    top: 36px;
    width: 2px;
    height: calc(100% - 36px);
    background: #e2e8f0;
    transition: all 0.3s ease;
}

.wizard-step:last-child .step-connector {
    display: none;
}

.step-content {
    flex: 1;
    margin-right: 20px;
}

.step-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.step-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.step-status {
    padding: 4px 12px;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.step-content p {
    margin: 0 0 16px 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.step-actions {
    display: flex;
    gap: 8px;
}

.step-btn {
    padding: 6px 16px;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
}

.step-btn:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
}

.step-btn.configure:hover {
    color: #3b82f6;
}

.step-btn.manage:hover {
    color: #10b981;
}

.step-btn.invite:hover {
    color: #8b5cf6;
}

.step-check {
    width: 32px;
    height: 32px;
    background: #f1f5f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.check-icon {
    width: 16px;
    height: 16px;
    fill: transparent;
    transition: fill 0.3s ease;
}

/* Checked state */
.wizard-step input:checked + .step-progress .step-number {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    border-color: #3b82f6;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    animation: stepPulse 0.6s ease;
}

.wizard-step input:checked + .step-progress .step-connector {
    background: linear-gradient(to bottom, #3b82f6, #e2e8f0);
}

.wizard-step input:checked ~ .step-content .step-header h4 {
    color: #3b82f6;
}

.wizard-step input:checked ~ .step-content .step-status {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

.wizard-step input:checked ~ .step-check {
    background: #10b981;
    opacity: 1;
    transform: scale(1);
    animation: checkBounce 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wizard-step input:checked ~ .step-check .check-icon {
    fill: white;
}

/* Progress states */
.wizard-step:nth-child(1) input:checked + .step-progress .step-number {
    background: linear-gradient(135deg, #ef4444, #dc2626);
}

.wizard-step:nth-child(2) input:checked + .step-progress .step-number {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.wizard-step:nth-child(3) input:checked + .step-progress .step-number {
    background: linear-gradient(135deg, #10b981, #059669);
}

@keyframes stepPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}

@keyframes checkBounce {
    0% { transform: scale(0) rotate(-180deg); }
    70% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
}`,
    js: `// Wizard step functionality
document.querySelectorAll('.wizard-step input').forEach(step => {
    step.addEventListener('change', function() {
        const stepNumber = this.closest('.wizard-step').querySelector('.step-number').textContent;
        const stepTitle = this.closest('.wizard-step').querySelector('h4').textContent;
        const status = this.closest('.wizard-step').querySelector('.step-status');
        
        if (this.checked) {
            status.textContent = 'Completed';
            status.style.background = 'rgba(16, 185, 129, 0.1)';
            status.style.color = '#10b981';
            console.log(\`Step \${stepNumber} completed: \${stepTitle}\`);
            
            // Auto-check previous steps
            const allSteps = Array.from(document.querySelectorAll('.wizard-step'));
            const currentIndex = allSteps.indexOf(this.closest('.wizard-step'));
            
            for (let i = 0; i < currentIndex; i++) {
                allSteps[i].querySelector('input').checked = true;
                allSteps[i].querySelector('.step-status').textContent = 'Completed';
                allSteps[i].querySelector('.step-status').style.background = 'rgba(16, 185, 129, 0.1)';
                allSteps[i].querySelector('.step-status').style.color = '#10b981';
            }
        } else {
            status.textContent = 'Pending';
            status.style.background = '#f1f5f9';
            status.style.color = '#64748b';
            console.log(\`Step \${stepNumber} reset: \${stepTitle}\`);
            
            // Uncheck following steps
            const allSteps = Array.from(document.querySelectorAll('.wizard-step'));
            const currentIndex = allSteps.indexOf(this.closest('.wizard-step'));
            
            for (let i = currentIndex + 1; i < allSteps.length; i++) {
                allSteps[i].querySelector('input').checked = false;
                allSteps[i].querySelector('.step-status').textContent = 'Not Started';
                allSteps[i].querySelector('.step-status').style.background = '#f1f5f9';
                allSteps[i].querySelector('.step-status').style.color = '#64748b';
            }
        }
    });
});`
},
// ====================================================================
// TEMPLATE 56: Feature Card Checkbox
// ====================================================================
checkbox56: {
    name: "Feature Card Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="features-grid">
        <label class="feature-card">
            <input type="checkbox">
            <div class="feature-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
            </div>
            <div class="feature-content">
                <h4>Advanced Analytics</h4>
                <p>Real-time analytics dashboard with custom reports</p>
                <div class="feature-meta">
                    <span class="meta-tag">Premium</span>
                    <span class="meta-storage">2 GB</span>
                </div>
            </div>
            <div class="feature-selector">
                <span class="selector-dot"></span>
            </div>
        </label>
        
        <label class="feature-card">
            <input type="checkbox" checked>
            <div class="feature-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
            </div>
            <div class="feature-content">
                <h4>API Access</h4>
                <p>Full REST API access with documentation</p>
                <div class="feature-meta">
                    <span class="meta-tag">Enterprise</span>
                    <span class="meta-storage">Unlimited</span>
                </div>
            </div>
            <div class="feature-selector">
                <span class="selector-dot"></span>
            </div>
        </label>
        
        <label class="feature-card">
            <input type="checkbox">
            <div class="feature-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
            </div>
            <div class="feature-content">
                <h4>Team Collaboration</h4>
                <p>Unlimited team members with role-based access</p>
                <div class="feature-meta">
                    <span class="meta-tag">Business</span>
                    <span class="meta-storage">5 GB</span>
                </div>
            </div>
            <div class="feature-selector">
                <span class="selector-dot"></span>
            </div>
        </label>
    </div>
</div>`,
    css: `.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}

.feature-card {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.feature-card:hover {
    border-color: #cbd5e1;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7c3aed, #ec4899, #f59e0b);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.feature-card input {
    display: none;
}

.feature-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #f8fafc, #f1f5f9);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.feature-icon svg {
    width: 24px;
    height: 24px;
    fill: #64748b;
    transition: all 0.3s ease;
}

.feature-content {
    flex: 1;
    margin-bottom: 20px;
}

.feature-content h4 {
    margin: 0 0 12px 0;
    color: #1e293b;
    font-size: 18px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.feature-content p {
    margin: 0 0 16px 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.feature-meta {
    display: flex;
    gap: 8px;
}

.meta-tag {
    padding: 4px 12px;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.meta-storage {
    padding: 4px 12px;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
}

.feature-selector {
    align-self: flex-end;
}

.selector-dot {
    display: block;
    width: 24px;
    height: 24px;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.selector-dot::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 12px;
    height: 12px;
    background: #3b82f6;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

/* Checked state */
.feature-card input:checked {
    border-color: #3b82f6;
}

.feature-card input:checked::before {
    opacity: 1;
}

.feature-card input:checked ~ .feature-icon {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.feature-card input:checked ~ .feature-icon svg {
    fill: white;
}

.feature-card input:checked ~ .feature-content h4 {
    color: #3b82f6;
}

.feature-card input:checked ~ .feature-content .meta-tag {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

.feature-card input:checked ~ .feature-content .meta-storage {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.feature-card input:checked ~ .feature-selector .selector-dot {
    border-color: #3b82f6;
    background: #3b82f6;
    animation: dotPulse 0.6s ease;
}

.feature-card input:checked ~ .feature-selector .selector-dot::before {
    transform: translate(-50%, -50%) scale(1);
    background: white;
}

/* Different colors for different features */
.feature-card:nth-child(1) input:checked ~ .feature-icon {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.feature-card:nth-child(2) input:checked ~ .feature-icon {
    background: linear-gradient(135deg, #10b981, #059669);
}

.feature-card:nth-child(3) input:checked ~ .feature-icon {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

@keyframes dotPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}`,
    js: `// Feature card functionality
document.querySelectorAll('.feature-card input').forEach(feature => {
    feature.addEventListener('change', function() {
        const featureTitle = this.closest('.feature-card').querySelector('h4').textContent;
        const featureTag = this.closest('.feature-card').querySelector('.meta-tag').textContent;
        
        if (this.checked) {
            console.log(\`\${featureTitle} (\${featureTag}) selected\`);
            
            // Add selected class for visual feedback
            this.closest('.feature-card').classList.add('selected');
            
            // Update total storage
            updateStorageTotal();
        } else {
            console.log(\`\${featureTitle} (\${featureTag}) deselected\`);
            this.closest('.feature-card').classList.remove('selected');
            updateStorageTotal();
        }
    });
});

function updateStorageTotal() {
    const selectedCards = document.querySelectorAll('.feature-card input:checked');
    let totalStorage = 0;
    
    selectedCards.forEach(card => {
        const storageText = card.closest('.feature-card').querySelector('.meta-storage').textContent;
        if (storageText === 'Unlimited') {
            totalStorage = Infinity;
        } else if (storageText.includes('GB')) {
            totalStorage += parseInt(storageText);
        }
    });
    
    console.log('Total selected storage:', totalStorage === Infinity ? 'Unlimited' : totalStorage + ' GB');
}`
},
// ====================================================================
// TEMPLATE 57: Timeline Checkbox
// ====================================================================
checkbox57: {
    name: "Timeline Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="timeline">
        <label class="timeline-item">
            <input type="checkbox">
            <div class="timeline-marker">
                <span class="marker-icon">
                    <i class="fas fa-calendar-alt"></i>
                </span>
                <span class="marker-line"></span>
            </div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h4>Project Kickoff</h4>
                    <span class="timeline-date">Jan 15, 2024</span>
                </div>
                <p>Initial project meeting and requirements gathering</p>
                <div class="timeline-actions">
                    <button class="timeline-btn view">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                    <button class="timeline-btn complete">
                        <i class="fas fa-check"></i>
                        Mark Complete
                    </button>
                </div>
            </div>
            <div class="timeline-status">
                <span class="status-badge pending">Pending</span>
            </div>
        </label>
        
        <label class="timeline-item">
            <input type="checkbox" checked>
            <div class="timeline-marker">
                <span class="marker-icon">
                    <i class="fas fa-code"></i>
                </span>
                <span class="marker-line"></span>
            </div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h4>Development Phase</h4>
                    <span class="timeline-date">Feb 1, 2024</span>
                </div>
                <p>Core development and feature implementation</p>
                <div class="timeline-actions">
                    <button class="timeline-btn view">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                    <button class="timeline-btn complete">
                        <i class="fas fa-check"></i>
                        Mark Complete
                    </button>
                </div>
            </div>
            <div class="timeline-status">
                <span class="status-badge completed">Completed</span>
            </div>
        </label>
        
        <label class="timeline-item">
            <input type="checkbox">
            <div class="timeline-marker">
                <span class="marker-icon">
                    <i class="fas fa-rocket"></i>
                </span>
                <span class="marker-line"></span>
            </div>
            <div class="timeline-content">
                <div class="timeline-header">
                    <h4>Launch</h4>
                    <span class="timeline-date">Mar 1, 2024</span>
                </div>
                <p>Production deployment and launch activities</p>
                <div class="timeline-actions">
                    <button class="timeline-btn view">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                    <button class="timeline-btn complete">
                        <i class="fas fa-check"></i>
                        Mark Complete
                    </button>
                </div>
            </div>
            <div class="timeline-status">
                <span class="status-badge upcoming">Upcoming</span>
            </div>
        </label>
    </div>
</div>`,
    css: `.timeline {
    position: relative;
    padding-left: 40px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e2e8f0;
}

.timeline-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 32px;
    position: relative;
    cursor: pointer;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-item:hover .timeline-marker .marker-icon {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.timeline-item input {
    display: none;
}

.timeline-marker {
    position: absolute;
    left: -40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.marker-icon {
    width: 40px;
    height: 40px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-size: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
}

.marker-line {
    position: absolute;
    top: 40px;
    width: 2px;
    height: calc(100% + 32px);
    background: #e2e8f0;
    transition: all 0.3s ease;
}

.timeline-item:last-child .marker-line {
    display: none;
}

.timeline-content {
    flex: 1;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    margin-left: 20px;
    transition: all 0.3s ease;
}

.timeline-item:hover .timeline-content {
    border-color: #cbd5e1;
    transform: translateX(4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.timeline-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
}

.timeline-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.timeline-date {
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
}

.timeline-content p {
    margin: 0 0 16px 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.timeline-actions {
    display: flex;
    gap: 8px;
}

.timeline-btn {
    padding: 6px 12px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
}

.timeline-btn:hover {
    background: white;
    border-color: #cbd5e1;
}

.timeline-btn.view:hover {
    color: #3b82f6;
}

.timeline-btn.complete:hover {
    color: #10b981;
}

.timeline-status {
    margin-left: 20px;
    align-self: center;
}

.status-badge {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
}

.status-badge.pending {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
}

.status-badge.completed {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.status-badge.upcoming {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

/* Checked state */
.timeline-item input:checked + .timeline-marker .marker-icon {
    background: linear-gradient(135deg, #10b981, #059669);
    border-color: #10b981;
    color: white;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    animation: markerPulse 0.6s ease;
}

.timeline-item input:checked + .timeline-marker .marker-line {
    background: linear-gradient(to bottom, #10b981, #e2e8f0);
}

.timeline-item input:checked ~ .timeline-content {
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.02);
}

.timeline-item input:checked ~ .timeline-content .timeline-header h4 {
    color: #10b981;
}

.timeline-item input:checked ~ .timeline-status .status-badge {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

/* Different colors for different timeline items */
.timeline-item:nth-child(1) input:checked + .timeline-marker .marker-icon {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    border-color: #ef4444;
}

.timeline-item:nth-child(3) input:checked + .timeline-marker .marker-icon {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    border-color: #8b5cf6;
}

@keyframes markerPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}`,
    js: `// Timeline functionality
document.querySelectorAll('.timeline-item input').forEach(item => {
    item.addEventListener('change', function() {
        const timelineTitle = this.closest('.timeline-item').querySelector('h4').textContent;
        const statusBadge = this.closest('.timeline-item').querySelector('.status-badge');
        
        if (this.checked) {
            statusBadge.textContent = 'Completed';
            statusBadge.className = 'status-badge completed';
            console.log(\`Timeline item completed: \${timelineTitle}\`);
            
            // Auto-complete previous items
            const allItems = Array.from(document.querySelectorAll('.timeline-item'));
            const currentIndex = allItems.indexOf(this.closest('.timeline-item'));
            
            for (let i = 0; i < currentIndex; i++) {
                allItems[i].querySelector('input').checked = true;
                allItems[i].querySelector('.status-badge').textContent = 'Completed';
                allItems[i].querySelector('.status-badge').className = 'status-badge completed';
            }
        } else {
            statusBadge.textContent = 'Pending';
            statusBadge.className = 'status-badge pending';
            console.log(\`Timeline item reset: \${timelineTitle}\`);
            
            // Reset following items
            const allItems = Array.from(document.querySelectorAll('.timeline-item'));
            const currentIndex = allItems.indexOf(this.closest('.timeline-item'));
            
            for (let i = currentIndex + 1; i < allItems.length; i++) {
                allItems[i].querySelector('input').checked = false;
                allItems[i].querySelector('.status-badge').textContent = 'Upcoming';
                allItems[i].querySelector('.status-badge').className = 'status-badge upcoming';
            }
        }
    });
});

// Button functionality
document.querySelectorAll('.timeline-btn.complete').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const checkbox = this.closest('.timeline-item').querySelector('input');
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change'));
    });
});

document.querySelectorAll('.timeline-btn.view').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const title = this.closest('.timeline-item').querySelector('h4').textContent;
        alert(\`Viewing details for: \${title}\`);
    });
});`
},
// ====================================================================
// TEMPLATE 58: Comparison Table Checkbox
// ====================================================================
checkbox58: {
    name: "Comparison Table",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="comparison-table">
        <div class="table-header">
            <div class="header-feature">Features</div>
            <div class="header-plan">
                <label class="plan-selector">
                    <input type="checkbox">
                    <div class="plan-card">
                        <h4>Basic</h4>
                        <div class="plan-price">$9<span>/month</span></div>
                    </div>
                </label>
            </div>
            <div class="header-plan">
                <label class="plan-selector">
                    <input type="checkbox" checked>
                    <div class="plan-card">
                        <h4>Pro</h4>
                        <div class="plan-price">$29<span>/month</span></div>
                        <span class="plan-badge">Popular</span>
                    </div>
                </label>
            </div>
            <div class="header-plan">
                <label class="plan-selector">
                    <input type="checkbox">
                    <div class="plan-card">
                        <h4>Enterprise</h4>
                        <div class="plan-price">$99<span>/month</span></div>
                    </div>
                </label>
            </div>
        </div>
        
        <div class="table-body">
            <div class="table-row">
                <div class="row-feature">Storage</div>
                <div class="row-value">10 GB</div>
                <div class="row-value">100 GB</div>
                <div class="row-value">Unlimited</div>
            </div>
            
            <div class="table-row">
                <div class="row-feature">Users</div>
                <div class="row-value">1 User</div>
                <div class="row-value">10 Users</div>
                <div class="row-value">Unlimited</div>
            </div>
            
            <div class="table-row">
                <div class="row-feature">Support</div>
                <div class="row-value">
                    <i class="fas fa-times"></i>
                </div>
                <div class="row-value">
                    <i class="fas fa-check"></i>
                </div>
                <div class="row-value">
                    <i class="fas fa-check"></i>
                    <span class="value-note">24/7</span>
                </div>
            </div>
            
            <div class="table-row">
                <div class="row-feature">API Access</div>
                <div class="row-value">
                    <i class="fas fa-times"></i>
                </div>
                <div class="row-value">
                    <i class="fas fa-check"></i>
                </div>
                <div class="row-value">
                    <i class="fas fa-check"></i>
                    <span class="value-note">Full</span>
                </div>
            </div>
            
            <div class="table-row">
                <div class="row-feature">Analytics</div>
                <div class="row-value">Basic</div>
                <div class="row-value">Advanced</div>
                <div class="row-value">Enterprise</div>
            </div>
        </div>
        
        <div class="table-footer">
            <div class="footer-feature"></div>
            <div class="footer-plan">
                <button class="plan-btn">Get Started</button>
            </div>
            <div class="footer-plan">
                <button class="plan-btn primary">Choose Pro</button>
            </div>
            <div class="footer-plan">
                <button class="plan-btn">Contact Sales</button>
            </div>
        </div>
    </div>
</div>`,
    css: `.comparison-table {
    background: white;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.table-header {
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
}

.header-feature {
    padding: 24px;
    font-weight: 600;
    color: #1e293b;
    font-size: 16px;
}

.header-plan {
    padding: 16px;
    border-left: 1px solid #e2e8f0;
}

.plan-selector {
    display: block;
    cursor: pointer;
}

.plan-selector input {
    display: none;
}

.plan-card {
    padding: 20px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.plan-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.plan-card h4 {
    margin: 0 0 12px 0;
    color: #1e293b;
    font-size: 18px;
    font-weight: 700;
    transition: color 0.3s ease;
}

.plan-price {
    font-size: 32px;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 8px;
    transition: color 0.3s ease;
}

.plan-price span {
    font-size: 14px;
    color: #64748b;
    font-weight: 400;
}

.plan-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 4px 12px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

/* Checked state for plan selector */
.plan-selector input:checked + .plan-card {
    border-color: #3b82f6;
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
}

.plan-selector input:checked + .plan-card::before {
    opacity: 1;
}

.plan-selector input:checked + .plan-card h4 {
    color: #3b82f6;
}

.plan-selector input:checked + .plan-card .plan-price {
    color: #3b82f6;
}

/* Different colors for different plans */
.plan-selector:nth-child(1) input:checked + .plan-card::before {
    background: linear-gradient(90deg, #6b7280, #4b5563);
}

.plan-selector:nth-child(2) input:checked + .plan-card::before {
    background: linear-gradient(90deg, #3b82f6, #2563eb);
}

.plan-selector:nth-child(3) input:checked + .plan-card::before {
    background: linear-gradient(90deg, #10b981, #059669);
}

/* Table body */
.table-body {
    border-bottom: 1px solid #e2e8f0;
}

.table-row {
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    border-bottom: 1px solid #f1f5f9;
}

.table-row:last-child {
    border-bottom: none;
}

.row-feature {
    padding: 16px 24px;
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
    border-right: 1px solid #e2e8f0;
}

.row-value {
    padding: 16px;
    color: #1e293b;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-left: 1px solid #e2e8f0;
}

.row-value i {
    font-size: 16px;
}

.row-value i.fa-check {
    color: #10b981;
}

.row-value i.fa-times {
    color: #ef4444;
}

.value-note {
    font-size: 12px;
    color: #64748b;
}

/* Highlight selected column */
.plan-selector input:checked ~ .table-row .row-value {
    background: rgba(59, 130, 246, 0.02);
}

/* Table footer */
.table-footer {
    display: grid;
    grid-template-columns: 1fr repeat(3, 1fr);
    padding: 24px;
    gap: 16px;
}

.footer-feature {
    /* Empty cell */
}

.footer-plan {
    padding: 0 16px;
}

.plan-btn {
    width: 100%;
    padding: 12px 24px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    color: #64748b;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.plan-btn:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
}

.plan-btn.primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border-color: transparent;
    color: white;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.plan-btn.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
    .table-header,
    .table-row,
    .table-footer {
        grid-template-columns: 1fr;
    }
    
    .header-feature,
    .row-feature,
    .footer-feature {
        display: none;
    }
    
    .header-plan,
    .row-value,
    .footer-plan {
        border-left: none;
        border-bottom: 1px solid #e2e8f0;
    }
    
    .header-plan:last-child,
    .row-value:last-child,
    .footer-plan:last-child {
        border-bottom: none;
    }
}`,
    js: `// Comparison table functionality
document.querySelectorAll('.plan-selector input').forEach(plan => {
    plan.addEventListener('change', function() {
        // Make selection exclusive (radio behavior)
        if (this.checked) {
            document.querySelectorAll('.plan-selector input').forEach(otherPlan => {
                if (otherPlan !== this) {
                    otherPlan.checked = false;
                    otherPlan.dispatchEvent(new Event('change'));
                }
            });
        }
        
        const planName = this.closest('.plan-selector').querySelector('h4').textContent;
        const planPrice = this.closest('.plan-selector').querySelector('.plan-price').textContent;
        
        if (this.checked) {
            console.log(\`Selected plan: \${planName} - \${planPrice}\`);
            
            // Update primary button text
            const primaryBtn = document.querySelector('.plan-btn.primary');
            if (primaryBtn) {
                primaryBtn.textContent = \`Choose \${planName}\`;
            }
        }
    });
});

// Plan button functionality
document.querySelectorAll('.plan-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const planCard = this.closest('.footer-plan').previousElementSibling.previousElementSibling.previousElementSibling;
        const planSelector = planCard.querySelector('.plan-selector input');
        const planName = planCard.querySelector('h4').textContent;
        
        if (planSelector) {
            planSelector.checked = true;
            planSelector.dispatchEvent(new Event('change'));
            alert(\`Selected \${planName} plan!\`);
        }
    });
});

// Initialize with Pro plan selected
document.addEventListener('DOMContentLoaded', function() {
    const proPlan = document.querySelector('.plan-selector:nth-child(2) input');
    if (proPlan) {
        proPlan.checked = true;
        proPlan.dispatchEvent(new Event('change'));
    }
});`
},
// ====================================================================
// TEMPLATE 59: Task Manager Checkbox
// ====================================================================
checkbox59: {
    name: "Task Manager",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="task-manager">
        <div class="task-header">
            <h3>Project Tasks</h3>
            <div class="task-stats">
                <span class="stat-item">
                    <span class="stat-count">2</span>
                    <span class="stat-label">Completed</span>
                </span>
                <span class="stat-item">
                    <span class="stat-count">3</span>
                    <span class="stat-label">Total</span>
                </span>
            </div>
        </div>
        
        <div class="task-list">
            <label class="task-item">
                <input type="checkbox">
                <div class="task-checkbox">
                    <span class="check-icon">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="task-content">
                    <div class="task-main">
                        <h4>Design System Setup</h4>
                        <p>Create design tokens and component library</p>
                    </div>
                    <div class="task-meta">
                        <span class="task-priority high">High</span>
                        <span class="task-due">Due Today</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="task-action-btn edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="task-action-btn delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </label>
            
            <label class="task-item">
                <input type="checkbox" checked>
                <div class="task-checkbox">
                    <span class="check-icon">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="task-content">
                    <div class="task-main">
                        <h4>API Integration</h4>
                        <p>Connect backend services with frontend</p>
                    </div>
                    <div class="task-meta">
                        <span class="task-priority medium">Medium</span>
                        <span class="task-due completed">Completed</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="task-action-btn edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="task-action-btn delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </label>
            
            <label class="task-item">
                <input type="checkbox" checked>
                <div class="task-checkbox">
                    <span class="check-icon">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
                <div class="task-content">
                    <div class="task-main">
                        <h4>Documentation</h4>
                        <p>Write comprehensive API documentation</p>
                    </div>
                    <div class="task-meta">
                        <span class="task-priority low">Low</span>
                        <span class="task-due completed">Completed</span>
                    </div>
                </div>
                <div class="task-actions">
                    <button class="task-action-btn edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="task-action-btn delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </label>
        </div>
        
        <div class="task-add">
            <input type="text" class="task-input" placeholder="Add a new task...">
            <button class="add-btn">
                <i class="fas fa-plus"></i>
                Add Task
            </button>
        </div>
    </div>
</div>`,
    css: `.task-manager {
    background: white;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.task-header {
    padding: 24px;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.task-header h3 {
    margin: 0;
    color: #1e293b;
    font-size: 20px;
    font-weight: 600;
}

.task-stats {
    display: flex;
    gap: 24px;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-count {
    font-size: 24px;
    font-weight: 700;
    color: #3b82f6;
}

.stat-label {
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
}

.task-list {
    padding: 8px 0;
}

.task-item {
    display: flex;
    align-items: center;
    padding: 16px 24px;
    cursor: pointer;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.2s ease;
}

.task-item:hover {
    background: #f8fafc;
}

.task-item:last-child {
    border-bottom: none;
}

.task-item input {
    display: none;
}

.task-checkbox {
    width: 24px;
    height: 24px;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
}

.check-icon {
    color: transparent;
    font-size: 12px;
    transition: all 0.3s ease;
}

.task-content {
    flex: 1;
    margin-right: 16px;
}

.task-main {
    margin-bottom: 8px;
}

.task-main h4 {
    margin: 0 0 4px 0;
    color: #1e293b;
    font-size: 15px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.task-main p {
    margin: 0;
    color: #64748b;
    font-size: 13px;
    line-height: 1.4;
}

.task-meta {
    display: flex;
    gap: 12px;
}

.task-priority {
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.task-priority.high {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.task-priority.medium {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
}

.task-priority.low {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.task-due {
    padding: 2px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

.task-due.completed {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.task-actions {
    display: flex;
    gap: 8px;
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s ease;
}

.task-item:hover .task-actions {
    opacity: 1;
    transform: translateX(0);
}

.task-action-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #64748b;
    font-size: 14px;
    transition: all 0.2s ease;
}

.task-action-btn:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
}

.task-action-btn.edit:hover {
    color: #3b82f6;
}

.task-action-btn.delete:hover {
    color: #ef4444;
}

/* Checked state */
.task-item input:checked + .task-checkbox {
    background: #10b981;
    border-color: #10b981;
    animation: taskCheck 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.task-item input:checked + .task-checkbox .check-icon {
    color: white;
    animation: iconCheck 0.4s ease;
}

.task-item input:checked ~ .task-content .task-main h4 {
    color: #94a3b8;
    text-decoration: line-through;
}

.task-item input:checked ~ .task-content .task-main p {
    color: #cbd5e1;
}

.task-item input:checked ~ .task-content .task-meta .task-priority {
    opacity: 0.5;
}

/* Task add section */
.task-add {
    padding: 24px;
    border-top: 1px solid #e2e8f0;
    display: flex;
    gap: 12px;
}

.task-input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 14px;
    color: #1e293b;
    transition: all 0.2s ease;
}

.task-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.add-btn {
    padding: 12px 24px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.add-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
}

@keyframes taskCheck {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes iconCheck {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
}`,
    js: `// Task manager functionality
let taskCount = 2;
let completedCount = 2;

// Initialize task stats
updateTaskStats();

document.querySelectorAll('.task-item input').forEach(task => {
    task.addEventListener('change', function() {
        const taskTitle = this.closest('.task-item').querySelector('h4').textContent;
        const dueDate = this.closest('.task-item').querySelector('.task-due');
        
        if (this.checked) {
            dueDate.textContent = 'Completed';
            dueDate.className = 'task-due completed';
            completedCount++;
            console.log(\`Task completed: \${taskTitle}\`);
        } else {
            dueDate.textContent = 'Due Today';
            dueDate.className = 'task-due';
            completedCount--;
            console.log(\`Task reopened: \${taskTitle}\`);
        }
        
        updateTaskStats();
    });
});

// Action buttons
document.querySelectorAll('.task-action-btn.edit').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const taskTitle = this.closest('.task-item').querySelector('h4').textContent;
        alert(\`Editing task: \${taskTitle}\`);
    });
});

document.querySelectorAll('.task-action-btn.delete').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const taskItem = this.closest('.task-item');
        const taskTitle = taskItem.querySelector('h4').textContent;
        
        if (confirm(\`Delete task: \${taskTitle}?\`)) {
            taskItem.style.opacity = '0';
            taskItem.style.transform = 'translateX(-100%)';
            taskItem.style.height = '0';
            taskItem.style.padding = '0';
            taskItem.style.margin = '0';
            taskItem.style.border = 'none';
            
            setTimeout(() => {
                taskItem.remove();
                taskCount--;
                if (taskItem.querySelector('input').checked) {
                    completedCount--;
                }
                updateTaskStats();
            }, 300);
        }
    });
});

// Add new task
const taskInput = document.querySelector('.task-input');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener('click', addNewTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addNewTask();
    }
});

function addNewTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;
    
    const newTask = document.createElement('label');
    newTask.className = 'task-item';
    newTask.innerHTML = \`
        <input type="checkbox">
        <div class="task-checkbox">
            <span class="check-icon">
                <i class="fas fa-check"></i>
            </span>
        </div>
        <div class="task-content">
            <div class="task-main">
                <h4>\${taskText}</h4>
                <p>New task added just now</p>
            </div>
            <div class="task-meta">
                <span class="task-priority medium">Medium</span>
                <span class="task-due">Due Today</span>
            </div>
        </div>
        <div class="task-actions">
            <button class="task-action-btn edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="task-action-btn delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    \`;
    
    // Insert before the add section
    const taskList = document.querySelector('.task-list');
    const taskAdd = document.querySelector('.task-add');
    taskList.insertBefore(newTask, taskAdd);
    
    // Add functionality to new task
    const newCheckbox = newTask.querySelector('input');
    const newEditBtn = newTask.querySelector('.task-action-btn.edit');
    const newDeleteBtn = newTask.querySelector('.task-action-btn.delete');
    
    newCheckbox.addEventListener('change', function() {
        const dueDate = this.closest('.task-item').querySelector('.task-due');
        if (this.checked) {
            dueDate.textContent = 'Completed';
            dueDate.className = 'task-due completed';
            completedCount++;
        } else {
            dueDate.textContent = 'Due Today';
            dueDate.className = 'task-due';
            completedCount--;
        }
        updateTaskStats();
    });
    
    newEditBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        alert(\`Editing task: \${taskText}\`);
    });
    
    newDeleteBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (confirm(\`Delete task: \${taskText}?\`)) {
            const taskItem = this.closest('.task-item');
            taskItem.style.opacity = '0';
            taskItem.style.transform = 'translateX(-100%)';
            taskItem.style.height = '0';
            taskItem.style.padding = '0';
            taskItem.style.margin = '0';
            taskItem.style.border = 'none';
            
            setTimeout(() => {
                taskItem.remove();
                taskCount--;
                if (taskItem.querySelector('input').checked) {
                    completedCount--;
                }
                updateTaskStats();
            }, 300);
        }
    });
    
    // Clear input and update stats
    taskInput.value = '';
    taskCount++;
    updateTaskStats();
    console.log(\`New task added: \${taskText}\`);
}

function updateTaskStats() {
    const statCount = document.querySelectorAll('.stat-count');
    if (statCount.length >= 2) {
        statCount[0].textContent = completedCount;
        statCount[1].textContent = taskCount;
    }
}`
},
// ====================================================================
// TEMPLATE 60: Neumorphic Checkbox
// ====================================================================
checkbox60: {
    name: "Neumorphic Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="neumorphic-checkbox">
        <input type="checkbox">
        <span class="neumorphic-box">
            <span class="neumorphic-inner"></span>
        </span>
        <span class="label-text">Neumorphic Style</span>
    </label>
    <label class="neumorphic-checkbox">
        <input type="checkbox" checked>
        <span class="neumorphic-box">
            <span class="neumorphic-inner"></span>
        </span>
        <span class="label-text">Checked State</span>
    </label>
    <label class="neumorphic-checkbox">
        <input type="checkbox">
        <span class="neumorphic-box">
            <span class="neumorphic-inner"></span>
        </span>
        <span class="label-text">Disabled Option</span>
    </label>
</div>`,
    css: `.neumorphic-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
    padding: 12px 16px;
    border-radius: 16px;
    background: #f0f0f3;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.neumorphic-checkbox::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(145deg, #ffffff, #d7d7dc);
    border-radius: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.neumorphic-checkbox:hover::before {
    opacity: 1;
}

.neumorphic-checkbox:hover {
    transform: translateY(-2px);
    box-shadow: 
        9px 9px 16px rgba(163, 177, 198, 0.6),
        -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.neumorphic-checkbox input {
    display: none;
}

.neumorphic-box {
    width: 28px;
    height: 28px;
    margin-right: 16px;
    border-radius: 10px;
    background: #f0f0f3;
    box-shadow: 
        inset 4px 4px 8px rgba(163, 177, 198, 0.6),
        inset -4px -4px 8px rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
}

.neumorphic-inner {
    width: 16px;
    height: 16px;
    background: linear-gradient(145deg, #4f46e5, #7c3aed);
    border-radius: 6px;
    transform: scale(0);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        3px 3px 6px rgba(79, 70, 229, 0.3),
        -3px -3px 6px rgba(124, 58, 237, 0.2);
}

.label-text {
    font-weight: 500;
    color: #4b5563;
    font-size: 15px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

/* Checked state */
.neumorphic-checkbox input:checked + .neumorphic-box {
    box-shadow: 
        4px 4px 8px rgba(163, 177, 198, 0.6),
        -4px -4px 8px rgba(255, 255, 255, 0.8);
}

.neumorphic-checkbox input:checked + .neumorphic-box .neumorphic-inner {
    transform: scale(1);
    animation: neumorphicPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.neumorphic-checkbox input:checked ~ .label-text {
    color: #4f46e5;
    font-weight: 600;
}

/* Glow effect on check */
.neumorphic-checkbox input:checked + .neumorphic-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(79, 70, 229, 0.2), transparent);
    border-radius: 10px;
    animation: neumorphicGlow 0.6s ease;
}

@keyframes neumorphicPop {
    0% { transform: scale(0) rotate(0deg); }
    50% { transform: scale(1.2) rotate(10deg); }
    100% { transform: scale(1) rotate(0deg); }
}

@keyframes neumorphicGlow {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    .neumorphic-checkbox {
        background: #2d3748;
    }
    
    .neumorphic-checkbox::before {
        background: linear-gradient(145deg, #4a5568, #1a202c);
    }
    
    .neumorphic-box {
        background: #2d3748;
        box-shadow: 
            inset 4px 4px 8px rgba(0, 0, 0, 0.3),
            inset -4px -4px 8px rgba(74, 85, 104, 0.2);
    }
    
    .label-text {
        color: #e2e8f0;
    }
    
    .neumorphic-checkbox:hover {
        box-shadow: 
            9px 9px 16px rgba(0, 0, 0, 0.4),
            -9px -9px 16px rgba(74, 85, 104, 0.3);
    }
}`,
    js: `// Neumorphic checkbox functionality
document.querySelectorAll('.neumorphic-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.neumorphic-checkbox').querySelector('.label-text');
        console.log('Neumorphic checkbox:', this.checked ? 'checked' : 'unchecked');
        
        if (this.checked) {
            label.style.textShadow = '0 0 10px rgba(79, 70, 229, 0.3)';
        } else {
            label.style.textShadow = 'none';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 61: Gradient Glow Checkbox
// ====================================================================
checkbox61: {
    name: "Gradient Glow Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="glow-checkbox">
        <input type="checkbox">
        <span class="glow-orb">
            <span class="glow-core"></span>
            <span class="glow-ring"></span>
            <span class="glow-sparkle">
                <i class="fas fa-star"></i>
            </span>
        </span>
        <span class="glow-text">Premium Feature</span>
        <span class="glow-badge">NEW</span>
    </label>
    <label class="glow-checkbox">
        <input type="checkbox" checked>
        <span class="glow-orb">
            <span class="glow-core"></span>
            <span class="glow-ring"></span>
            <span class="glow-sparkle">
                <i class="fas fa-star"></i>
            </span>
        </span>
        <span class="glow-text">Active Feature</span>
        <span class="glow-badge">HOT</span>
    </label>
    <label class="glow-checkbox">
        <input type="checkbox">
        <span class="glow-orb">
            <span class="glow-core"></span>
            <span class="glow-ring"></span>
            <span class="glow-sparkle">
                <i class="fas fa-star"></i>
            </span>
        </span>
        <span class="glow-text">Coming Soon</span>
        <span class="glow-badge">SOON</span>
    </label>
</div>`,
    css: `.glow-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 20px;
    margin-bottom: 16px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.glow-checkbox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.1), 
        rgba(236, 72, 153, 0.1),
        rgba(245, 158, 11, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
}

.glow-checkbox:hover {
    transform: translateY(-3px);
    box-shadow: 
        0 10px 30px rgba(124, 58, 237, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.3);
}

.glow-checkbox:hover::before {
    opacity: 1;
}

.glow-checkbox input {
    display: none;
}

.glow-orb {
    width: 40px;
    height: 40px;
    margin-right: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.glow-core {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #64748b, #475569);
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    z-index: 2;
}

.glow-ring {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid rgba(124, 58, 237, 0.3);
    border-radius: 50%;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    animation: ringPulse 2s ease-in-out infinite;
}

.glow-sparkle {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f59e0b;
    font-size: 10px;
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

.glow-text {
    flex: 1;
    font-weight: 500;
    color: #1e293b;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

.glow-badge {
    padding: 6px 14px;
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-left: 12px;
    transition: all 0.3s ease;
}

/* Different badge colors */
.glow-checkbox:nth-child(1) .glow-badge {
    background: linear-gradient(135deg, #10b981, #059669);
}

.glow-checkbox:nth-child(2) .glow-badge {
    background: linear-gradient(135deg, #ef4444, #dc2626);
}

.glow-checkbox:nth-child(3) .glow-badge {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
}

/* Checked state */
.glow-checkbox input:checked + .glow-orb .glow-core {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    transform: scale(1.2);
    box-shadow: 
        0 0 20px rgba(124, 58, 237, 0.6),
        0 0 40px rgba(236, 72, 153, 0.4);
    animation: coreGlow 1.5s ease-in-out infinite alternate;
}

.glow-checkbox input:checked + .glow-orb .glow-ring {
    border-color: rgba(124, 58, 237, 0.6);
    border-width: 3px;
    animation: ringSpin 2s linear infinite;
}

.glow-checkbox input:checked + .glow-orb .glow-sparkle {
    opacity: 1;
    transform: scale(1);
    animation: sparkleTwinkle 1s ease-in-out infinite alternate;
}

.glow-checkbox input:checked ~ .glow-text {
    color: #7c3aed;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(124, 58, 237, 0.2);
}

.glow-checkbox input:checked ~ .glow-badge {
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

/* Different colors for different checkboxes */
.glow-checkbox:nth-child(1) input:checked + .glow-orb .glow-core {
    background: linear-gradient(135deg, #10b981, #059669);
    box-shadow: 
        0 0 20px rgba(16, 185, 129, 0.6),
        0 0 40px rgba(5, 150, 105, 0.4);
}

.glow-checkbox:nth-child(3) input:checked + .glow-orb .glow-core {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    box-shadow: 
        0 0 20px rgba(59, 130, 246, 0.6),
        0 0 40px rgba(37, 99, 235, 0.4);
}

@keyframes ringPulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.6; }
}

@keyframes ringSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes coreGlow {
    from { box-shadow: 0 0 20px rgba(124, 58, 237, 0.6), 0 0 40px rgba(236, 72, 153, 0.4); }
    to { box-shadow: 0 0 30px rgba(124, 58, 237, 0.8), 0 0 60px rgba(236, 72, 153, 0.6); }
}

@keyframes sparkleTwinkle {
    from { transform: scale(1) rotate(0deg); }
    to { transform: scale(1.2) rotate(180deg); }
}`,
    js: `// Glow checkbox functionality
document.querySelectorAll('.glow-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const text = this.closest('.glow-checkbox').querySelector('.glow-text');
        const badge = this.closest('.glow-checkbox').querySelector('.glow-badge');
        
        if (this.checked) {
            text.style.transform = 'translateX(5px)';
            badge.style.transform = 'scale(1.1)';
            console.log('Premium feature activated');
            
            // Add glow effect to parent
            this.closest('.glow-checkbox').style.boxShadow = 
                '0 0 30px rgba(124, 58, 237, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.4)';
        } else {
            text.style.transform = 'translateX(0)';
            badge.style.transform = 'scale(1)';
            console.log('Premium feature deactivated');
            this.closest('.glow-checkbox').style.boxShadow = '';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 62: Liquid Checkbox
// ====================================================================
checkbox62: {
    name: "Liquid Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="liquid-checkbox">
        <input type="checkbox">
        <span class="liquid-container">
            <span class="liquid-wave"></span>
            <span class="liquid-fill"></span>
            <span class="liquid-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </span>
        </span>
        <span class="liquid-label">Liquid Animation</span>
    </label>
    <label class="liquid-checkbox">
        <input type="checkbox" checked>
        <span class="liquid-container">
            <span class="liquid-wave"></span>
            <span class="liquid-fill"></span>
            <span class="liquid-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </span>
        </span>
        <span class="liquid-label">Filled State</span>
    </label>
    <label class="liquid-checkbox">
        <input type="checkbox">
        <span class="liquid-container">
            <span class="liquid-wave"></span>
            <span class="liquid-fill"></span>
            <span class="liquid-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </span>
        </span>
        <span class="liquid-label">Wave Effect</span>
    </label>
</div>`,
    css: `.liquid-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 24px;
    padding: 16px;
    background: white;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.liquid-checkbox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #a5b4fc, #c4b5fd);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
}

.liquid-checkbox:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(165, 180, 252, 0.2);
}

.liquid-checkbox:hover::before {
    opacity: 0.1;
}

.liquid-checkbox input {
    display: none;
}

.liquid-container {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 16px;
    background: #f1f5f9;
    border: 2px solid #e2e8f0;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}

.liquid-wave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    border-radius: 50% 50% 0 0;
    transform: translateY(100%);
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.9;
}

.liquid-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.liquid-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    z-index: 2;
}

.liquid-icon svg {
    width: 20px;
    height: 20px;
    fill: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.liquid-label {
    font-weight: 500;
    color: #1e293b;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

/* Checked state */
.liquid-checkbox input:checked + .liquid-container {
    border-color: #7c3aed;
    background: rgba(124, 58, 237, 0.1);
    animation: containerPulse 0.6s ease;
}

.liquid-checkbox input:checked + .liquid-container .liquid-wave {
    transform: translateY(0);
    animation: waveRipple 1.2s ease-in-out infinite alternate;
}

.liquid-checkbox input:checked + .liquid-container .liquid-fill {
    transform: scaleY(1);
    animation: fillRipple 0.8s ease;
}

.liquid-checkbox input:checked + .liquid-container .liquid-icon {
    transform: translate(-50%, -50%) scale(1);
    animation: iconBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.liquid-checkbox input:checked ~ .liquid-label {
    color: #7c3aed;
    font-weight: 600;
}

/* Different colors for different checkboxes */
.liquid-checkbox:nth-child(1) input:checked + .liquid-container .liquid-wave,
.liquid-checkbox:nth-child(1) input:checked + .liquid-container .liquid-fill {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.liquid-checkbox:nth-child(2) input:checked + .liquid-container .liquid-wave,
.liquid-checkbox:nth-child(2) input:checked + .liquid-container .liquid-fill {
    background: linear-gradient(135deg, #10b981, #059669);
}

.liquid-checkbox:nth-child(3) input:checked + .liquid-container .liquid-wave,
.liquid-checkbox:nth-child(3) input:checked + .liquid-container .liquid-fill {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

@keyframes containerPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

@keyframes waveRipple {
    0% { 
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        transform: translateY(0) rotate(0deg);
    }
    100% { 
        border-radius: 50% 50% 60% 40% / 60% 30% 70% 40%;
        transform: translateY(-5px) rotate(180deg);
    }
}

@keyframes fillRipple {
    0% { transform: scaleY(0); }
    50% { transform: scaleY(1.1); }
    100% { transform: scaleY(1); }
}

@keyframes iconBounce {
    0% { transform: translate(-50%, -50%) scale(0); }
    70% { transform: translate(-50%, -50%) scale(1.2); }
    100% { transform: translate(-50%, -50%) scale(1); }
}`,
    js: `// Liquid checkbox functionality
document.querySelectorAll('.liquid-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const container = this.closest('.liquid-checkbox').querySelector('.liquid-container');
        
        if (this.checked) {
            console.log('Liquid checkbox filled');
            
            // Add extra animation
            container.style.animation = 'none';
            setTimeout(() => {
                container.style.animation = 'containerPulse 0.6s ease';
            }, 10);
        } else {
            console.log('Liquid checkbox emptied');
            
            // Reset animation
            container.style.animation = 'none';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 63: Cyberpunk Checkbox
// ====================================================================
checkbox63: {
    name: "Cyberpunk Checkbox",
    category: "modern",
    html: `<div class="checkbox-container dark-bg">
    <label class="cyberpunk-checkbox">
        <input type="checkbox">
        <span class="cyber-frame">
            <span class="cyber-grid"></span>
            <span class="cyber-glow"></span>
            <span class="cyber-core">
                <span class="core-pulse"></span>
            </span>
            <span class="cyber-bars">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </span>
        </span>
        <span class="cyber-text">SYSTEM_ACTIVATE</span>
        <span class="cyber-status">[OFFLINE]</span>
    </label>
    <label class="cyberpunk-checkbox">
        <input type="checkbox" checked>
        <span class="cyber-frame">
            <span class="cyber-grid"></span>
            <span class="cyber-glow"></span>
            <span class="cyber-core">
                <span class="core-pulse"></span>
            </span>
            <span class="cyber-bars">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </span>
        </span>
        <span class="cyber-text">NEURAL_LINK</span>
        <span class="cyber-status">[ACTIVE]</span>
    </label>
    <label class="cyberpunk-checkbox">
        <input type="checkbox">
        <span class="cyber-frame">
            <span class="cyber-grid"></span>
            <span class="cyber-glow"></span>
            <span class="cyber-core">
                <span class="core-pulse"></span>
            </span>
            <span class="cyber-bars">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </span>
        </span>
        <span class="cyber-text">AUGMENTATION</span>
        <span class="cyber-status">[STANDBY]</span>
    </label>
</div>`,
    css: `.cyberpunk-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    margin-bottom: 16px;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cyberpunk-checkbox::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #0ea5e9, 
        #3b82f6, 
        #8b5cf6, 
        #ec4899);
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
}

.cyberpunk-checkbox:hover {
    border-color: rgba(56, 189, 248, 0.6);
    box-shadow: 
        0 0 20px rgba(56, 189, 248, 0.2),
        inset 0 0 20px rgba(56, 189, 248, 0.1);
}

.cyberpunk-checkbox:hover::before {
    opacity: 0.3;
}

.cyberpunk-checkbox input {
    display: none;
}

.cyber-frame {
    width: 60px;
    height: 60px;
    margin-right: 24px;
    border: 2px solid rgba(56, 189, 248, 0.4);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background: rgba(15, 23, 42, 0.9);
}

.cyber-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
    background-size: 10px 10px;
    opacity: 0.3;
}

.cyber-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(56, 189, 248, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.cyber-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background: rgba(248, 113, 113, 0.1);
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.core-pulse {
    width: 8px;
    height: 8px;
    background: #f87171;
    border-radius: 50%;
    opacity: 0.5;
    animation: cyberPulse 2s ease-in-out infinite;
}

.cyber-bars {
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
    display: flex;
    justify-content: space-between;
    gap: 2px;
}

.cyber-bars .bar {
    flex: 1;
    height: 4px;
    background: rgba(56, 189, 248, 0.2);
    border-radius: 2px;
    transition: all 0.3s ease;
}

.cyber-text {
    flex: 1;
    font-family: 'Courier New', monospace;
    font-weight: 600;
    color: #e2e8f0;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.cyber-status {
    font-family: 'Courier New', monospace;
    font-weight: 600;
    color: #f87171;
    font-size: 14px;
    letter-spacing: 1px;
    padding: 6px 12px;
    background: rgba(248, 113, 113, 0.1);
    border: 1px solid rgba(248, 113, 113, 0.3);
    border-radius: 4px;
    transition: all 0.3s ease;
}

/* Checked state */
.cyberpunk-checkbox input:checked + .cyber-frame {
    border-color: #0ea5e9;
    box-shadow: 
        inset 0 0 20px rgba(14, 165, 233, 0.3),
        0 0 20px rgba(14, 165, 233, 0.4);
}

.cyberpunk-checkbox input:checked + .cyber-frame .cyber-glow {
    opacity: 1;
    animation: cyberGlow 1.5s ease-in-out infinite alternate;
}

.cyberpunk-checkbox input:checked + .cyber-frame .cyber-core {
    background: rgba(14, 165, 233, 0.2);
    border-color: #0ea5e9;
}

.cyberpunk-checkbox input:checked + .cyber-frame .core-pulse {
    background: #0ea5e9;
    opacity: 1;
    animation: cyberPulseActive 1s ease-in-out infinite;
}

.cyberpunk-checkbox input:checked + .cyber-frame .cyber-bars .bar {
    background: linear-gradient(to top, #0ea5e9, #3b82f6);
    animation: barScan 1.5s ease-in-out infinite;
}

.cyberpunk-checkbox input:checked + .cyber-frame .cyber-bars .bar:nth-child(1) {
    animation-delay: 0s;
}

.cyberpunk-checkbox input:checked + .cyber-frame .cyber-bars .bar:nth-child(2) {
    animation-delay: 0.2s;
}

.cyberpunk-checkbox input:checked + .cyber-frame .cyber-bars .bar:nth-child(3) {
    animation-delay: 0.4s;
}

.cyberpunk-checkbox input:checked ~ .cyber-text {
    color: #0ea5e9;
    text-shadow: 0 0 10px rgba(14, 165, 233, 0.5);
}

.cyberpunk-checkbox input:checked ~ .cyber-status {
    color: #0ea5e9;
    background: rgba(14, 165, 233, 0.1);
    border-color: #0ea5e9;
}

/* Different colors for different systems */
.cyberpunk-checkbox:nth-child(1) input:checked + .cyber-frame {
    border-color: #10b981;
    box-shadow: 
        inset 0 0 20px rgba(16, 185, 129, 0.3),
        0 0 20px rgba(16, 185, 129, 0.4);
}

.cyberpunk-checkbox:nth-child(3) input:checked + .cyber-frame {
    border-color: #8b5cf6;
    box-shadow: 
        inset 0 0 20px rgba(139, 92, 246, 0.3),
        0 0 20px rgba(139, 92, 246, 0.4);
}

@keyframes cyberPulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.8; }
}

@keyframes cyberPulseActive {
    0%, 100% { transform: scale(1); box-shadow: 0 0 10px #0ea5e9; }
    50% { transform: scale(1.5); box-shadow: 0 0 20px #0ea5e9; }
}

@keyframes cyberGlow {
    from { opacity: 0.5; }
    to { opacity: 1; }
}

@keyframes barScan {
    0%, 100% { height: 4px; opacity: 0.5; }
    50% { height: 12px; opacity: 1; }
}`,
    js: `// Cyberpunk checkbox functionality
document.querySelectorAll('.cyberpunk-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const status = this.closest('.cyberpunk-checkbox').querySelector('.cyber-status');
        const text = this.closest('.cyberpunk-checkbox').querySelector('.cyber-text');
        
        if (this.checked) {
            status.textContent = '[ACTIVE]';
            status.style.color = '#0ea5e9';
            status.style.borderColor = '#0ea5e9';
            text.style.animation = 'textFlicker 0.5s ease';
            console.log('System activated:', text.textContent);
            
            setTimeout(() => {
                text.style.animation = '';
            }, 500);
        } else {
            status.textContent = '[OFFLINE]';
            status.style.color = '#f87171';
            status.style.borderColor = '#f87171';
            console.log('System deactivated:', text.textContent);
        }
    });
});`
},
// ====================================================================
// TEMPLATE 64: Floating Island Checkbox
// ====================================================================
checkbox64: {
    name: "Floating Island Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="island-checkbox">
        <input type="checkbox">
        <div class="island-wrapper">
            <div class="island-base">
                <div class="island-terrain"></div>
                <div class="island-trees">
                    <span class="tree"></span>
                    <span class="tree"></span>
                    <span class="tree"></span>
                </div>
                <div class="island-flag">
                    <span class="flag-pole"></span>
                    <span class="flag-cloth"></span>
                </div>
            </div>
            <div class="island-clouds">
                <span class="cloud"></span>
                <span class="cloud"></span>
            </div>
            <div class="island-sun"></div>
        </div>
        <span class="island-label">Discover Island</span>
        <span class="island-badge">🌴</span>
    </label>
    <label class="island-checkbox">
        <input type="checkbox" checked>
        <div class="island-wrapper">
            <div class="island-base">
                <div class="island-terrain"></div>
                <div class="island-trees">
                    <span class="tree"></span>
                    <span class="tree"></span>
                    <span class="tree"></span>
                </div>
                <div class="island-flag">
                    <span class="flag-pole"></span>
                    <span class="flag-cloth"></span>
                </div>
            </div>
            <div class="island-clouds">
                <span class="cloud"></span>
                <span class="cloud"></span>
            </div>
            <div class="island-sun"></div>
        </div>
        <span class="island-label">Explored Island</span>
        <span class="island-badge">🏝️</span>
    </label>
    <label class="island-checkbox">
        <input type="checkbox">
        <div class="island-wrapper">
            <div class="island-base">
                <div class="island-terrain"></div>
                <div class="island-trees">
                    <span class="tree"></span>
                    <span class="tree"></span>
                    <span class="tree"></span>
                </div>
                <div class="island-flag">
                    <span class="flag-pole"></span>
                    <span class="flag-cloth"></span>
                </div>
            </div>
            <div class="island-clouds">
                <span class="cloud"></span>
                    <span class="cloud"></span>
            </div>
            <div class="island-sun"></div>
        </div>
        <span class="island-label">Hidden Island</span>
        <span class="island-badge">🗺️</span>
    </label>
</div>`,
    css: `.island-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    margin-bottom: 20px;
    background: linear-gradient(135deg, #e0f2fe, #dbeafe);
    border-radius: 24px;
    border: 2px solid transparent;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.island-checkbox::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(96, 165, 250, 0.1));
    opacity: 0;
    transition: opacity 0.5s ease;
}

.island-checkbox:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 20px 40px rgba(56, 189, 248, 0.2),
        0 0 0 1px rgba(96, 165, 250, 0.3);
}

.island-checkbox:hover::before {
    opacity: 1;
}

.island-checkbox input {
    display: none;
}

.island-wrapper {
    width: 80px;
    height: 60px;
    margin-right: 20px;
    position: relative;
}

.island-base {
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 30px;
    background: linear-gradient(to top, #10b981, #34d399);
    border-radius: 50% 50% 20% 20%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}

.island-terrain {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #059669, #065f46);
    border-radius: inherit;
    opacity: 0.7;
}

.island-trees {
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    padding: 0 15px;
}

.tree {
    width: 8px;
    height: 15px;
    background: linear-gradient(to top, #065f46, #047857);
    border-radius: 4px 4px 0 0;
    position: relative;
    transition: all 0.3s ease;
}

.tree::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -6px;
    width: 20px;
    height: 12px;
    background: #059669;
    border-radius: 50%;
}

.island-flag {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.3s ease;
}

.flag-pole {
    display: block;
    width: 2px;
    height: 20px;
    background: #92400e;
    margin: 0 auto;
}

.flag-cloth {
    position: absolute;
    top: 0;
    left: 2px;
    width: 12px;
    height: 8px;
    background: linear-gradient(45deg, #ef4444, #f87171);
    border-radius: 2px 4px 4px 0;
    transform: rotate(10deg);
}

.island-clouds {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
}

.cloud {
    position: absolute;
    width: 20px;
    height: 10px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    animation: cloudFloat 6s ease-in-out infinite;
}

.cloud:nth-child(1) {
    left: 5px;
    top: 5px;
    animation-delay: 0s;
}

.cloud:nth-child(2) {
    right: 10px;
    top: 15px;
    animation-delay: 3s;
}

.island-sun {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 15px;
    height: 15px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
    animation: sunGlow 4s ease-in-out infinite alternate;
}

.island-label {
    flex: 1;
    font-weight: 600;
    color: #1e293b;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
}

.island-badge {
    font-size: 20px;
    margin-left: 12px;
    transition: all 0.3s ease;
}

/* Checked state */
.island-checkbox input:checked + .island-wrapper .island-base {
    transform: translateY(-5px);
    animation: islandFloat 3s ease-in-out infinite;
}

.island-checkbox input:checked + .island-wrapper .island-terrain {
    background: linear-gradient(45deg, #f59e0b, #d97706);
    animation: terrainShift 4s ease-in-out infinite alternate;
}

.island-checkbox input:checked + .island-wrapper .tree {
    background: linear-gradient(to top, #92400e, #78350f);
    transform: scale(1.2);
    animation: treeSway 2s ease-in-out infinite;
}

.island-checkbox input:checked + .island-wrapper .tree::before {
    background: #ca8a04;
}

.island-checkbox input:checked + .island-wrapper .island-flag {
    opacity: 1;
    animation: flagWave 1s ease-in-out infinite alternate;
}

.island-checkbox input:checked + .island-wrapper .island-sun {
    animation: sunRise 3s ease-in-out infinite alternate;
}

.island-checkbox input:checked ~ .island-label {
    color: #059669;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(5, 150, 105, 0.2);
}

.island-checkbox input:checked ~ .island-badge {
    transform: scale(1.2) rotate(10deg);
    animation: badgeBounce 0.5s ease;
}

/* Different island types */
.island-checkbox:nth-child(1) input:checked + .island-wrapper .island-terrain {
    background: linear-gradient(45deg, #3b82f6, #1d4ed8);
}

.island-checkbox:nth-child(3) input:checked + .island-wrapper .island-terrain {
    background: linear-gradient(45deg, #8b5cf6, #7c3aed);
}

@keyframes islandFloat {
    0%, 100% { transform: translateY(-5px); }
    50% { transform: translateY(-10px); }
}

@keyframes terrainShift {
    0% { opacity: 0.7; }
    100% { opacity: 0.9; }
}

@keyframes treeSway {
    0%, 100% { transform: scale(1.2) rotate(0deg); }
    50% { transform: scale(1.2) rotate(5deg); }
}

@keyframes flagWave {
    0% { transform: translateX(-50%) rotate(-5deg); }
    100% { transform: translateX(-50%) rotate(5deg); }
}

@keyframes cloudFloat {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(10px); }
}

@keyframes sunGlow {
    0% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
    100% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.8); }
}

@keyframes sunRise {
    0% { transform: translateY(0); }
    100% { transform: translateY(-5px); }
}

@keyframes badgeBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1.2) rotate(10deg); }
}`,
    js: `// Island checkbox functionality
document.querySelectorAll('.island-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.closest('.island-checkbox').querySelector('.island-label');
        const badge = this.closest('.island-checkbox').querySelector('.island-badge');
        
        if (this.checked) {
            console.log('Island discovered!');
            label.style.color = '#059669';
            badge.style.animation = 'badgeBounce 0.5s ease';
            
            // Add celebration effect
            const island = this.closest('.island-checkbox');
            island.style.background = 'linear-gradient(135deg, #d1fae5, #a7f3d0)';
            setTimeout(() => {
                island.style.background = 'linear-gradient(135deg, #e0f2fe, #dbeafe)';
            }, 500);
        } else {
            console.log('Island hidden');
            label.style.color = '#1e293b';
            badge.style.animation = '';
        }
    });
});`
},
// ====================================================================
// TEMPLATE 65: Status Indicator Checkbox
// ====================================================================
checkbox65: {
    name: "Status Indicator",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="status-indicators">
        <label class="status-item">
            <input type="checkbox" name="status">
            <div class="status-indicator">
                <div class="status-dot"></div>
                <div class="status-pulse"></div>
            </div>
            <div class="status-content">
                <div class="status-header">
                    <h4>Server Status</h4>
                    <span class="status-badge offline">OFFLINE</span>
                </div>
                <p>Primary server cluster</p>
                <div class="status-meta">
                    <span class="meta-item">
                        <i class="fas fa-server"></i>
                        12 Cores
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-memory"></i>
                        64 GB RAM
                    </span>
                </div>
            </div>
            <div class="status-actions">
                <button class="status-btn restart">
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        </label>
        
        <label class="status-item">
            <input type="checkbox" name="status" checked>
            <div class="status-indicator">
                <div class="status-dot"></div>
                <div class="status-pulse"></div>
            </div>
            <div class="status-content">
                <div class="status-header">
                    <h4>Database Cluster</h4>
                    <span class="status-badge online">ONLINE</span>
                </div>
                <p>Primary database with replication</p>
                <div class="status-meta">
                    <span class="meta-item">
                        <i class="fas fa-database"></i>
                        500 GB
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-bolt"></i>
                        99.9% Uptime
                    </span>
                </div>
            </div>
            <div class="status-actions">
                <button class="status-btn restart">
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        </label>
        
        <label class="status-item">
            <input type="checkbox" name="status">
            <div class="status-indicator">
                <div class="status-dot"></div>
                <div class="status-pulse"></div>
            </div>
            <div class="status-content">
                <div class="status-header">
                    <h4>Load Balancer</h4>
                    <span class="status-badge warning">WARNING</span>
                </div>
                <p>Traffic distribution system</p>
                <div class="status-meta">
                    <span class="meta-item">
                        <i class="fas fa-chart-line"></i>
                        75% Load
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-users"></i>
                        10K RPM
                    </span>
                </div>
            </div>
            <div class="status-actions">
                <button class="status-btn restart">
                    <i class="fas fa-redo"></i>
                </button>
            </div>
        </label>
    </div>
</div>`,
    css: `.status-indicators {
    background: white;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.status-item {
    display: flex;
    align-items: center;
    padding: 24px;
    cursor: pointer;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.status-item:last-child {
    border-bottom: none;
}

.status-item:hover {
    background: #f8fafc;
}

.status-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: transparent;
    transition: background 0.3s ease;
}

.status-item input {
    display: none;
}

.status-indicator {
    width: 48px;
    height: 48px;
    margin-right: 20px;
    position: relative;
    flex-shrink: 0;
}

.status-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: #94a3b8;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.status-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    background: #94a3b8;
    border-radius: 50%;
    opacity: 0.2;
    transition: all 0.3s ease;
}

.status-content {
    flex: 1;
    margin-right: 20px;
}

.status-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
}

.status-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.status-badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.status-badge.offline {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.status-badge.online {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.status-badge.warning {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
}

.status-content p {
    margin: 0 0 12px 0;
    color: #64748b;
    font-size: 14px;
}

.status-meta {
    display: flex;
    gap: 16px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
    font-size: 13px;
}

.meta-item i {
    color: #94a3b8;
    font-size: 12px;
}

.status-actions {
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s ease;
}

.status-item:hover .status-actions {
    opacity: 1;
    transform: translateX(0);
}

.status-btn {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #64748b;
    font-size: 14px;
    transition: all 0.2s ease;
}

.status-btn:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
}

.status-btn.restart:hover {
    color: #3b82f6;
}

/* Checked state */
.status-item input:checked + .status-indicator .status-dot {
    width: 16px;
    height: 16px;
    background: #10b981;
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
}

.status-item input:checked + .status-indicator .status-pulse {
    width: 48px;
    height: 48px;
    background: #10b981;
    opacity: 0.1;
    animation: statusPulse 2s ease-in-out infinite;
}

.status-item input:checked ~ .status-content .status-header h4 {
    color: #10b981;
}

.status-item input:checked ~ .status-content .status-badge {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.status-item input:checked::before {
    background: #10b981;
}

/* Different status colors */
.status-item:nth-child(1) input:checked + .status-indicator .status-dot,
.status-item:nth-child(1) input:checked + .status-indicator .status-pulse {
    background: #ef4444;
}

.status-item:nth-child(3) input:checked + .status-indicator .status-dot,
.status-item:nth-child(3) input:checked + .status-indicator .status-pulse {
    background: #f59e0b;
}

@keyframes statusPulse {
    0%, 100% { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.1;
    }
    50% { 
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0.2;
    }
}

/* Statistics */
.status-stats {
    padding: 20px 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
}

.stat-item {
    text-align: center;
}

.stat-value {
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 4px;
}

.stat-label {
    display: block;
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
}`,
    js: `// Status indicator functionality
document.addEventListener('DOMContentLoaded', function() {
    const statusItems = document.querySelectorAll('.status-item input[name="status"]');
    const restartButtons = document.querySelectorAll('.status-btn.restart');
    
    // Update statistics
    function updateStatusStats() {
        const totalItems = statusItems.length;
        const onlineItems = Array.from(statusItems).filter(item => item.checked).length;
        
        // Update stats display if exists
        const statsContainer = document.querySelector('.status-stats');
        if (statsContainer) {
            statsContainer.innerHTML = \`
                <div class="stat-item">
                    <span class="stat-value">\${onlineItems}</span>
                    <span class="stat-label">Online</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">\${totalItems - onlineItems}</span>
                    <span class="stat-label">Offline</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">\${Math.round((onlineItems / totalItems) * 100)}%</span>
                    <span class="stat-label">Uptime</span>
                </div>
            \`;
        }
        
        console.log(\`Status: \${onlineItems}/\${totalItems} systems online\`);
    }
    
    // Status toggle functionality
    statusItems.forEach(item => {
        item.addEventListener('change', function() {
            const badge = this.closest('.status-item').querySelector('.status-badge');
            const header = this.closest('.status-item').querySelector('h4');
            
            if (this.checked) {
                badge.textContent = 'ONLINE';
                badge.className = 'status-badge online';
                console.log(\`\${header.textContent} is now ONLINE\`);
            } else {
                badge.textContent = 'OFFLINE';
                badge.className = 'status-badge offline';
                console.log(\`\${header.textContent} is now OFFLINE\`);
            }
            
            updateStatusStats();
        });
    });
    
    // Restart button functionality
    restartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const statusItem = this.closest('.status-item');
            const checkbox = statusItem.querySelector('input');
            const header = statusItem.querySelector('h4');
            
            // Show restarting animation
            const badge = statusItem.querySelector('.status-badge');
            badge.textContent = 'RESTARTING';
            badge.className = 'status-badge warning';
            
            // Simulate restart process
            setTimeout(() => {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event('change'));
                console.log(\`\${header.textContent} restarted successfully\`);
            }, 2000);
        });
    });
    
    // Initialize stats
    updateStatusStats();
});`
},
// ====================================================================
// TEMPLATE 66: Compliance Toggle
// ====================================================================
checkbox66: {
    name: "Compliance Toggle",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="compliance-panel">
        <div class="compliance-header">
            <h3>Security Compliance</h3>
            <div class="compliance-score">
                <div class="score-circle">
                    <svg class="score-svg" width="80" height="80">
                        <circle class="score-bg" cx="40" cy="40" r="36"></circle>
                        <circle class="score-progress" cx="40" cy="40" r="36"></circle>
                    </svg>
                    <span class="score-value">75%</span>
                </div>
            </div>
        </div>
        
        <div class="compliance-list">
            <label class="compliance-item">
                <input type="checkbox" checked>
                <div class="compliance-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="compliance-content">
                    <h4>Data Encryption</h4>
                    <p>Encrypt all data at rest and in transit</p>
                    <div class="compliance-standards">
                        <span class="standard-tag">GDPR</span>
                        <span class="standard-tag">HIPAA</span>
                        <span class="standard-tag">SOC2</span>
                    </div>
                </div>
                <div class="compliance-toggle">
                    <span class="toggle-switch"></span>
                </div>
            </label>
            
            <label class="compliance-item">
                <input type="checkbox">
                <div class="compliance-icon">
                    <i class="fas fa-user-lock"></i>
                </div>
                <div class="compliance-content">
                    <h4>Access Control</h4>
                    <p>Role-based access control implementation</p>
                    <div class="compliance-standards">
                        <span class="standard-tag">ISO27001</span>
                        <span class="standard-tag">NIST</span>
                    </div>
                </div>
                <div class="compliance-toggle">
                    <span class="toggle-switch"></span>
                </div>
            </label>
            
            <label class="compliance-item">
                <input type="checkbox" checked>
                <div class="compliance-icon">
                    <i class="fas fa-history"></i>
                </div>
                <div class="compliance-content">
                    <h4>Audit Logging</h4>
                    <p>Comprehensive audit trail for all actions</p>
                    <div class="compliance-standards">
                        <span class="standard-tag">PCI-DSS</span>
                        <span class="standard-tag">SOX</span>
                    </div>
                </div>
                <div class="compliance-toggle">
                    <span class="toggle-switch"></span>
                </div>
            </label>
        </div>
        
        <div class="compliance-footer">
            <button class="compliance-btn generate">
                <i class="fas fa-file-pdf"></i>
                Generate Report
            </button>
            <button class="compliance-btn export">
                <i class="fas fa-download"></i>
                Export Compliance
            </button>
        </div>
    </div>
</div>`,
    css: `.compliance-panel {
    background: white;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.compliance-header {
    padding: 32px;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.compliance-header h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
}

.compliance-score {
    display: flex;
    align-items: center;
    gap: 16px;
}

.score-circle {
    position: relative;
    width: 80px;
    height: 80px;
}

.score-svg {
    transform: rotate(-90deg);
}

.score-bg {
    fill: none;
    stroke: rgba(255, 255, 255, 0.1);
    stroke-width: 8;
}

.score-progress {
    fill: none;
    stroke: #10b981;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 226.2;
    stroke-dashoffset: 56.55;
    transition: stroke-dashoffset 1s ease;
}

.score-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 700;
    color: white;
}

.compliance-list {
    padding: 24px;
}

.compliance-item {
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 16px;
    background: #f8fafc;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.compliance-item:hover {
    background: white;
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.compliance-item:last-child {
    margin-bottom: 0;
}

.compliance-item input {
    display: none;
}

.compliance-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: white;
    font-size: 20px;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.compliance-content {
    flex: 1;
    margin-right: 20px;
}

.compliance-content h4 {
    margin: 0 0 8px 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.compliance-content p {
    margin: 0 0 12px 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.compliance-standards {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.standard-tag {
    padding: 4px 10px;
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
}

.compliance-toggle {
    margin-left: auto;
}

.toggle-switch {
    display: block;
    width: 52px;
    height: 28px;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
    border-radius: 14px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.toggle-switch::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Checked state */
.compliance-item input:checked + .compliance-icon {
    background: linear-gradient(135deg, #10b981, #059669);
    animation: iconBounce 0.6s ease;
}

.compliance-item input:checked ~ .compliance-content h4 {
    color: #10b981;
}

.compliance-item input:checked ~ .compliance-content .standard-tag {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.compliance-item input:checked ~ .compliance-toggle .toggle-switch {
    background: linear-gradient(135deg, #10b981, #059669);
    box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
}

.compliance-item input:checked ~ .compliance-toggle .toggle-switch::before {
    transform: translateX(24px);
    box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

/* Different icon colors */
.compliance-item:nth-child(2) .compliance-icon {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.compliance-item:nth-child(3) .compliance-icon {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

@keyframes iconBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1); }
}

/* Footer */
.compliance-footer {
    padding: 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}

.compliance-btn {
    padding: 12px 24px;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.compliance-btn.generate {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
}

.compliance-btn.export {
    background: white;
    border: 1px solid #e2e8f0;
    color: #1e293b;
}

.compliance-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.compliance-btn.export:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
}`,
    js: `// Compliance toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const complianceItems = document.querySelectorAll('.compliance-item input');
    const scoreProgress = document.querySelector('.score-progress');
    const scoreValue = document.querySelector('.score-value');
    const generateBtn = document.querySelector('.compliance-btn.generate');
    const exportBtn = document.querySelector('.compliance-btn.export');
    
    // Calculate and update compliance score
    function updateComplianceScore() {
        const totalItems = complianceItems.length;
        const compliantItems = Array.from(complianceItems).filter(item => item.checked).length;
        const percentage = Math.round((compliantItems / totalItems) * 100);
        
        // Update circular progress
        const circumference = 2 * Math.PI * 36;
        const offset = circumference - (percentage / 100) * circumference;
        
        if (scoreProgress) {
            scoreProgress.style.strokeDashoffset = offset;
        }
        
        if (scoreValue) {
            scoreValue.textContent = \`\${percentage}%\`;
            
            // Update color based on percentage
            if (percentage >= 90) {
                scoreProgress.style.stroke = '#10b981';
                scoreValue.style.color = '#10b981';
            } else if (percentage >= 70) {
                scoreProgress.style.stroke = '#f59e0b';
                scoreValue.style.color = '#f59e0b';
            } else {
                scoreProgress.style.stroke = '#ef4444';
                scoreValue.style.color = '#ef4444';
            }
        }
        
        console.log(\`Compliance Score: \${percentage}% (\${compliantItems}/\${totalItems})\`);
    }
    
    // Compliance toggle functionality
    complianceItems.forEach(item => {
        item.addEventListener('change', function() {
            const itemName = this.closest('.compliance-item').querySelector('h4').textContent;
            
            if (this.checked) {
                console.log(\`Compliance enabled: \${itemName}\`);
            } else {
                console.log(\`Compliance disabled: \${itemName}\`);
            }
            
            updateComplianceScore();
        });
    });
    
    // Button functionality
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            const compliantItems = Array.from(complianceItems).filter(item => item.checked);
            alert(\`Generating compliance report for \${compliantItems.length} items\`);
            
            // Simulate report generation
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-file-pdf"></i> Report Generated';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-file-pdf"></i> Generate Report';
                }, 2000);
            }, 1500);
        });
    }
    
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            alert('Exporting compliance configuration');
            
            // Simulate export
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exporting...';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-download"></i> Exported';
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-download"></i> Export Compliance';
                }, 2000);
            }, 1500);
        });
    }
    
    // Initialize score
    updateComplianceScore();
});`
},
// ====================================================================
// TEMPLATE 67: Resource Allocation
// ====================================================================
checkbox67: {
    name: "Resource Allocation",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="resource-allocation">
        <div class="resource-header">
            <h3>Resource Allocation</h3>
            <div class="resource-stats">
                <div class="stat-card">
                    <span class="stat-label">Allocated</span>
                    <span class="stat-value">8/16</span>
                    <div class="stat-bar">
                        <div class="bar-fill" style="width: 50%"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="resource-grid">
            <label class="resource-card">
                <input type="checkbox">
                <div class="resource-icon">
                    <i class="fas fa-microchip"></i>
                </div>
                <div class="resource-info">
                    <h4>CPU Cores</h4>
                    <div class="resource-meta">
                        <span class="resource-usage">2/4 Cores</span>
                        <span class="resource-status available">Available</span>
                    </div>
                    <div class="resource-bar">
                        <div class="usage-fill cpu" style="width: 50%"></div>
                    </div>
                </div>
                <div class="resource-selector">
                    <span class="selector-check">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
            </label>
            
            <label class="resource-card">
                <input type="checkbox" checked>
                <div class="resource-icon">
                    <i class="fas fa-memory"></i>
                </div>
                <div class="resource-info">
                    <h4>Memory</h4>
                    <div class="resource-meta">
                        <span class="resource-usage">16/32 GB</span>
                        <span class="resource-status allocated">Allocated</span>
                    </div>
                    <div class="resource-bar">
                        <div class="usage-fill memory" style="width: 50%"></div>
                    </div>
                </div>
                <div class="resource-selector">
                    <span class="selector-check">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
            </label>
            
            <label class="resource-card">
                <input type="checkbox">
                <div class="resource-icon">
                    <i class="fas fa-hdd"></i>
                </div>
                <div class="resource-info">
                    <h4>Storage</h4>
                    <div class="resource-meta">
                        <span class="resource-usage">100/500 GB</span>
                        <span class="resource-status available">Available</span>
                    </div>
                    <div class="resource-bar">
                        <div class="usage-fill storage" style="width: 20%"></div>
                    </div>
                </div>
                <div class="resource-selector">
                    <span class="selector-check">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
            </label>
            
            <label class="resource-card">
                <input type="checkbox" checked>
                <div class="resource-icon">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="resource-info">
                    <h4>Bandwidth</h4>
                    <div class="resource-meta">
                        <span class="resource-usage">1/2 Gbps</span>
                        <span class="resource-status allocated">Allocated</span>
                    </div>
                    <div class="resource-bar">
                        <div class="usage-fill bandwidth" style="width: 50%"></div>
                    </div>
                </div>
                <div class="resource-selector">
                    <span class="selector-check">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
            </label>
        </div>
        
        <div class="resource-summary">
            <div class="summary-item">
                <span class="summary-label">Total Allocation</span>
                <span class="summary-value">$450/month</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Estimated Cost</span>
                <span class="summary-value">$5,400/year</span>
            </div>
            <button class="resource-btn allocate">
                <i class="fas fa-rocket"></i>
                Deploy Resources
            </button>
        </div>
    </div>
</div>`,
    css: `.resource-allocation {
    background: white;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.resource-header {
    padding: 24px;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.resource-header h3 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
}

.resource-stats {
    display: flex;
    gap: 20px;
}

.stat-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 16px;
    border-radius: 12px;
    min-width: 180px;
}

.stat-label {
    display: block;
    font-size: 12px;
    color: #94a3b8;
    font-weight: 500;
    margin-bottom: 8px;
}

.stat-value {
    display: block;
    font-size: 28px;
    font-weight: 800;
    color: white;
    margin-bottom: 12px;
}

.stat-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
}

.bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 3px;
    transition: width 0.5s ease;
}

.resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 24px;
}

.resource-card {
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.resource-card:hover {
    border-color: #cbd5e1;
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.resource-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.resource-card input {
    display: none;
}

.resource-icon {
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-size: 24px;
    margin-bottom: 20px;
    transition: all 0.3s ease;
}

.resource-info {
    margin-bottom: 20px;
}

.resource-info h4 {
    margin: 0 0 12px 0;
    color: #1e293b;
    font-size: 18px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.resource-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.resource-usage {
    color: #64748b;
    font-size: 14px;
    font-weight: 500;
}

.resource-status {
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.resource-status.available {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.resource-status.allocated {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
}

.resource-bar {
    height: 6px;
    background: #f1f5f9;
    border-radius: 3px;
    overflow: hidden;
}

.usage-fill {
    height: 100%;
    border-radius: 3px;
    transition: width 0.5s ease;
}

.usage-fill.cpu {
    background: linear-gradient(90deg, #ef4444, #f87171);
}

.usage-fill.memory {
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
}

.usage-fill.storage {
    background: linear-gradient(90deg, #10b981, #34d399);
}

.usage-fill.bandwidth {
    background: linear-gradient(90deg, #8b5cf6, #a78bfa);
}

.resource-selector {
    position: absolute;
    top: 20px;
    right: 20px;
}

.selector-check {
    width: 24px;
    height: 24px;
    border: 2px solid #e2e8f0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: transparent;
    font-size: 12px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Checked state */
.resource-card input:checked {
    border-color: #3b82f6;
}

.resource-card input:checked::before {
    opacity: 1;
}

.resource-card input:checked + .resource-icon {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
}

.resource-card input:checked ~ .resource-info h4 {
    color: #3b82f6;
}

.resource-card input:checked ~ .resource-selector .selector-check {
    background: #3b82f6;
    border-color: #3b82f6;
    color: white;
    animation: checkPop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Different icon colors */
.resource-card:nth-child(2) input:checked + .resource-icon {
    background: linear-gradient(135deg, #10b981, #059669);
}

.resource-card:nth-child(3) input:checked + .resource-icon {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.resource-card:nth-child(4) input:checked + .resource-icon {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

@keyframes checkPop {
    0% { transform: scale(0); }
    70% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

/* Summary section */
.resource-summary {
    padding: 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.summary-item {
    text-align: center;
}

.summary-label {
    display: block;
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
    margin-bottom: 4px;
}

.summary-value {
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: #1e293b;
}

.resource-btn {
    padding: 14px 32px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.resource-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.3);
}

.resource-btn:active {
    transform: translateY(0);
}`,
    js: `// Resource allocation functionality
document.addEventListener('DOMContentLoaded', function() {
    const resourceCards = document.querySelectorAll('.resource-card input');
    const allocateBtn = document.querySelector('.resource-btn.allocate');
    const statValue = document.querySelector('.stat-value');
    const barFill = document.querySelector('.bar-fill');
    const summaryValues = document.querySelectorAll('.summary-value');
    
    // Resource costs (monthly)
    const resourceCosts = {
        'CPU Cores': 100,
        'Memory': 200,
        'Storage': 100,
        'Bandwidth': 50
    };
    
    // Update allocation statistics
    function updateAllocationStats() {
        const totalResources = resourceCards.length;
        const allocatedResources = Array.from(resourceCards).filter(card => card.checked).length;
        const percentage = Math.round((allocatedResources / totalResources) * 100);
        
        // Update stats
        if (statValue) {
            statValue.textContent = \`\${allocatedResources}/\${totalResources}\`;
        }
        
        if (barFill) {
            barFill.style.width = \`\${percentage}%\`;
        }
        
        // Calculate total cost
        let totalCost = 0;
        resourceCards.forEach(card => {
            if (card.checked) {
                const resourceName = card.closest('.resource-card').querySelector('h4').textContent;
                totalCost += resourceCosts[resourceName] || 0;
            }
        });
        
        // Update summary
        if (summaryValues.length >= 2) {
            summaryValues[0].textContent = \`$\${totalCost}/month\`;
            summaryValues[1].textContent = \`$\${totalCost * 12}/year\`;
        }
        
        console.log(\`Allocated: \${allocatedResources}/\${totalResources} resources (\${percentage}%)\`);
        console.log(\`Total Cost: $\${totalCost}/month\`);
    }
    
    // Resource card functionality
    resourceCards.forEach(card => {
        card.addEventListener('change', function() {
            const resourceName = this.closest('.resource-card').querySelector('h4').textContent;
            const status = this.closest('.resource-card').querySelector('.resource-status');
            
            if (this.checked) {
                status.textContent = 'Allocated';
                status.className = 'resource-status allocated';
                console.log(\`Allocated: \${resourceName}\`);
                
                // Update usage visualization
                const usageFill = this.closest('.resource-card').querySelector('.usage-fill');
                const currentWidth = parseFloat(usageFill.style.width);
                usageFill.style.width = Math.min(currentWidth + 25, 100) + '%';
            } else {
                status.textContent = 'Available';
                status.className = 'resource-status available';
                console.log(\`Released: \${resourceName}\`);
                
                // Update usage visualization
                const usageFill = this.closest('.resource-card').querySelector('.usage-fill');
                const currentWidth = parseFloat(usageFill.style.width);
                usageFill.style.width = Math.max(currentWidth - 25, 0) + '%';
            }
            
            updateAllocationStats();
        });
    });
    
    // Allocate button functionality
    if (allocateBtn) {
        allocateBtn.addEventListener('click', function() {
            const allocatedCards = Array.from(resourceCards).filter(card => card.checked);
            
            if (allocatedCards.length === 0) {
                alert('Please select at least one resource to allocate');
                return;
            }
            
            // Simulate allocation process
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deploying...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Deployed!';
                alert(\`Successfully deployed \${allocatedCards.length} resources\`);
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-rocket"></i> Deploy Resources';
                    this.disabled = false;
                }, 2000);
            }, 2000);
        });
    }
    
    // Initialize stats
    updateAllocationStats();
});`
},
// ====================================================================
// TEMPLATE 68: Approval Workflow
// ====================================================================
checkbox68: {
    name: "Approval Workflow",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="approval-workflow">
        <div class="workflow-header">
            <h3>Document Approval</h3>
            <div class="workflow-progress">
                <div class="progress-steps">
                    <span class="step" data-step="1">Review</span>
                    <span class="step" data-step="2">Approve</span>
                    <span class="step" data-step="3">Finalize</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 33%"></div>
                </div>
            </div>
        </div>
        
        <div class="approval-list">
            <label class="approval-item">
                <input type="checkbox" data-role="reviewer">
                <div class="approval-avatar">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="John">
                </div>
                <div class="approval-content">
                    <div class="approval-header">
                        <h4>John Anderson</h4>
                        <span class="approval-role">Technical Reviewer</span>
                    </div>
                    <p>Review technical specifications and implementation</p>
                    <div class="approval-meta">
                        <span class="meta-item">
                            <i class="fas fa-clock"></i>
                            Pending
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-calendar"></i>
                            Due: Today
                        </span>
                    </div>
                </div>
                <div class="approval-status">
                    <span class="status-badge pending">Pending</span>
                </div>
            </label>
            
            <label class="approval-item">
                <input type="checkbox" data-role="approver" checked>
                <div class="approval-avatar">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Sarah">
                </div>
                <div class="approval-content">
                    <div class="approval-header">
                        <h4>Sarah Johnson</h4>
                        <span class="approval-role">Department Head</span>
                    </div>
                    <p>Approve budget allocation and resource planning</p>
                    <div class="approval-meta">
                        <span class="meta-item">
                            <i class="fas fa-clock"></i>
                            Approved
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-calendar"></i>
                            Completed: Yesterday
                        </span>
                    </div>
                </div>
                <div class="approval-status">
                    <span class="status-badge approved">Approved</span>
                </div>
            </label>
            
            <label class="approval-item">
                <input type="checkbox" data-role="finalizer">
                <div class="approval-avatar">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" alt="Michael">
                </div>
                <div class="approval-content">
                    <div class="approval-header">
                        <h4>Michael Chen</h4>
                        <span class="approval-role">Legal Counsel</span>
                    </div>
                    <p>Final legal review and compliance check</p>
                    <div class="approval-meta">
                        <span class="meta-item">
                            <i class="fas fa-clock"></i>
                            Waiting
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-calendar"></i>
                            Due: Tomorrow
                        </span>
                    </div>
                </div>
                <div class="approval-status">
                    <span class="status-badge waiting">Waiting</span>
                </div>
            </label>
        </div>
        
        <div class="workflow-actions">
            <div class="action-info">
                <span class="info-text">2/3 approvals required</span>
                <span class="info-deadline">
                    <i class="fas fa-exclamation-circle"></i>
                    Deadline: 48 hours
                </span>
            </div>
            <div class="action-buttons">
                <button class="action-btn send">
                    <i class="fas fa-paper-plane"></i>
                    Send Reminders
                </button>
                <button class="action-btn escalate">
                    <i class="fas fa-flag"></i>
                    Escalate
                </button>
            </div>
        </div>
    </div>
</div>`,
    css: `.approval-workflow {
    background: white;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.workflow-header {
    padding: 24px;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
}

.workflow-header h3 {
    margin: 0 0 20px 0;
    font-size: 22px;
    font-weight: 700;
}

.workflow-progress {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 12px;
}

.progress-steps {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    position: relative;
}

.step {
    font-size: 14px;
    font-weight: 600;
    color: #94a3b8;
    position: relative;
    z-index: 2;
    background: rgba(15, 23, 42, 0.8);
    padding: 0 8px;
    transition: color 0.3s ease;
}

.step::before {
    content: attr(data-step);
    display: block;
    width: 32px;
    height: 32px;
    background: #334155;
    border-radius: 50%;
    margin: 0 auto 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    transition: all 0.3s ease;
}

.progress-bar {
    height: 4px;
    background: #334155;
    border-radius: 2px;
    position: relative;
    margin-top: -18px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    border-radius: 2px;
    transition: width 0.5s ease;
}

.approval-list {
    padding: 24px;
}

.approval-item {
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 16px;
    background: #f8fafc;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.approval-item:hover {
    background: white;
    border-color: #cbd5e1;
    transform: translateX(4px);
}

.approval-item:last-child {
    margin-bottom: 0;
}

.approval-item input {
    display: none;
}

.approval-avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
    flex-shrink: 0;
    border: 3px solid #e2e8f0;
    transition: border-color 0.3s ease;
}

.approval-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.approval-content {
    flex: 1;
    margin-right: 20px;
}

.approval-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
}

.approval-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
}

.approval-role {
    color: #64748b;
    font-size: 13px;
    font-weight: 500;
    background: rgba(100, 116, 139, 0.1);
    padding: 2px 10px;
    border-radius: 12px;
}

.approval-content p {
    margin: 0 0 12px 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.5;
}

.approval-meta {
    display: flex;
    gap: 16px;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #64748b;
    font-size: 13px;
}

.meta-item i {
    color: #94a3b8;
    font-size: 12px;
}

.approval-status {
    margin-left: auto;
}

.status-badge {
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    min-width: 100px;
    text-align: center;
    display: block;
}

.status-badge.pending {
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.status-badge.approved {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.status-badge.waiting {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

/* Checked state */
.approval-item input:checked + .approval-avatar {
    border-color: #10b981;
    animation: avatarPulse 0.6s ease;
}

.approval-item input:checked ~ .approval-content .approval-header h4 {
    color: #10b981;
}

.approval-item input:checked ~ .approval-status .status-badge {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border-color: #10b981;
}

.approval-item input:checked ~ .approval-status .status-badge::after {
    content: ' ✓';
    font-weight: bold;
}

/* Workflow progress update */
.approval-item input:checked ~ .step[data-step="1"]::before,
.approval-item input:checked ~ .step[data-step="2"]::before {
    background: #10b981;
    color: white;
}

@keyframes avatarPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

/* Actions */
.workflow-actions {
    padding: 20px 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.action-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.info-text {
    font-weight: 600;
    color: #1e293b;
    font-size: 14px;
}

.info-deadline {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #ef4444;
    font-size: 13px;
    font-weight: 500;
}

.action-buttons {
    display: flex;
    gap: 12px;
}

.action-btn {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.action-btn.send {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
}

.action-btn.escalate {
    background: white;
    border: 1px solid #e2e8f0;
    color: #1e293b;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.action-btn.escalate:hover {
    border-color: #cbd5e1;
    background: #f8fafc;
}`,
    js: `// Approval workflow functionality
document.addEventListener('DOMContentLoaded', function() {
    const approvalItems = document.querySelectorAll('.approval-item input');
    const progressFill = document.querySelector('.progress-fill');
    const progressSteps = document.querySelectorAll('.step');
    const sendBtn = document.querySelector('.action-btn.send');
    const escalateBtn = document.querySelector('.action-btn.escalate');
    const infoText = document.querySelector('.info-text');
    
    // Update workflow progress
    function updateWorkflowProgress() {
        const totalItems = approvalItems.length;
        const approvedItems = Array.from(approvalItems).filter(item => item.checked).length;
        const percentage = Math.round((approvedItems / totalItems) * 100);
        
        // Update progress bar
        if (progressFill) {
            progressFill.style.width = \`\${percentage}%\`;
        }
        
        // Update step indicators
        progressSteps.forEach((step, index) => {
            const stepNumber = parseInt(step.getAttribute('data-step'));
            if (stepNumber <= approvedItems) {
                step.style.color = 'white';
                step.querySelector('::before').style.background = '#10b981';
            }
        });
        
        // Update info text
        if (infoText) {
            infoText.textContent = \`\${approvedItems}/\${totalItems} approvals completed\`;
        }
        
        console.log(\`Approval Progress: \${approvedItems}/\${totalItems} (\${percentage}%)\`);
        
        // Check if workflow is complete
        if (approvedItems === totalItems) {
            console.log('Workflow complete!');
            if (progressFill) {
                progressFill.style.background = 'linear-gradient(90deg, #10b981, #059669)';
            }
        }
    }
    
    // Approval item functionality
    approvalItems.forEach(item => {
        item.addEventListener('change', function() {
            const personName = this.closest('.approval-item').querySelector('h4').textContent;
            const personRole = this.closest('.approval-item').querySelector('.approval-role').textContent;
            const statusBadge = this.closest('.approval-item').querySelector('.status-badge');
            const metaItem = this.closest('.approval-item').querySelector('.meta-item');
            
            if (this.checked) {
                statusBadge.textContent = 'Approved';
                statusBadge.className = 'status-badge approved';
                metaItem.innerHTML = '<i class="fas fa-check-circle"></i> Approved';
                console.log(\`\${personName} (\${personRole}) approved\`);
            } else {
                statusBadge.textContent = 'Pending';
                statusBadge.className = 'status-badge pending';
                metaItem.innerHTML = '<i class="fas fa-clock"></i> Pending';
                console.log(\`\${personName} (\${personRole}) approval revoked\`);
            }
            
            updateWorkflowProgress();
        });
    });
    
    // Button functionality
    if (sendBtn) {
        sendBtn.addEventListener('click', function() {
            const pendingItems = Array.from(approvalItems).filter(item => !item.checked);
            
            if (pendingItems.length === 0) {
                alert('All approvals have been completed!');
                return;
            }
            
            // Simulate sending reminders
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-paper-plane"></i> Reminders Sent';
                alert(\`Reminders sent to \${pendingItems.length} pending approvers\`);
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-paper-plane"></i> Send Reminders';
                }, 2000);
            }, 1500);
        });
    }
    
    if (escalateBtn) {
        escalateBtn.addEventListener('click', function() {
            alert('Escalating to management for review');
            
            // Simulate escalation
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Escalating...';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-flag"></i> Escalated';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-flag"></i> Escalate';
                }, 2000);
            }, 1500);
        });
    }
    
    // Initialize progress
    updateWorkflowProgress();
});`
},
// ====================================================================
// TEMPLATE 69: Analytics Dashboard
// ====================================================================
checkbox69: {
    name: "Analytics Dashboard",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="analytics-dashboard">
        <div class="dashboard-header">
            <h3>Performance Analytics</h3>
            <div class="dashboard-controls">
                <select class="time-selector">
                    <option>Last 7 days</option>
                    <option selected>Last 30 days</option>
                    <option>Last quarter</option>
                </select>
                <button class="export-btn">
                    <i class="fas fa-download"></i>
                    Export Data
                </button>
            </div>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-header">
                    <h4>Conversion Rate</h4>
                    <span class="metric-change positive">+12.5%</span>
                </div>
                <div class="metric-value">24.7%</div>
                <div class="metric-chart">
                    <div class="chart-bar" style="height: 70%"></div>
                    <div class="chart-bar" style="height: 85%"></div>
                    <div class="chart-bar" style="height: 60%"></div>
                    <div class="chart-bar" style="height: 95%"></div>
                    <div class="chart-bar" style="height: 75%"></div>
                    <div class="chart-bar" style="height: 90%"></div>
                    <div class="chart-bar" style="height: 80%"></div>
                </div>
                <label class="metric-toggle">
                    <input type="checkbox" checked>
                    <span class="toggle-label">Track Metric</span>
                    <span class="toggle-switch"></span>
                </label>
            </div>
            
            <div class="metric-card">
                <div class="metric-header">
                    <h4>User Engagement</h4>
                    <span class="metric-change positive">+8.3%</span>
                </div>
                <div class="metric-value">3.2m</div>
                <div class="metric-chart">
                    <div class="chart-line"></div>
                </div>
                <label class="metric-toggle">
                    <input type="checkbox" checked>
                    <span class="toggle-label">Track Metric</span>
                    <span class="toggle-switch"></span>
                </label>
            </div>
            
            <div class="metric-card">
                <div class="metric-header">
                    <h4>Revenue Growth</h4>
                    <span class="metric-change positive">+15.2%</span>
                </div>
                <div class="metric-value">$124.5k</div>
                <div class="metric-chart">
                    <div class="chart-area"></div>
                </div>
                <label class="metric-toggle">
                    <input type="checkbox">
                    <span class="toggle-label">Track Metric</span>
                    <span class="toggle-switch"></span>
                </label>
            </div>
            
            <div class="metric-card">
                <div class="metric-header">
                    <h4>Churn Rate</h4>
                    <span class="metric-change negative">-4.1%</span>
                </div>
                <div class="metric-value">2.8%</div>
                <div class="metric-chart">
                    <div class="chart-donut">
                        <div class="donut-segment" style="--percentage: 75"></div>
                        <div class="donut-hole"></div>
                    </div>
                </div>
                <label class="metric-toggle">
                    <input type="checkbox" checked>
                    <span class="toggle-label">Track Metric</span>
                    <span class="toggle-switch"></span>
                </label>
            </div>
        </div>
        
        <div class="dashboard-footer">
            <div class="insight-card">
                <div class="insight-icon">
                    <i class="fas fa-lightbulb"></i>
                </div>
                <div class="insight-content">
                    <h4>Key Insight</h4>
                    <p>Conversion rates peak during business hours (9AM-5PM)</p>
                </div>
            </div>
            <button class="insight-btn">
                <i class="fas fa-chart-line"></i>
                View Detailed Analytics
            </button>
        </div>
    </div>
</div>`,
    css: `.analytics-dashboard {
    background: white;
    border-radius: 20px;
    border: 1px solid #e2e8f0;
    overflow: hidden;
}

.dashboard-header {
    padding: 24px;
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dashboard-header h3 {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
}

.dashboard-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}

.time-selector {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.time-selector:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
}

.export-btn {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
}

.export-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    padding: 24px;
}

.metric-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.metric-card:hover {
    border-color: #cbd5e1;
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.metric-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.metric-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
}

.metric-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.metric-change {
    font-size: 14px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 12px;
}

.metric-change.positive {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
}

.metric-change.negative {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
}

.metric-value {
    font-size: 36px;
    font-weight: 800;
    color: #1e293b;
    margin-bottom: 24px;
    line-height: 1;
}

.metric-chart {
    height: 80px;
    margin-bottom: 24px;
    position: relative;
}

/* Chart styles */
.chart-bar {
    width: 12px;
    background: linear-gradient(to top, #3b82f6, #60a5fa);
    border-radius: 6px 6px 0 0;
    position: absolute;
    bottom: 0;
    animation: barRise 1s ease-out;
}

.chart-bar:nth-child(1) { left: 10%; }
.chart-bar:nth-child(2) { left: 22%; animation-delay: 0.1s; }
.chart-bar:nth-child(3) { left: 34%; animation-delay: 0.2s; }
.chart-bar:nth-child(4) { left: 46%; animation-delay: 0.3s; }
.chart-bar:nth-child(5) { left: 58%; animation-delay: 0.4s; }
.chart-bar:nth-child(6) { left: 70%; animation-delay: 0.5s; }
.chart-bar:nth-child(7) { left: 82%; animation-delay: 0.6s; }

.chart-line {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(16, 185, 129, 0.3) 50%, 
        transparent 100%);
    position: relative;
    animation: lineScan 2s ease-in-out infinite;
}

.chart-line::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #10b981;
    transform: translateY(-50%);
}

.chart-area {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(245, 158, 11, 0.3), transparent);
    border-bottom: 2px solid #f59e0b;
    position: relative;
    animation: areaFill 2s ease-out;
}

.chart-donut {
    width: 80px;
    height: 80px;
    position: relative;
    margin: 0 auto;
}

.donut-segment {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(
        #ef4444 calc(var(--percentage) * 1%),
        #f1f5f9 calc(var(--percentage) * 1%)
    );
    animation: donutSpin 1s ease-out;
}

.donut-hole {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: white;
    border-radius: 50%;
}

.metric-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding-top: 16px;
    border-top: 1px solid #f1f5f9;
}

.metric-toggle input {
    display: none;
}

.toggle-label {
    font-weight: 500;
    color: #64748b;
    font-size: 14px;
    transition: color 0.3s ease;
}

.toggle-switch {
    width: 44px;
    height: 24px;
    background: #e2e8f0;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-switch::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* Checked state for metric toggle */
.metric-toggle input:checked ~ .toggle-switch {
    background: #10b981;
}

.metric-toggle input:checked ~ .toggle-switch::before {
    transform: translateX(20px);
}

.metric-toggle input:checked ~ .toggle-label {
    color: #10b981;
    font-weight: 600;
}

/* Checked state for metric card */
.metric-card input:checked::before {
    opacity: 1;
}

@keyframes barRise {
    from { height: 0; }
    to { height: var(--height); }
}

@keyframes lineScan {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
}

@keyframes areaFill {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes donutSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* Dashboard footer */
.dashboard-footer {
    padding: 24px;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.insight-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: white;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    flex: 1;
    margin-right: 20px;
}

.insight-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
}

.insight-content h4 {
    margin: 0 0 4px 0;
    color: #1e293b;
    font-size: 15px;
    font-weight: 600;
}

.insight-content p {
    margin: 0;
    color: #64748b;
    font-size: 14px;
}

.insight-btn {
    padding: 12px 24px;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.insight-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}`,
    js: `// Analytics dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    const metricToggles = document.querySelectorAll('.metric-toggle input');
    const timeSelector = document.querySelector('.time-selector');
    const exportBtn = document.querySelector('.export-btn');
    const insightBtn = document.querySelector('.insight-btn');
    
    // Metric data for different time periods
    const metricData = {
        'Last 7 days': {
            'Conversion Rate': '28.3%',
            'User Engagement': '2.8m',
            'Revenue Growth': '$98.7k',
            'Churn Rate': '3.2%'
        },
        'Last 30 days': {
            'Conversion Rate': '24.7%',
            'User Engagement': '3.2m',
            'Revenue Growth': '$124.5k',
            'Churn Rate': '2.8%'
        },
        'Last quarter': {
            'Conversion Rate': '22.1%',
            'User Engagement': '4.5m',
            'Revenue Growth': '$385.2k',
            'Churn Rate': '3.5%'
        }
    };
    
    // Chart heights for different time periods
    const chartData = {
        'Last 7 days': [60, 75, 50, 85, 65, 80, 70],
        'Last 30 days': [70, 85, 60, 95, 75, 90, 80],
        'Last quarter': [65, 80, 55, 90, 70, 85, 75]
    };
    
    // Update metrics based on time selection
    function updateMetrics(timePeriod) {
        const data = metricData[timePeriod];
        const chartHeights = chartData[timePeriod];
        
        // Update metric values
        document.querySelectorAll('.metric-card').forEach(card => {
            const metricName = card.querySelector('h4').textContent;
            const metricValue = card.querySelector('.metric-value');
            
            if (metricValue && data[metricName]) {
                metricValue.textContent = data[metricName];
            }
            
            // Update chart bars if they exist
            const chartBars = card.querySelectorAll('.chart-bar');
            if (chartBars.length > 0 && chartHeights) {
                chartBars.forEach((bar, index) => {
                    if (chartHeights[index]) {
                        bar.style.height = \`\${chartHeights[index]}%\`;
                        bar.style.setProperty('--height', \`\${chartHeights[index]}%\`);
                    }
                });
            }
        });
        
        console.log(\`Metrics updated for: \${timePeriod}\`);
    }
    
    // Metric toggle functionality
    metricToggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const metricName = this.closest('.metric-card').querySelector('h4').textContent;
            const metricCard = this.closest('.metric-card');
            
            if (this.checked) {
                console.log(\`Tracking metric: \${metricName}\`);
                metricCard.style.opacity = '1';
                metricCard.style.pointerEvents = 'auto';
            } else {
                console.log(\`Stopped tracking metric: \${metricName}\`);
                metricCard.style.opacity = '0.5';
                metricCard.style.pointerEvents = 'none';
            }
            
            // Update active metrics count
            const activeMetrics = Array.from(metricToggles).filter(t => t.checked).length;
            console.log(\`Active metrics: \${activeMetrics}/\${metricToggles.length}\`);
        });
    });
    
    // Time selector functionality
    if (timeSelector) {
        timeSelector.addEventListener('change', function() {
            updateMetrics(this.value);
        });
    }
    
    // Export button functionality
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            const timePeriod = timeSelector ? timeSelector.value : 'Last 30 days';
            const activeMetrics = Array.from(metricToggles).filter(t => t.checked).length;
            
            // Simulate export
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Exporting...';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Exported';
                alert(\`Exported \${activeMetrics} metrics data for \${timePeriod}\`);
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-download"></i> Export Data';
                }, 2000);
            }, 1500);
        });
    }
    
    // Insight button functionality
    if (insightBtn) {
        insightBtn.addEventListener('click', function() {
            const activeMetrics = Array.from(metricToggles).filter(t => t.checked);
            
            if (activeMetrics.length === 0) {
                alert('Please enable at least one metric to view analytics');
                return;
            }
            
            // Simulate loading detailed analytics
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-chart-line"></i> View Detailed Analytics';
                alert('Opening detailed analytics dashboard...');
            }, 1500);
        });
    }
    
    // Initialize with default time period
    updateMetrics('Last 30 days');
});`
},
    // ====================================================================
    // TEMPLATE 70: Dark Mode Checkbox
    // ====================================================================
    checkbox70: {
        name: "Dark Mode Checkbox",
        category: "dark",
        html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-dark">
        <input type="checkbox">
        <span class="dark-checkmark"></span>
        Dark Mode
    </label>
    <label class="checkbox-dark">
        <input type="checkbox" checked>
        <span class="dark-checkmark"></span>
        Auto Night Mode
    </label>
    <label class="checkbox-dark">
        <input type="checkbox">
        <span class="dark-checkmark"></span>
        Reduce Blue Light
    </label>
</div>`,
        css: `.checkbox-dark {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #e2e8f0;
    margin-bottom: 15px;
}

.checkbox-dark input {
    display: none;
}

.dark-checkmark {
    width: 22px;
    height: 22px;
    border: 2px solid #475569;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.4s ease;
    background: #1e293b;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

.checkbox-dark input:checked + .dark-checkmark {
    background: linear-gradient(135deg, #0ea5e9, #3b82f6);
    border-color: #60a5fa;
    box-shadow: 
        0 0 15px rgba(14, 165, 233, 0.5),
        inset 0 1px 2px rgba(255, 255, 255, 0.2);
    animation: darkGlow 0.6s ease;
}

.checkbox-dark input:checked + .dark-checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

@keyframes darkGlow {
    0% { box-shadow: 0 0 0 0 rgba(14, 165, 233, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(14, 165, 233, 0); }
    100% { box-shadow: 0 0 15px rgba(14, 165, 233, 0.5); }
}

.dark-bg {
    background: #1e293b;
    padding: 20px;
    border-radius: 8px;
}`,
        js: `// Dark Mode checkbox functionality
document.querySelectorAll('.checkbox-dark input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        console.log('Dark mode checkbox changed:', isChecked);
        
        // You can add dark mode specific logic here
        if (isChecked) {
            // Add dark mode class to body or parent element
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});`
    },

    // ====================================================================
    // TEMPLATE 71: Animated Pulse Checkbox
    // ====================================================================
    checkbox71: {
        name: "Pulse Checkbox",
        category: "animated",
        html: `<div class="checkbox-container">
    <label class="checkbox-pulse">
        <input type="checkbox" checked>
        <span class="pulse-checkmark"></span>
        Enable Notifications
    </label>
    <label class="checkbox-pulse">
        <input type="checkbox">
        <span class="pulse-checkmark"></span>
        Auto-refresh
    </label>
    <label class="checkbox-pulse">
        <input type="checkbox" checked>
        <span class="pulse-checkmark"></span>
        Live Updates
    </label>
</div>`,
        css: `.checkbox-pulse {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    position: relative;
}

.checkbox-pulse input {
    display: none;
}

.pulse-checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #7c3aed;
    border-radius: 50%;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: white;
}

.pulse-checkmark::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    border-radius: 50%;
    animation: pulseRing 2s infinite;
}

.checkbox-pulse input:checked + .pulse-checkmark {
    background: #7c3aed;
    border-color: #7c3aed;
    animation: pulse 0.6s ease;
}

.checkbox-pulse input:checked + .pulse-checkmark::before {
    border-color: #7c3aed;
    animation: pulseRingChecked 2s infinite;
}

.checkbox-pulse input:checked + .pulse-checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes pulseRing {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(1.5); opacity: 0; }
}

@keyframes pulseRingChecked {
    0% { transform: scale(0.8); opacity: 1; border-color: #7c3aed; }
    100% { transform: scale(1.5); opacity: 0; border-color: #a78bfa; }
}`,
        js: `// Pulse checkbox functionality
document.querySelectorAll('.checkbox-pulse input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        console.log('Pulse checkbox changed:', isChecked);
        
        // Add or remove animation based on state
        const checkmark = this.nextElementSibling;
        if (isChecked) {
            checkmark.style.animation = 'pulse 0.6s ease';
        } else {
            checkmark.style.animation = '';
        }
    });
});`
    },

    // ====================================================================
    // TEMPLATE 72: 3D Toggle Checkbox
    // ====================================================================
    checkbox72: {
        name: "3D Toggle Switch",
        category: "animated",
        html: `<div class="checkbox-container">
    <label class="checkbox-3d">
        <input type="checkbox">
        <span class="toggle-3d">
            <span class="toggle-knob"></span>
        </span>
        Enable 3D Effects
    </label>
    <label class="checkbox-3d">
        <input type="checkbox" checked>
        <span class="toggle-3d">
            <span class="toggle-knob"></span>
        </span>
        Show Shadows
    </label>
    <label class="checkbox-3d">
        <input type="checkbox">
        <span class="toggle-3d">
            <span class="toggle-knob"></span>
        </span>
        Depth Perception
    </label>
</div>`,
        css: `.checkbox-3d {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-3d input {
    display: none;
}

.toggle-3d {
    width: 50px;
    height: 28px;
    background: linear-gradient(to bottom, #e2e8f0, #cbd5e1);
    border-radius: 14px;
    margin-right: 12px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.1),
        0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #94a3b8;
}

.toggle-knob {
    position: absolute;
    width: 24px;
    height: 24px;
    background: linear-gradient(to bottom, #ffffff, #f1f5f9);
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.2),
        inset 0 1px 2px rgba(255, 255, 255, 0.8);
}

.checkbox-3d input:checked + .toggle-3d {
    background: linear-gradient(to bottom, #7c3aed, #6d28d9);
    border-color: #7c3aed;
    box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.2),
        0 4px 8px rgba(124, 58, 237, 0.3);
}

.checkbox-3d input:checked + .toggle-3d .toggle-knob {
    transform: translateX(22px);
    background: linear-gradient(to bottom, #ffffff, #f1f5f9);
    box-shadow: 
        0 2px 4px rgba(0, 0, 0, 0.3),
        inset 0 1px 2px rgba(255, 255, 255, 0.9);
}`,
        js: `// 3D Toggle functionality
document.querySelectorAll('.checkbox-3d input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        console.log('3D Toggle changed:', isChecked);
        
        // You can add 3D specific functionality here
        if (isChecked) {
            console.log('3D effects enabled');
            // Enable 3D effects on your page
        } else {
            console.log('3D effects disabled');
            // Disable 3D effects on your page
        }
    });
});`
    },

    // ====================================================================
    // TEMPLATE 73: Neon Glow Checkbox
    // ====================================================================
    checkbox73: {
        name: "Neon Glow Checkbox",
        category: "modern",
        html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-neon">
        <input type="checkbox" checked>
        <span class="neon-checkmark"></span>
        Neon Effects
    </label>
    <label class="checkbox-neon">
        <input type="checkbox">
        <span class="neon-checkmark"></span>
        Glow Mode
    </label>
    <label class="checkbox-neon">
        <input type="checkbox" checked>
        <span class="neon-checkmark"></span>
        Electric Theme
    </label>
</div>`,
        css: `.checkbox-neon {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #e2e8f0;
    margin-bottom: 15px;
}

.checkbox-neon input {
    display: none;
}

.neon-checkmark {
    width: 22px;
    height: 22px;
    border: 2px solid #3b82f6;
    border-radius: 6px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: rgba(30, 41, 59, 0.8);
    box-shadow: 
        0 0 10px rgba(59, 130, 246, 0.3),
        inset 0 0 10px rgba(59, 130, 246, 0.1);
}

.checkbox-neon input:checked + .neon-checkmark {
    border-color: #ec4899;
    background: rgba(30, 41, 59, 0.9);
    box-shadow: 
        0 0 20px rgba(236, 72, 153, 0.8),
        0 0 40px rgba(236, 72, 153, 0.4),
        inset 0 0 15px rgba(236, 72, 153, 0.2);
    animation: neonPulse 1.5s infinite alternate;
}

.checkbox-neon input:checked + .neon-checkmark::after {
    content: '✓';
    color: #fbbf24;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 10px #fbbf24;
}

@keyframes neonPulse {
    from {
        box-shadow: 
            0 0 20px rgba(236, 72, 153, 0.8),
            0 0 40px rgba(236, 72, 153, 0.4),
            inset 0 0 15px rgba(236, 72, 153, 0.2);
    }
    to {
        box-shadow: 
            0 0 25px rgba(236, 72, 153, 1),
            0 0 50px rgba(236, 72, 153, 0.6),
            inset 0 0 20px rgba(236, 72, 153, 0.3);
    }
}

.dark-bg {
    background: #1e293b;
    padding: 20px;
    border-radius: 8px;
}`,
        js: `// Neon Glow checkbox functionality
document.querySelectorAll('.checkbox-neon input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        console.log('Neon checkbox changed:', isChecked);
        
        if (isChecked) {
            console.log('Neon glow activated!');
            // Add neon effects to your page
        } else {
            console.log('Neon glow deactivated');
            // Remove neon effects from your page
        }
    });
});`
    },

    // ====================================================================
    // TEMPLATE 74: Material Design Checkbox
    // ====================================================================
    checkbox74: {
        name: "Material Design Checkbox",
        category: "modern",
        html: `<div class="checkbox-container">
    <label class="checkbox-material">
        <input type="checkbox" checked>
        <span class="material-checkmark"></span>
        Material Theme
    </label>
    <label class="checkbox-material">
        <input type="checkbox">
        <span class="material-checkmark"></span>
        Ripple Effects
    </label>
    <label class="checkbox-material">
        <input type="checkbox" checked>
        <span class="material-checkmark"></span>
        Smooth Animations
    </label>
</div>`,
        css: `.checkbox-material {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    position: relative;
    overflow: hidden;
}

.checkbox-material input {
    display: none;
}

.material-checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #94a3b8;
    border-radius: 4px;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
    background: white;
}

.material-checkmark::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background: #7c3aed;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    transition: all 0.4s ease;
}

.checkbox-material input:checked + .material-checkmark {
    border-color: #7c3aed;
    background: #7c3aed;
}

.checkbox-material input:checked + .material-checkmark::before {
    animation: ripple 0.6s ease;
}

.checkbox-material input:checked + .material-checkmark::after {
    content: '✓';
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
}

@keyframes ripple {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0.5;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
    }
}`,
        js: `// Material Design checkbox functionality
document.querySelectorAll('.checkbox-material input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const isChecked = this.checked;
        console.log('Material checkbox changed:', isChecked);
        
        // Create ripple effect
        const checkmark = this.nextElementSibling;
        const ripple = checkmark.querySelector('.ripple') || document.createElement('span');
        ripple.className = 'ripple';
        checkmark.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode === checkmark) {
                checkmark.removeChild(ripple);
            }
        }, 600);
    });
});`
    },
    // ====================================================================
// TEMPLATE 75: Holographic Checkbox
// ====================================================================
checkbox75: {
    name: "Holographic Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-holographic">
        <input type="checkbox">
        <span class="holographic-box">
            <span class="holographic-shine"></span>
            <span class="holographic-icon">◈</span>
        </span>
        Holographic Effect
    </label>
    <label class="checkbox-holographic">
        <input type="checkbox" checked>
        <span class="holographic-box">
            <span class="holographic-shine"></span>
            <span class="holographic-icon">◈</span>
        </span>
        Holographic Checked
    </label>
</div>`,
    css: `.checkbox-holographic {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-holographic input {
    display: none;
}

.holographic-box {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.05)
    );
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 
        0 8px 32px rgba(31, 38, 135, 0.37),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.holographic-shine {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 70%
    );
    transform: rotate(45deg);
    transition: all 0.8s ease;
    opacity: 0.5;
}

.holographic-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: bold;
    z-index: 2;
    transition: all 0.5s ease;
}

.checkbox-holographic input:checked + .holographic-box {
    background: linear-gradient(
        135deg,
        rgba(124, 58, 237, 0.8),
        rgba(236, 72, 153, 0.8)
    );
    border-color: rgba(255, 255, 255, 0.4);
    animation: hologramGlow 2s infinite alternate;
}

.checkbox-holographic input:checked + .holographic-box .holographic-shine {
    animation: shineMove 3s infinite linear;
    opacity: 0.8;
}

.checkbox-holographic input:checked + .holographic-box .holographic-icon {
    color: white;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    transform: translate(-50%, -50%) scale(1.2);
}

@keyframes hologramGlow {
    0% { box-shadow: 0 8px 32px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
    100% { box-shadow: 0 8px 40px rgba(124, 58, 237, 0.6), 0 0 20px rgba(124, 58, 237, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3); }
}

@keyframes shineMove {
    0% { transform: rotate(45deg) translateX(-100%); }
    100% { transform: rotate(45deg) translateX(100%); }
}`,
    js: `// Holographic checkbox functionality
document.querySelectorAll('.checkbox-holographic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Holographic checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 76: Cyberpunk Checkbox
// ====================================================================
checkbox76: {
    name: "Cyberpunk Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-cyberpunk">
        <input type="checkbox">
        <span class="cyber-box">
            <span class="cyber-line"></span>
            <span class="cyber-dot"></span>
        </span>
        CYBER MODE
    </label>
    <label class="checkbox-cyberpunk">
        <input type="checkbox" checked>
        <span class="cyber-box">
            <span class="cyber-line"></span>
            <span class="cyber-dot"></span>
        </span>
        ACTIVE
    </label>
</div>`,
    css: `.checkbox-cyberpunk {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: #00f3ff;
    margin-bottom: 15px;
    font-family: 'Courier New', monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 10px #00f3ff;
}

.checkbox-cyberpunk input {
    display: none;
}

.cyber-box {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #00f3ff;
    position: relative;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 
        0 0 15px #00f3ff,
        inset 0 0 10px rgba(0, 243, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    overflow: hidden;
}

.cyber-line {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: #00f3ff;
    box-shadow: 0 0 10px #00f3ff;
    transition: all 0.6s ease;
}

.cyber-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    background: transparent;
    border: 2px solid #00f3ff;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.4s ease;
    box-shadow: 0 0 10px #00f3ff;
}

.checkbox-cyberpunk input:checked + .cyber-box {
    border-color: #ff00ff;
    box-shadow: 
        0 0 20px #ff00ff,
        inset 0 0 15px rgba(255, 0, 255, 0.3);
    animation: cyberFlicker 0.3s infinite alternate;
}

.checkbox-cyberpunk input:checked + .cyber-box .cyber-line {
    left: 100%;
    background: #ff00ff;
    box-shadow: 0 0 15px #ff00ff;
    animation: scanLine 1s infinite linear;
}

.checkbox-cyberpunk input:checked + .cyber-box .cyber-dot {
    background: #ff00ff;
    border-color: #ff00ff;
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 20px #ff00ff;
}

@keyframes cyberFlicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
}

@keyframes scanLine {
    0% { top: 0; left: -100%; }
    50% { top: 100%; left: 100%; }
    100% { top: 0; left: 100%; }
}`,
    js: `// Cyberpunk checkbox functionality
document.querySelectorAll('.checkbox-cyberpunk input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Cyberpunk checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 77: Glass Morphism Checkbox
// ====================================================================
checkbox77: {
    name: "Glass Morphism Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-glass">
        <input type="checkbox">
        <span class="glass-box">
            <span class="glass-inner"></span>
            <span class="glass-reflection"></span>
        </span>
        Glass Design
    </label>
    <label class="checkbox-glass">
        <input type="checkbox" checked>
        <span class="glass-box">
            <span class="glass-inner"></span>
            <span class="glass-reflection"></span>
        </span>
        Glass Checked
    </label>
</div>`,
    css: `.checkbox-glass {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-glass input {
    display: none;
}

.glass-box {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    border-radius: 10px;
    position: relative;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
        0 8px 32px rgba(31, 38, 135, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.glass-inner {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    box-shadow: 
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        inset 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.glass-reflection {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(1px);
}

.checkbox-glass input:checked + .glass-box {
    background: rgba(124, 58, 237, 0.25);
    border-color: rgba(124, 58, 237, 0.5);
    box-shadow: 
        0 8px 32px rgba(124, 58, 237, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.checkbox-glass input:checked + .glass-box .glass-inner {
    width: 18px;
    height: 18px;
    background: rgba(124, 58, 237, 0.8);
    box-shadow: 
        inset 0 2px 4px rgba(255, 255, 255, 0.3),
        inset 0 -2px 4px rgba(0, 0, 0, 0.2),
        0 0 20px rgba(124, 58, 237, 0.4);
}

.checkbox-glass input:checked + .glass-box .glass-inner::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10px;
    font-weight: bold;
}`,
    js: `// Glass Morphism checkbox functionality
document.querySelectorAll('.checkbox-glass input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Glass Morphism checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 78: Magnetic Field Checkbox
// ====================================================================
checkbox78: {
    name: "Magnetic Field Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-magnetic">
        <input type="checkbox">
        <span class="magnetic-field">
            <span class="magnetic-core"></span>
            <span class="field-line field-1"></span>
            <span class="field-line field-2"></span>
            <span class="field-line field-3"></span>
        </span>
        Magnetic Field
    </label>
    <label class="checkbox-magnetic">
        <input type="checkbox" checked>
        <span class="magnetic-field">
            <span class="magnetic-core"></span>
            <span class="field-line field-1"></span>
            <span class="field-line field-2"></span>
            <span class="field-line field-3"></span>
        </span>
        Magnetic Checked
    </label>
</div>`,
    css: `.checkbox-magnetic {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-magnetic input {
    display: none;
}

.magnetic-field {
    width: 28px;
    height: 28px;
    margin-right: 12px;
    border-radius: 50%;
    position: relative;
    background: white;
    border: 2px solid #cbd5e1;
    transition: all 0.5s ease;
}

.magnetic-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #3b82f6;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    z-index: 2;
}

.field-line {
    position: absolute;
    border: 1px solid #3b82f6;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s ease;
}

.field-1 {
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-color: #3b82f6;
    transform: translate(-50%, -50%);
}

.field-2 {
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    border-color: #60a5fa;
    transform: translate(-50%, -50%);
}

.field-3 {
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    border-color: #93c5fd;
    transform: translate(-50%, -50%);
}

.checkbox-magnetic input:checked + .magnetic-field {
    border-color: #3b82f6;
    background: #3b82f6;
    animation: magneticPulse 2s infinite;
}

.checkbox-magnetic input:checked + .magnetic-field .magnetic-core {
    background: white;
    box-shadow: 0 0 10px white;
    animation: coreSpin 4s infinite linear;
}

.checkbox-magnetic input:checked + .magnetic-field .field-line {
    opacity: 0.6;
    animation: fieldRotate 8s infinite linear;
}

.checkbox-magnetic input:checked + .magnetic-field .field-1 {
    animation: fieldRotate 6s infinite linear reverse;
}

.checkbox-magnetic input:checked + .magnetic-field .field-2 {
    animation: fieldRotate 8s infinite linear;
}

.checkbox-magnetic input:checked + .magnetic-field .field-3 {
    animation: fieldRotate 10s infinite linear reverse;
}

@keyframes magneticPulse {
    0%, 100% { box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
    50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
}

@keyframes coreSpin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes fieldRotate {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
}`,
    js: `// Magnetic Field checkbox functionality
document.querySelectorAll('.checkbox-magnetic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Magnetic Field checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 79: Solar System Checkbox
// ====================================================================
checkbox79: {
    name: "Solar System Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-solar">
        <input type="checkbox">
        <span class="solar-system">
            <span class="sun"></span>
            <span class="planet planet-1"></span>
            <span class="planet planet-2"></span>
            <span class="planet planet-3"></span>
        </span>
        Solar System
    </label>
    <label class="checkbox-solar">
        <input type="checkbox" checked>
        <span class="solar-system">
            <span class="sun"></span>
            <span class="planet planet-1"></span>
            <span class="planet planet-2"></span>
            <span class="planet planet-3"></span>
        </span>
        Solar Active
    </label>
</div>`,
    css: `.checkbox-solar {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-solar input {
    display: none;
}

.solar-system {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    position: relative;
    border-radius: 50%;
    background: #0f172a;
    border: 2px solid #1e293b;
    overflow: hidden;
    transition: all 0.5s ease;
}

.sun {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #f59e0b;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 10px #f59e0b;
    transition: all 0.5s ease;
}

.planet {
    position: absolute;
    border-radius: 50%;
    background: #94a3b8;
    transition: all 0.8s ease;
    opacity: 0.5;
}

.planet-1 {
    top: 4px;
    left: 4px;
    width: 4px;
    height: 4px;
    background: #3b82f6;
}

.planet-2 {
    top: 24px;
    left: 4px;
    width: 5px;
    height: 5px;
    background: #10b981;
}

.planet-3 {
    top: 16px;
    left: 24px;
    width: 6px;
    height: 6px;
    background: #ec4899;
}

.checkbox-solar input:checked + .solar-system {
    border-color: #f59e0b;
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
    animation: solarGlow 3s infinite alternate;
}

.checkbox-solar input:checked + .solar-system .sun {
    width: 12px;
    height: 12px;
    background: #fbbf24;
    box-shadow: 0 0 20px #fbbf24;
    animation: sunPulse 2s infinite alternate;
}

.checkbox-solar input:checked + .solar-system .planet {
    opacity: 1;
    animation: planetOrbit 10s infinite linear;
}

.checkbox-solar input:checked + .solar-system .planet-1 {
    animation: planetOrbit 8s infinite linear;
}

.checkbox-solar input:checked + .solar-system .planet-2 {
    animation: planetOrbit 12s infinite linear;
}

.checkbox-solar input:checked + .solar-system .planet-3 {
    animation: planetOrbit 15s infinite linear;
}

@keyframes solarGlow {
    0% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
    100% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.5); }
}

@keyframes sunPulse {
    0% { transform: translate(-50%, -50%) scale(1); }
    100% { transform: translate(-50%, -50%) scale(1.2); }
}

@keyframes planetOrbit {
    0% { transform: rotate(0deg) translateX(12px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(12px) rotate(-360deg); }
}`,
    js: `// Solar System checkbox functionality
document.querySelectorAll('.checkbox-solar input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Solar System checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 80: Dark Matrix Checkbox
// ====================================================================
checkbox80: {
    name: "Dark Matrix Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-matrix">
        <input type="checkbox">
        <span class="matrix-grid">
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
        </span>
        Matrix Grid
    </label>
    <label class="checkbox-matrix">
        <input type="checkbox" checked>
        <span class="matrix-grid">
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
            <span class="matrix-cell"></span>
        </span>
        Matrix Active
    </label>
</div>`,
    css: `.checkbox-matrix {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: #00ff88;
    margin-bottom: 15px;
    font-family: 'Courier New', monospace;
    letter-spacing: 0.5px;
}

.checkbox-matrix input {
    display: none;
}

.matrix-grid {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 2px;
    background: #0a0a0a;
    border: 1px solid #222;
    padding: 2px;
    transition: all 0.4s ease;
}

.matrix-cell {
    background: #1a1a1a;
    border: 1px solid #333;
    transition: all 0.3s ease;
}

.checkbox-matrix input:checked + .matrix-grid {
    border-color: #00ff88;
    box-shadow: 
        0 0 15px rgba(0, 255, 136, 0.3),
        inset 0 0 10px rgba(0, 255, 136, 0.1);
}

.checkbox-matrix input:checked + .matrix-grid .matrix-cell {
    background: #00ff88;
    border-color: #00ff88;
    box-shadow: 0 0 5px #00ff88;
    animation: matrixPulse 1.5s infinite;
}

.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(1) { animation-delay: 0.1s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(2) { animation-delay: 0.2s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(3) { animation-delay: 0.3s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(4) { animation-delay: 0.4s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(5) { animation-delay: 0.5s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(6) { animation-delay: 0.6s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(7) { animation-delay: 0.7s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(8) { animation-delay: 0.8s; }
.checkbox-matrix input:checked + .matrix-grid .matrix-cell:nth-child(9) { animation-delay: 0.9s; }

@keyframes matrixPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}`,
    js: `// Dark Matrix checkbox functionality
document.querySelectorAll('.checkbox-matrix input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Dark Matrix checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 81: Dark Neon Glow Checkbox
// ====================================================================
checkbox81: {
    name: "Dark Neon Glow",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-neon">
        <input type="checkbox">
        <span class="neon-ring">
            <span class="neon-core"></span>
        </span>
        Neon Glow
    </label>
    <label class="checkbox-neon">
        <input type="checkbox" checked>
        <span class="neon-ring">
            <span class="neon-core"></span>
        </span>
        Neon Active
    </label>
</div>`,
    css: `.checkbox-neon {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #8b5cf6;
    margin-bottom: 15px;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
}

.checkbox-neon input {
    display: none;
}

.neon-ring {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    border-radius: 50%;
    position: relative;
    border: 2px solid #4c1d95;
    background: #1e1b4b;
    transition: all 0.4s ease;
}

.neon-core {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #4c1d95;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
}

.checkbox-neon input:checked + .neon-ring {
    border-color: #8b5cf6;
    box-shadow: 
        0 0 20px #8b5cf6,
        0 0 40px rgba(139, 92, 246, 0.3),
        inset 0 0 15px rgba(139, 92, 246, 0.2);
    animation: neonPulse 2s infinite alternate;
}

.checkbox-neon input:checked + .neon-ring .neon-core {
    background: #8b5cf6;
    box-shadow: 
        0 0 15px #8b5cf6,
        0 0 30px rgba(139, 92, 246, 0.5);
    animation: coreGlow 1.5s infinite alternate;
}

@keyframes neonPulse {
    0% { 
        box-shadow: 
            0 0 15px #8b5cf6,
            0 0 30px rgba(139, 92, 246, 0.3),
            inset 0 0 10px rgba(139, 92, 246, 0.2);
    }
    100% { 
        box-shadow: 
            0 0 25px #8b5cf6,
            0 0 50px rgba(139, 92, 246, 0.5),
            inset 0 0 20px rgba(139, 92, 246, 0.3);
    }
}

@keyframes coreGlow {
    0% { 
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 10px #8b5cf6;
    }
    100% { 
        transform: translate(-50%, -50%) scale(1.2);
        box-shadow: 0 0 20px #8b5cf6, 0 0 40px rgba(139, 92, 246, 0.6);
    }
}`,
    js: `// Dark Neon Glow checkbox functionality
document.querySelectorAll('.checkbox-neon input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Dark Neon Glow checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 82: Dark Carbon Fiber Checkbox
// ====================================================================
checkbox82: {
    name: "Carbon Fiber Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-carbon">
        <input type="checkbox">
        <span class="carbon-plate">
            <span class="carbon-pattern"></span>
            <span class="carbon-indicator"></span>
        </span>
        Carbon Fiber
    </label>
    <label class="checkbox-carbon">
        <input type="checkbox" checked>
        <span class="carbon-plate">
            <span class="carbon-pattern"></span>
            <span class="carbon-indicator"></span>
        </span>
        Carbon Active
    </label>
</div>`,
    css: `.checkbox-carbon {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #d1d5db;
    margin-bottom: 15px;
    font-weight: 500;
    letter-spacing: 0.5px;
}

.checkbox-carbon input {
    display: none;
}

.carbon-plate {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    background: 
        linear-gradient(45deg, #111 25%, transparent 25%),
        linear-gradient(-45deg, #111 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #111 75%),
        linear-gradient(-45deg, transparent 75%, #111 75%);
    background-size: 4px 4px;
    background-position: 0 0, 0 2px, 2px -2px, -2px 0px;
    border: 1px solid #333;
    transition: all 0.4s ease;
}

.carbon-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 50%,
        rgba(0, 0, 0, 0.2) 100%
    );
}

.carbon-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #444;
    border-radius: 2px;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease;
    box-shadow: 
        inset 0 1px 2px rgba(255, 255, 255, 0.1),
        inset 0 -1px 2px rgba(0, 0, 0, 0.5);
}

.checkbox-carbon input:checked + .carbon-plate {
    border-color: #3b82f6;
    box-shadow: 
        0 2px 10px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.checkbox-carbon input:checked + .carbon-plate .carbon-indicator {
    background: #3b82f6;
    box-shadow: 
        0 0 10px #3b82f6,
        inset 0 1px 2px rgba(255, 255, 255, 0.3),
        inset 0 -1px 2px rgba(0, 0, 0, 0.3);
    transform: translate(-50%, -50%) scale(1.2);
    animation: carbonGlow 2s infinite alternate;
}

@keyframes carbonGlow {
    0% { 
        box-shadow: 
            0 0 8px #3b82f6,
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
    }
    100% { 
        box-shadow: 
            0 0 15px #3b82f6,
            0 0 25px rgba(59, 130, 246, 0.4),
            inset 0 1px 2px rgba(255, 255, 255, 0.4);
    }
}`,
    js: `// Carbon Fiber checkbox functionality
document.querySelectorAll('.checkbox-carbon input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Carbon Fiber checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 83: Dark Circuit Board Checkbox
// ====================================================================
checkbox83: {
    name: "Circuit Board Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-circuit">
        <input type="checkbox">
        <span class="circuit-board">
            <span class="circuit-line"></span>
            <span class="circuit-node"></span>
            <span class="circuit-node"></span>
            <span class="circuit-node"></span>
        </span>
        Circuit Board
    </label>
    <label class="checkbox-circuit">
        <input type="checkbox" checked>
        <span class="circuit-board">
            <span class="circuit-line"></span>
            <span class="circuit-node"></span>
            <span class="circuit-node"></span>
            <span class="circuit-node"></span>
        </span>
        Circuit Active
    </label>
</div>`,
    css: `.checkbox-circuit {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 13px;
    color: #10b981;
    margin-bottom: 15px;
    font-family: 'Consolas', monospace;
    letter-spacing: 0.5px;
}

.checkbox-circuit input {
    display: none;
}

.circuit-board {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    background: #0f172a;
    border: 1px solid #1e293b;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
}

.circuit-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    height: 2px;
    background: #1e293b;
    transform: translateY(-50%);
    transition: all 0.6s ease;
}

.circuit-node {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #374151;
    border-radius: 50%;
    transition: all 0.4s ease;
}

.circuit-node:nth-child(2) { top: 6px; left: 6px; }
.circuit-node:nth-child(3) { top: 6px; right: 6px; }
.circuit-node:nth-child(4) { bottom: 6px; left: 6px; }

.checkbox-circuit input:checked + .circuit-board {
    border-color: #10b981;
    box-shadow: 
        0 0 15px rgba(16, 185, 129, 0.3),
        inset 0 0 10px rgba(16, 185, 129, 0.1);
}

.checkbox-circuit input:checked + .circuit-board .circuit-line {
    width: 100%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: currentFlow 1.5s infinite linear;
}

.checkbox-circuit input:checked + .circuit-board .circuit-node {
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: nodePulse 2s infinite;
}

.checkbox-circuit input:checked + .circuit-board .circuit-node:nth-child(2) { animation-delay: 0.1s; }
.checkbox-circuit input:checked + .circuit-board .circuit-node:nth-child(3) { animation-delay: 0.3s; }
.checkbox-circuit input:checked + .circuit-board .circuit-node:nth-child(4) { animation-delay: 0.5s; }

@keyframes currentFlow {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
}

@keyframes nodePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.3); }
}`,
    js: `// Circuit Board checkbox functionality
document.querySelectorAll('.checkbox-circuit input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Circuit Board checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 84: Dark Observatory Checkbox
// ====================================================================
checkbox84: {
    name: "Observatory Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-observatory">
        <input type="checkbox">
        <span class="telescope">
            <span class="telescope-base"></span>
            <span class="telescope-lens"></span>
            <span class="stars">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </span>
        </span>
        Observatory
    </label>
    <label class="checkbox-observatory">
        <input type="checkbox" checked>
        <span class="telescope">
            <span class="telescope-base"></span>
            <span class="telescope-lens"></span>
            <span class="stars">
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
                <span class="star"></span>
            </span>
        </span>
        Observing
    </label>
</div>`,
    css: `.checkbox-observatory {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #c7d2fe;
    margin-bottom: 15px;
    font-weight: 500;
}

.checkbox-observatory input {
    display: none;
}

.telescope {
    width: 28px;
    height: 28px;
    margin-right: 12px;
    position: relative;
    border-radius: 4px;
    background: #0f172a;
    border: 1px solid #334155;
    overflow: hidden;
    transition: all 0.4s ease;
}

.telescope-base {
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 6px;
    height: 12px;
    background: #475569;
    transform: translateX(-50%);
    border-radius: 2px 2px 0 0;
    transition: all 0.4s ease;
}

.telescope-lens {
    position: absolute;
    top: 6px;
    left: 50%;
    width: 12px;
    height: 6px;
    background: #64748b;
    border-radius: 50%;
    transform: translateX(-50%);
    transition: all 0.4s ease;
}

.star {
    position: absolute;
    width: 1px;
    height: 1px;
    background: #64748b;
    border-radius: 50%;
    opacity: 0.5;
}

.star:nth-child(1) { top: 8px; left: 8px; }
.star:nth-child(2) { top: 12px; right: 6px; }
.star:nth-child(3) { bottom: 10px; left: 10px; }
.star:nth-child(4) { bottom: 6px; right: 8px; }
.star:nth-child(5) { top: 16px; left: 6px; }

.checkbox-observatory input:checked + .telescope {
    border-color: #818cf8;
    box-shadow: 
        0 0 20px rgba(129, 140, 248, 0.4),
        inset 0 0 15px rgba(129, 140, 248, 0.1);
}

.checkbox-observatory input:checked + .telescope .telescope-base {
    background: #818cf8;
    box-shadow: 0 0 5px #818cf8;
}

.checkbox-observatory input:checked + .telescope .telescope-lens {
    background: #c7d2fe;
    box-shadow: 
        0 0 10px #c7d2fe,
        0 0 20px rgba(199, 210, 254, 0.5);
    animation: lensGlow 2s infinite alternate;
}

.checkbox-observatory input:checked + .telescope .star {
    background: #c7d2fe;
    box-shadow: 0 0 3px #c7d2fe;
    animation: starTwinkle 3s infinite;
}

.checkbox-observatory input:checked + .telescope .star:nth-child(1) { animation-delay: 0.1s; }
.checkbox-observatory input:checked + .telescope .star:nth-child(2) { animation-delay: 0.5s; }
.checkbox-observatory input:checked + .telescope .star:nth-child(3) { animation-delay: 0.9s; }
.checkbox-observatory input:checked + .telescope .star:nth-child(4) { animation-delay: 1.3s; }
.checkbox-observatory input:checked + .telescope .star:nth-child(5) { animation-delay: 1.7s; }

@keyframes lensGlow {
    0% { 
        box-shadow: 
            0 0 8px #c7d2fe,
            0 0 15px rgba(199, 210, 254, 0.4);
    }
    100% { 
        box-shadow: 
            0 0 12px #c7d2fe,
            0 0 25px rgba(199, 210, 254, 0.6),
            0 0 35px rgba(199, 210, 254, 0.3);
    }
}

@keyframes starTwinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
}`,
    js: `// Observatory checkbox functionality
document.querySelectorAll('.checkbox-observatory input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Observatory checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 85: Rainbow Glow Checkbox
// ====================================================================
checkbox85: {
    name: "Rainbow Glow Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-rainbow">
        <input type="checkbox">
        <span class="rainbow-checkmark"></span>
        Rainbow Glow
    </label>
    <label class="checkbox-rainbow">
        <input type="checkbox" checked>
        <span class="rainbow-checkmark"></span>
        Rainbow Active
    </label>
</div>`,
    css: `.checkbox-rainbow {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    user-select: none;
}

.checkbox-rainbow input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.rainbow-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    margin-right: 12px;
    background: #1e293b;
    border-radius: 50%;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    --spread: 15px;
}

.checkbox-rainbow input:checked ~ .rainbow-checkmark {
    background: #000;
    box-shadow: 
        -8px -8px var(--spread) 0px #FF0000,
        0 -8px var(--spread) 0px #FF7F00,
        8px -8px var(--spread) 0px #FFFF00,
        8px 0 var(--spread) 0px #00FF00,
        8px 8px var(--spread) 0px #0000FF,
        0 8px var(--spread) 0px #4B0082,
        -8px 8px var(--spread) 0px #9400D3;
    animation: rainbowRotate 2s infinite linear;
}

.checkbox-rainbow input:checked ~ .rainbow-checkmark:after {
    content: "";
    position: absolute;
    display: block;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(40deg);
}

@keyframes rainbowRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}`,
    js: `// Rainbow Glow checkbox functionality
document.querySelectorAll('.checkbox-rainbow input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Rainbow Glow checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 86: Neon Galaxy Checkbox
// ====================================================================
checkbox86: {
    name: "Neon Galaxy Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-galaxy">
        <input type="checkbox">
        <span class="galaxy-checkmark"></span>
        Neon Galaxy
    </label>
    <label class="checkbox-galaxy">
        <input type="checkbox" checked>
        <span class="galaxy-checkmark"></span>
        Galaxy Active
    </label>
</div>`,
    css: `.checkbox-galaxy {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #c7d2fe;
    margin-bottom: 15px;
    user-select: none;
}

.checkbox-galaxy input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.galaxy-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    margin-right: 12px;
    background: #0f172a;
    border-radius: 50%;
    border: 2px solid #334155;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    --spread: 18px;
}

.checkbox-galaxy input:checked ~ .galaxy-checkmark {
    background: #000;
    border-color: transparent;
    box-shadow: 
        -10px -10px var(--spread) 0px #00FFFF,
        0 -10px var(--spread) 0px #0080FF,
        10px -10px var(--spread) 0px #8000FF,
        10px 0 var(--spread) 0px #FF00FF,
        10px 10px var(--spread) 0px #FF0080,
        0 10px var(--spread) 0px #FF0000,
        -10px 10px var(--spread) 0px #FF8000;
    animation: galaxyPulse 2s infinite alternate;
}

.checkbox-galaxy input:checked ~ .galaxy-checkmark:after {
    content: "";
    position: absolute;
    display: block;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(40deg);
    filter: drop-shadow(0 0 2px white);
}

@keyframes galaxyPulse {
    0% { 
        transform: scale(1);
        --spread: 15px;
    }
    100% { 
        transform: scale(1.05);
        --spread: 22px;
    }
}`,
    js: `// Neon Galaxy checkbox functionality
document.querySelectorAll('.checkbox-galaxy input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Neon Galaxy checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 87: Fire Glow Checkbox
// ====================================================================
checkbox87: {
    name: "Fire Glow Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-fire">
        <input type="checkbox">
        <span class="fire-checkmark"></span>
        Fire Glow
    </label>
    <label class="checkbox-fire">
        <input type="checkbox" checked>
        <span class="fire-checkmark"></span>
        Fire Active
    </label>
</div>`,
    css: `.checkbox-fire {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    user-select: none;
}

.checkbox-fire input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.fire-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    margin-right: 12px;
    background: #1e293b;
    border-radius: 50%;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    --spread: 16px;
}

.checkbox-fire input:checked ~ .fire-checkmark {
    background: #000;
    box-shadow: 
        -9px -9px var(--spread) 0px #FFD700,
        0 -9px var(--spread) 0px #FFA500,
        9px -9px var(--spread) 0px #FF8C00,
        9px 0 var(--spread) 0px #FF4500,
        9px 9px var(--spread) 0px #FF0000,
        0 9px var(--spread) 0px #DC143C,
        -9px 9px var(--spread) 0px #8B0000;
    animation: fireFlicker 0.5s infinite alternate;
}

.checkbox-fire input:checked ~ .fire-checkmark:after {
    content: "";
    position: absolute;
    display: block;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(40deg);
    filter: drop-shadow(0 0 2px white);
}

@keyframes fireFlicker {
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        --spread: 14px;
    }
    50% { 
        transform: scale(1.02) rotate(1deg);
        --spread: 18px;
    }
}`,
    js: `// Fire Glow checkbox functionality
document.querySelectorAll('.checkbox-fire input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Fire Glow checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 88: Ocean Wave Checkbox
// ====================================================================
checkbox88: {
    name: "Ocean Wave Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-ocean">
        <input type="checkbox">
        <span class="ocean-checkmark"></span>
        Ocean Wave
    </label>
    <label class="checkbox-ocean">
        <input type="checkbox" checked>
        <span class="ocean-checkmark"></span>
        Ocean Active
    </label>
</div>`,
    css: `.checkbox-ocean {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    user-select: none;
}

.checkbox-ocean input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.ocean-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    margin-right: 12px;
    background: #1e293b;
    border-radius: 50%;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    --spread: 17px;
}

.checkbox-ocean input:checked ~ .ocean-checkmark {
    background: #000;
    box-shadow: 
        -10px -10px var(--spread) 0px #00BFFF,
        0 -10px var(--spread) 0px #1E90FF,
        10px -10px var(--spread) 0px #4169E1,
        10px 0 var(--spread) 0px #0000FF,
        10px 10px var(--spread) 0px #00008B,
        0 10px var(--spread) 0px #191970,
        -10px 10px var(--spread) 0px #4682B4;
    animation: waveMotion 3s infinite ease-in-out;
}

.checkbox-ocean input:checked ~ .ocean-checkmark:after {
    content: "";
    position: absolute;
    display: block;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(40deg);
    filter: drop-shadow(0 0 2px white);
}

@keyframes waveMotion {
    0%, 100% { 
        transform: translateY(0);
        --spread: 15px;
    }
    50% { 
        transform: translateY(-3px);
        --spread: 20px;
    }
}`,
    js: `// Ocean Wave checkbox functionality
document.querySelectorAll('.checkbox-ocean input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Ocean Wave checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 89: Forest Glow Checkbox
// ====================================================================
checkbox89: {
    name: "Forest Glow Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-forest">
        <input type="checkbox">
        <span class="forest-checkmark"></span>
        Forest Glow
    </label>
    <label class="checkbox-forest">
        <input type="checkbox" checked>
        <span class="forest-checkmark"></span>
        Forest Active
    </label>
</div>`,
    css: `.checkbox-forest {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    user-select: none;
}

.checkbox-forest input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.forest-checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
    margin-right: 12px;
    background: #1e293b;
    border-radius: 50%;
    transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
    --spread: 16px;
}

.checkbox-forest input:checked ~ .forest-checkmark {
    background: #000;
    box-shadow: 
        -9px -9px var(--spread) 0px #228B22,
        0 -9px var(--spread) 0px #32CD32,
        9px -9px var(--spread) 0px #00FF00,
        9px 0 var(--spread) 0px #7CFC00,
        9px 9px var(--spread) 0px #ADFF2F,
        0 9px var(--spread) 0px #9ACD32,
        -9px 9px var(--spread) 0px #006400;
    animation: forestBreath 4s infinite ease-in-out;
}

.checkbox-forest input:checked ~ .forest-checkmark:after {
    content: "";
    position: absolute;
    display: block;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(40deg);
    filter: drop-shadow(0 0 2px white);
}

@keyframes forestBreath {
    0%, 100% { 
        transform: scale(1);
        --spread: 14px;
    }
    50% { 
        transform: scale(1.03);
        --spread: 18px;
    }
}`,
    js: `// Forest Glow checkbox functionality
document.querySelectorAll('.checkbox-forest input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Forest Glow checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 90: Premium Metallic Checkbox
// ====================================================================
checkbox90: {
    name: "Premium Metallic Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-metallic">
        <input type="checkbox">
        <span class="metallic-checkmark">
            <span class="metal-shine"></span>
            <span class="metal-indicator"></span>
        </span>
        Premium Option
    </label>
    <label class="checkbox-metallic">
        <input type="checkbox" checked>
        <span class="metallic-checkmark">
            <span class="metal-shine"></span>
            <span class="metal-indicator"></span>
        </span>
        Selected
    </label>
</div>`,
    css: `.checkbox-metallic {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    font-weight: 500;
    letter-spacing: 0.3px;
}

.checkbox-metallic input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.metallic-checkmark {
    position: relative;
    height: 22px;
    width: 22px;
    margin-right: 12px;
    background: linear-gradient(135deg, 
        #e5e7eb 0%, 
        #d1d5db 25%, 
        #9ca3af 50%, 
        #6b7280 75%, 
        #4b5563 100%
    );
    border-radius: 6px;
    border: 1px solid #9ca3af;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    box-shadow: 
        0 2px 8px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.metal-shine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, 
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
    );
    border-radius: 6px 6px 0 0;
}

.metal-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #6b7280;
    border-radius: 3px;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    opacity: 0;
}

.checkbox-metallic input:checked ~ .metallic-checkmark {
    background: linear-gradient(135deg, 
        #fbbf24 0%, 
        #f59e0b 25%, 
        #d97706 50%, 
        #b45309 75%, 
        #92400e 100%
    );
    border-color: #d97706;
    box-shadow: 
        0 4px 20px rgba(245, 158, 11, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2);
}

.checkbox-metallic input:checked ~ .metallic-checkmark .metal-indicator {
    opacity: 1;
    background: #ffffff;
    box-shadow: 
        0 0 10px rgba(255, 255, 255, 0.8),
        inset 0 1px 2px rgba(255, 255, 255, 0.8);
    animation: metallicGlow 2s infinite alternate;
}

@keyframes metallicGlow {
    0% { 
        box-shadow: 
            0 0 8px rgba(255, 255, 255, 0.8),
            inset 0 1px 2px rgba(255, 255, 255, 0.8);
    }
    100% { 
        box-shadow: 
            0 0 12px rgba(255, 255, 255, 1),
            0 0 20px rgba(255, 255, 255, 0.6),
            inset 0 1px 2px rgba(255, 255, 255, 1);
    }
}`,
    js: `// Premium Metallic checkbox functionality
document.querySelectorAll('.checkbox-metallic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Premium Metallic checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 91: Corporate Gradient Checkbox
// ====================================================================
checkbox91: {
    name: "Corporate Gradient Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-corporate">
        <input type="checkbox">
        <span class="corporate-checkmark">
            <span class="corporate-icon"></span>
        </span>
        Corporate Option
    </label>
    <label class="checkbox-corporate">
        <input type="checkbox" checked>
        <span class="corporate-checkmark">
            <span class="corporate-icon"></span>
        </span>
        Approved
    </label>
</div>`,
    css: `.checkbox-corporate {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #374151;
    margin-bottom: 15px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.checkbox-corporate input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.corporate-checkmark {
    position: relative;
    height: 20px;
    width: 20px;
    margin-right: 12px;
    background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
    border: 2px solid #d1d5db;
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.corporate-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background: transparent;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-corporate input:checked ~ .corporate-checkmark {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    border-color: #1d4ed8;
    box-shadow: 
        0 4px 12px rgba(59, 130, 246, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
}

.checkbox-corporate input:checked ~ .corporate-checkmark .corporate-icon {
    background: #ffffff;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: translate(-50%, -50%) scale(1);
    animation: corporateCheck 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes corporateCheck {
    0% { transform: translate(-50%, -50%) scale(0) rotate(-90deg); }
    50% { transform: translate(-50%, -50%) scale(1.2) rotate(10deg); }
    100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
}`,
    js: `// Corporate Gradient checkbox functionality
document.querySelectorAll('.checkbox-corporate input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Corporate Gradient checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 92: Executive Diamond Checkbox
// ====================================================================
checkbox92: {
    name: "Executive Diamond Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-diamond">
        <input type="checkbox">
        <span class="diamond-checkmark">
            <span class="diamond-facet"></span>
            <span class="diamond-sparkle"></span>
        </span>
        Executive Option
    </label>
    <label class="checkbox-diamond">
        <input type="checkbox" checked>
        <span class="diamond-checkmark">
            <span class="diamond-facet"></span>
            <span class="diamond-sparkle"></span>
        </span>
        Executive Choice
    </label>
</div>`,
    css: `.checkbox-diamond {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #111827;
    margin-bottom: 15px;
    font-weight: 600;
    letter-spacing: 0.2px;
}

.checkbox-diamond input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.diamond-checkmark {
    position: relative;
    height: 22px;
    width: 22px;
    margin-right: 12px;
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    transform: rotate(45deg);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.diamond-facet {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #cbd5e1;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: all 0.4s ease;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.diamond-sparkle {
    position: absolute;
    top: 30%;
    left: 30%;
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.4s ease;
}

.checkbox-diamond input:checked ~ .diamond-checkmark {
    background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.1) 0%,
        rgba(139, 92, 246, 0.3) 100%
    );
    border-color: #8b5cf6;
    box-shadow: 
        0 4px 20px rgba(139, 92, 246, 0.2),
        0 0 0 1px rgba(139, 92, 246, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.checkbox-diamond input:checked ~ .diamond-checkmark .diamond-facet {
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    box-shadow: 
        0 0 15px rgba(139, 92, 246, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    animation: diamondShine 2s infinite alternate;
}

.checkbox-diamond input:checked ~ .diamond-checkmark .diamond-sparkle {
    opacity: 1;
    animation: sparkleTwinkle 1.5s infinite;
}

@keyframes diamondShine {
    0% { 
        transform: translate(-50%, -50%) rotate(45deg) scale(1);
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
    }
    100% { 
        transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.3);
    }
}

@keyframes sparkleTwinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.5); }
}`,
    js: `// Executive Diamond checkbox functionality
document.querySelectorAll('.checkbox-diamond input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Executive Diamond checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 93: Luxury Gold Checkbox
// ====================================================================
checkbox93: {
    name: "Luxury Gold Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-luxury">
        <input type="checkbox">
        <span class="luxury-checkmark">
            <span class="gold-layer"></span>
            <span class="luxury-icon">✓</span>
        </span>
        Luxury Option
    </label>
    <label class="checkbox-luxury">
        <input type="checkbox" checked>
        <span class="luxury-checkmark">
            <span class="gold-layer"></span>
            <span class="luxury-icon">✓</span>
        </span>
        Luxury Selected
    </label>
</div>`,
    css: `.checkbox-luxury {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1f2937;
    margin-bottom: 15px;
    font-weight: 500;
    font-family: 'Georgia', serif;
}

.checkbox-luxury input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.luxury-checkmark {
    position: relative;
    height: 24px;
    width: 24px;
    margin-right: 12px;
    background: linear-gradient(135deg, 
        #fef3c7 0%, 
        #fde68a 25%, 
        #fcd34d 50%, 
        #fbbf24 75%, 
        #f59e0b 100%
    );
    border-radius: 8px;
    border: 1px solid #fbbf24;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    box-shadow: 
        0 4px 15px rgba(245, 158, 11, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.gold-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.4) 50%,
        transparent 70%
    );
    transform: translateX(-100%);
    transition: all 0.6s ease;
}

.luxury-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #92400e;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: all 0.3s ease 0.1s;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.checkbox-luxury input:checked ~ .luxury-checkmark {
    border-color: #d97706;
    box-shadow: 
        0 6px 25px rgba(245, 158, 11, 0.3),
        0 0 0 1px rgba(245, 158, 11, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    animation: luxuryGlow 2s infinite alternate;
}

.checkbox-luxury input:checked ~ .luxury-checkmark .gold-layer {
    transform: translateX(100%);
    animation: goldShine 3s infinite linear;
}

.checkbox-luxury input:checked ~ .luxury-checkmark .luxury-icon {
    opacity: 1;
    color: #78350f;
    text-shadow: 
        0 0 5px rgba(255, 255, 255, 0.8),
        0 1px 3px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%) scale(1.1);
}

@keyframes luxuryGlow {
    0% { box-shadow: 0 6px 20px rgba(245, 158, 11, 0.25); }
    100% { box-shadow: 0 6px 30px rgba(245, 158, 11, 0.4), 0 0 15px rgba(245, 158, 11, 0.2); }
}

@keyframes goldShine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}`,
    js: `// Luxury Gold checkbox functionality
document.querySelectorAll('.checkbox-luxury input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Luxury Gold checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 94: Professional Minimal Checkbox
// ====================================================================
checkbox94: {
    name: "Professional Minimal Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-minimal">
        <input type="checkbox">
        <span class="minimal-checkmark"></span>
        Minimal Option
    </label>
    <label class="checkbox-minimal">
        <input type="checkbox" checked>
        <span class="minimal-checkmark"></span>
        Minimal Selected
    </label>
</div>`,
    css: `.checkbox-minimal {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #374151;
    margin-bottom: 15px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
}

.checkbox-minimal input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.minimal-checkmark {
    position: relative;
    height: 18px;
    width: 18px;
    margin-right: 12px;
    background: #ffffff;
    border: 2px solid #d1d5db;
    border-radius: 4px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.minimal-checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 9px;
    border: solid #3b82f6;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.checkbox-minimal input:checked ~ .minimal-checkmark {
    background: #3b82f6;
    border-color: #3b82f6;
    animation: minimalBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.checkbox-minimal input:checked ~ .minimal-checkmark:after {
    display: block;
    border-color: white;
    animation: minimalCheck 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes minimalBounce {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes minimalCheck {
    0% { 
        transform: rotate(45deg) scale(0);
        opacity: 0;
    }
    50% { 
        transform: rotate(45deg) scale(1.2);
    }
    100% { 
        transform: rotate(45deg) scale(1);
        opacity: 1;
    }
}

/* Hover effects for minimal design */
.checkbox-minimal:hover .minimal-checkmark {
    border-color: #9ca3af;
    transform: translateY(-1px);
}

.checkbox-minimal input:checked ~ .minimal-checkmark:hover {
    background: #2563eb;
    border-color: #2563eb;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
}`,
    js: `// Professional Minimal checkbox functionality
document.querySelectorAll('.checkbox-minimal input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Professional Minimal checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 95: Multi-Select Grid Checkbox
// ====================================================================
checkbox95: {
    name: "Multi-Select Grid Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="multi-grid">
        <label class="multi-grid-item">
            <input type="checkbox" name="grid-option" value="1">
            <span class="grid-box">
                <span class="grid-number">1</span>
            </span>
        </label>
        <label class="multi-grid-item">
            <input type="checkbox" name="grid-option" value="2" checked>
            <span class="grid-box">
                <span class="grid-number">2</span>
            </span>
        </label>
        <label class="multi-grid-item">
            <input type="checkbox" name="grid-option" value="3">
            <span class="grid-box">
                <span class="grid-number">3</span>
            </span>
        </label>
        <label class="multi-grid-item">
            <input type="checkbox" name="grid-option" value="4">
            <span class="grid-box">
                <span class="grid-number">4</span>
            </span>
        </label>
    </div>
    <p class="multi-label">Select multiple options</p>
</div>`,
    css: `.multi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 10px;
}

.multi-grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
}

.multi-grid-item input {
    display: none;
}

.grid-box {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8fafc;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
}

.grid-number {
    font-size: 16px;
    font-weight: 600;
    color: #64748b;
    transition: all 0.3s ease;
}

.multi-label {
    font-size: 12px;
    color: #64748b;
    text-align: center;
    margin-top: 5px;
}

.multi-grid-item input:checked + .grid-box {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-color: transparent;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
}

.multi-grid-item input:checked + .grid-box .grid-number {
    color: white;
    transform: scale(1.2);
}

.multi-grid-item input:checked + .grid-box::after {
    content: '';
    position: absolute;
    top: 5px;
    right: 5px;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 5px white;
}

.multi-grid-item:hover .grid-box {
    border-color: #cbd5e1;
    transform: translateY(-2px);
}`,
    js: `// Multi-Select Grid functionality
document.querySelectorAll('.multi-grid-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedCount = document.querySelectorAll('.multi-grid-item input:checked').length;
        console.log('Selected items:', selectedCount);
    });
});`
},
// ====================================================================
// TEMPLATE 96: Color Palette Checkbox
// ====================================================================
checkbox96: {
    name: "Color Palette Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="color-palette">
        <label class="color-option">
            <input type="checkbox" name="color" value="red">
            <span class="color-box" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                <span class="color-check"></span>
            </span>
            <span class="color-name">Red</span>
        </label>
        <label class="color-option">
            <input type="checkbox" name="color" value="blue" checked>
            <span class="color-box" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                <span class="color-check"></span>
            </span>
            <span class="color-name">Blue</span>
        </label>
        <label class="color-option">
            <input type="checkbox" name="color" value="green">
            <span class="color-box" style="background: linear-gradient(135deg, #10b981, #059669);">
                <span class="color-check"></span>
            </span>
            <span class="color-name">Green</span>
        </label>
        <label class="color-option">
            <input type="checkbox" name="color" value="purple">
            <span class="color-box" style="background: linear-gradient(135deg, #8b5cf6, #7c3aed);">
                <span class="color-check"></span>
            </span>
            <span class="color-name">Purple</span>
        </label>
    </div>
    <p class="palette-label">Choose colors</p>
</div>`,
    css: `.color-palette {
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.color-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    flex: 1;
    min-width: 60px;
}

.color-option input {
    display: none;
}

.color-box {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
    border: 3px solid transparent;
}

.color-check {
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #1e293b;
}

.color-name {
    margin-top: 8px;
    font-size: 12px;
    color: #64748b;
    font-weight: 500;
    transition: all 0.3s ease;
}

.palette-label {
    font-size: 12px;
    color: #64748b;
    text-align: center;
    margin-top: 5px;
}

.color-option input:checked + .color-box {
    border-color: white;
    box-shadow: 
        0 8px 25px rgba(0, 0, 0, 0.15),
        0 0 0 3px rgba(255, 255, 255, 0.3);
    transform: scale(1.1) translateY(-5px);
}

.color-option input:checked + .color-box .color-check {
    opacity: 1;
    transform: scale(1);
}

.color-option input:checked + .color-box .color-check::after {
    content: '✓';
    font-weight: bold;
}

.color-option:hover .color-box {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.color-option:hover .color-name {
    color: #1e293b;
}`,
    js: `// Color Palette functionality
document.querySelectorAll('.color-option input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedColors = Array.from(document.querySelectorAll('.color-option input:checked'))
            .map(cb => cb.value);
        console.log('Selected colors:', selectedColors);
    });
});`
},
// ====================================================================
// TEMPLATE 97: Feature Toggle Checkbox
// ====================================================================
checkbox97: {
    name: "Feature Toggle Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="feature-toggle">
        <div class="feature-header">
            <h4>Premium Features</h4>
            <span class="toggle-all">Select All</span>
        </div>
        
        <label class="feature-option">
            <input type="checkbox" name="feature" value="analytics">
            <span class="feature-box">
                <span class="feature-icon">📊</span>
                <span class="feature-content">
                    <span class="feature-title">Advanced Analytics</span>
                    <span class="feature-desc">Get detailed insights</span>
                </span>
                <span class="feature-toggle-btn"></span>
            </span>
        </label>
        
        <label class="feature-option">
            <input type="checkbox" name="feature" value="support" checked>
            <span class="feature-box">
                <span class="feature-icon">🎯</span>
                <span class="feature-content">
                    <span class="feature-title">Priority Support</span>
                    <span class="feature-desc">24/7 dedicated support</span>
                </span>
                <span class="feature-toggle-btn"></span>
            </span>
        </label>
        
        <label class="feature-option">
            <input type="checkbox" name="feature" value="security">
            <span class="feature-box">
                <span class="feature-icon">🔒</span>
                <span class="feature-content">
                    <span class="feature-title">Enhanced Security</span>
                    <span class="feature-desc">Bank-level encryption</span>
                </span>
                <span class="feature-toggle-btn"></span>
            </span>
        </label>
    </div>
</div>`,
    css: `.feature-toggle {
    width: 100%;
}

.feature-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;
}

.feature-header h4 {
    margin: 0;
    color: #1e293b;
    font-size: 16px;
    font-weight: 600;
}

.toggle-all {
    font-size: 12px;
    color: #7c3aed;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.toggle-all:hover {
    color: #6d28d9;
    text-decoration: underline;
}

.feature-option {
    display: block;
    margin-bottom: 12px;
    cursor: pointer;
}

.feature-option input {
    display: none;
}

.feature-box {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.feature-icon {
    font-size: 20px;
    margin-right: 15px;
    transition: all 0.3s ease;
}

.feature-content {
    flex: 1;
}

.feature-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 2px;
}

.feature-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
}

.feature-toggle-btn {
    width: 40px;
    height: 20px;
    background: #cbd5e1;
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease;
}

.feature-toggle-btn::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.feature-option input:checked + .feature-box {
    background: rgba(124, 58, 237, 0.05);
    border-color: #7c3aed;
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
}

.feature-option input:checked + .feature-box .feature-icon {
    transform: scale(1.1);
}

.feature-option input:checked + .feature-box .feature-toggle-btn {
    background: #7c3aed;
}

.feature-option input:checked + .feature-box .feature-toggle-btn::after {
    transform: translateX(20px);
}

.feature-option:hover .feature-box {
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}`,
    js: `// Feature Toggle functionality
const featureCheckboxes = document.querySelectorAll('.feature-option input');
const selectAllBtn = document.querySelector('.toggle-all');

// Individual feature toggle
featureCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedFeatures = Array.from(featureCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        console.log('Selected features:', selectedFeatures);
    });
});

// Select All functionality
selectAllBtn.addEventListener('click', function() {
    const allChecked = Array.from(featureCheckboxes).every(cb => cb.checked);
    featureCheckboxes.forEach(cb => {
        cb.checked = !allChecked;
        cb.dispatchEvent(new Event('change'));
    });
    selectAllBtn.textContent = allChecked ? 'Select All' : 'Deselect All';
});`
},
// ====================================================================
// TEMPLATE 98: Rating Stars Checkbox
// ====================================================================
checkbox98: {
    name: "Rating Stars Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <div class="rating-stars">
        <label class="star-option">
            <input type="checkbox" name="rating" value="1">
            <span class="star-box">★</span>
        </label>
        <label class="star-option">
            <input type="checkbox" name="rating" value="2">
            <span class="star-box">★</span>
        </label>
        <label class="star-option">
            <input type="checkbox" name="rating" value="3" checked>
            <span class="star-box">★</span>
        </label>
        <label class="star-option">
            <input type="checkbox" name="rating" value="4">
            <span class="star-box">★</span>
        </label>
        <label class="star-option">
            <input type="checkbox" name="rating" value="5">
            <span class="star-box">★</span>
        </label>
    </div>
    <p class="rating-label">Rate from 1 to 5 stars</p>
</div>`,
    css: `.rating-stars {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}

.star-option {
    cursor: pointer;
}

.star-option input {
    display: none;
}

.star-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #f8fafc;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 20px;
    color: #cbd5e1;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
}

.rating-label {
    font-size: 12px;
    color: #64748b;
    text-align: center;
    margin-top: 5px;
}

.star-option input:checked ~ .star-box,
.star-option:hover .star-box {
    color: #fbbf24;
    border-color: #fbbf24;
    background: rgba(251, 191, 36, 0.1);
    transform: scale(1.1) translateY(-3px);
}

.star-option input:checked ~ .star-box {
    background: linear-gradient(135deg, #fbbf24, #f59e0b);
    color: white;
    border-color: transparent;
    box-shadow: 0 8px 20px rgba(251, 191, 36, 0.4);
    animation: starPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Make all previous stars glow when one is selected */
.star-option input:checked ~ .star-box,
.star-option input:checked ~ .star-box ~ .star-option .star-box {
    color: #fbbf24;
    border-color: #fbbf24;
    background: rgba(251, 191, 36, 0.1);
}

.star-option:hover ~ .star-option .star-box {
    color: #cbd5e1;
    border-color: #e2e8f0;
    background: #f8fafc;
}

@keyframes starPop {
    0% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.3) translateY(-5px); }
    100% { transform: scale(1.1) translateY(-3px); }
}`,
    js: `// Rating Stars functionality
document.querySelectorAll('.star-option input').forEach((checkbox, index, checkboxes) => {
    checkbox.addEventListener('change', function() {
        // Uncheck all higher stars if this is unchecked
        if (!this.checked) {
            checkboxes.forEach((cb, i) => {
                if (i > index) cb.checked = false;
            });
        } else {
            // Check all lower stars
            checkboxes.forEach((cb, i) => {
                if (i <= index) cb.checked = true;
            });
        }
        
        const rating = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .length;
        console.log('Rating:', rating + ' stars');
    });
});`
},
// ====================================================================
// TEMPLATE 99: Skill Selection Checkbox
// ====================================================================
checkbox99: {
    name: "Skill Selection Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="skill-selection">
        <label class="skill-option">
            <input type="checkbox" name="skill" value="design">
            <span class="skill-box">
                <span class="skill-icon">🎨</span>
                <span class="skill-name">Design</span>
                <span class="skill-level">Advanced</span>
            </span>
        </label>
        
        <label class="skill-option">
            <input type="checkbox" name="skill" value="development" checked>
            <span class="skill-box">
                <span class="skill-icon">💻</span>
                <span class="skill-name">Development</span>
                <span class="skill-level">Expert</span>
            </span>
        </label>
        
        <label class="skill-option">
            <input type="checkbox" name="skill" value="marketing">
            <span class="skill-box">
                <span class="skill-icon">📈</span>
                <span class="skill-name">Marketing</span>
                <span class="skill-level">Intermediate</span>
            </span>
        </label>
        
        <label class="skill-option">
            <input type="checkbox" name="skill" value="writing">
            <span class="skill-box">
                <span class="skill-icon">✍️</span>
                <span class="skill-name">Writing</span>
                <span class="skill-level">Beginner</span>
            </span>
        </label>
    </div>
    <p class="skill-label">Select your skills (multiple)</p>
</div>`,
    css: `.skill-selection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 10px;
}

.skill-option {
    cursor: pointer;
}

.skill-option input {
    display: none;
}

.skill-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px 10px;
    background: #f8fafc;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    text-align: center;
}

.skill-icon {
    font-size: 24px;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.skill-name {
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 4px;
    transition: all 0.3s ease;
}

.skill-level {
    font-size: 11px;
    color: #64748b;
    padding: 3px 8px;
    background: rgba(100, 116, 139, 0.1);
    border-radius: 10px;
    transition: all 0.3s ease;
}

.skill-label {
    font-size: 12px;
    color: #64748b;
    text-align: center;
    margin-top: 5px;
}

.skill-option input:checked + .skill-box {
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(236, 72, 153, 0.1));
    border-color: #7c3aed;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.15);
}

.skill-option input:checked + .skill-box .skill-icon {
    transform: scale(1.2);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.skill-option input:checked + .skill-box .skill-name {
    color: #7c3aed;
}

.skill-option input:checked + .skill-box .skill-level {
    background: rgba(124, 58, 237, 0.2);
    color: #7c3aed;
    font-weight: 600;
}

.skill-option:hover .skill-box {
    border-color: #cbd5e1;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Different level colors */
.skill-option:nth-child(1) .skill-level { background: rgba(16, 185, 129, 0.1); color: #10b981; }
.skill-option:nth-child(2) .skill-level { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
.skill-option:nth-child(3) .skill-level { background: rgba(245, 158, 11, 0.1); color: #f59e0b; }
.skill-option:nth-child(4) .skill-level { background: rgba(236, 72, 153, 0.1); color: #ec4899; }

.skill-option:nth-child(1):hover .skill-level { background: rgba(16, 185, 129, 0.2); }
.skill-option:nth-child(2):hover .skill-level { background: rgba(59, 130, 246, 0.2); }
.skill-option:nth-child(3):hover .skill-level { background: rgba(245, 158, 11, 0.2); }
.skill-option:nth-child(4):hover .skill-level { background: rgba(236, 72, 153, 0.2); }`,
    js: `// Skill Selection functionality
document.querySelectorAll('.skill-option input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedSkills = Array.from(document.querySelectorAll('.skill-option input:checked'))
            .map(cb => cb.value);
        console.log('Selected skills:', selectedSkills);
        
        // Update UI based on selection count
        const skillBoxes = document.querySelectorAll('.skill-box');
        if (selectedSkills.length > 0) {
            skillBoxes.forEach(box => box.style.opacity = '0.7');
            document.querySelectorAll('.skill-option input:checked').forEach(cb => {
                cb.parentElement.querySelector('.skill-box').style.opacity = '1';
            });
        } else {
            skillBoxes.forEach(box => box.style.opacity = '1');
        }
    });
});`
},
// ====================================================================
// TEMPLATE 100: Casual Chat Bubble Checkbox
// ====================================================================
checkbox100: {
    name: "Chat Bubble Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-chat">
        <input type="checkbox">
        <span class="chat-bubble">
            <span class="chat-text">👍 Like this option?</span>
            <span class="chat-check"></span>
        </span>
    </label>
    <label class="checkbox-chat">
        <input type="checkbox" checked>
        <span class="chat-bubble">
            <span class="chat-text">✅ Already liked!</span>
            <span class="chat-check"></span>
        </span>
    </label>
</div>`,
    css: `.checkbox-chat {
    display: block;
    cursor: pointer;
    margin-bottom: 12px;
}

.checkbox-chat input {
    display: none;
}

.chat-bubble {
    display: inline-flex;
    align-items: center;
    padding: 12px 18px;
    background: #f1f5f9;
    border-radius: 20px;
    border: 2px solid transparent;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    max-width: 250px;
}

.chat-text {
    font-size: 14px;
    color: #475569;
    font-weight: 500;
    transition: all 0.3s ease;
}

.chat-check {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    background: #cbd5e1;
    border-radius: 50%;
    transition: all 0.3s ease;
    position: relative;
}

.chat-check::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.checkbox-chat input:checked + .chat-bubble {
    background: #3b82f6;
    border-color: #1d4ed8;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.checkbox-chat input:checked + .chat-bubble .chat-text {
    color: white;
}

.checkbox-chat input:checked + .chat-bubble .chat-check {
    background: white;
    transform: scale(1.1);
}

.checkbox-chat input:checked + .chat-bubble .chat-check::after {
    background: #3b82f6;
    transform: translate(-50%, -50%) scale(1);
}

.checkbox-chat:hover .chat-bubble {
    background: #e2e8f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.checkbox-chat:hover .chat-check {
    background: #94a3b8;
}`,
    js: `// Chat Bubble checkbox functionality
document.querySelectorAll('.checkbox-chat input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Chat Bubble checkbox changed:', this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 101: Casual Badge Checkbox
// ====================================================================
checkbox101: {
    name: "Badge Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="badge-group">
        <label class="badge-checkbox">
            <input type="checkbox" name="interest" value="sports">
            <span class="badge">⚽ Sports</span>
        </label>
        <label class="badge-checkbox">
            <input type="checkbox" name="interest" value="music" checked>
            <span class="badge">🎵 Music</span>
        </label>
        <label class="badge-checkbox">
            <input type="checkbox" name="interest" value="tech">
            <span class="badge">💻 Tech</span>
        </label>
        <label class="badge-checkbox">
            <input type="checkbox" name="interest" value="travel">
            <span class="badge">✈️ Travel</span>
        </label>
    </div>
</div>`,
    css: `.badge-group {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 5px;
}

.badge-checkbox {
    cursor: pointer;
}

.badge-checkbox input {
    display: none;
}

.badge {
    display: inline-block;
    padding: 8px 16px;
    background: #f1f5f9;
    border: 2px solid #cbd5e1;
    border-radius: 20px;
    font-size: 14px;
    color: #475569;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
}

.badge::after {
    content: '✓';
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: #10b981;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    opacity: 0;
    transition: all 0.3s ease;
}

.badge-checkbox input:checked + .badge {
    background: #10b981;
    border-color: #059669;
    color: white;
    padding-right: 40px;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.badge-checkbox input:checked + .badge::after {
    right: 8px;
    opacity: 1;
}

.badge-checkbox:hover .badge {
    background: #e2e8f0;
    border-color: #94a3b8;
    transform: translateY(-2px);
}`,
    js: `// Badge checkbox functionality
document.querySelectorAll('.badge-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const selectedInterests = Array.from(document.querySelectorAll('.badge-checkbox input:checked'))
            .map(cb => cb.value);
        console.log('Selected interests:', selectedInterests);
    });
});`
},
// ====================================================================
// TEMPLATE 102: Casual Card Checkbox
// ====================================================================
checkbox102: {
    name: "Card Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="card-group">
        <label class="card-checkbox">
            <input type="checkbox" name="plan" value="basic">
            <div class="card">
                <span class="card-icon">📱</span>
                <h4 class="card-title">Basic Plan</h4>
                <p class="card-desc">Essential features</p>
                <span class="card-price">$9.99/mo</span>
            </div>
        </label>
        <label class="card-checkbox">
            <input type="checkbox" name="plan" value="pro" checked>
            <div class="card">
                <span class="card-icon">🚀</span>
                <h4 class="card-title">Pro Plan</h4>
                <p class="card-desc">Advanced features</p>
                <span class="card-price">$19.99/mo</span>
            </div>
        </label>
    </div>
</div>`,
    css: `.card-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 5px;
}

.card-checkbox {
    cursor: pointer;
}

.card-checkbox input {
    display: none;
}

.card {
    padding: 20px;
    background: white;
    border: 2px solid #e2e8f0;
    border-radius: 16px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: transparent;
    transition: all 0.3s ease;
}

.card-icon {
    font-size: 32px;
    margin-bottom: 12px;
    display: block;
    transition: all 0.3s ease;
}

.card-title {
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 8px;
    transition: all 0.3s ease;
}

.card-desc {
    font-size: 13px;
    color: #64748b;
    margin-bottom: 12px;
    transition: all 0.3s ease;
}

.card-price {
    font-size: 18px;
    font-weight: 700;
    color: #7c3aed;
    transition: all 0.3s ease;
}

.card-checkbox input:checked + .card {
    background: rgba(124, 58, 237, 0.05);
    border-color: #7c3aed;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.15);
}

.card-checkbox input:checked + .card::before {
    background: linear-gradient(90deg, #7c3aed, #ec4899);
}

.card-checkbox input:checked + .card .card-icon {
    transform: scale(1.1);
}

.card-checkbox input:checked + .card .card-title {
    color: #7c3aed;
}

.card-checkbox input:checked + .card .card-price {
    color: #6d28d9;
    text-shadow: 0 2px 4px rgba(109, 40, 217, 0.2);
}

.card-checkbox:hover .card {
    border-color: #cbd5e1;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}`,
    js: `// Card checkbox functionality
document.querySelectorAll('.card-checkbox input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        console.log('Selected plan:', this.value, this.checked);
    });
});`
},
// ====================================================================
// TEMPLATE 103: Professional Radio Group Checkbox
// ====================================================================
checkbox103: {
    name: "Radio Group Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="radio-group">
        <h4 class="group-title">Select Payment Method</h4>
        
        <label class="radio-option">
            <input type="checkbox" name="payment" value="credit">
            <span class="radio-dot"></span>
            <span class="radio-content">
                <span class="radio-icon">💳</span>
                <span class="radio-text">
                    <span class="radio-title">Credit Card</span>
                    <span class="radio-desc">Pay with Visa/Mastercard</span>
                </span>
            </span>
        </label>
        
        <label class="radio-option">
            <input type="checkbox" name="payment" value="paypal" checked>
            <span class="radio-dot"></span>
            <span class="radio-content">
                <span class="radio-icon">🅿️</span>
                <span class="radio-text">
                    <span class="radio-title">PayPal</span>
                    <span class="radio-desc">Fast and secure payment</span>
                </span>
            </span>
        </label>
        
        <label class="radio-option">
            <input type="checkbox" name="payment" value="bank">
            <span class="radio-dot"></span>
            <span class="radio-content">
                <span class="radio-icon">🏦</span>
                <span class="radio-text">
                    <span class="radio-title">Bank Transfer</span>
                    <span class="radio-desc">Direct bank transfer</span>
                </span>
            </span>
        </label>
    </div>
</div>`,
    css: `.radio-group {
    width: 100%;
}

.group-title {
    font-size: 15px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 15px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e2e8f0;
}

.radio-option {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    margin-bottom: 8px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.radio-option input {
    display: none;
}

.radio-dot {
    width: 20px;
    height: 20px;
    border: 2px solid #cbd5e1;
    border-radius: 50%;
    margin-right: 15px;
    position: relative;
    transition: all 0.3s ease;
    flex-shrink: 0;
}

.radio-dot::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 10px;
    height: 10px;
    background: #3b82f6;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.radio-content {
    display: flex;
    align-items: center;
    flex: 1;
}

.radio-icon {
    font-size: 24px;
    margin-right: 12px;
    transition: all 0.3s ease;
}

.radio-text {
    flex: 1;
}

.radio-title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 2px;
    transition: all 0.3s ease;
}

.radio-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
    transition: all 0.3s ease;
}

.radio-option input:checked + .radio-dot {
    border-color: #3b82f6;
    background: rgba(59, 130, 246, 0.1);
}

.radio-option input:checked + .radio-dot::after {
    transform: translate(-50%, -50%) scale(1);
}

.radio-option input:checked ~ .radio-content .radio-icon {
    transform: scale(1.1);
}

.radio-option input:checked ~ .radio-content .radio-title {
    color: #3b82f6;
}

.radio-option input:checked ~ .radio-option {
    background: rgba(59, 130, 246, 0.05);
    border-color: #3b82f6;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.radio-option:hover {
    background: #f1f5f9;
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}`,
    js: `// Radio Group functionality
document.querySelectorAll('.radio-option input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Make it behave like radio buttons - only one selected
        if (this.checked) {
            document.querySelectorAll('.radio-option input').forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
        }
        const selectedPayment = document.querySelector('.radio-option input:checked')?.value;
        console.log('Selected payment method:', selectedPayment);
    });
});`
},
// ====================================================================
// TEMPLATE 104: Professional Toggle Switch Group
// ====================================================================
 checkbox104: {
    name: "Toggle Switch Group",
    category: "modern",
    html: `<div class="checkbox-container">
    <div class="toggle-group">
        <div class="toggle-header">
            <h4>Notification Settings</h4>
            <span class="toggle-status">3/5 Active</span>
        </div>
        
        <label class="toggle-item">
            <input type="checkbox" name="notify" value="email" checked>
            <span class="toggle-content">
                <span class="toggle-icon">📧</span>
                <span class="toggle-text">
                    <span class="toggle-title">Email Notifications</span>
                    <span class="toggle-desc">Receive email alerts</span>
                </span>
            </span>
            <span class="toggle-switch"></span>
        </label>
        
        <label class="toggle-item">
            <input type="checkbox" name="notify" value="push" checked>
            <span class="toggle-content">
                <span class="toggle-icon">📱</span>
                <span class="toggle-text">
                    <span class="toggle-title">Push Notifications</span>
                    <span class="toggle-desc">App push notifications</span>
                </span>
            </span>
            <span class="toggle-switch"></span>
        </label>
        
        <label class="toggle-item">
            <input type="checkbox" name="notify" value="sms">
            <span class="toggle-content">
                <span class="toggle-icon">💬</span>
                <span class="toggle-text">
                    <span class="toggle-title">SMS Alerts</span>
                    <span class="toggle-desc">Text message alerts</span>
                </span>
            </span>
            <span class="toggle-switch"></span>
        </label>
    </div>
</div>`,
    css: `.toggle-group {
    width: 100%;
}

.toggle-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e2e8f0;
}

.toggle-header h4 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
}

.toggle-status {
    font-size: 12px;
    color: #10b981;
    font-weight: 600;
    background: rgba(16, 185, 129, 0.1);
    padding: 4px 10px;
    border-radius: 12px;
}

.toggle-item {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-item:last-child {
    border-bottom: none;
}

.toggle-item input {
    display: none;
}

.toggle-content {
    display: flex;
    align-items: center;
    flex: 1;
}

.toggle-icon {
    font-size: 20px;
    margin-right: 12px;
    transition: all 0.3s ease;
}

.toggle-text {
    flex: 1;
}

.toggle-title {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #1e293b;
    margin-bottom: 2px;
    transition: all 0.3s ease;
}

.toggle-desc {
    display: block;
    font-size: 12px;
    color: #64748b;
    transition: all 0.3s ease;
}

.toggle-switch {
    width: 44px;
    height: 24px;
    background: #cbd5e1;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    flex-shrink: 0;
}

.toggle-switch::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-item input:checked + .toggle-content .toggle-icon {
    transform: scale(1.1);
    color: #10b981;
}

.toggle-item input:checked + .toggle-content .toggle-title {
    color: #10b981;
}

.toggle-item input:checked ~ .toggle-switch {
    background: #10b981;
}

.toggle-item input:checked ~ .toggle-switch::after {
    transform: translateX(20px);
    box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);
}

.toggle-item:hover {
    background: #f8fafc;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: -10px;
    margin-right: -10px;
    border-radius: 8px;
}

.toggle-item:hover .toggle-switch {
    background: #94a3b8;
}

.toggle-item input:checked:hover ~ .toggle-switch {
    background: #059669;
}`,
    js: `// Toggle Switch Group functionality
function initToggleGroup() {
    const toggleCheckboxes = document.querySelectorAll('.toggle-item input');
    const toggleStatus = document.querySelector('.toggle-status');
    
    if (!toggleStatus || toggleCheckboxes.length === 0) return;
    
    function updateToggleStatus() {
        const checkedCount = Array.from(toggleCheckboxes).filter(cb => cb.checked).length;
        const totalCount = toggleCheckboxes.length;
        
        if (toggleStatus) {
            toggleStatus.textContent = \`\${checkedCount}/\${totalCount} Active\`;
            toggleStatus.style.color = checkedCount > 0 ? '#10b981' : '#64748b';
            toggleStatus.style.background = checkedCount > 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(100, 116, 139, 0.1)';
        }
    }
    
    toggleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log(\`\${this.value} notifications:\`, this.checked ? 'ON' : 'OFF');
            updateToggleStatus();
        });
    });
    
    // Initialize status
    updateToggleStatus();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggleGroup);
} else {
    initToggleGroup();
}`
},
// Add these new templates to the existing templateCodes object
checkbox105: {
    name: "3D Floating Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-3d">
        <input type="checkbox">
        <span class="checkmark-3d">
            <span class="inner-3d"></span>
        </span>
        <span class="label-text">3D Option 1</span>
    </label>
    <label class="checkbox-3d">
        <input type="checkbox" checked>
        <span class="checkmark-3d">
            <span class="inner-3d"></span>
        </span>
        <span class="label-text">3D Option 2</span>
    </label>
</div>`,
    css: `.checkbox-3d {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    perspective: 500px;
    margin-bottom: 10px;
}

.checkbox-3d input {
    display: none;
}

.checkmark-3d {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.inner-3d {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
    box-shadow: 
        5px 5px 10px #d9d9d9,
        -5px -5px 10px #ffffff,
        inset 2px 2px 4px rgba(255, 255, 255, 0.8),
        inset -2px -2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.checkbox-3d input:checked + .checkmark-3d {
    transform: rotateY(180deg) translateZ(10px);
}

.checkbox-3d input:checked + .checkmark-3d .inner-3d {
    background: linear-gradient(145deg, #7c3aed, #6d28d9);
    box-shadow: 
        5px 5px 10px #5b21b6,
        -5px -5px 10px #8b5cf6,
        inset 2px 2px 4px rgba(255, 255, 255, 0.3),
        inset -2px -2px 4px rgba(0, 0, 0, 0.2);
}

.checkbox-3d input:checked + .checkmark-3d::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotateY(180deg);
    color: white;
    font-size: 14px;
    font-weight: bold;
    z-index: 2;
}

.checkbox-3d:hover .checkmark-3d {
    transform: translateY(-3px) rotateX(5deg);
}`,
    js: `// 3D checkbox functionality
document.querySelectorAll('.checkbox-3d input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add 3D specific functionality
        console.log('3D checkbox changed:', this.checked);
    });
});`
},

checkbox106: {
    name: "Neon Glow Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-neon">
        <input type="checkbox">
        <span class="neon-glow"></span>
        <span class="neon-pulse"></span>
        <span class="label-text">Neon Option 1</span>
    </label>
    <label class="checkbox-neon">
        <input type="checkbox" checked>
        <span class="neon-glow"></span>
        <span class="neon-pulse"></span>
        <span class="label-text">Neon Option 2</span>
    </label>
</div>`,
    css: `.checkbox-container.dark-bg {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 8px;
}

.checkbox-neon {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    margin-bottom: 15px;
    position: relative;
}

.checkbox-neon input {
    display: none;
}

.neon-glow {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #00ff88;
    border-radius: 6px;
    position: relative;
    transition: all 0.3s ease;
    background: rgba(0, 255, 136, 0.1);
    box-shadow: 
        0 0 5px #00ff88,
        inset 0 0 5px rgba(0, 255, 136, 0.3);
}

.neon-pulse {
    position: absolute;
    left: 0;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: #00ff88;
    opacity: 0;
    filter: blur(8px);
    animation: neonPulse 2s infinite;
}

.checkbox-neon input:checked + .neon-glow {
    background: #00ff88;
    box-shadow: 
        0 0 15px #00ff88,
        0 0 30px #00ff88,
        inset 0 0 10px rgba(255, 255, 255, 0.8);
}

.checkbox-neon input:checked + .neon-glow::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
    font-size: 14px;
    font-weight: bold;
}

@keyframes neonPulse {
    0%, 100% {
        opacity: 0.5;
        transform: scale(0.9);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.1);
    }
}`,
    js: `// Neon checkbox functionality
document.querySelectorAll('.checkbox-neon input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add neon specific functionality
        console.log('Neon checkbox changed:', this.checked);
    });
});`
},

checkbox107: {
    name: "Liquid Morph Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-liquid">
        <input type="checkbox">
        <span class="liquid-drop">
            <span class="liquid-fill"></span>
        </span>
        <span class="label-text">Liquid Option 1</span>
    </label>
    <label class="checkbox-liquid">
        <input type="checkbox" checked>
        <span class="liquid-drop">
            <span class="liquid-fill"></span>
        </span>
        <span class="label-text">Liquid Option 2</span>
    </label>
</div>`,
    css: `.checkbox-liquid {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-liquid input {
    display: none;
}

.liquid-drop {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    border: 2px solid #0ea5e9;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s ease;
}

.liquid-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: linear-gradient(to top, #0ea5e9, #3b82f6);
    transition: height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-radius: 50%;
}

.checkbox-liquid input:checked + .liquid-drop {
    border-color: #3b82f6;
    animation: liquidRipple 0.6s ease;
}

.checkbox-liquid input:checked + .liquid-drop .liquid-fill {
    height: 100%;
}

.checkbox-liquid input:checked + .liquid-drop::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;
}

@keyframes liquidRipple {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}`,
    js: `// Liquid checkbox functionality
document.querySelectorAll('.checkbox-liquid input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add liquid specific functionality
        console.log('Liquid checkbox changed:', this.checked);
    });
});`
},

checkbox108: {
    name: "Gradient Spectrum Checkbox",
    category: "modern",
    html: `<div class="checkbox-container">
    <label class="checkbox-spectrum">
        <input type="checkbox">
        <span class="spectrum-ring">
            <span class="spectrum-fill"></span>
        </span>
        <span class="label-text">Spectrum Option 1</span>
    </label>
    <label class="checkbox-spectrum">
        <input type="checkbox" checked>
        <span class="spectrum-ring">
            <span class="spectrum-fill"></span>
        </span>
        <span class="label-text">Spectrum Option 2</span>
    </label>
</div>`,
    css: `.checkbox-spectrum {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-spectrum input {
    display: none;
}

.spectrum-ring {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    border-radius: 50%;
    background: conic-gradient(
        #ff6b6b,
        #ffa726,
        #ffee58,
        #4cd964,
        #5ac8fa,
        #007aff,
        #5856d6,
        #ff6b6b
    );
    animation: rotateSpectrum 3s linear infinite;
    padding: 2px;
}

.spectrum-fill {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 50%;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.checkbox-spectrum input:checked + .spectrum-ring .spectrum-fill {
    background: conic-gradient(
        #ff6b6b,
        #ffa726,
        #ffee58,
        #4cd964,
        #5ac8fa,
        #007aff,
        #5856d6,
        #ff6b6b
    );
    transform: scale(0.9);
}

.checkbox-spectrum input:checked + .spectrum-ring .spectrum-fill::after {
    content: '✓';
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@keyframes rotateSpectrum {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}`,
    js: `// Spectrum checkbox functionality
document.querySelectorAll('.checkbox-spectrum input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add spectrum specific functionality
        console.log('Spectrum checkbox changed:', this.checked);
    });
});`
},

checkbox109: {
    name: "Holographic Checkbox",
    category: "glassmorphism",
    html: `<div class="checkbox-container">
    <label class="checkbox-hologram">
        <input type="checkbox">
        <span class="hologram-grid">
            <span class="hologram-line"></span>
            <span class="hologram-scan"></span>
        </span>
        <span class="label-text">Hologram Option 1</span>
    </label>
    <label class="checkbox-hologram">
        <input type="checkbox" checked>
        <span class="hologram-grid">
            <span class="hologram-line"></span>
            <span class="hologram-scan"></span>
        </span>
        <span class="label-text">Hologram Option 2</span>
    </label>
</div>`,
    css: `.checkbox-hologram {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
    position: relative;
}

.checkbox-hologram input {
    display: none;
}

.hologram-grid {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    background: 
        linear-gradient(45deg, transparent 49%, rgba(124, 58, 237, 0.2) 50%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, rgba(124, 58, 237, 0.2) 50%, transparent 51%);
    background-size: 6px 6px;
    border: 1px solid rgba(124, 58, 237, 0.3);
    border-radius: 4px;
    overflow: hidden;
}

.hologram-line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #7c3aed, transparent);
    animation: hologramScan 2s linear infinite;
    opacity: 0.7;
}

.hologram-scan {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(124, 58, 237, 0.1),
        rgba(236, 72, 153, 0.1),
        rgba(59, 130, 246, 0.1)
    );
    transition: all 0.4s ease;
}

.checkbox-hologram input:checked + .hologram-grid {
    background: 
        linear-gradient(45deg, transparent 49%, rgba(124, 58, 237, 0.4) 50%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, rgba(124, 58, 237, 0.4) 50%, transparent 51%);
    box-shadow: 
        0 0 15px rgba(124, 58, 237, 0.4),
        inset 0 0 10px rgba(124, 58, 237, 0.2);
}

.checkbox-hologram input:checked + .hologram-grid .hologram-scan {
    background: linear-gradient(
        135deg,
        rgba(124, 58, 237, 0.3),
        rgba(236, 72, 153, 0.3),
        rgba(59, 130, 246, 0.3)
    );
}

.checkbox-hologram input:checked + .hologram-grid::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #7c3aed;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px rgba(124, 58, 237, 0.8);
    z-index: 2;
}

@keyframes hologramScan {
    0% {
        top: 0;
    }
    100% {
        top: 100%;
    }
}`,
    js: `// Hologram checkbox functionality
document.querySelectorAll('.checkbox-hologram input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add hologram specific functionality
        console.log('Hologram checkbox changed:', this.checked);
    });
});`
},
// Add these to your templateCodes object
checkbox110: {
    name: "Particle Wave Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-particle">
        <input type="checkbox">
        <span class="particle-field">
            <span class="particle-dot particle-1"></span>
            <span class="particle-dot particle-2"></span>
            <span class="particle-dot particle-3"></span>
            <span class="particle-dot particle-4"></span>
        </span>
        <span class="label-text">Option 1</span>
    </label>
    <label class="checkbox-particle">
        <input type="checkbox" checked>
        <span class="particle-field">
            <span class="particle-dot particle-1"></span>
            <span class="particle-dot particle-2"></span>
            <span class="particle-dot particle-3"></span>
            <span class="particle-dot particle-4"></span>
        </span>
        <span class="label-text">Option 2</span>
    </label>
</div>`,
    css: `.checkbox-particle {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    position: relative;
    margin-bottom: 10px;
}

.checkbox-particle input {
    display: none;
}

.particle-field {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    border: 2px solid #38bdf8;
    overflow: hidden;
}

.particle-dot {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #38bdf8;
    border-radius: 50%;
    animation: floatParticle 3s infinite ease-in-out;
}

.particle-1 { top: 20%; left: 20%; animation-delay: 0s; }
.particle-2 { top: 60%; left: 70%; animation-delay: 0.5s; }
.particle-3 { top: 30%; left: 80%; animation-delay: 1s; }
.particle-4 { top: 70%; left: 30%; animation-delay: 1.5s; }

@keyframes floatParticle {
    0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
    25% { transform: translate(3px, -3px) scale(1.2); opacity: 1; }
    50% { transform: translate(-2px, 2px) scale(0.8); opacity: 0.5; }
    75% { transform: translate(-3px, -2px) scale(1.1); opacity: 0.9; }
}

.checkbox-particle input:checked + .particle-field {
    background: linear-gradient(135deg, #38bdf8, #0ea5e9);
    border-color: #0284c7;
    animation: particleWave 0.6s ease;
}

.checkbox-particle input:checked + .particle-field .particle-dot {
    animation: attractParticle 0.8s forwards ease-out;
}

.checkbox-particle input:checked + .particle-field::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;
}

@keyframes particleWave {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes attractParticle {
    0% { transform: translate(var(--x, 0), var(--y, 0)) scale(1); opacity: 1; }
    100% { transform: translate(0, 0) scale(0); opacity: 0; }
}`,
    js: `// Particle wave functionality
document.querySelectorAll('.checkbox-particle input').forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
        const dots = this.parentElement.querySelectorAll('.particle-dot');
        dots.forEach(dot => {
            dot.style.setProperty('--x', (Math.random() * 10 - 5) + 'px');
            dot.style.setProperty('--y', (Math.random() * 10 - 5) + 'px');
        });
        console.log('Particle checkbox changed:', this.checked);
    });
});`
},

checkbox111: {
    name: "Cyberpunk Grid Checkbox",
    category: "dark",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-cyberpunk">
        <input type="checkbox">
        <span class="cyber-grid">
            <span class="grid-line grid-h"></span>
            <span class="grid-line grid-v"></span>
            <span class="cyber-glitch"></span>
        </span>
        <span class="label-text">Grid Option 1</span>
    </label>
    <label class="checkbox-cyberpunk">
        <input type="checkbox" checked>
        <span class="cyber-grid">
            <span class="grid-line grid-h"></span>
            <span class="grid-line grid-v"></span>
            <span class="cyber-glitch"></span>
        </span>
        <span class="label-text">Grid Option 2</span>
    </label>
</div>`,
    css: `.checkbox-container.dark-bg {
    background: #0a0a0a;
    padding: 20px;
    border-radius: 8px;
}

.checkbox-cyberpunk {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    margin-bottom: 15px;
    position: relative;
}

.checkbox-cyberpunk input {
    display: none;
}

.cyber-grid {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    background: 
        linear-gradient(90deg, #00ffea 1px, transparent 1px) 0 0 / 8px 100%,
        linear-gradient(0deg, #00ffea 1px, transparent 1px) 0 0 / 100% 8px;
    border: 1px solid #00ffea;
    border-radius: 4px;
    overflow: hidden;
}

.grid-line {
    position: absolute;
    background: #00ffea;
}

.grid-h {
    width: 100%;
    height: 1px;
    top: 50%;
    animation: scanHorizontal 2s linear infinite;
}

.grid-v {
    width: 1px;
    height: 100%;
    left: 50%;
    animation: scanVertical 2s linear infinite;
    animation-delay: 1s;
}

.cyber-glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 49%, rgba(0, 255, 234, 0.3) 50%, transparent 51%);
    opacity: 0;
    animation: glitchEffect 3s infinite;
}

@keyframes scanHorizontal {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes scanVertical {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

@keyframes glitchEffect {
    0%, 100% { opacity: 0; transform: translate(0, 0); }
    2% { opacity: 1; transform: translate(-1px, 1px); }
    4% { opacity: 0; transform: translate(1px, -1px); }
    96% { opacity: 0; }
    98% { opacity: 1; transform: translate(2px, -1px); }
}

.checkbox-cyberpunk input:checked + .cyber-grid {
    background: 
        linear-gradient(90deg, #ff00ff 1px, transparent 1px) 0 0 / 8px 100%,
        linear-gradient(0deg, #ff00ff 1px, transparent 1px) 0 0 / 100% 8px;
    border-color: #ff00ff;
    box-shadow: 
        0 0 15px #ff00ff,
        inset 0 0 10px rgba(255, 0, 255, 0.3);
}

.checkbox-cyberpunk input:checked + .cyber-grid .grid-line {
    background: #ff00ff;
}

.checkbox-cyberpunk input:checked + .cyber-grid::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ff00ff;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 0 5px #ff00ff;
    z-index: 2;
    animation: textGlitch 0.3s linear 3;
}

@keyframes textGlitch {
    0%, 100% { transform: translate(-50%, -50%); }
    25% { transform: translate(-51%, -49%); }
    50% { transform: translate(-49%, -51%); }
    75% { transform: translate(-52%, -48%); }
}`,
    js: `// Cyberpunk checkbox functionality
document.querySelectorAll('.checkbox-cyberpunk input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // Add glitch effect on change
        const grid = this.parentElement.querySelector('.cyber-grid');
        grid.style.animation = 'none';
        setTimeout(() => {
            grid.style.animation = '';
        }, 50);
        console.log('Cyberpunk checkbox changed:', this.checked);
    });
});`
},

checkbox112: {
    name: "Crystal Prism Checkbox",
    category: "glassmorphism",
    html: `<div class="checkbox-container">
    <label class="checkbox-crystal">
        <input type="checkbox">
        <span class="crystal-prism">
            <span class="crystal-facet f1"></span>
            <span class="crystal-facet f2"></span>
            <span class="crystal-facet f3"></span>
            <span class="crystal-facet f4"></span>
            <span class="crystal-sparkle"></span>
        </span>
        <span class="label-text">Crystal Option 1</span>
    </label>
    <label class="checkbox-crystal">
        <input type="checkbox" checked>
        <span class="crystal-prism">
            <span class="crystal-facet f1"></span>
            <span class="crystal-facet f2"></span>
            <span class="crystal-facet f3"></span>
            <span class="crystal-facet f4"></span>
            <span class="crystal-sparkle"></span>
        </span>
        <span class="label-text">Crystal Option 2</span>
    </label>
</div>`,
    css: `.checkbox-crystal {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-crystal input {
    display: none;
}

.crystal-prism {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    transform: rotate(45deg);
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.9), 
        rgba(255, 255, 255, 0.3));
    backdrop-filter: blur(5px);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    border: 1px solid rgba(255, 255, 255, 0.5);
}

.crystal-facet {
    position: absolute;
    background: linear-gradient(45deg, 
        transparent, 
        rgba(255, 255, 255, 0.8), 
        transparent);
    animation: crystalRefract 4s infinite linear;
}

.f1 { top: 0; left: 0; width: 100%; height: 2px; animation-delay: 0s; }
.f2 { top: 0; right: 0; width: 2px; height: 100%; animation-delay: 1s; }
.f3 { bottom: 0; left: 0; width: 100%; height: 2px; animation-delay: 2s; }
.f4 { top: 0; left: 0; width: 2px; height: 100%; animation-delay: 3s; }

.crystal-sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    top: 30%;
    left: 30%;
    animation: crystalSparkle 2s infinite;
    opacity: 0;
}

@keyframes crystalRefract {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
}

@keyframes crystalSparkle {
    0%, 100% { opacity: 0; transform: scale(0.5); }
    50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 10px white; }
}

.checkbox-crystal input:checked + .crystal-prism {
    background: linear-gradient(135deg, 
        rgba(124, 58, 237, 0.9), 
        rgba(236, 72, 153, 0.9));
    animation: crystalRotate 1s ease;
}

.checkbox-crystal input:checked + .crystal-prism .crystal-sparkle {
    animation: crystalSparkle 0.5s ease 3;
}

.checkbox-crystal input:checked + .crystal-prism::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    color: white;
    font-size: 12px;
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

@keyframes crystalRotate {
    0% { transform: rotate(45deg) scale(1); }
    50% { transform: rotate(90deg) scale(1.1); }
    100% { transform: rotate(45deg) scale(1); }
}`,
    js: `// Crystal prism functionality
document.querySelectorAll('.checkbox-crystal input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const sparkle = this.parentElement.querySelector('.crystal-sparkle');
        sparkle.style.top = Math.random() * 60 + 20 + '%';
        sparkle.style.left = Math.random() * 60 + 20 + '%';
        console.log('Crystal checkbox changed:', this.checked);
    });
});`
},

checkbox113: {
    name: "Magnetic Field Checkbox",
    category: "animated",
    html: `<div class="checkbox-container">
    <label class="checkbox-magnetic">
        <input type="checkbox">
        <span class="magnetic-field">
            <span class="magnetic-core"></span>
            <span class="field-line line-1"></span>
            <span class="field-line line-2"></span>
            <span class="field-line line-3"></span>
        </span>
        <span class="label-text">Magnetic Option 1</span>
    </label>
    <label class="checkbox-magnetic">
        <input type="checkbox" checked>
        <span class="magnetic-field">
            <span class="magnetic-core"></span>
            <span class="field-line line-1"></span>
            <span class="field-line line-2"></span>
            <span class="field-line line-3"></span>
        </span>
        <span class="label-text">Magnetic Option 2</span>
    </label>
</div>`,
    css: `.checkbox-magnetic {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #1e293b;
    margin-bottom: 15px;
}

.checkbox-magnetic input {
    display: none;
}

.magnetic-field {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #f8fafc, #e2e8f0);
    border: 2px solid #64748b;
}

.magnetic-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #64748b;
    border-radius: 50%;
    transition: all 0.4s ease;
}

.field-line {
    position: absolute;
    background: #64748b;
    transform-origin: center;
    transition: all 0.4s ease;
}

.line-1 { width: 100%; height: 2px; top: 50%; left: 0; transform: translateY(-50%); }
.line-2 { width: 100%; height: 2px; top: 50%; left: 0; transform: translateY(-50%) rotate(45deg); }
.line-3 { width: 100%; height: 2px; top: 50%; left: 0; transform: translateY(-50%) rotate(90deg); }

@keyframes magneticPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
}

.checkbox-magnetic input:checked + .magnetic-field {
    background: radial-gradient(circle at 30% 30%, #fef3c7, #fbbf24);
    border-color: #f59e0b;
    animation: fieldPulse 2s infinite;
}

.checkbox-magnetic input:checked + .magnetic-field .magnetic-core {
    background: #f59e0b;
    animation: magneticPulse 1.5s infinite;
}

.checkbox-magnetic input:checked + .magnetic-field .field-line {
    background: #f59e0b;
    animation: fieldRotate 4s infinite linear;
}

.checkbox-magnetic input:checked + .magnetic-field::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #92400e;
    font-size: 12px;
    font-weight: bold;
    z-index: 2;
}

@keyframes fieldPulse {
    0%, 100% { box-shadow: 0 0 0 rgba(245, 158, 11, 0.4); }
    50% { box-shadow: 0 0 10px rgba(245, 158, 11, 0.6); }
}

@keyframes fieldRotate {
    0% { transform: translateY(-50%) rotate(0deg); }
    100% { transform: translateY(-50%) rotate(360deg); }
}`,
    js: `// Magnetic field functionality
document.querySelectorAll('.checkbox-magnetic input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const lines = this.parentElement.querySelectorAll('.field-line');
        lines.forEach(line => {
            line.style.animation = 'none';
            setTimeout(() => {
                line.style.animation = '';
            }, 10);
        });
        console.log('Magnetic checkbox changed:', this.checked);
    });
});`
},

checkbox114: {
    name: "Quantum Dot Checkbox",
    category: "modern",
    html: `<div class="checkbox-container dark-bg">
    <label class="checkbox-quantum">
        <input type="checkbox">
        <span class="quantum-orbital">
            <span class="quantum-dot electron-1"></span>
            <span class="quantum-dot electron-2"></span>
            <span class="quantum-dot electron-3"></span>
            <span class="quantum-nucleus"></span>
        </span>
        <span class="label-text">Quantum Option 1</span>
    </label>
    <label class="checkbox-quantum">
        <input type="checkbox" checked>
        <span class="quantum-orbital">
            <span class="quantum-dot electron-1"></span>
            <span class="quantum-dot electron-2"></span>
            <span class="quantum-dot electron-3"></span>
            <span class="quantum-nucleus"></span>
        </span>
        <span class="label-text">Quantum Option 2</span>
    </label>
</div>`,
    css: `.checkbox-container.dark-bg {
    background: #0f172a;
    padding: 20px;
    border-radius: 8px;
}

.checkbox-quantum {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    color: #fff;
    margin-bottom: 15px;
}

.checkbox-quantum input {
    display: none;
}

.quantum-orbital {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: relative;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #1e40af, #1e1b4b);
    border: 1px solid #3b82f6;
}

.quantum-nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: #60a5fa;
    border-radius: 50%;
    box-shadow: 0 0 8px #60a5fa;
    transition: all 0.4s ease;
}

.quantum-dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #93c5fd;
    border-radius: 50%;
    box-shadow: 0 0 6px #93c5fd;
    animation: quantumOrbit 3s infinite linear;
}

.electron-1 { top: 0; left: 50%; animation-delay: 0s; }
.electron-2 { top: 50%; right: 0; animation-delay: 1s; }
.electron-3 { bottom: 0; left: 50%; animation-delay: 2s; }

@keyframes quantumOrbit {
    0% { transform: rotate(0deg) translateX(8px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(8px) rotate(-360deg); }
}

@keyframes quantumJump {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.7; transform: scale(1.1); }
}

.checkbox-quantum input:checked + .quantum-orbital {
    background: radial-gradient(circle at 30% 30%, #3b82f6, #1d4ed8);
    border-color: #60a5fa;
    box-shadow: 
        0 0 15px #3b82f6,
        inset 0 0 10px rgba(96, 165, 250, 0.3);
}

.checkbox-quantum input:checked + .quantum-orbital .quantum-nucleus {
    background: #bfdbfe;
    box-shadow: 0 0 12px #bfdbfe;
    animation: quantumPulse 2s infinite;
}

.checkbox-quantum input:checked + .quantum-orbital .quantum-dot {
    animation: quantumOrbit 1.5s infinite linear, quantumJump 0.5s infinite alternate;
}

.checkbox-quantum input:checked + .quantum-orbital::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #bfdbfe;
    font-size: 10px;
    font-weight: bold;
    text-shadow: 0 0 5px #3b82f6;
    z-index: 2;
}

@keyframes quantumPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.3); }
}`,
    js: `// Quantum dot functionality
document.querySelectorAll('.checkbox-quantum input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const dots = this.parentElement.querySelectorAll('.quantum-dot');
        dots.forEach(dot => {
            dot.style.animation = 'none';
            setTimeout(() => {
                dot.style.animation = '';
            }, 10);
        });
        console.log('Quantum checkbox changed:', this.checked);
    });
});`
},



};

// Main functionality for checkbox templates
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
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
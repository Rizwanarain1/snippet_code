// Template code data for table templates
const templateCodes = {
    
    // ====================================================================
    // TEMPLATE 1: MODERN BUSINESS TABLE (Already exists)
    // ====================================================================
    table1: {
        html: `<div class="table-container">
    <table class="modern-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-info">
                        <div class="avatar">JD</div>
                        <div class="user-details">
                            <div class="name">John Doe</div>
                            <div class="email">john@example.com</div>
                        </div>
                    </div>
                </td>
                <td>Frontend Developer</td>
                <td>Engineering</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="actions">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-info">
                        <div class="avatar">JS</div>
                        <div class="user-details">
                            <div class="name">Jane Smith</div>
                            <div class="email">jane@example.com</div>
                        </div>
                    </div>
                </td>
                <td>UX Designer</td>
                <td>Design</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="actions">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideInUp 0.6s ease-out;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modern-table {
    width: 100%;
    border-collapse: collapse;
}

.modern-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 1px solid #e5e7eb;
}

.modern-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

.modern-table tr:hover {
    background: #f9fafb;
    transform: translateX(5px);
}

.modern-table tr:hover td {
    background: #f9fafb;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    transition: transform 0.3s ease;
}

.user-info:hover .avatar {
    transform: scale(1.1);
}

.user-details .name {
    font-weight: 600;
    color: #1f2937;
}

.user-details .email {
    font-size: 0.875rem;
    color: #6b7280;
}

.status {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.status.active {
    background: #d1fae5;
    color: #065f46;
}

.status.inactive {
    background: #fee2e2;
    color: #991b1b;
}

.status.pending {
    background: #fef3c7;
    color: #92400e;
}

.actions {
    display: flex;
    gap: 0.5rem;
}

.btn-edit {
    background: #e0e7ff;
    color: #3730a3;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-edit:hover {
    background: #c7d2fe;
    transform: translateY(-2px);
}

.btn-delete {
    background: #fef2f2;
    color: #dc2626;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-delete:hover {
    background: #fecaca;
    transform: translateY(-2px);
}`,
        js: `// Table row hover animations
document.querySelectorAll('.modern-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});`
    },

    // ====================================================================
    // TEMPLATE 2: FINANCIAL DATA TABLE
    // ====================================================================
    table2: {
        html: `<div class="financial-table-container">
    <table class="financial-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Q1 Sales</th>
                <th>Q2 Sales</th>
                <th>Growth</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Laptop Pro</td>
                <td>$125,430</td>
                <td>$148,920</td>
                <td><span class="growth positive">+18.7%</span></td>
                <td>
                    <div class="trend-chart">
                        <div class="bar" style="height: 60%; background: #10b981;"></div>
                        <div class="bar" style="height: 80%; background: #10b981;"></div>
                        <div class="bar" style="height: 45%; background: #ef4444;"></div>
                        <div class="bar" style="height: 90%; background: #10b981;"></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Smartphone X</td>
                <td>$89,560</td>
                <td>$95,320</td>
                <td><span class="growth positive">+6.4%</span></td>
                <td>
                    <div class="trend-chart">
                        <div class="bar" style="height: 70%; background: #10b981;"></div>
                        <div class="bar" style="height: 65%; background: #f59e0b;"></div>
                        <div class="bar" style="height: 75%; background: #10b981;"></div>
                        <div class="bar" style="height: 80%; background: #10b981;"></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Tablet Mini</td>
                <td>$45,780</td>
                <td>$42,150</td>
                <td><span class="growth negative">-7.9%</span></td>
                <td>
                    <div class="trend-chart">
                        <div class="bar" style="height: 80%; background: #10b981;"></div>
                        <div class="bar" style="height: 60%; background: #ef4444;"></div>
                        <div class="bar" style="height: 55%; background: #ef4444;"></div>
                        <div class="bar" style="height: 50%; background: #ef4444;"></div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.financial-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: fadeInScale 0.6s ease-out;
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.financial-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.financial-table th {
    background: linear-gradient(135deg, #1e293b, #374151);
    color: white;
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 2px solid #4b5563;
}

.financial-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #e5e7eb;
    transition: all 0.3s ease;
    font-weight: 500;
}

.financial-table tr:hover td {
    background: #f8fafc;
    transform: translateX(8px);
}

.financial-table tr {
    transition: all 0.3s ease;
}

.growth {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.growth.positive {
    background: #d1fae5;
    color: #065f46;
    animation: pulseGreen 2s infinite;
}

.growth.negative {
    background: #fee2e2;
    color: #dc2626;
}

@keyframes pulseGreen {
    0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
    50% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
}

.trend-chart {
    display: flex;
    align-items: end;
    gap: 4px;
    height: 30px;
    width: 80px;
}

.bar {
    width: 12px;
    border-radius: 2px 2px 0 0;
    transition: all 0.3s ease;
    animation: barGrow 1s ease-out;
}

@keyframes barGrow {
    from { height: 0%; opacity: 0; }
    to { height: var(--target-height); opacity: 1; }
}

.financial-table tr:hover .bar {
    transform: scaleY(1.1);
}`,
        js: `// Animate bars on load
document.querySelectorAll('.bar').forEach(bar => {
    const height = bar.style.height;
    bar.style.setProperty('--target-height', height);
    bar.style.height = '0%';
    
    setTimeout(() => {
        bar.style.height = height;
    }, 300);
});`
    },

    // ====================================================================
    // TEMPLATE 3: PROJECT MANAGEMENT TABLE
    // ====================================================================
    table3: {
        html: `<div class="project-table-container">
    <table class="project-table">
        <thead>
            <tr>
                <th>Project</th>
                <th>Team</th>
                <th>Deadline</th>
                <th>Progress</th>
                <th>Priority</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">🚀</div>
                        <div class="project-details">
                            <div class="project-name">Website Redesign</div>
                            <div class="project-desc">Company portfolio update</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-avatars">
                        <div class="team-avatar" style="background: #7c3aed;">JD</div>
                        <div class="team-avatar" style="background: #ec4899;">AS</div>
                        <div class="team-avatar" style="background: #10b981;">+2</div>
                    </div>
                </td>
                <td>Dec 15, 2024</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 75%; background: #10b981;"></div>
                        </div>
                        <span class="progress-text">75%</span>
                    </div>
                </td>
                <td><span class="priority high">High</span></td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">📱</div>
                        <div class="project-details">
                            <div class="project-name">Mobile App</div>
                            <div class="project-desc">Customer engagement platform</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-avatars">
                        <div class="team-avatar" style="background: #3b82f6;">MS</div>
                        <div class="team-avatar" style="background: #f59e0b;">RJ</div>
                    </div>
                </td>
                <td>Jan 30, 2024</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 45%; background: #f59e0b;"></div>
                        </div>
                        <span class="progress-text">45%</span>
                    </div>
                </td>
                <td><span class="priority medium">Medium</span></td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">🛒</div>
                        <div class="project-details">
                            <div class="project-name">E-commerce</div>
                            <div class="project-desc">Online store development</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-avatars">
                        <div class="team-avatar" style="background: #ef4444;">TK</div>
                        <div class="team-avatar" style="background: #8b5cf6;">LM</div>
                        <div class="team-avatar" style="background: #06b6d4;">+3</div>
                    </div>
                </td>
                <td>Nov 20, 2024</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 90%; background: #ef4444;"></div>
                        </div>
                        <span class="progress-text">90%</span>
                    </div>
                </td>
                <td><span class="priority urgent">Urgent</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.project-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideInRight 0.6s ease-out;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.project-table {
    width: 100%;
    border-collapse: collapse;
}

.project-table th {
    background: #f8fafc;
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.9rem;
}

.project-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

.project-table tr:hover td {
    background: #f0f9ff;
    transform: translateX(5px);
}

.project-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.project-table tr:hover .project-icon {
    transform: scale(1.2) rotate(10deg);
}

.project-details .project-name {
    font-weight: 600;
    color: #1f2937;
}

.project-details .project-desc {
    font-size: 0.8rem;
    color: #6b7280;
}

.team-avatars {
    display: flex;
    gap: 0.3rem;
}

.team-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.project-table tr:hover .team-avatar {
    transform: translateY(-3px) scale(1.1);
}

.progress-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.progress-bar {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1.5s ease-in-out;
    animation: progressAnimation 1.5s ease-out;
}

@keyframes progressAnimation {
    from { width: 0%; }
    to { width: var(--target-width); }
}

.progress-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #374151;
    min-width: 35px;
}

.priority {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.priority.high {
    background: #fef3c7;
    color: #92400e;
}

.priority.medium {
    background: #e0e7ff;
    color: #3730a3;
}

.priority.urgent {
    background: #fee2e2;
    color: #dc2626;
    animation: pulseRed 2s infinite;
}

@keyframes pulseRed {
    0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
    50% { box-shadow: 0 0 0 6px rgba(239, 68, 68, 0); }
}`,
        js: `// Animate progress bars on load
document.querySelectorAll('.progress-fill').forEach(progress => {
    const width = progress.style.width;
    progress.style.setProperty('--target-width', width);
    progress.style.width = '0%';
    
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});`
    },

    // ====================================================================
    // TEMPLATE 4: SALES PERFORMANCE TABLE
    // ====================================================================
    table4: {
        html: `<div class="sales-table-container">
    <table class="sales-table">
        <thead>
            <tr>
                <th>Sales Rep</th>
                <th>Region</th>
                <th>Deals</th>
                <th>Revenue</th>
                <th>Target</th>
                <th>Performance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="sales-rep">
                        <div class="rep-avatar" style="background: #7c3aed;">SR</div>
                        <div class="rep-info">
                            <div class="rep-name">Sarah Johnson</div>
                            <div class="rep-title">Senior Rep</div>
                        </div>
                    </div>
                </td>
                <td>North America</td>
                <td>24</td>
                <td>$284,500</td>
                <td>$250,000</td>
                <td>
                    <div class="performance-indicator">
                        <div class="performance-bar">
                            <div class="performance-fill exceeded"></div>
                        </div>
                        <span class="performance-text">+13.8%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="sales-rep">
                        <div class="rep-avatar" style="background: #10b981;">MR</div>
                        <div class="rep-info">
                            <div class="rep-name">Mike Rodriguez</div>
                            <div class="rep-title">Account Exec</div>
                        </div>
                    </div>
                </td>
                <td>Europe</td>
                <td>18</td>
                <td>$198,200</td>
                <td>$200,000</td>
                <td>
                    <div class="performance-indicator">
                        <div class="performance-bar">
                            <div class="performance-fill on-track"></div>
                        </div>
                        <span class="performance-text">-0.9%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="sales-rep">
                        <div class="rep-avatar" style="background: #f59e0b;">ED</div>
                        <div class="rep-info">
                            <div class="rep-name">Emily Davis</div>
                            <div class="rep-title">Sales Manager</div>
                        </div>
                    </div>
                </td>
                <td>Asia Pacific</td>
                <td>31</td>
                <td>$412,800</td>
                <td>$350,000</td>
                <td>
                    <div class="performance-indicator">
                        <div class="performance-bar">
                            <div class="performance-fill exceeded"></div>
                        </div>
                        <span class="performance-text">+17.9%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.sales-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: bounceIn 0.8s ease-out;
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.sales-table {
    width: 100%;
    border-collapse: collapse;
}

.sales-table th {
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 2px solid #047857;
}

.sales-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
    font-weight: 500;
}

.sales-table tr:hover td {
    background: #f0fdf4;
    transform: scale(1.02);
}

.sales-rep {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.rep-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
}

.sales-table tr:hover .rep-avatar {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.rep-info .rep-name {
    font-weight: 600;
    color: #1f2937;
}

.rep-info .rep-title {
    font-size: 0.8rem;
    color: #6b7280;
}

.performance-indicator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.performance-bar {
    flex: 1;
    height: 8px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.performance-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1.5s ease-in-out;
    animation: performanceAnimation 1.5s ease-out;
    position: relative;
}

.performance-fill.exceeded {
    background: linear-gradient(90deg, #10b981, #34d399);
    width: 113%;
}

.performance-fill.on-track {
    background: linear-gradient(90deg, #f59e0b, #fbbf24);
    width: 99%;
}

@keyframes performanceAnimation {
    from { width: 0%; }
    to { width: var(--target-width); }
}

.performance-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.4), 
        transparent
    );
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.performance-text {
    font-size: 0.8rem;
    font-weight: 600;
    min-width: 50px;
    text-align: right;
}

.performance-fill.exceeded + .performance-text {
    color: #065f46;
}

.performance-fill.on-track + .performance-text {
    color: #92400e;
}

.sales-table tr:nth-child(1) .performance-fill {
    animation-delay: 0.1s;
}

.sales-table tr:nth-child(2) .performance-fill {
    animation-delay: 0.3s;
}

.sales-table tr:nth-child(3) .performance-fill {
    animation-delay: 0.5s;
}`,
        js: `// Animate performance bars with delays
document.querySelectorAll('.performance-fill').forEach((fill, index) => {
    const width = fill.style.width || fill.classList.contains('exceeded') ? '113%' : '99%';
    fill.style.setProperty('--target-width', width);
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 300 + (index * 200));
});`
    },

    // ====================================================================
    // TEMPLATE 5: EMPLOYEE DIRECTORY TABLE
    // ====================================================================
    table5: {
        html: `<div class="employee-table-container">
    <table class="employee-table">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Role</th>
                <th>Department</th>
                <th>Join Date</th>
                <th>Salary</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="John Doe">
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">John Doe</div>
                            <div class="employee-id">EMP-001</div>
                        </div>
                    </div>
                </td>
                <td>Senior Developer</td>
                <td>Engineering</td>
                <td>Jan 15, 2020</td>
                <td>$95,000</td>
                <td>
                    <div class="rating">
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star">⭐</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Jane Smith">
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Jane Smith</div>
                            <div class="employee-id">EMP-002</div>
                        </div>
                    </div>
                </td>
                <td>UX Designer</td>
                <td>Design</td>
                <td>Mar 22, 2021</td>
                <td>$85,000</td>
                <td>
                    <div class="rating">
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="Robert Kim">
                        </div>
                        <div class="employee-details">
                            <div class="employee-name">Robert Kim</div>
                            <div class="employee-id">EMP-003</div>
                        </div>
                    </div>
                </td>
                <td>Product Manager</td>
                <td>Product</td>
                <td>Aug 10, 2019</td>
                <td>$110,000</td>
                <td>
                    <div class="rating">
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star filled">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.employee-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: flipInX 0.8s ease-out;
}

@keyframes flipInX {
    from {
        opacity: 0;
        transform: perspective(400px) rotateX(90deg);
    }
    to {
        opacity: 1;
        transform: perspective(400px) rotateX(0);
    }
}

.employee-table {
    width: 100%;
    border-collapse: collapse;
}

.employee-table th {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 2px solid #4f46e5;
}

.employee-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #f3f4f6;
    transition: all 0.3s ease;
}

.employee-table tr {
    transition: all 0.3s ease;
}

.employee-table tr:hover {
    background: #faf5ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
}

.employee-table tr:hover td {
    background: transparent;
}

.employee-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.employee-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #e5e7eb;
    transition: all 0.3s ease;
}

.employee-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.employee-table tr:hover .employee-avatar {
    border-color: #8b5cf6;
    transform: scale(1.1);
}

.employee-details .employee-name {
    font-weight: 600;
    color: #1f2937;
}

.employee-details .employee-id {
    font-size: 0.75rem;
    color: #6b7280;
    font-family: 'Courier New', monospace;
}

.rating {
    display: flex;
    gap: 2px;
}

.star {
    font-size: 1rem;
    opacity: 0.3;
    transition: all 0.3s ease;
    animation: starTwinkle 2s infinite;
}

.star.filled {
    opacity: 1;
    color: #f59e0b;
    animation: starPulse 1.5s infinite;
}

@keyframes starPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

@keyframes starTwinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
}

.employee-table tr:hover .star.filled {
    animation: starBounce 0.6s ease;
}

@keyframes starBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-8px); }
    60% { transform: translateY(-4px); }
}

/* Staggered animation for stars */
.rating .star:nth-child(1) { animation-delay: 0.1s; }
.rating .star:nth-child(2) { animation-delay: 0.2s; }
.rating .star:nth-child(3) { animation-delay: 0.3s; }
.rating .star:nth-child(4) { animation-delay: 0.4s; }
.rating .star:nth-child(5) { animation-delay: 0.5s; }`,
        js: `// Add hover effects for employee rows
document.querySelectorAll('.employee-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.15)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Animate stars on load
document.querySelectorAll('.star.filled').forEach((star, index) => {
    star.style.animationDelay = `
},
    // ====================================================================
    // TEMPLATE 6: BUSINESS METRICS DASHBOARD TABLE
    // ====================================================================
    table6: {
        html: `<div class="metrics-table-container">
    <table class="metrics-table">
        <thead>
            <tr>
                <th>KPI</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Trend</th>
                <th>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="kpi-info">
                        <div class="kpi-icon">📈</div>
                        <div class="kpi-details">
                            <div class="kpi-name">Revenue Growth</div>
                            <div class="kpi-desc">Monthly recurring</div>
                        </div>
                    </div>
                </td>
                <td>$125K</td>
                <td>$98K</td>
                <td><span class="change positive">+27.5%</span></td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline-bar" style="height: 40%"></div>
                        <div class="sparkline-bar" style="height: 60%"></div>
                        <div class="sparkline-bar" style="height: 55%"></div>
                        <div class="sparkline-bar" style="height: 80%"></div>
                        <div class="sparkline-bar" style="height: 95%"></div>
                    </div>
                </td>
                <td>
                    <div class="target-indicator">
                        <div class="target-progress" style="width: 125%"></div>
                        <span class="target-text">125%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-info">
                        <div class="kpi-icon">👥</div>
                        <div class="kpi-details">
                            <div class="kpi-name">Customer Acquisition</div>
                            <div class="kpi-desc">New customers</div>
                        </div>
                    </div>
                </td>
                <td>1,248</td>
                <td>956</td>
                <td><span class="change positive">+30.5%</span></td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline-bar" style="height: 35%"></div>
                        <div class="sparkline-bar" style="height: 45%"></div>
                        <div class="sparkline-bar" style="height: 65%"></div>
                        <div class="sparkline-bar" style="height: 75%"></div>
                        <div class="sparkline-bar" style="height: 100%"></div>
                    </div>
                </td>
                <td>
                    <div class="target-indicator">
                        <div class="target-progress" style="width: 104%"></div>
                        <span class="target-text">104%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-info">
                        <div class="kpi-icon">💬</div>
                        <div class="kpi-details">
                            <div class="kpi-name">Customer Satisfaction</div>
                            <div class="kpi-desc">CSAT Score</div>
                        </div>
                    </div>
                </td>
                <td>4.8/5</td>
                <td>4.6/5</td>
                <td><span class="change positive">+4.3%</span></td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline-bar" style="height: 80%"></div>
                        <div class="sparkline-bar" style="height: 85%"></div>
                        <div class="sparkline-bar" style="height: 82%"></div>
                        <div class="sparkline-bar" style="height: 88%"></div>
                        <div class="sparkline-bar" style="height: 96%"></div>
                    </div>
                </td>
                <td>
                    <div class="target-indicator">
                        <div class="target-progress" style="width: 96%"></div>
                        <span class="target-text">96%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.metrics-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: slideInUp 0.6s ease-out;
}

.metrics-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
}

.metrics-table th {
    background: linear-gradient(135deg, #1a56db, #1e40af);
    color: white;
    padding: 1.3rem 1.2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 3px solid #1e3a8a;
    position: relative;
    overflow: hidden;
}

.metrics-table th::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.metrics-table td {
    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.metrics-table tr {
    transition: all 0.3s ease;
}

.metrics-table tr:hover {
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    transform: translateX(8px);
}

.metrics-table tr:hover td {
    background: transparent;
}

.metrics-table tr:hover td::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(135deg, #1a56db, #06b6d4);
    animation: slideInLeft 0.3s ease-out;
}

@keyframes slideInLeft {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.kpi-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.kpi-icon {
    font-size: 1.4rem;
    transition: all 0.3s ease;
}

.metrics-table tr:hover .kpi-icon {
    transform: scale(1.2) rotate(5deg);
}

.kpi-details .kpi-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.95rem;
}

.kpi-details .kpi-desc {
    font-size: 0.8rem;
    color: #64748b;
}

.change {
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 700;
    transition: all 0.3s ease;
    display: inline-block;
    animation: bounceIn 0.6s ease-out;
}

.change.positive {
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.trend-sparkline {
    display: flex;
    align-items: end;
    gap: 3px;
    height: 35px;
    width: 80px;
}

.sparkline-bar {
    width: 8px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    transition: all 0.4s ease;
    animation: sparklineGrow 1s ease-out;
}

@keyframes sparklineGrow {
    from { 
        height: 0%; 
        opacity: 0; 
        transform: translateY(10px);
    }
    to { 
        height: var(--target-height); 
        opacity: 1;
        transform: translateY(0);
    }
}

.metrics-table tr:hover .sparkline-bar {
    transform: scaleY(1.2);
    background: linear-gradient(135deg, #1d4ed8, #0891b2);
}

.target-indicator {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: #f8fafc;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
}

.target-progress {
    height: 6px;
    background: linear-gradient(135deg, #10b981, #34d399);
    border-radius: 10px;
    transition: width 1.5s ease-in-out;
    animation: targetProgress 1.5s ease-out;
    position: relative;
}

@keyframes targetProgress {
    from { width: 0%; }
    to { width: var(--target-width); }
}

.target-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: progressShimmer 2s infinite;
}

@keyframes progressShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.target-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: #1e293b;
    min-width: 40px;
    text-align: center;
}

/* Staggered animations */
.metrics-table tr:nth-child(1) .sparkline-bar { animation-delay: 0.1s; }
.metrics-table tr:nth-child(2) .sparkline-bar { animation-delay: 0.2s; }
.metrics-table tr:nth-child(3) .sparkline-bar { animation-delay: 0.3s; }

.metrics-table tr:nth-child(1) .target-progress { animation-delay: 0.4s; }
.metrics-table tr:nth-child(2) .target-progress { animation-delay: 0.5s; }
.metrics-table tr:nth-child(3) .target-progress { animation-delay: 0.6s; }`,
        js: `// Animate sparkline bars
document.querySelectorAll('.sparkline-bar').forEach(bar => {
    const height = bar.style.height;
    bar.style.setProperty('--target-height', height);
    bar.style.height = '0%';
    
    setTimeout(() => {
        bar.style.height = height;
    }, 300);
});

// Animate target progress
document.querySelectorAll('.target-progress').forEach(progress => {
    const width = progress.style.width;
    progress.style.setProperty('--target-width', width);
    progress.style.width = '0%';
    
    setTimeout(() => {
        progress.style.width = width;
    }, 500);
});`
    },

    // ====================================================================
    // TEMPLATE 7: REAL-TIME ANALYTICS TABLE
    // ====================================================================
    table7: {
        html: `<div class="analytics-table-container">
    <div class="table-header">
        <h3>Real-Time Analytics</h3>
        <div class="live-indicator">
            <span class="live-dot"></span>
            LIVE
        </div>
    </div>
    <table class="analytics-table">
        <thead>
            <tr>
                <th>Page</th>
                <th>Visitors</th>
                <th>Bounce Rate</th>
                <th>Avg. Time</th>
                <th>Conversions</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="page-info">
                        <div class="page-icon">🏠</div>
                        <div class="page-details">
                            <div class="page-name">Homepage</div>
                            <div class="page-url">example.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="metric-with-change">
                        <span class="metric-value">12,458</span>
                        <span class="metric-change positive">+12%</span>
                    </div>
                </td>
                <td>32%</td>
                <td>3m 24s</td>
                <td>8.2%</td>
                <td>
                    <div class="analytics-trend up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+15%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="page-info">
                        <div class="page-icon">🛒</div>
                        <div class="page-details">
                            <div class="page-name">Product Page</div>
                            <div class="page-url">/products</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="metric-with-change">
                        <span class="metric-value">8,742</span>
                        <span class="metric-change positive">+8%</span>
                    </div>
                </td>
                <td>28%</td>
                <td>4m 12s</td>
                <td>12.5%</td>
                <td>
                    <div class="analytics-trend up">
                        <span class="trend-arrow">↗</span>
                        <span class="trend-value">+22%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="page-info">
                        <div class="page-icon">📱</div>
                        <div class="page-details">
                            <div class="page-name">Mobile App</div>
                            <div class="page-url">/mobile</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="metric-with-change">
                        <span class="metric-value">6,321</span>
                        <span class="metric-change negative">-3%</span>
                    </div>
                </td>
                <td>45%</td>
                <td>2m 18s</td>
                <td>5.8%</td>
                <td>
                    <div class="analytics-trend down">
                        <span class="trend-arrow">↘</span>
                        <span class="trend-value">-8%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.analytics-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    animation: fadeIn 0.8s ease-out;
    border: 1px solid #e2e8f0;
}

@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: translateY(20px) scale(0.95);
    }
    to { 
        opacity: 1; 
        transform: translateY(0) scale(1);
    }
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-bottom: 1px solid #334155;
}

.table-header h3 {
    color: white;
    margin: 0;
    font-weight: 600;
    font-size: 1.3rem;
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: pulseLive 2s infinite;
}

.live-dot {
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    animation: blink 1.5s infinite;
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
}

@keyframes pulseLive {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
    }
    50% { 
        box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
    }
}

.analytics-table {
    width: 100%;
    border-collapse: collapse;
}

.analytics-table th {
    background: #f8fafc;
    padding: 1.2rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #475569;
    font-size: 0.85rem;
    border-bottom: 2px solid #e2e8f0;
    position: relative;
}

.analytics-table th::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #3b82f6, #06b6d4);
    animation: headerSlide 3s infinite;
}

@keyframes headerSlide {
    0% { width: 0; left: 0; }
    50% { width: 100%; left: 0; }
    100% { width: 0; left: 100%; }
}

.analytics-table td {
    padding: 1.2rem 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    transition: all 0.3s ease;
    position: relative;
}

.analytics-table tr {
    transition: all 0.3s ease;
}

.analytics-table tr:hover {
    background: #f8fafc;
    transform: translateX(5px);
}

.analytics-table tr:hover td {
    background: transparent;
}

.analytics-table tr:hover td::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
}

.page-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.page-icon {
    font-size: 1.3rem;
    transition: all 0.3s ease;
}

.analytics-table tr:hover .page-icon {
    transform: scale(1.2) rotate(10deg);
}

.page-details .page-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.9rem;
}

.page-details .page-url {
    font-size: 0.75rem;
    color: #64748b;
    font-family: 'Courier New', monospace;
}

.metric-with-change {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.metric-value {
    font-weight: 700;
    color: #1e293b;
    font-size: 1rem;
}

.metric-change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.4rem;
    border-radius: 8px;
    width: fit-content;
}

.metric-change.positive {
    background: #d1fae5;
    color: #065f46;
}

.metric-change.negative {
    background: #fee2e2;
    color: #dc2626;
}

.analytics-trend {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: trendPulse 2s infinite;
}

@keyframes trendPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.analytics-trend.up {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.analytics-trend.down {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
}

.trend-arrow {
    font-size: 1rem;
    animation: bounce 0.6s infinite alternate;
}

@keyframes bounce {
    from { transform: translateY(0); }
    to { transform: translateY(-2px); }
}

/* Real-time data simulation */
@keyframes dataUpdate {
    0% { background: transparent; }
    50% { background: rgba(34, 197, 94, 0.1); }
    100% { background: transparent; }
}

.data-updating {
    animation: dataUpdate 1s ease-in-out;
}`,
        js: `// Simulate real-time data updates
function simulateDataUpdates() {
    const rows = document.querySelectorAll('.analytics-table tbody tr');
    
    setInterval(() => {
        const randomRow = rows[Math.floor(Math.random() * rows.length)];
        randomRow.classList.add('data-updating');
        
        setTimeout(() => {
            randomRow.classList.remove('data-updating');
        }, 1000);
    }, 3000);
}

// Initialize real-time simulation
simulateDataUpdates();

// Add hover effects for trend indicators
document.querySelectorAll('.analytics-trend').forEach(trend => {
    trend.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    trend.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`
    },

    // ====================================================================
    // TEMPLATE 8: INVESTMENT PORTFOLIO TABLE
    // ====================================================================
    table8: {
        html: `<div class="portfolio-table-container">
    <table class="portfolio-table">
        <thead>
            <tr>
                <th>Asset</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Holdings</th>
                <th>Value</th>
                <th>Allocation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🔵</div>
                        <div class="asset-details">
                            <div class="asset-name">Apple Inc.</div>
                            <div class="asset-type">Technology</div>
                        </div>
                    </div>
                </td>
                <td>AAPL</td>
                <td>$182.63</td>
                <td>
                    <div class="price-change positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+2.34%</span>
                    </div>
                </td>
                <td>50 shares</td>
                <td>$9,131.50</td>
                <td>
                    <div class="allocation-container">
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 35%"></div>
                        </div>
                        <span class="allocation-text">35%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🟢</div>
                        <div class="asset-details">
                            <div class="asset-name">Microsoft</div>
                            <div class="asset-type">Technology</div>
                        </div>
                    </div>
                </td>
                <td>MSFT</td>
                <td>$378.85</td>
                <td>
                    <div class="price-change positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+1.87%</span>
                    </div>
                </td>
                <td>20 shares</td>
                <td>$7,577.00</td>
                <td>
                    <div class="allocation-container">
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 28%"></div>
                        </div>
                        <span class="allocation-text">28%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">🟡</div>
                        <div class="asset-details">
                            <div class="asset-name">Amazon</div>
                            <div class="asset-type">E-commerce</div>
                        </div>
                    </div>
                </td>
                <td>AMZN</td>
                <td>$145.18</td>
                <td>
                    <div class="price-change negative">
                        <span class="change-arrow">↓</span>
                        <span class="change-value">-0.92%</span>
                    </div>
                </td>
                <td>35 shares</td>
                <td>$5,081.30</td>
                <td>
                    <div class="allocation-container">
                        <div class="allocation-bar">
                            <div class="allocation-fill" style="width: 20%"></div>
                        </div>
                        <span class="allocation-text">20%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.portfolio-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;
    animation: slideInRight 0.7s ease-out;
    border: 1px solid #f1f5f9;
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(30px) rotateY(10deg);
    }
    to {
        opacity: 1;
        transform: translateX(0) rotateY(0);
    }
}

.portfolio-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'SF Pro Display', -apple-system, sans-serif;
}

.portfolio-table th {
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
    padding: 1.3rem 1.2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 3px solid #047857;
    position: relative;
    overflow: hidden;
}

.portfolio-table th::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent
    );
    animation: headerShimmer 4s infinite;
}

@keyframes headerShimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.portfolio-table td {
    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid #f8fafc;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.portfolio-table tr {
    transition: all 0.3s ease;
}

.portfolio-table tr:hover {
    background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15);
}

.portfolio-table tr:hover td {
    background: transparent;
}

.asset-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.asset-icon {
    font-size: 1.5rem;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f5f9;
    transition: all 0.4s ease;
}

.portfolio-table tr:hover .asset-icon {
    transform: scale(1.1) rotate(15deg);
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
}

.asset-details .asset-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.95rem;
}

.asset-details .asset-type {
    font-size: 0.75rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.price-change {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 700;
    transition: all 0.3s ease;
    animation: pricePulse 2s infinite;
}

@keyframes pricePulse {
    0%, 100% { 
        transform: scale(1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    50% { 
        transform: scale(1.05);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
}

.price-change.positive {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.price-change.negative {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
}

.change-arrow {
    font-size: 0.9rem;
    animation: arrowBounce 0.8s infinite alternate;
}

@keyframes arrowBounce {
    from { transform: translateY(0); }
    to { transform: translateY(-2px); }
}

.allocation-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.allocation-bar {
    flex: 1;
    height: 8px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.allocation-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    transition: width 1.5s ease-in-out;
    animation: allocationGrow 1.5s ease-out;
    position: relative;
}

@keyframes allocationGrow {
    from { 
        width: 0%; 
        opacity: 0;
    }
    to { 
        width: var(--target-width); 
        opacity: 1;
    }
}

.allocation-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: allocationShimmer 3s infinite;
}

@keyframes allocationShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.allocation-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: #1e293b;
    min-width: 35px;
    text-align: center;
}

/* Staggered animations for better visual effect */
.portfolio-table tr:nth-child(1) .allocation-fill { animation-delay: 0.1s; }
.portfolio-table tr:nth-child(2) .allocation-fill { animation-delay: 0.3s; }
.portfolio-table tr:nth-child(3) .allocation-fill { animation-delay: 0.5s; }

.portfolio-table tr:nth-child(1) .price-change { animation-delay: 0.2s; }
.portfolio-table tr:nth-child(2) .price-change { animation-delay: 0.4s; }
.portfolio-table tr:nth-child(3) .price-change { animation-delay: 0.6s; }`,
        js: `// Animate allocation bars
document.querySelectorAll('.allocation-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.setProperty('--target-width', width);
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 300);
});

// Add interactive price change effects
document.querySelectorAll('.price-change').forEach(change => {
    change.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-2px)';
    });
    
    change.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Simulate price updates
function simulatePriceUpdates() {
    const priceChanges = document.querySelectorAll('.price-change');
    
    setInterval(() => {
        const randomChange = priceChanges[Math.floor(Math.random() * priceChanges.length)];
        randomChange.style.animation = 'none';
        setTimeout(() => {
            randomChange.style.animation = 'pricePulse 2s infinite';
        }, 10);
    }, 5000);
}

simulatePriceUpdates();`
    },

    // ====================================================================
    // TEMPLATE 9: TEAM PERFORMANCE SCOREBOARD
    // ====================================================================
    table9: {
        html: `<div class="scoreboard-table-container">
    <table class="scoreboard-table">
        <thead>
            <tr>
                <th>Rank</th>
                <th>Team Member</th>
                <th>Department</th>
                <th>Tasks Completed</th>
                <th>Quality Score</th>
                <th>Productivity</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr class="first-place">
                <td>
                    <div class="rank-badge gold">1</div>
                </td>
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #f59e0b, #d97706);">SJ</div>
                        <div class="member-details">
                            <div class="member-name">Sarah Johnson</div>
                            <div class="member-role">Lead Developer</div>
                        </div>
                    </div>
                </td>
                <td>Engineering</td>
                <td>42</td>
                <td>
                    <div class="quality-score excellent">98%</div>
                </td>
                <td>
                    <div class="productivity-meter">
                        <div class="productivity-fill" style="width: 95%"></div>
                    </div>
                </td>
                <td>
                    <div class="points-display">
                        <span class="points-value">1,250</span>
                        <span class="points-change positive">+125</span>
                    </div>
                </td>
            </tr>
            <tr class="second-place">
                <td>
                    <div class="rank-badge silver">2</div>
                </td>
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #94a3b8, #64748b);">MR</div>
                        <div class="member-details">
                            <div class="member-name">Mike Rodriguez</div>
                            <div class="member-role">UX Designer</div>
                        </div>
                    </div>
                </td>
                <td>Design</td>
                <td>38</td>
                <td>
                    <div class="quality-score great">92%</div>
                </td>
                <td>
                    <div class="productivity-meter">
                        <div class="productivity-fill" style="width: 88%"></div>
                    </div>
                </td>
                <td>
                    <div class="points-display">
                        <span class="points-value">1,125</span>
                        <span class="points-change positive">+88</span>
                    </div>
                </td>
            </tr>
            <tr class="third-place">
                <td>
                    <div class="rank-badge bronze">3</div>
                </td>
                <td>
                    <div class="member-info">
                        <div class="member-avatar" style="background: linear-gradient(135deg, #b45309, #92400e);">ED</div>
                        <div class="member-details">
                            <div class="member-name">Emily Davis</div>
                            <div class="member-role">Product Manager</div>
                        </div>
                    </div>
                </td>
                <td>Product</td>
                <td>35</td>
                <td>
                    <div class="quality-score good">87%</div>
                </td>
                <td>
                    <div class="productivity-meter">
                        <div class="productivity-fill" style="width: 82%"></div>
                    </div>
                </td>
                <td>
                    <div class="points-display">
                        <span class="points-value">980</span>
                        <span class="points-change positive">+45</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.scoreboard-table-container {
    background: white;
    border-radius: 20px;
    box-shadow: 
        0 15px 40px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;
    animation: zoomIn 0.8s ease-out;
    border: 1px solid #f1f5f9;
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.8) rotateX(10deg);
    }
    to {
        opacity: 1;
        transform: scale(1) rotateX(0);
    }
}

.scoreboard-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
}

.scoreboard-table th {
    background: linear-gradient(135deg, #1e293b, #0f172a);
    color: white;
    padding: 1.4rem 1.3rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 3px solid #334155;
    position: relative;
    overflow: hidden;
}

.scoreboard-table th::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, 
        #f59e0b, 
        #eab308, 
        #f59e0b
    );
    animation: goldShimmer 3s infinite;
}

@keyframes goldShimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
}

.scoreboard-table td {
    padding: 1.4rem 1.3rem;
    border-bottom: 1px solid #f8fafc;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.scoreboard-table tr {
    transition: all 0.4s ease;
}

.scoreboard-table tr:hover {
    transform: translateX(10px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.scoreboard-table tr.first-place:hover {
    background: linear-gradient(135deg, #fefce8, #fef3c7);
}

.scoreboard-table tr.second-place:hover {
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}

.scoreboard-table tr.third-place:hover {
    background: linear-gradient(135deg, #fef7ed, #fed7aa);
}

.rank-badge {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1.1rem;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;
    animation: badgePulse 2s infinite;
}

@keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.rank-badge.gold {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
}

.rank-badge.silver {
    background: linear-gradient(135deg, #94a3b8, #64748b);
    box-shadow: 0 4px 15px rgba(148, 163, 184, 0.4);
}

.rank-badge.bronze {
    background: linear-gradient(135deg, #b45309, #92400e);
    box-shadow: 0 4px 15px rgba(180, 83, 9, 0.4);
}

.scoreboard-table tr:hover .rank-badge {
    transform: scale(1.2) rotate(15deg);
    animation: badgeSpin 0.6s ease;
}

@keyframes badgeSpin {
    from { transform: scale(1) rotate(0); }
    to { transform: scale(1.2) rotate(15deg); }
}

.member-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.member-avatar {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    border: 3px solid white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
}

.scoreboard-table tr:hover .member-avatar {
    transform: scale(1.1);
    border-color: #f1f5f9;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.member-details .member-name {
    font-weight: 700;
    color: #1e293b;
    font-size: 1rem;
}

.member-details .member-role {
    font-size: 0.8rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.quality-score {
    padding: 0.6rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    text-align: center;
    transition: all 0.3s ease;
    animation: scoreGlow 2s infinite;
}

@keyframes scoreGlow {
    0%, 100% { 
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    50% { 
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
}

.quality-score.excellent {
    background: linear-gradient(135deg, #10b981, #34d399);
    color: white;
}

.quality-score.great {
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    color: white;
}

.quality-score.good {
    background: linear-gradient(135deg, #f59e0b, #fbbf24);
    color: white;
}

.productivity-meter {
    height: 10px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.productivity-fill {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    transition: width 1.5s ease-in-out;
    animation: productivityGrow 1.5s ease-out;
    position: relative;
}

@keyframes productivityGrow {
    from { 
        width: 0%; 
        opacity: 0;
    }
    to { 
        width: var(--target-width); 
        opacity: 1;
    }
}

.productivity-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: meterShimmer 2s infinite;
}

@keyframes meterShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.points-display {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    align-items: center;
}

.points-value {
    font-weight: 800;
    color: #1e293b;
    font-size: 1.1rem;
}

.points-change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
}

.points-change.positive {
    background: #d1fae5;
    color: #065f46;
    animation: pointsBounce 0.6s ease;
}

@keyframes pointsBounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-5px); }
    60% { transform: translateY(-3px); }
}

/* Medal animation for top performers */
@keyframes medalGlow {
    0%, 100% { 
        filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.6));
    }
    50% { 
        filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.9));
    }
}

.first-place .rank-badge {
    animation: medalGlow 2s infinite, badgePulse 2s infinite;
}`,
        js: `// Animate productivity meters
document.querySelectorAll('.productivity-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.setProperty('--target-width', width);
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 400);
});

// Add celebration effect for top performers
document.querySelectorAll('.first-place, .second-place, .third-place').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
        this.style.position = 'relative';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Simulate points updates
function simulatePointsUpdates() {
    const pointsChanges = document.querySelectorAll('.points-change');
    
    setInterval(() => {
        pointsChanges.forEach(change => {
            change.style.animation = 'none';
            setTimeout(() => {
                change.style.animation = 'pointsBounce 0.6s ease';
            }, 10);
        });
    }, 8000);
}

simulatePointsUpdates();`
    },

    // ====================================================================
    // TEMPLATE 10: CUSTOMER SUPPORT DASHBOARD
    // ====================================================================
    table10: {
        html: `<div class="support-table-container">
    <table class="support-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Customer</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Response Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="ticket-id">#CS-2845</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">AB</div>
                        <div class="customer-details">
                            <div class="customer-name">Alex Bennett</div>
                            <div class="customer-company">TechCorp Inc.</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="subject-line">
                        Payment gateway integration issue
                    </div>
                </td>
                <td>
                    <div class="priority-indicator urgent">
                        <span class="priority-dot"></span>
                        Urgent
                    </div>
                </td>
                <td>
                    <div class="status-badge in-progress">
                        In Progress
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-avatar">SJ</div>
                        <span class="assignee-name">Sarah J.</span>
                    </div>
                </td>
                <td>
                    <div class="response-timer critical">
                        <span class="timer-icon">⏰</span>
                        <span class="timer-value">2h 15m</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#CS-2844</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">MC</div>
                        <div class="customer-details">
                            <div class="customer-name">Maria Chen</div>
                            <div class="customer-company">StartUp Labs</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="subject-line">
                        Account verification problem
                    </div>
                </td>
                <td>
                    <div class="priority-indicator high">
                        <span class="priority-dot"></span>
                        High
                    </div>
                </td>
                <td>
                    <div class="status-badge open">
                        Open
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-avatar">MR</div>
                        <span class="assignee-name">Mike R.</span>
                    </div>
                </td>
                <td>
                    <div class="response-timer warning">
                        <span class="timer-icon">⏰</span>
                        <span class="timer-value">1h 30m</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#CS-2843</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-avatar">DJ</div>
                        <div class="customer-details">
                            <div class="customer-name">David Johnson</div>
                            <div class="customer-company">Enterprise Co.</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="subject-line">
                        Feature request: API limits
                    </div>
                </td>
                <td>
                    <div class="priority-indicator medium">
                        <span class="priority-dot"></span>
                        Medium
                    </div>
                </td>
                <td>
                    <div class="status-badge resolved">
                        Resolved
                    </div>
                </td>
                <td>
                    <div class="assignee-info">
                        <div class="assignee-avatar">ED</div>
                        <span class="assignee-name">Emily D.</span>
                    </div>
                </td>
                <td>
                    <div class="response-timer good">
                        <span class="timer-icon">✅</span>
                        <span class="timer-value">45m</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.support-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 
        0 10px 35px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    overflow: hidden;
    animation: slideInUp 0.7s ease-out;
    border: 1px solid #f1f5f9;
}

.support-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
}

.support-table th {
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    color: white;
    padding: 1.3rem 1.2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.85rem;
    border-bottom: 3px solid #6d28d9;
    position: relative;
}

.support-table th::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.1), 
        transparent
    );
    animation: supportShimmer 4s infinite;
}

@keyframes supportShimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.support-table td {
    padding: 1.3rem 1.2rem;
    border-bottom: 1px solid #f8fafc;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
}

.support-table tr {
    transition: all 0.3s ease;
}

.support-table tr:hover {
    background: linear-gradient(135deg, #faf5ff, #f3e8ff);
    transform: translateX(5px);
}

.support-table tr:hover td {
    background: transparent;
}

.support-table tr:hover td::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(135deg, #7c3aed, #8b5cf6);
    animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
}

.ticket-id {
    font-family: 'Courier New', monospace;
    font-weight: 700;
    color: #7c3aed;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.support-table tr:hover .ticket-id {
    transform: scale(1.1);
    color: #6d28d9;
}

.customer-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.customer-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.4s ease;
}

.support-table tr:hover .customer-avatar {
    transform: scale(1.1) rotate(10deg);
}

.customer-details .customer-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.9rem;
}

.customer-details .customer-company {
    font-size: 0.75rem;
    color: #64748b;
}

.subject-line {
    font-weight: 500;
    color: #374151;
    font-size: 0.9rem;
    line-height: 1.4;
    transition: all 0.3s ease;
}

.support-table tr:hover .subject-line {
    color: #7c3aed;
}

.priority-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: priorityPulse 2s infinite;
}

@keyframes priorityPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.priority-indicator.urgent {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
}

.priority-indicator.high {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #d97706;
}

.priority-indicator.medium {
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
    color: #3730a3;
}

.priority-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: dotPulse 1.5s infinite;
}

.priority-indicator.urgent .priority-dot {
    background: #dc2626;
    animation: urgentPulse 1s infinite;
}

@keyframes urgentPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
    }
    50% { 
        box-shadow: 0 0 0 6px rgba(220, 38, 38, 0);
    }
}

.priority-indicator.high .priority-dot {
    background: #d97706;
}

.priority-indicator.medium .priority-dot {
    background: #3730a3;
}

.status-badge {
    padding: 0.6rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    animation: statusGlow 2s infinite;
}

@keyframes statusGlow {
    0%, 100% { 
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    50% { 
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }
}

.status-badge.in-progress {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #92400e;
}

.status-badge.open {
    background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
    color: #3730a3;
}

.status-badge.resolved {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.assignee-info {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.assignee-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #a855f7);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    transition: all 0.3s ease;
}

.support-table tr:hover .assignee-avatar {
    transform: scale(1.1);
}

.assignee-name {
    font-size: 0.85rem;
    font-weight: 500;
    color: #374151;
}

.response-timer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: timerPulse 2s infinite;
}

@keyframes timerPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.response-timer.critical {
    background: linear-gradient(135deg, #fee2e2, #fecaca);
    color: #dc2626;
    animation: criticalPulse 1s infinite;
}

@keyframes criticalPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.4);
    }
    50% { 
        box-shadow: 0 0 0 8px rgba(220, 38, 38, 0);
    }
}

.response-timer.warning {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #d97706;
}

.response-timer.good {
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    color: #065f46;
}

.timer-icon {
    font-size: 1rem;
    animation: timerShake 0.6s infinite alternate;
}

@keyframes timerShake {
    from { transform: rotate(-5deg); }
    to { transform: rotate(5deg); }
}

/* Staggered animations for better visual hierarchy */
.support-table tr:nth-child(1) { animation-delay: 0.1s; }
.support-table tr:nth-child(2) { animation-delay: 0.2s; }
.support-table tr:nth-child(3) { animation-delay: 0.3s; }`,
        js: `// Add interactive effects for support tickets
document.querySelectorAll('.support-table tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(5px)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Simulate real-time ticket updates
function simulateTicketUpdates() {
    const statusBadges = document.querySelectorAll('.status-badge');
    const timers = document.querySelectorAll('.response-timer');
    
    setInterval(() => {
        // Random status update
        const randomStatus = statusBadges[Math.floor(Math.random() * statusBadges.length)];
        randomStatus.style.animation = 'none';
        setTimeout(() => {
            randomStatus.style.animation = 'statusGlow 2s infinite';
        }, 10);
        
        // Timer updates
        timers.forEach(timer => {
            if (timer.classList.contains('critical')) {
                timer.style.animation = 'none';
                setTimeout(() => {
                    timer.style.animation = 'criticalPulse 1s infinite, timerPulse 2s infinite';
                }, 10);
            }
        });
    }, 5000);
}

simulateTicketUpdates();

// Add click effects for assignee avatars
document.querySelectorAll('.assignee-avatar').forEach(avatar => {
    avatar.addEventListener('click', function() {
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});`
    },
    // ====================================================================
// BUSINESS TEMPLATE 11: INVENTORY MANAGEMENT
// ====================================================================
business11: {
    html: `<div class="inventory-table-container">
    <div class="inventory-header">
        <h3>Inventory Management System</h3>
        <div class="inventory-stats">
            <div class="stat-item">
                <span class="stat-value">28</span>
                <span class="stat-label">In Stock</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">5</span>
                <span class="stat-label">Low Stock</span>
            </div>
            <div class="stat-item">
                <span class="stat-value">3</span>
                <span class="stat-label">Out of Stock</span>
            </div>
        </div>
    </div>
    <table class="inventory-table">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Reorder Level</th>
                <th>Status</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">MacBook Pro 16"</div>
                        <div class="product-brand">Apple</div>
                    </div>
                </td>
                <td>MBP16-2024</td>
                <td>Electronics</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">45</span>
                        <div class="stock-bar">
                            <div class="stock-level high"></div>
                        </div>
                    </div>
                </td>
                <td>10</td>
                <td><span class="stock-status in-stock">In Stock</span></td>
                <td>$72,000</td>
            </tr>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">Wireless Mouse X</div>
                        <div class="product-brand">TechGear</div>
                    </div>
                </td>
                <td>WM-X2024</td>
                <td>Accessories</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">0</span>
                        <div class="stock-bar">
                            <div class="stock-level out"></div>
                        </div>
                    </div>
                </td>
                <td>25</td>
                <td><span class="stock-status out-of-stock">Out of Stock</span></td>
                <td>$0</td>
            </tr>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">Mechanical Keyboard</div>
                        <div class="product-brand">KeyMaster</div>
                    </div>
                </td>
                <td>MK-PRO2024</td>
                <td>Accessories</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">8</span>
                        <div class="stock-bar">
                            <div class="stock-level low"></div>
                        </div>
                    </div>
                </td>
                <td>15</td>
                <td><span class="stock-status low-stock">Low Stock</span></td>
                <td>$1,200</td>
            </tr>
            <tr>
                <td>
                    <div class="product-display">
                        <div class="product-name">4K Monitor 27"</div>
                        <div class="product-brand">ViewPlus</div>
                    </div>
                </td>
                <td>MON27-4K</td>
                <td>Electronics</td>
                <td>
                    <div class="stock-info">
                        <span class="stock-quantity">22</span>
                        <div class="stock-bar">
                            <div class="stock-level medium"></div>
                        </div>
                    </div>
                </td>
                <td>8</td>
                <td><span class="stock-status in-stock">In Stock</span></td>
                <td>$33,000</td>
            </tr>
        </tbody>
    </table>
    <div class="table-footer">
        <button class="btn-generate-report">Generate Stock Report</button>
        <button class="btn-reorder">Create Reorder List</button>
    </div>
</div>`,
    css: `.inventory-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.inventory-header {
    padding: 1.5rem;
    background: linear-gradient(135deg, #059669, #047857);
    color: white;
}

.inventory-header h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.inventory-stats {
    display: flex;
    gap: 2rem;
}

.stat-item {
    text-align: center;
}

.stat-value {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.inventory-table {
    width: 100%;
    border-collapse: collapse;
}

.inventory-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.inventory-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.inventory-table tr:hover {
    background: #f9fafb;
}

.product-display .product-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.product-display .product-brand {
    font-size: 0.75rem;
    color: #9ca3af;
    background: #f3f4f6;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
}

.stock-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.stock-quantity {
    font-weight: 600;
    color: #1f2937;
    min-width: 30px;
}

.stock-bar {
    width: 80px;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
}

.stock-level {
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
}

.stock-level.high {
    background: #10b981;
    width: 90%;
}

.stock-level.medium {
    background: #f59e0b;
    width: 60%;
}

.stock-level.low {
    background: #ef4444;
    width: 30%;
}

.stock-level.out {
    background: #6b7280;
    width: 0%;
}

.stock-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.stock-status.in-stock {
    background: #d1fae5;
    color: #065f46;
}

.stock-status.low-stock {
    background: #fef3c7;
    color: #92400e;
}

.stock-status.out-of-stock {
    background: #fee2e2;
    color: #991b1b;
}

.table-footer {
    padding: 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
}

.btn-generate-report {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-generate-report:hover {
    background: #2563eb;
}

.btn-reorder {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-reorder:hover {
    background: #6d28d9;
}`,
    js: `// Inventory management functionality
document.querySelector('.btn-generate-report').addEventListener('click', function() {
    alert('Generating stock report...');
    // In real implementation, this would generate a PDF report
});

document.querySelector('.btn-reorder').addEventListener('click', function() {
    const lowStockItems = document.querySelectorAll('.stock-status.low-stock, .stock-status.out-of-stock');
    alert(\`Creating reorder list for \${lowStockItems.length} items\`);
});`
},

// ====================================================================
// BUSINESS TEMPLATE 12: HR ATTENDANCE
// ====================================================================
business12: {
    html: `<div class="attendance-table-container">
    <div class="attendance-header">
        <h3>Employee Attendance Tracker</h3>
        <div class="date-filter">
            <input type="date" class="date-picker" value="2024-01-15">
            <button class="btn-today">Today</button>
        </div>
    </div>
    <div class="attendance-summary">
        <div class="summary-card present">
            <div class="summary-count">42</div>
            <div class="summary-label">Present</div>
        </div>
        <div class="summary-card absent">
            <div class="summary-count">3</div>
            <div class="summary-label">Absent</div>
        </div>
        <div class="summary-card late">
            <div class="summary-count">5</div>
            <div class="summary-label">Late</div>
        </div>
        <div class="summary-card leave">
            <div class="summary-count">2</div>
            <div class="summary-label">On Leave</div>
        </div>
    </div>
    <table class="attendance-table">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Working Hours</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>EMP-001</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">John Smith</div>
                        <div class="employee-position">Sales Manager</div>
                    </div>
                </td>
                <td>Sales</td>
                <td>
                    <div class="time-slot on-time">09:05 AM</div>
                </td>
                <td>06:15 PM</td>
                <td>9h 10m</td>
                <td><span class="attendance-status present">Present</span></td>
            </tr>
            <tr>
                <td>EMP-002</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Sarah Johnson</div>
                        <div class="employee-position">HR Specialist</div>
                    </div>
                </td>
                <td>Human Resources</td>
                <td>
                    <div class="time-slot late">10:30 AM</div>
                </td>
                <td>07:00 PM</td>
                <td>8h 30m</td>
                <td><span class="attendance-status late">Late</span></td>
            </tr>
            <tr>
                <td>EMP-003</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Mike Chen</div>
                        <div class="employee-position">Developer</div>
                    </div>
                </td>
                <td>IT</td>
                <td>
                    <div class="time-slot">-</div>
                </td>
                <td>-</td>
                <td>0h 0m</td>
                <td><span class="attendance-status absent">Absent</span></td>
            </tr>
            <tr>
                <td>EMP-004</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Emily Davis</div>
                        <div class="employee-position">Designer</div>
                    </div>
                </td>
                <td>Design</td>
                <td>
                    <div class="time-slot on-time">08:55 AM</div>
                </td>
                <td>05:45 PM</td>
                <td>8h 50m</td>
                <td><span class="attendance-status present">Present</span></td>
            </tr>
            <tr>
                <td>EMP-005</td>
                <td>
                    <div class="employee-info">
                        <div class="employee-name">Robert Brown</div>
                        <div class="employee-position">Analyst</div>
                    </div>
                </td>
                <td>Finance</td>
                <td>
                    <div class="time-slot">-</div>
                </td>
                <td>-</td>
                <td>0h 0m</td>
                <td><span class="attendance-status leave">On Leave</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.attendance-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.attendance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.attendance-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
}

.date-filter {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.date-picker {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 0.875rem;
}

.btn-today {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
}

.attendance-summary {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.summary-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid #e5e7eb;
}

.summary-card.present {
    border-left: 4px solid #10b981;
}

.summary-card.absent {
    border-left: 4px solid #ef4444;
}

.summary-card.late {
    border-left: 4px solid #f59e0b;
}

.summary-card.leave {
    border-left: 4px solid #8b5cf6;
}

.summary-count {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.summary-card.present .summary-count {
    color: #10b981;
}

.summary-card.absent .summary-count {
    color: #ef4444;
}

.summary-card.late .summary-count {
    color: #f59e0b;
}

.summary-card.leave .summary-count {
    color: #8b5cf6;
}

.summary-label {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
}

.attendance-table {
    width: 100%;
    border-collapse: collapse;
}

.attendance-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.attendance-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.attendance-table tr:hover {
    background: #f9fafb;
}

.employee-info .employee-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.employee-info .employee-position {
    font-size: 0.75rem;
    color: #9ca3af;
}

.time-slot {
    font-weight: 600;
    font-size: 0.875rem;
}

.time-slot.on-time {
    color: #10b981;
}

.time-slot.late {
    color: #f59e0b;
}

.attendance-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.attendance-status.present {
    background: #d1fae5;
    color: #065f46;
}

.attendance-status.absent {
    background: #fee2e2;
    color: #991b1b;
}

.attendance-status.late {
    background: #fef3c7;
    color: #92400e;
}

.attendance-status.leave {
    background: #e0e7ff;
    color: #3730a3;
}`,
    js: `// Attendance system functionality
document.querySelector('.date-picker').addEventListener('change', function(e) {
    const selectedDate = e.target.value;
    alert(\`Loading attendance data for: \${selectedDate}\`);
});

document.querySelector('.btn-today').addEventListener('click', function() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('.date-picker').value = today;
    alert('Loading today\\'s attendance data');
});`
},

// ====================================================================
// BUSINESS TEMPLATE 13: CUSTOMER SUPPORT
// ====================================================================
business13: {
    html: `<div class="support-table-container">
    <div class="support-header">
        <h3>Customer Support Tickets</h3>
        <div class="support-actions">
            <button class="btn-new-ticket">+ New Ticket</button>
            <button class="btn-export-tickets">Export</button>
        </div>
    </div>
    <div class="support-filters">
        <div class="filter-group">
            <label>Status:</label>
            <select class="filter-select">
                <option>All Tickets</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Closed</option>
            </select>
        </div>
        <div class="filter-group">
            <label>Priority:</label>
            <select class="filter-select">
                <option>All Priorities</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
        </div>
        <div class="filter-group">
            <label>Agent:</label>
            <select class="filter-select">
                <option>All Agents</option>
                <option>John Smith</option>
                <option>Sarah Chen</option>
                <option>Mike Johnson</option>
            </select>
        </div>
    </div>
    <table class="support-table">
        <thead>
            <tr>
                <th>Ticket ID</th>
                <th>Customer</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Agent</th>
                <th>Created</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-001</div>
                    <div class="ticket-category">Technical</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Alex Johnson</div>
                        <div class="customer-email">alex@company.com</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Login issues after update</div>
                    <div class="ticket-excerpt">Unable to access account since last update...</div>
                </td>
                <td><span class="priority critical">Critical</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">John Smith</div>
                        <div class="agent-status online">Online</div>
                    </div>
                </td>
                <td>2024-01-15</td>
                <td><span class="ticket-status open">Open</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action assign" title="Assign">👤</button>
                        <button class="btn-action close" title="Close">✅</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-002</div>
                    <div class="ticket-category">Billing</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Maria Garcia</div>
                        <div class="customer-email">maria@business.com</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Invoice discrepancy</div>
                    <div class="ticket-excerpt">Charged twice for monthly subscription...</div>
                </td>
                <td><span class="priority high">High</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">Sarah Chen</div>
                        <div class="agent-status online">Online</div>
                    </div>
                </td>
                <td>2024-01-14</td>
                <td><span class="ticket-status progress">In Progress</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action assign" title="Assign">👤</button>
                        <button class="btn-action close" title="Close">✅</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-003</div>
                    <div class="ticket-category">Feature Request</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">David Kim</div>
                        <div class="customer-email">david@startup.io</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Export to PDF feature</div>
                    <div class="ticket-excerpt">Requesting PDF export for reports...</div>
                </td>
                <td><span class="priority medium">Medium</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">-</div>
                        <div class="agent-status">Unassigned</div>
                    </div>
                </td>
                <td>2024-01-13</td>
                <td><span class="ticket-status open">Open</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action assign" title="Assign">👤</button>
                        <button class="btn-action close" title="Close">✅</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="ticket-id">#TSK-004</div>
                    <div class="ticket-category">General</div>
                </td>
                <td>
                    <div class="customer-info">
                        <div class="customer-name">Lisa Wong</div>
                        <div class="customer-email">lisa@consulting.com</div>
                    </div>
                </td>
                <td>
                    <div class="ticket-subject">Documentation update</div>
                    <div class="ticket-excerpt">API documentation needs updating...</div>
                </td>
                <td><span class="priority low">Low</span></td>
                <td>
                    <div class="agent-info">
                        <div class="agent-name">Mike Johnson</div>
                        <div class="agent-status away">Away</div>
                    </div>
                </td>
                <td>2024-01-12</td>
                <td><span class="ticket-status resolved">Resolved</span></td>
                <td>
                    <div class="ticket-actions">
                        <button class="btn-action view" title="View Ticket">👁️</button>
                        <button class="btn-action reopen" title="Reopen">↩️</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.support-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.support-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.support-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.25rem;
    font-weight: 600;
}

.support-actions {
    display: flex;
    gap: 0.75rem;
}

.btn-new-ticket {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.btn-export-tickets {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.support-filters {
    display: flex;
    gap: 2rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-group label {
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
}

.filter-select {
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    font-size: 0.875rem;
    min-width: 150px;
}

.support-table {
    width: 100%;
    border-collapse: collapse;
}

.support-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.support-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.support-table tr:hover {
    background: #f9fafb;
}

.ticket-id {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.ticket-category {
    font-size: 0.75rem;
    color: #9ca3af;
    background: #f3f4f6;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    display: inline-block;
}

.customer-info .customer-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.customer-info .customer-email {
    font-size: 0.75rem;
    color: #6b7280;
}

.ticket-subject {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.ticket-excerpt {
    font-size: 0.75rem;
    color: #9ca3af;
}

.priority {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.priority.critical {
    background: #fee2e2;
    color: #991b1b;
}

.priority.high {
    background: #fef3c7;
    color: #92400e;
}

.priority.medium {
    background: #dbeafe;
    color: #1e40af;
}

.priority.low {
    background: #f3f4f6;
    color: #6b7280;
}

.agent-info .agent-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.agent-info .agent-status {
    font-size: 0.75rem;
    padding: 0.1rem 0.4rem;
    border-radius: 10px;
    display: inline-block;
}

.agent-status.online {
    background: #d1fae5;
    color: #065f46;
}

.agent-status.away {
    background: #fef3c7;
    color: #92400e;
}

.ticket-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.ticket-status.open {
    background: #dbeafe;
    color: #1e40af;
}

.ticket-status.progress {
    background: #fef3c7;
    color: #92400e;
}

.ticket-status.resolved {
    background: #d1fae5;
    color: #065f46;
}

.ticket-actions {
    display: flex;
    gap: 0.25rem;
}

.btn-action {
    background: none;
    border: 1px solid #e5e7eb;
    padding: 0.4rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.75rem;
    transition: all 0.3s;
}

.btn-action:hover {
    background: #f3f4f6;
    transform: scale(1.1);
}`,
    js: `// Support ticket system functionality
document.querySelector('.btn-new-ticket').addEventListener('click', function() {
    alert('Opening new ticket form...');
});

document.querySelector('.btn-export-tickets').addEventListener('click', function() {
    alert('Exporting tickets to CSV...');
});

document.querySelectorAll('.filter-select').forEach(select => {
    select.addEventListener('change', function() {
        alert('Filtering tickets...');
    });
});

document.querySelectorAll('.btn-action.view').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Opening ticket details...');
    });
});`
},

// ====================================================================
// BUSINESS TEMPLATE 14: EXPENSE REPORT
// ====================================================================
business14: {
    html: `<div class="expense-table-container">
    <div class="expense-header">
        <h3>Expense Report - January 2024</h3>
        <div class="expense-total">
            <span class="total-label">Total Expenses:</span>
            <span class="total-amount">$8,745.50</span>
        </div>
    </div>
    <div class="expense-actions">
        <button class="btn-add-expense">+ Add Expense</button>
        <button class="btn-submit-report">Submit for Approval</button>
        <button class="btn-export-expenses">Export to Excel</button>
    </div>
    <table class="expense-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Receipt</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-01-15</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">✈️</span>
                        <span class="category-name">Travel</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Flight to Client Meeting</div>
                        <div class="expense-details">New York to San Francisco</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$450.00</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status approved">Approved</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-14</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🍽️</span>
                        <span class="category-name">Meals</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Client Dinner</div>
                        <div class="expense-details">Restaurant - 4 people</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$320.00</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status pending">Pending</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-12</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🛏️</span>
                        <span class="category-name">Accommodation</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Hotel Stay</div>
                        <div class="expense-details">3 nights - Business trip</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$680.00</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status approved">Approved</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-10</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🖥️</span>
                        <span class="category-name">Software</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Design Tool Subscription</div>
                        <div class="expense-details">Annual license renewal</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$299.00</div>
                </td>
                <td>Bank Transfer</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status rejected">Rejected</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2024-01-08</td>
                <td>
                    <div class="expense-category">
                        <span class="category-icon">🚗</span>
                        <span class="category-name">Transportation</span>
                    </div>
                </td>
                <td>
                    <div class="expense-description">
                        <div class="expense-title">Car Rental</div>
                        <div class="expense-details">5 days - Client visits</div>
                    </div>
                </td>
                <td>
                    <div class="expense-amount">$425.50</div>
                </td>
                <td>Corporate Card</td>
                <td>
                    <button class="btn-receipt">📎 View</button>
                </td>
                <td><span class="expense-status pending">Pending</span></td>
                <td>
                    <div class="expense-actions">
                        <button class="btn-action edit">✏️</button>
                        <button class="btn-action delete">🗑️</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="expense-summary">
        <div class="summary-row">
            <div class="summary-item">
                <span class="summary-label">Total Submitted:</span>
                <span class="summary-value">$8,745.50</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Approved:</span>
                <span class="summary-value approved">$1,130.00</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Pending:</span>
                <span class="summary-value pending">$745.50</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Rejected:</span>
                <span class="summary-value rejected">$299.00</span>
            </div>
        </div>
    </div>
</div>`,
    css: `.expense-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.expense-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #6d28d9);
    color: white;
}

.expense-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.expense-total {
    text-align: right;
}

.total-label {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
}

.total-amount {
    display: block;
    font-size: 1.75rem;
    font-weight: 700;
}

.expense-actions {
    display: flex;
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.btn-add-expense {
    background: #10b981;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.btn-submit-report {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.btn-export-expenses {
    background: #6b7280;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
}

.expense-table {
    width: 100%;
    border-collapse: collapse;
}

.expense-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.expense-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.expense-table tr:hover {
    background: #f9fafb;
}

.expense-category {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.category-icon {
    font-size: 1.1rem;
}

.category-name {
    font-weight: 500;
    color: #374151;
}

.expense-description .expense-title {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.expense-description .expense-details {
    font-size: 0.75rem;
    color: #9ca3af;
}

.expense-amount {
    font-weight: 600;
    color: #1f2937;
    font-size: 1.1rem;
}

.btn-receipt {
    background: #e0e7ff;
    color: #3730a3;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.75rem;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-receipt:hover {
    background: #c7d2fe;
}

.expense-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.expense-status.approved {
    background: #d1fae5;
    color: #065f46;
}

.expense-status.pending {
    background: #fef3c7;
    color: #92400e;
}

.expense-status.rejected {
    background: #fee2e2;
    color: #991b1b;
}

.expense-actions {
    display: flex;
    gap: 0.25rem;
}

.btn-action {
    background: none;
    border: 1px solid #e5e7eb;
    padding: 0.4rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.75rem;
    transition: all 0.3s;
}

.btn-action:hover {
    background: #f3f4f6;
    transform: scale(1.1);
}

.expense-summary {
    padding: 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
}

.summary-row {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
}

.summary-item {
    text-align: center;
}

.summary-label {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.5rem;
}

.summary-value {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
}

.summary-value.approved {
    color: #10b981;
}

.summary-value.pending {
    color: #f59e0b;
}

.summary-value.rejected {
    color: #ef4444;
}`,
    js: `// Expense report functionality
document.querySelector('.btn-add-expense').addEventListener('click', function() {
    alert('Opening add expense form...');
});

document.querySelector('.btn-submit-report').addEventListener('click', function() {
    const pendingExpenses = document.querySelectorAll('.expense-status.pending').length;
    alert(\`Submitting \${pendingExpenses} expenses for approval...\`);
});

document.querySelector('.btn-export-expenses').addEventListener('click', function() {
    alert('Exporting expense report to Excel...');
});

document.querySelectorAll('.btn-receipt').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Opening receipt document...');
    });
});`
},

// ====================================================================
// BUSINESS TEMPLATE 15: KPI DASHBOARD
// ====================================================================
business15: {
    html: `<div class="kpi-table-container">
    <div class="kpi-header">
        <h3>Key Performance Indicators</h3>
        <div class="kpi-period">
            <span class="period-label">Reporting Period:</span>
            <span class="period-value">Q1 2024</span>
        </div>
    </div>
    <table class="kpi-table">
        <thead>
            <tr>
                <th>KPI Metric</th>
                <th>Current Value</th>
                <th>Target</th>
                <th>Previous Period</th>
                <th>Performance</th>
                <th>Trend</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Monthly Revenue</div>
                        <div class="metric-description">Total monthly sales revenue</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">$85,250</div>
                </td>
                <td>
                    <div class="target-value">$100,000</div>
                </td>
                <td>
                    <div class="previous-value">$78,500</div>
                    <div class="change positive">+8.6%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 85%"></div>
                        <span class="performance-text">85%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status on-track">On Track</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Customer Acquisition</div>
                        <div class="metric-description">New customers per month</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">145</div>
                </td>
                <td>
                    <div class="target-value">200</div>
                </td>
                <td>
                    <div class="previous-value">128</div>
                    <div class="change positive">+13.3%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 72%"></div>
                        <span class="performance-text">72%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status needs-attention">Needs Attention</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Conversion Rate</div>
                        <div class="metric-description">Lead to customer conversion</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">12.5%</div>
                </td>
                <td>
                    <div class="target-value">15%</div>
                </td>
                <td>
                    <div class="previous-value">11.2%</div>
                    <div class="change positive">+11.6%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 83%"></div>
                        <span class="performance-text">83%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status on-track">On Track</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Customer Retention</div>
                        <div class="metric-description">Monthly customer retention rate</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">88.2%</div>
                </td>
                <td>
                    <div class="target-value">90%</div>
                </td>
                <td>
                    <div class="previous-value">89.5%</div>
                    <div class="change negative">-1.5%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 98%"></div>
                        <span class="performance-text">98%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator negative">📉</div>
                </td>
                <td><span class="kpi-status at-risk">At Risk</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Average Order Value</div>
                        <div class="metric-description">Average revenue per order</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">$245</div>
                </td>
                <td>
                    <div class="target-value">$220</div>
                </td>
                <td>
                    <div class="previous-value">$235</div>
                    <div class="change positive">+4.3%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 111%"></div>
                        <span class="performance-text">111%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status exceeding">Exceeding</span></td>
            </tr>
            <tr>
                <td>
                    <div class="kpi-metric">
                        <div class="metric-name">Website Traffic</div>
                        <div class="metric-description">Monthly unique visitors</div>
                    </div>
                </td>
                <td>
                    <div class="current-value">45,820</div>
                </td>
                <td>
                    <div class="target-value">50,000</div>
                </td>
                <td>
                    <div class="previous-value">42,150</div>
                    <div class="change positive">+8.7%</div>
                </td>
                <td>
                    <div class="performance-bar">
                        <div class="performance-fill" style="width: 92%"></div>
                        <span class="performance-text">92%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-indicator positive">📈</div>
                </td>
                <td><span class="kpi-status on-track">On Track</span></td>
            </tr>
        </tbody>
    </table>
    <div class="kpi-summary">
        <div class="summary-card">
            <div class="summary-icon">🎯</div>
            <div class="summary-content">
                <div class="summary-value">4/6</div>
                <div class="summary-label">KPIs On Track</div>
            </div>
        </div>
        <div class="summary-card">
            <div class="summary-icon">📈</div>
            <div class="summary-content">
                <div class="summary-value">5</div>
                <div class="summary-label">Positive Trends</div>
            </div>
        </div>
        <div class="summary-card">
            <div class="summary-icon">📊</div>
            <div class="summary-content">
                <div class="summary-value">89%</div>
                <div class="summary-label">Avg. Performance</div>
            </div>
        </div>
    </div>
</div>`,
    css: `.kpi-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.kpi-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #1e293b, #374151);
    color: white;
}

.kpi-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.kpi-period {
    text-align: right;
}

.period-label {
    display: block;
    font-size: 0.875rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
}

.period-value {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
}

.kpi-table {
    width: 100%;
    border-collapse: collapse;
}

.kpi-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.kpi-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.kpi-table tr:hover {
    background: #f9fafb;
}

.kpi-metric .metric-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.kpi-metric .metric-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.current-value {
    font-weight: 700;
    color: #1f2937;
    font-size: 1.1rem;
}

.target-value {
    color: #6b7280;
    font-size: 0.9rem;
}

.previous-value {
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.25rem;
}

.change {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    display: inline-block;
}

.change.positive {
    background: #d1fae5;
    color: #065f46;
}

.change.negative {
    background: #fee2e2;
    color: #991b1b;
}

.performance-bar {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 4px;
    position: relative;
    margin: 0.5rem 0;
}

.performance-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.3s ease;
}

.performance-bar:nth-child(1) .performance-fill {
    background: linear-gradient(90deg, #10b981, #059669);
}

.performance-bar:nth-child(2) .performance-fill {
    background: linear-gradient(90deg, #f59e0b, #d97706);
}

.performance-bar:nth-child(3) .performance-fill {
    background: linear-gradient(90deg, #3b82f6, #2563eb);
}

.performance-text {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
}

.trend-indicator {
    font-size: 1.2rem;
    text-align: center;
}

.trend-indicator.positive {
    color: #10b981;
}

.trend-indicator.negative {
    color: #ef4444;
}

.kpi-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.kpi-status.on-track {
    background: #d1fae5;
    color: #065f46;
}

.kpi-status.needs-attention {
    background: #fef3c7;
    color: #92400e;
}

.kpi-status.at-risk {
    background: #fee2e2;
    color: #991b1b;
}

.kpi-status.exceeding {
    background: #dbeafe;
    color: #1e40af;
}

.kpi-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
}

.summary-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid #e5e7eb;
}

.summary-icon {
    font-size: 2rem;
}

.summary-content {
    flex: 1;
}

.summary-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.summary-label {
    font-size: 0.875rem;
    color: #6b7280;
    font-weight: 500;
}`,
    js: `// KPI dashboard functionality
console.log('KPI dashboard loaded');

// Animate performance bars on load
document.addEventListener('DOMContentLoaded', function() {
    const performanceBars = document.querySelectorAll('.performance-fill');
    performanceBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Add click handlers for KPI metrics
document.querySelectorAll('.kpi-metric').forEach(metric => {
    metric.addEventListener('click', function() {
        const metricName = this.querySelector('.metric-name').textContent;
        alert(\`Showing detailed analysis for: \${metricName}\`);
    });
});`
},
// ====================================================================
// MINIMAL TEMPLATE 16: CLEAN DATA GRID
// ====================================================================
minimal16: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table clean-grid">
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Last Updated</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Wireless Bluetooth Mouse</td>
                <td>Electronics</td>
                <td>$29.99</td>
                <td>45</td>
                <td>2024-01-15</td>
            </tr>
            <tr>
                <td>Mechanical Gaming Keyboard</td>
                <td>Electronics</td>
                <td>$89.99</td>
                <td>23</td>
                <td>2024-01-14</td>
            </tr>
            <tr>
                <td>USB-C Hub Adapter</td>
                <td>Accessories</td>
                <td>$39.99</td>
                <td>67</td>
                <td>2024-01-16</td>
            </tr>
            <tr>
                <td>Noise Cancelling Headphones</td>
                <td>Audio</td>
                <td>$199.99</td>
                <td>12</td>
                <td>2024-01-13</td>
            </tr>
            <tr>
                <td>Laptop Stand Aluminum</td>
                <td>Accessories</td>
                <td>$49.99</td>
                <td>34</td>
                <td>2024-01-15</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table-container {
    background: white;
    border-radius: 8px;
    overflow: hidden;
}

.minimal-table.clean-grid {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.clean-grid th {
    background: #fafafa;
    padding: 1rem 1.25rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.875rem;
    border-bottom: 1px solid #eaeaea;
    letter-spacing: 0.5px;
}

.minimal-table.clean-grid td {
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #f5f5f5;
    color: #333;
    font-size: 0.9rem;
    transition: background 0.2s ease;
}

.minimal-table.clean-grid tr:last-child td {
    border-bottom: none;
}

.minimal-table.clean-grid tr:hover td {
    background: #f8f9fa;
}

/* Minimal color variations for categories */
.minimal-table.clean-grid td:nth-child(2) {
    color: #666;
    font-size: 0.85rem;
}

.minimal-table.clean-grid td:nth-child(3) {
    font-weight: 500;
    color: #000;
}

.minimal-table.clean-grid td:nth-child(4) {
    font-weight: 500;
}

.minimal-table.clean-grid td:nth-child(5) {
    color: #999;
    font-size: 0.85rem;
}`,
    js: `// No JavaScript required - pure CSS minimal table`
},

// ====================================================================
// MINIMAL TEMPLATE 17: BORDERLESS DESIGN
// ====================================================================
minimal17: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table borderless">
        <thead>
            <tr>
                <th>Task Description</th>
                <th>Assigned To</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Complete design system documentation</td>
                <td>Sarah Chen</td>
                <td>Jan 15, 2024</td>
                <td><span class="priority-high">High</span></td>
                <td><span class="status-in-progress">In Progress</span></td>
            </tr>
            <tr>
                <td>Deploy new authentication service</td>
                <td>Mike Rodriguez</td>
                <td>Jan 18, 2024</td>
                <td><span class="priority-medium">Medium</span></td>
                <td><span class="status-pending">Pending</span></td>
            </tr>
            <tr>
                <td>Update user onboarding flow</td>
                <td>Jessica Wang</td>
                <td>Jan 20, 2024</td>
                <td><span class="priority-low">Low</span></td>
                <td><span class="status-completed">Completed</span></td>
            </tr>
            <tr>
                <td>Conduct user research interviews</td>
                <td>David Kim</td>
                <td>Jan 22, 2024</td>
                <td><span class="priority-medium">Medium</span></td>
                <td><span class="status-not-started">Not Started</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.borderless {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.borderless th {
    padding: 1.25rem 1rem 0.75rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #999;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #f0f0f0;
}

.minimal-table.borderless td {
    padding: 1rem;
    color: #333;
    font-size: 0.9rem;
    transition: all 0.2s ease;
}

.minimal-table.borderless tr:hover td {
    background: #fafafa;
    transform: translateX(4px);
}

/* Priority and Status Styles */
.priority-high, .priority-medium, .priority-low {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.priority-high {
    background: #fff0f0;
    color: #d63031;
}

.priority-medium {
    background: #fff9e6;
    color: #f39c12;
}

.priority-low {
    background: #f0fff4;
    color: #27ae60;
}

.status-in-progress, .status-pending, .status-completed, .status-not-started {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.status-in-progress {
    background: #e3f2fd;
    color: #1976d2;
}

.status-pending {
    background: #fff3e0;
    color: #f57c00;
}

.status-completed {
    background: #e8f5e8;
    color: #388e3c;
}

.status-not-started {
    background: #f5f5f5;
    color: #757575;
}`,
    js: `// Add smooth hover animations
document.querySelectorAll('.minimal-table.borderless tr').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.2s ease';
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 18: LIGHT ZEBRA STRIPES
// ====================================================================
minimal18: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table zebra-stripes">
        <thead>
            <tr>
                <th>Team Member</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Role</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">AJ</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Alex Johnson</div>
                            <div class="user-title">Senior Developer</div>
                        </div>
                    </div>
                </td>
                <td>alex.johnson@company.com</td>
                <td>Engineering</td>
                <td>Backend</td>
                <td><span class="status-badge active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">MG</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Maria Garcia</div>
                            <div class="user-title">UI/UX Designer</div>
                        </div>
                    </div>
                </td>
                <td>maria.garcia@company.com</td>
                <td>Design</td>
                <td>Product Design</td>
                <td><span class="status-badge active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">TK</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Tom Wilson</div>
                            <div class="user-title">Product Manager</div>
                        </div>
                    </div>
                </td>
                <td>tom.wilson@company.com</td>
                <td>Product</td>
                <td>Lead PM</td>
                <td><span class="status-badge active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="user-minimal">
                        <div class="avatar-minimal">SL</div>
                        <div class="user-details-minimal">
                            <div class="user-name">Sarah Lee</div>
                            <div class="user-title">Data Analyst</div>
                        </div>
                    </div>
                </td>
                <td>sarah.lee@company.com</td>
                <td>Analytics</td>
                <td>Senior Analyst</td>
                <td><span class="status-badge away">Away</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.zebra-stripes {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.zebra-stripes th {
    padding: 1rem 1.25rem;
    text-align: left;
    font-weight: 500;
    color: #555;
    font-size: 0.85rem;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.zebra-stripes td {
    padding: 1.25rem 1.25rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
}

/* Zebra Striping */
.minimal-table.zebra-stripes tbody tr:nth-child(odd) {
    background: #fafafa;
}

.minimal-table.zebra-stripes tbody tr:nth-child(even) {
    background: white;
}

.minimal-table.zebra-stripes tbody tr:hover {
    background: #f0f8ff;
}

/* User Minimal Styles */
.user-minimal {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar-minimal {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 500;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.user-details-minimal .user-name {
    font-weight: 500;
    color: #333;
    margin-bottom: 0.1rem;
}

.user-details-minimal .user-title {
    font-size: 0.8rem;
    color: #888;
}

/* Status Badges */
.status-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.active {
    background: #e8f5e8;
    color: #2e7d32;
}

.status-badge.away {
    background: #fff3e0;
    color: #ef6c00;
}`,
    js: `// Simple user interaction
document.querySelectorAll('.user-minimal').forEach(user => {
    user.addEventListener('click', function() {
        const userName = this.querySelector('.user-name').textContent;
        console.log('Selected user:', userName);
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 19: COMPACT LAYOUT
// ====================================================================
minimal19: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table compact">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#ORD-001</td>
                <td>John Smith</td>
                <td>Wireless Mouse</td>
                <td>2</td>
                <td>$29.99</td>
                <td>$59.98</td>
                <td><span class="order-status shipped">Shipped</span></td>
            </tr>
            <tr>
                <td>#ORD-002</td>
                <td>Sarah Johnson</td>
                <td>Mechanical Keyboard</td>
                <td>1</td>
                <td>$89.99</td>
                <td>$89.99</td>
                <td><span class="order-status delivered">Delivered</span></td>
            </tr>
            <tr>
                <td>#ORD-003</td>
                <td>Mike Chen</td>
                <td>USB-C Hub</td>
                <td>3</td>
                <td>$39.99</td>
                <td>$119.97</td>
                <td><span class="order-status processing">Processing</span></td>
            </tr>
            <tr>
                <td>#ORD-004</td>
                <td>Emily Davis</td>
                <td>Laptop Stand</td>
                <td>1</td>
                <td>$49.99</td>
                <td>$49.99</td>
                <td><span class="order-status cancelled">Cancelled</span></td>
            </tr>
            <tr>
                <td>#ORD-005</td>
                <td>David Wilson</td>
                <td>Headphones</td>
                <td>1</td>
                <td>$199.99</td>
                <td>$199.99</td>
                <td><span class="order-status shipped">Shipped</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.compact {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.8rem;
}

.minimal-table.compact th {
    padding: 0.75rem 0.8rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid #e0e0e0;
    background: #fcfcfc;
}

.minimal-table.compact td {
    padding: 0.7rem 0.8rem;
    color: #444;
    border-bottom: 1px solid #f5f5f5;
    line-height: 1.3;
}

.minimal-table.compact tr:hover td {
    background: #f8f9fa;
}

/* Order Status Styles */
.order-status {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.order-status.shipped {
    background: #e3f2fd;
    color: #1565c0;
}

.order-status.delivered {
    background: #e8f5e8;
    color: #2e7d32;
}

.order-status.processing {
    background: #fff3e0;
    color: #ef6c00;
}

.order-status.cancelled {
    background: #ffebee;
    color: #c62828;
}

/* Compact specific styles */
.minimal-table.compact td:nth-child(1) {
    font-weight: 500;
    color: #333;
    font-family: 'Monaco', 'Consolas', monospace;
}

.minimal-table.compact td:nth-child(4),
.minimal-table.compact td:nth-child(5),
.minimal-table.compact td:nth-child(6) {
    text-align: right;
    font-family: 'Monaco', 'Consolas', monospace;
}

.minimal-table.compact td:nth-child(6) {
    font-weight: 500;
    color: #000;
}`,
    js: `// Compact table interactions
document.querySelectorAll('.minimal-table.compact tr').forEach(row => {
    row.addEventListener('click', function() {
        const orderId = this.cells[0].textContent;
        console.log('Order details for:', orderId);
        
        // Remove any existing active states
        document.querySelectorAll('.minimal-table.compact tr').forEach(r => {
            r.style.background = '';
        });
        
        // Highlight clicked row
        this.style.background = '#f0f7ff';
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 20: MINIMAL HEADER
// ====================================================================
minimal20: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table minimal-header">
        <thead>
            <tr>
                <th>Transaction Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2024-01-12</td>
                <td>Web Hosting - Annual Plan</td>
                <td>Infrastructure</td>
                <td class="amount-negative">-$19.99</td>
                <td><span class="type-expense">Expense</span></td>
            </tr>
            <tr>
                <td>2024-01-15</td>
                <td>Client Payment - Project Alpha</td>
                <td>Services</td>
                <td class="amount-positive">+$2,500.00</td>
                <td><span class="type-income">Income</span></td>
            </tr>
            <tr>
                <td>2024-01-16</td>
                <td>Software Subscription - Adobe Creative</td>
                <td>Tools</td>
                <td class="amount-negative">-$59.99</td>
                <td><span class="type-expense">Expense</span></td>
            </tr>
            <tr>
                <td>2024-01-18</td>
                <td>Consulting Services - Tech Corp</td>
                <td>Services</td>
                <td class="amount-positive">+$1,200.00</td>
                <td><span class="type-income">Income</span></td>
            </tr>
            <tr>
                <td>2024-01-20</td>
                <td>Office Supplies Purchase</td>
                <td>Operations</td>
                <td class="amount-negative">-$145.50</td>
                <td><span class="type-expense">Expense</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.minimal-header {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.minimal-header th {
    padding: 1rem 1.25rem 0.5rem 1.25rem;
    text-align: left;
    font-weight: 400;
    color: #888;
    font-size: 0.8rem;
    border-bottom: 2px solid #e8e8e8;
    background: white;
}

.minimal-table.minimal-header td {
    padding: 1rem 1.25rem;
    color: #444;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.2s ease;
}

.minimal-table.minimal-header tr:hover td {
    background: #fafafa;
}

/* Amount Styles */
.amount-positive {
    color: #27ae60;
    font-weight: 500;
    font-family: 'Monaco', 'Consolas', monospace;
}

.amount-negative {
    color: #e74c3c;
    font-weight: 500;
    font-family: 'Monaco', 'Consolas', monospace;
}

/* Type Styles */
.type-income, .type-expense {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.type-income {
    background: #e8f5e8;
    color: #27ae60;
    border: 1px solid #c8e6c9;
}

.type-expense {
    background: #ffebee;
    color: #e74c3c;
    border: 1px solid #ffcdd2;
}

/* Minimal header specific styles */
.minimal-table.minimal-header td:nth-child(1) {
    color: #666;
    font-size: 0.85rem;
    font-family: 'Monaco', 'Consolas', monospace;
}

.minimal-table.minimal-header td:nth-child(3) {
    color: #888;
    font-size: 0.85rem;
}

.minimal-table.minimal-header td:nth-child(4) {
    text-align: right;
    font-weight: 500;
}`,
    js: `// Financial table formatting
document.querySelectorAll('.amount-positive, .amount-negative').forEach(amount => {
    amount.addEventListener('click', function() {
        const value = this.textContent;
        console.log('Transaction amount:', value);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        // Add keyboard navigation logic here
    }
});`
},
// ====================================================================
// MINIMAL TEMPLATE 21: FADE IN ANIMATION
// ====================================================================
minimal21: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table fade-in-animation">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Team</th>
                <th>Progress</th>
                <th>Timeline</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">🚀</span>
                        Website Redesign
                    </div>
                </td>
                <td>Design Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 75%"></div>
                        </div>
                        <span class="progress-text">75%</span>
                    </div>
                </td>
                <td>2 weeks</td>
                <td><span class="status-on-track">On Track</span></td>
            </tr>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">📱</span>
                        Mobile App Development
                    </div>
                </td>
                <td>Dev Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 45%"></div>
                        </div>
                        <span class="progress-text">45%</span>
                    </div>
                </td>
                <td>4 weeks</td>
                <td><span class="status-delayed">Delayed</span></td>
            </tr>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">🔐</span>
                        Security Audit
                    </div>
                </td>
                <td>Security Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 90%"></div>
                        </div>
                        <span class="progress-text">90%</span>
                    </div>
                </td>
                <td>1 week</td>
                <td><span class="status-completed">Completed</span></td>
            </tr>
            <tr class="fade-row">
                <td>
                    <div class="project-with-icon">
                        <span class="project-icon">📊</span>
                        Analytics Dashboard
                    </div>
                </td>
                <td>Data Team</td>
                <td>
                    <div class="progress-minimal">
                        <div class="progress-track">
                            <div class="progress-fill" style="width: 30%"></div>
                        </div>
                        <span class="progress-text">30%</span>
                    </div>
                </td>
                <td>3 weeks</td>
                <td><span class="status-on-track">On Track</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.fade-in-animation {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.fade-in-animation th {
    padding: 1.25rem 1rem 0.75rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.fade-in-animation td {
    padding: 1.25rem 1rem;
    color: #444;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
}

/* Fade In Animation */
.fade-row {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.6s ease forwards;
}

.fade-row:nth-child(1) { animation-delay: 0.1s; }
.fade-row:nth-child(2) { animation-delay: 0.2s; }
.fade-row:nth-child(3) { animation-delay: 0.3s; }
.fade-row:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Project Styles */
.project-with-icon {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    font-size: 1.1rem;
    opacity: 0.8;
}

/* Progress Bar */
.progress-minimal {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.progress-track {
    flex: 1;
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 3px;
    transition: width 1s ease-in-out;
    animation: progressFill 1.5s ease-out;
}

@keyframes progressFill {
    from { width: 0% !important; }
}

.progress-text {
    font-size: 0.8rem;
    font-weight: 500;
    color: #666;
    min-width: 2.5rem;
}

/* Status Styles */
.status-on-track, .status-delayed, .status-completed {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: statusPulse 2s infinite;
}

.status-on-track {
    background: #e8f5e8;
    color: #27ae60;
}

.status-delayed {
    background: #fff3e0;
    color: #f39c12;
}

.status-completed {
    background: #e3f2fd;
    color: #2980b9;
}

@keyframes statusPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}`,
    js: `// Add interactive progress animations
document.querySelectorAll('.progress-fill').forEach(progress => {
    // Reset and re-animate on hover
    progress.parentElement.addEventListener('mouseenter', function() {
        const currentWidth = progress.style.width;
        progress.style.width = '0%';
        setTimeout(() => {
            progress.style.width = currentWidth;
        }, 50);
    });
});

// Re-initialize animations when table comes into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'none';
            setTimeout(() => {
                entry.target.style.animation = '';
            }, 10);
        }
    });
});

document.querySelectorAll('.fade-row').forEach(row => {
    observer.observe(row);
});`
},

// ====================================================================
// MINIMAL TEMPLATE 22: SLIDE IN ANIMATION
// ====================================================================
minimal22: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table slide-in-animation">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Status</th>
                <th>Release Version</th>
                <th>User Impact</th>
                <th>Confidence</th>
            </tr>
        </thead>
        <tbody>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge new">NEW</span>
                        Dark Mode
                    </div>
                </td>
                <td><span class="status-live">Live</span></td>
                <td>v2.1.0</td>
                <td><span class="impact-high">High</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 95%"></div>
                        <span class="confidence-text">95%</span>
                    </div>
                </td>
            </tr>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge beta">BETA</span>
                        AI Assistant
                    </div>
                </td>
                <td><span class="status-beta">Beta</span></td>
                <td>v2.2.0</td>
                <td><span class="impact-medium">Medium</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 75%"></div>
                        <span class="confidence-text">75%</span>
                    </div>
                </td>
            </tr>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge upcoming">UPCOMING</span>
                        Voice Commands
                    </div>
                </td>
                <td><span class="status-planned">Planned</span></td>
                <td>v2.3.0</td>
                <td><span class="impact-high">High</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 60%"></div>
                        <span class="confidence-text">60%</span>
                    </div>
                </td>
            </tr>
            <tr class="slide-row">
                <td>
                    <div class="feature-item">
                        <span class="feature-badge experimental">EXPERIMENTAL</span>
                        AR Preview
                    </div>
                </td>
                <td><span class="status-research">Research</span></td>
                <td>v2.4.0</td>
                <td><span class="impact-low">Low</span></td>
                <td>
                    <div class="confidence-meter">
                        <div class="confidence-fill" style="width: 40%"></div>
                        <span class="confidence-text">40%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.slide-in-animation {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow: hidden;
}

.minimal-table.slide-in-animation th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #555;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: white;
}

.minimal-table.slide-in-animation td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f5f5f5;
}

/* Slide In Animation */
.slide-row {
    opacity: 0;
    transform: translateX(-50px);
    animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.slide-row:nth-child(1) { animation-delay: 0.1s; }
.slide-row:nth-child(2) { animation-delay: 0.2s; }
.slide-row:nth-child(3) { animation-delay: 0.3s; }
.slide-row:nth-child(4) { animation-delay: 0.4s; }

@keyframes slideInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Feature Item Styles */
.feature-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
}

.feature-badge {
    padding: 0.2rem 0.6rem;
    border-radius: 8px;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.feature-badge.new {
    background: #e8f5e8;
    color: #27ae60;
    animation: badgePulse 2s infinite;
}

.feature-badge.beta {
    background: #fff3e0;
    color: #f39c12;
}

.feature-badge.upcoming {
    background: #e3f2fd;
    color: #2980b9;
}

.feature-badge.experimental {
    background: #f3e5f5;
    color: #9b59b6;
}

@keyframes badgePulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Status Styles */
.status-live, .status-beta, .status-planned, .status-research {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-live {
    background: #e8f5e8;
    color: #27ae60;
    animation: livePulse 3s infinite;
}

.status-beta {
    background: #fff3e0;
    color: #f39c12;
}

.status-planned {
    background: #e3f2fd;
    color: #2980b9;
}

.status-research {
    background: #f5f5f5;
    color: #7f8c8d;
}

@keyframes livePulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(39, 174, 96, 0.4); }
    50% { box-shadow: 0 0 0 4px rgba(39, 174, 96, 0); }
}

/* Impact Styles */
.impact-high, .impact-medium, .impact-low {
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
    font-size: 0.7rem;
    font-weight: 600;
}

.impact-high {
    background: #ffebee;
    color: #e74c3c;
}

.impact-medium {
    background: #fff3e0;
    color: #f39c12;
}

.impact-low {
    background: #e8f5e8;
    color: #27ae60;
}

/* Confidence Meter */
.confidence-meter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.confidence-fill {
    flex: 1;
    height: 6px;
    background: linear-gradient(90deg, #ff6b6b, #ffa726);
    border-radius: 3px;
    transition: width 1s ease;
    animation: confidenceFill 2s ease-out;
}

@keyframes confidenceFill {
    from { width: 0% !important; }
}

.confidence-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
    min-width: 2.5rem;
}`,
    js: `// Interactive slide animations
document.querySelectorAll('.slide-row').forEach((row, index) => {
    row.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Confidence meter interactions
document.querySelectorAll('.confidence-meter').forEach(meter => {
    meter.addEventListener('click', function() {
        const fill = this.querySelector('.confidence-fill');
        const currentWidth = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = currentWidth;
        }, 100);
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 23: HOVER GLOW EFFECT
// ====================================================================
minimal23: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table hover-glow">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Trend</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">🎧</div>
                        <div class="product-info">
                            <div class="product-name">Wireless Earbuds Pro</div>
                            <div class="product-brand">SoundMax</div>
                        </div>
                    </div>
                </td>
                <td>Audio</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star half">★</span>
                        <span class="rating-value">4.8</span>
                    </div>
                </td>
                <td>128</td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↑</span>
                        <span class="trend-text">Rising</span>
                    </div>
                </td>
                <td>$129.99</td>
            </tr>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">⌚</div>
                        <div class="product-info">
                            <div class="product-name">Smart Watch Series 5</div>
                            <div class="product-brand">TechFit</div>
                        </div>
                    </div>
                </td>
                <td>Wearables</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">☆</span>
                        <span class="rating-value">4.6</span>
                    </div>
                </td>
                <td>89</td>
                <td>
                    <div class="trend-indicator stable">
                        <span class="trend-arrow">→</span>
                        <span class="trend-text">Stable</span>
                    </div>
                </td>
                <td>$199.99</td>
            </tr>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">📱</div>
                        <div class="product-info">
                            <div class="product-name">Phone Case Ultra</div>
                            <div class="product-brand">Guardian</div>
                        </div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="rating-value">5.0</span>
                    </div>
                </td>
                <td>256</td>
                <td>
                    <div class="trend-indicator up">
                        <span class="trend-arrow">↑</span>
                        <span class="trend-text">Rising</span>
                    </div>
                </td>
                <td>$29.99</td>
            </tr>
            <tr class="glow-row">
                <td>
                    <div class="product-card">
                        <div class="product-emoji">💻</div>
                        <div class="product-info">
                            <div class="product-name">Laptop Stand Pro</div>
                            <div class="product-brand">ErgoTech</div>
                        </div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">☆</span>
                        <span class="star">☆</span>
                        <span class="rating-value">3.4</span>
                    </div>
                </td>
                <td>34</td>
                <td>
                    <div class="trend-indicator down">
                        <span class="trend-arrow">↓</span>
                        <span class="trend-text">Falling</span>
                    </div>
                </td>
                <td>$49.99</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.hover-glow {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.hover-glow th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.hover-glow td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Glow Hover Effect */
.glow-row {
    position: relative;
    transition: all 0.4s ease;
}

.glow-row::before {
    content: '';
    position: absolute;
    top: 0;
    left: -10px;
    right: -10px;
    bottom: 0;
    background: linear-gradient(90deg, 
        rgba(102, 126, 234, 0.1) 0%, 
        rgba(118, 75, 162, 0.1) 50%, 
        rgba(102, 126, 234, 0.1) 100%);
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transform: scaleX(0.95);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.glow-row:hover::before {
    opacity: 1;
    transform: scaleX(1);
}

.glow-row:hover td {
    transform: translateY(-2px);
    color: #2c3e50;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 
        0 4px 20px rgba(102, 126, 234, 0.15),
        0 0 0 1px rgba(102, 126, 234, 0.1);
    border-radius: 8px;
    margin: 4px 0;
}

/* Product Card */
.product-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.product-emoji {
    font-size: 1.5rem;
    opacity: 0.8;
    transition: transform 0.3s ease;
}

.glow-row:hover .product-emoji {
    transform: scale(1.2) rotate(5deg);
}

.product-info .product-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.product-info .product-brand {
    font-size: 0.75rem;
    color: #7f8c8d;
}

/* Rating Stars */
.rating-stars {
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.star {
    color: #ffd700;
    font-size: 0.9rem;
}

.star.half {
    background: linear-gradient(90deg, #ffd700 50%, #ddd 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.rating-value {
    margin-left: 0.5rem;
    font-weight: 600;
    color: #333;
    font-size: 0.8rem;
}

/* Trend Indicator */
.trend-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.trend-indicator.up {
    background: #e8f5e8;
    color: #27ae60;
}

.trend-indicator.stable {
    background: #f0f0f0;
    color: #7f8c8d;
}

.trend-indicator.down {
    background: #ffebee;
    color: #e74c3c;
}

.trend-arrow {
    font-size: 1rem;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-3px); }
    60% { transform: translateY(-1px); }
}

.glow-row:hover .trend-indicator {
    transform: scale(1.05);
}`,
    js: `// Enhanced glow effects
document.querySelectorAll('.glow-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Star rating interactions
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.3)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    star.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 24: PULSE LOADING
// ====================================================================
minimal24: {
    html: `<div class="minimal-table-container">
    <div class="table-header-pulse">
        <h3>System Health Dashboard</h3>
        <div class="last-updated" id="lastUpdated">Updated just now</div>
    </div>
    <table class="minimal-table pulse-loading">
        <thead>
            <tr>
                <th>Service</th>
                <th>Status</th>
                <th>Uptime</th>
                <th>Response Time</th>
                <th>Health Score</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">🌐</div>
                        <div class="service-details">
                            <div class="service-name">API Gateway</div>
                            <div class="service-endpoint">api.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator online">
                        <div class="status-dot"></div>
                        <span>Online</span>
                    </div>
                </td>
                <td>99.9%</td>
                <td>
                    <div class="response-time fast">45ms</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="95">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 113.097"></circle>
                            </svg>
                            <span class="score-text">95</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">💾</div>
                        <div class="service-details">
                            <div class="service-name">Database Cluster</div>
                            <div class="service-endpoint">db-primary.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator online">
                        <div class="status-dot"></div>
                        <span>Online</span>
                    </div>
                </td>
                <td>99.8%</td>
                <td>
                    <div class="response-time fast">12ms</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="88">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 135.717"></circle>
                            </svg>
                            <span class="score-text">88</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">📧</div>
                        <div class="service-details">
                            <div class="service-name">Email Service</div>
                            <div class="service-endpoint">smtp.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator warning">
                        <div class="status-dot"></div>
                        <span>Degraded</span>
                    </div>
                </td>
                <td>98.5%</td>
                <td>
                    <div class="response-time slow">250ms</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="72">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 158.336"></circle>
                            </svg>
                            <span class="score-text">72</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
            <tr class="pulse-row">
                <td>
                    <div class="service-info">
                        <div class="service-icon">📊</div>
                        <div class="service-details">
                            <div class="service-name">Analytics API</div>
                            <div class="service-endpoint">analytics.company.com</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="status-indicator offline">
                        <div class="status-dot"></div>
                        <span>Offline</span>
                    </div>
                </td>
                <td>95.2%</td>
                <td>
                    <div class="response-time timeout">Timeout</div>
                </td>
                <td>
                    <div class="health-score">
                        <div class="score-circle" data-score="45">
                            <svg width="40" height="40" class="score-svg">
                                <circle cx="20" cy="20" r="18" class="score-bg"></circle>
                                <circle cx="20" cy="20" r="18" class="score-fill" style="stroke-dashoffset: 203.575"></circle>
                            </svg>
                            <span class="score-text">45</span>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn-action refresh">🔄</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.pulse-loading {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.table-header-pulse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e8e8e8;
}

.table-header-pulse h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.25rem;
    font-weight: 600;
}

.last-updated {
    font-size: 0.8rem;
    color: #7f8c8d;
    animation: textPulse 2s infinite;
}

@keyframes textPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.minimal-table.pulse-loading th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.pulse-loading td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.3s ease;
}

/* Pulse Animation */
.pulse-row {
    animation: rowPulse 3s ease-in-out infinite;
}

.pulse-row:nth-child(1) { animation-delay: 0.1s; }
.pulse-row:nth-child(2) { animation-delay: 0.3s; }
.pulse-row:nth-child(3) { animation-delay: 0.5s; }
.pulse-row:nth-child(4) { animation-delay: 0.7s; }

@keyframes rowPulse {
    0%, 100% { 
        background: white;
        transform: scale(1);
    }
    50% { 
        background: #f8f9fa;
        transform: scale(1.002);
    }
}

/* Service Info */
.service-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.service-icon {
    font-size: 1.3rem;
    opacity: 0.8;
}

.service-details .service-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.service-details .service-endpoint {
    font-size: 0.75rem;
    color: #7f8c8d;
    font-family: 'Monaco', 'Consolas', monospace;
}

/* Status Indicator */
.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: statusPulse 2s infinite;
}

.status-indicator.online .status-dot {
    background: #27ae60;
    animation: onlinePulse 2s infinite;
}

.status-indicator.warning .status-dot {
    background: #f39c12;
    animation: warningPulse 1.5s infinite;
}

.status-indicator.offline .status-dot {
    background: #e74c3c;
    animation: offlinePulse 1s infinite;
}

@keyframes onlinePulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(39, 174, 96, 0.7);
        transform: scale(1);
    }
    50% { 
        box-shadow: 0 0 0 4px rgba(39, 174, 96, 0);
        transform: scale(1.2);
    }
}

@keyframes warningPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(243, 156, 18, 0.7);
        transform: scale(1);
    }
    50% { 
        box-shadow: 0 0 0 4px rgba(243, 156, 18, 0);
        transform: scale(1.2);
    }
}

@keyframes offlinePulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
        transform: scale(1);
    }
    50% { 
        box-shadow: 0 0 0 4px rgba(231, 76, 60, 0);
        transform: scale(1.1);
    }
}

/* Response Time */
.response-time {
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
}

.response-time.fast {
    background: #e8f5e8;
    color: #27ae60;
}

.response-time.slow {
    background: #fff3e0;
    color: #f39c12;
}

.response-time.timeout {
    background: #ffebee;
    color: #e74c3c;
}

/* Health Score */
.health-score {
    display: flex;
    justify-content: center;
}

.score-circle {
    position: relative;
    width: 40px;
    height: 40px;
}

.score-svg {
    transform: rotate(-90deg);
}

.score-bg {
    fill: none;
    stroke: #f0f0f0;
    stroke-width: 3;
}

.score-fill {
    fill: none;
    stroke: #27ae60;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 113.097;
    transition: stroke-dashoffset 1s ease;
    animation: scoreFill 2s ease-out;
}

@keyframes scoreFill {
    from { stroke-dashoffset: 113.097; }
}

.score-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: 700;
    color: #333;
}

/* Action Button */
.btn-action.refresh {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
}

.btn-action.refresh:hover {
    background: #667eea;
    color: white;
    transform: rotate(180deg);
}`,
    js: `// Update last updated time
function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('lastUpdated').textContent = \`Updated at \${timeString}\`;
}

// Update every 30 seconds
setInterval(updateLastUpdated, 30000);

// Refresh button functionality
document.querySelectorAll('.btn-action.refresh').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        const serviceName = row.querySelector('.service-name').textContent;
        
        // Add loading state
        this.textContent = '⏳';
        this.style.animation = 'spin 1s linear infinite';
        
        setTimeout(() => {
            this.textContent = '🔄';
            this.style.animation = '';
            updateLastUpdated();
            console.log(\`Refreshed data for: \${serviceName}\`);
        }, 1000);
    });
});

// Initialize score animations
document.querySelectorAll('.score-circle').forEach(circle => {
    const score = parseInt(circle.getAttribute('data-score'));
    const fill = circle.querySelector('.score-fill');
    const circumference = 2 * Math.PI * 18;
    const offset = circumference - (score / 100) * circumference;
    
    fill.style.strokeDashoffset = offset;
    
    // Color based on score
    if (score >= 80) {
        fill.style.stroke = '#27ae60';
    } else if (score >= 60) {
        fill.style.stroke = '#f39c12';
    } else {
        fill.style.stroke = '#e74c3c';
    }
});`
},

// ====================================================================
// MINIMAL TEMPLATE 25: MORPHING CELLS
// ====================================================================
minimal25: {
    html: `<div class="minimal-table-container">
    <table class="minimal-table morphing-cells">
        <thead>
            <tr>
                <th>Performance Metric</th>
                <th>Current Value</th>
                <th>Previous Value</th>
                <th>Change</th>
                <th>Trend (7d)</th>
                <th>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">👥</div>
                        <div class="metric-details">
                            <div class="metric-name">Active Users</div>
                            <div class="metric-description">Daily active users</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="1284">1,284</div>
                </td>
                <td>
                    <div class="previous-value">1,150</div>
                </td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+134</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="900,1050,1100,1150,1200,1250,1284"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 85.6%"></div>
                        </div>
                        <span class="target-text">1,500</span>
                    </div>
                </td>
            </tr>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">💰</div>
                        <div class="metric-details">
                            <div class="metric-name">Monthly Revenue</div>
                            <div class="metric-description">Total monthly revenue</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="12500">$12,500</div>
                </td>
                <td>
                    <div class="previous-value">$11,200</div>
                </td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+11.6%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="8000,9500,10200,10800,11200,11800,12500"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 62.5%"></div>
                        </div>
                        <span class="target-text">$20,000</span>
                    </div>
                </td>
            </tr>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">📈</div>
                        <div class="metric-details">
                            <div class="metric-name">Conversion Rate</div>
                            <div class="metric-description">Visitor to customer rate</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="3.2">3.2%</div>
                </td>
                <td>
                    <div class="previous-value">2.8%</div>
                </td>
                <td>
                    <div class="change-indicator positive">
                        <span class="change-arrow">↑</span>
                        <span class="change-value">+0.4%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="2.5,2.6,2.7,2.8,2.9,3.0,3.2"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 64%"></div>
                        </div>
                        <span class="target-text">5%</span>
                    </div>
                </td>
            </tr>
            <tr class="morph-row">
                <td>
                    <div class="metric-info">
                        <div class="metric-icon">⏱️</div>
                        <div class="metric-details">
                            <div class="metric-name">Avg. Session</div>
                            <div class="metric-description">Average session duration</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="current-value" data-value="4.8">4.8m</div>
                </td>
                <td>
                    <div class="previous-value">5.2m</div>
                </td>
                <td>
                    <div class="change-indicator negative">
                        <span class="change-arrow">↓</span>
                        <span class="change-value">-0.4m</span>
                    </div>
                </td>
                <td>
                    <div class="trend-sparkline">
                        <div class="sparkline" data-values="5.5,5.3,5.2,5.1,5.0,4.9,4.8"></div>
                    </div>
                </td>
                <td>
                    <div class="target-progress">
                        <div class="target-bar">
                            <div class="target-fill" style="width: 80%"></div>
                        </div>
                        <span class="target-text">6m</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `.minimal-table.morphing-cells {
    width: 100%;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.minimal-table.morphing-cells th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 500;
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #f0f0f0;
    background: white;
}

.minimal-table.morphing-cells td {
    padding: 1.25rem 1rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f8f8f8;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Morph Row Animation */
.morph-row {
    opacity: 0;
    animation: morphIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.morph-row:nth-child(1) { animation-delay: 0.1s; }
.morph-row:nth-child(2) { animation-delay: 0.2s; }
.morph-row:nth-child(3) { animation-delay: 0.3s; }
.morph-row:nth-child(4) { animation-delay: 0.4s; }

@keyframes morphIn {
    0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
    }
    50% {
        transform: translateY(-5px) scale(1.02);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.morph-row:hover td {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
}

/* Metric Info */
.metric-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.metric-icon {
    font-size: 1.3rem;
    opacity: 0.8;
}

.metric-details .metric-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.metric-details .metric-description {
    font-size: 0.75rem;
    color: #7f8c8d;
}

/* Current Value Morphing */
.current-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
}

.current-value::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 4px;
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.4s ease;
    z-index: -1;
}

.current-value.morphing {
    color: white;
    transform: scale(1.1);
}

.current-value.morphing::before {
    opacity: 1;
    transform: scale(1);
}

/* Change Indicator */
.change-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.change-indicator.positive {
    background: #e8f5e8;
    color: #27ae60;
}

.change-indicator.negative {
    background: #ffebee;
    color: #e74c3c;
}

.change-arrow {
    font-size: 1rem;
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-2px); }
    60% { transform: translateY(-1px); }
}

/* Trend Sparkline */
.trend-sparkline {
    width: 80px;
    height: 30px;
}

.sparkline {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #f8f9fa, #fff);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}

.sparkline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        rgba(102, 126, 234, 0.3) 0%, 
        rgba(118, 75, 162, 0.3) 100%);
    clip-path: polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%);
    animation: drawSparkline 2s ease-out forwards;
}

@keyframes drawSparkline {
    to {
        clip-path: polygon(
            0% 100%,
            14.28% var(--y1),
            28.57% var(--y2),
            42.85% var(--y3),
            57.14% var(--y4),
            71.42% var(--y5),
            85.71% var(--y6),
            100% var(--y7),
            100% 100%
        );
    }
}

/* Target Progress */
.target-progress {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.target-bar {
    flex: 1;
    height: 6px;
    background: #f0f0f0;
    border-radius: 3px;
    overflow: hidden;
}

.target-fill {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 3px;
    transition: width 1s ease;
    animation: targetFill 2s ease-out;
}

@keyframes targetFill {
    from { width: 0% !important; }
}

.target-text {
    font-size: 0.8rem;
    font-weight: 500;
    color: #666;
    min-width: 3rem;
}`,
    js: `// Value morphing animation
function animateValueChange(element, newValue) {
    element.classList.add('morphing');
    
    setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('morphing');
    }, 400);
}

// Initialize sparklines
document.querySelectorAll('.sparkline').forEach(sparkline => {
    const values = sparkline.getAttribute('data-values').split(',').map(Number);
    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);
    const range = maxValue - minValue;
    
    // Calculate Y positions (inverted for SVG coordinate system)
    const yPositions = values.map(value => {
        const normalized = (value - minValue) / range;
        return 100 - (normalized * 80 + 10); // 10% padding top and bottom
    });
    
    // Set CSS custom properties for animation
    sparkline.style.setProperty('--y1', \`\${yPositions[0]}%\`);
    sparkline.style.setProperty('--y2', \`\${yPositions[1]}%\`);
    sparkline.style.setProperty('--y3', \`\${yPositions[2]}%\`);
    sparkline.style.setProperty('--y4', \`\${yPositions[3]}%\`);
    sparkline.style.setProperty('--y5', \`\${yPositions[4]}%\`);
    sparkline.style.setProperty('--y6', \`\${yPositions[5]}%\`);
    sparkline.style.setProperty('--y7', \`\${yPositions[6]}%\`);
});

// Interactive value updates
document.querySelectorAll('.current-value').forEach(valueElement => {
    valueElement.addEventListener('click', function() {
        const currentValue = this.getAttribute('data-value');
        const randomChange = (Math.random() - 0.5) * 100;
        const newValue = Math.max(0, parseFloat(currentValue) + randomChange);
        const formattedValue = newValue.toLocaleString();
        
        animateValueChange(this, formattedValue);
        this.setAttribute('data-value', newValue);
    });
});

// Auto-refresh simulation
setInterval(() => {
    document.querySelectorAll('.morph-row').forEach(row => {
        row.style.animation = 'none';
        setTimeout(() => {
            row.style.animation = 'morphIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }, 10);
    });
}, 10000);`
},
// ====================================================================
// MINIMAL TEMPLATE 26: UNIVERSAL DATA TABLE
// ====================================================================
minimal26: {
    html: `<div class="universal-table-container">
    <div class="table-actions">
        <div class="search-box">
            <input type="text" placeholder="Search..." class="search-input">
            <span class="search-icon">🔍</span>
        </div>
        <div class="table-controls">
            <select class="rows-select">
                <option>10 rows</option>
                <option>25 rows</option>
                <option>50 rows</option>
                <option>100 rows</option>
            </select>
            <button class="btn-export">Export</button>
        </div>
    </div>
    
    <table class="universal-table">
        <thead>
            <tr>
                <th>
                    <div class="th-content">
                        Name
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>
                    <div class="th-content">
                        Email
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>
                    <div class="th-content">
                        Role
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>
                    <div class="th-content">
                        Status
                        <span class="sort-indicator">↕️</span>
                    </div>
                </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">JD</div>
                        <div class="user-info">
                            <div class="user-name">John Doe</div>
                            <div class="user-id">ID: USR-001</div>
                        </div>
                    </div>
                </td>
                <td>john.doe@company.com</td>
                <td>
                    <span class="role-tag admin">Admin</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot active"></div>
                        <span>Active</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">JS</div>
                        <div class="user-info">
                            <div class="user-name">Jane Smith</div>
                            <div class="user-id">ID: USR-002</div>
                        </div>
                    </div>
                </td>
                <td>jane.smith@company.com</td>
                <td>
                    <span class="role-tag user">User</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot pending"></div>
                        <span>Pending</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">MJ</div>
                        <div class="user-info">
                            <div class="user-name">Mike Johnson</div>
                            <div class="user-id">ID: USR-003</div>
                        </div>
                    </div>
                </td>
                <td>mike.johnson@company.com</td>
                <td>
                    <span class="role-tag editor">Editor</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot active"></div>
                        <span>Active</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="user-cell">
                        <div class="avatar-sm">SC</div>
                        <div class="user-info">
                            <div class="user-name">Sarah Chen</div>
                            <div class="user-id">ID: USR-004</div>
                        </div>
                    </div>
                </td>
                <td>sarah.chen@company.com</td>
                <td>
                    <span class="role-tag user">User</span>
                </td>
                <td>
                    <div class="status-cell">
                        <div class="status-dot inactive"></div>
                        <span>Inactive</span>
                    </div>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-icon edit" title="Edit">✏️</button>
                        <button class="btn-icon delete" title="Delete">🗑️</button>
                        <button class="btn-icon more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="table-footer">
        <div class="pagination-info">
            Showing 1 to 4 of 100 entries
        </div>
        <div class="pagination">
            <button class="page-btn prev" disabled>‹ Previous</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-btn">10</button>
            <button class="page-btn next">Next ›</button>
        </div>
    </div>
</div>`,
    css: `.universal-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.table-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #fafafa;
    border-bottom: 1px solid #e8e8e8;
}

.search-box {
    position: relative;
    width: 300px;
}

.search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
}

.table-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.rows-select {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
}

.btn-export {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-export:hover {
    background: #5a6fd8;
}

.universal-table {
    width: 100%;
    border-collapse: collapse;
}

.universal-table th {
    padding: 1rem 1.25rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #f8f9fa;
    cursor: pointer;
    transition: background 0.3s ease;
}

.universal-table th:hover {
    background: #e9ecef;
}

.th-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sort-indicator {
    font-size: 0.8rem;
    opacity: 0.5;
    transition: opacity 0.3s ease;
}

.universal-table th:hover .sort-indicator {
    opacity: 1;
}

.universal-table td {
    padding: 1.25rem 1.25rem;
    color: #333;
    font-size: 0.9rem;
    border-bottom: 1px solid #f5f5f5;
    transition: background 0.3s ease;
}

.universal-table tr:hover td {
    background: #f8f9fa;
}

/* User Cell */
.user-cell {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar-sm {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.user-info .user-name {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.user-info .user-id {
    font-size: 0.75rem;
    color: #7f8c8d;
}

/* Role Tags */
.role-tag {
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.role-tag.admin {
    background: #fff0f0;
    color: #e74c3c;
}

.role-tag.editor {
    background: #fff3e0;
    color: #f39c12;
}

.role-tag.user {
    background: #e8f5e8;
    color: #27ae60;
}

/* Status Cell */
.status-cell {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.status-dot.active {
    background: #27ae60;
    animation: pulse 2s infinite;
}

.status-dot.pending {
    background: #f39c12;
}

.status-dot.inactive {
    background: #95a5a6;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn-icon {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.btn-icon:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.btn-icon.edit:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.btn-icon.delete:hover {
    background: #ffebee;
    border-color: #f44336;
}

/* Table Footer */
.table-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.pagination-info {
    font-size: 0.9rem;
    color: #666;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.page-btn:hover:not(:disabled) {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.page-ellipsis {
    padding: 0.5rem;
    color: #666;
}`,
    js: `// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('.universal-table tbody tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Sort functionality
document.querySelectorAll('.universal-table th').forEach(header => {
    header.addEventListener('click', function() {
        const table = this.closest('table');
        const headerIndex = Array.from(this.parentElement.children).indexOf(this);
        const rows = Array.from(table.querySelectorAll('tbody tr'));
        
        const isAscending = !this.classList.contains('asc');
        this.classList.toggle('asc', isAscending);
        this.classList.toggle('desc', !isAscending);
        
        rows.sort((a, b) => {
            const aText = a.children[headerIndex].textContent.trim();
            const bText = b.children[headerIndex].textContent.trim();
            
            if (isAscending) {
                return aText.localeCompare(bText);
            } else {
                return bText.localeCompare(aText);
            }
        });
        
        // Re-append sorted rows
        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    });
});

// Pagination
document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.disabled) return;
        
        document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // In real implementation, this would load the corresponding page data
        console.log('Page changed');
    });
});

// Export functionality
document.querySelector('.btn-export').addEventListener('click', function() {
    alert('Exporting data...');
    // In real implementation, this would trigger CSV/Excel download
});`
},

// ====================================================================
// MINIMAL TEMPLATE 27: PRICING COMPARISON
// ====================================================================
minimal27: {
    html: `<div class="pricing-table-container">
    <div class="pricing-header">
        <h2>Choose Your Plan</h2>
        <p>Select the perfect plan for your needs</p>
        <div class="billing-toggle">
            <span class="billing-option active">Monthly</span>
            <label class="toggle-switch">
                <input type="checkbox" id="billingToggle">
                <span class="toggle-slider"></span>
            </label>
            <span class="billing-option">Yearly <span class="discount-badge">Save 20%</span></span>
        </div>
    </div>
    
    <table class="pricing-table">
        <thead>
            <tr>
                <th class="feature-column">Features</th>
                <th class="plan-column">
                    <div class="plan-card basic">
                        <div class="plan-name">Basic</div>
                        <div class="plan-price">
                            <span class="currency">$</span>
                            <span class="amount">19</span>
                            <span class="period">/month</span>
                        </div>
                        <button class="btn-plan">Get Started</button>
                    </div>
                </th>
                <th class="plan-column popular">
                    <div class="plan-card pro">
                        <div class="popular-badge">Most Popular</div>
                        <div class="plan-name">Professional</div>
                        <div class="plan-price">
                            <span class="currency">$</span>
                            <span class="amount">49</span>
                            <span class="period">/month</span>
                        </div>
                        <button class="btn-plan primary">Try Free</button>
                    </div>
                </th>
                <th class="plan-column">
                    <div class="plan-card enterprise">
                        <div class="plan-name">Enterprise</div>
                        <div class="plan-price">
                            <span class="currency">$</span>
                            <span class="amount">99</span>
                            <span class="period">/month</span>
                        </div>
                        <button class="btn-plan">Contact Sales</button>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="feature-category">
                <td colspan="4">Core Features</td>
            </tr>
            <tr>
                <td>Number of Users</td>
                <td>1 user</td>
                <td>5 users</td>
                <td>Unlimited users</td>
            </tr>
            <tr>
                <td>Storage Space</td>
                <td>5 GB</td>
                <td>50 GB</td>
                <td>1 TB</td>
            </tr>
            <tr>
                <td>API Access</td>
                <td>❌</td>
                <td>✅ Limited</td>
                <td>✅ Full access</td>
            </tr>
            
            <tr class="feature-category">
                <td colspan="4">Support</td>
            </tr>
            <tr>
                <td>Email Support</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>Phone Support</td>
                <td>❌</td>
                <td>✅ Business hours</td>
                <td>✅ 24/7</td>
            </tr>
            <tr>
                <td>Dedicated Account Manager</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
            </tr>
            
            <tr class="feature-category">
                <td colspan="4">Security</td>
            </tr>
            <tr>
                <td>SSL Certificate</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>Two-Factor Authentication</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
            </tr>
            <tr>
                <td>SAML SSO</td>
                <td>❌</td>
                <td>❌</td>
                <td>✅</td>
            </tr>
        </tbody>
    </table>
    
    <div class="pricing-footer">
        <p>All plans include 30-day money-back guarantee</p>
    </div>
</div>`,
    css: `.pricing-table-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    max-width: 1000px;
    margin: 0 auto;
}

.pricing-header {
    text-align: center;
    padding: 3rem 2rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.pricing-header h2 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
}

.pricing-header p {
    margin: 0 0 2rem 0;
    opacity: 0.9;
    font-size: 1.1rem;
}

.billing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 500;
}

.billing-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.billing-option.active {
    color: #ffd700;
}

.discount-badge {
    background: #ffd700;
    color: #333;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 34px;
    transition: .4s;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: .4s;
}

input:checked + .toggle-slider {
    background: #ffd700;
}

input:checked + .toggle-slider:before {
    transform: translateX(30px);
}

.pricing-table {
    width: 100%;
    border-collapse: collapse;
}

.pricing-table th {
    padding: 0;
    vertical-align: top;
}

.feature-column {
    width: 30%;
    padding: 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.plan-column {
    width: 23.33%;
    padding: 0;
    border-left: 1px solid #e8e8e8;
}

.plan-column.popular {
    position: relative;
    background: #f8f9fa;
}

.plan-column.popular::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.popular-badge {
    background: linear-gradient(90deg, #667eea, #764ba2);
    color: white;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.plan-card {
    padding: 2rem 1.5rem;
    text-align: center;
}

.plan-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.plan-price {
    margin-bottom: 1.5rem;
}

.plan-price .currency {
    font-size: 1.5rem;
    font-weight: 600;
    color: #667eea;
    vertical-align: top;
}

.plan-price .amount {
    font-size: 3rem;
    font-weight: 700;
    color: #2c3e50;
    line-height: 1;
}

.plan-price .period {
    font-size: 0.9rem;
    color: #7f8c8d;
}

.btn-plan {
    width: 100%;
    padding: 1rem 1.5rem;
    border: 2px solid #667eea;
    background: white;
    color: #667eea;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-plan:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-plan.primary {
    background: #667eea;
    color: white;
}

.btn-plan.primary:hover {
    background: #5a6fd8;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.pricing-table td {
    padding: 1.25rem 1.5rem;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    color: #555;
    font-size: 0.95rem;
}

.pricing-table td:first-child {
    text-align: left;
    font-weight: 500;
    color: #333;
    background: #f8f9fa;
}

.feature-category td {
    background: #2c3e50;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 0.9rem;
}

.pricing-table tr:hover td:not(.feature-category td) {
    background: #f8f9fa;
}

.pricing-footer {
    text-align: center;
    padding: 2rem;
    background: #f8f9fa;
    border-top: 1px solid #e8e8e8;
    color: #666;
    font-size: 0.9rem;
}`,
    js: `// Billing toggle functionality
const billingToggle = document.getElementById('billingToggle');
const monthlyPrices = { basic: 19, pro: 49, enterprise: 99 };
const yearlyPrices = { basic: 15, pro: 39, enterprise: 79 };

billingToggle.addEventListener('change', function() {
    const isYearly = this.checked;
    const prices = isYearly ? yearlyPrices : monthlyPrices;
    
    // Update prices
    document.querySelectorAll('.plan-price .amount').forEach((element, index) => {
        const plan = ['basic', 'pro', 'enterprise'][index];
        element.textContent = prices[plan];
    });
    
    // Update period text
    document.querySelectorAll('.plan-price .period').forEach(element => {
        element.textContent = isYearly ? '/month' : '/month';
    });
    
    // Update billing option active states
    document.querySelectorAll('.billing-option').forEach((option, index) => {
        option.classList.toggle('active', index === (isYearly ? 1 : 0));
    });
});

// Plan selection
document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', function() {
        const planName = this.closest('.plan-card').querySelector('.plan-name').textContent;
        alert(\`Selected plan: \${planName}\`);
        // In real implementation, this would redirect to signup/payment
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 28: BLOG/CONTENT MANAGER
// ====================================================================
minimal28: {
    html: `<div class="content-table-container">
    <div class="content-header">
        <h2>Content Management</h2>
        <div class="content-actions">
            <button class="btn-new-post">+ New Post</button>
            <div class="view-options">
                <button class="view-option active" data-view="all">All Posts</button>
                <button class="view-option" data-view="published">Published</button>
                <button class="view-option" data-view="drafts">Drafts</button>
                <button class="view-option" data-view="scheduled">Scheduled</button>
            </div>
        </div>
    </div>
    
    <table class="content-table">
        <thead>
            <tr>
                <th class="title-column">Title</th>
                <th class="author-column">Author</th>
                <th class="date-column">Date</th>
                <th class="status-column">Status</th>
                <th class="stats-column">Stats</th>
                <th class="actions-column">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/667eea/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">Getting Started with Web Development</div>
                            <div class="post-category">Web Development • 5 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">JD</div>
                        <div class="author-name">John Doe</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 15, 2024</div>
                        <div class="publish-time">10:30 AM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge published">Published</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">1.2K</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">45</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">89</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn view" title="View">👁️</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/764ba2/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">Advanced CSS Techniques for 2024</div>
                            <div class="post-category">CSS • 8 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">JS</div>
                        <div class="author-name">Jane Smith</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 18, 2024</div>
                        <div class="publish-time">02:15 PM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge draft">Draft</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">-</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn preview" title="Preview">👁️</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/f39c12/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">JavaScript Performance Optimization</div>
                            <div class="post-category">JavaScript • 6 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">MJ</div>
                        <div class="author-name">Mike Johnson</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 20, 2024</div>
                        <div class="publish-time">09:00 AM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge scheduled">Scheduled</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">-</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">-</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn schedule" title="Reschedule">⏰</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="content-row">
                <td>
                    <div class="post-title">
                        <div class="post-thumbnail">
                            <img src="https://via.placeholder.com/60x40/27ae60/white?text=IMG" alt="Post thumbnail">
                        </div>
                        <div class="post-info">
                            <div class="post-name">Building Responsive Layouts with Flexbox</div>
                            <div class="post-category">CSS • 4 min read</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="author-info">
                        <div class="author-avatar">SC</div>
                        <div class="author-name">Sarah Chen</div>
                    </div>
                </td>
                <td>
                    <div class="date-info">
                        <div class="publish-date">Jan 22, 2024</div>
                        <div class="publish-time">11:45 AM</div>
                    </div>
                </td>
                <td>
                    <span class="status-badge published">Published</span>
                </td>
                <td>
                    <div class="post-stats">
                        <div class="stat">
                            <span class="stat-icon">👁️</span>
                            <span class="stat-value">856</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">💬</span>
                            <span class="stat-value">23</span>
                        </div>
                        <div class="stat">
                            <span class="stat-icon">❤️</span>
                            <span class="stat-value">67</span>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="content-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn view" title="View">👁️</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="content-footer">
        <div class="content-summary">
            Showing 4 of 128 posts
        </div>
        <div class="content-pagination">
            <button class="page-btn prev">‹</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-btn">12</button>
            <button class="page-btn next">›</button>
        </div>
    </div>
</div>`,
    css: `.content-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.content-header h2 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
}

.content-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.btn-new-post {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-new-post:hover {
    background: #5a6fd8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.view-options {
    display: flex;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
}

.view-option {
    padding: 0.5rem 1rem;
    border: none;
    background: white;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.view-option.active {
    background: #667eea;
    color: white;
}

.view-option:hover:not(.active) {
    background: #f5f5f5;
}

.content-table {
    width: 100%;
    border-collapse: collapse;
}

.content-table th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #fafafa;
}

.title-column { width: 35%; }
.author-column { width: 15%; }
.date-column { width: 15%; }
.status-column { width: 12%; }
.stats-column { width: 15%; }
.actions-column { width: 8%; }

.content-table td {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #f5f5f5;
    vertical-align: middle;
}

.content-row:hover td {
    background: #f8f9fa;
}

/* Post Title */
.post-title {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.post-thumbnail {
    width: 60px;
    height: 40px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
}

.post-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.post-info .post-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.post-info .post-category {
    font-size: 0.8rem;
    color: #7f8c8d;
}

/* Author Info */
.author-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.author-avatar {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.author-name {
    font-weight: 500;
    color: #333;
}

/* Date Info */
.date-info .publish-date {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.1rem;
}

.date-info .publish-time {
    font-size: 0.8rem;
    color: #7f8c8d;
}

/* Status Badges */
.status-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.status-badge.published {
    background: #e8f5e8;
    color: #27ae60;
}

.status-badge.draft {
    background: #fff3e0;
    color: #f39c12;
}

.status-badge.scheduled {
    background: #e3f2fd;
    color: #2980b9;
}

/* Post Stats */
.post-stats {
    display: flex;
    gap: 1rem;
}

.stat {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
}

.stat-icon {
    opacity: 0.7;
}

.stat-value {
    font-weight: 600;
    color: #333;
}

/* Content Actions */
.content-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.action-btn:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.action-btn.edit:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.action-btn.view:hover {
    background: #e8f5e8;
    border-color: #4caf50;
}

/* Content Footer */
.content-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.content-summary {
    font-size: 0.9rem;
    color: #666;
}

.content-pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.page-btn:hover:not(.active) {
    background: #f5f5f5;
}

.page-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-ellipsis {
    padding: 0.5rem;
    color: #666;
}`,
    js: `// View filtering
document.querySelectorAll('.view-option').forEach(option => {
    option.addEventListener('click', function() {
        const view = this.getAttribute('data-view');
        
        // Update active state
        document.querySelectorAll('.view-option').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Filter rows based on view
        document.querySelectorAll('.content-row').forEach(row => {
            const status = row.querySelector('.status-badge').classList[1];
            
            if (view === 'all') {
                row.style.display = '';
            } else {
                row.style.display = status === view ? '' : 'none';
            }
        });
        
        // Update summary
        const visibleRows = document.querySelectorAll('.content-row[style=""]').length;
        document.querySelector('.content-summary').textContent = \`Showing \${visibleRows} of 128 posts\`;
    });
});

// New post button
document.querySelector('.btn-new-post').addEventListener('click', function() {
    alert('Opening new post editor...');
    // In real implementation, this would open a post editor
});

// Action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title;
        const postTitle = this.closest('.content-row').querySelector('.post-name').textContent;
        
        switch(action) {
            case 'Edit':
                alert(\`Editing: "\${postTitle}"\`);
                break;
            case 'View':
                alert(\`Viewing: "\${postTitle}"\`);
                break;
            case 'Preview':
                alert(\`Previewing: "\${postTitle}"\`);
                break;
            case 'Reschedule':
                alert(\`Rescheduling: "\${postTitle}"\`);
                break;
        }
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 29: E-COMMERCE PRODUCTS
// ====================================================================
minimal29: {
    html: `<div class="ecommerce-table-container">
    <div class="ecommerce-header">
        <h2>Product Inventory</h2>
        <div class="product-actions">
            <div class="search-products">
                <input type="text" placeholder="Search products..." class="search-input">
                <span class="search-icon">🔍</span>
            </div>
            <button class="btn-add-product">+ Add Product</button>
        </div>
    </div>
    
    <table class="ecommerce-table">
        <thead>
            <tr>
                <th class="product-column">Product</th>
                <th class="price-column">Price</th>
                <th class="stock-column">Stock</th>
                <th class="category-column">Category</th>
                <th class="status-column">Status</th>
                <th class="sales-column">Sales</th>
                <th class="actions-column">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/667eea/white?text=P1" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">Wireless Bluetooth Earbuds</div>
                            <div class="product-sku">SKU: WB-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$129.99</div>
                        <div class="original-price">$149.99</div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level high">45 in stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 90%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag electronics">Electronics</span>
                </td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">128 sold</div>
                        <div class="sales-trend up">+15%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/764ba2/white?text=P2" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">Smart Fitness Watch</div>
                            <div class="product-sku">SKU: SF-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$199.99</div>
                        <div class="original-price"></div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level medium">12 in stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 24%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag wearables">Wearables</span>
                </td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">89 sold</div>
                        <div class="sales-trend up">+8%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/f39c12/white?text=P3" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">USB-C Hub Adapter</div>
                            <div class="product-sku">SKU: UC-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$39.99</div>
                        <div class="original-price">$49.99</div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level low">3 in stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 6%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag accessories">Accessories</span>
                </td>
                <td>
                    <span class="status-badge active">Active</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">256 sold</div>
                        <div class="sales-trend up">+22%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
            <tr class="product-row">
                <td>
                    <div class="product-cell">
                        <div class="product-image">
                            <img src="https://via.placeholder.com/50x50/e74c3c/white?text=P4" alt="Product image">
                        </div>
                        <div class="product-details">
                            <div class="product-name">Gaming Mechanical Keyboard</div>
                            <div class="product-sku">SKU: GM-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="price-info">
                        <div class="current-price">$89.99</div>
                        <div class="original-price"></div>
                    </div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level out">Out of stock</div>
                        <div class="stock-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag electronics">Electronics</span>
                </td>
                <td>
                    <span class="status-badge inactive">Inactive</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">67 sold</div>
                        <div class="sales-trend down">-5%</div>
                    </div>
                </td>
                <td>
                    <div class="product-actions">
                        <button class="action-btn edit" title="Edit">✏️</button>
                        <button class="action-btn duplicate" title="Duplicate">📋</button>
                        <button class="action-btn more" title="More">⋯</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="ecommerce-footer">
        <div class="inventory-summary">
            <div class="summary-item">
                <span class="summary-label">Total Products:</span>
                <span class="summary-value">48</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Low Stock:</span>
                <span class="summary-value">3</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">Out of Stock:</span>
                <span class="summary-value">1</span>
            </div>
        </div>
        <div class="ecommerce-pagination">
            <button class="page-btn prev">‹</button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-btn">5</button>
            <button class="page-btn next">›</button>
        </div>
    </div>
</div>`,
    css: `.ecommerce-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.ecommerce-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.ecommerce-header h2 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
}

.product-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.search-products {
    position: relative;
    width: 250px;
}

.search-input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.search-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
}

.btn-add-product {
    background: #27ae60;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-add-product:hover {
    background: #219a52;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
}

.ecommerce-table {
    width: 100%;
    border-collapse: collapse;
}

.ecommerce-table th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #fafafa;
}

.product-column { width: 25%; }
.price-column { width: 12%; }
.stock-column { width: 15%; }
.category-column { width: 12%; }
.status-column { width: 10%; }
.sales-column { width: 12%; }
.actions-column { width: 8%; }

.ecommerce-table td {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #f5f5f5;
    vertical-align: middle;
}

.product-row:hover td {
    background: #f8f9fa;
}

/* Product Cell */
.product-cell {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.product-image {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    background: #f5f5f5;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-details .product-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.product-details .product-sku {
    font-size: 0.8rem;
    color: #7f8c8d;
}

/* Price Info */
.price-info .current-price {
    font-weight: 700;
    color: #2c3e50;
    font-size: 1rem;
}

.price-info .original-price {
    font-size: 0.8rem;
    color: #95a5a6;
    text-decoration: line-through;
}

/* Stock Info */
.stock-level {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.stock-level.high {
    color: #27ae60;
}

.stock-level.medium {
    color: #f39c12;
}

.stock-level.low {
    color: #e74c3c;
}

.stock-level.out {
    color: #95a5a6;
}

.stock-progress {
    width: 80px;
}

.progress-bar {
    width: 100%;
    height: 4px;
    background: #ecf0f1;
    border-radius: 2px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 0.3s ease;
}

.stock-level.high ~ .stock-progress .progress-fill {
    background: #27ae60;
}

.stock-level.medium ~ .stock-progress .progress-fill {
    background: #f39c12;
}

.stock-level.low ~ .stock-progress .progress-fill {
    background: #e74c3c;
}

/* Category Tags */
.category-tag {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.category-tag.electronics {
    background: #e3f2fd;
    color: #1976d2;
}

.category-tag.wearables {
    background: #f3e5f5;
    color: #7b1fa2;
}

.category-tag.accessories {
    background: #fff3e0;
    color: #f57c00;
}

/* Status Badges */
.status-badge.active {
    background: #e8f5e8;
    color: #27ae60;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-badge.inactive {
    background: #f5f5f5;
    color: #95a5a6;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

/* Sales Info */
.sales-info {
    text-align: center;
}

.sales-count {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
}

.sales-trend {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
}

.sales-trend.up {
    background: #e8f5e8;
    color: #27ae60;
}

.sales-trend.down {
    background: #ffebee;
    color: #e74c3c;
}

/* Product Actions */
.product-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.action-btn:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.action-btn.edit:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.action-btn.duplicate:hover {
    background: #fff3e0;
    border-color: #ff9800;
}

/* E-commerce Footer */
.ecommerce-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.inventory-summary {
    display: flex;
    gap: 2rem;
}

.summary-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.summary-label {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.25rem;
}

.summary-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
}

.ecommerce-pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.page-btn {
    padding: 0.5rem 0.75rem;
    border: 1px solid #ddd;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.page-btn:hover:not(.active) {
    background: #f5f5f5;
}

.page-btn.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
}

.page-ellipsis {
    padding: 0.5rem;
    color: #666;
}`,
    js: `// Search functionality
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('.product-row');
    
    rows.forEach(row => {
        const productName = row.querySelector('.product-name').textContent.toLowerCase();
        const productSku = row.querySelector('.product-sku').textContent.toLowerCase();
        const text = productName + ' ' + productSku;
        
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Add product button
document.querySelector('.btn-add-product').addEventListener('click', function() {
    alert('Opening product creation form...');
    // In real implementation, this would open a product form
});

// Stock level warnings
document.querySelectorAll('.stock-level').forEach(level => {
    if (level.classList.contains('low') || level.classList.contains('out')) {
        level.closest('.product-row').style.background = '#fff9e6';
        
        // Add warning icon
        const warningIcon = document.createElement('span');
        warningIcon.textContent = '⚠️';
        warningIcon.style.marginLeft = '0.5rem';
        level.appendChild(warningIcon);
    }
});

// Action buttons
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title;
        const productName = this.closest('.product-row').querySelector('.product-name').textContent;
        
        switch(action) {
            case 'Edit':
                alert(\`Editing product: "\${productName}"\`);
                break;
            case 'Duplicate':
                alert(\`Duplicating product: "\${productName}"\`);
                break;
        }
    });
});`
},

// ====================================================================
// MINIMAL TEMPLATE 30: CONTACT DIRECTORY
// ====================================================================
minimal30: {
    html: `<div class="contact-table-container">
    <div class="contact-header">
        <h2>Team Directory</h2>
        <div class="contact-filters">
            <div class="filter-group">
                <label>Department:</label>
                <select class="department-filter">
                    <option value="all">All Departments</option>
                    <option value="engineering">Engineering</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                </select>
            </div>
            <div class="filter-group">
                <label>Location:</label>
                <select class="location-filter">
                    <option value="all">All Locations</option>
                    <option value="new-york">New York</option>
                    <option value="san-francisco">San Francisco</option>
                    <option value="london">London</option>
                    <option value="tokyo">Tokyo</option>
                </select>
            </div>
        </div>
    </div>
    
    <table class="contact-table">
        <thead>
            <tr>
                <th class="contact-column">Contact</th>
                <th class="role-column">Role</th>
                <th class="department-column">Department</th>
                <th class="location-column">Location</th>
                <th class="contact-info-column">Contact Info</th>
                <th class="availability-column">Availability</th>
                <th class="quick-actions-column">Quick Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/667eea/white?text=JS" alt="John Smith">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">John Smith</div>
                            <div class="contact-title">Senior Developer</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag senior">Senior Dev</span>
                </td>
                <td>
                    <span class="department engineering">Engineering</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇺🇸</span>
                        <span class="location-name">New York</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">john.smith@company.com</div>
                        <div class="contact-phone">+1 (555) 123-4567</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status available">
                        <div class="status-indicator"></div>
                        <span>Available</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/764ba2/white?text=SC" alt="Sarah Chen">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">Sarah Chen</div>
                            <div class="contact-title">Product Designer</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag designer">Designer</span>
                </td>
                <td>
                    <span class="department design">Design</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇺🇸</span>
                        <span class="location-name">San Francisco</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">sarah.chen@company.com</div>
                        <div class="contact-phone">+1 (555) 987-6543</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status away">
                        <div class="status-indicator"></div>
                        <span>Away</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/f39c12/white?text=MJ" alt="Mike Johnson">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">Mike Johnson</div>
                            <div class="contact-title">Sales Manager</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag manager">Manager</span>
                </td>
                <td>
                    <span class="department sales">Sales</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇬🇧</span>
                        <span class="location-name">London</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">mike.johnson@company.com</div>
                        <div class="contact-phone">+44 20 7946 0958</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status busy">
                        <div class="status-indicator"></div>
                        <span>In a Meeting</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
            <tr class="contact-row">
                <td>
                    <div class="contact-card">
                        <div class="contact-avatar">
                            <img src="https://via.placeholder.com/48x48/27ae60/white?text=ED" alt="Emily Davis">
                        </div>
                        <div class="contact-details">
                            <div class="contact-name">Emily Davis</div>
                            <div class="contact-title">Support Specialist</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="role-tag specialist">Specialist</span>
                </td>
                <td>
                    <span class="department support">Support</span>
                </td>
                <td>
                    <div class="location-info">
                        <span class="location-flag">🇯🇵</span>
                        <span class="location-name">Tokyo</span>
                    </div>
                </td>
                <td>
                    <div class="contact-info">
                        <div class="contact-email">emily.davis@company.com</div>
                        <div class="contact-phone">+81 3 1234 5678</div>
                    </div>
                </td>
                <td>
                    <div class="availability-status available">
                        <div class="status-indicator"></div>
                        <span>Available</span>
                    </div>
                </td>
                <td>
                    <div class="quick-actions">
                        <button class="action-btn email" title="Send Email">✉️</button>
                        <button class="action-btn call" title="Call">📞</button>
                        <button class="action-btn message" title="Message">💬</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
    <div class="contact-footer">
        <div class="contact-stats">
            <div class="stat-item">
                <span class="stat-label">Total Contacts:</span>
                <span class="stat-value">48</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Online Now:</span>
                <span class="stat-value">12</span>
            </div>
        </div>
        <div class="contact-export">
            <button class="btn-export-contacts">Export Contacts</button>
        </div>
    </div>
</div>`,
    css: `.contact-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.contact-header {
    padding: 2rem;
    background: #f8f9fa;
    border-bottom: 1px solid #e8e8e8;
}

.contact-header h2 {
    margin: 0 0 1.5rem 0;
    color: #2c3e50;
    font-size: 1.5rem;
    font-weight: 600;
}

.contact-filters {
    display: flex;
    gap: 2rem;
}

.filter-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.filter-group label {
    font-weight: 500;
    color: #555;
    font-size: 0.9rem;
}

.department-filter,
.location-filter {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background: white;
    font-size: 0.9rem;
    min-width: 150px;
}

.contact-table {
    width: 100%;
    border-collapse: collapse;
}

.contact-table th {
    padding: 1.25rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #555;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid #e8e8e8;
    background: #fafafa;
}

.contact-column { width: 22%; }
.role-column { width: 12%; }
.department-column { width: 12%; }
.location-column { width: 12%; }
.contact-info-column { width: 20%; }
.availability-column { width: 12%; }
.quick-actions-column { width: 10%; }

.contact-table td {
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #f5f5f5;
    vertical-align: middle;
}

.contact-row:hover td {
    background: #f8f9fa;
}

/* Contact Card */
.contact-card {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.contact-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
    background: #f5f5f5;
}

.contact-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contact-details .contact-name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
    line-height: 1.3;
}

.contact-details .contact-title {
    font-size: 0.85rem;
    color: #7f8c8d;
}

/* Role Tags */
.role-tag {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.role-tag.senior {
    background: #e3f2fd;
    color: #1976d2;
}

.role-tag.designer {
    background: #f3e5f5;
    color: #7b1fa2;
}

.role-tag.manager {
    background: #fff3e0;
    color: #f57c00;
}

.role-tag.specialist {
    background: #e8f5e8;
    color: #388e3c;
}

/* Department */
.department {
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 500;
}

.department.engineering {
    background: #e3f2fd;
    color: #1976d2;
}

.department.design {
    background: #f3e5f5;
    color: #7b1fa2;
}

.department.sales {
    background: #fff3e0;
    color: #f57c00;
}

.department.support {
    background: #e8f5e8;
    color: #388e3c;
}

/* Location Info */
.location-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.location-flag {
    font-size: 1.2rem;
}

.location-name {
    font-weight: 500;
    color: #333;
}

/* Contact Info */
.contact-info .contact-email {
    font-weight: 500;
    color: #2c3e50;
    margin-bottom: 0.25rem;
}

.contact-info .contact-phone {
    font-size: 0.85rem;
    color: #7f8c8d;
}

/* Availability Status */
.availability-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 500;
}

.availability-status.available {
    background: #e8f5e8;
    color: #27ae60;
}

.availability-status.away {
    background: #fff3e0;
    color: #f39c12;
}

.availability-status.busy {
    background: #ffebee;
    color: #e74c3c;
}

.status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: statusPulse 2s infinite;
}

.availability-status.available .status-indicator {
    background: #27ae60;
}

.availability-status.away .status-indicator {
    background: #f39c12;
}

.availability-status.busy .status-indicator {
    background: #e74c3c;
}

@keyframes statusPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

/* Quick Actions */
.quick-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: none;
    border: 1px solid #e0e0e0;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.8rem;
}

.action-btn:hover {
    background: #f5f5f5;
    transform: scale(1.1);
}

.action-btn.email:hover {
    background: #e3f2fd;
    border-color: #2196f3;
}

.action-btn.call:hover {
    background: #e8f5e8;
    border-color: #4caf50;
}

.action-btn.message:hover {
    background: #fff3e0;
    border-color: #ff9800;
}

/* Contact Footer */
.contact-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: #fafafa;
    border-top: 1px solid #e8e8e8;
}

.contact-stats {
    display: flex;
    gap: 2rem;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-label {
    font-size: 0.8rem;
    color: #666;
    margin-bottom: 0.25rem;
}

.stat-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2c3e50;
}

.btn-export-contacts {
    background: #667eea;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn-export-contacts:hover {
    background: #5a6fd8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}`,
    js: `// Filter functionality
const departmentFilter = document.querySelector('.department-filter');
const locationFilter = document.querySelector('.location-filter');

function filterContacts() {
    const department = departmentFilter.value;
    const location = locationFilter.value;
    const rows = document.querySelectorAll('.contact-row');
    
    rows.forEach(row => {
        const rowDepartment = row.querySelector('.department').textContent.toLowerCase();
        const rowLocation = row.querySelector('.location-name').textContent.toLowerCase().replace(' ', '-');
        
        const departmentMatch = department === 'all' || rowDepartment === department;
        const locationMatch = location === 'all' || rowLocation === location;
        
        row.style.display = departmentMatch && locationMatch ? '' : 'none';
    });
}

departmentFilter.addEventListener('change', filterContacts);
locationFilter.addEventListener('change', filterContacts);

// Quick actions
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title;
        const contactName = this.closest('.contact-row').querySelector('.contact-name').textContent;
        
        switch(action) {
            case 'Send Email':
                alert(\`Composing email to \${contactName}\`);
                break;
            case 'Call':
                alert(\`Calling \${contactName}\`);
                break;
            case 'Message':
                alert(\`Messaging \${contactName}\`);
                break;
        }
    });
});

// Export contacts
document.querySelector('.btn-export-contacts').addEventListener('click', function() {
    alert('Exporting contact list...');
    // In real implementation, this would export contacts as CSV/vCard
});

// Update online status randomly (for demo)
setInterval(() => {
    document.querySelectorAll('.availability-status').forEach(status => {
        if (Math.random() > 0.7) {
            const states = ['available', 'away', 'busy'];
            const currentState = status.classList[1];
            let newState;
            
            do {
                newState = states[Math.floor(Math.random() * states.length)];
            } while (newState === currentState);
            
            status.classList.remove(currentState);
            status.classList.add(newState);
            
            const statusText = status.querySelector('span:last-child');
            switch(newState) {
                case 'available':
                    statusText.textContent = 'Available';
                    break;
                case 'away':
                    statusText.textContent = 'Away';
                    break;
                case 'busy':
                    statusText.textContent = 'In a Meeting';
                    break;
            }
        }
    });
}, 10000);`
},
    // ====================================================================
    // ANALYTICS TEMPLATE 1: WEBSITE TRAFFIC
    // ====================================================================
    analytics1: {
        html: `<div class="analytics-table-container">
    <div class="analytics-header">
        <h3>Website Traffic Analytics</h3>
        <div class="date-range">Last 30 Days</div>
    </div>
    <div class="metrics-summary">
        <div class="metric-card">
            <div class="metric-value">124,580</div>
            <div class="metric-label">Total Visits</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">2:45</div>
            <div class="metric-label">Avg. Duration</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">41.2%</div>
            <div class="metric-label">Bounce Rate</div>
        </div>
    </div>
    <table class="analytics-table traffic-table">
        <thead>
            <tr>
                <th>Page URL</th>
                <th>Pageviews</th>
                <th>Unique Visitors</th>
                <th>Bounce Rate</th>
                <th>Avg. Time</th>
                <th>Conversion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">Homepage</span>
                        <span class="full-url">/index.html</span>
                    </div>
                </td>
                <td>45,230</td>
                <td>32,150</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">38.5%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 38.5%"></div>
                        </div>
                    </div>
                </td>
                <td>2:15</td>
                <td>4.2%</td>
            </tr>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">Product Catalog</span>
                        <span class="full-url">/products</span>
                    </div>
                </td>
                <td>32,890</td>
                <td>24,670</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">42.1%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 42.1%"></div>
                        </div>
                    </div>
                </td>
                <td>3:45</td>
                <td>6.8%</td>
            </tr>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">About Us</span>
                        <span class="full-url">/about</span>
                    </div>
                </td>
                <td>18,450</td>
                <td>15,230</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">51.3%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 51.3%"></div>
                        </div>
                    </div>
                </td>
                <td>1:30</td>
                <td>1.2%</td>
            </tr>
            <tr>
                <td class="page-url">
                    <div class="url-info">
                        <span class="page-name">Contact Page</span>
                        <span class="full-url">/contact</span>
                    </div>
                </td>
                <td>12,560</td>
                <td>10,890</td>
                <td>
                    <div class="metric-with-bar">
                        <span class="metric-value">28.9%</span>
                        <div class="metric-bar">
                            <div class="bar-fill" style="width: 28.9%"></div>
                        </div>
                    </div>
                </td>
                <td>4:20</td>
                <td>8.5%</td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.analytics-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.analytics-header {
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.analytics-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.date-range {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
}

.metrics-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.metric-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.metric-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.metric-label {
    font-size: 0.875rem;
    color: #6b7280;
}

.analytics-table {
    width: 100%;
    border-collapse: collapse;
}

.analytics-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.analytics-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.analytics-table tr:hover {
    background: #f9fafb;
}

.page-url .url-info {
    display: flex;
    flex-direction: column;
}

.page-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.full-url {
    font-size: 0.75rem;
    color: #9ca3af;
    font-family: monospace;
}

.metric-with-bar {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.metric-bar {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
}

.bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    border-radius: 3px;
    transition: width 0.3s ease;
}`,
        js: `// Animate metric bars on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bar-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 2: USER ACQUISITION
    // ====================================================================
    analytics2: {
        html: `<div class="acquisition-table-container">
    <div class="acquisition-header">
        <h3>User Acquisition Channels</h3>
        <div class="time-filter">
            <select class="period-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option selected>Last 90 Days</option>
                <option>Year to Date</option>
            </select>
        </div>
    </div>
    <table class="acquisition-table">
        <thead>
            <tr>
                <th>Traffic Source</th>
                <th>Users</th>
                <th>New Users</th>
                <th>Sessions</th>
                <th>Bounce Rate</th>
                <th>Conversion</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">🔍</div>
                        <div class="source-details">
                            <div class="source-name">Organic Search</div>
                            <div class="source-description">Google, Bing, etc.</div>
                        </div>
                    </div>
                </td>
                <td>45,230</td>
                <td>32,150</td>
                <td>67,890</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">38.5%</span>
                        <div class="rate-indicator low">Low</div>
                    </div>
                </td>
                <td>4.2%</td>
                <td class="trend-cell">
                    <div class="trend positive">+12% ↗</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">📱</div>
                        <div class="source-details">
                            <div class="source-name">Social Media</div>
                            <div class="source-description">Facebook, Twitter, Instagram</div>
                        </div>
                    </div>
                </td>
                <td>28,450</td>
                <td>18,230</td>
                <td>42,670</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">52.1%</span>
                        <div class="rate-indicator medium">Medium</div>
                    </div>
                </td>
                <td>2.8%</td>
                <td class="trend-cell">
                    <div class="trend positive">+8% ↗</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">📧</div>
                        <div class="source-details">
                            <div class="source-name">Email Marketing</div>
                            <div class="source-description">Newsletter campaigns</div>
                        </div>
                    </div>
                </td>
                <td>15,670</td>
                <td>2,340</td>
                <td>18,920</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">28.9%</span>
                        <div class="rate-indicator low">Low</div>
                    </div>
                </td>
                <td>6.5%</td>
                <td class="trend-cell">
                    <div class="trend positive">+15% ↗</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">💼</div>
                        <div class="source-details">
                            <div class="source-name">Direct Traffic</div>
                            <div class="source-description">Direct URL entry</div>
                        </div>
                    </div>
                </td>
                <td>12,340</td>
                <td>8,450</td>
                <td>15,670</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">45.6%</span>
                        <div class="rate-indicator medium">Medium</div>
                    </div>
                </td>
                <td>3.2%</td>
                <td class="trend-cell">
                    <div class="trend negative">-5% ↘</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="source-info">
                        <div class="source-icon">🛒</div>
                        <div class="source-details">
                            <div class="source-name">Referral</div>
                            <div class="source-description">Other websites</div>
                        </div>
                    </div>
                </td>
                <td>8,920</td>
                <td>6,780</td>
                <td>12,450</td>
                <td>
                    <div class="rate-display">
                        <span class="rate-value">61.2%</span>
                        <div class="rate-indicator high">High</div>
                    </div>
                </td>
                <td>1.8%</td>
                <td class="trend-cell">
                    <div class="trend positive">+3% ↗</div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.acquisition-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.acquisition-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: #f8fafc;
    border-bottom: 1px solid #e5e7eb;
}

.acquisition-header h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 600;
}

.period-select {
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    background: white;
    font-size: 0.875rem;
}

.acquisition-table {
    width: 100%;
    border-collapse: collapse;
}

.acquisition-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.acquisition-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.acquisition-table tr:hover {
    background: #f9fafb;
}

.source-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.source-icon {
    font-size: 1.25rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f4f6;
    border-radius: 8px;
}

.source-details .source-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.source-details .source-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.rate-display {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.rate-indicator {
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
}

.rate-indicator.low {
    background: #d1fae5;
    color: #065f46;
}

.rate-indicator.medium {
    background: #fef3c7;
    color: #92400e;
}

.rate-indicator.high {
    background: #fee2e2;
    color: #991b1b;
}

.trend {
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.trend.positive {
    background: #d1fae5;
    color: #065f46;
}

.trend.negative {
    background: #fee2e2;
    color: #991b1b;
}`,
        js: `// Time period filtering for acquisition data
document.querySelector('.period-select').addEventListener('change', function(e) {
    const selectedPeriod = e.target.value;
    console.log(\`Loading acquisition data for: \${selectedPeriod}\`);
    // In real implementation, this would fetch new data
});`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 3: REAL-TIME ANALYTICS
    // ====================================================================
    analytics3: {
        html: `<div class="realtime-table-container">
    <div class="realtime-header">
        <div class="realtime-title">
            <h3>Real-time Analytics Dashboard</h3>
            <div class="live-indicator">
                <span class="pulse"></span>
                LIVE
            </div>
        </div>
        <div class="realtime-stats">
            <div class="stat">
                <div class="stat-value">1,245</div>
                <div class="stat-label">Active Now</div>
            </div>
        </div>
    </div>
    <table class="realtime-table">
        <thead>
            <tr>
                <th>Country</th>
                <th>Active Users</th>
                <th>Pageviews</th>
                <th>Avg. Session</th>
                <th>Current Activity</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇺🇸</span>
                        <span class="country-name">United States</span>
                    </div>
                </td>
                <td>456</td>
                <td>2,345</td>
                <td>3:45</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Viewing products</span>
                        <span class="activity">Added to cart</span>
                        <span class="activity">Checking out</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 12%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇬🇧</span>
                        <span class="country-name">United Kingdom</span>
                    </div>
                </td>
                <td>234</td>
                <td>1,567</td>
                <td>4:12</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Reading blog</span>
                        <span class="activity">Contact form</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 8%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇨🇦</span>
                        <span class="country-name">Canada</span>
                    </div>
                </td>
                <td>189</td>
                <td>987</td>
                <td>2:56</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Product search</span>
                        <span class="activity">Price comparison</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend negative">↘ 5%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇦🇺</span>
                        <span class="country-name">Australia</span>
                    </div>
                </td>
                <td>156</td>
                <td>845</td>
                <td>3:23</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Account login</span>
                        <span class="activity">Order history</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 15%</div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="country-info">
                        <span class="flag">🇩🇪</span>
                        <span class="country-name">Germany</span>
                    </div>
                </td>
                <td>134</td>
                <td>723</td>
                <td>5:12</td>
                <td>
                    <div class="activity-stream">
                        <span class="activity">Technical specs</span>
                        <span class="activity">Support page</span>
                    </div>
                </td>
                <td class="trend-cell">
                    <div class="trend positive">↗ 22%</div>
                </td>
            </tr>
        </tbody>
    </table>
    <div class="realtime-footer">
        <div class="update-time">Last updated: <span class="time">Just now</span></div>
        <button class="btn-refresh">Refresh Data</button>
    </div>
</div>`,
        css: `.realtime-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.realtime-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #1e40af, #3730a3);
    color: white;
}

.realtime-title {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.realtime-title h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.pulse {
    width: 8px;
    height: 8px;
    background: #10b981;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}

.realtime-stats {
    text-align: right;
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.stat-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.realtime-table {
    width: 100%;
    border-collapse: collapse;
}

.realtime-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.realtime-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.realtime-table tr:hover {
    background: #f9fafb;
}

.country-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.flag {
    font-size: 1.25rem;
}

.country-name {
    font-weight: 600;
    color: #1f2937;
}

.activity-stream {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.activity {
    background: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: #6b7280;
}

.trend {
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
}

.trend.positive {
    background: #d1fae5;
    color: #065f46;
}

.trend.negative {
    background: #fee2e2;
    color: #991b1b;
}

.realtime-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background: #f8fafc;
    border-top: 1px solid #e5e7eb;
}

.update-time {
    font-size: 0.875rem;
    color: #6b7280;
}

.update-time .time {
    font-weight: 600;
    color: #1f2937;
}

.btn-refresh {
    background: #7c3aed;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background 0.3s;
}

.btn-refresh:hover {
    background: #6d28d9;
}`,
        js: `// Real-time data simulation
function updateRealTimeData() {
    const timeElement = document.querySelector('.update-time .time');
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
    
    // Simulate data updates
    const activeUsers = Math.floor(Math.random() * 100) + 1200;
    document.querySelector('.stat-value').textContent = activeUsers.toLocaleString();
}

// Update every 10 seconds
setInterval(updateRealTimeData, 10000);

// Manual refresh
document.querySelector('.btn-refresh').addEventListener('click', updateRealTimeData);

// Initial update
updateRealTimeData();`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 4: E-COMMERCE ANALYTICS
    // ====================================================================
    analytics4: {
        html: `<div class="ecommerce-table-container">
    <div class="ecommerce-header">
        <h3>E-commerce Performance Dashboard</h3>
        <div class="revenue-summary">
            <div class="revenue-figure">$284,560</div>
            <div class="revenue-label">Total Revenue</div>
        </div>
    </div>
    <table class="ecommerce-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Units Sold</th>
                <th>Revenue</th>
                <th>Profit Margin</th>
                <th>Inventory</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">MacBook Pro 16"</div>
                        <div class="product-sku">SKU: MBP-16-2024</div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>$2,399</td>
                <td>89</td>
                <td>$213,511</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">32%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 32%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">45</span>
                        <div class="inventory-indicator high">In Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">iPhone 15 Pro</div>
                        <div class="product-sku">SKU: IP15-PRO-256</div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>$1,199</td>
                <td>156</td>
                <td>$187,044</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">28%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 28%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">23</span>
                        <div class="inventory-indicator medium">Low Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">AirPods Pro</div>
                        <div class="product-sku">SKU: AP-PRO-2</div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>$249</td>
                <td>289</td>
                <td>$71,961</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">35%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 35%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">67</span>
                        <div class="inventory-indicator high">In Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">iPad Air</div>
                        <div class="product-sku">SKU: IPA-5TH-GEN</div>
                    </div>
                </td>
                <td>Tablets</td>
                <td>$599</td>
                <td>78</td>
                <td>$46,722</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">30%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 30%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">0</span>
                        <div class="inventory-indicator out">Out of Stock</div>
                    </div>
                </td>
                <td><span class="product-status inactive">Inactive</span></td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-name">Apple Watch</div>
                        <div class="product-sku">SKU: AW-SE-2</div>
                    </div>
                </td>
                <td>Wearables</td>
                <td>$249</td>
                <td>134</td>
                <td>$33,366</td>
                <td>
                    <div class="margin-display">
                        <span class="margin-value">25%</span>
                        <div class="margin-bar">
                            <div class="margin-fill" style="width: 25%"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="inventory-status">
                        <span class="inventory-count">12</span>
                        <div class="inventory-indicator medium">Low Stock</div>
                    </div>
                </td>
                <td><span class="product-status active">Active</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.ecommerce-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.ecommerce-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #059669, #10b981);
    color: white;
}

.ecommerce-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.revenue-summary {
    text-align: right;
}

.revenue-figure {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.revenue-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.ecommerce-table {
    width: 100%;
    border-collapse: collapse;
}

.ecommerce-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.ecommerce-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.ecommerce-table tr:hover {
    background: #f9fafb;
}

.product-info .product-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.product-info .product-sku {
    font-size: 0.75rem;
    color: #9ca3af;
    font-family: monospace;
}

.margin-display {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.margin-bar {
    flex: 1;
    height: 6px;
    background: #e5e7eb;
    border-radius: 3px;
    overflow: hidden;
    min-width: 60px;
}

.margin-fill {
    height: 100%;
    background: linear-gradient(90deg, #10b981, #059669);
    border-radius: 3px;
}

.inventory-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.inventory-count {
    font-weight: 600;
    color: #1f2937;
}

.inventory-indicator {
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
}

.inventory-indicator.high {
    background: #d1fae5;
    color: #065f46;
}

.inventory-indicator.medium {
    background: #fef3c7;
    color: #92400e;
}

.inventory-indicator.out {
    background: #fee2e2;
    color: #991b1b;
}

.product-status {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.product-status.active {
    background: #d1fae5;
    color: #065f46;
}

.product-status.inactive {
    background: #f3f4f6;
    color: #6b7280;
}`,
        js: `// Animate margin bars on load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.margin-fill').forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});`
    },

    // ====================================================================
    // ANALYTICS TEMPLATE 5: PERFORMANCE METRICS
    // ====================================================================
    analytics5: {
        html: `<div class="performance-table-container">
    <div class="performance-header">
        <h3>Website Performance Metrics</h3>
        <div class="performance-score">
            <div class="score-value">87</div>
            <div class="score-label">Performance Score</div>
        </div>
    </div>
    <table class="performance-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Target</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Page Load Time</div>
                        <div class="metric-description">Time to first contentful paint</div>
                    </div>
                </td>
                <td>1.2s</td>
                <td>1.8s</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-33%</span>
                    </div>
                </td>
                <td>&lt; 2.0s</td>
                <td><span class="status-badge excellent">Excellent</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">First Input Delay</div>
                        <div class="metric-description">Time to first user interaction</div>
                    </div>
                </td>
                <td>85ms</td>
                <td>120ms</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-29%</span>
                    </div>
                </td>
                <td>&lt; 100ms</td>
                <td><span class="status-badge good">Good</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Largest Contentful Paint</div>
                        <div class="metric-description">Time to render main content</div>
                    </div>
                </td>
                <td>2.1s</td>
                <td>2.8s</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-25%</span>
                    </div>
                </td>
                <td>&lt; 2.5s</td>
                <td><span class="status-badge good">Good</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Cumulative Layout Shift</div>
                        <div class="metric-description">Visual stability score</div>
                    </div>
                </td>
                <td>0.08</td>
                <td>0.12</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">-33%</span>
                    </div>
                </td>
                <td>&lt; 0.1</td>
                <td><span class="status-badge excellent">Excellent</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Conversion Rate</div>
                        <div class="metric-description">Percentage of converting visitors</div>
                    </div>
                </td>
                <td>4.5%</td>
                <td>3.8%</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">+18%</span>
                    </div>
                </td>
                <td>&gt; 4.0%</td>
                <td><span class="status-badge excellent">Excellent</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Bounce Rate</div>
                        <div class="metric-description">Percentage of single-page sessions</div>
                    </div>
                </td>
                <td>42.3%</td>
                <td>38.5%</td>
                <td>
                    <div class="change-display negative">
                        <span class="change-icon">↘</span>
                        <span class="change-value">+9.8%</span>
                    </div>
                </td>
                <td>&lt; 40%</td>
                <td><span class="status-badge needs-improvement">Needs Improvement</span></td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <div class="metric-name">Mobile Responsiveness</div>
                        <div class="metric-description">Mobile usability score</div>
                    </div>
                </td>
                <td>94%</td>
                <td>92%</td>
                <td>
                    <div class="change-display positive">
                        <span class="change-icon">↗</span>
                        <span class="change-value">+2.2%</span>
                    </div>
                </td>
                <td>&gt; 95%</td>
                <td><span class="status-badge good">Good</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `.performance-table-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #e5e7eb;
}

.performance-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
}

.performance-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.performance-score {
    text-align: center;
}

.score-value {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.score-label {
    font-size: 0.875rem;
    opacity: 0.9;
}

.performance-table {
    width: 100%;
    border-collapse: collapse;
}

.performance-table th {
    background: #f8fafc;
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 600;
    color: #374151;
    border-bottom: 2px solid #e5e7eb;
    font-size: 0.875rem;
}

.performance-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #f3f4f6;
    color: #6b7280;
}

.performance-table tr:hover {
    background: #f9fafb;
}

.metric-info .metric-name {
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.metric-info .metric-description {
    font-size: 0.75rem;
    color: #9ca3af;
}

.change-display {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.875rem;
}

.change-display.positive {
    background: #d1fae5;
    color: #065f46;
}

.change-display.negative {
    background: #fee2e2;
    color: #991b1b;
}

.change-icon {
    font-size: 1rem;
}

.status-badge {
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-badge.excellent {
    background: #d1fae5;
    color: #065f46;
}

.status-badge.good {
    background: #dbeafe;
    color: #1e40af;
}

.status-badge.needs-improvement {
    background: #fef3c7;
    color: #92400e;
}`,
        js: `// Performance metrics calculations
console.log('Performance metrics table loaded');
// Additional performance tracking can be added here`
    },
    // ====================================================================
    // TEMPLATE 36: DARK MODERN DATA TABLE
    // Features: Clean dark design with status indicators and actions
    // Category: dark-theme
    // ====================================================================
    table36: {
        html: `<div class="dark-modern-container">
    <table class="dark-modern-table">
        <thead>
            <tr>
                <th>Employee</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="avatar">JD</div>
                        <div class="employee-details">
                            <div class="name">John Doe</div>
                            <div class="email">john@company.com</div>
                        </div>
                    </div>
                </td>
                <td>Frontend Developer</td>
                <td>Engineering</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="avatar">SM</div>
                        <div class="employee-details">
                            <div class="name">Sarah Miller</div>
                            <div class="email">sarah@company.com</div>
                        </div>
                    </div>
                </td>
                <td>UI Designer</td>
                <td>Design</td>
                <td><span class="status active">Active</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="avatar">RJ</div>
                        <div class="employee-details">
                            <div class="name">Robert Johnson</div>
                            <div class="email">robert@company.com</div>
                        </div>
                    </div>
                </td>
                <td>Backend Developer</td>
                <td>Engineering</td>
                <td><span class="status inactive">Inactive</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Modern Table Styles */
.dark-modern-container {
    background: #1a1f35;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #2d3748;
}

.dark-modern-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-modern-table th {
    background: #2d3748;
    padding: 1rem 1.2rem;
    text-align: left;
    font-weight: 600;
    color: #cbd5e1;
    border-bottom: 2px solid #4a5568;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-modern-table td {
    padding: 1rem 1.2rem;
    border-bottom: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.dark-modern-table tr {
    transition: all 0.3s ease;
}

.dark-modern-table tr:hover {
    background: #2d3748;
    transform: translateX(5px);
}

.dark-modern-table tr:hover td {
    color: #ffffff;
}

/* Employee Info Styles */
.employee-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    flex-shrink: 0;
}

.employee-details {
    display: flex;
    flex-direction: column;
}

.employee-details .name {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.employee-details .email {
    font-size: 0.85rem;
    color: #94a3b8;
}

/* Status Styles */
.status {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status.active {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.status.inactive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn-edit {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.btn-edit:hover {
    background: rgba(59, 130, 246, 0.3);
    transform: translateY(-1px);
}

.btn-delete {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.btn-delete:hover {
    background: rgba(239, 68, 68, 0.3);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .dark-modern-container {
        padding: 1rem;
    }
    
    .dark-modern-table th,
    .dark-modern-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .action-buttons {
        flex-direction: column;
        gap: 0.3rem;
    }
    
    .btn-edit,
    .btn-delete {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
    }
}`,
        js: `// Dark Modern Table Interactions
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.dark-modern-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Action button functionality
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const name = row.querySelector('.name').textContent;
            console.log('Edit clicked for:', name);
            // Add your edit logic here
        });
    });
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const name = row.querySelector('.name').textContent;
            console.log('Delete clicked for:', name);
            // Add your delete logic here
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 37: DARK ANALYTICS DASHBOARD TABLE
    // Features: Analytics data with progress bars and metrics
    // Category: dark-theme, analytics
    // ====================================================================
    table37: {
        html: `<div class="dark-analytics-container">
    <div class="analytics-header">
        <h3>Performance Metrics</h3>
        <div class="time-filter">
            <select class="filter-select">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
            </select>
        </div>
    </div>
    
    <table class="dark-analytics-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Target</th>
                <th>Progress</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="metric-info">
                        <i class="fas fa-users"></i>
                        <span>User Growth</span>
                    </div>
                </td>
                <td class="metric-value">12,458</td>
                <td class="metric-target">15,000</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 83%"></div>
                        </div>
                        <span class="progress-text">83%</span>
                    </div>
                </td>
                <td>
                    <div class="trend up">
                        <i class="fas fa-arrow-up"></i>
                        <span>12%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Revenue</span>
                    </div>
                </td>
                <td class="metric-value">$48,250</td>
                <td class="metric-target">$60,000</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 80%"></div>
                        </div>
                        <span class="progress-text">80%</span>
                    </div>
                </td>
                <td>
                    <div class="trend up">
                        <i class="fas fa-arrow-up"></i>
                        <span>8%</span>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="metric-info">
                        <i class="fas fa-chart-line"></i>
                        <span>Conversion Rate</span>
                    </div>
                </td>
                <td class="metric-value">3.2%</td>
                <td class="metric-target">4.0%</td>
                <td>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 65%"></div>
                        </div>
                        <span class="progress-text">65%</span>
                    </div>
                </td>
                <td>
                    <div class="trend down">
                        <i class="fas fa-arrow-down"></i>
                        <span>2%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Analytics Table Styles */
.dark-analytics-container {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid #334155;
}

.analytics-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #334155;
}

.analytics-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.time-filter {
    display: flex;
    align-items: center;
}

.filter-select {
    background: #1e293b;
    border: 1px solid #475569;
    color: #e2e8f0;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-select:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.2);
}

.dark-analytics-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-analytics-table th {
    background: #1e293b;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #94a3b8;
    border-bottom: 2px solid #475569;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-analytics-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #334155;
    transition: all 0.3s ease;
}

.dark-analytics-table tr {
    transition: all 0.3s ease;
}

.dark-analytics-table tr:hover {
    background: #1e293b;
}

.dark-analytics-table tr:hover td {
    color: #ffffff;
}

/* Metric Info Styles */
.metric-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 500;
}

.metric-info i {
    color: #7c3aed;
    font-size: 1.1rem;
    width: 20px;
    text-align: center;
}

/* Metric Values */
.metric-value {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
}

.metric-target {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Progress Bar Styles */
.progress-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: #334155;
    border-radius: 10px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    border-radius: 10px;
    transition: width 1s ease;
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.progress-text {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.9rem;
    min-width: 40px;
}

/* Trend Styles */
.trend {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
}

.trend.up {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
}

.trend.down {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.trend i {
    font-size: 0.8rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .analytics-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .time-filter {
        width: 100%;
    }
    
    .filter-select {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .dark-analytics-container {
        padding: 1.5rem;
    }
    
    .dark-analytics-table {
        font-size: 0.9rem;
    }
    
    .dark-analytics-table th,
    .dark-analytics-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .progress-container {
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }
}`,
        js: `// Analytics Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Time filter functionality
    const filterSelect = document.querySelector('.filter-select');
    
    filterSelect.addEventListener('change', function() {
        console.log('Time filter changed to:', this.value);
        // Add your filter logic here
    });
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
    
    // Add hover effects
    const tableRows = document.querySelectorAll('.dark-analytics-table tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            const progressFill = this.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.transform = 'scaleY(1.2)';
            }
        });
        
        row.addEventListener('mouseleave', function() {
            const progressFill = this.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.transform = 'scaleY(1)';
            }
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 38: DARK E-COMMERCE PRODUCTS TABLE
    // Features: Product management with inventory and pricing
    // Category: dark-theme, business
    // ====================================================================
    table38: {
        html: `<div class="dark-ecommerce-container">
    <div class="ecommerce-header">
        <h3>Product Inventory</h3>
        <div class="header-actions">
            <button class="btn-add">
                <i class="fas fa-plus"></i>
                Add Product
            </button>
        </div>
    </div>
    
    <table class="dark-ecommerce-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Sales</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <i class="fas fa-laptop"></i>
                        </div>
                        <div class="product-details">
                            <div class="product-name">MacBook Pro 16"</div>
                            <div class="product-sku">SKU: MBP16-2024</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag">Electronics</span>
                </td>
                <td>
                    <div class="price">$2,499.00</div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level">
                            <div class="stock-bar">
                                <div class="stock-fill high"></div>
                            </div>
                            <span class="stock-text">45 units</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-badge active">In Stock</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">128 sold</div>
                        <div class="sales-trend up">+15%</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="product-details">
                            <div class="product-name">iPhone 15 Pro</div>
                            <div class="product-sku">SKU: IP15P-256</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag">Electronics</span>
                </td>
                <td>
                    <div class="price">$1,199.00</div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level">
                            <div class="stock-bar">
                                <div class="stock-fill medium"></div>
                            </div>
                            <span class="stock-text">12 units</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-badge active">In Stock</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">89 sold</div>
                        <div class="sales-trend up">+22%</div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="product-info">
                        <div class="product-image">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="product-details">
                            <div class="product-name">Wireless Headphones</div>
                            <div class="product-sku">SKU: WH-XB910</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="category-tag">Audio</span>
                </td>
                <td>
                    <div class="price">$299.00</div>
                </td>
                <td>
                    <div class="stock-info">
                        <div class="stock-level">
                            <div class="stock-bar">
                                <div class="stock-fill low"></div>
                            </div>
                            <span class="stock-text">3 units</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="status-badge warning">Low Stock</span>
                </td>
                <td>
                    <div class="sales-info">
                        <div class="sales-count">67 sold</div>
                        <div class="sales-trend down">-5%</div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark E-commerce Table Styles */
.dark-ecommerce-container {
    background: #1a1f35;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #2d3748;
}

.ecommerce-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #2d3748;
}

.ecommerce-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.btn-add {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.btn-add:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);
}

.dark-ecommerce-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-ecommerce-table th {
    background: #2d3748;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #cbd5e1;
    border-bottom: 2px solid #4a5568;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-ecommerce-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.dark-ecommerce-table tr {
    transition: all 0.3s ease;
}

.dark-ecommerce-table tr:hover {
    background: #2d3748;
}

.dark-ecommerce-table tr:hover td {
    color: #ffffff;
}

/* Product Info Styles */
.product-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.product-image {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.product-details {
    display: flex;
    flex-direction: column;
}

.product-name {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.product-sku {
    font-size: 0.8rem;
    color: #94a3b8;
}

/* Category Tag */
.category-tag {
    background: rgba(124, 58, 237, 0.2);
    color: #7c3aed;
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(124, 58, 237, 0.3);
}

/* Price */
.price {
    font-weight: 700;
    color: #ffffff;
    font-size: 1rem;
}

/* Stock Info */
.stock-info {
    display: flex;
    align-items: center;
}

.stock-level {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.stock-bar {
    width: 60px;
    height: 6px;
    background: #4a5568;
    border-radius: 10px;
    overflow: hidden;
}

.stock-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
}

.stock-fill.high {
    background: #22c55e;
    width: 80%;
}

.stock-fill.medium {
    background: #f59e0b;
    width: 40%;
}

.stock-fill.low {
    background: #ef4444;
    width: 15%;
}

.stock-text {
    font-size: 0.85rem;
    color: #94a3b8;
    min-width: 60px;
}

/* Status Badge */
.status-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.active {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-badge.warning {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.status-badge.inactive {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

/* Sales Info */
.sales-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.sales-count {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.9rem;
}

.sales-trend {
    font-size: 0.8rem;
    font-weight: 600;
}

.sales-trend.up {
    color: #22c55e;
}

.sales-trend.down {
    color: #ef4444;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .ecommerce-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
}

@media (max-width: 768px) {
    .dark-ecommerce-container {
        padding: 1.5rem;
    }
    
    .dark-ecommerce-table {
        font-size: 0.9rem;
    }
    
    .dark-ecommerce-table th,
    .dark-ecommerce-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .product-info {
        gap: 0.5rem;
    }
    
    .product-image {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
}`,
        js: `// E-commerce Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add product button functionality
    const addButton = document.querySelector('.btn-add');
    
    addButton.addEventListener('click', function() {
        console.log('Add product clicked');
        // Add your add product logic here
    });
    
    // Stock level animations
    const stockBars = document.querySelectorAll('.stock-bar');
    
    stockBars.forEach(bar => {
        const fill = bar.querySelector('.stock-fill');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 500);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
    
    // Product row interactions
    const productRows = document.querySelectorAll('.dark-ecommerce-table tr');
    
    productRows.forEach(row => {
        row.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            console.log('Product selected:', productName);
            // Add your product selection logic here
        });
    });
});`
    },

    // ====================================================================
    // TEMPLATE 39: DARK PROJECT MANAGEMENT TABLE
    // Features: Project tracking with progress and deadlines
    // Category: dark-theme, business
    // ====================================================================
    table39: {
        html: `<div class="dark-project-container">
    <div class="project-header">
        <h3>Project Dashboard</h3>
        <div class="project-stats">
            <div class="stat">
                <span class="stat-value">12</span>
                <span class="stat-label">Active</span>
            </div>
            <div class="stat">
                <span class="stat-value">5</span>
                <span class="stat-label">Completed</span>
            </div>
            <div class="stat">
                <span class="stat-value">3</span>
                <span class="stat-label">Delayed</span>
            </div>
        </div>
    </div>
    
    <table class="dark-project-table">
        <thead>
            <tr>
                <th>Project Name</th>
                <th>Team</th>
                <th>Deadline</th>
                <th>Progress</th>
                <th>Priority</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <div class="project-details">
                            <div class="project-title">Website Redesign</div>
                            <div class="project-client">TechCorp Inc.</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-members">
                        <div class="member-avatar">JD</div>
                        <div class="member-avatar">SM</div>
                        <div class="member-avatar">+3</div>
                    </div>
                </td>
                <td>
                    <div class="deadline">
                        <div class="date">Dec 15, 2024</div>
                        <div class="days-left">15 days left</div>
                    </div>
                </td>
                <td>
                    <div class="progress-wrapper">
                        <div class="progress-circle" data-progress="75">
                            <svg width="40" height="40">
                                <circle cx="20" cy="20" r="16" stroke="#334155" stroke-width="3" fill="none"/>
                                <circle class="progress-circle-fill" cx="20" cy="20" r="16" stroke="#7c3aed" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="progress-percent">75%</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="priority high">High</span>
                </td>
                <td>
                    <span class="project-status active">In Progress</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="project-details">
                            <div class="project-title">Mobile App Development</div>
                            <div class="project-client">StartupXYZ</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-members">
                        <div class="member-avatar">RJ</div>
                        <div class="member-avatar">AK</div>
                        <div class="member-avatar">+2</div>
                    </div>
                </td>
                <td>
                    <div class="deadline">
                        <div class="date">Jan 20, 2025</div>
                        <div class="days-left">51 days left</div>
                    </div>
                </td>
                <td>
                    <div class="progress-wrapper">
                        <div class="progress-circle" data-progress="45">
                            <svg width="40" height="40">
                                <circle cx="20" cy="20" r="16" stroke="#334155" stroke-width="3" fill="none"/>
                                <circle class="progress-circle-fill" cx="20" cy="20" r="16" stroke="#3b82f6" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="progress-percent">45%</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="priority medium">Medium</span>
                </td>
                <td>
                    <span class="project-status active">In Progress</span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="project-info">
                        <div class="project-icon">
                            <i class="fas fa-shopping-cart"></i>
                        </div>
                        <div class="project-details">
                            <div class="project-title">E-commerce Platform</div>
                            <div class="project-client">RetailGlobal</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="team-members">
                        <div class="member-avatar">TM</div>
                        <div class="member-avatar">LP</div>
                        <div class="member-avatar">+4</div>
                    </div>
                </td>
                <td>
                    <div class="deadline overdue">
                        <div class="date">Nov 30, 2024</div>
                        <div class="days-left">Overdue</div>
                    </div>
                </td>
                <td>
                    <div class="progress-wrapper">
                        <div class="progress-circle" data-progress="90">
                            <svg width="40" height="40">
                                <circle cx="20" cy="20" r="16" stroke="#334155" stroke-width="3" fill="none"/>
                                <circle class="progress-circle-fill" cx="20" cy="20" r="16" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round"/>
                            </svg>
                            <span class="progress-percent">90%</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="priority high">High</span>
                </td>
                <td>
                    <span class="project-status delayed">Delayed</span>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Project Management Table Styles */
.dark-project-container {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    border: 1px solid #334155;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #334155;
}

.project-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.project-stats {
    display: flex;
    gap: 2rem;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: #7c3aed;
}

.stat-label {
    font-size: 0.85rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-project-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-project-table th {
    background: #1e293b;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #94a3b8;
    border-bottom: 2px solid #475569;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-project-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #334155;
    transition: all 0.3s ease;
}

.dark-project-table tr {
    transition: all 0.3s ease;
}

.dark-project-table tr:hover {
    background: #1e293b;
}

.dark-project-table tr:hover td {
    color: #ffffff;
}

/* Project Info Styles */
.project-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.project-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.project-details {
    display: flex;
    flex-direction: column;
}

.project-title {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.project-client {
    font-size: 0.8rem;
    color: #94a3b8;
}

/* Team Members */
.team-members {
    display: flex;
    gap: 0.3rem;
}

.member-avatar {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #475569;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    border: 2px solid #1e293b;
}

.member-avatar:hover {
    transform: translateY(-2px);
    z-index: 1;
}

/* Deadline */
.deadline {
    display: flex;
    flex-direction: column;
}

.date {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.9rem;
}

.days-left {
    font-size: 0.8rem;
    color: #94a3b8;
}

.deadline.overdue .days-left {
    color: #ef4444;
    font-weight: 600;
}

/* Progress Circle */
.progress-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.progress-circle {
    position: relative;
    width: 40px;
    height: 40px;
}

.progress-circle-fill {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    transition: stroke-dashoffset 1s ease;
}

.progress-percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.7rem;
    font-weight: 600;
    color: #ffffff;
}

/* Priority */
.priority {
    padding: 0.4rem 0.8rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.priority.high {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.priority.medium {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
}

.priority.low {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

/* Project Status */
.project-status {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.project-status.active {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.project-status.delayed {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

.project-status.completed {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .project-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .project-stats {
        width: 100%;
        justify-content: space-around;
    }
}

@media (max-width: 768px) {
    .dark-project-container {
        padding: 1.5rem;
    }
    
    .dark-project-table {
        font-size: 0.9rem;
    }
    
    .dark-project-table th,
    .dark-project-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .project-info {
        gap: 0.5rem;
    }
    
    .project-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
}`,
        js: `// Project Management Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress circles
    const progressCircles = document.querySelectorAll('.progress-circle');
    
    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        const circleElement = circle.querySelector('.progress-circle-fill');
        const radius = 16;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (progress / 100) * circumference;
        
        circleElement.style.strokeDasharray = circumference + ' ' + circumference;
        circleElement.style.strokeDashoffset = offset;
    });
    
    // Team member hover effects
    const teamMembers = document.querySelectorAll('.member-avatar');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.1)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Project row interactions
    const projectRows = document.querySelectorAll('.dark-project-table tr');
    
    projectRows.forEach(row => {
        row.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            console.log('Project selected:', projectTitle);
            // Add your project selection logic here
        });
    });
    
    // Update stats (example functionality)
    function updateProjectStats() {
        const activeProjects = document.querySelectorAll('.project-status.active').length;
        const delayedProjects = document.querySelectorAll('.project-status.delayed').length;
        
        // Update stat values
        document.querySelector('.stat:nth-child(1) .stat-value').textContent = activeProjects;
        document.querySelector('.stat:nth-child(3) .stat-value').textContent = delayedProjects;
    }
    
    // Initial stats update
    updateProjectStats();
});`
    },

    // ====================================================================
    // TEMPLATE 40: DARK FINANCIAL DATA TABLE
    // Features: Financial data with charts and trends
    // Category: dark-theme, business
    // ====================================================================
    table40: {
        html: `<div class="dark-financial-container">
    <div class="financial-header">
        <h3>Financial Overview</h3>
        <div class="period-selector">
            <button class="period-btn active">Q4 2024</button>
            <button class="period-btn">Q1 2025</button>
            <button class="period-btn">Q2 2025</button>
        </div>
    </div>
    
    <table class="dark-financial-table">
        <thead>
            <tr>
                <th>Account</th>
                <th>Balance</th>
                <th>Transactions</th>
                <th>Growth</th>
                <th>Trend</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="account-info">
                        <div class="account-icon">
                            <i class="fas fa-wallet"></i>
                        </div>
                        <div class="account-details">
                            <div class="account-name">Business Account</div>
                            <div class="account-number">**** 4832</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="balance-amount">$45,678.90</div>
                </td>
                <td>
                    <div class="transaction-count">128 transactions</div>
                </td>
                <td>
                    <div class="growth-indicator positive">
                        <i class="fas fa-arrow-up"></i>
                        <span>12.5%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-bar" style="height: 30%"></div>
                        <div class="chart-bar" style="height: 45%"></div>
                        <div class="chart-bar" style="height: 60%"></div>
                        <div class="chart-bar" style="height: 75%"></div>
                        <div class="chart-bar" style="height: 85%"></div>
                        <div class="chart-bar" style="height: 90%"></div>
                        <div class="chart-bar" style="height: 100%"></div>
                    </div>
                </td>
                <td>
                    <button class="action-btn view-details">
                        <i class="fas fa-chart-line"></i>
                        Details
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="account-info">
                        <div class="account-icon">
                            <i class="fas fa-piggy-bank"></i>
                        </div>
                        <div class="account-details">
                            <div class="account-name">Savings Account</div>
                            <div class="account-number">**** 7192</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="balance-amount">$23,450.00</div>
                </td>
                <td>
                    <div class="transaction-count">45 transactions</div>
                </td>
                <td>
                    <div class="growth-indicator positive">
                        <i class="fas fa-arrow-up"></i>
                        <span>8.2%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-bar" style="height: 20%"></div>
                        <div class="chart-bar" style="height: 35%"></div>
                        <div class="chart-bar" style="height: 50%"></div>
                        <div class="chart-bar" style="height: 65%"></div>
                        <div class="chart-bar" style="height: 75%"></div>
                        <div class="chart-bar" style="height: 85%"></div>
                        <div class="chart-bar" style="height: 95%"></div>
                    </div>
                </td>
                <td>
                    <button class="action-btn view-details">
                        <i class="fas fa-chart-line"></i>
                        Details
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="account-info">
                        <div class="account-icon">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <div class="account-details">
                            <div class="account-name">Credit Card</div>
                            <div class="account-number">**** 2647</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="balance-amount negative">-$2,345.67</div>
                </td>
                <td>
                    <div class="transaction-count">67 transactions</div>
                </td>
                <td>
                    <div class="growth-indicator negative">
                        <i class="fas fa-arrow-down"></i>
                        <span>5.1%</span>
                    </div>
                </td>
                <td>
                    <div class="trend-chart">
                        <div class="chart-bar" style="height: 100%"></div>
                        <div class="chart-bar" style="height: 95%"></div>
                        <div class="chart-bar" style="height: 90%"></div>
                        <div class="chart-bar" style="height: 85%"></div>
                        <div class="chart-bar" style="height: 80%"></div>
                        <div class="chart-bar" style="height: 75%"></div>
                        <div class="chart-bar" style="height: 70%"></div>
                    </div>
                </td>
                <td>
                    <button class="action-btn view-details">
                        <i class="fas fa-chart-line"></i>
                        Details
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        css: `/* Dark Financial Table Styles */
.dark-financial-container {
    background: #1a1f35;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border: 1px solid #2d3748;
}

.financial-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #2d3748;
}

.financial-header h3 {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

.period-selector {
    display: flex;
    gap: 0.5rem;
}

.period-btn {
    background: #2d3748;
    border: 1px solid #4a5568;
    color: #94a3b8;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

.period-btn.active,
.period-btn:hover {
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: white;
    border-color: transparent;
}

.dark-financial-table {
    width: 100%;
    border-collapse: collapse;
    color: #e2e8f0;
}

.dark-financial-table th {
    background: #2d3748;
    padding: 1.2rem 1rem;
    text-align: left;
    font-weight: 600;
    color: #cbd5e1;
    border-bottom: 2px solid #4a5568;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.dark-financial-table td {
    padding: 1.2rem 1rem;
    border-bottom: 1px solid #2d3748;
    transition: all 0.3s ease;
}

.dark-financial-table tr {
    transition: all 0.3s ease;
}

.dark-financial-table tr:hover {
    background: #2d3748;
}

.dark-financial-table tr:hover td {
    color: #ffffff;
}

/* Account Info Styles */
.account-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.account-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    flex-shrink: 0;
}

.account-details {
    display: flex;
    flex-direction: column;
}

.account-name {
    font-weight: 600;
    color: #ffffff;
    font-size: 0.95rem;
}

.account-number {
    font-size: 0.8rem;
    color: #94a3b8;
}

/* Balance Amount */
.balance-amount {
    font-weight: 700;
    color: #22c55e;
    font-size: 1.1rem;
}

.balance-amount.negative {
    color: #ef4444;
}

/* Transaction Count */
.transaction-count {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* Growth Indicator */
.growth-indicator {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    width: fit-content;
}

.growth-indicator.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
}

.growth-indicator.negative {
    background: rgba(239, 68, 68, 0.2);
    color: #ef4444;
}

.growth-indicator i {
    font-size: 0.8rem;
}

/* Trend Chart */
.trend-chart {
    display: flex;
    align-items: end;
    gap: 2px;
    height: 40px;
    padding: 0.5rem 0;
}

.chart-bar {
    width: 6px;
    background: linear-gradient(to top, #7c3aed, #ec4899);
    border-radius: 2px 2px 0 0;
    transition: all 0.5s ease;
    animation: chartGrow 1s ease-out;
}

@keyframes chartGrow {
    from { height: 0%; }
    to { height: var(--target-height); }
}

.trend-chart:hover .chart-bar {
    opacity: 0.8;
    transform: scaleY(1.1);
}

/* Action Button */
.action-btn {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}

.action-btn:hover {
    background: rgba(59, 130, 246, 0.3);
    transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 1024px) {
    .financial-header {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .period-selector {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .dark-financial-container {
        padding: 1.5rem;
    }
    
    .dark-financial-table {
        font-size: 0.9rem;
    }
    
    .dark-financial-table th,
    .dark-financial-table td {
        padding: 0.8rem 0.5rem;
    }
    
    .account-info {
        gap: 0.5rem;
    }
    
    .account-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
    }
    
    .trend-chart {
        height: 30px;
    }
    
    .chart-bar {
        width: 4px;
    }
}`,
        js: `// Financial Table Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Period selector functionality
    const periodBtns = document.querySelectorAll('.period-btn');
    
    periodBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            periodBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            console.log('Period selected:', this.textContent);
            // Add your period filter logic here
        });
    });
    
    // Animate chart bars on scroll
    const chartBars = document.querySelectorAll('.chart-bar');
    
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const height = entry.target.style.height;
                entry.target.style.height = '0%';
                setTimeout(() => {
                    entry.target.style.height = height;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    chartBars.forEach(bar => chartObserver.observe(bar));
    
    // View details button functionality
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const row = this.closest('tr');
            const accountName = row.querySelector('.account-name').textContent;
            console.log('View details for:', accountName);
            // Add your view details logic here
        });
    });
    
    // Financial data interactions
    const financialRows = document.querySelectorAll('.dark-financial-table tr');
    
    financialRows.forEach(row => {
        row.addEventListener('click', function() {
            const accountName = this.querySelector('.account-name').textContent;
            const balance = this.querySelector('.balance-amount').textContent;
            console.log('Account selected:', accountName, 'Balance:', balance);
            // Add your account selection logic here
        });
    });
});`
    },
    // ====================================================================
// COLORFUL TEMPLATE 41: RAINBOW GRADIENT
// ====================================================================
colorful1: {
    html: `<div class="rainbow-table-container">
    <div class="rainbow-header">
        <h3>🌈 Task Manager</h3>
        <div class="rainbow-controls">
            <button class="btn-rainbow-add">+ Add Task</button>
        </div>
    </div>
    <table class="rainbow-table">
        <thead>
            <tr>
                <th>Task Name</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Deadline</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="rainbow-row-1">
                <td>
                    <div class="task-with-icon">
                        <span class="task-icon">🎨</span>
                        Design Homepage
                    </div>
                </td>
                <td>Design</td>
                <td><span class="priority high">High</span></td>
                <td>Today</td>
                <td><span class="status-badge completed">Completed</span></td>
            </tr>
            <tr class="rainbow-row-2">
                <td>
                    <div class="task-with-icon">
                        <span class="task-icon">⚡</span>
                        Optimize Performance
                    </div>
                </td>
                <td>Development</td>
                <td><span class="priority medium">Medium</span></td>
                <td>Tomorrow</td>
                <td><span class="status-badge in-progress">In Progress</span></td>
            </tr>
            <tr class="rainbow-row-3">
                <td>
                    <div class="task-with-icon">
                        <span class="task-icon">🐛</span>
                        Fix Mobile Bugs
                    </div>
                </td>
                <td>Testing</td>
                <td><span class="priority high">High</span></td>
                <td>Jan 20</td>
                <td><span class="status-badge pending">Pending</span></td>
            </tr>
            <tr class="rainbow-row-4">
                <td>
                    <div class="task-with-icon">
                        <span class="task-icon">📊</span>
                        Analytics Dashboard
                    </div>
                </td>
                <td>Analytics</td>
                <td><span class="priority low">Low</span></td>
                <td>Jan 25</td>
                <td><span class="status-badge planning">Planning</span></td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `@keyframes rainbowBackground {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
}

@keyframes colorShift {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

.rainbow-table-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 2px;
    animation: colorShift 8s ease-in-out infinite;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.rainbow-table-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
        #ff6b6b, #ffa726, #ffee58, 
        #66bb6a, #42a5f5, #ab47bc
    );
    background-size: 400% 400%;
    border-radius: 22px;
    animation: rainbowBackground 6s ease infinite;
    z-index: -1;
}

.rainbow-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 1.5rem 2rem;
    border-radius: 18px 18px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid;
    border-image: linear-gradient(90deg, 
        #ff6b6b, #ffa726, #ffee58, 
        #66bb6a, #42a5f5, #ab47bc
    ) 1;
}

.rainbow-header h3 {
    margin: 0;
    background: linear-gradient(135deg, #ff6b6b, #ab47bc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.5rem;
    font-weight: 700;
}

.btn-rainbow-add {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-rainbow-add:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    animation: float 2s ease-in-out infinite;
}

.rainbow-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 0 0 18px 18px;
    overflow: hidden;
}

.rainbow-table th {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.rainbow-table th::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.4), 
        transparent
    );
    animation: shimmer 3s infinite;
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

.rainbow-table td {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    color: #2d3748;
    font-weight: 500;
    transition: all 0.3s ease;
}

.rainbow-row-1:hover td { background: linear-gradient(90deg, #ff6b6b20, transparent); }
.rainbow-row-2:hover td { background: linear-gradient(90deg, #ffa72620, transparent); }
.rainbow-row-3:hover td { background: linear-gradient(90deg, #66bb6a20, transparent); }
.rainbow-row-4:hover td { background: linear-gradient(90deg, #42a5f520, transparent); }

.rainbow-table tr {
    transition: all 0.3s ease;
}

.rainbow-table tr:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.task-with-icon {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.task-icon {
    font-size: 1.2rem;
    animation: float 3s ease-in-out infinite;
}

.priority {
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.priority.high {
    background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    color: white;
    animation: pulse 2s infinite;
}

.priority.medium {
    background: linear-gradient(135deg, #ffa726, #ffb74d);
    color: white;
}

.priority.low {
    background: linear-gradient(135deg, #66bb6a, #81c784);
    color: white;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.status-badge {
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.status-badge.completed {
    background: linear-gradient(135deg, #66bb6a, #81c784);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 187, 106, 0.4);
}

.status-badge.in-progress {
    background: linear-gradient(135deg, #42a5f5, #64b5f6);
    color: white;
    box-shadow: 0 4px 15px rgba(66, 165, 245, 0.4);
    animation: pulse 2s infinite;
}

.status-badge.pending {
    background: linear-gradient(135deg, #ffa726, #ffb74d);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 167, 38, 0.4);
}

.status-badge.planning {
    background: linear-gradient(135deg, #ab47bc, #ba68c8);
    color: white;
    box-shadow: 0 4px 15px rgba(171, 71, 188, 0.4);
}`,
    js: `// Rainbow table animations
document.querySelectorAll('.rainbow-table tr').forEach((row, index) => {
    row.style.animationDelay = \`\${index * 0.1}s\`;
});

// Add floating animation to task icons
document.querySelectorAll('.task-icon').forEach(icon => {
    icon.style.animationDelay = \`\${Math.random() * 2}s\`;
});

// Add click animation to status badges
document.querySelectorAll('.status-badge').forEach(badge => {
    badge.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 42: NEON GLOW
// ====================================================================
colorful2: {
    html: `<div class="neon-table-container">
    <div class="neon-header">
        <h3>⚡ Feature Progress</h3>
        <div class="neon-stats">
            <span class="neon-stat">Total: 8</span>
            <span class="neon-stat">Done: 5</span>
        </div>
    </div>
    <table class="neon-table">
        <thead>
            <tr>
                <th>Feature</th>
                <th>Team</th>
                <th>Progress</th>
                <th>ETA</th>
            </tr>
        </thead>
        <tbody>
            <tr class="neon-row">
                <td>
                    <div class="feature-name">
                        <span class="neon-dot" style="--neon-color: #ff00ff"></span>
                        User Authentication
                    </div>
                </td>
                <td>Backend</td>
                <td>
                    <div class="neon-progress">
                        <div class="progress-bar" data-progress="100">
                            <div class="progress-fill" style="--neon-color: #ff00ff"></div>
                        </div>
                        <span>100%</span>
                    </div>
                </td>
                <td>Completed</td>
            </tr>
            <tr class="neon-row">
                <td>
                    <div class="feature-name">
                        <span class="neon-dot" style="--neon-color: #00ffff"></span>
                        Payment Gateway
                    </div>
                </td>
                <td>Full Stack</td>
                <td>
                    <div class="neon-progress">
                        <div class="progress-bar" data-progress="75">
                            <div class="progress-fill" style="--neon-color: #00ffff"></div>
                        </div>
                        <span>75%</span>
                    </div>
                </td>
                <td>2 days</td>
            </tr>
            <tr class="neon-row">
                <td>
                    <div class="feature-name">
                        <span class="neon-dot" style="--neon-color: #ffff00"></span>
                        Admin Dashboard
                    </div>
                </td>
                <td>Frontend</td>
                <td>
                    <div class="neon-progress">
                        <div class="progress-bar" data-progress="50">
                            <div class="progress-fill" style="--neon-color: #ffff00"></div>
                        </div>
                        <span>50%</span>
                    </div>
                </td>
                <td>1 week</td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `@keyframes neonGlow {
    0%, 100% { 
        box-shadow: 
            0 0 5px var(--neon-color),
            0 0 10px var(--neon-color),
            0 0 15px var(--neon-color);
    }
    50% { 
        box-shadow: 
            0 0 10px var(--neon-color),
            0 0 20px var(--neon-color),
            0 0 30px var(--neon-color),
            0 0 40px var(--neon-color);
    }
}

@keyframes textGlow {
    0%, 100% { 
        text-shadow: 
            0 0 5px currentColor,
            0 0 10px currentColor;
    }
    50% { 
        text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 30px currentColor;
    }
}

@keyframes progressFill {
    0% { width: 0%; }
    100% { width: attr(data-progress); }
}

.neon-table-container {
    background: #0a0a0a;
    border: 2px solid;
    border-image: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00) 1;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
}

.neon-table-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ffff00, #ff00ff);
    background-size: 400% 400%;
    border-radius: 17px;
    animation: gradientShift 3s ease infinite;
    z-index: -1;
    filter: blur(10px);
    opacity: 0.7;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.neon-header {
    background: rgba(0, 0, 0, 0.8);
    padding: 1.5rem 2rem;
    border-bottom: 1px solid #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
}

.neon-header h3 {
    margin: 0;
    color: #00ffff;
    font-size: 1.5rem;
    font-weight: 700;
    animation: textGlow 2s ease-in-out infinite;
}

.neon-stats {
    display: flex;
    gap: 1rem;
}

.neon-stat {
    color: #ff00ff;
    font-weight: 600;
    animation: textGlow 2s ease-in-out infinite;
    animation-delay: 1s;
}

.neon-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.9);
}

.neon-table th {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    color: #00ffff;
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 2px solid #333;
    animation: textGlow 3s ease-in-out infinite;
}

.neon-table td {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #333;
    color: #ffffff;
    font-weight: 500;
    transition: all 0.3s ease;
}

.neon-row:hover td {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(10px);
}

.feature-name {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
}

.neon-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--neon-color);
    animation: neonGlow 2s ease-in-out infinite;
}

.neon-progress {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.progress-bar {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: var(--neon-color);
    border-radius: 10px;
    animation: progressFill 2s ease-out;
    animation: neonGlow 2s ease-in-out infinite;
}

.neon-progress span {
    color: var(--neon-color);
    font-weight: 600;
    min-width: 40px;
    animation: textGlow 2s ease-in-out infinite;
}`,
    js: `// Neon progress bar animations
document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    const fill = bar.querySelector('.progress-fill');
    
    // Animate progress fill
    setTimeout(() => {
        fill.style.width = progress + '%';
    }, 500);
});

// Add hover effects to neon rows
document.querySelectorAll('.neon-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.animation = 'neonGlow 0.5s ease-in-out';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 43: ANIMATED GRADIENT
// ====================================================================
colorful3: {
    html: `<div class="animated-table-container">
    <div class="animated-header">
        <h3>🚀 Sales Dashboard</h3>
        <div class="animated-filters">
            <button class="filter-btn active">Today</button>
            <button class="filter-btn">Week</button>
            <button class="filter-btn">Month</button>
        </div>
    </div>
    <table class="animated-table">
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Sales</th>
                <th>Revenue</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr class="animated-row">
                <td>
                    <div class="product-card">
                        <div class="product-avatar" style="--avatar-color: #ff6b6b">A</div>
                        <div class="product-info">
                            <div class="product-name">Widget Pro</div>
                            <div class="product-id">#WP-001</div>
                        </div>
                    </div>
                </td>
                <td>Electronics</td>
                <td>1,234</td>
                <td>$12,340</td>
                <td>
                    <div class="trend up">
                        <span class="trend-icon">📈</span>
                        +15%
                    </div>
                </td>
            </tr>
            <tr class="animated-row">
                <td>
                    <div class="product-card">
                        <div class="product-avatar" style="--avatar-color: #4ecdc4">B</div>
                        <div class="product-info">
                            <div class="product-name">Gadget Plus</div>
                            <div class="product-id">#GP-002</div>
                        </div>
                    </div>
                </td>
                <td>Accessories</td>
                <td>987</td>
                <td>$7,896</td>
                <td>
                    <div class="trend down">
                        <span class="trend-icon">📉</span>
                        -5%
                    </div>
                </td>
            </tr>
            <tr class="animated-row">
                <td>
                    <div class="product-card">
                        <div class="product-avatar" style="--avatar-color: #45b7d1">C</div>
                        <div class="product-info">
                            <div class="product-name">Tool Kit</div>
                            <div class="product-id">#TK-003</div>
                        </div>
                    </div>
                </td>
                <td>Tools</td>
                <td>456</td>
                <td>$9,120</td>
                <td>
                    <div class="trend up">
                        <span class="trend-icon">📈</span>
                        +22%
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
}

.animated-table-container {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientMove 8s ease infinite;
    border-radius: 20px;
    padding: 3px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.animated-table-container::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: inherit;
    border-radius: 23px;
    filter: blur(20px);
    opacity: 0.7;
    z-index: -1;
    animation: gradientMove 8s ease infinite;
}

.animated-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 1.5rem 2rem;
    border-radius: 17px 17px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.animated-header h3 {
    margin: 0;
    background: linear-gradient(135deg, #ee7752, #23a6d5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.5rem;
    font-weight: 700;
}

.animated-filters {
    display: flex;
    gap: 0.5rem;
}

.filter-btn {
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid transparent;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.filter-btn.active {
    background: linear-gradient(135deg, #ee7752, #e73c7e);
    color: white;
    border-color: rgba(255, 255, 255, 0.5);
    animation: bounce 2s infinite;
}

.filter-btn:hover:not(.active) {
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
}

.animated-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 0 0 17px 17px;
    overflow: hidden;
}

.animated-table th {
    background: linear-gradient(135deg, rgba(238, 119, 82, 0.9), rgba(35, 166, 213, 0.9));
    color: white;
    padding: 1.25rem 1.5rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
}

.animated-table th::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.3), 
        transparent
    );
    animation: shimmer 2s infinite;
}

.animated-table td {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.3);
    color: #2d3748;
    font-weight: 500;
}

.animated-row {
    animation: slideIn 0.6s ease-out;
    animation-fill-mode: both;
}

.animated-row:nth-child(1) { animation-delay: 0.1s; }
.animated-row:nth-child(2) { animation-delay: 0.2s; }
.animated-row:nth-child(3) { animation-delay: 0.3s; }

.animated-row:hover {
    background: linear-gradient(90deg, 
        rgba(238, 119, 82, 0.1), 
        rgba(35, 166, 213, 0.1)
    );
    transform: scale(1.02);
    transition: all 0.3s ease;
}

.product-card {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.product-avatar {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--avatar-color);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    animation: bounce 3s ease-in-out infinite;
}

.product-info .product-name {
    font-weight: 600;
    color: #1a202c;
}

.product-info .product-id {
    font-size: 0.75rem;
    color: #718096;
}

.trend {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.8rem;
    animation: bounce 2s infinite;
}

.trend.up {
    background: linear-gradient(135deg, #48bb78, #68d391);
    color: white;
}

.trend.down {
    background: linear-gradient(135deg, #f56565, #fc8181);
    color: white;
}

.trend-icon {
    font-size: 1rem;
    animation: bounce 1s infinite;
}`,
    js: `// Animated table interactions
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        // Add bounce animation
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'bounce 2s infinite';
        }, 10);
    });
});

// Add hover animations to product avatars
document.querySelectorAll('.product-avatar').forEach(avatar => {
    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 44: PASTEL WAVES
// ====================================================================
colorful4: {
    html: `<div class="pastel-table-container">
    <div class="pastel-header">
        <h3>🌸 Category Analytics</h3>
        <div class="pastel-waves">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
    <table class="pastel-table">
        <thead>
            <tr>
                <th>Category</th>
                <th>Items</th>
                <th>Growth</th>
                <th>Performance</th>
            </tr>
        </thead>
        <tbody>
            <tr class="pastel-row">
                <td>
                    <div class="category-with-icon">
                        <span class="category-icon">🎨</span>
                        Design Resources
                    </div>
                </td>
                <td>156</td>
                <td>
                    <div class="growth-indicator positive">
                        <span class="growth-arrow">↑</span>
                        +24%
                    </div>
                </td>
                <td>
                    <div class="performance-meter">
                        <div class="meter-fill" style="width: 85%"></div>
                        <span class="meter-text">85%</span>
                    </div>
                </td>
            </tr>
            <tr class="pastel-row">
                <td>
                    <div class="category-with-icon">
                        <span class="category-icon">⚡</span>
                        Development Tools
                    </div>
                </td>
                <td>89</td>
                <td>
                    <div class="growth-indicator positive">
                        <span class="growth-arrow">↑</span>
                        +18%
                    </div>
                </td>
                <td>
                    <div class="performance-meter">
                        <div class="meter-fill" style="width: 72%"></div>
                        <span class="meter-text">72%</span>
                    </div>
                </td>
            </tr>
            <tr class="pastel-row">
                <td>
                    <div class="category-with-icon">
                        <span class="category-icon">📊</span>
                        Analytics
                    </div>
                </td>
                <td>67</td>
                <td>
                    <div class="growth-indicator negative">
                        <span class="growth-arrow">↓</span>
                        -5%
                    </div>
                </td>
                <td>
                    <div class="performance-meter">
                        <div class="meter-fill" style="width: 45%"></div>
                        <span class="meter-text">45%</span>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `@keyframes waveAnimation {
    0% { transform: translateX(-100%) rotate(0deg); }
    100% { transform: translateX(100%) rotate(360deg); }
}

@keyframes floatSoft {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(120deg); }
    66% { transform: translateY(5px) rotate(240deg); }
}

@keyframes pastelGlow {
    0%, 100% { 
        box-shadow: 
            0 0 20px rgba(255, 182, 193, 0.3),
            0 0 40px rgba(173, 216, 230, 0.2);
    }
    50% { 
        box-shadow: 
            0 0 30px rgba(255, 182, 193, 0.5),
            0 0 60px rgba(173, 216, 230, 0.3);
    }
}

.pastel-table-container {
    background: linear-gradient(135deg, 
        rgba(255, 182, 193, 0.1), 
        rgba(173, 216, 230, 0.1),
        rgba(221, 160, 221, 0.1)
    );
    border-radius: 25px;
    padding: 2px;
    position: relative;
    overflow: hidden;
    animation: pastelGlow 4s ease-in-out infinite;
}

.pastel-table-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(173, 216, 230, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(221, 160, 221, 0.1) 0%, transparent 50%);
    z-index: -1;
}

.pastel-header {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    padding: 2rem;
    border-radius: 23px 23px 0 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.pastel-header h3 {
    margin: 0 0 1rem 0;
    background: linear-gradient(135deg, #ffb6c1, #87ceeb, #dda0dd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.75rem;
    font-weight: 700;
}

.pastel-waves {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    display: flex;
    justify-content: space-around;
}

.wave {
    width: 50px;
    height: 20px;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 182, 193, 0.6), 
        rgba(173, 216, 230, 0.6), 
        transparent
    );
    border-radius: 50%;
    animation: waveAnimation 3s ease-in-out infinite;
}

.wave:nth-child(1) { animation-delay: 0s; }
.wave:nth-child(2) { animation-delay: 1s; }
.wave:nth-child(3) { animation-delay: 2s; }

.pastel-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(20px);
    border-radius: 0 0 23px 23px;
}

.pastel-table th {
    background: linear-gradient(135deg, 
        rgba(255, 182, 193, 0.8), 
        rgba(173, 216, 230, 0.8)
    );
    color: #2d3748;
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.pastel-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 182, 193, 0.2);
    color: #4a5568;
    font-weight: 500;
    transition: all 0.3s ease;
}

.pastel-row:hover td {
    background: rgba(255, 255, 255, 0.6);
    transform: translateX(10px);
}

.category-with-icon {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
}

.category-icon {
    font-size: 1.5rem;
    animation: floatSoft 4s ease-in-out infinite;
}

.growth-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.3s ease;
}

.growth-indicator.positive {
    background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
    color: #065f46;
}

.growth-indicator.negative {
    background: linear-gradient(135deg, #fecaca, #fca5a5);
    color: #991b1b;
}

.growth-arrow {
    font-size: 1.2rem;
    animation: bounce 2s infinite;
}

.performance-meter {
    width: 100px;
    height: 8px;
    background: rgba(255, 182, 193, 0.3);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.meter-fill {
    height: 100%;
    background: linear-gradient(90deg, #ffb6c1, #87ceeb);
    border-radius: 10px;
    transition: width 1s ease-in-out;
    position: relative;
}

.meter-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.6), 
        transparent
    );
    animation: shimmer 2s infinite;
}

.meter-text {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.75rem;
    font-weight: 600;
    color: #4a5568;
}`,
    js: `// Pastel table animations
document.querySelectorAll('.pastel-row').forEach((row, index) => {
    row.style.animationDelay = \`\${index * 0.2}s\`;
});

// Animate performance meters on load
document.querySelectorAll('.meter-fill').forEach(meter => {
    const width = meter.style.width;
    meter.style.width = '0%';
    
    setTimeout(() => {
        meter.style.width = width;
    }, 500);
});

// Add floating animation to category icons
document.querySelectorAll('.category-icon').forEach(icon => {
    icon.style.animationDelay = \`\${Math.random() * 2}s\`;
});`
},

// ====================================================================
// COLORFUL TEMPLATE 45: COLOR SPLASH
// ====================================================================
colorful5: {
    html: `<div class="splash-table-container">
    <div class="splash-header">
        <h3>🎉 Event Calendar</h3>
        <div class="splash-particles" id="splashParticles">
            <!-- Particles will be generated by JavaScript -->
        </div>
    </div>
    <table class="splash-table">
        <thead>
            <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Attendees</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr class="splash-row">
                <td>
                    <div class="event-card">
                        <div class="event-color" style="--splash-color: #ff6b6b"></div>
                        <div class="event-details">
                            <div class="event-name">Design Workshop</div>
                            <div class="event-type">Workshop</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="date-badge">
                        <span class="date-day">25</span>
                        <span class="date-month">Jan</span>
                    </div>
                </td>
                <td>Main Hall</td>
                <td>
                    <div class="attendees-count">
                        <span class="count-number">120</span>
                        <span class="count-label">people</span>
                    </div>
                </td>
                <td>
                    <div class="splash-status confirmed">
                        <span class="status-dot"></span>
                        Confirmed
                    </div>
                </td>
            </tr>
            <tr class="splash-row">
                <td>
                    <div class="event-card">
                        <div class="event-color" style="--splash-color: #4ecdc4"></div>
                        <div class="event-details">
                            <div class="event-name">Tech Conference</div>
                            <div class="event-type">Conference</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="date-badge">
                        <span class="date-day">14</span>
                        <span class="date-month">Feb</span>
                    </div>
                </td>
                <td>Grand Ballroom</td>
                <td>
                    <div class="attendees-count">
                        <span class="count-number">450</span>
                        <span class="count-label">people</span>
                    </div>
                </td>
                <td>
                    <div class="splash-status sold-out">
                        <span class="status-dot"></span>
                        Sold Out
                    </div>
                </td>
            </tr>
            <tr class="splash-row">
                <td>
                    <div class="event-card">
                        <div class="event-color" style="--splash-color: #45b7d1"></div>
                        <div class="event-details">
                            <div class="event-name">Networking Mixer</div>
                            <div class="event-type">Social</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="date-badge">
                        <span class="date-day">08</span>
                        <span class="date-month">Mar</span>
                    </div>
                </td>
                <td>Roof Terrace</td>
                <td>
                    <div class="attendees-count">
                        <span class="count-number">80</span>
                        <span class="count-label">people</span>
                    </div>
                </td>
                <td>
                    <div class="splash-status upcoming">
                        <span class="status-dot"></span>
                        Upcoming
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `@keyframes splash {
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: scale(4) rotate(360deg);
        opacity: 0;
    }
}

@keyframes confetti {
    0% {
        transform: translateY(-100vh) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}

@keyframes colorPulse {
    0%, 100% { 
        background-position: 0% 50%;
        filter: hue-rotate(0deg);
    }
    50% { 
        background-position: 100% 50%;
        filter: hue-rotate(180deg);
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.splash-table-container {
    background: linear-gradient(135deg, 
        #ff6b6b, #4ecdc4, #45b7d1, 
        #96ceb4, #feca57, #ff9ff3
    );
    background-size: 400% 400%;
    animation: colorPulse 8s ease infinite;
    border-radius: 20px;
    padding: 3px;
    position: relative;
    overflow: hidden;
}

.splash-header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    padding: 2rem;
    border-radius: 17px 17px 0 0;
    text-align: center;
    position: relative;
}

.splash-header h3 {
    margin: 0;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.75rem;
    font-weight: 700;
}

.splash-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle {
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--particle-color);
    border-radius: 50%;
    animation: confetti 3s ease-in-out infinite;
}

.splash-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 0 0 17px 17px;
}

.splash-table th {
    background: linear-gradient(135deg, 
        rgba(255, 107, 107, 0.9), 
        rgba(78, 205, 196, 0.9)
    );
    color: white;
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.splash-table td {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    color: #2d3748;
    font-weight: 500;
    transition: all 0.3s ease;
}

.splash-row {
    animation: bounceIn 0.6s ease-out;
    animation-fill-mode: both;
}

.splash-row:nth-child(1) { animation-delay: 0.1s; }
.splash-row:nth-child(2) { animation-delay: 0.2s; }
.splash-row:nth-child(3) { animation-delay: 0.3s; }

.splash-row:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.02);
}

.event-card {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.event-color {
    width: 4px;
    height: 40px;
    background: var(--splash-color);
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}

.event-color::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: inherit;
    animation: splash 2s ease-in-out infinite;
}

.event-details .event-name {
    font-weight: 600;
    color: #1a202c;
}

.event-details .event-type {
    font-size: 0.75rem;
    color: #718096;
    background: rgba(255, 255, 255, 0.5);
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
}

.date-badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 0.5rem;
    border-radius: 10px;
    min-width: 60px;
    animation: bounceIn 1s ease-out;
}

.date-day {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1;
}

.date-month {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.attendees-count {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.count-number {
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d3748;
}

.count-label {
    font-size: 0.75rem;
    color: #718096;
}

.splash-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
}

.splash-status.confirmed {
    background: linear-gradient(135deg, #48bb78, #68d391);
    color: white;
}

.splash-status.sold-out {
    background: linear-gradient(135deg, #ed8936, #f6ad55);
    color: white;
}

.splash-status.upcoming {
    background: linear-gradient(135deg, #4299e1, #63b3ed);
    color: white;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
}`,
    js: `// Color splash particles
function createParticles() {
    const container = document.getElementById('splashParticles');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.setProperty('--particle-color', colors[Math.floor(Math.random() * colors.length)]);
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (2 + Math.random() * 2) + 's';
        container.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// Add click effects to table rows
document.querySelectorAll('.splash-row').forEach(row => {
    row.addEventListener('click', function() {
        // Create splash effect
        const rect = this.getBoundingClientRect();
        createClickSplash(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
});

function createClickSplash(x, y) {
    const splash = document.createElement('div');
    splash.style.cssText = \`
        position: fixed;
        left: \${x}px;
        top: \${y}px;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: splash 0.6s ease-out forwards;
    \`;
    
    document.body.appendChild(splash);
    setTimeout(() => splash.remove(), 600);
}

// Add hover animations to event colors
document.querySelectorAll('.event-color').forEach(color => {
    color.addEventListener('mouseenter', function() {
        this.style.animation = 'splash 1s ease-in-out';
    });
});`
},
// ====================================================================
// COLORFUL TEMPLATE 46: GRADIENT CARDS
// ====================================================================
colorful6: {
    html: `<div class="gradient-cards-container">
    <div class="cards-header">
        <h3>🎯 Project Dashboard</h3>
        <div class="view-toggle">
            <button class="view-btn active">Grid</button>
            <button class="view-btn">List</button>
        </div>
    </div>
    
    <div class="gradient-cards-grid">
        <!-- Card 1 -->
        <div class="gradient-card" style="--card-color-1: #ff6b6b; --card-color-2: #ffa726;">
            <div class="card-header">
                <div class="card-icon">🎨</div>
                <div class="card-badge">Active</div>
            </div>
            <div class="card-content">
                <h4 class="card-title">Website Redesign</h4>
                <p class="card-desc">Complete homepage redesign with new components</p>
                <div class="card-progress">
                    <div class="progress-info">
                        <span>Progress</span>
                        <span>75%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%"></div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="team-avatars">
                    <div class="avatar" style="background: #ff6b6b">JD</div>
                    <div class="avatar" style="background: #4ecdc4">SM</div>
                    <div class="avatar" style="background: #45b7d1">+2</div>
                </div>
                <div class="deadline">Due: Jan 25</div>
            </div>
        </div>

        <!-- Card 2 -->
        <div class="gradient-card" style="--card-color-1: #4ecdc4; --card-color-2: #45b7d1;">
            <div class="card-header">
                <div class="card-icon">⚡</div>
                <div class="card-badge">Planning</div>
            </div>
            <div class="card-content">
                <h4 class="card-title">Mobile App</h4>
                <p class="card-desc">iOS & Android application development</p>
                <div class="card-progress">
                    <div class="progress-info">
                        <span>Progress</span>
                        <span>45%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 45%"></div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="team-avatars">
                    <div class="avatar" style="background: #ffa726">MC</div>
                    <div class="avatar" style="background: #ab47bc">AL</div>
                </div>
                <div class="deadline">Due: Feb 14</div>
            </div>
        </div>

        <!-- Card 3 -->
        <div class="gradient-card" style="--card-color-1: #ab47bc; --card-color-2: #7e57c2;">
            <div class="card-header">
                <div class="card-icon">📊</div>
                <div class="card-badge">Testing</div>
            </div>
            <div class="card-content">
                <h4 class="card-title">Analytics Dashboard</h4>
                <p class="card-desc">Real-time analytics and reporting system</p>
                <div class="card-progress">
                    <div class="progress-info">
                        <span>Progress</span>
                        <span>90%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 90%"></div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="team-avatars">
                    <div class="avatar" style="background: #66bb6a">RJ</div>
                    <div class="avatar" style="background: #42a5f5">KT</div>
                    <div class="avatar" style="background: #ff6b6b">+1</div>
                </div>
                <div class="deadline">Due: Jan 30</div>
            </div>
        </div>
    </div>
</div>`,
    css: `@keyframes cardEntrance {
    from {
        opacity: 0;
        transform: translateY(50px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes floatCard {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(1deg); }
    66% { transform: translateY(-5px) rotate(-1deg); }
}

.gradient-cards-container {
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 25px;
    min-height: 600px;
}

.cards-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.cards-header h3 {
    margin: 0;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.view-toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    padding: 0.25rem;
    backdrop-filter: blur(10px);
}

.view-btn {
    background: transparent;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-btn.active {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.gradient-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.gradient-card {
    background: linear-gradient(135deg, var(--card-color-1), var(--card-color-2));
    border-radius: 20px;
    padding: 1.5rem;
    color: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    animation: cardEntrance 0.6s ease-out;
    animation-fill-mode: both;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.gradient-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        transparent, 
        rgba(255,255,255,0.1), 
        transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
}

.gradient-card:hover {
    transform: translateY(-10px) scale(1.02);
    animation: floatCard 3s ease-in-out infinite;
}

.gradient-card:hover::before {
    opacity: 1;
}

.gradient-card:nth-child(1) { animation-delay: 0.1s; }
.gradient-card:nth-child(2) { animation-delay: 0.2s; }
.gradient-card:nth-child(3) { animation-delay: 0.3s; }

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.card-icon {
    font-size: 2rem;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
}

.card-badge {
    background: rgba(255, 255, 255, 0.3);
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    backdrop-filter: blur(10px);
}

.card-content {
    margin-bottom: 1.5rem;
}

.card-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    font-weight: 700;
}

.card-desc {
    margin: 0 0 1rem 0;
    opacity: 0.9;
    font-size: 0.9rem;
    line-height: 1.4;
}

.card-progress {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 0.75rem;
    backdrop-filter: blur(10px);
}

.progress-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 3px;
    transition: width 1s ease-in-out;
    position: relative;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.6), 
        transparent
    );
    animation: shimmer 2s infinite;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.team-avatars {
    display: flex;
    gap: 0.5rem;
}

.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.5);
}

.deadline {
    font-size: 0.85rem;
    font-weight: 600;
    opacity: 0.9;
}`,
    js: `// Gradient cards interactions
document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const viewType = this.textContent;
        const grid = document.querySelector('.gradient-cards-grid');
        
        if (viewType === 'List') {
            grid.style.gridTemplateColumns = '1fr';
        } else {
            grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(320px, 1fr))';
        }
    });
});

// Animate progress bars on load
document.querySelectorAll('.progress-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 500);
});

// Add click effects to cards
document.querySelectorAll('.gradient-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 47: GLASS MORPHISM
// ====================================================================
colorful7: {
    html: `<div class="glass-table-container">
    <div class="glass-background">
        <div class="glass-blob blob-1"></div>
        <div class="glass-blob blob-2"></div>
        <div class="glass-blob blob-3"></div>
    </div>
    
    <div class="glass-content">
        <div class="glass-header">
            <h3>💎 Sales Performance</h3>
            <div class="glass-filters">
                <select class="glass-select">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option selected>This Quarter</option>
                </select>
            </div>
        </div>

        <table class="glass-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Sales</th>
                    <th>Revenue</th>
                    <th>Growth</th>
                </tr>
            </thead>
            <tbody>
                <tr class="glass-row">
                    <td>
                        <div class="product-glass">
                            <div class="product-emoji">💻</div>
                            <div class="product-details">
                                <div class="product-name">Laptop Pro</div>
                                <div class="product-sku">#LP-2024</div>
                            </div>
                        </div>
                    </td>
                    <td>Electronics</td>
                    <td>156</td>
                    <td>$25,680</td>
                    <td>
                        <div class="growth-glass positive">
                            <span class="growth-arrow">↗</span>
                            +24.5%
                        </div>
                    </td>
                </tr>
                <tr class="glass-row">
                    <td>
                        <div class="product-glass">
                            <div class="product-emoji">📱</div>
                            <div class="product-details">
                                <div class="product-name">Phone Max</div>
                                <div class="product-sku">#PM-2024</div>
                            </div>
                        </div>
                    </td>
                    <td>Electronics</td>
                    <td>234</td>
                    <td>$18,720</td>
                    <td>
                        <div class="growth-glass negative">
                            <span class="growth-arrow">↘</span>
                            -8.2%
                        </div>
                    </td>
                </tr>
                <tr class="glass-row">
                    <td>
                        <div class="product-glass">
                            <div class="product-emoji">🎧</div>
                            <div class="product-details">
                                <div class="product-name">Audio Pro</div>
                                <div class="product-sku">#AP-2024</div>
                            </div>
                        </div>
                    </td>
                    <td>Accessories</td>
                    <td>89</td>
                    <td>$8,900</td>
                    <td>
                        <div class="growth-glass positive">
                            <span class="growth-arrow">↗</span>
                            +15.7%
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
    css: `@keyframes floatBlob {
    0%, 100% { 
        transform: translate(0, 0) scale(1);
    }
    33% { 
        transform: translate(30px, -30px) scale(1.1);
    }
    66% { 
        transform: translate(-20px, 20px) scale(0.9);
    }
}

@keyframes glassGlow {
    0%, 100% { 
        box-shadow: 
            0 8px 32px rgba(31, 38, 135, 0.37),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }
    50% { 
        box-shadow: 
            0 12px 40px rgba(31, 38, 135, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
}

.glass-table-container {
    position: relative;
    min-height: 500px;
    border-radius: 25px;
    overflow: hidden;
}

.glass-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        rgba(102, 126, 234, 0.8), 
        rgba(118, 75, 162, 0.8)
    );
    z-index: -2;
}

.glass-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    animation: floatBlob 15s ease-in-out infinite;
}

.blob-1 {
    width: 300px;
    height: 300px;
    background: rgba(255, 107, 107, 0.4);
    top: -100px;
    left: -100px;
    animation-delay: 0s;
}

.blob-2 {
    width: 400px;
    height: 400px;
    background: rgba(78, 205, 196, 0.4);
    bottom: -150px;
    right: -100px;
    animation-delay: 5s;
}

.blob-3 {
    width: 250px;
    height: 250px;
    background: rgba(171, 71, 188, 0.4);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 10s;
}

.glass-content {
    position: relative;
    z-index: 1;
    padding: 2rem;
}

.glass-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1.5rem 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: glassGlow 3s ease-in-out infinite;
}

.glass-header h3 {
    margin: 0;
    color: white;
    font-size: 1.75rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.glass-select {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 0.75rem 1rem;
    color: white;
    font-weight: 600;
    backdrop-filter: blur(10px);
    cursor: pointer;
}

.glass-select option {
    background: rgba(0, 0, 0, 0.8);
    color: white;
}

.glass-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: glassGlow 3s ease-in-out infinite;
}

.glass-table th {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-table td {
    padding: 1.5rem 2rem;
    color: white;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.glass-row:hover td {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
}

.product-glass {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.product-emoji {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
}

.product-details .product-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.product-details .product-sku {
    font-size: 0.75rem;
    opacity: 0.8;
}

.growth-glass {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 600;
    font-size: 0.85rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.growth-glass.positive {
    background: rgba(102, 187, 106, 0.3);
    color: #a7f3d0;
}

.growth-glass.negative {
    background: rgba(239, 68, 68, 0.3);
    color: #fecaca;
}

.growth-arrow {
    font-size: 1.2rem;
}`,
    js: `// Glass morphism interactions
document.querySelector('.glass-select').addEventListener('change', function(e) {
    // Add selection feedback
    this.style.background = 'rgba(255, 255, 255, 0.3)';
    setTimeout(() => {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    }, 200);
});

// Add hover effects to glass rows
document.querySelectorAll('.glass-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.15)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.background = 'transparent';
    });
});

// Animate emojis on hover
document.querySelectorAll('.product-emoji').forEach(emoji => {
    emoji.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(10deg)';
    });
    
    emoji.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 48: 3D FLOATING
// ====================================================================
colorful8: {
    html: `<div class="floating-3d-container">
    <div class="floating-header">
        <h3>🚀 Task Manager</h3>
        <div class="floating-actions">
            <button class="action-btn add-btn">+ Add Task</button>
            <button class="action-btn filter-btn">Filter</button>
        </div>
    </div>

    <div class="floating-scene">
        <div class="floating-card card-1" style="--card-color: #ff6b6b">
            <div class="card-3d-content">
                <div class="card-badge urgent">Urgent</div>
                <h4 class="card-title">Design Mockups</h4>
                <p class="card-desc">Create homepage mockups for client review</p>
                <div class="card-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏰</span>
                        <span>Today</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>Design Team</span>
                    </div>
                </div>
                <div class="card-progress-3d">
                    <div class="progress-3d-bar">
                        <div class="progress-3d-fill" style="width: 75%"></div>
                    </div>
                    <span class="progress-text">75%</span>
                </div>
            </div>
        </div>

        <div class="floating-card card-2" style="--card-color: #4ecdc4">
            <div class="card-3d-content">
                <div class="card-badge normal">Normal</div>
                <h4 class="card-title">Code Review</h4>
                <p class="card-desc">Review pull requests and merge features</p>
                <div class="card-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏰</span>
                        <span>Tomorrow</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>Dev Team</span>
                    </div>
                </div>
                <div class="card-progress-3d">
                    <div class="progress-3d-bar">
                        <div class="progress-3d-fill" style="width: 45%"></div>
                    </div>
                    <span class="progress-text">45%</span>
                </div>
            </div>
        </div>

        <div class="floating-card card-3" style="--card-color: #45b7d1">
            <div class="card-3d-content">
                <div class="card-badge low">Low</div>
                <h4 class="card-title">Documentation</h4>
                <p class="card-desc">Update API documentation for new features</p>
                <div class="card-meta">
                    <div class="meta-item">
                        <span class="meta-icon">⏰</span>
                        <span>Jan 30</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>Tech Writers</span>
                    </div>
                </div>
                <div class="card-progress-3d">
                    <div class="progress-3d-bar">
                        <div class="progress-3d-fill" style="width: 25%"></div>
                    </div>
                    <span class="progress-text">25%</span>
                </div>
            </div>
        </div>
    </div>
</div>`,
    css: `@keyframes float3D {
    0%, 100% { 
        transform: 
            translateY(0px) 
            rotateX(0deg) 
            rotateY(0deg);
    }
    33% { 
        transform: 
            translateY(-20px) 
            rotateX(5deg) 
            rotateY(5deg);
    }
    66% { 
        transform: 
            translateY(-10px) 
            rotateX(-3deg) 
            rotateY(-3deg);
    }
}

@keyframes cardAppear {
    from {
        opacity: 0;
        transform: 
            translateY(100px) 
            rotateX(90deg) 
            scale(0.8);
    }
    to {
        opacity: 1;
        transform: 
            translateY(0) 
            rotateX(0deg) 
            scale(1);
    }
}

@keyframes glow3D {
    0%, 100% { 
        box-shadow: 
            0 10px 30px rgba(0,0,0,0.3),
            0 0 0 1px rgba(255,255,255,0.1);
    }
    50% { 
        box-shadow: 
            0 20px 50px rgba(0,0,0,0.4),
            0 0 0 1px rgba(255,255,255,0.2),
            0 0 30px var(--card-color);
    }
}

.floating-3d-container {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border-radius: 30px;
    padding: 2rem;
    min-height: 600px;
    perspective: 1000px;
    transform-style: preserve-3d;
}

.floating-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    transform: translateZ(50px);
}

.floating-header h3 {
    margin: 0;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}

.floating-actions {
    display: flex;
    gap: 1rem;
}

.action-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    transform: translateZ(30px);
}

.action-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateZ(30px) translateY(-2px);
}

.floating-scene {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    transform-style: preserve-3d;
}

.floating-card {
    background: linear-gradient(135deg, 
        var(--card-color),
        color-mix(in srgb, var(--card-color) 70%, black)
    );
    border-radius: 25px;
    padding: 2rem;
    color: white;
    animation: float3D 6s ease-in-out infinite, glow3D 4s ease-in-out infinite;
    transform-style: preserve-3d;
    position: relative;
    overflow: hidden;
    animation: cardAppear 0.8s ease-out;
    animation-fill-mode: both;
}

.floating-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
        transparent, 
        rgba(255,255,255,0.1), 
        transparent
    );
    transform: translateZ(1px);
}

.card-1 { animation-delay: 0.1s; --card-color: #ff6b6b; }
.card-2 { animation-delay: 0.2s; --card-color: #4ecdc4; }
.card-3 { animation-delay: 0.3s; --card-color: #45b7d1; }

.floating-card:hover {
    animation: float3D 2s ease-in-out infinite, glow3D 2s ease-in-out infinite;
    transform: translateZ(50px) scale(1.05);
}

.card-3d-content {
    position: relative;
    z-index: 2;
    transform: translateZ(30px);
}

.card-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.card-badge.urgent { background: rgba(239, 68, 68, 0.3); }
.card-badge.normal { background: rgba(34, 197, 94, 0.3); }
.card-badge.low { background: rgba(59, 130, 246, 0.3); }

.card-title {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.card-desc {
    margin: 0 0 1.5rem 0;
    opacity: 0.9;
    line-height: 1.5;
}

.card-meta {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    opacity: 0.8;
}

.meta-icon {
    font-size: 1.1rem;
}

.card-progress-3d {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.progress-3d-bar {
    flex: 1;
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
    transform: translateZ(20px);
}

.progress-3d-fill {
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    transition: width 1s ease-in-out;
    position: relative;
}

.progress-3d-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255,255,255,0.6), 
        transparent
    );
    animation: shimmer 2s infinite;
}

.progress-text {
    font-weight: 700;
    font-size: 0.9rem;
    min-width: 40px;
}`,
    js: `// 3D floating interactions
document.querySelectorAll('.floating-card').forEach(card => {
    // Mouse move 3D effect
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateY = (x - centerX) / 25;
        const rotateX = (centerY - y) / 25;
        
        this.style.transform = \`
            translateZ(50px) 
            rotateX(\${rotateX}deg) 
            rotateY(\${rotateY}deg)
        \`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    });
});

// Animate progress bars
document.querySelectorAll('.progress-3d-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 1000);
});

// Add button interactions
document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'translateZ(30px) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateZ(30px) scale(1)';
        }, 150);
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 49: LIQUID ANIMATION
// ====================================================================
colorful9: {
    html: `<div class="liquid-table-container">
    <div class="liquid-header">
        <h3>🌊 Analytics Dashboard</h3>
        <div class="liquid-waves">
            <div class="liquid-wave"></div>
            <div class="liquid-wave"></div>
            <div class="liquid-wave"></div>
        </div>
    </div>

    <div class="liquid-content">
        <div class="liquid-card">
            <div class="liquid-metric">
                <div class="metric-icon">👥</div>
                <div class="metric-data">
                    <div class="metric-value">1,234</div>
                    <div class="metric-label">Active Users</div>
                </div>
                <div class="metric-change positive">+12%</div>
            </div>
            <div class="liquid-fill" style="--fill-level: 75%"></div>
        </div>

        <div class="liquid-card">
            <div class="liquid-metric">
                <div class="metric-icon">💰</div>
                <div class="metric-data">
                    <div class="metric-value">$45,678</div>
                    <div class="metric-label">Revenue</div>
                </div>
                <div class="metric-change positive">+8%</div>
            </div>
            <div class="liquid-fill" style="--fill-level: 60%"></div>
        </div>

        <div class="liquid-card">
            <div class="liquid-metric">
                <div class="metric-icon">📈</div>
                <div class="metric-data">
                    <div class="metric-value">89%</div>
                    <div class="metric-label">Engagement</div>
                </div>
                <div class="metric-change negative">-3%</div>
            </div>
            <div class="liquid-fill" style="--fill-level: 89%"></div>
        </div>

        <div class="liquid-card">
            <div class="liquid-metric">
                <div class="metric-icon">🔄</div>
                <div class="metric-data">
                    <div class="metric-value">2.3s</div>
                    <div class="metric-label">Load Time</div>
                </div>
                <div class="metric-change positive">-15%</div>
            </div>
            <div class="liquid-fill" style="--fill-level: 45%"></div>
        </div>
    </div>

    <table class="liquid-table">
        <thead>
            <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Previous</th>
                <th>Change</th>
                <th>Trend</th>
            </tr>
        </thead>
        <tbody>
            <tr class="liquid-row">
                <td>Page Views</td>
                <td>12,456</td>
                <td>11,234</td>
                <td>
                    <div class="liquid-change positive">
                        <span class="change-arrow">↑</span>
                        +10.9%
                    </div>
                </td>
                <td>
                    <div class="liquid-trend up"></div>
                </td>
            </tr>
            <tr class="liquid-row">
                <td>Bounce Rate</td>
                <td>32%</td>
                <td>28%</td>
                <td>
                    <div class="liquid-change negative">
                        <span class="change-arrow">↓</span>
                        +14.3%
                    </div>
                </td>
                <td>
                    <div class="liquid-trend down"></div>
                </td>
            </tr>
            <tr class="liquid-row">
                <td>Conversion</td>
                <td>4.2%</td>
                <td>3.8%</td>
                <td>
                    <div class="liquid-change positive">
                        <span class="change-arrow">↑</span>
                        +10.5%
                    </div>
                </td>
                <td>
                    <div class="liquid-trend up"></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
    css: `@keyframes liquidWave {
    0% { transform: translateX(-100%) scaleY(1); }
    50% { transform: translateX(0%) scaleY(1.2); }
    100% { transform: translateX(100%) scaleY(1); }
}

@keyframes liquidFill {
    from { height: 0%; }
    to { height: var(--fill-level); }
}

@keyframes bubble {
    0% {
        transform: translateY(0) scale(0);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: translateY(-100px) scale(1);
        opacity: 0;
    }
}

@keyframes floatLiquid {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.liquid-table-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 30px;
    padding: 2rem;
    min-height: 600px;
    position: relative;
    overflow: hidden;
}

.liquid-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.liquid-header h3 {
    margin: 0 0 2rem 0;
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    animation: floatLiquid 3s ease-in-out infinite;
}

.liquid-waves {
    position: absolute;
    bottom: -2rem;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    justify-content: space-between;
}

.liquid-wave {
    flex: 1;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    margin: 0 1rem;
    animation: liquidWave 4s ease-in-out infinite;
}

.liquid-wave:nth-child(1) { animation-delay: 0s; }
.liquid-wave:nth-child(2) { animation-delay: 1s; }
.liquid-wave:nth-child(3) { animation-delay: 2s; }

.liquid-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.liquid-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1.5rem;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    animation: floatLiquid 4s ease-in-out infinite;
}

.liquid-card:nth-child(1) { animation-delay: 0s; }
.liquid-card:nth-child(2) { animation-delay: 1s; }
.liquid-card:nth-child(3) { animation-delay: 2s; }
.liquid-card:nth-child(4) { animation-delay: 3s; }

.liquid-metric {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
}

.metric-icon {
    font-size: 2rem;
    filter: drop-shadow(0 2px 5px rgba(0,0,0,0.3));
}

.metric-data {
    flex: 1;
    margin: 0 1rem;
}

.metric-value {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
}

.metric-label {
    font-size: 0.9rem;
    opacity: 0.8;
}

.metric-change {
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 700;
    backdrop-filter: blur(10px);
}

.metric-change.positive {
    background: rgba(102, 187, 106, 0.3);
    color: #a7f3d0;
}

.metric-change.negative {
    background: rgba(239, 68, 68, 0.3);
    color: #fecaca;
}

.liquid-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0 0 20px 20px;
    animation: liquidFill 2s ease-out;
    height: 0%;
}

.liquid-fill::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    height: 20px;
    background: inherit;
    border-radius: 50%;
}

/* Bubble animations for liquid effect */
.liquid-fill::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: bubble 3s ease-in-out infinite;
    left: 20%;
}

.liquid-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.liquid-table th {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.liquid-table td {
    padding: 1.5rem 2rem;
    color: white;
    font-weight: 500;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.liquid-row:hover td {
    background: rgba(255, 255, 255, 0.1);
}

.liquid-change {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 600;
    font-size: 0.85rem;
    backdrop-filter: blur(10px);
}

.liquid-change.positive {
    background: rgba(102, 187, 106, 0.3);
    color: #a7f3d0;
}

.liquid-change.negative {
    background: rgba(239, 68, 68, 0.3);
    color: #fecaca;
}

.liquid-trend {
    width: 80px;
    height: 30px;
    position: relative;
}

.liquid-trend.up::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(45deg, 
            transparent 45%, 
            #a7f3d0 45%, 
            #a7f3d0 55%, 
            transparent 55%
        );
    animation: liquidWave 2s ease-in-out infinite;
}

.liquid-trend.down::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(-45deg, 
            transparent 45%, 
            #fecaca 45%, 
            #fecaca 55%, 
            transparent 55%
        );
    animation: liquidWave 2s ease-in-out infinite;
}`,
    js: `// Liquid animations
document.querySelectorAll('.liquid-fill').forEach(fill => {
    // Create bubbles
    for (let i = 0; i < 5; i++) {
        const bubble = document.createElement('div');
        bubble.style.cssText = \`
            position: absolute;
            width: \${Math.random() * 8 + 4}px;
            height: \${Math.random() * 8 + 4}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            animation: bubble \${Math.random() * 2 + 2}s ease-in-out infinite;
            left: \${Math.random() * 80 + 10}%;
            animation-delay: \${Math.random() * 2}s;
        \`;
        fill.appendChild(bubble);
    }
});

// Animate liquid fills
document.querySelectorAll('.liquid-fill').forEach(fill => {
    const level = fill.style.getPropertyValue('--fill-level');
    fill.style.height = '0%';
    
    setTimeout(() => {
        fill.style.height = level;
    }, 500);
});

// Add hover effects to liquid cards
document.querySelectorAll('.liquid-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'floatLiquid 1s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = 'floatLiquid 4s ease-in-out infinite';
    });
});`
},

// ====================================================================
// COLORFUL TEMPLATE 50: CYBERPUNK
// ====================================================================
colorful10: {
    html: `<div class="cyberpunk-container">
    <div class="cyberpunk-header">
        <h3 class="cyberpunk-title">
            <span class="cyber-text">SYSTEM</span>
            <span class="punk-text">MONITOR</span>
        </h3>
        <div class="cyberpunk-stats">
            <div class="cyber-stat">
                <span class="stat-label">ONLINE</span>
                <span class="stat-value">87%</span>
            </div>
            <div class="cyber-stat">
                <span class="stat-label">UPTIME</span>
                <span class="stat-value">99.2%</span>
            </div>
        </div>
    </div>

    <div class="cyberpunk-grid">
        <div class="cyber-card">
            <div class="cyber-card-header">
                <div class="cyber-icon">🖥️</div>
                <div class="cyber-status online">ONLINE</div>
            </div>
            <div class="cyber-card-content">
                <h4 class="cyber-card-title">SERVER ALPHA</h4>
                <div class="cyber-metrics">
                    <div class="cyber-metric">
                        <span class="metric-name">CPU</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 65%"></div>
                        </div>
                        <span class="metric-value">65%</span>
                    </div>
                    <div class="cyber-metric">
                        <span class="metric-name">RAM</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 42%"></div>
                        </div>
                        <span class="metric-value">42%</span>
                    </div>
                    <div class="cyber-metric">
                        <span class="metric-name">NET</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 78%"></div>
                        </div>
                        <span class="metric-value">78%</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="cyber-card">
            <div class="cyber-card-header">
                <div class="cyber-icon">💾</div>
                <div class="cyber-status stable">STABLE</div>
            </div>
            <div class="cyber-card-content">
                <h4 class="cyber-card-title">DATABASE BETA</h4>
                <div class="cyber-metrics">
                    <div class="cyber-metric">
                        <span class="metric-name">LOAD</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 34%"></div>
                        </div>
                        <span class="metric-value">34%</span>
                    </div>
                    <div class="cyber-metric">
                        <span class="metric-name">IOPS</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 56%"></div>
                        </div>
                        <span class="metric-value">56%</span>
                    </div>
                    <div class="cyber-metric">
                        <span class="metric-name">CACHE</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 89%"></div>
                        </div>
                        <span class="metric-value">89%</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="cyber-card">
            <div class="cyber-card-header">
                <div class="cyber-icon">🌐</div>
                <div class="cyber-status warning">WARNING</div>
            </div>
            <div class="cyber-card-content">
                <h4 class="cyber-card-title">NETWORK GAMMA</h4>
                <div class="cyber-metrics">
                    <div class="cyber-metric">
                        <span class="metric-name">LATENCY</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 82%"></div>
                        </div>
                        <span class="metric-value">82ms</span>
                    </div>
                    <div class="cyber-metric">
                        <span class="metric-name">THROUGHPUT</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 45%"></div>
                        </div>
                        <span class="metric-value">45%</span>
                    </div>
                    <div class="cyber-metric">
                        <span class="metric-name">ERRORS</span>
                        <div class="cyber-bar">
                            <div class="cyber-fill" style="--fill: 12%"></div>
                        </div>
                        <span class="metric-value">12%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="cyberpunk-table-container">
        <table class="cyberpunk-table">
            <thead>
                <tr>
                    <th>SERVICE</th>
                    <th>STATUS</th>
                    <th>RESPONSE</th>
                    <th>LOAD</th>
                    <th>ALERTS</th>
                </tr>
            </thead>
            <tbody>
                <tr class="cyberpunk-row">
                    <td>
                        <div class="service-info">
                            <div class="service-dot online"></div>
                            <span>API Gateway</span>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge cyber-online">OPERATIONAL</span>
                    </td>
                    <td>124ms</td>
                    <td>
                        <div class="load-indicator">
                            <div class="load-bar">
                                <div class="load-fill" style="width: 45%"></div>
                            </div>
                            <span>45%</span>
                        </div>
                    </td>
                    <td>0</td>
                </tr>
                <tr class="cyberpunk-row">
                    <td>
                        <div class="service-info">
                            <div class="service-dot warning"></div>
                            <span>Auth Service</span>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge cyber-warning">DEGRADED</span>
                    </td>
                    <td>256ms</td>
                    <td>
                        <div class="load-indicator">
                            <div class="load-bar">
                                <div class="load-fill" style="width: 78%"></div>
                            </div>
                            <span>78%</span>
                        </div>
                    </td>
                    <td>3</td>
                </tr>
                <tr class="cyberpunk-row">
                    <td>
                        <div class="service-info">
                            <div class="service-dot offline"></div>
                            <span>Database</span>
                        </div>
                    </td>
                    <td>
                        <span class="status-badge cyber-offline">OFFLINE</span>
                    </td>
                    <td>---</td>
                    <td>
                        <div class="load-indicator">
                            <div class="load-bar">
                                <div class="load-fill" style="width: 0%"></div>
                            </div>
                            <span>0%</span>
                        </div>
                    </td>
                    <td>12</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
    css: `@keyframes cyberGlow {
    0%, 100% { 
        text-shadow: 
            0 0 5px #00ffff,
            0 0 10px #00ffff,
            0 0 20px #00ffff;
        box-shadow: 
            0 0 10px #00ffff,
            inset 0 0 10px #00ffff;
    }
    50% { 
        text-shadow: 
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            0 0 40px #00ffff;
        box-shadow: 
            0 0 20px #00ffff,
            inset 0 0 20px #00ffff;
    }
}

@keyframes scanLine {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
}

@keyframes matrixRain {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}

@keyframes pulseCyber {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.cyberpunk-container {
    background: 
        radial-gradient(circle at 20% 80%, #0f0f23 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, #1a1a2e 0%, transparent 50%),
        linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    border: 2px solid #00ffff;
    border-radius: 0;
    padding: 2rem;
    min-height: 700px;
    position: relative;
    overflow: hidden;
}

.cyberpunk-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(90deg, 
            transparent 49%, 
            rgba(0, 255, 255, 0.1) 50%, 
            transparent 51%
        ),
        linear-gradient( 
            transparent 49%, 
            rgba(0, 255, 255, 0.1) 50%, 
            transparent 51%
        );
    background-size: 50px 50px;
    pointer-events: none;
    opacity: 0.3;
}

.cyberpunk-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
        transparent, 
        #00ffff, 
        #ff00ff, 
        #00ffff, 
        transparent
    );
    animation: scanLine 2s linear infinite;
}

.cyberpunk-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 2;
}

.cyberpunk-title {
    display: flex;
    gap: 1rem;
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.cyber-text {
    color: #00ffff;
    animation: cyberGlow 2s ease-in-out infinite;
}

.punk-text {
    color: #ff00ff;
    animation: cyberGlow 2s ease-in-out infinite;
    animation-delay: 1s;
}

.cyberpunk-stats {
    display: flex;
    gap: 2rem;
}

.cyber-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-label {
    color: #00ffff;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
}

.stat-value {
    color: #ff00ff;
    font-size: 1.5rem;
    font-weight: 900;
    animation: pulseCyber 1s ease-in-out infinite;
}

.cyberpunk-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.cyber-card {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #00ffff;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.cyber-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
        transparent, 
        #00ffff, 
        #ff00ff, 
        transparent
    );
}

.cyber-card:hover {
    border-color: #ff00ff;
    transform: translateY(-5px);
    box-shadow: 
        0 10px 30px rgba(0, 255, 255, 0.3),
        0 0 20px rgba(255, 0, 255, 0.2);
}

.cyber-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.cyber-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px #00ffff);
}

.cyber-status {
    padding: 0.4rem 0.8rem;
    border: 1px solid;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cyber-status.online {
    border-color: #00ff00;
    color: #00ff00;
    animation: cyberGlow 3s ease-in-out infinite;
}

.cyber-status.stable {
    border-color: #00ffff;
    color: #00ffff;
    animation: cyberGlow 3s ease-in-out infinite;
    animation-delay: 1s;
}

.cyber-status.warning {
    border-color: #ffff00;
    color: #ffff00;
    animation: cyberGlow 3s ease-in-out infinite;
    animation-delay: 2s;
}

.cyber-card-title {
    color: #00ffff;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
}

.cyber-metrics {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cyber-metric {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.metric-name {
    color: #ff00ff;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 60px;
}

.cyber-bar {
    flex: 1;
    height: 8px;
    background: rgba(0, 255, 255, 0.2);
    border: 1px solid #00ffff;
    position: relative;
    overflow: hidden;
}

.cyber-fill {
    height: 100%;
    background: linear-gradient(90deg, #00ffff, #ff00ff);
    width: var(--fill);
    position: relative;
    transition: width 1s ease-in-out;
}

.cyber-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.6), 
        transparent
    );
    animation: shimmer 1.5s infinite;
}

.metric-value {
    color: #00ffff;
    font-size: 0.8rem;
    font-weight: 700;
    min-width: 40px;
}

.cyberpunk-table-container {
    position: relative;
    z-index: 2;
}

.cyberpunk-table {
    width: 100%;
    border-collapse: collapse;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #00ffff;
}

.cyberpunk-table th {
    background: rgba(0, 255, 255, 0.1);
    color: #00ffff;
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-bottom: 1px solid #00ffff;
}

.cyberpunk-table td {
    padding: 1.5rem 2rem;
    color: #00ffff;
    font-weight: 500;
    border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.cyberpunk-row:hover td {
    background: rgba(0, 255, 255, 0.1);
}

.service-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.service-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: pulseCyber 1s ease-in-out infinite;
}

.service-dot.online {
    background: #00ff00;
    box-shadow: 0 0 10px #00ff00;
}

.service-dot.warning {
    background: #ffff00;
    box-shadow: 0 0 10px #ffff00;
}

.service-dot.offline {
    background: #ff0000;
    box-shadow: 0 0 10px #ff0000;
}

.status-badge {
    padding: 0.5rem 1rem;
    border: 1px solid;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cyber-online {
    border-color: #00ff00;
    color: #00ff00;
    animation: cyberGlow 3s ease-in-out infinite;
}

.cyber-warning {
    border-color: #ffff00;
    color: #ffff00;
    animation: cyberGlow 3s ease-in-out infinite;
    animation-delay: 1s;
}

.cyber-offline {
    border-color: #ff0000;
    color: #ff0000;
    animation: cyberGlow 3s ease-in-out infinite;
    animation-delay: 2s;
}

.load-indicator {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.load-bar {
    flex: 1;
    height: 6px;
    background: rgba(0, 255, 255, 0.2);
    border: 1px solid #00ffff;
    position: relative;
    overflow: hidden;
}

.load-fill {
    height: 100%;
    background: linear-gradient(90deg, #00ffff, #ff00ff);
    transition: width 1s ease-in-out;
}`,
    js: `// Cyberpunk animations
function createMatrixEffect() {
    const container = document.querySelector('.cyberpunk-container');
    const characters = '01アイウエオカキクケコサシスセソ';
    
    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.style.cssText = \`
            position: absolute;
            top: -20px;
            left: \${Math.random() * 100}%;
            color: #00ffff;
            font-family: 'Courier New', monospace;
            font-size: \${Math.random() * 12 + 8}px;
            animation: matrixRain \${Math.random() * 3 + 2}s linear infinite;
            animation-delay: \${Math.random() * 2}s;
            pointer-events: none;
            z-index: 1;
        \`;
        
        let text = '';
        for (let j = 0; j < 10; j++) {
            text += characters[Math.floor(Math.random() * characters.length)] + '\\n';
        }
        drop.textContent = text;
        
        container.appendChild(drop);
    }
}

// Initialize matrix effect
createMatrixEffect();

// Animate cyber bars
document.querySelectorAll('.cyber-fill').forEach(fill => {
    const fillValue = fill.style.getPropertyValue('--fill');
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = fillValue;
    }, 1000);
});

// Add click effects to cyber cards
document.querySelectorAll('.cyber-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.borderColor = '#ff00ff';
        this.style.boxShadow = '0 0 30px #ff00ff';
        
        setTimeout(() => {
            this.style.borderColor = '#00ffff';
            this.style.boxShadow = 'none';
        }, 300);
    });
});

// Animate load bars in table
document.querySelectorAll('.load-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 1500);
});`
},
// ====================================================================
// PREMIUM TEMPLATE 51: LUXURY DASHBOARD
// ====================================================================
premium1: {
    html: `<div class="luxury-dashboard">
    <div class="luxury-header">
        <div class="header-content">
            <h1 class="luxury-title">
                <span class="title-icon">👑</span>
                Wealth Management Dashboard
            </h1>
            <p class="luxury-subtitle">Premium Client Portfolio Overview</p>
        </div>
        <div class="luxury-controls">
            <button class="luxury-btn export-btn">
                <span class="btn-icon">📊</span>
                Export Report
            </button>
            <button class="luxury-btn refresh-btn">
                <span class="btn-icon">🔄</span>
                Refresh Data
            </button>
        </div>
    </div>

    <div class="luxury-stats">
        <div class="stat-card gold">
            <div class="stat-icon">💰</div>
            <div class="stat-data">
                <div class="stat-value">$12.8M</div>
                <div class="stat-label">Total Assets</div>
            </div>
            <div class="stat-trend positive">+5.2%</div>
        </div>
        <div class="stat-card platinum">
            <div class="stat-icon">📈</div>
            <div class="stat-data">
                <div class="stat-value">18.3%</div>
                <div class="stat-label">YTD Return</div>
            </div>
            <div class="stat-trend positive">+2.1%</div>
        </div>
        <div class="stat-card diamond">
            <div class="stat-icon">👥</div>
            <div class="stat-data">
                <div class="stat-value">24</div>
                <div class="stat-label">VIP Clients</div>
            </div>
            <div class="stat-trend positive">+3</div>
        </div>
    </div>

    <div class="luxury-table-container">
        <div class="table-header">
            <h3 class="table-title">Client Portfolio Performance</h3>
            <div class="table-filters">
                <select class="luxury-select">
                    <option>All Clients</option>
                    <option>Platinum Tier</option>
                    <option>Gold Tier</option>
                </select>
            </div>
        </div>
        
        <table class="luxury-table">
            <thead>
                <tr>
                    <th>
                        <div class="th-content">
                            <span class="th-icon">👤</span>
                            Client Name
                        </div>
                    </th>
                    <th>
                        <div class="th-content">
                            <span class="th-icon">💼</span>
                            Portfolio Value
                        </div>
                    </th>
                    <th>
                        <div class="th-content">
                            <span class="th-icon">📊</span>
                            YTD Growth
                        </div>
                    </th>
                    <th>
                        <div class="th-content">
                            <span class="th-icon">⭐</span>
                            Tier
                        </div>
                    </th>
                    <th>
                        <div class="th-content">
                            <span class="th-icon">📋</span>
                            Actions
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="luxury-row">
                    <td>
                        <div class="client-info">
                            <div class="client-avatar gold">GC</div>
                            <div class="client-details">
                                <div class="client-name">Global Corporation</div>
                                <div class="client-id">#GC-2024</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="portfolio-value">
                            <span class="currency">$</span>
                            <span class="amount">2,548,750</span>
                        </div>
                    </td>
                    <td>
                        <div class="growth-indicator premium-positive">
                            <span class="growth-arrow">↗</span>
                            +12.5%
                        </div>
                    </td>
                    <td>
                        <div class="tier-badge platinum">
                            <span class="tier-icon">⭐</span>
                            Platinum
                        </div>
                    </td>
                    <td>
                        <div class="luxury-actions">
                            <button class="action-btn view-btn">
                                <span class="action-icon">👁️</span>
                            </button>
                            <button class="action-btn edit-btn">
                                <span class="action-icon">✏️</span>
                            </button>
                            <button class="action-btn chart-btn">
                                <span class="action-icon">📈</span>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr class="luxury-row">
                    <td>
                        <div class="client-info">
                            <div class="client-avatar platinum">TG</div>
                            <div class="client-details">
                                <div class="client-name">Tech Giants Inc</div>
                                <div class="client-id">#TG-2024</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="portfolio-value">
                            <span class="currency">$</span>
                            <span class="amount">1,875,320</span>
                        </div>
                    </td>
                    <td>
                        <div class="growth-indicator premium-positive">
                            <span class="growth-arrow">↗</span>
                            +8.3%
                        </div>
                    </td>
                    <td>
                        <div class="tier-badge gold">
                            <span class="tier-icon">💫</span>
                            Gold
                        </div>
                    </td>
                    <td>
                        <div class="luxury-actions">
                            <button class="action-btn view-btn">
                                <span class="action-icon">👁️</span>
                            </button>
                            <button class="action-btn edit-btn">
                                <span class="action-icon">✏️</span>
                            </button>
                            <button class="action-btn chart-btn">
                                <span class="action-icon">📈</span>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr class="luxury-row">
                    <td>
                        <div class="client-info">
                            <div class="client-avatar diamond">FI</div>
                            <div class="client-details">
                                <div class="client-name">Fortune Investments</div>
                                <div class="client-id">#FI-2024</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="portfolio-value">
                            <span class="currency">$</span>
                            <span class="amount">3,215,890</span>
                        </div>
                    </td>
                    <td>
                        <div class="growth-indicator premium-negative">
                            <span class="growth-arrow">↘</span>
                            -2.1%
                        </div>
                    </td>
                    <td>
                        <div class="tier-badge diamond">
                            <span class="tier-icon">💎</span>
                            Diamond
                        </div>
                    </td>
                    <td>
                        <div class="luxury-actions">
                            <button class="action-btn view-btn">
                                <span class="action-icon">👁️</span>
                            </button>
                            <button class="action-btn edit-btn">
                                <span class="action-icon">✏️</span>
                            </button>
                            <button class="action-btn chart-btn">
                                <span class="action-icon">📈</span>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
    css: `@keyframes goldShimmer {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
}

@keyframes floatLuxury {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
}

.luxury-dashboard {
    background: 
        linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%),
        radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(192, 192, 192, 0.1) 0%, transparent 50%);
    border-radius: 30px;
    padding: 2rem;
    min-height: 700px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 215, 0, 0.3);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.luxury-dashboard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(45deg, 
            transparent 48%, 
            rgba(255, 215, 0, 0.1) 50%, 
            transparent 52%
        );
    background-size: 50px 50px;
    opacity: 0.3;
    pointer-events: none;
}

.luxury-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 3rem;
    position: relative;
    z-index: 2;
}

.header-content h1.luxury-title {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #FFD700, #FFEC8B, #FFFACD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.title-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
}

.luxury-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.luxury-controls {
    display: flex;
    gap: 1rem;
}

.luxury-btn {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(192, 192, 192, 0.2));
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: #FFD700;
    padding: 0.75rem 1.5rem;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.luxury-btn:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(192, 192, 192, 0.3));
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 215, 0, 0.2);
}

.luxury-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.stat-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid;
    position: relative;
    overflow: hidden;
    animation: floatLuxury 4s ease-in-out infinite;
}

.stat-card.gold {
    border-color: rgba(255, 215, 0, 0.5);
    animation-delay: 0s;
}

.stat-card.platinum {
    border-color: rgba(230, 230, 250, 0.5);
    animation-delay: 1s;
}

.stat-card.diamond {
    border-color: rgba(185, 242, 255, 0.5);
    animation-delay: 2s;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent
    );
    animation: goldShimmer 3s infinite;
}

.stat-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.stat-data {
    margin-bottom: 1rem;
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.stat-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.stat-trend {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
}

.stat-trend.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.luxury-table-container {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    border: 1px solid rgba(255, 215, 0, 0.2);
    overflow: hidden;
    position: relative;
}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

.table-title {
    margin: 0;
    color: #FFD700;
    font-size: 1.5rem;
    font-weight: 600;
}

.luxury-select {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    color: white;
    font-weight: 500;
    backdrop-filter: blur(10px);
    cursor: pointer;
}

.luxury-select option {
    background: #1a1a2e;
    color: white;
}

.luxury-table {
    width: 100%;
    border-collapse: collapse;
}

.luxury-table th {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(192, 192, 192, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #FFD700;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
}

.th-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.th-icon {
    font-size: 1.1rem;
}

.luxury-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.luxury-row:hover td {
    background: rgba(255, 215, 0, 0.05);
    transform: translateX(5px);
}

.client-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.client-avatar {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: white;
    font-size: 1.1rem;
    position: relative;
    overflow: hidden;
}

.client-avatar.gold {
    background: linear-gradient(135deg, #FFD700, #D4AF37);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.client-avatar.platinum {
    background: linear-gradient(135deg, #E5E4E2, #BEC2CB);
    box-shadow: 0 5px 15px rgba(230, 230, 250, 0.3);
}

.client-avatar.diamond {
    background: linear-gradient(135deg, #B9F2FF, #70D1FF);
    box-shadow: 0 5px 15px rgba(185, 242, 255, 0.3);
}

.client-avatar::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent
    );
    transform: rotate(45deg);
    animation: goldShimmer 2s infinite;
}

.client-details .client-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.client-details .client-id {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.portfolio-value {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
}

.currency {
    color: #FFD700;
    font-weight: 600;
}

.amount {
    font-size: 1.2rem;
    font-weight: 700;
    color: white;
}

.growth-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.growth-indicator.premium-positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.growth-indicator.premium-negative {
    background: rgba(239, 68, 68, 0.2);
    color: #f87171;
    border-color: rgba(239, 68, 68, 0.3);
}

.tier-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.tier-badge.platinum {
    background: rgba(230, 230, 250, 0.2);
    color: #e6e6fa;
    border-color: rgba(230, 230, 250, 0.3);
}

.tier-badge.gold {
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.tier-badge.diamond {
    background: rgba(185, 242, 255, 0.2);
    color: #b9f2ff;
    border-color: rgba(185, 242, 255, 0.3);
}

.luxury-actions {
    display: flex;
    gap: 0.5rem;
}

.action-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.action-btn:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: rgba(255, 215, 0, 0.5);
    color: #FFD700;
    transform: scale(1.1);
}`,
    js: `// Luxury dashboard interactions
document.querySelectorAll('.luxury-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Add sparkle effect
        const sparkle = document.createElement('div');
        sparkle.style.cssText = \`
            position: absolute;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #FFD700, transparent);
            border-radius: 50%;
            pointer-events: none;
            animation: sparkle 0.6s ease-out forwards;
        \`;
        
        const rect = this.getBoundingClientRect();
        sparkle.style.left = (rect.width / 2 - 10) + 'px';
        sparkle.style.top = (rect.height / 2 - 10) + 'px';
        
        this.style.position = 'relative';
        this.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 600);
    });
});

// Animate stat cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.stat-card').forEach(card => {
    observer.observe(card);
});

// Add hover effects to client avatars
document.querySelectorAll('.client-avatar').forEach(avatar => {
    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Luxury select interactions
document.querySelector('.luxury-select').addEventListener('change', function() {
    this.style.background = 'rgba(255, 215, 0, 0.2)';
    setTimeout(() => {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    }, 300);
});`
},

// ====================================================================
// PREMIUM TEMPLATE 52: EXECUTIVE PORTFOLIO
// ====================================================================
premium2: {
    html: `<div class="executive-portfolio">
    <div class="executive-header">
        <div class="header-gold-bar"></div>
        <div class="header-content">
            <h1 class="executive-title">
                <span class="title-crown">👑</span>
                Executive Investment Portfolio
            </h1>
            <div class="portfolio-summary">
                <div class="summary-item">
                    <span class="summary-label">Total Value</span>
                    <span class="summary-value">$8,450,000</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">YTD Return</span>
                    <span class="summary-value positive">+15.2%</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Risk Level</span>
                    <span class="summary-value">Balanced</span>
                </div>
            </div>
        </div>
    </div>

    <div class="executive-content">
        <div class="investment-grid">
            <div class="investment-card stock">
                <div class="card-header">
                    <div class="investment-icon">📈</div>
                    <div class="investment-badge primary">Primary</div>
                </div>
                <h3 class="investment-name">Blue Chip Stocks</h3>
                <div class="investment-value">
                    <span class="value-amount">$850,000</span>
                    <span class="value-change positive">+18.3%</span>
                </div>
                <div class="investment-meta">
                    <div class="meta-item">
                        <span class="meta-label">Allocation</span>
                        <span class="meta-value">45%</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Dividend</span>
                        <span class="meta-value">3.2%</span>
                    </div>
                </div>
                <div class="performance-chart">
                    <div class="chart-bar" style="--performance: 85%"></div>
                </div>
            </div>

            <div class="investment-card real-estate">
                <div class="card-header">
                    <div class="investment-icon">🏠</div>
                    <div class="investment-badge secondary">Secondary</div>
                </div>
                <h3 class="investment-name">Commercial Real Estate</h3>
                <div class="investment-value">
                    <span class="value-amount">$1,200,000</span>
                    <span class="value-change positive">+7.8%</span>
                </div>
                <div class="investment-meta">
                    <div class="meta-item">
                        <span class="meta-label">Allocation</span>
                        <span class="meta-value">30%</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Rental Yield</span>
                        <span class="meta-value">5.5%</span>
                    </div>
                </div>
                <div class="performance-chart">
                    <div class="chart-bar" style="--performance: 65%"></div>
                </div>
            </div>

            <div class="investment-card bonds">
                <div class="card-header">
                    <div class="investment-icon">📄</div>
                    <div class="investment-badge tertiary">Tertiary</div>
                </div>
                <h3 class="investment-name">Government Bonds</h3>
                <div class="investment-value">
                    <span class="value-amount">$500,000</span>
                    <span class="value-change positive">+5.2%</span>
                </div>
                <div class="investment-meta">
                    <div class="meta-item">
                        <span class="meta-label">Allocation</span>
                        <span class="meta-value">15%</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">Yield</span>
                        <span class="meta-value">4.1%</span>
                    </div>
                </div>
                <div class="performance-chart">
                    <div class="chart-bar" style="--performance: 45%"></div>
                </div>
            </div>
        </div>

        <div class="executive-table-section">
            <table class="executive-table">
                <thead>
                    <tr>
                        <th>Asset Class</th>
                        <th>Current Value</th>
                        <th>Allocation</th>
                        <th>Performance</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="executive-row">
                        <td>
                            <div class="asset-class">
                                <div class="asset-icon">💹</div>
                                <span>Equities</span>
                            </div>
                        </td>
                        <td>
                            <div class="asset-value">
                                $3,850,000
                            </div>
                        </td>
                        <td>
                            <div class="allocation-bar">
                                <div class="allocation-fill" style="width: 45%"></div>
                                <span class="allocation-text">45%</span>
                            </div>
                        </td>
                        <td>
                            <div class="performance premium-positive">
                                +18.3%
                            </div>
                        </td>
                        <td>
                            <button class="executive-action-btn">
                                Rebalance
                            </button>
                        </td>
                    </tr>
                    <tr class="executive-row">
                        <td>
                            <div class="asset-class">
                                <div class="asset-icon">🏘️</div>
                                <span>Real Estate</span>
                            </div>
                        </td>
                        <td>
                            <div class="asset-value">
                                $2,100,000
                            </div>
                        </td>
                        <td>
                            <div class="allocation-bar">
                                <div class="allocation-fill" style="width: 25%"></div>
                                <span class="allocation-text">25%</span>
                            </div>
                        </td>
                        <td>
                            <div class="performance premium-positive">
                                +7.8%
                            </div>
                        </td>
                        <td>
                            <button class="executive-action-btn">
                                Rebalance
                            </button>
                        </td>
                    </tr>
                    <tr class="executive-row">
                        <td>
                            <div class="asset-class">
                                <div class="asset-icon">📊</div>
                                <span>Fixed Income</span>
                            </div>
                        </td>
                        <td>
                            <div class="asset-value">
                                $1,500,000
                            </div>
                        </td>
                        <td>
                            <div class="allocation-bar">
                                <div class="allocation-fill" style="width: 18%"></div>
                                <span class="allocation-text">18%</span>
                            </div>
                        </td>
                        <td>
                            <div class="performance premium-positive">
                                +5.2%
                            </div>
                        </td>
                        <td>
                            <button class="executive-action-btn">
                                Rebalance
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes goldBorderGlow {
    0%, 100% { 
        border-color: rgba(255, 215, 0, 0.5);
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    }
    50% { 
        border-color: rgba(255, 215, 0, 0.8);
        box-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
    }
}

@keyframes slideInExecutive {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.executive-portfolio {
    background: 
        linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%),
        radial-gradient(circle at 10% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 40%),
        radial-gradient(circle at 90% 80%, rgba(192, 192, 192, 0.1) 0%, transparent 40%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(255, 215, 0, 0.5);
    animation: goldBorderGlow 4s ease-in-out infinite;
}

.executive-header {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(192, 192, 192, 0.1)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
}

.header-gold-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
        #FFD700, 
        #D4AF37, 
        #FFD700
    );
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.5);
}

.header-content {
    text-align: center;
}

.executive-title {
    margin: 0 0 2rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #FFD700, #FFF8DC, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.title-crown {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
    animation: floatLuxury 3s ease-in-out infinite;
}

.portfolio-summary {
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.summary-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.summary-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.summary-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.summary-value.positive {
    color: #4ade80;
}

.executive-content {
    padding: 2rem;
}

.investment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.investment-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    animation: slideInExecutive 0.8s ease-out;
    animation-fill-mode: both;
}

.investment-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #FFD700, #D4AF37);
}

.investment-card:nth-child(1) { animation-delay: 0.1s; }
.investment-card:nth-child(2) { animation-delay: 0.2s; }
.investment-card:nth-child(3) { animation-delay: 0.3s; }

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.investment-icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.investment-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid;
}

.investment-badge.primary {
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.investment-badge.secondary {
    background: rgba(230, 230, 250, 0.2);
    color: #e6e6fa;
    border-color: rgba(230, 230, 250, 0.3);
}

.investment-badge.tertiary {
    background: rgba(185, 242, 255, 0.2);
    color: #b9f2ff;
    border-color: rgba(185, 242, 255, 0.3);
}

.investment-name {
    margin: 0 0 1rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
}

.investment-value {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 1.5rem;
}

.value-amount {
    font-size: 1.8rem;
    font-weight: 700;
    color: #FFD700;
}

.value-change {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
}

.value-change.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.investment-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.meta-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.meta-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
}

.meta-value {
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
}

.performance-chart {
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
}

.chart-bar {
    height: 100%;
    background: linear-gradient(90deg, #FFD700, #D4AF37);
    width: var(--performance);
    border-radius: 3px;
    transition: width 1s ease-in-out;
    position: relative;
}

.chart-bar::after {
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
    animation: goldShimmer 2s infinite;
}

.executive-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.executive-table {
    width: 100%;
    border-collapse: collapse;
}

.executive-table th {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(192, 192, 192, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #FFD700;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.executive-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.executive-row:hover td {
    background: rgba(255, 215, 0, 0.05);
}

.asset-class {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
}

.asset-icon {
    font-size: 1.2rem;
}

.asset-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #FFD700;
}

.allocation-bar {
    width: 120px;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}

.allocation-fill {
    height: 100%;
    background: linear-gradient(90deg, #FFD700, #D4AF37);
    border-radius: 4px;
    transition: width 1s ease-in-out;
    position: relative;
}

.allocation-fill::after {
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
    animation: goldShimmer 2s infinite;
}

.allocation-text {
    position: absolute;
    top: -20px;
    right: 0;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
}

.performance {
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.performance.premium-positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.executive-action-btn {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(192, 192, 192, 0.2));
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: #FFD700;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.executive-action-btn:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(192, 192, 192, 0.3));
    transform: translateY(-2px);
}`,
    js: `// Executive portfolio interactions
document.querySelectorAll('.investment-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Animate chart bars
document.querySelectorAll('.chart-bar').forEach(bar => {
    const performance = bar.style.getPropertyValue('--performance');
    bar.style.width = '0%';
    
    setTimeout(() => {
        bar.style.width = performance;
    }, 800);
});

// Animate allocation bars
document.querySelectorAll('.allocation-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 1200);
});

// Executive action buttons
document.querySelectorAll('.executive-action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Processing...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
            
            // Add success effect
            this.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(192, 192, 192, 0.2))';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(192, 192, 192, 0.2))';
                this.style.borderColor = 'rgba(255, 215, 0, 0.3)';
            }, 1000);
        }, 1500);
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 53: WEALTH MANAGEMENT
// ====================================================================
premium3: {
    html: `<div class="wealth-management">
    <div class="wealth-header">
        <div class="diamond-pattern"></div>
        <div class="header-content">
            <h1 class="wealth-title">
                <span class="diamond-icon">💎</span>
                Private Wealth Management
            </h1>
            <p class="wealth-subtitle">Exclusive Financial Solutions for High Net Worth Individuals</p>
        </div>
        <div class="wealth-nav">
            <button class="nav-btn active">Portfolio</button>
            <button class="nav-btn">Performance</button>
            <button class="nav-btn">Assets</button>
            <button class="nav-btn">Reports</button>
        </div>
    </div>

    <div class="wealth-content">
        <div class="wealth-overview">
            <div class="overview-card">
                <div class="overview-icon">💰</div>
                <div class="overview-data">
                    <div class="overview-value">$15.2M</div>
                    <div class="overview-label">Total Net Worth</div>
                </div>
                <div class="overview-trend positive">+12.8%</div>
            </div>
            <div class="overview-card">
                <div class="overview-icon">📈</div>
                <div class="overview-data">
                    <div class="overview-value">22.5%</div>
                    <div class="overview-label">Annual Return</div>
                </div>
                <div class="overview-trend positive">+3.2%</div>
            </div>
            <div class="overview-card">
                <div class="overview-icon">🛡️</div>
                <div class="overview-data">
                    <div class="overview-value">AA-</div>
                    <div class="overview-label">Risk Rating</div>
                </div>
                <div class="overview-trend stable">Stable</div>
            </div>
        </div>

        <div class="wealth-details">
            <div class="details-sidebar">
                <h3 class="sidebar-title">Asset Allocation</h3>
                <div class="allocation-chart">
                    <div class="chart-slice" style="--slice-color: #FFD700; --slice-percent: 40">
                        <span class="slice-label">Equities</span>
                        <span class="slice-value">40%</span>
                    </div>
                    <div class="chart-slice" style="--slice-color: #C0C0C0; --slice-percent: 25">
                        <span class="slice-label">Real Estate</span>
                        <span class="slice-value">25%</span>
                    </div>
                    <div class="chart-slice" style="--slice-color: #B9F2FF; --slice-percent: 20">
                        <span class="slice-label">Bonds</span>
                        <span class="slice-value">20%</span>
                    </div>
                    <div class="chart-slice" style="--slice-color: #E6E6FA; --slice-percent: 15">
                        <span class="slice-label">Alternatives</span>
                        <span class="slice-value">15%</span>
                    </div>
                </div>
                <div class="sidebar-stats">
                    <div class="sidebar-stat">
                        <span class="stat-name">Liquidity</span>
                        <span class="stat-value">$2.1M</span>
                    </div>
                    <div class="sidebar-stat">
                        <span class="stat-name">Leverage</span>
                        <span class="stat-value">18%</span>
                    </div>
                    <div class="sidebar-stat">
                        <span class="stat-name">Diversification</span>
                        <span class="stat-value">87%</span>
                    </div>
                </div>
            </div>

            <div class="details-main">
                <table class="wealth-table">
                    <thead>
                        <tr>
                            <th>Asset Class</th>
                            <th>Current Value</th>
                            <th>Allocation</th>
                            <th>Performance</th>
                            <th>Risk</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="wealth-row">
                            <td>
                                <div class="asset-info">
                                    <div class="asset-color" style="--asset-color: #FFD700"></div>
                                    <div class="asset-details">
                                        <div class="asset-name">US Large Cap Equities</div>
                                        <div class="asset-type">Growth Stocks</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="asset-value">$6,080,000</div>
                            </td>
                            <td>
                                <div class="allocation-display">
                                    <div class="allocation-visual" style="--allocation: 40%"></div>
                                    <span>40%</span>
                                </div>
                            </td>
                            <td>
                                <div class="performance-display premium-positive">
                                    +18.3%
                                </div>
                            </td>
                            <td>
                                <div class="risk-level medium">
                                    <div class="risk-dots">
                                        <span class="dot active"></span>
                                        <span class="dot active"></span>
                                        <span class="dot"></span>
                                    </div>
                                    Medium
                                </div>
                            </td>
                            <td>
                                <button class="wealth-action-btn">
                                    Rebalance
                                </button>
                            </td>
                        </tr>
                        <tr class="wealth-row">
                            <td>
                                <div class="asset-info">
                                    <div class="asset-color" style="--asset-color: #C0C0C0"></div>
                                    <div class="asset-details">
                                        <div class="asset-name">Commercial Real Estate</div>
                                        <div class="asset-type">Income Properties</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="asset-value">$3,800,000</div>
                            </td>
                            <td>
                                <div class="allocation-display">
                                    <div class="allocation-visual" style="--allocation: 25%"></div>
                                    <span>25%</span>
                                </div>
                            </td>
                            <td>
                                <div class="performance-display premium-positive">
                                    +7.8%
                                </div>
                            </td>
                            <td>
                                <div class="risk-level low">
                                    <div class="risk-dots">
                                        <span class="dot active"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                    </div>
                                    Low
                                </div>
                            </td>
                            <td>
                                <button class="wealth-action-btn">
                                    Rebalance
                                </button>
                            </td>
                        </tr>
                        <tr class="wealth-row">
                            <td>
                                <div class="asset-info">
                                    <div class="asset-color" style="--asset-color: #B9F2FF"></div>
                                    <div class="asset-details">
                                        <div class="asset-name">Government Bonds</div>
                                        <div class="asset-type">Fixed Income</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="asset-value">$3,040,000</div>
                            </td>
                            <td>
                                <div class="allocation-display">
                                    <div class="allocation-visual" style="--allocation: 20%"></div>
                                    <span>20%</span>
                                </div>
                            </td>
                            <td>
                                <div class="performance-display premium-positive">
                                    +5.2%
                                </div>
                            </td>
                            <td>
                                <div class="risk-level low">
                                    <div class="risk-dots">
                                        <span class="dot active"></span>
                                        <span class="dot"></span>
                                        <span class="dot"></span>
                                    </div>
                                    Low
                                </div>
                            </td>
                            <td>
                                <button class="wealth-action-btn">
                                    Rebalance
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`,
    css: `@keyframes diamondSparkle {
    0%, 100% { 
        opacity: 0;
        transform: scale(0) rotate(0deg);
    }
    50% { 
        opacity: 1;
        transform: scale(1) rotate(180deg);
    }
}

@keyframes rotateChart {
    from { transform: rotate(-90deg); }
    to { transform: rotate(calc(var(--slice-percent) * 3.6deg - 90deg)); }
}

.wealth-management {
    background: 
        linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%),
        radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(185, 242, 255, 0.1) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(255, 215, 0, 0.3);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.wealth-management::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 30%, transparent 50%, rgba(255, 215, 0, 0.05) 100%),
        radial-gradient(circle at 70% 70%, transparent 50%, rgba(185, 242, 255, 0.05) 100%);
    pointer-events: none;
}

.wealth-header {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(185, 242, 255, 0.1)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
    overflow: hidden;
}

.diamond-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(45deg, 
            transparent 48%, 
            rgba(255, 215, 0, 0.05) 50%, 
            transparent 52%
        ),
        linear-gradient(-45deg, 
            transparent 48%, 
            rgba(185, 242, 255, 0.05) 50%, 
            transparent 52%
        );
    background-size: 30px 30px;
    opacity: 0.5;
}

.header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 2rem;
}

.wealth-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #FFD700, #B9F2FF, #E6E6FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.diamond-icon {
    font-size: 2rem;
    animation: diamondSparkle 3s ease-in-out infinite;
}

.wealth-subtitle {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.wealth-nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    position: relative;
    z-index: 2;
}

.nav-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.nav-btn.active,
.nav-btn:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(185, 242, 255, 0.2));
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.wealth-content {
    padding: 2rem;
}

.wealth-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.overview-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    overflow: hidden;
}

.overview-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.1), 
        transparent
    );
    animation: goldShimmer 3s infinite;
}

.overview-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.overview-data {
    flex: 1;
}

.overview-value {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.overview-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.overview-trend {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
}

.overview-trend.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.overview-trend.stable {
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.wealth-details {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
}

.details-sidebar {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-title {
    color: #FFD700;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
}

.allocation-chart {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: conic-gradient(
        var(--slice-color) 0% calc(var(--slice-percent) * 1%),
        transparent calc(var(--slice-percent) * 1%) 100%
    );
    margin: 0 auto 2rem auto;
    position: relative;
    animation: rotateChart 2s ease-out;
}

.chart-slice {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: rotate(calc(var(--slice-percent) * 3.6deg - 90deg));
    transform-origin: 0 0;
    text-align: center;
    width: 100px;
}

.slice-label {
    display: block;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.25rem;
}

.slice-value {
    display: block;
    font-size: 0.9rem;
    font-weight: 700;
    color: white;
}

.sidebar-stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.sidebar-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-name {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.stat-value {
    color: white;
    font-weight: 600;
}

.details-main {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.wealth-table {
    width: 100%;
    border-collapse: collapse;
}

.wealth-table th {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(185, 242, 255, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #FFD700;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.wealth-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.wealth-row:hover td {
    background: rgba(255, 215, 0, 0.05);
}

.asset-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.asset-color {
    width: 4px;
    height: 40px;
    background: var(--asset-color);
    border-radius: 2px;
    position: relative;
}

.asset-color::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: inherit;
    animation: diamondSparkle 2s ease-in-out infinite;
}

.asset-details .asset-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.asset-details .asset-type {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.asset-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #FFD700;
}

.allocation-display {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.allocation-visual {
    width: 80px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}

.allocation-visual::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #FFD700, #D4AF37);
    width: var(--allocation);
    border-radius: 3px;
    transition: width 1s ease-in-out;
}

.performance-display {
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.performance-display.premium-positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.risk-level {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.risk-dots {
    display: flex;
    gap: 2px;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
}

.dot.active {
    background: #4ade80;
}

.risk-level.medium .dot:nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.wealth-action-btn {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(185, 242, 255, 0.2));
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: #FFD700;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.wealth-action-btn:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(185, 242, 255, 0.3));
    transform: translateY(-2px);
}`,
    js: `// Wealth management interactions
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Add diamond sparkle effect
        const sparkle = document.createElement('div');
        sparkle.textContent = '💎';
        sparkle.style.cssText = \`
            position: absolute;
            font-size: 1rem;
            animation: diamondSparkle 0.6s ease-out forwards;
            pointer-events: none;
        \`;
        
        const rect = this.getBoundingClientRect();
        sparkle.style.left = (rect.width / 2 - 8) + 'px';
        sparkle.style.top = (rect.height / 2 - 8) + 'px';
        
        this.style.position = 'relative';
        this.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 600);
    });
});

// Animate allocation chart
const chart = document.querySelector('.allocation-chart');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

if (chart) {
    observer.observe(chart);
}

// Wealth action buttons
document.querySelectorAll('.wealth-action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.textContent;
        this.textContent = 'Analyzing...';
        this.disabled = true;
        
        setTimeout(() => {
            this.textContent = 'Rebalanced ✓';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 1000);
        }, 1500);
    });
});

// Add hover effects to overview cards
document.querySelectorAll('.overview-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 54: VIP CLIENT PORTAL
// ====================================================================
premium4: {
    html: `<div class="vip-portal">
    <div class="vip-header">
        <div class="header-gold-border"></div>
        <div class="header-content">
            <div class="vip-badge">
                <span class="badge-icon">⭐</span>
                VIP CLIENT PORTAL
            </div>
            <h1 class="vip-title">Exclusive Wealth Management</h1>
            <p class="vip-welcome">Welcome back, Mr. Anderson</p>
        </div>
        <div class="vip-status">
            <div class="status-indicator online">
                <div class="status-dot"></div>
                Portfolio Active
            </div>
            <div class="last-login">Last access: Today, 14:32</div>
        </div>
    </div>

    <div class="vip-dashboard">
        <div class="dashboard-sidebar">
            <div class="sidebar-section">
                <h3 class="sidebar-title">Quick Access</h3>
                <div class="sidebar-nav">
                    <button class="nav-item active">
                        <span class="nav-icon">📊</span>
                        Portfolio Overview
                    </button>
                    <button class="nav-item">
                        <span class="nav-icon">💼</span>
                        Asset Allocation
                    </button>
                    <button class="nav-item">
                        <span class="nav-icon">📈</span>
                        Performance
                    </button>
                    <button class="nav-item">
                        <span class="nav-icon">🛡️</span>
                        Risk Management
                    </button>
                    <button class="nav-item">
                        <span class="nav-icon">📋</span>
                        Reports
                    </button>
                </div>
            </div>
            
            <div class="sidebar-section">
                <h3 class="sidebar-title">Your Advisor</h3>
                <div class="advisor-card">
                    <div class="advisor-avatar">SA</div>
                    <div class="advisor-info">
                        <div class="advisor-name">Sarah Anderson</div>
                        <div class="advisor-role">Senior Wealth Advisor</div>
                        <div class="advisor-contact">
                            <span class="contact-item">📞 +1 (555) 123-4567</span>
                            <span class="contact-item">✉️ s.anderson@wealth.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="dashboard-main">
            <div class="main-header">
                <h2 class="main-title">Portfolio Overview</h2>
                <div class="main-actions">
                    <button class="action-btn premium">
                        <span class="btn-icon">📥</span>
                        Export Report
                    </button>
                    <button class="action-btn premium">
                        <span class="btn-icon">🔄</span>
                        Refresh Data
                    </button>
                </div>
            </div>

            <div class="portfolio-highlights">
                <div class="highlight-card">
                    <div class="highlight-icon">💰</div>
                    <div class="highlight-content">
                        <div class="highlight-value">$8,450,000</div>
                        <div class="highlight-label">Total Portfolio Value</div>
                    </div>
                    <div class="highlight-trend positive">+$125,000</div>
                </div>
                <div class="highlight-card">
                    <div class="highlight-icon">📈</div>
                    <div class="highlight-content">
                        <div class="highlight-value">15.2%</div>
                        <div class="highlight-label">YTD Return</div>
                    </div>
                    <div class="highlight-trend positive">+2.1%</div>
                </div>
                <div class="highlight-card">
                    <div class="highlight-icon">⚖️</div>
                    <div class="highlight-content">
                        <div class="highlight-value">Balanced</div>
                        <div class="highlight-label">Risk Profile</div>
                    </div>
                    <div class="highlight-trend stable">Optimal</div>
                </div>
            </div>

            <div class="vip-table-section">
                <table class="vip-table">
                    <thead>
                        <tr>
                            <th>Investment</th>
                            <th>Type</th>
                            <th>Current Value</th>
                            <th>Allocation</th>
                            <th>Performance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="vip-row">
                            <td>
                                <div class="investment-info">
                                    <div class="investment-badge platinum">P</div>
                                    <div class="investment-details">
                                        <div class="investment-name">Global Equity Fund</div>
                                        <div class="investment-id">#GEF-2024-P</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="investment-type">Mutual Fund</span>
                            </td>
                            <td>
                                <div class="investment-value">$2,850,000</div>
                            </td>
                            <td>
                                <div class="allocation-display">
                                    <div class="allocation-bar">
                                        <div class="allocation-fill" style="width: 34%"></div>
                                    </div>
                                    <span class="allocation-percent">34%</span>
                                </div>
                            </td>
                            <td>
                                <div class="performance-vip positive">
                                    <span class="performance-arrow">↗</span>
                                    +18.3%
                                </div>
                            </td>
                            <td>
                                <div class="vip-actions">
                                    <button class="vip-action-btn view">
                                        <span class="action-icon">👁️</span>
                                    </button>
                                    <button class="vip-action-btn trade">
                                        <span class="action-icon">💱</span>
                                    </button>
                                    <button class="vip-action-btn analyze">
                                        <span class="action-icon">📊</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="vip-row">
                            <td>
                                <div class="investment-info">
                                    <div class="investment-badge gold">G</div>
                                    <div class="investment-details">
                                        <div class="investment-name">Real Estate Trust</div>
                                        <div class="investment-id">#RET-2024-G</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="investment-type">REIT</span>
                            </td>
                            <td>
                                <div class="investment-value">$1,980,000</div>
                            </td>
                            <td>
                                <div class="allocation-display">
                                    <div class="allocation-bar">
                                        <div class="allocation-fill" style="width: 23%"></div>
                                    </div>
                                    <span class="allocation-percent">23%</span>
                                </div>
                            </td>
                            <td>
                                <div class="performance-vip positive">
                                    <span class="performance-arrow">↗</span>
                                    +7.8%
                                </div>
                            </td>
                            <td>
                                <div class="vip-actions">
                                    <button class="vip-action-btn view">
                                        <span class="action-icon">👁️</span>
                                    </button>
                                    <button class="vip-action-btn trade">
                                        <span class="action-icon">💱</span>
                                    </button>
                                    <button class="vip-action-btn analyze">
                                        <span class="action-icon">📊</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr class="vip-row">
                            <td>
                                <div class="investment-info">
                                    <div class="investment-badge diamond">D</div>
                                    <div class="investment-details">
                                        <div class="investment-name">Private Equity</div>
                                        <div class="investment-id">#PE-2024-D</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span class="investment-type">Alternative</span>
                            </td>
                            <td>
                                <div class="investment-value">$1,520,000</div>
                            </td>
                            <td>
                                <div class="allocation-display">
                                    <div class="allocation-bar">
                                        <div class="allocation-fill" style="width: 18%"></div>
                                    </div>
                                    <span class="allocation-percent">18%</span>
                                </div>
                            </td>
                            <td>
                                <div class="performance-vip positive">
                                    <span class="performance-arrow">↗</span>
                                    +12.5%
                                </div>
                            </td>
                            <td>
                                <div class="vip-actions">
                                    <button class="vip-action-btn view">
                                        <span class="action-icon">👁️</span>
                                    </button>
                                    <button class="vip-action-btn trade">
                                        <span class="action-icon">💱</span>
                                    </button>
                                    <button class="vip-action-btn analyze">
                                        <span class="action-icon">📊</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`,
    css: `@keyframes vipGlow {
    0%, 100% { 
        box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.3),
            inset 0 0 20px rgba(255, 215, 0, 0.1);
    }
    50% { 
        box-shadow: 
            0 0 40px rgba(255, 215, 0, 0.5),
            inset 0 0 30px rgba(255, 215, 0, 0.2);
    }
}

@keyframes statusPulse {
    0%, 100% { 
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
    }
    70% { 
        box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
}

.vip-portal {
    background: 
        linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%),
        radial-gradient(circle at 10% 10%, rgba(255, 215, 0, 0.15) 0%, transparent 40%),
        radial-gradient(circle at 90% 90%, rgba(230, 230, 250, 0.15) 0%, transparent 40%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(255, 215, 0, 0.5);
    animation: vipGlow 4s ease-in-out infinite;
}

.vip-header {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.15), 
        rgba(230, 230, 250, 0.15)
    );
    padding: 2rem;
    position: relative;
}

.header-gold-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
        #FFD700, 
        #D4AF37, 
        #FFD700
    );
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.5);
}

.header-content {
    text-align: center;
    margin-bottom: 1.5rem;
}

.vip-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #FFD700, #D4AF37);
    color: #1a1a1a;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}

.badge-icon {
    font-size: 1.1rem;
}

.vip-title {
    margin: 0 0 0.5rem 0;
    font-size: 2.2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #FFD700, #FFF8DC, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.vip-welcome {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
}

.vip-status {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(34, 197, 94, 0.2);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 15px;
    color: #4ade80;
    font-weight: 600;
    font-size: 0.9rem;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4ade80;
    animation: statusPulse 2s infinite;
}

.last-login {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.vip-dashboard {
    display: grid;
    grid-template-columns: 280px 1fr;
    min-height: 600px;
}

.dashboard-sidebar {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem;
}

.sidebar-section {
    margin-bottom: 2rem;
}

.sidebar-title {
    color: #FFD700;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.sidebar-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.nav-item {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    padding: 0.75rem 1rem;
    border-radius: 10px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-align: left;
}

.nav-item.active,
.nav-item:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(230, 230, 250, 0.2));
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.nav-icon {
    font-size: 1.1rem;
}

.advisor-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
}

.advisor-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #FFD700, #D4AF37);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #1a1a1a;
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.advisor-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.advisor-role {
    color: #FFD700;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.advisor-contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.contact-item {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
}

.dashboard-main {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.02);
}

.main-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.main-title {
    margin: 0;
    color: #FFD700;
    font-size: 1.8rem;
    font-weight: 600;
}

.main-actions {
    display: flex;
    gap: 1rem;
}

.action-btn.premium {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(230, 230, 250, 0.2));
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: #FFD700;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.action-btn.premium:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(230, 230, 250, 0.3));
    transform: translateY(-2px);
}

.portfolio-highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.highlight-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
}

.highlight-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 215, 0, 0.3);
}

.highlight-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.highlight-content {
    flex: 1;
}

.highlight-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.highlight-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.highlight-trend {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.8rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
}

.highlight-trend.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.highlight-trend.stable {
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.vip-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.vip-table {
    width: 100%;
    border-collapse: collapse;
}

.vip-table th {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(230, 230, 250, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #FFD700;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.vip-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.vip-row:hover td {
    background: rgba(255, 215, 0, 0.05);
}

.investment-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.investment-badge {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #1a1a1a;
    font-size: 0.8rem;
}

.investment-badge.platinum {
    background: linear-gradient(135deg, #E5E4E2, #BEC2CB);
}

.investment-badge.gold {
    background: linear-gradient(135deg, #FFD700, #D4AF37);
}

.investment-badge.diamond {
    background: linear-gradient(135deg, #B9F2FF, #70D1FF);
}

.investment-details .investment-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.investment-details .investment-id {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.investment-type {
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
}

.investment-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #FFD700;
}

.allocation-display {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.allocation-bar {
    width: 80px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
}

.allocation-fill {
    height: 100%;
    background: linear-gradient(90deg, #FFD700, #D4AF37);
    border-radius: 3px;
    transition: width 1s ease-in-out;
}

.allocation-percent {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    min-width: 35px;
}

.performance-vip {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.performance-vip.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.vip-actions {
    display: flex;
    gap: 0.5rem;
}

.vip-action-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.8);
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.vip-action-btn:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: rgba(255, 215, 0, 0.5);
    color: #FFD700;
    transform: scale(1.1);
}`,
    js: `// VIP portal interactions
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        
        // Add VIP selection effect
        this.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(230, 230, 250, 0.3))';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(230, 230, 250, 0.2))';
        }, 300);
    });
});

// Animate allocation bars
document.querySelectorAll('.allocation-fill').forEach(fill => {
    const width = fill.style.width;
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 1000);
});

// VIP action buttons
document.querySelectorAll('.vip-action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.classList[1];
        let message = '';
        
        switch(type) {
            case 'view':
                message = 'Opening investment details...';
                break;
            case 'trade':
                message = 'Initiating trade execution...';
                break;
            case 'analyze':
                message = 'Running advanced analysis...';
                break;
        }
        
        const originalHTML = this.innerHTML;
        this.innerHTML = '⏳';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            // Add success effect
            this.style.background = 'rgba(34, 197, 94, 0.3)';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }, 1000);
        }, 1500);
    });
});

// Premium action buttons
document.querySelectorAll('.action-btn.premium').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalHTML = this.innerHTML;
        this.innerHTML = '<span class="btn-icon">⭐</span> Processing...';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            // Add VIP success effect
            this.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(230, 230, 250, 0.3))';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(230, 230, 250, 0.2))';
                this.style.borderColor = 'rgba(255, 215, 0, 0.3)';
            }, 1000);
        }, 2000);
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 55: ROYAL ANALYTICS
// ====================================================================
premium5: {
    html: `<div class="royal-analytics">
    <div class="royal-header">
        <div class="crown-decoration">👑</div>
        <div class="header-content">
            <h1 class="royal-title">Royal Performance Analytics</h1>
            <p class="royal-subtitle">Exclusive Insights for Premium Portfolio Management</p>
        </div>
        <div class="royal-controls">
            <div class="timeframe-selector">
                <button class="time-btn active">1D</button>
                <button class="time-btn">1W</button>
                <button class="time-btn">1M</button>
                <button class="time-btn">1Y</button>
            </div>
        </div>
    </div>

    <div class="royal-metrics">
        <div class="metric-card royal">
            <div class="metric-header">
                <div class="metric-icon">💎</div>
                <div class="metric-trend positive">+5.2%</div>
            </div>
            <div class="metric-value">$12.8M</div>
            <div class="metric-label">Portfolio Value</div>
            <div class="metric-chart">
                <div class="chart-line" style="--chart-data: 0, 45, 78, 65, 90, 120, 110"></div>
            </div>
        </div>
        
        <div class="metric-card imperial">
            <div class="metric-header">
                <div class="metric-icon">📈</div>
                <div class="metric-trend positive">+3.1%</div>
            </div>
            <div class="metric-value">18.3%</div>
            <div class="metric-label">YTD Return</div>
            <div class="metric-chart">
                <div class="chart-line" style="--chart-data: 20, 35, 60, 45, 75, 90, 110"></div>
            </div>
        </div>
        
        <div class="metric-card noble">
            <div class="metric-header">
                <div class="metric-icon">⚡</div>
                <div class="metric-trend positive">+12.5%</div>
            </div>
            <div class="metric-value">0.85</div>
            <div class="metric-label">Sharpe Ratio</div>
            <div class="metric-chart">
                <div class="chart-line" style="--chart-data: 45, 60, 40, 75, 65, 85, 100"></div>
            </div>
        </div>
    </div>

    <div class="royal-content">
        <div class="performance-breakdown">
            <h3 class="section-title">Performance Breakdown</h3>
            <div class="breakdown-grid">
                <div class="breakdown-item">
                    <div class="breakdown-header">
                        <span class="breakdown-name">Equities</span>
                        <span class="breakdown-value">+18.3%</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill" style="--fill-width: 85%; --fill-color: #8B5CF6"></div>
                    </div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-header">
                        <span class="breakdown-name">Real Estate</span>
                        <span class="breakdown-value">+7.8%</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill" style="--fill-width: 65%; --fill-color: #06B6D4"></div>
                    </div>
                </div>
                <div class="breakdown-item">
                    <div class="breakdown-header">
                        <span class="breakdown-name">Bonds</span>
                        <span class="breakdown-value">+5.2%</span>
                    </div>
                    <div class="breakdown-bar">
                        <div class="breakdown-fill" style="--fill-width: 45%; --fill-color: #10B981"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="royal-table-section">
            <table class="royal-table">
                <thead>
                    <tr>
                        <th>
                            <div class="th-content">
                                <span class="th-icon">📊</span>
                                Metric
                            </div>
                        </th>
                        <th>
                            <div class="th-content">
                                <span class="th-icon">🎯</span>
                                Current
                            </div>
                        </th>
                        <th>
                            <div class="th-content">
                                <span class="th-icon">🎯</span>
                                Target
                            </div>
                        </th>
                        <th>
                            <div class="th-content">
                                <span class="th-icon">📈</span>
                                Variance
                            </div>
                        </th>
                        <th>
                            <div class="th-content">
                                <span class="th-icon">⭐</span>
                                Status
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="royal-row">
                        <td>
                            <div class="metric-info">
                                <div class="metric-color" style="--metric-color: #8B5CF6"></div>
                                <span>Return on Investment</span>
                            </div>
                        </td>
                        <td>
                            <div class="current-value">22.5%</div>
                        </td>
                        <td>
                            <div class="target-value">20%</div>
                        </td>
                        <td>
                            <div class="variance positive">
                                <span class="variance-arrow">↑</span>
                                +2.5%
                            </div>
                        </td>
                        <td>
                            <div class="status-badge exceeded">
                                <span class="status-icon">🎯</span>
                                Exceeded
                            </div>
                        </td>
                    </tr>
                    <tr class="royal-row">
                        <td>
                            <div class="metric-info">
                                <div class="metric-color" style="--metric-color: #06B6D4"></div>
                                <span>Portfolio Growth</span>
                            </div>
                        </td>
                        <td>
                            <div class="current-value">15.8%</div>
                        </td>
                        <td>
                            <div class="target-value">12%</div>
                        </td>
                        <td>
                            <div class="variance positive">
                                <span class="variance-arrow">↑</span>
                                +3.8%
                            </div>
                        </td>
                        <td>
                            <div class="status-badge exceeded">
                                <span class="status-icon">🎯</span>
                                Exceeded
                            </div>
                        </td>
                    </tr>
                    <tr class="royal-row">
                        <td>
                            <div class="metric-info">
                                <div class="metric-color" style="--metric-color: #10B981"></div>
                                <span>Risk Adjusted Return</span>
                            </div>
                        </td>
                        <td>
                            <div class="current-value">1.25</div>
                        </td>
                        <td>
                            <div class="target-value">1.20</div>
                        </td>
                        <td>
                            <div class="variance positive">
                                <span class="variance-arrow">↑</span>
                                +0.05
                            </div>
                        </td>
                        <td>
                            <div class="status-badge achieved">
                                <span class="status-icon">✅</span>
                                Achieved
                            </div>
                        </td>
                    </tr>
                    <tr class="royal-row">
                        <td>
                            <div class="metric-info">
                                <div class="metric-color" style="--metric-color: #F59E0B"></div>
                                <span>Volatility</span>
                            </div>
                        </td>
                        <td>
                            <div class="current-value">14.2%</div>
                        </td>
                        <td>
                            <div class="target-value">15%</div>
                        </td>
                        <td>
                            <div class="variance positive">
                                <span class="variance-arrow">↓</span>
                                -0.8%
                            </div>
                        </td>
                        <td>
                            <div class="status-badge optimal">
                                <span class="status-icon">⚡</span>
                                Optimal
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes crownGlow {
    0%, 100% { 
        filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
        transform: scale(1);
    }
    50% { 
        filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.8));
        transform: scale(1.1);
    }
}

@keyframes drawChart {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes royalEntrance {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.royal-analytics {
    background: 
        linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%),
        radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.2) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(139, 92, 246, 0.5);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.royal-analytics::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(45deg, 
            transparent 48%, 
            rgba(139, 92, 246, 0.1) 50%, 
            transparent 52%
        );
    background-size: 40px 40px;
    opacity: 0.3;
    pointer-events: none;
}

.royal-header {
    background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.2), 
        rgba(6, 182, 212, 0.2)
    );
    padding: 3rem 2rem 2rem 2rem;
    text-align: center;
    position: relative;
}

.crown-decoration {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: crownGlow 3s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5));
}

.header-content {
    margin-bottom: 2rem;
}

.royal-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #8B5CF6, #06B6D4, #10B981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.royal-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.royal-controls {
    display: flex;
    justify-content: center;
}

.timeframe-selector {
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.time-btn {
    background: transparent;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.time-btn.active,
.time-btn:hover {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3));
    color: white;
}

.royal-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 0 2rem 2rem 2rem;
}

.metric-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    animation: royalEntrance 0.8s ease-out;
    animation-fill-mode: both;
}

.metric-card.royal {
    border-color: rgba(139, 92, 246, 0.3);
    animation-delay: 0.1s;
}

.metric-card.imperial {
    border-color: rgba(6, 182, 212, 0.3);
    animation-delay: 0.2s;
}

.metric-card.noble {
    border-color: rgba(16, 185, 129, 0.3);
    animation-delay: 0.3s;
}

.metric-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.1), 
        transparent
    );
    animation: goldShimmer 3s infinite;
}

.metric-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.metric-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.metric-trend {
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.8rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
}

.metric-trend.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.metric-value {
    font-size: 2.2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.metric-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.metric-chart {
    width: 100%;
    height: 60px;
    position: relative;
}

.chart-line {
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(90deg, 
            rgba(139, 92, 246, 0.3), 
            rgba(6, 182, 212, 0.3)
        );
    clip-path: polygon(
        0% 100%,
        calc(100% / 6 * 1) calc(100% - var(--chart-data, 0) * 0.6%),
        calc(100% / 6 * 2) calc(100% - var(--chart-data, 0) * 0.6%),
        calc(100% / 6 * 3) calc(100% - var(--chart-data, 0) * 0.6%),
        calc(100% / 6 * 4) calc(100% - var(--chart-data, 0) * 0.6%),
        calc(100% / 6 * 5) calc(100% - var(--chart-data, 0) * 0.6%),
        100% calc(100% - var(--chart-data, 0) * 0.6%),
        100% 100%
    );
    animation: drawChart 2s ease-out;
}

.royal-content {
    padding: 0 2rem 2rem 2rem;
}

.performance-breakdown {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
}

.section-title {
    color: #8B5CF6;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.breakdown-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.breakdown-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.breakdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.breakdown-name {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
}

.breakdown-value {
    color: #4ade80;
    font-weight: 700;
    font-size: 0.9rem;
}

.breakdown-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.breakdown-fill {
    height: 100%;
    background: var(--fill-color);
    width: var(--fill-width);
    border-radius: 4px;
    transition: width 1s ease-in-out;
    position: relative;
}

.breakdown-fill::after {
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
    animation: goldShimmer 2s infinite;
}

.royal-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.royal-table {
    width: 100%;
    border-collapse: collapse;
}

.royal-table th {
    background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.1), 
        rgba(6, 182, 212, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #8B5CF6;
    border-bottom: 2px solid rgba(139, 92, 246, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.th-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.th-icon {
    font-size: 1.1rem;
}

.royal-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.royal-row:hover td {
    background: rgba(139, 92, 246, 0.05);
}

.metric-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.metric-color {
    width: 4px;
    height: 24px;
    background: var(--metric-color);
    border-radius: 2px;
    position: relative;
}

.metric-color::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: inherit;
    animation: crownGlow 2s ease-in-out infinite;
}

.current-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
}

.target-value {
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
}

.variance {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.variance.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.status-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.status-badge.exceeded {
    background: rgba(139, 92, 246, 0.2);
    color: #8B5CF6;
    border-color: rgba(139, 92, 246, 0.3);
}

.status-badge.achieved {
    background: rgba(16, 185, 129, 0.2);
    color: #10B981;
    border-color: rgba(16, 185, 129, 0.3);
}

.status-badge.optimal {
    background: rgba(245, 158, 11, 0.2);
    color: #F59E0B;
    border-color: rgba(245, 158, 11, 0.3);
}`,
    js: `// Royal analytics interactions
document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Add royal selection effect
        this.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4))';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3))';
        }, 300);
    });
});

// Animate breakdown bars
document.querySelectorAll('.breakdown-fill').forEach(fill => {
    const width = fill.style.getPropertyValue('--fill-width');
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 800);
});

// Add hover effects to metric cards
document.querySelectorAll('.metric-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Royal table row interactions
document.querySelectorAll('.royal-row').forEach(row => {
    row.addEventListener('click', function() {
        // Add royal selection effect
        this.style.background = 'rgba(139, 92, 246, 0.1)';
        
        setTimeout(() => {
            this.style.background = '';
        }, 1000);
    });
});

// Initialize chart animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.metric-card').forEach(card => {
    observer.observe(card);
});`
},
// ====================================================================
// PREMIUM TEMPLATE 56: DIAMOND WEALTH
// ====================================================================
premium6: {
    html: `<div class="diamond-wealth">
    <div class="diamond-header">
        <div class="diamond-background">
            <div class="diamond-shape"></div>
            <div class="diamond-shape"></div>
            <div class="diamond-shape"></div>
        </div>
        <div class="header-content">
            <h1 class="diamond-title">
                <span class="title-icon">💎</span>
                Diamond Wealth Portfolio
            </h1>
            <p class="diamond-subtitle">Crystal Clear Financial Excellence</p>
        </div>
        <div class="wealth-stats">
            <div class="wealth-stat">
                <span class="stat-label">Total Assets</span>
                <span class="stat-value">$15.8M</span>
            </div>
            <div class="wealth-stat">
                <span class="stat-label">Net Growth</span>
                <span class="stat-value positive">+12.8%</span>
            </div>
        </div>
    </div>

    <div class="diamond-content">
        <div class="asset-breakdown">
            <div class="breakdown-card">
                <div class="card-icon">📈</div>
                <div class="card-content">
                    <h3>Equity Investments</h3>
                    <div class="card-value">$6,250,000</div>
                    <div class="card-growth positive">+18.3%</div>
                </div>
                <div class="card-sparkle"></div>
            </div>
            <div class="breakdown-card">
                <div class="card-icon">🏠</div>
                <div class="card-content">
                    <h3>Real Estate</h3>
                    <div class="card-value">$4,120,000</div>
                    <div class="card-growth positive">+12.5%</div>
                </div>
                <div class="card-sparkle"></div>
            </div>
            <div class="breakdown-card">
                <div class="card-icon">📊</div>
                <div class="card-content">
                    <h3>Fixed Income</h3>
                    <div class="card-value">$3,450,000</div>
                    <div class="card-growth positive">+8.7%</div>
                </div>
                <div class="card-sparkle"></div>
            </div>
        </div>

        <div class="diamond-table-section">
            <table class="diamond-table">
                <thead>
                    <tr>
                        <th>Asset Class</th>
                        <th>Current Value</th>
                        <th>Allocation</th>
                        <th>Performance</th>
                        <th>Risk Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="diamond-row">
                        <td>
                            <div class="asset-display">
                                <div class="asset-gem blue"></div>
                                <div class="asset-info">
                                    <div class="asset-name">Technology Stocks</div>
                                    <div class="asset-category">Growth Sector</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="value-display">
                                <span class="currency">$</span>
                                <span class="amount">2,850,000</span>
                            </div>
                        </td>
                        <td>
                            <div class="allocation-display">
                                <div class="allocation-diamond">
                                    <div class="diamond-fill" style="--fill: 75%"></div>
                                </div>
                                <span class="allocation-text">18%</span>
                            </div>
                        </td>
                        <td>
                            <div class="performance-diamond positive">
                                <span class="perf-icon">↗</span>
                                +22.5%
                            </div>
                        </td>
                        <td>
                            <div class="risk-diamond medium">
                                <div class="risk-crystal">
                                    <div class="crystal-facet"></div>
                                    <div class="crystal-facet"></div>
                                    <div class="crystal-facet"></div>
                                </div>
                                Medium
                            </div>
                        </td>
                        <td>
                            <button class="diamond-action-btn">
                                <span class="btn-sparkle">✨</span>
                                Manage
                            </button>
                        </td>
                    </tr>
                    <tr class="diamond-row">
                        <td>
                            <div class="asset-display">
                                <div class="asset-gem green"></div>
                                <div class="asset-info">
                                    <div class="asset-name">Commercial REITs</div>
                                    <div class="asset-category">Real Estate</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="value-display">
                                <span class="currency">$</span>
                                <span class="amount">1,980,000</span>
                            </div>
                        </td>
                        <td>
                            <div class="allocation-display">
                                <div class="allocation-diamond">
                                    <div class="diamond-fill" style="--fill: 60%"></div>
                                </div>
                                <span class="allocation-text">12%</span>
                            </div>
                        </td>
                        <td>
                            <div class="performance-diamond positive">
                                <span class="perf-icon">↗</span>
                                +15.8%
                            </div>
                        </td>
                        <td>
                            <div class="risk-diamond low">
                                <div class="risk-crystal">
                                    <div class="crystal-facet"></div>
                                    <div class="crystal-facet"></div>
                                </div>
                                Low
                            </div>
                        </td>
                        <td>
                            <button class="diamond-action-btn">
                                <span class="btn-sparkle">✨</span>
                                Manage
                            </button>
                        </td>
                    </tr>
                    <tr class="diamond-row">
                        <td>
                            <div class="asset-display">
                                <div class="asset-gem purple"></div>
                                <div class="asset-info">
                                    <div class="asset-name">Government Bonds</div>
                                    <div class="asset-category">Fixed Income</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="value-display">
                                <span class="currency">$</span>
                                <span class="amount">3,120,000</span>
                            </div>
                        </td>
                        <td>
                            <div class="allocation-display">
                                <div class="allocation-diamond">
                                    <div class="diamond-fill" style="--fill: 45%"></div>
                                </div>
                                <span class="allocation-text">20%</span>
                            </div>
                        </td>
                        <td>
                            <div class="performance-diamond positive">
                                <span class="perf-icon">↗</span>
                                +8.3%
                            </div>
                        </td>
                        <td>
                            <div class="risk-diamond low">
                                <div class="risk-crystal">
                                    <div class="crystal-facet"></div>
                                    <div class="crystal-facet"></div>
                                </div>
                                Low
                            </div>
                        </td>
                        <td>
                            <button class="diamond-action-btn">
                                <span class="btn-sparkle">✨</span>
                                Manage
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes diamondSparkle {
    0%, 100% { 
        opacity: 0;
        transform: scale(0) rotate(0deg);
    }
    50% { 
        opacity: 1;
        transform: scale(1) rotate(180deg);
    }
}

@keyframes crystalReflect {
    0%, 100% { 
        background-position: 0% 50%;
        filter: brightness(1);
    }
    50% { 
        background-position: 100% 50%;
        filter: brightness(1.3);
    }
}

@keyframes floatDiamond {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(120deg); }
    66% { transform: translateY(-5px) rotate(240deg); }
}

.diamond-wealth {
    background: 
        linear-gradient(135deg, #0c0a1d 0%, #1a162d 50%, #0c0a1d 100%),
        radial-gradient(circle at 20% 20%, rgba(185, 242, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(230, 230, 250, 0.1) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(185, 242, 255, 0.3);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.6),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.diamond-header {
    background: linear-gradient(135deg, 
        rgba(185, 242, 255, 0.15), 
        rgba(230, 230, 250, 0.15)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
    overflow: hidden;
}

.diamond-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
}

.diamond-shape {
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, transparent 48%, rgba(185, 242, 255, 0.3) 50%, transparent 52%);
    animation: floatDiamond 6s ease-in-out infinite;
}

.diamond-shape:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.diamond-shape:nth-child(2) {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

.diamond-shape:nth-child(3) {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
}

.header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 2rem;
}

.diamond-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #B9F2FF, #70D1FF, #E6E6FA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.title-icon {
    font-size: 2rem;
    animation: diamondSparkle 3s ease-in-out infinite;
}

.diamond-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.wealth-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    position: relative;
    z-index: 2;
}

.wealth-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.stat-value.positive {
    color: #4ade80;
}

.diamond-content {
    padding: 2rem;
}

.asset-breakdown {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.breakdown-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(185, 242, 255, 0.2);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.breakdown-card:hover {
    transform: translateY(-5px);
    border-color: rgba(185, 242, 255, 0.4);
    box-shadow: 0 10px 30px rgba(185, 242, 255, 0.2);
}

.card-sparkle {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 20% 30%, rgba(185, 242, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(230, 230, 250, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.breakdown-card:hover .card-sparkle {
    opacity: 1;
}

.card-icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 0 10px rgba(185, 242, 255, 0.5));
}

.card-content {
    flex: 1;
}

.card-content h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
}

.card-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: #B9F2FF;
    margin-bottom: 0.5rem;
}

.card-growth {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.card-growth.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.diamond-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(185, 242, 255, 0.2);
    overflow: hidden;
}

.diamond-table {
    width: 100%;
    border-collapse: collapse;
}

.diamond-table th {
    background: linear-gradient(135deg, 
        rgba(185, 242, 255, 0.1), 
        rgba(230, 230, 250, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #B9F2FF;
    border-bottom: 2px solid rgba(185, 242, 255, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.diamond-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.diamond-row:hover td {
    background: rgba(185, 242, 255, 0.05);
}

.asset-display {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.asset-gem {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    transform: rotate(45deg);
    position: relative;
    animation: crystalReflect 3s ease-in-out infinite;
}

.asset-gem.blue {
    background: linear-gradient(135deg, #B9F2FF, #70D1FF);
    box-shadow: 0 0 10px rgba(185, 242, 255, 0.5);
}

.asset-gem.green {
    background: linear-gradient(135deg, #4ade80, #22c55e);
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
}

.asset-gem.purple {
    background: linear-gradient(135deg, #a78bfa, #8b5cf6);
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

.asset-info .asset-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.asset-info .asset-category {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.value-display {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
}

.currency {
    color: #B9F2FF;
    font-weight: 600;
}

.amount {
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
}

.allocation-display {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.allocation-diamond {
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transform: rotate(45deg);
    position: relative;
    overflow: hidden;
}

.diamond-fill {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #B9F2FF, #70D1FF);
    height: var(--fill);
    transition: height 1s ease-in-out;
}

.allocation-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
}

.performance-diamond {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.performance-diamond.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.risk-diamond {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.risk-crystal {
    display: flex;
    gap: 1px;
}

.crystal-facet {
    width: 4px;
    height: 8px;
    background: #4ade80;
    border-radius: 1px;
    transform: skew(-20deg);
}

.risk-diamond.medium .crystal-facet:nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.risk-diamond.low .crystal-facet:nth-child(2):nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.diamond-action-btn {
    background: linear-gradient(135deg, rgba(185, 242, 255, 0.2), rgba(230, 230, 250, 0.2));
    border: 1px solid rgba(185, 242, 255, 0.3);
    color: #B9F2FF;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.diamond-action-btn:hover {
    background: linear-gradient(135deg, rgba(185, 242, 255, 0.3), rgba(230, 230, 250, 0.3));
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(185, 242, 255, 0.3);
}

.btn-sparkle {
    animation: diamondSparkle 2s ease-in-out infinite;
}`,
    js: `// Diamond wealth interactions
document.querySelectorAll('.breakdown-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const sparkles = this.querySelectorAll('.card-sparkle');
        sparkles.forEach(sparkle => {
            sparkle.style.animation = 'diamondSparkle 1s ease-in-out';
        });
    });
});

// Animate diamond fills
document.querySelectorAll('.diamond-fill').forEach(fill => {
    const fillValue = fill.style.getPropertyValue('--fill');
    fill.style.height = '0%';
    
    setTimeout(() => {
        fill.style.height = fillValue;
    }, 800);
});

// Diamond action buttons
document.querySelectorAll('.diamond-action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalHTML = this.innerHTML;
        this.innerHTML = '<span class="btn-sparkle">💎</span> Processing...';
        this.disabled = true;
        
        // Create sparkle effect
        for (let i = 0; i < 5; i++) {
            createSparkle(this);
        }
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
        }, 1500);
    });
});

function createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = \`
        position: absolute;
        width: 8px;
        height: 8px;
        background: #B9F2FF;
        border-radius: 50%;
        pointer-events: none;
        animation: diamondSparkle 0.6s ease-out forwards;
    \`;
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (Math.random() * rect.width) + 'px';
    sparkle.style.top = (Math.random() * rect.height) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 600);
}

// Add hover effects to asset gems
document.querySelectorAll('.asset-gem').forEach(gem => {
    gem.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(45deg) scale(1.2)';
    });
    
    gem.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(45deg) scale(1)';
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 57: GOLD ELITE
// ====================================================================
premium7: {
    html: `<div class="gold-elite">
    <div class="elite-header">
        <div class="gold-bar"></div>
        <div class="header-content">
            <h1 class="elite-title">
                <span class="title-crown">👑</span>
                Gold Elite Investments
            </h1>
            <p class="elite-subtitle">Exclusive Opportunities for Discerning Investors</p>
        </div>
        <div class="elite-badges">
            <div class="elite-badge">
                <span class="badge-icon">⭐</span>
                Premium Tier
            </div>
            <div class="elite-badge">
                <span class="badge-icon">💫</span>
                Elite Access
            </div>
        </div>
    </div>

    <div class="elite-dashboard">
        <div class="dashboard-stats">
            <div class="stat-elite">
                <div class="stat-gold">
                    <div class="stat-icon">💰</div>
                    <div class="stat-data">
                        <div class="stat-value">$24.5M</div>
                        <div class="stat-label">Portfolio Value</div>
                    </div>
                </div>
                <div class="stat-trend elite-positive">
                    <span class="trend-arrow">↗</span>
                    +15.8%
                </div>
            </div>
            <div class="stat-elite">
                <div class="stat-gold">
                    <div class="stat-icon">📈</div>
                    <div class="stat-data">
                        <div class="stat-value">22.3%</div>
                        <div class="stat-label">Annual Return</div>
                    </div>
                </div>
                <div class="stat-trend elite-positive">
                    <span class="trend-arrow">↗</span>
                    +3.2%
                </div>
            </div>
            <div class="stat-elite">
                <div class="stat-gold">
                    <div class="stat-icon">🛡️</div>
                    <div class="stat-data">
                        <div class="stat-value">AA+</div>
                        <div class="stat-label">Credit Rating</div>
                    </div>
                </div>
                <div class="stat-trend elite-stable">
                    <span class="trend-icon">⭐</span>
                    Stable
                </div>
            </div>
        </div>

        <div class="elite-investments">
            <div class="investments-grid">
                <div class="investment-elite">
                    <div class="investment-header">
                        <div class="investment-grade gold">A+</div>
                        <div class="investment-status active">Active</div>
                    </div>
                    <h3 class="investment-name">Private Equity Fund</h3>
                    <div class="investment-metrics">
                        <div class="metric">
                            <span class="metric-label">Minimum</span>
                            <span class="metric-value">$1M</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Horizon</span>
                            <span class="metric-value">5-7 Years</span>
                        </div>
                    </div>
                    <div class="investment-performance">
                        <div class="performance-value">28.5%</div>
                        <div class="performance-label">Historical Return</div>
                    </div>
                    <button class="elite-invest-btn">
                        <span class="btn-glow">✨</span>
                        Invest Now
                    </button>
                </div>

                <div class="investment-elite">
                    <div class="investment-header">
                        <div class="investment-grade platinum">AA</div>
                        <div class="investment-status exclusive">Exclusive</div>
                    </div>
                    <h3 class="investment-name">Venture Capital</h3>
                    <div class="investment-metrics">
                        <div class="metric">
                            <span class="metric-label">Minimum</span>
                            <span class="metric-value">$2.5M</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Horizon</span>
                            <span class="metric-value">7-10 Years</span>
                        </div>
                    </div>
                    <div class="investment-performance">
                        <div class="performance-value">35.2%</div>
                        <div class="performance-label">Target Return</div>
                    </div>
                    <button class="elite-invest-btn">
                        <span class="btn-glow">✨</span>
                        Invest Now
                    </button>
                </div>

                <div class="investment-elite">
                    <div class="investment-header">
                        <div class="investment-grade diamond">AAA</div>
                        <div class="investment-status limited">Limited</div>
                    </div>
                    <h3 class="investment-name">Real Estate Development</h3>
                    <div class="investment-metrics">
                        <div class="metric">
                            <span class="metric-label">Minimum</span>
                            <span class="metric-value">$5M</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Horizon</span>
                            <span class="metric-value">3-5 Years</span>
                        </div>
                    </div>
                    <div class="investment-performance">
                        <div class="performance-value">22.8%</div>
                        <div class="performance-label">Projected IRR</div>
                    </div>
                    <button class="elite-invest-btn">
                        <span class="btn-glow">✨</span>
                        Invest Now
                    </button>
                </div>
            </div>
        </div>

        <div class="elite-table-section">
            <table class="elite-table">
                <thead>
                    <tr>
                        <th>Opportunity</th>
                        <th>Investment Type</th>
                        <th>Minimum</th>
                        <th>Return</th>
                        <th>Risk</th>
                        <th>Availability</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="elite-row">
                        <td>
                            <div class="opportunity-info">
                                <div class="opportunity-badge gold">G</div>
                                <div class="opportunity-details">
                                    <div class="opportunity-name">Tech Startup Series B</div>
                                    <div class="opportunity-sector">Technology</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="investment-type">Equity</span>
                        </td>
                        <td>
                            <div class="minimum-amount">$500,000</div>
                        </td>
                        <td>
                            <div class="return-elite high">
                                <span class="return-icon">🚀</span>
                                45.8%
                            </div>
                        </td>
                        <td>
                            <div class="risk-elite high">
                                <div class="risk-bars">
                                    <div class="risk-bar active"></div>
                                    <div class="risk-bar active"></div>
                                    <div class="risk-bar active"></div>
                                </div>
                                High
                            </div>
                        </td>
                        <td>
                            <div class="availability limited">
                                <div class="availability-dots">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot empty"></div>
                                </div>
                                2 Slots Left
                            </div>
                        </td>
                    </tr>
                    <tr class="elite-row">
                        <td>
                            <div class="opportunity-info">
                                <div class="opportunity-badge platinum">P</div>
                                <div class="opportunity-details">
                                    <div class="opportunity-name">Commercial Real Estate</div>
                                    <div class="opportunity-sector">Property</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="investment-type">REIT</span>
                        </td>
                        <td>
                            <div class="minimum-amount">$1,000,000</div>
                        </td>
                        <td>
                            <div class="return-elite medium">
                                <span class="return-icon">📈</span>
                                18.3%
                            </div>
                        </td>
                        <td>
                            <div class="risk-elite medium">
                                <div class="risk-bars">
                                    <div class="risk-bar active"></div>
                                    <div class="risk-bar active"></div>
                                    <div class="risk-bar"></div>
                                </div>
                                Medium
                            </div>
                        </td>
                        <td>
                            <div class="availability available">
                                <div class="availability-dots">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                                Open
                            </div>
                        </td>
                    </tr>
                    <tr class="elite-row">
                        <td>
                            <div class="opportunity-info">
                                <div class="opportunity-badge diamond">D</div>
                                <div class="opportunity-details">
                                    <div class="opportunity-name">Infrastructure Fund</div>
                                    <div class="opportunity-sector">Utilities</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="investment-type">Debt</span>
                        </td>
                        <td>
                            <div class="minimum-amount">$2,000,000</div>
                        </td>
                        <td>
                            <div class="return-elite stable">
                                <span class="return-icon">🛡️</span>
                                12.5%
                            </div>
                        </td>
                        <td>
                            <div class="risk-elite low">
                                <div class="risk-bars">
                                    <div class="risk-bar active"></div>
                                    <div class="risk-bar"></div>
                                    <div class="risk-bar"></div>
                                </div>
                                Low
                            </div>
                        </td>
                        <td>
                            <div class="availability exclusive">
                                <div class="availability-dots">
                                    <div class="dot"></div>
                                    <div class="dot empty"></div>
                                    <div class="dot empty"></div>
                                </div>
                                VIP Only
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes goldGlow {
    0%, 100% { 
        box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.4),
            inset 0 0 20px rgba(255, 215, 0, 0.1);
    }
    50% { 
        box-shadow: 
            0 0 40px rgba(255, 215, 0, 0.6),
            inset 0 0 30px rgba(255, 215, 0, 0.2);
    }
}

@keyframes elitePulse {
    0%, 100% { 
        transform: scale(1);
        opacity: 1;
    }
    50% { 
        transform: scale(1.05);
        opacity: 0.8;
    }
}

.gold-elite {
    background: 
        linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%),
        radial-gradient(circle at 20% 20%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(255, 215, 0, 0.5);
    animation: goldGlow 4s ease-in-out infinite;
}

.elite-header {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.2), 
        rgba(212, 175, 55, 0.2)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
}

.gold-bar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
        #FFD700, 
        #D4AF37, 
        #FFD700
    );
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.5);
}

.header-content {
    text-align: center;
    margin-bottom: 2rem;
}

.elite-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #FFD700, #D4AF37, #FFD700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.title-crown {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
    animation: elitePulse 2s ease-in-out infinite;
}

.elite-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.elite-badges {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.elite-badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(212, 175, 55, 0.2));
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: #FFD700;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
}

.elite-dashboard {
    padding: 2rem;
}

.dashboard-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.stat-elite {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}

.stat-elite:hover {
    border-color: rgba(255, 215, 0, 0.3);
    transform: translateY(-5px);
}

.stat-gold {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.stat-icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
}

.stat-data {
    display: flex;
    flex-direction: column;
}

.stat-value {
    font-size: 2rem;
    font-weight: 700;
    color: #FFD700;
    margin-bottom: 0.25rem;
}

.stat-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.stat-trend {
    padding: 0.75rem 1.5rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.stat-trend.elite-positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.stat-trend.elite-stable {
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.elite-investments {
    margin-bottom: 3rem;
}

.investments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
}

.investment-elite {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.investment-elite:hover {
    border-color: rgba(255, 215, 0, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(255, 215, 0, 0.2);
}

.investment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.investment-grade {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #1a1a1a;
    font-size: 0.9rem;
}

.investment-grade.gold {
    background: linear-gradient(135deg, #FFD700, #D4AF37);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.investment-grade.platinum {
    background: linear-gradient(135deg, #E5E4E2, #BEC2CB);
    box-shadow: 0 5px 15px rgba(229, 228, 226, 0.3);
}

.investment-grade.diamond {
    background: linear-gradient(135deg, #B9F2FF, #70D1FF);
    box-shadow: 0 5px 15px rgba(185, 242, 255, 0.3);
}

.investment-status {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid;
}

.investment-status.active {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.investment-status.exclusive {
    background: rgba(139, 92, 246, 0.2);
    color: #8b5cf6;
    border-color: rgba(139, 92, 246, 0.3);
}

.investment-status.limited {
    background: rgba(245, 158, 11, 0.2);
    color: #f59e0b;
    border-color: rgba(245, 158, 11, 0.3);
}

.investment-name {
    margin: 0 0 1.5rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
}

.investment-metrics {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.metric {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.metric-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
}

.metric-value {
    color: #FFD700;
    font-weight: 600;
    font-size: 0.9rem;
}

.investment-performance {
    text-align: center;
    margin-bottom: 1.5rem;
}

.performance-value {
    font-size: 2rem;
    font-weight: 700;
    color: #4ade80;
    margin-bottom: 0.5rem;
}

.performance-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.elite-invest-btn {
    width: 100%;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(212, 175, 55, 0.3));
    border: 1px solid rgba(255, 215, 0, 0.5);
    color: #FFD700;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.elite-invest-btn:hover {
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.4), rgba(212, 175, 55, 0.4));
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);
}

.btn-glow {
    animation: elitePulse 1.5s ease-in-out infinite;
}

.elite-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.elite-table {
    width: 100%;
    border-collapse: collapse;
}

.elite-table th {
    background: linear-gradient(135deg, 
        rgba(255, 215, 0, 0.1), 
        rgba(212, 175, 55, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #FFD700;
    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.elite-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.elite-row:hover td {
    background: rgba(255, 215, 0, 0.05);
}

.opportunity-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.opportunity-badge {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #1a1a1a;
    font-size: 0.8rem;
}

.opportunity-badge.gold {
    background: linear-gradient(135deg, #FFD700, #D4AF37);
}

.opportunity-badge.platinum {
    background: linear-gradient(135deg, #E5E4E2, #BEC2CB);
}

.opportunity-badge.diamond {
    background: linear-gradient(135deg, #B9F2FF, #70D1FF);
}

.opportunity-details .opportunity-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.opportunity-details .opportunity-sector {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.investment-type {
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
}

.minimum-amount {
    font-size: 1rem;
    font-weight: 600;
    color: #FFD700;
}

.return-elite {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.return-elite.high {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.return-elite.medium {
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    border-color: rgba(255, 215, 0, 0.3);
}

.return-elite.stable {
    background: rgba(6, 182, 212, 0.2);
    color: #06b6d4;
    border-color: rgba(6, 182, 212, 0.3);
}

.risk-elite {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.risk-bars {
    display: flex;
    gap: 2px;
}

.risk-bar {
    width: 6px;
    height: 12px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
}

.risk-bar.active {
    background: #4ade80;
}

.risk-elite.high .risk-bar {
    background: #4ade80;
}

.risk-elite.medium .risk-bar:nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.risk-elite.low .risk-bar:nth-child(2):nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.availability {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.availability-dots {
    display: flex;
    gap: 2px;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4ade80;
}

.dot.empty {
    background: rgba(255, 255, 255, 0.3);
}

.availability.limited .dot:nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.availability.exclusive .dot:nth-child(2):nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}`,
    js: `// Gold elite interactions
document.querySelectorAll('.investment-elite').forEach(investment => {
    investment.addEventListener('mouseenter', function() {
        this.style.animation = 'goldGlow 2s ease-in-out infinite';
    });
    
    investment.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
    });
});

// Elite invest buttons
document.querySelectorAll('.elite-invest-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalHTML = this.innerHTML;
        this.innerHTML = '<span class="btn-glow">💫</span> Processing...';
        this.disabled = true;
        
        // Create gold particle effect
        for (let i = 0; i < 8; i++) {
            createGoldParticle(this);
        }
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            // Add success state
            this.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(212, 175, 55, 0.3))';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(212, 175, 55, 0.3))';
                this.style.borderColor = 'rgba(255, 215, 0, 0.5)';
            }, 1000);
        }, 2000);
    });
});

function createGoldParticle(element) {
    const particle = document.createElement('div');
    particle.style.cssText = \`
        position: absolute;
        width: 6px;
        height: 6px;
        background: #FFD700;
        border-radius: 50%;
        pointer-events: none;
        animation: eliteParticle 1s ease-out forwards;
    \`;
    
    const rect = element.getBoundingClientRect();
    particle.style.left = (Math.random() * rect.width) + 'px';
    particle.style.top = (Math.random() * rect.height) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
}

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = \`
    @keyframes eliteParticle {
        0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translate(\${Math.random() * 100 - 50}px, \${Math.random() * 100 - 50}px) scale(0);
        }
    }
\`;
document.head.appendChild(style);

// Stat elite hover effects
document.querySelectorAll('.stat-elite').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.stat-icon');
        icon.style.animation = 'elitePulse 0.6s ease-in-out';
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 58: PLATINUM FINANCE
// ====================================================================
premium8: {
    html: `<div class="platinum-finance">
    <div class="platinum-header">
        <div class="metallic-overlay"></div>
        <div class="header-content">
            <h1 class="platinum-title">
                <span class="title-icon">⚪</span>
                Platinum Financial Services
            </h1>
            <p class="platinum-subtitle">Metallic Excellence in Wealth Management</p>
        </div>
        <div class="platinum-controls">
            <div class="control-group">
                <button class="platinum-btn active">Portfolio</button>
                <button class="platinum-btn">Analytics</button>
                <button class="platinum-btn">Reports</button>
            </div>
        </div>
    </div>

    <div class="platinum-dashboard">
        <div class="financial-overview">
            <div class="overview-platinum">
                <div class="overview-icon">💼</div>
                <div class="overview-content">
                    <div class="overview-value">$18.2M</div>
                    <div class="overview-label">Managed Assets</div>
                </div>
                <div class="overview-trend positive">+8.5%</div>
            </div>
            <div class="overview-platinum">
                <div class="overview-icon">📊</div>
                <div class="overview-content">
                    <div class="overview-value">16.8%</div>
                    <div class="overview-label">Average Return</div>
                </div>
                <div class="overview-trend positive">+2.3%</div>
            </div>
            <div class="overview-platinum">
                <div class="overview-icon">🛡️</div>
                <div class="overview-content">
                    <div class="overview-value">94%</div>
                    <div class="overview-label">Success Rate</div>
                </div>
                <div class="overview-trend stable">Consistent</div>
            </div>
        </div>

        <div class="portfolio-breakdown">
            <h3 class="section-title">Portfolio Composition</h3>
            <div class="composition-grid">
                <div class="composition-item">
                    <div class="composition-header">
                        <span class="composition-name">Equity Funds</span>
                        <span class="composition-percent">42%</span>
                    </div>
                    <div class="composition-bar">
                        <div class="composition-fill" style="--fill: 85%"></div>
                    </div>
                    <div class="composition-value">$7.64M</div>
                </div>
                <div class="composition-item">
                    <div class="composition-header">
                        <span class="composition-name">Fixed Income</span>
                        <span class="composition-percent">28%</span>
                    </div>
                    <div class="composition-bar">
                        <div class="composition-fill" style="--fill: 65%"></div>
                    </div>
                    <div class="composition-value">$5.10M</div>
                </div>
                <div class="composition-item">
                    <div class="composition-header">
                        <span class="composition-name">Alternatives</span>
                        <span class="composition-percent">20%</span>
                    </div>
                    <div class="composition-bar">
                        <div class="composition-fill" style="--fill: 45%"></div>
                    </div>
                    <div class="composition-value">$3.64M</div>
                </div>
                <div class="composition-item">
                    <div class="composition-header">
                        <span class="composition-name">Cash & Equivalents</span>
                        <span class="composition-percent">10%</span>
                    </div>
                    <div class="composition-bar">
                        <div class="composition-fill" style="--fill: 25%"></div>
                    </div>
                    <div class="composition-value">$1.82M</div>
                </div>
            </div>
        </div>

        <div class="platinum-table-section">
            <table class="platinum-table">
                <thead>
                    <tr>
                        <th>Fund Name</th>
                        <th>Asset Class</th>
                        <th>Current Value</th>
                        <th>Allocation</th>
                        <th>YTD Return</th>
                        <th>Risk Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="platinum-row">
                        <td>
                            <div class="fund-info">
                                <div class="fund-badge platinum">P</div>
                                <div class="fund-details">
                                    <div class="fund-name">Global Growth Equity</div>
                                    <div class="fund-manager">BlackRock Advisors</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="asset-class">Equity</span>
                        </td>
                        <td>
                            <div class="fund-value">$3,250,000</div>
                        </td>
                        <td>
                            <div class="allocation-platinum">
                                <div class="allocation-track">
                                    <div class="allocation-progress" style="--progress: 75%"></div>
                                </div>
                                <span class="allocation-text">18%</span>
                            </div>
                        </td>
                        <td>
                            <div class="return-platinum high">
                                <span class="return-arrow">↗</span>
                                22.8%
                            </div>
                        </td>
                        <td>
                            <div class="risk-platinum medium">
                                <div class="risk-indicator">
                                    <div class="risk-dot"></div>
                                    <div class="risk-dot"></div>
                                    <div class="risk-dot"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="platinum-actions">
                                <button class="action-platinum view">
                                    <span class="action-icon">👁️</span>
                                </button>
                                <button class="action-platinum trade">
                                    <span class="action-icon">💱</span>
                                </button>
                                <button class="action-platinum analyze">
                                    <span class="action-icon">📈</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="platinum-row">
                        <td>
                            <div class="fund-info">
                                <div class="fund-badge silver">S</div>
                                <div class="fund-details">
                                    <div class="fund-name">Corporate Bond Fund</div>
                                    <div class="fund-manager">Vanguard Group</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="asset-class">Fixed Income</span>
                        </td>
                        <td>
                            <div class="fund-value">$2,180,000</div>
                        </td>
                        <td>
                            <div class="allocation-platinum">
                                <div class="allocation-track">
                                    <div class="allocation-progress" style="--progress: 60%"></div>
                                </div>
                                <span class="allocation-text">12%</span>
                            </div>
                        </td>
                        <td>
                            <div class="return-platinum medium">
                                <span class="return-arrow">↗</span>
                                8.5%
                            </div>
                        </td>
                        <td>
                            <div class="risk-platinum low">
                                <div class="risk-indicator">
                                    <div class="risk-dot"></div>
                                    <div class="risk-dot"></div>
                                    <div class="risk-dot"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="platinum-actions">
                                <button class="action-platinum view">
                                    <span class="action-icon">👁️</span>
                                </button>
                                <button class="action-platinum trade">
                                    <span class="action-icon">💱</span>
                                </button>
                                <button class="action-platinum analyze">
                                    <span class="action-icon">📈</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="platinum-row">
                        <td>
                            <div class="fund-info">
                                <div class="fund-badge gold">G</div>
                                <div class="fund-details">
                                    <div class="fund-name">Real Estate Income</div>
                                    <div class="fund-manager">PIMCO</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="asset-class">Real Estate</span>
                        </td>
                        <td>
                            <div class="fund-value">$1,950,000</div>
                        </td>
                        <td>
                            <div class="allocation-platinum">
                                <div class="allocation-track">
                                    <div class="allocation-progress" style="--progress: 50%"></div>
                                </div>
                                <span class="allocation-text">11%</span>
                            </div>
                        </td>
                        <td>
                            <div class="return-platinum stable">
                                <span class="return-arrow">↗</span>
                                12.3%
                            </div>
                        </td>
                        <td>
                            <div class="risk-platinum medium">
                                <div class="risk-indicator">
                                    <div class="risk-dot"></div>
                                    <div class="risk-dot"></div>
                                    <div class="risk-dot"></div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="platinum-actions">
                                <button class="action-platinum view">
                                    <span class="action-icon">👁️</span>
                                </button>
                                <button class="action-platinum trade">
                                    <span class="action-icon">💱</span>
                                </button>
                                <button class="action-platinum analyze">
                                    <span class="action-icon">📈</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes metallicShine {
    0% { background-position: -100% 0; }
    100% { background-position: 200% 0; }
}

@keyframes platinumGlow {
    0%, 100% { 
        border-color: rgba(229, 228, 226, 0.5);
        box-shadow: 0 0 20px rgba(229, 228, 226, 0.3);
    }
    50% { 
        border-color: rgba(229, 228, 226, 0.8);
        box-shadow: 0 0 40px rgba(229, 228, 226, 0.5);
    }
}

.platinum-finance {
    background: 
        linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 50%, #2d2d2d 100%),
        radial-gradient(circle at 20% 20%, rgba(229, 228, 226, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(190, 194, 203, 0.15) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(229, 228, 226, 0.5);
    animation: platinumGlow 4s ease-in-out infinite;
}

.platinum-header {
    background: linear-gradient(135deg, 
        rgba(229, 228, 226, 0.2), 
        rgba(190, 194, 203, 0.2)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
    overflow: hidden;
}

.metallic-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
        transparent 48%, 
        rgba(229, 228, 226, 0.1) 50%, 
        transparent 52%
    );
    background-size: 50px 50px;
    opacity: 0.3;
}

.header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 2rem;
}

.platinum-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #E5E4E2, #BEC2CB, #E5E4E2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.title-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(229, 228, 226, 0.5));
}

.platinum-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.platinum-controls {
    display: flex;
    justify-content: center;
}

.control-group {
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.platinum-btn {
    background: transparent;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.platinum-btn.active,
.platinum-btn:hover {
    background: linear-gradient(135deg, rgba(229, 228, 226, 0.3), rgba(190, 194, 203, 0.3));
    color: white;
}

.platinum-dashboard {
    padding: 2rem;
}

.financial-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.overview-platinum {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.overview-platinum:hover {
    border-color: rgba(229, 228, 226, 0.3);
    transform: translateY(-5px);
}

.overview-platinum::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(229, 228, 226, 0.1), 
        transparent
    );
    animation: metallicShine 3s infinite;
}

.overview-icon {
    font-size: 2.5rem;
    filter: drop-shadow(0 0 10px rgba(229, 228, 226, 0.5));
}

.overview-content {
    flex: 1;
}

.overview-value {
    font-size: 2rem;
    font-weight: 700;
    color: #E5E4E2;
    margin-bottom: 0.25rem;
}

.overview-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.overview-trend {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
}

.overview-trend.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.overview-trend.stable {
    background: rgba(229, 228, 226, 0.2);
    color: #E5E4E2;
    border-color: rgba(229, 228, 226, 0.3);
}

.portfolio-breakdown {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 3rem;
}

.section-title {
    color: #E5E4E2;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.composition-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}

.composition-item {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.composition-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.composition-name {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 600;
}

.composition-percent {
    color: #E5E4E2;
    font-weight: 700;
    font-size: 1.1rem;
}

.composition-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.75rem;
}

.composition-fill {
    height: 100%;
    background: linear-gradient(90deg, #E5E4E2, #BEC2CB);
    width: var(--fill);
    border-radius: 4px;
    transition: width 1s ease-in-out;
    position: relative;
}

.composition-fill::after {
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
    animation: metallicShine 2s infinite;
}

.composition-value {
    color: #E5E4E2;
    font-weight: 600;
    font-size: 1rem;
}

.platinum-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.platinum-table {
    width: 100%;
    border-collapse: collapse;
}

.platinum-table th {
    background: linear-gradient(135deg, 
        rgba(229, 228, 226, 0.1), 
        rgba(190, 194, 203, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #E5E4E2;
    border-bottom: 2px solid rgba(229, 228, 226, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.platinum-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.platinum-row:hover td {
    background: rgba(229, 228, 226, 0.05);
}

.fund-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.fund-badge {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #2d2d2d;
    font-size: 0.8rem;
}

.fund-badge.platinum {
    background: linear-gradient(135deg, #E5E4E2, #BEC2CB);
    box-shadow: 0 5px 15px rgba(229, 228, 226, 0.3);
}

.fund-badge.silver {
    background: linear-gradient(135deg, #C0C0C0, #A8A8A8);
    box-shadow: 0 5px 15px rgba(192, 192, 192, 0.3);
}

.fund-badge.gold {
    background: linear-gradient(135deg, #FFD700, #D4AF37);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.fund-details .fund-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.fund-details .fund-manager {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.asset-class {
    padding: 0.4rem 0.8rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
}

.fund-value {
    font-size: 1.1rem;
    font-weight: 600;
    color: #E5E4E2;
}

.allocation-platinum {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.allocation-track {
    width: 80px;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}

.allocation-progress {
    height: 100%;
    background: linear-gradient(90deg, #E5E4E2, #BEC2CB);
    width: var(--progress);
    border-radius: 3px;
    transition: width 1s ease-in-out;
}

.allocation-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    min-width: 35px;
}

.return-platinum {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.return-platinum.high {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.return-platinum.medium {
    background: rgba(229, 228, 226, 0.2);
    color: #E5E4E2;
    border-color: rgba(229, 228, 226, 0.3);
}

.return-platinum.stable {
    background: rgba(6, 182, 212, 0.2);
    color: #06b6d4;
    border-color: rgba(6, 182, 212, 0.3);
}

.risk-platinum {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.risk-indicator {
    display: flex;
    gap: 2px;
}

.risk-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
}

.risk-platinum.medium .risk-dot {
    background: #f59e0b;
}

.risk-platinum.low .risk-dot {
    background: #4ade80;
}

.risk-platinum.medium .risk-dot:nth-child(3) {
    background: rgba(255, 255, 255, 0.3);
}

.platinum-actions {
    display: flex;
    gap: 0.5rem;
}

.action-platinum {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.8);
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.action-platinum:hover {
    background: rgba(229, 228, 226, 0.2);
    border-color: rgba(229, 228, 226, 0.5);
    color: #E5E4E2;
    transform: scale(1.1);
}`,
    js: `// Platinum finance interactions
document.querySelectorAll('.platinum-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.platinum-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Add metallic shine effect
        this.style.background = 'linear-gradient(135deg, rgba(229, 228, 226, 0.4), rgba(190, 194, 203, 0.4))';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, rgba(229, 228, 226, 0.3), rgba(190, 194, 203, 0.3))';
        }, 300);
    });
});

// Animate composition fills
document.querySelectorAll('.composition-fill').forEach(fill => {
    const width = fill.style.getPropertyValue('--fill');
    fill.style.width = '0%';
    
    setTimeout(() => {
        fill.style.width = width;
    }, 800);
});

// Animate allocation progress
document.querySelectorAll('.allocation-progress').forEach(progress => {
    const width = progress.style.getPropertyValue('--progress');
    progress.style.width = '0%';
    
    setTimeout(() => {
        progress.style.width = width;
    }, 1200);
});

// Platinum action buttons
document.querySelectorAll('.action-platinum').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.classList[1];
        let message = '';
        
        switch(type) {
            case 'view':
                message = 'Opening fund details...';
                break;
            case 'trade':
                message = 'Initiating trade...';
                break;
            case 'analyze':
                message = 'Running analysis...';
                break;
        }
        
        const originalHTML = this.innerHTML;
        this.innerHTML = '⏳';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            // Add success effect
            this.style.background = 'rgba(34, 197, 94, 0.3)';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }, 1000);
        }, 1500);
    });
});

// Overview card hover effects
document.querySelectorAll('.overview-platinum').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.overview-icon');
        icon.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.overview-icon');
        icon.style.transform = 'scale(1)';
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 59: EMERALD GROWTH
// ====================================================================
premium9: {
    html: `<div class="emerald-growth">
    <div class="emerald-header">
        <div class="emerald-pattern"></div>
        <div class="header-content">
            <h1 class="emerald-title">
                <span class="title-icon">💚</span>
                Emerald Growth Strategies
            </h1>
            <p class="emerald-subtitle">Sustainable Wealth Creation & Growth Management</p>
        </div>
        <div class="growth-indicators">
            <div class="indicator">
                <span class="indicator-label">Portfolio Growth</span>
                <span class="indicator-value positive">+18.3%</span>
            </div>
            <div class="indicator">
                <span class="indicator-label">Sustainable Yield</span>
                <span class="indicator-value">6.8%</span>
            </div>
        </div>
    </div>

    <div class="emerald-content">
        <div class="growth-metrics">
            <div class="metric-emerald">
                <div class="metric-visual">
                    <div class="growth-ring" style="--growth: 75%">
                        <div class="ring-fill"></div>
                        <div class="ring-value">75%</div>
                    </div>
                </div>
                <div class="metric-data">
                    <h3>Growth Achievement</h3>
                    <p>Exceeding target growth metrics by 15%</p>
                    <div class="metric-trend positive">+5.2% vs Target</div>
                </div>
            </div>
            <div class="metric-emerald">
                <div class="metric-visual">
                    <div class="sustainability-score" style="--score: 88%">
                        <div class="score-fill"></div>
                        <div class="score-value">88%</div>
                    </div>
                </div>
                <div class="metric-data">
                    <h3>Sustainability Index</h3>
                    <p>High environmental and social governance</p>
                    <div class="metric-trend positive">Industry Leader</div>
                </div>
            </div>
            <div class="metric-emerald">
                <div class="metric-visual">
                    <div class="risk-adjusted" style="--adjustment: 92%">
                        <div class="adjustment-fill"></div>
                        <div class="adjustment-value">1.25</div>
                    </div>
                </div>
                <div class="metric-data">
                    <h3>Risk Adjusted Return</h3>
                    <p>Superior returns with managed risk exposure</p>
                    <div class="metric-trend positive">Optimal</div>
                </div>
            </div>
        </div>

        <div class="emerald-table-section">
            <table class="emerald-table">
                <thead>
                    <tr>
                        <th>Growth Opportunity</th>
                        <th>Sector</th>
                        <th>Investment</th>
                        <th>Growth Rate</th>
                        <th>Sustainability</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="emerald-row">
                        <td>
                            <div class="opportunity-emerald">
                                <div class="opportunity-icon">🌱</div>
                                <div class="opportunity-details">
                                    <div class="opportunity-name">Renewable Energy Fund</div>
                                    <div class="opportunity-desc">Solar & Wind Infrastructure</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="sector-tag green">Clean Energy</span>
                        </td>
                        <td>
                            <div class="investment-amount">$2,500,000</div>
                        </td>
                        <td>
                            <div class="growth-rate high">
                                <span class="rate-icon">🚀</span>
                                28.5%
                            </div>
                        </td>
                        <td>
                            <div class="sustainability-score">
                                <div class="score-bars">
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar"></div>
                                </div>
                                <span>4/5 Stars</span>
                            </div>
                        </td>
                        <td>
                            <button class="emerald-action-btn">
                                <span class="btn-leaf">🍃</span>
                                Invest
                            </button>
                        </td>
                    </tr>
                    <tr class="emerald-row">
                        <td>
                            <div class="opportunity-emerald">
                                <div class="opportunity-icon">💧</div>
                                <div class="opportunity-details">
                                    <div class="opportunity-name">Water Technology</div>
                                    <div class="opportunity-desc">Purification & Conservation</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="sector-tag blue">Water Tech</span>
                        </td>
                        <td>
                            <div class="investment-amount">$1,800,000</div>
                        </td>
                        <td>
                            <div class="growth-rate medium">
                                <span class="rate-icon">📈</span>
                                18.3%
                            </div>
                        </td>
                        <td>
                            <div class="sustainability-score">
                                <div class="score-bars">
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                </div>
                                <span>5/5 Stars</span>
                            </div>
                        </td>
                        <td>
                            <button class="emerald-action-btn">
                                <span class="btn-leaf">🍃</span>
                                Invest
                            </button>
                        </td>
                    </tr>
                    <tr class="emerald-row">
                        <td>
                            <div class="opportunity-emerald">
                                <div class="opportunity-icon">🏗️</div>
                                <div class="opportunity-details">
                                    <div class="opportunity-name">Green Construction</div>
                                    <div class="opportunity-desc">Sustainable Building Materials</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="sector-tag teal">Construction</span>
                        </td>
                        <td>
                            <div class="investment-amount">$3,200,000</div>
                        </td>
                        <td>
                            <div class="growth-rate high">
                                <span class="rate-icon">🚀</span>
                                22.8%
                            </div>
                        </td>
                        <td>
                            <div class="sustainability-score">
                                <div class="score-bars">
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar active"></div>
                                    <div class="score-bar"></div>
                                    <div class="score-bar"></div>
                                </div>
                                <span>3/5 Stars</span>
                            </div>
                        </td>
                        <td>
                            <button class="emerald-action-btn">
                                <span class="btn-leaf">🍃</span>
                                Invest
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes emeraldPulse {
    0%, 100% { 
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
    }
    50% { 
        box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
    }
}

@keyframes leafFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-5px) rotate(-5deg); }
    66% { transform: translateY(-3px) rotate(5deg); }
}

@keyframes growRing {
    from { stroke-dashoffset: 283; }
    to { stroke-dashoffset: calc(283 - (283 * var(--growth) / 100)); }
}

.emerald-growth {
    background: 
        linear-gradient(135deg, #052e16 0%, #065f46 50%, #047857 100%),
        radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(5, 150, 105, 0.2) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(16, 185, 129, 0.5);
    animation: emeraldPulse 4s ease-in-out infinite;
}

.emerald-header {
    background: linear-gradient(135deg, 
        rgba(16, 185, 129, 0.2), 
        rgba(5, 150, 105, 0.2)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
    overflow: hidden;
}

.emerald-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(5, 150, 105, 0.1) 0%, transparent 50%);
    opacity: 0.3;
}

.header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 2rem;
}

.emerald-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #10b981, #34d399, #10b981);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.title-icon {
    font-size: 2rem;
    animation: leafFloat 3s ease-in-out infinite;
}

.emerald-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.growth-indicators {
    display: flex;
    justify-content: center;
    gap: 3rem;
    position: relative;
    z-index: 2;
}

.indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.indicator-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.indicator-value {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
}

.indicator-value.positive {
    color: #34d399;
}

.emerald-content {
    padding: 2rem;
}

.growth-metrics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.metric-emerald {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
}

.metric-emerald:hover {
    border-color: rgba(16, 185, 129, 0.3);
    transform: translateY(-5px);
}

.metric-visual {
    position: relative;
}

.growth-ring,
.sustainability-score,
.risk-adjusted {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ring-fill,
.score-fill,
.adjustment-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(#10b981 0% var(--growth), transparent var(--growth) 100%);
    mask: radial-gradient(transparent 60%, black 61%);
}

.score-fill {
    background: conic-gradient(#10b981 0% var(--score), transparent var(--score) 100%);
}

.adjustment-fill {
    background: conic-gradient(#10b981 0% var(--adjustment), transparent var(--adjustment) 100%);
}

.ring-value,
.score-value,
.adjustment-value {
    font-size: 1rem;
    font-weight: 700;
    color: #10b981;
    z-index: 2;
}

.metric-data {
    flex: 1;
}

.metric-data h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
}

.metric-data p {
    margin: 0 0 1rem 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.4;
}

.metric-trend {
    padding: 0.5rem 1rem;
    border-radius: 15px;
    font-weight: 700;
    font-size: 0.8rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.metric-trend.positive {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border-color: rgba(16, 185, 129, 0.3);
}

.emerald-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.emerald-table {
    width: 100%;
    border-collapse: collapse;
}

.emerald-table th {
    background: linear-gradient(135deg, 
        rgba(16, 185, 129, 0.1), 
        rgba(5, 150, 105, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #10b981;
    border-bottom: 2px solid rgba(16, 185, 129, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.emerald-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.emerald-row:hover td {
    background: rgba(16, 185, 129, 0.05);
}

.opportunity-emerald {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.opportunity-icon {
    font-size: 1.5rem;
    filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.5));
}

.opportunity-details .opportunity-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.opportunity-details .opportunity-desc {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.sector-tag {
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.sector-tag.green {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.sector-tag.blue {
    background: rgba(59, 130, 246, 0.2);
    color: #3b82f6;
    border: 1px solid rgba(59, 130, 246, 0.3);
}

.sector-tag.teal {
    background: rgba(6, 182, 212, 0.2);
    color: #06b6d4;
    border: 1px solid rgba(6, 182, 212, 0.3);
}

.investment-amount {
    font-size: 1.1rem;
    font-weight: 600;
    color: #10b981;
}

.growth-rate {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.growth-rate.high {
    background: rgba(34, 197, 94, 0.2);
    color: #22c55e;
    border-color: rgba(34, 197, 94, 0.3);
}

.growth-rate.medium {
    background: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border-color: rgba(16, 185, 129, 0.3);
}

.sustainability-score {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.score-bars {
    display: flex;
    gap: 2px;
}

.score-bar {
    width: 6px;
    height: 12px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
}

.score-bar.active {
    background: #10b981;
}

.emerald-action-btn {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3));
    border: 1px solid rgba(16, 185, 129, 0.5);
    color: #10b981;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.emerald-action-btn:hover {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.4), rgba(5, 150, 105, 0.4));
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(16, 185, 129, 0.3);
}

.btn-leaf {
    animation: leafFloat 2s ease-in-out infinite;
}`,
    js: `// Emerald growth interactions
document.querySelectorAll('.metric-emerald').forEach(metric => {
    metric.addEventListener('mouseenter', function() {
        const visual = this.querySelector('.metric-visual > div');
        visual.style.animation = 'emeraldPulse 1s ease-in-out';
    });
});

// Animate growth rings
document.querySelectorAll('.growth-ring, .sustainability-score, .risk-adjusted').forEach(ring => {
    const growth = ring.style.getPropertyValue('--growth') || 
                  ring.style.getPropertyValue('--score') || 
                  ring.style.getPropertyValue('--adjustment');
    
    const fill = ring.querySelector('div[class*="fill"]');
    fill.style.background = 'conic-gradient(#10b981 0% 0%, transparent 0% 100%)';
    
    setTimeout(() => {
        fill.style.background = \`conic-gradient(#10b981 0% \${growth}, transparent \${growth} 100%)\`;
    }, 500);
});

// Emerald action buttons
document.querySelectorAll('.emerald-action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalHTML = this.innerHTML;
        this.innerHTML = '<span class="btn-leaf">🌱</span> Planting...';
        this.disabled = true;
        
        // Create leaf particle effect
        for (let i = 0; i < 5; i++) {
            createLeafParticle(this);
        }
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            // Add success state
            this.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(5, 150, 105, 0.3))';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))';
                this.style.borderColor = 'rgba(16, 185, 129, 0.5)';
            }, 1000);
        }, 2000);
    });
});

function createLeafParticle(element) {
    const leaf = document.createElement('div');
    leaf.style.cssText = \`
        position: absolute;
        font-size: 0.8rem;
        pointer-events: none;
        animation: leafFloat 1s ease-out forwards;
    \`;
    leaf.textContent = '🍃';
    
    const rect = element.getBoundingClientRect();
    leaf.style.left = (Math.random() * rect.width) + 'px';
    leaf.style.top = (Math.random() * rect.height) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(leaf);
    
    setTimeout(() => leaf.remove(), 1000);
}

// Add hover effects to opportunity icons
document.querySelectorAll('.opportunity-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.animation = 'leafFloat 0.6s ease-in-out';
    });
});`
},

// ====================================================================
// PREMIUM TEMPLATE 60: SAPPHIRE ANALYTICS
// ====================================================================
premium10: {
    html: `<div class="sapphire-analytics">
    <div class="sapphire-header">
        <div class="crystal-background">
            <div class="crystal-shard"></div>
            <div class="crystal-shard"></div>
            <div class="crystal-shard"></div>
        </div>
        <div class="header-content">
            <h1 class="sapphire-title">
                <span class="title-icon">🔷</span>
                Sapphire Analytics Suite
            </h1>
            <p class="sapphire-subtitle">Deep Insights with Crystal Clear Precision</p>
        </div>
        <div class="analytics-controls">
            <div class="control-panel">
                <button class="control-btn active">Real-time</button>
                <button class="control-btn">Historical</button>
                <button class="control-btn">Predictive</button>
            </div>
        </div>
    </div>

    <div class="sapphire-dashboard">
        <div class="analytics-overview">
            <div class="overview-sapphire">
                <div class="overview-crystal blue"></div>
                <div class="overview-data">
                    <div class="data-value">94.5%</div>
                    <div class="data-label">Accuracy Score</div>
                    <div class="data-trend positive">+2.3%</div>
                </div>
            </div>
            <div class="overview-sapphire">
                <div class="overview-crystal purple"></div>
                <div class="overview-data">
                    <div class="data-value">12.8M</div>
                    <div class="data-label">Data Points</div>
                    <div class="data-trend positive">+1.5K/sec</div>
                </div>
            </div>
            <div class="overview-sapphire">
                <div class="overview-crystal teal"></div>
                <div class="overview-data">
                    <div class="data-value">99.9%</div>
                    <div class="data-label">Uptime</div>
                    <div class="data-trend stable">Reliable</div>
                </div>
            </div>
        </div>

        <div class="insights-grid">
            <div class="insight-card">
                <div class="insight-header">
                    <h3>Market Trends</h3>
                    <div class="insight-badge trending">Trending</div>
                </div>
                <div class="insight-visual">
                    <div class="trend-sparkline" style="--trend-data: 30,45,60,40,75,90,110"></div>
                </div>
                <div class="insight-stats">
                    <div class="stat">
                        <span class="stat-label">Correlation</span>
                        <span class="stat-value">0.87</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Volatility</span>
                        <span class="stat-value">12.3%</span>
                    </div>
                </div>
                <button class="sapphire-action-btn analyze">
                    <span class="btn-crystal">💎</span>
                    Deep Analyze
                </button>
            </div>

            <div class="insight-card">
                <div class="insight-header">
                    <h3>Risk Assessment</h3>
                    <div class="insight-badge stable">Stable</div>
                </div>
                <div class="insight-visual">
                    <div class="risk-radar" style="--risk-level: 65%">
                        <div class="radar-fill"></div>
                        <div class="radar-value">65%</div>
                    </div>
                </div>
                <div class="insight-stats">
                    <div class="stat">
                        <span class="stat-label">VAR</span>
                        <span class="stat-value">4.2%</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Stress Test</span>
                        <span class="stat-value">Pass</span>
                    </div>
                </div>
                <button class="sapphire-action-btn assess">
                    <span class="btn-crystal">💎</span>
                    Assess Risk
                </button>
            </div>

            <div class="insight-card">
                <div class="insight-header">
                    <h3>Performance Metrics</h3>
                    <div class="insight-badge optimal">Optimal</div>
                </div>
                <div class="insight-visual">
                    <div class="performance-gauge" style="--performance: 82%">
                        <div class="gauge-fill"></div>
                        <div class="gauge-value">82%</div>
                    </div>
                </div>
                <div class="insight-stats">
                    <div class="stat">
                        <span class="stat-label">Alpha</span>
                        <span class="stat-value">1.25</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Beta</span>
                        <span class="stat-value">0.89</span>
                    </div>
                </div>
                <button class="sapphire-action-btn optimize">
                    <span class="btn-crystal">💎</span>
                    Optimize
                </button>
            </div>
        </div>

        <div class="sapphire-table-section">
            <table class="sapphire-table">
                <thead>
                    <tr>
                        <th>Analytic Metric</th>
                        <th>Current Value</th>
                        <th>Benchmark</th>
                        <th>Trend</th>
                        <th>Confidence</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="sapphire-row">
                        <td>
                            <div class="metric-display">
                                <div class="metric-crystal blue"></div>
                                <div class="metric-info">
                                    <div class="metric-name">Price to Earnings Ratio</div>
                                    <div class="metric-category">Valuation</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="current-reading">18.3x</div>
                        </td>
                        <td>
                            <div class="benchmark-value">20.0x</div>
                        </td>
                        <td>
                            <div class="trend-direction positive">
                                <span class="trend-arrow">↗</span>
                                Improving
                            </div>
                        </td>
                        <td>
                            <div class="confidence-level high">
                                <div class="confidence-bars">
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                </div>
                                95%
                            </div>
                        </td>
                        <td>
                            <div class="sapphire-actions">
                                <button class="action-sapphire chart">
                                    <span class="action-icon">📊</span>
                                </button>
                                <button class="action-sapphire forecast">
                                    <span class="action-icon">🔮</span>
                                </button>
                                <button class="action-sapphire export">
                                    <span class="action-icon">📤</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="sapphire-row">
                        <td>
                            <div class="metric-display">
                                <div class="metric-crystal purple"></div>
                                <div class="metric-info">
                                    <div class="metric-name">Return on Equity</div>
                                    <div class="metric-category">Profitability</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="current-reading">22.8%</div>
                        </td>
                        <td>
                            <div class="benchmark-value">18.0%</div>
                        </td>
                        <td>
                            <div class="trend-direction positive">
                                <span class="trend-arrow">↗</span>
                                Strong
                            </div>
                        </td>
                        <td>
                            <div class="confidence-level high">
                                <div class="confidence-bars">
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                </div>
                                98%
                            </div>
                        </td>
                        <td>
                            <div class="sapphire-actions">
                                <button class="action-sapphire chart">
                                    <span class="action-icon">📊</span>
                                </button>
                                <button class="action-sapphire forecast">
                                    <span class="action-icon">🔮</span>
                                </button>
                                <button class="action-sapphire export">
                                    <span class="action-icon">📤</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr class="sapphire-row">
                        <td>
                            <div class="metric-display">
                                <div class="metric-crystal teal"></div>
                                <div class="metric-info">
                                    <div class="metric-name">Debt to Equity</div>
                                    <div class="metric-category">Leverage</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="current-reading">0.45</div>
                        </td>
                        <td>
                            <div class="benchmark-value">0.60</div>
                        </td>
                        <td>
                            <div class="trend-direction stable">
                                <span class="trend-icon">⚖️</span>
                                Stable
                            </div>
                        </td>
                        <td>
                            <div class="confidence-level medium">
                                <div class="confidence-bars">
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                    <div class="confidence-bar"></div>
                                </div>
                                85%
                            </div>
                        </td>
                        <td>
                            <div class="sapphire-actions">
                                <button class="action-sapphire chart">
                                    <span class="action-icon">📊</span>
                                </button>
                                <button class="action-sapphire forecast">
                                    <span class="action-icon">🔮</span>
                                </button>
                                <button class="action-sapphire export">
                                    <span class="action-icon">📤</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>`,
    css: `@keyframes crystalReflect {
    0%, 100% { 
        background-position: 0% 50%;
        filter: brightness(1) hue-rotate(0deg);
    }
    50% { 
        background-position: 100% 50%;
        filter: brightness(1.2) hue-rotate(20deg);
    }
}

@keyframes sapphireGlow {
    0%, 100% { 
        box-shadow: 
            0 0 20px rgba(37, 99, 235, 0.4),
            inset 0 0 20px rgba(37, 99, 235, 0.1);
    }
    50% { 
        box-shadow: 
            0 0 40px rgba(37, 99, 235, 0.6),
            inset 0 0 30px rgba(37, 99, 235, 0.2);
    }
}

.sapphire-analytics {
    background: 
        linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%),
        radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    border: 2px solid rgba(37, 99, 235, 0.5);
    animation: sapphireGlow 4s ease-in-out infinite;
}

.sapphire-header {
    background: linear-gradient(135deg, 
        rgba(37, 99, 235, 0.2), 
        rgba(139, 92, 246, 0.2)
    );
    padding: 3rem 2rem 2rem 2rem;
    position: relative;
    overflow: hidden;
}

.crystal-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
}

.crystal-shard {
    position: absolute;
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, transparent 48%, rgba(37, 99, 235, 0.3) 50%, transparent 52%);
    animation: crystalReflect 6s ease-in-out infinite;
}

.crystal-shard:nth-child(1) {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.crystal-shard:nth-child(2) {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
}

.crystal-shard:nth-child(3) {
    bottom: 30%;
    left: 20%;
    animation-delay: 4s;
}

.header-content {
    position: relative;
    z-index: 2;
    text-align: center;
    margin-bottom: 2rem;
}

.sapphire-title {
    margin: 0 0 1rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #2563eb, #8b5cf6, #06b6d4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.title-icon {
    font-size: 2rem;
    filter: drop-shadow(0 0 10px rgba(37, 99, 235, 0.5));
}

.sapphire-subtitle {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.1rem;
    margin: 0;
    font-weight: 300;
}

.analytics-controls {
    display: flex;
    justify-content: center;
}

.control-panel {
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 25px;
    padding: 0.25rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.control-btn {
    background: transparent;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.control-btn.active,
.control-btn:hover {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(139, 92, 246, 0.3));
    color: white;
}

.sapphire-dashboard {
    padding: 2rem;
}

.analytics-overview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.overview-sapphire {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.overview-sapphire:hover {
    border-color: rgba(37, 99, 235, 0.3);
    transform: translateY(-5px);
}

.overview-crystal {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    transform: rotate(45deg);
    position: relative;
    animation: crystalReflect 3s ease-in-out infinite;
}

.overview-crystal.blue {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
}

.overview-crystal.purple {
    background: linear-gradient(135deg, #8b5cf6, #a78bfa);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.overview-crystal.teal {
    background: linear-gradient(135deg, #06b6d4, #22d3ee);
    box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
}

.overview-data {
    flex: 1;
}

.data-value {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.25rem;
}

.data-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
}

.data-trend {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.8rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.data-trend.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.data-trend.stable {
    background: rgba(37, 99, 235, 0.2);
    color: #2563eb;
    border-color: rgba(37, 99, 235, 0.3);
}

.insights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
}

.insight-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.insight-card:hover {
    border-color: rgba(37, 99, 235, 0.3);
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.2);
}

.insight-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.insight-header h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
}

.insight-badge {
    padding: 0.4rem 0.8rem;
    border-radius: 10px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid;
}

.insight-badge.trending {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.insight-badge.stable {
    background: rgba(37, 99, 235, 0.2);
    color: #2563eb;
    border-color: rgba(37, 99, 235, 0.3);
}

.insight-badge.optimal {
    background: rgba(139, 92, 246, 0.2);
    color: #8b5cf6;
    border-color: rgba(139, 92, 246, 0.3);
}

.insight-visual {
    height: 100px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.trend-sparkline {
    width: 100%;
    height: 60px;
    background: linear-gradient(90deg, 
        rgba(37, 99, 235, 0.3), 
        rgba(139, 92, 246, 0.3)
    );
    clip-path: polygon(
        0% 100%,
        calc(100% / 6 * 1) calc(100% - var(--trend-data, 0) * 0.5%),
        calc(100% / 6 * 2) calc(100% - var(--trend-data, 0) * 0.5%),
        calc(100% / 6 * 3) calc(100% - var(--trend-data, 0) * 0.5%),
        calc(100% / 6 * 4) calc(100% - var(--trend-data, 0) * 0.5%),
        calc(100% / 6 * 5) calc(100% - var(--trend-data, 0) * 0.5%),
        100% calc(100% - var(--trend-data, 0) * 0.5%),
        100% 100%
    );
}

.risk-radar,
.performance-gauge {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.radar-fill,
.gauge-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: conic-gradient(#2563eb 0% var(--risk-level), transparent var(--risk-level) 100%);
    mask: radial-gradient(transparent 60%, black 61%);
}

.gauge-fill {
    background: conic-gradient(#8b5cf6 0% var(--performance), transparent var(--performance) 100%);
}

.radar-value,
.gauge-value {
    font-size: 0.9rem;
    font-weight: 700;
    color: #2563eb;
    z-index: 2;
}

.gauge-value {
    color: #8b5cf6;
}

.insight-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.stat-label {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
}

.stat-value {
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
}

.sapphire-action-btn {
    width: 100%;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(139, 92, 246, 0.3));
    border: 1px solid rgba(37, 99, 235, 0.5);
    color: #2563eb;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.sapphire-action-btn:hover {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(139, 92, 246, 0.4));
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
}

.btn-crystal {
    animation: crystalReflect 2s ease-in-out infinite;
}

.sapphire-table-section {
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.sapphire-table {
    width: 100%;
    border-collapse: collapse;
}

.sapphire-table th {
    background: linear-gradient(135deg, 
        rgba(37, 99, 235, 0.1), 
        rgba(139, 92, 246, 0.1)
    );
    padding: 1.5rem 2rem;
    text-align: left;
    font-weight: 600;
    color: #2563eb;
    border-bottom: 2px solid rgba(37, 99, 235, 0.3);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.sapphire-table td {
    padding: 1.5rem 2rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}

.sapphire-row:hover td {
    background: rgba(37, 99, 235, 0.05);
}

.metric-display {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.metric-crystal {
    width: 8px;
    height: 24px;
    border-radius: 2px;
    transform: skew(-20deg);
    animation: crystalReflect 3s ease-in-out infinite;
}

.metric-crystal.blue {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
}

.metric-crystal.purple {
    background: linear-gradient(135deg, #8b5cf6, #a78bfa);
}

.metric-crystal.teal {
    background: linear-gradient(135deg, #06b6d4, #22d3ee);
}

.metric-info .metric-name {
    font-weight: 600;
    color: white;
    margin-bottom: 0.25rem;
}

.metric-info .metric-category {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}

.current-reading {
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
}

.benchmark-value {
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
}

.trend-direction {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.9rem;
    backdrop-filter: blur(10px);
    border: 1px solid;
    width: fit-content;
}

.trend-direction.positive {
    background: rgba(34, 197, 94, 0.2);
    color: #4ade80;
    border-color: rgba(34, 197, 94, 0.3);
}

.trend-direction.stable {
    background: rgba(37, 99, 235, 0.2);
    color: #2563eb;
    border-color: rgba(37, 99, 235, 0.3);
}

.confidence-level {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    font-weight: 600;
}

.confidence-bars {
    display: flex;
    gap: 2px;
}

.confidence-bar {
    width: 4px;
    height: 12px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 1px;
}

.confidence-level.high .confidence-bar {
    background: #4ade80;
}

.confidence-level.medium .confidence-bar:nth-child(4):nth-child(5) {
    background: rgba(255, 255, 255, 0.3);
}

.sapphire-actions {
    display: flex;
    gap: 0.5rem;
}

.action-sapphire {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 0.8);
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.action-sapphire:hover {
    background: rgba(37, 99, 235, 0.2);
    border-color: rgba(37, 99, 235, 0.5);
    color: #2563eb;
    transform: scale(1.1);
}`,
    js: `// Sapphire analytics interactions
document.querySelectorAll('.control-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Add crystal reflection effect
        this.style.background = 'linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(139, 92, 246, 0.4))';
        setTimeout(() => {
            this.style.background = 'linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(139, 92, 246, 0.3))';
        }, 300);
    });
});

// Animate insight visuals
document.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const visual = this.querySelector('.insight-visual > div');
        if (visual) {
            visual.style.animation = 'crystalReflect 1s ease-in-out';
        }
    });
});

// Sapphire action buttons
document.querySelectorAll('.sapphire-action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const type = this.classList[1];
        let message = '';
        
        switch(type) {
            case 'analyze':
                message = 'Running deep analysis...';
                break;
            case 'assess':
                message = 'Assessing risk factors...';
                break;
            case 'optimize':
                message = 'Optimizing parameters...';
                break;
        }
        
        const originalHTML = this.innerHTML;
        this.innerHTML = '<span class="btn-crystal">💠</span> Processing...';
        this.disabled = true;
        
        // Create crystal particle effect
        for (let i = 0; i < 6; i++) {
            createCrystalParticle(this);
        }
        
        setTimeout(() => {
            this.innerHTML = originalHTML;
            this.disabled = false;
            
            // Add success state
            this.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(139, 92, 246, 0.3))';
            this.style.borderColor = 'rgba(34, 197, 94, 0.5)';
            
            setTimeout(() => {
                this.style.background = 'linear-gradient(135deg, rgba(37, 99, 235, 0.3), rgba(139, 92, 246, 0.3))';
                this.style.borderColor = 'rgba(37, 99, 235, 0.5)';
            }, 1000);
        }, 2000);
    });
});

function createCrystalParticle(element) {
    const crystal = document.createElement('div');
    crystal.style.cssText = \`
        position: absolute;
        width: 8px;
        height: 8px;
        background: linear-gradient(45deg, #2563eb, #8b5cf6);
        transform: rotate(45deg);
        pointer-events: none;
        animation: crystalParticle 1s ease-out forwards;
    \`;
    
    const rect = element.getBoundingClientRect();
    crystal.style.left = (Math.random() * rect.width) + 'px';
    crystal.style.top = (Math.random() * rect.height) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(crystal);
    
    setTimeout(() => crystal.remove(), 1000);
}

// Add CSS for crystal particle animation
const style = document.createElement('style');
style.textContent = \`
    @keyframes crystalParticle {
        0% {
            opacity: 1;
            transform: rotate(45deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: rotate(45deg) scale(0) translate(\${Math.random() * 100 - 50}px, \${Math.random() * 100 - 50}px);
        }
    }
\`;
document.head.appendChild(style);

// Add hover effects to metric crystals
document.querySelectorAll('.metric-crystal').forEach(crystal => {
    crystal.addEventListener('mouseenter', function() {
        this.style.animation = 'crystalReflect 0.6s ease-in-out';
    });
});`
},


    

};




// ====================================================================
// MAIN FUNCTIONALITY - TABLE TEMPLATES GALLERY
// Handles modal, code preview, copy functionality and filtering
// ====================================================================

// Initialize table templates functionality
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('codeModal');
    const codeBtns = document.querySelectorAll('.code-btn');
    const closeModal = document.querySelector('.close-modal');
    const codeTabs = document.querySelectorAll('.code-tab');
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const copyNotification = document.getElementById('copyNotification');

    // Ensure copy notification is hidden on page load
    copyNotification.style.display = 'none';

    // Open modal with template code
    codeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const templateId = btn.getAttribute('data-template');
            if (templateCodes[templateId]) {
                htmlCode.querySelector('code').textContent = templateCodes[templateId].html;
                cssCode.querySelector('code').textContent = templateCodes[templateId].css;
                jsCode.querySelector('code').textContent = templateCodes[templateId].js;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Hide notification when modal opens
                copyNotification.style.display = 'none';
                
                // Reset tabs to show HTML first
                codeTabs.forEach(tab => tab.classList.remove('active'));
                document.querySelector('.code-tab[data-tab="html"]').classList.add('active');
                document.querySelectorAll('.code-content pre').forEach(pre => {
                    pre.style.display = 'none';
                });
                document.getElementById('html-code').style.display = 'block';
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

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            copyNotification.style.display = 'none'; // Hide notification when modal closes
        }
    });

    // Switch between code tabs
    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            codeTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all code content
            document.querySelectorAll('.code-content pre').forEach(pre => {
                pre.style.display = 'none';
            });
            
            // Show selected code content
            const tabId = tab.getAttribute('data-tab');
            document.getElementById(`${tabId}-code`).style.display = 'block';
        });
    });

    // Copy code to clipboard
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('copy-btn')) {
            const targetId = e.target.getAttribute('data-target');
            const codeElement = document.getElementById(targetId).querySelector('code');
            const textToCopy = codeElement.textContent;
            
            // Use modern Clipboard API
            navigator.clipboard.writeText(textToCopy).then(() => {
                showCopyNotification();
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyNotification();
            });
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
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            const templateCards = document.querySelectorAll('.template-card');
            
            templateCards.forEach(card => {
                const categories = card.getAttribute('data-categories');
                if (category === 'all' || categories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Touch device improvements
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }

    // Load Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(faLink);
    }
});

// Handle resize events for better mobile experience
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any dynamic layouts if needed
        const templateCards = document.querySelectorAll('.template-card');
        templateCards.forEach(card => {
            card.style.display = 'block'; // Reset display on resize
        });
    }, 250);
});

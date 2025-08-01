// TeachTrack Application JavaScript

class TeachTrackApp {
    constructor() {
        // Application data
        this.students = [
            {
                id: 1,
                name: "Aarav Sharma",
                class: "Grade 10A",
                rollNo: "10A-001",
                email: "aarav.parent@email.com",
                phone: "+91-9876543210",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 2,
                name: "Priya Patel",
                class: "Grade 10A",
                rollNo: "10A-002",
                email: "priya.parent@email.com",
                phone: "+91-9876543211",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1494790108755-2616b9f82ad5?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 3,
                name: "Arjun Kumar",
                class: "Grade 10A",
                rollNo: "10A-003",
                email: "arjun.parent@email.com",
                phone: "+91-9876543212",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 4,
                name: "Ananya Singh",
                class: "Grade 10A",
                rollNo: "10A-004",
                email: "ananya.parent@email.com",
                phone: "+91-9876543213",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 5,
                name: "Rohan Gupta",
                class: "Grade 10A",
                rollNo: "10A-005",
                email: "rohan.parent@email.com",
                phone: "+91-9876543214",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 6,
                name: "Kavya Reddy",
                class: "Grade 10A",
                rollNo: "10A-006",
                email: "kavya.parent@email.com",
                phone: "+91-9876543215",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 7,
                name: "Vikram Jain",
                class: "Grade 10A",
                rollNo: "10A-007",
                email: "vikram.parent@email.com",
                phone: "+91-9876543216",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 8,
                name: "Meera Shah",
                class: "Grade 10A",
                rollNo: "10A-008",
                email: "meera.parent@email.com",
                phone: "+91-9876543217",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 9,
                name: "Ishaan Agarwal",
                class: "Grade 9B",
                rollNo: "9B-001",
                email: "ishaan.parent@email.com",
                phone: "+91-9876543218",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 10,
                name: "Sia Malhotra",
                class: "Grade 9B",
                rollNo: "9B-002",
                email: "sia.parent@email.com",
                phone: "+91-9876543219",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 11,
                name: "Dev Chopra",
                class: "Grade 9B",
                rollNo: "9B-003",
                email: "dev.parent@email.com",
                phone: "+91-9876543220",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 12,
                name: "Tara Bansal",
                class: "Grade 9B",
                rollNo: "9B-004",
                email: "tara.parent@email.com",
                phone: "+91-9876543221",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 13,
                name: "Neil Kapoor",
                class: "Grade 9B",
                rollNo: "9B-005",
                email: "neil.parent@email.com",
                phone: "+91-9876543222",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 14,
                name: "Riya Sood",
                class: "Grade 9B",
                rollNo: "9B-006",
                email: "riya.parent@email.com",
                phone: "+91-9876543223",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 15,
                name: "Karan Bhatia",
                class: "Grade 8C",
                rollNo: "8C-001",
                email: "karan.parent@email.com",
                phone: "+91-9876543224",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 16,
                name: "Aliya Khan",
                class: "Grade 8C",
                rollNo: "8C-002",
                email: "aliya.parent@email.com",
                phone: "+91-9876543225",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 17,
                name: "Ayush Verma",
                class: "Grade 8C",
                rollNo: "8C-003",
                email: "ayush.parent@email.com",
                phone: "+91-9876543226",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 18,
                name: "Pooja Nair",
                class: "Grade 8C",
                rollNo: "8C-004",
                email: "pooja.parent@email.com",
                phone: "+91-9876543227",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 19,
                name: "Aditi Joshi",
                class: "Grade 8C",
                rollNo: "8C-005",
                email: "aditi.parent@email.com",
                phone: "+91-9876543228",
                feeStatus: "paid",
                photo: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 20,
                name: "Siddharth Rao",
                class: "Grade 8C",
                rollNo: "8C-006",
                email: "siddharth.parent@email.com",
                phone: "+91-9876543229",
                feeStatus: "pending",
                photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&h=150&fit=crop&crop=face"
            }
        ];

        this.classes = [
            {
                id: "10A",
                name: "Grade 10A",
                subject: "Mathematics",
                schedule: "Mon, Wed, Fri - 10:00 AM",
                duration: "1 hour",
                totalStudents: 8
            },
            {
                id: "9B",
                name: "Grade 9B",
                subject: "Science",
                schedule: "Tue, Thu - 2:00 PM",
                duration: "1.5 hours",
                totalStudents: 6
            },
            {
                id: "8C",
                name: "Grade 8C",
                subject: "English",
                schedule: "Mon, Fri - 11:30 AM",
                duration: "1 hour",
                totalStudents: 6
            }
        ];

        this.attendanceData = {};
        this.currentAttendance = {};
        this.currentSection = 'dashboard';
        this.isEditing = false;
        this.editingStudentId = null;

        this.init();
    }

    init() {
        this.initializeAttendanceData();
        this.setTodayDate();
        this.populateDropdowns();
        this.setupEventListeners();
        this.showSection('dashboard');
        this.renderDashboard();
        setTimeout(() => {
            this.setupCharts();
        }, 100);
    }

    setupEventListeners() {
        // Navigation - Fixed with individual event listeners
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = link.getAttribute('data-section');
                if (section) {
                    this.showSection(section);
                }
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobileMenuToggle');
        if (mobileToggle) {
            mobileToggle.addEventListener('click', () => {
                document.getElementById('sidebar').classList.toggle('open');
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Quick attendance button
        const quickAttendance = document.getElementById('quickAttendance');
        if (quickAttendance) {
            quickAttendance.addEventListener('click', () => {
                this.showSection('attendance');
            });
        }

        // Attendance controls
        const classSelect = document.getElementById('classSelect');
        if (classSelect) {
            classSelect.addEventListener('change', (e) => {
                this.renderAttendanceGrid(e.target.value);
            });
        }

        const bulkPresent = document.getElementById('bulkPresent');
        if (bulkPresent) {
            bulkPresent.addEventListener('click', () => {
                this.markBulkAttendance('present');
            });
        }

        const bulkAbsent = document.getElementById('bulkAbsent');
        if (bulkAbsent) {
            bulkAbsent.addEventListener('click', () => {
                this.markBulkAttendance('absent');
            });
        }

        const saveAttendance = document.getElementById('saveAttendance');
        if (saveAttendance) {
            saveAttendance.addEventListener('click', () => {
                this.saveAttendance();
            });
        }

        const resetAttendance = document.getElementById('resetAttendance');
        if (resetAttendance) {
            resetAttendance.addEventListener('click', () => {
                this.resetAttendance();
            });
        }

        // Student management
        const addStudent = document.getElementById('addStudent');
        if (addStudent) {
            addStudent.addEventListener('click', () => {
                this.openStudentModal();
            });
        }

        const closeModal = document.getElementById('closeModal');
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                this.closeModal();
            });
        }

        const cancelModal = document.getElementById('cancelModal');
        if (cancelModal) {
            cancelModal.addEventListener('click', () => {
                this.closeModal();
            });
        }

        const saveStudent = document.getElementById('saveStudent');
        if (saveStudent) {
            saveStudent.addEventListener('click', () => {
                this.saveStudent();
            });
        }

        // Search and filters
        const studentSearch = document.getElementById('studentSearch');
        if (studentSearch) {
            studentSearch.addEventListener('input', (e) => {
                this.filterStudents(e.target.value);
            });
        }

        const classFilter = document.getElementById('classFilter');
        if (classFilter) {
            classFilter.addEventListener('change', (e) => {
                this.filterStudentsByClass(e.target.value);
            });
        }

        // Report generation
        const generateReport = document.getElementById('generateReport');
        if (generateReport) {
            generateReport.addEventListener('click', () => {
                this.generateReport();
            });
        }

        const shareReport = document.getElementById('shareReport');
        if (shareReport) {
            shareReport.addEventListener('click', () => {
                this.shareReport();
            });
        }

        // Fee filters
        const feeClassFilter = document.getElementById('feeClassFilter');
        if (feeClassFilter) {
            feeClassFilter.addEventListener('change', (e) => {
                this.filterFeesByClass(e.target.value);
            });
        }

        const feeStatusFilter = document.getElementById('feeStatusFilter');
        if (feeStatusFilter) {
            feeStatusFilter.addEventListener('change', (e) => {
                this.filterFeesByStatus(e.target.value);
            });
        }

        // Toast close
        const toastClose = document.getElementById('toastClose');
        if (toastClose) {
            toastClose.addEventListener('click', () => {
                this.hideToast();
            });
        }

        // Modal backdrop click
        const studentModal = document.getElementById('studentModal');
        if (studentModal) {
            studentModal.addEventListener('click', (e) => {
                if (e.target.id === 'studentModal') {
                    this.closeModal();
                }
            });
        }
    }

    initializeAttendanceData() {
        // Generate sample attendance data for the past 30 days
        const today = new Date();
        for (let i = 30; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            
            this.attendanceData[dateStr] = {};
            
            this.students.forEach(student => {
                // Random attendance with 85% probability of being present
                const rand = Math.random();
                let status = 'present';
                if (rand > 0.85) status = 'absent';
                else if (rand > 0.8) status = 'late';
                else if (rand > 0.75) status = 'excused';
                
                this.attendanceData[dateStr][student.id] = status;
            });
        }
    }

    setTodayDate() {
        const today = new Date().toISOString().split('T')[0];
        const attendanceDate = document.getElementById('attendanceDate');
        const reportStartDate = document.getElementById('reportStartDate');
        const reportEndDate = document.getElementById('reportEndDate');
        
        if (attendanceDate) attendanceDate.value = today;
        if (reportStartDate) reportStartDate.value = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        if (reportEndDate) reportEndDate.value = today;
    }

    populateDropdowns() {
        const classOptions = this.classes.map(cls => 
            `<option value="${cls.name}">${cls.name}</option>`
        ).join('');

        const dropdowns = [
            'classSelect', 'classFilter', 'reportClass', 'studentClass', 'feeClassFilter'
        ];

        dropdowns.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const defaultOption = id === 'classSelect' || id === 'reportClass' || id === 'studentClass' 
                    ? '<option value="">Select Class</option>' 
                    : '<option value="">All Classes</option>';
                element.innerHTML = defaultOption + classOptions;
            }
        });
    }

    showSection(sectionName) {
        console.log('Switching to section:', sectionName); // Debug log
        
        // Update navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Update content - Hide all sections first
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Show the active section
        const activeSection = document.getElementById(sectionName);
        if (activeSection) {
            activeSection.classList.add('active');
            activeSection.style.display = 'block';
        }

        // Update page title
        const titles = {
            dashboard: 'Dashboard',
            attendance: 'Take Attendance',
            students: 'Students',
            reports: 'Reports',
            schedule: 'Schedule',
            fees: 'Fee Management'
        };
        const pageTitle = document.getElementById('pageTitle');
        if (pageTitle) {
            pageTitle.textContent = titles[sectionName] || sectionName;
        }

        this.currentSection = sectionName;

        // Render section content
        setTimeout(() => {
            switch (sectionName) {
                case 'dashboard':
                    this.renderDashboard();
                    break;
                case 'attendance':
                    this.renderAttendanceSection();
                    break;
                case 'students':
                    this.renderStudentsSection();
                    break;
                case 'reports':
                    this.renderReportsSection();
                    break;
                case 'schedule':
                    this.renderScheduleSection();
                    break;
                case 'fees':
                    this.renderFeesSection();
                    break;
            }
        }, 50);

        // Close mobile menu
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.remove('open');
        }
    }

    renderDashboard() {
        this.updateDashboardStats();
        this.renderRecentActivity();
        setTimeout(() => {
            this.setupCharts();
        }, 100);
    }

    updateDashboardStats() {
        const totalStudents = this.students.length;
        const feePending = this.students.filter(s => s.feeStatus === 'pending').length;
        
        // Calculate average attendance for the last 7 days
        const recentDates = this.getRecentDates(7);
        let totalAttendance = 0;
        let totalClasses = 0;
        
        recentDates.forEach(date => {
            if (this.attendanceData[date]) {
                const presentCount = Object.values(this.attendanceData[date]).filter(status => status === 'present').length;
                totalAttendance += presentCount;
                totalClasses += Object.keys(this.attendanceData[date]).length;
            }
        });
        
        const avgAttendance = totalClasses > 0 ? ((totalAttendance / totalClasses) * 100).toFixed(1) : 0;
        
        const totalStudentsEl = document.getElementById('totalStudents');
        const avgAttendanceEl = document.getElementById('avgAttendance');
        const totalClassesEl = document.getElementById('totalClasses');
        const feePendingEl = document.getElementById('feePending');
        
        if (totalStudentsEl) totalStudentsEl.textContent = totalStudents;
        if (avgAttendanceEl) avgAttendanceEl.textContent = `${avgAttendance}%`;
        if (totalClassesEl) totalClassesEl.textContent = recentDates.length * this.classes.length;
        if (feePendingEl) feePendingEl.textContent = feePending;
    }

    renderRecentActivity() {
        const recentActivity = document.getElementById('recentActivity');
        if (!recentActivity) return;
        
        const recentDates = this.getRecentDates(5);
        
        let activities = [];
        
        recentDates.forEach(date => {
            if (this.attendanceData[date]) {
                const presentCount = Object.values(this.attendanceData[date]).filter(status => status === 'present').length;
                const totalCount = Object.keys(this.attendanceData[date]).length;
                const percentage = ((presentCount / totalCount) * 100).toFixed(1);
                
                activities.push({
                    date,
                    icon: 'fas fa-clipboard-check',
                    iconBg: 'var(--color-success)',
                    title: `Attendance marked for ${this.formatDate(date)}`,
                    description: `${presentCount}/${totalCount} students present (${percentage}%)`
                });
            }
        });
        
        recentActivity.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon" style="background: ${activity.iconBg}">
                    <i class="${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <h4>${activity.title}</h4>
                    <p>${activity.description}</p>
                </div>
            </div>
        `).join('');
    }

    setupCharts() {
        this.setupAttendanceChart();
        this.setupClassChart();
    }

    setupAttendanceChart() {
        const ctx = document.getElementById('attendanceChart');
        if (!ctx) return;

        const recentDates = this.getRecentDates(7);
        const labels = recentDates.map(date => this.formatDate(date, 'short'));
        const data = recentDates.map(date => {
            if (this.attendanceData[date]) {
                const presentCount = Object.values(this.attendanceData[date]).filter(status => status === 'present').length;
                const totalCount = Object.keys(this.attendanceData[date]).length;
                return totalCount > 0 ? ((presentCount / totalCount) * 100).toFixed(1) : 0;
            }
            return 0;
        });

        if (this.attendanceChart) {
            this.attendanceChart.destroy();
        }

        this.attendanceChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Attendance %',
                    data: data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    setupClassChart() {
        const ctx = document.getElementById('classChart');
        if (!ctx) return;

        const classData = this.classes.map(cls => ({
            name: cls.name,
            count: this.students.filter(s => s.class === cls.name).length
        }));

        if (this.classChart) {
            this.classChart.destroy();
        }

        this.classChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: classData.map(d => d.name),
                datasets: [{
                    data: classData.map(d => d.count),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    renderAttendanceSection() {
        // Auto-select first class if none selected
        const classSelect = document.getElementById('classSelect');
        if (classSelect && !classSelect.value && this.classes.length > 0) {
            classSelect.value = this.classes[0].name;
        }
        
        const selectedClass = classSelect ? classSelect.value : this.classes[0]?.name;
        if (selectedClass) {
            this.renderAttendanceGrid(selectedClass);
        }
    }

    renderAttendanceGrid(className) {
        const grid = document.getElementById('attendanceGrid');
        if (!grid) return;
        
        const students = this.students.filter(s => s.class === className);
        const attendanceDate = document.getElementById('attendanceDate');
        const selectedDate = attendanceDate ? attendanceDate.value : new Date().toISOString().split('T')[0];
        
        if (students.length === 0) {
            grid.innerHTML = '<p>No students found for the selected class.</p>';
            return;
        }

        // Initialize current attendance if not exists
        if (!this.currentAttendance[selectedDate]) {
            this.currentAttendance[selectedDate] = {};
        }

        grid.innerHTML = students.map(student => {
            const currentStatus = this.currentAttendance[selectedDate][student.id] || 'present';
            
            return `
                <div class="student-attendance-card ${currentStatus}" data-student-id="${student.id}">
                    <div class="student-info">
                        <img src="${student.photo}" alt="${student.name}" class="student-avatar">
                        <div class="student-details">
                            <h4>${student.name}</h4>
                            <p>${student.rollNo}</p>
                        </div>
                    </div>
                    <div class="attendance-status">
                        <button class="status-btn present ${currentStatus === 'present' ? 'active' : ''}" data-status="present">Present</button>
                        <button class="status-btn absent ${currentStatus === 'absent' ? 'active' : ''}" data-status="absent">Absent</button>
                        <button class="status-btn late ${currentStatus === 'late' ? 'active' : ''}" data-status="late">Late</button>
                        <button class="status-btn excused ${currentStatus === 'excused' ? 'active' : ''}" data-status="excused">Excused</button>
                    </div>
                </div>
            `;
        }).join('');

        // Add event listeners for status buttons
        grid.querySelectorAll('.status-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const card = e.target.closest('.student-attendance-card');
                const studentId = parseInt(card.dataset.studentId);
                const status = e.target.dataset.status;
                
                this.updateAttendanceStatus(studentId, status, selectedDate);
            });
        });
    }

    updateAttendanceStatus(studentId, status, date) {
        if (!this.currentAttendance[date]) {
            this.currentAttendance[date] = {};
        }
        
        this.currentAttendance[date][studentId] = status;
        
        // Update UI
        const card = document.querySelector(`[data-student-id="${studentId}"]`);
        if (card) {
            // Remove all status classes
            card.classList.remove('present', 'absent', 'late', 'excused');
            card.classList.add(status);
            
            // Update button states
            card.querySelectorAll('.status-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            card.querySelector(`[data-status="${status}"]`).classList.add('active');
        }
    }

    markBulkAttendance(status) {
        const classSelect = document.getElementById('classSelect');
        const attendanceDate = document.getElementById('attendanceDate');
        const selectedClass = classSelect ? classSelect.value : '';
        const selectedDate = attendanceDate ? attendanceDate.value : new Date().toISOString().split('T')[0];
        
        if (!selectedClass) {
            this.showToast('Please select a class first', 'warning');
            return;
        }
        
        const students = this.students.filter(s => s.class === selectedClass);
        students.forEach(student => {
            this.updateAttendanceStatus(student.id, status, selectedDate);
        });
        
        this.showToast(`Marked all students as ${status}`, 'success');
    }

    saveAttendance() {
        const attendanceDate = document.getElementById('attendanceDate');
        const classSelect = document.getElementById('classSelect');
        const selectedDate = attendanceDate ? attendanceDate.value : new Date().toISOString().split('T')[0];
        const selectedClass = classSelect ? classSelect.value : '';
        
        if (!selectedClass) {
            this.showToast('Please select a class first', 'warning');
            return;
        }
        
        if (!this.currentAttendance[selectedDate]) {
            this.showToast('No attendance data to save', 'warning');
            return;
        }
        
        // Save to main attendance data
        this.attendanceData[selectedDate] = { ...this.attendanceData[selectedDate], ...this.currentAttendance[selectedDate] };
        
        this.showToast('Attendance saved successfully!', 'success');
        
        // Update dashboard if it's the current section
        if (this.currentSection === 'dashboard') {
            this.renderDashboard();
        }
    }

    resetAttendance() {
        const attendanceDate = document.getElementById('attendanceDate');
        const classSelect = document.getElementById('classSelect');
        const selectedDate = attendanceDate ? attendanceDate.value : new Date().toISOString().split('T')[0];
        const selectedClass = classSelect ? classSelect.value : '';
        
        if (!selectedClass) return;
        
        // Reset current attendance
        if (this.currentAttendance[selectedDate]) {
            const students = this.students.filter(s => s.class === selectedClass);
            students.forEach(student => {
                this.currentAttendance[selectedDate][student.id] = 'present';
            });
        }
        
        this.renderAttendanceGrid(selectedClass);
        this.showToast('Attendance reset to all present', 'info');
    }

    renderStudentsSection() {
        this.renderStudentsGrid();
    }

    renderStudentsGrid(filteredStudents = null) {
        const grid = document.getElementById('studentsGrid');
        if (!grid) return;
        
        const students = filteredStudents || this.students;
        
        grid.innerHTML = students.map(student => `
            <div class="student-card">
                <div class="student-header">
                    <img src="${student.photo}" alt="${student.name}" class="student-photo">
                    <div class="student-info-detail">
                        <h3>${student.name}</h3>
                        <p>${student.class} • ${student.rollNo}</p>
                    </div>
                </div>
                <div class="student-meta">
                    <div class="student-meta-item">
                        <strong>Email</strong>
                        ${student.email}
                    </div>
                    <div class="student-meta-item">
                        <strong>Phone</strong>
                        ${student.phone}
                    </div>
                    <div class="student-meta-item">
                        <strong>Fee Status</strong>
                        <span class="status status--${student.feeStatus}">${student.feeStatus}</span>
                    </div>
                    <div class="student-meta-item">
                        <strong>Attendance</strong>
                        ${this.getStudentAttendanceRate(student.id)}%
                    </div>
                </div>
                <div class="student-actions">
                    <button class="btn btn--sm btn--outline" onclick="app.editStudent(${student.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn--sm btn--secondary" onclick="app.viewStudentReport(${student.id})">
                        <i class="fas fa-chart-line"></i> Report
                    </button>
                </div>
            </div>
        `).join('');
    }

    getStudentAttendanceRate(studentId) {
        const recentDates = this.getRecentDates(30);
        let presentDays = 0;
        let totalDays = 0;
        
        recentDates.forEach(date => {
            if (this.attendanceData[date] && this.attendanceData[date][studentId]) {
                totalDays++;
                if (this.attendanceData[date][studentId] === 'present') {
                    presentDays++;
                }
            }
        });
        
        return totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    }

    filterStudents(searchTerm) {
        const filtered = this.students.filter(student => 
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.class.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.renderStudentsGrid(filtered);
    }

    filterStudentsByClass(className) {
        if (!className) {
            this.renderStudentsGrid();
            return;
        }
        
        const filtered = this.students.filter(student => student.class === className);
        this.renderStudentsGrid(filtered);
    }

    openStudentModal(studentId = null) {
        const modal = document.getElementById('studentModal');
        const form = document.getElementById('studentForm');
        
        if (studentId) {
            // Edit mode
            this.isEditing = true;
            this.editingStudentId = studentId;
            const student = this.students.find(s => s.id === studentId);
            
            document.getElementById('modalTitle').textContent = 'Edit Student';
            document.getElementById('studentName').value = student.name;
            document.getElementById('studentClass').value = student.class;
            document.getElementById('studentRoll').value = student.rollNo;
            document.getElementById('studentEmail').value = student.email;
            document.getElementById('studentPhone').value = student.phone;
            document.getElementById('studentFeeStatus').value = student.feeStatus;
        } else {
            // Add mode
            this.isEditing = false;
            this.editingStudentId = null;
            document.getElementById('modalTitle').textContent = 'Add Student';
            form.reset();
        }
        
        modal.classList.remove('hidden');
    }

    closeModal() {
        const modal = document.getElementById('studentModal');
        const form = document.getElementById('studentForm');
        
        modal.classList.add('hidden');
        form.reset();
        this.isEditing = false;
        this.editingStudentId = null;
    }

    editStudent(studentId) {
        this.openStudentModal(studentId);
    }

    saveStudent() {
        const form = document.getElementById('studentForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        const studentData = {
            name: document.getElementById('studentName').value,
            class: document.getElementById('studentClass').value,
            rollNo: document.getElementById('studentRoll').value,
            email: document.getElementById('studentEmail').value,
            phone: document.getElementById('studentPhone').value,
            feeStatus: document.getElementById('studentFeeStatus').value
        };
        
        if (this.isEditing) {
            // Update existing student
            const index = this.students.findIndex(s => s.id === this.editingStudentId);
            if (index !== -1) {
                this.students[index] = { ...this.students[index], ...studentData };
                this.showToast('Student updated successfully!', 'success');
            }
        } else {
            // Add new student
            const newStudent = {
                id: Date.now(),
                ...studentData,
                photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            };
            this.students.push(newStudent);
            this.showToast('Student added successfully!', 'success');
        }
        
        this.closeModal();
        this.renderStudentsGrid();
        this.populateDropdowns();
        
        if (this.currentSection === 'dashboard') {
            this.renderDashboard();
        }
    }

    renderReportsSection() {
        // Initialize with empty report
        this.updateReportPreview();
    }

    generateReport() {
        const reportClass = document.getElementById('reportClass');
        const reportStartDate = document.getElementById('reportStartDate');
        const reportEndDate = document.getElementById('reportEndDate');
        
        const className = reportClass ? reportClass.value : '';
        const startDate = reportStartDate ? reportStartDate.value : '';
        const endDate = reportEndDate ? reportEndDate.value : '';
        
        if (!className || !startDate || !endDate) {
            this.showToast('Please fill all report parameters', 'warning');
            return;
        }
        
        this.updateReportPreview(className, startDate, endDate);
        this.showToast('Report generated successfully!', 'success');
    }

    updateReportPreview(className = null, startDate = null, endDate = null) {
        const reportClassName = document.getElementById('reportClassName');
        const reportPeriod = document.getElementById('reportPeriod');
        const reportDate = document.getElementById('reportDate');
        const reportTable = document.getElementById('reportTable');
        
        if (!className || !startDate || !endDate) {
            if (reportClassName) reportClassName.textContent = '-';
            if (reportPeriod) reportPeriod.textContent = '-';
            if (reportDate) reportDate.textContent = '-';
            if (reportTable) reportTable.innerHTML = '<p>Please generate a report to view data.</p>';
            return;
        }
        
        const classStudents = this.students.filter(s => s.class === className);
        const dateRange = this.getDateRange(startDate, endDate);
        
        if (reportClassName) reportClassName.textContent = className;
        if (reportPeriod) reportPeriod.textContent = `${this.formatDate(startDate)} - ${this.formatDate(endDate)}`;
        if (reportDate) reportDate.textContent = this.formatDate(new Date().toISOString().split('T')[0]);
        
        // Generate report table
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll No</th>
                        <th>Present</th>
                        <th>Absent</th>
                        <th>Late</th>
                        <th>Excused</th>
                        <th>Total Classes</th>
                        <th>Attendance %</th>
                        <th>Fee Status</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        classStudents.forEach(student => {
            let present = 0, absent = 0, late = 0, excused = 0, total = 0;
            
            dateRange.forEach(date => {
                if (this.attendanceData[date] && this.attendanceData[date][student.id]) {
                    total++;
                    const status = this.attendanceData[date][student.id];
                    switch (status) {
                        case 'present': present++; break;
                        case 'absent': absent++; break;
                        case 'late': late++; break;
                        case 'excused': excused++; break;
                    }
                }
            });
            
            const attendanceRate = total > 0 ? Math.round((present / total) * 100) : 0;
            
            tableHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.rollNo}</td>
                    <td>${present}</td>
                    <td>${absent}</td>
                    <td>${late}</td>
                    <td>${excused}</td>
                    <td>${total}</td>
                    <td>${attendanceRate}%</td>
                    <td><span class="status status--${student.feeStatus}">${student.feeStatus}</span></td>
                </tr>
            `;
        });
        
        tableHTML += '</tbody></table>';
        if (reportTable) reportTable.innerHTML = tableHTML;
    }

    shareReport() {
        const reportClass = document.getElementById('reportClass');
        const className = reportClass ? reportClass.value : '';
        
        if (!className) {
            this.showToast('Please generate a report first', 'warning');
            return;
        }
        
        // Simulate sharing functionality
        const reportText = `Attendance Report for ${className} - Generated on ${this.formatDate(new Date().toISOString().split('T')[0])}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Attendance Report',
                text: reportText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(reportText).then(() => {
                this.showToast('Report details copied to clipboard!', 'success');
            });
        }
    }

    renderScheduleSection() {
        const grid = document.getElementById('scheduleGrid');
        if (!grid) return;
        
        grid.innerHTML = this.classes.map(cls => `
            <div class="schedule-card">
                <div class="schedule-header-info">
                    <div>
                        <h3 class="schedule-title">${cls.name}</h3>
                        <p class="schedule-subject">${cls.subject}</p>
                    </div>
                    <span class="status status--success">Active</span>
                </div>
                <div class="schedule-details">
                    <div class="schedule-detail">
                        <i class="fas fa-clock"></i>
                        <span>${cls.schedule}</span>
                    </div>
                    <div class="schedule-detail">
                        <i class="fas fa-hourglass-half"></i>
                        <span>Duration: ${cls.duration}</span>
                    </div>
                    <div class="schedule-detail">
                        <i class="fas fa-users"></i>
                        <span>${cls.totalStudents} students</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderFeesSection() {
        this.renderFeesGrid();
    }

    renderFeesGrid(filteredStudents = null) {
        const grid = document.getElementById('feesGrid');
        if (!grid) return;
        
        const students = filteredStudents || this.students;
        
        grid.innerHTML = students.map(student => `
            <div class="fee-card ${student.feeStatus}">
                <div class="student-header">
                    <img src="${student.photo}" alt="${student.name}" class="student-photo">
                    <div class="student-info-detail">
                        <h3>${student.name}</h3>
                        <p>${student.class} • ${student.rollNo}</p>
                    </div>
                </div>
                <div class="student-meta">
                    <div class="student-meta-item">
                        <strong>Contact</strong>
                        ${student.phone}
                    </div>
                    <div class="student-meta-item">
                        <strong>Email</strong>
                        ${student.email}
                    </div>
                    <div class="student-meta-item">
                        <strong>Fee Status</strong>
                        <span class="fee-status ${student.feeStatus}">${student.feeStatus}</span>
                    </div>
                    <div class="student-meta-item">
                        <strong>Attendance</strong>
                        ${this.getStudentAttendanceRate(student.id)}%
                    </div>
                </div>
                <div class="student-actions">
                    <button class="btn btn--sm ${student.feeStatus === 'pending' ? 'btn--primary' : 'btn--outline'}" 
                            onclick="app.toggleFeeStatus(${student.id})">
                        <i class="fas fa-${student.feeStatus === 'pending' ? 'check' : 'times'}"></i>
                        ${student.feeStatus === 'pending' ? 'Mark Paid' : 'Mark Pending'}
                    </button>
                    <button class="btn btn--sm btn--secondary" onclick="app.sendFeeReminder(${student.id})">
                        <i class="fas fa-envelope"></i> Send Reminder
                    </button>
                </div>
            </div>
        `).join('');
    }

    filterFeesByClass(className) {
        if (!className) {
            this.renderFeesGrid();
            return;
        }
        
        const filtered = this.students.filter(student => student.class === className);
        this.renderFeesGrid(filtered);
    }

    filterFeesByStatus(status) {
        if (!status) {
            this.renderFeesGrid();
            return;
        }
        
        const filtered = this.students.filter(student => student.feeStatus === status);
        this.renderFeesGrid(filtered);
    }

    toggleFeeStatus(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            student.feeStatus = student.feeStatus === 'paid' ? 'pending' : 'paid';
            this.renderFeesGrid();
            this.showToast(`Fee status updated for ${student.name}`, 'success');
            
            if (this.currentSection === 'dashboard') {
                this.renderDashboard();
            }
        }
    }

    sendFeeReminder(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            // Simulate sending reminder
            this.showToast(`Fee reminder sent to ${student.name}'s parents`, 'success');
        }
    }

    viewStudentReport(studentId) {
        const student = this.students.find(s => s.id === studentId);
        if (student) {
            // Set report parameters and switch to reports section
            const reportClass = document.getElementById('reportClass');
            const reportStartDate = document.getElementById('reportStartDate');
            const reportEndDate = document.getElementById('reportEndDate');
            
            if (reportClass) reportClass.value = student.class;
            if (reportStartDate) reportStartDate.value = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
            if (reportEndDate) reportEndDate.value = new Date().toISOString().split('T')[0];
            
            this.showSection('reports');
            setTimeout(() => {
                this.generateReport();
            }, 100);
        }
    }

    toggleTheme() {
        const body = document.body;
        const themeIcon = document.querySelector('#themeToggle i');
        
        if (body.getAttribute('data-color-scheme') === 'dark') {
            body.setAttribute('data-color-scheme', 'light');
            if (themeIcon) themeIcon.className = 'fas fa-moon';
        } else {
            body.setAttribute('data-color-scheme', 'dark');
            if (themeIcon) themeIcon.className = 'fas fa-sun';
        }
    }

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        if (toastMessage) toastMessage.textContent = message;
        if (toast) {
            toast.className = `toast ${type}`;
            toast.classList.remove('hidden');
        }
        
        setTimeout(() => {
            this.hideToast();
        }, 3000);
    }

    hideToast() {
        const toast = document.getElementById('toast');
        if (toast) toast.classList.add('hidden');
    }

    // Utility functions
    getRecentDates(days) {
        const dates = [];
        const today = new Date();
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);
            dates.push(date.toISOString().split('T')[0]);
        }
        
        return dates;
    }

    getDateRange(startDate, endDate) {
        const dates = [];
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        while (start <= end) {
            dates.push(start.toISOString().split('T')[0]);
            start.setDate(start.getDate() + 1);
        }
        
        return dates;
    }

    formatDate(dateStr, format = 'long') {
        const date = new Date(dateStr);
        
        if (format === 'short') {
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }
        
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.app = new TeachTrackApp();
});
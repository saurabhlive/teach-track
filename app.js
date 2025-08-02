// Application Data - In Memory Storage
let appData = {
    isLoggedIn: false,
    students: [
        {
            id: 1,
            name: "Devansh",
            phone: "9876543210",
            individualClassType: "Guitar Beginner",
            archived: false,
            classesCompleted: 6
        },
        {
            id: 2,
            name: "Saanvi",
            phone: "9876543211", 
            individualClassType: "Piano Intermediate",
            archived: false,
            classesCompleted: 8
        }
    ],
    classes: [
        {
            id: 1,
            name: "Guitar Beginner",
            description: "Individual guitar lessons for beginners"
        },
        {
            id: 2,
            name: "Piano Intermediate", 
            description: "Individual intermediate piano lessons"
        }
    ],
    attendance: {
        1: {
            2025: {
                7: { // August (0-indexed)
                    1: "present", 2: "absent", 3: "present", 5: "present", 
                    8: "present", 10: "absent", 12: "present", 15: "present",
                    17: "present", 19: "absent", 22: "present", 24: "present",
                    26: "present", 29: "present"
                }
            }
        },
        2: {
            2025: {
                7: { // August (0-indexed)
                    1: "present", 3: "present", 5: "present", 7: "present",
                    10: "present", 12: "present", 14: "present", 17: "present",
                    19: "present", 21: "present", 24: "present", 26: "present",
                    28: "present", 31: "present"
                }
            }
        }
    },
    currentSection: 'dashboard',
    editingStudent: null,
    editingClass: null
};

// Login credentials
const LOGIN_CREDENTIALS = {
    username: 'saurabhmusic',
    password: 'music1234!@#'
};

// Global variables for chart
let progressChart = null;

// Initialize Application - FIXED
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeApp();
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Ensure login screen is visible and main app is hidden
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) {
        loginScreen.style.display = 'flex';
        loginScreen.classList.remove('hidden');
    }
    if (mainApp) {
        mainApp.style.display = 'none';
        mainApp.classList.add('hidden');
    }
    
    setupEventListeners();
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Login form - CRITICAL FIX
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            console.log('Login form submitted');
            e.preventDefault();
            
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            const loginError = document.getElementById('loginError');
            
            console.log('Login attempt - Username:', username, 'Password length:', password.length);
            
            if (username === LOGIN_CREDENTIALS.username && password === LOGIN_CREDENTIALS.password) {
                console.log('Login successful');
                appData.isLoggedIn = true;
                
                // Hide login screen and show main app
                const loginScreen = document.getElementById('loginScreen');
                const mainApp = document.getElementById('mainApp');
                
                if (loginScreen) {
                    loginScreen.style.display = 'none';
                    loginScreen.classList.add('hidden');
                }
                if (mainApp) {
                    mainApp.style.display = 'flex';
                    mainApp.classList.remove('hidden');
                }
                
                if (loginError) {
                    loginError.classList.add('hidden');
                }
                
                // Initialize the main app
                initializeMainApp();
                
            } else {
                console.log('Login failed - Invalid credentials');
                if (loginError) {
                    loginError.textContent = 'Invalid username or password';
                    loginError.classList.remove('hidden');
                }
            }
        });
        console.log('Login form listener added successfully');
    } else {
        console.error('Login form not found!');
    }
    
    // Setup other event listeners after successful login
    setupMainAppListeners();
}

function initializeMainApp() {
    console.log('Initializing main app after login');
    // Populate dropdowns first
    populateDropdowns();
    showSection('dashboard');
    updateDashboard();
}

function setupMainAppListeners() {
    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Students section
    const addStudentBtn = document.getElementById('addStudentBtn');
    if (addStudentBtn) {
        addStudentBtn.addEventListener('click', () => {
            // Ensure dropdowns are populated before opening modal
            populateDropdowns();
            openStudentModal();
        });
    }
    
    const studentSearch = document.getElementById('studentSearch');
    if (studentSearch) {
        studentSearch.addEventListener('input', filterStudents);
    }
    
    const classFilter = document.getElementById('classFilter');
    if (classFilter) {
        classFilter.addEventListener('change', filterStudents);
    }
    
    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
        studentForm.addEventListener('submit', handleStudentSubmit);
    }
    
    // Classes section
    const addClassBtn = document.getElementById('addClassBtn');
    if (addClassBtn) {
        addClassBtn.addEventListener('click', () => openClassModal());
    }
    
    const classForm = document.getElementById('classForm');
    if (classForm) {
        classForm.addEventListener('submit', handleClassSubmit);
    }
    
    // Attendance section
    const studentSelect = document.getElementById('studentSelect');
    if (studentSelect) {
        studentSelect.addEventListener('change', handleStudentSelect);
    }
    
    const monthSelect = document.getElementById('monthSelect');
    if (monthSelect) {
        monthSelect.addEventListener('change', renderAttendanceCalendar);
    }
    
    const yearSelect = document.getElementById('yearSelect');
    if (yearSelect) {
        yearSelect.addEventListener('change', renderAttendanceCalendar);
    }
    
    const shareAttendanceBtn = document.getElementById('shareAttendanceBtn');
    if (shareAttendanceBtn) {
        shareAttendanceBtn.addEventListener('click', shareAttendance);
    }
    
    // Modal handlers
    setupModalHandlers();
    
    console.log('All main app event listeners set up');
}

function handleLogout() {
    console.log('Logging out');
    appData.isLoggedIn = false;
    
    // Show login screen and hide main app
    const loginScreen = document.getElementById('loginScreen');
    const mainApp = document.getElementById('mainApp');
    
    if (loginScreen) {
        loginScreen.style.display = 'flex';
        loginScreen.classList.remove('hidden');
    }
    if (mainApp) {
        mainApp.style.display = 'none';
        mainApp.classList.add('hidden');
    }
    
    // Reset form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.reset();
    }
    
    // Clear any error messages
    const loginError = document.getElementById('loginError');
    if (loginError) {
        loginError.classList.add('hidden');
    }
}

function showSection(sectionName) {
    console.log('Switching to section:', sectionName);
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === sectionName);
    });
    
    // Update sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.toggle('active', section.id === `${sectionName}Section`);
    });
    
    appData.currentSection = sectionName;
    
    // Close mobile menu
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.remove('mobile-open');
    }
    
    // Load section data and populate dropdowns
    switch(sectionName) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'students':
            populateDropdowns(); // Ensure dropdowns are populated
            renderStudents();
            break;
        case 'classes':
            renderClasses();
            break;
        case 'attendance':
            populateStudentSelect(); // Populate student select specifically
            break;
    }
}

// Navigation Functions
function handleNavigation(e) {
    e.preventDefault();
    const section = e.target.closest('.nav-link').dataset.section;
    showSection(section);
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('mobile-open');
    }
}

// Dashboard Functions
function updateDashboard() {
    console.log('Updating dashboard');
    
    // Update stats
    const totalStudentsEl = document.getElementById('totalStudents');
    const totalClassesEl = document.getElementById('totalClasses');
    const attendanceRateEl = document.getElementById('attendanceRate');
    
    if (totalStudentsEl) {
        totalStudentsEl.textContent = appData.students.filter(s => !s.archived).length;
    }
    if (totalClassesEl) {
        totalClassesEl.textContent = appData.classes.length;
    }
    
    // Calculate attendance rate
    const attendanceRate = calculateOverallAttendanceRate();
    if (attendanceRateEl) {
        attendanceRateEl.textContent = `${attendanceRate}%`;
    }
    
    // Update chart
    updateProgressChart();
}

function calculateOverallAttendanceRate() {
    let totalPresent = 0;
    let totalDays = 0;
    
    appData.students.forEach(student => {
        if (student.archived) return;
        
        const studentAttendance = appData.attendance[student.id];
        if (studentAttendance) {
            Object.values(studentAttendance).forEach(yearData => {
                Object.values(yearData).forEach(monthData => {
                    Object.values(monthData).forEach(status => {
                        totalDays++;
                        if (status === 'present') totalPresent++;
                    });
                });
            });
        }
    });
    
    return totalDays > 0 ? Math.round((totalPresent / totalDays) * 100) : 0;
}

function updateProgressChart() {
    const canvas = document.getElementById('progressChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Destroy existing chart if it exists
    if (progressChart) {
        progressChart.destroy();
    }
    
    const activeStudents = appData.students.filter(s => !s.archived);
    const labels = activeStudents.map(s => s.name);
    const data = activeStudents.map(s => s.classesCompleted || 0);
    
    progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Individual Classes Completed',
                data: data,
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Student Management Functions
function renderStudents() {
    const studentsGrid = document.getElementById('studentsGrid');
    if (!studentsGrid) return;
    
    const searchInput = document.getElementById('studentSearch');
    const classFilterSelect = document.getElementById('classFilter');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const classFilter = classFilterSelect ? classFilterSelect.value : '';
    
    let filteredStudents = appData.students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm) || 
                            student.phone.includes(searchTerm);
        const matchesClass = !classFilter || student.individualClassType === classFilter;
        return matchesSearch && matchesClass;
    });
    
    if (filteredStudents.length === 0) {
        studentsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-user-graduate"></i>
                <h3>No Students Found</h3>
                <p>Try adjusting your search or add a new student.</p>
            </div>
        `;
        return;
    }
    
    studentsGrid.innerHTML = filteredStudents.map(student => `
        <div class="student-card">
            <div class="student-card-header">
                <h3 class="student-name">${student.name}</h3>
                ${student.archived ? '<span class="archived-badge">Archived</span>' : ''}
            </div>
            <div class="student-card-body">
                <div class="student-info">
                    <div class="student-info-item">
                        <i class="fas fa-phone"></i>
                        <span>${student.phone}</span>
                    </div>
                    <div class="student-info-item">
                        <i class="fas fa-user"></i>
                        <span>Individual Class: ${student.individualClassType}</span>
                    </div>
                    <div class="student-info-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${student.classesCompleted || 0} classes completed</span>
                    </div>
                </div>
                <div class="student-actions">
                    <button class="btn btn--sm btn--outline" onclick="editStudent(${student.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn btn--sm ${student.archived ? 'btn--success' : 'btn--warning'}" 
                            onclick="${student.archived ? 'unarchiveStudent' : 'archiveStudent'}(${student.id})">
                        <i class="fas fa-${student.archived ? 'undo' : 'archive'}"></i> 
                        ${student.archived ? 'Unarchive' : 'Archive'}
                    </button>
                    <button class="btn btn--sm btn--danger" onclick="deleteStudent(${student.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterStudents() {
    renderStudents();
}

function openStudentModal(studentId = null) {
    // CRITICAL FIX: Ensure dropdowns are populated before opening modal
    populateDropdowns();
    
    const modal = document.getElementById('studentModal');
    const title = document.getElementById('studentModalTitle');
    const form = document.getElementById('studentForm');
    
    if (!modal || !title || !form) return;
    
    appData.editingStudent = studentId;
    
    if (studentId) {
        const student = appData.students.find(s => s.id === studentId);
        if (student) {
            title.textContent = 'Edit Student';
            document.getElementById('studentName').value = student.name;
            document.getElementById('studentPhone').value = student.phone;
            document.getElementById('studentClass').value = student.individualClassType;
        }
    } else {
        title.textContent = 'Add Student';
        form.reset();
    }
    
    modal.classList.remove('hidden');
}

function handleStudentSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('studentName').value.trim();
    const phone = document.getElementById('studentPhone').value.trim();
    const individualClassType = document.getElementById('studentClass').value;
    
    if (!name || !phone || !individualClassType) return;
    
    if (appData.editingStudent) {
        // Edit existing student
        const student = appData.students.find(s => s.id === appData.editingStudent);
        if (student) {
            student.name = name;
            student.phone = phone;
            student.individualClassType = individualClassType;
        }
    } else {
        // Add new student
        const newStudent = {
            id: Date.now(),
            name,
            phone,
            individualClassType,
            archived: false,
            classesCompleted: Math.floor(Math.random() * 10) // Random for demo
        };
        appData.students.push(newStudent);
        
        // Initialize attendance data
        appData.attendance[newStudent.id] = {};
    }
    
    closeModal('studentModal');
    renderStudents();
    updateDashboard();
    populateDropdowns(); // Refresh dropdowns after adding/editing
}

// Global functions for onclick handlers
window.editStudent = function(id) {
    openStudentModal(id);
};

window.archiveStudent = function(id) {
    const student = appData.students.find(s => s.id === id);
    if (student) {
        student.archived = true;
        renderStudents();
        updateDashboard();
        populateStudentSelect(); // Refresh student select dropdown
    }
};

window.unarchiveStudent = function(id) {
    const student = appData.students.find(s => s.id === id);
    if (student) {
        student.archived = false;
        renderStudents();
        updateDashboard();
        populateStudentSelect(); // Refresh student select dropdown
    }
};

window.deleteStudent = function(id) {
    showConfirmDialog(
        'Delete Student',
        'Are you sure you want to delete this student? This action cannot be undone.',
        () => {
            appData.students = appData.students.filter(s => s.id !== id);
            delete appData.attendance[id];
            renderStudents();
            updateDashboard();
            populateDropdowns(); // Refresh all dropdowns
        }
    );
};

// Class Management Functions
function renderClasses() {
    const classesGrid = document.getElementById('classesGrid');
    if (!classesGrid) return;
    
    if (appData.classes.length === 0) {
        classesGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-chalkboard"></i>
                <h3>No Class Types Found</h3>
                <p>Create your first individual class type to get started.</p>
            </div>
        `;
        return;
    }
    
    classesGrid.innerHTML = appData.classes.map(classItem => {
        const enrolledStudents = appData.students.filter(s => s.individualClassType === classItem.name);
        return `
            <div class="class-card">
                <div class="class-card-header">
                    <h3 class="class-name">${classItem.name}</h3>
                </div>
                <div class="class-card-body">
                    <div class="class-info">
                        <div class="class-info-item">
                            <i class="fas fa-align-left"></i>
                            <span>${classItem.description || 'No description'}</span>
                        </div>
                        <div class="class-info-item">
                            <i class="fas fa-user"></i>
                            <span>${enrolledStudents.length} student${enrolledStudents.length !== 1 ? 's' : ''} enrolled</span>
                        </div>
                    </div>
                    <div class="class-actions">
                        <button class="btn btn--sm btn--outline" onclick="editClass(${classItem.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn--sm btn--danger" onclick="deleteClass(${classItem.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openClassModal(classId = null) {
    const modal = document.getElementById('classModal');
    const title = document.getElementById('classModalTitle');
    const form = document.getElementById('classForm');
    
    if (!modal || !title || !form) return;
    
    appData.editingClass = classId;
    
    if (classId) {
        const classItem = appData.classes.find(c => c.id === classId);
        if (classItem) {
            title.textContent = 'Edit Individual Class Type';
            document.getElementById('className').value = classItem.name;
            document.getElementById('classDescription').value = classItem.description;
        }
    } else {
        title.textContent = 'Add Individual Class Type';
        form.reset();
    }
    
    modal.classList.remove('hidden');
}

function handleClassSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('className').value.trim();
    const description = document.getElementById('classDescription').value.trim();
    
    if (!name) return;
    
    if (appData.editingClass) {
        // Edit existing class
        const classItem = appData.classes.find(c => c.id === appData.editingClass);
        if (classItem) {
            const oldName = classItem.name;
            classItem.name = name;
            classItem.description = description;
            
            // Update student records if class name changed
            if (oldName !== name) {
                appData.students.forEach(student => {
                    if (student.individualClassType === oldName) {
                        student.individualClassType = name;
                    }
                });
            }
        }
    } else {
        // Add new class
        const newClass = {
            id: Date.now(),
            name,
            description
        };
        appData.classes.push(newClass);
    }
    
    closeModal('classModal');
    renderClasses();
    populateDropdowns(); // Refresh dropdowns after adding/editing class
}

// Global functions for onclick handlers
window.editClass = function(id) {
    openClassModal(id);
};

window.deleteClass = function(id) {
    const classItem = appData.classes.find(c => c.id === id);
    if (!classItem) return;
    
    const enrolledStudents = appData.students.filter(s => s.individualClassType === classItem.name);
    
    if (enrolledStudents.length > 0) {
        alert('Cannot delete class type with enrolled students. Please reassign or remove students first.');
        return;
    }
    
    showConfirmDialog(
        'Delete Class Type',
        'Are you sure you want to delete this individual class type?',
        () => {
            appData.classes = appData.classes.filter(c => c.id !== id);
            renderClasses();
            populateDropdowns(); // Refresh dropdowns after deleting class
        }
    );
};

// Attendance Management Functions - CRITICAL FIX
function populateStudentSelect() {
    console.log('Populating student select dropdown');
    const studentSelect = document.getElementById('studentSelect');
    if (!studentSelect) {
        console.error('Student select element not found');
        return;
    }
    
    const activeStudents = appData.students.filter(s => !s.archived);
    console.log('Active students:', activeStudents);
    
    studentSelect.innerHTML = '<option value="">Select Student</option>' +
        activeStudents.map(student => 
            `<option value="${student.id}">${student.name}</option>`
        ).join('');
    
    console.log('Student select populated with', activeStudents.length, 'students');
}

function handleStudentSelect() {
    const studentSelect = document.getElementById('studentSelect');
    if (!studentSelect) return;
    
    const studentId = parseInt(studentSelect.value);
    const shareBtn = document.getElementById('shareAttendanceBtn');
    
    if (studentId) {
        renderAttendanceCalendar();
        if (shareBtn) shareBtn.classList.remove('hidden');
    } else {
        const attendanceCalendar = document.getElementById('attendanceCalendar');
        if (attendanceCalendar) {
            attendanceCalendar.innerHTML = 
                '<p class="no-student-selected">Please select a student to view attendance</p>';
        }
        if (shareBtn) shareBtn.classList.add('hidden');
    }
}

function renderAttendanceCalendar() {
    const studentSelect = document.getElementById('studentSelect');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
    const attendanceCalendar = document.getElementById('attendanceCalendar');
    
    if (!studentSelect || !monthSelect || !yearSelect || !attendanceCalendar) return;
    
    const studentId = parseInt(studentSelect.value);
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    
    if (!studentId) return;
    
    const student = appData.students.find(s => s.id === studentId);
    if (!student) return;
    
    const attendanceData = appData.attendance[studentId]?.[year]?.[month] || {};
    
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    // Calculate stats
    const totalDays = Object.keys(attendanceData).length;
    const presentDays = Object.values(attendanceData).filter(status => status === 'present').length;
    const absentDays = totalDays - presentDays;
    const attendancePercentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    
    let calendarHTML = `
        <div class="calendar-header">
            <h3 class="calendar-title">${student.name} - ${monthNames[month]} ${year}</h3>
            <div class="attendance-stats">
                <div class="attendance-stat">
                    <h4 class="attendance-stat-number">${presentDays}</h4>
                    <p class="attendance-stat-label">Present</p>
                </div>
                <div class="attendance-stat">
                    <h4 class="attendance-stat-number">${absentDays}</h4>
                    <p class="attendance-stat-label">Absent</p>
                </div>
                <div class="attendance-stat">
                    <h4 class="attendance-stat-number attendance-percentage ${getAttendanceClass(attendancePercentage)}">${attendancePercentage}%</h4>
                    <p class="attendance-stat-label">Attendance</p>
                </div>
            </div>
        </div>
        
        <div class="calendar-grid">
            <div class="calendar-day-header">Sun</div>
            <div class="calendar-day-header">Mon</div>
            <div class="calendar-day-header">Tue</div>
            <div class="calendar-day-header">Wed</div>
            <div class="calendar-day-header">Thu</div>
            <div class="calendar-day-header">Fri</div>
            <div class="calendar-day-header">Sat</div>
    `;
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += '<div class="calendar-day empty"></div>';
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const status = attendanceData[day];
        const statusClass = status ? status : '';
        calendarHTML += `
            <div class="calendar-day ${statusClass}" onclick="toggleAttendance(${studentId}, ${year}, ${month}, ${day})">
                ${day}
            </div>
        `;
    }
    
    calendarHTML += '</div>';
    
    attendanceCalendar.innerHTML = calendarHTML;
}

// Global function for onclick handler
window.toggleAttendance = function(studentId, year, month, day) {
    if (!appData.attendance[studentId]) {
        appData.attendance[studentId] = {};
    }
    if (!appData.attendance[studentId][year]) {
        appData.attendance[studentId][year] = {};
    }
    if (!appData.attendance[studentId][year][month]) {
        appData.attendance[studentId][year][month] = {};
    }
    
    const currentStatus = appData.attendance[studentId][year][month][day];
    
    if (currentStatus === 'present') {
        appData.attendance[studentId][year][month][day] = 'absent';
    } else if (currentStatus === 'absent') {
        delete appData.attendance[studentId][year][month][day];
    } else {
        appData.attendance[studentId][year][month][day] = 'present';
    }
    
    renderAttendanceCalendar();
    updateDashboard();
};

function getAttendanceClass(percentage) {
    if (percentage >= 80) return 'high';
    if (percentage >= 60) return 'medium';
    return 'low';
}

// PNG Sharing Function - Clean checklist format without certificate wording
function shareAttendance() {
    const studentSelect = document.getElementById('studentSelect');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
    
    if (!studentSelect || !monthSelect || !yearSelect) return;
    
    const studentId = parseInt(studentSelect.value);
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearSelect.value);
    
    if (!studentId) return;
    
    const student = appData.students.find(s => s.id === studentId);
    if (!student) return;
    
    const attendanceData = appData.attendance[studentId]?.[year]?.[month] || {};
    
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Create canvas for clean attendance checklist
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 800;
    canvas.height = 1000;
    
    // Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Header
    ctx.fillStyle = '#1FB8CD';
    ctx.fillRect(0, 0, canvas.width, 80);
    
    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Monthly Attendance - ${monthNames[month]} ${year}`, canvas.width / 2, 50);
    
    // Student info section
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 20px Arial, sans-serif';
    ctx.textAlign = 'left';
    
    ctx.fillText(`Student: ${student.name}`, 50, 130);
    ctx.fillText(`Class: ${student.individualClassType}`, 50, 160);
    
    // Get marked days and create checklist
    const markedDays = Object.keys(attendanceData).map(day => parseInt(day)).sort((a, b) => a - b);
    
    let yPos = 220;
    let classNumber = 1;
    
    // Draw checklist items
    ctx.font = '16px Arial, sans-serif';
    
    markedDays.forEach(day => {
        const status = attendanceData[day];
        const monthName = monthNames[month].substring(0, 3); // Short month name
        
        // Checkbox
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, yPos - 15, 20, 20);
        
        // Checkmark if present
        if (status === 'present') {
            ctx.fillStyle = '#22c55e';
            ctx.font = 'bold 16px Arial, sans-serif';
            ctx.fillText('✓', 55, yPos);
            ctx.font = '16px Arial, sans-serif';
        }
        
        // Class text
        ctx.fillStyle = '#333333';
        ctx.fillText(`Class ${classNumber} (${monthName} ${day})`, 80, yPos);
        
        // Status indicator
        if (status === 'present') {
            ctx.fillStyle = '#22c55e';
            ctx.fillText('✓', 650, yPos);
        } else if (status === 'absent') {
            ctx.fillStyle = '#ef4444';
            ctx.fillText('✗', 650, yPos);
        }
        
        yPos += 35;
        classNumber++;
    });
    
    // Summary at bottom
    const totalDays = Object.keys(attendanceData).length;
    const presentDays = Object.values(attendanceData).filter(status => status === 'present').length;
    const attendancePercentage = totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0;
    
    yPos += 50;
    
    // Summary box
    ctx.strokeStyle = '#1FB8CD';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, yPos, canvas.width - 100, 100);
    
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 16px Arial, sans-serif';
    ctx.fillText('SUMMARY', 70, yPos + 30);
    
    ctx.font = '14px Arial, sans-serif';
    ctx.fillText(`Total Classes: ${totalDays}`, 70, yPos + 55);
    ctx.fillText(`Present: ${presentDays}`, 70, yPos + 75);
    ctx.fillText(`Absent: ${totalDays - presentDays}`, 250, yPos + 55);
    ctx.fillText(`Attendance Rate: ${attendancePercentage}%`, 250, yPos + 75);
    
    // Footer
    ctx.fillStyle = '#666666';
    ctx.font = '12px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`Generated on ${new Date().toLocaleDateString()}`, canvas.width / 2, canvas.height - 30);
    
    // Download the image
    const link = document.createElement('a');
    link.download = `${student.name}_Attendance_${monthNames[month]}_${year}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

// Utility Functions - CRITICAL FIX
function populateDropdowns() {
    console.log('Populating all dropdowns');
    
    // Populate class filter in students section
    const classFilter = document.getElementById('classFilter');
    if (classFilter) {
        classFilter.innerHTML = '<option value="">All Individual Classes</option>' +
            appData.classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
        console.log('Class filter populated with', appData.classes.length, 'classes');
    }
    
    // Populate class select in student modal - CRITICAL FIX
    const studentClassSelect = document.getElementById('studentClass');
    if (studentClassSelect) {
        studentClassSelect.innerHTML = '<option value="">Select Individual Class Type</option>' +
            appData.classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
        console.log('Student class select populated with', appData.classes.length, 'classes');
    }
    
    // Also populate student select for attendance
    populateStudentSelect();
}

// Modal Functions
function setupModalHandlers() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
        
        // Close on X button click
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal.id);
            });
        }
        
        // Close on cancel button click
        const cancelBtn = modal.querySelector('.modal-cancel');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                closeModal(modal.id);
            });
        }
    });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function showConfirmDialog(title, message, onConfirm) {
    const modal = document.getElementById('confirmModal');
    const titleEl = document.getElementById('confirmTitle');
    const messageEl = document.getElementById('confirmMessage');
    const confirmBtn = document.getElementById('confirmAction');
    
    if (!modal || !titleEl || !messageEl || !confirmBtn) return;
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    // Remove existing listeners
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    // Add new listener
    newConfirmBtn.addEventListener('click', () => {
        onConfirm();
        closeModal('confirmModal');
    });
    
    modal.classList.remove('hidden');
}

// Traclass App - Teacher Attendance Management
class TraclassApp {
    constructor() {
        this.data = {
            students: [],
            classTypes: [],
            checklists: []
        };
        
        this.currentTab = 'dashboard';
        this.showArchivedStudents = false;
        this.editingStudent = null;
        this.editingClass = null;
        this.currentChecklist = null;
        this.chart = null;
        this.expandedStudents = new Set(); // Track which students are expanded in attendance view
        
        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.renderAll();
        this.showTab('dashboard');
    }

    // Data Management
    loadData() {
        const storedData = localStorage.getItem('traclassData');
        if (storedData) {
            this.data = JSON.parse(storedData);
        } else {
            // Load sample data from the provided JSON
            this.data = {
                students: [
                    { id: 1, name: "Emma Johnson", phone: "+1-555-0123", classType: "Piano", archived: false },
                    { id: 2, name: "Liam Chen", phone: "+1-555-0124", classType: "Guitar", archived: false },
                    { id: 3, name: "Sophia Rodriguez", phone: "+1-555-0125", classType: "Violin", archived: false },
                    { id: 4, name: "Noah Thompson", phone: "+1-555-0126", classType: "Math", archived: false },
                    { id: 5, name: "Devansh", phone: "+1-555-0127", classType: "Guitar", archived: false }
                ],
                classTypes: [
                    { id: 1, name: "Piano" },
                    { id: 2, name: "Guitar" },
                    { id: 3, name: "Violin" },
                    { id: 4, name: "Math" },
                    { id: 5, name: "Science" },
                    { id: 6, name: "English" }
                ],
                checklists: [
                    {
                        id: 1, studentId: 1, period: "January 2025",
                        slots: [
                            { id: 1, name: "Class 1", completed: true },
                            { id: 2, name: "Class 2", completed: true },
                            { id: 3, name: "Class 3", completed: false },
                            { id: 4, name: "Class 4", completed: false }
                        ]
                    },
                    {
                        id: 2, studentId: 1, period: "December 2024",
                        slots: [
                            { id: 1, name: "Class 1", completed: true },
                            { id: 2, name: "Class 2", completed: true },
                            { id: 3, name: "Class 3", completed: true },
                            { id: 4, name: "Class 4", completed: false }
                        ]
                    },
                    {
                        id: 3, studentId: 2, period: "January 2025",
                        slots: [
                            { id: 1, name: "Class 1", completed: true },
                            { id: 2, name: "Class 2", completed: true },
                            { id: 3, name: "Class 3", completed: true },
                            { id: 4, name: "Class 4", completed: true },
                            { id: 5, name: "Class 5", completed: false },
                            { id: 6, name: "Class 6", completed: false }
                        ]
                    },
                    {
                        id: 4, studentId: 3, period: "January 2025",
                        slots: [
                            { id: 1, name: "Class 1", completed: true },
                            { id: 2, name: "Class 2", completed: false },
                            { id: 3, name: "Class 3", completed: false },
                            { id: 4, name: "Class 4", completed: false }
                        ]
                    },
                    {
                        id: 5, studentId: 4, period: "January 2025",
                        slots: [
                            { id: 1, name: "Lesson 1", completed: true },
                            { id: 2, name: "Lesson 2", completed: true },
                            { id: 3, name: "Lesson 3", completed: true },
                            { id: 4, name: "Lesson 4", completed: false },
                            { id: 5, name: "Lesson 5", completed: false },
                            { id: 6, name: "Lesson 6", completed: false },
                            { id: 7, name: "Lesson 7", completed: false },
                            { id: 8, name: "Lesson 8", completed: false }
                        ]
                    },
                    {
                        id: 6, studentId: 5, period: "November-December",
                        slots: [
                            { id: 1, name: "Class 1 (1 Nov)", completed: true },
                            { id: 2, name: "Class 2 (8 Nov)", completed: false },
                            { id: 3, name: "Class 3 (15 Nov)", completed: false },
                            { id: 4, name: "Class 4 (22 Nov)", completed: false },
                            { id: 5, name: "Class 5 (29 Nov)", completed: false },
                            { id: 6, name: "Class 6 (6 Dec)", completed: false }
                        ]
                    }
                ]
            };
            this.saveData();
        }
    }

    saveData() {
        localStorage.setItem('traclassData', JSON.stringify(this.data));
    }

    getNextId(collection) {
        return Math.max(0, ...collection.map(item => item.id)) + 1;
    }

    // Event Listeners - Fixed navigation issue
    setupEventListeners() {
        // Wait a bit to ensure DOM is ready
        setTimeout(() => {
            // Navigation - Direct event listeners on each nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const tab = e.currentTarget.dataset.tab;
                    console.log('Clicked tab:', tab);
                    this.showTab(tab);
                });
            });

            // Students
            const addStudentBtn = document.getElementById('addStudentBtn');
            if (addStudentBtn) {
                addStudentBtn.addEventListener('click', () => this.showStudentModal());
            }
            
            const toggleArchivedBtn = document.getElementById('toggleArchivedBtn');
            if (toggleArchivedBtn) {
                toggleArchivedBtn.addEventListener('click', () => this.toggleArchivedStudents());
            }

            const studentForm = document.getElementById('studentForm');
            if (studentForm) {
                studentForm.addEventListener('submit', (e) => this.handleStudentSubmit(e));
            }

            const closeStudentModal = document.getElementById('closeStudentModal');
            if (closeStudentModal) {
                closeStudentModal.addEventListener('click', () => this.hideStudentModal());
            }

            const cancelStudentBtn = document.getElementById('cancelStudentBtn');
            if (cancelStudentBtn) {
                cancelStudentBtn.addEventListener('click', () => this.hideStudentModal());
            }

            // Classes
            const addClassBtn = document.getElementById('addClassBtn');
            if (addClassBtn) {
                addClassBtn.addEventListener('click', () => this.showClassModal());
            }

            const classForm = document.getElementById('classForm');
            if (classForm) {
                classForm.addEventListener('submit', (e) => this.handleClassSubmit(e));
            }

            const closeClassModal = document.getElementById('closeClassModal');
            if (closeClassModal) {
                closeClassModal.addEventListener('click', () => this.hideClassModal());
            }

            const cancelClassBtn = document.getElementById('cancelClassBtn');
            if (cancelClassBtn) {
                cancelClassBtn.addEventListener('click', () => this.hideClassModal());
            }

            // Checklists
            const addChecklistBtn = document.getElementById('addChecklistBtn');
            if (addChecklistBtn) {
                addChecklistBtn.addEventListener('click', () => this.showChecklistModal());
            }

            const checklistForm = document.getElementById('checklistForm');
            if (checklistForm) {
                checklistForm.addEventListener('submit', (e) => this.handleChecklistSubmit(e));
            }

            const closeChecklistModal = document.getElementById('closeChecklistModal');
            if (closeChecklistModal) {
                closeChecklistModal.addEventListener('click', () => this.hideChecklistModal());
            }

            const cancelChecklistBtn = document.getElementById('cancelChecklistBtn');
            if (cancelChecklistBtn) {
                cancelChecklistBtn.addEventListener('click', () => this.hideChecklistModal());
            }

            // Checklist Detail
            const closeChecklistDetailModal = document.getElementById('closeChecklistDetailModal');
            if (closeChecklistDetailModal) {
                closeChecklistDetailModal.addEventListener('click', () => this.hideChecklistDetailModal());
            }

            const shareChecklistBtn = document.getElementById('shareChecklistBtn');
            if (shareChecklistBtn) {
                shareChecklistBtn.addEventListener('click', () => this.exportChecklist());
            }
            
            // Additional checklist detail buttons
            const addSlotBtn = document.getElementById('addSlotBtn');
            if (addSlotBtn) {
                addSlotBtn.addEventListener('click', () => this.addSlotToChecklist());
            }

            const hideChecklistBtn = document.getElementById('hideChecklistBtn');
            if (hideChecklistBtn) {
                hideChecklistBtn.addEventListener('click', () => this.hideChecklistDetailModal());
            }

            // Modal backdrop clicks
            document.querySelectorAll('.modal').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                        modal.classList.add('hidden');
                    }
                });
            });
        }, 100);
    }

    // Navigation
    showTab(tabName) {
        console.log('Showing tab:', tabName);
        
        // Update nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Update tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        const activeTab = document.getElementById(tabName);
        if (activeTab) {
            activeTab.classList.add('active');
        }

        this.currentTab = tabName;

        // Render content for active tab
        switch (tabName) {
            case 'dashboard':
                this.renderDashboard();
                break;
            case 'students':
                this.renderStudents();
                break;
            case 'classes':
                this.renderClasses();
                break;
            case 'attendance':
                this.renderAttendance();
                break;
        }
    }

    renderAll() {
        this.renderStudents();
        this.renderClasses();
        this.renderAttendance();
        this.renderDashboard();
    }

    // Dashboard
    renderDashboard() {
        this.renderChart();
        this.renderChartControls();
    }

    renderChart() {
        const ctx = document.getElementById('attendanceChart');
        if (!ctx) return;
        
        const context = ctx.getContext('2d');
        
        if (this.chart) {
            this.chart.destroy();
        }

        const activeStudents = this.data.students.filter(s => !s.archived);
        const chartData = activeStudents.map(student => {
            const checklists = this.data.checklists.filter(c => c.studentId === student.id);
            const selectedChecklistId = this.getSelectedChecklistId(student.id);
            const checklist = checklists.find(c => c.id === selectedChecklistId) || checklists[checklists.length - 1];
            
            if (!checklist) return { label: student.name, completed: 0, total: 0 };
            
            const completed = checklist.slots.filter(slot => slot.completed).length;
            return {
                label: student.name,
                completed: completed,
                total: checklist.slots.length
            };
        });

        this.chart = new Chart(context, {
            type: 'bar',
            data: {
                labels: chartData.map(d => d.label),
                datasets: [{
                    label: 'Completed Classes',
                    data: chartData.map(d => d.completed),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
                    borderColor: '#32b8cd',
                    borderWidth: 1
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
                        ticks: {
                            stepSize: 1,
                            color: '#a3a3a3'
                        },
                        grid: {
                            color: '#404040'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#a3a3a3'
                        },
                        grid: {
                            color: '#404040'
                        }
                    }
                }
            }
        });
    }

    renderChartControls() {
        const container = document.getElementById('chartDropdowns');
        if (!container) return;
        
        container.innerHTML = '';

        const activeStudents = this.data.students.filter(s => !s.archived);
        
        activeStudents.forEach(student => {
            const checklists = this.data.checklists.filter(c => c.studentId === student.id);
            if (checklists.length === 0) return;

            const group = document.createElement('div');
            group.className = 'chart-dropdown-group';

            const label = document.createElement('label');
            label.className = 'chart-dropdown-label';
            label.textContent = student.name;

            const select = document.createElement('select');
            select.className = 'form-control chart-dropdown-select';
            select.dataset.studentId = student.id;

            checklists.forEach(checklist => {
                const option = document.createElement('option');
                option.value = checklist.id;
                option.textContent = checklist.period;
                select.appendChild(option);
            });

            // Set default to most recent
            const selectedId = this.getSelectedChecklistId(student.id);
            if (selectedId) {
                select.value = selectedId;
            } else {
                select.value = checklists[checklists.length - 1].id;
                this.setSelectedChecklistId(student.id, checklists[checklists.length - 1].id);
            }

            select.addEventListener('change', (e) => {
                this.setSelectedChecklistId(student.id, parseInt(e.target.value));
                this.renderChart();
            });

            group.appendChild(label);
            group.appendChild(select);
            container.appendChild(group);
        });
    }

    getSelectedChecklistId(studentId) {
        const key = `selected_checklist_${studentId}`;
        const stored = localStorage.getItem(key);
        return stored ? parseInt(stored) : null;
    }

    setSelectedChecklistId(studentId, checklistId) {
        const key = `selected_checklist_${studentId}`;
        localStorage.setItem(key, checklistId.toString());
    }

    // Students
    renderStudents() {
        const container = document.getElementById('studentsGrid');
        if (!container) return;
        
        const students = this.showArchivedStudents 
            ? this.data.students 
            : this.data.students.filter(s => !s.archived);

        if (students.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>${this.showArchivedStudents ? 'No archived students' : 'No students yet'}</h3>
                    <p>${this.showArchivedStudents ? 'No students have been archived.' : 'Add your first student to get started.'}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = students.map(student => `
            <div class="card student-card ${student.archived ? 'archived' : ''}" data-student-id="${student.id}">
                ${student.archived ? '<div class="student-status student-status--archived">Archived</div>' : ''}
                <div class="card-header">
                    <div>
                        <h3 class="card-title">${student.name}</h3>
                        <p class="card-subtitle">${student.classType}</p>
                    </div>
                    <div class="card-actions">
                        <button class="card-action-btn" onclick="app.editStudent(${student.id})" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="card-action-btn" onclick="app.${student.archived ? 'restoreStudent' : 'archiveStudent'}(${student.id})" title="${student.archived ? 'Restore' : 'Archive'}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                ${student.archived 
                                    ? '<path d="M3 3h18l-2 13H5L3 3z"></path><path d="M3 3L1 1"></path>' 
                                    : '<polyline points="3,6 5,6 21,6"></polyline><path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>'
                                }
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="card-content">
                    <p><strong>Phone:</strong> ${student.phone}</p>
                </div>
            </div>
        `).join('');
    }

    populateClassTypesDropdown(selectElement) {
        selectElement.innerHTML = '<option value="">Select a class type</option>';
        this.data.classTypes.forEach(classType => {
            const option = document.createElement('option');
            option.value = classType.name;
            option.textContent = classType.name;
            selectElement.appendChild(option);
        });
    }

    showStudentModal(student = null) {
        this.editingStudent = student;
        const modal = document.getElementById('studentModal');
        const title = document.getElementById('studentModalTitle');
        const form = document.getElementById('studentForm');

        if (!modal || !title || !form) return;

        title.textContent = student ? 'Edit Student' : 'Add Student';
        
        // Populate class types dropdown
        const classSelect = document.getElementById('studentClass');
        if (classSelect) {
            this.populateClassTypesDropdown(classSelect);
        }

        if (student) {
            const nameInput = document.getElementById('studentName');
            const phoneInput = document.getElementById('studentPhone');
            
            if (nameInput) nameInput.value = student.name;
            if (phoneInput) phoneInput.value = student.phone;
            if (classSelect) classSelect.value = student.classType;
        } else {
            form.reset();
            // Re-populate dropdown after reset
            setTimeout(() => {
                if (classSelect) {
                    this.populateClassTypesDropdown(classSelect);
                }
            }, 0);
        }

        modal.classList.remove('hidden');
    }

    hideStudentModal() {
        const modal = document.getElementById('studentModal');
        const form = document.getElementById('studentForm');
        
        if (modal) modal.classList.add('hidden');
        if (form) form.reset();
        this.editingStudent = null;
    }

    handleStudentSubmit(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('studentName');
        const phoneInput = document.getElementById('studentPhone');
        const classSelect = document.getElementById('studentClass');
        
        if (!nameInput || !phoneInput || !classSelect) return;
        
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
        const classType = classSelect.value;

        if (!name || !phone || !classType) return;

        if (this.editingStudent) {
            // Update existing student
            const index = this.data.students.findIndex(s => s.id === this.editingStudent.id);
            if (index !== -1) {
                this.data.students[index] = {
                    ...this.data.students[index],
                    name,
                    phone,
                    classType
                };
            }
        } else {
            // Add new student
            const newStudent = {
                id: this.getNextId(this.data.students),
                name,
                phone,
                classType,
                archived: false
            };
            this.data.students.push(newStudent);
        }

        this.saveData();
        this.hideStudentModal();
        this.renderStudents();
        this.renderDashboard();
        this.renderAttendance();
    }

    editStudent(id) {
        const student = this.data.students.find(s => s.id === id);
        if (student) {
            this.showStudentModal(student);
        }
    }

    archiveStudent(id) {
        const student = this.data.students.find(s => s.id === id);
        if (student) {
            student.archived = true;
            this.saveData();
            this.renderStudents();
            this.renderDashboard();
        }
    }

    restoreStudent(id) {
        const student = this.data.students.find(s => s.id === id);
        if (student) {
            student.archived = false;
            this.saveData();
            this.renderStudents();
            this.renderDashboard();
        }
    }

    toggleArchivedStudents() {
        this.showArchivedStudents = !this.showArchivedStudents;
        const btn = document.getElementById('toggleArchivedBtn');
        if (btn) {
            btn.textContent = this.showArchivedStudents ? 'Show Active' : 'Show Archived';
        }
        this.renderStudents();
    }

    // Classes
    renderClasses() {
        const container = document.getElementById('classesGrid');
        if (!container) return;
        
        if (this.data.classTypes.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No class types yet</h3>
                    <p>Add your first class type to get started.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = this.data.classTypes.map(classType => `
            <div class="card class-card">
                <div class="card-header">
                    <h3 class="card-title">${classType.name}</h3>
                    <div class="card-actions">
                        <button class="card-action-btn" onclick="app.editClass(${classType.id})" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="card-action-btn" onclick="app.deleteClass(${classType.id})" title="Delete">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3,6 5,6 21,6"></polyline>
                                <path d="M19,6v14a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="card-content">
                    <p>Students enrolled: ${this.data.students.filter(s => s.classType === classType.name && !s.archived).length}</p>
                </div>
            </div>
        `).join('');
    }

    showClassModal(classType = null) {
        this.editingClass = classType;
        const modal = document.getElementById('classModal');
        const title = document.getElementById('classModalTitle');
        const form = document.getElementById('classForm');

        if (!modal || !title || !form) return;

        title.textContent = classType ? 'Edit Class Type' : 'Add Class Type';
        
        const nameInput = document.getElementById('className');
        if (classType && nameInput) {
            nameInput.value = classType.name;
        } else if (nameInput) {
            form.reset();
        }

        modal.classList.remove('hidden');
    }

    hideClassModal() {
        const modal = document.getElementById('classModal');
        const form = document.getElementById('classForm');
        
        if (modal) modal.classList.add('hidden');
        if (form) form.reset();
        this.editingClass = null;
    }

    handleClassSubmit(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('className');
        if (!nameInput) return;
        
        const name = nameInput.value.trim();
        if (!name) return;

        if (this.editingClass) {
            // Update existing class type
            const index = this.data.classTypes.findIndex(ct => ct.id === this.editingClass.id);
            if (index !== -1) {
                const oldName = this.data.classTypes[index].name;
                this.data.classTypes[index].name = name;
                
                // Update students using this class type
                this.data.students.forEach(student => {
                    if (student.classType === oldName) {
                        student.classType = name;
                    }
                });
            }
        } else {
            // Add new class type
            const newClass = {
                id: this.getNextId(this.data.classTypes),
                name
            };
            this.data.classTypes.push(newClass);
        }

        this.saveData();
        this.hideClassModal();
        this.renderClasses();
        this.renderStudents();
    }

    editClass(id) {
        const classType = this.data.classTypes.find(ct => ct.id === id);
        if (classType) {
            this.showClassModal(classType);
        }
    }

    deleteClass(id) {
        if (confirm('Are you sure you want to delete this class type? This action cannot be undone.')) {
            const classType = this.data.classTypes.find(ct => ct.id === id);
            if (classType) {
                // Check if any students are using this class type
                const studentsUsingClass = this.data.students.filter(s => s.classType === classType.name);
                if (studentsUsingClass.length > 0) {
                    alert(`Cannot delete this class type. ${studentsUsingClass.length} student(s) are enrolled in it.`);
                    return;
                }
                
                this.data.classTypes = this.data.classTypes.filter(ct => ct.id !== id);
                this.saveData();
                this.renderClasses();
            }
        }
    }

    // Attendance/Checklists - Fixed for better functionality
    renderAttendance() {
        const container = document.getElementById('attendanceStudentList');
        if (!container) return;
        
        const activeStudents = this.data.students.filter(s => !s.archived);

        if (activeStudents.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <h3>No active students</h3>
                    <p>Add students to create attendance checklists.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = activeStudents.map(student => {
            const checklists = this.data.checklists.filter(c => c.studentId === student.id);
            const isExpanded = this.expandedStudents.has(student.id);
            const completedCount = checklists.reduce((acc, checklist) => {
                return acc + checklist.slots.filter(slot => slot.completed).length;
            }, 0);
            
            return `
                <div class="student-section">
                    <div class="student-section-header" onclick="app.toggleStudentExpansion(${student.id})">
                        <div>
                            <h3 class="student-name">${student.name}</h3>
                            <p class="student-class">${student.classType} • ${checklists.length} checklist(s) • ${completedCount} classes completed</p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transform: rotate(${isExpanded ? '180deg' : '0deg'}); transition: transform 0.2s;">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                    <div class="student-checklists-container ${isExpanded ? 'expanded' : ''}">
                        <div class="attendance-actions">
                            <button class="btn btn--secondary btn--sm" onclick="app.showChecklistModalForStudent(${student.id})">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                Add New Checklist
                            </button>
                        </div>
                        <div class="checklists-grid">
                            ${checklists.length === 0 ? 
                                '<div class="empty-state"><p>No checklists yet for this student.</p></div>' :
                                checklists.map(checklist => {
                                    const completed = checklist.slots.filter(slot => slot.completed).length;
                                    const total = checklist.slots.length;
                                    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
                                    
                                    return `
                                        <div class="checklist-card-compact" onclick="app.viewChecklistDetail(${checklist.id})">
                                            <h4 class="card-title">${checklist.period}</h4>
                                            <div class="checklist-progress">
                                                <div class="progress-bar">
                                                    <div class="progress-fill" style="width: ${percentage}%"></div>
                                                </div>
                                                <p class="progress-text">${completed}/${total} (${percentage}%)</p>
                                            </div>
                                        </div>
                                    `;
                                }).join('')
                            }
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Populate student dropdown for new checklist modal
        const studentSelect = document.getElementById('checklistStudent');
        if (studentSelect) {
            studentSelect.innerHTML = '<option value="">Select a student</option>' +
                activeStudents.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
        }
    }

    // New method to toggle student expansion in attendance view
    toggleStudentExpansion(studentId) {
        if (this.expandedStudents.has(studentId)) {
            this.expandedStudents.delete(studentId);
        } else {
            this.expandedStudents.add(studentId);
        }
        this.renderAttendance();
    }

    // New method to show checklist modal for specific student
    showChecklistModalForStudent(studentId) {
        const modal = document.getElementById('checklistModal');
        const form = document.getElementById('checklistForm');
        
        if (!modal || !form) return;
        
        form.reset();
        
        // Populate and pre-select student
        const studentSelect = document.getElementById('checklistStudent');
        if (studentSelect) {
            const activeStudents = this.data.students.filter(s => !s.archived);
            studentSelect.innerHTML = '<option value="">Select a student</option>' +
                activeStudents.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
            studentSelect.value = studentId;
        }
        
        modal.classList.remove('hidden');
    }

    showChecklistModal() {
        const modal = document.getElementById('checklistModal');
        const form = document.getElementById('checklistForm');
        
        if (!modal || !form) return;
        
        form.reset();
        
        // Populate student dropdown
        const studentSelect = document.getElementById('checklistStudent');
        if (studentSelect) {
            const activeStudents = this.data.students.filter(s => !s.archived);
            studentSelect.innerHTML = '<option value="">Select a student</option>' +
                activeStudents.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
        }
        
        modal.classList.remove('hidden');
    }

    hideChecklistModal() {
        const modal = document.getElementById('checklistModal');
        const form = document.getElementById('checklistForm');
        
        if (modal) modal.classList.add('hidden');
        if (form) form.reset();
    }

    handleChecklistSubmit(e) {
        e.preventDefault();
        
        const studentSelect = document.getElementById('checklistStudent');
        const periodInput = document.getElementById('checklistPeriod');
        const slotsInput = document.getElementById('checklistSlots');
        
        if (!studentSelect || !periodInput || !slotsInput) return;
        
        const studentId = parseInt(studentSelect.value);
        const period = periodInput.value.trim();
        const slotsCount = parseInt(slotsInput.value);

        if (!studentId || !period || !slotsCount) return;

        const slots = [];
        for (let i = 1; i <= slotsCount; i++) {
            slots.push({
                id: i,
                name: `Class ${i}`,
                completed: false
            });
        }

        const newChecklist = {
            id: this.getNextId(this.data.checklists),
            studentId,
            period,
            slots
        };

        this.data.checklists.push(newChecklist);
        
        // Auto-expand the student section after adding checklist
        this.expandedStudents.add(studentId);
        
        this.saveData();
        this.hideChecklistModal();
        this.renderAttendance();
        this.renderDashboard();
    }

    viewChecklistDetail(checklistId) {
        const checklist = this.data.checklists.find(c => c.id === checklistId);
        const student = this.data.students.find(s => s.id === checklist.studentId);
        
        if (!checklist || !student) return;

        this.currentChecklist = checklist;

        // Create student avatar initials
        const initials = student.name.split(' ').map(n => n[0]).join('').toUpperCase();

        // Render header with student profile
        const header = document.getElementById('checklistDetailHeaderContent');
        if (header) {
            header.innerHTML = `
                <div class="student-avatar">${initials}</div>
                <h2 class="student-profile-name">${student.name}</h2>
                <div class="student-profile-meta">
                    <span>${student.classType}</span>
                    <span>${checklist.period}</span>
                </div>
            `;
        }

        // Calculate progress
        const completed = checklist.slots.filter(slot => slot.completed).length;
        const total = checklist.slots.length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

        // Render progress bar
        const progressBar = document.getElementById('checklistProgressBar');
        if (progressBar) {
            progressBar.innerHTML = `
                <h4>Progress</h4>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <p class="progress-text">${completed}/${total} completed (${percentage}%)</p>
            `;
        }

        // Render checklist content
        const content = document.getElementById('checklistDetailContent');
        if (content) {
            content.innerHTML = `
                <div class="checklist-slots">
                    ${checklist.slots.map(slot => `
                        <div class="checklist-slot">
                            <input type="checkbox" class="slot-checkbox" ${slot.completed ? 'checked' : ''} 
                                   onchange="app.toggleSlotCompletion(${checklistId}, ${slot.id})">
                            <input type="text" class="slot-name-input" value="${slot.name}" 
                                   onblur="app.updateSlotName(${checklistId}, ${slot.id}, this.value)"
                                   onkeypress="if(event.key==='Enter') this.blur()">
                            <button class="slot-edit-btn" onclick="this.previousElementSibling.focus(); this.previousElementSibling.select();" title="Edit name">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        const modal = document.getElementById('checklistDetailModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideChecklistDetailModal() {
        const modal = document.getElementById('checklistDetailModal');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.currentChecklist = null;
    }

    toggleSlotCompletion(checklistId, slotId) {
        const checklist = this.data.checklists.find(c => c.id === checklistId);
        const slot = checklist.slots.find(s => s.id === slotId);
        
        if (slot) {
            slot.completed = !slot.completed;
            this.saveData();
            this.renderAttendance();
            this.renderDashboard();
            
            // Update progress bar in modal
            if (this.currentChecklist && this.currentChecklist.id === checklistId) {
                const completed = checklist.slots.filter(slot => slot.completed).length;
                const total = checklist.slots.length;
                const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
                
                const progressBar = document.getElementById('checklistProgressBar');
                if (progressBar) {
                    progressBar.innerHTML = `
                        <h4>Progress</h4>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <p class="progress-text">${completed}/${total} completed (${percentage}%)</p>
                    `;
                }
            }
        }
    }

    updateSlotName(checklistId, slotId, newName) {
        const checklist = this.data.checklists.find(c => c.id === checklistId);
        const slot = checklist.slots.find(s => s.id === slotId);
        
        if (slot && newName.trim()) {
            slot.name = newName.trim();
            this.saveData();
        }
    }

    addSlotToChecklist() {
        if (!this.currentChecklist) return;

        const newSlot = {
            id: Math.max(0, ...this.currentChecklist.slots.map(s => s.id)) + 1,
            name: `Class ${this.currentChecklist.slots.length + 1}`,
            completed: false
        };

        this.currentChecklist.slots.push(newSlot);
        this.saveData();
        this.viewChecklistDetail(this.currentChecklist.id);
        this.renderAttendance();
        this.renderDashboard();
    }

    async exportChecklist() {
        if (!this.currentChecklist) return;

        const student = this.data.students.find(s => s.id === this.currentChecklist.studentId);
        if (!student) return;

        // Show loading feedback
        const shareBtn = document.getElementById('shareChecklistBtn');
        if (!shareBtn) return;
        
        const originalText = shareBtn.innerHTML;
        shareBtn.innerHTML = '<span>Generating...</span>';
        shareBtn.disabled = true;

        try {
            // Create export container
            const exportContainer = document.createElement('div');
            exportContainer.className = 'export-container';
            exportContainer.style.position = 'absolute';
            exportContainer.style.left = '-9999px';
            exportContainer.style.top = '0';
            exportContainer.innerHTML = `
                <div class="export-header">
                    <h1 class="export-title">Traclass</h1>
                    <h2 class="export-student">${student.name}</h2>
                    <div class="export-meta">${student.classType} • ${this.currentChecklist.period}</div>
                </div>
                <div class="export-slots">
                    ${this.currentChecklist.slots.map(slot => `
                        <div class="export-slot ${slot.completed ? 'completed' : ''}">
                            <div class="export-checkbox ${slot.completed ? 'checked' : ''}">
                                ${slot.completed ? '✓' : ''}
                            </div>
                            <div class="export-slot-name">${slot.name}</div>
                        </div>
                    `).join('')}
                </div>
            `;

            // Temporarily add to body
            document.body.appendChild(exportContainer);

            // Wait a moment for styles to apply
            await new Promise(resolve => setTimeout(resolve, 100));

            const canvas = await html2canvas(exportContainer, {
                backgroundColor: '#ffffff',
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
                width: exportContainer.scrollWidth,
                height: exportContainer.scrollHeight
            });

            // Remove temporary container
            document.body.removeChild(exportContainer);

            // Create and trigger download
            const link = document.createElement('a');
            const fileName = `${student.name.replace(/\s+/g, '_')}_${this.currentChecklist.period.replace(/\s+/g, '_')}_checklist.png`;
            link.download = fileName;
            link.href = canvas.toDataURL('image/png');
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show success feedback
            shareBtn.innerHTML = '<span>Downloaded!</span>';
            setTimeout(() => {
                shareBtn.innerHTML = originalText;
                shareBtn.disabled = false;
            }, 2000);

        } catch (error) {
            console.error('Export failed:', error);
            
            // Remove temporary container if it exists
            const tempContainer = document.querySelector('.export-container');
            if (tempContainer) {
                document.body.removeChild(tempContainer);
            }
            
            // Show error feedback
            shareBtn.innerHTML = '<span>Export Failed</span>';
            setTimeout(() => {
                shareBtn.innerHTML = originalText;
                shareBtn.disabled = false;
            }, 3000);
            
            alert('Failed to export checklist. Please try again.');
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new TraclassApp();
});

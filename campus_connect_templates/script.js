const CampusConnect = (() => {
    const demoUsers = [
        {
            id: 1,
            name: "Student Name",
            email: "student@campus.edu",
            password: "password123",
            department: "Computer Science '25",
            bio: "Passionate about web development, AI, and open source. CS batch of '25.",
            location: "University Campus",
            github: "github.com/student",
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "jane@campus.edu",
            password: "campus2026",
            department: "AI&DS '26",
            bio: "Learning software engineering through practical projects.",
            location: "Innovation Block",
            github: "github.com/janedoe",
        },
    ];

    const demoPosts = [
        {
            id: 1,
            author: "Jane Doe",
            content: "Looking for a study group for the upcoming Data Structures midterm! Anyone interested?",
            time: "2 hours ago",
            likes: 12,
            comments: [
                { author: "Student Name", text: "Count me in! Let's meet at the library." }
            ],
        },
        {
            id: 2,
            author: "John Smith",
            content: "The new cafeteria menu is amazing today. Highly recommend the pasta bar!",
            time: "5 hours ago",
            likes: 45,
            comments: [],
        },
        {
            id: 3,
            author: "Student Name",
            content: "Completed the CampusConnect login and profile templates for SE Lab.",
            time: "1 day ago",
            likes: 8,
            comments: [],
        },
    ];

    const demoEvents = [
        {
            id: 1,
            title: "Hackathon 2026",
            date: "Oct 15",
            fullDate: "October 15, 2026",
            time: "09:00 AM - 06:00 PM",
            location: "Main Auditorium & Lab A",
            category: "Tech",
            description: "24-hour annual college hackathon focusing on AI, Cloud, and Sustainability solutions. Great prizes and mentorship!",
            organizer: "Computer Science Club",
            registered: false,
            attendees: 128,
        },
        {
            id: 2,
            title: "Tech Talk: Generative AI & Robotics",
            date: "Oct 18",
            fullDate: "October 18, 2026",
            time: "02:00 PM - 04:00 PM",
            location: "Room 304, Innovation Block",
            category: "Tech",
            description: "Guest lecture from industry researchers exploring multimodal models, edge computing, and autonomous machines.",
            organizer: "AI & Data Science Society",
            registered: true,
            attendees: 86,
        },
        {
            id: 3,
            title: "Annual Cultural Fest - Resonance",
            date: "Nov 05",
            fullDate: "November 05, 2026",
            time: "10:00 AM - 10:00 PM",
            location: "Open Air Theatre",
            category: "Cultural",
            description: "Music, dance, drama, and photography exhibitions featuring campus bands and guest performers.",
            organizer: "Student Council",
            registered: false,
            attendees: 350,
        },
        {
            id: 4,
            title: "Inter-College Cricket Tournament",
            date: "Nov 12",
            fullDate: "November 12, 2026",
            time: "08:30 AM - 05:00 PM",
            location: "Campus Sports Complex",
            category: "Sports",
            description: "Round-robin tournament between regional college teams. Trophies and medals for outstanding players.",
            organizer: "Sports Department",
            registered: false,
            attendees: 64,
        },
        {
            id: 5,
            title: "Career & Internship Fair 2026",
            date: "Nov 20",
            fullDate: "November 20, 2026",
            time: "10:00 AM - 04:00 PM",
            location: "Campus Exhibition Hall",
            category: "Academic",
            description: "Meet recruiters from 30+ leading engineering and technology firms for summer internships and entry positions.",
            organizer: "Placement Cell",
            registered: false,
            attendees: 215,
        },
    ];

    const demoGroups = [
        {
            id: 1,
            name: "Coding & Open Source Club",
            category: "Technical",
            description: "Weekly collaborative coding sessions, open-source project sprints, algorithm problem solving, and git workshops.",
            members: 240,
            joined: true,
            lead: "Aarav Sharma",
            meetingTime: "Wednesdays @ 5:00 PM",
        },
        {
            id: 2,
            name: "AI & Machine Learning Society",
            category: "Technical",
            description: "Weekly paper reading groups, Kaggle competitions, and deep learning workshop series for undergraduate students.",
            members: 185,
            joined: false,
            lead: "Jane Doe",
            meetingTime: "Thursdays @ 4:00 PM",
        },
        {
            id: 3,
            name: "Robotics & IoT Guild",
            category: "Technical",
            description: "Hands-on microcontrollers, ROS, embedded systems, drone building, and hardware lab sessions.",
            members: 110,
            joined: false,
            lead: "Rohan Verma",
            meetingTime: "Tuesdays @ 5:00 PM",
        },
        {
            id: 4,
            name: "Design & Creative Arts Guild",
            category: "Arts & Culture",
            description: "UI/UX design, digital illustrations, poster styling, branding, and motion graphics for campus events.",
            members: 95,
            joined: false,
            lead: "Maya Patel",
            meetingTime: "Mondays @ 4:30 PM",
        },
        {
            id: 5,
            name: "Campus Debating & Literary Society",
            category: "Academic",
            description: "Parliamentary debate practice, MUN training, elocution contests, and student editorial writing.",
            members: 78,
            joined: false,
            lead: "Karan Mehta",
            meetingTime: "Fridays @ 3:00 PM",
        },
        {
            id: 6,
            name: "Sports & Athletics League",
            category: "Sports",
            description: "Organized football, badminton, basketball, and fitness sessions for all campus students.",
            members: 160,
            joined: false,
            lead: "Coach Vikram",
            meetingTime: "Saturdays @ 7:00 AM",
        },
    ];

    const demoResources = [
        {
            id: 1,
            name: "Maker Lab 3D Printer (Prusa MK4)",
            category: "Lab & Computing",
            location: "Maker Space - Room 102",
            status: "Available",
            description: "High-precision FDM 3D printer for prototyping student engineering designs and robot parts.",
            bookedBy: null,
            bookingSlot: null,
        },
        {
            id: 2,
            name: "High-Performance GPU Workstation (RTX 4090)",
            category: "Lab & Computing",
            location: "AI Research Lab - Room 215",
            status: "Available",
            description: "Dedicated workstation for deep learning training, computer vision models, and simulation datasets.",
            bookedBy: null,
            bookingSlot: null,
        },
        {
            id: 3,
            name: "Collaborative Study Pod B",
            category: "Study Spaces",
            location: "Central Library - 2nd Floor",
            status: "Reserved",
            description: "Acoustic pod with a 55-inch smart presentation screen and whiteboards for up to 6 students.",
            bookedBy: "Student Name",
            bookingSlot: "Today, 02:00 PM - 04:00 PM",
        },
        {
            id: 4,
            name: "4K Video Camera & Audio Recording Kit",
            category: "AV & Media",
            location: "Media Studio - Room 08",
            status: "Available",
            description: "Sony Cinema line camera kit with wireless lavalier microphones and tripod for college projects.",
            bookedBy: null,
            bookingSlot: null,
        },
        {
            id: 5,
            name: "Seminar Hall Conference Projector & PA System",
            category: "AV & Media",
            location: "Seminar Hall 2",
            status: "Available",
            description: "Laser HD projector, dual wireless microphones, and surround acoustic system for club meetings.",
            bookedBy: null,
            bookingSlot: null,
        },
        {
            id: 6,
            name: "Robotics Arena & Testing Grid",
            category: "Lab & Computing",
            location: "Robotics Lab - Ground Floor",
            status: "Available",
            description: "Obstacle course and calibration line-following track for autonomous rovers and bots.",
            bookedBy: null,
            bookingSlot: null,
        },
    ];

    const storageKey = "campusConnectState";

    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function normalizePosts(posts) {
        return (Array.isArray(posts) ? posts : clone(demoPosts)).map((p) => ({
            ...p,
            likes: typeof p.likes === "number" ? p.likes : 0,
            comments: Array.isArray(p.comments) ? p.comments : typeof p.comments === "number" ? [] : [],
        }));
    }

    function defaultState() {
        return {
            users: clone(demoUsers),
            posts: clone(demoPosts),
            events: clone(demoEvents),
            groups: clone(demoGroups),
            resources: clone(demoResources),
            currentUserEmail: "student@campus.edu",
        };
    }

    function hasLocalStorage() {
        try {
            return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
        } catch {
            return false;
        }
    }

    function loadState() {
        if (!hasLocalStorage()) return defaultState();
        const stored = window.localStorage.getItem(storageKey);
        if (!stored) return defaultState();
        try {
            const parsed = JSON.parse(stored);
            return {
                users: Array.isArray(parsed.users) ? parsed.users : clone(demoUsers),
                posts: normalizePosts(parsed.posts),
                events: Array.isArray(parsed.events) ? parsed.events : clone(demoEvents),
                groups: Array.isArray(parsed.groups) ? parsed.groups : clone(demoGroups),
                resources: Array.isArray(parsed.resources) ? parsed.resources : clone(demoResources),
                currentUserEmail: parsed.currentUserEmail || "student@campus.edu",
            };
        } catch {
            return defaultState();
        }
    }

    function saveState(state) {
        if (hasLocalStorage()) {
            window.localStorage.setItem(storageKey, JSON.stringify(state));
        }
        return state;
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
    }

    function validateLogin(email, password) {
        const errors = {};
        if (!validateEmail(email)) {
            errors.email = "Please enter a valid email address.";
        }
        if (!password || String(password).length < 8) {
            errors.password = "Password must be at least 8 characters.";
        }
        return { valid: Object.keys(errors).length === 0, errors };
    }

    function authenticateUser(email, password, users = demoUsers) {
        const validation = validateLogin(email, password);
        if (!validation.valid) {
            return { success: false, errors: validation.errors };
        }
        const user = users.find(
            (candidate) => candidate.email.toLowerCase() === String(email).trim().toLowerCase()
        );
        if (!user || user.password !== password) {
            return { success: false, errors: { credentials: "Invalid email or password." } };
        }
        return { success: true, user: { ...user, password: undefined } };
    }

    function registerUser(name, email, password, users = demoUsers) {
        const errors = {};
        if (!String(name || "").trim()) {
            errors.name = "Name is required.";
        }
        const loginValidation = validateLogin(email, password);
        Object.assign(errors, loginValidation.errors);
        if (users.some((user) => user.email.toLowerCase() === String(email).trim().toLowerCase())) {
            errors.email = "Email is already registered.";
        }
        if (Object.keys(errors).length) {
            return { success: false, errors };
        }
        const user = {
            id: users.length + 1,
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            password,
            department: "AI&DS",
            bio: "New CampusConnect member.",
            location: "University Campus",
            github: "github.com/new-student",
        };
        return { success: true, user };
    }

    function createPost(content, author = "Student Name") {
        const trimmed = String(content || "").trim();
        if (trimmed.length < 3) {
            return { success: false, error: "Post content must be at least 3 characters." };
        }
        return {
            success: true,
            post: {
                id: Date.now(),
                author,
                content: trimmed,
                time: "Just now",
                likes: 0,
                comments: [],
            },
        };
    }

    function toggleLikePost(postId, posts = demoPosts) {
        const post = posts.find((p) => p.id === Number(postId));
        if (!post) {
            return { success: false, error: "Post not found." };
        }
        post.likes = (post.likes || 0) + 1;
        return { success: true, post };
    }

    function addCommentToPost(postId, commentText, author = "Student Name", posts = demoPosts) {
        const post = posts.find((p) => p.id === Number(postId));
        if (!post) {
            return { success: false, error: "Post not found." };
        }
        const text = String(commentText || "").trim();
        if (!text) {
            return { success: false, error: "Comment cannot be empty." };
        }
        if (!Array.isArray(post.comments)) {
            post.comments = [];
        }
        const newComment = { author, text };
        post.comments.push(newComment);
        return { success: true, post, comment: newComment };
    }

    function updateProfile(profile, updates) {
        const nextProfile = { ...profile };
        const name = String(updates.name || "").trim();
        const bio = String(updates.bio || "").trim();
        if (!name) {
            return { success: false, errors: { name: "Name is required." } };
        }
        if (bio.length < 10) {
            return { success: false, errors: { bio: "Bio must be at least 10 characters." } };
        }
        nextProfile.name = name;
        nextProfile.bio = bio;
        return { success: true, profile: nextProfile };
    }

    // Events management
    function toggleEventRegistration(eventId, events = demoEvents) {
        const event = events.find((e) => e.id === Number(eventId));
        if (!event) {
            return { success: false, error: "Event not found." };
        }
        event.registered = !event.registered;
        event.attendees = (event.attendees || 0) + (event.registered ? 1 : -1);
        if (event.attendees < 0) event.attendees = 0;
        return { success: true, event };
    }

    function createEvent(eventData, events = demoEvents) {
        const title = String(eventData.title || "").trim();
        const date = String(eventData.date || "").trim();
        const location = String(eventData.location || "").trim();
        const category = String(eventData.category || "Tech").trim();
        const description = String(eventData.description || "").trim();
        const organizer = String(eventData.organizer || "Student Organizer").trim();
        const time = String(eventData.time || "TBD").trim();

        if (!title || title.length < 3) {
            return { success: false, error: "Event title must be at least 3 characters." };
        }
        if (!date) {
            return { success: false, error: "Event date is required." };
        }
        if (!location) {
            return { success: false, error: "Event location is required." };
        }

        const newEvent = {
            id: Date.now(),
            title,
            date,
            fullDate: date,
            time,
            location,
            category,
            description: description || "No description provided.",
            organizer,
            registered: true,
            attendees: 1,
        };
        events.unshift(newEvent);
        return { success: true, event: newEvent };
    }

    // Groups management
    function toggleGroupMembership(groupId, groups = demoGroups) {
        const group = groups.find((g) => g.id === Number(groupId));
        if (!group) {
            return { success: false, error: "Group not found." };
        }
        group.joined = !group.joined;
        group.members = (group.members || 0) + (group.joined ? 1 : -1);
        if (group.members < 0) group.members = 0;
        return { success: true, group };
    }

    function createGroup(groupData, groups = demoGroups) {
        const name = String(groupData.name || "").trim();
        const category = String(groupData.category || "Technical").trim();
        const description = String(groupData.description || "").trim();
        const meetingTime = String(groupData.meetingTime || "Weekly meetings").trim();
        const lead = String(groupData.lead || "Student Lead").trim();

        if (!name || name.length < 3) {
            return { success: false, error: "Group name must be at least 3 characters." };
        }
        if (!description || description.length < 10) {
            return { success: false, error: "Group description must be at least 10 characters." };
        }

        const newGroup = {
            id: Date.now(),
            name,
            category,
            description,
            members: 1,
            joined: true,
            lead,
            meetingTime,
        };
        groups.unshift(newGroup);
        return { success: true, group: newGroup };
    }

    // Resources management
    function bookResource(resourceId, bookingDetails = {}, resources = demoResources, userName = "Student Name") {
        const resource = resources.find((r) => r.id === Number(resourceId));
        if (!resource) {
            return { success: false, error: "Resource not found." };
        }
        if (resource.status === "Reserved") {
            return { success: false, error: "Resource is already reserved." };
        }
        const slot = bookingDetails.slot || "Requested Time Slot";
        resource.status = "Reserved";
        resource.bookedBy = userName;
        resource.bookingSlot = slot;
        return { success: true, resource };
    }

    function cancelResourceBooking(resourceId, resources = demoResources) {
        const resource = resources.find((r) => r.id === Number(resourceId));
        if (!resource) {
            return { success: false, error: "Resource not found." };
        }
        resource.status = "Available";
        resource.bookedBy = null;
        resource.bookingSlot = null;
        return { success: true, resource };
    }

    function resetPassword(email, users = demoUsers) {
        if (!validateEmail(email)) {
            return { success: false, error: "Please enter a valid email address." };
        }
        const user = users.find(
            (u) => u.email.toLowerCase() === String(email).trim().toLowerCase()
        );
        if (!user) {
            return { success: false, error: "No account found with this email." };
        }
        return { success: true, message: `Password reset instructions sent to ${user.email}.` };
    }

    function currentUser(state) {
        return state.users.find((user) => user.email === state.currentUserEmail) || state.users[0];
    }

    function showMessage(message, type = "success") {
        const messageBox = document.querySelector("[data-testid='message-box']");
        if (!messageBox) return;
        messageBox.textContent = message;
        messageBox.className = `message-box ${type}`;
        messageBox.hidden = false;
        setTimeout(() => {
            if (messageBox) {
                messageBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        }, 50);
    }

    function renderPost(post, state, onUpdate) {
        const card = document.createElement("div");
        card.className = "card post";
        card.dataset.postId = post.id;

        const commentsCount = Array.isArray(post.comments) ? post.comments.length : (typeof post.comments === "number" ? post.comments : 0);

        let commentsListHtml = "";
        if (Array.isArray(post.comments) && post.comments.length > 0) {
            commentsListHtml = post.comments
                .map((c) => `<div class="comment-bubble"><strong>${c.author}</strong>${c.text}</div>`)
                .join("");
        }

        card.innerHTML = `
            <div class="post-header">
                <div class="avatar-small"></div>
                <div class="post-meta">
                    <h4>${post.author}</h4>
                    <span>${post.time}</span>
                </div>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
            </div>
            <div class="post-footer">
                <button class="btn btn-text post-like-btn" data-testid="like-btn">Like (${post.likes || 0})</button>
                <button class="btn btn-text post-comment-toggle" data-testid="comment-btn">Comments (${commentsCount})</button>
            </div>
            <div class="comments-container" style="display: none;">
                <div class="comment-list">${commentsListHtml}</div>
                <form class="comment-form">
                    <input type="text" placeholder="Write a comment..." required>
                    <button type="submit" class="btn btn-primary btn-sm">Reply</button>
                </form>
            </div>
        `;

        const likeBtn = card.querySelector(".post-like-btn");
        likeBtn.addEventListener("click", () => {
            toggleLikePost(post.id, state.posts);
            saveState(state);
            likeBtn.textContent = `Like (${post.likes})`;
        });

        const commentToggle = card.querySelector(".post-comment-toggle");
        const commentsContainer = card.querySelector(".comments-container");
        commentToggle.addEventListener("click", () => {
            commentsContainer.style.display = commentsContainer.style.display === "none" ? "block" : "none";
        });

        const commentForm = card.querySelector(".comment-form");
        commentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = commentForm.querySelector("input");
            const user = currentUser(state);
            const res = addCommentToPost(post.id, input.value, user.name, state.posts);
            if (res.success) {
                saveState(state);
                const list = card.querySelector(".comment-list");
                const bubble = document.createElement("div");
                bubble.className = "comment-bubble";
                bubble.innerHTML = `<strong>${user.name}</strong>${input.value.trim()}`;
                list.appendChild(bubble);
                input.value = "";
                commentToggle.textContent = `Comments (${post.comments.length})`;
            }
        });

        return card;
    }

    function setupAuthPage() {
        const loginForm = document.querySelector("#loginForm");
        const registerForm = document.querySelector("#registerForm");
        const showRegister = document.querySelector("#showRegister");
        const showLogin = document.querySelector("#showLogin");
        const forgotLink = document.querySelector(".forgot-link");
        const forgotModal = document.querySelector("#forgotModal");
        const forgotForm = document.querySelector("#forgotForm");
        const closeForgot = document.querySelector("[data-testid='close-forgot-modal']");
        const state = loadState();

        if (showRegister && showLogin && loginForm && registerForm) {
            showRegister.addEventListener("click", (event) => {
                event.preventDefault();
                loginForm.hidden = true;
                registerForm.hidden = false;
            });
            showLogin.addEventListener("click", (event) => {
                event.preventDefault();
                registerForm.hidden = true;
                loginForm.hidden = false;
            });
        }

        if (forgotLink && forgotModal) {
            forgotLink.addEventListener("click", (e) => {
                e.preventDefault();
                forgotModal.style.display = "block";
            });
        }

        if (closeForgot && forgotModal) {
            closeForgot.addEventListener("click", () => {
                forgotModal.style.display = "none";
            });
        }

        if (forgotForm && forgotModal) {
            forgotForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const resetEmail = forgotForm.resetEmail.value;
                const res = resetPassword(resetEmail, state.users);
                if (res.success) {
                    showMessage(res.message, "success");
                    forgotModal.style.display = "none";
                    forgotForm.reset();
                } else {
                    showMessage(res.error, "error");
                }
            });
        }

        if (loginForm) {
            loginForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const email = loginForm.email.value;
                const password = loginForm.password.value;
                const result = authenticateUser(email, password, state.users);
                if (!result.success) {
                    showMessage(result.errors.credentials || "Please check the login form.", "error");
                    return;
                }
                state.currentUserEmail = result.user.email;
                saveState(state);
                window.location.href = "dashboard.html";
            });
        }

        if (registerForm) {
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const result = registerUser(
                    registerForm.fullName.value,
                    registerForm.registerEmail.value,
                    registerForm.registerPassword.value,
                    state.users
                );
                if (!result.success) {
                    showMessage(Object.values(result.errors)[0], "error");
                    return;
                }
                state.users.push(result.user);
                state.currentUserEmail = result.user.email;
                saveState(state);
                window.location.href = "dashboard.html";
            });
        }
    }

    function setupDashboardPage() {
        const state = loadState();
        const user = currentUser(state);
        const nameTargets = document.querySelectorAll("[data-current-user]");
        const departmentTarget = document.querySelector("[data-current-department]");
        const postFeed = document.querySelector("[data-testid='post-feed']");
        const postForm = document.querySelector("#postForm");

        nameTargets.forEach((target) => {
            target.textContent = user.name;
        });
        if (departmentTarget) {
            departmentTarget.textContent = user.department;
        }
        if (postFeed) {
            postFeed.innerHTML = "";
            state.posts.forEach((post) => postFeed.appendChild(renderPost(post, state)));
        }
        if (postForm) {
            postForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const input = postForm.querySelector("[data-testid='post-input']");
                const result = createPost(input.value, user.name);
                if (!result.success) {
                    showMessage(result.error, "error");
                    return;
                }
                state.posts.unshift(result.post);
                saveState(state);
                if (postFeed) {
                    postFeed.prepend(renderPost(result.post, state));
                }
                input.value = "";
                showMessage("Post created on the dashboard.", "success");
            });
        }
    }

    function setupProfilePage() {
        const state = loadState();
        let user = currentUser(state);
        const modal = document.querySelector("#editModal");
        const editButton = document.querySelector("[data-testid='edit-profile-btn']");
        const closeButton = document.querySelector("[data-testid='close-modal']");
        const profileForm = document.querySelector("#profileForm");

        function renderProfile() {
            const name = document.querySelector("[data-testid='profile-name']");
            const bio = document.querySelector("[data-testid='profile-bio']");
            const email = document.querySelector("[data-testid='profile-email']");
            const github = document.querySelector("[data-testid='profile-github']");
            if (name) name.textContent = user.name;
            if (bio) bio.textContent = user.bio;
            if (email) email.textContent = user.email;
            if (github) github.textContent = user.github;
        }

        function openModal() {
            if (!modal || !profileForm) return;
            profileForm.fullName.value = user.name;
            profileForm.bio.value = user.bio;
            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
        }

        function closeModal() {
            if (!modal) return;
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }

        renderProfile();
        if (editButton) editButton.addEventListener("click", openModal);
        if (closeButton) closeButton.addEventListener("click", closeModal);
        if (profileForm) {
            profileForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const result = updateProfile(user, {
                    name: profileForm.fullName.value,
                    bio: profileForm.bio.value,
                });
                if (!result.success) {
                    showMessage(Object.values(result.errors)[0], "error");
                    return;
                }
                const index = state.users.findIndex((candidate) => candidate.email === user.email);
                user = { ...state.users[index], ...result.profile };
                state.users[index] = user;
                saveState(state);
                renderProfile();
                closeModal();
                showMessage("Profile updated successfully.", "success");
            });
        }

        // Profile Tabs Navigation
        const tabs = document.querySelectorAll(".profile-content .tab");
        const panels = document.querySelectorAll(".tab-panel");
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                tabs.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");

                const targetPanelId = tab.dataset.targetPanel;
                panels.forEach((panel) => {
                    if (panel.id === targetPanelId) {
                        panel.classList.add("active");
                    } else {
                        panel.classList.remove("active");
                    }
                });
            });
        });

        // Connection Cards Toggle
        const connectButtons = document.querySelectorAll(".btn-connect-toggle");
        connectButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-outline")) {
                    btn.classList.remove("btn-outline");
                    btn.classList.add("btn-primary");
                    btn.textContent = "Connected ✓";
                } else {
                    btn.classList.remove("btn-primary");
                    btn.classList.add("btn-outline");
                    btn.textContent = "Connect";
                }
            });
        });
    }

    // Events Page Setup
    function setupEventsPage() {
        const eventsContainer = document.querySelector("[data-testid='events-grid']");
        if (!eventsContainer) return;

        const state = loadState();
        let currentFilter = "all";
        let searchQuery = "";

        const createEventModal = document.querySelector("#createEventModal");
        const createEventBtn = document.querySelector("[data-testid='create-event-btn']");
        const closeEventModal = document.querySelector("[data-testid='close-event-modal']");
        const eventForm = document.querySelector("#eventForm");
        const searchInput = document.querySelector("[data-testid='event-search']");
        const filterPills = document.querySelectorAll(".filter-pills .pill-btn");

        function getCategoryClass(category) {
            const cat = String(category || "").toLowerCase();
            if (cat.includes("tech")) return "category-tech";
            if (cat.includes("cult")) return "category-cultural";
            if (cat.includes("sport")) return "category-sports";
            if (cat.includes("acad")) return "category-academic";
            return "category-tech";
        }

        function renderEvents() {
            eventsContainer.innerHTML = "";
            const filtered = state.events.filter((ev) => {
                const matchesCategory =
                    currentFilter === "all" || ev.category.toLowerCase() === currentFilter.toLowerCase();
                const matchesSearch =
                    !searchQuery ||
                    ev.title.toLowerCase().includes(searchQuery) ||
                    ev.description.toLowerCase().includes(searchQuery) ||
                    ev.location.toLowerCase().includes(searchQuery);
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                eventsContainer.innerHTML = `<div class="card" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No events found matching your search.</div>`;
                return;
            }

            filtered.forEach((ev) => {
                const card = document.createElement("div");
                card.className = "card event-card";
                card.dataset.eventId = ev.id;
                card.innerHTML = `
                    <div>
                        <div class="event-card-header">
                            <div class="event-date-badge">${ev.date}</div>
                            <span class="event-category-badge ${getCategoryClass(ev.category)}">${ev.category}</span>
                        </div>
                        <h3 class="event-title">${ev.title}</h3>
                        <div class="event-meta">
                            <span>🕒 ${ev.time}</span>
                            <span>📍 ${ev.location}</span>
                            <span>👤 Host: ${ev.organizer}</span>
                        </div>
                        <p class="event-desc">${ev.description}</p>
                    </div>
                    <div class="event-footer">
                        <span class="attendee-count">👥 <strong class="count-num">${ev.attendees || 0}</strong> attending</span>
                        <button class="btn btn-sm ${ev.registered ? "btn-success" : "btn-primary"} rsvp-btn" data-testid="register-event-btn">
                            ${ev.registered ? "Registered ✓" : "RSVP Now"}
                        </button>
                    </div>
                `;

                const rsvpBtn = card.querySelector(".rsvp-btn");
                const countNum = card.querySelector(".count-num");
                rsvpBtn.addEventListener("click", () => {
                    const result = toggleEventRegistration(ev.id, state.events);
                    if (result.success) {
                        saveState(state);
                        if (result.event.registered) {
                            rsvpBtn.className = "btn btn-sm btn-success rsvp-btn";
                            rsvpBtn.textContent = "Registered ✓";
                            showMessage(`Registered for ${result.event.title}!`, "success");
                        } else {
                            rsvpBtn.className = "btn btn-sm btn-primary rsvp-btn";
                            rsvpBtn.textContent = "RSVP Now";
                            showMessage(`Cancelled registration for ${result.event.title}.`, "info");
                        }
                        countNum.textContent = result.event.attendees;
                    }
                });

                eventsContainer.appendChild(card);
            });
        }

        filterPills.forEach((pill) => {
            pill.addEventListener("click", () => {
                filterPills.forEach((p) => p.classList.remove("active"));
                pill.classList.add("active");
                currentFilter = pill.dataset.category || "all";
                renderEvents();
            });
        });

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                renderEvents();
            });
        }

        if (createEventBtn && createEventModal) {
            createEventBtn.addEventListener("click", () => {
                createEventModal.style.display = "block";
            });
        }

        if (closeEventModal && createEventModal) {
            closeEventModal.addEventListener("click", () => {
                createEventModal.style.display = "none";
            });
        }

        if (eventForm && createEventModal) {
            eventForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const res = createEvent(
                    {
                        title: eventForm.eventTitle.value,
                        date: eventForm.eventDate.value,
                        time: eventForm.eventTime.value,
                        location: eventForm.eventLocation.value,
                        category: eventForm.eventCategory.value,
                        description: eventForm.eventDescription.value,
                        organizer: currentUser(state).name,
                    },
                    state.events
                );

                if (!res.success) {
                    showMessage(res.error, "error");
                    return;
                }

                saveState(state);
                renderEvents();
                createEventModal.style.display = "none";
                eventForm.reset();
                showMessage("New event created and registered successfully!", "success");
            });
        }

        renderEvents();
    }

    // Groups Page Setup
    function setupGroupsPage() {
        const groupsContainer = document.querySelector("[data-testid='groups-grid']");
        if (!groupsContainer) return;

        const state = loadState();
        let currentFilter = "all";
        let searchQuery = "";

        const createGroupModal = document.querySelector("#createGroupModal");
        const createGroupBtn = document.querySelector("[data-testid='create-group-btn']");
        const closeGroupModal = document.querySelector("[data-testid='close-group-modal']");
        const groupForm = document.querySelector("#groupForm");
        const searchInput = document.querySelector("[data-testid='group-search']");
        const filterPills = document.querySelectorAll(".filter-pills .pill-btn");

        function renderGroups() {
            groupsContainer.innerHTML = "";
            const filtered = state.groups.filter((g) => {
                const matchesCategory =
                    currentFilter === "all" || g.category.toLowerCase() === currentFilter.toLowerCase();
                const matchesSearch =
                    !searchQuery ||
                    g.name.toLowerCase().includes(searchQuery) ||
                    g.description.toLowerCase().includes(searchQuery);
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                groupsContainer.innerHTML = `<div class="card" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No clubs found matching your search.</div>`;
                return;
            }

            filtered.forEach((g) => {
                const card = document.createElement("div");
                card.className = "card group-card";
                card.dataset.groupId = g.id;

                const initials = g.name
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase();

                card.innerHTML = `
                    <div>
                        <div class="group-header">
                            <div class="group-icon">${initials}</div>
                            <div class="group-info">
                                <h3>${g.name}</h3>
                                <span class="badge">${g.category}</span>
                            </div>
                        </div>
                        <p class="group-desc">${g.description}</p>
                        <div class="group-schedule">
                            <span>📅 Meetups: <strong>${g.meetingTime}</strong></span><br>
                            <span>👤 Lead: <strong>${g.lead}</strong></span>
                        </div>
                    </div>
                    <div class="group-footer">
                        <span class="attendee-count">👥 <strong class="member-count">${g.members || 0}</strong> members</span>
                        <button class="btn btn-sm ${g.joined ? "btn-success" : "btn-outline"} join-btn" data-testid="join-group-btn">
                            ${g.joined ? "Joined ✓" : "Join Club"}
                        </button>
                    </div>
                `;

                const joinBtn = card.querySelector(".join-btn");
                const countEl = card.querySelector(".member-count");
                joinBtn.addEventListener("click", () => {
                    const result = toggleGroupMembership(g.id, state.groups);
                    if (result.success) {
                        saveState(state);
                        if (result.group.joined) {
                            joinBtn.className = "btn btn-sm btn-success join-btn";
                            joinBtn.textContent = "Joined ✓";
                            showMessage(`Joined ${result.group.name}!`, "success");
                        } else {
                            joinBtn.className = "btn btn-sm btn-outline join-btn";
                            joinBtn.textContent = "Join Club";
                            showMessage(`Left ${result.group.name}.`, "info");
                        }
                        countEl.textContent = result.group.members;
                    }
                });

                groupsContainer.appendChild(card);
            });
        }

        filterPills.forEach((pill) => {
            pill.addEventListener("click", () => {
                filterPills.forEach((p) => p.classList.remove("active"));
                pill.classList.add("active");
                currentFilter = pill.dataset.category || "all";
                renderGroups();
            });
        });

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                renderGroups();
            });
        }

        if (createGroupBtn && createGroupModal) {
            createGroupBtn.addEventListener("click", () => {
                createGroupModal.style.display = "block";
            });
        }

        if (closeGroupModal && createGroupModal) {
            closeGroupModal.addEventListener("click", () => {
                createGroupModal.style.display = "none";
            });
        }

        if (groupForm && createGroupModal) {
            groupForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const res = createGroup(
                    {
                        name: groupForm.groupName.value,
                        category: groupForm.groupCategory.value,
                        description: groupForm.groupDescription.value,
                        meetingTime: groupForm.groupMeeting.value,
                        lead: currentUser(state).name,
                    },
                    state.groups
                );

                if (!res.success) {
                    showMessage(res.error, "error");
                    return;
                }

                saveState(state);
                renderGroups();
                createGroupModal.style.display = "none";
                groupForm.reset();
                showMessage("New student club created successfully!", "success");
            });
        }

        renderGroups();
    }

    // Resources Page Setup
    function setupResourcesPage() {
        const resourcesContainer = document.querySelector("[data-testid='resources-grid']");
        if (!resourcesContainer) return;

        const state = loadState();
        let currentFilter = "all";
        let searchQuery = "";
        let selectedResourceId = null;

        const bookModal = document.querySelector("#bookResourceModal");
        const closeBookModal = document.querySelector("[data-testid='close-book-modal']");
        const bookForm = document.querySelector("#bookForm");

        const requestModal = document.querySelector("#requestResourceModal");
        const requestBtn = document.querySelector("[data-testid='request-resource-btn']");
        const closeRequestModal = document.querySelector("[data-testid='close-request-modal']");
        const requestForm = document.querySelector("#requestForm");

        const searchInput = document.querySelector("[data-testid='resource-search']");
        const filterPills = document.querySelectorAll(".filter-pills .pill-btn");

        function renderResources() {
            resourcesContainer.innerHTML = "";
            const filtered = state.resources.filter((r) => {
                const matchesCategory =
                    currentFilter === "all" || r.category.toLowerCase() === currentFilter.toLowerCase();
                const matchesSearch =
                    !searchQuery ||
                    r.name.toLowerCase().includes(searchQuery) ||
                    r.description.toLowerCase().includes(searchQuery) ||
                    r.location.toLowerCase().includes(searchQuery);
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                resourcesContainer.innerHTML = `<div class="card" style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">No resources found matching your search.</div>`;
                return;
            }

            filtered.forEach((r) => {
                const card = document.createElement("div");
                card.className = "card resource-card";
                card.dataset.resourceId = r.id;

                const isAvailable = r.status === "Available";
                const isBookedByMe = r.bookedBy === currentUser(state).name;

                card.innerHTML = `
                    <div>
                        <div class="resource-header">
                            <span class="badge">${r.category}</span>
                            <span class="status-badge ${isAvailable ? "available" : "reserved"}">
                                ${r.status}
                            </span>
                        </div>
                        <h3 class="resource-title">${r.name}</h3>
                        <p class="resource-location">📍 Location: <strong>${r.location}</strong></p>
                        <p class="resource-desc">${r.description}</p>
                        ${
                            !isAvailable && r.bookingSlot
                                ? `<div class="group-schedule"><strong>Reserved:</strong> ${r.bookingSlot} (${r.bookedBy})</div>`
                                : ""
                        }
                    </div>
                    <div class="resource-footer">
                        <span>🏷️ Campus Inventory</span>
                        ${
                            isAvailable
                                ? `<button class="btn btn-sm btn-primary book-trigger-btn" data-testid="book-resource-btn">Book Resource</button>`
                                : isBookedByMe
                                ? `<button class="btn btn-sm btn-secondary cancel-book-btn" data-testid="cancel-booking-btn">Release Booking</button>`
                                : `<button class="btn btn-sm btn-secondary" disabled>Reserved</button>`
                        }
                    </div>
                `;

                const bookBtn = card.querySelector(".book-trigger-btn");
                if (bookBtn) {
                    bookBtn.addEventListener("click", () => {
                        selectedResourceId = r.id;
                        const modalTitle = document.querySelector("#bookResourceName");
                        if (modalTitle) modalTitle.textContent = r.name;
                        bookModal.style.display = "block";
                    });
                }

                const cancelBtn = card.querySelector(".cancel-book-btn");
                if (cancelBtn) {
                    cancelBtn.addEventListener("click", () => {
                        const res = cancelResourceBooking(r.id, state.resources);
                        if (res.success) {
                            saveState(state);
                            renderResources();
                            showMessage(`Released reservation for ${r.name}.`, "info");
                        }
                    });
                }

                resourcesContainer.appendChild(card);
            });
        }

        filterPills.forEach((pill) => {
            pill.addEventListener("click", () => {
                filterPills.forEach((p) => p.classList.remove("active"));
                pill.classList.add("active");
                currentFilter = pill.dataset.category || "all";
                renderResources();
            });
        });

        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                renderResources();
            });
        }

        if (closeBookModal && bookModal) {
            closeBookModal.addEventListener("click", () => {
                bookModal.style.display = "none";
            });
        }

        if (bookForm && bookModal) {
            bookForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const slotText = `${bookForm.bookDate.value}, ${bookForm.bookSlot.value} (Purpose: ${bookForm.bookPurpose.value})`;
                const user = currentUser(state);
                const res = bookResource(selectedResourceId, { slot: slotText }, state.resources, user.name);

                if (!res.success) {
                    showMessage(res.error, "error");
                    return;
                }

                saveState(state);
                renderResources();
                bookModal.style.display = "none";
                bookForm.reset();
                showMessage(`Successfully reserved ${res.resource.name}!`, "success");
            });
        }

        if (requestBtn && requestModal) {
            requestBtn.addEventListener("click", () => {
                requestModal.style.display = "block";
            });
        }

        if (closeRequestModal && requestModal) {
            closeRequestModal.addEventListener("click", () => {
                requestModal.style.display = "none";
            });
        }

        if (requestForm && requestModal) {
            requestForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const newRes = {
                    id: Date.now(),
                    name: requestForm.reqName.value,
                    category: requestForm.reqCategory.value,
                    location: requestForm.reqLocation.value,
                    status: "Available",
                    description: requestForm.reqDesc.value,
                    bookedBy: null,
                    bookingSlot: null,
                };
                state.resources.push(newRes);
                saveState(state);
                renderResources();
                requestModal.style.display = "none";
                requestForm.reset();
                showMessage("New equipment added to campus resource directory!", "success");
            });
        }

        renderResources();
    }

    function initPage() {
        if (typeof document === "undefined") return;
        setupAuthPage();
        setupDashboardPage();
        setupProfilePage();
        setupEventsPage();
        setupGroupsPage();
        setupResourcesPage();
    }

    return {
        demoUsers,
        demoPosts,
        demoEvents,
        demoGroups,
        demoResources,
        validateLogin,
        authenticateUser,
        registerUser,
        createPost,
        toggleLikePost,
        addCommentToPost,
        updateProfile,
        toggleEventRegistration,
        createEvent,
        toggleGroupMembership,
        createGroup,
        bookResource,
        cancelResourceBooking,
        resetPassword,
        loadState,
        saveState,
        initPage,
    };
})();

if (typeof window !== "undefined") {
    window.CampusConnect = CampusConnect;
    document.addEventListener("DOMContentLoaded", CampusConnect.initPage);
}

if (typeof module !== "undefined") {
    module.exports = CampusConnect;
}

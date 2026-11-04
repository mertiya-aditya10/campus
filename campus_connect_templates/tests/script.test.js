const assert = require("assert");
const CampusConnect = require("../script.js");

const tests = [];

function test(name, callback) {
    tests.push({ name, callback });
}

test("validateLogin accepts a valid campus email and strong password", () => {
    const result = CampusConnect.validateLogin("student@campus.edu", "password123");
    assert.strictEqual(result.valid, true);
    assert.deepStrictEqual(result.errors, {});
});

test("validateLogin rejects invalid email and short password", () => {
    const result = CampusConnect.validateLogin("student-campus", "short");
    assert.strictEqual(result.valid, false);
    assert.strictEqual(result.errors.email, "Please enter a valid email address.");
    assert.strictEqual(result.errors.password, "Password must be at least 8 characters.");
});

test("authenticateUser accepts known mock credentials", () => {
    const result = CampusConnect.authenticateUser("student@campus.edu", "password123");
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.user.name, "Student Name");
});

test("registerUser creates a new user when data is valid", () => {
    const users = [...CampusConnect.demoUsers];
    const result = CampusConnect.registerUser("New Student", "new@campus.edu", "newpass123", users);
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.user.email, "new@campus.edu");
    assert.strictEqual(result.user.bio, "New CampusConnect member.");
});

test("registerUser rejects duplicate emails", () => {
    const result = CampusConnect.registerUser(
        "Duplicate Student",
        "student@campus.edu",
        "password123",
        CampusConnect.demoUsers
    );
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.errors.email, "Email is already registered.");
});

test("createPost trims content and builds a dashboard post", () => {
    const result = CampusConnect.createPost("  Hello CampusConnect!  ", "Student Name");
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.post.author, "Student Name");
    assert.strictEqual(result.post.content, "Hello CampusConnect!");
    assert.strictEqual(result.post.likes, 0);
});

test("createPost rejects empty or very short posts", () => {
    const result = CampusConnect.createPost("hi");
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.error, "Post content must be at least 3 characters.");
});

test("toggleLikePost increments like count for a post", () => {
    const posts = [{ id: 10, author: "Author", content: "Post content", likes: 2 }];
    const result = CampusConnect.toggleLikePost(10, posts);
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.post.likes, 3);
});

test("addCommentToPost adds new comment to post", () => {
    const posts = [{ id: 20, author: "Author", content: "Post content", comments: [] }];
    const result = CampusConnect.addCommentToPost(20, "Great post!", "Peer Student", posts);
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.comment.text, "Great post!");
    assert.strictEqual(result.post.comments.length, 1);
});

test("updateProfile saves valid profile changes", () => {
    const profile = {
        name: "Student Name",
        bio: "Original student bio.",
    };
    const result = CampusConnect.updateProfile(profile, {
        name: "Updated Student",
        bio: "Updated profile bio for the SE lab.",
    });
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.profile.name, "Updated Student");
    assert.strictEqual(result.profile.bio, "Updated profile bio for the SE lab.");
});

test("updateProfile rejects missing name and short bio", () => {
    const result = CampusConnect.updateProfile(
        { name: "Student Name", bio: "Original student bio." },
        { name: "", bio: "short" }
    );
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.errors.name, "Name is required.");
});

test("toggleEventRegistration toggles registered status and attendee count", () => {
    const events = [
        { id: 1, title: "Test Event", registered: false, attendees: 10 }
    ];
    const regResult = CampusConnect.toggleEventRegistration(1, events);
    assert.strictEqual(regResult.success, true);
    assert.strictEqual(regResult.event.registered, true);
    assert.strictEqual(regResult.event.attendees, 11);

    const unregResult = CampusConnect.toggleEventRegistration(1, events);
    assert.strictEqual(unregResult.success, true);
    assert.strictEqual(unregResult.event.registered, false);
    assert.strictEqual(unregResult.event.attendees, 10);
});

test("createEvent creates and prepends a new campus event", () => {
    const events = [];
    const result = CampusConnect.createEvent(
        {
            title: "Web Dev Workshop",
            date: "Oct 25, 2026",
            time: "10:00 AM",
            location: "Room 101",
            category: "Tech",
            description: "Learn modern frontend frameworks.",
        },
        events
    );
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.event.title, "Web Dev Workshop");
    assert.strictEqual(events.length, 1);
});

test("toggleGroupMembership toggles joined state and member count", () => {
    const groups = [
        { id: 1, name: "Robotics Club", joined: false, members: 20 }
    ];
    const joinResult = CampusConnect.toggleGroupMembership(1, groups);
    assert.strictEqual(joinResult.success, true);
    assert.strictEqual(joinResult.group.joined, true);
    assert.strictEqual(joinResult.group.members, 21);
});

test("createGroup registers a new student club", () => {
    const groups = [];
    const result = CampusConnect.createGroup(
        {
            name: "Cybersecurity Club",
            category: "Technical",
            description: "CTF competitions and penetration testing discussions.",
            meetingTime: "Thursdays @ 6 PM",
            lead: "Student Lead",
        },
        groups
    );
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.group.name, "Cybersecurity Club");
    assert.strictEqual(groups.length, 1);
});

test("bookResource reserves an available campus resource", () => {
    const resources = [
        { id: 1, name: "3D Printer", status: "Available", bookedBy: null }
    ];
    const result = CampusConnect.bookResource(1, { slot: "10 AM - 12 PM" }, resources, "Student Name");
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.resource.status, "Reserved");
    assert.strictEqual(result.resource.bookedBy, "Student Name");
});

test("bookResource rejects reservation if already reserved", () => {
    const resources = [
        { id: 1, name: "3D Printer", status: "Reserved", bookedBy: "Other Student" }
    ];
    const result = CampusConnect.bookResource(1, { slot: "10 AM - 12 PM" }, resources, "Student Name");
    assert.strictEqual(result.success, false);
    assert.strictEqual(result.error, "Resource is already reserved.");
});

test("cancelResourceBooking frees up a reserved resource", () => {
    const resources = [
        { id: 1, name: "GPU Rig", status: "Reserved", bookedBy: "Student Name" }
    ];
    const result = CampusConnect.cancelResourceBooking(1, resources);
    assert.strictEqual(result.success, true);
    assert.strictEqual(result.resource.status, "Available");
    assert.strictEqual(result.resource.bookedBy, null);
});

test("resetPassword validates campus email for password reset", () => {
    const users = [{ email: "student@campus.edu", name: "Student" }];
    const validResult = CampusConnect.resetPassword("student@campus.edu", users);
    assert.strictEqual(validResult.success, true);

    const invalidResult = CampusConnect.resetPassword("unknown@campus.edu", users);
    assert.strictEqual(invalidResult.success, false);
});

let passed = 0;

for (const { name, callback } of tests) {
    try {
        callback();
        passed += 1;
        console.log(`PASS ${name}`);
    } catch (error) {
        console.error(`FAIL ${name}`);
        console.error(error);
        process.exitCode = 1;
    }
}

console.log(`${passed}/${tests.length} tests passed.`);

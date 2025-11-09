// Select the logout button
const logoutBtn = document.getElementById("logoutBtn");

// Logout button click
logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Are you sure you want to log out?")) {
        // Clear only user-related data
        localStorage.removeItem("email");
        alert("Logged out successfully!");
        window.location.href = "loginform.html";
    }
});

// Prevent going back after logout
window.addEventListener("pageshow", function (event) {
    const email = localStorage.getItem("email");
    if (!email) {
        // Redirect if not logged in
        window.location.href = "loginform.html";
    }
});

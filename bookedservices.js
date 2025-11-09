document.addEventListener("DOMContentLoaded", function () {
    // ========================
    // Cancel Appointment Logic
    // ========================
    const cancelButtons = document.querySelectorAll(".cancel-btn");

    cancelButtons.forEach(button => {
        button.addEventListener("click", function () {
            const row = button.closest("tr");
            const statusCell = row.querySelector(".status");

            // Update status text and class
            statusCell.textContent = "Cancelled";
            statusCell.className = "status cancelled"; // for styling

            // Remove the cancel button
            button.remove();
        });
    });

    // Optional CSS styling for cancelled status:
    // .status.cancelled { color: red; font-weight: bold; }

    // ========================
    // Logout Button Logic
    // ========================
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault();
            if (confirm("Are you sure you want to log out?")) {
                localStorage.clear(); // Clears all saved data
                alert("Logged out successfully!");
                window.location.href = "loginform.html";
            }
        });
    }

    // ========================
    // Prevent Back Navigation After Logout
    // ========================
    window.addEventListener("pageshow", function () {
        const email = localStorage.getItem("email");
        if (!email) {
            alert("Access denied. Please log in first.");
            window.location.href = "loginform.html";
        }
    });
});
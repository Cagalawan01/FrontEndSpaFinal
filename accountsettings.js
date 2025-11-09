document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const form = document.querySelector(".account");
    const displayNameInput = form.querySelector('input[placeholder="Display Name"]');
    const emailInput = form.querySelector('input[type="email"]');
    const phoneInput = form.querySelector('input[placeholder="Phone Number"]');
    const btnSave = document.querySelector(".btn-save");
    const btnCancel = document.querySelector(".btn-cancel");

    const profileTitle = document.querySelector(".profile-title");
    const profileEmail = document.querySelector(".profile-email");
    const logoutBtn = document.querySelector("#logoutBtn"); //  Use unique ID selector

    // Restrict phone input to numbers only and limit to 11 digits
    phoneInput.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (this.value.length > 11) {
            this.value = this.value.slice(0, 11); // Limit to 11 digits
        }
    });

    // Load saved data
    function loadData() {
        const savedDisplayName = localStorage.getItem("displayName");
        const savedEmail = localStorage.getItem("email");
        const savedPhone = localStorage.getItem("phone");

        if (savedDisplayName) {
            displayNameInput.value = savedDisplayName;
            profileTitle.textContent = savedDisplayName;
        }
        if (savedEmail) {
            emailInput.value = savedEmail;
            profileEmail.textContent = savedEmail;
        }
        if (savedPhone) phoneInput.value = savedPhone;
    }

    loadData();

    // Save data
    btnSave.addEventListener("click", function (saveinfo) {
        saveinfo.preventDefault();

        const displayName = displayNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!displayName || !email || !phone) {
            alert("Please fill in all fields before saving.");
            return;
        }

        if (phone.length !== 11) {
            alert("Phone number must be 11 digits long.");
            return;
        }

        // Save to localStorage
        localStorage.setItem("displayName", displayName);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);

        // Update displayed profile info
        profileTitle.textContent = displayName;
        profileEmail.textContent = email;

        alert("Account details saved successfully!");
    });

    // Cancel changes
    btnCancel.addEventListener("click", function (cancelinfo) {
        cancelinfo.preventDefault();
        if (confirm("Discard changes?")) {
            loadData(); // Reload previously saved data
        }
    });

        //logout Button
        logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (confirm("Are you sure you want to log out?")) {
            localStorage.clear();
            alert("Logged out successfully!");
            window.location.href = "loginform.html";
        }
    });

        // 🚫 Prevent going back after logout
        window.addEventListener("pageshow", function (event) {
            const email = localStorage.getItem("email");
            if (!email) {
                alert("Access denied. Please log in first.");
                window.location.href = "loginform.html";
            }
        });
    });

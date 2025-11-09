document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    // Example existing users (for simulation)
    const existingAccounts = [
        { username: "jeff123", email: "jeff@example.com" },
        { username: "admin", email: "admin@naturespa.com" },
        { username: "maria", email: "maria@gmail.com" }
    ];

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevent default form submission

        // === Account Availability Check ===
        const usernameExists = existingAccounts.some(
            (account) => account.username.toLowerCase() === username.value.trim().toLowerCase()
        );
        if (usernameExists) {
            alert("Username is already taken. Please choose another one.");
            username.focus();
            return;
        }

        const emailExists = existingAccounts.some(
            (account) => account.email.toLowerCase() === email.value.trim().toLowerCase()
        );
        if (emailExists) {
            alert("Email is already registered. Please use a different email.");
            email.focus();
            return;
        }

        // === Simple Email Validation ===
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        // === Simple Phone Validation ===
        const phonePattern = /^[0-9]{11}$/;
        if (!phone.value.match(phonePattern)) {
            alert("Phone number must be 11 digits.");
            phone.focus();
            return;
        }

        // === Password Minimum Length Validation ===
        if (password.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            password.focus();
            return;
        }

        // === If all validations pass ===
        alert("Registration successful!");
        form.reset(); // reset form fields
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (formstop) {
        formstop.preventDefault(); // stop form from submitting for now

        const fullName = form.querySelector('input[placeholder="Christian Jeff Cagalawan"]').value.trim();
        const email = form.querySelector('input[placeholder="exampleemail@gmail.com"]').value.trim();
        const address = form.querySelector('input[placeholder="Room-Street-Locality"]').value.trim();
        const city = form.querySelector('input[placeholder="Cagayan de Oro City"]').value.trim();
        const zip = form.querySelector('input[placeholder="9000"]').value.trim();
        const cardName = form.querySelector('input[placeholder="M. Cagalawan Christian"]').value.trim();
        const cardNumber = form.querySelector('input[placeholder="0000-0000-0000-0000"]').value.trim();
        const expMonth = form.querySelector('input[placeholder="August"]').value.trim();
        const expYear = form.querySelector('input[placeholder="2025"]').value.trim();
        const cvv = form.querySelector('input[placeholder="123"]').value.trim();

        // Email validation pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Credit card number (digits only, 16)
        const cardPattern = /^[0-9]{16}$/;
        // CVV (3 digits)
        const cvvPattern = /^[0-9]{3}$/;
        // ZIP (numbers only)
        const zipPattern = /^[0-9]+$/;

        if (!fullName || !email || !address || !city || !zip || !cardName || !cardNumber || !expMonth || !expYear || !cvv) {
            alert("⚠️ Please fill in all required fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("⚠️ Please enter a valid email address.");
            return;
        }

        // Remove dashes in card number before validation
        const cleanCardNumber = cardNumber.replace(/-/g, "");
        if (!cardPattern.test(cleanCardNumber)) {
            alert("⚠️ Please enter a valid 16-digit card number (numbers only).");
            return;
        }

        if (!zipPattern.test(zip)) {
            alert("⚠️ ZIP code should contain only numbers.");
            return;
        }

        if (!cvvPattern.test(cvv)) {
            alert("⚠️ CVV should be a 3-digit number.");
            return;
        }

        // Everything is valid
        alert("✅ Payment submitted successfully! Thank you, " + fullName + ".");

        // Optionally, clear the form
        form.reset();
    });
});
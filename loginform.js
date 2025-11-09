document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    //predefined account 
    const validAccount = {
        username: "kohhi",
        password: "12345"
    };

    loginForm.addEventListener("submit", function (data) {
        data.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        //Check credentials
        if (username === validAccount.username && password === validAccount.password) {
            alert("Login successful!");

            //Save session (so user stays logged in)
            localStorage.setItem("email", username);

            //Redirect to your main or account page
            window.location.href = "MainPage.html";

        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

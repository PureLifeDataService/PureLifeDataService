document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("side-menu").style.right = "0";
});

document.getElementById("close-menu").addEventListener("click", () => {
    document.getElementById("side-menu").style.right = "-250px";
});
// Sign-up Verification
document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signup-form");
    let verifyBtn = document.getElementById("verify-btn");
    let signupBtn = document.getElementById("signup-btn");

    if (signupForm) {
        verifyBtn.addEventListener("click", function () {
            let username = document.getElementById("username").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm-password").value;

            if (!username || !phone || !email || !password || !confirmPassword) {
                alert("All fields are required.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let userExists = users.some(user => user.username === username || user.phone === phone || user.email === email);

            if (userExists) {
                alert("Username, phone, or email is already taken.");
            } else {
                alert("Verification successful! You can now sign up.");
                signupBtn.disabled = false;
            }
        });

        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push({ username, phone, email, password });

            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("registeredUser", username);

            alert("Registration successful! Redirecting to login...");
            window.location.href = "login.html";
        });
    }
});

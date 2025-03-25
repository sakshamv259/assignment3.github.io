$(document).ready(function () {
    $("#loginForm").on("submit", function (event) {
        event.preventDefault();

        const username = $("#username").val().trim();
        const password = $("#password").val().trim();

        // Dummy authentication (Replace with real authentication logic)
        if (username === "admin" && password === "password123") {
            localStorage.setItem("username", username);
            window.location.href = "index.html"; // Redirect after login
        } else {
            $("#loginError").fadeIn();
            setTimeout(() => {
                $("#loginError").fadeOut();
            }, 3000);
        }
    });
});

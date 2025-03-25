$(document).ready(function () {
    $("#loginForm").on("submit", function (event) {
        event.preventDefault();
        const username = $("#username").val();
        const password = $("#password").val();
        if (username === "admin" && password === "password123") {
            localStorage.setItem("username", username);
            window.location.href = "index.html";
        }
        else {
            $("#loginError").show();
        }
    });
});

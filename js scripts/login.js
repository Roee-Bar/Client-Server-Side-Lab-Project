function validateLogin() {
    var userEmail = document.getElementById('userEmail').value;
    var password = document.getElementById('password').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        alert("Invalid Email Format");
        return false;
    }

    // Password validation
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?.,><]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Invalid Password Format\n\nPassword must:\n- Be at least 6 characters\n- Include an Uppercase character\n- Include a Lowercase character\n- Include a Number\n- Include a Special Character");
        return false;
    }

    // If validation passed, show input in alert
    alert("Login Successful\n\nEmail: " + userEmail + "\nPassword: " + password);
    return true;
}

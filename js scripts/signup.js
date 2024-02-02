function validateSignup() {
    var signupEmail = document.getElementById('signupEmail').value;
    var signupPassword = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Email validation (using the same regex as the login page)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
        alert("Invalid Email Format");
        return false;
    }

    // Password validation (using the same regex as the login page)
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?.,><]).{6,}$/;
    if (!passwordRegex.test(signupPassword)) {
        alert("Invalid Password Format\n\nPassword must:\n- Be at least 6 characters\n- Include an Uppercase character\n- Include a Lowercase character\n- Include a Number\n- Include a Special Character");
        return false;
    }

    // Password and Confirm Password match validation
    if (signupPassword !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    // If validation passed, show input in alert
    alert("Account Created Successfully\n\nEmail: " + signupEmail + "\nPassword: " + signupPassword);
    return true;
}

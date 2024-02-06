function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?.,><]).{6,}$/;
    return passwordRegex.test(password);
}

function validatePasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

function validateSignup() {
    var signupEmail = document.getElementById('signupEmail').value;
    var signupPassword = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (!validateEmail(signupEmail)) {
        alert("Invalid Email Format");
        return false;
    }

    if (!validatePassword(signupPassword)) {
        alert("Invalid Password Format\n\nPassword must:\n- Be at least 6 characters\n- Include an Uppercase character\n- Include a Lowercase character\n- Include a Number\n- Include a Special Character");
        return false;
    }

    if (!validatePasswordMatch(signupPassword, confirmPassword)) {
        alert("Password and Confirm Password do not match");
        return false;
    }

    alert("Account Created Successfully\n\nEmail: " + signupEmail + "\nPassword: " + signupPassword);
    return true;
}

module.exports = {
    validateSignup,
    validateEmail,
    validatePassword,
    validatePasswordMatch
  };

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\\|[\]{};:/?.,><]).{6,}$/;
    return passwordRegex.test(password);
}

function validateLogin() {
    var userEmail = document.getElementById('userEmail').value;
    var password = document.getElementById('password').value;

    if (!validateEmail(userEmail)) {
        alert("Invalid Email Format");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Invalid Password Format\n\nPassword must:\n- Be at least 6 characters\n- Include an Uppercase character\n- Include a Lowercase character\n- Include a Number\n- Include a Special Character");
        return false;
    }

    alert("Login Successful\n\nEmail: " + userEmail + "\nPassword: " + password);
    return true;
}

module.exports = { validateEmail, validatePassword };


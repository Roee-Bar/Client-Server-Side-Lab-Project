function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateContact() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;

    if (!name || !email || !subject) {
        alert("All fields are mandatory");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid Email Format");
        return false;
    }

    alert("Contact Form Submitted\n\nName: " + name + "\nEmail: " + email + "\nSubject: " + subject);
    return true;
}

function contactSupport() {
    // You can add functionality to open an email application with the required details.
    alert("Opening email application for support...");
}

module.exports = {
    validateContact,
    validateEmail,
    contactSupport
  };
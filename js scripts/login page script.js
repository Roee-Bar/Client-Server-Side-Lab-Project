function InputCheck(){
    userEmail = document.getElementById("userEmail");
    password = document.getElementById("password");

    emailError = UserEmailCheck(userEmail);
    passwordError = PasswordCheck(password);

    if(emailError || passwordError){
        showUserErrorAndRules(emailError, passwordError);
        return;
    }
}

function UserEmailCheck(userEmail){
    //if email not valid return the user error

}

function PasswordCheck(password){
    //if password not valid return the user error
}

function showUserErrorAndRules(emailError, passwordError){
    message = ""
    validationsRules =
        "\nEmail field should contain only email address\n
        Password field\:\n
        Minimum 6 Characters\n
        Must Include an Uppercase Character\n
        Must Include an Lowercase Character\n
        Must Include a number\n
        Must Include a Special Character (!, @, #, etc.).\n
        Supported special characters are: ! @ # $ % ^ & * ( ) - _ = + \ | [ ] { } ; : / ? . > <"

    if(emailError)
        message += emailError;
    if(passwordError)
        message += passwordError;

}
function validateForm() {
    return (isNameEmpty() &&
        emailValidate() &&
        confirmEmailValidate() &&
        genderValidate() &&
        phoneValidate());
}


function isNameEmpty() {
    var x = document.getElementById("First_Name").value;
    if (x == "") {
        document.getElementById('fname-error-msg').innerHTML = "Please Enter First Name";
        return false;
    }
    else {
        document.getElementById('fname-error-msg').innerHTML = " ";
        return true;
    }
}

function emailValidate() {
    var email = document.getElementById("Email_Id").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById('email-error-msg').innerHTML = "Not a valid e-mail address";
        return false;
    }
    else {
        document.getElementById('email-error-msg').innerHTML = " ";
        return true;
    }
}

function confirmEmailValidate() {
    var email = document.getElementById("Email_Id").value;
    var confirmEmail = document.getElementById("Confirm-Email_Id").value;
    if (confirmEmail != email) {
        document.getElementById('confirm-email-error-msg').innerHTML = "Please reconfirm the provided email address";
        return false;
    }
    else {
        document.getElementById('confirm-email-error-msg').innerHTML = " ";
        return true;
    }
}

function genderValidate() {
    var male = document.getElementById('Male').checked;
    var female = document.getElementById('Female').checked;
    if (male == false && female == false) {
        document.getElementById('gender').innerHTML = "Select one category in gender";
        return false;
    }
    else {
        document.getElementById('gender').innerHTML = " ";
        return true;
    }
}

function phoneValidate() {
    var phoneno = /^\d{10}$/;
    var y = document.getElementById("Mobile_Number").value;

    if (!y.match(phoneno)) {
        document.getElementById('mobile-number').innerHTML = "Not a valid Phone Number";
        return false;
    }
    else {
        document.getElementById('mobile-number').innerHTML = " ";
        return true;
    }
}




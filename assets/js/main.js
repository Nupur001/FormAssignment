function validateForm() {
    var Mail = document.forms["myform"]["email"].value;
    var Fname = document.forms["myform"]["first-name"].value;
    var Lname = document.forms["myform"]["last-name"].value;
    var Password = document.forms["myform"]["password"].value;
    console.log(Password);
    if (!( ValidateName(Fname) && ValidateName(Lname))) {
        alert("Kindly enter valid name");
        return false;
    }
    if (!ValidateEmail(Mail))
    {
        alert("Kindly enter valid email");
        return false;
    }
    if (!ValidatePassword(Password))
    {
        alert("Password should be digits only (atleast 8)");
        return false;
    }
    alert("Claimed Successfully!");
    return true;
}

    function ValidateEmail(mail) {
        var pattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        console.log(pattern.test(mail));
        return pattern.test(mail);
    }
    function ValidateName(name) {
        var pattern = new RegExp("^([^0-9]*)$");
        console.log(pattern.test(name));
        return pattern.test(name);
}
function ValidatePassword(password) {
    console.log(password);
    var pattern = new RegExp("^([0-9]{8}[0-9]*)$");
    return pattern.test(password);
}

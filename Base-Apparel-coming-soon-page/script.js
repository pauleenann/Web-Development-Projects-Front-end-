function validateForm(){
    let inputContainer = document.getElementsByClassName("input");
    let email = document.forms["baseApparelForm"]["email"].value;
    let err = document.getElementById('error-message');
    let emailTextBox = document.getElementsByTagName("input");

    let emailRegex = /@gmail\.com$/;

    err.style.display = "none";
    inputContainer[0].style.border = "none";

    if(email == "" || !emailRegex.test(email)){
        err.style.display = "block";
        emailTextBox[0].nextElementSibling.style.display = "block";
        inputContainer[0].style.border = "2px solid var(--Soft-Red)";
        return false
    }
}
let inputs = document.getElementsByClassName("input");
let inputBox = document.getElementsByTagName("input");
for(let i = 0; i < inputs.length; i++){
    inputBox[i].addEventListener("focus", function(){
        inputs[i].style.borderColor = "var(--Dark-Blue)";
    })
    inputBox[i].addEventListener("focusout", function(){
        inputs[i].style.borderColor = "var(--Grayish-Blue)";
    })
}


function validateForm(){
    let inputs = document.getElementsByClassName("input");
    let inputBox = document.getElementsByTagName("input");
    let arr = [
        document.forms["freetrial-form"]["fname"].value,
        document.forms["freetrial-form"]["lname"].value,
        document.forms["freetrial-form"]["email"].value,
        document.forms["freetrial-form"]["password"].value
    ];


    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ""){
            inputs[i].nextElementSibling.style.display = "block";
            inputBox[i].nextElementSibling.style.display = "block";
            inputs[i].style.borderColor = "var(--Red)"
            
        }
        else{
            inputs[i].nextElementSibling.style.display = "none";
            inputBox[i].nextElementSibling.style.display = "none";
            inputs[i].style.borderColor = "var(--Grayish-Blue)"
        }
    }
    console.log(arr[0]);
    return false
}

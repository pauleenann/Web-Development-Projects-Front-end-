document.getElementById('submit').addEventListener('click', function(event){
    event.preventDefault();

    let emailBox = document.getElementById('email');
    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.com$/;
    let emailError = document.getElementById('error');
    console.log(email);


    if(emailPattern.test(email)){
        console.log("correct email");
        document.getElementById('container').style.display ='none'; 
        document.getElementById('thankyou-page').style.display = 'block';
        document.getElementById('thankyou-page-email').innerHTML = email;
       
    }
    else{
        emailError.style.display = "block"; 
        emailBox.style.border = '1px solid var(--Tomato)';
        emailBox.style.background = 'var(--Tomato-error';
        emailBox.style.color = 'var(--Tomato)';
    }

    // document.getElementById('container').style.display ='none'; 

})
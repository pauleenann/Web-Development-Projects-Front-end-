const rates = [
    document.getElementById('rate1'),
    document.getElementById('rate2'),
    document.getElementById('rate3'),
    document.getElementById('rate4'),
    document.getElementById('rate5'),
];

let finalRate;

for(let i = 0; i < rates.length; i++){
    rates[i].addEventListener("click",function(){
        for(let i = 0; i < rates.length; i++){
            rates[i].style.backgroundColor = "hsla(240, 1%, 36%, 0.199)";
            rates[i].style.color = "var(--Light-Grey)";
        }
        rates[i].style.backgroundColor = "rgb(255, 102, 0)";
        rates[i].style.color = "var(--White)";

        finalRate = rates[i].innerHTML;
        console.log(finalRate);

        localStorage.setItem('finalrate', finalRate)
    })
}

function thankYouPage(){
    location.replace("thankyou.html");
}



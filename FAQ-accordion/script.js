let acc = document.getElementsByClassName('accordion');

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
    
        
        
    let panel = acc[i].nextElementSibling;
    let icon = document.getElementsByClassName('status');
    if(panel.style.display === "block"){
        
        panel.style.display = "none";
        icon[i].src = "assets/images/icon-plus.svg"
    }else{
        panel.style.display = "block";
        icon[i].src = "assets/images/icon-minus.svg"
    }
    })
}
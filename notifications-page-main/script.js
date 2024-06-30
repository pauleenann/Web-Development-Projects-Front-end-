const mark = document.getElementById('mark');

mark.addEventListener("click",()=>{
    const unreadIcon = document.querySelectorAll(".unread-icon");
    const unreadBox = document.querySelectorAll(".unread");
    const notifNum = document.getElementById("notif-num");
    notifNum.innerHTML = "0";
    // console.log(unreadBox[0])
    for(i=0; i<unreadBox.length; i++){
        unreadBox[i].style.backgroundColor = "var(--Very-light-grayish-blue)";
        unreadIcon[i].style.display = "none";
    }
})
$(document).ready(()=>{
    adviceGenerator();
})

document.getElementById('advice-randomizer').addEventListener('click',function(event){
    event.preventDefault()

    adviceGenerator()

});

function adviceGenerator(){
    var url = "https://api.adviceslip.com/advice";

    $.ajax(url,{success:(data)=>{
        data = JSON.parse(data)
        $(".advice-number").text(data.slip.id)
        $(".advice").text(data.slip.advice)
        console.log(data.slip.id)
        console.log(data.slip.advice)
    }, error:(error)=>{
        console.log("error")
    }})
}
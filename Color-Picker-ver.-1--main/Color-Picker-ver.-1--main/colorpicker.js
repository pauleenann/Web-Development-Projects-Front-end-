const colorName = ["Crimson","Deep Pink","OrangeRed","Gold","Thistle","SlateBlue","GreenYellow"];
const colorHex =["#DC143C","#FF1493","#FF4500","#FFD700","#D8BFD8","#6A5ACD","#ADFF2F"];

const mainElement = document.querySelector('main');
const hexText = document.getElementById('hex-color');
const colorText = document.getElementById('name-color');
const btn = document.getElementById('colorButton');

btn.addEventListener("click", function(){
    const randomIndex = randomColorIndex();
    const color = colorHex[randomIndex];

    mainElement.style.backgroundColor = color;
    hexText.textContent = color;
    colorText.textContent = colorName[randomIndex];

    hexText.style.color = '#fff';
    colorText.style.color = '#fff';
});

function randomColorIndex(){
    return Math.floor(Math.random() * colorHex.length);
}

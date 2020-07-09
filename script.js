let container = document.querySelector('.container');
let btnBckChanger = document.querySelector('.btn-color-changer');
let textContainer = document.querySelector('.text-container');

function changeColor(){
    let newHex = generateColor();
    container.style.backgroundColor = newHex;
    console.log(container.style.backgroundColor);
    textContainer.innerHTML = newHex;
}

function generateColor(){
    let hexColor = '';
    let hexValuesArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    
    for (let index = 0; index < 6; index++) {
        hexValue = randomIntFromInterval(0,15);
        hexColor += hexValuesArray[hexValue];
    }

    return '#' + hexColor;
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
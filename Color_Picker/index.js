let pageBackgroundConatiner = document.getElementById("bgContainer");
let button1Background = document.getElementById("button1");
let button2Background = document.getElementById("button2");
let button3Background = document.getElementById("button3");
let button4Background = document.getElementById("button4");
let HexCode = document.getElementById("spanBackground");
document.getElementById("spanBackground").style.color = "#49a6e9";


function changeBgToGreyAndUpdateText() {
    let updatePageBakgroundColor = "#e0e0e0";
    pageBackgroundConatiner.style.backgroundColor = updatePageBakgroundColor;
    button1Background.style.backgroundColor = "#e0e0e0";
    HexCode.textContent = "#e0e0e0";

}

function changeBgToGreenAndUpdateText() {
    let updatePageBakgroundColor = "#6fcf97";
    pageBackgroundConatiner.style.backgroundColor = updatePageBakgroundColor;
    button2Background.style.backgroundColor = "#6fcf97";
    HexCode.textContent = "#6fcf97";

}

function changeBgToBlueAndUpdateText() {
    let updatePageBakgroundColor = "#56ccf2";
    pageBackgroundConatiner.style.backgroundColor = updatePageBakgroundColor;
    button3Background.style.backgroundColor = "#56ccf2";
    HexCode.textContent = "#56ccf2";
}

function changeBgToPurpuleAndUpdateText() {
    let updatePageBakgroundColor = "#bb6bd9";
    pageBackgroundConatiner.style.backgroundColor = updatePageBakgroundColor;
    button4Background.style.backgroundColor = "#bb6bd9";
    HexCode.textContent = "#bb6bd9";
}
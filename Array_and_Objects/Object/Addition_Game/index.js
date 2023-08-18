let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");

let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function restartGame() {
    let firstRandomNumber = Math.random() * 100;
    let secondRandomNumber = Math.random() * 100;

    firstNumberElement.textContent = Math.ceil(firstRandomNumber);
    secondNumberElement.textContent = Math.ceil(secondRandomNumber);

    userInputElement.value = "";
    gameResultElement.textContent = "";
}
restartGame();


function checkResult() {
    let firstRandomInput = firstNumberElement.textContent;
    let secondRandomInput = secondNumberElement.textContent;

    let sumTwoRandomNumber = parseInt(firstRandomInput) + parseInt(secondRandomInput);
    let userInputSum = parseInt(userInputElement.value);

    if (sumTwoRandomNumber === userInputSum) {
        gameResultElement.textContent = "Congratulations! you got it right.";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}
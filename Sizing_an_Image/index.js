let imageElement = document.getElementById("image");
let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");

let originalImageWidth = 200;
imageElement.style.width = originalImageWidth + "px";

function onIncrement() {
    if (originalImageWidth >= 300) {
        warningMessageElement.textContent = "Too big. Decrease the size of the Image.";
    } else {
        originalImageWidth = originalImageWidth + 5;
        let upadtedImageWidth = originalImageWidth;

        warningMessageElement.textContent = "";
        imageElement.style.width = upadtedImageWidth + "px";
        imageWidthElement.textContent = upadtedImageWidth + "px";
    }
}

function onDecrement() {

    if (originalImageWidth <= 100) {
        warningMessageElement.textContent = "Can't Visible. Increase the size of the Image.";
    } else {
        originalImageWidth = originalImageWidth - 5;
        let upadtedImageWidth = originalImageWidth;

        warningMessageElement.textContent = "";
        imageElement.style.width = upadtedImageWidth + "px";
        imageWidthElement.textContent = upadtedImageWidth + "px";
    }
}
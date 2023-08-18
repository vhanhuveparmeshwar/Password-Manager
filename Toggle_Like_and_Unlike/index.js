let puppyIamgeElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyIamgeElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.background = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        puppyIamgeElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "#cbd2d9";
        likeButtonElement.style.background = "#cbd2d9";
        likeButtonElement.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}
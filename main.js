var slideIndex = 0;
var expandImg = null;
var allImages = null;
var lastItem = null;
var firstItem = null;

function enlarge(imgs) {
    expandImg = document.getElementById('expandedImg');
    slideIndex = parseInt(imgs.getAttribute("idx"));
    expandImg.src = imgs.src;
    document.getElementById("enlarged-section").style.display = "block";
    console.log(slideIndex)
    allImages = document.getElementsByClassName('image');
    lastItem = allImages[allImages.length - 1];
    firstItem = allImages[0];
    console.log(allImages);
    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("previous").addEventListener("click", previous);

}

function closeImage(close) {
    document.getElementById("enlarged-section").style.display = "none";
}

function previous() {
    slideIndex -= 1;
    if (slideIndex <= 0) {
        expandImg.src = lastItem.src;
        slideIndex = allImages.length - 1;
        console.log(slideIndex)
    } else {
        expandImg.src = allImages[slideIndex].src;
    }
}

function nextSlide() {
    slideIndex += 1;
    if (slideIndex == allImages.length) {
        expandImg.src = firstItem.src;
        slideIndex = 0;
        console.log(slideIndex);
    } else {
        expandImg.src = allImages[slideIndex].src;
    }
}
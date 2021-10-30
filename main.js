var currentImg = 0;
var expandImg = null;
var imgGallery = null;
var lastImg = null;
var firstImg = null;

function big(imgs) {
    expandImg = document.getElementById('expandedImg');
    currentImg = parseInt(imgs.getAttribute("idx"));
    expandImg.src = imgs.src;
    document.getElementById("enlarged-section").style.display = "block";
    console.log(currentImg)
    imgGallery = document.getElementsByClassName('image');
    lastImg = imgGallery[imgGallery.length - 1];
    firstImg = imgGallery[0];
    console.log(imgGallery);
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("previous").addEventListener("click", previous);

}

function closeImage(closeBig) {
    document.getElementById("enlarged-section").style.display = "none";
}

function previous() {
    currentImg -= 1;
    if (currentImg <= 0) {
        expandImg.src = lastImg.src;
        currentImg = imgGallery.length - 1;
        console.log(currentImg)
    } else {
        expandImg.src = imgGallery[currentImg].src;
    }
}

function next() {
    currentImg += 1;
    if (currentImg == imgGallery.length) {
        expandImg.src = firstImg.src;
        currentImg = 0;
        console.log(currentImg);
    } else {
        expandImg.src = imgGallery[currentImg].src;
    }
}
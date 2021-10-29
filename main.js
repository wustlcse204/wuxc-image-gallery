//initializing variables
var currentImage = 0;
var enlargeImage = null;
var imageGallery = null;
var lastPic = null;
var firstPic = null;

//enlarging the photos
function makeBig(imgs) {
    enlargeImage = document.getElementById('bigImage');
    currentImage = parseInt(imgs.getAttribute("idx"));
    enlargeImage.src = imgs.src;
    document.getElementById("big-pic").style.display = "block";
    console.log(currentImage)
    imageGallery = document.getElementsByClassName('image');
    lastPic = imageGallery[imageGallery.length - 1];
    firstPic = imageGallery[0];
    console.log(imageGallery);
    document.getElementById("next").addEventListener("click", next);
    document.getElementById("previous").addEventListener("click", previous);

}

//closing the focused/enlarged image
function closeBig(close) {
    document.getElementById("big-pic").style.display = "none";
}

//going to the image from before
function previous() {
    currentImage -= 1;
    if (currentImage <= 0) {
        enlargeImage.src = lastPic.src;
        currentImage = imageGallery.length - 1;
        console.log(currentImage)
    } else {
        enlargeImage.src = imageGallery[currentImage].src;
    }
}

//going to the next image
function next() {
    currentImage += 1;
    if (currentImage == imageGallery.length) {
        enlargeImage.src = firstPic.src;
        currentImage = 0;
        console.log(currentImage);
    } else {
        enlargeImage.src = imageGallery[currentImage].src;
    }
}
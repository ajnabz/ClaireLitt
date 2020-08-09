function burger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


//GAINS 2010
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

//GAINS 2011

function openModalGains2011() {
    document.getElementById("gains2011").style.display = "block";
}

function closeModalGains2011() {
    document.getElementById("gains2011").style.display = "none";
}

var slideIndexGains2011 = 1;
showSlidesGains2011(slideIndexGains2011);

function plusSlidesGains2011(n) {
    showSlidesGains2011(slideIndexGains2011 += n);
}

function currentSlideGains2011(n) {
    showSlidesGains2011(slideIndexGains2011 = n);
}

function showSlidesGains2011(n) {
    var i;
    var slidesGains2011 = document.getElementsByClassName("mySlidesGains2011");
    var dotsGains2011 = document.getElementsByClassName("demo");
    var captionTextGains2011 = document.getElementById("captionGains2011");
    if (n > slidesGains2011.length) {slideIndexGains2011 = 1}
    if (n < 1) {slideIndexGains2011 = slidesGains2011.length}
    for (i = 0; i < slidesGains2011.length; i++) {
        slidesGains2011[i].style.display = "none";
    }
    for (i = 0; i < dotsGains2011.length; i++) {
        dotsGains2011[i].className = dotsGains2011[i].className.replace(" active", "");
    }
    slidesGains2011[slideIndexGains2011-1].style.display = "block";
    dotsGains2011[slideIndexGains2011-1].className += " active";
    captionTextGains2011.innerHTML = dotsGains2011[slideIndexGains2011-1].alt;
}

//GAINS 2012
function openModalGains2012() {
    document.getElementById("gains2012").style.display = "block";
}

function closeModalGains2012() {
    document.getElementById("gains2012").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlidesGains2012(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesGains2012");
    var dots = document.getElementsByClassName("demo");
    var captionTextGains2012 = document.getElementById("captionGains2012");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionTextGains2012.innerHTML = dots[slideIndex-1].alt;
}
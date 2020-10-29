//SLIDESHOW 
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}





//JAVASCRIPT FORM VALIDATION
const form = document.getElementById('form');

form.addEventListener('submit', e=> {
    e.preventDefault();

    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstname === '') {
        addErrorTo('firstname', 'First Name is required')
    }

    if (lastname === '') {
        addErrorTo('lastname', 'Last Name is required')
    }

    if (isValid(email)) {
        addErrorTo('email', 'Email address is not valid')
    }

    if (password === '') {
        addErrorTo('password', 'Password is required')
    }
});

function addErrorTo(field, ) {
    const small = form['firstname'].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function addErrorTo(field,) {
    const small = form['lastname'].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function isValid(field,) {
    
}

function addErrorTo(field,) {
    const small = form['password'].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}
 


/*
const form = document.getElementById('form');
const first = document.getElementById('firstname');
const last = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
*/


/*
var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
*/
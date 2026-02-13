
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

function closeMenu() {
    navLinks.classList.remove('active');
}

function showMessage() {
    var msg = document.getElementById('secret-message');
    if (msg.style.display === 'none') {
        msg.style.display = 'block';
        msg.style.color = '#96C4D4';
    } else {
        msg.style.display = 'none';
    }
}

window.addEventListener('scroll', function () {
    var reveals = document.querySelectorAll('.fade-in');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('visible');
        }
    }
});

window.onload = function () {
    var heroElements = document.querySelectorAll('.hero .fade-in');
    heroElements.forEach(function (el) {
        el.classList.add('visible');
    });
};
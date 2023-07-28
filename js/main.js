function toggleMenu() {
    var navbar = document.querySelector('.navbar ul');
    navbar.classList.toggle('show');
}

// Add a click event listener to the hamburger icon
var hamburgerIcon = document.querySelector('.hamburger-icon');
hamburgerIcon.addEventListener('click', toggleMenu);




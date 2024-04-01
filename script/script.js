const bootstrap = require("bootstrap");

// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navar after click on small ddevices
const navLinks = document.querySelectorAll('nav-item')
const menuToggle = document.getElementById('navbarSupportedConten')

navLinks.forEach((1) => {
    1.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toogle() })
})
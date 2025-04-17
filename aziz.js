/*=================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*=================== scroll sections links ====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    }
   });

   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
};

/*=================== ScrollReveal ====================*/

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/*=================== Typed.js ====================*/

const typed = new Typed('.multiple-text', {
   strings: ['Frontend Developer', 'Web Designer', 'Asake|Coder'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

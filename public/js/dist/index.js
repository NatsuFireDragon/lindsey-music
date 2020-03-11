let menuBars = document.querySelector('.menu-bars');
let mobileMenu = document.querySelector('.box');
let close = document.querySelector('.close-btn');

menuBars.addEventListener('click', function(){
  mobileMenu.classList.add('active');
})

close.addEventListener('click', function(){
  mobileMenu.classList.remove('active');
})
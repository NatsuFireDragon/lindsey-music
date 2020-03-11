let menuBars = document.querySelector('.menu-bars');
let mobileMenu = document.querySelector('.box');
let close = document.querySelector('.close-btn');
let listItems = document.getElementsByTagName('li');

menuBars.addEventListener('click', function(){
  mobileMenu.classList.add('active');
})

close.addEventListener('click', function(){
  mobileMenu.classList.remove('active');
})


for(let i=0; i<listItems.length; i++){
  listItems[i].addEventListener('click', function(){
    mobileMenu.classList.remove('active');
  })
}

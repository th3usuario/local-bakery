const navbarToggler= document.querySelector('.navbar-toggler');
const home= document.querySelector('#home');
const homeContainer= document.querySelector('.home-container');

navbarToggler.addEventListener('click',function(){
         console.log('test')
          // home.style.height=120+'vh';
         home.classList.toggle('home-extended');
         homeContainer.classList.toggle('home-container-open');
  
});


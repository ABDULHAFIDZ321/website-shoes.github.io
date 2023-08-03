var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    effect:'fade',
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2000,
      },
  });




const menuToogle = document.querySelector('.menu-toogle');
const span1=document.querySelector('.span-1');
const span2=document.querySelector('.span-2');
const span3=document.querySelector('.span-3');
const ul=document.querySelector('.ul-nav');
const aNavbar=document.querySelectorAll('.a-nav')
menuToogle.addEventListener('click',function(){
  ul.classList.toggle('navbar-active')
  span1.classList.toggle('span-1-active');
  span2.classList.toggle('span-2-active');
  span3.classList.toggle('span-3-active');
})
function navbarRemove (){
  ul.classList.remove('navbar-active');
  span1.classList.remove('span-1-active');
  span2.classList.remove('span-2-active');
  span3.classList.remove('span-3-active');
}
aNavbar.forEach(e=>
  e.addEventListener('click',navbarRemove))
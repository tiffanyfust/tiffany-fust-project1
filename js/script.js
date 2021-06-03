
const menuIcon = document.querySelector('.fa-bars');
const hamMenu = document.querySelector('.hamburger');

const gallery = document.querySelector('.gallery');
const materialsImg = document.querySelector('.materials-img img');



menuIcon.addEventListener('click', function() {
    menuIcon.style.display = 'none';
    hamMenu.style.display = 'flex';
})


materialsImg.addEventListener('mouseover', function() {
  materialsImg.style.transform = 'scale(1.1, 1.1)';
  materialsImg.style.transition = 'ease 500ms'
})

materialsImg.addEventListener('mouseleave', function() {
  materialsImg.style.transform = 'none';
})










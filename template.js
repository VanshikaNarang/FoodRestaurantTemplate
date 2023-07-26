let menuBtn = document.getElementById('menuBtn');
 let contactBtn=document.getElementById('contactBtn');
let menu = document.querySelector('.menu');
let contact = document.querySelector('.contact');
let icons = document.querySelectorAll('.fas.fa-times');

menuBtn.addEventListener('click', () => {
    
  menu.classList.remove('hidden');
  menu.classList.add('visible');

});

contactBtn.addEventListener('click', () => {
    
    contact.classList.remove('hidden');
    contact.classList.add('visible');
  
  });


icons.forEach(icon =>{
icon.addEventListener('click',()=>{
   if(menu.classList.contains('visible'))
   { menu.classList.remove('visible');
    menu.classList.add('hidden');}
    else if(contact.classList.contains('visible')){
        contact.classList.remove('visible');
    contact.classList.add('hidden');
  };
});

});
 

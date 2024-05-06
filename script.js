let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onclick=() =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    if(window.scroll > 60)
    {
        document.querySelector('#scroll-top').classList.add('active');
    }
    else
    {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


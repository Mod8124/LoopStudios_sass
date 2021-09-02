let a = document.querySelectorAll('.a');
let hr = document.querySelectorAll('hr');
let img = document.querySelectorAll('.img_container');
let conta = document.getElementById('icon');

function change(x) {
    a[x].addEventListener('mouseover', function() {
        hr[x].style.opacity = '1';
    });

    a[x].addEventListener('mouseleave', function() {
        hr[x].style.opacity = '0';
    });
};

(function plus() {
    for(let i = 0; i < 10; i++) {
        change(i);
    }
}) ();


function imgChange(x) {
    img[x].addEventListener('mouseover', function() {
        img[x].style.opacity = '0.8';
    });

    img[x].addEventListener('mouseleave', function() {
        img[x].style.opacity = '1';
    })
}

(function imgPlus() {
    for(let i = 0; i < 8; i++) {
        imgChange(i);
    }
}) ();



// menu mobile

conta.onclick = function() {
    this.classList.toggle("change"); 

    let menu = document.getElementById('menuMobile');

    if(menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
     
};










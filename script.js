const items = document.querySelectorAll('.item');
const arrowsLeft = document.querySelectorAll('.fa-arrow-left');
const arrowsRight = document.querySelectorAll('.fa-arrow-right');
const active = document.querySelector('.active');

console.log(items);
console.log(arrowsLeft);
console.log(arrowsRight);
console.log(active);


function onclickLeft() {
    const active = document.querySelector('.active');
    const prev = active.previousElementSibling;
    active.classList.remove('active');
    prev.classList.add('active');
}


function onclickRight() {
    const active = document.querySelector('.active');
    const next = active.nextElementSibling;
    active.classList.remove('active');
    next.classList.add('active');
}


function onhoverLeft() {
    arrowsLeft.forEach(arrow => {
        if (arrow.classList.contains('grey-arrow')) {
            arrow.classList.remove('fa-arrow-left-long');
            arrow.classList.add('fa-arrow-left');
        } else {

            arrow.classList.add('fa-arrow-left-long');
            arrow.classList.remove('fa-arrow-left');
        }
    }
    )
}
function onhoverLeft2() {
    arrowsLeft.forEach(arrow => {

        arrow.classList.remove('fa-arrow-left-long');
        arrow.classList.add('fa-arrow-left');
    }
    )
}


function onhoverRight() {
    arrowsRight.forEach(arrow => {
        if (arrow.classList.contains('grey-arrow')) {
            arrow.classList.remove('fa-arrow-right-long');
            arrow.classList.add('fa-arrow-right');
        } else {
            arrow.classList.add('fa-arrow-right-long');
            arrow.classList.remove('fa-arrow-right');
        }

    })
    
}
function onhoverRight2() {
    arrowsRight.forEach(arrow => {
        arrow.classList.remove('fa-arrow-right-long');
        arrow.classList.add('fa-arrow-right');
    })
    
}

arrowsLeft.forEach(arrow => {
    arrow.addEventListener('mouseenter', onhoverLeft);
});

arrowsLeft.forEach(arrow => {
    arrow.addEventListener('mouseleave', onhoverLeft2);
});

arrowsRight.forEach(arrow => {
    arrow.addEventListener('mouseenter', onhoverRight);
});

arrowsRight.forEach(arrow => {
    arrow.addEventListener('mouseleave', onhoverRight2);
});




const menuBurger = document.querySelector('#menuToOpen');
const menuBurgerClose = document.querySelector('#menuToClose');
const navToDisplay = document.querySelector('#navToDisplay');


menuBurger.addEventListener('click', () => {
    navToDisplay.style.display = 'block';
    menuBurgerClose.style.display = 'block';
    menuBurger.style.display = 'none';
});   

menuBurgerClose.addEventListener('click', () => {
    navToDisplay.style.display = 'none';
    menuBurgerClose.style.display = 'none';
    menuBurger.style.display = 'block';

});
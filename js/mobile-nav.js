function toggleMenu(){
    document.querySelector('.mobile-menu').classList.toggle('opened');
}

function test(){
    alert('test!');
}

document.querySelector('.mobile-menu-items').addEventListener('click', toggleMenu);
document.querySelector('.mobile-menu-icon').addEventListener('click', toggleMenu);
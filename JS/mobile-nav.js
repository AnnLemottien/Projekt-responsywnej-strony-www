function tooglemenu(){         
    document.querySelector('.mobile-menu').classList.toggle('opened');
}
document.querySelector('.mobile-menu-icon').addEventListener('click', tooglemenu);
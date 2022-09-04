let menuLink = document.getElementsByClassName('menu__link');

[].forEach.call(menuLink, (el) => {
    el.addEventListener('click', (event) => {
        if(el.closest('a')){
            el.classList.add('menu_active');
        }
    });
});
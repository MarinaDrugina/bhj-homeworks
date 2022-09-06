let modal = document.querySelectorAll('.modal');
let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let modalCloseElements = document.querySelectorAll('.modal__close');
let showingModalSuccess = document.querySelector('.show-success');

modalMain.classList.add('modal_active');

[].forEach.call(modalCloseElements, (el) => {
    el.addEventListener('click', (event) => {
        [].forEach.call(modal, (el) => {
            if(el.className.includes('modal_active')) {
                el.classList.remove('modal_active');
            }  
        });
    });
});

showingModalSuccess.addEventListener('click', () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
});
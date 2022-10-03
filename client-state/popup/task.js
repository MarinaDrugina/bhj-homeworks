const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

let timerId = setTimeout (() => {
    modal.classList.add('modal_active');
}, 2000);

function getCookie(name) {
    let cookieArr = document.cookie.split('; ');
    let cookieObj = {};

    for(let i = 0; i < cookieArr.length; i++) {
        let c = cookieArr[i].split('=');
        cookieObj[c[0]] = c[1];
    }
    return cookieObj[name];
}

modalClose.addEventListener('click', (event) => {
    let date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    document.cookie = "modal=closed; path=/; expires=" + date.toUTCString();

    modal.classList.remove('modal_active');
});

window.onload = () => {
    if(getCookie('modal') == 'closed') {
        clearTimeout(timerId);
    }
}
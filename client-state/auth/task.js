const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');

const exitButton = document.createElement('button');
exitButton.textContent = 'Выйти';
signin.parentNode.appendChild(exitButton);
exitButton.classList.add('btn');
exitButton.style.margin = '20px 0';
exitButton.style.display = 'none';

if(localStorage.getItem('user_id')) {
    signin.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
    document.getElementById('user_id').textContent = localStorage.getItem('user_id');
    exitButton.style.display = 'block';
} else {
    signinForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(signinForm);   
        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.responseType = 'json';
        xhr.send(formData); 

        xhr.onload = function() {
            if (xhr.status !== 200) {
                alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            } else {
                localStorage.setItem('user_id', xhr.response.user_id);
                if(xhr.response.success === true) {
                    signin.classList.remove('signin_active');
                    welcomeBlock.classList.add('welcome_active');
                    document.getElementById('user_id').textContent = xhr.response.user_id;
                    exitButton.style.display = 'block';
                } else if (xhr.response.success === false) {
                    alert('Неверный логин/пароль');
                    signinForm.reset();
                }
            }
        }
    });
}

exitButton.addEventListener('click', (event) => {
    localStorage.removeItem('user_id');
    signin.classList.add('signin_active');
    welcomeBlock.classList.remove('welcome_active');
    exitButton.style.display = 'none';
});
const formElem = document.getElementById('form');

formElem.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(formElem);

    const xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById( 'progress' );
        progress.value = event.loaded / event.total;
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');  
    xhr.send(data); 
});
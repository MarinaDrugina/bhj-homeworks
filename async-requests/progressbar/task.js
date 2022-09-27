const formElem = document.getElementById('form');

formElem.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(formElem);

    let xhr = new XMLHttpRequest();
    
    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById( 'progress' );
        progress.value = event.loaded;
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');    
    xhr.send(data);  
});
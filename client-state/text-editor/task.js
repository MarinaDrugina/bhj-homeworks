const editor = document.getElementById('editor');

editor.addEventListener('input', (event) => {
    localStorage.setItem('editor', editor.value);
});

editor.value = localStorage.getItem('editor');

const clearButton = document.createElement('button');
clearButton.textContent = 'Очистить содержимое';
editor.parentNode.appendChild(clearButton);

clearButton.addEventListener('click', (event) => {
    localStorage.removeItem('editor');
    editor.value = '';
});
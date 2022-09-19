const interest = document.querySelectorAll('.interests_main > ul > li');

for(let i = 0; i < interest.length; i++) {    
    const input = interest[i].querySelectorAll('.interest__check');
    const inputMain = interest[i].firstElementChild.firstElementChild;
    
    inputMain.addEventListener('click', (event) => {
        if(inputMain.type === 'checkbox'){
            if(inputMain.checked) {
                input.forEach(item => item.checked = true);
            } else {
                input.forEach(item => item.checked = false);
            }
        }
    });
}

const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownValue = document.querySelector('.dropdown__value');
const card = document.querySelector('.card');


card.addEventListener('click', (event) => {
    if(event.target.className === 'dropdown__value') {
        event.target.nextElementSibling.classList.add('dropdown__list_active');
    }

    if(event.target.className === 'dropdown__item') {      
        event.target.className('dropdown__value').textContent = event.target.textContent;
            if(event.target.firstElementChild){
                event.preventDefault();
            }
            event.target.className('dropdown__list').classList.remove('dropdown__list_active');        
    }
})


/*
    dropdownValue.addEventListener('click', (event) => {
        dropdownList.classList.add('dropdown__list_active');
    });



    dropdownItem.forEach(item => {
        item.addEventListener('click', (event) => {  
            dropdownValue.textContent = item.textContent;
            if(item.firstElementChild){
                event.preventDefault();
            }
            dropdownList.classList.remove('dropdown__list_active');
        });
    });*/
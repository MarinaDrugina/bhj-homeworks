const dropdown = document.querySelectorAll('.dropdown');
const dropdownItem = document.querySelectorAll('.dropdown__item');

dropdown.forEach(item => {
    item.addEventListener('click', (event) => {    
        item.lastElementChild.classList.toggle('dropdown__list_active');
   });

    dropdownItem.forEach(el => {
        el.addEventListener('click', (event) => {  
            event.preventDefault();    
            el.closest('ul').previousElementSibling.textContent = el.textContent;
        });
    });
});
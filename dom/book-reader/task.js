const fontSize = document.querySelectorAll('.book__control_font-size a');
const textColor = document.querySelectorAll('.book__control_color a');
const bgColor = document.querySelectorAll('.book__control_background a');
const book = document.querySelector('.book');

function changeBookClasses(el, classNameActive, className_1, className_2, className_3){
    for(let i = 0; i < el.length; i++) {
        el[i].addEventListener('click', function(event) {
            event.preventDefault();
            for (let i = 0; i < el.length; i++) {
                el[i].classList.remove(classNameActive);
            }
            this.classList.add(classNameActive); 
            
            book.classList.remove(className_1, className_2, className_3);
            
            if(el[0].classList.contains(classNameActive)){
                book.classList.add(className_3);
            } else if (el[1].classList.contains(classNameActive)) {
                book.classList.add(className_2);
            } else if (el[2].classList.contains(classNameActive)) {
                book.classList.add(className_1);
            }
        });
    }
}

changeBookClasses(fontSize, 'font-size_active', 'book_fs-big', null, 'book_fs-small');
changeBookClasses(textColor, 'color_active', 'book_color-whitesmoke', 'book_color-gray', 'book_color-black');
changeBookClasses(bgColor, 'color_active', 'book_bg-white', 'book_bg-gray', 'book_bg-black');
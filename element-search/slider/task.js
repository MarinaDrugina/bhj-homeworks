const sliderItem = document.querySelectorAll('.slider__item');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const dot = document.querySelectorAll('.slider__dot');
let i = 0;

sliderArrowNext.addEventListener('click', (event) => {
    i++;

    if(i >= sliderItem.length) {
        sliderItem[i-1].classList.remove('slider__item_active');
        i = 0;
        sliderItem[i].classList.add('slider__item_active');
    } else {
        sliderItem[i-1].classList.remove('slider__item_active');
        sliderItem[i].classList.add('slider__item_active');
    }
});

sliderArrowPrev.addEventListener('click', (event) => {
    i--;

    if(i < 1) {
        sliderItem[i].classList.remove('slider__item_active');
        i = sliderItem.length;
        sliderItem[i-1].classList.add('slider__item_active');
    } else {
        sliderItem[i].classList.remove('slider__item_active');
        
        sliderItem[i-1].classList.add('slider__item_active');
    }
});
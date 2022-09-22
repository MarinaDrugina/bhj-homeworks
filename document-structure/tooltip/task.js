const hasTooltip = document.querySelectorAll('.has-tooltip');

for(let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML('afterbegin', '<div class="tooltip"></div>');

    hasTooltip[i].firstElementChild.textContent = hasTooltip[i].getAttribute('title');

    hasTooltip[i].addEventListener('click', (event) => {
        event.preventDefault();

            let target = document.querySelector('.tooltip_active');
            let arr = Array.from(document.querySelectorAll('.tooltip'));
            let index = arr.indexOf(target);

            if(index !== -1 && index !== i) {
                hasTooltip[index].firstElementChild.classList.remove('tooltip_active');
                hasTooltip[i].firstElementChild.classList.add('tooltip_active');
            } else if (index !== -1 && index === i) {
                hasTooltip[i].firstElementChild.classList.remove('tooltip_active');
            } else {
                hasTooltip[i].firstElementChild.classList.toggle('tooltip_active');
            }
    });
}
const hasTooltip = document.querySelectorAll('.has-tooltip');

for(let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].insertAdjacentHTML('afterend', '<div class="tooltip"></div>');
}

const tooltip = document.querySelectorAll('.tooltip');

for(let i = 0; i < tooltip.length; i++) {
    tooltip[i].textContent = tooltip[i].previousElementSibling.getAttribute('title');

    let coords = tooltip[i].previousElementSibling.getBoundingClientRect();
    tooltip[i].style.position = 'absolute';
    tooltip[i].style.top = (coords.top + tooltip[i].previousElementSibling.offsetHeight + window.scrollY) + 'px';
    tooltip[i].style.left = coords.left + 'px';

    tooltip[i].previousElementSibling.addEventListener('click', (event) => {
        event.preventDefault();

        let arr = Array.from(tooltip);
        let target = document.querySelector('.tooltip_active');
        let index = arr.indexOf(target);

        if(index !== -1 && index !== i) {
            tooltip[index].classList.remove('tooltip_active');
            tooltip[i].classList.add('tooltip_active');
        } else if (index !== -1 && index === i) {
            tooltip[i].classList.remove('tooltip_active');
        } else {
            tooltip[i].classList.toggle('tooltip_active');
        }   
    });
}
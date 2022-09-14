const rotatorCase = document.querySelectorAll('.rotator__case');
const rotator = document.querySelectorAll('.rotator');
let i = 0;

function changeClass() {
    rotator.forEach(item => {
       i++;

        if(i >= rotatorCase.length) {
            rotatorCase[i-1].classList.remove('rotator__case_active');
            i = 0;
            rotatorCase[i].classList.add('rotator__case_active');
        } else {
            rotatorCase[i-1].classList.remove('rotator__case_active');
            rotatorCase[i].classList.add('rotator__case_active');
        }  

      rotatorCase.forEach(item => {
            item.style.color = item.getAttribute('data-color');
        });
    });    
}

setInterval(changeClass, 1000);
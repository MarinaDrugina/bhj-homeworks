let cookieImage = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let clickerSpeedCounter = document.getElementById('clicker__speed');

let startTime = Date.now();

cookieImage.addEventListener('click', (event) => {
    clickerCounter.textContent++;
    cookieImage.onclick = clickOnCookie;

    let endTime = Date.now();    
    let difference = 1 / ((endTime - startTime) / 1000);
    clickerSpeedCounter.textContent = difference.toFixed(2);
    startTime = endTime;
});

function clickOnCookie() {       
    if(cookieImage.getAttribute('width') === '200') { 
        cookieImage.width = +cookieImage.width + 50;
    } else {
        cookieImage.width = +cookieImage.width - 50;
    }  
}
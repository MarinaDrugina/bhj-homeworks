let deadMolesCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for(holeIndex = 1; holeIndex < 10; holeIndex++) {
    let hole = getHole(holeIndex);

    hole.addEventListener('click', (event) => {
        if(hole.className.includes('hole_has-mole')) {
            deadMolesCounter.textContent++;
            if(deadMolesCounter.textContent == 10) {
                alert('Победа!');
                deadMolesCounter.textContent = 0;
                lostCounter.textContent = 0;
            }
        } else {
            lostCounter.textContent++;
            if(lostCounter.textContent == 5) {
                alert('Вы проиграли');
                deadMolesCounter.textContent = 0;
                lostCounter.textContent = 0;
            }
        }
    });
}
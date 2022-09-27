let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
   
    if(xhr.readyState === xhr.DONE) {
        const pollData = xhr.response;

        const pollTitle = document.getElementById('poll__title');
        pollTitle.textContent = pollData.data.title;

        const pollAnswers = document.getElementById('poll__answers');

        for(const ans in pollData.data.answers) {   
            let elem = `<button class="poll__answer">${pollData.data.answers[ans]}</button>\n`;              
            pollAnswers.insertAdjacentHTML('beforeend', elem);    
        }

        const pollAnswer = document.querySelectorAll('.poll__answer');
        
        pollAnswer.forEach(el => {
            el.addEventListener('click', (event) => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
}
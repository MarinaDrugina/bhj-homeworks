const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.responseType = 'json';
xhr.send();
xhr.onreadystatechange = function() {
   
    if(xhr.readyState === xhr.DONE) {
        if(xhr.status !== 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            document.getElementById('loader').classList.remove('loader_active');

            const data = xhr.response;
            const items = document.getElementById('items');
            items.removeChild(items.firstElementChild);
                
            for(const prop in data.response.Valute) {
                let elem = `<div class="item">
                                <div class="item__code">
                                    ${data.response.Valute[prop].CharCode}
                                </div>
                                <div class="item__value">
                                    ${data.response.Valute[prop].Value}
                                </div>
                                <div class="item__currency">
                                    руб.
                                </div>
                            </div>`;
            
                items.insertAdjacentHTML('beforeEnd', elem);
            }
        }
    }
}
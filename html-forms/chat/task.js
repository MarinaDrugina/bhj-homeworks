const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatWidgetMessages = document.getElementById('chat-widget__messages');

chatWidget.lastElementChild.addEventListener('click', (event) => {
    chatWidget.classList.add('chat-widget_active');
});

chatWidgetInput.addEventListener('keyup', (event) => {
    event.preventDefault();
    if(event.code === 'Enter' && chatWidgetInput.value !== '') {
            
        getChatMessages(chatWidgetInput.value, 'message_client');
        setTimeout(() => { getChatMessages(getBotMessage(), null); }, 1000);

        chatWidgetInput.value = '';
    }
});

function getChatMessages(textValue, className) {
    chatWidgetMessages.innerHTML += `<div class="message ${className}"><div class="message__time">${new Date().toLocaleTimeString().slice(0, 5)}</div><div class="message__text">${textValue}</div></div>`;
    chatWidgetMessages.lastElementChild.scrollIntoView(top);
}

function getBotMessage() {
    const botMessages = [
        'Кто тут?',
        'Где ваша совесть?!',
        'К сожалению, все операторы заняты. Не пишите нам больше',
        'Вы не купили ни одного товара для того, чтобы так с нами разговаривать',
        'Добрый день! До свидания',
        'Мы ничего не будем вам продавать',
      ],
      index = Math.floor(Math.random() * botMessages.length);

    return botMessages[index];
}
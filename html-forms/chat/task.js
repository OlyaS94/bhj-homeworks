botArray = [
    'Я занят', 'Вы опять не вовремя', 'Перезвоните через 10 лет', 'До свидания', 'Я от вас устал',
    'Займитесь делом', 'Где ваша совесть?', 'Все операторы заняты, не пишите нам больше', 'До свидания!'
];
const chatWidgetSide = document.querySelector('.chat-widget__side');
chatWidgetSide.addEventListener('click', (event) => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
    event.preventDefault();
})
// 
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
input.addEventListener('change', () => {
    let time = new Date().getHours() + ":" + new Date().getMinutes();
    let wordIndex = Math.floor(Math.random() * 4);
    console.log(wordIndex)
    messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${input.value}</div>
        </div>
        `;

    input.value = '';

    messages.innerHTML += `
        <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${botArray[wordIndex]}</div>
        </div>
        `;
    
    messages.scrollIntoView(false);
})

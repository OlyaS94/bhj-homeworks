const time = document.getElementById('timer')

setInterval(() => {
    time.textContent = Number(time.textContent) - 1;
    if (time.textContent <= 0) {
        clearInterval();
        alert('Вы победили в конкурсе!');
    }
}, 1000)
const time = function () {
    const output = document.getElementById('timer');
    output.textContent -= 1;
    if (output.textContent <= 0) {
        alert('Вы выиграли');
        clearInterval(intervalID);
    }
}
const intervalID = setInterval(time, 1000);
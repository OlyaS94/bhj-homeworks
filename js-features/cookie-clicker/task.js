const c = document.getElementById('clicker__counter')
const img = document.getElementById('cookie')
img.onclick = () => {
    if (c.textContent % 2 == 0) {
        c.textContent = Number(c.textContent) + 1;
        img.width *= 2;
    } else {
        c.textContent = Number(c.textContent) + 1;
        img.width /= 2;

    }
}
const arrayDiv = Array.from(document.querySelectorAll('div'));

arrayDiv.forEach((div) => {
    console.log(div.textContent);
});

const divPopupMain = document.getElementById('modal_main');
const divPopupSuccsess = document.getElementById('modal_success');
const divClose = document.querySelectorAll('.modal__content div');
const divBtnDanger = document.querySelector('.modal__content a');
let divCloset1;

divPopupMain.classList.add('modal_active');

divBtnDanger.onclick = () => {
    divPopupSuccsess.classList.add('modal_active');
    divPopupMain.classList.remove('modal_active');
}

for (const button of divClose) {
    button.addEventListener('click', () => {
        divPopupMain.classList.remove('modal_active');
        divPopupSuccsess.classList.remove('modal_active');

    })
}
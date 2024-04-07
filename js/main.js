const buttonOpen = document.getElementById('modalButton');
const buttonClose = document.getElementById('modalClose');

const modal = document.getElementById('modal');



// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
    modal.style.display = 'block';
}

buttonClose.addEventListener('click', modalClose);
function modalClose() {
    modal.style.display = 'none';
}
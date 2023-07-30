// import { doneSet } from "../localStorage/doneSet";


    const deleteAll = document.querySelector('.done__btn-deleteAll');
    const doneList = document.querySelector('.todo__done-cardList');
    const deleteModal = document.querySelector('.modal__card-deleteAll');
    const deleteConfirm = document.querySelector('.deleteAll__confirm');
    const deleteClose = document.querySelector('.deleteAll__cancel');
    const doneCount = document.querySelector('.count__done');

function deleteAllCards() {

    deleteAll.addEventListener('click', () => {
        deleteModal.classList.add('open');
    })

    deleteConfirm.addEventListener('click', () => {
        localStorage.removeItem('done');
        doneList.innerHTML = '';
        deleteModal.classList.remove('open');
        const done = JSON.parse(localStorage.getItem('done'));
        doneCount.innerHTML = '0';
    })

    deleteClose.addEventListener('click', () => {
        deleteModal.classList.remove('open');
    })
}
deleteAllCards();

export { deleteAllCards };
// import { doneSet } from "../localStorage/doneSet";

function deleteAllCards() {
    const deleteAll = document.querySelector('.done__btn-deleteAll');
    const doneList = document.querySelector('.todo__done-cardList');
    deleteAll.addEventListener('click', () => {
        localStorage.removeItem('done');
        doneList.innerHTML = '';
        // console.log('click');
    })
}
deleteAllCards();

export { deleteAllCards };
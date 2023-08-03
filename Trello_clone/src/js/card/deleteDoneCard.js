import { doneSet } from "../localStorage/doneSet";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";

const doneCount = document.querySelector('.count__done');
let arr = [];

function deleteDoneCard(element) {
    element.addEventListener('click', (event) => {
        
        const doneArray = JSON.parse(localStorage.getItem('done'));
        const target = event.target;
        const cardId = Number(target.closest('.todo__card').id);
        target.closest('.todo__card').remove();
        
        arr = doneArray.filter((elem) => elem.id !== cardId);

        doneSet(arr);
        doneCount.innerHTML = arr.length;
    })
}

export { deleteDoneCard };
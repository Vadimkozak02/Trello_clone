import { doneSet } from "../localStorage/doneSet";

const doneCount = document.querySelector('.count__done');

function deleteDoneCard(element) {
    element.addEventListener('click', (event) => {
        let arr = [];
        const doneArray = JSON.parse(localStorage.getItem('done'));
        const target = event.target;
        const cardId = Number(target.closest('.todo__card').id);
        target.closest('.todo__card').remove();
        doneArray.forEach((elem) => {
            if (elem.id !== cardId) {
                arr.push(elem);
            }
            doneSet(arr);
        })
        doneCount.innerHTML = arr.length;
    })
}

export { deleteDoneCard };
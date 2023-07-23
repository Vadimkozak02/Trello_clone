// const deleteBtn = document.querySelector('.todo__header-delete');
import { startLocalStorage } from "../localStorage/startSetInLs";

const startCount = document.querySelector('.count__start');

function deleteCard(element) {
    element.addEventListener('click', (event) => {
        let arr = [];
        const startArray = JSON.parse(localStorage.getItem('start'));
        const target = event.target;
        const cardId = Number(target.closest('.todo__card').id);
        console.log(event.target.closest('.todo__card'));
        // console.log(target.closest('.todo__card').id);
        target.closest('.todo__card').remove();
        for (let i = 0; i < startArray.length; i++) {
            if (startArray[i].id !== cardId) {
                arr.push(startArray[i]);
            }
        }
        startLocalStorage(arr);
        startCount.innerHTML = arr.length;
    })
}

export { deleteCard };
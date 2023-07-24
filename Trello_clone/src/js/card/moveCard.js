import { startLocalStorage } from "../localStorage/startSetInLs";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
import { arr } from "../localStorage/inProgressGetInLs";
import { moveInDone } from "./moveInDone";

const columnInProgress = document.querySelector('.card__list-inProgress');
const progressCount = document.querySelector('.count__progress');

let test = [];
let temp = '';

if (arr !== null) {
    test = arr;
} else {
    test = [];
}

const startCount = document.querySelector('.count__start');

function moveCard(element, backBtn, completeBtn, editBtn, deleteBtn) {
    
    element.addEventListener('click', (event) => {

        // скрываем кнопки edit, delete, arrow
        editBtn.classList.add('hidden');
        deleteBtn.classList.add('hidden');
        element.classList.add('hidden');
        // показываем кнопки back, complete
        backBtn.classList.remove('hidden');
        completeBtn.classList.remove('hidden');
        // -----------------

        const target = event.target;
        const card = event.target.closest('.todo__card');
        const cardId = Number(event.target.closest('.todo__card').id);
        target.closest('.todo__card').remove();
        columnInProgress.prepend(card);
        const startArray = JSON.parse(localStorage.getItem('start'));
        startArray.forEach((elem) => {
            if (elem.id === cardId) {
                test.push(elem);
                temp = elem.id;
            }
        })
        inProgrerssSetLocalStorage(test);
        let indexOfArray = startArray.findIndex((elem) => {
            return elem.id === temp;
        })
        startArray.splice(indexOfArray, 1);
        startLocalStorage(startArray);
        
        
        // Счетчик активных карт
        progressCount.innerHTML = test.length;
        startCount.innerHTML = startArray.length;
            
        // Перемещаем задачу в выполненные
        moveInDone(completeBtn, backBtn, deleteBtn);
    })
}

export { moveCard };
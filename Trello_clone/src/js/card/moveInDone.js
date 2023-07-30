import { doneSet } from "../localStorage/doneSet";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
import { doneTodo } from "../localStorage/doneGet";
import { deleteDoneCard } from "./deleteDoneCard";

let test = [];
let temp = '';

if (doneTodo !== null) {
    test = doneTodo;
} else {
    test = [];
}

const progressCount = document.querySelector('.count__progress');
const doneCount = document.querySelector('.count__done');

function moveInDone(element, backBtn, deleteBtn) {
    const doneList = document.querySelector('.todo__done-cardList');
    element.addEventListener('click', (event) => {
        backBtn.classList.add('hidden');
        element.classList.add('hidden');
        deleteBtn.classList.remove('hidden');

        const target = event.target;
        const card = target.closest('.todo__card');
        card.style.backgroundColor = '#c1724e';
        const cardId = Number(event.target.closest('.todo__card').id);
        doneList.prepend(card);
        
        const progressArr = JSON.parse(localStorage.getItem('inProgress'));
        if (progressArr) {
            progressArr.forEach((elem) => {
                if (elem.id === cardId) {
                    test.push(elem);
                    temp = elem.id;
                }
            })
            doneSet(test);
            let indexOfArray = progressArr.findIndex((elem) => {
                return elem.id === temp;
            })
            progressArr.splice(indexOfArray, 1);
            inProgrerssSetLocalStorage(progressArr);
        }

        deleteDoneCard(deleteBtn);
        doneCount.innerHTML = test.length;
        progressCount.innerHTML = progressArr.length;
    })
    
}

export { moveInDone };
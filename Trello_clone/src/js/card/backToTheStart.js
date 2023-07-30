import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
import { startLocalStorage } from "../localStorage/startSetInLs";

let temp = '';

const startCount = document.querySelector('.count__start');
const progressCount = document.querySelector('.count__progress');

function backToTheStart(element, completeBtn, editBtn, deleteBtn, arrow) {

    element.addEventListener('click', (event) => {
        console.log('click');
        const cardList = document.querySelector('.card__list-start');
        
        // скрываем кнопки edit, delete, arrow
        editBtn.classList.remove('hidden');
        deleteBtn.classList.remove('hidden');
        arrow.classList.remove('hidden');
        // показываем кнопки back, complete
        element.classList.add('hidden');
        completeBtn.classList.add('hidden');
        // -----------------

        const target = event.target;
        const card = event.target.closest('.todo__card');
        card.style.backgroundColor = '#3ba96b';
        const cardId = Number(event.target.closest('.todo__card').id);
        cardList.prepend(card);

        const progressArr = JSON.parse(localStorage.getItem('inProgress')); 
        const startArr = JSON.parse(localStorage.getItem('start'));
        progressArr.forEach((elem) => {
            if (elem.id === cardId) {
                startArr.push(elem);
                temp = elem.id;
            }
        })
        startLocalStorage(startArr);

        let indexOfArray = progressArr.findIndex((elem) => {
            return elem.id === temp;
        })
        progressArr.splice(indexOfArray, 1);
        inProgrerssSetLocalStorage(progressArr);

        startCount.innerHTML = startArr.length;
        progressCount.innerHTML = progressArr.length;

    })

}

export { backToTheStart };
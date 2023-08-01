import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
import { startLocalStorage } from "../localStorage/startSetInLs";

let temp = '';
let testArr = [];

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

        if (startArr) {
            testArr = progressArr.filter(elem => startArr.every(item => item.id !== elem.id));
        } else {
            testArr = progressArr;
        }
        let unique = progressArr.filter((item) => checkUnique(item));
        console.log('unique', unique);
        inProgrerssSetLocalStorage(testArr);

        let d = new Set(progressArr);
        console.log('d', d);
        

        // let indexOfArray = progressArr.findIndex((elem) => {
        //     return elem.id === temp;
        // })
        // progressArr.splice(indexOfArray, 1);
        // inProgrerssSetLocalStorage(progressArr);

        startCount.innerHTML = startArr.length;
        progressCount.innerHTML = testArr.length;

    })

}

let c = [];
function checkUnique(item) {
    if (c.indexOf(item.id) === -1) {
        c.push(item.id);
        return true;
    }
    return false;
}

export { backToTheStart };
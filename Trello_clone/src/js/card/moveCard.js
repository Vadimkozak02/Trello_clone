import { startLocalStorage } from "../localStorage/startSetInLs";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
import { progTodo } from "../localStorage/inProgressGetInLs";
import { moveInDone } from "./moveInDone";
import { backToTheStart } from "./backToTheStart";

const columnInProgress = document.querySelector('.card__list-inProgress');
const progressCount = document.querySelector('.count__progress');
const moreThanSix = document.querySelector('.modal__card-moreThanSix');

let testArr = [];
let test = [];
let temp = '';

if (progTodo !== null) {
    test = progTodo;
} else {
    test = [];
}

const startCount = document.querySelector('.count__start');
// let prog = JSON.parse(localStorage.getItem('inProgress'));

function moveCard(element, backBtn, completeBtn, editBtn, deleteBtn) {
    
    element.addEventListener('click', (event) => {
        let myArr = [];

        const target = event.target;
        const card = event.target.closest('.todo__card');
        
        const cardId = Number(event.target.closest('.todo__card').id);
        // target.closest('.todo__card').remove();

        let startArray = JSON.parse(localStorage.getItem('start'));
        let progressArr = JSON.parse(localStorage.getItem('inProgress')) || [];
        let doneArr = JSON.parse(localStorage.getItem('done'));
        
        let lengthOfProgressArr = progressArr.length + 1;
        
        if (lengthOfProgressArr >= 7) {
            moreThanSix.classList.add('open');
            moreThanSix.addEventListener('click', () => {
                moreThanSix.classList.remove('open');
            })
            return;
        } else if (lengthOfProgressArr < 7) {
                startArray.forEach((elem) => {
                if (elem.id === cardId) {
                    editBtn.classList.add('hidden');
                    deleteBtn.classList.add('hidden');
                    element.classList.add('hidden');
                    // показываем кнопки back, complete
                    backBtn.classList.remove('hidden');
                    completeBtn.classList.remove('hidden');
                    card.style.backgroundColor = '#4a87a7';
                    test.push(elem);
                    if (doneArr) {
                        testArr = test.filter(elem => doneArr.every(item => item.id !== elem.id));
                    } else {
                        testArr = test;
                    }
                    temp = elem.id;
                    target.closest('.todo__card').remove();
                    columnInProgress.prepend(card);
                    inProgrerssSetLocalStorage(testArr);
                } 
            })
        }
        

        let indexOfArray = startArray.findIndex((elem) => {
            return elem.id === temp;
        })
        startArray.splice(indexOfArray, 1);
        startLocalStorage(startArray);        
        
        // Счетчик активных карт
        progressCount.innerHTML = testArr.length;
        startCount.innerHTML = startArray.length;
            
        // Перемещаем задачу в выполненные
        moveInDone(completeBtn, backBtn, deleteBtn);

        // Возвращаем задачу в начало
        backToTheStart(backBtn, completeBtn, editBtn, deleteBtn, element);

    })
}

export { moveCard };

// -------------
// рабочий код :
// import { startLocalStorage } from "../localStorage/startSetInLs";
// import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
// import { progTodo } from "../localStorage/inProgressGetInLs";
// import { moveInDone } from "./moveInDone";
// import { backToTheStart } from "./backToTheStart";

// const columnInProgress = document.querySelector('.card__list-inProgress');
// const progressCount = document.querySelector('.count__progress');
// const moreThanSix = document.querySelector('.modal__card-moreThanSix');

// let testArr = [];
// let test = [];
// let temp = '';
// let arr = [];
// let myArr = [];

// if (progTodo !== null) {
//     test = progTodo;
// } else {
//     test = [];
// }

// const startCount = document.querySelector('.count__start');

// function moveCard(element, backBtn, completeBtn, editBtn, deleteBtn) {
    
//     element.addEventListener('click', (event) => {
//         let myArr = [];

//         const target = event.target;
//         const card = event.target.closest('.todo__card');
        
//         const cardId = Number(event.target.closest('.todo__card').id);
//         // target.closest('.todo__card').remove();

//         let startArray = JSON.parse(localStorage.getItem('start'));
//         let progressArr = JSON.parse(localStorage.getItem('inProgress'));
//         let doneArr = JSON.parse(localStorage.getItem('done'));
        
//         if (test.length === 6) {
//             moreThanSix.classList.add('open');
//             moreThanSix.addEventListener('click', () => {
//                 moreThanSix.classList.remove('open');
//             })
//             return;
//         }
        
//         startArray.forEach((elem) => {
//             if (elem.id === cardId) {
//                 editBtn.classList.add('hidden');
//                 deleteBtn.classList.add('hidden');
//                 element.classList.add('hidden');
//                 // показываем кнопки back, complete
//                 backBtn.classList.remove('hidden');
//                 completeBtn.classList.remove('hidden');
//                 card.style.backgroundColor = '#4a87a7';
//                 test.push(elem);
//                 if (doneArr) {
//                     testArr = test.filter(elem => doneArr.every(item => item.id !== elem.id));
//                 } else {
//                     testArr = test;
//                 }
//                 temp = elem.id;
//                 target.closest('.todo__card').remove();
//                 columnInProgress.prepend(card);
//                 inProgrerssSetLocalStorage(testArr);
//             } 
//         })
        

//         let indexOfArray = startArray.findIndex((elem) => {
//             return elem.id === temp;
//         })
//         startArray.splice(indexOfArray, 1);
//         startLocalStorage(startArray);        
        
//         // Счетчик активных карт
//         progressCount.innerHTML = testArr.length;
//         startCount.innerHTML = startArray.length;
            
//         // Перемещаем задачу в выполненные
//         moveInDone(completeBtn, backBtn, deleteBtn);

//         // Возвращаем задачу в начало
//         backToTheStart(backBtn, completeBtn, editBtn, deleteBtn, element);

//     })
// }

// export { moveCard };
import { startLocalStorage } from "../localStorage/startSetInLs";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";
import { progTodo } from "../localStorage/inProgressGetInLs";
import { moveInDone } from "./moveInDone";
import { backToTheStart } from "./backToTheStart";

const columnInProgress = document.querySelector('.card__list-inProgress');
const progressCount = document.querySelector('.count__progress');
const moreThanSix = document.querySelector('.modal__card-moreThanSix');

let test = [];
let temp = '';

if (progTodo !== null) {
    test = progTodo;
} else {
    test = [];
}

const startCount = document.querySelector('.count__start');

function moveCard(element, backBtn, completeBtn, editBtn, deleteBtn) {
    
    element.addEventListener('click', (event) => {
        let myArr = [];

        const target = event.target;
        const card = event.target.closest('.todo__card');
        
        const cardId = Number(event.target.closest('.todo__card').id);
        // target.closest('.todo__card').remove();

        let startArray = JSON.parse(localStorage.getItem('start'));
        let progressArray = JSON.parse(localStorage.getItem('inProgress'));
        
        if (test.length === 6) {
            moreThanSix.classList.add('open');
            moreThanSix.addEventListener('click', () => {
                moreThanSix.classList.remove('open');
            })
            return false;
        }
        
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
                temp = elem.id;
                target.closest('.todo__card').remove();
                columnInProgress.prepend(card);
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

// let test = [];
// let temp = '';

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
//         let progressArray = JSON.parse(localStorage.getItem('inProgress'));
        
        
//         startArray.forEach((elem) => {
            
//             if (elem.id === cardId && test.length < 6) {
//                 console.log('test', test.length);
//                 editBtn.classList.add('hidden');
//                 deleteBtn.classList.add('hidden');
//                 element.classList.add('hidden');
//                 // показываем кнопки back, complete
//                 backBtn.classList.remove('hidden');
//                 completeBtn.classList.remove('hidden');
//                 card.style.backgroundColor = '#4a87a7';
//                 test.push(elem);
//                 temp = elem.id;
//                 target.closest('.todo__card').remove();
//                 columnInProgress.prepend(card);
                
//             } else if (test.length == 6) {
//                 moreThanSix.classList.add('open');
//             }
//             else {

//                 editBtn.classList.remove('hidden');
//                 deleteBtn.classList.remove('hidden');
//                 element.classList.remove('hidden');
//                 // показываем кнопки back, complete
//                 backBtn.classList.add('hidden');
//                 completeBtn.classList.add('hidden');

//                 // moreThanSix.classList.add('open');
//                 return false;
//             }
//         })
//         inProgrerssSetLocalStorage(test);

//         moreThanSix.addEventListener('click', () => {
//             moreThanSix.classList.remove('open');
//         })
        
//         // ----------- start

//         let indexOfArray = startArray.findIndex((elem) => {
//             return elem.id === temp;
//         })
//         startArray.splice(indexOfArray, 1);
//         startLocalStorage(startArray);

//         // ----------- end
        
        
//         // Счетчик активных карт
//         progressCount.innerHTML = test.length;
//         startCount.innerHTML = startArray.length;
            
//         // Перемещаем задачу в выполненные
//         moveInDone(completeBtn, backBtn, deleteBtn);

//         // Возвращаем задачу в начало
//         backToTheStart(backBtn, completeBtn, editBtn, deleteBtn, element);

//     })
// }

// export { moveCard };
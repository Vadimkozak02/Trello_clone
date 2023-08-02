import { doneSet } from "../localStorage/doneSet";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";

const doneCount = document.querySelector('.count__done');
let testArr = [];
let arr = [];
let myArr = [];
let prog = [];

function deleteDoneCard(element) {
    element.addEventListener('click', (event) => {
        
        const doneArray = JSON.parse(localStorage.getItem('done'));
        const progressArr = JSON.parse(localStorage.getItem('inProgress'));
        const target = event.target;
        const cardId = Number(target.closest('.todo__card').id);
        target.closest('.todo__card').remove();
        
        // arr = doneArray.filter((elem) => elem.id !== cardId);
        doneArray.forEach((elem) => {
            if (elem.id === cardId) {
                arr.push(elem);
                // arr.push(elem);
                if (doneArray) {
                    testArr = doneArray.filter(elem => arr.every(item => item.id !== elem.id));
                } else {
                    testArr = arr;
                }
            } 
        })
        // progressArr.forEach((elem) => {
        //     myArr.push(elem);
        // })
        // inProgrerssSetLocalStorage(myArr);
        console.log('progressArr', progressArr);
        console.log('doneArray', doneArray);
        // console.log('arr', arr); 
        doneSet(testArr);
        doneCount.innerHTML = testArr.length;
    })
}

export { deleteDoneCard };

// -------------------------
// Работающий код:
// import { doneSet } from "../localStorage/doneSet";

// const doneCount = document.querySelector('.count__done');

// function deleteDoneCard(element) {
//     element.addEventListener('click', (event) => {
//         let arr = [];
//         const doneArray = JSON.parse(localStorage.getItem('done'));
//         const progressArr = JSON.parse(localStorage.getItem('inProgress'));
//         const target = event.target;
//         const cardId = Number(target.closest('.todo__card').id);
//         target.closest('.todo__card').remove();
        
//         arr = doneArray.filter((elem) => elem.id !== cardId);
//         doneSet(arr);
//         doneCount.innerHTML = arr.length;
//     })
// }

// export { deleteDoneCard };
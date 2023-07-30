import { createDoneCard } from "../card/createDoneCard";

const doneCount = document.querySelector('.count__done');
let doneTodo = JSON.parse(localStorage.getItem('done')) || [];

function doneGetInLocalStorage() {
    if (localStorage.getItem('done')) {
        doneTodo.map((elem) => {
            createDoneCard(elem.id, elem.title, elem.description, elem.user, elem.date);
        })
        doneCount.innerHTML = doneTodo.length;
    }
}
doneGetInLocalStorage();

export { doneGetInLocalStorage, doneTodo };


// ---------------------------------
// Код ниже рабочий: 
// import { createDoneCard } from "../card/createDoneCard";
// import { doneSet } from "./doneSet";

// let arr = [];
// let doneTodo = [];
// const doneCount = document.querySelector('.count__done');
// function doneGetInLocalStorage() {
//     let done = JSON.parse(localStorage.getItem('done'));

//     if (done) {
//         let doneArray = JSON.parse(localStorage.getItem('done'));
//         localStorage.setItem('done', JSON.stringify(doneArray));
//         for (let i = 0; i < doneArray.length; i++) {
//             createDoneCard(doneArray[i].id, doneArray[i].title, doneArray[i].description, doneArray[i].user, doneArray[i].date);
//             doneTodo.push(doneArray[i]);
//         }
//         doneSet(doneArray);
//     }
//     arr = doneTodo;
//     doneCount.innerHTML = arr.length;
// }
// doneGetInLocalStorage();

// export { doneGetInLocalStorage, arr };
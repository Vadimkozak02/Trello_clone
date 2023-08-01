import { createCard } from "../card/createCard";

const startCount = document.querySelector('.count__start');
startTodo = JSON.parse(localStorage.getItem('start')) || [];
// По времени 44:11 добавление из LS

function startGetInLs () {
    if (localStorage.getItem('start')) {
        startTodo.map((elem) => {
            createCard(elem.id, elem.title, elem.description, elem.user, elem.date);
        })
    }
    startCount.innerHTML = startTodo.length;
}
startGetInLs();

export {startGetInLs, startTodo};



// --------------------------------
// Заменить весь код выше на рабочий ниже:

// import { createCard } from "../card/createCard";
// import { startLocalStorage } from "./startSetInLs";

// let startTodo = [];
// // По времени 44:11 добавление из LS
// const startCount = document.querySelector('.count__start');
// function startGetInLs () {
//     let startFromLocalStorage = JSON.parse(localStorage.getItem('start'));
//     let newStart = [];
//     if (startFromLocalStorage){
//         let startArray = JSON.parse(localStorage.getItem('start'));
//         localStorage.setItem('start', JSON.stringify(startArray));
//         for (let i = 0; i < startArray.length; i++) {
//             createCard(startArray[i].id, startArray[i].title, startArray[i].description, startArray[i].user, startArray[i].date);
//             newStart.push(startArray[i]);
//         }
//         startTodo = newStart;
//         startLocalStorage(startTodo);
//     }
   
//     // startTodo = newStart;
//     startCount.innerHTML = startTodo.length;
//     // startLocalStorage(startArray);
// }
// startGetInLs();

// export {startGetInLs, startTodo};
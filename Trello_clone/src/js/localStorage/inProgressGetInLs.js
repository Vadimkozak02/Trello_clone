import { createProgressCard } from "../card/createProgressCard";
// import { inProgrerssSetLocalStorage } from "./inProgressSetInLs";


const progressCount = document.querySelector('.count__progress');
let progTodo = JSON.parse(localStorage.getItem('inProgress')) || [];
function inProgressGetInLocalStorage() {
    if (localStorage.getItem('inProgress')) {
        progTodo.map((elem) => {
            createProgressCard(elem.id, elem.title, elem.description, elem.user, elem.date);
        })
        progressCount.innerHTML = progTodo.length;
    }    
}
inProgressGetInLocalStorage();

export { inProgressGetInLocalStorage, progTodo };

// -------------------------------------
// Рабочий код ниже:

// let arr = [];
// let progTodo = [];
// const progressCount = document.querySelector('.count__progress');
// function inProgressGetInLocalStorage() {
//     let inProgressArr = JSON.parse(localStorage.getItem('inProgress'));
    
//     if (inProgressArr) {
//         let progressArray = JSON.parse(localStorage.getItem('inProgress'));
//         localStorage.setItem('inProgress', JSON.stringify(progressArray));
//         for (let i = 0; i < progressArray.length; i++) {
//             createProgressCard(progressArray[i].id, progressArray[i].title, progressArray[i].description, progressArray[i].user, progressArray[i].date);
//             progTodo.push(progressArray[i]);
//         }
//         inProgrerssSetLocalStorage(progressArray);
//         // console.log('progTodo', progTodo);
//     }
//     // inProgrerssSetLocalStorage(progressArray);
//     arr = progTodo;
//     progressCount.innerHTML = arr.length;
// }
// inProgressGetInLocalStorage();

// export { inProgressGetInLocalStorage, arr };
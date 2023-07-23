import { createCard } from "../card/createCard";
import { startLocalStorage } from "./startSetInLs";
// import { startArray } from "./addCard";

let startTodo = [];
let newStart = [];
const startCount = document.querySelector('.count__start');
function startGetInLs () {
    let startFromLocalStorage = JSON.parse(localStorage.getItem('start'));
    
    if (startFromLocalStorage){
        let startArray = JSON.parse(localStorage.getItem('start'));
        localStorage.setItem('start', JSON.stringify(startArray));
        for (let i = 0; i < startArray.length; i++) {
            createCard(startArray[i].id, startArray[i].title, startArray[i].description, startArray[i].user, startArray[i].date);
            newStart.push(startArray[i]);
        }
        startLocalStorage(startArray);
    }
   
    startTodo = newStart;
    startCount.innerHTML = startTodo.length;
    // startLocalStorage(startArray);
}
startGetInLs();

export {startGetInLs, startTodo};
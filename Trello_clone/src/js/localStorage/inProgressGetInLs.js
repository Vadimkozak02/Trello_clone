import { createProgressCard } from "../card/createProgressCard";
import { inProgrerssSetLocalStorage } from "./inProgressSetInLs";

let arr = [];
let progTodo = [];
function inProgressGetInLocalStorage() {
    let inProgressArr = JSON.parse(localStorage.getItem('inProgress'));
    
    if (inProgressArr) {
        let progressArray = JSON.parse(localStorage.getItem('inProgress'));
        localStorage.setItem('inProgress', JSON.stringify(progressArray));
        for (let i = 0; i < progressArray.length; i++) {
            createProgressCard(progressArray[i].id, progressArray[i].title, progressArray[i].description, progressArray[i].user, progressArray[i].date);
            progTodo.push(progressArray[i]);
        }
        inProgrerssSetLocalStorage(progressArray);
    }
    arr = progTodo;
}
inProgressGetInLocalStorage();

export { inProgressGetInLocalStorage };
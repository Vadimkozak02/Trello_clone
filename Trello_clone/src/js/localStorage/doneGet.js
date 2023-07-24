import { createDoneCard } from "../card/createDoneCard";
import { doneSet } from "./doneSet";

let arr = [];
let doneTodo = [];
const doneCount = document.querySelector('.count__done');
function doneGetInLocalStorage() {
    let done = JSON.parse(localStorage.getItem('done'));

    if (done) {
        let doneArray = JSON.parse(localStorage.getItem('done'));
        localStorage.setItem('done', JSON.stringify(doneArray));
        for (let i = 0; i < doneArray.length; i++) {
            createDoneCard(doneArray[i].id, doneArray[i].title, doneArray[i].description, doneArray[i].user, doneArray[i].date);
            doneTodo.push(doneArray[i]);
        }
        doneSet(doneArray);
    }
    arr = doneTodo;
    doneCount.innerHTML = arr.length;
}
doneGetInLocalStorage();

export { doneGetInLocalStorage, arr };
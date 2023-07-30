import { startGetInLs } from "./localStorage/startGetInLs";
import { createCard } from "./card/createCard";
import { addBtn } from "./card/modal";
import { createBtn } from "./card/addCard";
import { getusers } from "./getUsers";
import { startLocalStorage } from "./localStorage/startSetInLs";
import { deleteCard } from "./card/deleteCard";
import { editCard } from "./card/editCard";
import { moveCard } from "./card/moveCard";
import { createProgressCard } from "./card/createProgressCard";
import { inProgrerssSetLocalStorage } from "./localStorage/inProgressSetInLs";
import { inProgressGetInLocalStorage } from "./localStorage/inProgressGetInLs";
import { backToTheStart } from "./card/backToTheStart";
import { moveInDone } from "./card/moveInDone";
import { doneGetInLocalStorage } from "./localStorage/doneGet";
import { doneSet } from "./localStorage/doneSet";
import { deleteAllCards } from "./card/deleteAllCards";

// Time in Header
function clock() {
    const headerClock = document.querySelector('.header__clock-p');
    const time = new Date();
    const options = {
        hour: 'numeric', 
        minute: 'numeric', 
    };
    const date = time.toLocaleTimeString(undefined, options);
    headerClock.innerHTML = date;
}
setInterval(clock, 1000);
clock();

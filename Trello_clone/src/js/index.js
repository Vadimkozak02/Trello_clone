import { createCard } from "./card/createCard";
import { addBtn } from "./card/modal";
import { createBtn } from "./card/addCard";
import { getusers } from "./getUsers";
import { startGetInLs } from "./localStorage/startGetInLs";
import { deleteCard } from "./card/deleteCard";
import { editCard } from "./card/editCard";
import { moveCard } from "./card/moveCard";
import { createProgressCard } from "./card/createProgressCard";
import { inProgressGetInLocalStorage } from "./localStorage/inProgressGetInLs";
import { moveInDone } from "./card/moveInDone";
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
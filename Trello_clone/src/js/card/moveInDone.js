import { doneSet } from "../localStorage/doneSet";

function moveInDone(element, backBtn, deleteBtn) {
    const doneList = document.querySelector('.todo__done-cardList');

    element.addEventListener('click', (event) => {
        element.classList.add('hidden');
        backBtn.classList.add('hidden');
        deleteBtn.classList.remove('hidden');
        const card = event.target.closest('.todo__card');
        doneList.prepend(card);

        
    })
}

export { moveInDone };
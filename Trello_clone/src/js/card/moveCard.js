import { startLocalStorage } from "../localStorage/startSetInLs";
import { inProgrerssSetLocalStorage } from "../localStorage/inProgressSetInLs";

const columnInProgress = document.querySelector('.card__list-inProgress');

let test = [];
let startArr = [];

function moveCard(element, backBtn, completeBtn, editBtn, deleteBtn, arrowBtn) {
    
    element.addEventListener('click', (event) => {
        
        editBtn.classList.add('hidden');
        deleteBtn.classList.add('hidden');
        arrowBtn.classList.add('hidden');
        backBtn.classList.remove('hidden');
        completeBtn.classList.remove('hidden');

        let testArr = [];
        let inProgressArr = [];
        const card = event.target.closest('.todo__card');
        const cardId = Number(event.target.closest('.todo__card').id);
        columnInProgress.prepend(card);
        
        let deleteCard = '';
        let moveArr = JSON.parse(localStorage.getItem('start'));
        // let arrFilter = moveArr.filter((item) => {
        //     item.id !== cardId;
        // })
        // console.log('arrFilter', arrFilter);
        // startLocalStorage(arrFilter);

        for (let i = 0; i < moveArr.length; i++) {
            if (moveArr[i].id === cardId) {
                deleteCard = cardId;
                inProgressArr.push(moveArr[i]);
            } 
            test.push(inProgressArr);
            inProgressArr = test.flat();
        }
        testArr.push(startArr);

        console.log('deleteCard', deleteCard);
        let indexOfArray = moveArr.findIndex((elem) => {
            return elem.id === deleteCard;
        })
        console.log('indexOfArray', indexOfArray);
        moveArr.splice(indexOfArray, 1);
        console.log('moveArr', moveArr);

        
        inProgrerssSetLocalStorage(inProgressArr);
    })
}

export { moveCard };
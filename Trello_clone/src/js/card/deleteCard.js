import { startLocalStorage } from "../localStorage/startSetInLs";

const startCount = document.querySelector('.count__start');

function deleteCard(element) {
    element.addEventListener('click', (event) => {
        let arr = [];
        const startArray = JSON.parse(localStorage.getItem('start')) || [];
        const target = event.target;
        const cardId = Number(target.closest('.todo__card').id);
        target.closest('.todo__card').remove();
        
        arr = startArray.filter((elem) => elem.id !== cardId);
        startLocalStorage(arr);
        startCount.innerHTML = arr.length;
    })
}

export { deleteCard };


// --------------
// Рабочий код:
// import { startLocalStorage } from "../localStorage/startSetInLs";

// const startCount = document.querySelector('.count__start');
// let arr = [];

// function deleteCard(element) {
    
//     element.addEventListener('click', (event) => {
//         const startArray = JSON.parse(localStorage.getItem('start')) || [];
//         const target = event.target;
//         const cardId = Number(target.closest('.todo__card').id);
//         target.closest('.todo__card').remove();

//         arr = startArray.filter((elem) => elem.id !== cardId);
//         startLocalStorage(arr);
//         startCount.innerHTML = arr.length;
//     })
// }

// export { deleteCard };
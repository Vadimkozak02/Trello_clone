import {createCard} from "./createCard";
import { startLocalStorage } from "../localStorage/startSetInLs";


// let progressTodo = JSON.parse(localStorage.getItem('inProgress')) || [];
let testArr = [];

// Добавляем карточку
const modal = document.querySelector('.modal__card');
const createBtn = document.querySelector('.modal__confirm-btn');
const modalTitle = document.querySelector('.modal__header-title');
const modalDesc = document.querySelector('.modal__description');
const modalUser = document.querySelector('#modal-select');
const startCount = document.querySelector('.count__start');

function addCard () {
    
    createBtn.addEventListener('click', () => {
        let startTodo = JSON.parse(localStorage.getItem('start')) || [];
        let progressArr = JSON.parse(localStorage.getItem('inProgress'));

        const title = modalTitle.value;
        const description = modalDesc.value;
        const user = modalUser.value;
    
        const randomId = Math.floor(Math.random() * 10000);
        const time = new Date();
        const options = {
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit', 
            minute: '2-digit', 
        };
        const date = time.toLocaleDateString(undefined, options);
        const temp = {};
        temp.id = randomId;
        temp.title = title;
        temp.description = description;
        temp.user = user;
        temp.date = date;

        if (title === '' || description === '') {
            alert('Все поля обязательны для заполнения');
        } else if (user === 'user1') {
            alert('Выберете ответственного за задачу пользователя')
        } 
        else {
            modal.classList.remove('open');
            createCard(randomId, title, description, user, date);
            startTodo.push(temp);
            if (progressArr) {
                testArr = startTodo.filter(elem => progressArr.every(item => item.id !== elem.id));
            } else {
                testArr = startTodo;
            }
            startLocalStorage(testArr);
            startCount.innerHTML = startTodo.length;
            modalTitle.value = '';
            modalDesc.value = '';
            modalUser.value = 'user1';
        }
        
    })
}
addCard();

export { addCard, startTodo };

// -------------
// Рабочий код:
// import {createCard} from "./createCard";
// import { startLocalStorage } from "../localStorage/startSetInLs";

// let startTodo = JSON.parse(localStorage.getItem('start')) || [];
// let progressTodo = JSON.parse(localStorage.getItem('inProgress')) || [];

// // Добавляем карточку
// const modal = document.querySelector('.modal__card');
// const createBtn = document.querySelector('.modal__confirm-btn');
// const modalTitle = document.querySelector('.modal__header-title');
// const modalDesc = document.querySelector('.modal__description');
// const modalUser = document.querySelector('#modal-select');
// const startCount = document.querySelector('.count__start');

// function addCard () {
//     createBtn.addEventListener('click', () => {
        
//         const title = modalTitle.value;
//         const description = modalDesc.value;
//         const user = modalUser.value;
    
//         const randomId = Math.floor(Math.random() * 10000);
//         const time = new Date();
//         const options = {
//             month: '2-digit', 
//             day: '2-digit',
//             hour: '2-digit', 
//             minute: '2-digit', 
//         };
//         const date = time.toLocaleDateString(undefined, options);
//         const temp = {};
//         temp.id = randomId;
//         temp.title = title;
//         temp.description = description;
//         temp.user = user;
//         temp.date = date;

//         if (title === '' || description === '') {
//             alert('Все поля обязательны для заполнения');
//         } else if (user === 'user1') {
//             alert('Выберете ответственного за задачу пользователя')
//         } 
//         else {
//             modal.classList.remove('open');
//             createCard(randomId, title, description, user, date);
//             startTodo.push(temp);
//             startLocalStorage(startTodo);
//             startCount.innerHTML = startTodo.length;
//             modalTitle.value = '';
//             modalDesc.value = '';
//             modalUser.value = 'user1';
//         }
        
//     })
// }
// addCard();

// export { addCard, startTodo };
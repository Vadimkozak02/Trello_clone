import {createCard} from "./createCard";
import { startLocalStorage } from "../localStorage/startSetInLs";
import { startTodo } from "../localStorage/startGetInLs";

// Добавляем карточку
const modal = document.querySelector('.modal__card');
const createBtn = document.querySelector('.modal__confirm-btn');
const modalTitle = document.querySelector('.modal__header-title');
const modalDesc = document.querySelector('.modal__description');
const modalUser = document.querySelector('#modal-select');
const startCount = document.querySelector('.count__start');
let startArray = [];

if (startTodo !== null) {
    startArray = startTodo;
} else {
    startArray = [];
}

function addCard () {
    createBtn.addEventListener('click', () => {
        const temp = {};
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
            startArray.push(temp);
            startLocalStorage(startArray);
            startCount.innerHTML = startArray.length;
            modalTitle.value = '';
            modalDesc.value = '';
            modalUser.value = 'user1';
        }
        
    })
}
addCard();

export { addCard };
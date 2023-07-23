import { startLocalStorage } from "../localStorage/startSetInLs";

const editBtn = document.querySelector('.todo__header-edit');
const modal = document.querySelector('.modal__card');
const modalTitle = document.querySelector('.modal__header-title');
const modalDesc = document.querySelector('.modal__description');
const modalUser = document.querySelector('#modal-select');
const modalConfirm = document.querySelector('.modal__confirm-btn');
const modalEdit = document.querySelector('.modal__edit-btn');
const modalClose = document.querySelector('.modal__cancel-btn');

function editCard(element) {
    let edtiArray = [];
    let cardTitle = '';
    let cardDesc = '';
    let cardUser = '';
    
    element.addEventListener('click', (event) => {
        let editArray = JSON.parse(localStorage.getItem('start'));
        let newTitle = '';
        let newDesc = '';
        let newUser = ''; 
        const card = event.target.closest('.todo__card');
        let editTitle = card.childNodes[0].childNodes[0];
        let editDesctiprion = card.childNodes[1].childNodes[0].childNodes[0];
        let editUser = card.childNodes[2].childNodes[0].childNodes[0];
        const cardId = Number(event.target.closest('.todo__card').id);
        modalEdit.classList.remove('modal__hidden');
        modalConfirm.classList.add('modal__hidden');
        modal.classList.add('open');
        editArray.forEach((elem) => {
            if (elem.id === cardId) {
                cardTitle = elem.title;
                cardDesc = elem.description;
                cardUser = elem.user;
            }
        })
        modalTitle.value = cardTitle;
        modalDesc.value = cardDesc;
        modalUser.value = cardUser;

        newTitle = cardTitle;
        newDesc = cardDesc;
        newUser = cardUser;

        modalTitle.addEventListener('change', () => {
            newTitle = modalTitle.value;
        })
        modalDesc.addEventListener('change', () => {
            newDesc = modalDesc.value;
        })
        modalUser.addEventListener('change', () => {
            newUser = modalUser.value;
        })

        modalEdit.addEventListener('click', () => {
            // для сохранения в LS
            editArray.forEach((elem) => {
                if (elem.id === cardId) {
                    elem.title = newTitle;
                    elem.description = newDesc;
                    elem.user = newUser;
                }
                edtiArray.push(elem);
            })
            
            editTitle.innerHTML = newTitle;
            editDesctiprion.innerHTML = newDesc;
            editUser.innerHTML = newUser
            modal.classList.remove('open');
            startLocalStorage(editArray);
        })
        startLocalStorage(editArray);
    })
}

export { editCard };
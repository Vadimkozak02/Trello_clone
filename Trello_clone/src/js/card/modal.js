const addBtn = document.querySelector('.start__add');
const modal = document.querySelector('.modal__card');
const modalClose = document.querySelector('.modal__cancel-btn');
const createBtn = document.querySelector('.modal__confirm-btn');
const editBtn = document.querySelector('.modal__edit-btn');

const modalTitle = document.querySelector('.modal__header-title');
const modalDesc = document.querySelector('.modal__description');
const modalUser = document.querySelector('#modal-select');

addBtn.addEventListener('click', () => {
    modal.classList.add('open');
    editBtn.classList.add('modal__hidden');
    if (createBtn.classList.contains('modal__hidden')) {
        createBtn.classList.remove('modal__hidden');
    }
    modalTitle.value = '';
    modalDesc.value = '';
    modalUser.value = 'user1';

    // let a = [{id:'1', name: 'Vadim'}, {id: '2', name: 'Vika'}];
    // let b = [{id: '1', name: 'Vadim'}];

    // let c = a.filter(elem => b.every(item => item.id !== elem.id));
    // console.log('c', c);

})
modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
})
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('open');
    }
})
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.classList.remove('open');
    }
})

export {addBtn};
import { moveInDone } from "./moveInDone";
import { backToTheStart } from "./backToTheStart";

function createProgressCard(id, title, description, user, date) {
    const progressList = document.querySelector('.card__list-inProgress');

    const card = document.createElement('div');
    card.className = 'todo__card progress__back';
    card.id = id;
    
    // Title
    const cardWrap = document.createElement('div');
    cardWrap.className = 'todo__header-wrap';
    const cardTitle = document.createElement('h3');
    cardTitle.className = 'todo__header-title';
    cardTitle.innerHTML = title;
    const cardBtnWrap = document.createElement('div');
    cardBtnWrap.className = 'todo__btn-wrap';
    const editBtn = document.createElement('button');
    editBtn.className = 'todo__header-edit hidden';
    editBtn.innerHTML = 'Edit';
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'todo__header-delete hidden';
    deleteBtn.innerHTML = 'delete';
    const backBtn = document.createElement('button');
    backBtn.className = 'todo__inProgrerss-back';
    backBtn.innerHTML = 'back';
    const completeBtn = document.createElement('button');
    completeBtn.className = 'todo__inProgrerss-complete';
    completeBtn.innerHTML = 'complete';
    // Description 
    const cardDescriptionWrap = document.createElement('div');
    cardDescriptionWrap.className = 'todo__description-wrap';
    const cardDescription = document.createElement('div');
    cardDescription.className = 'todo__description';
    const cardDescriptionText = document.createElement('p');
    cardDescriptionText.innerHTML = description;
    cardDescriptionText.className = 'cardDescriptionText';
    const cardDescriptionBtn = document.createElement('button');
    cardDescriptionBtn.className = 'todo__description-button hidden';
    const cardArrow = document.createElement('div');
    cardArrow.className = 'fa-solid fa-arrow-right';
    // Footer
    const cardFooterWrap = document.createElement('div');
    cardFooterWrap.className = 'todo__footer-wrap';
    const cardFooterUser = document.createElement('div');
    cardFooterUser.className = 'todo__footer-user';
    const cardFooterUserName = document.createElement('p');
    cardFooterUserName.innerHTML = user;
    const cardFooterTime = document.createElement('div');
    cardFooterTime.className = 'todo__footer-time';
    const cardFooterUserTime = document.createElement('p');
    cardFooterUserTime.innerHTML = date;

    // Append
    
    // Header
    cardWrap.append(cardTitle);
    cardWrap.append(cardBtnWrap);
    // Button from card title
    cardBtnWrap.append(editBtn);
    cardBtnWrap.append(deleteBtn);
    cardBtnWrap.append(backBtn);
    cardBtnWrap.append(completeBtn);
    //Description
    cardDescription.append(cardDescriptionText);
    cardDescriptionBtn.append(cardArrow);
    cardDescriptionWrap.append(cardDescription);
    cardDescriptionWrap.append(cardDescriptionBtn);
    // Footer
    cardFooterUser.append(cardFooterUserName);
    cardFooterTime.append(cardFooterUserTime);
    cardFooterWrap.append(cardFooterUser);
    cardFooterWrap.append(cardFooterTime);
    // Card append all
    card.append(cardWrap);
    card.append(cardDescriptionWrap);
    card.append(cardFooterWrap);
    progressList.append(card);

    // Находим кнопку complete и перемещаем дело в выполненные
    moveInDone(completeBtn, backBtn, deleteBtn);

    // Возвращаем в начало
    backToTheStart(backBtn, completeBtn, editBtn, deleteBtn, cardDescriptionBtn);
}

export { createProgressCard };
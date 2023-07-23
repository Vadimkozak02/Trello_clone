import { addCard } from "./card/addCard";

async function getusers () {
    const modalUsers = document.querySelector('#modal-select');
    const users = await fetch('https://64bba7417b33a35a44468c90.mockapi.io/users');
    const usersJson = await users.json();
    const userId = [];
    usersJson.forEach((elem) => {
        let option = document.createElement('option');
        option.id = elem.id;
        option.value = elem.name;
        option.innerHTML = elem.name;
        modalUsers.append(option);
        userId.push(elem.id);
    })
}
getusers();

export { getusers };
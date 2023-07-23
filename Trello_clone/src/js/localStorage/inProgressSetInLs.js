function inProgrerssSetLocalStorage(progress) {
    localStorage.setItem('inProgress', JSON.stringify(progress));
}

export { inProgrerssSetLocalStorage };
function startLocalStorage(start) {
    localStorage.setItem('start', JSON.stringify(start));
}

export { startLocalStorage };
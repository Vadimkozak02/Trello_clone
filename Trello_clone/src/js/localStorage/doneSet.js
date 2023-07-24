function doneSet(doneArr) {
    localStorage.setItem('done', JSON.stringify(doneArr));
}

export { doneSet };
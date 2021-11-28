/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line no-unused-vars
class Data {
  // eslint-disable-next-line no-empty-function
  constructor() {}

  save(elem) {
    let textInput = '';
    let titleBlock = '';
    if (elem.tagName === 'INPUT') {
      textInput = elem.value;
      titleBlock = elem.parentElement.parentElement.querySelector('.tasks-list__title').textContent;
    } else {
      textInput = elem.textContent;
      titleBlock = elem.parentElement.parentElement.parentElement.querySelector('.tasks-list__title').textContent;
    }
    const arrayLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    const newIssues = {
      id: 'task',
      name: textInput,
    };

    arrayLocalStorage.forEach((arr) => {
      if (arr.title === titleBlock) {
        arr.issues.push(newIssues);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(arrayLocalStorage));
    window.location.reload();
  }
}

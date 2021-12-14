/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
// eslint-disable-next-line no-unused-vars
export class Data {
  // eslint-disable-next-line no-empty-function
  constructor(boardsMocks) {
    this.boardsMocks = boardsMocks;
  }

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

  setData() {
    if (localStorage.getItem('tasks') === null) {
      localStorage.setItem('tasks', JSON.stringify(this.boardsMocks));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  updateData(array) {
    localStorage.setItem('tasks', JSON.stringify(array));
    window.location.reload();
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    return JSON.parse(localStorage.getItem('tasks'));
  }
}

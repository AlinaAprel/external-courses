// eslint-disable-next-line no-unused-vars
export class TaskList {
  constructor(tasksList, boardsMocks) {
    this.tasksList = tasksList;
    this.boardsMocks = boardsMocks;
  }

  create(list) {
    const board = document.createElement('div');
    board.classList.add('tasks-list__board');

    const title = document.createElement('h2');
    title.classList.add('tasks-list__title');
    title.textContent = list.title;
    board.appendChild(title);

    const image = document.createElement('img');
    image.classList.add('tasks-list__image');
    // eslint-disable-next-line global-require
    image.src = require('../images/options.svg');
    board.appendChild(image);

    const div = document.createElement('div');
    div.classList.add('tasks-list__all-tasks');

    list.issues.forEach((elem) => {
      if (elem !== null) {
        const task = document.createElement('div');
        task.classList.add('tasks-list__task');

        const text = document.createElement('p');
        text.classList.add('tasks-list__text');
        text.textContent = elem.name;

        task.appendChild(text);
        div.appendChild(task);
        board.appendChild(div);
      }
    });

    const button = document.createElement('button');
    button.classList.add('tasks-list__button');
    button.textContent = '+ Add card';
    board.appendChild(button);

    this.tasksList.appendChild(board);
  }

  render() {
    JSON.parse(localStorage.getItem('tasks')).forEach((list) => {
      this.create(list);
    });
  }
}

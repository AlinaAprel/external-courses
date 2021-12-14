// eslint-disable-next-line no-unused-vars
export class TaskList {
  constructor(tasksList, boardsMocks, task, data) {
    this.tasksList = tasksList;
    this.boardsMocks = boardsMocks;
    this.task = task;
    this.data = data;
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

  // eslint-disable-next-line class-methods-use-this
  createNewList() {
    const div = document.createElement('div');
    div.classList.add('tasks-list__board');

    const input = document.createElement('input');
    input.classList.add('tasks-list__task-input');
    input.id = 'list-input';
    input.placeholder = 'введите название...';

    const img = document.createElement('img');
    img.classList.add('tasks-list__image');
    img.id = 'list-image';
    // eslint-disable-next-line global-require
    img.src = require('../images/options.svg');

    div.appendChild(input);
    div.appendChild(img);

    this.tasksList.prepend(div);
    this.task.setFocus(input);

    input.addEventListener('blur', () => {
      if (input.value === '') {
        this.task.removeElem(input.parentElement);
      } else {
        const localData = this.data.getData();
        console.log(localData);
        const newList = {
          title: input.value,
          issues: [],
        };

        localData.unshift(newList);

        this.data.updateData(localData);

        console.log(this.data.getData());
        this.data.getData().forEach((list) => {
          this.create(list);
        });
      }
    });
  }

  render() {
    JSON.parse(localStorage.getItem('tasks')).forEach((list) => {
      this.create(list);
    });
  }
}

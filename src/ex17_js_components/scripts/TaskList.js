// eslint-disable-next-line no-unused-vars
class TaskList {
  constructor(tasksList, boardsMocks) {
    this.tasksList = tasksList;
    this.boardsMocks = boardsMocks;
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

  create(list) {
    const board = document.createElement('div');
    board.classList.add('tasks-list__board');

    const title = document.createElement('h2');
    title.classList.add('tasks-list__title');
    title.textContent = list.title;
    board.appendChild(title);

    const image = document.createElement('img');
    image.classList.add('tasks-list__image');
    image.src = './images/options.svg';
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

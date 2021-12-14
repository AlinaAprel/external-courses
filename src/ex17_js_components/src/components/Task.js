// eslint-disable-next-line no-unused-vars
export class Task {
  constructor(buttons, data) {
    this.buttons = buttons;
    this.data = data;
  }

  writeNewTask(parent) {
    const input = document.createElement('input');
    input.classList.add('tasks-list__task-input');
    input.id = 'task-input';
    const tasksContainer = parent.querySelector('.tasks-list__all-tasks');

    tasksContainer.appendChild(input);
    this.setFocus(input);
    input.addEventListener('blur', () => this.data.save(input));
  }

  addNewTask(data, indexOfLastBlock, task, dropdown) {
    const block = document.querySelectorAll('.tasks-list__board')[indexOfLastBlock];
    data[indexOfLastBlock].issues.forEach((elem) => {
      if (elem !== null) {
        if (elem.name === task.textContent) {
          block.querySelectorAll('.tasks-list__task').forEach((blockTask) => {
            if (blockTask.textContent === elem.name) {
              const index = data[indexOfLastBlock].issues.indexOf(elem);
              blockTask.remove();
              // eslint-disable-next-line no-param-reassign
              delete data[indexOfLastBlock].issues[index];
              data[indexOfLastBlock + 1].issues.push(elem);
            }
          });
        }
      }
    });
    this.data.updateData(data);
    this.removeElem(dropdown);
  }

  getAnotherTasks(button, nameBlock) {
    const data = this.data.getData();
    data.forEach((block) => {
      if (block.title === nameBlock.textContent) {
        const indexOfLastBlock = Math.abs(data.indexOf(block) - 1);
        const dropdownTasks = data[indexOfLastBlock].issues;
        const tasksBlock = button.parentElement.querySelector('.tasks-list__all-tasks');

        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');

        const dropbtn = document.createElement('button');
        dropbtn.classList.add('dropbtn');
        dropbtn.textContent = `${data[indexOfLastBlock].title} tasks`;

        const dropdownContent = document.createElement('div');
        dropdownContent.classList.add('dropdown-content');

        dropdownTasks.forEach((elem) => {
          if (elem !== null) {
            const task = document.createElement('a');
            task.textContent = elem.name;

            task.addEventListener('click', () => this.addNewTask(data, indexOfLastBlock, task, dropdown));
            dropdownContent.appendChild(task);
          }
        });
        dropdown.appendChild(dropbtn);
        dropdown.appendChild(dropdownContent);
        tasksBlock.appendChild(dropdown);
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  setFocus(elem) {
    elem.focus();
  }

  // eslint-disable-next-line class-methods-use-this
  removeElem(elem) {
    elem.remove();
  }

  setEventListeners() {
    this.buttons.forEach((button) => {
      const nameBlock = button.parentElement.querySelector('.tasks-list__title');
      if (nameBlock.textContent === 'Backlog') {
        button.addEventListener('click', () => {
          this.writeNewTask(button.parentElement);
        });
      } else {
        button.addEventListener('click', () => {
          this.getAnotherTasks(button, nameBlock);
        });
      }
    });
  }
}

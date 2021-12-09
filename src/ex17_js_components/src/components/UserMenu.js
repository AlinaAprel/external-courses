// eslint-disable-next-line no-unused-vars
export class UserMenu {
  constructor(menu, btnArrow) {
    this.menu = menu;
    this.btnArrow = btnArrow;
  }

  createMenu() {
    const ul = document.createElement('ul');
    ul.classList.add('menu__list');

    const liAccount = document.createElement('li');
    liAccount.classList.add('menu__account');
    liAccount.textContent = 'Account';

    const liTasks = document.createElement('li');
    liTasks.classList.add('menu__tasks');
    liTasks.textContent = 'Tasks';

    const liSettings = document.createElement('li');
    liSettings.classList.add('menu__settings');
    liSettings.textContent = 'Settings';

    const liLogOut = document.createElement('li');
    liLogOut.classList.add('menu__log-out');
    liLogOut.textContent = 'Log out';

    ul.appendChild(liAccount);
    ul.appendChild(liTasks);
    ul.appendChild(liSettings);
    ul.appendChild(liLogOut);

    this.menu.appendChild(ul);
  }

  // eslint-disable-next-line class-methods-use-this
  close() {
    document.querySelector('.menu__list').remove();
  }

  btnUp() {
    this.btnArrow.style = 'transform: rotate(0deg)';
  }

  btnDown() {
    this.btnArrow.style = 'transform: rotate(180deg)';
  }
}

/* eslint-disable no-undef */
// eslint-disable-next-line func-names
(function () {
  const tasksList = document.querySelector('.tasks-list');
  const account = document.querySelector('.header__account');
  const btnArrow = document.querySelector('.header__arrow');
  const menu = document.querySelector('.menu');

  const taskList = new TaskList(tasksList, boardsMocks);
  taskList.setData();
  taskList.render();

  const userMenu = new UserMenu(menu, btnArrow);
  const data = new Data();
  const buttons = document.querySelectorAll('.tasks-list__button');
  const task = new Task(buttons, data, taskList);
  task.setEventListeners();

  account.addEventListener('click', () => {
    if (document.querySelector('.menu__list')) {
      userMenu.close();
      userMenu.btnUp();
    } else {
      userMenu.createMenu();
      userMenu.btnDown();
    }
  });
}());

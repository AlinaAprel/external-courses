import { Data } from './components/Data';
import { Task } from './components/Task';
import { TaskList } from './components/TaskList';
import { UserMenu } from './components/UserMenu';
import { boardsMocks } from './components/boardsMocks';

/* eslint-disable no-undef */
// eslint-disable-next-line func-names
(function () {
  const tasksList = document.querySelector('.tasks-list');
  const account = document.querySelector('.header__account');
  const btnArrow = document.querySelector('.header__arrow');
  const menu = document.querySelector('.menu');

  const data = new Data(boardsMocks);
  const taskList = new TaskList(tasksList, boardsMocks);
  data.setData();
  taskList.render();

  const userMenu = new UserMenu(menu, btnArrow);
  const buttons = document.querySelectorAll('.tasks-list__button');
  const task = new Task(buttons, data);
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

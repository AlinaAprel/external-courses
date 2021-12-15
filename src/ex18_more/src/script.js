import { Data } from './components/Data';
import { Task } from './components/Task';
import { TaskList } from './components/TaskList';
import { UserMenu } from './components/UserMenu';
import { boardsMocks } from './components/boardsMocks';

/* eslint-disable no-undef */
// eslint-disable-next-line func-names
const tasksList = document.querySelector('.tasks-list');
const account = document.querySelector('.header__account');
const btnArrow = document.querySelector('.header__arrow');
const menu = document.querySelector('.menu');
const btnCreateList = document.querySelector('.header__button');

const data = new Data(boardsMocks);
const buttons = document.querySelectorAll('.tasks-list__button');
const task = new Task(buttons, data);
const taskList = new TaskList(tasksList, boardsMocks, task, data);
data.setData();
taskList.render();

const userMenu = new UserMenu(menu, btnArrow);
task.setEventListeners(boardsMocks[0]);

account.addEventListener('click', () => {
  if (document.querySelector('.menu__list')) {
    userMenu.close();
    userMenu.btnUp();
  } else {
    userMenu.createMenu();
    userMenu.btnDown();
  }
});

btnCreateList.addEventListener('click', () => {
  taskList.createNewList();
});

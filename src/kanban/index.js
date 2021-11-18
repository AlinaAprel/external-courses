const account = document.querySelector('.header__account');
const userMenu = document.querySelector('.menu');
const btnArrow = document.querySelector('.header__arrow');

function createMenu(container) {
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

  container.appendChild(ul);
}

account.addEventListener('click', () => {
  if (document.querySelector('.menu__list')) {
    document.querySelector('.menu__list').remove();
    btnArrow.style = 'transform: rotate(0deg)';
  } else {
    createMenu(userMenu);
    btnArrow.style = 'transform: rotate(180deg)';
  }
});

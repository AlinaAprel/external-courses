const text = document.querySelector('.search__value');

const debounce = (fn, ms) => {
  let timeout;
  return function () {
    // eslint-disable-next-line prefer-rest-params
    const fnCall = () => { fn.apply(this, arguments); };

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};

function showValue(e) {
  const value = e.target.value;
  text.textContent = value;
}

document.querySelector('.search__input').addEventListener('keyup', debounce(showValue, 500));

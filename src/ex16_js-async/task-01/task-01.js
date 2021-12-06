// eslint-disable-next-line no-unused-vars
function get(url) {
  return new Promise((succed, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.addEventListener('load', () => {
      if (request.status < 400) {
        succed(request.response);
      } else {
        fail(new Error(`request failed: ${request.statusText}`));
      }
    });
    request.addEventListener('error', () => {
      fail(new Error('network error'));
    });
    request.send();
  });
}

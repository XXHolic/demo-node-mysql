function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello, Node MySQL';
  fetch('http://localhost:3000').then(res => res.json()).then((data) => {
    console.info('backData', data)
  })
  return element;
}

document.body.appendChild(component());
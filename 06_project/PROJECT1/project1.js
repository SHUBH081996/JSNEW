const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const buttonas = document.querySelector('a');
console.log(buttonas);

const home = document.getElementById('home');
console.log(home);

home.addEventListener('mouseover', function (e) {
  home.style.backgroundColor = 'pink';
});
home.addEventListener('mouseout', function (e) {
  home.style.backgroundColor = '';
});

buttons.forEach(function (button) {
  console.log(button);

  button.addEventListener('mouseover', function () {
    button.style.backgroundColor = 'lightblue';
    console.log('Mouse is over the button!');
  });

  // Optionally, listen for when the mouse leaves
  button.addEventListener('mouseout', function () {
    button.style.backgroundColor = '';
    console.log('Mouse left the button!');
  });
  button.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

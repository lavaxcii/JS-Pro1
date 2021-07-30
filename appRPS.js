const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const buttons = document.createElement('button');
const body = document.querySelector('body');

document.body.appendChild(div4);
const div4div = document.querySelector('div');

div4div.appendChild(div1);
div4div.appendChild(div2);
div4div.appendChild(div3);

const divs = document.querySelectorAll('div');

const divsToArray = Array.from(divs);

divsToArray.forEach((ofdivs) => {
  ofdivs.classList.add('div' + (divsToArray.indexOf(ofdivs) + 1));
});
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const body = document.querySelector('body');

body.appendChild(div1);
const divsInDiv = document.querySelector('div');
divsInDiv.appendChild(div2);
divsInDiv.appendChild(div3);
divsInDiv.appendChild(div4);

const divs = document.querySelectorAll('div');
const divsToArray = Array.from(divs);
divsToArray.forEach((ofdivs) => {
  ofdivs.classList.add('div' + (divsToArray.indexOf(ofdivs) + 1));
});

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const div2Btn = document.querySelector('.div2');
div2Btn.appendChild(button1);
div2Btn.appendChild(button2);
div2Btn.appendChild(button3);

const button4 = document.createElement('button');
const button5 = document.createElement('button');
const button6 = document.createElement('button');
const div4Btn = document.querySelector('.div4');
div4Btn.appendChild(button4);
div4Btn.appendChild(button5);
div4Btn.appendChild(button6);

const buttons = document.querySelectorAll('button');
const buttonsToArray = Array.from(buttons);
buttonsToArray.forEach((ofbtns) => {
  ofbtns.classList.add('button' + (buttonsToArray.indexOf(ofbtns) + 1));
});

//* OVAKO SE RIJEŠAVA PROBLEM DODAVANJA višestrukih NOVIH ELEMENATA NA NODOVE!! Bravo ja ^^
buttonsToArray.forEach((ofbtns) => {
  const img = document.createElement('img');
  ofbtns.appendChild(img);
  img.classList.add('img' + (buttonsToArray.indexOf(ofbtns) + 1));

  if (img.classList.contains('img1')) {
    img.setAttribute('src', './icons/rockSmall.png');
    img.setAttribute('width', '90vw');
    img.setAttribute('height', '90vh');
  };

  if (img.classList.contains('img2')) {
    img.setAttribute('src', './icons/paperSmall.png');
    img.setAttribute('width', '90vw');
    img.setAttribute('height', '90vh');
  };

  if (img.classList.contains('img3')) {
    img.setAttribute('src', './icons/scissorsSmall.png');
    img.setAttribute('width', '90vw');
    img.setAttribute('height', '90vh');
  };

  if (img.classList.contains('img4')) {
    img.setAttribute('src', './icons/rockSmallComputer.png');
    img.setAttribute('width', '90vw');
    img.setAttribute('height', '90vh');
  };

  if (img.classList.contains('img5')) {
    img.setAttribute('src', './icons/paperSmallComputer.png');
    img.setAttribute('width', '90vw');
    img.setAttribute('height', '90vh');
  };

  if (img.classList.contains('img6')) {
    img.setAttribute('src', './icons/scissorsSmallComputer.png');
    img.setAttribute('width', '90vw');
    img.setAttribute('height', '90vh');
  };

});

const middleResult = document.querySelector('.div3');
const pResult = document.createElement('span');
const cResult = document.createElement('span');
middleResult.appendChild(pResult);
middleResult.appendChild(cResult);
pResult.className = 'pResult';
cResult.className = 'cResult';

/* TODO:

1. Prvo napraviti logiku igre
  1.1. Dodati NPC options (easy)
  1.2. Dodati PC options
  1.3. Dodati rezultantu sučeljavanja opcija
2. Kada se deklarira pobjednik runde to bi se trebalo objaviti na sredini ekrana (treba nam nekin span u sredini u kojem ćemo generirati tekst)
3. Rezultat se treba pratiti u ona dva već postojeća spana koji su zamišljeni kao animirani barovi koji se pune! *.* (to ćemo zasada preskočiti - u nekoj sljedećoj verziji se pozabaviti time)
4. Ideja je napraviti da kada player odabere izbor, da se onda iskoristi ona fora ili sa transform ili sa jednostavnim dodavanjem klase/a da bi se postigao efekt kako se ono plavo/crveno oko buttona kroz ease od par sekundi mjenja ka žutom
5. Tu se eventualno na kraju toga (što bi moglo biti u timeoutu) može staviti da se odigra neki zvuk
6. Ovo bi sve trebalo biti u nekom jednom kliku, preko eventListenera

*/

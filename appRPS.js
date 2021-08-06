/**
* ! REFACTOR (there is unnecessary repetition)
* ! Put more steel in game logic
*/

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');

const introScreen = document.createElement('div');

const body = document.querySelector('body');

body.appendChild(div1);
const divsInDiv = document.querySelector('div');
divsInDiv.appendChild(div2);
divsInDiv.appendChild(div3);
divsInDiv.appendChild(div4);

divsInDiv.appendChild(introScreen);

const divs = document.querySelectorAll('div');
const divsToArray = Array.from(divs);
divsToArray.forEach((ofdivs) => {
  ofdivs.classList.add('div' + (divsToArray.indexOf(ofdivs) + 1));
});

const introS = document.querySelector('.div5');
const introText = document.createElement('h3');
introS.appendChild(introText);
const addIntroTxt = document.querySelector('h3');
addIntroTxt.textContent = 'Welcome to the Rock Stable version of RPS - Enter at your own risk!';

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
const button7Enter = document.createElement('button');
introS.appendChild(button7Enter);

const buttons = document.querySelectorAll('button');
const buttonsToArray = Array.from(buttons);
buttonsToArray.forEach((ofbtns) => {
  ofbtns.classList.add('button' + (buttonsToArray.indexOf(ofbtns) + 1));
});

const button7text = document.querySelector('.button7');
button7text.textContent = 'ENTER THE DUNGEON';

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
const resultText = document.createElement('span');
middleResult.appendChild(pResult);
middleResult.appendChild(resultText);
middleResult.appendChild(cResult);
pResult.className = 'pResult';
resultText.className = 'resultText';
cResult.className = 'cResult';
const playerR = document.querySelector('.pResult');
const rText = document.querySelector('.resultText');
const computerR = document.querySelector('.cResult');

const title = document.querySelector('h2');

introS.addEventListener('mouseenter', () => {
  div2Btn.classList.add('fadeOut');
  div4Btn.classList.add('fadeOut');
  middleResult.classList.add('fadeOut');
  title.classList.add('fadeOut');
});

button7Enter.addEventListener('click', () => {
  introS.classList.add('fadeOut');
  const audioIntro = document.querySelector('.audioIntro');
  audioIntro.play();
  div2Btn.classList.add('fadeIn');
  div4Btn.classList.add('fadeIn');
  middleResult.classList.add('fadeIn');
  title.classList.add('fadeIn');
});

const buttonsWClasses = document.querySelectorAll('button');
const button4c = document.querySelector('.button4');
const button5c = document.querySelector('.button5');
const button6c = document.querySelector('.button6');

function match() {
  let round = 0;
  let playerScore = 0;
  let computerScore = 0;
  rText.textContent = `Match is about to begin.`;
  playerR.textContent = 0;
  computerR.textContent = 0;

  function check() {
    if (round === 5 && playerScore < computerScore) {
      rText.textContent = `Glorius winner is COMPUTER!`;
      return restart();
    } else if (round === 5 && playerScore > computerScore) {
      rText.textContent = `Glorious winner is PLAYER!`;
      return restart();
    } else if (round === 5 && playerScore === computerScore) {
      rText.textContent = `There is no glory today... NO winners! (sadFace)`;
      return restart();
    };
  };

  function win() {
    rText.textContent = `You win!`;
    playerScore += 2;
    playerR.textContent = playerScore;
    computerScore += 0;
    computerR.textContent = computerScore;
    round += 1;
  };

  function draw() {
    rText.textContent = `It is a draw`;
    playerScore += 1;
    playerR.textContent = playerScore;
    computerScore += 1;
    computerR.textContent = computerScore;
    round += 1;
  };

  function lose() {
    rText.textContent = `You lose!`;
    playerScore += 0;
    playerR.textContent = playerScore;
    computerScore += 2;
    computerR.textContent = computerScore;
    round += 1;
  };
  
  buttonsWClasses.forEach((ofbtns) => {
    ofbtns.addEventListener('click', () => {
      const choicesNPC = ['button4', 'button5', 'button6'];
      const choiceNPC = choicesNPC[Math.floor(Math.random() * 3) + 0];

      if (ofbtns.classList.contains('button1') && choiceNPC === 'button4') {
        if (ofbtns.classList.contains('button1')) {
          ofbtns.classList.add('highlight');
          button4c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button4c.classList.remove('highlight');
          }, 1500);
        };
        draw();
        check();
      } else if (ofbtns.classList.contains('button1') && choiceNPC === 'button5') {
        if (ofbtns.classList.contains('button1')) {
          ofbtns.classList.add('highlight');
          button5c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button5c.classList.remove('highlight');
          }, 1500);
        };
        lose();
        check();
      } else if (ofbtns.classList.contains('button1') && choiceNPC === 'button6') {
        if (ofbtns.classList.contains('button1')) {
          ofbtns.classList.add('highlight');
          button6c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button6c.classList.remove('highlight');
          }, 1500);
        };
        win();
        check();
      } else if (ofbtns.classList.contains('button2') && choiceNPC === 'button4') {
        if (ofbtns.classList.contains('button2')) {
          ofbtns.classList.add('highlight');
          button4c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button4c.classList.remove('highlight');
          }, 1500);
        };
        win();
        check();
      } else if (ofbtns.classList.contains('button2') && choiceNPC === 'button5') {
        if (ofbtns.classList.contains('button2')) {
          ofbtns.classList.add('highlight');
          button5c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button5c.classList.remove('highlight');
          }, 1500);
        };
        draw();
        check();
      } else if (ofbtns.classList.contains('button2') && choiceNPC === 'button6') {
        if (ofbtns.classList.contains('button2')) {
          ofbtns.classList.add('highlight');
          button6c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button6c.classList.remove('highlight');
          }, 1500);
        };
        lose();
        check();
      } else if (ofbtns.classList.contains('button3') && choiceNPC === 'button4') {
        if (ofbtns.classList.contains('button3')) {
          ofbtns.classList.add('highlight');
          button4c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button4c.classList.remove('highlight');
          }, 1500);
        };
        lose();
        check();
      } else if (ofbtns.classList.contains('button3') && choiceNPC === 'button5') {
        if (ofbtns.classList.contains('button3')) {
          ofbtns.classList.add('highlight');
          button5c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button5c.classList.remove('highlight');
          }, 1500);
        };
        win();
        check();
      } else if (ofbtns.classList.contains('button3') && choiceNPC === 'button6') {
        if (ofbtns.classList.contains('button3')) {
          ofbtns.classList.add('highlight');
          button6c.classList.add('highlight');
          setTimeout(() => {
            ofbtns.classList.remove('highlight');
            button6c.classList.remove('highlight');
          }, 1500);
        };
        draw();
        check();
        };
      });
    });
  };

match();

function restart() {
  setTimeout(() => {
    rText.textContent = `Restarting game...`;
  }, 3000);
  setTimeout(() => {
  window.location.reload();
  }, 5000);
};
// set game global value to null 
let game = null;

// remove overlay
reset = () => {
  const querty = document.querySelectorAll(`.key`);
  for(let i = 0; i < querty.length; i++){
      querty[i].classList.remove('chosen');
      querty[i].disabled = false; 
      querty[i].style.cursor = '';
      querty[i].style.backgroundColor = '';
  }

  // Remove last category from display
  if(document.querySelector('#banner p')){
    document.querySelector('#banner p').remove();
  }
   
  // remove previous phrase from the display
  let phrase = document.querySelectorAll('#phrase li');
  let li = document.querySelectorAll('#phrase li');
  for(let i = 0; i < phrase.length; i++) {
    document.querySelector('#phrase ul').removeChild(li[i]);
  }
  document.querySelector('#overlay').style.display = 'none';

  // set lives
  const lives = `
    <ol>
      <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
      <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
      <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
      <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
      <li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>
    </ol>
    `;
  const scoreboard = document.querySelector('#scoreboard');
  scoreboard.innerHTML = lives;
}


// mark and disable the key that was pressed
markButton = event => {
  event.preventDefault();
  if(event.target.nodeName === 'BUTTON'){
    const querty = document.querySelectorAll(`.key`);
    for(let i = 0; i < querty.length; i++){
      if(querty[i].textContent === event.target.innerHTML){
        querty[i].classList.add('chosen');
        querty[i].disabled = true; 
        querty[i].style.cursor = 'default';
      }
    }
  }
  game.handleInteraction(); 
}

// Starts a new game
document.querySelector('#btn__reset').addEventListener('click', () =>{
  this.reset();
  game = new Game(phrases, 0);
  game.startGame();
});

// add event listener on the keys
document.querySelector('#qwerty').addEventListener('click', event => this.markButton(event));

// supress users ability to click around in the phrase area and have the browsers text selector reveal the phrase
document.addEventListener("mousedown", function (e) {
  e.preventDefault();
});
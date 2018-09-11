const startGame = document.getElementById('btn__reset');
const querty = document.querySelectorAll(`.key`);

// this function hides the start screen overlay.
resetDisplay = () => {

}

/*
  this function is called when a player selects a letter.
  It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
*/ 
markButton = () => {

}

/*
  Add an event listener to the "Start Game" button which calls the resetDisplay() function,
  creates a new Game object, and starts the game
*/
startGame.addEventListener('click', event => {
  event.preventDefault();
});

// Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
querty.addEventListener('click', event => {
  event.preventDefault();
  this.markButton();
});
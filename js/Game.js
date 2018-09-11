class Game {
  constructor(phrases, missed, phraseWithoutSpaces, phraseForMessage) {
    this.phrase = new Phrase;
    this.phrases = phrases;
    this.phraseWithoutSpaces = phraseWithoutSpaces;
    this.phraseForMessage = phraseForMessage;
    this.missed = missed;
    this.maxMissed = 5;
    this.win = false;
  }

  getRandomPhrase() {
    // pick a random category
    const phraseObject = new Phrase(this.phrases[Math.floor(Math.random() * this.phrases.length)]).phrase;
    const category = phraseObject.category;

    // pick a random phrase from within the category
    const phraseFromArray = phraseObject.phrases[Math.floor(Math.random() * this.phrases.length)];
    const phrase = {"category":category,"phrase": phraseFromArray, "phraseNoSpace": phraseFromArray.split(' ').join('')};
    return phrase;
  }

  handleInteraction() {
    // redundent step to phrase.js checkLetter() - one or the other could be removed from this project
      const querty = document.querySelectorAll('.key');
      for(let i = 0; i < querty.length; i++){
        if(event.target.innerHTML === querty[i].textContent || event.key === querty[i].textContent){
          this.phrase.checkLetter(event);
        }
      
    }
  }


  removeLife() {
    this.missed++;
    if(event.target.nodeName === 'BUTTON'){
      event.target.style.backgroundColor = 'red';
    }
    const querty = document.querySelectorAll('.key');
    for(let i = 0; i < querty.length; i++){
      if(event.key === querty[i].textContent){
        querty[i].style.backgroundColor = 'red';
        querty[i].disabled = true;
      }
    }
    if(this.missed >= 1 && this.missed <= this.maxMissed){
      const button = document.querySelectorAll('#qwerty button');
      let lives = document.querySelector('.tries').firstChild;
      lives.src = './images/lostHeart.png';
      lives.parentElement.classList.add('tried');
      lives.parentElement.classList.remove('tries');
      for( let i = 0; i < button.length; i++){
        if(button[i].textContent === event){
          button[i].classList.add('missed');
        }
      }
    }
  }

  checkForWin() {
    if(this.missed === this.maxMissed){
      this.win = false;
      this.gameOver();
    } else if(document.querySelectorAll('.show').length === this.phraseWithoutSpaces.length){
      this.win = true;
      this.gameOver();
    } 
  }

  gameOver() {
    const overlay = document.querySelector('#overlay');
    const message = document.querySelector('#game-over-message');
    const button = document.querySelector('#btn__reset');
    overlay.style.display = 'flex';
    button.textContent = 'Play again?';
    this.missed = 0;
    if(this.win === true){
      message.textContent = `Congratulations on guessing: ${this.phraseForMessage.toUpperCase()}!`;
      overlay.className = 'win';   
    } else {
      message.textContent = `The phrase was: "${this.phraseForMessage.toUpperCase()}". Better luck next time!`;
      overlay.className = 'lose';
    }
  }

  startGame() {
    // Get random phrase
    let phrase = this.getRandomPhrase();
    // Add phrase to display
    this.phrase.addPhraseToDisplay(phrase);
    this.phraseForMessage = phrase.phrase;
    this.phraseWithoutSpaces = phrase.phraseNoSpace;
    // listen for events
    this.handleInteraction();
  }
}

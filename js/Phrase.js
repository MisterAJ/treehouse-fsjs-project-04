class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
    this.match = null;
    
  }
  

  addPhraseToDisplay(phrase) {
    for(let i = 0; i < phrase.phrase.length; i++){
      let li = document.createElement('li');
      // adds class name depending if letter or space
      li.textContent = `${phrase.phrase[i]}`;
      li.textContent === " " ? li.className = 'space' : li.className = 'letter';
      document.querySelector('#phrase ul').appendChild(li);      
    }
    const div = document.createElement('p');
    div.textContent = `Today's Category: ${phrase.category}`;
    document.querySelector('#banner').append(div);
  }


  checkLetter(event) {
    // verified in handleInteraction() - redundent step
    const querty = document.querySelectorAll('.key');
    for(let i = 0; i < querty.length; i++){
      if( event.target.innerHTML === querty[i].textContent || event.key === querty[i].textContent){
        this.showMatchedLetter(event);
      }
    }
  }


  showMatchedLetter(event) {
    // if letter is a match display it
    const letter = document.querySelectorAll(".letter");
    this.match = null;
    for(let i = 0; i < letter.length; i++){
      // confirm if onscreen keyboard o or physical keybord key matches letter in phrase 
      if(event.target.innerHTML.toLowerCase() === letter[i].textContent.toLowerCase() ||
         event.key === letter[i].textContent.toLowerCase()){
        this.match = event;
        letter[i].classList.add('show');
        //  if onscreen keyboard
        if(event.target.nodeName === 'BUTTON'){ event.target.style.backgroundColor = 'green'; }
        //  if physical keyboard
        if(event.key){
          const querty = document.querySelectorAll('.key');
          for(let i = 0; i < querty.length; i++){
            if(event.key === querty[i].textContent){ querty[i].style.backgroundColor = 'green'; }
          }
        }
      }
    }
    // otherwise it is not a match - remove a life and check win conditions
    if(this.match === null){ game.removeLife();}
    game.checkForWin();
  }
}
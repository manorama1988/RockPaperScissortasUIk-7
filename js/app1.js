// create variables acoording to html requirements
let message = {
  ms : ' start',
  uWin: 'user win',
  cWin: 'computer win',
  tie : 'tie'
  };

  let emoji = {
    paper: '📄',
    rock: ' 🗻 ',
    scissor: '✂️' 
  };

  const element = ['rock','paper','scissor'];

  let userScore = 0;
  let comScore = 0;
  let compInput;
  let userInput;

 let uScore = document.querySelector('.game-user-score');
 let cScore = document.querySelector('.game-computer-score');
 let uRock = document.querySelector('.game-rock');
 let uPaper = document.querySelector('.game-paper');
 let uScissor = document.querySelector('.game-scissor');
 let uImg = document.querySelector('.game-img-user');
 let uComp = document.querySelector('.game-img-computer');
 let gResult = document.querySelector('.game-result');
 const bPlay = document.querySelector('.btn-play');
 const bReset = document.querySelector('.btn-reset');
  
 
 // show html content using variables;
 uScore.textContent = userScore; // user score
 cScore.textContent = comScore; // computer score
 bPlay.textContent = 'Play'; // play btn
 bReset.textContent = 'Reset'; // reset btn
 uRock.textContent = emoji.rock; // rock show
 uPaper.textContent = emoji.paper;// paper show
 uScissor.textContent = emoji.scissor; // scissor show
 uImg.textContent= emoji.paper;// assign emoji for user choice
 uComp.textContent = emoji.rock;// assign emoji for comp choice
 gResult.textContent="user win";



// disable the reset btn

bReset.style.display = 'none';

// disable the emojis
const displayElement = (opt)=>{
  uRock.disabled = opt;
  uPaper.disabled = opt;
  uScissor.disabled = opt;
}

displayElement(true);


// start the game by clicking play btn

bPlay.addEventListener('click', ()=> {
    compInput = Math.trunc(Math.random() * 3);// onplay btn click comp generate random no.
    displayElement(false);
    //console.log(computerInput);
    
    bReset.style.display='block';
    bPlay.style.display='none';
})


// assign values according to emojis
uRock.addEventListener('click', ()=>{
    userInput = 0;
    compareResult();
    console.log("hello" , uRock);
})

uPaper.addEventListener('click', ()=>{
  userInput = 1;
  compareResult();
 // console.log("hello" , uPaper);
})

uScissor.addEventListener('click', ()=>{
  userInput = 2;
  compareResult();
  //console.log("hello" , uScissor);
})


// compare the inputs 

const compareResult = ()=>{
  uImg.textContent = emoji[element[userInput]];
  uComp.textContent = emoji[element[compInput]];

  displayElement(true);


  if(userInput === compInput){
    gResult.textContent = message.tie;
  }else if(userInput === 1 && compInput === 0){
    comScore +=1;
    gResult.textContnet = message.cWin;
  }else if(userInput === 0 && compInput === 1){
    userScore +=1;
    gResult.textContent = message.uWin;
  }else if(usrInput === 1 && compInput === 2){
    comScore += 1;
    gameResult.textContent = message.cWin;
  }else if(usrInput === 2 && compInput === 1){
    userScore += 1;
    gameResult.textContent = message.uWin;
  }else if(usrInput === 0 && compInput === 2){
    comScore += 1;
    gameResult.textContent = message.cWin;
  }else if(usrInput === 2 && compnput === 0){
    userScore += 1;
    gameResult.textContent = message.uwin;
  }

  bPlay.style.display = 'block';
  bReset.style.display = 'none';

  uScore.textContent = userScore;
  cScore.textContent = comScore;

};

bReset.addEventListener('click', ()=> {
  
})
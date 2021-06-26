
let msg = {
   up : 'play',
   us : 'reset',
  uWin: ' 🥳 user win',
  cWin: ' 🤖 computer win',
  tie : " 😱 tie"
  };

  let emoji = {
    rock: ' 🗻 ',
    paper: '📃',
    scissor: '✂️'
}

const element = ['rock','paper','scissor'];

let userScore = 0; // default score of user
let comScore = 0; // default score of computer
let userSelect;
let comSelect;

let cScore = document.querySelector('.game-computer-score');
let uScore = document.querySelector('.game-user-score');
let bPlay = document.querySelector('.btn-play');
let bReset = document.querySelector('.btn-reset');
let gResult = document.querySelector('.game-result');
let selUsrImage = document.querySelector('.game-img-user');
let selComImage = document.querySelector('.game-img-computer');
let gRock =document.querySelector('.game-rock');
let gPaper = document.querySelector('.game-paper');
let gScissor = document.querySelector('.game-scissor');


cScore.textContent = comScore;// computer score 
uScore.textContent = userScore;// user score
bPlay.textContent = msg.up;//play btn
bReset.textContent = msg.us;//reset btn
//gResult.textContent = msg.uWin;//game result
//selUsrImage.textContent = emoji.paper;//user select img
//selComImage.textContent = emoji.paper;// computer select img
gRock.textContent = emoji.rock; // set rock img
gPaper.textContent = emoji.paper; // set paper img
gScissor.textContent = emoji.scissor; // set scissor img


// first disable the rock , paper and scissor 
bReset.style.display= 'none';

const displayElement = (opt) => {
    gRock.disabled = opt;
    gScissor.disabled = opt;
    gPaper.disabled = opt;
}

displayElement(true);

// click the play btn

bPlay.addEventListener('click', ()=> {
    comSelect = Math.trunc(Math.random()*3);
    displayElement(false);
    bPlay.style.display = 'none';
    bReset.style.display ='block';
})

gRock.addEventListener('click', ()=> {
    userSelect = 0;
    comapre();
})

gPaper.addEventListener('click', ()=> {
    userSelect = 1;
    comapre();
})

gScissor.addEventListener('click', ()=> {
    userSelect = 2;
    comapre();
})


// after clicking play btn
const comapre = () => {
    selUsrImage.textContent = emoji[element[userSelect]];
    selComImage.textContent = emoji[element[comSelect]];

    displayElement(true);


  if(userSelect === comSelect){
    gResult.textContent = msg.tie;
  }else if(userSelect === 1 && comSelect === 0){
    comScore =+1;
    gResult.textContnet = msg.cWin;
  }else if(userSelect === 0 && comSelect === 1){
    userScore =+1;
    gResult.textContent = msg.uWin;
  }else if(userSelect === 1 && comSelect === 2){
    comScore =+1;
    gResult.textContent = msg.cWin;
  }else if(userSelect === 2 && comSelect === 1){
    userScore =+1;
    gResult.textContent = msg.uWin;
  }else if(userSelect === 0 && comSelect === 2){
    comScore =+1;
    gResult.textContent = msg.cWin;
  }else if(userSelect === 2 && comSelect === 0){
    userScore =+1;
    gResult.textContent = msg.uWin;
  }

  bPlay.style.display = 'block';
  bReset.style.display = 'none';

  uScore.textContent = userScore;
  cScore.textContent = comScore;



}


bReset.addEventListener('click',()=>{
    gResult.textContent = msg.up;
    displayElement(true);
    playBtn.style.display = 'block';
    resetBtn.style.display = 'none';
});

  
let p1Wins = 0;
let cpuWins = 0;
let p1Pick = document.querySelector('#p1Pick');
let cpuPick = document.querySelector('#cpuPick'); 
let outputResult = document.querySelector('.resultOutput');
let outputScoreP1 = document.querySelector('#p1');
let outputScoreCpu = document.querySelector('#cpu');
let outputGameEnd = document.querySelector('.gameEndOutput');

function computerPlay (){
    const choice = ['Rock', 'Paper', 'Scissors']; 
    return choice[random(3)];
}

function random(num){
    return (Math.floor(Math.random() * num))
}

function toFirstCase(string){
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}

function playRound (p1, cpu1){
    setBaseTexts();
    p1 = toFirstCase(p1);
    let strOut = '';

    console.log(`Player 1: ${p1} \t Computer: ${cpu1}`);
    if (p1 === cpu1){
        //tie
        outputResult.textContent = `Its a Tie !!`; 
    }else if (p1 === 'Rock' && cpu1 === 'Scissors' || p1 === 'Paper' && cpu1 === 'Rock' || p1 == 'Scissors' && cpu1 == 'Paper'){
        //p1 win
        p1Wins++;
        outputResult.textContent = `p1 Wins !! ${p1} beats ${cpu1}`;
    }else{
        //cpu1 win
        cpuWins++;
        outputResult.textContent = `p1 Loses !! ${cpu1} beats ${p1}`;
    }
    strOut += `\np1: ${p1Wins} cpu1= ${cpuWins}`;
    //new
    
    p1Pick.textContent+= ` ${p1}`;
    cpuPick.textContent+= ` ${cpu1}`;
    outputScoreP1.textContent+= ` ${p1Wins}`;
    outputScoreCpu.textContent+= ` ${cpuWins}`;
    return strOut
}


const buttons = document.querySelectorAll('.playerPick');
buttons.forEach(button => button.addEventListener('click', checkKey));

function checkKey(e){
  console.log( playRound(this.id, computerPlay()) );

  if (cpuWins == 3 || p1Wins == 3){
    outputGameEnd.textContent = 'game over?';
    p1Wins = 0;
    cpuWins = 0;
    }
}

function game2(){
    p1Wins = 0;
    cpuWins = 0;
    setBaseTexts();
}

function setBaseTexts(){
    p1Pick.textContent = 'p1:';
    cpuPick.textContent = 'cpu:';
    outputScoreP1.textContent = 'p1:';
    outputScoreCpu.textContent = 'cpu:';
    outputResult.textContent = 'Result';
    outputGameEnd.textContent = 'GameEnd';
}

game2();
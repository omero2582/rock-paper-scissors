let p1Wins = 0;
let cpuWins = 0;

function computerPlay (){
    const choice = ['Rock', 'Paper', 'Scissors']; 
    return choice[random(3)];
}

function random(num){
    return (Math.floor(Math.random() * num))
}

function playRound (p1, cpu1){

    p1 = toFirstCase(p1);
    let strOut = '';

    console.log(`Player 1: ${p1} \t Computer: ${cpu1}`);
    if (p1 === cpu1){
        //tie
        strOut = `Its a Tie !!`; 
    }else if (p1 === 'Rock' && cpu1 === 'Scissors' || p1 === 'Paper' && cpu1 === 'Rock' || p1 == 'Scissors' && cpu1 == 'Paper'){
        //p1 win
        p1Wins++;
        strOut = `p1 Wins !! ${p1} beats ${cpu1}`;
    }else{
        //cpu1 win
        cpuWins++;
        strOut = `p1 Loses !! ${cpu1} beats ${p1}`;
    }
    strOut += `\np1: ${p1Wins} cpu1= ${cpuWins}`;
    return strOut
}

async function game(){
    let keepLoop = true;
    p1Wins = 0;
    cpuWins = 0;

    for (let i = 0; keepLoop; i++) {
        let p1Select = prompt('type rock, paper, or scissors');
        console.log( playRound(p1Select, computerPlay()) );

        if (cpuWins == 3 || p1Wins == 3){
            keepLoop = false;
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}


game();


function toFirstCase(string){
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
}
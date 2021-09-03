const btn = document.getElementById("btn-input");
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';

const log = [];

const userInput = () => {
    let input = prompt(`Please Choose one of ${ROCK},${PAPER} or ${SCISSOR}`,'').toUpperCase();
    if(input === ROCK || input === PAPER || input === SCISSOR){
        return input;
    }
    return ROCK;
};

const compInput = () => {
    let random = Math.random();
    if(random<0.34){
        return ROCK;
    }else if(random<0.67){
        return PAPER;
    }else{
        return SCISSOR;
    }
}

btn.addEventListener('click',() =>{
    const ui = userInput();
    const ci = compInput();
    const logEntry = {
        userValue : ui,
        compValue : ci
    };
    log.push(logEntry);
    if(ui === ROCK && ci === PAPER || ui === PAPER && ci === SCISSOR || ui === SCISSOR && ci === ROCK){
        alert('Alas , Computer wins!');
    }else if(ui===ci){
        alert("Oooo, it's a draw!");

    }else{
        alert('Congrats, You win!');
    }
    console.log(log);
});
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const btn1 = document.querySelector('#firstPlayer');
const btn2 = document.querySelector('#secondPlayer');
const reset = document.querySelector('#resetBtn');
const selectNum = document.querySelector('#selectGoal');

let firstScore = 0;
let secondScore = 0;
let goalCount = 6;
let isGameOver = false;

btn1.addEventListener('click', () => {
    if(!isGameOver){
        firstScore += 1;
        if (firstScore === goalCount) {
            isGameOver = true;
            player1.classList.add('winner');
            player2.classList.add('loser');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        player1.textContent = firstScore;
    }
})

btn2.addEventListener('click', () => {
    if(!isGameOver){
        secondScore += 1;
        if (secondScore === goalCount) {
            isGameOver = true;
            player2.classList.add('winner');
            player1.classList.add('loser');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        player2.textContent = secondScore;
    }
})

//this keyword will not work with arrow functions.
selectNum.addEventListener('change', function() {
    goalCount = parseInt(this.value);
    resetGame();
})

reset.addEventListener('click', resetGame)

function resetGame(){
    isGameOver = false;
    firstScore = 0;
    secondScore = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player1.classList.remove('winner', 'loser');
    player2.classList.remove('winner', 'loser');
    btn1.disabled = false;
    btn2.disabled = false;
}




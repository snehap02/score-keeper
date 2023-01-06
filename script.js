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
            player1.classList.add('text-green-600');
            player2.classList.add('text-red-600');
            btn1.classList.add('cursor-not-allowed');
            btn2.classList.add('cursor-not-allowed');
            btn1.classList.add('opacity-50');
            btn2.classList.add('opacity-50');

        }
        player1.textContent = firstScore;
    }
})

btn2.addEventListener('click', () => {
    if(!isGameOver){
        secondScore += 1;
        if (secondScore === goalCount) {
            isGameOver = true;
            player2.classList.add('text-green-600');
            player1.classList.add('text-red-600');
            btn1.classList.add('cursor-not-allowed');
            btn2.classList.add('cursor-not-allowed');
            btn1.classList.add('opacity-50');
            btn2.classList.add('opacity-50');

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
    player1.classList.remove('text-green-600', 'text-red-600');
    player2.classList.remove('text-green-600', 'text-red-600');
    btn1.classList.remove('cursor-not-allowed');
    btn2.classList.remove('cursor-not-allowed');
    btn1.classList.remove('opacity-50');
    btn2.classList.remove('opacity-50');
}




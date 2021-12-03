var play = document.getElementById('play');
var bet = document.getElementById('bet');

var startingBet = document.getElementById('startingBet');
var totalRolls = document.getElementById('totalRolls');
var highestAmount = document.getElementById('highestAmount');
var rollsAtHighest = document.getElementById('rollsAtHighest');

var results = document.getElementById('results');

var gameMoney = 0;
var sum = 0;
var gameRolls = 0;
var gameHighest = 0;
var gameRollsHighest = 0;

function rollDice() {
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    sum = roll1 + roll2;
    console.log(sum)
    return sum;
}

function playGame() {
    if (!bet.value > 0) {
        alert('Bet must be higher than $0');
    } else {
        gameMoney = bet.value;
        while (!gameMoney == 0) {
            rollDice();
            if (sum === 7) {
                gameMoney += 4;
                gameRolls++;
                if (gameMoney > gameHighest) {
                    gameHighest = gameMoney;
                    gameRollsHighest = gameRolls;
                }
            } else {
                gameMoney--;
                gameRolls++;
            }
        }
        //results.style.display = 'block';
        startingBet.innerHTML = '$' + bet.value;
        totalRolls.innerHTML = gameRolls;
        highestAmount.innerHTML = '$' + gameHighest;
        rollsAtHighest.innerHTML = gameRollsHighest;

        gameMoney = 0;
        gameRolls = 0;
        gameHighest = 0;
        gameRollsHighest = 0;

        console.log(gameMoney, gameRolls, gameHighest, gameRollsHighest)
    }
    
}

play.addEventListener('click', playGame);


var play = document.getElementById('play');
var bet = document.getElementById('bet');
var sum = 0;
var gameMoney = 0;
var gameRolls = 0;
var gameHighest = 0;
var gameRollsHighest = 0;
var active = true;

function rollDice() {
    var roll1 = Math.floor(Math.random() * 6) + 1;
    var roll2 = Math.floor(Math.random() * 6) + 1;
    sum = roll1 + roll2;
    console.log(sum)
    return sum;
}

function resetGame() {
    gameMoney = 0;
    gameRolls = 0;
    gameHighest = 0;
    gameRollsHighest = 0;
    play.value = 'Play Again';
}

function playGame() {
    if (!active){
        play.value = 'Play'
        console.clear();
        active = true;
        document.getElementById('results').style.opacity = '0';
    } else if (!bet.value > 0) {
        alert('Bet must be higher than $0');
    } else {
        gameMoney = bet.value;
        while (!gameMoney == 0) {
            rollDice();
            if (sum === 7) {
                gameMoney = gameMoney + 4;
                gameRolls++;
                if (gameMoney > gameHighest) {
                    gameHighest = gameMoney;
                    gameRollsHighest = gameRolls;
                }
            } else {
                gameMoney--;
                gameRolls++;
            }
            console.log('$' + gameMoney)
        }

        document.getElementById('startingBet').innerHTML = '$' + bet.value;
        document.getElementById('totalRolls').innerHTML = gameRolls;
        document.getElementById('highestAmount').innerHTML = '$' + gameHighest;
        document.getElementById('rollsAtHighest').innerHTML = gameRollsHighest;
        document.getElementById('results').style.opacity = '100';
        active = false;
        
        resetGame();
        
    }
    
}

play.addEventListener('click', playGame);


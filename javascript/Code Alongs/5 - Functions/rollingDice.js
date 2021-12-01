let numSides = prompt('How many sides does the die have?');
let numDice = prompt('How many dice are you rolling?')

function rollDice(numSides){
    return Math.floor(Math.random() * numSides) + 1;
}

for (let i = 0; i < numDice; i++){
    console.log(rollDice(numSides));
}
//Biz Logic for PlayerList
function PlayerList() {
    this.players = {};
    this.currentId = 0;
};

PlayerList.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
};

PlayerList.prototype.addPlayer = function (player) {
    player.id = this.assignId();
    this.players[player.id] = player;
};

PlayerList.prototype.findPlayer = function (id) {
    if (this.players[id] !== undefined) {
        return this.players[id];
    }
    return false;
};

//Business logic for Player
function Player(name){
    this.name = name;
    this.points = [];
};

Player.prototype.diceRoll = function (prevScore = 0){
    const numbers = [1,2,3,4,5,6];
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(number);
    let talliedNumbers = this.points;
    talliedNumbers.push(number);
    // this.points = talliedNumbers;
    console.log(talliedNumbers);
    let newTotal = 0;
    for (let i = 0; i < talliedNumbers.length; i++){
        newTotal += talliedNumbers[i];
    }
    return newTotal;
};

// Biz Logic for PointTally

PointTally.prototype.tallyPoints = function (rolls) {
    let diceRoll = new DiceRoll();
    for ( let i = 0; i < rolls; i++) {
        let point = diceRoll.roll();
        this.points += point;
    }
    return this.points;
}


// UI Logic
function handleFormSubmission(event){
event.preventDefault();
}

window.addEventListener("load", function(){
    document.querySelector("form#name-form").addEventListener("submit", handleFormSubmission);
    document.querySelector("button#roll-button").addEventListener("click", diceRoll);
    document.getElementById("span#roll-result").innerText = newTotal;
})



const pointTally1 = new PointTally()
const pointTally2 = new PointTally()

const result1 = pointTally1.tallyPoints();
const result2 = pointTally2.tallyPoints();
console.log(pointTally1);
console.log(pointTally2);
console.log(result1);
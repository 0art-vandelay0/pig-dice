// Biz Logic
function PlayerList() {
    this.players = {};
    this.currentId = 0;
}

PlayerList.prototype.addPlayer = function (player) {
    player.id = this.assignId();
    this.players[player.id] = player;
}

PlayerList.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
}

PlayerList.prototype.findPlayer = function (id) {
    if (this.players[id] !== undefined) {
        return this.players[id];
    }
    return false;
}

function Player(name) {
    this.name = name
    this.points = 0
    // this.currentId = 0
}

Player.prototype.addName = function (name) {
    this.name = name
}

function DiceRoll() {
    this.numbers = [1, 2, 3, 4, 5, 6];
};

DiceRoll.prototype.roll = function (prevScore = 0) {
    let number = this.numbers[Math.floor(Math.random() * this.numbers.length)];
    let newTotal = prevScore + number;
    return newTotal;
};

function PointTally () {
    this.points = 0;
}

PointTally.prototype.tallyPoints = function (rolls) {
    let diceRoll = new DiceRoll();
    for ( let i = 0; i < rolls; i++) {
        let point = diceRoll.roll();
        this.points += point;
    }
    return this.points;
}

const pointTally1 = new PointTally()
const pointTally2 = new PointTally()

const result1 = pointTally1.tallyPoints();
const result2 = pointTally2.tallyPoints();
console.log(pointTally1);
console.log(pointTally2);
console.log(result1);


// // UI Logic
// function rollTheDice() {
//     let newRoll = new DiceRoll();
//     let result = newRoll.roll();
//     document.getElementById("roll-result").append(result);
// }

// function handleFormSubmit(event) {
//     event.preventDefault();
// }

// window.addEventListener("load", function () {
//     document.querySelector("form#name-form").addEventListener("submit", handleFormSubmit);
//     document.querySelector("button#roll-button").addEventListener("click", rollTheDice);
// });



// // console.log(result2);

// // const diceRoll = new DiceRoll();
// // const result = diceRoll.roll();
// // console.log(result);


// // let player1 = new Player("Casey");
// // let player2 = new Player("Lindsay");
// // let playerlist = new PlayerList();
// // playerlist.addPlayer(player1);
// // playerlist.addPlayer(player2);

// // console.log(playerlist.players)


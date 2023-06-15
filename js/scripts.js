//Biz Logic for PlayerList
function PlayerList() {
    this.players = {};
    this.currentId = 0;
};

PlayerList.prototype.startGame = function () {
    this.players[0].currentTurn = true;
    this.players[1].currentTurn = false;
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
    this.currentTurn = true;
};

PlayerList.prototype.holdRoll = function(){
    if ((this.players[0].currentTurn = true) && (this.players[1].currentTurn = false)) {
        this.players[0].currentTurn = false;
        this.players[1].currentTurn = true;
    } else if ((this.players[0].currentTurn = false) && (this.players[1].currentTurn = true)) {
        this.players[0].currentTurn = true;
        this.players[1].currentTurn = false;
    }
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



// UI Logic
function handleFormSubmission(event){
    event.preventDefault();

    let player1name = document.getElementById("player1").value;
    let player2name = document.getElementById("player2").value;
    let player1 = new Player(player1name);
    let player2 = new Player(player2name);
    // console.log(player1);
    // console.log(player2);
    let welcomeOutput = document.getElementById("welcome-output");
    welcomeOutput.append("Welcome " + player1name + " and " + player2name + " to the game of Pig Dice! The first player to reach 100 points wins! Player 1 roll the dice to start the game!");

    let rollOutput = document.getElementById("roll-output");
    rollOutput.append(player1.diceRoll.value);
}

window.addEventListener("load", function(){
    document.querySelector("form#name-form").addEventListener("submit", handleFormSubmission);

    document.querySelector("button#roll-button").addEventListener("click", Player.diceRoll);

    // document.getElementById("span#roll-result").innerText = newTotal;
})


// PL = new PlayerList();
// c = new Player("C");
// l = new Player("L");
// PL.addPlayer(c);
// PL.addPlayer(l);
// c.diceRoll();
// console.log(c.points);
// c.diceRoll();
// console.log(c.points);
// console.log(PL.players);
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

PlayerList.prototype.startGame = function () {
    this.players[1].currentTurn = true;
    this.players[2].currentTurn = false;
    console.log(this.players[1].currentTurn);
    console.log(this.players[2].currentTurn);
};

PlayerList.prototype.holdRoll = function() {
    if ((this.players[1].currentTurn)) {
        this.players[1].currentTurn = false;
        this.players[2].currentTurn = true;
        return this.players[2];
    } else {
        this.players[1].currentTurn = true;
        this.players[2].currentTurn = false;
        return this.players[1];
    }
};

//Business logic for Player
function Player(name){
    this.name = name;
    this.points = [];
    this.currentTurn = true;
};

Player.prototype.diceRoll = function (prevScore = 0){
    const numbers = [1,2,3,4,5,6];
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    console.log(number);
    let talliedNumbers = this.points;
    talliedNumbers.push(number);
    console.log(talliedNumbers);
    let newTotal = 0;
    for (let i = 0; i < talliedNumbers.length; i++){
        newTotal += talliedNumbers[i];
    }
    return newTotal;
};



//UI Logic

function handleFormSubmission(event){
    event.preventDefault();
    let player1Name = document.getElementById("player1").value;
    // console.log(player1Name);
    let player2Name = document.getElementById("player2").value;
    // console.log(player2Name);
    let player1 = new Player(player1Name);
    // console.log(player1)
    let player2 = new Player(player2Name);
    // console.log(player2);
    let playerList = new PlayerList();

    playerList.addPlayer(player1);
    playerList.addPlayer(player2);

    playerList.startGame();

    let welcomeOutput = document.getElementById("welcome-output"); 
    welcomeOutput.append("Welcome " + player1Name + " and " + player2Name + " to the game of Pig Dice! The first player to reach 100 points wins! " + player1Name + ", roll the dice to start the game.")

    let currentPlayer = playerList.players[playerList.currentId];

    function handleRollClick () {
        let rollOutput = document.getElementById("roll-output");
        rollOutput.innerText = (currentPlayer.diceRoll())
        let rollArray = document.getElementById("roll-array-output");
        rollArray.innerText = currentPlayer.points.join(", ");
        // for (let i = 0; i < currentPlayer.points.length; i++) {
        //     let rollOutput = document.createElement("div");
        //     rollOutput.textContent = "Roll " + (i + 1) + " = " + currentPlayer.points[i];
        //     rollArray.append(rollOutput);
        // }
    }
    document.querySelector("button#roll-button").addEventListener("click", handleRollClick);

    function handleHoldClick () {
        console.log("Hold button clicked");
        console.log(currentPlayer);
        currentPlayer = playerList.holdRoll()
        console.log(currentPlayer);
    }
    document.querySelector("button#hold-button").addEventListener("click", handleHoldClick);

    console.log(currentPlayer);
}



window.addEventListener("load", function(){
    document.querySelector("form#name-form").addEventListener("submit", handleFormSubmission);
    // document.querySelector("form#name-form").addEventListener("submit", startGame);
})




// Game.prototype.rollTurn = function () {
//     if (this.dieRoll === 1) {
//         this.turnScore = 0;
//     }
// Game.prototype.rollTurn = function () {
//     if (this.dieRoll === 1) {
//         this.turnScore = 0;
//     } else {
//         this.dieRoll > 1;
//         this.turnScore += this.dieRoll;
//     }
//     return this.turnScore;
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

// let player1 = new Player("Casey");
// let player2 = new Player("Lindsay");
// let playerlist = new PlayerList();
// playerlist.addPlayer(player1);
// playerlist.addPlayer(player2);

// console.log(playerlist.players)



// UI Logic

// function CreatePlayer() {
//     let player1 = new Player("Casey");
//     // let player = new Player(document.getElementById('playerName').value)
//     // document.getElementById('playerName').value = ''
//     return player1
// }
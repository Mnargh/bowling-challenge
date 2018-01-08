function Game(){
  this.players = [];
  this.turn = 1;
  this.isCompleteGame = false;
};

// Game.prototype.addPlayer = function(newplayer){
//   this.players.push(newplayer);
//   this.players[this.players.length-1].initializeFrames();
// };

Game.prototype.addPlayer = function(newplayer){
  this.newPlayer = newplayer;
  this.players.push(this.newPlayer);
  this.players[this.players.length-1].initializeFrames();
};

Game.prototype.bowl = function(roll){
  this.players[this.turn-1].bowl(roll);
  this.isGameComplete();
  //needs refactoring
  if (this.players[this.turn-1].currentFrame.isFinalFrame === false){
      if(this.players[this.turn-1].currentFrame.firstRollScore === null){
        this.nextPlayerTurn();
      }
  }
  if (this.players[this.turn-1].currentFrame.isFinalFrame === true){
      if(this.players[this.turn-1].currentFrame.firstRollScore === null){
        this.nextPlayerTurn();
      }
      if(this.players[this.turn-1].currentFrame.isCompleted === true){
        this.nextPlayerTurn();
      }
  }
};

Game.prototype.nextPlayerTurn = function(){
  this.turn++;
  if (this.turn > this.players.length){ this.turn = 1; }
}

Game.prototype.isGameComplete = function(){
  if (this.players.every(player => player.isFinished === true)){
    this.isCompleteGame = true;
  }
}

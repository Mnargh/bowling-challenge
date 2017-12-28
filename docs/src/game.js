function Game(){
  this.players = [];
};

Game.prototype.addPlayer = function(newplayer){
  this.newPlayer = newplayer;
  this.players.push(this.newPlayer);
};

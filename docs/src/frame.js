function Frame(){
  var firstRollScore = null;
  var secondRollScore = null;
  var strike = null;
  var spare = null;
  var score = 0;
  var completed = false;
};

Frame.prototype.firstRoll = function(roll){
  if(roll > 10 || roll < 0){
    this.invalidThrowScore();
    }
  this.firstRollScore = roll;
  if(roll === 10){
    this.recordStrike();
    this.secondRollScore = null;
    this.completed = true;
  }
};

Frame.prototype.secondRoll = function(roll){
  if(this.strike === true){
    throw new Error("No second throw after a strike");
  }
  if(roll > 10 || roll < 0){
    this.invalidThrowScore();
    }
  if( (roll + this.firstRollScore) > 10){
    throw new Error("Cannot total more than 10 over two rolls");
  }
  if( (roll + this.firstRollScore) === 10){
    this.recordSpare();
  }
  this.secondRollScore = roll;
  this.completed = true;
};

Frame.prototype.recordStrike = function(){
  this.strike = true;
}

Frame.prototype.recordSpare = function(){
  this.spare = true;
}

Frame.prototype.invalidThrowScore = function(){
  throw new Error("Can only roll between 0 and 10");
}

function Frame(){
  this.rollNumber = 1;
  this.firstRollScore = null;
  this.secondRollScore = null;
  this.isStrike = null;
  this.isSpare = null;
  this.score = null;
  this.isCompleted = false;
  this.isFinalFrame = false;
};

Frame.prototype.bowl = function(roll){
  if(roll > 10 || roll < 0){
    this.invalidThrowScore();
    }
  this.setRollScore(roll);
  this.manageRoll();
};


Frame.prototype.setRollScore = function(roll){
  switch(true) {
    case (this.rollNumber === 1):
      this.firstRoll(roll);
      break;
    case (this.rollNumber === 2):
      this.secondRoll(roll);
      break;
    // case (this.rollNumber === 3):
    //   this.thirdRoll(roll);
    //   break;
  }
}

Frame.prototype.manageRoll = function(){
  if(this.isFinalFrame === false && (this.rollNumber === 2 || this.isStrike)){
    this.isCompleted = true;
  }
  if(this.isCompleted === false){
    this.rollNumber += 1;
  }
}

Frame.prototype.firstRoll = function(roll){
  this.firstRollScore = roll;
  if(this.firstRollScore === 10){
    this.recordStrike();
  }
};

Frame.prototype.secondRoll = function(roll){
  if(this.isStrike === true){
    this.noSecondThrow();
  }
  if( (roll + this.firstRollScore) > 10){
    this.pinLimitError();
  }

  if( (roll + this.firstRollScore) === 10){
    this.recordSpare();
  }
  this.secondRollScore = roll;
};

Frame.prototype.recordStrike = function(){
  this.isStrike = true;
};

Frame.prototype.recordSpare = function(){
  this.isSpare = true;
};

Frame.prototype.makeFinalFrame = function(){
  this.isFinalFrame = true;
};

Frame.prototype.invalidThrowScore = function(){
  throw new Error("Can only roll between 0 and 10");
};

Frame.prototype.noSecondThrow = function(){
  throw new Error("No second throw after a strike");
};

Frame.prototype.pinLimitError = function(){
  throw new Error("Cannot total more than 10 over two rolls unless it's the last frame");
};

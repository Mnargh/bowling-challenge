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
  this.checkNormalFrameComplete();
  this.checkFinalFrameComplete();

  if(this.isCompleted === false){
    this.rollNumber += 1;
  }
}

Frame.prototype.firstRoll = function(roll){
  this.firstRollScore = roll;
  this.checkIfStrike();
};

Frame.prototype.secondRoll = function(roll){
  this.noSecondThrowCheck();
  this.pinLimitErrorCheck(roll);
  this.checkIfSpare(roll);
  this.secondRollScore = roll;
};

Frame.prototype.checkIfStrike = function(){
  if(this.firstRollScore === 10){
    this.isStrike = true;
  }
};

Frame.prototype.checkIfSpare = function(roll){
  if( (roll + this.firstRollScore) === 10){
    this.isSpare = true;
  }
};

Frame.prototype.checkNormalFrameComplete = function(){
  if(this.isFinalFrame === false && (this.rollNumber === 2 || this.isStrike)){
    this.isCompleted = true;
  }
};

Frame.prototype.checkFinalFrameComplete = function(){
  if(this.isFinalFrame === true && ((this.firstRollScore + this.secondRollScore < 10) || ( this.rollNumber === 3 )))
  {
    this.isCompleted = true;
  }
};

Frame.prototype.makeFinalFrame = function(){
  this.isFinalFrame = true;
};

Frame.prototype.invalidThrowScore = function(){
  throw new Error("Can only roll between 0 and 10");
};

Frame.prototype.noSecondThrowCheck = function(){
  if(this.isFinalFrame === false && this.isStrike === true){
    throw new Error("No second throw after a strike");
  }
};

Frame.prototype.pinLimitErrorCheck = function(roll){
  if(this.isFinalFrame === false && ((roll + this.firstRollScore) > 10)){
    throw new Error("Cannot total more than 10 over two rolls unless it's the last frame");
  }
};

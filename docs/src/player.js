function Player(name){
  this.name = name;
  this.score = 0;
  this.frames = [];
  this.runningTotals = [];
  this.currentFrame = null;
  this.previousFrame = null;
  this.previousPreviousFrame = null;
  this.isFinished = false;
  this.finalScore = 0
};


Player.prototype.addFrame = function(newframe = new Frame()){
    this.frames.unshift(newframe);
    this.currentFrame = this.frames[0];
};

Player.prototype.initializeFrames = function(){
  for (i = 1; i <= 10; i++){
    this.addFrame();
  }
  this.createFinalFrame();
};

Player.prototype.createFinalFrame = function(){
  if(this.frames.length === 10)
  { this.frames[9].makeFinalFrame(); }
};


Player.prototype.bowl = function(roll){
  this.currentFrame.bowl(roll);
  this.updateFrameScore();
  this.manageFrames();
};

Player.prototype.manageFrames = function(){
  this.isGameComplete();
  this.assignCurrentFrame();
  this.assignPreviousFrame();
  this.assignPreviousPreviousFrame();
};

Player.prototype.assignCurrentFrame =function(){
  if(this.currentFrame.isCompleted && !this.currentFrame.isFinalFrame){
    this.currentFrame = this.frames[this.frames.indexOf(this.currentFrame)+1];
  }
};
Player.prototype.assignPreviousFrame =function(){
  if(this.frames.length >= 2){
    this.previousFrame = this.frames[this.frames.indexOf(this.currentFrame)-1];
  }
};
Player.prototype.assignPreviousPreviousFrame =function(){
  if(this.frames.length >= 3){
    this.previousPreviousFrame = this.frames[this.frames.indexOf(this.currentFrame)-2];
  }
};

Player.prototype.calcFinalScore = function(){
  if (this.isFinished === true){
    for (var i = 0; i <= 9; i++){
      this.finalScore += this.frames[i].score;
    }
  }
};

Player.prototype.calcRunningTotal = function(){
  this.runningTotals = [];

    for ( i = 1; i <= (this.frames.indexOf(this.currentFrame)+1); i++){
      var runningTotal = 0;
      for (var j = 0; j <= (i-1); j++){
        if (this.frames[j].score === null){
          this.updateCurrentRunningTotal();
          return;
        }
        runningTotal += this.frames[j].score;

      }
      this.runningTotals.push(runningTotal);
    }
    this.updateCurrentRunningTotal();
};

Player.prototype.updateCurrentRunningTotal = function(){
  this.score = this.runningTotals[this.runningTotals.length-1];
};

Player.prototype.isGameComplete = function(){
  if (this.currentFrame.isFinalFrame && this.currentFrame.isCompleted){
    this.isFinished = true;
  }
  this.calcFinalScore();
};




Player.prototype.updateFrameScore = function(){
  // needs major refactoring
  if(!this.currentFrame.isCompleted){
      if(this.previousFrame && this.previousFrame.isSpare){
        this.previousFrame.score = 10 + this.currentFrame.firstRollScore;
      }
      if(this.previousPreviousFrame && this.previousPreviousFrame.isStrike && this.previousFrame.isStrike){
        this.previousPreviousFrame.score = 20 + this.currentFrame.firstRollScore;
      }
  }
  if(this.currentFrame.isCompleted){

    if(!this.currentFrame.isFinalFrame){
        if(this.previousPreviousFrame && this.previousPreviousFrame.isStrike && this.previousFrame.isStrike){
          this.previousPreviousFrame.score = 20 + this.currentFrame.firstRollScore;
        }
        if(!this.currentFrame.isStrike && !this.currentFrame.isSpare){
          this.currentFrame.score = (this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
          //open frame
          if(this.previousFrame && this.previousFrame.isStrike){
            this.previousFrame.score = (10 + this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
            // previous is strike
          }
        }
        if(this.currentFrame.isSpare){
          if(this.previousFrame && this.previousFrame.isStrike){
            this.previousFrame.score = (10 + this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
            // previous is strike
          }
        }
        if(this.currentFrame.isStrike){
          // do not calc score yet
        }

    }
    if(this.currentFrame.isFinalFrame){
        if(this.previousPreviousFrame && this.previousPreviousFrame.isStrike && this.previousFrame.isStrike){
          this.previousPreviousFrame.score = 20 + this.currentFrame.firstRollScore;
        }
        if(this.previousFrame && this.previousFrame.isStrike){
          this.previousFrame.score = (10 + this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
          // previous is strike
        }
        if(!this.currentFrame.isStrike && !this.currentFrame.isSpare){
          this.currentFrame.score = (this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
          //open frame

        }
        if(this.currentFrame.isStrike || this.currentFrame.isSpare){
          this.currentFrame.score = (this.currentFrame.firstRollScore + this.currentFrame.secondRollScore + this.currentFrame.thirdRollScore);
        }

    }
  }
  this.calcRunningTotal();
};

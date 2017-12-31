function Player(name){
  this.name = name;
  this.score = 0;
  this.frames = [];
  this.currentFrame = null;
  this.previousFrame = null;
  this.previousPreviousFrame = null;
};

Player.prototype.addFrame = function(newframe = new Frame()){
    this.newFrame = newframe;
    this.frames.unshift(this.newFrame);
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


Player.prototype.updateFrameScore = function(){
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
        if(!this.currentFrame.isStrike && !this.currentFrame.isSpare){
          this.currentFrame.score = this.currentFrame.firstRollScore + this.currentFrame.secondRollScore;
          if(this.previousFrame && this.previousFrame.isStrike){
            this.previousFrame.score = (10 + this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
          }
        }
        // if(this.currentFrame.isSpare){
        //
        // }
    //  if(current is strike or spare){
    //     do not calculate score yet
    //    }
    }
    if(this.currentFrame.isFinalFrame){
        if(!this.currentFrame.isStrike && !this.currentFrame.isSpare){
          this.currentFrame.score = (this.currentFrame.firstRollScore + this.currentFrame.secondRollScore);
        }
        // if(current is strike or spare){
        //         current frame score = r1s + r2s + r3s
        //       }
    }
  }

}
  //   // current frame score
  //   if(current frame is not last frame){
  //       if(current is not strike or spare){
  //         current frame score = r1s + r2s
  //       }
  //       if(current is strike or spare){
  //         do not calculate score yet
  //       }
  //   }
  //   if(current frame is last frame){
  //       if(current is not strike or spare){
  //         current frame score = r1s + r2s
  //       }
  //       if(current is strike or spare){
  //         current frame score = r1s + r2s + r3s
  //       }
  //   }
  //   //previous frame score
  //   if(previous frame is strike){
  //       if (current frame is not strike){
  //        previous frame score = 10 + r1s + r2s
  //       }
  //       if (current frame is strike){
  //        do not calculate score yet
  //       }
  //   }
  //   if(previous frame is spare){
  //     previous frame score = 10 + r1s
  //   }
  //
  //   //previous previous frame score
  //   if(previous previous frame is strike & previous frame is strike){
  //     previous previous frame score = 10 + previous r1s + current r1s
  //   }
  // }

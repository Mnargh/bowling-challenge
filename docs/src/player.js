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

Player.prototype.initialiseFrames = function(){
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
  this.manageFrames();
};

Player.prototype.manageFrames = function(){
  this.assignCurrentFrame();
  this.assignPreviousFrame();
  this.assignPreviousPreviousFrame();
};

Player.prototype.assignCurrentFrame =function(){
  if(this.currentFrame.isCompleted){
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
// Player.prototype.updateFrameScore = function(){
//
//
// }

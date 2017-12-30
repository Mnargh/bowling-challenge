function Player(name){
  this.name = name;
  this.score = 0;
  this.frames = [];
  this.currentFrame = null;
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
  if(this.currentFrame.isCompleted){
    this.currentFrame = this.frames[this.frames.indexOf(this.currentFrame)+1];
  }
};
// Player.prototype.updateFrameScore = function(){
//
//
// }

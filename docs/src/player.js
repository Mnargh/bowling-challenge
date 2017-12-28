function Player(name){
  this.name = name;
  this.score = 0;
  this.frames = [];
};

Player.prototype.addFrame = function(newframe = new Frame()){
    this.newFrame = newframe;
    this.frames.push(this.newFrame);
}

Player.prototype.initialiseFrames = function(){
  for (i = 1; i <= 10; i++){
    this.addFrame();
  }
}

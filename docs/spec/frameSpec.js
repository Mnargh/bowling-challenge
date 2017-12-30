describe("Frames", function(){
  var frame;
  var player;

  beforeEach(function(){
    frame = new Frame();
    // player = jasmine.createSpyObj('player',
    // {
    //   'updateFrameScore' : function(score){framescore = score;},
    // });
  });

  describe("Bowling function", function(){
    it("Can only bowl a score between 0 and 10", function(){
      expect(function(){ frame.bowl(-1) }).toThrowError("Can only roll between 0 and 10");
      expect(function(){ frame.bowl(11) }).toThrowError("Can only roll between 0 and 10");
    });
  });

  describe("First Roll", function(){
    it("Can record a score for the first roll", function(){
      frame.bowl(5);
      expect(frame.firstRollScore).toEqual(5);
    });
    it("Can record a strike", function(){
      frame.bowl(10);
      expect(frame.isStrike).toEqual(true);
    });
    it("Second roll is still null if scored a strike", function(){
      frame.bowl(10);
      expect(function(){ frame.bowl(1) }).toThrowError("No second throw after a strike");
      expect(frame.secondRollScore).toEqual(null);
    });
  });

  describe("Second Roll", function(){
    it("Cannot total more than 10 pins knocked down over two rolls", function(){
      frame.firstRoll(5);
      expect(function(){ frame.secondRoll(6) }).toThrowError("Cannot total more than 10 over two rolls unless it's the last frame");
    });
    it("Can record a spare", function(){
      frame.firstRoll(0);
      frame.secondRoll(10);
      expect(frame.isSpare).toEqual(true);
    });
  });
  //
  // describe("Recording scores of frames", function(){
  //   // it("Calls on player to update score after second roll", function(){
  //   //   frame.firstRoll(5);
  //   //   frame.secondRoll(4);
  //   //   player.updateFrameScore.and.returnValue(9);
  //   //   player.updateFrameScore(9);
  //   //   expect(frame.score).toEqual(9);
  //   // });
  // });
});

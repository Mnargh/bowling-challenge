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
    it("Increases the the roll number after each bowl",function(){
      expect(frame.rollNumber).toEqual(1);
      frame.bowl(5);
      expect(frame.rollNumber).toEqual(2);
      // frame.bowl(3);
      // expect(frame.rollNumber).toEqual(3);
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

    // it("Second roll is still null if scored a strike", function(){
    //   frame.bowl(10);
    //   expect(function(){ frame.bowl(1) }).toThrowError("No second throw after a strike");
    //   expect(frame.secondRollScore).toEqual(null);
    // });

    // doesn't work as player is not managing roll yet to say can only bowl if not compelted
  });

  describe("Second Roll", function(){
    it("Cannot total more than 10 pins knocked down over two rolls", function(){
      frame.bowl(5);
      expect(function(){ frame.bowl(6) }).toThrowError("Cannot total more than 10 over two rolls unless it's the last frame");
    });
    it("Can record a spare", function(){
      frame.bowl(0);
      frame.bowl(10);
      expect(frame.isSpare).toEqual(true);
    });
  });

  describe("Completing frame", function(){
    it("Recording an open frame (no strike or spare) completes the frame", function(){
      frame.bowl(5);
      frame.bowl(4);
      expect(frame.isCompleted).toEqual(true);
    });
    it("Recording a strike completes the frame", function(){
      frame.bowl(10);
      expect(frame.isCompleted).toEqual(true);
    });
    it("Recording a spare completes the frame", function(){
      frame.bowl(1);
      frame.bowl(9);
      expect(frame.isCompleted).toEqual(true);
    });
  });

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

describe("Players", function(){
  var player;
  var frame, rollscore = null;

  beforeEach(function(){
    player = new Player("Tom");
    frame = jasmine.createSpyObj('frame', {'bowl': function(roll){
      rollscore = roll;
    }});
    completeframe = jasmine.createSpyObj('completeframe', {'isCompleted': function(){
      true;
    }});


    // openframe = jasmine.createSpyObj('openframe',
    // {
    //   'firstRollScore' : function(){ firstRollScore = 5;},
    //   'secondRollScore' : function(){ secondRollScore = 4;}
    // });

  });

  describe("Creating new players", function(){
    it("Player has a name", function(){
      expect(player.name).toEqual("Tom");
    });
    it("Player initialises with a score of 0", function(){
      expect(player.score).toEqual(0);
    });
  });

  describe("Initializing Frames", function(){
    it("Player starts game with 10 empty frames", function(){
      player.initializeFrames();
      expect(player.frames.length).toEqual(10);
    });
    it("10th frame is identified as the final frame", function(){
      player.initializeFrames();
      expect(player.frames[player.frames.length-2].isFinalFrame).toEqual(false);
      expect(player.frames[player.frames.length-1].isFinalFrame).toEqual(true);
    });
  });

  describe("Bowling", function(){
    it("Player bowling calls the bowl function in the current frame", function(){
      player.addFrame(frame);
      player.bowl(5);
      expect(frame.bowl).toHaveBeenCalledWith(5);
    });
  });

  describe("Current frame", function(){
    it("Initialises with first frame as the current frame", function(){
      player.initializeFrames();
      expect(player.currentFrame).toEqual(player.frames[0]);
    });
    it("Changes the current frame once the frame is complete",function(){
      player.initializeFrames();
      player.bowl(5);
      player.bowl(4);
      expect(player.currentFrame).toEqual(player.frames[1]);
      player.bowl(0);
      player.bowl(10);
      expect(player.currentFrame).toEqual(player.frames[2]);
      player.bowl(10);
      expect(player.currentFrame).toEqual(player.frames[3]);
    });
  });

  describe("Previous frames", function(){
    it("Identifies the previous frame as the one before the current frame", function(){
      player.initializeFrames();
      player.bowl(10);
      player.bowl(10);
      expect(player.currentFrame).toEqual(player.frames[2]);
      expect(player.previousFrame).toEqual(player.frames[1]);
    });
    it("Identifies the previous previous frame as the one before the previous frame", function(){
      player.initializeFrames();
      player.bowl(10);
      player.bowl(10);
      expect(player.currentFrame).toEqual(player.frames[2]);
      expect(player.previousPreviousFrame).toEqual(player.frames[0]);
    });
  });

  describe("Calculating scores of frames", function(){
    describe("Calculating previous frames' scores after current frame's first roll", function(){
      it("Scores a spare frame after next frame's first roll", function(){
        player.initializeFrames();
        player.bowl(3);
        player.bowl(7);
        expect(player.previousFrame.isSpare).toEqual(true);
        player.bowl(5);
        expect(player.previousFrame.score).toEqual(15);
      });
      it("Scores the first of two consecutive strikes after the current frame's first roll", function(){
        player.initializeFrames();
        player.bowl(10);
        player.bowl(10);
        expect(player.frames[0].score).toEqual(null);
        player.bowl(3);
        expect(player.frames[0].score).toEqual(23);
      });
    });
    describe("Calculating after a frame is complete", function(){
      describe("Non-final frames", function(){
        it("Scores an open frame", function(){
          player.initializeFrames();
          player.bowl(4);
          player.bowl(5);
          expect(player.frames[0].score).toEqual(9);
        });
        it("Scores a strike frame after next frame's second roll if it is an open frame", function(){
          player.initializeFrames();
          player.bowl(10);
          expect(player.frames[0].score).toEqual(null);
          player.bowl(3);
          expect(player.frames[0].score).toEqual(null);
          player.bowl(6);
          expect(player.frames[0].score).toEqual(19);
        });
        it("Scores a strike frame after next frame's second roll if it is a spare frame", function(){
          player.initializeFrames();
          player.bowl(10);
          expect(player.frames[0].score).toEqual(null);
          player.bowl(3);
          expect(player.frames[0].score).toEqual(null);
          player.bowl(7);
          expect(player.frames[0].score).toEqual(20);
        });
      });
      describe("Final frames", function(){
        it("Scores an open frame that is the final frame", function(){
          player.initializeFrames();
          for (var i=1; i <= 9; i++) player.bowl(10);
          player.bowl(3);
          player.bowl(3);
          expect(player.frames[9].score).toEqual(6);
        });
      });
    });

  });



  // describe("Recording scores of frames", function(){
  //   it("Open frames (no strike or spare scored)", function(){
  //     player.frames.push(openframe);
  //     openframe.firstRollScore.and.returnValue(5);
  //     openframe.secondRollScore.and.returnValue(4);
  //     expect(openframe.firstRollScore()).toEqual(5);
  //     expect(openframe.secondRollScore()).toEqual(4);
  //     expect(player.updateFrameScore()).toEqual(9);
  //
  //   });
  // });



});

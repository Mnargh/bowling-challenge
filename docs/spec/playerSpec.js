describe("Players", function(){
  var player;
  var openframe;

  beforeEach(function(){
    player = new Player("Tom");
    openframe = jasmine.createSpyObj('openframe',
    {
      'firstRollScore' : function(){ firstRollScore = 5;},
      'secondRollScore' : function(){ secondRollScore = 4;}
    });

  });

  describe("Creating new players", function(){
    it("Player has a name", function(){
      expect(player.name).toEqual("Tom");
    });
    it("Player initialises with a score of 0", function(){
      expect(player.score).toEqual(0);
    });
    it("Player starts game with 10 empty frames", function(){
      player.initialiseFrames();
      expect(player.frames.length).toEqual(10);
    });
  });

  describe("Recording scores of frames", function(){
    // it("Open frames (no strike or spare scored)", function(){
    //   player.frames.push(openframe);
    //   openframe.firstRollScore.and.returnValue(5);
    //   openframe.secondRollScore.and.returnValue(4);
    //   expect(openframe.firstRollScore()).toEqual(5);
    //   expect(openframe.secondRollScore()).toEqual(4);
    //   expect(player.updateFrameScore()).toEqual(9);
    //
    // });
  });



});

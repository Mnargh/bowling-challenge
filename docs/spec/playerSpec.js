describe("Players", function(){
  var player;
  var frame = jasmine.createSpyObj('frame', ['']);

  beforeEach(function(){
    player = new Player("Tom");
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
    it("Open frames (no strike or spare)", function(){

    });
  });



});

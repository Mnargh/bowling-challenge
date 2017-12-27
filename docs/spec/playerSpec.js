describe("Players", function(){
  var player;

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
  });

});



describe("Game of bowling", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("Game start up", function(){
    it ("Should initialise with an empty array of players", function(){
      expect(game.players.length).toEqual(0);
    });
    it ("Can add players to the array of players", function(){
      game.addPlayer(new Player("Tom"));
      expect(game.players.length).toEqual(1);
      expect(game.players[0].name).toEqual("Tom");
      game.addPlayer(new Player("Santa"));
      expect(game.players.length).toEqual(2);
      expect(game.players[1].name).toEqual("Santa");
    });
  });
});

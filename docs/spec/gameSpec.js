

describe("Game of bowling", function(){
  var game;

  beforeEach(function(){
    game = new Game();
    fakeplayer = jasmine.createSpyObj('player', {
      // 'name': function(){},
      'bowl': function(roll){ rollscore = roll;},
      'initializeFrames': function(){ frames = initialized;}
    });
    // Object.defineProperty(fakeplayer, name, { value: "Tom"});

  });

  describe("Game start up", function(){
    it ("Should initialise with an empty array of players", function(){
      expect(game.players.length).toEqual(0);
    });
  });
  describe("Adding Players", function(){
    it ("Can add players to the array of players", function(){
      // game.addPlayer(fakeplayer);
      // const spy = spyOnProperty(fakeplayer, 'name', 'set').and.returnValue("Tom");
      game.addPlayer(new Player("Tom"));
      expect(game.players.length).toEqual(1);
      expect(game.players[0].name).toEqual("Tom");
      game.addPlayer(new Player("Santa"));
      expect(game.players.length).toEqual(2);
      expect(game.players[1].name).toEqual("Santa");
    });
    it ("Should initialise each player's frames when the player is added", function(){
      game.addPlayer(fakeplayer);
      expect(fakeplayer.initializeFrames).toHaveBeenCalled();
    });
  });
  describe("Bowling", function(){
    // it("Game bowling calls the bowl function for the player", function(){
    //   game.addPlayer(fakeplayer);
    //   game.bowl(5);
    //   expect(fakeplayer.bowl).toHaveBeenCalledWith(5);
    // });
    it("Changes to next player's turn once they have completed their current frame",function(){
      game.addPlayer(new Player("Tom"));
      game.addPlayer(new Player("Santa"));
      expect(game.turn).toEqual(1);
      game.bowl(5);
      expect(game.turn).toEqual(1);
      game.bowl(4);
      expect(game.turn).toEqual(2);
      game.bowl(8);
      expect(game.turn).toEqual(2);
      // game.bowl(1);
      // expect(game.turn).toEqual(1);
    });
  });
  describe("Finishing the game", function(){
    it ("Should complete the game when all players have finished their final frame", function(){
      game.addPlayer(new Player("Tom"));
      game.addPlayer(new Player("Santa"));
      for (var i=1; i <= 20; i++) game.bowl(10);
      expect(game.players[0].isFinished).toEqual(false);
      expect(game.players[1].isFinished).toEqual(false);
      game.bowl(10);
      expect(game.players[0].isFinished).toEqual(true);
      expect(game.players[1].isFinished).toEqual(false);
      // for (var i=1; i <= 3; i++) game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.players[0].isFinished).toEqual(true);
      expect(game.players[1].isFinished).toEqual(true);
      expect(game.isCompleteGame).toEqual(true);
    });
  });
});

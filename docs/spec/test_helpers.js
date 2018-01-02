// var helper_method = function(){
//   // some function in here
// };
//
// var nine_strikes = function(){
//   for (var i = 1; i <= 9; i++;){
//     player.bowl(10);
//   }
// }
//
// exports.helper_method = helper_method;
// exports.nine_strikes = nine_strikes;

var player = new Player;
player.initializeFrames();
player.bowl(8);
player.bowl(2);
player.bowl(5);
player.bowl(4);
player.bowl(9);
player.bowl(0);
player.bowl(10);
player.bowl(10);
player.bowl(5);
player.bowl(5);
player.bowl(5);
player.bowl(3);
player.bowl(6);
player.bowl(3);
player.bowl(9);
player.bowl(1);
player.bowl(9);
player.bowl(1);
player.bowl(10);

var game = new Game;
game.addPlayer(new Player("Tom"));
game.addPlayer(new Player("Santa"));
for (var i=1; i <= 20; i++) game.bowl(10);

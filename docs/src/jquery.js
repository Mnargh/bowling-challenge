$(document).ready(function(){


  $("#add_player").click(function() {
    var player_name = $('#form-group').find('input[name="player_name"]').val();
    game.addPlayer(new Player(player_name));
    $('#player_name_form').trigger("reset");
    $(".rollscores #player_name").html(game.players[0].name);
  });

  $("#bowl_0").click(function(){
    bowl(0);
  });
  $("#bowl_1").click(function(){
    bowl(1);
  });
  $("#bowl_2").click(function(){
    bowl(2);
  });
  $("#bowl_3").click(function(){
    bowl(3);
  });
  $("#bowl_4").click(function(){
    bowl(4);
  });
  $("#bowl_5").click(function(){
    bowl(5);
  });
  $("#bowl_6").click(function(){
    bowl(6);
  });
  $("#bowl_7").click(function(){
    bowl(7);
  });
  $("#bowl_8").click(function(){
    bowl(8);
  });
  $("#bowl_9").click(function(){
    bowl(9);
  });
  $("#bowl_10").click(function(){
    bowl(10);
  });

});

bowl = function(roll){
  game.bowl(roll);
  updateBowledScores();
  updateCurrentScore();

}
updateBowledScores = function(){
  $('.firstroll#frame1').html(game.players[0].frames[0].firstRollScore);
  $(".secondroll#frame1").html(game.players[0].frames[0].secondRollScore);
  $('.firstroll#frame2').html(game.players[0].frames[1].firstRollScore);
  $(".secondroll#frame2").html(game.players[0].frames[1].secondRollScore);
  $('.firstroll#frame3').html(game.players[0].frames[2].firstRollScore);
  $(".secondroll#frame3").html(game.players[0].frames[2].secondRollScore);
  $('.firstroll#frame4').html(game.players[0].frames[3].firstRollScore);
  $(".secondroll#frame4").html(game.players[0].frames[3].secondRollScore);
  $('.firstroll#frame5').html(game.players[0].frames[4].firstRollScore);
  $(".secondroll#frame5").html(game.players[0].frames[4].secondRollScore);
  $('.firstroll#frame6').html(game.players[0].frames[5].firstRollScore);
  $(".secondroll#frame6").html(game.players[0].frames[5].secondRollScore);
  $('.firstroll#frame7').html(game.players[0].frames[6].firstRollScore);
  $(".secondroll#frame7").html(game.players[0].frames[6].secondRollScore);
  $('.firstroll#frame8').html(game.players[0].frames[7].firstRollScore);
  $(".secondroll#frame8").html(game.players[0].frames[7].secondRollScore);
  $('.firstroll#frame9').html(game.players[0].frames[8].firstRollScore);
  $(".secondroll#frame9").html(game.players[0].frames[8].secondRollScore);
  $('.firstroll#frame10').html(game.players[0].frames[9].firstRollScore);
  $(".secondroll#frame10").html(game.players[0].frames[9].secondRollScore);
  $('.thirdroll#frame10').html(game.players[0].frames[9].thirdRollScore);
}

updateCurrentScore = function(){
  $('.framescores #frame1').html(game.players[0].runningTotals[0]);
  $('.framescores #frame2').html(game.players[0].runningTotals[1]);
  $('.framescores #frame3').html(game.players[0].runningTotals[2]);
  $('.framescores #frame4').html(game.players[0].runningTotals[3]);
  $('.framescores #frame5').html(game.players[0].runningTotals[4]);
  $('.framescores #frame6').html(game.players[0].runningTotals[5]);
  $('.framescores #frame7').html(game.players[0].runningTotals[6]);
  $('.framescores #frame8').html(game.players[0].runningTotals[7]);
  $('.framescores #frame9').html(game.players[0].runningTotals[8]);
  $('.framescores #frame10').html(game.players[0].runningTotals[9]);
}


// $(document).append(buildGameView(game));

// function buildGameView(game) {
//   $container = $("<div></div>");
//   $container.append(buildScoreTable(game));
//   return $container;
// }

// function buildScoreTable(game) {
//   $table = $("<div></div>");

//   return $table;
// }

// function buildTableHeader(game) {
//   var frameViews = [];
//   for (var index = 0; index < game.numberOfFrames;) {
//     frameViews.push(buildFrame(game.frames[i]));
//   }
// }

// function buildRowForPlayer(player) {

// }

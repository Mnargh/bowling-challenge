$(document).ready(function(){


  $("#add_player").click(function() {
    var player_name = $('#form-group').find('input[name="player_name"]').val();
    game.addPlayer(new Player(player_name));
    $('#player_name_form').trigger("reset");
  });



});

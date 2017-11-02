//back-end//

  function Player(name, total, round){
    this.name = name;
    this.total = 0;
    this.round = 0;
  };

  // Player.prototype.score = function(){
  //   var total = 0;
  //   for(var i = 0, len = round.length; i < len; i++) {
  //   total += this.round[i];
  //  };
  //   return total;
  // };

  Player.prototype.diceRoll = function(){
    var result = Math.floor((Math.random() * 6) + 1);
    return result;
  };


  Player.prototype.endScore = function(){
    score(this.round) + this.total;
  }

var puns = ["You're the squeal-deal!", "That's what its all a-snout!"];

//front-end//
var newPlayer = new Player();
var newPlayer2 = new Player();

$(document).ready(function(){
  $('#p1-roll').click(function(event){
    event.preventDefault();
    var nameInput = $('#p1name').val();
    var result = newPlayer.diceRoll();
    newPlayer.name = nameInput;
    $("#p1-title").text(newPlayer.name);
    $("#p1name").hide();


    if (result === 1){
      newPlayer.round = 0;
      $('#result').text("NEXT PLAYER'S TURN");
    }else{
      newPlayer.round += result;
      $('#result').text("Score: " + result);
    }
    $('#p1round').text(newPlayer.round);
  });

  $('#p1-hold').click(function(event){
    event.preventDefault();

    var total = newPlayer.total += newPlayer.round;
    $("#p1total").text(total);

    if (newPlayer.total >= 100) {
      $("#result").text("YOU WIN!");
    }
  });



//player 2 starts here//

  $('#p2-roll').click(function(event){
    event.preventDefault();
    var nameInput = $('#p2name').val();
    var result = newPlayer2.diceRoll();
    newPlayer2.name = nameInput;
    $("#p2-title").text(newPlayer2.name);
    $("#p2name").hide();


    if (result === 1){
      newPlayer2.round = 0;
      $('#result').text("LOSE");
    }else{
      newPlayer2.round += result;
      $('#result').text(result);
    }
    $('#p2round').text(newPlayer2.round);
  });

  $('#p2-hold').click(function(event){
    event.preventDefault();

    var total = newPlayer2.total += newPlayer2.round;
    $("#p2total").text(total);
  });
});

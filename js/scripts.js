//back-end//

  function Player(name, total, round){
    this.name = name;
    this.total = 0;
    this.round = 0;
  };


  Player.prototype.diceRoll = function(){
    var result = Math.floor((Math.random() * 6) + 1);
    return result;
  };

  var puns = ["You're the squeal-deal!", "That's what its all a-snout!", "You aint nothing to muck with!", "You've got the chops!", "You go curl!", "It's 'swine time' baby!", "That's nothing to swine about!", "Get piggy with it!", "You're bacon me crazy!", "You're of a real different snort.", "I pink you won!"];

  var punny = function(){
    var result = puns[Math.floor(Math.random() * puns.length)];
    return result;
  }



//front-end//
var newPlayer = new Player();
var newPlayer2 = new Player();
var sound = new Audio("img/pig4.wav");

$(document).ready(function(){
  $('#p1-roll').click(function(event){
    event.preventDefault();

    var nameInput = $('#p1name').val();
    var result = newPlayer.diceRoll();
    newPlayer.name = nameInput;

    $("#p1-title").text(newPlayer.name);
    $("#p1hide").slideUp();



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

    newPlayer.round = 0;

    if (newPlayer.total >= 100) {
      $("#pun").text(punny());
      $("#result").text("YOU WIN!");
      $('.winner-effect').show();
    }

  });

//player 2 starts here//

  $('#p2-roll').click(function(event){
    event.preventDefault();
    var nameInput = $('#p2name').val();
    var result = newPlayer2.diceRoll();
    newPlayer2.name = nameInput;
    $("#p2-title").text(newPlayer2.name);
    $("#p2hide").slideUp();



    if (result === 1){
      newPlayer2.round = 0;
      $('#result').text("NEXT PLAYER'S TURN");
    }else{
      newPlayer2.round += result;
      $('#result').text("Score: " + result);
    }
    $('#p2round').text(newPlayer2.round);
  });

  $('#p2-hold').click(function(event){
    event.preventDefault();

    var total = newPlayer2.total += newPlayer2.round;
    $("#p2total").text(total);

    newPlayer2.round = 0;

    if (newPlayer2.total >= 100) {
      $("#pun").text(punny());
      $("#result").text("YOU WIN!");
      $('#confetti').show();
    }
  });

  $('#pig').click(function(event){
    event.preventDefault();
    sound.play();
  });
});

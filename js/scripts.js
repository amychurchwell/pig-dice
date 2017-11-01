//back-end//

function Player(name){
  this.name = name;
  this.round = [];
  this.total = 0;
  this.roll = 0;
};

function diceRoll(){
  var answer = Math.floor((Math.random() * 6) + 1)
  if (answer === 1){
    this.round === 0;
    return "PLAYER TURN IS OVER.";
  } else {
    return answer;
};

// function addScores(){
//
// }

var newPlayer = new Player("holkuj");

//front-end//
$(document).ready(function(){
  $("#form-p1").submit(function(event){
    event.preventDefault();
    // var finishedScore =

    // player1.name = $("input#p1name").val();
    // $("#p1-title").text(player1.name);
    $('#result').text(newPlayer.roll());

    // $("#form-p2").submit(function(event){
    //   event.preventDefault();
    //   var player2 = new Player(name, 0);
    // });
    //
    //   // player1.name = $("input#p1name").val();
    //   // $("#p1-title").text(player1.name);
    //   $('#result').text(player2.roll());
    //   $('#p2score').text();
  });
});

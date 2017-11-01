//back-end//

function Player(name, round, total){
  this.name = name;
  this.round = round;
  this.total = total;
  this.roll = diceRoll;
};

function diceRoll(){
  var answer = Math.floor((Math.random() * 6) + 1)
  answer + this.round;
  if (answer === 1){
    this.round === 0;
    return "test";
  } else {
    return answer;
  };
};



//front-end//
$(function(){
  $("#form-p1").submit(function(event){
    event.preventDefault();
    var player1 = new Player(name,1,0);
    var player2 = new Player(name,1,0);
    // player1.name = $("input#p1name").val();
    // $("#p1-title").text(player1.name);
    $('#result').text(diceRoll());

player1.roll();



  });
});

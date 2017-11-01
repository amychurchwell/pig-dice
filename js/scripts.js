//back-end//
$(document).ready(function(){

  function Player(name, total){
    this.name = name;
    this.total = total;
    round = [];
  };

  function score(){
    var total = 0;
    for(var i = 0, len = round.length; i < len; i++) {
    total += round[i];
   };
    return total;
  };

  function diceRoll(){
    var result = Math.floor((Math.random() * 6) + 1);
    if (result === 1) {
      return "BYE YOU SUCK!"
      round = [];
    } else {
    round.push(result);
    return result;
    }
  };

  function endScore(){
    var result = score(+ this.total);
    round = [];
    if (result >= 100) {
      return "YAY YOU WIN GET LOST!"
    } else {
     return result;
   }
 };

//front-end//
  var newPlayer = new Player();

  $('#p1-roll').click(function(event){
    event.preventDefault();
    // var nameInput = $('#p1name').val();


    $('#result').text(diceRoll());
    console.log(round);
    console.log(score());

  });

  $('#p1-hold').click(function(event){
    $("#p1total").text(endScore());
  });
});



// function score(){
//     var total = 0;
//     for (round){
//     total += round[i];
//   };
// };
// function results(){
//   var math = diceRoll();
//   return round.push();
// };

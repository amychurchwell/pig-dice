//back-end//

  function Player(name, total, round){
    this.name = name;
    this.total = total;
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


//front-end//
var newPlayer = new Player();

  $(document).ready(function(){
  $('#p1-roll').click(function(event){
    event.preventDefault();
    // var nameInput = $('#p1name').val();

    var result = newPlayer.diceRoll()


    if (result === 1){
      newPlayer.round = 0;
      $('#result').text("LOSE");
    }else{
      newPlayer.round += result;
      $('#result').text(result);
    }

    $('#p1total').text(newPlayer.round);
  });

  $('#p1-hold').click(function(event){
    $("#p1total").text(endScore());
  });
});



// function diceRoll(){
//   var result = Math.floor((Math.random() * 6) + 1);
//   if (result === 1) {
//     return "BYE YOU SUCK!"
//   } else {
//   round.push(result);
//   return result;
//   }
// };
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


//  function endScore(){
//    var result = score(+ this.total);
//    round = [];
//    if (result >= 100) {
//      return "YAY YOU WIN GET LOST!"
//    } else {
//     return result;
//   }
// };

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
    return total ;
  };

  function diceRoll(){
    debugger;
    var result = Math.floor((Math.random() * 6) + 1);
    round.push(result);
    return result;
  };




function endScore(){

}



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

//front-end//
var newPlayer = new Player(0, 0);

  $('#form-p1').submit(function(event){
    event.preventDefault();
    // var nameInput = $('#p1name').val();


    $('#result').text(diceRoll());
    console.log(round);
    console.log(score());

  });
});

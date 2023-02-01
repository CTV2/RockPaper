var choices = ["rock","paper","sheers"];
var random = Math.floor(Math.random() * choices.length);
function play(){
    winner = choices[random];
}
play();
console.log(winner);

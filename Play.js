var choices = ["Rock","Paper","Scissor"];
var random = Math.floor(Math.random() * choices.length);
function play(){
    winner = choices[random];
    console.log(winner);
    
}
function vs(){
    play();
    if (winner == "Rock"){
    document.getElementById("win").innerHTML = 'You Lose, Robot Chose Rock!';
    }
    else if (winner == "Paper"){
        document.getElementById("win").innerHTML = 'You Win!, Robot Chose Paper';
    }
    else {
        document.getElementById("win").innerHTML = 'Tie, Robot Chose Scissor';
    
    }
}
function vss(){
    play();
    if (winner == "Rock"){
        document.getElementById("win").innerHTML = 'You Win!, Robot Chose Rock!';
        }
        else if (winner == "Paper"){
            document.getElementById("win").innerHTML = 'Tie, Robot Chose Paper';
        }
        else {
            document.getElementById("win").innerHTML = 'You Lose, Robot Chose Scissor';
        
        }
}
function vsss(){
    play();
    if (winner == "Rock"){
        document.getElementById("win").innerHTML = 'Tie!, Robot Chose Rock!';
        }
        else if (winner == "Paper"){
            document.getElementById("win").innerHTML = 'You Lose, Robot Chose Paper';
        }
        else {
            document.getElementById("win").innerHTML = 'You Win!, Robot Chose Scissor';
        
        }
}
function playagain(){
    location.reload();

}
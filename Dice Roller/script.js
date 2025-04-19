
    
function rollDice(){
    let diceNum =Math.floor(Math.random()*6)+1;
    let diceImage="dice"+diceNum +".png";
    document.getElementById("Myimg").setAttribute("src",diceImage);
}
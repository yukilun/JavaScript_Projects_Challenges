var currentNPCIndex = 0;

var loopDisplayNPC = setInterval(displayNPC, 200);

var gameOptions = ["rock","paper","scissor"];

var player1Score = 0;
var npcScore = 0;
var isRestarted = new Boolean(true);

function displayNPC(){

    var npcOptions = document.querySelectorAll("#player2 div");
    for(var i=0; i<npcOptions.length; i++){
        npcOptions[i].classList.remove("active");
        if(i==currentNPCIndex){
            npcOptions[i].classList.add("active"); 
        }
    }

    if(currentNPCIndex>= npcOptions.length - 1){
        currentNPCIndex = 0;
    }
    else{
        currentNPCIndex++;
    }

}

function playGame(player1OptionName){

    if(!isRestarted) return

    var player1Results = document.querySelectorAll("div#player1-Result div");
    var npcResults = document.querySelectorAll("div#player2-Result div");

    var npcRandomOption = Math.floor(Math.random() * 3);
    var npcOptionName = gameOptions[npcRandomOption];
    
    var player1Option = -1;

    //display selected Options for both player and NPC
    gameOptions.forEach((option, index) =>{
        if(option == player1OptionName){
            player1Option = index;
        }
    })

    clearInterval(loopDisplayNPC);
    document.querySelector("#player2 div.active").classList.remove("active");
    document.querySelectorAll("#player2 div")[npcRandomOption].classList.add("active");
    
    player1Results[player1Option].classList.add("active");
    npcResults[npcRandomOption].classList.add("active");

    //determine who wins

    var result = document.getElementById('result');

    if(player1OptionName == npcOptionName){
        result.innerHTML = "Draw!"
    }
    else if(player1OptionName == "paper" && npcOptionName == "rock"){
        result.innerHTML = "You Win!"
        player1Score++;
    }
    else if(player1OptionName == "scissor" && npcOptionName == "paper"){
        result.innerHTML = "You Win!"
        player1Score++;
    }
    else if(player1OptionName == "rock" && npcOptionName == "scissor"){
        result.innerHTML = "You Win!"
        player1Score++;
    }
    else{
        result.innerHTML = "You Lose!"
        npcScore++;
    }

    document.getElementById("restart").classList.add("active");
    document.querySelector("div#player1 p").innerHTML = "Score:&nbsp;&nbsp;" + player1Score;
    document.querySelector("div#player2 p").innerHTML = "Score:&nbsp;&nbsp;" + npcScore;  
 

    isRestarted = false;
}

function restart(){

    document.querySelector("div#player1-Result div.active").classList.remove("active");
    document.querySelector("div#player2-Result div.active").classList.remove("active");

    document.getElementById('result').innerHTML = "Battle!";
    document.getElementById("restart").classList.remove("active");

    loopDisplayNPC = setInterval(displayNPC, 200);
    isRestarted = true;
}
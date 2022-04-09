var currentTime = 5000;
var timerTimeOut;

var numberOfChoice = 4;
var score = 0;
var wrongChoice;

const startBtn = document.getElementById("startBtn");
const timer = document.getElementById("timer");
const timerBar = document.getElementById("timerBar");
const gameArea = document.getElementById("gameArea");
const gameOverMsg = document.getElementById("gameOver");
const msgScore = document.getElementById("score");

function startGame(){
    startBtn.classList.toggle('hide');
    timer.classList.toggle('show');  
    gameArea.classList.toggle('show');
    startTimer();
    generateQuestion();
}

function startTimer(){

    console.log(currentTime);
    timerBar.style.width = (100 * currentTime / 5000) + "%";

    if(currentTime > 0){
        currentTime -= 100;
        timerTimeOut = setTimeout(startTimer,100);
    }
    else{
        displayResult();
    }
}

function generateQuestion(){
    var colorHue = Math.floor(Math.random()*361);
    var colorSaturation = 50;
    var colorLightness = 50;

    var correctColorSaturation;

    if(score < 10){
        numberOfChoice = 4;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -40: 40);
    }
    else if(score < 20){
        numberOfChoice = 4;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -30: 30);
    }
    else if(score < 30){
        numberOfChoice = 9;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -40: 40);
    }
    else if(score < 40){
        numberOfChoice = 9;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -30: 30);
    }
    else if(score < 50){
        numberOfChoice = 9;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -20: 20);
    }
    else if(score < 60){
        numberOfChoice = 16;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -20: 20);
    }
    else if(score < 70){
        numberOfChoice = 16;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -10: 10);
    }
    else{
        numberOfChoice = 16;
        correctColorSaturation = colorSaturation + ((Math.floor(Math.random()*2)) == 0? -10: 10);
    }

    if(numberOfChoice == 4){
        gameArea.classList.add("grid4");
        gameArea.classList.remove("grid9");
        gameArea.classList.remove("grid16");
    }
    else if(numberOfChoice == 9){
        gameArea.classList.remove("grid4");
        gameArea.classList.add("grid9");
        gameArea.classList.remove("grid16");
    }
    else if(numberOfChoice == 16){
        gameArea.classList.remove("grid4");
        gameArea.classList.remove("grid9");
        gameArea.classList.add("grid16");
    }

    correctChoice = Math.floor(Math.random()*numberOfChoice);
    var gameHTML = "";
    
    for(var i = 0; i < numberOfChoice; i++){
        if(i != correctChoice){
            gameHTML += "<div onClick='selectChoice(" + i + ")' style='background-color:hsl(" + colorHue + ", " + colorSaturation + "%, " + colorLightness +"%)'></div>";
        }
        else{
            gameHTML += "<div onClick='selectChoice(" + i + ")' style='background-color:hsl(" + colorHue + ", " + correctColorSaturation + "%, " + colorLightness +"%)'></div>";
        }
    }

    gameArea.innerHTML = gameHTML;
}

function selectChoice(choice){

    clearTimeout(timerTimeOut);

    if(choice != correctChoice){
        displayResult();
    }
    else{
        score++;
        currentTime = 5000;
        startTimer();
        generateQuestion();
    }
}

function displayResult(){
    gameOverMsg.classList.toggle('show');
    msgScore.innerHTML = score;
}

function resetGame(){
    score = 0;
    currentTime = 5000;
    gameOverMsg.classList.toggle('show');
    startTimer();
    generateQuestion(); 
}

function quitGame(){
    score = 0;
    currentTime = 5000;
    gameOverMsg.classList.toggle('show');
    startBtn.classList.toggle('hide');
    timer.classList.toggle('show');  
    gameArea.classList.toggle('show');
}
var imgOrder = [1,1,2,2,3,3];
var imgHTML = ["<img src='img/avataaars1.png'/>", 
                "<img src='img/avataaars2.png'/>",
                "<img src='img/avataaars3.png'/>"];
var choosenCard = new Array();
var score = 0;
var failedAttempt = 0;

randomCard();

function randomCard(){ 
    imgOrder.sort((a,b)=>0.5-Math.random());
    
    var cardsHTML="";

    for(var i=0; i<imgOrder.length; i++){
        cardsHTML+="<div onclick='chooseCard("+i+")'>"+ imgHTML[imgOrder[i]-1] +"</div>";
    }

    document.getElementById("cards").innerHTML = cardsHTML;
}

function chooseCard(index){
   
    if(choosenCard.length == 0 || choosenCard[0] != index){
        document.querySelector("div#cards > div:nth-of-type("+ parseInt(index+1) +") img").style.display = "block";
        document.querySelector("div#cards > div:nth-of-type("+ parseInt(index+1) +")").style.background = "rgb(179, 203, 226)";
        choosenCard.push(index);
    }

    if(choosenCard.length == 2){
        setTimeout("checkCard()",10);
        setTimeout("resetCard()",10);
    }

}

function checkCard(){
    if(imgOrder[choosenCard[0]] == imgOrder[choosenCard[1]]){
        window.alert("Cards match! Congratulations!");
        score++;
    }
    else{
        window.alert("Oh! Cards don't match! Please try again!");
        failedAttempt++;
    } 
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("failedAttempt").innerHTML = failedAttempt;
}

function resetCard(){
    choosenCard.splice(0,2);
    document.querySelectorAll("div#cards img").forEach(img=>img.style.display="none");
    randomCard();
}
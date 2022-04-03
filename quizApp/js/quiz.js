var questions = [ 
{ question: 'What is the color of blood?', 
    choices: ['Blue','Yellow','Black','Red'],
    answer: 3}, 
{ question: 'What are clothes made of?', 
    choices: ['Plastic','Paper','Wood','Glass','Cloth'],
    answer: 4}, 
{ question: 'Which has the sweetest taste?', 
    choices: ['Spaghetti','Hot Dogs','Honey','Peanut Butter'],
    answer: 2},
{ question: 'Which tastes the most sour?', 
    choices: ['Apple','Banana','Orange','Lemon'],
    answer: 3},
]; 

var scores = 0;

generateQuestion(0);

function generateQuestion(index){
    
    questionHTML = "<form id='question'>";

    if(index != questions.length){
    
        questionHTML += "<h2>" + questions[index].question + "</h2>";

        for(var i = 0; i<questions[index].choices.length; i++){
            questionHTML += "<div class='choice'>";
            questionHTML += "<input type='radio' name ='question' value='" + i + "' id='choice"+i+"'>";
            questionHTML += "<label for='choice"+i+"'>" + questions[index].choices[i] + "</label>";
            questionHTML += "</div>";
        }

        questionHTML += "</form>";
        questionHTML += "<div id='nextQuestion' onclick='nextQuestion("+ index + ")'><p>Submit</p></div>"

    }
    else{
        questionHTML += "<h2> You answered correctly " + scores + "/"+ questions.length + " questions.</h2>";
        questionHTML += "</form>";
        questionHTML += "<div id='nextQuestion' onclick='resetQuestion()'><p>Reload</p></div>";
    }
    
    document.getElementById("container").innerHTML = questionHTML;

}

function nextQuestion(index){
    var buttons = document.getElementsByName("question");    
    var selectedchoice = -1;

    buttons.forEach((btn, i, buttons)=>{if(buttons[i].checked) selectedchoice=i});


    setTimeout(function(){
        if(selectedchoice == -1){
            window.alert("Please select a choice!");
        }
        else{
            if(questions[index].answer == selectedchoice) scores++;
            generateQuestion(index+1);
        }
    },100);

}

function resetQuestion(){
    scores = 0;
    generateQuestion(0);
}


{/* 
<form id="question"> 
<h2>What is the color of blood?</h2>

<div class="choice">
    <input type="radio" name ="question" value="0">
    <label for="choice1">Blue</label>
</div>

<div class="choice">
    <input type="radio" name ="question" value="1">
    <label for="choice2">Yellow</label> 
</div>

<div class="choice">
    <input type="radio" name ="question" value="2">
    <label for="choice3">Balck</label>    
</div>

<div class="choice">
    <input type="radio" name ="question" value="3">
    <label for="choice4">Red</label>                      
</div>
</form>

<div id="nextQuestion">
<p>Submit</p>
</div>

*/}


var taskNames = new Array();
var dueDates = new Array();
var taskFinished = new Array();

toDoList();

function submitRecord(){

    var inputTaskName = document.getElementById("taskBox");
    var inputDueDate = document.getElementById("dueDateBox");

    console.log(inputDueDate.value);

    if(inputTaskName.checkValidity() && inputDueDate.checkValidity()){  
        taskNames.push(inputTaskName.value);
        dueDates.push(new Date(inputDueDate.value+" 00:00:00"));
        taskFinished.push("N");
        toDoList();
    }
    else{
        document.querySelector("button[type='submit']").click();
    }
}


function toDoList(){

    var outputHTML = "<table><tr><th><i class='fa-solid fa-check'></i></i></th><th>Task No.</th><th>Task Name</th><th>Due Date</th><th>Delete</th></tr>";

    if(taskNames.length != 0) {

        var sortedOrder= new Array();
        var sortedTaskName= new Array();
        var sortedDueDate = new Array();
        var sortedTaskFinished = new Array();

        for(var i=0; i<dueDates.length; i++){
            sortedOrder.push(i);
        }
        
        sortedOrder.sort((a,b)=> dueDates[a] - dueDates[b]);

        for(var i=0; i<dueDates.length; i++){
            sortedTaskName.push(taskNames[sortedOrder[i]]);
            sortedDueDate.push(dueDates[sortedOrder[i]]);
            sortedTaskFinished.push(taskFinished[sortedOrder[i]]);
        }
        
        taskNames = sortedTaskName;
        dueDates = sortedDueDate;
        taskFinished = sortedTaskFinished;
        

        for(var i=0; i<taskNames.length; i++){
            outputHTML +="<tr>";
            outputHTML +="<td><div class='markFinished' onclick='markFinished(" + i + ")'><i class='fa-solid fa-check'></i><div></td>";
            outputHTML +="<td>" + parseInt(i+1) + "</td>";
            outputHTML +="<td>" + taskNames[i] + "</td>";
            outputHTML +="<td>" + dueDates[i].toLocaleDateString() + "</td>";
            outputHTML +="<td><button type='button' onclick='deleteRecord(" + i + ")'>Delete</button></td>";
        }
    
        outputHTML +="</table>"
    }
    else{
        outputHTML+="<tr><td colspan='5'>No record added yet!</tr></table>";
    }

    document.getElementById("output").innerHTML = outputHTML;
    
    displayFinished();
}

function markFinished(index){
    if(taskFinished[index] == "N"){
        taskFinished[index] = "Y";
    }
    else{
        taskFinished[index] = "N";
    }
    displayFinished();
}

function displayFinished(){

    for(var i=0; i<taskFinished.length; i++){

        var checkMark = document.querySelectorAll("div.markFinished i")[i];
        var rowCells = document.querySelectorAll("table tr:nth-of-type("+ parseInt(i+2) +") td");

        if(taskFinished[i] == "Y"){
            checkMark.style.display = "inline";
    
            for(var j= 1; j<=3; j++){
                rowCells[j].style.color = "gray";
                rowCells[j].style.textDecoration = "line-through";
            }
        }
        else{
            checkMark.style.display = "none";
    
            for(var k= 1; k<=3; k++){
                rowCells[k].style.color = "black";
                rowCells[k].style.textDecoration = "none";
            }
        }
    }
}

function deleteRecord(index){
    taskNames.splice(index, 1);
    dueDates.splice(index, 1);
    taskFinished.splice(index, 1);
    toDoList();
}
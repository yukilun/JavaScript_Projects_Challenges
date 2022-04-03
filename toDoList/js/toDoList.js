
var taskNames = new Array();
var dueDates = new Array();

toDoList();

function submitRecord(){

    var inputTaskName = document.getElementById("taskBox");
    var inputDueDate = document.getElementById("dueDateBox");

    if(inputTaskName.checkValidity() && inputDueDate.checkValidity()){  
        taskNames.push(inputTaskName.value);
        dueDates.push(new Date(inputDueDate.value+" 00:00:00"));
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

        for(var i=0; i<dueDates.length; i++){
            sortedOrder.push(i);
        }
        
        sortedOrder.sort((a,b)=> dueDates[a] - dueDates[b]);

        for(var i=0; i<dueDates.length; i++){
            sortedTaskName.push(taskNames[sortedOrder[i]]);
            sortedDueDate.push(dueDates[sortedOrder[i]]);
        }
        
        taskNames = sortedTaskName;
        dueDates = sortedDueDate;
        
        

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

}

function markFinished(index){
    var checkMark = document.querySelectorAll("div.markFinished i")[index];
    var rowCells = document.querySelectorAll("table tr:nth-of-type("+ parseInt(index+2) +") td");

    if(checkMark.style.display != "inline"){

        checkMark.style.display = "inline";

        for(var i= 1; i<=3; i++){
            rowCells[i].style.color = "gray";
            rowCells[i].style.textDecoration = "line-through";
        }

    }
    else{

        checkMark.style.display = "none";

        for(var i= 1; i<=3; i++){
            rowCells[i].style.color = "black";
            rowCells[i].style.textDecoration = "none";
        }
    }

}

function deleteRecord(index){
    taskNames.splice(index, 1);
    dueDates.splice(index, 1);
    toDoList();
}
var moodColor = ["rgb(175, 228, 95)","rgb(255, 155, 217)","rgb(250, 204, 0)","rgb(96, 146, 221)","rgb(241, 125, 125)"];
var selectedColorIndex = -1;

generateCalendar();

function selectMood(index){

    if(index==selectedColorIndex){
        selectedColorIndex = -1;
    }
    else{
        selectedColorIndex = index;
    }

    var moodIcons = document.querySelectorAll("ul i");

    for(var i=0; i<moodIcons.length; i++){
        if(i==selectedColorIndex){
            document.querySelectorAll("ul i")[i].style.transform = "scale(1.2)";
        }
        else{
            document.querySelectorAll("ul i")[i].style.transform = "none";
        }
    }
}

function setMood(dayId){
    var day = document.getElementById(dayId);
    if(day.style.backgroundColor == "#E8DBD9" || day.style.backgroundColor==""){
        if(selectedColorIndex!= -1){
            day.style.backgroundColor = moodColor[selectedColorIndex];
        }  
    }
    else{
        day.style.backgroundColor = "#E8DBD9";
    }
}


function generateCalendar(){
    
    var today = new Date();
    var thisYear = today.getFullYear();
    var daysOfMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    var monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.querySelector("header h1").innerHTML= thisYear + " Mood Calendar";

    if(thisYear%4==0 && thisYear%100!=0){
        daysOfMonth[1] = 29;
    }
    else if(thisYear%4==0 && thisYear%100==0 && thisYear%400==0){
        daysOfMonth[1] = 29;
    }

    var calendarSection = document.getElementById("calendar");
    var calendarHTML = "";

    for(var i=0; i<monthName.length; i++){
        
        var day = new Date(thisYear, i, 1);
        var blankCells = day.getDay();

        calendarHTML+="<table><caption>" + monthName[i] + "</caption>";
        calendarHTML+="<tr><th>SUN</th><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th></tr>";
        calendarHTML+="<tr>";
        
        for(var j=0; j < blankCells; j++){
            calendarHTML+="<td></td>"
        }
        
        for(var k=1; k<=daysOfMonth[i]; k++){
            if(day.getDay() == 0){
                calendarHTML+="<tr>";
            }
            
            var dayId = i+"&"+k;
            calendarHTML+= "<td><div class='day' id="+dayId+" onclick='setMood(`"+dayId+"`)'>"+day.getDate()+"</div></td>";

            if(day.getDay() == 6){
                calendarHTML+="</tr>";
            }

            day.setDate(day.getDate()+1);
        }

        calendarHTML+="</table>";
    }

    calendarSection.innerHTML = calendarHTML;

}
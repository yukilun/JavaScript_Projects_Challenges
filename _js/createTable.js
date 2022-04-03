var projectNames = ['New Year Countdown','Matching Game','Notes Taker','Quiz App','To Do List', 'Vowel Counter'];
var projectURLs = ['countdown/index.html','matchingGame/index.html','noteTakerApp/index.html','quizApp/index.html','toDoList/index.html','vowelCounter/index.html'];
var projectTable = document.getElementById("projectList");

generateTable();

function generateTable(){
    var projectHTML = "<tr><th>Project No.</th><th>Project</th></tr>";
    projectNames.forEach((pname,i)=>{projectHTML+="<tr><td>"+parseInt(i+1)+"</td><td><a href='"+projectURLs[i]+"'>"+pname+"</a></td></tr>"});
    projectHTML+= "</table>";
    projectTable.innerHTML = projectHTML;
}

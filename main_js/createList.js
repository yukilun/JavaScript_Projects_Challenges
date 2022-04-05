var projectNames = ['New Year Countdown','Matching Game','Notes Taker',
                    'Quiz App','To Do List', 'Vowel Counter',
                    'Mood Calendar'];
var projectURLs = ['countdown/index.html','matchingGame/index.html','noteTakerApp/index.html',
                    'quizApp/index.html','toDoList/index.html','vowelCounter/index.html',
                    'moodCalendar/index.html'];

const projects = [
    {  
        number: 1,
        name: 'New Year Countdown',
        url: 'countdown/index.html',
        img: 'main_img/countdown.png'
    },{
        number: 2,
        name: 'Matching Game',
        url: 'matchingGame/index.html',
        img: 'main_img/matchingGame.png'
    },{
        number: 3,
        name: 'Notes Taker',
        url: 'noteTakerApp/index.html',
        img: 'main_img/noteTakerApp.png'
    }
    ,{
        number: 4,
        name: 'Quiz App',
        url: 'quizApp/index.html',
        img: 'main_img/quizApp.png'
    }
    ,{
        number: 5,
        name: 'To Do List',
        url: 'toDoList/index.html',
        img: 'main_img/toDoList.png'
    }
    ,{
        number: 6,
        name: 'Vowel Counter',
        url: 'vowelCounter/index.html',
        img: 'main_img/vowelCounter.png'
    }
    ,{
        number: 7,
        name: 'Mood Calendar',
        url: 'moodCalendar/index.html',
        img: 'main_img/moodCalendar.png'
    }
];

var projectList = document.getElementById("projectList");

generateList();

function generateList(){

    var searchedProject = new Array();
    var searchString = document.getElementById("searchString").value;

    if(searchString!=''){
        projects.forEach(project=>{
            if(project.name.toLowerCase().includes(searchString.toLowerCase())){
                searchedProject.push(project);
            }
        });
    }
    else{
        searchedProject = projects;
    }


    var projectHTML = "";

    searchedProject.forEach(project=>{
        projectHTML+="<table onclick='location.href=`" + project.url+ "`'>";
        projectHTML+="<tr><th>#"+project.number+"</th><th>"+project.name+"</th></tr>";
        projectHTML+="<tr><td colspan='2'><img src="+project.img+" alt=''/></td></tr>";
        projectHTML+="</table>"
    });

    projectList.innerHTML = projectHTML;
}

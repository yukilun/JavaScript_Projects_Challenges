const projects = [
    {
        number: 1,
        name: 'Mood Calendar',
        url: 'moodCalendar/',
        img: 'main_img/moodCalendar.png'
    }
    ,{
        number: 2,
        name: 'Cat Eyes Moving',
        url: 'catEyesMoving/',
        img: 'main_img/catEyesMoving.png'
    }
    ,{
        number: 3,
        name: 'Photo Gallery 3D',
        url: 'photoGallery3D/',
        img: 'main_img/photoGallery3D.png'
    }
    ,{  
        number: 4,
        name: 'Matching Game',
        url: 'matchingGame/',
        img: 'main_img/matchingGame.png'
    },{
        number: 5,
        name: 'New Year Countdown',
        url: 'countdown/',
        img: 'main_img/countdown.png'
    },{
        number: 6,
        name: 'Notes Taker',
        url: 'noteTakerApp/',
        img: 'main_img/noteTakerApp.png'
    }
    ,{
        number: 7,
        name: 'Quiz App',
        url: 'quizApp/',
        img: 'main_img/quizApp.png'
    }
    ,{
        number: 8,
        name: 'To Do List',
        url: 'toDoList/',
        img: 'main_img/toDoList.png'
    }
    ,{
        number: 9,
        name: 'Vowel Counter',
        url: 'vowelCounter/',
        img: 'main_img/vowelCounter.png'
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

    if(searchedProject.length < 3){
        var emptyProject = 3 - searchedProject.length;
        for(var i = 0; i < emptyProject; i++){
            projectHTML+="<table class='empty'></table>";
        }
    }


    projectList.innerHTML = projectHTML;
}

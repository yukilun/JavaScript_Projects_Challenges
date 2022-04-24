const projects = [
    {
        number: 1,
        name: 'Clock',
        url: 'clock/',
        img: 'main_img/clock.png'
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
        name: 'Mood Calendar',
        url: 'moodCalendar/',
        img: 'main_img/moodCalendar.png'
    }
    ,{
        number: 5,
        name: 'Color Blind Game',
        url: 'colorBlindGame/',
        img: 'main_img/colorBlindGame.png'
    }
    ,{  
        number: 6,
        name: 'Matching Game',
        url: 'matchingGame/',
        img: 'main_img/matchingGame.png'
    }
    ,{  
        number: 7,
        name: 'Rock Paper Scissors',
        url: 'rockPaperScissors/',
        img: 'main_img/rockPaperScissors.png'
    }
    ,{  
        number: 8,
        name: 'WordFill',
        url: 'wordFill/',
        img: 'main_img/wordFill.png'
    }
    ,{
        number: 9,
        name: 'Quiz App',
        url: 'quizApp/',
        img: 'main_img/quizApp.png'
    }
    ,{
        number: 10,
        name: 'New Year Countdown',
        url: 'countdown/',
        img: 'main_img/countdown.png'
    }
    ,{
        number: 11,
        name: 'Notes Taker',
        url: 'noteTakerApp/',
        img: 'main_img/noteTakerApp.png'
    }
    ,{
        number: 12,
        name: 'To Do List',
        url: 'toDoList/',
        img: 'main_img/toDoList.png'
    }
    ,{
        number: 13,
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
        projectHTML+="<a href=" + project.url + " target=`_blank`><table>";
        // projectHTML+="<table onclick='location.href=`" + project.url+ "`'>";
        projectHTML+="<tr><th>#"+project.number+"</th><th>"+project.name+"</th></tr>";
        projectHTML+="<tr><td colspan='2'><img src="+project.img+" alt=''/></td></tr>";
        // projectHTML+="</table>";
        projectHTML+="</table></a>";
    });

    if(searchedProject.length < 3){
        var emptyProject = 3 - searchedProject.length;
        for(var i = 0; i < emptyProject; i++){
            projectHTML+="<table class='empty'></table>";
        }
    }


    projectList.innerHTML = projectHTML;
}

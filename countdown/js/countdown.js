
countdown();
setInterval(countdown,500);

function countdown(){

    var now = new Date();
    var newYear = new Date(now.getFullYear()+1, 0, 1);

    var dayDiff = (newYear - now)/1000/60/60/24;
    var hourDiff = (dayDiff - Math.floor(dayDiff))*24;
    var minuteDiff = (hourDiff - Math.floor(hourDiff))*60;   
    var secondDiff = (minuteDiff - Math.floor(minuteDiff))*60;   

    document.getElementById("day").innerHTML = Math.floor(dayDiff);  
    document.getElementById("hour").innerHTML = Math.floor(hourDiff);
    document.getElementById("minute").innerHTML = Math.floor(minuteDiff);
    document.getElementById("second").innerHTML = Math.floor(secondDiff);
}
showTraditionalClock();
setInterval(showTraditionalClock, 1000);

function showTraditionalClock(){
    var currentTime = new Date();
    var hour = currentTime.getHours()> 12? currentTime.getHours()-12: currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var hourHand = document.getElementById("hourHand");
    var minuteHand = document.getElementById("minuteHand");    
    var secondHand = document.getElementById("secondHand");

    hourHand.style.transform = "rotate(" + (hour / 12 * 360) + "deg)";
    minuteHand.style.transform = "rotate(" + (minute / 60 * 360) + "deg)";
    secondHand.style.transform = "rotate(" + (second / 60 * 360) + "deg)";
}
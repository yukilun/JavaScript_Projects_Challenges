var previousCursorX = 0;
var cursorX = 0;
var cursorY = 0;
var eyeDistance = 10;
var centerCoord = 25;

function changeCoordinate(e){
    previousCursorX = cursorX;
    cursorX = e.clientX;
    cursorY = e.clientY;
    eyeMoving();
    showCursor();
}

function changeCoordinateTouch(e){
    previousCursorX = cursorX;
    cursorX = e.touches[0].clientX;
    cursorY = e.touches[0].clientY;
    eyeMoving();
    showCursor();
}


function showCursor(){
    var cursor = document.getElementById("cursor");
    cursor.style.top = cursorY + "px";
    cursor.style.left = cursorX+ "px";
    cursor.style.display = "block";
    if(cursorX - previousCursorX < 0){
        cursor.style.transform = "scaleX(-1)";
    }
    else{
        cursor.style.transform = "none";
    }

}

function eyeMoving(){
    var eye1 = document.getElementsByClassName("eye-moving-1")[0];
    var eye2 = document.getElementsByClassName("eye-moving-2")[0];
    seteyeCoordinate(eye1);
    seteyeCoordinate(eye2); 
}

function seteyeCoordinate(eye){
    eyeRect = eye.getBoundingClientRect();
    var cursorEyeDistanceY = cursorY - eyeRect.y;
    var cursorEyeDistanceX = cursorX - eyeRect.x;
    var cursorEyeAngle = Math.atan(Math.abs(cursorEyeDistanceY)/Math.abs(cursorEyeDistanceX));

    var top = centerCoord + Math.sign(cursorEyeDistanceY) * eyeDistance * Math.sin(cursorEyeAngle);
    var left = centerCoord + Math.sign(cursorEyeDistanceX) * eyeDistance * Math.cos(cursorEyeAngle);

    eye.style.top = top + "px";
    eye.style.left = left + "px";
}
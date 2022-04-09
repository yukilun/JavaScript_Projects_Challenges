
function showOptions(){
    document.getElementById("options").classList.toggle("active");
}

function showDarkMode(){
    document.getElementById("darkOption").classList.toggle("inactive");
    document.getElementById("traditionalClock").classList.toggle("light");
    document.getElementById("clockCenter").classList.toggle("light");
    document.getElementById("minuteHand").classList.toggle("light");
    document.querySelector("body").classList.toggle("light");
    document.querySelectorAll("div.block").forEach(block => block.classList.toggle("light"));
}

function showTraditional(){
    document.getElementById("traditionalOption").classList.toggle("inactive");
    document.getElementById("traditionalClock").classList.toggle("inactive");
}

function showDigital(){
    document.getElementById("digitalOption").classList.toggle("inactive");
    document.getElementById("digitalClock").classList.toggle("inactive");
}
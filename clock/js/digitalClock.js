const blockForDigit = [
[1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1],
[0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
[1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1],
[1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1],
[1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1],
[1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1],
[1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1],
[1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
[1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1],
[1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1],
];

showDigitalClock();
setInterval(showDigitalClock, 1000);

function showDigitalClock(){
    var blockArr = [
        [document.querySelectorAll('div#h1 div.block'), document.querySelectorAll('div#h2 div.block')],
        [document.querySelectorAll('div#m1 div.block'), document.querySelectorAll('div#m2 div.block')],
        [document.querySelectorAll('div#s1 div.block'), document.querySelectorAll('div#s2 div.block')],       
    ];

    var currentTime = new Date();
    var timeStr = [
        currentTime.getHours().toString().padStart(2,0).split(''),
        currentTime.getMinutes().toString().padStart(2,0).split(''),
        currentTime.getSeconds().toString().padStart(2,0).split('')
    ];

    for(var i=0; i < timeStr.length; i++){

        for(var j=0;  j < timeStr[i].length; j++){
            
            var digit = parseInt(timeStr[i][j]);

            for(var k=0; k < blockArr[i][j].length; k++){
                
                blockArr[i][j][k].classList.remove("active");
                
                if(blockForDigit[digit][k] == 1){
                    blockArr[i][j][k].classList.add("active");
                }
            }
        }
    }

    var colons = document.querySelectorAll("div.colon div:nth-of-type(even)");
    colons.forEach(colonDot =>{
        colonDot.classList.toggle("active");
        setTimeout(()=>colonDot.classList.toggle("active"), 500);
    })


}

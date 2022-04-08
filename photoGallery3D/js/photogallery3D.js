var currentIndex = 3;
var numberofPhoto = 7;

var container = document.querySelector("div#container");

displayImages();

window.addEventListener('resize', displayImages);


function showImg(imgId){
    currentIndex = parseInt(imgId.slice(-2));
    displayImages();
}

function showNextImg(e,num){

    e.target.classList.add("buttonClick");

    newIndex = currentIndex + num;

    if(newIndex < 0){
        currentIndex = numberofPhoto - 1;
    }
    else if(newIndex > numberofPhoto - 1){
        currentIndex = 0;
    }
    else{
        currentIndex = newIndex;
    }

    displayImages();

    setTimeout(()=>{e.target.classList.remove("buttonClick");}, 100);
}

function displayImages(){
    var images = document.querySelectorAll("img");
    var totalWidth = Math.min(window.innerWidth * 0.9, 1200);
    var showPhotoWidth = Math.min(totalWidth * 0.7, 450);
    var showPhotoHeight = 450/450 *  showPhotoWidth;
    var otherPhotoDisplayWidth = (totalWidth - showPhotoWidth) / (numberofPhoto - 1);

    container.style.height = showPhotoHeight + "px";

    var imgZIndex = 10;

    for(var i = 0; i<numberofPhoto; i++){

        images[i].className = "";
        images[i].style.left = "";
        images[i].style.right = "";
        
        if(i - currentIndex < 0){
            images[i].classList.add('imgleft');
            images[i].style.left = (i * otherPhotoDisplayWidth) + "px";    
            images[i].style.zIndex = imgZIndex;
            imgZIndex++;
        }
        else if(i - currentIndex == 0){
            images[i].classList.add('imgshow');
            images[i].style.left = (i * otherPhotoDisplayWidth) + "px";          
            images[i].style.zIndex = imgZIndex;
            imgZIndex--;
        }
        else{
            images[i].classList.add('imgright');
            images[i].style.right = ((numberofPhoto - 1 - i) * otherPhotoDisplayWidth) + "px";
            images[i].style.zIndex = imgZIndex;
            imgZIndex--;
        }

    }

}

function changeMode(){
    document.getElementById("toggleButton").classList.toggle("dark");
    document.getElementById("icons").classList.toggle("dark");
    document.querySelector("html").classList.toggle("dark");
}
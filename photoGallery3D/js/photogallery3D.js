var currentIndex = 3;
var numberofPhoto = 7;

var container = document.querySelector("div#container");

setImages();
displayImages();

window.addEventListener('resize', ()=>{
    setImages();
    displayImages();
});

window.addEventListener('keydown', event=>{
    if(event.key == 'F12'){
        setTimeout(()=> window.location.href = window.location.href, 500);
    }
})

function showImg(imgId){
    currentIndex = parseInt(imgId.slice(-2));
    setImages();
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
    setImages();
    displayImages();
    setTimeout(()=>{e.target.classList.remove("buttonClick");}, 100);
}

function setImages(){
    container.innerHTML = 
    "<img src='https://picsum.photos/id/213/500/500' alt='' id='img00' onclick='showImg(this.id)'>"
    + "<img src='https://picsum.photos/id/1016/500/500' alt='' id='img01' onclick='showImg(this.id)'>"
    + "<img src='https://picsum.photos/id/1018/500/500' alt='' id='img02' onclick='showImg(this.id)'>"
    + "<img src='https://picsum.photos/id/1015/500/500' alt='' id='img03' onclick='showImg(this.id)'>"
    + "<img src='https://picsum.photos/id/1043/500/500' alt='' id='img04' onclick='showImg(this.id)'>"
    + "<img src='https://picsum.photos/id/110/500/500' alt='' id='img05' onclick='showImg(this.id)'>"
    + "<img src='https://picsum.photos/id/199/500/500' alt='' id='img06' onclick='showImg(this.id)'>";   
}


function displayImages(){
    var images = document.querySelectorAll("img");
    var totalWidth = Math.min(window.outerWidth * 0.9, 1300);
    var showPhotoWidth = Math.min(totalWidth * 0.7, 500);
    var showPhotoHeight = 500/500 *  showPhotoWidth;
    var otherPhotoDisplayWidth = (totalWidth - showPhotoWidth) / (numberofPhoto - 1);

    container.style.height = showPhotoHeight + "px";

    var imgZIndex = 10;

    for(var i = 0; i<numberofPhoto; i++){

        images[i].className = "";
        
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
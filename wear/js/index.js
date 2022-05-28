let imageURLs = [
  'img/top1.png',
  'img/top2.png',
  'img/bottom1.png',
  'img/bottom2.png',
  'img/bottom3.png',
  'img/hat1.png',
  'img/hat2.png',
  'img/bag1.png',
  'img/bag2.png',
];

const Path = 'https://yukilun.github.io/JavaScript_Projects_Challenges/wear/';
const container = document.querySelector('.Board');
let canvasWidth = container.clientWidth;
let canvasHeight = container.clientHeight;

let canvas = new fabric.Canvas('canvas',{
    preserveObjectStacking: true,
});

createPanel();
resizeHtml();
window.addEventListener('resize',()=>{
    resizeHtml();
});

document.querySelector('#addButton').addEventListener('click', ()=>{
    document.querySelector('.Panel').classList.add('active');
})

document.querySelector('#closeButton').addEventListener('click', ()=>{
    document.querySelector('.Panel').classList.remove('active');
})


function resizeHtml(){
    canvas.setDimensions({width: 1, height: 1});
    document.body.style.height = window.innerHeight + "px";
    setTimeout(resizeCanvas, 2000);
}

function resizeCanvas(){
    canvasWidth = container.clientWidth;
    canvasHeight = container.clientHeight;
    canvas.setDimensions({width: canvasWidth, height: canvasHeight});
}

function createPanel(){
    let panelHTML = "";
    imageURLs.forEach((url)=>{
        panelHTML += `<div class='Item'><img src=${Path + url} alt='' /></div>`;
    });

    document.querySelector('.Panel').insertAdjacentHTML('beforeend', panelHTML);
}

document.querySelectorAll('.Item img').forEach(img=>{
    img.addEventListener('click', addImage);
})

function addImage(event){

    fabric.Image.fromURL(event.target.src, function(img) {
        img.set('top', canvas.height/3);
        img.set('left', canvas.width/3);
        img.scaleToHeight(canvas.height*0.3, false);
        img.setControlsVisibility({
            mt: false, 
            mb: false, 
            ml: false,
            mr: false, 
        })
        img.set({
            borderColor: 'rgb(164, 189, 165)',
            cornerColor: 'rgb(164, 189, 165)',
        });
        canvas.add(img);
    });

    console.log('added');
    document.querySelector('.Message').classList.add('active');
    setTimeout(()=>{document.querySelector('.Message').classList.remove('active')}, 500);

}

document.getElementById('up').addEventListener('click', ()=>{
    let obj = canvas.getActiveObject();
    canvas.bringForward(obj);
});

document.getElementById('upup').addEventListener('click', ()=>{
    let obj = canvas.getActiveObject();
    canvas.bringToFront(obj);
});

document.getElementById('down').addEventListener('click', ()=>{
    let obj = canvas.getActiveObject();
    canvas.sendBackwards(obj);
});

document.getElementById('downdown').addEventListener('click', ()=>{
    let obj = canvas.getActiveObject();
    canvas.sendToBack(obj);
});

document.getElementById('clear').addEventListener('click', ()=>{
    canvas.clear();
});

document.getElementById('delete').addEventListener('click', ()=>{
    let obj = canvas.getActiveObject();
    canvas.remove(obj);
});
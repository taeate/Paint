const canvas = document.querySelector('canvas');
const lineWidth = document.getElementById('line-width');
const color = document.getElementById('color');
const modeBtn = document.getElementById('mode-btn');
const destroyBtn = document.getElementById('destory-btn');
const eraserBtn = document.getElementById('eraser-btn');
const colorOptions = Array.from(document.getElementsByClassName('color-option'));
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
ctx.moveTo(0,0);
let isPainting = false;
let isFilling = false;

function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function onMouseDown() {
   isPainting = true;
}
function onMouseUp() {
    isPainting = false;
 }


function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorData = event.target.dataset.color;

    ctx.strokeStyle = colorData;
    ctx.fillStyle = colorData;
    color.value = colorData;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "채우기";
    }else{
        isFilling = true;
        modeBtn.innerText = "그리기";
    }
}

function onCanvasClick(){
    if(isFilling){
        ctx.fillRect(0,0,800,800);
    }
}

function onDestroyClick(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,800,800);
}

function onEraserClick(){
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "채우기";
}
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mouseleave', onMouseUp);
canvas.addEventListener('click', onCanvasClick);


lineWidth.addEventListener('change', onLineWidthChange);
color.addEventListener('change', onColorChange);

colorOptions.forEach(color => color.addEventListener('click', onColorClick));

modeBtn.addEventListener('click', onModeClick);
destroyBtn.addEventListener('click', onDestroyClick);
eraserBtn.addEventListener('click', onEraserClick);
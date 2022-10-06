const canvas = document.querySelector('canvas');
const lineWidth = document.getElementById('line-width');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;
ctx.moveTo(0,0);
let isPainting = false;

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

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', onMouseDown);
canvas.addEventListener('mouseup', onMouseUp);
canvas.addEventListener('mouseleave', onMouseUp);


lineWidth.addEventListener('change', onLineWidthChange);
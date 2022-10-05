const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
ctx.moveTo(0,0);


function onClick(event) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

canvas.addEventListener('mousemove', onClick);


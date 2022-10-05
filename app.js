const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 15, 100);
ctx.fillRect(360, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(288, 120, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(270, 120, 5, 0, 2 * Math.PI);
ctx.arc(305, 120, 5, 0, 2 * Math.PI);
ctx.fill();



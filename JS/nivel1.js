//Lortu Canvasaren IDa emen
const canvas = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const ctx = canvas.getContext("2d");

function drawBall()
{
  ctx.beginPath();
  ctx.arc(100, 500, 100, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function draw()
{
  drawBall();
  requestAnimationFrame(draw);
}



draw();
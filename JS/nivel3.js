
const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

function drawBall()
{
  ctx.beginPath();
  ctx.arc(300, 600, 100, 0, Math.PI * 2);
  ctx.fillStyle = "aqua";
  ctx.fill();
  ctx.closePath();
}

function draw()
{
  drawBall();
  requestAnimationFrame(draw);
}



draw();
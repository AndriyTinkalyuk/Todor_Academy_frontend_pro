const canvasContainer = document.querySelector('.canvas__container');
const canvas = document.getElementById("canvas");

if (!canvas.getContext) {
    canvasContainer.innerText = 'canvas not supported';

} else { 
    const ctx = canvas.getContext("2d");

    const circle = { 
        x: 100,
        y: 100,
        radius: 25,
        color: ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray", "black",
        "cyan", "magenta", "lime", "maroon", "navy", "olive", "teal", "silver", "gold", "coral"],
    }

    drawCircle(ctx, circle);

    canvas.addEventListener("click", () => {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        drawCircle(ctx, circle);
    })
}

function drawCircle(ctx, circle) { 
    ctx.beginPath();
    ctx.arc(circle.x,circle.y,circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = circle.color[Math.floor(Math.random() * circle.color.length)];
    ctx.fill();
    ctx.closePath();
  } 


  
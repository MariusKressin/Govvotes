draw();
window.setInterval(draw, 20);
canvas.addEventListener("click", mouseClicked)
canvas.addEventListener("mousemove", mouseMoved);
canvas.addEventListener("mouseup", mouseReleased);
canvas.addEventListener("mousedown", mousePressed);
canvas.addEventListener("keydown", keyPressed);
canvas.addEventListener("keyup", keyReleased);
canvas.addEventListener("keypress", keyTyped);

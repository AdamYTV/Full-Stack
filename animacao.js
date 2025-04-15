const canvas = document.getElementById('Canvas');
const ctx = canvas.getContext('2d');

const cursorRadius = 40;

function drawCursor(event) {
   
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    mouseX = Math.max(cursorRadius, Math.min(canvas.width - cursorRadius, mouseX));
    mouseY = Math.max(cursorRadius, Math.min(canvas.height - cursorRadius, mouseY));

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "green"; 
    ctx.fill();
    ctx.closePath();
}

canvas.addEventListener('mousemove', drawCursor);

canvas.addEventListener('mouseleave', (event) => {
    
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    mouseX = Math.max(cursorRadius, Math.min(canvas.width - cursorRadius, mouseX));
    mouseY = Math.max(cursorRadius, Math.min(canvas.height - cursorRadius, mouseY));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "green"; 
    ctx.fill();
    ctx.closePath();
});
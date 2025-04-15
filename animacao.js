const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Definindo o tamanho do "cursor" que vai seguir o ponteiro
const cursorRadius = 40;

// Função para desenhar o "cursor" na posição do ponteiro
function drawCursor(event) {
    // Pegando a posição do mouse dentro do canvas
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    // Garantir que o cursor não ultrapasse as bordas do canvas
    // Ajuste para a posição mínima e máxima
    mouseX = Math.max(cursorRadius, Math.min(canvas.width - cursorRadius, mouseX));
    mouseY = Math.max(cursorRadius, Math.min(canvas.height - cursorRadius, mouseY));

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar um círculo no lugar do ponteiro do mouse
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "green"; // Cor do círculo (pode ser alterada)
    ctx.fill();
    ctx.closePath();
}

// Registrar o evento de movimento do mouse para atualizar a posição do "cursor"
canvas.addEventListener('mousemove', drawCursor);

// Garantir que o círculo continue sendo desenhado mesmo que o mouse saia do canvas
canvas.addEventListener('mouseleave', (event) => {
    // Captura a posição do mouse
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    // Limitar a posição do cursor dentro do canvas
    mouseX = Math.max(cursorRadius, Math.min(canvas.width - cursorRadius, mouseX));
    mouseY = Math.max(cursorRadius, Math.min(canvas.height - cursorRadius, mouseY));

    // Limpar o canvas e desenhar o círculo na última posição do ponteiro
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, cursorRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "green"; // Cor do círculo (pode ser alterada)
    ctx.fill();
    ctx.closePath();
});
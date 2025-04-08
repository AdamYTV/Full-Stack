function desenharQuadrado(x, y, width, height, cor) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = cor;
ctx.fillRect(x, y, width, height);
ctx.closePath();
}

function desenharLinha(x1, y1, x2, y2, cor) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = cor;
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
ctx.closePath();
}

function desenharArco(x, y, raio, anguloInicial, anguloFinal, cor, preencher=false) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(x, y, raio, anguloInicial, anguloFinal);

if (preencher) {
    ctx.fillStyle = cor;
    ctx.fill();
}

ctx.stroke();
ctx.closePath();
}

function desenharCirculo(x, y, raio, corPreenchimento, corContorno) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = corPreenchimento;
    ctx.strokeStyle = corContorno;
    ctx.arc(x, y, raio, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function texto(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "22px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,50);
ctx.closePath();
}

texto()

function desenharQuadrados() {
    desenharQuadrado(0, 0, 50, 50, 'blue');
    desenharQuadrado(250, 0, 50, 50, 'red');
    desenharQuadrado(0, 265, 35, 35, 'yellow');
    desenharQuadrado(265, 265, 35, 35, '#00FFFF');
}
desenharQuadrados();

function desenharLinhas() {
    desenharLinha(150, 150, 0, 0, 'blue');
    desenharLinha(150, 150, 300, 0, 'red');
    desenharLinha(0, 150, 300, 150, 'green');
    desenharLinha(150, 150, 150, 300, 'grey');
}
desenharLinhas();

function desenharArcos() {
    desenharArco(150, 150, 70, 1 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(150, 150, 90, 1 * Math.PI, 1.25 * Math.PI, 'green');
    desenharArco(150, 150, 90, 1.75 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(150, 300, 40, 1 * Math.PI, 2 * Math.PI, 'green', true);
    desenharArco(150, 300, 60, 1.5 * Math.PI, 2 * Math.PI, 'green');
    desenharArco(150, 300, 80, 1 * Math.PI, 1.5 * Math.PI, 'green');
}
desenharArcos();

function desenharCirculos() {
    desenharCirculo(80, 215, 15, 'yellow', 'green');
    desenharCirculo(225, 215, 15, 'yellow', 'green');
    desenharCirculo(150, 115, 15, '#00FFFF', 'blue');
}
desenharCirculos();

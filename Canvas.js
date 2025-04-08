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
    desenharQuadrado(0,270,30,30,'yellow')
    desenharQuadrado(0,240,30,30,'yellow')
    desenharQuadrado (30,270,30,30,'yellow')
    desenharQuadrado(270, 270, 35, 35, 'black');
    desenharQuadrado(270,240,35,35, 'black');
    desenharQuadrado(240,270,35,35, 'black');
    desenharQuadrado(0,130,20,20,'#00FFFF')
    desenharQuadrado(0,150,20,20,'#00FFFF')
    desenharQuadrado(280,140,20,20,'#00FFFF')
    desenharQuadrado(120,150,30,30,'red')


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
    desenharArco(150, 300, 40, 1 * Math.PI, 2 * Math.PI, '#00FFFF', true);
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

//segundo canvas%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let canvas = document.getElementById('canva');
let ctx2 = canvas.getContext('2d');

function retangulo(l,cr,x4,y4,w4,h4){
    ctx2.beginPath()
    ctx2.lineWidth = l
    ctx2.fillStyle = cr
    ctx2.fillRect (x4,y4,w4,h4)
    ctx2.closePath()
}
retangulo(1,'brown',120,150,60,100)
retangulo(1,'brown',30,170,20,60)
retangulo(1,'grey',0,220,300,150)
retangulo(1,'brown',250,210,20,60)
retangulo(1,'rgb(117, 19, 19)',145,190,10,30)
retangulo(1,'blue',0,270,90,50)
retangulo(1,'blue',0,240,30,30)
retangulo(1,'cyan',125,165,20,20)
retangulo(1,'cyan',155,165,20,20)

function circulo(l2,cr2,x5,y5,h5,pi3,pi4){
    ctx2.beginPath()
    ctx2.lineWidth = l2
    ctx2.fillStyle = cr2
    ctx2.arc(x5,y5,h5,pi3*Math.PI,pi4*Math.PI)
    ctx2.fill()
    ctx2.closePath()
}
circulo(1,'yellow',225,75,40,0,2)
circulo(1,'green',260,205,25,0,2)
circulo(1,'green',40,170,25,0,2)
circulo(1,'blue',5,240,25,1,0)
circulo(1,'blue',90,295,25,1.5,2.5)

ctx2.beginPath()
ctx2.lineWidth = 1
ctx2.fillStyle = 'rgb(228, 56, 85)'
ctx2.moveTo(120,150)
ctx2.lineTo(150,130)
ctx2.lineTo(180,150)
ctx2.fill()
ctx2.closePath()
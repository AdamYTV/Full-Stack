function quadrados(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,265,35,35);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(265,265,35,35);
ctx.closePath();
}
quadrados()

function retas(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'blue';
ctx.moveTo(150,150);
ctx.lineTo(0,0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'red';
ctx.moveTo(150,150);
ctx.lineTo(300,0);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.moveTo(0,150);
ctx.lineTo(300,150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'grey';
ctx.moveTo(150,150);
ctx.lineTo(150,300);
ctx.stroke();
ctx.closePath();
}
retas()

function arco(){
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,70,1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,90,1.75*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,215,15,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(225,215,15,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#00FFFF';
ctx.strokeStyle = 'blue';
ctx.arc(150,115,15,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = '#00FFFF';
ctx.strokeStyle = 'green';
ctx.arc(150,300,40,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,300,60,1.5*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,300,80,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

}
arco()

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
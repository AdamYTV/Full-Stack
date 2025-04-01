let num_aleatorio = Math.floor(Math.random() * 100);
console.log (num_aleatorio);

function adivinha(){
    let guess = parseInt(document.getElementById('palpite').value);
    
    if (guess < num_aleatorio) {
        document.getElementById('mensagem').innerHTML = "tente um numero maior"
        document.getElementById('mensagem').style.setProperty("background-color", "red");
    }
    else if (guess > num_aleatorio) {
        document.getElementById('mensagem').innerHTML = "tente um numero menor"
        document.getElementById('mensagem').style.setProperty("background-color", "red");
    }
    else {
        document.getElementById('mensagem').innerHTML = "voce acertou"
        document.getElementById('mensagem').style.setProperty("background-color", "green");
        
    }
}



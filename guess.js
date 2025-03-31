let num_aleatorio = Math.floor(Math.random() * 100);
console.log (num_aleatorio);

function adivinha(){
    let guess = parseInt(document.getElementById("palpite").value);
    let mensagem = document.getElementById("mensagem");
    let fundo = document.getElementById("palpite");
    
    if (guess < num_aleatorio) {
        mensagem.textContent = "Tente um número maior";
        fundo.style.setProperty("background-color", "red");
    }
    else if (guess > num_aleatorio) {
        mensagem.textContent = "Tente um número menor";
        fundo.style.setProperty("background-color", "red");
    }
    else {
        mensagem.textContent = "voce acertou";
        fundo.style.setProperty("background-color", "green");
        
    }
}



//let p1 = document.getElementById('p1').innerHTML
//console.log(p1)

//document.getElementById('p1').innerHTML = "ola mundo"

//exemplo1
//let nome = prompt("QUAL O SEU NOME?");
//let idade = prompt("QUAL O SUA IDADE?");
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;

//let resposta = "ola" + nome + ", seu ano de nascimento e " + ano_nascimento;
//document.getElementById('ex1').innerHTML = resposta

//exmplo de funcao
//function imprimeMensagem(msg){
//    console.log(msg)
//}

//imprimeMensagem('mensagem1');
//imprimeMensagem('mensagem2');
//imprimeMensagem('mensagem3');

//exempo de funcao mult

function mult(a,b){
    return a * b;
}

//exemplo de funcao soma

function soma(a,b){
    return a + b;
}
//let c = soma(3,4);
//console.log(c);

//exemplo input

function ex2(){
    let num = parseInt (document.getElementById('ex2_in').value);
    console.log("incrementos ate " + num);
    for(let i = 0; i <=num; i++){
        console.log(i);
    }
}

//exemplo3

function ex3(){
    let num1 = parseInt(document.getElementById('ex3_1').value);
    let num2 = parseInt(document.getElementById('ex3_2').value);
    let result = soma(num1,num2);
    console.log (result);
    document.getElementById('ex3_resp').innerHTML = "A soma de" + num1 + "e" + num2 + "é" + result;
}

//Exemplo 4

function ex4(){
    let num1 = parseInt(document.getElementById('ex4_1').value);
    let num2 = parseInt(document.getElementById('ex4_2').value);

    let result = 0;
    if(num1 < 0 || num2 < 0){
        result = soma(num1,num2);
    }else{
        result = mult(num1,num2);
    }
    document.getElementById('ex4_resp').innerHTML = "o resultado é " + result;
}

let carro = {
    cor: 'black',
    modelo: 'SUV',
    marca: 'toyota',
    buzina: function(){
        return 'bii bii';
    }
};

let carro2 = {
    cor: 'white',
    modelo: 'SUV',
    marca: 'ford',
    buzina: function(){
        return 'fom fom';
    }
};

//console.log(carro);
//console.log(carro.cor)

//console.log(carro.buzina())
//console.log(carro2.buzina())

let carros = []
carros.push(carro)
carros.push(carro2)
for(let i = 0 ; i < carros.length; i++){
    console.log(carros[i].buzina())
}
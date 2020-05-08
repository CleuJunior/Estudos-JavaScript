// Função que não recebe parametros.

function cumprimentar(){
    console.log("Ola, meu nome é Junior"); 
}

// Chamando a função cumprimentar.

cumprimentar();


// Função recebendo um parametro.

function cumprimentarParametro(nome){
    console.log("Ola, meu nome é " + nome); 
}

// Chamando a função cumprimentarParametro passando uma String chamada "Jorge".

cumprimentarParametro("Joger");

// Função que recebe mais de um parametro.

function doisParametros(nome, idade){
    console.log("Me chamo " + nome + " e tenho " + idade + " anos.");

}

// Chamando a função.

doisParametros("Junior", 18);

// Função que retorna valor.

function triplica(valor) {
   return valor * 3;
}

// Definindo uma variável e chamando a função para dentro dessa variável.

let numeroTriplicado = triplica(3);

// Fazendo a impressão do valor.

console.log(numeroTriplicado);
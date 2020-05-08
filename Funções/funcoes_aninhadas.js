function meDobre(valor){
    return valor * 2;

}

console.log(meDobre(15));

// Criação de uma função aninhada, um função que retorna outra função.

function criaMultiplicador(valor){
    return function(valorInterno){
        return valorInterno * valor;

    }
}

let dobro = criaMultiplicador(2);
let triplo = criaMultiplicador(3);
let quadruplo = criaMultiplicador(4);

console.log(dobro(5));
console.log(triplo(5));
console.log(quadruplo(5));

let frutas = ["Laranja", "Maçã", "Melancia", "Pera"];

function preferida(freutaPreferida) {
    console.log(freutaPreferida + " é minha fruta preferida");
}

frutas.forEach(preferida);


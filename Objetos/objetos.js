// Criando um objeto cachorro.

let cachorro = {
    nome: "Peludo",
    idade: 5,
    comida: {
        preferida: "Ração",
        menosGosta: "Cenoura"
    },
    cor: "Preto",
    latir(){
        return "AuAu";
    }
};

// Chamando uma chave do objeto cachorro.

console.log(cachorro.latir());
console.log(cachorro.comida.preferida);
console.log(cachorro.comida.menosGosta);


const prota = {
    nome: 'Legolas',
    sobrenome: 'Holimion ',
    altura: 1.92,
    idade: 356,
    força: 78,
    vida: function () {
        var vida_final = 300 + this.idade * 1.7 / 2
        console.log(vida_final)
    },
    magia: 50,
}

// function elfos_vida(pessoa.vida, pessoa.idade) {
//     var elfos_vida = ""
//     vida = 300
//     elfos_vida = vida + idade * 1.7 / 2
//     console.log(elfos_vida)
// }

console.log(
    prota.altura,
    prota.força,
    prota.idade,
    prota.magia,
    prota.nome,
    prota.sobrenome
)
prota.vida()
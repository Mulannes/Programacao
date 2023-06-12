// const pessoa = {
//     nome: 'Legolas',
//     sobrenome: 'Holimion ',
//     altura: 1.92,
//     idade: 30,
// }

// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade)
// console.log(pessoa["nome"])

// pessoa.peso = 80 + "kg";
// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade, pessoa.peso)
// console.log(pessoa["nome"])

// console.log(Object.keys(pessoa))

// const animal = {
//     Reino: 'Animalia',
//     Filo: 'Chordata',
//     Classe: 'Mammalia',
//     Ordem: 'Cetacea',
//     Subordem: 'Odontoceti',
//     nome: "Golfinho",
//     nome_cientifico: "Delphinus delphis",
//     especie: "Golfinho_comum_de_bico_curto",
//     genero: "feminino",
//     peso: 120 + "kg",
//     sons() { return ("assovio e estalos") }
// }

// console.log(animal.nome);
// console.log(animal.genero);
// console.log(animal.Classe);
// console.log(animal["sons"]())

// const carro = {
//     marca: "BMW",
//     modelo: "M4",
//     ano: 2023,
//     ligar: function () {
//         console.log("O carro está ligando. Vrum, Vrum")
//     },
//     desligar: function () {
//         console.log('O carro está desligando!😒👌')
//     }
// }

// console.log("Do you want to turn on the car?")
// console.

//     console.log(carro.marca)
// console.log(carro.modelo)
// console.log(carro.ano)
// carro.ligar()
// carro.desligar()

const produtos = [
    {
        id: 1,
        nome: "Camiseta",
        valor: 29.99
    },

    {
        id: 2,
        nome: "Calça",
        valor: 89.99
    },
    {
        id: 3,
        nome: "Tênis",
        valor: 159.99
    },
]

var produtoEncontrado = produtos.find(function (produtos) {
    return produtos.id === 2
})

console.log(produtoEncontrado.id + ': ' + produtoEncontrado.nome + ' = ' + produtoEncontrado.valor)
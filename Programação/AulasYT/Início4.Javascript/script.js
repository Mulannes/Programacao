const names = ['Murillo', 'Marcos', 'Maria', 'José']
const PersonObj = {
    name: 'Murillo',
    age: 17,
    withBonus: true,
    profession: 'Student',
    Movies: [
        'The Queens Gambit',
        'Atirador',
        'Interstellar',
    ]
}

PersonObj.name = 'Antônio'

PersonMaria= {
    ...PersonObj,
    name: 'Maria', 
    genre: 'Female'
}

PersonMurillo= {
    ...PersonObj,
    name: 'Murillo', 
    genre: 'Male'
}

console.log(PersonMaria, PersonMurillo);
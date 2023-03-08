/*commit
commit
commit*/
// var type boolean true | false
    
    var isEnabled = false;
    var teste = 'false';
    console.log(isEnabled) 
    console.log(teste)

// array - index(indíce)

    var names = ['Murillo', 'Mirtilo', 'José'];
    console.log(names)
    console.log(names[1])

    names.push('Robertinho')//nasceu o robertinho aqui
    console.log(names.length)

    var teams = new Array();
    teams.push('Lakers','PSG')
    console.log(teams)

// IF - condicional

function testName(name){
    if(name.length > 10){
    return 'Puta nome exagerado'
    }else{
        return 'Nome pequeno'
    }
}

function isEqual(name){
    if(name === 'Murillo'){
        return 'Seu nome é murillo'
    } else if(name === 'Roberto'){
        return 'Seu nome é Roberto '
    } else{
        return 'Seu nome não é nem Roberto ou Murillo.'
    }
}
console.log(testName('Murillo'))
console.log(isEqual('Murillo'))
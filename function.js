let nivel = ranked( 50, 12)


function ranked (numW, numL){
    let saldoVitorias = numW - numL
    return saldoVitorias
}
console.log ( 'O heroi tem o saldo de: ' + nivel + ' é está no nível de:')

    
while (nivel < 10){
    console.log ('Ferro')
    break
}while (nivel >= 11 &&  nivel <= 20){
    console.log ('Bronze')
    break
}while (nivel >= 21 &&  nivel <= 50){
    console.log ('Prata')
    break
}while (nivel >=51 &&  nivel <= 80){
    console.log ('Ouro')
    break
}while (nivel >=81 && nivel <=90){
    console.log ('Diamante')
    break
}while (nivel >= 91 &&  nivel <=100){
    console.log ('Lendário')
    break
}while (nivel >= 101){
    console.log ('Imortal')
    break
    
}

  




// fizzBuzz(usado comparações)

// DIVISIVEL POR 3 = FIZZ
// DIVISIVEL POR 5 = BUZZ
// DIVISIVEL POR 3 E 5 =  FIZZBUZZ
// NÃO DIVISIVEL POR 3 E 5 = IRÁ MOSTRAR O NUMERO
// NÃO É UM NÚMERO = IRÁ MOSTRAR A MSG 'NÃO É UM NMR'

const resultado = fizzBuzz(); // coloque o numero, string, e confira qual retorno terá.
console.log(resultado)

function fizzBuzz(entrada){
    if ( typeof entrada !== 'number')
        return 'Não é um numero';
    if (entrada  % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    return entrada;
}
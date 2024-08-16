//números primos
// colocar um

exibirNumPrimos(10);

function exibirNumPrimos(limite){
    for(let num = 2; num <= limite; num++ ) {
        let primo = true;

        for(let divisor = 2; divisor < num; divisor++){
            if (num % divisor === 0){
                primo = false;
                break;
            }
        }
        
        if (primo) console.log(num)
    }
}

/* function exibirNumPrimos(limite) {
    for (let num = 2; num <= limite; num++) {
        let primo = true;

        for (let divisor = 2; divisor * divisor <= num; divisor++) {
            if (num % divisor === 0) {
                primo = false;
                break;
            }
        }

        if (primo) console.log(num);
    }
}
*/    
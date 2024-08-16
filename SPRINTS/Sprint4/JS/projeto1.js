// Maior valor entre 2 num

//Aqui mostra o 1º valor maior

let valorMaior = valorMax(100,99);
console.log(valorMaior);

function valorMax(num1, num2){
    if(num1>num2)
        return num1;
    else return num2; //também é possivel fazer sem o else, e dessa maneira tbm(num1 > num2 ? num1: num2 ;)
}

//Aqui mostra o 2º valor maior

let segundoValor = valorMax(99,100);
console.log(segundoValor);

function valorMax(num1, num2){
    if(num1>num2)
        return num1;
    else return num2;
}

//Aqui mostra os valores iguais

let iguais = valorMax(100,100);
console.log(iguais);

function valorMax(num1, num2){
    if(num1>num2)
        return num1;
    else return num2;
}

export default class Calculadora{
    
    static soma(a, b){
        return a + b
    }

    static sub(a, b){
        return a - b
    }

    
    static div(a, b){
	return a / b
}

    static multi(a, b){
	return a * b
}

    static trajetoriaBola(velocidadeInicial, alturaInicial) {
    const g = 9.8; // aceleração da gravidade em m/s^2
    const alcanceMaximo = (velocidadeInicial * velocidadeInicial) / g;
    const tempoDeVoo = Math.sqrt((2 * alturaInicial) / g);
    const alcanceEfetivo = alcanceMaximo + (velocidadeInicial * tempoDeVoo);

    return alcanceEfetivo;
}

    static areaDecagono(lado) {
    const sqrt5 = Math.sqrt(5);
    const doisSqrt5 = 2 * sqrt5;
    const cincoMaisDoisSqrt5 = 5 + doisSqrt5;
    const raizCincoMaisDoisSqrt5 = Math.sqrt(cincoMaisDoisSqrt5);

    const area = (5 / 2) * lado * lado * raizCincoMaisDoisSqrt5;
    return area;
}
}
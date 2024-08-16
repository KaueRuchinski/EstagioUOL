import assert from 'assert';
import { expect } from 'chai';
import Calculadora from '../src/Calculadora.js';

//Estudo

/*
describe('Meu primeiro teste', () => {
    it('Verificar a variável "aux"', () => {
        let aux = 2;
        expect(aux).to.be.equal(2).and.to.be.a('number');
        // ou também
        //assert.strictEqual(aux, 2);
    });

    it('Verificar outra variável', () => {
        let aux = 'carro';
        expect(aux).to.be.equal('carro').and.not.equal('charrete');
        // ou também
        //assert.strictEqual(aux, 'carro');
    });
});

describe('Meu segundo teste', () => {
    it('Verificar uma desigualdade', () => {
        let aux = 2;
        // ou também
        //expect(aux).to.be.equal(2).and.to.be.a('number');
        assert.notStrictEqual(aux, '2');
    });

    it('Verificar uma desigualdade', () => {
        let aux = 'carro';
        //expect(aux).to.be.equal(2).and.to.be.a('number');
        assert.notStrictEqual(aux, 'charrete');
    });
});
*/ 

//=======================================================================================================================================


// Calculadora

describe('Testes de soma' , () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
})

describe('Deve dividir o valores', () => {
    it('Deve diviir 6 por 2 resultando em 3', () => {
  let result = Calculadora.div(6, 2)
  expect(result).to.be.eq(3)
  })
})

describe('Deve multiplicar o valores', () => {
    it('Deve multiplicar 2 por 6 resultando em 12', () => {
  let resultado = Calculadora.multi(2, 6)
  expect(resultado).to.be.eq(12)
    })
})

describe('Testes de trajetória de bola', () => {
    it('Deve calcular a trajetória de uma bola com velocidade inicial 10m/s e altura inicial 1m ', () => {
        let resultado = Calculadora.trajetoriaBola(10, 1);
        expect(resultado).to.be.closeTo(14.72, 0.01);
    });
});

describe('Testes de área de decágono', () => {
    it('Deve calcular a área de um decágono com lado 3', () => {
        let resultado = Calculadora.areaDecagono(3);
        expect(resultado).to.be.closeTo(69.25, 0.01);
    });
});
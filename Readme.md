# EstagioUOL

### Sprint 04

    Nessa sprint foram desenvolvidos exercicíos em JS, onde será mostrado ao longo do README como recriá-los. Também foi houve um aprofundamento na questão de testes explorátorios.


### JavaScript(JS)

Durante essa sprint , tivemos como o principal tema, o JS, desenvolver essa linguagem,foi proporcionado alguns exercícios para nós realizos , citados durante um vídeos.

Como achar a média, par ou ímpr, números primos etc...

Irei apresentar somente 2 exemplos para não ficar extenso.

### 1º Projeto
> Maior valor entre 2 números
```js
let valorMaior = valorMax(100,99);
console.log(valorMaior);

function valorMax(num1, num2){
    if(num1>num2)
        return num1;
    else return num2; 
    }
```
    Explicação: 

    Declaramos let para colocar as váriaveis dentro do escopo
    e um "if" logo em seguida , se entrar no if retornará que o 1º valor é maior, caso contrário o 2º

### 2º Projeto
> Par ou Ímpar

```js
exibirTipo(1);
function exibirTipo(num){
    if (num % 2 === 0)
        console.log('PAR');
    else
        console.log('IMPAR');
}
```
    Explicação:

    chamamos o 'exibirTipo' para colocar o numero deseja para a função analisar.

    Definimos a função 'exibirTipo' com parametro 'num'.
    Caso ela entre no 'if' o numero passado será verificado se é par.O simcolo de % (módulo) vai retornar o restante da divisão de 'num' por 2. Se 'num' % 2 for igual a 0, significa que 'num' é divisível por 2 (ou seja, é par).
    Caso ela não entre, consequentemente é ímpar.

### Mocha e Chai

Foi apresentado as bibliotecas **Mocha** e **Chai** que são usadas para escrever testes de software. Elas são frequentemente usadas juntas para tornar o processo de teste mais fácil e eficiente.

- Mocha

Mocha é uma estrutura de teste para Node.js e JavaScript que nos ajuda na escrita de testes. Ele também fornece a estrutura básica para escrever e organizar testes, ele faz a execução dos testes e informa quais passaram e quais falharam, mostrando as mensagens de erro detalhadas se um teste falhar.

- Chai

        Chai é uma biblioteca de asserção ou funções que pode ser usada com Mocha para facilitar a verificação de resultados de testes.

Chai suporta três estilos de asserção principais:

- Assert: Estilo clássico com funções como assert.equal().

- Expect: Mais expressivo, com encadeamento de métodos, como expect(value).to.equal().

- Should: Similar ao estilo expect, mas usa uma sintaxe diferente, como value.should.equal().

#### Asserções

As asserções são usadas para verificar se os resultados produzidos pelo código são corretos e elas ajudam a automatizar o processo de teste, permitindo que testes sejam executados repetidamente sem intervenção manual. Da mesma forma do mocha Quando uma asserção falha, ela indica que há um problema no código, ajudando os desenvolvedores a identificar e corrigir erros.


### A seguir um pouco do projeto e como usar o mocha e chai

Primeiro antes de começarmos , é necessário que seja instalado o node.js, mocha e o chai

- [Node](https://nodejs.org/en/download/)
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)

No mocha e chai está o tutorial dentro do site de como fazer instalação, e recursos que podem ser usados

No estudo, foram ensinados como fazer os testes e suas classes para serem chamadas durantes esses testes

- Testes de soma

```js
export default class Calculadora{
    
    static soma(a, b){
        return a + b
    }
}
```
E para chamar essa classe
```js
import assert from 'assert';
import { expect } from 'chai';
import Calculadora from '../src/Calculadora.js';

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
```

> a cada teste finalido , vamos no terminal e colocamos "npm test"


- Testes de subtração

```js
export default class Calculadora{
    
    static sub(a, b){
        return a - b
    }
}
```
E para chamar essa classe
```js
import assert from 'assert';
import { expect } from 'chai';
import Calculadora from '../src/Calculadora.js';

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
})
```

> da mesma forma, realizado o "npm test"

em caso de erro, temos que ajustar o erro que esta sendo falado


### Autor

    Kauê Humenhuk Ruchinski

<a href="https://ibb.co/8M325rD"><img src="https://i.ibb.co/qBG9sNM/eu-Copia.jpg" width="160" height="130" alt="eu-Copia" border="0"> <></a>

### Referências
- [Stackoverflow](https://stackoverflow.com)
- [Mocha](https://mochajs.org)
- [Chai](https://www.chaijs.com)

### Ajuda

Foram feito ajudas de correção no Chatgpt,Gemini e o chat do Postman


<a href="https://imgbb.com/"><img src="https://i.ibb.co/TghvGQT/manly-handshake-fma-brotherhood.gif" alt="manly-handshake-fma-brotherhood" border="0"></a>
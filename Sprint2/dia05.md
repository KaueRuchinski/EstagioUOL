### DIA 05 (24/05/2024)

# Cobertura de testes de APIs & Testes candidatos à automação

## Como medir a Cobertura de Testes

Um exemplo de determinar a cobertura, no caso de input, é possivel avaliar a quantidade de caminhos que voce possui na sua API
Se tem 4 caminhos e vc faz apenas 3/4 , siginifica uma cobertura 75%.

Ou cobrir as açoes para um determinado parâmetro, como ID, ou também o exemplo das viagens , caso tenham 5 regiões, conferir se voce escreveu teste para cada um dessas 5.

## Testes candidatos à automação

Não é todo teste que **pode** e que **deve** ser automatizado.

Como organizar testes candidatos a automação em **fluxos** e não em listas

### Como são selecionados os testes:

#### ``Comunicação com o cliente ``

- Procurar entender qual a necessidade do cliente,suas prioridades, fluxos mais importantes que para ele, precisam ser automatizados, para que sempre uma resposta adequada.

####  ``Elaborar uma lista de prioridades``

- Vinculadas ao segmento e também a aplicação do cliente.

####  ``Riscos``

- Quais partes tem risco maior, e atraves deles definir quais cenarios que podem fazer parte do conjunto de testes automatizados.

#### ``Processos repetitivos``

- Tarefas repetitivas, onde são realizadas as mesmas coisas,ajudando a evitar um gasto desnecessário de esforço

## Demandas novas

Demandas novas não podem ter os seus testes automatizados antes que seja feita um teste manual, pois ela leva um certo tempo para ser automatizada.E é necessários que os stakeholders do projeto saibam que essa demanda esta funcionando , com bugs removidos , para que ela possa ser disponibilizada.

Após esse momento , serão analisadas quais as demandas novas devem ser incluidos na automação.

Para que isso ocorra , tem 2 justificativas, 'ela é uma prioridade?' 'algo importante?'
E outro motivo , é que em algum momento ela será incluida no conjunto de testes.
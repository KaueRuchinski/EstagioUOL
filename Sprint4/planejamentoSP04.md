## Planejamento dos testes

### - Funcionalidade do ServeRest Usuários, Produtos e Login


### 2.Resumo

Este teste está sendo feito para fins de conhecimento.

### 3.Pessoas a serem envolvidas
- Kauê Humenhuk Ruchinski

### 4.Funcionalidades ou Módulos a serem testados

> Usuários:

- 1º Teste criação de usuários(POST)

- 2º Teste busca/lista de usuários(GET)

- 3º Teste de edição de usuários(PUT)

- 4º Teste de Exclusão de usuários(DELETE)

> Produtos:

- 1º Teste para Cadastro de produtos(POST)

- 2º Teste para a busca/listagem de produtos cadastrados(GET)

- 3º Teste para buscar produto pelo ID(GET)

- 4º Teste de edição do produto(PUT)

- 5º Teste para exclusão de produtos(DELETE)

> Login:

- 1º Teste de Autenticação de Usuário (POST)

### 5.Local dos Testes

Serão na minha casa, em meu computador

### 6.Recursos necessários

- Necessita de um computador
- Necessita de periféricos
- Necessita de energia(luz, internet)
- Necessita de uma sala/quarto
- Apenas uma pessoa para realiza-lo
- Necessita de uma cadeira

### 7.Critérios Usados

Serão feitos um total de 14 testes e ? Casos.

Serão avaliados pelo status , se esta correto com o que se pede, e seu response

### 8.Riscos

- Cair energia
- Computador estragar
- Alguma intervenção na sala/quarto
- Alguma doença no tester
- Emergência familiar

### 9.Como os testes serão divulgados

Sera divulgado pelo github e pelo jira 

## US 004: [API] Carrinho

        DoR:

- **Banco de dados e infraestrutura para desenvolvimento disponibilizados.**
- **API de cadastro de usuários implementada.**
- **API de autenticação implementada.**
- **Ambiente de testes disponibilizado.**

        DoD:

- **CRUD da rota de Carrinhos implementado (CRIAR, LISTAR, ATUALIZAR E DELETAR).**
- **Análise de testes cobrindo a rota de carrinhos.**
- **Matriz de rastreabilidade atualizada.**
- **Automação de testes baseado na análise realizada.**

        Acceptance Criteria:

- **Usuários não autenticados não devem conseguir realizar ações na rota de Carrinhos.**
- **Não deve ser possível cadastrar apenas 1 carrinho por usuário.**
- **O carrinho deve ser vinculado ao usuário do token enviado no header Authorization.**
- **Ao cadastrar carrinho com sucesso é feita a redução da quantidade no cadastro de cada produto inserido no carrinho.**
- **Ao concluir uma compra o carrinho é excluído, sendo o carrinho excluído o vinculado ao usuário do token utilizado.**
- **Ao cancelar uma compra o carrinho é excluído e o estoque dos produtos desse carrinho é reabastecido.**
- **O carrinho excluído deverá ser o vinculado ao usuário do token utilizado.**


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

```
========================================================================================================================================
```
## Planejamento Testes de **Performance**

### Local dos testes:

Na minha casa, em meu computador.

Configurações de Hardware:



### Ferramenta utilizada:

- JMeter

### Métricas:

- Tempo de resposta
- Taxa de erro
- Throughput
- Latência
- Taxa de sucesso das requisições

Serão planejados os 7 tipos de testes para cada rota

# Teste de Performance

O objetivo é que a API consiga lidar com ao menos 20 requisições simultâneas, considerando uma avaliação dentro de uma janela de 2-5 minutos para a avaliação. 

- Taxa Max de erros = 5% 

### Teste de Carga
```
- Especificações do teste: Avaliar como o sistema lida com níveis crescentes de carga.

- Usuários: Escalonar de 10 a 200 usuários simultâneos.

- Duração: 10 minutos

- Resultado esperado: A API deve manter a estabilidade e um tempo de resposta aceitável.

- Resultado obtido: [Preencher após o teste]
```
### Teste de Estresse
```
Especificações do teste: Verificar como a API lida quando seus limites são ultrapassados.

- Usuários: Começar com 100 usuários e aumentar até o sistema falhar.

- Duração: Até a falha

- Resultado esperado: Identificar o ponto de falha e os principais gargalos.

- Resultado obtido: [Preencher após o teste]
```
### Teste de Escalabilidade
```
- Especificações do teste: Incrementar em 20% o limite máximo de usuários tanto para uso contínuo quanto durante os picos.

- Usuários: Aumentar gradualmente de 100 para 120 usuários.

- Duração: 15 minutos

- Resultado esperado: A API deve suportar o aumento de carga sem degradação significativa.

- Resultado obtido: [Preencher após o teste]
```
### Teste de Pico
```
- Especificações do teste: Analisar a capacidade da API de lidar com súbitas cargas.

- Usuários: Picos de 150 usuários de repente.

- Duração: 5 minutos

- Resultado esperado: A API deve lidar com os picos sem falhas críticas.

- Resultado obtido: [Preencher após o teste]
```
### Teste de Resistência
```
- Especificações do teste: Avaliar o desempenho com 150 usuários realizando requisições durante o período de 2 minutos.

- Usuários: 150

- Duração: 2 minutos

- Resultado esperado: Manter estabilidade e um tempo de resposta aceitável.

- Resultado obtido: [Preencher após o teste]
```
### Teste de Concorrência
```
- Especificações do teste: Verificar o impacto de vários usuários fazendo login ao mesmo tempo.

- Usuários: 100 usuários tentando logar simultaneamente.

- Duração: 5 minutos

- Resultado esperado: A API deve suportar os logins simultâneos sem falhas.

- Resultado obtido: [Preencher após o teste]
```
### Teste de Capacidade
```
- Especificações do teste: Avaliar quantos usuários ou transações o sistema suporta mantendo uma performance estável.

- Usuários: Escalonar de 50 a 500 usuários.

- Duração: 20 minutos

- Resultado esperado: Identificar o limite máximo de capacidade do sistema.

- Resultado obtido: [Preencher após o teste]
```
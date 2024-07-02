# Cenários de casos de teste

## Cenários de Teste API Login

### 1º Teste de Autenticação de Usuário (POST)

- CT01: Autenticar usuário com credenciais válidas
- CT02: Tentar autenticar usuário com email inválido
- CT03: Tentar autenticar usuário com senha inválida
- CT04: Tentar autenticar usuário com email não cadastrado
- CT05: Tentar autenticar usuário com senha vazia
- CT06: Tentar autenticar usuário com email vazio
- CT07: Tentar autenticar com os campos vazios

# Cenários de teste API Usuários

### 1º Teste criação de usuários(POST)

- CT01: Cadastrar um usuário com todos os seus campos preenchidos de forma correta
- CT02: Cadastro de usuário com email ja existente 
- CT03: Cadastro de usuário com algum de seus campos não preenchidos
- CT04: Cadastro de usuário com email de provedor restrito( gmail e hotmail)
- CT05: Cadastro de usuário com email fora do padrão válido
- CT06: Cadastro de usuário com senha mínimo 5 caracteres e no máximo 10 caracteres
- CT07: Cadastro de usuario com senha inválida

### 2º Teste busca/lista de usuários(GET)

- CT08: Listar usuários cadastrados
- CT09: Busca de usuário específico
- CT10: Busca de usuário inexistente.s


### 3º Teste de edição de usuários(PUT)

- CT11: Alteração de cadastro existente , com dados válidos
- CT12: Alteração de cadastro existente, com dados de outro usuário
- CT13: Alteração de usuário com ID inexistente(Caso não seja encontrado usuário com o ID informado é realizado novo cadastro ao invés de alteração.)

### 4º Teste de Exclusão de usuários(DELETE)

- CT14: Excluir usuário existente
- CT15: Excluir usuário com carrinho

# Cenários de Teste API Produtos

## 1º Teste para Cadastro de produtos (POST)

- CT01: Cadastrar um produto com todos os campos preenchidos corretamente.
- CT02: Cadastro de produto com nome já existente.
- CT03: Cadastro de produto com algum campo obrigatório não preenchido.
- CT04: Cadastro de produto com preço negativo.
- CT05: Cadastro de produto com quantidade negativa.
- CT06: Cadastro de produto com descrição contendo caracteres especiais.
- CT07: Cadastro de produto com campo de preço vazio.

## 2º Teste para a busca/listagem de produtos cadastrados (GET)
- CT08: Listar todos os produtos cadastrados.
- CT09: Buscar produto específico pelo nome.
- CT10: Buscar produto inexistente pelo nome.

## 3º Teste para buscar produto pelo ID (GET)

- CT11: Buscar produto existente pelo ID.
- CT12: Buscar produto com ID inválido (formato incorreto).
- CT13: Buscar produto inexistente pelo ID.

## 4º Teste de edição do produto (PUT)

- CT14: Editar um produto existente com dados válidos.
- CT15: Editar um produto com ID inexistente.
- CT16: Editar um produto com nome já existente.
- CT17: Editar um produto com quantidade negativa.
- CT18: Editar um produto com preço negativo.


## 5º Teste para exclusão de produtos (DELETE)
- CT19: Excluir um produto existente.
- CT20: Excluir um produto com ID inexistente.
- CT21: Excluir um produto associado a um carrinho ativo.

# Cenários de Teste API Carrinhos

## 1º Teste para Cadastro de carrinhos (POST)

- CT01: Cadastrar um carrinho com todos os campos preenchidos corretamente.
- CT02: Cadastro de carrinho com produto inexistente.
- CT03: Cadastro de carrinho com quantidade negativa.
- CT04: Cadastro de carrinho com produto já presente em outro carrinho ativo.
- CT05: Cadastro de carrinho sem informar a quantidade.

## 2º Teste para a busca/listagem de carrinhos cadastrados (GET)

- CT06: Listar todos os carrinhos cadastrados.
- CT07: Buscar carrinho específico pelo ID.
- CT08: Buscar carrinho inexistente pelo ID.
- CT09: Verificar paginação da lista de carrinhos.

## 3º Teste para buscar carrinho pelo ID (GET)

- CT10: Buscar carrinho existente pelo ID.
- CT11: Buscar carrinho com ID inválido (formato incorreto).
- CT12: Buscar carrinho inexistente pelo ID.

## 4º Teste de excluir carrinho do produto no final da compra (DELETE)


- CT13: Excluir carrinho existente após finalizar a compra.
- CT14: Excluir carrinho com ID inexistente.
- CT15: Excluir carrinho de produto já removido.

## 5º Teste para exclusão de produtos, retornando produtos ao estoque (DELETE)

- CT16: Excluir produtos de um carrinho existente, retornando produtos ao estoque.
- CT17: Excluir produtos de um carrinho com ID inexistente.
- CT18: Excluir produtos de um carrinho já finalizado.

 ### Candidatos a Automação

#  Usuários

## 1º Teste criação de usuários (POST)

- CT01: Cadastrar um usuário com todos os seus campos preenchidos de forma correta
- CT02: Cadastro de usuário com email já existente
- CT03: Cadastro de usuário com algum de seus campos não preenchidos
- CT04: Cadastro de usuário com email de provedor restrito (gmail e hotmail)
- CT05: Cadastro de usuário com email fora do padrão válido
- CT06: Cadastro de usuário com senha mínimo 5 caracteres e no máximo 10 caracteres
- CT07: Cadastro de usuário com senha inválida

## 2º Teste busca/lista de usuários (GET)

- CT08: Listar usuários cadastrados
- CT09: Busca de usuário específico
- CT10: Busca de usuário inexistente

## 4º Teste de Exclusão de usuários (DELETE)

- CT14: Excluir usuário existente
- CT15: Excluir usuário com carrinho

# Produtos

## 1º Teste para Cadastro de produtos (POST)

- CT01: Cadastrar um produto com todos os campos preenchidos corretamente
- CT02: Cadastro de produto com nome já existente
- CT03: Cadastro de produto com algum campo obrigatório não preenchido
- CT04: Cadastro de produto com preço negativo
- CT05: Cadastro de produto com quantidade negativa
- CT06: Cadastro de produto com descrição contendo caracteres especiais
- CT07: Cadastro de produto com campo de preço vazio

## 2º Teste para a busca/listagem de produtos cadastrados (GET)

- CT08: Listar todos os produtos cadastrados
- CT09: Buscar produto específico pelo nome
- CT10: Buscar produto inexistente pelo nome
- CT11: Verificar paginação da lista de produtos

## 3º Teste para buscar produto pelo ID (GET)

- CT12: Buscar produto existente pelo ID
- CT13: Buscar produto com ID inválido (formato incorreto)
- CT14: Buscar produto inexistente pelo ID

## 5º Teste para exclusão de produtos (DELETE)

- CT20: Excluir um produto existente
- CT21: Excluir um produto com ID inexistente
- CT22: Excluir um produto associado a um carrinho ativo

# Login

## 1º Teste de Autenticação de Usuário (POST)

- CT01: Autenticar usuário com credenciais válidas
- CT02: Tentar autenticar usuário com email inválido
- CT03: Tentar autenticar usuário com senha inválida
- CT04: Tentar autenticar usuário com email não cadastrado
- CT05: Tentar autenticar usuário com senha vazia
- CT06: Tentar autenticar usuário com email vazio
- CT07: Tentar autenticar com os campos vazios

# Carrinhos

## 1º Teste para Cadastro de carrinhos (POST)

- CT01: Cadastrar um carrinho com todos os campos preenchidos corretamente
- CT02: Cadastro de carrinho com produto inexistente
- CT03: Cadastro de carrinho com quantidade negativa
- CT04: Cadastro de carrinho com produto já presente em outro carrinho ativo
- CT05: Cadastro de carrinho sem informar a quantidade

## 2º Teste para a busca/listagem de carrinhos cadastrados (GET)

- CT06: Listar todos os carrinhos cadastrados
- CT07: Buscar carrinho específico pelo ID
- CT08: Buscar carrinho inexistente pelo ID

## 3º Teste de excluir carrinho do produto no final da compra (DELETE)

- CT09: Excluir carrinho existente após finalizar a compra
- CT10: Excluir carrinho com ID inexistente
- CT11: Excluir carrinho de produto já removido


## 4º Teste para exclusão de produtos, retornando produtos ao estoque (DELETE)

- CT12: Excluir produtos de um carrinho existente, retornando produtos ao estoque
- CT13: Excluir produtos de um carrinho com ID inexistente
- CT14: Excluir produtos de um carrinho já finalizado

## Cenários mais importantes (revisar novamente)


# Usuários

##### ` 1º Teste criação de usuários (Importância: Alta)`
------
    Garantir que o sistema permita a criação de usuários corretamente


##### ` 2º Teste busca/lista de usuários (Importância: Média)`

    Verificar que a listagem e a busca de usuários funcionam corretamente

##### ` 3º Teste de edição de usuários (Importância: Média)`

    Assegurar que as edições nos cadastros dos usuários sejam processadas de forma correta

##### ` 4º Teste de Exclusão de usuários (Importância: Baixa)`

    Validar que a exclusão de usuários funciona corretamente 

# Produtos

##### ` 1º Teste para Cadastro de produtos (Importância: Alta)`

    Garantir que o sistema permita o cadastro de produtos corretamente 

##### ` 2º Teste para a busca/listagem de produtos cadastrados (Importância: Média)`

    Verificar que a listagem e a busca de produtos funcionam corretamente

##### ` 3º Teste para buscar produto pelo ID (Importância: Média)`

    Validar que a busca por ID funcione corretamente 

##### ` 5º Teste para exclusão de produtos (Importância: Média)`

    Assegurar que a exclusão de produtos funcione corretamente 

# Login

##### ` 1º Teste para Cadastro de carrinhos (Importância: Alta)`

    Garantir que o sistema permita a criação de carrinhos corretamente

##### ` 2º Teste para a busca/listagem de carrinhos cadastrados (Importância: Média)`

    Verificar que a listagem e a busca de carrinhos funcionam corretamente

##### ` 3º Teste para buscar carrinho pelo ID (Importância: Média)`

    Validar que a busca por ID funcione corretamente

##### ` 4º Teste de excluir carrinho do produto no final da compra (Importância: Alta)`

    Assegurar que a exclusão de carrinhos e a atualização do estoque funcionem corretamente após a finalização da compra.

##### ` 5º Teste para exclusão de produtos, retornando produtos ao estoque (Importância: Média)`

    Garantir que a exclusão de produtos de carrinhos funcione corretamente e que os produtos sejam retornados ao estoque.
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

 ### Candidatos a Automação

-1º Teste criação de usuários(POST)
Testes de criação de usuários poderiam ser automatizados para poupar tempo

2º Teste busca/lista de usuários(GET)
A busca de usuários poderiam ser automatizados para também ter um esforço a menos

4º Teste de Exclusão de usuários(DELETE)
Na questão de exclusão de usuários, como é algo parecido em questao da facilidade , com o cadastro, a exclusão também deveria ser automatizada

## Cenários mais importantes

-1º Teste criação de usuários(Importância: Alta)

2º Teste busca/lista de usuários(Importância: Media)

3º Teste de edição de usuários(Importância: Media)

4º Teste de Exclusão de usuários(Importância: Baixa)




 

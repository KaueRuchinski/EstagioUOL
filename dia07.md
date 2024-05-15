# Exercício prático::Exercitando SQL

**1. Realizar uma consulta que conte o número de registros na tabela.;**
```sql
SELECT COUNT(*) AS total_usuarios FROM usuarios;
```
![imagem](https://ibb.co/nBqL3R5)

**2. Realizar uma consulta para encontrar o usuário com o id 10.**
```sql
SELECT * FROM usuarios WHERE id = 10;
```

**3. Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".**
```sql
SELECT * FROM usuarios WHERE nome = 'Bruce Wayne';
```

**4. Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".**
```sql
SELECT * FROM usuarios WHERE email = 'ghost_silva@fantasma.com';
```
**5. Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".**
```sql
DELETE FROM usuarios WHERE email = 'peterparker@marvel.com';

**# Com base na tabela de Produtos, você deve:
```
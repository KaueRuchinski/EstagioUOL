# DIA 07(24/05/24)

## Exercício prático::Exercitando SQL

### Com base na tabela de Usuários:

**1. Realizar uma consulta que conte o número de registros na tabela.;**
```sql
SELECT COUNT(*) AS total_usuarios FROM usuarios;
```
![imagem](https://ibb.co/nBqL3R5)
<https://imgbox.com/nb5246hd>
[imagem do exe](https://imgbox.com/nb5246hd)

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
DELETE FROM usuarios WHERE email = 'peterparker@marvel.com'
```

### Com base na tabela de Produtos:

**1.Realizar uma consulta que apresente produtos com descrição vazia;**
```sql
SELECT * FROM produtos WHERE descricao = ''
```
**2. Realizar uma consulta que apresente produtos com a categoria "games";**
```sql
SELECT * FROM produtos WHERE categoria = 'games''
```

**3. Realizar uma consulta que apresente produtos com preço "0";**
```sql
select * from produtos WHERE preco = 0
```

**4.Realizar uma consulta que apresente produtos com o preço maior que "100.00";**
```sql
select * from produtos WHERE preco > 100.00
```

**5.  Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";**
```sql
select * from produtos WHERE preco BETWEEN 1000.00 AND 2000.00
```

**6. Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo";;**
```sql
SELECT * FROM produtos WHERE nome LIKE '%jogo%'
```

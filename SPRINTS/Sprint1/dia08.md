# DIA 08(15/05/24)

## Exercício prático::Exercitando NOSQL

### Com base nos **usuários** listados:

##### **1. Realizar uma consulta que conte o número de registros existentes.**
```sql
db.usuarios.count();
```

##### **2. Realizar uma consulta para alterar o usuário com o nome "Teste Start" para "Teste Finish".**
```sql
db.usuarios.updateOne({ nome: "Teste Start" }, { $set: { nome: "Teste Finish"}})
```

##### **3. Realizar uma consulta para encontrar o usuário com o nome "Bruce Wayne".**
```sql
db.usuarios.findOne({ nome: "Bruce Wayne" })
```

##### **4. Realizar uma consulta para encontrar o usuário com o e-mail "ghost_silva@fantasma.com".**
```sql
db.usuarios.findOne({ email: "ghost_silva@fantasma.com" })
``` 

##### **5. Realizar uma consulta para deletar o usuário com e-mail "peterparker@marvel.com".**
```sql
db.usuarios.deleteOne({email : "peterparker@marvel.com" })
``` 

### Com base nos **produtos** listados:

##### **1 Realizar uma consulta que apresente produtos com descrição vazia;**
```sql  
 db.produtos.find({ descricao : "" })
``` 

##### **2 Realizar uma consulta que apresente produtos com a categoria "games";**
```sql 
db.produtos.find({ categoria : "games" })
``` 

##### **3 Realizar uma consulta que apresente produtos com preço "0";**
```sql 
db.produtos.find({preco : 0 })
``` 

##### **4 Realizar uma consulta que apresente produtos com o preço maior que "100.00";**
```sql
db.produtos.find({ preco : {$gt : 100.00 }})
```

##### **5 Realizar uma consulta que apresente produtos com o preço entre "1000.00" e "2000.00";**
```sql
db.produtos.find({ preco : { $gt :  1000.00 , $lt : 2000.00}});
```

##### **6 Realizar uma consulta que apresente produtos em que o nome contenha a palavra "jogo".**
Nao rodou, mas vou deixar o codigo
```sql
db.produtos.find({ $text: { $search: "jogo" } });
```
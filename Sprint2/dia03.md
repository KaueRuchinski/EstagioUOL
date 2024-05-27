### DIA 02 (22/05/2024)

# Tipos de erros, validações e boas práticas em testes de API

## Entender o Projeto

### **Exemplo de uma biblioteca online**

É possível descobrir a **rota de testes** 
 > - acessar a biblioteca
 > - checar quais livros tem
 > - consultar um livro
 > - reservar um livro

 ## Documentação

 Se a doc. do projeto está pronta,completa

 Por que ela é usada como referência da avaliação
 > - Métodos corretos
 > - O que é necessário fazer

 ## Validação

 ### **Quais tipos de teste**

 > - Aplicar um teste funcional (testar as funções, ver se a reserva está funcionando)
 > - Testes não funcionais ( por exemplo avaliar a performace)
 > - Testes estruturais ( Arquitetura da API, se a documentação está correta)
 
 **Checar a API como um todo, se o teste está retornando de forma correta, testes de usabilidade

 ## Segurança

 ### Autenticação

 Na hora de por exemplo reservar um livro, você precisa de um **token de acesso**.

 # TESTES FUNCIONAIS API REST

 No video, usando o swagger , é comentado que a **regra de negócio**, não estará ligada ao swagger, ou estaria descrita la dentro.
 Como por exemplo uma viagem, fazer uma requisição de uma região especifica , deverá apenas aparecer viagens para essa região, mas isso não estará descrito dentro do swagger.

 Ou se alguma função é feita apenas por adms ou usuários comuns

 Isso porque o swagger nao armazena todas as regras de negócio, guarda as questões relacionadas a interface.

 Se você esta testando algo relacionado a função do software , se algo está funcionando como deveria, isso é um teste funcional pois voce esta testando a função do software.

 Fazer um teste para conferir se determinada função predefinida apenas para admns , funciona para usuarios comuns , se funcionar , algo esta errado.

 Uso de técnicas formais para identificar o que testar.
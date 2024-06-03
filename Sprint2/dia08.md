### DIA 08 (29/05/2024)

# Introdução ao Postman

### Ferramentas de teste manual

- Postman
- Insomnia

### Ferramentes de teste automatizado

- Rest assured (usa java)
- Httparty(Ruby)

### Ferramentas para teste de carga

-Apache JMeter(Aplicação Desktop, Java)
-K6

## O que é o Postman?

É uma ferramenta utilizada para testar comunicações com APIs, possui um ambiente para documentação, teste e todo tipo de requisiçoes em geral.

## Por que usa-lo?

O seu tempo tanto para desenvolver e testar as APIs irá diminuir muito,além de poder armanezar seus testes para poder refaze-los mais tarde, contendo também uma resposta detalhada sobre o response da sua requisição

## Suas vantagens

> Suporta chamadas de API REST;SOAP e HTTP

> Possiu fácil acesso, e seus workspaces ficam salvos

> As collections, organizam suas requisições,dentro de pastas que são referentes a cada uma, assim utilizando-as facilmente.

> Criação de ambiente , diminui as repetições de teste, e possibilita usar as mesmas collections em outros ambientes

> Elaboração de testes com pontos de verificação ficam mais faceis,validação de responses, integração contínua, automação, depuração..

## Collection

O uso de collections permite uma organização das requisiçoes e tenha uma boa vizualização das rotas e casos abertos.

- ![alt text](image-9.png)      
- <img src="image-10.png" alt="image" width="375"/> <img src="image-11.png" alt="image" width="250"/>

## Ambientes e váriaveis

Sabemos que precisamos de diferentes valores de entrada para realizar testes em uma API. No caso de precisar testar o mesmo sistema em diferentes ambientes – como produção, desenvolvimento e homologação – podemos ter necessidade de aplicar diferentes conjuntos de dados de entrada. Para tornar esta seleção dinâmica usamos diferentes ambientes (environments) no Postman.

 - <img src="image-12.png" alt="image" width="375"/> 

 ### Configurando variáveis de ambiente

 - <img src="image-13.png" alt="image" width="500"/> 
 
- <img src="image-14.png" alt="image" width="500"/>

## Workspace

Postman permite organizar as APIs, collections, ambientes, mocks e outras entidades em workspaces que podem ser colaborativos, usados
simultaneamente por colegas de equipe. Dessa maneira, o estado dos recursos se mantém atualizado com as últimas modificações e sincronizado entre todos os colaboradores. Existe uma versão paga de assinatura que libera funções extra que podem ser interessante para projetos maiores e mais complexos.

1. Acesso
2. Overview
3. Atividades Recentes

<img src="image-15.png" alt="image" width="650"/>

## Corpo da requisição

Requisições podem exigir o envio de dados em seu corpo (body), (Principalmente requisições POST)

Podem retornar uma resposta contendo um body com dados.

1. Opções de estrutura de body
2. Formatos para estrutura raw
3. Campo para entrada de body
4. Campo do body de resposta

<img src="image-16.png" alt="image" width="650"/>

## Autenticação básica

Postman permite usar diferentes métodos de autenticação. A escolha do método de autenticação deve ser em função do tipo de autenticação utilizada pela API em questão. Além disso ela pode ser feita de maneiras diferentes.

1. Dentro de uma requisição que precise de autenticação
do tipo basic auth, selecionar a aba Authorization
2. No tipo de autenticação, selecionar a
opção Basic Authentication
3. Informar o nome de usuário e a senha, podendo
ser inserido tanto variável quanto valoresfixos

<img src="image-17.png" alt="image" width="650"/>

Ao preparar o basic auth, o programa  incluirá no headers automaticamente o campo Authorization e Postman-Token que serão responsáveis por encaminhar a autenticação gerada junto à requisição.
*A aba headers contém instruções e dados importantes para a requisição ser realizada da maneira correta.

<img src="image-18.png" alt="image" width="450"/>

## Header query

Requisiçoes podem passar parametros através da URL.Mas esses dados estaram expostos durante o tráfego.Por isso é uma boa enviar informações atraves do headers da requisição.

1. Headers da requisição - Podemos configurar
com informação personalizada em esquema
de chave-valor;
2. Headers da resposta – Podemos validar a
conformidade das informações e usar os dados
em ações;

> Na header alguns dos dados são **automáticos** e **obrigatórios**

<img src="image-19.png" alt="image" width="450"/>

## Automação com Postman

No postman é possivel executar de maneira mais rápida as requisições, para que possamos verificar o comportamento de cada verbo e conjunto de dados setados sobre cada rota, nos ambientes desejados.

E a automação nos ajuda também.De forma para economizar tempo, é possivel inserir **scripts** que fazem a verificação.

## Pre-request

Foi explicado de várias maneiras na daily, inclusive com uma dúvida minha.

Explicando do meu jeito, quando é necessário por exemplo , quando voce chega na parte de finalizar uma compra online , mas nao realizou o login ou cadastro.
Você é direcionado para a parte de login, esse pre-request no post, basicamente faz que esse token de autenticação seja rodado primeiro no "pre" e em seguida as demais etapas.

Dessa forma não é necessário , fazer outro teste , apenas o "pre".
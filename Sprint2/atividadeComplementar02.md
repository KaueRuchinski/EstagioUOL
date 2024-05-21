### DIA (20/05/2024)
`Comecei dia 20,mas estou terminando dia 21.`

# CÓDIGOS STATUS HTTP 

## CATEGORIAS
 - <img src="image-2.png" alt="image" width="240"/> - <img src="image-3.png" alt="image" width="240"/>
 - <img src="image-4.png" alt="image" width="240"/> - <img src="image-5.png" alt="image" width="240"/>
 - <img src="image-6.png" alt="image" width="240"/> 
 

## 1XX -> INFORMATIVA
- >**100 Continue**: Indica que o cliente deve continuar com a solicitação.Normalmente usado quando o cliente está enviando uma grande quantidade de dados ao servidor.

- >**101 Switching Protocol**: O servidor está mudando os protocolos conforme solicitado pelo cliente

## 2XX -> SUCESSO

- >**200 OK**: A requisição foi bem-sucedida

- >**201 Created**: A requisição foi bem-sucedida e um novo resurso foi criado.

- >**203 Accepted**: A requisição foi aceita para processamento, mas o processamento não foi concluído
- >**204 No Content**: A requisição foi bem-sucedida, mas não há conteúdo para enviar na resposta.


## 3XX -> REDIRECIONAMENTO

- >**301 Moved Permanently**: O recurso solicitado foi movido permanentemente para uma nova URI. 

- >**302 Found**: O recurso solicitado está temporariamente em uma diferente URI.

- >**304 Not Modified**:  Indica que o recurso não foi modificado desde a última requisição. 

## 4XX -> ERRO DO CLIENTE

- >**400 Bad Request**: A solicitação não pôde ser entendida pelo servidor devido a sintaxe malformada.

- >**401 Unauthorized**: A solicitação requer autenticação do usuário. Usado quando a autenticação falha ou não é fornecida.

- >**403 Forbidden**: O servidor entendeu a solicitação, mas se recusa a autorizá-la.

- >**404 Not Found**:O servidor não encontrou a URI solicitada

## 5XX -> ERRO DO SERVIDOR
- >**500 Internal Server Error**:O servidor encontrou uma condição inesperada que impediu de completar a solicitação.

- >**501 Not Implemented**:O servidor não suporta a funcionalidade necessária para atender à solicitação.

- >**503 Service Unavailable**: O servidor está atualmente indisponível ( sobrecarregado ou em manutenção).
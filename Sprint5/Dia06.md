### DIA 06[12/07]

Deu início mais um curso da AWS

E as duvidas feitas na atividade foram respondidas pelo PO.

1.	Quais são os principais objetivos dos testes de performance que queremos alcançar?   
```Identificar gargalos e limitações do sistema, garantir que o tempo de resposta está dentro dos tempos aceitáveis, validar o número de usuários simultâneos suportados, avaliar estabilidade  da API sob diferentes cargas. ```
 
2.	Quais são as métricas de performance que devem ser acompanhadas (tempo de resposta, taxa de erro, etc.)? Quais são as métricas de performance que devem ser monitoradas?   
```Tempo de resposta , taxa de erro, throughput, latência, taxa de sucesso das requisições``` 
 
3.	Quais são os requisitos de performance que a API deve atender, como tempo máx. de resposta e throughput mínimo? Considerando o cenário onde trabalhamos com o número máximo de usuários no sistema, existe um tempo de resposta máximo específico que a API deve cumprir?   
 ```Tempo médio de resposta, Taxa de erros, Throughput. ```
 
4.	Quais são os tipos de testes de performance que precisam ser implementados? Devem ser realizados todos os tipos de testes de performance?   
 ```Todos os apresentados no PB como Teste de Carga, Estresse, Escalabilidade, Pico, Resistência, Concorrência e capacidade. ```
 
5.	Existe alguma preparação para a massa de dados?   
 ```Sim, é importante preparar uma massa de dados representativa que simule condições reais de uso. Isso pode incluir a criação de usuários, produtos, carrinhos de compra, entre outros. ```
 
6.	Existem picos esperados? Se sim, quais são os picos a serem simulados? (por exemplo, Black Friday) Qual é a volumetria esperada de tráfego para a API (por exemplo, número de requisições por segundo/minuto)?   
```Pode ser considerado que no final do dia aconteceração diversas atualizações no sistema pelos usuários antes de finalizar as atividades, e é esperado que o sistema consiga comportar até 150 usuários realizando requisições durante o período de 2 minutos (considerar um ramp-up de usuários para avaliar o pico). ```
 
7.	Qual é o máximo de usuários e transações que a API deve suportar mantendo uma performance aceitável?   
```Depende do hardware de seu sistema. Um exemplo poderia ser suportar até 500 usuários simultâneos e 300 transações por segundo. ```
 
8.	Existem endpoints ou funcionalidades que são mais importantes para o negócio e devem ser testados com maior rigor?   
```Rota Carrinho``` 
  
9.	Existem problemas de performance conhecidos que já foram identificados na API?   
 ```Não, vocês devem identificar e informar. ```
 
10.	Objetivos de Performance: Quais são os objetivos de performance para a API Serverest? Há metas específicas de tempo de resposta ou throughput?   
```O objetivo é que a API consiga lidar com ao menos 20 requisições simultâneas, considerando uma avaliação dentro de uma janela de 2-5 minutos para a avaliação. ```
 
11. Existe algum padrão ou recomendação a seguir para configurar o Jmeter? Há algum script ou configuração específica que deve ser usada durante os testes?   
 ```A única configuração específica é apontar para o ambiente local onde está sendo executado a api serverest, os padrões e configurações são os apresentados durante os dias da sprint. ```
 
12.	Ação tomada após erro do testador no Jmeter?   
 ```Não entendi, poderiam explicar melhor na daily de segunda (15/07)? ```
 
13.	A API possui uma taxa máxima de erros toleráveis quando situada em condições críticas?  
 ``` 5% ```
 
14.	Quais ferramentas e recursos estão disponíveis para realizar os testes de performance?   
```Durante a sprint deve ser utilizado o JMeter. ```
 
15.	Quais são os planos de escalabilidade para a API? Há previsões de aumento de usuários ou dados no futuro próximo?   
 ```O objetivo é incrementar em 20% o limite máximo de usuários tanto para uso contínuo quanto durante os picos. ```
 
16.	Como dimensionar o tempo necessário para um teste de longevidade?   
``` Para esse caso podemos considerar 20min (tempo de expiração do token). ```
17.	Quais são os casos de uso mais críticos que devem ser considerados nos testes de performance?   
 ```Tudo que envolve checkout/carrinho ```
 
18.	Há operações específicas que são mais sensíveis ao desempenho?   
 ```Tudo que faz edição ao arquivo de BD e validação (POST e PUT) sendo a rota /carrinho a mais sensível ao desempenho. ```
 
19.	Existe algum fluxo prioritário a ser testado na aplicação?   
 ```Fluxo de checkout ```
20.	Como a equipe planeja lidar com o crescimento da carga no sistema?   
```Incrementando a infra do servidor. ```

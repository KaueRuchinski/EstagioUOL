# EstagioUOL

# Bem vindo, esse é o readme da Sprint 07
## Sprint 07

	Bem vindo ao readme da Sprint 7, nessa sprint tivemos um foco no k6,um framework de código aberto.

Segue abaixo a lista de conteúdos:

- Estrutura de projeto com K6
- Ciclo de vida dos testes
- Camada de Services (BaseService, BaseRest)
- Centralizando Checks
- Constantes com constants.js

## Instalação

Entre no site do **[K6](https://k6.io/docs/)**,e vá para o guia de **[Instalação](https://k6.io/docs/get-started/installation/).**

Em seguida de acordo com seus SO, siga os comando que são instruidos a cada sistema.

No caso do Windows você ira, e optar pelo Chocolatey, como será feito nessa sprint, siga as instruções abaixo.

1. Entre no site da **[Chocolatey](https://chocolatey.org/install#individual)**

2. Clique na aba **INDIVIDUAL**

    <a href="INDIVIDUAL.png"><img src="INDIVIDUAL.png" width="600" height="150" alt="eu-Copia" border="0"> </a>

3. Copie o seguinte comando:
    ```
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
    ```

4. Execute o Windows PowerShell como administrador

5. Cole o comando 

No mesmo prompt, vá para o site do **[K6](https://k6.io/docs/get-started/installation/)**.

E rode o seguinte comando: 
```
choco install k6
```
6. Para importar o meus códigos e usa-los no seu computador
 - Você pode tanto clonar:
```
	git clone https://github.com/KaueRuchinski/EstagioUOL.git
```
- Ou apenas baixar o arquivo em ZIP e extrai-lo

  No intervalo disso tudo, abra o prompt de comando(como Adm de preferencia)
  e rode o seguinte codigo
  ```
  	npx serverest@latest
    ```
  Dessa forma, voce irá rodar a API que iremos usar, localmente na sua maquina

  7. Quando entrar com vscode , e quiser rodar algum teste
  8. Va até o rota que preferir
  9. Clique com botao direito no arquivo
  10. Vá em Open Terminal
  11. Escreva no terminal
   ```   	
     k6 run
    ```
  12.Em seguida você pode digitar o arquivo, ou apertar a tecla TAB até o arquivo desejado aparecer

  13. Agora só apertar enter e rodar o teste
      
## Objetivos dos Testes:

Avaliar o nivel de performance da API

### Segue os links para os dias,Planejamento e para Baixar o JMeter:

- [K6](https://k6.io/docs/get-started/installation/)

- [Planejamento](https://github.com/KaueRuchinski/EstagioUOL/blob/3690a5e0c8c87169f87b57902b9bd93dc50250a0/Sprint5/planejamentoSP05.md)


### Agradecimentos:

Enzo Rossi, Daniel Pontes, Ricardo Neckel, Leticia Ribeiro, Mathias , Jorge, Gabriel Just, Oliver, Daniel

### Autor

    Kauê Humenhuk Ruchinski

### Ajuda

Foram usadas como uma forma de ajuda e de correção o Chatgpt,Gemini

## Obrigado

<a href="https://imgbb.com/"><img src="https://i.ibb.co/TghvGQT/manly-handshake-fma-brotherhood.gif" alt="manly-handshake-fma-brotherhood" border="0"></a>
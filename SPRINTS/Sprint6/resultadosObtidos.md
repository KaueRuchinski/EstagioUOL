## FLuxo

![alt text](image-9.png)

vus: 10
duration: '2m'

# Teste Usuarios

### Teste Carga
![alt text](image-1.png)

vus: 500,
    duration: '15s',

### Teste Pico
![alt text](image-2.png)

duration: '5s', target: 50 
duration: '4s', target: 700

### Teste Escalabilidade
![alt text](image-4.png)

duration: '10s', target: 150 
{ duration: '10s', target: 250 },
{ duration: '10s', target: 350 },
{ duration: '10s', target: 450 },
{ duration: '10s', target: 550 },
{ duration: '10s', target: 650 },
{ duration: '10s', target: 0 }

### Teste Estresse
![alt text](image-3.png)

duration: '20s', target: 50
duration: '20s', target: 100
duration: '20s', target: 150
duration: '20s', target: 300
duration: '20s', target: 200
duration: '20s', target: 0

### Teste concorrencia
![alt text](image.png)

vus: 500,
    duration: '25s',

    ======================================================================
## Teste Login

### Teste de carga
![alt text](image-5.png)

vus: 500,
    duration: '25s'

### Teste Pico
![alt text](image-6.png)

duration: '5s', target: 50
duration: '4s', target: 700

### Teste Escalabilidade

![alt text](image-7.png)

duration: '10s', target: 150
duration: '10s', target: 250
duration: '10s', target: 350
duration: '10s', target: 450
duration: '10s', target: 550
duration: '10s', target: 650
duration: '10s', target: 0

### Teste Estresse

duration: '20s', target: 50
duration: '20s', target: 100
duration: '20s', target: 150
duration: '20s', target: 30
duration: '20s', target: 20
duration: '20s', target: 0


### Teste concorrencia

vus: 500,
    duration: '25s'


## Teste Produto

// Radar, medir velocidade e 
//Velocidade max. 70km
//para cada 5km acima do limite, você receberá 1 ponto
// pontos maiores que o limite de 12, carteira será suspensa


verificarVelocidade();

function verificarVelocidade(velocidade){
  if ( velocidade <= 70)
     console.log('Não será multado') ;
else{
    const pontos = console.log(velocidade - 70)/ 5
    if (pontos >= 12)
        console.log("Sua carteira será suspensa");
    else
        console.log('Pontos: ', pontos);
    
}
    
}

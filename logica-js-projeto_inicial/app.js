alert("Boas vindas ao jogo do número Secreto");
let numeroSecreto = 29; 

let chute = prompt('Escolha um número entre 1 e 30');

//condição de comparar
if(chute == numeroSecreto){
     console.log('Você acertou')
    //alert('Você acertou')
} else{
    console.log('Errou')
}
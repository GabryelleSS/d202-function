// Objetivo é criar um jogo de adivinhação de números;
// 1 - Gerar um número aleatorio entre 0 e 50; #
// 2 - Pedir para o usuário digitar o número para ser adivinhado; #
// 3 - Se o usuario o usuário acertar, informar que ele ganhou; #
// 4 - Se o usuário errar, informar que ele errou e se o número é maior ou menor que o digitado; #
// 5 - Se o usuário errar, perde uma vida; #
// 6 - Ele tem 10 vidas; #

let adivinharNumero = prompt('Qual é o número pensado?');
// let vidas = 1;

// totalDeVidas = vidas - 1;


const geradorDeNumeroAleatorio = function(){
    let numeroPensado = Math.floor(Math.random() * 5 + 1);

    if(numeroPensado == adivinharNumero){
        alert(`Parabéns! Você acertou, o número pensado é: ${numeroPensado}`);
    }
    else{
        alert(`Você errou!`);
            if(numeroPensado > adivinharNumero){
                alert('O número pensado é maior.')
            }
            else{
                alert('O número pensado é menor.')
            }
    }

    return numeroPensado;
}





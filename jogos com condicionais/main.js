alert("Vamos jogar Pedra, Papel e Tesoura com o Barba Negra. Antes passe pela verificação de idade")

idade = prompt("Quantos anos você tem?")
if(idade >= 18){
    alert("Você esta liberado! Vamos começar.")

    escolhaJogador = prompt("Digite 1. Pedra, 2. Papel ou 3. Tesoura.")
    escolhaComputer = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == escolhaComputer){
        alert("DRAW!. Os dois jogadores escolheram igual")
    }
    if(escolhaJogador == 1){
        if(escolhaComputer == 2){
            alert("You LOSE HAHAHAHA!!!. O computador escolheu papel.")
        }
        if(escolhaComputer == 3)
            alert("You WIN, congratiolations. O Barba Negra escolheu tesoura")
    }

    if(escolhaJogador == 2){
        if(escolhaComputer == 3){
            alert("You LOSE HAHAHAHA!!!. O Barba Negra escolheu papel.")
        }
        if(escolhaComputer == 1){
            alert("You WIN, congratiolations. O Barba Negra escolheu tesoura")
        }
    }

    if(escolhaJogador == 3){
        if(escolhaComputer == 1){
            alert("You LOSE HAHAHAHA!!!. O Barba Negra escolheu papel.")
        }
        if(escolhaComputer == 2){
            alert("You WIN, congratiolations. O Barba Negra escolheu tesoura")
        }
    }

}else{
    alert("Você não esta liberado, por favor saia.")
}
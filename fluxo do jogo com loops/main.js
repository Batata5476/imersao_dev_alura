rodada = 1

while(rodada <= 3){
    console.log("Rodada" + rodada)

    escolhaJogador = prompt(`Nível ${rodada}! Escolha o vidro (1, ,2 ,3).`)

    pisoQuebrado = Math.floor(Math.random() * 3) + 1;

    if(escolhaJogador == pisoQuebrado){
        alert("O vido quebrou! GAME OVER HAHAHAHA!!!.")
        rodada = 10
    } else{
        alert(`Muito bem, você passou desse nível. O piso quebrado era: ${pisoQuebrado}.`) 
    } 

    rodada += 1
}

if(rodada == 4){
    alert("Muito bem! Você ganhou HAHAHAHA!!!")
}
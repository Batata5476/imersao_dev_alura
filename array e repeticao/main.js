//Preciso criar uma lista com 3 jogadores
//Calcular a força de cada jogador para saber a força do time
//Calcular a força de cada jogador do time do computador
//Comparar os dois times para ver quem vence"

personagem = ["","",""]
viloes = ["","",""]

forcaPersonagem = 0
forcaVilao = 0

alert(`O array personagem contem ${personagem}`)

for(let i = 0; i < 3; i++){
    escolhaPersonagem = prompt("Digite o nome do seu personagem" + (i + i))
    personagem[i] = escolhaPersonagem
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
}

alert(`Alerte, o Array contém ${personagem}`)

alert(`Vilões: ${viloes}`)

for(let i = 0; i < 3; i++){
    indiceAleatorio = Math.floor(Math.random() * 10)
    viloesPossiveis = ["Darth Vader","Coringa","Lorde Voldemort","Hannibal Lecter","Thanos","Freddy Krueger","Jason Voorhees","Norman Bates","Anton Chigurh","Pennywise"]
    viloes[i] = viloesPossiveis [indiceAleatorio]
    forcaVilao += Math.floor(Math.random()
* 10) + 1;
}

alert(`Vilões agora ${viloes}`)

if(forcaPersonagem > forcaVilao){
    alert(`Sua força: ${forcaPersonagem} VS Força vilões: ${forcaVilao}`)

    alert("Seu time ganhou!!! Muite bem.")
} else{
    if(forcaPersonagem < forcaVilao){
        alert(`Sua força: ${forcaPersonagem} VS Força vilões: ${forcaVilao}`)

        alert("Seu time PERDEU!!! HAHAHAHAHA.")
    } else{
        alert(`Suas forças se igualaram!! As forças foram ${forcaPersonagem} igualmente.`)
    }
}
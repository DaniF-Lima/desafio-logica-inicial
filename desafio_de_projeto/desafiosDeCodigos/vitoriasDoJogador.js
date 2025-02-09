const prompt = require("prompt-sync")();

for (let i = 0; i < 3; i++) {
    console.clear();

    //começando interação com o usurio, pedindo seu nickname
    let personagem = prompt("Digite seu nickname: ");
    console.log("Seja bem vindo,", personagem);

    //pediando aao usuario as informacoes de vitorias e derrotas
    let numeroDeVitorias = parseInt(prompt("Você ganhou quantas vezes? "), 10);
    let numeroDeDerrotas = parseInt(prompt("Você foi derrotado quantas vezes? "), 10);
    let saldoVitorias = numeroDeVitorias - numeroDeDerrotas

    //criando os níveis
    let nivel = saldoVitorias
    function definirNiveis(nivel) {
        if (nivel <= 10){
            return "Ferro"
        } else if (nivel >= 11 && nivel <= 20) {
            return "Bronze"
        } else if (nivel >= 21 && nivel <= 50) {
            return "Prata"
        } else if (nivel >= 51 && nivel <= 80) {
            return "Ouro"
        } else if (nivel >= 81 && nivel <= 90) {
            return "Diamante"
        } else if (nivel >= 91 && nivel <= 100) {
            return "Lendário"
        } else if (nivel >= 101) {
            return "Imortal"
        } 
    }
    console.log("O herói tem o saldo de vitórias de "+ saldoVitorias + ". E está no nível " + definirNiveis(nivel))

    if (i < 2) { // Evitando exibir na última iteração
        let continuar = prompt("Deseja jogar novamente? (s/n): ").toLowerCase();
        if (continuar !== 's') {
            break; // Saindo do loop se o usuário não quiser continuar
        }
    }
}




let personagem = prompt("Digite seu nickname: ");console.log(personagem);
let xp = parseInt(prompt("Digite seu XP: "), 10);
console.log(xp);

function definirNivel(xp) {
    const niveis = [
        { min: 0, max: 1000, nivel: "Nível Ferro" },
        { min: 1001, max: 2000, nivel: "Nível Bronze" },
        { min: 2001, max: 5000, nivel: "Nível Prata" },
        { min: 5001, max: 7000, nivel: "Nível Ouro" },
        { min: 7001, max: 8000, nivel: "Nível Platina" },
        { min: 8001, max: 9000, nivel: "Nível Ascendente" },
        { min: 9001, max: 10000, nivel: "Nível Imortal" },
        { min: 10001, max: Infinity, nivel: "Nível Radiante" }
    ];

    // Verifica se o XP está dentro de algum nível
    for (let i = 0; i < niveis.length; i++) {
        if (xp >= niveis[i].min && xp <= niveis[i].max) {
            return niveis[i].nivel;
        }
    }
}

function mostrarInfo() {
    let nivel = definirNivel(xp);
    console.log(`O herói ${personagem} está no nível ${nivel}}`);
}

mostrarInfo();

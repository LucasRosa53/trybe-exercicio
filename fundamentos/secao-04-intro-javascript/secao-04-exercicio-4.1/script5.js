let xadrez = "Cavalo"

switch (xadrez.toLowerCase()) {
    case "bispo": console.log("Bispo -> Apenas Diagonal");
        break;
    case "rei": console.log("Rei -> 1 quadrado para qualquer direção");
        break;
    case "rainha": console.log("Rainha -> Pode ir todos quadrados na diagonal, vertical e horizontal");
        break;
    case "cavalo": console.log("Cavalo -> Movimentos em L");
        break;
    default:
        console.log("erro peça inválida");
}
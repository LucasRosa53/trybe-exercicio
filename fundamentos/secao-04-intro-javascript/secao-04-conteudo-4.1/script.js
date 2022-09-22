// const nota = 50;

// if (nota >= 80) {
//     console.log("Parabéns, você foi aprovado(a)")

// } else if (nota < 80 && nota >= 60) {
//     console.log("Você esta na nossa lista de espera");

// } else {
//     console.log("você foi reprovado")
// }
let lista = "jhonson";

switch (lista) {
    case "aprovada":
        console.log("Você foi aprovado");
        break;

    case "lista":
        console.log("Você esta na lista de espera");
        break;

    case "reprovado":
        console.log("Você foi reprovado");
        break;

    default:
        console.log("Informação incorreta");

}
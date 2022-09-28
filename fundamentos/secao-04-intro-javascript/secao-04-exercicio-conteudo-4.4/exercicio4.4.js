// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',

// };
// info.recorrente = 'Sim';


// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',

// }

// info2.recorrente = 'Sim';

// for (let key in info) {

//     if (info[key] === 'Sim' && info2[key] === 'Sim') {
//         console.log('Ambos recorrentes');

//     } else {
//         console.log(info[key] + ' e ' + info2[key]);
//     }

// }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//             titulo: 'O Pior Dia de Todos',
//             autor: 'Daniela Kopsch',
//             editora: 'Tordesilhas',
//         },
//     ],
// };

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

// leitor.livrosFavoritos.push({
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
// })

// console.log(leitor);

// console.log('Quantidade de livros:', leitor.livrosFavoritos.length);


                                 

function palavra(pam) {
    for(index in pam) {
        if (pam[index] != pam[(pam.length - 1)] - index) {
            return false;
        }
    }
    return true;
} 








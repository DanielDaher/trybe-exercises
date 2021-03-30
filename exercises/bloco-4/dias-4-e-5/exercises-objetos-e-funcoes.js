//exercicio 1
/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
}; */

/*   console.log('Olá ' + info.personagem + '! Seja bem-vinda ao meu console.');
 */

//exercicio 2
/* console.log(info.recorrente);
 */
//exercicio 3
/* for (index in info) {
    console.log(index);
} */

//exercicio 4
/* for (let properties in info) {
    console.log(info[properties]);
} */

//exercicio 5
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, DEll's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};
for (let properties in info) {
    console.log(info[properties] + ' e ' + info2[properties]);
}
let lutador = {
    nome: 'Willams bruno',
    idade: 32,
    pais: 'Brazil',
    peso: 53,
    altura: 1.55
}

const fraseDoDia = {
    dia: 5,
    mes: 1,
    ano: 2023
}

const frase = "Eu sei que não se pode viver só de esperança,mas sem esperança não vale a pena viver.";

const autorFrase = "Hervey Milk";

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];

document.write("<h1>Informações</h1> </br>");

document.write(`Lutador: ${lutador.nome} </br>`);
document.write(`Nacionalidade: ${lutador.pais}</br>`);
document.write(`Idade: ${lutador.idade} anos </br>`);
document.write(`Peso: ${lutador.peso} kg </br>`);
document.write(`Altura: ${lutador.altura} m </br>`);


document.write(`<h1>Frase do Dia</h1></br>`);

document.write(fraseDoDia.dia + "/" + fraseDoDia.mes + "/" + fraseDoDia.ano + "</br>");
document.write(frase + "</br>");
document.write("Autor: " + autorFrase)

document.write('<h1>Array de Meses do Ano</h1> </br>');

// document.write(meses[0]+", "+meses[1]+", "+meses[2]+ ", "+meses[3]+", ...</br>");

document.write(`${meses[0]}, ${meses[1]}, ${meses[2]}, ${meses[3]}, ...</br>`);


let game = {
    nome: 'League Of Legends - LOL',
    dev: 'Riot Games',
    ano: 2009
}

document.write('<h1>Objeto Jogo</h1></br>');

document.write('Jogo: ' + game.nome + "</br>");
document.write('Desenvolverdo do game: ' + game.dev + "</br>");
document.write("Ano do lançamento: "+ game.ano);





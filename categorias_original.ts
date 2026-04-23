const tela = require('readline-sync');

const idade:number = Number(tela.question('Informe a idade do aluno: '));
let classificacao:string

if(idade >= 5 && idade < 8) {
    classificacao = "Infantil A"
} else if (idade >= 8 && idade < 11) {
    classificacao = "Infantil B"
} else if (idade >= 11 && idade < 14) {
    classificacao = "Juvenil A"
} else if (idade >= 14 && idade < 18) {
    classificacao = "Juvenil B"
} else {
    classificacao = "Adulto"
}

console.log(`Aluno com idade ${idade}\nClassificacao: ${classificacao}`)

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const anoAtual = new Date().getFullYear();

rl.question('Em que ano você nasceu? ', (resposta) => {
  const anoNascimento = parseInt(resposta);
  const idade = anoAtual - anoNascimento;

  console.log(`\nSua idade é: ${idade} anos.`);

  if (idade >= 18) {
    console.log("✅ Você já atingiu a maioridade penal.");
  } else {
    console.log("❌ Você ainda não atingiu a maioridade penal.");
  }

  rl.close();
});

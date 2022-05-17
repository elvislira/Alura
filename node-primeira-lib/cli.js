import chalk from 'chalk';
import { pegaArquivo } from './index.js';
import validaURLs from './http-validacao.js';
 
const caminho = process.argv[2];
const opcao = process.argv[3];
 
async function processaTexto(caminhoDeArquivo, opcao) {
  const resultado = await pegaArquivo(caminhoDeArquivo);
 
  if (opcao === 'validar') {
    console.log(chalk.yellow('Links validados: '), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow('Lista de links: '), resultado);
  }
}
 
processaTexto(caminho, opcao);

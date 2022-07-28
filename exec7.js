const rl = require('readline-sync');
const fs = require('fs').promises;

const whatArchive = rl.question('Qual arquivo você deseja utilizar ? ')

const main = async () => {
  try {
    const conteudo = await fs.readFile(`./${whatArchive}`, 'utf8')
    const whatReplace = rl.question('Qual palavra deseja substituir')
    const novaPalavra = rl.question('Digite a nova palavra')
    const newConteudo = conteudo.replaceAll(whatReplace, novaPalavra)
    console.log(newConteudo);
    const destino = rl.question('Qual o nome do arquivo de destino')
    await fs.writeFile(`./${destino}`, newConteudo)

  } catch (err) {
    console.log(err.message)
  }

}

main()
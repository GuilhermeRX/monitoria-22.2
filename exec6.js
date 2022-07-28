const rl = require('readline-sync');
const fs = require('fs').promises;


const whatArchive = rl.question('Qual arquivo você deseja ler ? ')

fs.readFile(`./${whatArchive}`, 'utf8')
  .then((data) => console.log(data))
  .catch(() => console.log('Arquivo não existe'));

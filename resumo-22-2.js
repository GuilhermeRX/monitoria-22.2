const fs = require('fs')
// const fs = require('fs').promises

// 3 formas para ler um arquivo

// Sincrono 
fs.readFileSync('caminhoDoArquivo', 'utf8')

// Assincrono com callbacks
fs.readFile('./simpsons.json', 'encode', (err, data) => { })

// Assincrono com promisses
const fsPromise = async () => {
  const promise = await fs.readFile('caminhoDoArquivo', 'encode');
  console.log(promise);
}

// ----------------------------------------------------------------------------------

// Escrevendo em um arquivo
fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

// ----------------------------------------------------------------------------------
// criando uma nova promise.

const p = new Promise((resolve, reject) => {
  // Aqui é onde vamos realizar a lógica que precisamos
  // para "tentar cumprir" a promessa
});

// ------------------------------------------------------------------------------------

// recebe um array de promises e retorna uma unica promise.
Promise.all([])


const main = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    const condition = typeof n1 === 'number' && typeof n2 === 'number' && typeof n3 === 'number'
    if (!condition) reject(new Error('Informe apenas números'));
    const result = (n1 + n2) * n3

    if (result < 50) reject(new Error('Valor muito baixo'))
    resolve(result);
  })
  return promise
}


main(1, 2, 50)
async function res() {
  const result = await main(1, 2, 50)
  return result
}

try {
  res().then((data) => console.log(data))
} catch (err) {
  console.log(err.message)
}
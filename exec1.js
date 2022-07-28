const main = (n1, n2, n3) => {
  const promisse = new Promise((resolve, reject) => {
    const condition = typeof n1 === 'number' && typeof n2 === 'number' && typeof n3 === 'number'
    if(!condition) reject(new Error('Informe apenas números"'))
    resolve(n1 + n2 + n3)
  })
  return promisse;
}

main(1,2,'a')
.then((result) => console.log(result))
.catch((error) => console.log(error.message))
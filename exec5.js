const fs = require('fs').promises

const arrString = ['oi', 'ola', 'tudobem']

const write = async (str) => {
  await fs.writeFile(`./${str}.json`, str)
  return str
}

const escrevendo = arrString.map((str) => write(str))

Promise.all(escrevendo).then((data) => console.log(data))



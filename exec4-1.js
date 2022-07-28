const fs = require('fs').promises

const readArchive = async () => {
  const persons = await fs.readFile('./simpsonFamily.json', 'utf8')
  return JSON.parse(persons);
}

const formatPersons = async () => {
  const persons = await readArchive();
  persons.map((obj) => console.log(`${obj.id} - ${obj.name}`))
}

const findById = (id) => {
  const promise = new Promise(async (resolve, reject) => {
    const persons = await readArchive()
    const filter = persons.filter((obj) => obj.id === id.toString())
    if (filter.length === 0) reject(new Error('id não encontrado'))
    resolve(filter[0])
  })

  return promise;
}

const removePerson = async (id) => {
  const persons = await readArchive();
  const filterPersons = persons.filter((obj) => obj.id !== id.toString())
  const format = JSON.stringify(filterPersons);
  await fs.writeFile('./simpsons.json', format)
  console.log('Person retirado');
}

const superFamily = async () => {
  const persons = await readArchive();
  const filterPersons = persons.filter((obj) => obj.id <= '4')
  const format = JSON.stringify(filterPersons);
  await fs.writeFile('./simpsonFamily.json', format)
  console.log('Arquivo criado com sucesso');
}

const replacePerson = async (firstName, secondName) => {
  const persons = await readArchive();
  const index = persons.findIndex((person) => person.name === firstName)
  persons[index].name = secondName
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(persons))
  console.log('Personagem editado com sucesso')
}

const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

const readPersons = async () => {
  // fs síncrono - tem um terceiro parâmetro que é uma callback
  // onde você recebe err e data

  // fs.readFile('./simpsons.json', 'utf8', (err, data) => {
  //   if(err) return console.log(`${err.message}`);
  //   console.log(data);
  // })
  try {
    const persons = await fs.readFile('./simpsons.json', 'utf8')
    return persons;
  } catch (err) {
    console.log(err.message)
  }

}

const formatPersons = async () => {
  const persons = await readPersons();
  const personsToJson = JSON.parse(persons);
  personsToJson.map((person) => console.log(`${person.id} - ${person.name}`))
}

const editPersons = async () => {
  const persons = JSON.parse(await readPersons());
  const filter = persons.filter((person) => person.id !== '10' && person.id !== '6')
  await fs.writeFile('./simpsons.json', JSON.stringify(filter))
  readPersons()
}

const createArchive = async () => {
  const persons = JSON.parse(await readPersons());
  const filter = persons.filter((person) => person.id <= 4)
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(filter));
}


const createPerson = async (name) => {
  const persons = JSON.parse(await fs.readFile('./simpsonsFamily.json', 'utf8'))
  const newPerson = {
    id: (persons.length + 1).toString(),
    name,
  }
  persons.push(newPerson);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(persons))
}

const replacePerson = async (name, newName) => {
  const persons = JSON.parse(await fs.readFile('./simpsonsFamily.json', 'utf-8'))
  const index = persons.findIndex((person) => person.name === name)
  const newPerson = {
    id: (index + 1).toString(),
    name: newName,
  }
  persons.splice(index, 1, newPerson)
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(persons))
}

replacePerson('Guilherme', 'Troquei')
const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/";

async function fetchPerson(url) {
  return await fetch(url).then(res => {
    return res.json();
  });
}

async function printNames() {
  console.log("Before");
  const person1 = fetchPerson(URL + "1");
  const person2 = fetchPerson(URL + "2");
  await (await Promise.all([person1, person2])).forEach(element =>{
      console.log(element.name)
  })
  console.log("After all");
}

printNames();

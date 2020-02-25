const fetch = require("node-fetch");

//Sequential
const URL = "https://swapi.co/api/people/";
async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  try {
    const n = await fetch(URL + id).then(res => res.json());
    const f = await fetch(n.films[0]).then(res => res.json());
    const s = await fetch(f.species[0]).then(res => res.json());
    const p = await fetch(s.homeworld).then(res => res.json());
    return console.log(
      `Name: ${n.name}\nTitle: ${f.title}\nSpecie: ${s.name}\nPlanet: ${p.name}`
    );
  } catch (err) {
    console.log(err);
  }
}

//parallel fra video med lars
async function parallel() {
    const promise1 = fetch("https://swapi.co/api/people/2/").then(r => r.json());
    const promise2 = fetch("https://swapi.co/api/people/3/").then(r => r.json());
    const res1 = await promise1;
    const res2 = await promise2;
    console.log(res1);
    console.log(res2);
  }

//husk at man ikke kan køre funktionen direkte når man anvender async - derfor der er lavet en ny til test
async function test() {
  await getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
  await parallel()
}

test();



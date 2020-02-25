const fetch = require("node-fetch");

const URL = "https://swapi.co/api/people/";

const getPlanetforFirstSpeciesInFirstMovieForPerson = id =>
  new Promise((resolve, reject) => {
    fetch(URL + id)
      .then(response => {
        if (!response.ok) {
          reject("Network response not ok");
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then(data => {
        resolve(console.log('Name:', data.name));
        fetch(data.films[0])
          .then(response => {
            return response.json();
          })
          .then(data => {
            resolve(console.log('First film:', data.title));
            fetch(data.species[0])
              .then(response => {
                return response.json();
              })
              .then(data => {
                resolve(console.log('First species:', data.name));
                fetch(data.homeworld)
                  .then(response => {
                    return response.json();
                  })
                  .then(data => {
                    return resolve(console.log('Homeworld for Specie:', data.name));
                  });
              });
          });
      });
  });

getPlanetforFirstSpeciesInFirstMovieForPerson(1);

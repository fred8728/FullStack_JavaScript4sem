const express = require("express");
const app = express();
const gju = require("geojson-utils");
const { gameArea, players } = require("./gameData");

app.get("/", (req, res) => res.send("Geo Demo!"));
app.listen(3000, () => console.log("Example app listening on port 3000!"));

app.get("/geoapi/isuserinarea/:lon/:lat", (request, response) => {
  const longitude = request.params["lon"];
  const latitude = request.params["lat"];

  const inArea = gju.pointInPolygon(
    { type: "Point", coordinates: [longitude, latitude] },
    gameArea
  );

  if (inArea) {
    response.send({
      status: true,
      msg: " Point was inside the tested polygon",
    });
  } else {
    response.send({
      status: false,
      msg: " Point was NOT inside the tested polygon",
    });
  }
});

app.get("/geoapi/findNearbyPlayers/:lon/:lat/:rad", (request, response) => {
  const longitude = request.params.lon
  const latitude = request.params.lat
  const radius = request.params.rad

  var center = {
      type: "Polygon",
      coordinates: [longitude, latitude],
    },
    rad = 100;

  const result = [];

  for (let i in players) {
    if (gju.geometryWithinRadius(players[i].geometry, center, radius)) {
      result.push(players[i]);
    }
  }
  response.send(result);
});

app.get("/geoapi/distanceToUser/:lon/:lat/:username", (request, response) => {
  var point = {
    type: "Point",
    coordinates: [request.params.lon, request.params.lat],
  }
  
  const username = request.params.username
  const player = players.find(player => player.properties.name = username)

  if (player) {
    const distanceUser = gju.pointDistance(point, {
      type: "Point",
      coordinates: player.geometry.coordinates,
    });
    response.send({
      distanceUser,
      user: username
    });
  } else {
    response.status(404).send({
      msg: "User not found"
    });
  }
});

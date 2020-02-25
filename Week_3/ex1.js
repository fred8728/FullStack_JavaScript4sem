const fetch = require("node-fetch");
const crypto = require("crypto");

const makeSecureRandom = size =>
  new Promise((resolve, reject) => {
    crypto.randomBytes(size, function(err, buffer) {
      if (err) {
        reject(err);
      }
      let secureHex = buffer.toString("hex");
      let sh = { length: size, random: secureHex };
      resolve(sh);
    });
  });

async function asyncMetode() {
  const data1 = makeSecureRandom(48);
  const data2 = makeSecureRandom(40);
  const data3 = makeSecureRandom(32);
  const data4 = makeSecureRandom(24);
  const data5 = makeSecureRandom(16);
  const data6 = makeSecureRandom(8);
  const promises = [data1, data2, data3, data4, data5, data6];
  const results = await Promise.all(promises);
  results.forEach(result => console.log(result));
}

asyncMetode()

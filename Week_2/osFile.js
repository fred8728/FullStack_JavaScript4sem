
const os = require('os')

const osFile = () => {
    const data = {
        platform: os.platform,
        osType: os.type,
        freeMemory: os.freemem,
        totalMemory: os.totalmem,
        EOL: os.EOL
      }
      return data;
}

module.exports.osFile = osFile;
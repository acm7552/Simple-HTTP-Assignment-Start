// Server HW
const fs = require('fs'); // pull in the file system module

const sponge = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getGar = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(sponge);
  response.end();
};

module.exports.getGar = getGar;

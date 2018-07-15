const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // API routes
  fs.readdirSync( path.resolve('./server/routes/api' )).forEach((file) => {
    //console.log(file.substr(0, file.indexOf('.')));
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });

};

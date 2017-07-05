const path = require('path');
const fs = require('fs');

class Trips {
  findById(id) {
    let trips = JSON.parse(fs.readFileSync(path.join(__dirname, './trips.json'), {
      encoding: 'utf8'
    }));
    return trips.filter((trip) => trip["@id"] === id);
  }
}

//console.log(findById("http://irail.be/connections/8885001/20170705/IC1909"));

export default Trips;

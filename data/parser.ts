const path = require('path');
const fs = require('fs');

export class Parser {
  parseRaw(raw) {
    const conn = raw.connection;
    const res = {raw: raw, data: {}};
    res.data = {'labels': [], 'data': [] };
    const data = [{'label': 'avarage departure delay', 'data': [] }, {'label': 'avarage arrival delay', 'data': []},
      {'label': 'maximum departure delay', 'data': [] }, {'label': 'maximum arrival delay', 'data': [] },
      {'label': 'minimum departure delay', 'data': [] }, {'label': 'minimum arrival delay', 'data': [] }];

    for (let i = 0; i < conn.length; i++) {
      const dep = conn[i].departure.departureConnection;
      res.data['labels'].push(conn[i].departure.time);
      const dDelay = this.findById(dep)[0].departureDelay;
      data[0]['data'].push(parseInt(dDelay, 10));
      data[2]['data'].push(parseInt(dDelay, 10) + 20);
      data[4]['data'].push(parseInt(dDelay, 10) - 10);
      const arr = conn[i].arrival;
    }
    return res;
  }
  findById(id) {
    const trips = JSON.parse(fs.readFileSync(path.join(__dirname, './trips.json'), {
      encoding: 'utf8'
    }));
    return trips.filter((trip) => trip['@id'] === id);
  }
}

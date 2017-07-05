const path = require('path');
const trips = require('./trips.json');

export class Parser {
  parseRaw(raw) {
    const conn = raw.connection;
    const res = {raw: raw, data: {
      'labels': [], 
      'data': [] }
    };
    const data = [
      {'label': 'avarage departure delay', 'data': [] }, 
      {'label': 'avarage arrival delay', 'data': []},
      {'label': 'maximum departure delay', 'data': [] }, 
      {'label': 'maximum arrival delay', 'data': [] },
      {'label': 'minimum departure delay', 'data': [] }, 
      {'label': 'minimum arrival delay', 'data': [] }
    ];

    console.log(conn);
    for (let i = 0; i < conn.length; i++) {
      /*const dep = conn[i].departure.departureConnection;
      res.data['labels'].push(conn[i].departure.time);
      let finddDelay = this.findById(dep).departureDelay;
      const dDelay = finddDelay === undefined ? 0 : finddDelay;
      data[0].data.push(parseInt(dDelay, 10));
      data[2].data.push(parseInt(dDelay, 10) + 20);
      data[4].data.push(parseInt(dDelay, 10) - 10);
      const arr = conn[i].arrival;
      let findaDelay = this.findByArrivalStopAndTime(arr.stationinfo['@id'], arr.time);
      const aDelay = findaDelay === undefined ? 0 : findaDelay;
      data[1].data.push(parseInt(aDelay, 10));
      data[3].data.push(parseInt(aDelay, 10) + 20);
      data[5].data.push(parseInt(aDelay, 10) - 10);*/

      /* RANDOM DATA GENERATOR FOR DEMO LOOKS FANCY DOES NOTHING */
      const dep = conn[i].departure.departureConnection;
      res.data['labels'].push(conn[i].departure.time);
      let finddDelay = this.findById(dep).departureDelay;
      const dDelay = finddDelay === undefined ? 0 : finddDelay;
      data[0].data.push(Math.random() * 10);
      data[2].data.push(Math.random() * 10);
      data[4].data.push(Math.random() * 10);
      const arr = conn[i].arrival;
      let findaDelay = this.findByArrivalStopAndTime(arr.stationinfo['@id'], arr.time);
      const aDelay = findaDelay === undefined ? 0 : findaDelay;
      data[1].data.push(Math.random() * 10);
      data[3].data.push(Math.random() * 10);
      data[5].data.push(Math.random() * 10);
    }
    res.data.data = data;
    return res;
  }
  findById(id) {
    return trips.filter((trip) => trip['@id'] === id);
  }
  findByArrivalStopAndTime(arrivalStop, arrivalTime) {
    return trips.filter((trip) => {
      let date = new Date(trip.arrivalTime);
      let time = date.getTime();
      return trip.arrivalStop === arrivalStop && time === arrivalTime;
    })[0];
  }
}

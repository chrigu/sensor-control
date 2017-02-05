import axios from 'axios';
import uuidV4 from 'uuid/v4';

const API_BASE_URL = 'http://localhost:4200/api';
const SENSORS_ENDPOINT = '/sensors';

axios.defaults.baseURL = 'http://localhost:4200/api';

export const loadMeasurements = () => {
  return fetch(API_BASE_URL)
  .then(response => {
    return response.json();
  })
  .then(json => {
      return json.data.map((data) => {
        console.log(data);
        return data;
      });
  });
};

export const loadSensors = (sensor) => {

  return axios.get(SENSORS_ENDPOINT)
          .then(response => response.data)
};

export const addSensor = (sensor) => {

  sensor.id = uuidV4();

  let request = axios.create({
    headers: {'Content-Type': 'application/json'}
  });

  return request.post(SENSORS_ENDPOINT, sensor)
          .then(response => response.data)

  // request
  //   .post(SENSORS_ENDPOINT)
  //   .send(sensor)
  //   .set('Content-Type', 'application/json')
  //   .end((error, response) => {
  //     if (error) {
  //       //handle error
  //     } else {
  //       console.log(response);
  //       return response;
  //     }
  //   })

  // let request = new Request(SENSORS_ENDPOINT, {
  //   method: 'POST', 
  //   mode: 'no-cors',
  //   cache: 'no-cache',
  //   body: JSON.stringify( sensor ),
  //   headers: new Headers({
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   })
  // });


  // console.log(request)

  // return fetch(request)
  //   .then(response => {
  //     return response.json();
  //   })
  //   .then(json => {
  //     return json.data.map((data) => {
  //       console.log(data);
  //       return data;
  //     });
  //   });
};
import React, { PropTypes } from 'react';
import Sensor from './Sensor';

const SensorList = ({sensors}) => (
  <div className="col-md-12">
    <h2>Sensors</h2>
    <div className="sensors">
      {sensors.map(sensor => (
        <div key={sensor.id} className="sensor-wrappper">
          <Sensor sensor={sensor} />
        </div>
      ))}
      <div>
      </div>
    </div>
  </div>
);

SensorList.propTypes = {
  sensors: PropTypes.array.isRequired,
};

export default SensorList;
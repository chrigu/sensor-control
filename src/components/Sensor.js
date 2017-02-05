import React, { PropTypes } from 'react';

const Sensor = ({sensor}) => (
  <div className="sensor">
      <h3>{sensor.name}</h3>
      <div className="sensor-info">
        <p>{sensor.unit} {sensor.type}</p>
      </div>
 </div>
);

Sensor.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default Sensor;
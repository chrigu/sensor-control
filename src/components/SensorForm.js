import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addSensor } from '../actions/sensorAction';

const SensorForm = ({dispatch}) => {

  let name, type, unit, multiplier;

  return (
    <form onSubmit={e => {
          e.preventDefault();
          // if (!input.value.trim()) {
          let sensor = {
            name: name.value,
            type: type.value,
            unit: unit.value,
            multiplier: multiplier.value
          };
          dispatch(addSensor(sensor));
        }}>
      <div className="form-group">
        <label htmlFor="name">Sensor name</label>
          <input className="form-control" 
                 id="name" 
                 placeholder="e.g. temp01" 
                 type="text"
                 ref={node => { name = node; }}/>
      </div>
      <div className="form-group">
        <label htmlFor="type">Type</label>
          <input className="form-control" 
                 id="type" 
                 placeholder="temperature" 
                 type="text"
                 ref={node => { type = node; }}/>
      </div>
      <div className="form-group">
        <label htmlFor="type">Unit</label>
          <input className="form-control" 
                 id="type" 
                 placeholder="°C" 
                 type="text"
                 ref={node => { unit = node; }}/>
      </div>
      <div className="form-group">
        <label htmlFor="type">Multiplier</label>
          <input className="form-control" 
                 id="type" 
                 placeholder="0.1" 
                 type="text"
                 ref={node => { multiplier = node; }}/>
      </div>
      <input className="btn btn-default" type="submit" value="Submit" />
    </form>
  );
}

SensorForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(SensorForm);
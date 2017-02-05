import { Panel } from 'react-bootstrap';
import React, { PropTypes, Component } from 'react';
import { showSensorForm, hideSensorForm, loadSensors } from '../actions/sensorAction';

import { connect } from 'react-redux';
import SensorList from '../components/SensorList';
import SensorFormComponent from '../components/SensorForm';

export class SensorsPage extends Component {
  // constructor() {
  //   super();
  // }

  componentDidMount() {
    this.props.dispatch(loadSensors());
  }

  render() {
    const { sensors, dispatch } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" 
                    type="button" 
                    onClick={e => {
                      e.preventDefault();
                      if (sensors.showSensorForm) {
                        dispatch(hideSensorForm());
                      } else {
                        dispatch(showSensorForm());
                      }
                    }}>Add sensor</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Panel collapsible expanded={sensors.showSensorForm}>
              <SensorFormComponent />
            </Panel>
            <div className="collapse" id="sensor-form">
            
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SensorList sensors={sensors.sensors} />
          </div>
        </div>
      </div>
    );
  }
}

SensorsPage.propTypes = {
  sensors: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ sensors }) => ({
  sensors: sensors,
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(SensorsPage);
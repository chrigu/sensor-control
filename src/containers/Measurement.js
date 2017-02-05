import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {
  loadMeasurements
} from '../actions/measurementActions';
import TemperatureComponent from '../components/TemperatureComponent';

export class MeasurementsPage extends Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(searchMediaAction('rain'));
  }

  loadData() {
    this.props.dispatch(loadMeasurements());
  }

  render() {
    return (
      <div className="container-fluid">
        <TemperatureComponent />
        <button
            type="button"
            className="btn btn-primary"
            onClick={this.loadData}
          >Get some data</button>
      </div>
    );
  }
}

MeasurementsPage.propTypes = {
  measurements: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ measurements }) => ({
  measurements: measurements
});

/* connect method from react-router connects the component with redux store */
export default connect(
  mapStateToProps)(MeasurementsPage);
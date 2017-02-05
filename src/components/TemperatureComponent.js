import React, { PropTypes } from 'react';

const TemperatureComponent = ({ measurements }) => (
  <div className="col-md-6">
    <h2>Data</h2>
    <div className="selected-image">
      <div>
        <h6 className="title">Soem other</h6>
      </div>
    </div>
  </div>
);

// PhotosPage.propTypes = {
//   images: PropTypes.array.isRequired,
//   selectedImage: PropTypes.object,
//   onHandleSelectImage: PropTypes.func.isRequired
// };

export default TemperatureComponent;
import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
  <div className = 'WeatherExtraInfoCont'>
    <span className = 'WeatherExtraInfo'>{`Humedad: ${humidity} % - `}</span>
    <span className = 'WeatherExtraInfo'>{`Vientos: ${wind} wind`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;

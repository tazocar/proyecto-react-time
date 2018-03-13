import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
	<div>
   <span className = 'watherExtrainfo'>{`Humedad:${humidity} % -`}</span> 
   <span className = 'weatherExtrainfo'>{`Vientos:${wind} wind`}</span>
  </div>
)

WeatherExtraInfo.propTypes = {
	humidity : PropTypes.number.isRequired,
	wind : PropTypes.string.isRequired,
}

export default WeatherExtraInfo;
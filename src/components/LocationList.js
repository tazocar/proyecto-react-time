// componente funcional por eso no tiene {component}
import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './style.css';

const LocationList = ({cities, onSelectedLocation}) => {
  const handlerWeatherLocationClick = (city) =>{
    console.log('handlerWeatherLocationClick');
    onSelectedLocation(city);
  };
  const strToComponent = (cities) => (
    cities.map(city => (
      <WeatherLocation
        key = {city}
        city = {city}
        onWeatherLocationClick = {
          () =>
            handlerWeatherLocationClick(city)
        }
      />
    ))
  );
  return (
    <div className="locationList">
      {strToComponent(cities)}
      {/* <WeatherLocation city = {'Santiago,scl'}/>
    <WeatherLocation city = {'Bogotá,col'}/>
    <WeatherLocation city = {'Rio de Janeiro,br'}/>
    <WeatherLocation city = {'Buenos Aires,ar'}/> */}
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;

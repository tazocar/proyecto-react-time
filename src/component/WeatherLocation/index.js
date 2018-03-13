import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index.js';
/*import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../constant/weather.js';*/
import transformWeather from './../../services/transformWeather'
import './style.css';

const api_key = '9bfed3231341c46256bd60b3cf4e9009';
//const city = 'Santiago,scl';
const url = 'http://api.openweathermap.org/data/2.5/weather'

/*
const data1 = {
	temperature : 32,
	weatherState : SUN,
	humidity : 2,
	wind : '10 m/s',
}*/
/*
const data2 = {
  temperature : 10,
  weatherState : SNOW,
  humidity : 98,
  wind : '70 m/s',
}


const WeatherLocation = () => (
    <div>
      <Location city = {'Punta Arenas'}/>
      <WeatherData data = {data}/>
    </div>
)
*/

class WeatherLocation extends Component {
  constructor ({city}) {
    super();
    this.state = {
      city,
      data : null
    }
    console.log('constructor');
  }


  //handleUpdateClick = () => {
    /*this.setState ({
      city : 'Santiago',
      data : data2
    })*/
    
  //  console.log('Actualizado');
  //}

  componentWillMount(){
    //console.log('componentWillMount');
    const { city }  = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();

    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({data});
    })
  }
 /* componentDidMount(){
    console.log('componentDidMount');
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }*/
	render = () => {
    console.log('Render');
    const { onWeatherLocationClick } = this.props;
    const {city, data} = this.state;
    return(
      <div className='weatherLocation' onClick={
        onWeatherLocationClick}>
        <Location city = {city}/>
        { data !== null ? <WeatherData data = {data}/>
          : <CircularProgress size={60} thickness={7} />
        }
        
      </div>
      )
    }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick : PropTypes.func,
}


export default WeatherLocation;


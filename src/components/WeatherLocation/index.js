import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
import './style.css';

// import {CLOUD,
//   CLOUDY,
//   SUN,
//   RAIN,
//   SNOW,
//   WINDY
// } from './../../constant/weather';

const api_key = '5d8700d7f38831f87bd69f44431a2170';
// const city = 'Buenos Aires,ar';
const url = 'http://api.openweathermap.org/data/2.5/weather';

// const data1 = {
//   temperature: 10,
//   weatherState: SNOW,
//   humidity: 98,
//   wind: '70 m/s',
// };
// const data2 = {
//   temperature: 30,
//   weatherState: SUN,
//   humidity: 98,
//   wind: '70 m/s',
// };

// const WeatherLocation = () => (
//   <div>
//     <Location city = {`Santiago`}/>
//     <WeatherData data = {data}/>
//   </div>
// );

class WeatherLocation extends Component {
  constructor({city}) {
    super();
    // toma el estado en este punto del componente (estado inicial)
    this.state = {
      city,
      data: null
    };
    console.log('constructor');
  }
  // getWeatherState = (weather) => {
  //   return SUN;
  // }
  //
  // getData = (weather_data) => {
  //   const { humidity, temp } = weather_data.main;
  //   const { speed } = weather_data.wind;
  //   const weatherState = this.getWeatherState(this.weather);
  //
  //   const data = {
  //     humidity,
  //     temperature: temp,
  //     weatherState,
  //     wind: `${speed} m/s`,
  //   };
  //   return data;
  // }
  // handleUpdateClick = () => {
  //   fetch(api_weather).then(data => {
  //     console.log(data);
  //     return data.json();
  //   }).then(weather_data => {
  //     console.log(weather_data)
  //     const data = this.getData(weather_data);
  //     this.setState({ data });
  //   })
  //   // setiamos los valores de nuestro estado, simulando los datos
  //   // this.setState({
  //   //   data: data2
  //   // });
  //   console.log('Actulizado');
  // }
  componentWillMount() {
    console.log('componentWillMount');
    const { city } = this.state;
    const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
    fetch(api_weather).then(data => {
      console.log(data);
      return data.json();
    }).then(weather_data => {
      const data = transformWeather(weather_data);
      this.setState({ data });
    });
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
    return (
      <div className='weatherLocation' onClick={onWeatherLocationClick}>
        <Location city = {city}/>
        { data !== null ? <WeatherData data = {data}/>
          : <CircularProgress size={60} thickness={7} />
        }
      </div>
    );
  //   <div className = 'weatherLocation'>
  //     <Location city = {this.state.city}/>
  //     <WeatherData data = {this.state.data}/>
  //     <button onClick = {this.handleUpdateClick}>Actualizar</button>
  //   </div>
  // )
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
};

export default WeatherLocation;

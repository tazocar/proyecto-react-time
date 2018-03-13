import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../component/LocationList';

class LocationListContainer extends Component {
	
  handleSelectionLocation = (city) => {
   // this.setState({city});
    this.props.setCity(city);
  }

  render() {
    return(
      <LocationList
        cities = { this.props.cities }
        onSelectedLocation = { this.handleSelectionLocation}>
      </LocationList>
    )
  }
}
// esta función nos deja trabajar con las acciones
const mapDispacthToPropsActions = (dispatch) => ({
  setCity: value => dispatch(setCity(value))
});

// connect toma lo que estan haciendo las dos funcionesy lo lleva a app
export default connect(null, mapDispacthToPropsActions)(LocationListContainer);

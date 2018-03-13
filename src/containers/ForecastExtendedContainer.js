import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastExtended from './../component/ForecastExtended';


class ForecastExtendedContainer extends Component {
	render() {
    return (
      this.props.city === null ? null : <ForecastExtended city = { this.props.city }>
      </ForecastExtended>
    )             
	}
}
const mapStateProps = (state) => ({
  city : state.city
})

export default connect(mapStateProps, null)(
  ForecastExtendedContainer);

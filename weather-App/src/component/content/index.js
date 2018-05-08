
import './content.scss';
import React from 'react';
import {connect} from 'react-redux';
import DayForcast from '../day-weather/index';
import GetLocation from '../get-location/index';
import * as locationActions from  '../../action/find-location';

class Content extends React.Component {

  render() {
    return (
      <div>
        <h1>Find your Weather 2.0</h1>

        <div>
          <GetLocation
            onComplete={this.props.addLocation}
          />
        </div>

        <div className="location">
          {this.props.location.length === 1 ?
            <h1 className="location-name">{this.props.location[0].city}, {this.props.location[0].state}</h1>
            :
            undefined
          }
        </div>

        <div className="days">
          {this.props.location.length === 1 ?
            this.props.location[0].simpleforecast.forecastday.map((item, idx) =>
              <div className="day-obj" key={idx}>
                <DayForcast
                  weatherItem={item}
                  weatherText={this.props.location[0].txt_forecast.forecastday[idx]}
                />
              </div>)
            :
            undefined
          }
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  addLocation : search => dispatch(locationActions.addLocationAction(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

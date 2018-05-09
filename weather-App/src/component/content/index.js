
import './content.scss';
import React from 'react';
import {connect} from 'react-redux';
import DayForcast from '../day-weather/index';
import WeekForcast from '../week-forcast/index';
import GetLocation from '../get-location/index';
import * as locationActions from  '../../action/find-location';

class Content extends React.Component {

  render() {
    return (
      <div className="main">
        <header>Find your Weather 2.0</header>

        <div className="name-search">
          <div className={this.props.location.length === 1 ? 'input-area' : 'start-area'}>
            <GetLocation
              onComplete={this.props.addLocation}
            />
          </div>

          {/* for location */}
          <div className="location">
            {this.props.location.length === 1 ?
              <h1 className="location-name">{this.props.location[0].city}, {this.props.location[0].state}</h1>
              :
              undefined
            }
          </div>
        </div>


        {/* for week forcast */}
        <div className="week-forcast">
          {this.props.location.length === 1 ?
            this.props.location[0].txt_forecast.forecastday.map((item, idx) =>
              <React.Fragment key={idx}>
                <WeekForcast
                  weekItem={item}
                />
              </React.Fragment>)
            :
            undefined
          }
        </div>

        {/* for days */}
        <div className="days">
          {this.props.location.length === 1 ?
            this.props.location[0].simpleforecast.forecastday.map((item, idx) =>
              <React.Fragment key={idx}>
                <DayForcast
                  weatherItem={item}
                  weatherText={this.props.location[0].txt_forecast.forecastday[idx]}
                />
              </React.Fragment>)
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

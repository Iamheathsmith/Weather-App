import React from 'react';
import './day-item.scss';

class DayWeather extends React.Component {

  render() {
    return (
      <div className="day-item">

        <img src={this.props.weatherItem.icon_url}></img>
        <div>{this.props.weatherItem.date.weekday} {this.props.weatherItem.date.monthname},  {this.props.weatherItem.date.day}</div>
        <div>Conditions: {this.props.weatherItem.conditions}</div>
        <div>High: {this.props.weatherItem.high.fahrenheit}</div>
        <div>Low: {this.props.weatherItem.low.fahrenheit}</div>
        <div>Wind: {this.props.weatherItem.avewind.mph} MPH from the {this.props.weatherItem.avewind.dir}</div>

        {this.props.weatherItem.qpf_allday.in !== 0 ?
          <React.Fragment>
            <div>Total Rain: {this.props.weatherItem.qpf_allday.in} inches</div>
            <div>AM: {this.props.weatherItem.qpf_day.in} inches</div>
            <div>PM: {this.props.weatherItem.qpf_night.in} inches</div>
          </React.Fragment>
          :
          undefined
        }


        <div>Humidity: {this.props.weatherItem.avehumidity}</div>
        <div>{this.props.weatherText.fcttext}</div>
      </div>
    );
  }
}

export default DayWeather;

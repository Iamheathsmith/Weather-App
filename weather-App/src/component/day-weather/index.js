import React from 'react';
import './day-item.scss';

class DayWeather extends React.Component {

  render() {
    return (
      <div className="day-item">
        <section>
          <div className="day-day">{this.props.weatherItem.date.weekday} {this.props.weatherItem.date.monthname},  {this.props.weatherItem.date.day}</div>
          <img className="image" src={this.props.weatherItem.icon_url}></img>
          <div className="temps"><p className="high">{this.props.weatherItem.high.fahrenheit}</p> / <p className="low">{this.props.weatherItem.low.fahrenheit}</p></div>
          <div className="humidity">Humidity: {this.props.weatherItem.avehumidity}%</div>
          <div className="conditions">{this.props.weatherItem.conditions}</div>
          <div className="wind">{this.props.weatherItem.avewind.mph} MPH {this.props.weatherItem.avewind.dir}</div>
        </section>

        {this.props.weatherItem.qpf_allday.in !== 0 ?
          <React.Fragment>
            <div className="rain-holder"><p className="rain-total">Rain: {this.props.weatherItem.qpf_allday.in} IN</p><p className="rain-morning">AM: {this.props.weatherItem.qpf_day.in} / PM: {this.props.weatherItem.qpf_night.in}</p></div>
          </React.Fragment>
          :
          undefined
        }


        <div className="saying">{this.props.weatherText.fcttext}</div>
      </div>
    );
  }
}

export default DayWeather;

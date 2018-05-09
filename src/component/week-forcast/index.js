import React from 'react';
import './week-item.scss';

class WeekWeather extends React.Component {

  render() {
    return (
      <div className="week-item">
        <div className="day-week">{this.props.weekItem.title}</div>
        <img className="image-week" src={this.props.weekItem.icon_url}></img>
        <div className="chance-of-rain">Rain: {this.props.weekItem.pop}%</div>
        <div className="saying-week">{this.props.weekItem.fcttext}</div>

      </div>
    );
  }
}

export default WeekWeather;

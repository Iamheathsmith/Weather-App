import React from 'react';
import './input-area.scss';
import {connect} from 'react-redux';

class GetLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      state: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.state === '') {
      alert('need to have state/county code');
      return false;
    }
    if (this.state.city === '') {
      alert('need to have city to search');
      return false;
    }
    this.props.onComplete(this.state)
      .then(() => this.setState({
        city: '',
        state: '',
      }))
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <React.Fragment>
        <form
          className="input-city"
          onSubmit={this.handleSubmit}
          noValidate>

          <input
            type="text"
            pattern="[a-zA-Z]{1,16}" required
            autoComplete="off"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}/>

          <input
            type="text"
            maxLength="2"
            pattern="^[a-zA-Z]{2}$" required
            autoComplete="off"
            name="state"
            placeholder="State/County Code"
            value={this.state.state}
            onChange={this.handleChange}/>

          <button className={this.props.location.length === 1 ? 'go-btn' : 'go-btn-before'}type="submit">Get Weather</button>
        </form>
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => ({
  location: state.location,
});

// export default GetLocation;

export default connect(mapStateToProps, null)(GetLocation);

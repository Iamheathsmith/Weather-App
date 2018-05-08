import React from 'react';
import './input-area.scss';

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
            autoComplete="off"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}/>

          <input
            type="text"
            autoComplete="off"
            name="state"
            placeholder="State"
            value={this.state.state}
            onChange={this.handleChange}/>

          <button className="go-btn" type="submit">Get Weather</button>
        </form>
      </React.Fragment>
    );
  }
}

export default GetLocation;

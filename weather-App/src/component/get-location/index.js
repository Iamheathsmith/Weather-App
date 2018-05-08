import React from 'react';
// import './add-user-form.scss';

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
      <div>
        <form
          className="lowfare-form generic-form"
          onSubmit={this.handleSubmit}
          noValidate>

          <input
            type="text"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleChange}/>

          <input
            type="text"
            name="state"
            placeholder="State"
            value={this.state.state}
            onChange={this.handleChange}/>

          <button className="lowfare-btn" type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

export default GetLocation;

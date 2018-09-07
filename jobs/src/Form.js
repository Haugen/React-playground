import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, job } = this.state;

    return (
      <form className="form-inline">
          <div className="form-group mr-4">
              <label className="mr-2">Name</label>
              <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={this.handleChange} />
          </div>
          <div className="form-group mr-4">
              <label className="mr-2">Job</label>
              <input
                  type="text"
                  name="job"
                  className="form-control"
                  value={job}
                  onChange={this.handleChange}/>
          </div>
          <input
              type="button"
              value="Submit"
              className="btn btn-primary"
              onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;

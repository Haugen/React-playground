import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  formatCount() {
    const value = this.state.value;
    return value === 0 ? "Zero" : value;
  }

  badgeClasses() {
    let classes = "badge mr-4 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = increment => {
    this.setState({ value: this.state.value + increment });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-8 offset-sm-2">
            <h2>Counter #{this.props.id}</h2>
            <span className={this.badgeClasses()}>{this.formatCount()}</span>
            <button
              onClick={() => this.handleIncrement(5)}
              className="btn btn-primary"
            >
              Test
            </button>
            {this.props.children}
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;

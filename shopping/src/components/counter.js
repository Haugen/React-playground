import React, { Component } from "react";

class Counter extends Component {
  badgeClasses() {
    let classes = "badge mr-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div className="counter col-12 col-md-6 col-lg-4">
        <h4>Counter #{this.props.counter.id}</h4>
        <span className={this.badgeClasses()}>{this.props.counter.value}</span>
        <button
          onClick={() => this.props.onChange(this.props.counter, "minus")}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onChange(this.props.counter, "plus")}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";

class NavBar extends Component {
  totalCounters = () => {
    const total = this.props.counters.length;
    return total;
  };

  totalNumbers = () => {
    let total = 0;
    // Go through each counter and add its value to total.
    for (let counter in this.props.counters) {
      total += this.props.counters[counter].value;
    }
    return total;
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          {this.totalCounters()} counters with {this.totalNumbers()} total
          counts.
        </span>
      </nav>
    );
  }
}

export default NavBar;

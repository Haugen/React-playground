import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const buttonClasses = "btn mr-4 mb-4 ";

    return (
      <div>
        <button
          onClick={() => this.props.onNewCounter()}
          className={buttonClasses + "btn-primary"}
        >
          Add new counter
        </button>

        <button
          onClick={() => this.props.onReset()}
          className={buttonClasses + "btn-secondary"}
        >
          Reset
        </button>

        <button
          onClick={() => this.props.onDeleteAll()}
          className={buttonClasses + "btn-danger"}
        >
          Delete all counters!
        </button>

        <div className="row mt-4">
          {this.props.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.props.onDelete}
              onChange={this.props.onChange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;

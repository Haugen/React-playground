import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 5 }
    ]
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} id={counter.id} value={counter.value}>
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

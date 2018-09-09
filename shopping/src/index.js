import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ],
    totalCount: 0
  };

  handleChange = (counter, operator) => {
    // Copy the states counters and add them to a constans.
    const counters = [...this.state.counters];
    // Find the index of the counter that is referenced.
    const index = counters.indexOf(counter);
    // Copy the referenced counter into its place in the states counters.
    counters[index] = { ...counter };
    // Add or subtract one based on referenced operator from Counter Component.
    if (operator === "plus") {
      counters[index].value++;
    } else if (operator === "minus" && counters[index].value > 0) {
      counters[index].value--;
    }
    // Replace the whole state with our new counters where the referenced
    // counter has been updated.
    this.setState({ counters });
  };

  handleDelete = id => {
    // Get all the counters except the referenced ID.
    const counters = this.state.counters.filter(c => c.id !== id);
    // Set new state with the referenced counter now removed.
    this.setState({ counters });
  };

  handleReset = () => {
    // Go through the counters from the state and set each counters value to 0.
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDeleteAll = () => {
    this.setState({ counters: [] });
  };

  handleNewCounter = () => {
    // Get the currents counters from the state.
    const counters = this.state.counters;
    // Find the last item's ID and add one to it. If there are no counters,
    // set ID to 1.
    const newId =
      counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
    // Add a new counter with a new, incremented ID to counters.
    counters.push({ id: newId, value: 0 });
    // Set the state with the new counter added.
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <main className="container mt-5">
          <Counters
            counters={this.state.counters}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onDeleteAll={this.handleDeleteAll}
            onNewCounter={this.handleNewCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

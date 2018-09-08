import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/counters";

class App extends React.Component {
  render() {
    return <Counters />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

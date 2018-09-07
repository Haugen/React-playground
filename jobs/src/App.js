import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Results from <a href="https://www.taniarascia.com/getting-started-with-react/">Tania Rascia's tutorial</a></h2>
          <p>Adding and deleting items from a list. Try it out!</p>
          <Table
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
          <Form handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;

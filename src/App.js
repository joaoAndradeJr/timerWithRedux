import React, { Component } from 'react';
import Selectors from './components/Selectors';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <main>
        <Selectors />
        <Timer />
      </main>
    );
  }
}

export default App;
